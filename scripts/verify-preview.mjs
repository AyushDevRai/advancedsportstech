import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

await mkdir(".cache/qa", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];
const baseUrl = `${(process.env.AST_PREVIEW_URL || "http://localhost:3001").replace(/\/$/, "")}/design-system`;
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }, { width: 768, height: 1024 }]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.getByRole("heading", { level: 1 }).waitFor();
    await page.evaluate(() => document.fonts.ready);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
    }
    await page.waitForFunction(() => [...document.images].every(image => image.complete && image.naturalWidth > 0));
    await page.evaluate(() => scrollTo(0, 0));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, "Page must not overflow horizontally");
    await page.screenshot({ path: `.cache/qa/light-${viewport.width}.png`, fullPage: true });
    await page.getByRole("button", { name: "Contact details", exact: true }).click();
    await page.getByRole("dialog").waitFor();
    assert.match(await page.getByRole("dialog").innerText(), /info@ast-sports.com/);
    await page.keyboard.press("Escape");
    await page.getByRole("dialog").waitFor({ state: "hidden" });
    await page.getByRole("tab", { name: "LIGATURF", exact: true }).click();
    assert.equal(await page.getByRole("tab", { name: "LIGATURF", exact: true }).getAttribute("aria-selected"), "true");
    assert.match(await page.getByRole("tabpanel").innerText(), /Football turf/);
    await page.keyboard.press("ArrowRight");
    assert.equal(await page.getByRole("tab", { name: "SMARTRACKS", exact: true }).getAttribute("aria-selected"), "true", "Tabs support arrow-key selection");
    await page.getByRole("button", { name: "01 Conceptualization" }).click();
    await page.getByText("This service is listed on AST’s current website.", { exact: false }).waitFor();
    await page.getByRole("button", { name: "Switch to dark theme" }).click();
    await page.waitForFunction(() => document.documentElement.classList.contains("dark"));
    await page.screenshot({ path: `.cache/qa/dark-${viewport.width}.png`, fullPage: true });
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.evaluate(() => document.documentElement.classList.contains("dark")), true, "Theme choice persists");
    assert.deepEqual(errors, [], "No client errors");
    results.push({ viewport, status: "passed", checks: ["HTTP 200", "no overflow", "dialog and Escape", "tabs and arrow keys", "accordion", "theme and persistence", "no client errors"] });
    await context.close();
  }
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches), true);
  assert.equal(await page.locator("[style*='offset-path']").count(), 0, "Decorative beam is disabled with reduced motion");
  assert.equal((await page.goto(`${baseUrl}/design-system`)).status(), 200);
  await context.close();
  await writeFile(".cache/qa/results.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await browser.close(); }
