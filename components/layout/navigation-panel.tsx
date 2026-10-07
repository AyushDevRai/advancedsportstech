"use client";

import Image from "next/image";
import { ArrowUpRight, Download, Share2, X } from "lucide-react";
import { useState } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { downloadGroups, productCategories, type NavigationCard, type NavigationGroup } from "@/content/navigation";
import { aboutParagraphs, brochureUrl, homepageServices } from "@/content/homepage";
import { company } from "@/content/ast";

function FeatureCard({ card, description }: { card: NavigationCard; description?: string }) {
  return <NavigationMenuLink href={card.href} className="mega-feature" aria-label={card.name} data-menu-entry>
    <div className="mega-feature-image"><Image src={card.image} alt="" fill sizes="(max-width: 1200px) 38vw, 500px" /><span className="mega-feature-arrow"><ArrowUpRight size={21} /></span></div>
    <div className="mega-feature-copy">{card.eyebrow && <span className="mega-kicker">{card.eyebrow}</span>}<strong>{card.name}</strong>{description && <p>{description}</p>}</div>
  </NavigationMenuLink>;
}

function MenuEntry({ card, thumbnail = false, number }: { card: NavigationCard; thumbnail?: boolean; number?: number }) {
  return <NavigationMenuLink href={card.href} className={`mega-entry ${thumbnail ? "has-thumbnail" : ""}`} aria-label={card.name} data-menu-entry>
    {thumbnail && <span className="mega-entry-image"><Image src={card.image} alt="" fill sizes="80px" /></span>}
    {number !== undefined && <span className="mega-entry-number">{String(number).padStart(2, "0")}</span>}
    <span className="mega-entry-copy">{card.eyebrow && <span className="mega-kicker">{card.eyebrow}</span>}<strong>{card.name}</strong></span><ArrowUpRight size={17} />
  </NavigationMenuLink>;
}

function ProductsPanel() {
  const [selected, setSelected] = useState("all");
  return <Tabs value={selected} onValueChange={setSelected} className="mega-product-tabs">
    <TabsList className="mega-tabs-list" aria-label="Product categories">{productCategories.map(category => <TabsTrigger key={category.id} value={category.id} className="mega-tab">{category.name}</TabsTrigger>)}</TabsList>
    {productCategories.map(category => <TabsContent value={category.id} key={category.id} className="mega-tab-content">
      {category.id === "all" ? <div className="mega-product-overview">
        <FeatureCard card={category.cards[0]} description={productCategories[1].description} />
        <div className="mega-directory"><span className="mega-kicker">Synthetic Turf & SmarTracks</span>{category.cards.slice(1, 5).map(card => <MenuEntry card={card} key={card.name} />)}</div>
        <div className="mega-product-support">{category.cards.slice(5).map(card => <MenuEntry card={card} thumbnail key={card.name} />)}<p>{homepageServices[7].description}</p></div>
      </div> : <div className={`mega-category-layout ${category.description ? "has-description" : ""}`}>
        <div className="mega-category-features">{category.cards.map(card => <FeatureCard card={card} key={card.name} />)}</div>
        {category.description && <aside className="mega-category-detail"><span className="mega-kicker">{category.name}</span><p>{category.description}</p>{category.links && <div className="mega-model-links">{category.links.map(link => <NavigationMenuLink key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}<Download size={17} /></NavigationMenuLink>)}</div>}</aside>}
      </div>}
    </TabsContent>)}
  </Tabs>;
}

function SportsPanel({ cards }: { cards: NavigationCard[] }) {
  return <div className="mega-sports-layout">
    <div className="mega-sports-directory"><span className="mega-kicker">Sports & Surfaces</span><div className="mega-sport-links">{cards.filter((_, index) => index !== 2).map((card, index) => <MenuEntry card={card} thumbnail={index > 3} key={card.name} />)}</div></div>
    <FeatureCard card={cards[2]} />
  </div>;
}

function ServicesPanel({ cards }: { cards: NavigationCard[] }) {
  return <div className="mega-services-layout">
    <FeatureCard card={cards[0]} description={homepageServices[0].tagline} />
    <div className="mega-service-directory"><span className="mega-kicker">{homepageServices[0].description.split(". ")[0]}.</span><div className="mega-service-links">{cards.slice(1).map((card, index) => <MenuEntry card={card} number={index + 2} key={card.name} />)}</div><div className="mega-service-note"><span className="mega-note-rule" /><p>{homepageServices[7].tagline}</p></div></div>
  </div>;
}

function ProjectsPanel({ cards }: { cards: NavigationCard[] }) {
  return (
    <div className="mega-project-layout">
      <FeatureCard card={cards[0]} />
      <div className="mega-project-directory">
        {cards.slice(1).map(card => <MenuEntry card={card} thumbnail key={card.name} />)}
        <div className="mega-project-cta-row">
          <NavigationMenuLink href="/our-projects" className="ast-button ast-button-red mega-show-all-btn !flex-row">
            Show All Projects <ArrowUpRight size={15} />
          </NavigationMenuLink>
        </div>
      </div>
    </div>
  );
}

function CompanyPanel({ cards }: { cards: NavigationCard[] }) {
  const aboutCard = cards.find(c => c.name === "About Us") || cards[0];
  const contactCard = cards.find(c => c.name === "Contact Us") || cards[1];
  return <div className="mega-company-layout">
    <div className="mega-company-about"><span className="mega-kicker">Advanced Sports Technologies</span><p>{aboutParagraphs[0]}</p></div>
    {aboutCard && <FeatureCard card={aboutCard} />}
    {contactCard && <NavigationMenuLink href={contactCard.href} className="mega-contact-card" aria-label={contactCard.name} data-menu-entry><span className="mega-kicker">{contactCard.name}</span><strong>AST</strong><span className="mega-contact-details">{company.contact.phone}<br />{company.contact.email}</span><ArrowUpRight size={25} /></NavigationMenuLink>}
  </div>;
}

function DownloadsPanel() {
  return <div className="mega-download-grid">{downloadGroups.map(group => <article className="mega-download-group" key={group.name}><div className="mega-download-cover"><Image src={group.image} alt="" fill sizes="30vw" /><h3>{group.name}</h3></div><div className="mega-download-links">{group.items.map(item => <div className="mega-download-row" key={item.file}><NavigationMenuLink href={brochureUrl(item.file)} target="_blank" rel="noopener noreferrer">{item.name}</NavigationMenuLink><NavigationMenuLink className="mega-download-icon" href={brochureUrl(item.file)} target="_blank" rel="noopener noreferrer" aria-label={`Download ${item.name}`}><Download size={16} /></NavigationMenuLink><NavigationMenuLink className="mega-download-icon" href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${item.name} ${brochureUrl(item.file)}`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Share ${item.name} on WhatsApp`}><Share2 size={15} /></NavigationMenuLink></div>)}</div></article>)}</div>;
}

export function NavigationPanel({ group, onClose, homeHref = "" }: { group: NavigationGroup; onClose: () => void; homeHref?: string }) {
  return <div className="mega-panel-scroll"><div className="mega-panel-heading"><NavigationMenuLink href={group.href} className="mega-section-link"><span>{group.title}</span><ArrowUpRight size={22} /></NavigationMenuLink><button className="mega-close" type="button" onClick={onClose} aria-label={`Close ${group.name} menu`}><X size={19} /></button></div>
    {group.id === "products" ? <ProductsPanel /> : group.id === "downloads" ? <DownloadsPanel /> : group.id === "sports" ? <SportsPanel cards={group.cards} /> : group.id === "services" ? <ServicesPanel cards={group.cards} /> : group.id === "projects" ? <ProjectsPanel cards={group.cards} /> : <CompanyPanel cards={group.cards} />}
    <div className="mega-panel-footer"><span>ADVANCED SPORTS TECHNOLOGIES</span><div>{group.id === "company" && <><NavigationMenuLink href={`${homeHref}#clients`}>Our Clients</NavigationMenuLink><NavigationMenuLink href={`${homeHref}#testimonials`}>Testimonials</NavigationMenuLink></>}<NavigationMenuLink href={group.id === "projects" ? "/our-projects" : group.href}>{group.id === "downloads" ? "All brochures" : group.id === "company" ? "About Us" : group.id === "projects" ? "Show All Projects" : `Explore ${group.name.toLowerCase()}`}<ArrowUpRight size={15} /></NavigationMenuLink></div></div>
  </div>;
}
