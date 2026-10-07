import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const artifactDir = "C:/Users/raiaa/.gemini/antigravity-ide/brain/3e0febdb-7e01-48ed-923f-760304f3fbb2";
await mkdir(artifactDir, { recursive: true });

const browser = await chromium.launch({ channel: "msedge", headless: true });

try {
  console.log("=== STEP 1: Verifying Maintenance Page Non-Sticky Navigation ===");
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  
  await page.goto("http://localhost:3001/maintenance", { waitUntil: "networkidle" });
  
  // Verify computed position of section nav
  const navPosition = await page.locator(".maintenance-section-nav").evaluate(el => {
    const style = window.getComputedStyle(el);
    return {
      position: style.position,
      top: style.top
    };
  });
  console.log("Maintenance section nav computed style:", navPosition);
  assert.equal(navPosition.position, "relative", "Nav should be relative, not sticky or fixed!");
  
  // Scroll down 1200px (past hero section)
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(500);
  
  // Check if nav has scrolled off or remained in place
  const navBounding = await page.locator(".maintenance-section-nav").evaluate(el => {
    return el.getBoundingClientRect().top;
  });
  console.log("Maintenance section nav top bounding after 1200px scroll:", navBounding);
  assert.ok(navBounding < 0, "Nav should scroll naturally with page and not stick to top!");
  
  await page.screenshot({ path: path.join(artifactDir, "maintenance_scrolled_fixed.png") });
  console.log("Saved maintenance_scrolled_fixed.png");

  console.log("\n=== STEP 2: Verifying Projects Dropdown 'Show All Projects' Button ===");
  await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });
  
  // Open Projects dropdown
  const projectsTrigger = page.locator(".desktop-navigation").getByRole("button", { name: "Projects", exact: true });
  await projectsTrigger.click();
  await page.waitForTimeout(400);
  
  const showAllBtn = page.locator(".mega-show-all-btn");
  await expect(showAllBtn).toBeVisible();
  const btnText = await showAllBtn.textContent();
  console.log("Projects dropdown button text:", btnText?.trim());
  assert.ok(btnText?.includes("Show All Projects"), "Button must have 'Show All Projects' text!");
  
  await page.screenshot({ path: path.join(artifactDir, "projects_dropdown_btn.png") });
  console.log("Saved projects_dropdown_btn.png");
  
  // Click Show All Projects and verify navigation
  await showAllBtn.click();
  await page.waitForURL("**/our-projects", { timeout: 8000 });
  console.log("Successfully navigated to:", page.url());

  console.log("\n=== STEP 3: Verifying /our-projects Page ===");
  // Ensure networkidle
  await page.waitForLoadState("networkidle");
  
  // Check Hero Section
  await expect(page.locator("h1")).toContainText("OUR PROJECTS");
  await page.screenshot({ path: path.join(artifactDir, "our_projects_hero.png") });
  console.log("Saved our_projects_hero.png");

  // Check Animated Counters
  await page.locator(".projects-stats-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000); // Allow counting animation
  
  const counterValues = await page.locator(".animated-counter-value").allTextContents();
  console.log("Animated counter values rendered:", counterValues);
  assert.ok(counterValues.some(v => v.includes("50+")), "Should have 50+ athletic tracks!");
  assert.ok(counterValues.some(v => v.includes("56+")), "Should have 56+ hockey turfs!");
  assert.ok(counterValues.some(v => v.includes("4+")), "Should have 4+ football turfs!");
  assert.ok(counterValues.some(v => v.includes("100+")), "Should have 100+ total projects!");
  
  await page.screenshot({ path: path.join(artifactDir, "our_projects_counters.png") });
  console.log("Saved our_projects_counters.png");

  // Check India Map & Pins
  console.log("\n=== STEP 4: Verifying India Map & Animated Pulsing Pins ===");
  await page.locator("#map-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  
  const pinsCount = await page.locator(".project-pin-group").count();
  console.log("Interactive pins rendered on India SVG map:", pinsCount);
  assert.ok(pinsCount > 50, "Should have dozens of pins plotted across India!");
  
  await page.screenshot({ path: path.join(artifactDir, "india_map_all_pins.png") });
  console.log("Saved india_map_all_pins.png");

  // Test Tooltip on Pin Click
  const firstPin = page.locator(".project-pin-group").first();
  await firstPin.click({ force: true });
  await page.waitForTimeout(400);
  
  await expect(page.locator(".map-tooltip-overlay-card")).toBeVisible();
  const venueText = await page.locator(".tooltip-venue-name").textContent();
  console.log("Active venue tooltip card opened:", venueText);
  
  await page.screenshot({ path: path.join(artifactDir, "india_map_tooltip.png") });
  console.log("Saved india_map_tooltip.png");

  // Test Category Filter Tab
  console.log("\n=== STEP 5: Testing Category Filter Pills ===");
  const hockeyPill = page.locator(".map-cat-pill").filter({ hasText: "Hockey Turf" });
  await hockeyPill.click();
  await page.waitForTimeout(500);
  
  const hockeyPinsCount = await page.locator(".project-pin-group").count();
  console.log("Pins count after filtering by Hockey Turf:", hockeyPinsCount);
  assert.ok(hockeyPinsCount >= 50, "Should have ~56 hockey pins!");
  
  await page.screenshot({ path: path.join(artifactDir, "india_map_hockey_filtered.png") });
  console.log("Saved india_map_hockey_filtered.png");

  // Test Our Creations Grid
  console.log("\n=== STEP 6: Verifying 'Our Creations' Portfolio Grid ===");
  await page.locator("#creations-section").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  
  const creationCardsCount = await page.locator(".showcase-card").count();
  console.log("Showcase creations cards count:", creationCardsCount);
  assert.ok(creationCardsCount >= 10, "Should have 10+ prominent creations cards!");
  
  await page.screenshot({ path: path.join(artifactDir, "our_creations_grid.png") });
  console.log("Saved our_creations_grid.png");

  // Open a creation modal
  const firstCreationCard = page.locator(".showcase-card").first();
  await firstCreationCard.click();
  await page.waitForTimeout(400);
  
  await expect(page.locator(".project-detail-dialog")).toBeVisible();
  const modalTitle = await page.locator(".dialog-title").textContent();
  console.log("Opened creation dialog for:", modalTitle);
  
  await page.screenshot({ path: path.join(artifactDir, "creation_modal_dialog.png") });
  console.log("Saved creation_modal_dialog.png");
  
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  // Mobile responsiveness test
  console.log("\n=== STEP 7: Testing Mobile Responsiveness (390px) ===");
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3001/our-projects", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(500);
  
  await mobilePage.screenshot({ path: path.join(artifactDir, "our_projects_mobile_hero.png") });
  
  await mobilePage.locator("#map-section").scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: path.join(artifactDir, "our_projects_mobile_map.png") });
  console.log("Saved mobile screenshots");

  console.log("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY!");
} finally {
  await browser.close();
}
