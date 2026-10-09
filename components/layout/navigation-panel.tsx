"use client";

import Image from "next/image";
import { ArrowUpRight, Download, Share2, X } from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { downloadGroups, productCategories, type NavigationCard, type NavigationGroup } from "@/content/navigation";
import { aboutParagraphs, brochureUrl, homepageServices } from "@/content/homepage";
import { company } from "@/content/ast";

const megaContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const megaCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function NavLink({
  href,
  className,
  children,
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={className} onClick={onClick} {...props}>
      {children}
    </a>
  );
}

function FeatureCard({ card, description, ctaLabel }: { card: NavigationCard; description?: string; ctaLabel?: string }) {
  return (
    <motion.a
      href={card.href}
      variants={megaCardVariants}
      className="mega-feature"
      aria-label={card.name}
      data-menu-entry
    >
      <div className="mega-feature-image">
        <Image src={card.image} alt="" fill sizes="(max-width: 1200px) 38vw, 500px" />
        <span className="mega-feature-arrow"><ArrowUpRight size={21} /></span>
      </div>
      <div className="mega-feature-copy">
        {card.eyebrow && <span className="mega-kicker">{card.eyebrow}</span>}
        <strong>{card.name}</strong>
        {description && <p>{description}</p>}
        {ctaLabel && <span className="mega-feature-cta">{ctaLabel} <ArrowUpRight size={13} /></span>}
      </div>
    </motion.a>
  );
}

function MenuEntry({ card, thumbnail = false, number }: { card: NavigationCard; thumbnail?: boolean; number?: number }) {
  return (
    <motion.a
      href={card.href}
      variants={megaCardVariants}
      className={`mega-entry ${thumbnail ? "has-thumbnail" : ""}`}
      aria-label={card.name}
      data-menu-entry
    >
      {thumbnail && <span className="mega-entry-image"><Image src={card.image} alt="" fill sizes="80px" /></span>}
      {number !== undefined && <span className="mega-entry-number">{String(number).padStart(2, "0")}</span>}
      <span className="mega-entry-copy">
        {card.eyebrow && <span className="mega-kicker">{card.eyebrow}</span>}
        <strong>{card.name}</strong>
      </span>
      <ArrowUpRight size={17} />
    </motion.a>
  );
}

function ProductsPanel() {
  const [selected, setSelected] = useState("all");
  return (
    <Tabs value={selected} onValueChange={setSelected} className="mega-product-tabs">
      <TabsList className="mega-tabs-list" aria-label="Product categories">
        {productCategories.map(category => (
          <TabsTrigger key={category.id} value={category.id} className="mega-tab">
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {productCategories.map(category => (
        <TabsContent value={category.id} key={category.id} className="mega-tab-content">
          <motion.div
            key={category.id}
            variants={megaContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {category.id === "all" ? (
              <div className="mega-product-overview">
                <FeatureCard card={category.cards[0]} description={productCategories[1].description} ctaLabel="Explore Rekortan Systems" />
                <motion.div variants={megaContainerVariants} className="mega-directory">
                  <span className="mega-kicker">Synthetic Turf &amp; SmarTracks</span>
                  {category.cards.filter(c => ["Hockey Turf", "Football Turf", "Inbuilt", "Wireless/Mobile Timing Gate"].includes(c.name)).map(card => (
                    <MenuEntry card={card} key={card.name} />
                  ))}
                </motion.div>
                <motion.div variants={megaContainerVariants} className="mega-product-support">
                  <span className="mega-kicker">Courts &amp; Flooring Systems</span>
                  {category.cards.filter(c => ["Basketball", "Tennis", "Badminton", "Wooden Flooring", "Sports Lighting", "Cleaning & Maintenance"].includes(c.name)).map(card => (
                    <MenuEntry card={card} thumbnail key={card.name} />
                  ))}
                </motion.div>
              </div>
            ) : (
              <div className={`mega-category-layout ${category.description ? "has-description" : ""}`}>
                <motion.div variants={megaContainerVariants} className="mega-category-features">
                  {category.cards.map(card => <FeatureCard card={card} key={card.name} />)}
                </motion.div>
                {category.description && (
                  <motion.aside variants={megaCardVariants} className="mega-category-detail">
                    <span className="mega-kicker">{category.name}</span>
                    <p>{category.description}</p>
                    {category.links && (
                      <div className="mega-model-links">
                        {category.links.map(link => (
                          <NavLink key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.name}<Download size={17} />
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </motion.aside>
                )}
              </div>
            )}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function SportsPanel({ cards }: { cards: NavigationCard[] }) {
  return (
    <motion.div
      variants={megaContainerVariants}
      initial="hidden"
      animate="visible"
      className="mega-sports-layout"
    >
      <div className="mega-sports-directory">
        <span className="mega-kicker">Sports &amp; Surfaces</span>
        <motion.div variants={megaContainerVariants} className="mega-sport-links">
          {cards.filter((_, index) => index !== 2).map((card, index) => (
            <MenuEntry card={card} thumbnail={index > 3} key={card.name} />
          ))}
        </motion.div>
      </div>
      <FeatureCard card={cards[2]} />
    </motion.div>
  );
}

function ServicesPanel({ cards }: { cards: NavigationCard[] }) {
  return (
    <motion.div
      variants={megaContainerVariants}
      initial="hidden"
      animate="visible"
      className="mega-services-layout"
    >
      <FeatureCard card={cards[0]} description={homepageServices[0].tagline} />
      <div className="mega-service-directory">
        <span className="mega-kicker">{homepageServices[0].description.split(". ")[0]}.</span>
        <motion.div variants={megaContainerVariants} className="mega-service-links">
          {cards.slice(1).map((card, index) => (
            <MenuEntry card={card} number={index + 2} key={card.name} />
          ))}
        </motion.div>
        <motion.div variants={megaCardVariants} className="mega-service-note">
          <span className="mega-note-rule" />
          <p>{homepageServices[7].tagline}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectsPanel({ cards, onClose }: { cards: NavigationCard[]; onClose?: () => void }) {
  const featured = cards[0];
  const listItems = cards.slice(1, 5);

  return (
    <motion.div
      variants={megaContainerVariants}
      initial="hidden"
      animate="visible"
      className="mega-project-layout"
    >
      {featured && <FeatureCard card={featured} />}
      <div className="mega-project-directory">
        <motion.div variants={megaContainerVariants} className="mega-project-items">
          {listItems.map((card) => (
            <MenuEntry card={card} thumbnail key={card.name} />
          ))}
        </motion.div>
        <motion.div variants={megaCardVariants} className="mega-project-cta-row">
          <NavLink
            href="/our-projects"
            onClick={onClose}
            className="ast-button ast-button-red mega-show-all-btn !flex-row"
          >
            <span>View More Projects ({cards.length}+)</span>
            <ArrowUpRight size={15} />
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CompanyPanel({ cards }: { cards: NavigationCard[] }) {
  const aboutCard = cards.find(c => c.name === "About Us") || cards[0];
  const contactCard = cards.find(c => c.name === "Contact Us") || cards[1];
  return (
    <motion.div
      variants={megaContainerVariants}
      initial="hidden"
      animate="visible"
      className="mega-company-layout"
    >
      <motion.div variants={megaCardVariants} className="mega-company-about">
        <span className="mega-kicker">Advanced Sports Technologies</span>
        <p>{aboutParagraphs[0]}</p>
      </motion.div>
      {aboutCard && <FeatureCard card={aboutCard} />}
      {contactCard && (
        <motion.a
          href={contactCard.href}
          variants={megaCardVariants}
          className="mega-contact-card"
          aria-label={contactCard.name}
          data-menu-entry
        >
          <span className="mega-kicker">{contactCard.name}</span>
          <strong>AST</strong>
          <span className="mega-contact-details">{company.contact.phone}<br />{company.contact.email}</span>
          <ArrowUpRight size={25} />
        </motion.a>
      )}
    </motion.div>
  );
}

function DownloadsPanel() {
  return (
    <motion.div
      variants={megaContainerVariants}
      initial="hidden"
      animate="visible"
      className="mega-download-grid"
    >
      {downloadGroups.map(group => (
        <motion.article variants={megaCardVariants} className="mega-download-group" key={group.name}>
          <div className="mega-download-cover">
            <Image src={group.image} alt="" fill sizes="30vw" />
            <h3>{group.name}</h3>
          </div>
          <div className="mega-download-links">
            {group.items.map(item => (
              <div className="mega-download-row" key={item.file}>
                <NavLink href={brochureUrl(item.file)} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </NavLink>
                <NavLink className="mega-download-icon" href={brochureUrl(item.file)} target="_blank" rel="noopener noreferrer" aria-label={`Download ${item.name}`}>
                  <Download size={16} />
                </NavLink>
                <NavLink className="mega-download-icon" href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${item.name} ${brochureUrl(item.file)}`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Share ${item.name} on WhatsApp`}>
                  <Share2 size={15} />
                </NavLink>
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export function NavigationPanel({ group, onClose, homeHref = "" }: { group: NavigationGroup; onClose: () => void; homeHref?: string }) {
  return (
    <div className="mega-panel-scroll">
      <div className="mega-panel-heading">
        <NavLink href={group.href} className="mega-section-link">
          <span>{group.title}</span>
          <ArrowUpRight size={22} />
        </NavLink>
        <button className="mega-close" type="button" onClick={onClose} aria-label={`Close ${group.name} menu`}>
          <X size={19} />
        </button>
      </div>
      {group.id === "products" ? <ProductsPanel /> : group.id === "downloads" ? <DownloadsPanel /> : group.id === "sports" ? <SportsPanel cards={group.cards} /> : group.id === "services" ? <ServicesPanel cards={group.cards} /> : group.id === "projects" ? <ProjectsPanel cards={group.cards} onClose={onClose} /> : <CompanyPanel cards={group.cards} />}
      <div className="mega-panel-footer">
        <span>ADVANCED SPORTS TECHNOLOGIES</span>
        <div>
          {group.id === "company" && (
            <>
              <NavLink href={`${homeHref}#clients`}>Our Clients</NavLink>
              <NavLink href={`${homeHref}#testimonials`}>Testimonials</NavLink>
            </>
          )}
          <NavLink href={group.id === "projects" ? "/our-projects" : group.href}>
            {group.id === "downloads" ? "All brochures" : group.id === "company" ? "About Us" : group.id === "projects" ? "Show All Projects" : `Explore ${group.name.toLowerCase()}`}
            <ArrowUpRight size={15} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
