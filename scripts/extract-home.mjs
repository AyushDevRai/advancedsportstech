import fs from 'fs';
import path from 'path';

const homeJs = fs.readFileSync(path.join(process.cwd(), '.cache', 'target-site', 'home-Dp56e20Z.js'), 'utf8');

// Write a formatted/beautified version so we can examine the sections
fs.writeFileSync(path.join(process.cwd(), '.cache', 'home-pretty.js'), homeJs.replace(/([;{}])/g, '$1\n'));

// Extract strings longer than 20 chars
const strings = homeJs.match(/"([^"\\]{20,300})"/g) || [];
const uniqueStrings = Array.from(new Set(strings.map(s => s.slice(1, -1))));

console.log('Sample content strings:');
for (const s of uniqueStrings.slice(0, 50)) {
  console.log('-', s);
}

// Find section headings or component names
console.log('\n--- Searching for headings & stats ---');
const headings = uniqueStrings.filter(s => 
  s.includes('AST') || s.includes('Sports') || s.includes('Track') || s.includes('Turf') || 
  s.includes('Experience') || s.includes('World') || s.includes('Partner') || s.includes('Stadium')
);
console.log(headings);
