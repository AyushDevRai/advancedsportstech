import { readFile } from "node:fs/promises";
const source = await readFile("content/ast.ts", "utf8");
const urls = [...new Set([...source.matchAll(/https:\/\/ast-sports\.com\/[a-z-]+\//g)].map(match => match[0]))];
const homepage = await readFile("content/homepage.ts", "utf8");
for (const match of homepage.matchAll(/file: "([^"]+\.pdf)"/g)) urls.push(`https://ast-sports.com/wp-content/uploads/2022/05/${match[1]}`);
console.log(await Promise.all(urls.map(async url => {
  try { const response = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(15000) }); return { url, status: response.status }; }
  catch { return { url, status: "unavailable" }; }
})));
