"""Count published case text, excluding comments and inactive embed templates."""

from html.parser import HTMLParser
from pathlib import Path


class CaseText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skipped = 0
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag in ("head", "script", "style", "template"):
            self.skipped += 1

    def handle_endtag(self, tag):
        if tag in ("head", "script", "style", "template"):
            self.skipped -= 1

    def handle_data(self, data):
        if not self.skipped and data.strip():
            self.parts.append(data.strip())


total = 0
root = Path(__file__).resolve().parents[1]
for name in ("mellemrum", "vuuh", "encore"):
    parser = CaseText()
    parser.feed((root / "cases" / f"{name}.html").read_text())
    text = " ".join(" ".join(parser.parts).split())
    count = len(text)
    total += count
    print(f"{name}: {count} characters")
print(f"Total: {total} / 12000 characters (including navigation and link labels)")
print("Add captions, image allowances and text inside embedded content at final review.")
if total > 12000:
    raise SystemExit("Character limit exceeded")
