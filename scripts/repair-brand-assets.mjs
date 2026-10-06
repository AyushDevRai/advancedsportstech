import { readFile, writeFile } from "node:fs/promises";
// Verified visually against the six logos in AST's homepage carousel.
const mapping = [["ligaturf", "ligature"], ["rekortan", "spurtan"], ["spurtan", "smartracks"], ["poligras", "gigatera"], ["smartracks", "humotion"], ["panasonic", "poligras"]];
const buffers = await Promise.all(mapping.map(([from]) => readFile(`public/brand/${from}.png`)));
await Promise.all(mapping.map(([, to], index) => writeFile(`public/brand/${to}.png`, buffers[index])));
console.log("Corrected brand asset identities.");
