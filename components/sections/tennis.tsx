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
  tennisBenefits,
  tennisHistory,
  tennisOverview,
  tennisProducts,
  tennisReasons,
  tennisStatistics,
  tennisVenues,
} from "@/content/tennis";

export function Tennis() {
  return (
    <div className="ast-homepage tennis-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="tennis-hero" data-nav-theme="dark" aria-labelledby="tennis-title">
          <Image
            className="tennis-hero-image"
            src="/courts/tennis-floor.jpg"
            alt="Championship 8-layer blue and green cushioned acrylic tennis court floor with floodlights"
            fill
            priority
            sizes="100vw"
          />
          <div className="tennis-hero-shade" />
          <div className="page-container tennis-hero-content">
            <nav className="tennis-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Tennis Courts</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              TENNIS COURT SURFACES
            </p>
            <h1 id="tennis-title">
              PACE. PRECISION.
              <br />
              <span>CHAMPIONSHIP BOUNCE.</span>
            </h1>
            <p className="tennis-hero-subtitle">
              ITF-Classified Cushioned Hard Courts &amp; Synthetic Surfaces
            </p>
            <div className="tennis-hero-actions">
              <a href="#tennis-products" className="ast-button ast-button-red">
                Explore court systems <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Build your court <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="tennis-hero-foot">
            <div className="page-container">
              <span>ITF COURT PACE CLASSIFICATION 2 - 4</span>
              <span>8-LAYER CUSHIONED ACRYLIC &bull; SYNTHETIC CLAY &bull; GRASS TURF</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="tennis-section-nav" aria-label="Tennis court sections">
          <div className="page-container">
            <a href="#tennis-overview">
              The surface <ArrowDown size={14} />
            </a>
            <a href="#why-ast-tennis">
              Why AST tennis <ArrowDown size={14} />
            </a>
            <a href="#tennis-products">
              Court systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* Overview Section */}
        <section id="tennis-overview" className="section-pad tennis-overview" data-nav-theme="light" aria-labelledby="tennis-overview-title">
          <div className="page-container tennis-overview-layout">
            <div className="tennis-overview-visual">
              <div className="tennis-visual-image">
                <Image
                  src="/courts/tennis-overview-court.jpg"
                  alt="Championship standard acrylic tennis court facility"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <p>ITF Certified Precision Surfaces For Competitive Tennis</p>
              <span className="tennis-visual-line" aria-hidden="true" />
            </div>
            <div className="tennis-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                CALIBRATED BALL SPEED &amp; JOINT LONGEVITY
              </p>
              <h2 id="tennis-overview-title">
                DELIVERING THE
                <br />
                OPTIMAL BALL PACE
                <br />
                <span className="quiet-text">
                  FOR EVERY LEVEL
                  <br />
                  OF COMPETITION.
                </span>
              </h2>
              {tennisOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="section-pad tennis-heritage" data-nav-theme="dark" aria-labelledby="tennis-heritage-title">
          <div className="page-container">
            <div className="tennis-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PROVEN ON NATIONAL COURTS
                </p>
                <h2 id="tennis-heritage-title">
                  CHAMPIONSHIP
                  <br />
                  <span>COURTS BUILT TO LAST.</span>
                </h2>
              </div>
              <p className="tennis-heritage-copy">{tennisHistory}</p>
            </div>
            <div className="tennis-timeline" aria-label="Tennis court achievements">
              <div>
                <strong>ITF 2-4</strong>
                <p>
                  Classified Pace Ratings
                  <br />
                  Tournament speed control
                </p>
              </div>
              <div>
                <strong>
                  8<span> COATS</span>
                </strong>
                <p>
                  Elastomeric cushion
                  <br />
                  25% joint fatigue reduction
                </p>
              </div>
              <div>
                <strong>
                  30<span> MIN</span>
                </strong>
                <p>
                  Laser slope drainage
                  <br />
                  Rapid monsoon recovery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AST Tennis Section */}
        <section id="why-ast-tennis" className="section-pad tennis-reasons" data-nav-theme="light" aria-labelledby="tennis-reasons-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE. CUSHION. WEATHERPROOF.
                </p>
                <h2 id="tennis-reasons-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">AST TENNIS COURTS?</span>
                </h2>
              </div>
              <a href="#tennis-products" className="text-link">
                Find your court system <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="tennis-proof-grid">
              <article className="tennis-proof-card tennis-certifications">
                <span className="tennis-card-number">01</span>
                <h3>
                  Certified for
                  <br />
                  ITF tournament play
                </h3>
                <div className="tennis-global-stats">
                  {tennisStatistics.map((stat) => (
                    <div key={stat.value}>
                      <strong>{stat.value}</strong>
                      <p>{stat.text}</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="tennis-proof-card tennis-venues">
                <span className="tennis-card-number">02</span>
                <h3>
                  Chosen by premier
                  <br />
                  academies &amp; clubs
                </h3>
                <ul>
                  {tennisVenues.map((venue) => (
                    <li key={venue}>
                      <span className="tennis-venue-marker" aria-hidden="true" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="tennis-reason-grid">
              {tennisReasons.map((reason) => (
                <article
                  className={`tennis-reason-card ${reason.accent ? "tennis-reason-accent" : ""}`}
                  key={reason.number}
                >
                  <span className="tennis-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="tennis-accent-stat" aria-hidden="true">
                      25<span>%</span>
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
        <section className="section-pad tennis-benefits" data-nav-theme="light" aria-labelledby="tennis-benefits-title">
          <div className="page-container">
            <div className="tennis-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  ENGINEERED FOR EXCELLENCE
                </p>
                <h2 id="tennis-benefits-title">
                  WHY CLUBS CHOOSE
                  <br />
                  <span className="quiet-text">OUR SURFACES.</span>
                </h2>
              </div>
              <ol>
                {tennisBenefits.map((benefit, index) => (
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
        <section id="tennis-products" className="section-pad tennis-products" data-nav-theme="light" aria-labelledby="tennis-products-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CERTIFIED COURT SYSTEMS
                </p>
                <h2 id="tennis-products-title">
                  PRODUCTS FOR
                  <br />
                  <span className="quiet-text">TENNIS COURTS.</span>
                </h2>
              </div>
              <nav className="tennis-product-jump" aria-label="Choose a tennis court system">
                {tennisProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="tennis-product-list">
              {tennisProducts.map((product, index) => (
                <article
                  className="tennis-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="tennis-product-visual">
                    <div className="tennis-product-visual-top">
                      <span>0{index + 1} / TENNIS COURT</span>
                      <span>SURFACE SPECIFICATION</span>
                    </div>
                    <div className="tennis-product-image">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                      />
                    </div>
                    <p>{product.type}</p>
                  </div>
                  <div className="tennis-product-copy">
                    <p className="eyebrow">{product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <div className="tennis-product-actions">
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
        <section className="build-cta" data-nav-theme="red" aria-labelledby="tennis-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="tennis-build-title">
                PLANNING A
                <br />
                TENNIS FACILITY?
              </h2>
              <a href="#contact" className="ast-button ast-button-white">
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-pad contact-section" data-nav-theme="light" aria-labelledby="tennis-contact-title">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="tennis-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="track-contact-intro">
                Consult AST tennis surfacing specialists for turnkey sub-base preparation, ITF pace selection, floodlighting, and project estimates.
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
