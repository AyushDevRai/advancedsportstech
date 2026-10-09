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
  woodenBenefits,
  woodenHistory,
  woodenOverview,
  woodenProducts,
  woodenReasons,
  woodenSpecies,
  woodenStatistics,
} from "@/content/wooden-flooring";

export function WoodenFlooring() {
  return (
    <div className="ast-homepage wooden-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="wood-hero" data-nav-theme="dark" aria-labelledby="wood-title">
          <Image
            className="wood-hero-image"
            src="/courts/badminton-wooden-floor.jpg"
            alt="Sprung hardwood maple wooden sports court flooring with stadium arena lighting"
            fill
            priority
            sizes="100vw"
          />
          <div className="wood-hero-shade" />
          <div className="page-container wood-hero-content">
            <nav className="wood-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Wooden Flooring</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              HARDWOOD SPORTS FLOORING
            </p>
            <h1 id="wood-title">
              NATURAL TIMBER.
              <br />
              <span>AREA-ELASTIC DYNAMICS.</span>
            </h1>
            <p className="wood-hero-subtitle">
              FIBA &amp; BWF Certified Sprung Hardwood Systems for Basketball, Badminton &amp; Squash
            </p>
            <div className="wood-hero-actions">
              <a href="#wood-products" className="ast-button ast-button-red">
                Explore timber systems <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Build your floor <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="wood-hero-foot">
            <div className="page-container">
              <span>FIBA LEVEL 1 &amp; BWF GRADE 1 CERTIFIED</span>
              <span>NORTH AMERICAN MAPLE &bull; SEASONED TEAK &bull; EUROPEAN OAK</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="wood-section-nav" aria-label="Wooden flooring sections">
          <div className="page-container">
            <a href="#wood-overview">
              The surface <ArrowDown size={14} />
            </a>
            <a href="#wood-species">
              Timber species <ArrowDown size={14} />
            </a>
            <a href="#why-ast-wood">
              Why AST wood <ArrowDown size={14} />
            </a>
            <a href="#wood-products">
              Floor systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* Overview Section */}
        <section id="wood-overview" className="section-pad wood-overview" data-nav-theme="light" aria-labelledby="wood-overview-title">
          <div className="page-container wood-overview-layout">
            <div className="wood-overview-visual">
              <div className="wood-visual-image">
                <Image
                  src="/Product Images/Wooden Flooring/CAD.jpg"
                  alt="CAD engineering diagram showing dual-batten sleeper subframe and air cushion pads"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <p>Area-Elastic Subfloor Architecture For Olympic Performance</p>
              <span className="wood-visual-line" aria-hidden="true" />
            </div>
            <div className="wood-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                ACOUSTICS, AESTHETICS &amp; ATHLETE PROTECTION
              </p>
              <h2 id="wood-overview-title">
                NATURAL WARMTH.
                <br />
                ENGINEERED RESILIENCE.
                <br />
                <span className="quiet-text">
                  CALIBRATED FOR
                  <br />
                  60%+ FORCE REDUCTION.
                </span>
              </h2>
              {woodenOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Timber Species Section */}
        <section id="wood-species" className="section-pad wood-species-section" data-nav-theme="light" aria-labelledby="wood-species-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  TIMBER SELECTION
                </p>
                <h2 id="wood-species-title">
                  PREMIUM HARDWOOD
                  <br />
                  <span className="quiet-text">SPECIES PORTFOLIO.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Kiln-dried seasoned hardwoods precision-milled with tongue-and-groove profiles for monolithic planar stability.
              </p>
            </div>

            <div className="wood-species-grid">
              {woodenSpecies.map((species) => (
                <article className="wood-species-card" key={species.name}>
                  <div className="wood-species-image">
                    <Image
                      src={species.image}
                      alt={species.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>
                  <div className="wood-species-copy">
                    <span className="wood-species-badge">{species.badge}</span>
                    <h3>{species.name}</h3>
                    <span className="wood-species-scientific">{species.scientific}</span>
                    <p>{species.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="section-pad wood-heritage" data-nav-theme="dark" aria-labelledby="wood-heritage-title">
          <div className="page-container">
            <div className="wood-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PROVEN IN NATIONAL ARENAS
                </p>
                <h2 id="wood-heritage-title">
                  HARDWOOD FLOORS
                  <br />
                  <span>BUILT FOR GENERATIONS.</span>
                </h2>
              </div>
              <p className="wood-heritage-copy">{woodenHistory}</p>
            </div>
            <div className="wood-timeline" aria-label="Wooden flooring achievements">
              <div>
                <strong>FIBA 1</strong>
                <p>
                  Level 1 certified
                  <br />
                  Arena basketball
                </p>
              </div>
              <div>
                <strong>BWF 1</strong>
                <p>
                  Grade 1 certified
                  <br />
                  Badminton World Tour
                </p>
              </div>
              <div>
                <strong>
                  62<span>%</span>
                </strong>
                <p>
                  Kinetic shock absorption
                  <br />
                  Area-elastic sleepers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AST Wood Section */}
        <section id="why-ast-wood" className="section-pad wood-reasons" data-nav-theme="light" aria-labelledby="wood-reasons-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE. TIMBER. PRECISION.
                </p>
                <h2 id="wood-reasons-title">
                  WHY CHOOSE{" "}
                  <br />
                  <span className="quiet-text">AST WOODEN FLOORS?</span>
                </h2>
              </div>
              <a href="#wood-products" className="text-link">
                Find your timber system <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="wood-proof-grid">
              <article className="wood-proof-card wood-certifications">
                <span className="wood-card-number">01</span>
                <h3>
                  Multi-federation
                  <br />
                  championship approval
                </h3>
                <div className="wood-global-stats">
                  {woodenStatistics.map((stat) => (
                    <div key={stat.value}>
                      <strong>{stat.value}</strong>
                      <p>{stat.text}</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="wood-proof-card">
                <span className="wood-card-number">02</span>
                <h3>
                  Dual-batten sleeper
                  <br />
                  resilient architecture
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our double sleeper sub-frame design features air-cell neoprene pads that provide calibrated area deflection, eliminating localized vibration reverberation and safeguarding joint health.
                </p>
              </article>
            </div>

            <div className="wood-reason-grid">
              {woodenReasons.map((reason) => (
                <article
                  className={`wood-reason-card ${reason.accent ? "wood-reason-accent" : ""}`}
                  key={reason.number}
                >
                  <span className="wood-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="wood-accent-stat" aria-hidden="true">
                      62<span>%</span>
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
        <section className="section-pad wood-benefits" data-nav-theme="light" aria-labelledby="wood-benefits-title">
          <div className="page-container">
            <div className="wood-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CRAFTED FOR PEAK ATHLETIC OUTPUT
                </p>
                <h2 id="wood-benefits-title">
                  WHY ARENAS{" "}
                  <br />
                  <span className="quiet-text">TRUST OUR TIMBER.</span>
                </h2>
              </div>
              <ol>
                {woodenBenefits.map((benefit, index) => (
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
        <section id="wood-products" className="section-pad wood-products" data-nav-theme="light" aria-labelledby="wood-products-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CERTIFIED HARDWOOD SYSTEMS
                </p>
                <h2 id="wood-products-title">
                  PRODUCTS FOR
                  <br />
                  <span className="quiet-text">WOODEN SPORTS FLOORING.</span>
                </h2>
              </div>
              <nav className="wood-product-jump" aria-label="Choose a wooden sports floor system">
                {woodenProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="wood-product-list">
              {woodenProducts.map((product, index) => (
                <article
                  className="wood-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="wood-product-visual">
                    <div className="wood-product-visual-top">
                      <span>0{index + 1} / WOODEN FLOORING</span>
                      <span>SYSTEM ARCHITECTURE</span>
                    </div>
                    <div className="wood-product-image">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                      />
                    </div>
                    <p>{product.type}</p>
                  </div>
                  <div className="wood-product-copy">
                    <p className="eyebrow">{product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <div className="wood-product-actions">
                      <a href="#contact" className="ast-button ast-button-red">
                        Enquire about this floor <ArrowUpRight size={18} />
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
        <section className="build-cta" data-nav-theme="red" aria-labelledby="wood-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="wood-build-title">
                PLANNING A
                <br />
                WOODEN ARENA?
              </h2>
              <a href="#contact" className="ast-button ast-button-white">
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-pad contact-section" data-nav-theme="light" aria-labelledby="wood-contact-title">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="wood-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="track-contact-intro">
                Consult AST timber specialists for subfloor moisture testing, timber species selection, multi-sport line marking, and project quotations.
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
