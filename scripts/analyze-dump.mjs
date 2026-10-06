import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), '.cache', 'target-site');
const files = fs.readdirSync(dir);

console.log('--- Analyzing target files ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  console.log(`\n=== File: ${f} (${(content.length / 1024).toFixed(1)} KB) ===`);
  
  if (f.endsWith('.js')) {
    // Look for JSX-like text strings or navigation items
    const matches = content.match(/"([^"\\]{4,80})"/g) || [];
    const keywords = ['navbar', 'header', 'footer', 'sport', 'turf', 'athletics', 'contact', 'track', 'lighting', 'smartracks', 'maintenance', 'projects', 'phone', 'email', 'ast'];
    const hits = matches
      .map(m => m.slice(1, -1))
      .filter(m => keywords.some(k => m.toLowerCase().includes(k)) && !m.includes('/') && !m.includes('{') && !m.includes('('))
      .slice(0, 15);
    console.log('Sample keywords/text:', Array.from(new Set(hits)).slice(0, 10));
  }
}
