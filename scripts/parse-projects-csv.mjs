import fs from 'fs';
import path from 'path';

const src = path.join(process.cwd(), '.cache', 'target-site', 'project 3.xlsx - List of Projects-6.csv');
const destCsv = path.join(process.cwd(), 'public', 'project 3.xlsx - List of Projects-6.csv');
const destDataCsv = path.join(process.cwd(), 'public', 'data', 'projects.csv');
fs.mkdirSync(path.join(process.cwd(), 'public', 'data'), { recursive: true });

fs.copyFileSync(src, destCsv);
fs.copyFileSync(src, destDataCsv);

function parseCsv(p) {
  const h = [];
  let s = 0;
  const g = p.length;
  let l = [], c = '', o = false;
  for (; s < g;) {
    const a = p[s];
    if (o) {
      if (a === '"') {
        if (s + 1 < g && p[s + 1] === '"') { c += '"'; s += 2; continue; }
        else { o = false; s++; continue; }
      } else { c += a; s++; continue; }
    } else {
      if (a === '"') { o = true; s++; continue; }
      if (a === ',') { l.push(c.trim()); c = ''; s++; continue; }
      if (a === '\n' || a === '\r') {
        if (a === '\r' && s + 1 < g && p[s + 1] === '\n') s++;
        l.push(c.trim());
        if (l.some(x => x.length > 0)) h.push(l);
        l = []; c = ''; s++; continue;
      }
      c += a; s++;
    }
  }
  l.push(c.trim());
  if (l.some(x => x.length > 0)) h.push(l);
  return h;
}

const raw = fs.readFileSync(src, 'utf8');
const rows = parseCsv(raw);
console.log('Parsed rows:', rows.length);

const headerIdx = rows.findIndex(r => r.some(col => col.toLowerCase().includes('project name') || col.toLowerCase() === 'url'));
console.log('Header index:', headerIdx);
const headers = rows[headerIdx].map(x => x.toLowerCase().trim());

const pNameIdx = headers.findIndex(h => h.includes('project name') || h === 'name of project');
const empIdx = headers.findIndex(h => h.includes('employer'));
const woIdx = headers.findIndex(h => h.includes('work order') || h.includes('contract'));
const urlIdx = headers.findIndex(h => h.includes('url') || h.includes('link'));
const coordIdx = headers.findIndex(h => h.includes('coordinates') || h.includes('latlng') || h.includes('coord'));
const detailsIdx = headers.findIndex(h => h.includes('details'));
const imgIdx = headers.findIndex(h => h.includes('image') || h.includes('photo'));

const projects = [];
let currentCategory = 'Athletic Track';

for (let i = headerIdx + 1; i < rows.length; i++) {
  const r = rows[i];
  if (r.length === 1 || (r[0] && !r[1] && !r[2])) {
    if (r[0] && r[0].length > 2) currentCategory = r[0];
    continue;
  }
  const name = r[pNameIdx] || '';
  if (!name || name.startsWith('#REF!') || name.toLowerCase() === 's. no.') continue;

  let lat = null, lng = null;
  const coordStr = r[coordIdx] || '';
  if (coordStr) {
    const parts = coordStr.split(',').map(s => parseFloat(s.trim()));
    if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      lat = parts[0];
      lng = parts[1];
    }
  }

  projects.push({
    id: i,
    name: name.replace(/^"|"$/g, '').trim(),
    employer: (r[empIdx] || '').replace(/^"|"$/g, '').trim(),
    workOrder: (r[woIdx] || '').replace(/^"|"$/g, '').trim(),
    mapUrl: (r[urlIdx] || '').trim(),
    coordinates: coordStr,
    lat,
    lng,
    details: (r[detailsIdx] || '').trim(),
    imageUrl: (r[imgIdx] || '').trim(),
    category: currentCategory
  });
}

console.log('Successfully extracted', projects.length, 'projects!');
console.log('Projects with lat/lng:', projects.filter(p => p.lat && p.lng).length);

fs.writeFileSync(path.join(process.cwd(), 'public', 'data', 'projects.json'), JSON.stringify(projects, null, 2));
console.log('Wrote public/data/projects.json');
