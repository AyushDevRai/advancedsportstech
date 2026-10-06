"use client";

import { motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({ children, gap = 16, speed = 60, speedOnHover = 20, direction = "horizontal", reverse = false, className }: InfiniteSliderProps) {
  const container = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const cycle = useRef(0);
  const hovered = useRef(false);
  const focused = useRef(false);
  const currentSpeed = useRef(speed);
  const translation = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const inView = useInView(container);

  useEffect(() => {
    const element = group.current;
    if (!element) return;
    const measure = () => { cycle.current = (direction === "horizontal" ? element.getBoundingClientRect().width : element.getBoundingClientRect().height) + gap; };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [direction, gap]);

  useAnimationFrame((_, delta) => {
    if (reducedMotion || !inView || !cycle.current) return;
    const targetSpeed = hovered.current || focused.current ? speedOnHover : speed;
    const elapsed = Math.min(delta, 64);
    currentSpeed.current += (targetSpeed - currentSpeed.current) * (1 - Math.exp(-elapsed / 160));
    const next = translation.get() + (reverse ? 1 : -1) * currentSpeed.current * elapsed / 1000;
    translation.set(((next % cycle.current) + cycle.current) % cycle.current - cycle.current);
  });

  return <div ref={container} className={cn("infinite-slider overflow-hidden", className)} onMouseEnter={() => { hovered.current = true; }} onMouseLeave={() => { hovered.current = false; }} onFocusCapture={() => { focused.current = true; }} onBlurCapture={() => { focused.current = false; }}>
    <motion.div className="infinite-slider-track flex w-max" style={{ ...(direction === "horizontal" ? { x: reducedMotion ? 0 : translation } : { y: reducedMotion ? 0 : translation }), gap, flexDirection: direction === "horizontal" ? "row" : "column" }}>
      <div ref={group} className="infinite-slider-group flex shrink-0 items-center" style={{ gap, flexDirection: direction === "horizontal" ? "row" : "column" }}>{children}</div>
      <div className="infinite-slider-copy flex shrink-0 items-center" aria-hidden="true" inert style={{ gap, flexDirection: direction === "horizontal" ? "row" : "column" }}>{children}</div>
    </motion.div>
  </div>;
}
