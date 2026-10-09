import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle2,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { company } from "@/content/ast";
import {
  maintenanceFaqs,
  maintenanceGallery,
  maintenanceHeroCopy,
  maintenanceMachines,
  maintenanceOverviewCopy,
  maintenanceServices,
  maintenanceStatistics,
  maintenanceSteps,
  maintenanceVideos,
} from "@/content/maintenance";

export function MaintenanceView() {
  return (
    <div className="ast-homepage maintenance-page">
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
          id="maintenance-hero"
          className="maintenance-hero"
          data-nav-theme="dark"
          aria-labelledby="maintenance-hero-title"
        >
          <Image
            className="maintenance-hero-image"
            src="/services/maintenance.jpg"
            alt="AST professional synthetic track and sports turf cleaning maintenance crew in action"
            fill
            priority
            sizes="100vw"
          />
          <div className="maintenance-hero-shade" />

          <div className="page-container maintenance-hero-content">
            <nav className="maintenance-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Cleaning &amp; Maintenance</span>
            </nav>

            <p className="eyebrow">
              <span className="red-rule" />
              {maintenanceHeroCopy.eyebrow}
            </p>

            <h1 id="maintenance-hero-title">
              {maintenanceHeroCopy.title}
              <br />
              <span>{maintenanceHeroCopy.titleHighlight}</span>
            </h1>

            <p className="maintenance-hero-subtitle">{maintenanceHeroCopy.subtitle}</p>

            <div className="maintenance-hero-actions">
              <a href="#contact" className="ast-button ast-button-red">
                Schedule Surface Audit <ArrowUpRight size={18} />
              </a>
              <a href="#maintenance-videos" className="ast-button ast-button-glass">
                <Play size={16} /> Watch Field Videos
              </a>
            </div>
          </div>

          <div className="maintenance-hero-foot">
            <div className="page-container">
              <span>GERMAN SMG MACHINERY</span>
              <span>140 BAR HYDRODYNAMIC PRESSURE</span>
              <span>POLYTAN RE-TOPPING SYSTEM</span>
              <span>WORLD ATHLETICS &amp; FIH CERTIFIED</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. SECTION JUMP BAR
            ================================================================== */}
        <nav className="maintenance-section-nav" aria-label="Cleaning &amp; Maintenance navigation">
          <div className="page-container">
            <a href="#maintenance-overview">
              System Overview <ArrowDown size={14} />
            </a>
            <a href="#maintenance-services">
              Core Services <ArrowDown size={14} />
            </a>
            <a href="#maintenance-videos">
              Video Demos <ArrowDown size={14} />
            </a>
            <a href="#maintenance-machinery">
              German Machinery <ArrowDown size={14} />
            </a>
            <a href="#maintenance-workflow">
              5-Step Protocol <ArrowDown size={14} />
            </a>
            <a href="#maintenance-gallery">
              Project Gallery <ArrowDown size={14} />
            </a>
            <a href="#maintenance-faqs">
              FAQs &amp; Re-Topping <ArrowDown size={14} />
            </a>
          </div>
        </nav>

        {/* ==================================================================
            3. OVERVIEW & IMPORTANCE OF MAINTENANCE
            ================================================================== */}
        <section
          id="maintenance-overview"
          className="maintenance-overview"
          aria-labelledby="overview-title"
        >
          <div className="page-container">
            <div className="maintenance-overview-layout">
              <div className="maintenance-overview-copy">
                <p className="eyebrow">
                  <span className="red-rule" />
                  FACILITATING EXCELLENCE &amp; LONGEVITY
                </p>
                <h2 id="overview-title">
                  PROPER MAINTENANCE OF
                  <br />
                  <span>SYNTHETIC SURFACES.</span>
                </h2>
                {maintenanceOverviewCopy.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              <div className="maintenance-overview-visual">
                <div className="maintenance-visual-frame">
                  <Image
                    src="/imageMaintenance/clean.png"
                    alt="AST mechanical high-pressure wet cleaning machinery deployed on synthetic running track"
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                </div>
                <div className="maintenance-overview-callout">
                  <strong>Official Polytan Service Partner</strong>
                  <p>
                    Specialized German equipment restores shock absorption, traction friction, and porosity
                    to international competition standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Ribbon */}
            <div className="maintenance-stats-bar">
              {maintenanceStatistics.map((stat, i) => (
                <div key={i} className="maintenance-stat-block">
                  <span className="maintenance-stat-value">{stat.value}</span>
                  <span className="maintenance-stat-label">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. 3 CORE SERVICE PILLARS
            ================================================================== */}
        <section
          id="maintenance-services"
          className="maintenance-services"
          aria-labelledby="services-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  COMPREHENSIVE SURFACE CARE
                </p>
                <h2 id="services-title">
                  THREE SPECIALIZED
                  <br />
                  <span>SERVICE DISCIPLINES.</span>
                </h2>
              </div>
              <p className="section-heading-desc">
                From recurring high-pressure wet cleaning to emergency localized repairs and sustainable
                re-topping, AST maintains premier competition sports surfaces across the country.
              </p>
            </div>

            <div className="maintenance-services-grid">
              {maintenanceServices.map((service) => (
                <article key={service.id} className="maintenance-service-card" id={`service-${service.id}`}>
                  <div className="maintenance-service-visual">
                    <Image
                      src={service.image}
                      alt={`${service.title} - AST sports surface maintenance`}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    <span className="maintenance-service-tag">{service.tagline}</span>
                  </div>

                  <div className="maintenance-service-body">
                    <span className="maintenance-service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <span className="maintenance-service-tagline">{service.tagline}</span>
                    <p className="maintenance-service-summary">{service.summary}</p>
                    {service.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="maintenance-service-desc">
                        {p}
                      </p>
                    ))}

                    <ul className="maintenance-service-checklist">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>
                          <CheckCircle2 size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a href="#contact" className="ast-button ast-button-red">
                        Consult On {service.title.split(" ")[0]} <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. VIDEO DEMONSTRATIONS (LOCAL OPERATIONAL + YOUTUBE EMBED)
            ================================================================== */}
        <section
          id="maintenance-videos"
          className="maintenance-videos"
          aria-labelledby="videos-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  FIELD EXECUTION IN ACTION
                </p>
                <h2 id="videos-title">
                  WATCH OUR SPECIALIZED
                  <br />
                  <span>MACHINERY AT WORK.</span>
                </h2>
              </div>
              <p className="section-heading-desc">
                Observe live operational videos showing AST field engineers deploying hydrodynamic wet
                washers and German SMG machinery on running tracks and turf fields.
              </p>
            </div>

            <div className="maintenance-videos-grid">
              {maintenanceVideos.map((video) => (
                <div key={video.id} className="maintenance-video-card">
                  <div className="maintenance-video-player">
                    {video.type === "local" ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        src={video.src}
                        aria-label={video.title}
                      >
                        Your browser does not support HTML5 video.
                      </video>
                    ) : (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.src}?rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>

                  <div className="maintenance-video-body">
                    <span className="maintenance-video-category">{video.category}</span>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>

                    <ul className="maintenance-video-bullets">
                      {video.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>
                          <span className="dot" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. SPECIALIZED GERMAN MACHINERY SHOWCASE
            ================================================================== */}
        <section
          id="maintenance-machinery"
          className="maintenance-machinery"
          aria-labelledby="machinery-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  PRECISION FLEET
                </p>
                <h2 id="machinery-title">
                  GERMAN SMG MACHINERY
                  <br />
                  <span>&amp; FIELD IMPLEMENTS.</span>
                </h2>
              </div>
              <p className="section-heading-desc">
                AST invests in world-standard German maintenance equipment manufactured by SMG GmbH to
                guarantee safe, non-destructive, and high-efficiency servicing.
              </p>
            </div>

            <div className="maintenance-machinery-grid">
              {maintenanceMachines.map((machine, mIdx) => (
                <div key={mIdx} className="maintenance-machine-card">
                  <div className="maintenance-machine-top">
                    <h3>{machine.name}</h3>
                    <span className="maintenance-machine-model">{machine.model}</span>
                  </div>

                  <span className="maintenance-machine-category">{machine.category}</span>
                  <p className="maintenance-machine-desc">{machine.description}</p>

                  <div className="maintenance-machine-specs">
                    {machine.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="maintenance-machine-spec-item">
                        <span>{spec.label}</span>
                        <span>{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="maintenance-machine-features">
                    {machine.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Check size={15} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. 5-STEP PROTOCOL
            ================================================================== */}
        <section
          id="maintenance-workflow"
          className="maintenance-workflow"
          aria-labelledby="workflow-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  STANDARDIZED OPERATIONAL EXCELLENCE
                </p>
                <h2 id="workflow-title">
                  OUR 5-STEP
                  <br />
                  <span>SERVICING PROTOCOL.</span>
                </h2>
              </div>
              <p className="section-heading-desc">
                From initial photometric traction analysis to final line certification, every maintenance
                intervention follows rigorous German engineering protocols.
              </p>
            </div>

            <div className="maintenance-steps-grid">
              {maintenanceSteps.map((step) => (
                <div key={step.step} className="maintenance-step-card">
                  <span className="maintenance-step-number">{step.step}</span>
                  <h3>{step.title}</h3>
                  <span className="maintenance-step-subtitle">{step.subtitle}</span>
                  <p className="maintenance-step-desc">{step.description}</p>
                  <ul className="maintenance-step-actions">
                    {step.actions.map((act, aIdx) => (
                      <li key={aIdx}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            8. GALLERY & HARDWARE SHOWCASE
            ================================================================== */}
        <section
          id="maintenance-gallery"
          className="maintenance-gallery"
          aria-labelledby="gallery-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  INSTALLATIONS ACROSS INDIA
                </p>
                <h2 id="gallery-title">
                  SURFACE RESTORATION
                  <br />
                  <span>PROJECT SHOWCASE.</span>
                </h2>
              </div>
              <p className="section-heading-desc">
                View before-and-after results, hydrodynamic track pore cleaning, de-compacted turf fields,
                and precision line re-marking across India.
              </p>
            </div>

            <div className="maintenance-gallery-grid">
              {maintenanceGallery.map((item, gIdx) => (
                <div key={gIdx} className="maintenance-gallery-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                  <div className="maintenance-gallery-overlay">
                    <span className="maintenance-gallery-cat">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            9. FAQS & RE-TOPPING CALLOUT BANNER
            ================================================================== */}
        <section id="maintenance-faqs" className="maintenance-faqs" aria-labelledby="faqs-title">
          <div className="page-container">
            <div className="maintenance-faqs-layout">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  FREQUENTLY ASKED QUESTIONS
                </p>
                <h2 id="faqs-title">
                  EXPERT ANSWERS ON
                  <br />
                  <span>SPORTS SURFACE CARE.</span>
                </h2>

                <div className="maintenance-faqs-list">
                  {maintenanceFaqs.map((faq, fIdx) => (
                    <div key={fIdx} className="maintenance-faq-card">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="maintenance-retopping-banner">
                <span className="eyebrow">
                  <Sparkles size={16} /> SUSTAINABLE CIRCULAR REFURBISHMENT
                </span>
                <h3>Need to Re-Top an Aging Running Track?</h3>
                <p>
                  Do not spend crores demolishing a structurally sound asphalt subbase. With the Polytan
                  Re-Topping system, AST installs a brand-new polyurethane surface layer with full World
                  Athletics certification while saving up to 60% of replacement costs.
                </p>
                <a href="#contact" className="ast-button ast-button-red">
                  Book A Technical Assessment <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            10. CONTACT / CONSULTATION
            ================================================================== */}
        <section
          id="contact"
          className="section-pad contact-section"
          data-nav-theme="light"
          aria-labelledby="contact-title"
        >
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                SCHEDULE AN AUDIT
              </p>
              <h2 id="contact-title">
                LET&apos;S PRESERVE{" "}
                <br />
                <span className="quiet-text">YOUR SPORTS INFRASTRUCTURE.</span>
              </h2>
              <p className="track-contact-intro">
                Whether you require an annual hydrodynamic high-pressure wash, seam repair, infill
                decompaction, or a full Polytan re-topping feasibility report, our certified engineers are
                ready to assist.
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
                  <span>WhatsApp AST</span>
                  <ArrowUpRight size={15} />
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

      <HomepageFooter />
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
