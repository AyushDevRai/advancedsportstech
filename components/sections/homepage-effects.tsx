"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function HomepageEffects() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scroll: Lenis | undefined;
    let anchorTimer = 0;
    const settleServiceAnchor = () => {
      window.clearTimeout(anchorTimer);
      const hash = window.location.hash;
      if (!hash.startsWith("#service-")) return;
      // Wait for the newly selected panel to finish expanding before aligning its heading.
      anchorTimer = window.setTimeout(() => {
        const target = document.getElementById(hash.slice(1));
        if (!target || window.location.hash !== hash) return;
        const complete = () => window.dispatchEvent(new Event("ast:anchor-settled"));
        const position = window.scrollY + target.getBoundingClientRect().top - 120;
        if (scroll) scroll.scrollTo(position, { onComplete: complete });
        else {
          window.scrollTo({ top: position, behavior: "instant" });
          complete();
        }
      }, 700);
    };
    const cancelAnchor = () => window.clearTimeout(anchorTimer);
    const syncScrollLock = () => {
      if (document.body.hasAttribute("data-scroll-locked")) scroll?.stop();
      else scroll?.start();
    };
    const setup = () => {
      scroll?.destroy();
      scroll = undefined;
      if (query.matches) return;
      scroll = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        anchors: true,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
      });
      syncScrollLock();
    };
    setup();
    settleServiceAnchor();
    const lockObserver = new MutationObserver(syncScrollLock);
    lockObserver.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked"] });
    query.addEventListener("change", setup);
    window.addEventListener("hashchange", settleServiceAnchor);
    window.addEventListener("wheel", cancelAnchor, { passive: true });
    window.addEventListener("touchstart", cancelAnchor, { passive: true });
    window.addEventListener("keydown", cancelAnchor);
    return () => {
      window.clearTimeout(anchorTimer);
      scroll?.destroy();
      lockObserver.disconnect();
      query.removeEventListener("change", setup);
      window.removeEventListener("hashchange", settleServiceAnchor);
      window.removeEventListener("wheel", cancelAnchor);
      window.removeEventListener("touchstart", cancelAnchor);
      window.removeEventListener("keydown", cancelAnchor);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!query.matches) animations.push(entry.target.animate([{ opacity: 0.15, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 550, easing: "cubic-bezier(.2,.7,.3,1)" }));
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    document.querySelectorAll(".section-heading, .about-layout, .contact-layout").forEach(element => observer.observe(element));
    const stop = () => { if (query.matches) { observer.disconnect(); animations.forEach(animation => animation.finish()); } };
    query.addEventListener("change", stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); query.removeEventListener("change", stop); };
  }, []);
  return null;
}
