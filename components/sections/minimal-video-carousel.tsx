"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
} from "lucide-react";

interface GridVideoItem {
  id: string;
  title: string;
  location: string;
  tagLeft: string;
  tagRight: string;
  src: string;
  poster?: string;
}

const footageVideos: GridVideoItem[] = [
  // Col 1 (Tall feature)
  {
    id: "footage-showcase",
    title: "National Stadium Footprint",
    location: "Championship Venues · India",
    tagLeft: "FEATURED SHOWCASE",
    tagRight: "OLYMPIC GRADE",
    src: "https://res.cloudinary.com/ddrzgbhnl/video/upload/q_auto,w_1080/v1763355658/astw3_ubxyop_aogana.mp4",
    poster: "https://res.cloudinary.com/ddrzgbhnl/video/upload/so_1,q_auto,w_1080/v1763355658/astw3_ubxyop_aogana.jpg",
  },
  // Col 2 (2 stacked)
  {
    id: "footage-jalandhar",
    title: "Jalandhar Stadium Construction",
    location: "Jalandhar, Punjab",
    tagLeft: "LASER PAVING",
    tagRight: "ATHLETIC TRACK",
    src: "https://res.cloudinary.com/y5o5nwmr/video/upload/q_auto,w_960/JALANDHAR_AST.mp4",
    poster: "https://res.cloudinary.com/y5o5nwmr/video/upload/so_1,q_auto,w_800/JALANDHAR_AST.jpg",
  },
  {
    id: "footage-marking",
    title: "Rekortan Track Laying & Marking",
    location: "New Delhi Stadium",
    tagLeft: "WORLD ATHLETICS",
    tagRight: "SUB-MM CALIBRATION",
    src: "https://res.cloudinary.com/y5o5nwmr/video/upload/q_auto,w_960/IMG_2508.mp4",
    poster: "https://res.cloudinary.com/y5o5nwmr/video/upload/so_1,q_auto,w_800/IMG_2508.jpg",
  },
  // Col 3 (2 stacked)
  {
    id: "footage-gurdaspur",
    title: "Gurdaspur International Hockey",
    location: "Gurdaspur, Punjab",
    tagLeft: "POLIGRAS TURF",
    tagRight: "FIH GLOBAL ELITE",
    src: "https://res.cloudinary.com/y5o5nwmr/video/upload/q_auto,w_960/GURDAS_PUR_AST_1.mp4",
    poster: "https://res.cloudinary.com/y5o5nwmr/video/upload/so_1,q_auto,w_800/GURDAS_PUR_AST_1.jpg",
  },
  {
    id: "footage-cleaning",
    title: "Synthetic Track Deep Cleaning",
    location: "National Venues Nationwide",
    tagLeft: "SURFACE CARE",
    tagRight: "DEEP EXTRACTION",
    src: "/videos/maintenance-track-cleaning.mp4",
    poster: "/services/maintenance.jpg",
  },
  // Col 4 (3 stacked)
  {
    id: "footage-turf-care",
    title: "FIH Turf Hydro-Jet Care",
    location: "World Cup Stadiums",
    tagLeft: "HYDRO-JET",
    tagRight: "CAT 1 SPEC",
    src: "/videos/maintenance-turf-cleaning.mp4",
    poster: "/projects/kalinga.jpg",
  },
  {
    id: "footage-drone",
    title: "Aerial Sports Complex Survey",
    location: "Regional Sports Hub",
    tagLeft: "DRONE SURVEY",
    tagRight: "TURNKEY CIVIL",
    src: "/video/hero-desktop.mp4",
    poster: "/video/hero-poster.webp",
  },
  {
    id: "footage-polyurethane",
    title: "In-Situ Polyurethane Casting",
    location: "Elite Training Facilities",
    tagLeft: "GERMAN CHEMICALS",
    tagRight: "IN-SITU CASTING",
    src: "/video/hero-mobile.mp4",
    poster: "/video/hero-poster.webp",
  },
];

function GridVideoCard({
  video,
  containerHeightClass,
  isScrolling,
}: {
  video: GridVideoItem;
  containerHeightClass: string;
  isScrolling: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const timeTextRef = useRef<HTMLSpanElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.muted = isMuted;
      const p = el.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch(() => {
          el.muted = true;
          setIsMuted(true);
          void el.play().then(() => setIsPlaying(true)).catch(() => {});
        });
      }
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      void el.requestFullscreen();
    }
  };

  // Pause video if card scrolls out of view while playing
  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      if (!video.paused) {
        video.pause();
      }
    };
  }, []);

  // Whenever scrolling occurs, immediately pause video to release GPU decoders and keep scroll 100% fluid
  useEffect(() => {
    if (isScrolling) {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }
      const el = videoRef.current;
      if (el && !el.paused) {
        el.pause();
        setIsPlaying(false);
      }
    }
  }, [isScrolling]);

  // Hover intent: do NOT play instantly on first millisecond of mouseenter (which fires when scrolling past)
  // Only play if cursor remains on card for 150ms and user is NOT scrolling
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (isScrolling) return;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);

    hoverTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current || isScrolling) return;
      const el = videoRef.current;
      if (!el) return;
      if (el.paused) {
        el.muted = isMuted;
        void el.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 150);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    const el = videoRef.current;
    if (el && !el.paused) {
      el.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    const cur = el.currentTime;
    const dur = el.duration || 0;
    if (progressBarRef.current && dur > 0) {
      progressBarRef.current.style.width = `${(cur / dur) * 100}%`;
    }
    if (timeTextRef.current) {
      timeTextRef.current.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-full ${containerHeightClass} rounded-2xl overflow-hidden bg-[#0d1612] border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-red-500/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] group select-none cursor-pointer transform-gpu`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => togglePlay()}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted={isMuted}
        loop
        playsInline
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
      />

      {/* Top Gradient + Badges (Shown only on hover) */}
      <div className="absolute inset-x-0 top-0 p-3 md:p-3.5 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between gap-2 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-3.5 bg-[#d32628] rounded-full inline-block flex-shrink-0" />
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/95 truncate drop-shadow">
            {video.tagLeft}
          </span>
        </div>
        <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white/70 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 shrink-0">
          {video.tagRight}
        </span>
      </div>

      {/* Center Subtle Play Button (Visible on hover when paused, or hint on non-featured cards) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300">
          <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <Play size={18} className="translate-x-0.5 fill-white/80" />
          </div>
        </div>
      )}

      {/* Bottom Gradient + Details + Controls Bar (Shown on hover) */}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-3.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end pointer-events-none group-hover:pointer-events-auto z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Title & Location */}
        <div className="mb-2">
          <h4 className="text-white text-xs md:text-sm font-bold tracking-tight line-clamp-1 group-hover:text-red-400 transition-colors">
            {video.title}
          </h4>
          <p className="text-white/70 text-[10px] md:text-[11px] truncate mt-0.5">
            {video.location}
          </p>
        </div>

        {/* Video Control Bar */}
        <div
          className="flex items-center justify-between gap-2 text-white/85 text-[11px] pt-1.5 border-t border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="hover:text-white transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} className="fill-current" />}
            </button>
            <span ref={timeTextRef} className="font-mono text-[10px] text-white/75">
              0:00 / 0:00
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleMute}
              className="hover:text-white transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
            <button
              type="button"
              onClick={handleFullscreen}
              className="hover:text-white transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 size={12} />
            </button>
          </div>
        </div>

        {/* Minimal Progress Line at Bottom (Driven directly via DOM ref for 60fps) */}
        <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-[#d32628] w-0 transition-all duration-150"
          />
        </div>
      </div>
    </div>
  );
}

export function MinimalVideoCarousel() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollEndTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimer);
    };
  }, []);

  return (
    <section
      id="project-video-stream"
      className="minimal-video-carousel-section relative pt-6 md:pt-8 pb-16 md:pb-24 bg-[#0a140e] overflow-hidden text-white"
      data-nav-theme="dark"
      aria-labelledby="video-stream-title"
    >
      <div className="page-container relative z-10 max-w-[1720px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
          <div>
            <span className="section-eyebrow text-red-500 flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2">
              <span className="w-5 h-[2px] bg-red-600 inline-block" />
              CINEMATIC INSTALLATION REELS
            </span>
            <h2
              id="video-stream-title"
              className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-display"
            >
              FIELD FOOTAGE. <span className="text-neutral-400">IN MOTION.</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Raw, on-site captures of precision machinery, polyurethane paving, and finished championship surfaces. Hover or tap any reel to play.
          </p>
        </div>

        {/* Unified Responsive 8-Video Bento Grid - Zero DOM duplicates */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch ${
            isScrolling ? "pointer-events-none" : ""
          }`}
          style={isScrolling ? { pointerEvents: "none" } : undefined}
        >
          {/* Column 1: Tall Feature (1 video card) */}
          <div className="flex flex-col justify-between">
            <GridVideoCard
              video={footageVideos[0]}
              containerHeightClass="h-[260px] sm:h-[480px] lg:h-[540px]"
              isScrolling={isScrolling}
            />
          </div>

          {/* Column 2: 2 Stacked Cards */}
          <div className="flex flex-col gap-4 justify-between">
            <GridVideoCard
              video={footageVideos[1]}
              containerHeightClass="h-[220px] sm:h-[232px] lg:h-[262px]"
              isScrolling={isScrolling}
            />
            <GridVideoCard
              video={footageVideos[2]}
              containerHeightClass="h-[220px] sm:h-[232px] lg:h-[262px]"
              isScrolling={isScrolling}
            />
          </div>

          {/* Column 3: 2 Stacked Cards (Card 4 shown on tablet/desktop) */}
          <div className="flex flex-col gap-4 justify-between">
            <GridVideoCard
              video={footageVideos[3]}
              containerHeightClass="h-[220px] sm:h-[232px] lg:h-[262px]"
              isScrolling={isScrolling}
            />
            <div className="hidden sm:block">
              <GridVideoCard
                video={footageVideos[4]}
                containerHeightClass="h-[220px] sm:h-[232px] lg:h-[262px]"
                isScrolling={isScrolling}
              />
            </div>
          </div>

          {/* Column 4: 3 Stacked Cards (Desktop/Tablet showcase) */}
          <div className="hidden lg:flex flex-col gap-3 justify-between">
            <GridVideoCard
              video={footageVideos[5]}
              containerHeightClass="h-[150px] lg:h-[170px]"
              isScrolling={isScrolling}
            />
            <GridVideoCard
              video={footageVideos[6]}
              containerHeightClass="h-[150px] lg:h-[170px]"
              isScrolling={isScrolling}
            />
            <GridVideoCard
              video={footageVideos[7]}
              containerHeightClass="h-[150px] lg:h-[170px]"
              isScrolling={isScrolling}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
