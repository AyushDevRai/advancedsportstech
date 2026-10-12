"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

/**
 * InteractiveGridPattern renders a grid pattern with hardware-accelerated CSS hover.
 * Uses pure CSS :hover to eliminate React state updates and main-thread re-renders on mousemove.
 */
export const InteractiveGridPattern = memo(function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;

  return (
    <svg
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-neutral-400/20 fill-transparent transition-colors duration-500 ease-out hover:fill-[#d32628]/15 hover:stroke-[#d32628]/40 hover:duration-75",
              squaresClassName
            )}
          />
        );
      })}
    </svg>
  );
});
