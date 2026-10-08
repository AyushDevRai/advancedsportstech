"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company } from "@/content/ast";
import { navigationGroups } from "@/content/navigation";
import { NavigationPanel } from "@/components/layout/navigation-panel";

export function SiteHeader({ homeHref = "" }: { homeHref?: string }) {
  const groups = navigationGroups.map(group => ({
    ...group,
    href: group.href.startsWith("#") ? `${homeHref}${group.href}` : group.href,
    cards: group.cards.map(card => ({ ...card, href: card.href.startsWith("#") ? `${homeHref}${card.href}` : card.href })),
  }));
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [surface, setSurface] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [direction, setDirection] = useState<number>(0);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
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
    update();
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(frame); };
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
    if (!id) {
      setActiveMenu("");
      return;
    }
    const currentIdx = groups.findIndex(g => g.id === activeMenu);
    const nextIdx = groups.findIndex(g => g.id === id);
    if (currentIdx !== -1 && nextIdx !== -1) {
      setDirection(nextIdx > currentIdx ? 1 : -1);
    } else {
      setDirection(0);
    }
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
    }, 180);
  };

  const activeGroup = groups.find(g => g.id === activeMenu);

  return (
    <>
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          key="nav-hover-backdrop"
          className="nav-hover-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
          onPointerDown={() => setActiveMenu("")}
        />
      )}
    </AnimatePresence>
    <header
      className={`site-header ${compact ? "is-compact" : ""} ${hidden && !mobileOpen && !activeMenu ? "is-hidden" : ""}`}
      data-surface={surface}
      onMouseLeave={handleMouseLeaveNav}
    >
      <div className="nav-glass">
        <a href={`${homeHref}#home`} aria-label="AST — homepage" className="nav-logo">
          <Image className="ast-brand-logo" src="/brand/ast-logo1.png" alt="Advanced Sports Technologies" width={160} height={40} sizes="(max-width: 640px) 120px, 160px" />
        </a>
        
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
          <a href="#contact" className="ast-button ast-button-red nav-quote">
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
                  <Image className="ast-brand-logo" src="/brand/ast-logo1.png" alt="AST" width={160} height={40} />
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
              <a href="#contact" onClick={() => setMobileOpen(false)} className="ast-button ast-button-red">
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

      {/* Smooth Animated Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && activeGroup && (
          <motion.div
            className="mega-dropdown-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
            }}
            onMouseLeave={handleMouseLeaveNav}
          >
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={activeMenu}
                custom={direction}
                className="mega-dropdown-shell"
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 32 : dir < 0 ? -32 : 0,
                    y: dir === 0 ? -8 : 0,
                    opacity: 0,
                    scale: 0.985,
                  }),
                  center: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.24,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -32 : dir < 0 ? 32 : 0,
                    y: dir === 0 ? -8 : 0,
                    opacity: 0,
                    scale: 0.985,
                    transition: {
                      duration: 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <NavigationPanel
                  group={activeGroup}
                  homeHref={homeHref}
                  onClose={() => setActiveMenu("")}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
