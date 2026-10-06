import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

await mkdir("public/navigation", { recursive: true });
await mkdir(".cache/navigation-source", { recursive: true });
const pages = ["football", "tennis", "badminton", "basketball", "wooden-flooring", "indoor-flooring", "smartracks", "wireless-timing-gate-system"];
const sources = [];
await Promise.all(pages.map(async slug => {
  const response = await fetch(`https://ast-sports.com/${slug}/`, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`${slug}: ${response.status}`);
  const html = await response.text();
  await writeFile(`.cache/navigation-source/${slug}.html`, html);
  const urls = [...new Set([...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1]).filter(url => !/cropped-AST|Picture-\d+|qu\d|AST-/.test(url)))];
  console.log(JSON.stringify({ slug, images: urls.slice(0, 7) }));
  const imageUrl = urls[slug === "smartracks" ? 1 : 0];
  const imageResponse = await fetch(imageUrl, { signal: AbortSignal.timeout(20000) });
  if (!imageResponse.ok) throw new Error(`${imageUrl}: ${imageResponse.status}`);
  await sharp(Buffer.from(await imageResponse.arrayBuffer())).resize(800, 500, { fit: "cover", withoutEnlargement: true }).webp({ quality: 83 }).toFile(`public/navigation/${slug}.webp`);
  sources.push({ path: `/navigation/${slug}.webp`, source: imageUrl, page: `https://ast-sports.com/${slug}/` });
}));
await writeFile("public/navigation/sources.json", JSON.stringify(sources.sort((a, b) => a.path.localeCompare(b.path)), null, 2));
const tiles = await Promise.all(pages.map(async (slug, index) => ({ input: await sharp(`public/navigation/${slug}.webp`).resize(240,150,{fit:"cover"}).png().toBuffer(), left:index % 4 * 240, top:Math.floor(index/4)*150 })));
await sharp({create:{width:960,height:300,channels:3,background:"white"}}).composite(tiles).png().toFile(".cache/navigation-source/contact-sheet.png");
