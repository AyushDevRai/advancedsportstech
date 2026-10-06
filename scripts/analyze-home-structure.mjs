import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.join(process.cwd(), '.cache', 'target-site', 'home-Dp56e20Z.js'), 'utf8');

// Let's find all exported or rendered components in home
const matches = content.match(/className:"([^"]+)"/g) || [];
const classes = matches.map(m => m.slice(11, -1));

console.log('Sample CSS classes in home:');
const uniqueClasses = Array.from(new Set(classes));
console.log(uniqueClasses.slice(0, 40));

// Search for text headings
const headings = content.match(/children:\[?"([^"]{5,80})"/g) || [];
console.log('\nSample headings:');
console.log(Array.from(new Set(headings.map(h => h.replace(/children:\[?"/, '')))).slice(0, 30));
