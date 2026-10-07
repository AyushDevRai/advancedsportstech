import { chromium } from "@playwright/test";
import path from "node:path";

const artifactDir = "C:/Users/raiaa/.gemini/antigravity-ide/brain/3e0febdb-7e01-48ed-923f-760304f3fbb2";

const browser = await chromium.launch({ channel: "msedge", headless: true });

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3001/our-projects...");
  await page.goto("http://localhost:3001/our-projects", { waitUntil: "networkidle" });

  // 1. Screenshot of the updated Hero section
  await page.screenshot({ path: path.join(artifactDir, "polished_hero_tall_image_no_shadow.png") });
  console.log("Saved polished_hero_tall_image_no_shadow.png");

  // 2. Open Projects dropdown in navbar and capture screenshot
  const projectsTrigger = page.locator(".desktop-navigation").getByRole("button", { name: "Projects", exact: true });
  await projectsTrigger.click();
  await page.waitForTimeout(500);

  const showAllBtn = page.locator(".mega-show-all-btn");
  const btnBox = await showAllBtn.boundingBox();
  console.log("Show All Projects button dimensions:", btnBox);

  await page.screenshot({ path: path.join(artifactDir, "polished_navbar_single_line_btn.png") });
  console.log("Saved polished_navbar_single_line_btn.png");

} catch (err) {
  console.error("Error during test:", err);
} finally {
  await browser.close();
}
