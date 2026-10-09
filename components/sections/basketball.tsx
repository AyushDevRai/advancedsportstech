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
  basketballBenefits,
  basketballHistory,
  basketballOverview,
  basketballProducts,
  basketballReasons,
  basketballStatistics,
  basketballVenues,
} from "@/content/basketball";

export function Basketball() {
  return (
    <div className="ast-homepage basketball-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="bb-hero" data-nav-theme="dark" aria-labelledby="bb-title">
          <Image
            className="bb-hero-image"
            src="/courts/basketball-floor.jpg"
            alt="FIBA championship indoor hardwood basketball court floor with arena lighting"
            fill
            priority
            sizes="100vw"
          />
          <div className="bb-hero-shade" />
          <div className="page-container bb-hero-content">
            <nav className="bb-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Basketball Courts</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              BASKETBALL COURT SYSTEMS
            </p>
            <h1 id="bb-title">
              EXPLOSIVE TRACTION.
              <br />
              <span>ZERO DEAD SPOTS.</span>
            </h1>
            <p className="bb-hero-subtitle">
              FIBA-Standard Hardwood &amp; All-Weather Basketball Courts
            </p>
            <div className="bb-hero-actions">
              <a href="#bb-products" className="ast-button ast-button-red">
                Explore court systems <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Build your court <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="bb-hero-foot">
            <div className="page-container">
              <span>FIBA LEVEL 1 &amp; LEVEL 2 CERTIFIED</span>
              <span>INDOOR HARD MAPLE &bull; CUSHIONED ACRYLIC &bull; MODULAR TILES</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="bb-section-nav" aria-label="Basketball court sections">
          <div className="page-container">
            <a href="#bb-overview">
              The surface <ArrowDown size={14} />
            </a>
            <a href="#why-ast-basketball">
              Why AST basketball <ArrowDown size={14} />
            </a>
            <a href="#bb-products">
              Court systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* Overview Section */}
        <section id="bb-overview" className="section-pad bb-overview" data-nav-theme="light" aria-labelledby="bb-overview-title">
          <div className="page-container bb-overview-layout">
            <div className="bb-overview-visual">
              <div className="bb-visual-image">
                <Image
                  src="/courts/basketball-overview-cad.jpg"
                  alt="Precision technical engineering and subfloor architecture for basketball courts"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <p>FIBA Certified Precision Surfaces For Competitive Basketball</p>
              <span className="bb-visual-line" aria-hidden="true" />
            </div>
            <div className="bb-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                CALIBRATED REBOUND &amp; ATHLETE PROTECTION
              </p>
              <h2 id="bb-overview-title">
                ENGINEERED FOR
                <br />
                PEAK ACCELERATION
                <br />
                <span className="quiet-text">
                  AND CONTROLLED
                  <br />
                  ENERGY RETURN.
                </span>
              </h2>
              {basketballOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="section-pad bb-heritage" data-nav-theme="dark" aria-labelledby="bb-heritage-title">
          <div className="page-container">
            <div className="bb-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  TRUSTED VENUE INFRASTRUCTURE
                </p>
                <h2 id="bb-heritage-title">
                  CHAMPIONSHIP
                  <br />
                  <span>COURTS BUILT TO LAST.</span>
                </h2>
              </div>
              <p className="bb-heritage-copy">{basketballHistory}</p>
            </div>
            <div className="bb-timeline" aria-label="Basketball court achievements">
              <div>
                <strong>FIBA 1</strong>
                <p>
                  Level 1 &amp; Level 2
                  <br />
                  Federation standards
                </p>
              </div>
              <div>
                <strong>
                  99<span>%</span>
                </strong>
                <p>
                  Ball rebound uniformity
                  <br />
                  Zero dead spots
                </p>
              </div>
              <div>
                <strong>
                  60<span>%+</span>
                </strong>
                <p>
                  Kinetic shock reduction
                  <br />
                  Joint &amp; ligament safety
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AST Basketball Section */}
        <section id="why-ast-basketball" className="section-pad bb-reasons" data-nav-theme="light" aria-labelledby="bb-reasons-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE. TRACTION. DURABILITY.
                </p>
                <h2 id="bb-reasons-title">
                  WHY CHOOSE{" "}
                  <br />
                  <span className="quiet-text">AST BASKETBALL COURTS?</span>
                </h2>
              </div>
              <a href="#bb-products" className="text-link">
                Find your court system <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="bb-proof-grid">
              <article className="bb-proof-card bb-certifications">
                <span className="bb-card-number">01</span>
                <h3>
                  Certified across
                  <br />
                  indoor &amp; outdoor
                </h3>
                <div className="bb-global-stats">
                  {basketballStatistics.map((stat) => (
                    <div key={stat.value}>
                      <strong>{stat.value}</strong>
                      <p>{stat.text}</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="bb-proof-card bb-venues">
                <span className="bb-card-number">02</span>
                <h3>
                  Installed in premier
                  <br />
                  Indian sports arenas
                </h3>
                <ul>
                  {basketballVenues.map((venue) => (
                    <li key={venue}>
                      <span className="bb-venue-marker" aria-hidden="true" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="bb-reason-grid">
              {basketballReasons.map((reason) => (
                <article
                  className={`bb-reason-card ${reason.accent ? "bb-reason-accent" : ""}`}
                  key={reason.number}
                >
                  <span className="bb-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="bb-accent-stat" aria-hidden="true">
                      99<span>%</span>
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

        {/* Benefits Section */}
        <section className="section-pad bb-benefits" data-nav-theme="light" aria-labelledby="bb-benefits-title">
          <div className="page-container">
            <div className="bb-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PRECISION FROM SUB-BASE TO HOOP
                </p>
                <h2 id="bb-benefits-title">
                  WHY ATHLETES
                  <br />
                  <span className="quiet-text">LOVE OUR FLOORS.</span>
                </h2>
              </div>
              <ol>
                {basketballBenefits.map((benefit, index) => (
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
        <section id="bb-products" className="section-pad bb-products" data-nav-theme="light" aria-labelledby="bb-products-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CERTIFIED COURT SYSTEMS
                </p>
                <h2 id="bb-products-title">
                  PRODUCTS FOR
                  <br />
                  <span className="quiet-text">BASKETBALL COURTS.</span>
                </h2>
              </div>
              <nav className="bb-product-jump" aria-label="Choose a basketball court system">
                {basketballProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="bb-product-list">
              {basketballProducts.map((product, index) => (
                <article
                  className="bb-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="bb-product-visual">
                    <div className="bb-product-visual-top">
                      <span>0{index + 1} / BASKETBALL COURT</span>
                      <span>SURFACE SPECIFICATION</span>
                    </div>
                    <div className="bb-product-image">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                      />
                    </div>
                    <p>{product.type}</p>
                  </div>
                  <div className="bb-product-copy">
                    <p className="eyebrow">{product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <div className="bb-product-actions">
                      <a href="#contact" className="ast-button ast-button-red">
                        Enquire about this court <ArrowUpRight size={18} />
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

        {/* Call to Action Banner */}
        <section className="build-cta" data-nav-theme="red" aria-labelledby="bb-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="bb-build-title">
                PLANNING A
                <br />
                BASKETBALL ARENA?
              </h2>
              <a href="#contact" className="ast-button ast-button-white">
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-pad contact-section" data-nav-theme="light" aria-labelledby="bb-contact-title">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="bb-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="track-contact-intro">
                Consult AST sports engineers for turnkey court sizing, base civil engineering, FIBA specifications, and quotations.
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
