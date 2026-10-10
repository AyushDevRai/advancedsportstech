"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  MapPin,
  MoveHorizontal,
  Rotate3D,
  Video,
  X,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { gallery, galleryVideos } from "@/content/homepage";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VideoCarousel } from "@/components/ui/video-carousel";

const filters = ["All", "Prominent Projects", "Our Creations"] as const;

type GalleryItemType = (typeof gallery)[number];

interface DraggableMarqueeRowProps {
  items: GalleryItemType[];
  direction: "left" | "right";
  speed?: number;
  onSelectProject: (slug: string) => void;
  rowId: string;
}

function DraggableMarqueeRow({
  items,
  direction,
  speed = 0.65,
  onSelectProject,
  rowId,
}: DraggableMarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const lastXRef = useRef(0);
  const hasMovedRef = useRef(false);
  const velocityRef = useRef(0);
  const speedMultRef = useRef(1.0);
  const setWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Repeat items 4 times for seamless infinite horizontal loop
  const repeatCount = 4;
  const repeatedItems = [...items, ...items, ...items, ...items];

  // Measure single set width dynamically
  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        const fullWidth = trackRef.current.scrollWidth;
        const setWidth = fullWidth / repeatCount;
        setWidthRef.current = setWidth;
        if (posRef.current === 0 && direction === "right") {
          posRef.current = setWidth / 2;
        }
      }
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items.length, direction]);

  // RequestAnimationFrame animation loop
  useEffect(() => {
    let prevTime = performance.now();

    function step(currentTime: number) {
      const dt = Math.min((currentTime - prevTime) / 1000, 0.1);
      prevTime = currentTime;

      const setWidth = setWidthRef.current;

      if (!isDraggingRef.current && setWidth > 0) {
        // Auto scroll step
        const dir = direction === "left" ? 1 : -1;
        const move = dir * (speed * 60) * speedMultRef.current * dt;
        posRef.current += move;

        // Apply decaying inertia
        if (Math.abs(velocityRef.current) > 0.05) {
          posRef.current -= velocityRef.current;
          velocityRef.current *= 0.94;
        }

        // Seamless wrap
        if (posRef.current >= setWidth) {
          posRef.current -= setWidth;
        } else if (posRef.current < 0) {
          posRef.current += setWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [direction, speed]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    hasMovedRef.current = false;
    velocityRef.current = 0;

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastXRef.current;
    if (Math.abs(e.clientX - dragStartXRef.current) > 4) {
      hasMovedRef.current = true;
    }

    posRef.current -= deltaX;
    const setWidth = setWidthRef.current;
    if (setWidth > 0) {
      if (posRef.current >= setWidth) posRef.current -= setWidth;
      else if (posRef.current < 0) posRef.current += setWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
    }

    velocityRef.current = deltaX;
    lastXRef.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handleCardClick = (slug: string) => {
    if (hasMovedRef.current) return; // Prevent click when dragging
    onSelectProject(slug);
  };

  return (
    <div
      ref={containerRef}
      className="project-marquee-row"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => {
        speedMultRef.current = 0.22; // Smooth deceleration on hover
      }}
      onMouseLeave={() => {
        speedMultRef.current = 1.0;
      }}
      aria-label={`Gallery showcase row ${rowId}`}
    >
      <div ref={trackRef} className="project-marquee-track">
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.slug}-${rowId}-${idx}`}
            className="project-animated-card"
            onClick={() => handleCardClick(item.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectProject(item.slug);
              }
            }}
          >
            <div className="project-animated-card-img">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 280px, 360px"
                style={{ objectFit: "cover" }}
                draggable={false}
              />
            </div>
            {/* Details only shown on hover */}
            <div className="project-animated-card-hover-details" aria-hidden="true">
              <div className="project-animated-card-overlay" />
              <div className="project-animated-card-top">
                <span className="project-animated-card-zoom">
                  <ArrowUpRight size={13} />
                </span>
              </div>
              <div className="project-animated-card-bottom">
                <h3 className="project-animated-card-title">{item.name}</h3>
                <span className="project-animated-card-loc">
                  <MapPin size={11} className="text-red-500" />
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectGallery() {
  const [mediaType, setMediaType] = useState<"photos" | "videos">("photos");
  const [filter, setFilter] = useState<string>("All");
  const [view, setView] = useState<"circular" | "grid">("circular");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = gallery.filter((project) => filter === "All" || project.category === filter);
  const project = selected === null ? null : gallery[selected];
  const selectProject = (slug: string) => setSelected(gallery.findIndex((item) => item.slug === slug));

  // Split visible items into two distinct rows with different photos
  const row1 = visible.filter((_, idx) => idx % 2 === 0);
  const row2 = visible.filter((_, idx) => idx % 2 === 1);

  // If a filter has very few items, ensure both rows have items
  const finalRow1 = row1.length > 0 ? row1 : visible;
  const finalRow2 = row2.length > 0 ? row2 : [...visible].reverse();

  return (
    <section id="projects" className="section-pad project-section" data-nav-theme="dark" aria-labelledby="projects-title">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <h2 id="projects-title">
              OUR <br />
              <span className="quiet-text">GALLERY.</span>
            </h2>
          </div>
          <p>
            Prominent projects. <br />
            Our creations.
          </p>
        </div>

        {/* Top Media Option: Photos (default) vs Videos */}
        <div className="gallery-media-toggle-wrap">
          <div className="gallery-media-toggle" role="tablist" aria-label="Gallery media type">
            <button
              type="button"
              role="tab"
              aria-selected={mediaType === "photos"}
              className={`media-tab-btn ${mediaType === "photos" ? "is-active" : ""}`}
              onClick={() => setMediaType("photos")}
            >
              <Camera size={16} />
              <span>Photos</span>
              <span className="media-tab-count">{gallery.length}</span>
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
              <span className="media-tab-count">{galleryVideos.length}</span>
            </button>
          </div>
        </div>

        {/* View Mode: Photos */}
        {mediaType === "photos" && (
          <div className="gallery-desktop-showcase">
            <div className="project-toolbar">
              <div className="project-filters" role="group" aria-label="Filter projects">
                {filters.map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    type="button"
                    aria-pressed={filter === item}
                    className={filter === item ? "is-selected" : ""}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="project-view-controls" role="group" aria-label="Project display">
                <button
                  type="button"
                  aria-label="Animated Cards view"
                  aria-pressed={view === "circular"}
                  onClick={() => setView("circular")}
                >
                  <Rotate3D size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Grid view"
                  aria-pressed={view === "grid"}
                  onClick={() => setView("grid")}
                >
                  <Grid2X2 size={18} />
                </button>
              </div>
            </div>

            {/* 1. Animated Two-Row Draggable Showcase (Default) */}
            {view === "circular" && (
              <div className="project-animated-gallery">
                <div className="project-animated-rows">
                  <DraggableMarqueeRow
                    items={finalRow1}
                    direction="left"
                    speed={0.65}
                    onSelectProject={selectProject}
                    rowId="1"
                  />
                  <DraggableMarqueeRow
                    items={finalRow2}
                    direction="right"
                    speed={0.65}
                    onSelectProject={selectProject}
                    rowId="2"
                  />
                </div>
                <div className="project-animated-hint" aria-hidden="true">
                  <span className="hint-pill">
                    <MoveHorizontal size={13} />
                    <span>DRAG HORIZONTALLY TO SCRUB · AUTO-SLIDING</span>
                  </span>
                  <span className="hint-dot">•</span>
                  <span>CLICK ANY CARD TO VIEW DETAILS</span>
                </div>
              </div>
            )}

            {/* 2. Full Grid View (When Grid button clicked) */}
            {view === "grid" && (
              <div className="project-grid">
                {visible.map((item, index) => (
                  <button
                    type="button"
                    className="project-card"
                    key={item.slug}
                    onClick={() => selectProject(item.slug)}
                  >
                    <div className="project-card-image">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      />
                      <span className="project-card-zoom">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                    <div className="project-card-meta">
                      <span className="project-card-number">0{index + 1}</span>
                      <h3>{item.name}</h3>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* View Mode: Videos */}
        {mediaType === "videos" && (
          <VideoCarousel videos={galleryVideos} />
        )}

        <div className="project-footer">
          <span>AST · SPORTS INFRASTRUCTURE ACROSS INDIA</span>
          <a href="#contact" className="text-link">
            Your project could be next <ArrowUpRight size={16} />
          </a>
        </div>

        <Dialog open={project !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
          <DialogContent className="project-dialog" showCloseButton={false}>
            {project && (
              <>
                <DialogHeader>
                  <DialogTitle>{project.name}</DialogTitle>
                  <DialogDescription>{project.category} · {project.location}</DialogDescription>
                </DialogHeader>
                <button
                  type="button"
                  className="dialog-close"
                  onClick={() => setSelected(null)}
                  aria-label="Close project"
                >
                  <X size={21} />
                </button>
                <div className="project-dialog-image">
                  <Image src={project.image} alt={project.name} fill sizes="90vw" />
                </div>
                {project.description && (
                  <p style={{ fontSize: "13px", color: "#b5c5bb", marginTop: "12px", lineHeight: "1.6" }}>
                    {project.description}
                  </p>
                )}
                <div className="project-dialog-footer">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() =>
                      setSelected(((selected ?? 0) - 1 + gallery.length) % gallery.length)
                    }
                  >
                    <ChevronLeft size={21} />
                  </button>
                  <span>
                    {(selected ?? 0) + 1} / {gallery.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => setSelected(((selected ?? 0) + 1) % gallery.length)}
                  >
                    <ChevronRight size={21} />
                  </button>
                  <a href="#contact" onClick={() => setSelected(null)} className="text-link">
                    Enquire <ArrowUpRight size={16} />
                  </a>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
