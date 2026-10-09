"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  X,
  Phone,
  FileText,
  Camera,
  Video
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { IndiaProjectMap } from "@/components/sections/india-project-map";
import {
  projectStats,
  showcaseCreations,
  projectVideos,
  type ShowcaseProject
} from "@/content/our-projects";
import { VideoCarousel } from "@/components/ui/video-carousel";
import { company } from "@/content/ast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

// Eased animated number counter component
function AnimatedCounter({
  target,
  suffix = "+",
  duration = 1400
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      if (progress >= 1) {
        setCount(target);
      } else {
        setCount(Math.min(target, Math.round(easedProgress * target)));
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef} className="animated-counter-value">
      {count}
      {suffix}
    </span>
  );
}

export function OurProjectsPageView() {
  const [mediaType, setMediaType] = useState<"photos" | "videos">("photos");
  const [activeCreationFilter, setActiveCreationFilter] = useState<string>("All");
  const [selectedCreation, setSelectedCreation] = useState<ShowcaseProject | null>(null);

  const creationFilters = ["All", "Athletic Track", "Hockey Turf", "Football Turf"] as const;

  const visibleCreations = showcaseCreations.filter(
    (item) => activeCreationFilter === "All" || item.category === activeCreationFilter
  );

  return (
    <div className="ast-our-projects-page ast-homepage">
      {/* 1. Global Navigation Header */}
      <SiteHeader homeHref="/" />

      <main id="main-content">
        {/* 2. Hero Section */}
        <section
          className="projects-hero-section"
          id="home"
          data-nav-theme="dark"
          aria-labelledby="projects-hero-title"
        >
          <div className="projects-hero-backdrop" aria-hidden="true">
            <Image
              src="/image/header-1.jpg"
              alt="AST Track and Infrastructure"
              fill
              priority
              className="projects-hero-bg-img"
              sizes="100vw"
            />
            <div className="projects-hero-dark-overlay" />
            <div className="projects-hero-gradient" />
            <div className="projects-hero-radial-vignette" />
          </div>

          <div className="page-container projects-hero-content">
            <nav className="projects-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Projects</span>
            </nav>

            <p className="eyebrow hero-eyebrow">
              <span className="red-rule" />
              PORTFOLIO & FOOTPRINT
            </p>

            <h1 id="projects-hero-title" className="projects-hero-heading">
              OUR <span className="highlight-red">PROJECTS.</span>
            </h1>

            <p className="projects-hero-lead">
              Over 100+ championship athletic tracks, hockey turfs & football stadiums engineered nationwide.
            </p>

            <div className="projects-hero-actions">
              <a href="#map-section" className="ast-button ast-button-red">
                Explore India Map <ArrowDown size={16} />
              </a>
              <a
                href="#creations-section"
                onClick={() => setMediaType("photos")}
                className="ast-button ast-button-ghost-dark"
              >
                Photo Showcase <Camera size={16} />
              </a>
              <a
                href="#creations-section"
                onClick={() => setMediaType("videos")}
                className="ast-button ast-button-ghost-dark"
              >
                Project Videos <Video size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 3. Modern Animated Number Counter Statistics Section */}
        <section className="projects-stats-section" data-nav-theme="light" aria-label="Projects statistics">
          <div className="page-container">
            <div className="stats-section-header">
              <span className="section-eyebrow">
                <span className="red-rule" />
                PROVEN TRACK RECORD
              </span>
              <h2 className="stats-section-title">
                INSTALLATION MILESTONES <span className="quiet-text">BY SPORT</span>
              </h2>
              <p className="stats-section-desc">
                From Olympic training centers to World Cup match venues, our track record is backed
                by independent global certifications.
              </p>
            </div>

            <div className="projects-counter-grid">
              {projectStats.map((stat, idx) => (
                <div key={stat.id} className={`counter-card counter-card-${stat.category}`}>
                  <div className="counter-card-header">
                    <span className="card-index">0{idx + 1}</span>
                    <span className="category-tag">{stat.label}</span>
                  </div>

                  <div className="counter-display">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="counter-info">
                    <h3 className="counter-title">{stat.label}</h3>
                    <p className="counter-sublabel">{stat.sublabel}</p>
                  </div>

                  <div className="card-accent-line" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Interactive Animated India Map Section */}
        <section
          className="projects-map-section"
          id="map-section"
          data-nav-theme="light"
          aria-labelledby="map-section-title"
        >
          <div className="page-container">
            <div className="map-section-heading">
              <div>
                <span className="section-eyebrow">
                  <span className="red-rule" />
                  INTERACTIVE GEOGRAPHIC DIRECTORY
                </span>
                <h2 id="map-section-title" className="map-heading-title">
                  NATIONWIDE <span className="highlight-red">FOOTPRINT.</span>
                </h2>
              </div>
              <p className="map-heading-desc">
                Explore AST installations plotted with verified GPS coordinates across India. Click
                or hover any animated pulsing pin to review venue specifications, certified systems,
                and client authorities.
              </p>
            </div>

            {/* Interactive SVG India Map with filter controls & live pins */}
            <IndiaProjectMap />
          </div>
        </section>

        {/* 5. "Our Creations" Showcase Portfolio Grid & Video Showcase */}
        <section
          className="projects-showcase-section"
          id="creations-section"
          data-nav-theme="light"
          aria-labelledby="creations-title"
        >
          <div className="page-container">
            <div className="showcase-section-heading">
              <div>
                <span className="section-eyebrow">
                  <span className="red-rule" />
                  FEATURED INSTALLATIONS & FOOTAGE
                </span>
                <h2 id="creations-title" className="showcase-title">
                  PROJECT <span className="highlight-red">{mediaType === "photos" ? "GALLERY." : "VIDEOS."}</span>
                </h2>
              </div>

              {/* Media Option at Top: Photos (default) vs Videos */}
              <div className="gallery-media-toggle-wrap" style={{ margin: 0 }}>
                <div className="gallery-media-toggle" role="tablist" aria-label="Project media type">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mediaType === "photos"}
                    className={`media-tab-btn ${mediaType === "photos" ? "is-active" : ""}`}
                    onClick={() => setMediaType("photos")}
                  >
                    <Camera size={16} />
                    <span>Photos</span>
                    <span className="media-tab-count">{showcaseCreations.length}</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mediaType === "videos"}
                    className={`media-tab-btn ${mediaType === "videos" ? "is-active" : ""}`}
                    onClick={() => setMediaType("videos")}
                  >
                    <Video size={16} />
                    <span>Videos</span>
                    <span className="media-tab-count">{projectVideos.length}</span>
                  </button>
                </div>
              </div>
            </div>

            {mediaType === "photos" && (
              <>
                {/* Category Filter Toolbar */}
                <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "26px" }}>
                  <div className="showcase-filters-toolbar" role="group" aria-label="Filter creations">
                    {creationFilters.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveCreationFilter(tab)}
                        className={`showcase-filter-btn ${
                          activeCreationFilter === tab ? "is-selected" : ""
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Creations Cards Grid */}
                <div className="showcase-cards-grid">
                  {visibleCreations.map((proj, idx) => (
                    <article
                      key={proj.id}
                      className="showcase-card"
                      onClick={() => setSelectedCreation(proj)}
                    >
                      <div className="showcase-card-media">
                        <Image
                          src={proj.image}
                          alt={proj.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="showcase-card-img"
                        />
                        <div className="showcase-card-overlay" />

                        <div className="showcase-card-badges">
                          <span className="creation-cat-pill">{proj.category}</span>
                          <span className="creation-year-pill">{proj.year}</span>
                        </div>

                        <div className="showcase-card-hover-action">
                          <span className="action-circle">
                            <ArrowUpRight size={18} />
                          </span>
                        </div>
                      </div>

                      <div className="showcase-card-details">
                        <div className="card-location-row">
                          <MapPin size={13} className="text-red-500" />
                          <span>
                            {proj.city}, {proj.state}
                          </span>
                        </div>

                        <h3 className="card-proj-name">{proj.name}</h3>

                        <p className="card-highlight-text">{proj.highlight}</p>

                        <div className="card-specs-row">
                          <div className="spec-badge">
                            <Layers size={12} />
                            <span>{proj.surface.split("(")[0]}</span>
                          </div>
                          <div className="spec-badge cert-badge">
                            <Award size={12} />
                            <span>{proj.certification}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}

            {mediaType === "videos" && (
              <div style={{ marginTop: "16px" }}>
                <VideoCarousel videos={projectVideos} />
              </div>
            )}
          </div>
        </section>

        {/* 6. Client Trust & Certifications Strip */}
        <section className="projects-trust-strip" data-nav-theme="light" aria-label="Certifications and trust">
          <div className="page-container">
            <div className="trust-strip-inner">
              <div className="trust-col">
                <span className="trust-number">100%</span>
                <span className="trust-label">International Sports Federations Compliance</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-col">
                <span className="trust-number">11+</span>
                <span className="trust-label">Years of Engineering Excellence in India</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-col">
                <span className="trust-number">1M+</span>
                <span className="trust-label">m² Synthetic Surfaces Installed</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-col">
                <span className="trust-number">German</span>
                <span className="trust-label">Exclusive Polytan / Sport Group Representation</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Bottom Contact Consultation CTA */}
        <section className="projects-cta-section" id="contact" data-nav-theme="light" aria-labelledby="cta-heading">
          <div className="page-container">
            <div className="projects-cta-box">
              <div className="cta-left-content">
                <span className="cta-kicker">TURNKEY SPORTS INFRASTRUCTURE</span>
                <h2 id="cta-heading" className="cta-heading">
                  HAVE A PROJECT <span className="highlight-red">IN MIND?</span>
                </h2>
                <p className="cta-desc">
                  Whether you are planning a World Athletics certified track, an FIH Global hockey
                  pitch, or an all-weather football stadium, AST provides turnkey conceptualization,
                  survey, construction, and certification.
                </p>

                <div className="cta-buttons-row">
                  <a href={`tel:${company.contact.phone.replace(/\s+/g, "")}`} className="ast-button ast-button-red">
                    <Phone size={16} /> Call +91 11 430 63 708
                  </a>
                  <a
                    href={company.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ast-button ast-button-outline"
                  >
                    <WhatsAppIcon size={16} /> WhatsApp Inquiry
                  </a>
                </div>
              </div>

              <div className="cta-right-box">
                <div className="cta-glass-card">
                  <h3>Headquarters & Technical Operations</h3>
                  <p className="cta-address">
                    {company.name}
                    <br />
                    {company.contact.address}
                    <br />
                    {company.contact.city}
                  </p>

                  <div className="cta-quick-contacts">
                    <div>
                      <span className="contact-label">Email:</span>
                      <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
                    </div>
                    <div>
                      <span className="contact-label">Working Hours:</span>
                      <span>Mon – Sat: 09:30 AM – 06:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Project Detail Dialog / Modal */}
      <Dialog
        open={selectedCreation !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCreation(null);
        }}
      >
        <DialogContent className="ast-homepage ast-our-projects-page project-detail-dialog" showCloseButton={false}>
          {selectedCreation && (
            <div className="project-dialog-inner">
              <div className="project-dialog-media">
                <Image
                  src={selectedCreation.image}
                  alt={selectedCreation.name}
                  fill
                  sizes="90vw"
                  className="dialog-main-img"
                />
                <button
                  type="button"
                  className="dialog-close-btn"
                  onClick={() => setSelectedCreation(null)}
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
                <div className="dialog-media-pill">{selectedCreation.category}</div>
              </div>

              <div className="project-dialog-info">
                <DialogHeader>
                  <div className="dialog-location">
                    <MapPin size={13} className="text-red-500" />
                    <span>
                      {selectedCreation.city}, {selectedCreation.state} · Completed{" "}
                      {selectedCreation.year}
                    </span>
                  </div>
                  <DialogTitle className="dialog-title">{selectedCreation.name}</DialogTitle>
                </DialogHeader>

                <p className="dialog-description">{selectedCreation.description}</p>

                <div className="dialog-specs-strip">
                  <div className="dialog-spec-chip">
                    <span className="spec-chip-label">Surface:</span>
                    <span className="spec-chip-value">{selectedCreation.surface}</span>
                  </div>
                  <div className="dialog-spec-chip">
                    <span className="spec-chip-label">Certification:</span>
                    <span className="spec-chip-value">{selectedCreation.certification}</span>
                  </div>
                  <div className="dialog-spec-chip">
                    <span className="spec-chip-label">Authority:</span>
                    <span className="spec-chip-value">{selectedCreation.client}</span>
                  </div>
                </div>

                <div className="dialog-actions-row">
                  <a
                    href="#contact"
                    onClick={() => setSelectedCreation(null)}
                    className="ast-button ast-button-red dialog-cta"
                  >
                    Enquire About Similar Project <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={company.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ast-button ast-button-outline"
                  >
                    <WhatsAppIcon size={16} /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 9. Global Footer */}
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
