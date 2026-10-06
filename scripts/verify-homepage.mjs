import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const url = process.env.AST_PREVIEW_URL ?? "http://localhost:3001";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];
await mkdir(".cache/homepage-qa", { recursive: true });
const allErrors = [];
try {
  for (const [name, width, height] of [["desktop", 1440, 1000], ["tablet", 768, 1024], ["mobile", 390, 844], ["small-mobile", 320, 740]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: "no-preference" });
    const page = await context.newPage();
    page.on("pageerror", error => allErrors.push({ name, error: error.message }));
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toHaveText(/FACILITATINGEXCELLENCE/);
    await expect.poll(() => page.locator("video").evaluate(video => !video.paused && video.currentTime > 0)).toBe(true);
    assert.equal(await page.locator("video").evaluate(video => video.muted), true);
    const source = await page.locator("video").evaluate(video => video.currentSrc);
    assert.ok(source.includes(width < 768 ? "hero-mobile.mp4" : "hero-desktop"));
    await page.getByRole("button", { name: "Pause background video" }).click();
    assert.equal(await page.locator("video").evaluate(video => video.paused), true);
    await page.getByRole("button", { name: "Play background video" }).click();
    await expect.poll(() => page.locator("video").evaluate(video => !video.paused)).toBe(true);
    await page.screenshot({ path: `.cache/homepage-qa/${name}-hero.png` });
    if (width > 1000) {
      for (const group of ["Products", "Sports", "Services", "Projects", "Company"]) {
        const trigger = page.locator(".desktop-navigation").getByRole("button", { name: group, exact: true });
        await trigger.focus();
        await trigger.press("Space");
        await expect(trigger).toHaveAttribute("data-state", "open");
        await expect(page.locator(".nav-dropdown:visible").getByRole("link").first()).toBeVisible();
        await page.keyboard.press("Escape");
      }
    } else {
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await expect(page.locator(".mobile-nav")).toBeVisible();
      await page.locator(".mobile-nav").getByRole("button", { name: "Services", exact: true }).click();
      await page.locator(".mobile-nav").getByRole("link", { name: "Construction", exact: true }).click();
      await expect(page.locator(".mobile-nav")).not.toBeVisible();
    }
    await page.locator("#services").scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator("video").evaluate(video => video.paused)).toBe(true);
    for (const service of ["Conceptualization", "Survey, Planning & Designing", "Construction", "Refurbishment", "Line Marking", "Testing & Certification", "Sports Lighting", "Cleaning & Maintenance"]) {
      const button = page.locator(".service-list").getByRole("button", { name: new RegExp(service.replace(/&/g, "&")) });
      await button.click();
      await expect(button).toHaveAttribute("aria-expanded", "true");
      await expect(page.locator(".service-description:visible")).toContainText(/\w{10}/);
    }
    await page.locator("#projects").scrollIntoViewIfNeeded();
    if (width > 900) {
      const wheel = page.getByRole("listbox", { name: "OUR CREATIONS" });
      await wheel.focus();
      await wheel.press("ArrowDown");
      await wheel.press("ArrowDown");
      await expect.poll(() => wheel.getAttribute("aria-activedescendant")).toBe("works-wheel-1");
      await wheel.press("Enter");
      await expect(page.getByRole("dialog")).toContainText("Kalinga Stadium");
      await page.getByRole("button", { name: "Next project", exact: true }).click();
      await expect(page.getByRole("dialog")).toContainText("Jawaharlal Nehru Stadium");
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).not.toBeVisible();
      await page.getByRole("button", { name: "Grid view", exact: true }).click();
    }
    await expect(page.locator(".project-card:visible")).toHaveCount(6);
    await page.locator(".project-filters").getByRole("button", { name: "Our Creations", exact: true }).click();
    await expect(page.locator(".project-card:visible")).toHaveCount(3);
    await page.locator(".project-card:visible").first().click();
    await expect(page.getByRole("dialog")).toContainText("M.P. Sports College");
    await page.getByRole("button", { name: "Close project", exact: true }).click();
    await page.locator(".project-filters").getByRole("button", { name: "All", exact: true }).click();
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Send message", exact: true }).click();
    await expect(page.locator(".form-error")).toHaveCount(5);
    await page.getByLabel("Name", { exact: false }).fill("Homepage QA");
    await page.getByLabel("Email", { exact: false }).fill("qa@example.com");
    await page.getByLabel("Mobile", { exact: false }).fill("+91 9999999999");
    await page.getByLabel("Subject", { exact: false }).fill("Track enquiry");
    await page.getByLabel("Message", { exact: false }).fill("Please discuss a running track in New Delhi.");
    await page.getByRole("button", { name: "Send message", exact: true }).click();
    await expect(page.locator(".form-result")).toContainText("Your enquiry is ready");
    assert.ok((await page.getByRole("link", { name: "Open email draft" }).getAttribute("href")).includes("mailto:info@ast-sports.com"));
    assert.ok((await page.getByRole("link", { name: "Send via WhatsApp" }).getAttribute("href")).includes("917290036622"));
    // Visit every section, catching lazy-image and overflow issues below the fold.
    for (const section of await page.locator("main section[id]").all()) {
      await section.scrollIntoViewIfNeeded();
      try { await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true); }
      catch (error) { console.log(name, await section.getAttribute("id"), await page.evaluate(() => ({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, elements: [...document.querySelectorAll("body *")].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => ({ class: el.className, right: el.getBoundingClientRect().right })).slice(0, 12) }))); throw error; }
    }
    await page.locator("#clients summary").click();
    for (const image of await page.locator(".all-client-grid img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
    }
    const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].filter(a => a.getAttribute("href").length > 1 && !document.getElementById(a.getAttribute("href").slice(1))).map(a => a.getAttribute("href")));
    assert.deepEqual(brokenAnchors, []);
    await page.evaluate(() => scrollTo(0, 0));
    await page.getByRole("button", { name: "Toggle colour theme" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.screenshot({ path: `.cache/homepage-qa/${name}-dark.png` });
    results.push({ name, viewport: `${width}x${height}`, videoSource: source, checks: "video, navigation, eight services, filters, lightbox, form, all client logos, anchors, theme, overflow" });
    console.log(`${name}: passed`);
    await context.close();
  }
  for (const preference of ["reduced-motion", "save-data", "slow-connection"]) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: preference === "reduced-motion" ? "reduce" : "no-preference" });
    const page = await context.newPage();
    const videos = [];
    page.on("request", request => { if (/hero-.*\.(mp4|webm)/.test(request.url())) videos.push(request.url()); });
    if (preference !== "reduced-motion") await page.addInitScript(({ saveData, effectiveType }) => { Object.defineProperty(navigator, "connection", { value: { saveData, effectiveType, addEventListener() {}, removeEventListener() {} }, configurable: true }); }, { saveData: preference === "save-data", effectiveType: preference === "slow-connection" ? "2g" : "4g" });
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    assert.deepEqual(videos, []);
    assert.equal(await page.locator("video").getAttribute("src"), null);
    if (preference === "reduced-motion") {
      await page.locator("#projects").scrollIntoViewIfNeeded();
      await expect(page.locator(".project-card:visible")).toHaveCount(6);
    }
    results.push({ name: preference, checks: "poster visible, zero video requests" });
    console.log(`${preference}: passed`);
    await context.close();
  }
  assert.deepEqual(allErrors, []);
  await writeFile(".cache/homepage-qa/results.json", JSON.stringify({ results, browserErrors: allErrors }, null, 2));
} finally { await browser.close(); }
