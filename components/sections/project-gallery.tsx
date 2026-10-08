"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight, Camera, ChevronLeft, ChevronRight, Grid2X2, Rotate3D, Video, X } from "lucide-react";
import { useState } from "react";
import { gallery, galleryVideos } from "@/content/homepage";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VideoCarousel } from "@/components/ui/video-carousel";

const CircularGallery = dynamic(() => import("@/components/ui/circular-gallery"), {
  ssr: false,
  loading: () => (
    <div style={{ height: "600px", display: "grid", placeItems: "center", color: "#8a968f", fontSize: "14px" }}>
      Loading 3D gallery…
    </div>
  ),
});

const filters = ["All", "Prominent Projects", "Our Creations"] as const;

export function ProjectGallery() {
  const [mediaType, setMediaType] = useState<"photos" | "videos">("photos");
  const [filter, setFilter] = useState<string>("All");
  const [view, setView] = useState<"circular" | "grid">("circular");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = gallery.filter((project) => filter === "All" || project.category === filter);
  const project = selected === null ? null : gallery[selected];
  const selectProject = (slug: string) => setSelected(gallery.findIndex((item) => item.slug === slug));

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
          <>
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
                  aria-label="3D Circular Gallery view"
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

            {view === "circular" && (
              <div
                className="project-circular-wrap"
                style={{ height: "640px", width: "100%", position: "relative", margin: "25px 0 15px", overflow: "hidden" }}
              >
                <CircularGallery
                  key={filter}
                  items={visible.map((item) => ({ image: item.image, text: item.name }))}
                  bend={2}
                  textColor="#ffffff"
                  borderRadius={0.06}
                  scrollSpeed={2}
                  scrollEase={0.04}
                  onItemSelect={(index) => {
                    const target = visible[index];
                    if (target) selectProject(target.slug);
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#a9b8ad",
                    textTransform: "uppercase",
                    background: "rgba(10, 16, 13, 0.65)",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Drag to rotate &bull; Click to view details
                </div>
              </div>
            )}

            <div className={`project-grid ${view === "circular" ? "project-grid-mobile" : ""}`}>
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
          </>
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
