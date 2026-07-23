GAME_LEVELS.push(
{
name:"The Frozen Gauntlet",theme:'castle',bg1:'#050a15',bg2:'#0a1530',
build(){
const W=60,H=35,T=32;
const m=Array.from({length:H},()=>Array(W).fill(0));
for(let x=0;x<60;x++)m[0][x]=1;
for(let x=0;x<60;x++)m[1][x]=1;
for(let x=0;x<60;x++)m[2][x]=1;
for(let x=0;x<60;x++)m[3][x]=1;
for(let x=0;x<2;x++)m[4][x]=1;
for(let x=58;x<60;x++)m[4][x]=1;
for(let x=0;x<2;x++)m[5][x]=1;
for(let x=58;x<60;x++)m[5][x]=1;
for(let x=0;x<2;x++)m[6][x]=1;
for(let x=58;x<60;x++)m[6][x]=1;
for(let x=0;x<2;x++)m[7][x]=1;
for(let x=10;x<20;x++)m[7][x]=2;
for(let x=58;x<60;x++)m[7][x]=1;
for(let x=0;x<2;x++)m[8][x]=1;
for(let x=14;x<16;x++)m[8][x]=1;
for(let x=44;x<46;x++)m[8][x]=1;
for(let x=58;x<60;x++)m[8][x]=1;
for(let x=0;x<2;x++)m[9][x]=1;
for(let x=14;x<16;x++)m[9][x]=1;
for(let x=44;x<46;x++)m[9][x]=1;
for(let x=58;x<60;x++)m[9][x]=1;
for(let x=0;x<2;x++)m[10][x]=1;
for(let x=14;x<16;x++)m[10][x]=1;
for(let x=20;x<30;x++)m[10][x]=2;
for(let x=44;x<46;x++)m[10][x]=1;
for(let x=58;x<60;x++)m[10][x]=1;
for(let x=0;x<2;x++)m[11][x]=1;
for(let x=14;x<16;x++)m[11][x]=1;
for(let x=44;x<46;x++)m[11][x]=1;
for(let x=58;x<60;x++)m[11][x]=1;
for(let x=0;x<2;x++)m[12][x]=1;
for(let x=14;x<16;x++)m[12][x]=1;
for(let x=44;x<46;x++)m[12][x]=1;
for(let x=58;x<60;x++)m[12][x]=1;
for(let x=0;x<2;x++)m[13][x]=1;
for(let x=14;x<16;x++)m[13][x]=1;
for(let x=44;x<46;x++)m[13][x]=1;
for(let x=58;x<60;x++)m[13][x]=1;
for(let x=0;x<2;x++)m[14][x]=1;
for(let x=14;x<16;x++)m[14][x]=1;
for(let x=27;x<36;x++)m[14][x]=2;
for(let x=44;x<46;x++)m[14][x]=1;
for(let x=58;x<60;x++)m[14][x]=1;
for(let x=0;x<2;x++)m[15][x]=1;
for(let x=14;x<16;x++)m[15][x]=1;
for(let x=44;x<46;x++)m[15][x]=1;
for(let x=58;x<60;x++)m[15][x]=1;
for(let x=0;x<2;x++)m[16][x]=1;
for(let x=14;x<16;x++)m[16][x]=1;
for(let x=44;x<46;x++)m[16][x]=1;
for(let x=58;x<60;x++)m[16][x]=1;
for(let x=0;x<2;x++)m[17][x]=1;
for(let x=14;x<16;x++)m[17][x]=1;
for(let x=44;x<46;x++)m[17][x]=1;
for(let x=58;x<60;x++)m[17][x]=1;
for(let x=0;x<2;x++)m[18][x]=1;
for(let x=14;x<16;x++)m[18][x]=1;
for(let x=16;x<25;x++)m[18][x]=2;
for(let x=38;x<44;x++)m[18][x]=2;
for(let x=44;x<46;x++)m[18][x]=1;
for(let x=46;x<48;x++)m[18][x]=2;
for(let x=58;x<60;x++)m[18][x]=1;
for(let x=0;x<2;x++)m[19][x]=1;
for(let x=14;x<16;x++)m[19][x]=1;
for(let x=44;x<46;x++)m[19][x]=1;
for(let x=58;x<60;x++)m[19][x]=1;
for(let x=0;x<2;x++)m[20][x]=1;
for(let x=14;x<16;x++)m[20][x]=1;
for(let x=44;x<46;x++)m[20][x]=1;
for(let x=58;x<60;x++)m[20][x]=1;
for(let x=0;x<2;x++)m[21][x]=1;
for(let x=14;x<16;x++)m[21][x]=1;
for(let x=44;x<46;x++)m[21][x]=1;
for(let x=58;x<60;x++)m[21][x]=1;
for(let x=0;x<2;x++)m[22][x]=1;
for(let x=5;x<14;x++)m[22][x]=2;
for(let x=14;x<16;x++)m[22][x]=1;
for(let x=58;x<60;x++)m[22][x]=1;
for(let x=0;x<2;x++)m[23][x]=1;
for(let x=14;x<16;x++)m[23][x]=1;
for(let x=58;x<60;x++)m[23][x]=1;
for(let x=0;x<2;x++)m[24][x]=1;
for(let x=14;x<16;x++)m[24][x]=1;
for(let x=58;x<60;x++)m[24][x]=1;
for(let x=0;x<2;x++)m[25][x]=1;
for(let x=58;x<60;x++)m[25][x]=1;
for(let x=0;x<2;x++)m[26][x]=1;
for(let x=58;x<60;x++)m[26][x]=1;
for(let x=0;x<2;x++)m[27][x]=1;
for(let x=58;x<60;x++)m[27][x]=1;
for(let x=0;x<2;x++)m[28][x]=1;
for(let x=58;x<60;x++)m[28][x]=1;
for(let x=0;x<2;x++)m[29][x]=1;
for(let x=58;x<60;x++)m[29][x]=1;
for(let x=0;x<2;x++)m[30][x]=1;
for(let x=58;x<60;x++)m[30][x]=1;
for(let x=0;x<2;x++)m[31][x]=1;
for(let x=10;x<18;x++)m[31][x]=1;
for(let x=30;x<42;x++)m[31][x]=1;
for(let x=58;x<60;x++)m[31][x]=1;
for(let x=0;x<6;x++)m[32][x]=1;
for(let x=6;x<10;x++)m[32][x]=3;
for(let x=10;x<48;x++)m[32][x]=1;
for(let x=48;x<52;x++)m[32][x]=3;
for(let x=52;x<60;x++)m[32][x]=1;
for(let x=0;x<60;x++)m[33][x]=1;
for(let x=0;x<60;x++)m[34][x]=1;
// ---- HARDER GAUNTLET: recessed spike trenches across the main floor ----
const pit=(x0,x1)=>{for(let x=x0;x<x1;x++){m[31][x]=0;m[32][x]=3;}};
pit(19,24);pit(35,40);
// spiked shoulders flanking the trenches — a mistimed slide is punished
m[32][18]=3;m[32][24]=3;m[32][34]=3;m[32][40]=3;
// narrow icy stepping stones to cross each trench (slippery + tight)
for(let x=20;x<22;x++)m[29][x]=2;
for(let x=36;x<38;x++)m[29][x]=2;
// a mid crossing of small icy platforms over the left approach
for(let x=24;x<26;x++)m[24][x]=2;
for(let x=30;x<32;x++)m[22][x]=2;
// high archer perch above the center
for(let x=27;x<33;x++)m[6][x]=1;
for(let x=28;x<32;x++)m[5][x]=1;
return{tiles:m,w:W,h:H,ts:T};
},
enemies:[
{x:8,y:20,type:'zombie'},
{x:20,y:15,type:'skeleton'},
{x:35,y:11,type:'bat'},
{x:42,y:15,type:'zombie'},
{x:25,y:7,type:'skeleton'},
{x:15,y:4,type:'elite'},
// harder: archers command the perch & pit approaches, a caster harasses, more bodies on the ice
{x:29,y:4,type:'skeleton'},
{x:31,y:4,type:'skeleton'},
{x:24,y:23,type:'skeleton'},
{x:38,y:30,type:'caster'},
{x:44,y:20,type:'elite'},
{x:12,y:30,type:'bat'},
{x:48,y:30,type:'zombie'}
],
items:[
{x:12,y:20,type:'cell'},
{x:22,y:16,type:'health'},
{x:30,y:12,type:'gold'},
{x:40,y:16,type:'cell'},
{x:22,y:8,type:'health'},
{x:45,y:20,type:'cell'}
],
decos:[
{x:5,y:30,type:'torch'},
{x:20,y:30,type:'torch'},
{x:40,y:30,type:'torch'},
{x:55,y:30,type:'torch'},
{x:12,y:21,type:'chain'},
{x:35,y:13,type:'chain'},
{x:8,y:31,type:'icicle'},{x:22,y:31,type:'icicle'},{x:33,y:15,type:'icicle'},{x:48,y:31,type:'icicle'},{x:15,y:9,type:'icicle'}
],
iceOverlays:[
{x:10,y:31},{x:11,y:31},{x:12,y:31},{x:13,y:31},{x:14,y:31},{x:15,y:31},{x:16,y:31},{x:17,y:31},{x:30,y:31},{x:31,y:31},{x:32,y:31},{x:33,y:31},{x:34,y:31},{x:41,y:31},{x:16,y:18},{x:17,y:18},{x:18,y:18},{x:19,y:18},{x:20,y:18},{x:21,y:18},{x:22,y:18},{x:23,y:18},{x:24,y:18},{x:10,y:7},{x:11,y:7},{x:12,y:7},{x:13,y:7},{x:14,y:7},{x:15,y:7},{x:16,y:7},{x:17,y:7},{x:18,y:7},{x:19,y:7},{x:5,y:32},{x:4,y:32},
{x:20,y:29},{x:21,y:29},{x:36,y:29},{x:37,y:29},{x:24,y:24},{x:25,y:24},{x:30,y:22},{x:31,y:22},{x:27,y:6},{x:28,y:6},{x:29,y:6},{x:30,y:6},{x:31,y:6},{x:32,y:6}
],
// tempting low bridges over the spike trenches that collapse underfoot
crumbles:[
{x:20,y:31,w:2},
{x:36,y:31,w:2}
],
traps:[
{x:5,y:21,rotate:0,fireRate:100,projectileSpeed:8,damage:12},
{x:54,y:21,rotate:180,fireRate:120,projectileSpeed:8,damage:12},
{x:25,y:4,rotate:90,fireRate:90,projectileSpeed:7,damage:10},
{x:35,y:4,rotate:90,fireRate:80,projectileSpeed:7,damage:10},
{x:15,y:4,rotate:90,fireRate:130,projectileSpeed:9,damage:14},
{x:1,y:30,rotate:0,fireRate:150,projectileSpeed:7,damage:12},
{x:58,y:30,rotate:180,fireRate:150,projectileSpeed:7,damage:12},
{x:1,y:24,rotate:0,fireRate:170,projectileSpeed:7,damage:11}
],
mossWalls:[
{x:15,y:10,rotate:90},
{x:15,y:11,rotate:90},
{x:15,y:12,rotate:90},
{x:15,y:13,rotate:90},
{x:15,y:14,rotate:90},
{x:15,y:15,rotate:90},
{x:15,y:16,rotate:90},
{x:15,y:17,rotate:90},
{x:44,y:9,rotate:270},
{x:44,y:10,rotate:270},
{x:44,y:11,rotate:270},
{x:44,y:12,rotate:270},
{x:44,y:13,rotate:270},
{x:44,y:14,rotate:270},
{x:44,y:15,rotate:270}
],
spawn:{x:3,y:29},
portal:{x:55,y:29},
},
    {
                name: "The Toxic Sewers",
                theme: 'sewers',
                bg1: '#0a1510',
                bg2: '#0d2018',
                build() {
                    const W = 85,
                    H = 42,
                    T = 32;
                    const m = Array.from({
                        length: H
                    }, ()=>Array(W).fill(0));
                    for (let x = 0; x < W; x++) {
                        m[0][x] = 1; m[1][x] = 1; m[H-1][x] = 1; m[H-2][x] = 1;
                    }
                    for (let y = 0; y < H; y++) {
                        m[y][0] = 1; m[y][1] = 1; m[y][W-1] = 1; m[y][W-2] = 1;
                    }

                    // ---- UPPER LEVEL (y=2..14) ----
                    for (let x = 2; x < W-2; x++) m[14][x] = 1;

                    // Start area (top-right)
                    for (let y = 2; y < 14; y++) m[y][68] = 1;
                    m[11][68] = 0; m[12][68] = 0; m[13][68] = 0;
                    for (let x = 70; x < W-3; x++) m[8][x] = 2;
                    for (let x = 72; x < 78; x++) m[5][x] = 2;

                    // Upper corridor going left
                    for (let x = 50; x < 68; x++) m[9][x] = 2;
                    for (let x = 55; x < 64; x++) m[5][x] = 2;
                    for (let y = 2; y < 14; y++) m[y][49] = 1;
                    m[11][49] = 0; m[12][49] = 0; m[13][49] = 0;

                    // Upper-left rooms
                    for (let x = 35; x < 48; x++) m[9][x] = 2;
                    for (let x = 38; x < 45; x++) m[5][x] = 2;
                    for (let y = 2; y < 14; y++) m[y][34] = 1;
                    m[11][34] = 0; m[12][34] = 0; m[13][34] = 0;

                    // Far left upper
                    for (let x = 3; x < 34; x++) m[10][x] = 2;
                    for (let x = 5; x < 15; x++) m[6][x] = 2;
                    for (let x = 18; x < 28; x++) m[6][x] = 2;
                    // Shaft down from upper-left
                    m[14][10] = 0; m[14][11] = 0; m[14][12] = 0;

                    // ---- MIDDLE LEVEL (y=15..27) ----
                    for (let x = 2; x < W-2; x++) m[27][x] = 1;

                    // Sewer tunnels - winding
                    for (let x = 3; x < 20; x++) m[22][x] = 2;
                    for (let x = 8; x < 25; x++) m[18][x] = 2;
                    for (let x = 15; x < 35; x++) m[22][x] = 1;
                    m[22][18] = 0; m[22][19] = 0; m[22][20] = 0;
                    for (let x = 22; x < 38; x++) m[18][x] = 2;
                    for (let x = 25; x < 32; x++) m[15][x] = 2;

                    // Toxic pools (spikes represent toxic)
                    m[26][30] = 3; m[26][31] = 3; m[26][32] = 3; m[26][33] = 3;
                    m[26][45] = 3; m[26][46] = 3; m[26][47] = 3;

                    // Middle pipes
                    for (let y = 15; y < 27; y++) {
                        m[y][40] = 1; m[y][48] = 1;
                    }
                    m[24][40] = 0; m[25][40] = 0; m[26][40] = 0;
                    m[24][48] = 0; m[25][48] = 0; m[26][48] = 0;
                    for (let x = 41; x < 48; x++) m[20][x] = 2;
                    for (let x = 42; x < 47; x++) m[16][x] = 2;

                    // Right middle area
                    for (let x = 50; x < 65; x++) m[22][x] = 2;
                    for (let x = 55; x < 70; x++) m[18][x] = 2;
                    for (let x = 52; x < 60; x++) m[15][x] = 2;
                    for (let y = 15; y < 27; y++) m[y][70] = 1;
                    m[24][70] = 0; m[25][70] = 0; m[26][70] = 0;
                    for (let x = 72; x < 80; x++) m[20][x] = 2;

                    // Shaft down from middle-right
                    m[27][75] = 0; m[27][76] = 0; m[27][77] = 0;

                    // ---- LOWER LEVEL (y=28..40) ----
                    // Large flooded area
                    for (let x = 50; x < 80; x++) m[36][x] = 2;
                    for (let x = 55; x < 75; x++) m[32][x] = 2;
                    for (let x = 60; x < 72; x++) m[29][x] = 2;
                    // Toxic floor
                    for (let x = 52; x < 78; x++) m[39][x] = 3;

                    // Pipe system going left
                    for (let x = 20; x < 50; x++) m[35][x] = 1;
                    for (let x = 22; x < 30; x++) m[32][x] = 2;
                    for (let x = 32; x < 42; x++) m[32][x] = 2;
                    for (let x = 25; x < 38; x++) m[29][x] = 2;
                    m[35][28] = 0; m[35][29] = 0; m[35][30] = 0;

                    // Bottom left - exit area
                    for (let x = 3; x < 20; x++) m[35][x] = 2;
                    for (let x = 5; x < 15; x++) m[31][x] = 2;
                    for (let x = 8; x < 18; x++) m[28][x] = 2;
                    // Exit shaft going down-left
                    for (let x = 3; x < 8; x++) m[38][x] = 2;

                    return {
                        tiles: m,
                        w: W,
                        h: H,
                        ts: T
                    };
                },
                enemies: [{
                    x: 73,
                    y: 6,
                    type: 'zombie'
                },
                    {
                        x: 76,
                        y: 3,
                        type: 'bat'
                    },
                    {
                        x: 58,
                        y: 7,
                        type: 'zombie'
                    },
                    {
                        x: 62,
                        y: 3,
                        type: 'bat'
                    },
                    {
                        x: 54,
                        y: 7,
                        type: 'skeleton'
                    },
                    {
                        x: 40,
                        y: 7,
                        type: 'zombie'
                    },
                    {
                        x: 43,
                        y: 3,
                        type: 'bat'
                    },
                    {
                        x: 38,
                        y: 3,
                        type: 'zombie'
                    },
                    {
                        x: 22,
                        y: 4,
                        type: 'bat'
                    },
                    {
                        x: 10,
                        y: 4,
                        type: 'skeleton'
                    },
                    {
                        x: 8,
                        y: 8,
                        type: 'zombie'
                    },
                    {
                        x: 28,
                        y: 8,
                        type: 'zombie'
                    },
                    {
                        x: 12,
                        y: 20,
                        type: 'zombie'
                    },
                    {
                        x: 18,
                        y: 16,
                        type: 'bat'
                    },
                    {
                        x: 28,
                        y: 16,
                        type: 'skeleton'
                    },
                    {
                        x: 30,
                        y: 13,
                        type: 'bat'
                    },
                    {
                        x: 44,
                        y: 18,
                        type: 'bat'
                    },
                    {
                        x: 44,
                        y: 14,
                        type: 'skeleton'
                    },
                    {
                        x: 55,
                        y: 20,
                        type: 'zombie'
                    },
                    {
                        x: 60,
                        y: 16,
                        type: 'skeleton'
                    },
                    {
                        x: 65,
                        y: 13,
                        type: 'bat'
                    },
                    {
                        x: 74,
                        y: 18,
                        type: 'zombie'
                    },
                    {
                        x: 68,
                        y: 34,
                        type: 'zombie'
                    },
                    {
                        x: 72,
                        y: 30,
                        type: 'skeleton'
                    },
                    {
                        x: 62,
                        y: 27,
                        type: 'bat'
                    },
                    {
                        x: 65,
                        y: 30,
                        type: 'bat'
                    },
                    {
                        x: 35,
                        y: 30,
                        type: 'skeleton'
                    },
                    {
                        x: 28,
                        y: 27,
                        type: 'zombie'
                    },
                    {
                        x: 40,
                        y: 38,
                        type: 'zombie'
                    },
                    {
                        x: 45,
                        y: 38,
                        type: 'zombie'
                    },
                    {
                        x: 12,
                        y: 33,
                        type: 'elite'
                    },
                    {
                        x: 8,
                        y: 26,
                        type: 'skeleton'
                    },
                    {
                        x: 16,
                        y: 29,
                        type: 'bat'
                    },
                ],
                items: [{
                    x: 74,
                    y: 3,
                    type: 'cell'
                },
                    {
                        x: 60,
                        y: 3,
                        type: 'gold'
                    },
                    {
                        x: 42,
                        y: 3,
                        type: 'cell'
                    },
                    {
                        x: 12,
                        y: 4,
                        type: 'health'
                    },
                    {
                        x: 24,
                        y: 4,
                        type: 'cell'
                    },
                    {
                        x: 8,
                        y: 8,
                        type: 'gold'
                    },
                    {
                        x: 14,
                        y: 20,
                        type: 'cell'
                    },
                    {
                        x: 30,
                        y: 14,
                        type: 'health'
                    },
                    {
                        x: 44,
                        y: 14,
                        type: 'cell'
                    },
                    {
                        x: 58,
                        y: 14,
                        type: 'cell'
                    },
                    {
                        x: 76,
                        y: 18,
                        type: 'gold'
                    },
                    {
                        x: 70,
                        y: 30,
                        type: 'cell'
                    },
                    {
                        x: 64,
                        y: 27,
                        type: 'health'
                    },
                    {
                        x: 36,
                        y: 27,
                        type: 'cell'
                    },
                    {
                        x: 25,
                        y: 30,
                        type: 'gold'
                    },
                    {
                        x: 10,
                        y: 33,
                        type: 'health'
                    },
                    {
                        x: 5,
                        y: 36,
                        type: 'cell'
                    },
                    {
                        x: 15,
                        y: 26,
                        type: 'cell'
                    },
                ],
                decos: [{
                    x: 72,
                    y: 6,
                    type: 'torch'
                },
                    {
                        x: 60,
                        y: 7,
                        type: 'barrel'
                    },
                    {
                        x: 55,
                        y: 12,
                        type: 'chain'
                    },
                    {
                        x: 65,
                        y: 12,
                        type: 'chain'
                    },
                    {
                        x: 42,
                        y: 7,
                        type: 'torch'
                    },
                    {
                        x: 25,
                        y: 8,
                        type: 'barrel'
                    },
                    {
                        x: 10,
                        y: 8,
                        type: 'torch'
                    },
                    {
                        x: 15,
                        y: 24,
                        type: 'torch'
                    },
                    {
                        x: 30,
                        y: 24,
                        type: 'bones'
                    },
                    {
                        x: 44,
                        y: 24,
                        type: 'torch'
                    },
                    {
                        x: 58,
                        y: 24,
                        type: 'torch'
                    },
                    {
                        x: 75,
                        y: 24,
                        type: 'bones'
                    },
                    {
                        x: 65,
                        y: 38,
                        type: 'torch'
                    },
                    {
                        x: 55,
                        y: 38,
                        type: 'barrel'
                    },
                    {
                        x: 35,
                        y: 38,
                        type: 'torch'
                    },
                    {
                        x: 28,
                        y: 38,
                        type: 'bones'
                    },
                    {
                        x: 8,
                        y: 38,
                        type: 'torch'
                    },
                    {
                        x: 14,
                        y: 33,
                        type: 'bones'
                    },
                    {
                        x: 40,
                        y: 5,
                        type: 'chain'
                    },
                    {
                        x: 50,
                        y: 5,
                        type: 'chain'
                    },
                ],
                spawn: {
                    x: 76,
                    y: 6
                },
                portal: {
                    x: 5,
                    y: 37
                },
            },
    {
                name: "The Ramparts",
                theme: 'ramparts',
                bg1: '#1a100a',
                bg2: '#201508',
                build() {
                    const W = 60,
                    H = 55,
                    T = 32;
                    const m = Array.from({
                        length: H
                    }, ()=>Array(W).fill(0));
                    for (let x = 0; x < W; x++) {
                        m[0][x] = 1; m[1][x] = 1; m[H-1][x] = 1; m[H-2][x] = 1;
                    }
                    for (let y = 0; y < H; y++) {
                        m[y][0] = 1; m[y][1] = 1; m[y][W-1] = 1; m[y][W-2] = 1;
                    }

                    // ---- GROUND FLOOR (y=45..53) ----
                    for (let x = 2; x < W-2; x++) m[45][x] = 1;
                    // Start area bottom-left
                    for (let x = 3; x < 20; x++) m[50][x] = 2;
                    for (let x = 5; x < 15; x++) m[47][x] = 2;
                    // Gate to right
                    for (let y = 45; y < 53; y++) m[y][22] = 1;
                    m[50][22] = 0; m[51][22] = 0; m[52][22] = 0;
                    // Right ground area
                    for (let x = 24; x < 40; x++) m[50][x] = 2;
                    for (let x = 28; x < 38; x++) m[47][x] = 2;
                    for (let x = 35; x < 50; x++) m[50][x] = 2;
                    // Shaft up #1
                    m[45][42] = 0; m[45][43] = 0; m[45][44] = 0;

                    // ---- FLOOR 2 (y=35..44) ----
                    for (let x = 2; x < W-2; x++) m[35][x] = 1;
                    m[35][42] = 0; m[35][43] = 0; m[35][44] = 0; // continue shaft
                    for (let x = 38; x < 50; x++) m[40][x] = 2;
                    for (let x = 42; x < 48; x++) m[37][x] = 2;
                    // Left tower section
                    for (let y = 35; y < 45; y++) {
                        m[y][25] = 1; m[y][36] = 1;
                    }
                    m[42][25] = 0; m[43][25] = 0; m[44][25] = 0;
                    m[42][36] = 0; m[43][36] = 0; m[44][36] = 0;
                    for (let x = 26; x < 36; x++) m[40][x] = 2;
                    for (let x = 28; x < 34; x++) m[37][x] = 2;
                    // Far left
                    for (let x = 3; x < 24; x++) m[42][x] = 2;
                    for (let x = 5; x < 20; x++) m[38][x] = 2;
                    for (let x = 8; x < 16; x++) m[36][x] = 2;
                    // Shaft up #2
                    m[35][12] = 0; m[35][13] = 0; m[35][14] = 0;

                    // ---- FLOOR 3 (y=25..34) ----
                    for (let x = 2; x < W-2; x++) m[25][x] = 1;
                    m[25][12] = 0; m[25][13] = 0; m[25][14] = 0;
                    for (let x = 8; x < 20; x++) m[30][x] = 2;
                    for (let x = 10; x < 18; x++) m[27][x] = 2;
                    // Bridge going right
                    for (let x = 20; x < 45; x++) m[30][x] = 1;
                    m[30][28] = 0; m[30][29] = 0; m[30][30] = 0;
                    for (let x = 22; x < 28; x++) m[27][x] = 2;
                    for (let x = 32; x < 40; x++) m[27][x] = 2;
                    // spikes
                    m[29][24] = 3; m[29][25] = 3;
                    // Right tower
                    for (let y = 25; y < 35; y++) {
                        m[y][46] = 1;
                    }
                    m[32][46] = 0; m[33][46] = 0; m[34][46] = 0;
                    for (let x = 47; x < 56; x++) m[30][x] = 2;
                    for (let x = 48; x < 54; x++) m[27][x] = 2;
                    // Shaft up from right
                    m[25][52] = 0; m[25][53] = 0; m[25][54] = 0;

                    // ---- FLOOR 4 (y=15..24) ----
                    for (let x = 2; x < W-2; x++) m[15][x] = 1;
                    m[15][52] = 0; m[15][53] = 0; m[15][54] = 0;
                    for (let x = 46; x < 56; x++) m[20][x] = 2;
                    for (let x = 48; x < 54; x++) m[17][x] = 2;
                    // Long walkway going left
                    for (let x = 15; x < 45; x++) m[20][x] = 1;
                    for (let x = 18; x < 25; x++) m[17][x] = 2;
                    for (let x = 28; x < 38; x++) m[17][x] = 2;
                    m[20][22] = 0; m[20][23] = 0;
                    m[20][32] = 0; m[20][33] = 0;
                    // Left area
                    for (let x = 3; x < 14; x++) m[20][x] = 2;
                    for (let x = 5; x < 12; x++) m[17][x] = 2;
                    m[15][8] = 0; m[15][9] = 0; m[15][10] = 0;

                    // ---- TOP FLOOR (y=2..14) - exit area ----
                    for (let x = 3; x < 15; x++) m[10][x] = 2;
                    for (let x = 5; x < 12; x++) m[7][x] = 2;
                    for (let x = 8; x < 10; x++) m[4][x] = 2;
                    // Final battlements
                    for (let y = 2; y < 15; y++) {
                        m[y][20] = 1;
                    }
                    m[12][20] = 0; m[13][20] = 0; m[14][20] = 0;
                    for (let x = 22; x < 40; x++) m[10][x] = 2;
                    for (let x = 25; x < 35; x++) m[6][x] = 2;
                    for (let x = 28; x < 32; x++) m[3][x] = 2;
                    // Battlements decoration
                    for (let x = 22; x < 40; x += 3) m[2][x] = 1;

                    // Portal at top
                    for (let x = 42; x < 55; x++) m[8][x] = 2;
                    for (let x = 45; x < 52; x++) m[5][x] = 2;
                    for (let y = 2; y < 15; y++) {
                        m[y][41] = 1;
                    }
                    m[12][41] = 0; m[13][41] = 0; m[14][41] = 0;

                    return {
                        tiles: m,
                        w: W,
                        h: H,
                        ts: T
                    };
                },
                enemies: [{
                    x: 8,
                    y: 48,
                    type: 'zombie'
                },
                    {
                        x: 14,
                        y: 45,
                        type: 'zombie'
                    },
                    {
                        x: 30,
                        y: 48,
                        type: 'skeleton'
                    },
                    {
                        x: 36,
                        y: 45,
                        type: 'zombie'
                    },
                    {
                        x: 42,
                        y: 43,
                        type: 'bat'
                    },
                    {
                        x: 44,
                        y: 38,
                        type: 'skeleton'
                    },
                    {
                        x: 30,
                        y: 38,
                        type: 'zombie'
                    },
                    {
                        x: 32,
                        y: 35,
                        type: 'bat'
                    },
                    {
                        x: 10,
                        y: 40,
                        type: 'skeleton'
                    },
                    {
                        x: 16,
                        y: 36,
                        type: 'zombie'
                    },
                    {
                        x: 12,
                        y: 36,
                        type: 'bat'
                    },
                    {
                        x: 14,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 18,
                        y: 25,
                        type: 'bat'
                    },
                    {
                        x: 25,
                        y: 25,
                        type: 'zombie'
                    },
                    {
                        x: 35,
                        y: 25,
                        type: 'skeleton'
                    },
                    {
                        x: 50,
                        y: 28,
                        type: 'zombie'
                    },
                    {
                        x: 52,
                        y: 25,
                        type: 'bat'
                    },
                    {
                        x: 50,
                        y: 18,
                        type: 'skeleton'
                    },
                    {
                        x: 52,
                        y: 15,
                        type: 'bat'
                    },
                    {
                        x: 30,
                        y: 15,
                        type: 'skeleton'
                    },
                    {
                        x: 22,
                        y: 15,
                        type: 'zombie'
                    },
                    {
                        x: 8,
                        y: 18,
                        type: 'zombie'
                    },
                    {
                        x: 10,
                        y: 15,
                        type: 'bat'
                    },
                    {
                        x: 8,
                        y: 8,
                        type: 'skeleton'
                    },
                    {
                        x: 30,
                        y: 8,
                        type: 'elite'
                    },
                    {
                        x: 35,
                        y: 4,
                        type: 'bat'
                    },
                    {
                        x: 28,
                        y: 4,
                        type: 'bat'
                    },
                    {
                        x: 48,
                        y: 6,
                        type: 'skeleton'
                    },
                    {
                        x: 50,
                        y: 3,
                        type: 'bat'
                    },
                    {
                        x: 40,
                        y: 48,
                        type: 'elite'
                    },
                ],
                items: [{
                    x: 12,
                    y: 45,
                    type: 'cell'
                },
                    {
                        x: 35,
                        y: 48,
                        type: 'gold'
                    },
                    {
                        x: 44,
                        y: 35,
                        type: 'cell'
                    },
                    {
                        x: 32,
                        y: 35,
                        type: 'health'
                    },
                    {
                        x: 8,
                        y: 36,
                        type: 'cell'
                    },
                    {
                        x: 18,
                        y: 38,
                        type: 'gold'
                    },
                    {
                        x: 16,
                        y: 25,
                        type: 'health'
                    },
                    {
                        x: 36,
                        y: 25,
                        type: 'cell'
                    },
                    {
                        x: 52,
                        y: 25,
                        type: 'cell'
                    },
                    {
                        x: 50,
                        y: 15,
                        type: 'gold'
                    },
                    {
                        x: 22,
                        y: 15,
                        type: 'cell'
                    },
                    {
                        x: 8,
                        y: 15,
                        type: 'health'
                    },
                    {
                        x: 30,
                        y: 4,
                        type: 'cell'
                    },
                    {
                        x: 9,
                        y: 4,
                        type: 'cell'
                    },
                    {
                        x: 48,
                        y: 3,
                        type: 'health'
                    },
                    {
                        x: 40,
                        y: 38,
                        type: 'cell'
                    },
                ],
                decos: [{
                    x: 6,
                    y: 51,
                    type: 'torch'
                },
                    {
                        x: 14,
                        y: 51,
                        type: 'barrel'
                    },
                    {
                        x: 30,
                        y: 51,
                        type: 'torch'
                    },
                    {
                        x: 42,
                        y: 51,
                        type: 'bones'
                    },
                    {
                        x: 30,
                        y: 42,
                        type: 'torch'
                    },
                    {
                        x: 44,
                        y: 42,
                        type: 'torch'
                    },
                    {
                        x: 10,
                        y: 42,
                        type: 'torch'
                    },
                    {
                        x: 35,
                        y: 33,
                        type: 'chain'
                    },
                    {
                        x: 25,
                        y: 33,
                        type: 'chain'
                    },
                    {
                        x: 50,
                        y: 33,
                        type: 'torch'
                    },
                    {
                        x: 50,
                        y: 22,
                        type: 'torch'
                    },
                    {
                        x: 22,
                        y: 22,
                        type: 'torch'
                    },
                    {
                        x: 8,
                        y: 22,
                        type: 'torch'
                    },
                    {
                        x: 8,
                        y: 12,
                        type: 'torch'
                    },
                    {
                        x: 30,
                        y: 12,
                        type: 'banner'
                    },
                    {
                        x: 48,
                        y: 12,
                        type: 'torch'
                    },
                    {
                        x: 30,
                        y: 3,
                        type: 'banner'
                    },
                    {
                        x: 20,
                        y: 36,
                        type: 'bones'
                    },
                    {
                        x: 38,
                        y: 48,
                        type: 'bones'
                    },
                    {
                        x: 55,
                        y: 6,
                        type: 'chain'
                    },
                ],
                spawn: {
                    x: 4,
                    y: 51
                },
                portal: {
                    x: 48,
                    y: 3
                },
            },
    {
                name: "The Black Bridge",
                theme: 'castle',
                bg1: '#080810',
                bg2: '#101018',
                build() {
                    const W = 90,
                    H = 35,
                    T = 32;
                    const m = Array.from({
                        length: H
                    }, ()=>Array(W).fill(0));
                    for (let x = 0; x < W; x++) {
                        m[0][x] = 1; m[1][x] = 1; m[H-1][x] = 1; m[H-2][x] = 1;
                    }
                    for (let y = 0; y < H; y++) {
                        m[y][0] = 1; m[y][1] = 1; m[y][W-1] = 1; m[y][W-2] = 1;
                    }

                    // ---- Entrance Hall ----
                    for (let y = 2; y < H-2; y++) {
                        m[y][18] = 1; m[y][19] = 1;
                    }
                    m[H-5][18] = 0; m[H-6][18] = 0; m[H-7][18] = 0;
                    m[H-5][19] = 0; m[H-6][19] = 0; m[H-7][19] = 0;
                    for (let x = 3; x < 17; x++) m[H-8][x] = 1;
                    for (let x = 4; x < 10; x++) m[H-5][x] = 2;
                    for (let x = 11; x < 16; x++) m[H-5][x] = 2;
                    for (let x = 6; x < 14; x++) m[H-12][x] = 2;
                    for (let x = 4; x < 8; x++) m[H-16][x] = 2;
                    for (let x = 12; x < 17; x++) m[H-16][x] = 2;

                    // ---- Arena 1 ----
                    for (let y = 2; y < H-2; y++) {
                        m[y][40] = 1; m[y][41] = 1;
                    }
                    m[H-5][40] = 0; m[H-6][40] = 0; m[H-7][40] = 0;
                    m[H-5][41] = 0; m[H-6][41] = 0; m[H-7][41] = 0;
                    // Upper passage to bypass (locked by needing to go down first)
                    m[8][40] = 0; m[9][40] = 0; m[8][41] = 0; m[9][41] = 0;
                    for (let x = 20; x < 40; x++) m[H-8][x] = 1;
                    for (let x = 22; x < 28; x++) m[H-5][x] = 2;
                    for (let x = 32; x < 38; x++) m[H-5][x] = 2;
                    m[H-8][25] = 0; m[H-8][26] = 0; m[H-8][27] = 0;
                    m[H-8][33] = 0; m[H-8][34] = 0;
                    for (let x = 24; x < 36; x++) m[H-12][x] = 2;
                    for (let x = 22; x < 30; x++) m[H-16][x] = 2;
                    for (let x = 32; x < 39; x++) m[H-16][x] = 2;
                    for (let x = 26; x < 34; x++) m[H-20][x] = 2;
                    for (let x = 20; x < 40; x++) m[10][x] = 2;
                    for (let x = 23; x < 37; x++) m[6][x] = 2;
                    // pillars
                    for (let y = H-20; y < H-2; y++) {
                        m[y][28] = 1; m[y][32] = 1;
                    }
                    m[H-5][28] = 0; m[H-6][28] = 0; m[H-5][32] = 0; m[H-6][32] = 0;
                    m[H-12][28] = 0; m[H-13][28] = 0; m[H-12][32] = 0; m[H-13][32] = 0;

                    // ---- Arena 2 ----
                    for (let y = 2; y < H-2; y++) {
                        m[y][62] = 1; m[y][63] = 1;
                    }
                    m[H-5][62] = 0; m[H-6][62] = 0; m[H-7][62] = 0;
                    m[H-5][63] = 0; m[H-6][63] = 0; m[H-7][63] = 0;
                    for (let x = 42; x < 62; x++) m[H-8][x] = 1;
                    for (let x = 44; x < 50; x++) m[H-5][x] = 2;
                    for (let x = 54; x < 60; x++) m[H-5][x] = 2;
                    m[H-8][48] = 0; m[H-8][49] = 0; m[H-8][50] = 0;
                    for (let x = 46; x < 56; x++) m[H-12][x] = 2;
                    for (let x = 42; x < 50; x++) m[H-16][x] = 2;
                    for (let x = 52; x < 61; x++) m[H-16][x] = 2;
                    for (let x = 48; x < 56; x++) m[H-20][x] = 2;
                    for (let x = 44; x < 60; x++) m[8][x] = 2;
                    for (let x = 46; x < 58; x++) m[5][x] = 2;
                    // Spikes
                    m[H-3][50] = 3; m[H-3][51] = 3; m[H-3][52] = 3;

                    // ---- Exit Hall ----
                    for (let x = 64; x < W-3; x++) m[H-8][x] = 1;
                    for (let x = 66; x < 72; x++) m[H-5][x] = 2;
                    for (let x = 74; x < 82; x++) m[H-5][x] = 2;
                    for (let x = 68; x < 78; x++) m[H-12][x] = 2;
                    for (let x = 70; x < 76; x++) m[H-16][x] = 2;
                    for (let x = 80; x < 86; x++) m[H-12][x] = 2;

                    return {
                        tiles: m,
                        w: W,
                        h: H,
                        ts: T
                    };
                },
                enemies: [{
                    x: 6,
                    y: 25,
                    type: 'skeleton'
                },
                    {
                        x: 14,
                        y: 25,
                        type: 'skeleton'
                    },
                    {
                        x: 10,
                        y: 20,
                        type: 'bat'
                    },
                    {
                        x: 8,
                        y: 16,
                        type: 'bat'
                    },
                    {
                        x: 24,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 34,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 30,
                        y: 20,
                        type: 'elite'
                    },
                    {
                        x: 26,
                        y: 15,
                        type: 'bat'
                    },
                    {
                        x: 34,
                        y: 15,
                        type: 'bat'
                    },
                    {
                        x: 28,
                        y: 11,
                        type: 'skeleton'
                    },
                    {
                        x: 30,
                        y: 4,
                        type: 'bat'
                    },
                    {
                        x: 46,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 56,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 50,
                        y: 20,
                        type: 'elite'
                    },
                    {
                        x: 54,
                        y: 15,
                        type: 'elite'
                    },
                    {
                        x: 48,
                        y: 11,
                        type: 'bat'
                    },
                    {
                        x: 56,
                        y: 11,
                        type: 'bat'
                    },
                    {
                        x: 52,
                        y: 6,
                        type: 'skeleton'
                    },
                    {
                        x: 48,
                        y: 3,
                        type: 'bat'
                    },
                    {
                        x: 68,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 76,
                        y: 28,
                        type: 'skeleton'
                    },
                    {
                        x: 72,
                        y: 20,
                        type: 'elite'
                    },
                    {
                        x: 82,
                        y: 20,
                        type: 'bat'
                    },
                ],
                items: [{
                    x: 8,
                    y: 22,
                    type: 'health'
                },
                    {
                        x: 14,
                        y: 16,
                        type: 'cell'
                    },
                    {
                        x: 30,
                        y: 12,
                        type: 'health'
                    },
                    {
                        x: 28,
                        y: 8,
                        type: 'cell'
                    },
                    {
                        x: 34,
                        y: 4,
                        type: 'cell'
                    },
                    {
                        x: 50,
                        y: 12,
                        type: 'health'
                    },
                    {
                        x: 52,
                        y: 3,
                        type: 'cell'
                    },
                    {
                        x: 56,
                        y: 15,
                        type: 'cell'
                    },
                    {
                        x: 70,
                        y: 22,
                        type: 'health'
                    },
                    {
                        x: 74,
                        y: 16,
                        type: 'cell'
                    },
                    {
                        x: 82,
                        y: 22,
                        type: 'health'
                    },
                    {
                        x: 84,
                        y: 28,
                        type: 'cell'
                    },
                ],
                decos: [
                    // ---- boss arena dressing (right side, around the sealed portal) ----
                    {x:70,y:30,type:'brazier'},{x:82,y:30,type:'brazier'},
                    {x:67,y:30,type:'statue'},{x:85,y:30,type:'statue'},
                    {x:73,y:4,type:'banner'},{x:80,y:4,type:'banner'},
                    {x:75,y:2,type:'chain'},{x:78,y:2,type:'chain'},
                    {x:69,y:26,type:'torch'},{x:83,y:26,type:'torch'},
                    {x:71,y:31,type:'skullpile'},{x:81,y:31,type:'bones'},
                    {x:76,y:3,type:'cage'},
                    {x:6,y:28,type:'torch'},
                    {
                        x: 14,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 10,
                        y: 16,
                        type: 'chain'
                    },
                    {
                        x: 24,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 36,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 30,
                        y: 28,
                        type: 'banner'
                    },
                    {
                        x: 28,
                        y: 4,
                        type: 'banner'
                    },
                    {
                        x: 34,
                        y: 4,
                        type: 'banner'
                    },
                    {
                        x: 46,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 58,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 52,
                        y: 28,
                        type: 'banner'
                    },
                    {
                        x: 52,
                        y: 6,
                        type: 'chain'
                    },
                    {
                        x: 68,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 78,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 84,
                        y: 28,
                        type: 'torch'
                    },
                    {
                        x: 72,
                        y: 28,
                        type: 'bones'
                    },
                    {
                        x: 50,
                        y: 28,
                        type: 'bones'
                    },
                    {
                        x: 30,
                        y: 14,
                        type: 'chain'
                    },
                ],
                spawn: {
                    x: 4,
                    y: 28
                },
                portal: {
                    x: 84,
                    y: 20
                },
            }
);