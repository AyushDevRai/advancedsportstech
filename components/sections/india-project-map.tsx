"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  X,
  Compass,
  Layers,
  Award,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { indiaStatePaths } from "@/content/india-map-paths";
import {
  mapProjects,
  projectCategories,
  showcaseCreations,
  type MapProject
} from "@/content/our-projects";

type CategoryFilter = "all" | "tracks" | "hockey" | "football";

export function IndiaProjectMap() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<MapProject | null>(null);
  const [hoveredProject, setHoveredProject] = useState<MapProject | null>(null);
  const [showStateNames, setShowStateNames] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("all");
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active category, search query, and state
  const filteredProjects = useMemo(() => {
    return mapProjects.filter((project) => {
      // Category match
      if (activeCategory === "tracks" && project.category !== "Athletic Track") return false;
      if (activeCategory === "hockey" && project.category !== "Hockey Turf") return false;
      if (activeCategory === "football" && project.category !== "Football Turf") return false;

      // State match
      if (selectedState !== "all" && project.state.toLowerCase() !== selectedState.toLowerCase()) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesVenue = project.venue.toLowerCase().includes(query);
        const matchesCity = project.city.toLowerCase().includes(query);
        const matchesState = project.state.toLowerCase().includes(query);
        const matchesSurface = project.surface.toLowerCase().includes(query);
        if (!matchesName && !matchesVenue && !matchesCity && !matchesState && !matchesSurface) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, selectedState]);

  // Unique states with project counts for filter dropdown
  const statesList = useMemo(() => {
    const counts: Record<string, number> = {};
    mapProjects.forEach((p) => {
      if (p.state) counts[p.state] = (counts[p.state] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  // Category pin colors
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Athletic Track":
        return "#ef4444"; // AST Red
      case "Hockey Turf":
        return "#10b981"; // Emerald
      case "Football Turf":
        return "#3b82f6"; // Blue
      default:
        return "#e2272e";
    }
  };

  const activeDisplayProject = selectedProject || hoveredProject;

  return (
    <div className="india-map-section-wrapper" ref={mapContainerRef}>
      {/* Map Control Bar & Filters */}
      <div className="india-map-controls-bar">
        {/* Category Filter Pills */}
        <div className="india-map-category-pills" role="tablist" aria-label="Filter by sport category">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`map-cat-pill ${isActive ? "is-active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat.id as CategoryFilter);
                  setSelectedProject(null);
                }}
              >
                <span
                  className="cat-dot"
                  style={{
                    backgroundColor: cat.color,
                    boxShadow: isActive ? `0 0 10px ${cat.color}` : "none"
                  }}
                />
                <span className="cat-label">{cat.label}</span>
                <span className="cat-count">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Search & State Filter Controls */}
        <div className="india-map-secondary-controls">
          <div className="map-search-input-wrap">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Search stadium, city, or surface…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="map-search-input"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="clear-search-btn"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          <div className="map-state-select-wrap">
            <Filter size={14} className="filter-icon" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="map-state-select"
              aria-label="Filter by state"
            >
              <option value="all">All States ({mapProjects.length})</option>
              {statesList.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} ({s.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Map Visual Canvas */}
      <div className="india-map-canvas-container">
        {/* Subtle grid background / radial glow */}
        <div className="map-ambient-glow" aria-hidden="true" />
        <div className="map-grid-overlay" aria-hidden="true" />

        {/* Live Filter Indicator */}
        <div className="map-status-badge">
          <span className="status-indicator-ping">
            <span className="ping-wave" />
            <span className="ping-center" />
          </span>
          <span>
            Showing <strong>{filteredProjects.length}</strong> installations nationwide
          </span>
        </div>

        {/* SVG Map of India with pins */}
        <div className="india-svg-viewport">
          <svg
            viewBox="0 0 1000 1000"
            className="india-svg-map"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <radialGradient id="oceanGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0b0f0d" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* India State Polygons */}
            <g id="india-states-layer" className="india-states-group">
              {indiaStatePaths.map((state) => {
                const isStateMatch =
                  selectedState !== "all" &&
                  state.name.toLowerCase() === selectedState.toLowerCase();
                return (
                  <path
                    key={state.id}
                    d={state.d}
                    id={state.id}
                    data-state={state.name}
                    className={`india-state-polygon ${isStateMatch ? "is-highlighted-state" : ""}`}
                    onClick={() => {
                      setSelectedState(selectedState === state.name ? "all" : state.name);
                    }}
                  >
                    <title>{state.name}</title>
                  </path>
                );
              })}
            </g>

            {/* Project Pins & Pulsing Radar Rings */}
            <g id="india-pins-layer" className="india-pins-group">
              {filteredProjects.map((proj, idx) => {
                const isSelected = selectedProject?.id === proj.id;
                const isHovered = hoveredProject?.id === proj.id;
                const color = getCategoryColor(proj.category);
                const delay = (idx % 12) * 0.25;

                return (
                  <g
                    key={proj.id}
                    transform={`translate(${proj.x}, ${proj.y})`}
                    className={`project-pin-group ${isSelected ? "is-selected-pin" : ""} ${
                      isHovered ? "is-hovered-pin" : ""
                    }`}
                    onClick={() => setSelectedProject(proj)}
                    onMouseEnter={() => setHoveredProject(proj)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Animated Ripple Radar Wave */}
                    <circle
                      r="12"
                      className="radar-ripple-circle"
                      stroke={color}
                      strokeWidth="1.2"
                      fill="none"
                      style={{
                        animationDelay: `${delay}s`,
                        opacity: isSelected || isHovered ? 1 : 0.65,
                        pointerEvents: "none"
                      }}
                    />

                    {/* Outer Glow Halo */}
                    <circle
                      r={isSelected || isHovered ? "9" : "6"}
                      fill={color}
                      opacity={isSelected || isHovered ? "0.45" : "0.22"}
                      className="pin-halo"
                      style={{ pointerEvents: "none" }}
                    />

                    {/* Core Solid Pin Dot */}
                    <circle
                      r={isSelected || isHovered ? "5" : "3.6"}
                      fill={color}
                      stroke="#ffffff"
                      strokeWidth={isSelected || isHovered ? "1.8" : "1"}
                      className="pin-core"
                    />
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Floating Interactive Project Tooltip Card */}
        {activeDisplayProject && (
          <div className="map-tooltip-overlay-card" role="dialog" aria-label="Project details">
            <div className="tooltip-header">
              <span
                className="tooltip-cat-badge"
                style={{
                  backgroundColor: `${getCategoryColor(activeDisplayProject.category)}20`,
                  color: getCategoryColor(activeDisplayProject.category),
                  borderColor: `${getCategoryColor(activeDisplayProject.category)}50`
                }}
              >
                {activeDisplayProject.category}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  setHoveredProject(null);
                }}
                className="tooltip-close-btn"
                aria-label="Close project preview"
              >
                <X size={14} />
              </button>
            </div>

            <div className="tooltip-body">
              <h4 className="tooltip-venue-name">{activeDisplayProject.venue}</h4>
              <p className="tooltip-location">
                <MapPin size={13} className="text-red-500" />
                <span>
                  {activeDisplayProject.city}, {activeDisplayProject.state}
                </span>
              </p>

              <div className="tooltip-meta-grid">
                <div className="tooltip-meta-item">
                  <span className="meta-label">Surface System</span>
                  <span className="meta-val">{activeDisplayProject.surface}</span>
                </div>
                <div className="tooltip-meta-item">
                  <span className="meta-label">Certification</span>
                  <span className="meta-val">{activeDisplayProject.certification}</span>
                </div>
                <div className="tooltip-meta-item full-width">
                  <span className="meta-label">Client / Authority</span>
                  <span className="meta-val">{activeDisplayProject.client}</span>
                </div>
              </div>
            </div>

            <div className="tooltip-footer">
              <a
                href="#contact"
                className="tooltip-enquire-btn"
                onClick={() => setSelectedProject(null)}
              >
                <span>Enquire Similar Facility</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        )}

        {/* Map Legend Overlay */}
        <div className="map-legend-overlay">
          <span className="legend-title">PIN LEGEND</span>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: "#ef4444" }} />
              <span>Athletic Tracks (50+)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: "#10b981" }} />
              <span>Hockey Turf (56+)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: "#3b82f6" }} />
              <span>Football Turf (4+)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
