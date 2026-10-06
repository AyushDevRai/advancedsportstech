from html.parser import HTMLParser
from pathlib import Path
import json, re

class Extractor(HTMLParser):
    def __init__(self):
        super().__init__(); self.current=None; self.depth=0; self.text=[]; self.output=[]
    def handle_starttag(self,tag,attrs):
        if self.current: self.depth+=1
        elif tag in ['h1','h2','h3','h4','h5','p']:
            self.current=tag; self.depth=1; self.text=[]
    def handle_endtag(self,tag):
        if self.current:
            self.depth-=1
            if self.depth<=0:
                value=re.sub(r'\s+',' ',''.join(self.text)).strip()
                if value: self.output.append({'tag':self.current,'text':value})
                self.current=None
    def handle_data(self,value):
        if self.current: self.text.append(value)
p=Extractor(); p.feed(Path('.cache/ast-current.html').read_text(encoding='utf8'))
filtered=[row for row in p.output if not any(x in row['text'].lower() for x in ['satta','teen patti','diamond exchange','betln','daymand'])]
Path('.cache/ast-text.json').write_text(json.dumps(filtered,ensure_ascii=False,indent=2),encoding='utf8')
for row in filtered: print(row['tag']+': '+row['text'])
