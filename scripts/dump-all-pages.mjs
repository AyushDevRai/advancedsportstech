import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), '.cache', 'target-site');

function extractSentences(filename) {
  const p = path.join(dir, filename);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  
  // Extract all string literals
  const matches = content.match(/"([^"\\]{15,500})"/g) || [];
  const cleaned = matches
    .map(s => s.slice(1, -1))
    .filter(s => 
      !s.startsWith('http') && 
      !s.startsWith('/assets') && 
      !s.includes('{') && 
      !s.includes('function') &&
      !s.includes('class') &&
      !s.includes('px') &&
      !s.includes('M0.') &&
      !s.includes('stroke')
    );
  
  console.log(`\n================== ${filename} (${cleaned.length} strings) ==================`);
  console.log(Array.from(new Set(cleaned)).slice(0, 30).join('\n---\n'));
}

const targetFiles = [
  'home-Dp56e20Z.js',
  'sports-CrYv8BBA.js',
  'sport._sportName-BdH1iNqG.js',
  'athletics-track-CZCFSyk0.js',
  'synthetic-turf-BXRQee3B.js',
  'smartracks-DB_OLh8y.js',
  'cleaning-and-maintenance-CIS973-a.js',
  'sports-lighting-CPK1Zy0U.js',
  'projects-map-DbY0jH1l.js',
  'contact-us-DtJK4ju9.js'
];

targetFiles.forEach(extractSentences);
