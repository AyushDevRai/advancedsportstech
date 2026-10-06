import { chromium, expect } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const origin = process.env.AST_PREVIEW_URL ?? "http://localhost:3001";
await mkdir(".cache/navigation-qa", { recursive: true });
const results = [];
try {
  for (const width of [1440, 1024]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(origin, { waitUntil: "networkidle" });
    const triggers = page.locator(".desktop-navigation");
    for (const [name, count] of [["Products", 7], ["Sports", 8], ["Services", 8], ["Projects", 6], ["Downloads", 3], ["Company", 3]]) {
      const trigger = triggers.getByRole("button", { name, exact: true });
      await trigger.hover();
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      const panel = page.locator(".mega-panel[data-state=open]");
      await expect(panel).toBeVisible();
      await expect(panel.locator(name === "Downloads" ? ".mega-download-group" : "[data-menu-entry]")).toHaveCount(count);
      await page.waitForTimeout(250);
      const dimensions = await panel.boundingBox();
      const bar = await page.locator(".nav-glass").boundingBox();
      assert.ok(Math.abs(dimensions.x - bar.x) < 3 && Math.abs(dimensions.width - bar.width) < 3, `${name} panel must align with the full navbar: ${JSON.stringify({ dimensions, bar })}`);
      // Move from trigger into the panel and wait beyond the hover-close timeout.
      await panel.locator(name === "Downloads" ? ".mega-download-row a" : "[data-menu-entry]").first().hover();
      await page.waitForTimeout(400);
      await expect(panel).toBeVisible();
      for (const img of await panel.locator("img").all()) await expect.poll(() => img.evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
      await page.screenshot({ path: `.cache/navigation-qa/${width}-${name.toLowerCase()}.png` });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
      await page.keyboard.press("Escape");
      await expect(panel).not.toBeVisible();
    }
    await triggers.getByRole("button", { name: "Products", exact: true }).hover();
    await page.getByRole("tab", { name: "Synthetic Turf", exact: true }).click();
    await expect(page.locator("[data-menu-entry]:visible")).toHaveCount(2);
    await expect(page.locator(".mega-panel[data-state=open]")).toContainText("Hockey Turf");
    await expect(page.locator(".mega-panel[data-state=open]")).toContainText("Football Turf");
    await page.getByRole("tab", { name: "SmarTracks", exact: true }).click();
    await expect(page.locator("[data-menu-entry]:visible")).toHaveCount(2);
    await expect(page.locator(".mega-panel[data-state=open]")).toContainText("Wireless/Mobile Timing Gate");
    await page.getByRole("tab", { name: "Athletic Track", exact: true }).click();
    await expect(page.locator(".mega-model-links a")).toHaveCount(3);
    await page.screenshot({ path: `.cache/navigation-qa/${width}-track-category.png` });
    await page.keyboard.press("Escape");
    const services = triggers.getByRole("button", { name: "Services", exact: true });
    await services.focus();
    await services.press("Space");
    await expect(page.locator(".mega-panel[data-state=open]")).toBeVisible();
    await page.locator(".mega-panel[data-state=open]").getByRole("link", { name: "Construction", exact: true }).click();
    await expect(page.locator(".mega-panel[data-state=open]")).toHaveCount(0);
    await expect(page.locator("#service-construction button")).toHaveAttribute("aria-expanded", "true");
    assert.deepEqual(errors, []);
    results.push({ viewport: width, checks: "six hover panels, all imagery, panel alignment, pointer transit, product categories, brochures, Escape, keyboard activation, service destination, no overflow or browser errors" });
    console.log(`${width}: passed`);
    await page.close();
  }
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(origin, { waitUntil: "networkidle" });
  await mobile.getByRole("button", { name: "Open navigation menu" }).click();
  await mobile.locator(".mobile-nav").getByRole("button", { name: "Downloads", exact: true }).click();
  await expect(mobile.locator(".mobile-nav .mobile-nav-links a:visible")).toHaveCount(9);
  await mobile.locator(".mobile-nav").getByRole("button", { name: "Company", exact: true }).click();
  await expect(mobile.locator(".mobile-nav").getByRole("link", { name: "Career", exact: true })).toBeVisible();
  assert.equal(await mobile.evaluate(() => document.documentElement.scrollWidth), 390);
  await mobile.screenshot({ path: ".cache/navigation-qa/mobile.png" });
  results.push({ viewport: 390, checks: "mobile accordion, all nine downloads, Career, no overflow" });
  await writeFile(".cache/navigation-qa/results.json", JSON.stringify(results, null, 2));
  console.log("Mobile: passed");
} finally { await browser.close(); }
