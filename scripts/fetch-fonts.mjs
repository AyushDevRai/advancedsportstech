import { mkdir, writeFile } from "node:fs/promises";
const fonts = [
  { name: "barlow-condensed", query: "Barlow+Condensed:wght@600" },
  { name: "manrope", query: "Manrope:wght@400..800" },
];
await mkdir("public/fonts", { recursive: true });
for (const font of fonts) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${font.query}&display=swap`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
  });
  if (!css.ok) throw new Error(`Font CSS: ${css.status}`);
  const url = [...(await css.text()).matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].at(-1)?.[1];
  if (!url) throw new Error(`No Latin font for ${font.name}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Font download: ${response.status}`);
  await writeFile(`public/fonts/${font.name}.woff2`, Buffer.from(await response.arrayBuffer()));
}
