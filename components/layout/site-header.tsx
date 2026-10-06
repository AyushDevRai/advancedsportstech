"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Phone, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { company, brands, sports } from "@/content/ast";
import { homepageServices } from "@/content/homepage";

const groups = [
  { name: "Products", eyebrow: "World-renowned sports surfaces", links: [...brands.map((brand) => ({ name: brand.name, detail: brand.application, href: `#brand-${brand.slug}` })), { name: "Sports Lighting", detail: "Panasonic LED systems", href: "#lighting" }] },
  { name: "Sports", eyebrow: "A surface for every game", links: sports.map((sport) => ({ name: sport.name, detail: "Discover our surfaces", href: sport.source })) },
  { name: "Services", eyebrow: "From the first idea to the finish line", links: homepageServices.map((service) => ({ name: service.name, detail: "AST’s complete solution", href: `#service-${service.slug}` })) },
  { name: "Projects", eyebrow: "Our work across India", links: [{ name: "Our gallery", detail: "Explore all six installations", href: "#projects" }, { name: "Prominent Projects", detail: "Stadiums. Tracks. Turf.", href: "#projects" }, { name: "Our Creations", detail: "See the project wheel", href: "#projects" }] },
  { name: "Company", eyebrow: "Advanced Sports Technologies", links: [{ name: "About Us", detail: "Facilitating excellence", href: "#about" }, { name: "Our Clients", detail: "Organisations we work with", href: "#clients" }, { name: "Testimonials", detail: "Hear from our clients", href: "#testimonials" }, { name: "Get in Touch", detail: "Let’s discuss your project", href: "#contact" }] },
];

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [surface, setSurface] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
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
    <header className={`site-header ${compact ? "is-compact" : ""} ${hidden && !mobileOpen ? "is-hidden" : ""}`} data-surface={surface}>
      <div className="header-utility"><span>ADVANCED SPORTS TECHNOLOGIES</span><a href={company.contact.phoneHref}><Phone size={11} /> {company.contact.phone}</a></div>
      <div className="nav-glass">
        <a href="#home" aria-label="AST — homepage" className="nav-logo"><Image src="/brand/ast-logo.png" alt="Advanced Sports Technologies" width={116} height={60} sizes="116px" /></a>
        <NavigationMenu className="desktop-navigation" delayDuration={100}>
          <NavigationMenuList>{groups.map((group) => <NavigationMenuItem key={group.name}><NavigationMenuTrigger className="nav-trigger">{group.name}</NavigationMenuTrigger><NavigationMenuContent className="nav-dropdown"><div className="dropdown-heading"><span className="eyebrow">{group.name}</span><p>{group.eyebrow}</p></div><div className="dropdown-grid">{group.links.map((link) => <NavigationMenuLink key={link.name} href={link.href} className="dropdown-link"><span>{link.name}<ArrowUpRight size={15} /></span><small>{link.detail}</small></NavigationMenuLink>)}</div></NavigationMenuContent></NavigationMenuItem>)}</NavigationMenuList>
        </NavigationMenu>
        <div className="nav-controls"><span className="language-label" aria-label="Language: English">EN</span><button className="theme-switch" type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle colour theme"><Sun size={17} className="theme-sun" /><Moon size={17} className="theme-moon" /></button><a href="#contact" className="ast-button ast-button-red nav-quote">Get a quote <ArrowUpRight size={16} /></a>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger asChild><button className="mobile-menu-toggle" type="button" aria-label="Open navigation menu"><Menu size={24} /></button></SheetTrigger><SheetContent className="mobile-nav"><SheetHeader><SheetTitle><Image src="/brand/ast-logo.png" alt="AST" width={95} height={48} /></SheetTitle><SheetDescription>Advanced Sports Technologies</SheetDescription></SheetHeader><Accordion type="single" collapsible>{groups.map((group) => <AccordionItem key={group.name} value={group.name}><AccordionTrigger>{group.name}</AccordionTrigger><AccordionContent><div className="mobile-nav-links">{group.links.map((link) => <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)}>{link.name}<ArrowUpRight size={16} /></a>)}</div></AccordionContent></AccordionItem>)}</Accordion><a href="#contact" onClick={() => setMobileOpen(false)} className="ast-button ast-button-red">Get a quote <ArrowUpRight size={18} /></a><a href={company.contact.phoneHref} className="mobile-nav-phone"><Phone size={16} />{company.contact.phone}</a></SheetContent></Sheet>
        </div>
      </div>
    </header>
  );
}
