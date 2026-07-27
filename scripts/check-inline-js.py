#!/usr/bin/env python3
"""Extract inline JavaScript from index.html and validate it with Node.js."""

from __future__ import annotations

import re
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX_FILE = ROOT / "index.html"
SCRIPT_PATTERN = re.compile(
    r"<script(?:\s[^>]*)?>(.*?)</script>",
    flags=re.IGNORECASE | re.DOTALL,
)


def main() -> int:
    if not INDEX_FILE.exists():
        print(f"Error: {INDEX_FILE} does not exist.", file=sys.stderr)
        return 1

    html = INDEX_FILE.read_text(encoding="utf-8")
    scripts = [script.strip() for script in SCRIPT_PATTERN.findall(html) if script.strip()]

    if not scripts:
        print("Error: no inline JavaScript blocks were found in index.html.", file=sys.stderr)
        return 1

    source = "\n\n".join(
        f"// Inline script block {index}\n{script}"
        for index, script in enumerate(scripts, start=1)
    )

    with tempfile.NamedTemporaryFile(
        mode="w",
        suffix=".js",
        encoding="utf-8",
        delete=False,
    ) as temporary_file:
        temporary_file.write(source)
        temporary_path = Path(temporary_file.name)

    try:
        result = subprocess.run(
            ["node", "--check", str(temporary_path)],
            check=False,
            text=True,
        )
    except FileNotFoundError:
        print("Error: Node.js is required to run this check.", file=sys.stderr)
        return 1
    finally:
        temporary_path.unlink(missing_ok=True)

    if result.returncode == 0:
        print(f"JavaScript syntax is valid ({len(scripts)} inline block(s)).")

    return result.returncode


if __name__ == "__main__":
    raise SystemExit(main())
