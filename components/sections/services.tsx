"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { homepageServices } from "@/content/homepage";
import { useEffect, useState } from "react";

export function Services() {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const fromHash = () => {
      const index = homepageServices.findIndex(service => `#service-${service.slug}` === window.location.hash);
      if (index >= 0) setSelected(index);
    };
    const frame = requestAnimationFrame(fromHash);
    window.addEventListener("hashchange", fromHash);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("hashchange", fromHash); };
  }, []);
  return <section id="services" className="section-pad services-section" data-nav-theme="light" aria-labelledby="services-title"><div className="page-container">
    <div className="section-heading"><div><p className="eyebrow"><span className="red-rule" />WHAT WE DO</p><h2 id="services-title">WHAT<br /><span className="quiet-text">WE DO.</span></h2></div><p>We have the capabilities to support<br className="desktop-break" /> a project end-to-end.</p></div>
    <div className="services-layout"><div className="services-picture"><div className="services-picture-media"><Image src={homepageServices[selected].image} alt={`AST ${homepageServices[selected].name.toLowerCase()} work`} fill sizes="(max-width: 900px) 100vw, 43vw" /></div><div className="services-picture-caption"><span>0{selected + 1} / 08</span><p>{homepageServices[selected].tagline}</p><a href="#contact" aria-label={`Enquire about ${homepageServices[selected].name}`}><ArrowUpRight size={23} /></a></div></div>
      <div className="service-list">{homepageServices.map((service, index) => <article key={service.slug} id={`service-${service.slug}`} className={`service-row ${selected === index ? "is-active" : ""}`}><h3><button type="button" onClick={() => setSelected(index)} aria-expanded={index === selected} aria-controls={`service-panel-${service.slug}`}><span className="service-number">0{index + 1}</span><span>{service.name}</span><ChevronDown size={20} /></button></h3><div id={`service-panel-${service.slug}`} hidden={selected !== index} className="service-description"><p>{service.description}</p><a href="#contact" className="text-link">Discuss your project <ArrowUpRight size={15} /></a></div></article>)}</div>
    </div></div></section>;
}
