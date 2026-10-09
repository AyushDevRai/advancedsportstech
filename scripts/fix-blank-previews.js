const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const certificatesDir = path.join(__dirname, '..', 'public', 'certificates');
const previewsDir = path.join(certificatesDir, 'previews');

function slugify(name) {
  return name
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const allPdfFiles = fs.readdirSync(certificatesDir).filter(f => f.endsWith('.pdf'));

// Find files whose preview is missing or < 30KB
const needsWork = allPdfFiles.filter(file => {
  const slug = slugify(file);
  const dest = path.join(previewsDir, `${slug}.png`);
  if (!fs.existsSync(dest)) return true;
  const stats = fs.statSync(dest);
  return stats.size < 30000;
});

console.log(`Found ${needsWork.length} files that need regeneration.`);

async function run() {
  const browser = await chromium.launch({ channel: 'msedge', headless: false });
  const context = await browser.newContext({
    viewport: { width: 800, height: 1150 }
  });
  const page = await context.newPage();

  for (let i = 0; i < needsWork.length; i++) {
    const file = needsWork[i];
    const slug = slugify(file);
    const dest = path.join(previewsDir, `${slug}.png`);

    const url = `http://localhost:3000/certificates/${encodeURIComponent(file)}`;
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 15000 });
      await page.waitForTimeout(3000);
      await page.screenshot({
        path: dest,
        clip: { x: 0, y: 48, width: 800, height: 1092 }
      });
      const newStats = fs.statSync(dest);
      console.log(`[${i + 1}/${needsWork.length}] Regenerated: ${slug} (${newStats.size} bytes)`);
    } catch (err) {
      console.error(`[${i + 1}/${needsWork.length}] Failed ${file}:`, err.message);
    }
  }

  await browser.close();
  console.log('Regeneration complete!');
}

run().catch(console.error);
