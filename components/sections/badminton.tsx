import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, MessageCircle, Phone, Check } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { company } from "@/content/ast";
import { brochureUrl } from "@/content/homepage";
import {
  badmintonBenefits,
  badmintonComparison,
  badmintonFlooringTypes,
  badmintonHistory,
  badmintonOverview,
  badmintonProducts,
  badmintonReasons,
  badmintonStatistics,
} from "@/content/badminton";

export function Badminton() {
  return (
    <div className="ast-homepage badminton-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="bm-hero" data-nav-theme="dark" aria-labelledby="bm-title">
          <Image
            className="bm-hero-image"
            src="/courts/badminton-acrylic-floor.jpg"
            alt="Synthetic acrylic and sprung hardwood badminton court flooring with boundary markings and net"
            fill
            priority
            sizes="100vw"
          />
          <div className="bm-hero-shade" />
          <div className="page-container bm-hero-content">
            <nav className="bm-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Badminton Courts</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              BADMINTON COURT SYSTEMS
            </p>
            <h1 id="bm-title">
              EXPLOSIVE LUNGES.
              <br />
              <span>CERTIFIED GRIP.</span>
            </h1>
            <p className="bm-hero-subtitle">
              Professional Badminton Courts — Featuring Advanced Acrylic &amp; Sprung Wooden Flooring
            </p>
            <div className="bm-hero-actions">
              <a href="#flooring-types" className="ast-button ast-button-red">
                Explore flooring types <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Build your court <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="bm-hero-foot">
            <div className="page-container">
              <span>BWF GRADE 1 CERTIFIED &amp; ALL-WEATHER ACRYLIC</span>
              <span>SYNTHETIC ACRYLIC COURTS &bull; SPRUNG MAPLE HARDWOOD &bull; BWF PVC MATS</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="bm-section-nav" aria-label="Badminton court sections">
          <div className="page-container">
            <a href="#bm-overview">
              The surface <ArrowDown size={14} />
            </a>
            <a href="#flooring-types">
              Acrylic vs Wooden <ArrowDown size={14} />
            </a>
            <a href="#comparison">
              Technical matrix <ArrowDown size={14} />
            </a>
            <a href="#bm-products">
              Court systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* Overview Section */}
        <section id="bm-overview" className="section-pad bm-overview" data-nav-theme="light" aria-labelledby="bm-overview-title">
          <div className="page-container bm-overview-layout">
            <div className="bm-overview-visual">
              <div className="bm-visual-image">
                <Image
                  src="/Product Images/Badminton/indoor-badminton-court-flooring-604.jpg"
                  alt="Badminton court technical diagram and CAD engineering specifications"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <p>Certified Precision Surfaces For Badminton Academies &amp; Arenas</p>
              <span className="bm-visual-line" aria-hidden="true" />
            </div>
            <div className="bm-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                ACRYLIC &amp; SPRUNG TIMBER EXCELLENCE
              </p>
              <h2 id="bm-overview-title">
                LIGHTNING FOOTWORK.
                <br />
                INSTANT RECOVERY.
                <br />
                <span className="quiet-text">
                  CALIBRATED FOR
                  <br />
                  ZERO FOOT SLIP.
                </span>
              </h2>
              {badmintonOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* TWO TYPES OF FLOORING SPOTLIGHT SECTION */}
        <section id="flooring-types" className="section-pad bm-flooring-spotlight" data-nav-theme="light" aria-labelledby="flooring-types-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  TWO SPECIALIZED FLOORING TECHNOLOGIES
                </p>
                <h2 id="flooring-types-title">
                  ACRYLIC SYNTHETIC
                  <br />
                  <span className="quiet-text">&amp; SPRUNG WOODEN FLOORING.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                AST delivers both all-weather synthetic acrylic surfacing and BWF Grade 1 sprung timber floors to match your facility requirements.
              </p>
            </div>

            <div className="bm-types-grid">
              {/* Type 1: Acrylic Synthetic Flooring */}
              <article className="bm-type-card" id="acrylic-badminton">
                <div className="bm-type-image">
                  <Image
                    src={badmintonFlooringTypes.acrylic.image}
                    alt={badmintonFlooringTypes.acrylic.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <span className="bm-type-badge">{badmintonFlooringTypes.acrylic.badge}</span>
                </div>
                <div className="bm-type-copy">
                  <h3>{badmintonFlooringTypes.acrylic.title}</h3>
                  <p>{badmintonFlooringTypes.acrylic.description}</p>
                  <ul className="bm-type-highlights">
                    {badmintonFlooringTypes.acrylic.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bm-type-cta">
                    <a href="#contact" className="ast-button ast-button-red">
                      Enquire acrylic court <ArrowUpRight size={16} />
                    </a>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Outdoor &bull; Indoor</span>
                  </div>
                </div>
              </article>

              {/* Type 2: Sprung Wooden Flooring */}
              <article className="bm-type-card" id="wooden-badminton">
                <div className="bm-type-image">
                  <Image
                    src={badmintonFlooringTypes.wooden.image}
                    alt={badmintonFlooringTypes.wooden.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <span className="bm-type-badge">{badmintonFlooringTypes.wooden.badge}</span>
                </div>
                <div className="bm-type-copy">
                  <h3>{badmintonFlooringTypes.wooden.title}</h3>
                  <p>{badmintonFlooringTypes.wooden.description}</p>
                  <ul className="bm-type-highlights">
                    {badmintonFlooringTypes.wooden.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bm-type-cta">
                    <a href="#contact" className="ast-button ast-button-red">
                      Enquire wooden court <ArrowUpRight size={16} />
                    </a>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">BWF Grade 1 Stadium</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX SECTION */}
        <section id="comparison" className="section-pad bm-comparison-section" data-nav-theme="light" aria-labelledby="comparison-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  TECHNICAL COMPARISON
                </p>
                <h2 id="comparison-title">
                  ACRYLIC VS WOODEN{" "}
                  <br />
                  <span className="quiet-text">SPECIFICATION MATRIX.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Compare engineering attributes, certifications, shock dissipation, and environmental versatility.
              </p>
            </div>

            <div className="bm-comparison-wrap">
              <div className="bm-table-scroll-hint" aria-hidden="true">
                <span>← Swipe sideways to compare full specifications →</span>
              </div>
              <table className="bm-comparison-table" aria-label="Acrylic versus Wooden Badminton Flooring Comparison">
                <thead>
                  <tr>
                    <th>Feature / Specification</th>
                    <th>Synthetic Acrylic Flooring</th>
                    <th>Sprung Wooden Flooring</th>
                  </tr>
                </thead>
                <tbody>
                  {badmintonComparison.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.parameter}</td>
                      <td>{row.acrylic}</td>
                      <td>{row.wooden}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="section-pad bm-heritage" data-nav-theme="dark" aria-labelledby="bm-heritage-title">
          <div className="page-container">
            <div className="bm-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  EMPOWERING CHAMPIONS
                </p>
                <h2 id="bm-heritage-title">
                  BADMINTON ARENAS
                  <br />
                  <span>BUILT FOR EXCELLENCE.</span>
                </h2>
              </div>
              <p className="bm-heritage-copy">{badmintonHistory}</p>
            </div>
            <div className="bm-timeline" aria-label="Badminton court achievements">
              <div>
                <strong>BWF 1</strong>
                <p>
                  Grade 1 certified
                  <br />
                  World tour performance
                </p>
              </div>
              <div>
                <strong>
                  2<span> TYPES</span>
                </strong>
                <p>
                  Acrylic synthetic &amp;
                  <br />
                  Sprung hardwood timber
                </p>
              </div>
              <div>
                <strong>
                  60<span>%+</span>
                </strong>
                <p>
                  Impact force reduction
                  <br />
                  Joint &amp; tendon safety
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AST Badminton Section */}
        <section id="why-ast-badminton" className="section-pad bm-reasons" data-nav-theme="light" aria-labelledby="bm-reasons-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE. TRACTION. DURABILITY.
                </p>
                <h2 id="bm-reasons-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">AST BADMINTON COURTS?</span>
                </h2>
              </div>
              <a href="#bm-products" className="text-link">
                Find your court system <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="bm-proof-grid">
              <article className="bm-proof-card bm-certifications">
                <span className="bm-card-number">01</span>
                <h3>
                  Certified for
                  <br />
                  international play
                </h3>
                <div className="bm-global-stats">
                  {badmintonStatistics.map((stat) => (
                    <div key={stat.value}>
                      <strong>{stat.value}</strong>
                      <p>{stat.text}</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="bm-proof-card">
                <span className="bm-card-number">02</span>
                <h3>
                  Dual flooring
                  <br />
                  system portfolio
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AST is one of the few sports infrastructure specialists delivering both in-situ multi-layer synthetic acrylic surfaces and tongue-and-groove sprung hardwood systems under one roof.
                </p>
              </article>
            </div>

            <div className="bm-reason-grid">
              {badmintonReasons.map((reason) => (
                <article
                  className={`bm-reason-card ${reason.accent ? "bm-reason-accent" : ""}`}
                  key={reason.number}
                >
                  <span className="bm-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="bm-accent-stat" aria-hidden="true">
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

        {/* Benefits Section */}
        <section className="section-pad bm-benefits" data-nav-theme="light" aria-labelledby="bm-benefits-title">
          <div className="page-container">
            <div className="bm-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PRECISION FROM SUB-BASE TO NET
                </p>
                <h2 id="bm-benefits-title">
                  WHY ACADEMIES
                  <br />
                  <span className="quiet-text">CHOOSE AST.</span>
                </h2>
              </div>
              <ol>
                {badmintonBenefits.map((benefit, index) => (
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
        <section id="bm-products" className="section-pad bm-products" data-nav-theme="light" aria-labelledby="bm-products-title">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CERTIFIED COURT SYSTEMS
                </p>
                <h2 id="bm-products-title">
                  PRODUCTS FOR
                  <br />
                  <span className="quiet-text">BADMINTON COURTS.</span>
                </h2>
              </div>
              <nav className="bm-product-jump" aria-label="Choose a badminton court system">
                {badmintonProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="bm-product-list">
              {badmintonProducts.map((product, index) => (
                <article
                  className="bm-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="bm-product-visual">
                    <div className="bm-product-visual-top">
                      <span>0{index + 1} / BADMINTON COURT</span>
                      <span>SURFACE SPECIFICATION</span>
                    </div>
                    <div className="bm-product-image">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 45vw"
                      />
                    </div>
                    <p>{product.type}</p>
                  </div>
                  <div className="bm-product-copy">
                    <p className="eyebrow">{product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <div className="bm-product-actions">
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
        <section className="build-cta" data-nav-theme="red" aria-labelledby="bm-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="bm-build-title">
                PLANNING A
                <br />
                BADMINTON ARENA?
              </h2>
              <a href="#contact" className="ast-button ast-button-white">
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-pad contact-section" data-nav-theme="light" aria-labelledby="bm-contact-title">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="bm-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="track-contact-intro">
                Consult AST badminton specialists for guidance between acrylic and sprung wooden flooring, arena lighting lux levels, and turnkey estimates.
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
