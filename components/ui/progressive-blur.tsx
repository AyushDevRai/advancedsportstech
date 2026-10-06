"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export const GRADIENT_ANGLES = { top: 0, right: 90, bottom: 180, left: 270 };
export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  blurIntensity?: number;
} & HTMLMotionProps<"div">;

export function ProgressiveBlur({ direction = "bottom", blurLayers = 8, blurIntensity = .25, className, ...props }: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (layers + 1);
  return <div className={cn("relative", className)} aria-hidden="true">
    {Array.from({ length: layers }, (_, index) => {
      const stops = [index, index + 1, index + 2, index + 3].map((position, stop) => `rgba(255,255,255,${stop === 1 || stop === 2 ? 1 : 0}) ${position * segmentSize * 100}%`);
      const gradient = `linear-gradient(${GRADIENT_ANGLES[direction]}deg,${stops.join(",")})`;
      return <motion.div {...props} key={index} className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ maskImage: gradient, WebkitMaskImage: gradient, backdropFilter: `blur(${index * blurIntensity}px)`, WebkitBackdropFilter: `blur(${index * blurIntensity}px)` }} />;
    })}
  </div>;
}
