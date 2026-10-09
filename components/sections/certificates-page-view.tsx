"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  Filter,
  MapPin,
  Maximize2,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  astCertificates,
  certificateStats,
  getCompactStandardBadge,
  type ASTCertificate,
} from "@/content/certificates-data";
import { company } from "@/content/ast";

type FilterTab = "ALL" | "HOCKEY" | "ATHLETICS" | "MULTI";

export function CertificatesPageView() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState<ASTCertificate | null>(null);

  // Filter and search logic
  const filteredCertificates = useMemo(() => {
    return astCertificates.filter((cert) => {
      // Category Tab filter
      if (activeTab === "HOCKEY" && cert.sport !== "Hockey") return false;
      if (activeTab === "ATHLETICS" && cert.sport !== "Athletics Track") return false;
      if (activeTab === "MULTI" && cert.sport !== "Multi-Sport") return false;

      // Search Query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = cert.title.toLowerCase().includes(query);
        const matchesCity = cert.city.toLowerCase().includes(query);
        const matchesState = cert.state.toLowerCase().includes(query);
        const matchesStandard = cert.standard.toLowerCase().includes(query);
        const matchesBody = cert.governingBody.toLowerCase().includes(query);
        return matchesTitle || matchesCity || matchesState || matchesStandard || matchesBody;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  // Modal navigation within current filtered list
  const currentModalIndex = selectedCert
    ? filteredCertificates.findIndex((c) => c.id === selectedCert.id)
    : -1;

  const handleModalPrev = () => {
    if (currentModalIndex > 0) {
      setSelectedCert(filteredCertificates[currentModalIndex - 1]);
    } else {
      setSelectedCert(filteredCertificates[filteredCertificates.length - 1]);
    }
  };

  const handleModalNext = () => {
    if (currentModalIndex < filteredCertificates.length - 1) {
      setSelectedCert(filteredCertificates[currentModalIndex + 1]);
    } else {
      setSelectedCert(filteredCertificates[0]);
    }
  };

  return (
    <div className="ast-homepage certificates-page-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader homeHref="/" />

      <main id="main-content">
        {/* 1. Hero Section */}
        <section
          className="certificates-hero-section"
          data-nav-theme="dark"
          aria-labelledby="cert-page-title"
        >
          <div className="page-container">
            <div className="cert-hero-content">
              <nav className="cert-breadcrumbs" aria-label="Breadcrumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <span className="current">Testing &amp; Certifications</span>
              </nav>

              <p className="eyebrow">
                <span className="red-rule" />
                ACCREDITED FACILITY PORTFOLIO
              </p>
              <h1 id="cert-page-title">
                TESTING &amp;{" "}
                <br />
                <span className="highlight-text">CERTIFICATIONS.</span>
              </h1>

              <p className="cert-hero-desc">
                Official certificates from World Athletics (IAAF), the International Hockey
                Federation (FIH), and national sports authorities validating 45+ premier
                synthetic sports surfaces constructed by Advanced Sports Technologies (AST) across India.
              </p>

              {/* Stat Ribbon */}
              <div className="cert-hero-stats-grid">
                <div className="cert-stat-box">
                  <div className="cert-stat-val">{certificateStats.totalCertificates}</div>
                  <div className="cert-stat-label">Certified Venues in India</div>
                </div>
                <div className="cert-stat-box">
                  <div className="cert-stat-val">{certificateStats.fihCertifiedTurfs}</div>
                  <div className="cert-stat-label">FIH Hockey Fields</div>
                </div>
                <div className="cert-stat-box">
                  <div className="cert-stat-val">{certificateStats.worldAthleticsTracks}</div>
                  <div className="cert-stat-label">World Athletics Synthetic Tracks</div>
                </div>
                <div className="cert-stat-box">
                  <div className="cert-stat-val">{certificateStats.statesCovered}+</div>
                  <div className="cert-stat-label">States &amp; UTs Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Certificate Explorer & Interactive Filter */}
        <section
          className="section-pad cert-explorer-section"
          data-nav-theme="light"
          aria-labelledby="explorer-heading"
        >
          <div className="page-container">
            {/* Filter and Search Bar */}
            <div className="cert-filter-toolbar">
              <div className="cert-filter-tabs">
                <button
                  type="button"
                  className={`cert-filter-tab ${activeTab === "ALL" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("ALL")}
                >
                  All Certificates ({astCertificates.length})
                </button>
                <button
                  type="button"
                  className={`cert-filter-tab ${activeTab === "HOCKEY" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("HOCKEY")}
                >
                  FIH Hockey Turfs ({certificateStats.fihCertifiedTurfs})
                </button>
                <button
                  type="button"
                  className={`cert-filter-tab ${activeTab === "ATHLETICS" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("ATHLETICS")}
                >
                  Athletics Tracks ({certificateStats.worldAthleticsTracks})
                </button>
                <button
                  type="button"
                  className={`cert-filter-tab ${activeTab === "MULTI" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("MULTI")}
                >
                  Multi-Sport (2)
                </button>
              </div>

              {/* Search Box */}
              <div className="cert-search-box">
                <Search size={18} className="cert-search-icon" />
                <input
                  type="text"
                  placeholder="Search stadium, city, or standard..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cert-search-input"
                  aria-label="Search certificates by title or location"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="cert-search-clear"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>

            {/* Results Counter */}
            <div className="cert-results-bar">
              <span className="cert-results-count">
                Showing <strong>{filteredCertificates.length}</strong> of{" "}
                <strong>{astCertificates.length}</strong> accredited certificates
              </span>
              {searchQuery && (
                <span className="cert-active-query">
                  Matching &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>

            {/* Certificates Gallery Grid */}
            {filteredCertificates.length === 0 ? (
              <div className="cert-empty-state">
                <FileCheck2 size={48} className="mx-auto text-neutral-400 mb-3" />
                <h3>No certificates found matching your search</h3>
                <p>Try searching for a different city, stadium name, or reset the filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTab("ALL");
                  }}
                  className="ast-button ast-button-red mt-4"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="cert-gallery-grid">
                {filteredCertificates.map((cert) => (
                  <article key={cert.id} className="cert-gallery-card">
                    {/* Visual Preview Box */}
                    <div
                      className="cert-gallery-card-preview"
                      onClick={() => setSelectedCert(cert)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setSelectedCert(cert);
                      }}
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <div className="cert-gallery-image-box">
                        <Image
                          src={cert.previewImage}
                          alt={`${cert.title} certificate preview`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="cert-thumb-img"
                        />
                      </div>

                      {/* Top Category Badge */}
                      <span
                        className={`cert-gallery-badge ${
                          cert.governingBody === "FIH" ? "is-fih" : "is-wa"
                        }`}
                      >
                        {getCompactStandardBadge(cert.standard, cert.governingBody)}
                      </span>

                      {/* Hover Overlay */}
                      <div className="cert-hover-overlay">
                        <span className="cert-hover-btn">
                          <Maximize2 size={16} /> Quick Preview
                        </span>
                      </div>
                    </div>

                    {/* Meta & Info Box */}
                    <div className="cert-gallery-card-meta">
                      <div className="cert-meta-header">
                        <span className="cert-meta-loc">
                          <MapPin size={13} className="inline mr-1" />
                          {cert.city}, {cert.state}
                        </span>
                        <span className="cert-meta-sport">{cert.sport}</span>
                      </div>

                      <h3 className="cert-meta-title" title={cert.title}>
                        {cert.title}
                      </h3>

                      <div className="cert-meta-actions">
                        <button
                          type="button"
                          className="cert-action-preview"
                          onClick={() => setSelectedCert(cert)}
                        >
                          <Eye size={15} /> Preview
                        </button>

                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-action-download"
                          title="Open official PDF certificate in new tab"
                        >
                          <Download size={15} /> PDF
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. Deep-Dive: Testing Standards & Inspection Protocols */}
        <section
          className="section-pad cert-standards-section"
          data-nav-theme="dark"
          aria-labelledby="standards-heading"
        >
          <div className="page-container">
            <div className="section-heading text-center">
              <div>
                <p className="eyebrow">
                  <span className="red-rule" />
                  RIGOROUS QUALITY CONTROL
                </p>
                <h2 id="standards-heading">
                  HOW AST SURFACES ARE{" "}
                  <br />
                  <span className="highlight-text">TESTED &amp; CERTIFIED.</span>
                </h2>
              </div>
              <p className="cert-standards-intro">
                Certification is not merely paperwork—it is scientific verification.
                Every sports facility undergoes on-site biomechanical and material testing
                performed by accredited testing laboratories before achieving World Athletics or FIH homologation.
              </p>
            </div>

            <div className="cert-standards-grid">
              <div className="cert-standard-card">
                <div className="cert-standard-icon">
                  <ShieldCheck size={28} />
                </div>
                <h3>1. Force Reduction (Shock Absorption)</h3>
                <p>
                  Measured using the Artificial Athlete device according to DIN EN 14808.
                  Surface elasticity must achieve a 55% to 70% force reduction window,
                  cushioning athletes&apos; ligaments and spine while maintaining explosive energy return.
                </p>
              </div>

              <div className="cert-standard-card">
                <div className="cert-standard-icon">
                  <Trophy size={28} />
                </div>
                <h3>2. Vertical Deformation</h3>
                <p>
                  Evaluates surface deflection under load (DIN EN 14809). Tracks must exhibit
                  0.6mm to 2.5mm vertical deformation to ensure firmness under spiked footwear
                  without foot destabilization or fatigue.
                </p>
              </div>

              <div className="cert-standard-card">
                <div className="cert-standard-icon">
                  <Award size={28} />
                </div>
                <h3>3. Friction &amp; Slip Resistance</h3>
                <p>
                  Tested with the British Pendulum Tester in both dry and wet saturated states.
                  Guarantees consistent traction, preventing dangerous slippage during torrential monsoons
                  or high-speed sprint decelerations.
                </p>
              </div>

              <div className="cert-standard-card">
                <div className="cert-standard-icon">
                  <Sparkles size={28} />
                </div>
                <h3>4. Ball Roll &amp; Rebound (FIH)</h3>
                <p>
                  For hockey pitches, a standard ball is released from calibrated ramps.
                  Measures ball roll distance, deviation angles, and bounce height consistency across
                  all zones of the field to ensure true championship gameplay.
                </p>
              </div>

              <div className="cert-standard-card">
                <div className="cert-standard-icon">
                  <CheckCircle2 size={28} />
                </div>
                <h3>5. Permeability &amp; Drainage</h3>
                <p>
                  Percolation rate testing certifies that all-weather synthetic surfaces drain at least
                  100 mm/hour of precipitation, preventing puddles and allowing matches to resume
                  immediately after heavy rainfall.
                </p>
              </div>

              <div className="cert-standard-card">
                <div className="cert-standard-icon">
                  <FileCheck2 size={28} />
                </div>
                <h3>6. Geotechnical Base Verification</h3>
                <p>
                  Prior to laying any surface, AST conducts soil compaction, CBR (California Bearing Ratio),
                  and laser leveling tests on asphalt sub-bases to guarantee a 0% gradient error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Consultation CTA Section */}
        <section
          className="build-cta cert-cta-section"
          data-nav-theme="red"
          aria-labelledby="cta-heading"
        >
          <div className="page-container">
            <p className="eyebrow">FACILITATING EXCELLENCE</p>
            <div>
              <h2 id="cta-heading">
                PLANNING AN ACCREDITED
                <br />
                SPORTS FACILITY?
              </h2>
              <p className="text-white/85 max-w-xl text-base mb-6">
                Consult with our civil engineers and homologation specialists to ensure your next stadium
                satisfies full World Athletics, FIH, or FIFA certification requirements.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`mailto:${company.contact.email}`}
                  className="ast-button ast-button-white"
                >
                  Contact Our Technical Team <ExternalLink size={18} />
                </a>
                <a
                  href={company.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ast-button ast-button-glass"
                >
                  <WhatsAppIcon size={18} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Dialog Modal */}
      <Dialog
        open={selectedCert !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        <DialogContent
          className="certification-dialog cert-modal-enhanced"
          showCloseButton={false}
        >
          {selectedCert && (
            <>
              <DialogHeader className="cert-modal-header">
                <div className="cert-modal-header-text">
                  <span className="cert-modal-tag">
                    <FileCheck2 size={16} className="inline mr-1 text-red-500" />
                    Official Certificate · {currentModalIndex + 1} of {filteredCertificates.length}
                  </span>
                  <DialogTitle>{selectedCert.title}</DialogTitle>
                  <DialogDescription>
                    {selectedCert.city}, {selectedCert.state} · Standard:{" "}
                    <strong>{selectedCert.standard}</strong>
                  </DialogDescription>
                </div>

                <button
                  type="button"
                  className="certification-dialog-close"
                  aria-label="Close certificate preview"
                  onClick={() => setSelectedCert(null)}
                >
                  <X size={22} />
                </button>
              </DialogHeader>

              <div className="cert-modal-body">
                <div className="cert-modal-image-container">
                  <Image
                    src={selectedCert.previewImage}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 768px) 95vw, 900px"
                    className="object-contain"
                  />
                </div>

                <div className="cert-modal-actions-bar">
                  <div className="cert-modal-nav-btns">
                    <button
                      type="button"
                      onClick={handleModalPrev}
                      className="cert-modal-nav-arrow"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft size={18} /> Prev
                    </button>
                    <span className="cert-modal-counter">
                      {currentModalIndex + 1} / {filteredCertificates.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleModalNext}
                      className="cert-modal-nav-arrow"
                      aria-label="Next certificate"
                    >
                      Next <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="cert-modal-btns">
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ast-button ast-button-red cert-pdf-link"
                    >
                      <Download size={16} /> Download Official PDF
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <HomepageFooter homeHref="/" />

      <a
        href={company.contact.whatsapp}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AST on WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
