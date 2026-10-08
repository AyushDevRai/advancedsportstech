"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { homepageServices } from "@/content/homepage";
import { useEffect, useRef, useState } from "react";

export function Services() {
  const [selected, setSelected] = useState(0);
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    const fromHash = () => {
      const index = homepageServices.findIndex(
        (service) => `#service-${service.slug}` === window.location.hash
      );
      if (index >= 0) setSelected(index);
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("ast:anchor-settled", fromHash);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("ast:anchor-settled", fromHash);
    };
  }, []);

  const handleHover = (index: number) => {
    if (isScrollingRef.current) return;
    setSelected(index);
  };

  return (
    <section
      id="services"
      className="section-pad services-section"
      data-nav-theme="light"
      aria-labelledby="services-title"
    >
      <div className="page-container">
        <div className="section-heading">
          <div>
            <h2 id="services-title">
              WHAT <span className="quiet-text">WE DO.</span>
            </h2>
          </div>
          <p>
            We have the capabilities to support
            <br className="desktop-break" /> a project end-to-end.
          </p>
        </div>
        <div className="services-layout">
          <div className="services-picture">
            <div className="services-picture-media">
              <Image
                src={homepageServices[selected].image}
                alt={`AST ${homepageServices[selected].name.toLowerCase()} work`}
                fill
                sizes="(max-width: 900px) 100vw, 43vw"
              />
            </div>
            <div className="services-picture-caption">
              <span>0{selected + 1} / 08</span>
              <p>{homepageServices[selected].tagline}</p>
              <a
                href="#contact"
                aria-label={`Enquire about ${homepageServices[selected].name}`}
              >
                <ArrowUpRight size={23} />
              </a>
            </div>
          </div>
          <div className="service-list">
            {homepageServices.map((service, index) => (
              <article
                key={service.slug}
                id={`service-${service.slug}`}
                className={`service-row ${selected === index ? "is-active" : ""}`}
                onMouseEnter={() => handleHover(index)}
                onPointerMove={(e) => {
                  if (e.movementX === 0 && e.movementY === 0) return;
                  handleHover(index);
                }}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setSelected(index)}
                    aria-expanded={index === selected}
                    aria-controls={`service-panel-${service.slug}`}
                  >
                    <span className="service-number">0{index + 1}</span>
                    <span>{service.name}</span>
                    <ChevronDown size={20} />
                  </button>
                </h3>
                <div
                  id={`service-panel-${service.slug}`}
                  aria-hidden={selected !== index}
                  inert={selected !== index}
                  className="service-panel"
                >
                  <div className="service-panel-inner">
                    <div className="service-description">
                      <p>{service.description}</p>
                      <a href="#contact" className="text-link">
                        Discuss your project <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
