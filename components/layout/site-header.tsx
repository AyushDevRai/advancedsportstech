"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company } from "@/content/ast";
import { navigationGroups, type NavigationGroup, type NavigationCard } from "@/content/navigation";
import { NavigationPanel } from "@/components/layout/navigation-panel";

export function SiteHeader({ homeHref = "" }: { homeHref?: string }) {
  const groups: NavigationGroup[] = useMemo(() => navigationGroups.map((group) => ({
    ...group,
    href: group.href.startsWith("#") ? `${homeHref}${group.href}` : group.href,
    cards: group.cards.map((card: NavigationCard) => ({ ...card, href: card.href.startsWith("#") ? `${homeHref}${card.href}` : card.href })),
  })), [homeHref]);

  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [surface, setSurface] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const previousY = useRef(0);
  const { resolvedTheme, setTheme } = useTheme();

  // Notify video hero and global page when mega menu opens/closes to free 100% GPU resources
  useEffect(() => {
    const isMenuOpen = Boolean(activeMenu);
    if (isMenuOpen) {
      document.documentElement.setAttribute("data-mega-open", "true");
    } else {
      document.documentElement.removeAttribute("data-mega-open");
    }
    window.dispatchEvent(
      new CustomEvent("ast:mega-nav-toggle", {
        detail: { open: isMenuOpen },
      })
    );
  }, [activeMenu]);

  // Surface theme observer - uses asynchronous IntersectionObserver with zero layout thrashing
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main [data-nav-theme]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const theme = (entry.target as HTMLElement).dataset.navTheme;
            if (theme) setSurface(theme);
          }
        }
      },
      {
        rootMargin: "-80px 0px -75% 0px",
        threshold: 0,
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lightweight scroll position tracker for compact & hidden header (zero DOM queries)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      setCompact(y > 80);
      if (Math.abs(y - previousY.current) > 6) {
        setHidden(y > previousY.current && y > 450);
      }
      previousY.current = y;
      frame = 0;
    };
    update();
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openCategory = (id: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(id);
  };

  const handleMouseEnterTrigger = (id: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    openCategory(id);
  };

  const handleMouseLeaveNav = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setActiveMenu("");
    }, 280);
  };

  const activeGroup = groups.find(g => g.id === activeMenu);

  return (
    <>
      {/* High-performance GPU-composited CSS backdrop (zero Framer Motion JS main thread overhead) */}
      <div
        className={`nav-hover-backdrop ${activeMenu ? "is-active" : ""}`}
        aria-hidden="true"
        onPointerDown={() => setActiveMenu("")}
      />
      <header
        className={`site-header ${compact ? "is-compact" : ""} ${hidden && !mobileOpen && !activeMenu ? "is-hidden" : ""}`}
        data-surface={surface}
        onMouseLeave={handleMouseLeaveNav}
      >
        <div className="nav-glass">
          <Link href="/" aria-label="AST — homepage" className="nav-logo">
            <Image className="ast-brand-logo" src="/brand/ast-logo1.png" alt="Advanced Sports Technologies" width={160} height={40} sizes="(max-width: 640px) 120px, 160px" />
          </Link>
          
          {/* Desktop Navigation Triggers */}
          <nav className="desktop-navigation mega-navigation" aria-label="Main Navigation">
            <ul className="nav-trigger-list">
              {groups.map((group) => {
                const isOpen = activeMenu === group.id;
                return (
                  <li key={group.id} className="mega-nav-item">
                    <button
                      type="button"
                      className={`nav-trigger ${isOpen ? "is-active" : ""}`}
                      onMouseEnter={() => handleMouseEnterTrigger(group.id)}
                      onClick={() => openCategory(isOpen ? "" : group.id)}
                      aria-expanded={isOpen}
                      aria-haspopup="dialog"
                    >
                      <span>{group.name}</span>
                      <ChevronDown
                        size={14}
                        className={`nav-trigger-chevron ${isOpen ? "is-open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="nav-controls">
            <button
              className="theme-switch"
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle colour theme"
              title="Toggle color theme"
            >
              <Sun size={17} className="theme-sun" />
              <Moon size={17} className="theme-moon" />
            </button>
            <a href={`${homeHref || "/"}#contact`} data-mascot-cta="excited" className="ast-button ast-button-red nav-quote">
              Get a quote <ArrowUpRight size={16} />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="mobile-menu-toggle" type="button" aria-label="Open navigation menu">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent className="mobile-nav">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" onClick={() => setMobileOpen(false)} aria-label="AST — homepage">
                      <Image className="ast-brand-logo" src="/brand/ast-logo1.png" alt="AST" width={160} height={40} />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>Advanced Sports Technologies</SheetDescription>
                </SheetHeader>
                <Accordion type="single" collapsible>
                  {groups.map((group) => (
                    <AccordionItem key={group.id} value={group.id}>
                      <AccordionTrigger>{group.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className="mobile-nav-links">
                          {group.cards.map((card) => (
                            <a key={card.name} href={card.href} onClick={() => setMobileOpen(false)}>
                              {card.name}
                              <ArrowUpRight size={16} />
                            </a>
                          ))}
                          {group.id === "projects" && (
                            <a href="/our-projects" onClick={() => setMobileOpen(false)} style={{ color: "var(--home-red)", fontWeight: 700 }}>
                              Show All Projects <ArrowUpRight size={16} />
                            </a>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <a href="#contact" data-mascot-cta="excited" onClick={() => setMobileOpen(false)} className="ast-button ast-button-red">
                  Get a quote <ArrowUpRight size={18} />
                </a>
                <a href={company.contact.phoneHref} className="mobile-nav-phone">
                  <Phone size={16} />
                  {company.contact.phone}
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Ultra-smooth Hardware-Accelerated Animated Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && activeGroup && (
            <motion.div
              className="mega-dropdown-wrapper"
              initial={{ opacity: 0, y: -6, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.995 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
              }}
              onMouseLeave={handleMouseLeaveNav}
            >
              <div className="mega-dropdown-shell">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeMenu}
                    className="mega-dropdown-panel-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                  >
                    <NavigationPanel
                      group={activeGroup}
                      homeHref={homeHref}
                      onClose={() => setActiveMenu("")}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
