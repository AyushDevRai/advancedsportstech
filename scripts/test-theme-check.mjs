import { chromium } from "@playwright/test";
import path from "node:path";

const artifactDir = "C:/Users/raiaa/.gemini/antigravity-ide/brain/3e0febdb-7e01-48ed-923f-760304f3fbb2";

const browser = await chromium.launch({ channel: "msedge", headless: true });

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3001/our-projects in default (light) mode...");
  await page.goto("http://localhost:3001/our-projects", { waitUntil: "networkidle" });

  // Take screenshot of hero
  await page.screenshot({ path: path.join(artifactDir, "theme_test_hero_light.png") });
  console.log("Saved theme_test_hero_light.png");

  // Scroll to stats
  await page.locator(".projects-stats-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_stats_light.png") });
  console.log("Saved theme_test_stats_light.png");

  // Scroll to map
  await page.locator("#map-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_map_light.png") });
  console.log("Saved theme_test_map_light.png");

  // Scroll to creations
  await page.locator(".projects-showcase-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_creations_light.png") });
  console.log("Saved theme_test_creations_light.png");

  // Now toggle to dark mode
  console.log("Toggling to dark mode via theme switch or document element...");
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
  });
  await page.waitForTimeout(500);

  // Take screenshots in dark mode
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_hero_dark.png") });
  console.log("Saved theme_test_hero_dark.png");

  await page.locator("#map-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_map_dark.png") });
  console.log("Saved theme_test_map_dark.png");

  await page.locator(".projects-showcase-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_creations_dark.png") });
  console.log("Saved theme_test_creations_dark.png");

  // Mobile viewport test (390 x 844)
  console.log("Testing mobile viewport 390x844...");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    document.documentElement.classList.remove("dark");
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_hero_mobile_light.png") });
  console.log("Saved theme_test_hero_mobile_light.png");

  await page.locator("#map-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(artifactDir, "theme_test_map_mobile_light.png") });
  console.log("Saved theme_test_map_mobile_light.png");

} catch (err) {
  console.error("Error during theme test:", err);
} finally {
  await browser.close();
}
