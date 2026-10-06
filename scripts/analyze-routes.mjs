import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), '.cache', 'target-site');

const files = [
  'athletic-tracks-C2WbP7iE.js',
  'hockey-track-Dc9nbLms.js',
  'football-gV5Y-rXB.js',
  'wooden-flooring-vX3c5vhY.js',
  'indoor-flooring-UTRVfqtw.js',
  'tennis--M1jPgtf.js',
  'badminton-CmDrrj7j.js',
  'basketball-CLj-dZka.js',
  'ProjectsMapLeaflet-D1l6Rhrb.js',
  'AboutStripe-DCdPS3Qh.js',
  'CTA-CBLT8Xan.js'
];

for (const file of files) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=================== ${file} (${content.length} bytes) ===================`);
  
  // Find strings
  const strMatches = content.match(/"([^"\\]{15,200})"/g) || [];
  const uniq = Array.from(new Set(strMatches.map(s => s.slice(1, -1))))
    .filter(s => !s.startsWith('http') && !s.includes('class') && !s.includes('M0.'));
  console.log(uniq.slice(0, 10));
}
