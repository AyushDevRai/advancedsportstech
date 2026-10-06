import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { company } from "@/content/ast";
import { brochureUrl } from "@/content/homepage";
import {
  eliteHockeyVenues,
  hockeyBenefits,
  hockeyHistory,
  hockeyOverview,
  hockeyProducts,
  hockeyReasons,
  hockeyStatistics,
} from "@/content/hockey";

export function Hockey() {
  return (
    <div className="ast-homepage hockey-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="hockey-hero" data-nav-theme="dark" aria-labelledby="hockey-title">
          <Image
            className="hockey-hero-image"
            src="/background/hockey.jpg"
            alt="International standard synthetic field hockey pitch with floodlights"
            fill
            priority
            sizes="100vw"
          />
          <div className="hockey-hero-shade" />
          <div className="page-container hockey-hero-content">
            <nav className="hockey-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#sports">Sports</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hockey</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              HOCKEY TURF SYSTEMS
            </p>
            <h1 id="hockey-title">
              DYNAMIC. ELEGANT.
              <br />
              <span>TECHNICALLY SUPERIOR.</span>
            </h1>
            <p className="hockey-hero-subtitle">
              Modern Synthetic Turf For The Traditional Sport
            </p>
            <div className="hockey-hero-actions">
              <a href="#hockey-products" className="ast-button ast-button-red">
                Explore hockey systems <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Build your vision <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="hockey-hero-foot">
            <div className="page-container">
              <span>POLYTAN / SPORTGROUP GERMANY</span>
              <span>POLIGRAS — THE WORLD&apos;S LEADING HOCKEY TURF</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="hockey-section-nav" aria-label="Hockey sections">
          <div className="page-container">
            <a href="#hockey-overview">
              The surface <ArrowDown size={14} />
            </a>
            <a href="#why-poligras">
              Why Poligras <ArrowDown size={14} />
            </a>
            <a href="#hockey-products">
              Turf systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* Surface Overview */}
        <section
          id="hockey-overview"
          className="section-pad hockey-overview"
          data-nav-theme="light"
          aria-labelledby="hockey-overview-title"
        >
          <div className="page-container hockey-overview-layout">
            <div className="hockey-overview-visual">
              <div className="hockey-player-image">
                <Image
                  src="/background/hockeych.jpg"
                  alt="Field hockey players competing with speed and agility on Poligras synthetic turf"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <p>High Quality Synthetic Surfaces For Your Requirements</p>
              <span className="hockey-visual-line" aria-hidden="true" />
            </div>
            <div className="hockey-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                PRECISION, SPEED & SUSTAINABILITY
              </p>
              <h2 id="hockey-overview-title">
                MODERN SYNTHETIC TURF
                <br />
                FOR HOCKEY HAS TO BE
                <br />
                <span className="quiet-text">
                  SUSTAINABLE, PRECISE
                  <br />
                  AND FAST.
                </span>
              </h2>
              {hockeyOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage / Tradition Section (Dark) */}
        <section
          id="hockey-tradition"
          className="section-pad hockey-heritage"
          data-nav-theme="dark"
          aria-labelledby="hockey-heritage-title"
        >
          <div className="page-container">
            <div className="hockey-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  TRADITION & ELEGANCE IN SPORT
                </p>
                <h2 id="hockey-heritage-title">
                  FAIR, ELEGANT &
                  <br />
                  <span>
                    TECHNICALLY
                    <br />
                    DEMANDING.
                  </span>
                </h2>
              </div>
              <p className="hockey-heritage-copy">{hockeyHistory}</p>
            </div>
            <div className="hockey-timeline" aria-label="Field hockey milestones">
              {hockeyStatistics.map((stat) => (
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

        {/* Why Choose Poligras */}
        <section
          id="why-poligras"
          className="section-pad hockey-reasons"
          data-nav-theme="light"
          aria-labelledby="hockey-reasons-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE. QUALITY. INNOVATION.
                </p>
                <h2 id="hockey-reasons-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">POLIGRAS?</span>
                </h2>
              </div>
              <a href="#hockey-products" className="text-link">
                Find your turf system <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="hockey-proof-grid">
              <article className="hockey-proof-card hockey-certifications">
                <span className="hockey-card-number">01</span>
                <h3>
                  Most chosen hockey turf
                  <br />
                  in the world
                </h3>
                <div className="hockey-global-stats">
                  <div>
                    <strong>FIH</strong>
                    <p>Global Category 1 & National Tournament Standard</p>
                  </div>
                  <div>
                    <strong>
                      8<span>+</span>
                    </strong>
                    <p>Olympic Games Tournaments Played on Poligras</p>
                  </div>
                  <div>
                    <strong>
                      100<span>+</span>
                    </strong>
                    <p>Indian Turf & Infrastructure Installations</p>
                  </div>
                </div>
              </article>

              <article className="hockey-proof-card hockey-diamond">
                <span className="hockey-card-number">02</span>
                <h3>
                  Chosen for Premier
                  <br />
                  Stadiums & Venues
                </h3>
                <ul>
                  {eliteHockeyVenues.map((venue) => (
                    <li key={venue}>
                      <span className="hockey-venue-marker" aria-hidden="true" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="hockey-reason-grid">
              {hockeyReasons.map((reason) => (
                <article
                  className={`hockey-reason-card ${reason.accent ? "hockey-reason-green" : ""}`}
                  key={reason.number}
                >
                  <span className="hockey-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="hockey-green-stat" aria-hidden="true">
                      60<span>%</span>
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
          className="section-pad hockey-benefits"
          data-nav-theme="light"
          aria-labelledby="hockey-benefits-title"
        >
          <div className="page-container">
            <div className="hockey-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  FROM SUB-BASE TO THE GOAL LINE
                </p>
                <h2 id="hockey-benefits-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">OUR HOCKEY TURFS?</span>
                </h2>
              </div>
              <ol>
                {hockeyBenefits.map((benefit, index) => (
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
          id="hockey-products"
          className="section-pad hockey-products"
          data-nav-theme="light"
          aria-labelledby="hockey-products-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  POLIGRAS TURF SYSTEMS
                </p>
                <h2 id="hockey-products-title">
                  A HOCKEY TURF FOR
                  <br />
                  <span className="quiet-text">ALL OCCASIONS.</span>
                </h2>
              </div>
              <nav className="hockey-product-jump" aria-label="Choose a hockey system">
                {hockeyProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="hockey-product-list">
              {hockeyProducts.map((product, index) => (
                <article
                  className="hockey-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="hockey-product-visual">
                    <div className="hockey-product-visual-top">
                      <span>0{index + 1} / POLIGRAS</span>
                      <span>SYSTEM SPECIFICATION</span>
                    </div>
                    <div className="hockey-product-image">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                      />
                    </div>
                    <p>{product.type}</p>
                  </div>
                  <div className="hockey-product-copy">
                    <p className="eyebrow">{product.badge ?? product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {product.specs.length > 0 && (
                      <ul className="hockey-product-specs">
                        {product.specs.map((spec) => (
                          <li key={spec}>
                            <span className="hockey-spec-dot" aria-hidden="true" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="hockey-product-actions">
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
        <section className="build-cta" data-nav-theme="red" aria-labelledby="hockey-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="hockey-build-title">
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
          aria-labelledby="hockey-contact-title"
        >
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="hockey-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="hockey-contact-intro">
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
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
