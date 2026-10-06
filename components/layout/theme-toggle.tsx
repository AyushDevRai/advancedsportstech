"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
const subscribe = () => () => {};
export function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  return <Button variant="outline" size="icon" className="size-11 rounded-full" aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme(isDark ? "light" : "dark")}>
    {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
  </Button>;
}

