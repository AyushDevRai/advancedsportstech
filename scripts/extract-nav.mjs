import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.join(process.cwd(), '.cache', 'target-site', 'root-80Ntws0I.js'), 'utf8');

// Find all objects with heading, links, title, path
const regex = /(sportsData|productsData|navLinks|navigation|menuItems|sportsMenu|productsMenu|footerLinks)\s*=\s*(\[[^;]+\])/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log('Found variable:', match[1], match[2].slice(0, 300));
}

// Or find anything with links:
const linksRegex = /\{heading:"[^"]+",links:\[[^\]]+\]\}/g;
const linksMatches = content.match(linksRegex);
console.log('Heading with links matches:', linksMatches);

// Find all paths
const paths = content.match(/path:"[^"]+"/g);
console.log('All paths in root:', Array.from(new Set(paths)));
