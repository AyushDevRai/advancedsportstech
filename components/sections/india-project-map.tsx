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
  // Always default to the first verified project so a location card is perpetually rendered
  const [selectedProject, setSelectedProject] = useState<MapProject>(mapProjects[0]);
  const [hoveredProject, setHoveredProject] = useState<MapProject | null>(null);
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

  // Keep a selected project active whenever filters change
  useEffect(() => {
    if (filteredProjects.length > 0) {
      if (!filteredProjects.some((p) => p.id === selectedProject?.id)) {
        setSelectedProject(filteredProjects[0]);
      }
    } else {
      setSelectedProject(mapProjects[0]);
    }
  }, [filteredProjects, selectedProject]);

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

  // The active display project is guaranteed to always exist
  const activeDisplayProject = hoveredProject || selectedProject || filteredProjects[0] || mapProjects[0];

  // All facilities in the current project's state for large proximity browsing
  const stateProjects = useMemo(() => {
    if (!activeDisplayProject?.state) return [];
    return mapProjects.filter(
      (p) => p.state.toLowerCase() === activeDisplayProject.state.toLowerCase()
    );
  }, [activeDisplayProject]);

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
              onChange={(e) => {
                const newState = e.target.value;
                setSelectedState(newState);
                if (newState !== "all") {
                  const stateMatch = mapProjects.find(
                    (p) => p.state.toLowerCase() === newState.toLowerCase()
                  );
                  if (stateMatch) setSelectedProject(stateMatch);
                }
              }}
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
            Showing <strong>{filteredProjects.length}</strong> verified installations nationwide
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
                  (selectedState !== "all" &&
                    state.name.toLowerCase() === selectedState.toLowerCase()) ||
                  activeDisplayProject.state.toLowerCase() === state.name.toLowerCase();

                return (
                  <path
                    key={state.id}
                    d={state.d}
                    id={state.id}
                    data-state={state.name}
                    className={`india-state-polygon ${isStateMatch ? "is-highlighted-state" : ""}`}
                    onClick={() => {
                      const next = selectedState === state.name ? "all" : state.name;
                      setSelectedState(next);
                      const matchingProj = mapProjects.find(
                        (p) => p.state.toLowerCase() === state.name.toLowerCase()
                      );
                      if (matchingProj) {
                        setSelectedProject(matchingProj);
                      }
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
                const isSelected = activeDisplayProject?.id === proj.id;
                const isHovered = hoveredProject?.id === proj.id;
                const isSameState =
                  activeDisplayProject?.state.toLowerCase() === proj.state.toLowerCase();
                const color = getCategoryColor(proj.category);
                const delay = (idx % 12) * 0.25;

                return (
                  <g
                    key={proj.id}
                    transform={`translate(${proj.x}, ${proj.y})`}
                    className={`project-pin-group ${isSelected ? "is-selected-pin" : ""} ${
                      isHovered ? "is-hovered-pin" : ""
                    } ${isSameState ? "is-same-state-pin" : ""}`}
                    onClick={() => {
                      setSelectedProject(proj);
                      setSelectedState(proj.state);
                    }}
                    onMouseEnter={() => setHoveredProject(proj)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Generous touch/proximity target for effortless selection */}
                    <circle r="30" fill="transparent" style={{ pointerEvents: "all" }} />

                    {/* Animated Ripple Radar Wave */}
                    <circle
                      r={isSelected || isHovered ? "26" : "20"}
                      className="radar-ripple-circle"
                      stroke={color}
                      strokeWidth={isSelected || isHovered ? "2" : "1.4"}
                      fill="none"
                      style={{
                        animationDelay: `${delay}s`,
                        opacity: isSelected || isHovered ? 1 : isSameState ? 0.75 : 0.55,
                        pointerEvents: "none"
                      }}
                    />

                    {/* Outer Glow Halo (Noticeably Larger) */}
                    <circle
                      r={isSelected || isHovered ? "17" : isSameState ? "14" : "11"}
                      fill={color}
                      opacity={isSelected || isHovered ? "0.55" : isSameState ? "0.38" : "0.22"}
                      className="pin-halo"
                      style={{ pointerEvents: "none" }}
                    />

                    {/* Core Solid Pin Dot (Noticeably Larger) */}
                    <circle
                      r={isSelected || isHovered ? "8.5" : isSameState ? "7" : "6"}
                      fill={color}
                      stroke="#ffffff"
                      strokeWidth={isSelected || isHovered ? "2.4" : "1.8"}
                      className="pin-core"
                      style={{ pointerEvents: "none" }}
                    />
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Floating Interactive Project Card — Always selected & visible */}
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
              <span className="tooltip-state-badge">
                {activeDisplayProject.state}
              </span>
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

              {/* State Proximity: All facilities in this state visible and selectable */}
              {stateProjects.length > 1 && (
                <div className="map-state-facilities-tray">
                  <div className="facilities-tray-header">
                    <span>
                      All facilities in {activeDisplayProject.state} ({stateProjects.length})
                    </span>
                  </div>
                  <div className="facilities-chips-list">
                    {stateProjects.map((p) => {
                      const isCurr = p.id === activeDisplayProject.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          className={`facility-chip ${isCurr ? "is-active" : ""}`}
                          onClick={() => setSelectedProject(p)}
                          title={`${p.venue} (${p.category})`}
                        >
                          <span
                            className="chip-dot"
                            style={{ backgroundColor: getCategoryColor(p.category) }}
                          />
                          <span className="chip-text">{p.venue}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="tooltip-footer">
              <a href="#contact" className="tooltip-enquire-btn">
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
