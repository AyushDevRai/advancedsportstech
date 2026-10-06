"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { homepageServices } from "@/content/homepage";
import { useEffect, useRef, useState } from "react";

export function Services() {
  const [selected, setSelected] = useState(0);
  const selectedRef = useRef(0);
  const lastSwitch = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const manualSelection = useRef({ y: 0, until: 0 });
  const hovered = useRef<number | null>(null);
  const scrollInput = useRef(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    let switchTimer = 0;
    let previousScrollY = window.scrollY;
    let direction = 0;
    let wasInView = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let thresholds: number[] = [];
    const select = (index: number) => {
      if (index === selectedRef.current) return;
      selectedRef.current = index;
      lastSwitch.current = performance.now();
      setSelected(index);
    };
    const fromHash = () => {
      const index = homepageServices.findIndex(service => `#service-${service.slug}` === window.location.hash);
      if (index < 0) return;
      manualSelection.current = { y: window.scrollY, until: performance.now() + 2200 };
      select(index);
    };
    const update = () => {
      frame = 0;
      if (hovered.current !== null) return;
      const manual = manualSelection.current;
      if (manual.until && (performance.now() < manual.until || Math.abs(window.scrollY - manual.y) < 80)) return;
      manualSelection.current.until = 0;
      const bounds = list.getBoundingClientRect();
      if (bounds.top > window.innerHeight || bounds.bottom < 0 || !thresholds.length) {
        wasInView = false;
        return;
      }
      const readingLine = Math.max(160, Math.min(window.innerHeight * 0.38, 320));
      const progress = readingLine - bounds.top;
      let next = 0;
      thresholds.forEach((threshold, index) => { if (progress >= threshold) next = index; });
      if (!wasInView) {
        wasInView = true;
        select(next);
        return;
      }
      // Scrolling down after hovering a later row should not rewind the accordion.
      if (direction > 0 && next < selectedRef.current) return;
      if (direction < 0 && next > selectedRef.current) return;
      // A dead zone prevents flickering around a boundary.
      if (next > selectedRef.current && progress < thresholds[next] + 12) return;
      if (next < selectedRef.current && progress > thresholds[selectedRef.current] - 12) return;
      if (next === selectedRef.current) return;
      const remaining = (reducedMotion.matches ? 0 : 700) - (performance.now() - lastSwitch.current);
      if (remaining > 0) {
        if (!switchTimer) switchTimer = window.setTimeout(() => { switchTimer = 0; update(); }, remaining);
        return;
      }
      const step = selectedRef.current + Math.sign(next - selectedRef.current);
      select(step);
      // Let each panel finish opening before catching up with a faster scroll.
      if (step !== next && !switchTimer) {
        switchTimer = window.setTimeout(() => { switchTimer = 0; update(); }, reducedMotion.matches ? 0 : 700);
      }
    };
    const onScrollInput = (event: Event) => {
      if (event instanceof KeyboardEvent && !["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) return;
      scrollInput.current = event.timeStamp;
      hovered.current = null;
      // A deliberate scroll takes control back from a clicked or hovered panel.
      manualSelection.current.until = 0;
    };
    const onScroll = () => {
      const delta = window.scrollY - previousScrollY;
      if (Math.abs(delta) > 0.5) direction = Math.sign(delta);
      previousScrollY = window.scrollY;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      const headings = Array.from(list.querySelectorAll<HTMLElement>(".service-row h3"));
      const descriptions = Array.from(list.querySelectorAll<HTMLElement>(".service-description"));
      const panelHeight = Math.max(...descriptions.map(panel => panel.getBoundingClientRect().height));
      let headingOffset = 0;
      // Stable positions keep accordion layout changes from triggering another selection.
      // Reserve the tallest panel so the following section does not jump.
      thresholds = headings.map((heading, index) => {
        const threshold = headingOffset + panelHeight * index / (headings.length - 1);
        headingOffset += heading.getBoundingClientRect().height + 1;
        return threshold;
      });
      list.style.minHeight = `${Math.ceil(headingOffset + panelHeight + 1)}px`;
      onScroll();
    };
    fromHash();
    measure();
    const observer = new ResizeObserver(measure);
    list.querySelectorAll(".service-row h3, .service-description").forEach(element => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onScrollInput, { passive: true });
    window.addEventListener("touchstart", onScrollInput, { passive: true });
    window.addEventListener("keydown", onScrollInput);
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("ast:anchor-settled", fromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(switchTimer);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onScrollInput);
      window.removeEventListener("touchstart", onScrollInput);
      window.removeEventListener("keydown", onScrollInput);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("ast:anchor-settled", fromHash);
    };
  }, []);

  const selectManually = (index: number, timestamp: number) => {
    manualSelection.current = { y: window.scrollY, until: timestamp + 500 };
    selectedRef.current = index;
    lastSwitch.current = timestamp;
    setSelected(index);
  };
  return (
    <section id="services" className="section-pad services-section" data-nav-theme="light" aria-labelledby="services-title">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="red-rule" />WHAT WE DO</p>
            <h2 id="services-title">WHAT<br /><span className="quiet-text">WE DO.</span></h2>
          </div>
          <p>We have the capabilities to support<br className="desktop-break" /> a project end-to-end.</p>
        </div>
        <div className="services-layout">
          <div className="services-picture">
            <div className="services-picture-media">
              <Image src={homepageServices[selected].image} alt={`AST ${homepageServices[selected].name.toLowerCase()} work`} fill sizes="(max-width: 900px) 100vw, 43vw" />
            </div>
            <div className="services-picture-caption">
              <span>0{selected + 1} / 08</span>
              <p>{homepageServices[selected].tagline}</p>
              <a href="#contact" aria-label={`Enquire about ${homepageServices[selected].name}`}><ArrowUpRight size={23} /></a>
            </div>
          </div>
          <div className="service-list" ref={listRef}>
            {homepageServices.map((service, index) => (
              <article
                key={service.slug}
                id={`service-${service.slug}`}
                className={`service-row ${selected === index ? "is-active" : ""}`}
                onPointerMove={event => {
                  // Layout changes under a stationary cursor must not trigger another panel.
                  if (event.pointerType !== "mouse" || !(event.movementX || event.movementY) || event.timeStamp - scrollInput.current < 250) return;
                  hovered.current = index;
                  if (selectedRef.current !== index) selectManually(index, event.timeStamp);
                }}
                onPointerLeave={() => { if (hovered.current === index) hovered.current = null; }}
              >
                <h3>
                  <button type="button" onClick={event => selectManually(index, event.timeStamp)} aria-expanded={index === selected} aria-controls={`service-panel-${service.slug}`}>
                    <span className="service-number">0{index + 1}</span><span>{service.name}</span><ChevronDown size={20} />
                  </button>
                </h3>
                <div id={`service-panel-${service.slug}`} aria-hidden={selected !== index} inert={selected !== index} className="service-panel">
                  <div className="service-panel-inner">
                    <div className="service-description">
                      <p>{service.description}</p>
                      <a href="#contact" className="text-link">Discuss your project <ArrowUpRight size={15} /></a>
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
