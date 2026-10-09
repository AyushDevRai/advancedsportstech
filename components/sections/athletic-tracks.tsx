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
import { diamondLeagueVenues, rekortanHistory, rekortanReasons, trackBenefits, trackOverview, trackProducts, trackStatistics } from "@/content/athletic-tracks";

export function AthleticTracks() {
  return (
    <div className="ast-homepage athletic-page">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader homeHref="/" />
      <HomepageEffects />
      <main id="main-content">
        <section id="home" className="track-hero" data-nav-theme="dark" aria-labelledby="track-title">
          <Image className="track-hero-image" src="/image/header-1.jpg" alt="Red synthetic athletics track surrounding a stadium field" fill preload sizes="100vw" />
          <div className="track-hero-shade" />
          <div className="page-container track-hero-content">
            <nav className="track-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#sports">Sports</Link><span aria-hidden="true">/</span><span aria-current="page">Athletic Tracks</span></nav>
            <p className="eyebrow"><span className="red-rule" />ATHLETIC TRACKS</p>
            <h1 id="track-title">HIGHER. FASTER.<br /><span>SMARTER.</span></h1>
            <p className="track-hero-subtitle">Modern Synthetic Surfaces For Athletics</p>
            <div className="track-hero-actions"><a href="#track-products" className="ast-button ast-button-red">Explore track systems <ArrowDown size={18} /></a><a href="#contact" className="ast-button ast-button-glass">Build your vision <ArrowUpRight size={18} /></a></div>
          </div>
          <div className="track-hero-foot"><div className="page-container"><span>POLYTAN / SPORTGROUP GERMANY</span><span>REKORTAN — THE ORIGINAL SYNTHETIC TRACK</span></div></div>
        </section>

        <nav className="track-section-nav" aria-label="Athletic tracks sections"><div className="page-container"><a href="#track-overview">The surface <ArrowDown size={14} /></a><a href="#why-rekortan">Why Rekortan <ArrowDown size={14} /></a><a href="#track-products">Track systems <ArrowDown size={14} /></a></div></nav>

        <section id="track-overview" className="section-pad track-overview" data-nav-theme="light" aria-labelledby="track-overview-title">
          <div className="page-container track-overview-layout">
            <div className="track-overview-visual"><div className="track-runner-image"><Image src="/image/challenge-1.jpg" alt="Sprinter accelerating on a red synthetic athletics track" fill sizes="(max-width: 900px) 100vw, 40vw" /></div><p>High Quality Synthetic Surfaces For Your Requirements</p><span className="track-visual-line" aria-hidden="true" /></div>
            <div className="track-overview-copy"><p className="eyebrow"><span className="red-rule" />PRECISION IN EVERY LAYER</p><h2 id="track-overview-title">PREPARING THE<br />OPTIMUM SURFACE<br /><span className="quiet-text">FOR TRACK AND<br />FIELD ATHLETES.</span></h2>{trackOverview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        <section className="section-pad track-heritage" data-nav-theme="dark" aria-labelledby="track-heritage-title">
          <div className="page-container">
            <div className="track-heritage-layout"><div><p className="eyebrow"><span className="red-rule" />TRUSTED & CHOSEN FOR OVER 50 YEARS</p><h2 id="track-heritage-title">REKORTAN.<br /><span>THE ORIGINAL<br />SYNTHETIC TRACK.</span></h2></div><p className="track-heritage-copy">{rekortanHistory}</p></div>
            <div className="track-timeline" aria-label="Rekortan history"><div><strong>1969</strong><p>Olympic Stadium<br />Berlin</p></div><div><strong>1972</strong><p>Olympic Games<br />Munich</p></div><div><strong>50<span>+</span></strong><p>Years of innovation<br />Green & SMART technology</p></div></div>
          </div>
        </section>

        <section id="why-rekortan" className="section-pad track-reasons" data-nav-theme="light" aria-labelledby="track-reasons-title">
          <div className="page-container">
            <div className="section-heading"><div><p className="eyebrow"><span className="red-rule" />PERFORMANCE. QUALITY. INNOVATION.</p><h2 id="track-reasons-title">WHY CHOOSE{" "}<br /><span className="quiet-text">REKORTAN?</span></h2></div><a href="#track-products" className="text-link">Find your track system <ArrowUpRight size={20} /></a></div>
            <div className="track-proof-grid">
              <article className="track-proof-card track-certifications"><span className="track-card-number">01</span><h3>Most certified tracks<br />in the world</h3><div className="track-global-stats">{trackStatistics.map(stat => <div key={stat.value}><strong>{stat.value}</strong><p>{stat.text}</p></div>)}</div></article>
              <article className="track-proof-card track-diamond"><span className="track-card-number">02</span><h3>Chosen for 4<br />Diamond League venues</h3><ul>{diamondLeagueVenues.map(venue => <li key={venue}><span className="track-venue-marker" aria-hidden="true" />{venue}</li>)}</ul></article>
            </div>
            <div className="track-reason-grid">{rekortanReasons.map(reason => <article className={`track-reason-card ${reason.accent ? "track-reason-green" : ""}`} key={reason.number}><span className="track-card-number">{reason.number}</span>{reason.accent && <strong className="track-green-stat" aria-hidden="true">88<span>%</span></strong>}<h3>{reason.title}</h3>{reason.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{reason.points.length > 0 && <ul>{reason.points.map(point => <li key={point}>{point}</li>)}</ul>}</article>)}</div>
          </div>
        </section>

        <section className="section-pad track-benefits" data-nav-theme="light" aria-labelledby="track-benefits-title"><div className="page-container">
          <div className="track-benefits-layout"><div><p className="eyebrow"><span className="red-rule" />FROM RAW MATERIALS TO THE FINISH LINE</p><h2 id="track-benefits-title">WHY CHOOSE{" "}<br /><span className="quiet-text">OUR TRACKS?</span></h2></div><ol>{trackBenefits.map((benefit, index) => <li key={benefit}><span>{String(index + 1).padStart(2, "0")}</span><p>{benefit}</p></li>)}</ol></div>
          <figure className="track-smart-figure"><div className="track-smart-label"><span className="eyebrow">SMART TECHNOLOGY</span><span>Connecting surfaces to digital technology</span></div><Image src="/image/tracktrack-scaled-e1652685240732.jpg" alt="SmarTracks running track diagram showing timing gate positions and measured sprint distances" width={2470} height={666} sizes="(max-width: 900px) 100vw, 1800px" /><figcaption>SmarTracks — athlete timing on the track.</figcaption></figure>
        </div></section>

        <section id="track-products" className="section-pad track-products" data-nav-theme="light" aria-labelledby="track-products-title"><div className="page-container">
          <div className="section-heading"><div><p className="eyebrow"><span className="red-rule" />REKORTAN TRACK SYSTEMS</p><h2 id="track-products-title">PRODUCTS FOR<br /><span className="quiet-text">ATHLETIC TRACK.</span></h2></div><nav className="track-product-jump" aria-label="Choose a track system">{trackProducts.map(product => <a key={product.id} href={`#${product.id}`}>{product.name}<ArrowDown size={14} /></a>)}</nav></div>
          <div className="track-product-list">{trackProducts.map((product, index) => <article className="track-product" id={product.id} key={product.id} aria-labelledby={`${product.id}-title`}>
            <div className="track-product-visual"><div className="track-product-visual-top"><span>0{index + 1} / REKORTAN</span><span>SYSTEM CROSS SECTION</span></div><div className="track-product-image"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 900px) 100vw, 45vw" /></div><p>{product.type}</p></div>
            <div className="track-product-copy"><p className="eyebrow">{product.type}</p><h3 id={`${product.id}-title`}>{product.name}</h3>{product.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="track-product-actions"><a href="#contact" className="ast-button ast-button-red">Enquire about this system <ArrowUpRight size={18} /></a><a className="text-link" href={brochureUrl(product.file)} target="_blank" rel="noopener noreferrer" aria-label={`View ${product.name} brochure (opens in a new tab)`}>Brochure <Download size={18} /></a></div></div>
          </article>)}</div>
        </div></section>

        <section className="build-cta" data-nav-theme="red" aria-labelledby="track-build-title"><div className="page-container"><p className="eyebrow">FACILITATING EXCELLENCE</p><div><h2 id="track-build-title">HAVE ANY<br />QUERIES?</h2><a href="#contact" className="ast-button ast-button-white">Let’s talk <ArrowUpRight size={20} /></a></div></div></section>

        <section id="contact" className="section-pad contact-section" data-nav-theme="light" aria-labelledby="track-contact-title"><div className="page-container contact-layout">
          <div className="contact-details"><p className="eyebrow"><span className="red-rule" />GET IN TOUCH</p><h2 id="track-contact-title">GET<br /><span className="quiet-text">IN TOUCH.</span></h2><p className="track-contact-intro">If you’ve got questions or ideas you would like to share, send a message.</p><p className="contact-company">Advanced Sports Technologies LLP</p><address><a href="https://maps.google.com/?q=E-42+Okhla+Industrial+Area+Phase+II+New+Delhi+110020" target="_blank" rel="noopener noreferrer"><MapPin size={19} /><span>{company.contact.address}<br />{company.contact.city}</span></a><a href={company.contact.phoneHref}><Phone size={18} /><span>{company.contact.phone}</span></a><a href={`mailto:${company.contact.email}`}><Mail size={18} /><span>{company.contact.email}</span></a></address></div>
          <div className="contact-form-panel"><h3>Have any queries?</h3><ContactForm /></div>
        </div></section>
      </main>
      <HomepageFooter homeHref="/" />
      <a href={company.contact.whatsapp} className="floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat with AST on WhatsApp"><WhatsAppIcon size={26} /></a>
    </div>
  );
}
