import { chromium } from "@playwright/test";
import path from "node:path";

const artifactDir = "C:/Users/raiaa/.gemini/antigravity-ide/brain/3e0febdb-7e01-48ed-923f-760304f3fbb2";

const browser = await chromium.launch({ channel: "msedge", headless: true });

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3001/our-projects in light mode...");
  await page.goto("http://localhost:3001/our-projects", { waitUntil: "networkidle" });

  // 1. Screenshot of the updated Hero section showing full image with minimal feather blend at bottom
  await page.screenshot({ path: path.join(artifactDir, "fixed_hero_subtle_blend_light.png") });
  console.log("Saved fixed_hero_subtle_blend_light.png");

  // 2. Scroll to creations and click the first card (Birsa Munda) to open modal
  await page.locator(".projects-showcase-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  // Click the Birsa Munda card (index 1 or text)
  const birsaCard = page.locator(".showcase-card").filter({ hasText: "Birsa Munda" }).first();
  await birsaCard.click();
  await page.waitForTimeout(500);

  // Verify modal is open and take screenshot
  await page.screenshot({ path: path.join(artifactDir, "fixed_modal_opaque_light.png") });
  console.log("Saved fixed_modal_opaque_light.png");

  // Close modal
  await page.locator(".dialog-close-btn").click();
  await page.waitForTimeout(400);

  // 3. Switch to Dark Mode and test modal in dark mode
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
  });
  await page.waitForTimeout(400);

  // Open modal in dark mode
  const kalingaCard = page.locator(".showcase-card").filter({ hasText: "Kalinga Stadium" }).first();
  await kalingaCard.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "fixed_modal_opaque_dark.png") });
  console.log("Saved fixed_modal_opaque_dark.png");

  // Close modal in dark mode
  await page.locator(".dialog-close-btn").click();
  await page.waitForTimeout(400);

  // Scroll to hero in dark mode
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(artifactDir, "fixed_hero_subtle_blend_dark.png") });
  console.log("Saved fixed_hero_subtle_blend_dark.png");

} catch (err) {
  console.error("Error during test:", err);
} finally {
  await browser.close();
}
