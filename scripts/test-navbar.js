const { chromium } = require('playwright-core');
const path = require('path');

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForSelector('.site-header', { timeout: 10000 });
  await page.waitForTimeout(1500);

  const navItems = ['Products', 'Services', 'Projects', 'Downloads', 'Company'];
  
  for (const name of navItems) {
    console.log(`Testing dropdown: ${name}`);
    const trigger = await page.locator(`.nav-trigger:has-text("${name}")`).first();
    await trigger.hover();
    await page.waitForTimeout(600);

    const dropdown = await page.$('.mega-dropdown-wrapper');
    if (dropdown) {
      const box = await dropdown.boundingBox();
      console.log(`${name} dropdown bounding box:`, box);
    } else {
      console.log(`No dropdown found for ${name}!`);
    }

    await page.screenshot({ path: path.join(__dirname, `test-${name.toLowerCase()}.png`) });
  }

  await browser.close();
  console.log('All tests completed successfully!');
}

run().catch(console.error);
