"use client";

import { useEffect } from "react";

export function HomepageEffects() {
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
