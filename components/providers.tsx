"use client";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import { I18nProvider } from "@heroui/react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StickyContactButton } from "@/components/ui/sticky-contact-button";
import { AnimatedMascot } from "@/components/mascot/animated-mascot";

export function Providers({ children, locale }: { children: React.ReactNode; locale: string }) {
  return <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    <I18nProvider locale={locale}><TooltipProvider>
      <MotionConfig reducedMotion="user">
        {children}
        <StickyContactButton />
        <AnimatedMascot />
      </MotionConfig><Toaster richColors />
    </TooltipProvider></I18nProvider>
  </ThemeProvider>;
}

