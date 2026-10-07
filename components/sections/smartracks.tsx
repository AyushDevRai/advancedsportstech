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
  smartracksAdvantages,
  smartracksHistory,
  smartracksOverview,
  smartracksProducts,
  smartracksReasons,
  smartracksStatistics,
  smartracksSteps,
  smartracksVideos,
} from "@/content/smartracks";

export function Smartracks() {
  return (
    <div className="ast-homepage smartracks-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="smartracks-hero" data-nav-theme="dark" aria-labelledby="smartracks-title">
          <Image
            className="smartracks-hero-image"
            src="/imageSmartTrack/key-visual-smart-10feb2021-scaled-1.jpg"
            alt="Athlete sprinting with SmarTracks wearable sensor timing diagnostics"
            fill
            priority
            sizes="100vw"
          />
          <div className="smartracks-hero-shade" />
          <div className="page-container smartracks-hero-content">
            <nav className="smartracks-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">SmarTracks</span>
            </nav>
            <p className="eyebrow">
              <span className="red-rule" />
              SMART TECHNOLOGY & PERFORMANCE DIAGNOSTICS
            </p>
            <h1 id="smartracks-title">
              CONNECTING SURFACES.
              <br />
              <span>DIGITAL DIAGNOSTICS.</span>
            </h1>
            <p className="smartracks-hero-subtitle">
              SmarTracks by Polytan — The Patented In-Ground System for Professional Performance Diagnostics
            </p>
            <div className="smartracks-hero-actions">
              <a href="#smartracks-products" className="ast-button ast-button-red">
                Explore SmarTracks systems <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Upgrade your facility <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="smartracks-hero-foot">
            <div className="page-container">
              <span>POLYTAN / SPORTGROUP GERMANY</span>
              <span>SMARTRACKS — PATENTED GERMAN SENSOR TIMING</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="smartracks-section-nav" aria-label="SmarTracks sections">
          <div className="page-container">
            <a href="#smartracks-overview">
              The technology <ArrowDown size={14} />
            </a>
            <a href="#smartracks-workflow">
              How it works <ArrowDown size={14} />
            </a>
            <a href="#why-smartracks">
              Why SmarTracks <ArrowDown size={14} />
            </a>
            <a href="#smartracks-products">
              Timing systems <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* In-Ground Technology Overview */}
        <section
          id="smartracks-overview"
          className="section-pad smartracks-overview"
          data-nav-theme="light"
          aria-labelledby="smartracks-overview-title"
        >
          <div className="page-container smartracks-overview-layout">
            <div className="smartracks-overview-visual">
              <div className="smartracks-video-box">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${smartracksVideos.overview.id}?rel=0`}
                  title={smartracksVideos.overview.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p>Patented In-Ground Magnetic Diagnostics For Running Tracks & Turf</p>
              <span className="smartracks-visual-line" aria-hidden="true" />
            </div>
            <div className="smartracks-overview-copy">
              <p className="eyebrow">
                <span className="red-rule" />
                ABOUT SMARTRACKS BY POLYTAN
              </p>
              <h2 id="smartracks-overview-title">
                THE INNOVATIVE
                <br />
                IN-GROUND SYSTEM
                <br />
                <span className="quiet-text">
                  FOR PROFESSIONAL
                  <br />
                  PERFORMANCE DIAGNOSTICS.
                </span>
              </h2>
              {smartracksOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section
          id="smartracks-workflow"
          className="section-pad smartracks-workflow"
          data-nav-theme="light"
          aria-labelledby="smartracks-workflow-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  SCIENTIFIC TRAINING WORKFLOW
                </p>
                <h2 id="smartracks-workflow-title">
                  HOW SMARTRACKS WORKS:
                  <br />
                  <span className="quiet-text">FROM SENSOR TO CLOUD.</span>
                </h2>
              </div>
              <a href="#smartracks-products" className="text-link">
                View system options <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="smartracks-steps-grid">
              {smartracksSteps.map((s) => (
                <article className="smartracks-step-card" key={s.step}>
                  <div className="smartracks-step-top">
                    <span className="smartracks-step-number">{s.step}</span>
                    <span className="smartracks-step-tag">Step {s.step}</span>
                  </div>
                  <div className="smartracks-step-image">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 900px) 100vw, 25vw" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage / Millisecond Precision Section (Dark) */}
        <section
          id="smartracks-heritage"
          className="section-pad smartracks-heritage"
          data-nav-theme="dark"
          aria-labelledby="smartracks-heritage-title"
        >
          <div className="page-container">
            <div className="smartracks-heritage-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PRECISE DIAGNOSTICS FOR ALL ATHLETES
                </p>
                <h2 id="smartracks-heritage-title">
                  BECAUSE EVERY
                  <br />
                  <span>
                    MILLISECOND
                    <br />
                    COUNTS.
                  </span>
                </h2>
              </div>
              <p className="smartracks-heritage-copy">{smartracksHistory}</p>
            </div>
            <div className="smartracks-timeline" aria-label="SmarTracks diagnostic capabilities">
              {smartracksStatistics.map((stat) => (
                <div key={stat.value}>
                  <strong>
                    {stat.value.replace(/([%+])/, "")}
                    <span>{stat.value.match(/([%+])/)?.[0] ?? ""}</span>
                  </strong>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>

            {/* Embedded Demonstration Video: Because Every Millisecond Counts */}
            <div className="smartracks-heritage-video-layout">
              <div className="smartracks-video-box">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${smartracksVideos.millisecond.id}?rel=0`}
                  title={smartracksVideos.millisecond.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="smartracks-heritage-video-copy">
                <p className="eyebrow">
                  <span className="red-rule" />
                  PRECISION IN ACTION
                </p>
                <h3>Because Every Millisecond Counts</h3>
                <p>
                  Watch how athletes and coaches utilize permanent sub-surface SmarTracks magnetic gates
                  to capture split times, velocity progressions, and stride rate across sprint
                  straights and 400m circuits with zero optical tripods or line-of-sight delays.
                </p>
              </div>
            </div>

            {/* SmarTracks Track Timing Diagram Figure */}
            <figure className="smartracks-diagram-figure">
              <Image
                src="/image/tracktrack-scaled-e1652685240732.jpg"
                alt="SmarTracks running track diagram showing magnetic gate positions along sprint straights and 400m circuits"
                width={2470}
                height={666}
                sizes="(max-width: 900px) 100vw, 1800px"
              />
              <figcaption>
                SmarTracks — sub-surface magnetic timing gates integrated into the running track
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Why Choose SmarTracks */}
        <section
          id="why-smartracks"
          className="section-pad smartracks-reasons"
          data-nav-theme="light"
          aria-labelledby="smartracks-reasons-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  SPEED. PRECISION. ACTIONABLE INSIGHTS.
                </p>
                <h2 id="smartracks-reasons-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">SMARTRACKS?</span>
                </h2>
              </div>
              <a href="#smartracks-products" className="text-link">
                Compare timing systems <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="smartracks-proof-grid">
              <article className="smartracks-proof-card smartracks-certifications">
                <span className="smartracks-card-number">01</span>
                <h3>
                  Permanent, invisible
                  <br />
                  in-ground timing gates
                </h3>
                <div className="smartracks-global-stats">
                  <div>
                    <strong>±0.001s</strong>
                    <p>Millisecond Precision Verified Against Optical Lag</p>
                  </div>
                  <div>
                    <strong>
                      30<span>+</span>
                    </strong>
                    <p>Athletes Timed Simultaneously Without Cross-Talk</p>
                  </div>
                  <div>
                    <strong>
                      100<span>%</span>
                    </strong>
                    <p>All-Weather Immune to Rain, Sun, Fog & Darkness</p>
                  </div>
                </div>
              </article>

              <article className="smartracks-proof-card smartracks-diamond">
                <span className="smartracks-card-number">02</span>
                <h3>
                  Superior to Optical
                  <br />
                  & Video Diagnostics
                </h3>
                <ul>
                  <li>
                    <span className="smartracks-venue-marker" aria-hidden="true" />
                    Zero tripod setup, cable routing, or battery recharging beneath the track
                  </li>
                  <li>
                    <span className="smartracks-venue-marker" aria-hidden="true" />
                    Immune to false triggers caused by arm swings, falling leaves, or adjacent runners
                  </li>
                  <li>
                    <span className="smartracks-venue-marker" aria-hidden="true" />
                    Deep stride kinematic diagnostics: cadence, stride length, and ground contact time
                  </li>
                  <li>
                    <span className="smartracks-venue-marker" aria-hidden="true" />
                    Installed beneath Rekortan tracks, Spurtan surfaces, and synthetic sports turf
                  </li>
                </ul>
              </article>
            </div>

            <div className="smartracks-reason-grid">
              {smartracksReasons.map((reason) => (
                <article
                  className={`smartracks-reason-card ${reason.accent ? "smartracks-reason-amber" : ""}`}
                  key={reason.number}
                >
                  <span className="smartracks-card-number">{reason.number}</span>
                  {reason.accent && (
                    <strong className="smartracks-amber-stat" aria-hidden="true">
                      100<span>%</span>
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
          className="section-pad smartracks-benefits"
          data-nav-theme="light"
          aria-labelledby="smartracks-benefits-title"
        >
          <div className="page-container">
            <div className="smartracks-benefits-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  SCIENTIFIC ADVANTAGES OF SMARTRACKS
                </p>
                <h2 id="smartracks-benefits-title">
                  WHY CHOOSE
                  <br />
                  <span className="quiet-text">SMARTRACKS TIMING?</span>
                </h2>
              </div>
              <ol>
                {smartracksAdvantages.map((advantage, index) => (
                  <li key={advantage}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{advantage}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Products / Systems Section */}
        <section
          id="smartracks-products"
          className="section-pad smartracks-products"
          data-nav-theme="light"
          aria-labelledby="smartracks-products-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  SMARTRACKS SYSTEMS & SOFTWARE
                </p>
                <h2 id="smartracks-products-title">
                  DIGITAL TIMING FOR
                  <br />
                  <span className="quiet-text">EVERY DISCIPLINE.</span>
                </h2>
              </div>
              <nav className="smartracks-product-jump" aria-label="Choose a SmarTracks system">
                {smartracksProducts.map((product) => (
                  <a key={product.id} href={`#${product.id}`}>
                    {product.name}
                    <ArrowDown size={14} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="smartracks-product-list">
              {smartracksProducts.map((product, index) => (
                <article
                  className="smartracks-product"
                  id={product.id}
                  key={product.id}
                  aria-labelledby={`${product.id}-title`}
                >
                  <div className="smartracks-product-visual">
                    <div className="smartracks-product-visual-top">
                      <span>0{index + 1} / SMARTRACKS</span>
                      <span>SYSTEM SPECIFICATION</span>
                    </div>
                    {product.videoId ? (
                      <div className="smartracks-video-box">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${product.videoId}?rel=0`}
                          title={product.videoTitle ?? product.name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="smartracks-product-image">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="(max-width: 900px) 100vw, 45vw"
                        />
                      </div>
                    )}
                    <p>{product.type}</p>
                  </div>
                  <div className="smartracks-product-copy">
                    <p className="eyebrow">{product.badge ?? product.type}</p>
                    <h3 id={`${product.id}-title`}>{product.name}</h3>
                    {product.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {product.specs.length > 0 && (
                      <ul className="smartracks-product-specs">
                        {product.specs.map((spec) => (
                          <li key={spec}>
                            <span className="smartracks-spec-dot" aria-hidden="true" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* App store badges on software card */}
                    {product.id === "smartracks-run-app" && (
                      <div className="smartracks-app-badges">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.humotion.smartracksathlete&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="smartracks-app-badge-link"
                          aria-label="Download SmarTracks on Google Play"
                        >
                          <Image src="/imageSmartTrack/google.png" alt="Get it on Google Play" width={135} height={40} />
                        </a>
                        <a
                          href="https://apps.apple.com/app/smartracks-athlete/id1477319170"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="smartracks-app-badge-link"
                          aria-label="Download SmarTracks on Apple App Store"
                        >
                          <Image src="/imageSmartTrack/App-Store.png" alt="Download on App Store" width={135} height={40} />
                        </a>
                      </div>
                    )}

                    <div className="smartracks-product-actions">
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
        <section className="build-cta" data-nav-theme="red" aria-labelledby="smartracks-build-title">
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="smartracks-build-title">
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
          aria-labelledby="smartracks-contact-title"
        >
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="smartracks-contact-title">
                GET
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="smartracks-contact-intro">
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
