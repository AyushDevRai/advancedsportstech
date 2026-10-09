import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { company } from "@/content/ast";
import { brochureUrl } from "@/content/homepage";
import {
  timingGateFaqs,
  timingGateGallery,
  timingGateHighlights,
  timingGateOverview,
  timingGatePillars,
  timingGateSpecifications,
  timingGateSportApplications,
  timingGateStatistics,
} from "@/content/wireless-timing-gate";

export function WirelessTimingGateView() {
  const catalogPdf = "/pdf/WIRELESS-TIMING-GATE-CATALOGUE.pdf";
  const smartracksPdf = "/pdf/CATALOGUE-SMARTRACK-RED.pdf";

  return (
    <div className="ast-homepage timing-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />

      <main id="main-content">
        {/* ==================================================================
            1. HERO SECTION
            ================================================================== */}
        <section
          id="timing-hero"
          className="timing-hero"
          data-nav-theme="dark"
          aria-labelledby="timing-hero-title"
        >
          <Image
            className="timing-hero-image"
            src="/imageWirelessTiming/Picture2.png"
            alt="SmarTracks Wireless Timing Gate System deployed on athletic running track"
            fill
            priority
            sizes="100vw"
          />
          <div className="timing-hero-shade" />

          <div className="page-container timing-hero-content">
            <nav className="timing-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <Link href="/smartracks">SmarTracks</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Wireless Timing Gates</span>
            </nav>

            <p className="eyebrow">
              <span className="red-rule" />
              SMARTRACKS BY POLYTAN &amp; HUMOTION
            </p>

            <h1 id="timing-hero-title">
              TAKING PERFORMANCE
              <br />
              <span>TO THE NEXT LEVEL.</span>
            </h1>

            <p className="timing-hero-subtitle">
              Portable millisecond-precision timing gates and wearable sensor diagnostics by Humotion for athletes and coaches.
            </p>

            <div className="timing-hero-actions">
              <a href="#timing-overview" className="ast-button ast-button-red">
                Explore Timing System <ArrowDown size={18} />
              </a>
              <a href={catalogPdf} download className="ast-button ast-button-glass">
                <Download size={18} /> Download Catalogue
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Request Consultation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="timing-hero-foot">
            <div className="page-container">
              <span>GERMAN HUMOTION SENSORS</span>
              <span>1/100s MINIMUM ACCURACY</span>
              <span>10H BATTERY BACKUP</span>
              <span>PORTABLE & UNDER-SURFACE</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. SECTION JUMP BAR
            ================================================================== */}
        <nav className="timing-section-nav" aria-label="Timing Gate sections">
          <div className="page-container">
            <a href="#timing-overview">
              System Overview <ArrowDown size={14} />
            </a>
            <a href="#timing-pillars">
              Diagnostic Pillars <ArrowDown size={14} />
            </a>
            <a href="#timing-gallery">
              Hardware Showcase <ArrowDown size={14} />
            </a>
            <a href="#timing-video">
              Video Demonstration <ArrowDown size={14} />
            </a>
            <a href="#timing-specs">
              Specifications <ArrowDown size={14} />
            </a>
            <a href="#timing-downloads">
              Catalogues <ArrowDown size={14} />
            </a>
            <a href="#contact">
              Inquire Now <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>

        {/* ==================================================================
            3. SYSTEM OVERVIEW SECTION
            ================================================================== */}
        <section
          id="timing-overview"
          className="section-pad timing-overview"
          data-nav-theme="light"
          aria-labelledby="timing-overview-title"
        >
          <div className="page-container">
            <div className="timing-overview-layout">
              <div className="timing-overview-visual">
                <div className="timing-overview-hero-card">
                  <Image
                    src="/imageWirelessTiming/Picture2.png"
                    alt="SmarTracks Mobile Wireless Timing Gates complete system layout"
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                </div>
                <div className="timing-overview-callout">
                  Intuitive Mobile Wireless Timing Gate System — 3-Minute Setup on Any Track or Turf
                </div>
              </div>

              <div className="timing-overview-copy">
                <p className="eyebrow">
                  <span className="red-rule" />
                  SMARTRACKS WIRELESS TIMING GATE SYSTEM
                </p>
                <h2 id="timing-overview-title">
                  EFFORTLESS & PRECISE
                  <br />
                  DATA LOGGING FOR
                  <br />
                  <span className="quiet-text">AMBITIOUS ATHLETES.</span>
                </h2>

                {timingGateOverview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="timing-highlights-grid">
                  {timingGateHighlights.map((highlight) => (
                    <div key={highlight} className="timing-highlight-item">
                      <span className="timing-highlight-marker" aria-hidden="true" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Bar */}
            <div className="timing-stats-bar" aria-label="Wireless timing capabilities">
              {timingGateStatistics.map((stat) => (
                <div key={stat.value} className="timing-stat-block">
                  <strong>{stat.value}</strong>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. DIAGNOSTIC PILLARS SECTION (DARK)
            ================================================================== */}
        <section
          id="timing-pillars"
          className="section-pad timing-pillars-section"
          data-nav-theme="dark"
          aria-labelledby="timing-pillars-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  GERMAN SENSOR ENGINEERING & DATA SCIENCE
                </p>
                <h2 id="timing-pillars-title">
                  THREE FOUNDATIONAL
                  <br />
                  <span>PILLARS OF SMARTRACKS WIRELESS.</span>
                </h2>
              </div>
              <a href="#timing-specs" className="text-link">
                View technical specifications <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="timing-pillars-grid">
              {timingGatePillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`timing-pillar-card ${index === 0 ? "accent-card" : ""}`}
                >
                  <span className="timing-pillar-number">0{index + 1} / {pillar.eyebrow}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul className="timing-pillar-list">
                    {pillar.items.map((item) => (
                      <li key={item}>
                        <span className="timing-pillar-dot" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. HARDWARE GALLERY & SHOWCASE
            ================================================================== */}
        <section
          id="timing-gallery"
          className="section-pad timing-gallery-section"
          data-nav-theme="light"
          aria-labelledby="timing-gallery-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  SYSTEM HARDWARE & SENSOR SUITE
                </p>
                <h2 id="timing-gallery-title">
                  PORTABLE OLYMPIC-GRADE
                  <br />
                  <span className="quiet-text">DIAGNOSTICS IN ANY VENUE.</span>
                </h2>
              </div>
              <a href={catalogPdf} download className="text-link">
                Download hardware brochure <Download size={18} />
              </a>
            </div>

            <div className="timing-gallery-grid">
              {timingGateGallery.map((item) => (
                <div key={item.title} className="timing-gallery-card">
                  <span className="timing-gallery-badge">{item.badge}</span>
                  <div className="timing-gallery-image-box">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                  <div className="timing-gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. VIDEO DEMONSTRATION SPOTLIGHT
            ================================================================== */}
        <section
          id="timing-video"
          className="section-pad timing-video-spotlight"
          data-nav-theme="light"
          aria-labelledby="timing-video-title"
        >
          <div className="page-container">
            <div className="timing-video-grid">
              <div className="timing-video-box">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/-w4l4MzG4PU?rel=0"
                  title="SmarTracks Wireless Timing Gate & Live Diagnostics Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="timing-video-copy">
                <p className="eyebrow">
                  <span className="red-rule" />
                  PRECISION IN ACTION
                </p>
                <h3 id="timing-video-title">
                  LIVESTREAM RESULTS
                  <br />
                  WITH THE SMARTRACKS APP.
                </h3>
                <p>
                  Watch how mobile wireless timing gates instantly capture sprint split times, velocity
                  profiles, step rates, and ground contact times. Data transmits automatically via Bluetooth
                  BLE to smartphones and coach tablets with zero alignment delays or line-of-sight trip hazard.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="#contact" className="ast-button ast-button-red">
                    Schedule live demo <ArrowUpRight size={18} />
                  </a>
                  <Link href="/smartracks" className="timing-button-secondary">
                    View Inbuilt System <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. TECHNICAL SPECIFICATIONS SECTION
            ================================================================== */}
        <section
          id="timing-specs"
          className="section-pad timing-specs-section"
          data-nav-theme="light"
          aria-labelledby="timing-specs-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  ENGINEERING SPECIFICATIONS
                </p>
                <h2 id="timing-specs-title">
                  TECHNICAL METRICS &
                  <br />
                  <span className="quiet-text">HARDWARE CAPABILITIES.</span>
                </h2>
              </div>
              <a href="#contact" className="text-link">
                Request technical data sheet <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="timing-specs-grid">
              {timingGateSpecifications.map((spec) => (
                <div key={spec.label} className="timing-spec-row">
                  <span className="timing-spec-label">{spec.label}</span>
                  <span className="timing-spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Under-surface embedded notice callout */}
            <div className="mt-8 p-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
              <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-amber-900 dark:text-amber-200">
                  Dual-Mode Architecture: Portable Gates or In-Ground Sub-Surface Installation
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  SmarTracks wireless timing gates can be deployed as freestanding portable tripod gates
                  or permanently installed underneath synthetic running tracks and turf systems during
                  construction or retop resurfacing. Humotion provides the complete measurement systems,
                  transmitters, and cloud server infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            8. MULTI-SPORT APPLICATIONS
            ================================================================== */}
        <section
          id="timing-sports"
          className="section-pad timing-sports-section"
          data-nav-theme="light"
          aria-labelledby="timing-sports-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CROSS-SPORT VERSATILITY
                </p>
                <h2 id="timing-sports-title">
                  ADAPTABLE ACROSS
                  <br />
                  <span className="quiet-text">ELITE ATHLETIC DISCIPLINES.</span>
                </h2>
              </div>
              <Link href="/sports" className="text-link">
                Explore AST sports surfaces <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="timing-sports-grid">
              {timingGateSportApplications.map((app) => (
                <div key={app.title} className="timing-sport-card">
                  <span className="timing-sport-badge">{app.sport}</span>
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            9. DOWNLOADS & CATALOGUES
            ================================================================== */}
        <section
          id="timing-downloads"
          className="section-pad timing-downloads-section"
          data-nav-theme="dark"
          aria-labelledby="timing-downloads-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  OFFICIAL AST DOWNLOADS
                </p>
                <h2 id="timing-downloads-title">
                  DOWNLOAD BROCHURES
                  <br />
                  <span>& SHARE SPECIFICATIONS.</span>
                </h2>
              </div>
            </div>

            <div className="timing-download-banner">
              <div className="timing-download-info">
                <span className="text-xs uppercase tracking-wider text-red-400 font-bold">
                  Official AST Technical Catalog
                </span>
                <h3>Wireless Timing Gate System Catalogue</h3>
                <p>
                  Comprehensive documentation including hardware diagrams, combine protocols, sensor
                  specifications, and software connectivity.
                </p>
              </div>

              <div className="timing-download-actions">
                <a
                  href={catalogPdf}
                  download="WIRELESS-TIMING-GATE-CATALOGUE.pdf"
                  className="ast-button ast-button-red"
                >
                  <Download size={18} /> Download PDF (757 KB)
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    brochureUrl("WIRELESS-TIMING-GATE-CATALOGUE.pdf")
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast-button ast-button-glass"
                  aria-label="Share Wireless Timing Gate catalogue via WhatsApp"
                >
                  <WhatsAppIcon size={18} /> Share via WhatsApp
                </a>
              </div>
            </div>

            {/* Related Inbuilt brochure card */}
            <div className="mt-4 p-6 rounded-lg bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-bold text-lg">SmarTracks Inbuilt Timing System Catalogue</h4>
                <p className="text-sm text-slate-400">
                  Permanent magnetic timing gates installed beneath synthetic tracks and turf.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a href={smartracksPdf} download className="ast-button ast-button-glass text-sm">
                  <Download size={16} /> Download Inbuilt PDF
                </a>
                <Link
                  href="/smartracks"
                  className="text-sm font-semibold text-white/90 hover:text-red-400 flex items-center gap-1.5 transition-colors"
                >
                  View SmarTracks Inbuilt <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-14">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="timing-faq-grid">
                {timingGateFaqs.map((faq) => (
                  <div key={faq.question} className="timing-faq-item">
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            10. CONTACT & INQUIRY PANEL
            ================================================================== */}
        <section
          id="contact"
          className="section-pad timing-contact"
          data-nav-theme="light"
          aria-labelledby="timing-contact-title"
        >
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                GET IN TOUCH
              </p>
              <h2 id="timing-contact-title">
                EQUIP YOUR VENUE{" "}
                <br />
                WITH SMARTRACKS{" "}
                <br />
                <span className="quiet-text">WIRELESS TIMING.</span>
              </h2>
              <p className="track-contact-intro">
                Whether you are planning a mobile combine testing kit for a football academy or equipping
                an Olympic athletics facility, our engineering team is here to assist.
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
                <a
                  href={company.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={19} />
                  <span>WhatsApp AST</span> <ArrowUpRight size={15} />
                </a>
              </address>
            </div>

            <div className="contact-form-panel">
              <h3>Have any queries?</h3>
              <p>We’re here to help with your next sports facility.</p>
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
