import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { company } from "@/content/ast";
import {
  lightingBlueprints,
  lightingFaqs,
  lightingFeatures,
  lightingHeroCopy,
  lightingHighlights,
  lightingOverview,
  lightingSpecifications,
  lightingSportApplications,
  lightingStatistics,
} from "@/content/sports-lighting";

export function SportsLightingView() {
  return (
    <div className="ast-homepage lighting-page">
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
          id="lighting-hero"
          className="lighting-hero"
          data-nav-theme="dark"
          aria-labelledby="lighting-hero-title"
        >
          <Image
            className="lighting-hero-image"
            src="/services/lighting.jpg"
            alt="Stadium illuminated by GigaTera LED sports lighting floodlights"
            fill
            priority
            sizes="100vw"
          />
          <div className="lighting-hero-shade" />

          <div className="page-container lighting-hero-content">
            <nav className="lighting-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sports Lighting</span>
            </nav>

            <p className="eyebrow">
              <span className="red-rule" />
              {lightingHeroCopy.eyebrow}
            </p>

            <h1 id="lighting-hero-title">
              {lightingHeroCopy.title}
              <br />
              <span>{lightingHeroCopy.titleHighlight}</span>
            </h1>

            <p className="lighting-hero-subtitle">{lightingHeroCopy.subtitle}</p>

            <div className="lighting-hero-actions">
              <a href="#lighting-overview" className="ast-button ast-button-red">
                Explore Luminaires <ArrowDown size={18} />
              </a>
              <a href="#lighting-blueprints" className="ast-button ast-button-glass">
                Engineering Layouts <ArrowDown size={18} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Request DIALux Simulation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="lighting-hero-foot">
            <div className="page-container">
              <span>KMW INC. WIRELESS COMMUNICATIONS</span>
              <span>PATENTED REFLECTING PLATES</span>
              <span>4K UHD SUPER-SLOW-MO FLICKER-FREE</span>
              <span>100+ STADIUMS EXECUTED IN INDIA</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. SECTION JUMP BAR
            ================================================================== */}
        <nav className="lighting-section-nav" aria-label="Sports Lighting sections">
          <div className="page-container">
            <a href="#lighting-overview">
              System Overview <ArrowDown size={14} />
            </a>
            <a href="#lighting-optics">
              Optical Innovations <ArrowDown size={14} />
            </a>
            <a href="#lighting-blueprints">
              Engineering Blueprints <ArrowDown size={14} />
            </a>
            <a href="#lighting-specs">
              Specifications <ArrowDown size={14} />
            </a>
            <a href="#lighting-sports">
              Sport Applications <ArrowDown size={14} />
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
          id="lighting-overview"
          className="section-pad lighting-overview"
          data-nav-theme="light"
          aria-labelledby="lighting-overview-title"
        >
          <div className="page-container">
            <div className="lighting-overview-layout">
              <div className="lighting-overview-visual">
                <div className="lighting-overview-hero-card">
                  <Image
                    src="/imageLighting/11g.jpg"
                    alt="GigaTera SFP800 series high-output sports lighting luminaire"
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                </div>
                <div className="lighting-overview-callout">
                  Individual LED Reflecting Plates — Zero Glare for High-Speed Ball Tracking
                </div>
              </div>

              <div className="lighting-overview-copy">
                <p className="eyebrow">
                  <span className="red-rule" />
                  GIGATERA SUFA SERIES TECHNOLOGY
                </p>
                <h2 id="lighting-overview-title">
                  WE CAN DESIGN
                  <br />
                  AS PER YOUR DEMAND.
                  <br />
                  <span className="quiet-text">OPTIMIZED FOR SPORTS EVENTS.</span>
                </h2>

                {lightingOverview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="lighting-highlights-grid">
                  {lightingHighlights.map((highlight) => (
                    <div key={highlight} className="lighting-highlight-item">
                      <span className="lighting-highlight-marker" aria-hidden="true" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Bar */}
            <div className="lighting-stats-bar" aria-label="GigaTera sports lighting statistics">
              {lightingStatistics.map((stat) => (
                <div key={stat.value} className="lighting-stat-block">
                  <strong>{stat.value}</strong>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. OPTICAL INNOVATIONS SECTION (DARK)
            ================================================================== */}
        <section
          id="lighting-optics"
          className="section-pad lighting-optics-section"
          data-nav-theme="dark"
          aria-labelledby="lighting-optics-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  BEYOND THE LIGHT
                </p>
                <h2 id="lighting-optics-title">
                  PRECISION REFLECTING PLATES
                  <br />
                  <span>& INTELLIGENT BEAM CONTROL.</span>
                </h2>
              </div>
              <a href="#lighting-specs" className="text-link">
                View technical data sheet <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="lighting-optics-grid">
              {lightingFeatures.map((feat, index) => (
                <article
                  key={feat.title}
                  className={`lighting-feature-card ${index === 0 ? "accent-card" : ""}`}
                >
                  <span className="lighting-feature-number">
                    {feat.number} / {feat.subtitle}
                  </span>
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                  <ul className="lighting-feature-list">
                    {feat.points.map((pt) => (
                      <li key={pt}>
                        <span className="lighting-feature-dot" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. ENGINEERING BLUEPRINTS & DATA SHEETS
            ================================================================== */}
        <section
          id="lighting-blueprints"
          className="section-pad lighting-blueprints-section"
          data-nav-theme="light"
          aria-labelledby="lighting-blueprints-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  AUTHENTIC ENGINEERING SCHEDULING
                </p>
                <h2 id="lighting-blueprints-title">
                  LUMINAIRE DATA SHEETS
                  <br />
                  <span className="quiet-text">& STADIUM AIMING BLUEPRINTS.</span>
                </h2>
              </div>
              <a href="#contact" className="text-link">
                Request custom DIALux photometric design <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="lighting-blueprints-grid">
              {lightingBlueprints.map((item) => (
                <div key={item.id} className="lighting-blueprint-card">
                  <span className="lighting-blueprint-badge">{item.badge}</span>
                  <div className="lighting-blueprint-image-box">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                  <div className="lighting-blueprint-info">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. TECHNICAL SPECIFICATIONS TABLE
            ================================================================== */}
        <section
          id="lighting-specs"
          className="section-pad lighting-specs-section"
          data-nav-theme="light"
          aria-labelledby="lighting-specs-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PERFORMANCE SPECIFICATIONS
                </p>
                <h2 id="lighting-specs-title">
                  GIGATERA SUFA TECHNICAL METRICS
                  <br />
                  <span className="quiet-text">& QUALITY STANDARDS.</span>
                </h2>
              </div>
              <a href="#contact" className="text-link">
                Inquire with engineering team <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="lighting-specs-grid">
              {lightingSpecifications.map((spec) => (
                <div key={spec.label} className="lighting-spec-row">
                  <span className="lighting-spec-label">{spec.label}</span>
                  <span className="lighting-spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Turnkey Engineering Callout */}
            <div className="mt-8 p-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
              <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-base text-amber-900 dark:text-amber-200">
                  Comprehensive Turnkey Sports Lighting Engineering by AST
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  From computer-simulated DIALux photometric studies to structural wind-load design of
                  polygonal high-mast towers, AST delivers complete end-to-end stadium floodlighting.
                  All projects are certified for television broadcast (HD, 4K, Super Slow Motion) with
                  uniformity ratios exceeding international FIH, FIFA, and World Athletics guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. MULTI-SPORT APPLICATIONS
            ================================================================== */}
        <section
          id="lighting-sports"
          className="section-pad lighting-sports-section"
          data-nav-theme="light"
          aria-labelledby="lighting-sports-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  CROSS-SPORT VERSATILITY
                </p>
                <h2 id="lighting-sports-title">
                  LIGHTING SOLUTIONS
                  <br />
                  <span className="quiet-text">FOR EVERY ARENA.</span>
                </h2>
              </div>
              <Link href="/sports" className="text-link">
                Explore AST sports surfaces <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="lighting-sports-grid">
              {lightingSportApplications.map((app) => (
                <div key={app.title} className="lighting-sport-card">
                  <span className="lighting-sport-badge">{app.standard}</span>
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            8. TURNKEY BANNER & FAQ SECTION (DARK)
            ================================================================== */}
        <section
          id="lighting-turnkey"
          className="section-pad lighting-turnkey-section"
          data-nav-theme="dark"
          aria-labelledby="lighting-turnkey-title"
        >
          <div className="page-container">
            <div className="lighting-turnkey-banner">
              <div className="lighting-turnkey-info">
                <span className="text-xs uppercase tracking-wider text-red-400 font-bold">
                  Turnkey Infrastructure
                </span>
                <h3>Need a Custom DIALux Lighting Simulation?</h3>
                <p>
                  Share your ground dimensions, target lux requirement, and pole locations. AST
                  provides detailed photometric 3D renderings and coordinate aiming lists.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a href="#contact" className="ast-button ast-button-red">
                  Request Simulation <ArrowUpRight size={18} />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    "Hello AST Sports, I would like to inquire about GigaTera LED Sports Lighting for our facility."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast-button ast-button-glass"
                  aria-label="Chat with AST about Sports Lighting on WhatsApp"
                >
                  <MessageCircle size={18} /> WhatsApp Engineering
                </a>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-14">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="lighting-faq-grid">
                {lightingFaqs.map((faq) => (
                  <div key={faq.question} className="lighting-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            9. CONTACT & INQUIRY PANEL
            ================================================================== */}
        <section
          id="contact"
          className="section-pad lighting-contact"
          data-nav-theme="light"
          aria-labelledby="lighting-contact-title"
        >
          <div className="page-container">
            <div className="contact-layout">
              <div className="contact-info">
                <p className="eyebrow">
                  <span className="red-rule" />
                  GET IN TOUCH
                </p>
                <h2 id="lighting-contact-title">
                  ILLUMINATE YOUR ARENA
                  <br />
                  WITH GIGATERA
                  <br />
                  <span className="quiet-text">LED SPORTS LIGHTING.</span>
                </h2>
                <p className="lighting-contact-intro">
                  Whether you are planning floodlighting for an Olympic hockey pitch, athletic track,
                  FIFA football stadium, or multi-sport arena, our specialized engineering team is here to
                  assist with turnkey calculations.
                </p>

                <div className="contact-details">
                  <div>
                    <MapPin size={22} className="contact-icon" />
                    <div>
                      <strong>Advanced Sport Technologies LLP</strong>
                      <p>
                        E-42, 3rd Floor, Okhla Industrial Area, Phase II
                        <br />
                        New Delhi – 110020, India
                      </p>
                    </div>
                  </div>
                  <div>
                    <Phone size={22} className="contact-icon" />
                    <div>
                      <strong>Telephone</strong>
                      <p>
                        <a href={company.contact.phoneHref}>{company.contact.phone}</a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Mail size={22} className="contact-icon" />
                    <div>
                      <strong>Email Inquiries</strong>
                      <p>
                        <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-panel">
                <p className="eyebrow">DIRECT INQUIRY</p>
                <h3>REQUEST SPECIFICATIONS & LUX SIMULATION</h3>
                <ContactForm />
              </div>
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
