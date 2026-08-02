from pathlib import Path
import re

path = Path("index.html")
text = path.read_text(encoding="utf-8")
original = text


def replace_once(old: str, new: str, label: str) -> None:
    global text
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"{label}: expected exactly one match, found {count}")
    text = text.replace(old, new, 1)


save_pattern = re.compile(r"const SaveSystem=\{MAX_SLOTS:5,.*?\};\n\nclass Game\{", re.S)
save_replacement = """const SAVE_VERSION=1;
const SaveSystem={
MAX_SLOTS:5,
_read(key){try{const raw=localStorage.getItem(key);if(!raw)return{};const parsed=JSON.parse(raw);return parsed&&typeof parsed==='object'?parsed:{};}catch(e){console.warn(`[SaveSystem] Failed to read ${key}`,e);return{};}},
_write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){console.error(`[SaveSystem] Failed to write ${key}`,e);return false;}},
getSaves(){return this._read('dp_saves');},
setSaves(s){return this._write('dp_saves',s);},
getPerm(){return this._read('dp_perm');},
setPerm(p){return this._write('dp_perm',p);},
normalize(data){if(!data||typeof data!=='object')return null;const defaults={hp:0,dmg:0,spd:0,bow:0,dodge:0,vamp:0};return{...data,version:SAVE_VERSION,boughtOnce:data.boughtOnce&&typeof data.boughtOnce==='object'?data.boughtOnce:{},ups:{...defaults,...(data.ups&&typeof data.ups==='object'?data.ups:{})},playerData:data.playerData&&typeof data.playerData==='object'?data.playerData:{}};},
save(slot,data){const s=this.getSaves(),normalized=this.normalize({...data,timestamp:Date.now()});if(!normalized)return false;s[slot]=normalized;return this.setSaves(s);},
load(slot){const s=this.getSaves(),normalized=this.normalize(s[slot]);if(normalized&&s[slot]&&s[slot].version!==SAVE_VERSION){s[slot]=normalized;this.setSaves(s);}return normalized;},
del(slot){const s=this.getSaves();delete s[slot];return this.setSaves(s);},
getSlotList(){const s=this.getSaves();const list=[];for(let i=1;i<=this.MAX_SLOTS;i++){list.push({slot:i,data:this.normalize(s[i])});}return list;}
};

class Game{"""
text, count = save_pattern.subn(save_replacement, text, count=1)
if count != 1:
    raise RuntimeError(f"SaveSystem replacement: expected one match, found {count}")

replace_once(
    "const scaleFactor=Math.pow(1.35,cycle);",
    "const scaleFactor=1+Math.max(0,cycle)*0.18;",
    "enemy scaling",
)

replace_once(
    "this.player.vx=0;this.player.vy=0;this.player.hp=this.player.mhp;this.player.inv=0;",
    "this.player.vx=0;this.player.vy=0;this.player.hp=U.clamp(this.player.hp??this.player.mhp,0,this.player.mhp);this.player.inv=0;",
    "level health preservation",
)

replace_once(
    "selectSlot(slot){document.getElementById('SaveMenu').classList.remove('active');this.currentSlot=slot;if(this.saveMenuMode==='load'){const data=SaveSystem.load(slot);if(data){this.loadFromSave(data);}else{this.startFresh();}}else{this.startFresh();}}",
    "selectSlot(slot){const data=SaveSystem.load(slot);if(this.saveMenuMode==='new'&&data&&!confirm(`Overwrite save slot ${slot}? This cannot be undone.`))return;document.getElementById('SaveMenu').classList.remove('active');this.currentSlot=slot;if(this.saveMenuMode==='load'){if(data){this.loadFromSave(data);}else{this.startFresh();}}else{this.startFresh();}}",
    "overwrite confirmation",
)

replace_once(
    "deleteSlot(slot){SaveSystem.del(slot);this.showSaveMenu();}",
    "deleteSlot(slot){if(!confirm(`Delete save slot ${slot}? This cannot be undone.`))return;SaveSystem.del(slot);this.showSaveMenu();}",
    "delete confirmation",
)

replace_once(
    "{id:'heal',name:'Elixir',icon:'✚',color:'#4d6',desc:'Restore all HP',cost:1,fn:()=>{p.hp=p.mhp;}},",
    "{id:'heal',name:'Elixir',icon:'✚',color:'#4d6',desc:'Restore 40% max HP',cost:3,dis:p.hp>=p.mhp,fn:()=>{p.hp=Math.min(p.mhp,p.hp+Math.ceil(p.mhp*.4));}},",
    "cell shop healing",
)

replace_once(
    "class Input{\nconstructor(){this.keys={};",
    "const GAME_KEYS=new Set(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp','KeyA','KeyD','KeyS','KeyW','Space','KeyJ','KeyZ','KeyK','KeyX','KeyL','KeyC','KeyQ','Tab','KeyF','KeyH','ShiftLeft','ShiftRight']);\nclass Input{\nconstructor(){this.keys={};",
    "game key allowlist",
)

replace_once(
    "window.addEventListener('keydown',e=>{this.keys[e.code]=true;e.preventDefault();});\nwindow.addEventListener('keyup',e=>{this.keys[e.code]=false;e.preventDefault();});",
    "window.addEventListener('keydown',e=>{this.keys[e.code]=true;const tag=e.target&&e.target.tagName,editable=tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||(e.target&&e.target.isContentEditable);if(!editable&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&GAME_KEYS.has(e.code))e.preventDefault();});\nwindow.addEventListener('keyup',e=>{this.keys[e.code]=false;const tag=e.target&&e.target.tagName,editable=tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||(e.target&&e.target.isContentEditable);if(!editable&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&GAME_KEYS.has(e.code))e.preventDefault();});",
    "keyboard event handling",
)

replace_once(
    "const G=new Game();G.start();",
    "const G=new Game();\ndocument.addEventListener('visibilitychange',()=>{if(document.hidden&&G.state==='playing'&&!G.paused)G.togglePause();});\nG.start();",
    "visibility pause",
)

# Preserve valid zero/false values when loading saves.
text, pd_count = re.subn(r"\b(pd\.[A-Za-z_][A-Za-z0-9_]*)\|\|", r"\1??", text)
if pd_count < 10:
    raise RuntimeError(f"load defaults: expected at least 10 playerData replacements, found {pd_count}")
for field in ("boughtOnce", "ups", "cells", "kills", "gold", "actualLvl"):
    text = text.replace(f"data.{field}||", f"data.{field}??")

if "Math.pow(1.35,cycle)" in text:
    raise RuntimeError("old exponential enemy scaling remains")
if "this.player.hp=this.player.mhp;this.player.inv=0;" in text:
    raise RuntimeError("old full-heal level transition remains")
if "const SAVE_VERSION=1;" not in text:
    raise RuntimeError("save version was not added")
if text == original:
    raise RuntimeError("patch made no changes")

path.write_text(text, encoding="utf-8")
print("Applied stability/save/balance patch to index.html")
