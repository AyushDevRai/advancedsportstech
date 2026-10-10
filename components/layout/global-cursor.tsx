"use client";

import { useEffect, useRef } from "react";

export function GlobalCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

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
        cursor.removeAttribute("data-down");
        cancelAnimationFrame(frame);
        frame = 0;
      };

      const focusOption = (element: Element | null) => {
        const isInteractive = Boolean(
          element?.closest(
            "a, button, input, select, textarea, [role='button'], .ast-button, summary, .sport-card, .counter-card, .cert-stream-card, .interactive-badge"
          )
        );
        cursor.toggleAttribute("data-option", isInteractive);
      };

      const draw = () => {
        x += (targetX - x) * 0.24;
        y += (targetY - y) * 0.24;
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.08) {
          frame = requestAnimationFrame(draw);
        } else {
          frame = 0;
        }
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

      const handleDown = () => cursor.setAttribute("data-down", "");
      const handleUp = () => cursor.removeAttribute("data-down");

      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("mouseleave", hide);
      window.addEventListener("blur", hide);
      window.addEventListener("mousedown", handleDown);
      window.addEventListener("mouseup", handleUp);

      detach = () => {
        hide();
        window.removeEventListener("pointermove", move);
        document.removeEventListener("mouseleave", hide);
        window.removeEventListener("blur", hide);
        window.removeEventListener("mousedown", handleDown);
        window.removeEventListener("mouseup", handleUp);
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

  return (
    <span ref={cursorRef} className="ast-global-cursor" aria-hidden="true">
      <span className="ast-global-cursor-ring" />
    </span>
  );
}
