import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { VideoHero } from "@/components/sections/video-hero";
import { Services } from "@/components/sections/services";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { TestingCertification } from "@/components/sections/testing-certification";
import { ContactForm } from "@/components/sections/contact-form";
import { HomepageEffects } from "@/components/sections/homepage-effects";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { Marquee } from "@/components/ui/marquee";
import { company } from "@/content/ast";
import {
  aboutParagraphs,
  brochureUrl,
  brochures,
  clientNames,
  homeProducts,
  testimonials,
} from "@/content/homepage";
const partnerLogos = [
  { src: "/brand/ligature.png", alt: "LigaTurf" },
  { src: "/brand/spurtan.png", alt: "Spurtan" },
  { src: "/brand/smartracks.png", alt: "SmarTracks" },
  { src: "/brand/gigatera.png", alt: "GigaTera" },
  { src: "/brand/humotion.png", alt: "Humotion" },
  { src: "/brand/poligras.png", alt: "Poligras" },
];

const clientLogoRows = [
  clientNames.slice(0, 15).map((name, index) => ({ name, src: `/clients/client-${index + 1}.png` })),
  clientNames.slice(15).map((name, index) => ({ name, src: `/clients/client-${index + 16}.png` })),
];

export function Homepage() {
  return (
    <div className="ast-homepage">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <HomepageEffects />
      <main id="main-content">
        <VideoHero />
        <div className="brand-ribbon">
          <div className="page-container">
            <p className="brand-positioning">
              Asia&apos;s Leading Sports Infrastructure Company
            </p>
          </div>
        </div>
        <div
          className="published-partners"
          aria-label="Brands featured on AST’s website"
        >
          <LogoCloud logos={partnerLogos} />
        </div>
        <section
          id="about"
          className="section-pad about-section"
          data-nav-theme="light"
          aria-labelledby="about-title"
        >
          <div className="page-container">
            <div className="about-layout">
              <div className="about-title">
                <h2 id="about-title">
                  ABOUT{" "}
                  <br />
                  <span className="quiet-text">US.</span>
                </h2>
                <div className="about-image">
                  <Image
                    src="/placeholders/jrd-tata.jpg"
                    alt="AST athletics track at JRD Tata Sports Complex, Jamshedpur"
                    fill
                    sizes="(max-width: 900px) 100vw, 35vw"
                  />
                  <span className="image-location">
                    <MapPin size={13} />
                    JAMSHEDPUR, INDIA
                  </span>
                </div>
              </div>
              <div className="about-copy">
                <p className="lead-copy">{aboutParagraphs[0]}</p>
                <div className="about-detail">
                  {aboutParagraphs.slice(1).map((paragraph) => (
                    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                  ))}
                </div>
                <a href="#services" className="text-link">
                  Discover what we do <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="stats-band"
          data-nav-theme="dark"
          aria-label="AST published figures"
        >
          <div className="page-container stats-grid">
            <div>
              <span className="stat-value">
                100<small>+</small>
              </span>
              <p>
                Installation of Hockey,{" "}
                <br />
                Tracks & Football Projects
              </p>
            </div>
            <div>
              <span className="stat-value">
                1,000<small>K+</small>
              </span>
              <p>
                Square Meters{" "}
                <br />
                Sports Surfaces
              </p>
            </div>
            <div>
              <span className="stat-value">
                20<small>Yr+</small>
              </span>
              <p>Experience</p>
            </div>
          </div>
        </section>
        <section
          id="products"
          className="section-pad sports-section products-showcase-section"
          data-nav-theme="light"
          aria-labelledby="products-title"
        >
          <div id="sports" />
          <div className="page-container">
            <div className="section-heading">
              <div>
                <h2 id="products-title">
                  OUR{" "}
                  <br />
                  <span className="quiet-text">PRODUCTS.</span>
                </h2>
              </div>
              <p>
                Raise your game with our{" "}
                <br />
                world-renowned sports systems.
              </p>
            </div>
            <div className="sport-grid">
              {homeProducts.map((product, index) => (
                <a className="sport-card" href={product.href} key={product.slug}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
                  />
                  <span className="sport-number">0{index + 1}</span>
                  <span className="sport-card-label">
                    <span>{product.name}</span>
                    <ArrowUpRight size={21} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <TestingCertification />
        <section
          id="lighting"
          className="lighting-section"
          data-nav-theme="dark"
          aria-labelledby="lighting-title"
        >
          <div className="lighting-image">
            <Image
              src="/services/lighting.jpg"
              alt="Sports lighting installation pictured on AST’s website"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
          <div className="lighting-copy">
            <h2 id="lighting-title">
              SPORTS{" "}
              <br />
              LIGHTING.
            </h2>
            <p>{company.lighting}</p>
            <p>
              All sports lighting has to be high-quality, totally reliable,
              efficient, and economic.
            </p>
            <a
              href="/products/sports-lighting"
              className="ast-button ast-button-glass"
            >
              Explore sports lighting <ArrowUpRight size={18} />
            </a>
            <span className="lighting-partner">PANASONIC · JAPAN</span>
          </div>
        </section>
        <Services />
        {/* <section id="maintenance" className="maintenance-band" data-nav-theme="dark" aria-labelledby="maintenance-title"><div className="page-container"><p className="eyebrow">CLEANING & MAINTENANCE</p><div className="maintenance-heading"><h2 id="maintenance-title"><span>FAIL & FIXED.</span><br />PREDICT & PREVENT.</h2><a href="#service-cleaning-maintenance" className="circle-link" aria-label="Explore cleaning and maintenance"><ArrowUpRight size={30} /></a></div><p>{homepageServices[7].description}</p></div></section> */}
        <ProjectGallery />
        <section
          id="testimonials"
          className="section-pad testimonials-section"
          data-nav-theme="light"
          aria-labelledby="testimonials-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <h2 id="testimonials-title">TESTIMONIALS.</h2>
              </div>
              <p>
                The people behind
                <br />
                the projects.
              </p>
            </div>
            <div className="testimonial-marquee-shell">
              <Marquee
                pauseOnHover
                repeat={3}
                className="testimonial-marquee"
                tabIndex={0}
                aria-label="Client testimonials. Hover or focus to pause."
              >
                {testimonials.map((item) => (
                  <figure className="testimonial-card" key={item.name}>
                    <Quote size={27} aria-hidden="true" />
                    <blockquote>“{item.quote}”</blockquote>
                    <figcaption>
                      <span className="client-avatar" aria-hidden="true">
                        <Image src={item.image} alt="" width={56} height={56} sizes="56px" />
                      </span>
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                      <span className="testimonial-line" />
                    </figcaption>
                  </figure>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        <section
          id="brochures"
          className="section-pad resources-section"
          data-nav-theme="light"
          aria-labelledby="brochures-title"
        >
          <div className="page-container">
            <div className="section-heading">
              <div>
                <h2 id="brochures-title">
                  PRODUCT{" "}
                  <br />
                  <span className="quiet-text">BROCHURES.</span>
                </h2>
              </div>
              <p>
                Explore the product catalogues
                <br />
                available on AST’s website.
              </p>
            </div>
            <div className="brochure-grid">
              {brochures.map((item) => (
                <a
                  href={brochureUrl(item.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brochure-card"
                  key={item.file}
                >
                  <span className="pdf-tag">PDF</span>
                  <h3>{item.name}</h3>
                  <Download size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section
          id="clients"
          className="clients-section"
          data-nav-theme="light"
          aria-labelledby="clients-title"
        >
          <div className="page-container clients-heading">
            <h2 id="clients-title"><span className="red-rule" aria-hidden="true" />OUR CLIENTS.</h2>
            <a href="#projects" className="ast-button ast-button-red clients-project-link">Our projects <ArrowUpRight size={18} /></a>
          </div>
          <div className="client-carousel" aria-label="AST client logos">
            {clientLogoRows.map((logos, row) => (
              <Marquee
                key={row}
                reverse={row === 1}
                pauseOnHover
                repeat={2}
                className={`client-marquee client-marquee-row-${row + 1}`}
                tabIndex={0}
                aria-label={`Client logos, row ${row + 1}. Hover or focus to pause.`}
              >
                {logos.map(logo => (
                  <div className="client-logo" key={logo.src}>
                    <Image src={logo.src} alt={logo.name} width={170} height={120} sizes="(max-width: 640px) 120px, 170px" />
                  </div>
                ))}
              </Marquee>
            ))}
          </div>
          <div className="page-container">
            <details className="all-clients">
              <summary>View all 30 client logos</summary>
              <div className="all-client-grid">
                {clientNames.map((name, index) => (
                  <div className="client-logo" key={name}>
                    <Image
                      src={`/clients/client-${index + 1}.png`}
                      alt={name}
                      width={140}
                      height={90}
                      sizes="140px"
                    />
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>
        <section
          className="build-cta"
          data-nav-theme="dark"
          aria-labelledby="build-title"
        >
          <div className="page-container">
            <div>
              <h2 id="build-title">
                WANT TO BUILD{" "}
                <br />
                A SPORTS FACILITY?
              </h2>
              <a href="#contact" className="ast-button ast-button-white">
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="section-pad contact-section"
          data-nav-theme="light"
          aria-labelledby="contact-title"
        >
          <div className="page-container contact-layout">
            <div className="contact-details">
              <h2 id="contact-title">
                GET{" "}
                <br />
                <span className="quiet-text">IN TOUCH.</span>
              </h2>
              <p className="contact-company">
                Advanced Sports Technologies LLP
              </p>
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
                  {company.contact.phone}
                </a>
                <a href={`mailto:${company.contact.email}`}>
                  <Mail size={18} />
                  {company.contact.email}
                </a>
                <a
                  href={company.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={19} />
                  WhatsApp AST <ArrowUpRight size={15} />
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
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Contact AST on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
    </div>
  );
}
