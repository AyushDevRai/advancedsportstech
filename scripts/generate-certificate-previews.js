const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const certificatesDir = path.join(__dirname, '..', 'public', 'certificates');
const previewsDir = path.join(certificatesDir, 'previews');

if (!fs.existsSync(previewsDir)) {
  fs.mkdirSync(previewsDir, { recursive: true });
}

const files = fs.readdirSync(certificatesDir).filter(f => f.endsWith('.pdf'));

console.log(`Found ${files.length} certificates to process.`);

// Slug generator
function slugify(name) {
  return name
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function run() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 800, height: 1150 }
  });
  const page = await context.newPage();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const slug = slugify(file);
    const dest = path.join(previewsDir, `${slug}.png`);

    if (fs.existsSync(dest)) {
      console.log(`[${i + 1}/${files.length}] Skipping existing: ${slug}`);
      continue;
    }

    const url = `http://localhost:3000/certificates/${encodeURIComponent(file)}`;
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 15000 });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: dest,
        clip: { x: 0, y: 48, width: 800, height: 1092 }
      });
      console.log(`[${i + 1}/${files.length}] Generated: ${slug}`);
    } catch (err) {
      console.error(`[${i + 1}/${files.length}] Failed ${file}:`, err.message);
    }
  }

  await browser.close();
  console.log('All certificate previews processed!');
}

run().catch(console.error);
