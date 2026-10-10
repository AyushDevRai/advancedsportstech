"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { company } from "@/content/ast";
import { TypewriterAurora } from "@/components/ui/typewriter-aurora";

const HERO_VIDEO_SRC = "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763355658/astw3_ubxyop_aogana.mp4";

const rotatingHeroHeadlines = [
  "ELITE SURFACES.",
  "PERFORMING TURFS.",
  "OLYMPIC TRACKS.",
  "CERTIFIED COURTS.",
  "WORLD-CLASS ARENAS.",
];

export function VideoHero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const [, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    // Trigger instant playback immediately on mount
    video.muted = true;
    const p = video.play();
    if (p !== undefined) {
      p.catch(() => {});
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!manuallyPaused.current && !document.hidden) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(hero);

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (!manuallyPaused.current) {
        void video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="home-hero" data-nav-theme="dark" aria-labelledby="hero-title">
      <link rel="preload" as="video" href={HERO_VIDEO_SRC} type="video/mp4" />
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        width={1280}
        height={720}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.webp"
        aria-hidden="true"
        tabIndex={-1}
        className="hero-media hero-video is-ready"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="hero-shade" />
      <div className="hero-lines" aria-hidden="true"><span /><span /><span /></div>
      <div className="page-container hero-content">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" />{company.eyebrow}</p>
        <h1 id="hero-title" className="hero-main-heading">
          <span className="hero-heading-top hero-bright-white">
            Engineering
          </span>
          <span className="hero-heading-bottom">
            <TypewriterAurora
              words={rotatingHeroHeadlines}
              className="hero-aurora hero-aurora-excellence"
              colors={["#d32628", "#e63538", "#d32628", "#bd1d20", "#d32628"]}
            />
          </span>
        </h1>
        <p className="hero-supporting-copy">Synthetic sports surfaces, built across India.<br className="hero-copy-break" /><span>Exclusive partner of Polytan/SportGroup Germany, delivering world-class sports surfaces with proven quality and innovation.</span></p>
        <div className="hero-credentials-bar" aria-label="AST Credentials & Experience">
          <div className="hero-cred-item">
            <span className="hero-cred-bar" aria-hidden="true" />
            <span className="hero-cred-text">ITF Certified</span>
          </div>
          <div className="hero-cred-item">
            <span className="hero-cred-bar" aria-hidden="true" />
            <span className="hero-cred-text">15+ Years Experience</span>
          </div>
          <div className="hero-cred-item">
            <span className="hero-cred-bar" aria-hidden="true" />
            <span className="hero-cred-text">12000+ Courts Built</span>
          </div>
          <div className="hero-cred-item">
            <span className="hero-cred-bar" aria-hidden="true" />
            <span className="hero-cred-text">250+ Dealers Pan India</span>
          </div>
        </div>
        <div className="hero-bottom-content">
          <div className="hero-actions"><a href="#contact" className="ast-button ast-button-red">Build your vision <ArrowUpRight size={18} /></a><a href="#projects" className="ast-button ast-button-glass">Explore our projects <ArrowUpRight size={18} /></a></div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="page-container">
          <div className="hero-foot-inner">
            <span>EXCLUSIVE PARTNER OF POLYTAN / SPORTGROUP GERMANY</span>
            <span>SYNTHETIC TURF &bull; ATHLETIC TRACKS &bull; ACRYLIC COURTS &bull; SPORTS LIGHTING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
