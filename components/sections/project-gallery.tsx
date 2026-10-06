"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight, ChevronLeft, ChevronRight, Grid2X2, Rotate3D, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { gallery } from "@/content/homepage";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WorksWheel = dynamic(() => import("@/components/ui/works-wheel"), { ssr: false, loading: () => <div className="wheel-loading">Loading project wheel…</div> });
const filters = ["All", "Prominent Projects", "Our Creations"] as const;
function subscribeWheelPreference(callback: () => void) {
  const query = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const wheelEnabled = () => window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)").matches;

export function ProjectGallery() {
  const [filter, setFilter] = useState<string>("All");
  const [view, setView] = useState<"wheel" | "grid">("wheel");
  const [selected, setSelected] = useState<number | null>(null);
  const enhanced = useSyncExternalStore(subscribeWheelPreference, wheelEnabled, () => false);
  const visible = gallery.filter((project) => filter === "All" || project.category === filter);
  const project = selected === null ? null : gallery[selected];
  const selectProject = (slug: string) => setSelected(gallery.findIndex((item) => item.slug === slug));
  return <section id="projects" className="section-pad project-section" data-nav-theme="dark" aria-labelledby="projects-title"><div className="page-container"><div className="section-heading"><div><p className="eyebrow"><span className="red-rule" />GALLERY</p><h2 id="projects-title">OUR<br /><span className="quiet-text">GALLERY.</span></h2></div><p>Prominent projects.<br />Our creations.</p></div>
    <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} type="button" aria-pressed={filter === item} className={filter === item ? "is-selected" : ""}>{item}</button>)}</div><div className="project-view-controls" role="group" aria-label="Project display"><button type="button" aria-label="Wheel view" aria-pressed={view === "wheel"} onClick={() => setView("wheel")}><Rotate3D size={18} /></button><button type="button" aria-label="Grid view" aria-pressed={view === "grid"} onClick={() => setView("grid")}><Grid2X2 size={18} /></button></div></div>
    {view === "wheel" && enhanced && <div className="project-wheel-desktop" data-lenis-prevent><WorksWheel key={filter} items={visible.map((item) => ({ title: item.name, image: item.image }))} label="OUR CREATIONS" action="View project" className="ast-works-wheel" onItemSelect={(index) => selectProject(visible[index].slug)} /><div className="wheel-instruction"><span></span><span></span></div></div>}
    <div className={`project-grid ${view === "wheel" && enhanced ? "project-grid-mobile" : ""}`}>{visible.map((item, index) => <button type="button" className="project-card" key={item.slug} onClick={() => selectProject(item.slug)}><div className="project-card-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span className="project-card-zoom"><ArrowUpRight size={21} /></span></div><div className="project-card-meta"><span className="project-card-number">0{index + 1}</span><h3>{item.name}</h3></div></button>)}</div>
    <div className="project-footer"><span>AST · SPORTS INFRASTRUCTURE ACROSS INDIA</span><a href="#contact" className="text-link">Your project could be next <ArrowUpRight size={16} /></a></div>
    <Dialog open={project !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="project-dialog" showCloseButton={false}>{project && <><DialogHeader><DialogTitle>{project.name}</DialogTitle><DialogDescription>{project.category} · Advanced Sports Technologies</DialogDescription></DialogHeader><button type="button" className="dialog-close" onClick={() => setSelected(null)} aria-label="Close project"><X size={21} /></button><div className="project-dialog-image"><Image src={project.image} alt={project.name} fill sizes="90vw" /></div><div className="project-dialog-footer"><button type="button" aria-label="Previous project" onClick={() => setSelected(((selected ?? 0) - 1 + gallery.length) % gallery.length)}><ChevronLeft size={21} /></button><span>{(selected ?? 0) + 1} / {gallery.length}</span><button type="button" aria-label="Next project" onClick={() => setSelected(((selected ?? 0) + 1) % gallery.length)}><ChevronRight size={21} /></button><a href="#contact" onClick={() => setSelected(null)} className="text-link">Enquire <ArrowUpRight size={16} /></a></div></>}</DialogContent></Dialog>
  </div></section>;
}
