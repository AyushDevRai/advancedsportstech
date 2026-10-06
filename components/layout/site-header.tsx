"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company } from "@/content/ast";
import { navigationGroups } from "@/content/navigation";
import { NavigationPanel } from "@/components/layout/navigation-panel";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [surface, setSurface] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const previousY = useRef(0);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      setCompact(y > 80);
      if (Math.abs(y - previousY.current) > 6) setHidden(y > previousY.current && y > 450);
      previousY.current = y;
      const section = [...document.querySelectorAll<HTMLElement>("main [data-nav-theme]")].find((element) => { const rect = element.getBoundingClientRect(); return rect.top <= 96 && rect.bottom > 96; });
      setSurface(section?.dataset.navTheme ?? "light");
      frame = 0;
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(frame); };
  }, []);
  return (
    <>
    {activeMenu && <div className="nav-hover-backdrop" aria-hidden="true" onPointerDown={() => setActiveMenu("")} />}
    <header className={`site-header ${compact ? "is-compact" : ""} ${hidden && !mobileOpen && !activeMenu ? "is-hidden" : ""}`} data-surface={surface}>
      <div className="nav-glass">
        <a href="#home" aria-label="AST — homepage" className="nav-logo"><Image src="/brand/ast-logo.png" alt="Advanced Sports Technologies" width={116} height={60} sizes="116px" /></a>
        <NavigationMenu className="desktop-navigation mega-navigation" viewport={false} value={activeMenu} onValueChange={setActiveMenu} delayDuration={120} skipDelayDuration={250}>
          <NavigationMenuList>{navigationGroups.map((group) => <NavigationMenuItem key={group.id} value={group.id} className="mega-nav-item"><NavigationMenuTrigger className="nav-trigger">{group.name}</NavigationMenuTrigger><NavigationMenuContent className="mega-panel"><NavigationPanel group={group} onClose={() => setActiveMenu("")} /></NavigationMenuContent></NavigationMenuItem>)}</NavigationMenuList>
        </NavigationMenu>
        <div className="nav-controls"><span className="language-label" aria-label="Language: English">EN</span><button className="theme-switch" type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle colour theme"><Sun size={17} className="theme-sun" /><Moon size={17} className="theme-moon" /></button><a href="#contact" className="ast-button ast-button-red nav-quote">Get a quote <ArrowUpRight size={16} /></a>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger asChild><button className="mobile-menu-toggle" type="button" aria-label="Open navigation menu"><Menu size={24} /></button></SheetTrigger><SheetContent className="mobile-nav"><SheetHeader><SheetTitle><Image src="/brand/ast-logo.png" alt="AST" width={95} height={48} /></SheetTitle><SheetDescription>Advanced Sports Technologies</SheetDescription></SheetHeader><Accordion type="single" collapsible>{navigationGroups.map((group) => <AccordionItem key={group.id} value={group.id}><AccordionTrigger>{group.name}</AccordionTrigger><AccordionContent><div className="mobile-nav-links">{group.cards.map((card) => <a key={card.name} href={card.href} onClick={() => setMobileOpen(false)}>{card.name}<ArrowUpRight size={16} /></a>)}</div></AccordionContent></AccordionItem>)}</Accordion><a href="#contact" onClick={() => setMobileOpen(false)} className="ast-button ast-button-red">Get a quote <ArrowUpRight size={18} /></a><a href={company.contact.phoneHref} className="mobile-nav-phone"><Phone size={16} />{company.contact.phone}</a></SheetContent></Sheet>
        </div>
      </div>
    </header>
    </>
  );
}
