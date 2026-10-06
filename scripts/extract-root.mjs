import fs from 'fs';
import path from 'path';

const rootJs = fs.readFileSync(path.join(process.cwd(), '.cache', 'target-site', 'root-80Ntws0I.js'), 'utf8');

// Let's print out sections of interest or search for navigation data
console.log('root.js length:', rootJs.length);

// Let's find navigation items in rootJs
const navMatch = rootJs.match(/(\[\s*\{[^\}]{5,200}\}\s*\])/g);
if (navMatch) {
  console.log('Found array matches:', navMatch);
}

// Write a formatted version of rootJs to inspect easily
fs.writeFileSync(path.join(process.cwd(), '.cache', 'root-pretty.js'), rootJs.replace(/([;{}])/g, '$1\n'));
console.log('Wrote root-pretty.js');
