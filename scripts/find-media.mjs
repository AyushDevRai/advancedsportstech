import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), '.cache', 'target-site');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
const media = new Set();
const localImages = new Set();

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const urls = content.match(/https?:\/\/[^"'`\s<>()]+/g) || [];
  urls.forEach(u => {
    if (u.match(/\.(mp4|webm|jpg|jpeg|png|webp|avif|svg)/i) || u.includes('cloudinary')) {
      media.add(u);
    }
  });
  const locals = content.match(/"(\/(?:Fallback|images|Projects|Products? Images|Logo|Header Logos|pdf)[^"]+)"/gi) || [];
  locals.forEach(l => localImages.add(l.slice(1, -1)));
}

console.log('--- External Media URLs (' + media.size + ') ---');
for (const m of media) console.log(m);

console.log('\n--- Local Assets Referenced (' + localImages.size + ') ---');
for (const l of Array.from(localImages).slice(0, 40)) console.log(l);
