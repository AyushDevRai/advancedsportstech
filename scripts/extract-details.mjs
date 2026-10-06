import fs from 'fs';
import path from 'path';

function inspectFile(name) {
  const p = path.join(process.cwd(), '.cache', 'target-site', name);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n=================== ${name} ===================`);
  
  // Find all image URLs and links
  const urls = content.match(/"(https?:\/\/[^"]+)"/g) || [];
  const localAssets = content.match(/"(\/assets\/[^"]+)"/g) || [];
  const images = content.match(/"([^"]+\.(png|jpg|jpeg|svg|webp|avif))"/g) || [];
  
  console.log('URLs:', Array.from(new Set(urls)).slice(0, 10));
  console.log('Images:', Array.from(new Set(images)).slice(0, 15));
}

inspectFile('root-80Ntws0I.js');
inspectFile('home-Dp56e20Z.js');
inspectFile('sport._sportName-BdH1iNqG.js');
inspectFile('contact-us-DtJK4ju9.js');
