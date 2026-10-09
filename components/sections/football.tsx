import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { company } from "@/content/ast";
import { brochureUrl } from "@/content/homepage";
import {
  eliteFootballVenues,
  footballBenefits,
  footballHistory,
  footballOverview,
  footballProducts,
  footballReasons,
  footballStatistics,
} from "@/content/football";

export function Football() {
  return (
    <div className="ast-homepage football-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="football-hero" data-nav-theme="dark" aria-labelledby="football-title">
          <Image
            className="football-hero-image"
            src="/imageFootball/football.jpg"
            alt="FIFA standard synthetic football turf pitch with stadium lighting"
            fill
            priority
            sizes="100vw"
          />
          <div className="football-hero-shade" />
          <div className="page-container football-hero-content">
            <nav className="football-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#sports">Sports</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Football</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              FOOTBALL TURF SYSTEMS
            </p>
            <h1 id="football-title">
              SUSTAINABLE. DYNAMIC.
              <br />
              <span>FIFA CERTIFIED.</span>
            </h1>
            <p className="football-hero-subtitle">
              Synthetic Turf for the Football Pitch of Masters — Facilitating Excellence Worldwide
            </p>
            <div className="football-hero-actions">
              <a href="#football-products" className="ast-button ast-button-red">
                Explore LigaTurf systems <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Build your pitch <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="football-hero-foot">
            <div className="page-container">
              <span>POLYTAN / SPORTGROUP GERMANY</span>
              <span>LIGATURF — SELECTED FOR THE FIFA HEADQUARTERS</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="football-section-nav" aria-label="Football sections">
          <div className="page-container">
            <a href="#football-overview">
              The surface <ArrowDown size={14} />
            </a>
            <a href="#why-ligaturf">
              Why LigaTurf <ArrowDown size={14} />
            </a>
            <a href="#football-products">
              Turf systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* Surface Overview */}
        <section
          id="football-overview"
          className="section-pad football-overview"
          data-nav-theme="light"
          aria-labelledby="football-overview-title"
        >
          <div className="page-container football-overview-layout">
            <div className="football-overview-visual">
              <div className="football-player-image">
                <Image
                  src="/imageFootball/challengefb.jpg"
                  alt="Football players competing with agility on LigaTurf synthetic turf"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <p>High Quality Synthetic Surfaces For Your Requirements</p>
              <span className="football-visual-line" aria-hidden="true" />
            </div>
            <div className="football-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                SUSTAINABLE FOOTBALL TURF WITH OPTIMAL PLAYING PROPERTIES
              </p>
              <h2 id="football-overview-title">
                WHETHER FOR
                <br />
                PROFESSIONALS OR
                <br />
                <span className="quiet-text">
                  RECREATIONAL PLAYERS:
                  <br />
                  THE PERFECT CHOICE.
                </span>
              </h2>
              {footballOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage / FIFA Headquarters Section (Dark) */}
        <section
          id="football-tradition"
          className="section-pad football-heritage"
          data-nav-theme="dark"
          aria-labelledby="football-heritage-title"
        >
          <div className="page-container">
            <div className="football-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  OVER 16 YEARS OF INDUSTRY LEADERSHIP
                </p>
                <h2 id="football-heritage-title">
                  LIGATURF –
                  <br />
                  <span>
                    SELECTED FOR THE
                    <br />
                    FIFA HEADQUARTERS.
                  </span>
                </h2>
              </div>
              <p className="football-heritage-copy">{footballHistory}</p>
            </div>
            <div className="football-timeline" aria-label="Football turf milestones">
              {footballStatistics.map((stat) => (
                <div key={stat.value}>
                  <strong>
                    {stat.value.replace(/([%+])/, "")}
                    <span>{stat.value.match(/([%+])/)?.[0] ?? ""}</span>
                  </strong>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose LigaTurf */}
        <section
          id="why-ligaturf"
          className="section-pad football-reasons"
          data-nav-theme="light"
          aria-labelledby="football-reasons-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE. DURABILITY. SUSTAINABILITY.
                </p>
                <h2 id="football-reasons-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">LIGATURF?</span>
                </h2>
              </div>
              <a href="#football-products" className="text-link">
                Find your turf system <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="football-proof-grid">
              <article className="football-proof-card football-certifications">
                <span className="football-card-number">01</span>
                <h3>
                  The benchmark football
                  <br />
                  turf worldwide
                </h3>
                <div className="football-global-stats">
                  <div>
                    <strong>FIFA</strong>
                    <p>FIFA Quality & FIFA Quality Pro Certified Standards</p>
                  </div>
                  <div>
                    <strong>
                      16<span>+</span>
                    </strong>
                    <p>Years of Brand Leadership at Elite Stadiums & Clubs</p>
                  </div>
                  <div>
                    <strong>
                      100<span>+</span>
                    </strong>
                    <p>Pitches & Sports Infrastructure Built Across India</p>
                  </div>
                </div>
              </article>

              <article className="football-proof-card football-diamond">
                <span className="football-card-number">02</span>
                <h3>
                  Chosen for Premier
                  <br />
                  Stadiums & Venues
                </h3>
                <ul>
                  {eliteFootballVenues.map((venue) => (
                    <li key={venue}>
                      <span className="football-venue-marker" aria-hidden="true" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="football-reason-grid">
              {footballReasons.map((reason) => (
                <article
                  className={`football-reason-card ${reason.accent ? "football-reason-green" : ""}`}
                  key={reason.number}
                >
                  <span className="football-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="football-green-stat" aria-hidden="true">
                      70<span>%</span>
                    </strong>
                  )}
                  <h3>{reason.title}</h3>
                  {reason.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {reason.points.length > 0 && (
                    <ul>
                      {reason.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section
          className="section-pad football-benefits"
          data-nav-theme="light"
          aria-labelledby="football-benefits-title"
        >
          <div className="page-container">
            <div className="football-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  FROM SUB-BASE TO THE PENALTY SPOT
                </p>
                <h2 id="football-benefits-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">OUR FOOTBALL TURFS?</span>
                </h2>
              </div>
              <ol>
                {footballBenefits.map((benefit, index) => (
                  <li key={benefit}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="football-products"
          className="section-pad football-products"
          data-nav-theme="light"
          aria-labelledby="football-products-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  LIGATURF PRODUCT SYSTEMS
                </p>
                <h2 id="football-products-title">
                  A FOOTBALL TURF FOR
                  <br />
                  <span className="quiet-text">EVERY APPLICATION.</span>
                </h2>
              </div>
              <nav className="football-product-jump" aria-label="Choose a football system">
                {footballProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="football-product-list">
              {footballProducts.map((product, index) => (
                <article
                  className="football-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="football-product-visual">
                    <div className="football-product-visual-top">
                      <span>0{index + 1} / LIGATURF</span>
                      <span>SYSTEM SPECIFICATION</span>
                    </div>
                    <div className="football-product-image">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                      />
                    </div>
                    <p>{product.type}</p>
                  </div>
                  <div className="football-product-copy">
                    <p className="eyebrow">{product.badge ?? product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {product.specs.length > 0 && (
                      <ul className="football-product-specs">
                        {product.specs.map((spec) => (
                          <li key={spec}>
                            <span className="football-spec-dot" aria-hidden="true" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="football-product-actions">
                      <a href="#contact" className="ast-button ast-button-red">
                        Enquire about this system <ArrowUpRight size={18} />
                      </a>
                      <a
                        className="text-link"
                        href={brochureUrl(product.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${product.name} brochure (opens in a new tab)`}
                      >
                        Brochure <Download size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Red CTA Band */}
        <section className="build-cta" data-nav-theme="red" aria-labelledby="football-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="football-build-title">
                HAVE ANY
                <br />
                QUERIES?
              </h2>
              <a href="#contact" className="ast-button ast-button-white">
                Let&apos;s talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="section-pad contact-section"
          data-nav-theme="light"
          aria-labelledby="football-contact-title"
        >
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="football-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="football-contact-intro">
                If you&apos;ve got questions or ideas you would like to share, send a message.
              </p>
              <p className="contact-company">Advanced Sports Technologies LLP</p>
              <address>
                <a
                  href="https://maps.google.com/?q=E-42+Okhla+Industrial+Area+Phase+II+New+Delhi+110020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={19} />
                  <span>
                    {company.contact.address}
                    <br />
                    {company.contact.city}
                  </span>
                </a>
                <a href={company.contact.phoneHref}>
                  <Phone size={18} />
                  <span>{company.contact.phone}</span>
                </a>
                <a href={`mailto:${company.contact.email}`}>
                  <Mail size={18} />
                  <span>{company.contact.email}</span>
                </a>
              </address>
            </div>
            <div className="contact-form-panel">
              <h3>Have any queries?</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <HomepageFooter homeHref="/" />
      <a
        href={company.contact.whatsapp}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AST on WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
