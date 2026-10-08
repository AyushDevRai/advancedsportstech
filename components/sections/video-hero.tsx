"use client";

import Image from "next/image";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { company } from "@/content/ast";
import { AuroraText } from "@/components/ui/aurora-text";

type Connection = { saveData?: boolean; effectiveType?: string; addEventListener?: (name: string, listener: () => void) => void; removeEventListener?: (name: string, listener: () => void) => void };

export function VideoHero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const [source, setSource] = useState<{ src: string; type: string } | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    let visible = true;
    let cancelled = false;
    const blocked = () => reduced.matches || connection?.saveData || /^(slow-2g|2g|3g)$/.test(connection?.effectiveType ?? "");
    const updatePlayback = () => {
      if (blocked() || manuallyPaused.current || !visible || document.hidden) video.pause();
      else if (video.getAttribute("src")) void video.play().catch(() => { /* Poster remains if autoplay is unavailable. */ });
    };
    const chooseSource = () => {
      if (blocked()) {
        video.pause();
        setSource(null);
        setReady(false);
        return;
      }
      setSource({
        src: "https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763355658/astw3_ubxyop_aogana.mp4",
        type: "video/mp4"
      });
    };
    // Let the preloaded poster and first paint finish before video competes for bandwidth.
    const timer = window.setTimeout(() => { if (!cancelled) chooseSource(); }, 600);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updatePlayback(); }, { threshold: 0.05 });
    observer.observe(hero);
    document.addEventListener("visibilitychange", updatePlayback);
    reduced.addEventListener("change", chooseSource);
    connection?.addEventListener?.("change", chooseSource);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      video.pause();
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      reduced.removeEventListener("change", chooseSource);
      connection?.removeEventListener?.("change", chooseSource);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!source) { video.removeAttribute("src"); video.load(); return; }
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect && rect.bottom > 0 && rect.top < window.innerHeight && !document.hidden && !manuallyPaused.current) void video.play().catch(() => setPlaying(false));
  }, [source]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    manuallyPaused.current = !video.paused;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  }

  return (
    <section ref={heroRef} id="home" className="home-hero" data-nav-theme="dark" aria-labelledby="hero-title">
      <Image src="/video/hero-poster.webp" alt="Aerial view of sports courts from AST’s own project footage" fill preload sizes="100vw" className="hero-media" />
      <video ref={videoRef} src={source?.src} width={1280} height={720} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}
        className={`hero-media hero-video ${ready ? "is-ready" : ""}`}
        onCanPlay={() => { setReady(true); if (!manuallyPaused.current && !document.hidden && (heroRef.current?.getBoundingClientRect().bottom ?? 0) > 0) void videoRef.current?.play().catch(() => setPlaying(false)); }}
        onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setReady(false); setPlaying(false); }} />
      <div className="hero-shade" />
      <div className="hero-lines" aria-hidden="true"><span /><span /><span /></div>
      <div className="page-container hero-content">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" />{company.eyebrow}</p>
        <h1 id="hero-title" className="hero-main-heading">
          <span className="hero-heading-top">
            <AuroraText className="hero-aurora" colors={["#FFFFFF", "#F0F5F1", "#FFFFFF", "#FFEFEA"]} speed={1.2}>
              ENGINEERING
            </AuroraText>
          </span>
          <br />
          <span className="hero-heading-bottom">
            <AuroraText className="hero-aurora hero-aurora-excellence" colors={["#FF6B68", "#E11D48", "#FFA392", "#FF2E44"]} speed={1.2}>
              ELITE SURFACES.
            </AuroraText>
          </span>
        </h1>
        <p className="hero-supporting-copy">Synthetic sports surfaces, built across India.<br /><span>Exclusive partner of Polytan/SportGroup Germany, delivering world-class sports surfaces with proven quality and innovation.</span></p>
        <div className="hero-bottom-content">
          <div className="hero-actions"><a href="#contact" className="ast-button ast-button-red">Build your vision <ArrowUpRight size={18} /></a><a href="#projects" className="ast-button ast-button-glass">Explore our projects <ArrowUpRight size={18} /></a></div>
        </div>
      </div>
      <div className="page-container hero-foot">
        {source && <button type="button" onClick={toggleVideo} className="video-control" aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? <Pause size={16} /> : <Play size={16} />}<span>{playing ? "Pause film" : "Play film"}</span></button>}
      </div>
    </section>
  );
}
