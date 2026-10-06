import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const browser = await chromium.launch({ channel: "msedge", headless: true });
await mkdir(".cache/homepage-qa", { recursive: true });
for (const [name, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844], ["tablet", 768, 1024]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: "no-preference" });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(process.env.AST_PREVIEW_URL ?? "http://localhost:3001", { waitUntil: "networkidle" });
  await page.screenshot({ path: `.cache/homepage-qa/${name}-hero.png` });
  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `.cache/homepage-qa/${name}-about.png` });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `.cache/homepage-qa/${name}-projects.png` });
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `.cache/homepage-qa/${name}-contact.png` });
  console.log(JSON.stringify({ name, errors, measurements: await page.evaluate(() => ({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, hero: document.querySelector(".home-hero").getBoundingClientRect().height, sections: [...document.querySelectorAll("main section[id]")].map(s => s.id), videoSource: document.querySelector("video").currentSrc })) }));
  await context.close();
}
await browser.close();
