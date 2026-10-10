"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { ContactForm } from "@/components/sections/contact-form";
import { AboutVideoPlayer } from "@/components/sections/about-video-player";
import { company } from "@/content/ast";

const stats = [
  { value: "100+", label: "Turnkey Stadiums & Pitches Engineered" },
  { value: "14+", label: "Years of Specialized Sports Engineering" },
  { value: "45+", label: "World Athletics & FIH Certifications" },
  { value: "100%", label: "Olympic & Tournament Calibre Compliance" },
];

const alliances = [
  {
    name: "Polytan / Sport Group",
    country: "GERMANY",
    logo: "/brand/poligras.png",
    description:
      "Exclusive India partner for Poligras hockey turf, LigaTurf football systems, and Rekortan athletic tracks. Decades of Olympic and World Cup pedigree.",
  },
  {
    name: "Rekortan Athletic Tracks",
    country: "GERMANY",
    logo: "/brand/rekortan.png",
    description:
      "World Athletics Class 1 & 2 certified track surfaces engineered with pure virgin polymers, sub-millimeter level paving, and record-breaking energy restitution.",
  },
  {
    name: "LigaTurf Football Systems",
    country: "GERMANY",
    logo: "/brand/ligature.png",
    description:
      "FIFA Quality Pro certified football systems engineered for elite ball roll, natural rotational resistance, and long-term durability in high-demand environments.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Sub-Millimeter Precision",
    desc: "Laser-guided grading, European paving machinery, and precision sub-base compaction engineered to eliminate water retention and ensure true ball roll.",
  },
  {
    num: "02",
    title: "Biomechanical Safety",
    desc: "Elastic in-situ polyurethane layers designed for optimal force reduction and energy return, protecting athlete ligaments from high-impact stress.",
  },
  {
    num: "03",
    title: "Extreme Climate Resilience",
    desc: "UV-stable polymers formulated specifically to withstand India's tropical monsoons, high humidity, and extreme summer temperatures without shrinkage.",
  },
  {
    num: "04",
    title: "Eco & Circular Design",
    desc: "Carbon-neutral yarn systems utilizing bio-based PE synthesized from sugarcane, recyclable turf infills, and non-toxic polyurethane binders.",
  },
];

const marqueeVenues = [
  {
    title: "Birsa Munda Hockey Stadium",
    location: "Rourkela, Odisha",
    sport: "FIH World Cup 2023 Venue",
    image: "/projects/Rourkela main/roukela-hockey-stadium-2.jpg",
    badge: "World's Largest All-Seater Hockey Arena",
    desc: "Engineered with Poligras Platinum GT turf for the 2023 FIH Men's World Cup, featuring sub-base drainage and tournament floodlighting.",
  },
  {
    title: "Kalinga Stadium Hockey Arena",
    location: "Bhubaneswar, Odisha",
    sport: "FIH Men's World Cup 2018 & 2023",
    image: "/projects/kalinga.jpg",
    badge: "FIH Global Elite Certified",
    desc: "Dual pitch tournament complex delivering lightning-fast, predictable ball roll for international Olympic qualifiers and World Cup matches.",
  },
  {
    title: "JRD Tata Sports Complex",
    location: "Jamshedpur, Jharkhand",
    sport: "World Athletics Synthetic Track",
    image: "/placeholders/jrd-tata.jpg",
    badge: "World Athletics Class 1",
    desc: "Rekortan M synthetic running track engineered for national championships and training of elite Indian track-and-field sprinters.",
  },
];

export function AboutPageView() {
  return (
    <div className="ast-about-page">
      <SiteHeader />

      <main id="main-content">
        {/* Hero Section */}
        <section className="about-hero" data-nav-theme="dark" aria-labelledby="about-hero-title">
          <Image
            className="about-hero-image"
            src="/placeholders/jrd-tata.jpg"
            alt="AST athletics track at JRD Tata Sports Complex"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-hero-shade" />

          <div className="page-container about-hero-content">
            <nav className="about-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Company</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Us</span>
            </nav>

            <p className="eyebrow hero-eyebrow">
              <span className="red-rule" />
              PIONEERING SPORTS INFRASTRUCTURE
            </p>

            <h1 id="about-hero-title" className="about-hero-title">
              ENGINEERING ASIA&apos;S <br />
              <span className="highlight-red">SPORTING DESTINATIONS.</span>
            </h1>

            <p className="about-hero-lead">
              Advanced Sports Technologies (AST) is India&apos;s premier sports infrastructure firm,
              combining German chemical engineering precision with turnkey civil construction to
              build Olympic, World Cup, and championship-standard venues nationwide.
            </p>

            <div className="about-hero-actions">
              <a href="#heritage" className="ast-button ast-button-red">
                Our Story &amp; Heritage <ArrowDown size={17} />
              </a>
              <a href="#contact" className="ast-button ast-button-glass">
                Consult With Engineers <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Hero Stats Ribbon */}
        <section className="about-stats-ribbon" aria-label="Company Milestones">
          <div className="page-container">
            <div className="about-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat-box">
                  <strong>
                    {stat.value.replace("+", "")}
                    <span>+</span>
                  </strong>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section id="heritage" className="about-heritage-section" data-nav-theme="light">
          <div className="page-container">
            <div className="about-heritage-grid">
              <div className="about-heritage-copy">
                <p className="eyebrow">
                  <span className="red-rule" />
                  WHO WE ARE &amp; OUR PURPOSE
                </p>
                <h2>
                  BORN FROM A PASSION <br />
                  <span className="quiet-text">FOR WORLD-CLASS SPORT.</span>
                </h2>
                <p>
                  Established in New Delhi in 2012, Advanced Sports Technologies LLP (AST) was founded
                  with a singular conviction: Indian athletes deserve training and competition surfaces
                  built to the exact chemical, biomechanical, and dimensional standards of the Olympic
                  Games.
                </p>
                <p>
                  As the authorized and exclusive partner of <strong>Polytan / Sport Group Germany</strong>,
                  AST represents iconic world brands including <strong>POLIGRAS</strong>, <strong>LIGATURF</strong>,
                  <strong> REKORTAN</strong>, <strong>SPURTAN</strong>, and <strong>SMARTRACKS</strong>.
                  From the sub-base laser grading to specialized in-situ polyurethane casting, we own the
                  heavy German installation machinery and certified crews required for turnkey execution.
                </p>
                <p>
                  Over more than a decade, our engineering footprint has transformed India&apos;s sports
                  landscape — delivering marquee pitches for the FIH World Cup, National Games stadiums,
                  Sports Authority of India (SAI) training centers, and leading academic institutions.
                </p>
                <div style={{ marginTop: "28px" }}>
                  <a href="/certificates" className="ast-button ast-button-red">
                    <span>View Official Certifications</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <div className="about-heritage-visual">
                <div className="about-heritage-main-img about-heritage-video-wrap">
                  <AboutVideoPlayer />
                </div>
                <div className="about-heritage-badge">
                  <strong>Official Representative</strong>
                  <span>Polytan / SportGroup Germany in India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Technology Alliances */}
        <section className="about-partners-section" data-nav-theme="dark">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow" style={{ color: "#ff3e41" }}>
                  <span className="red-rule" />
                  GLOBAL TECHNICAL ALLIANCES
                </p>
                <h2 style={{ color: "#ffffff", fontSize: "clamp(36px, 5vw, 60px)" }}>
                  GERMAN CHEMISTRY. <br />
                  <span style={{ color: "#8a9c90" }}>JAPANESE PRECISION.</span>
                </h2>
              </div>
              <p style={{ color: "#bcc9c0", maxWidth: "480px" }}>
                We bridge international material science with indigenous civil engineering excellence
                to construct sports facilities that endure for decades.
              </p>
            </div>

            <div className="about-partner-cards">
              {alliances.map((partner) => (
                <div key={partner.name} className="about-partner-card">
                  <div>
                    <div className="about-partner-top">
                      <div className="about-partner-logo">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={110}
                          height={34}
                          style={{ objectFit: "contain", maxHeight: "32px", width: "auto" }}
                        />
                      </div>
                      <span className="about-partner-country">{partner.country}</span>
                    </div>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Pillars */}
        <section className="about-values-section" data-nav-theme="light">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  OUR ENGINEERING PHILOSOPHY
                </p>
                <h2>
                  THE FOUR PILLARS <br />
                  <span className="quiet-text">OF AST INFRASTRUCTURE.</span>
                </h2>
              </div>
              <p>
                Sports surfaces fail when shortcuts are taken on sub-base civil works or chemical curing.
                We eliminate variables through strict technical protocols.
              </p>
            </div>

            <div className="about-values-grid">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="about-value-card">
                  <span className="value-num">{pillar.num} / PROTOCOL</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee Venues Showcase */}
        <section className="about-showcase-section" data-nav-theme="light">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  LANDMARK VENUES NATIONWIDE
                </p>
                <h2>
                  PROVEN IN INTERNATIONAL <br />
                  <span className="quiet-text">COMPETITION.</span>
                </h2>
              </div>
              <a href="/our-projects" className="text-link">
                View all 100+ projects <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="about-showcase-grid">
              {marqueeVenues.map((venue) => (
                <article key={venue.title} className="about-showcase-card">
                  <div className="about-showcase-media">
                    <Image src={venue.image} alt={venue.title} fill sizes="(max-width: 900px) 100vw, 33vw" loading="eager" />
                    <span className="about-showcase-badge">{venue.sport}</span>
                  </div>
                  <div className="about-showcase-info">
                    <h3>{venue.title}</h3>
                    <p>{venue.desc}</p>
                    <div className="about-showcase-meta">
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <MapPin size={14} color="#ff3e41" />
                        {venue.location}
                      </span>
                      <span>{venue.badge}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Certifications Banner Callout */}
            <div className="about-certs-banner">
              <div>
                <p className="eyebrow" style={{ color: "#ff3e41", marginBottom: "8px" }}>
                  INDEPENDENT GLOBAL VERIFICATION
                </p>
                <h3>WORLD ATHLETICS &amp; FIH ACCREDITED</h3>
                <p>
                  Every major tournament facility built by AST undergoes rigorous field testing by
                  independent international laboratories to verify force reduction, ball roll, and traction.
                </p>
              </div>
              <a href="/certificates" className="ast-button ast-button-red" style={{ whiteSpace: "nowrap" }}>
                <span>Browse 45+ Certificates</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-pad contact-section" data-nav-theme="light">
          <div className="page-container contact-layout">
            <div className="contact-details">
              <p className="eyebrow">
                <span className="red-rule" />
                START YOUR PROJECT
              </p>
              <h2>
                CONNECT WITH OUR <br />
                <span className="quiet-text">ENGINEERS.</span>
              </h2>
              <p className="track-contact-intro">
                Whether planning an Olympic running track, stadium hockey turf, or institutional multi-sport
                complex, our technical team provides end-to-end site consultation.
              </p>
              <p className="contact-company">{company.name}</p>
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
