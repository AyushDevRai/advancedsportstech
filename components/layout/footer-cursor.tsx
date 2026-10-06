"use client";

import { useEffect, useRef } from "react";

export function FooterCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const footer = cursor?.closest("footer");
    if (!cursor || !footer) return;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let detach = () => {};

    const setup = () => {
      detach();
      if (!pointer.matches || motion.matches) return;
      let frame = 0;
      let active = false;
      let x = 0;
      let y = 0;
      let targetX = 0;
      let targetY = 0;

      const hide = () => {
        active = false;
        cursor.removeAttribute("data-active");
        cursor.removeAttribute("data-option");
        cancelAnimationFrame(frame);
        frame = 0;
      };
      const focusOption = (element: Element | null) => {
        cursor.toggleAttribute("data-option", Boolean(element?.closest("a, button, input, select, textarea, [role='button']")));
      };
      const draw = () => {
        x += (targetX - x) * 0.28;
        y += (targetY - y) * 0.28;
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.1) frame = requestAnimationFrame(draw);
        else frame = 0;
      };
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        targetX = event.clientX;
        targetY = event.clientY;
        if (!active) {
          x = targetX;
          y = targetY;
          cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          active = true;
          cursor.setAttribute("data-active", "");
        }
        focusOption(event.target instanceof Element ? event.target : null);
        if (!frame) frame = requestAnimationFrame(draw);
      };
      const scroll = () => {
        if (!active) return;
        const element = document.elementFromPoint(targetX, targetY);
        if (!element || !footer.contains(element)) hide();
        else focusOption(element);
      };

      footer.addEventListener("pointermove", move);
      footer.addEventListener("pointerleave", hide);
      window.addEventListener("blur", hide);
      window.addEventListener("scroll", scroll, { passive: true });
      detach = () => {
        hide();
        footer.removeEventListener("pointermove", move);
        footer.removeEventListener("pointerleave", hide);
        window.removeEventListener("blur", hide);
        window.removeEventListener("scroll", scroll);
      };
    };

    setup();
    pointer.addEventListener("change", setup);
    motion.addEventListener("change", setup);
    return () => {
      detach();
      pointer.removeEventListener("change", setup);
      motion.removeEventListener("change", setup);
    };
  }, []);

  return <span ref={cursorRef} className="footer-cursor" aria-hidden="true"><span className="footer-cursor-ring" /></span>;
}
