import fs from 'fs';
import path from 'path';
import https from 'https';

const dir = path.join(process.cwd(), '.cache', 'target-site');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
const localImages = new Set();

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Match path-like strings in quotes
  const locals = content.match(/"(\/(?:Fallback|images|Projects|Products? Images|Logo|Header Logos|pdf)[^"]+)"/gi) || [];
  locals.forEach(l => {
    const raw = l.slice(1, -1);
    if (!raw.includes('<') && !raw.includes('>')) {
      localImages.add(raw);
    }
  });
}

console.log(`Found ${localImages.size} unique local assets in bundles.`);

function downloadAsset(assetPath) {
  return new Promise((resolve) => {
    // Decode if encoded
    let decodedPath = assetPath;
    try {
      decodedPath = decodeURIComponent(assetPath);
    } catch {}
    
    // Normalize destination
    const normalizedRelative = decodedPath.replace(/^\//, '');
    const dest = path.join(process.cwd(), 'public', normalizedRelative);
    
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      // Already exists
      return resolve({ path: assetPath, status: 'cached' });
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const encodedUrl = 'https://astsports.vercel.app' + encodeURI(decodedPath);
    
    https.get(encodedUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, r2 => {
          if (r2.statusCode === 200) {
            const stream = fs.createWriteStream(dest);
            r2.pipe(stream);
            stream.on('finish', () => { stream.close(); resolve({ path: assetPath, status: 200 }); });
          } else {
            resolve({ path: assetPath, status: r2.statusCode });
          }
        }).on('error', () => resolve({ path: assetPath, status: 'error' }));
        return;
      }

      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => { stream.close(); resolve({ path: assetPath, status: 200 }); });
      } else {
        resolve({ path: assetPath, status: res.statusCode });
      }
    }).on('error', () => resolve({ path: assetPath, status: 'error' }));
  });
}

async function main() {
  const list = Array.from(localImages);
  console.log(`Starting download of ${list.length} assets...`);
  
  // Download in chunks of 5
  for (let i = 0; i < list.length; i += 5) {
    const chunk = list.slice(i, i + 5);
    const results = await Promise.all(chunk.map(downloadAsset));
    for (const r of results) {
      if (r.status === 200 || r.status === 'cached') {
        console.log(`[OK] ${r.path} (${r.status})`);
      } else {
        console.log(`[SKIP/ERR] ${r.path} (${r.status})`);
      }
    }
  }
  console.log('Finished downloading assets!');
}

main();
