import sharp from "sharp";
import { readdir } from "node:fs/promises";
const files=(await readdir("public/clients")).sort((a,b)=>Number(a.match(/\d+/)[0])-Number(b.match(/\d+/)[0]));
const tiles=await Promise.all(files.map(async(file,index)=>({input:await sharp(`public/clients/${file}`).resize(220,130,{fit:"contain",background:"white"}).png().toBuffer(),left:(index%6)*240,top:Math.floor(index/6)*160})));
await sharp({create:{width:1440,height:Math.ceil(files.length/6)*160,channels:3,background:"#eee"}}).composite(tiles).png().toFile(".cache/clients-sheet.png");
console.log(files.join("\n"));
