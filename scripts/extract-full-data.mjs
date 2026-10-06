import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), '.cache', 'target-site');

function extractDataFromFile(filename) {
  const p = path.join(dir, filename);
  if (!fs.existsSync(p)) return null;
  const content = fs.readFileSync(p, 'utf8');

  // Find video
  const videoMatch = content.match(/src:"(https?:\/\/[^"]+\.mp4)"/);
  // Find poster / fallback image
  const posterMatch = content.match(/poster:([a-zA-Z0-9_]+)|\/Fallback\/[^"]+/);
  // Find products array or objects
  const titleMatches = content.match(/children:"([^"]{4,80})"/g) || [];
  
  return {
    file: filename,
    video: videoMatch ? videoMatch[1] : null,
    length: content.length,
    headings: titleMatches.map(t => t.replace('children:', '').replace(/"/g, '')).filter(t => !t.startsWith('<') && !t.startsWith('assets/')).slice(0, 15)
  };
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
const results = files.map(extractDataFromFile).filter(Boolean);

console.log(JSON.stringify(results, null, 2));
