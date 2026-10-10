"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { featuredCertificates, getCompactStandardBadge, type ASTCertificate } from "@/content/certificates-data";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export function TestingCertification() {
  const [selectedCert, setSelectedCert] = useState<ASTCertificate | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isInteracting = useRef(false);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  // Triple items for seamless infinite linear movement
  const streamItems = useMemo(() => {
    return [...featuredCertificates, ...featuredCertificates, ...featuredCertificates];
  }, []);

  // Continuous linear carousel movement
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.6; // constant linear scroll speed (px per frame)

    // Position initially in the middle repetition to support left & right stepping seamlessly
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft === 0 && singleSetWidth > 0) {
      el.scrollLeft = singleSetWidth;
    }

    const tick = () => {
      if (!isHovered.current && !isInteracting.current && selectedCert === null) {
        el.scrollLeft += speed;
        const setWidth = el.scrollWidth / 3;
        if (setWidth > 0) {
          if (el.scrollLeft >= setWidth * 2) {
            el.scrollLeft -= setWidth;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += setWidth;
          }
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [selectedCert]);

  const pauseAutoMovement = (delayMs = 2600) => {
    isInteracting.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      isInteracting.current = false;
    }, delayMs);
  };

  const handleNext = () => {
    const el = viewportRef.current;
    if (!el) return;
    pauseAutoMovement(2600);
    const cardStep = 315; // card width (295px) + gap (20px)
    el.scrollBy({ left: cardStep, behavior: "smooth" });
  };

  const handlePrev = () => {
    const el = viewportRef.current;
    if (!el) return;
    pauseAutoMovement(2600);
    const cardStep = 315;
    el.scrollBy({ left: -cardStep, behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  const handleTouchStart = () => {
    isInteracting.current = true;
  };

  const handleTouchEnd = () => {
    pauseAutoMovement(2000);
  };

  return (
    <section
      id="testing-certification"
      className="section-pad products-section certification-section"
      data-nav-theme="light"
      aria-labelledby="certification-title"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_75%)]" aria-hidden="true">
        <InteractiveGridPattern
          width={38}
          height={38}
          squares={[32, 22]}
          className="pointer-events-auto opacity-55"
        />
      </div>
      <div className="page-container">
        {/* Section Heading & Trust Badges */}
        <div className="certification-header-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="red-rule" />
                ACCREDITED EXCELLENCE · GLOBAL STANDARDS
              </p>
              <h2 id="certification-title">
                TESTING &amp;{" "}
                <br />
                <span className="quiet-text">CERTIFICATION.</span>
              </h2>
            </div>
            <p className="certification-hero-sub">
              Every synthetic athletics track and hockey pitch built by AST is
              rigorously tested to satisfy stringent World Athletics (IAAF) and
              FIH international tournament criteria.
            </p>
          </div>

          <div className="certification-stat-ribbon">
            <div className="cert-stat-badge">
              <span className="cert-stat-num">45+</span>
              <span className="cert-stat-lbl">Certified Venues</span>
            </div>
            <div className="cert-stat-badge">
              <span className="cert-stat-num">FIH Cat 1</span>
              <span className="cert-stat-lbl">World Cup Grade Turfs</span>
            </div>
            <div className="cert-stat-badge">
              <span className="cert-stat-num">Class 2</span>
              <span className="cert-stat-lbl">World Athletics Tracks</span>
            </div>
            <div className="cert-stat-badge">
              <span className="cert-stat-num">100%</span>
              <span className="cert-stat-lbl">In-Situ Tested Surfaces</span>
            </div>
          </div>
        </div>

        <p className="certification-introduction">
          We maintain an in-house engineering and survey team conducting complete
          topographical surveys, sub-base soil stability analysis, and load-bearing
          evaluations before installation. Post-installation surfaces are tested
          on-site by certified laboratories for shock absorption, vertical
          deformation, and ball bounce dynamics.
        </p>

        {/* Live Accreditation Stream Controls Bar (Borderless, Clean) */}
        <div className="cert-stream-controls-bar">
          <div className="cert-stream-badge">
            <span className="cert-live-dot" />
            <ShieldCheck size={16} className="text-red-500" />
            <span className="cert-stream-label">
              Official Certificates &amp; Lab Accreditation Track
            </span>
          </div>

          <div className="cert-stream-nav-actions">
            <button
              type="button"
              className="cert-nav-arrow"
              onClick={handlePrev}
              aria-label="Previous certificates"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="cert-nav-arrow"
              onClick={handleNext}
              aria-label="Next certificates"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Multi-Card Auto Linear Carousel Stream (No outer container box, 3-4 cards visible) */}
        <div
          ref={viewportRef}
          className="cert-stream-viewport"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="cert-stream-track">
            {streamItems.map((cert, index) => {
              const isFIH = cert.governingBody === "FIH";
              return (
                <article
                  key={`${cert.id}-${index}`}
                  className="cert-stream-card"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedCert(cert);
                    }
                  }}
                  aria-label={`Inspect ${cert.title} certificate`}
                >
                  <div className="cert-stream-card-inner">
                    {/* Floating Badges */}
                    <div className="cert-card-floating-badges">
                      <span className={`cert-body-badge ${isFIH ? "is-fih" : "is-wa"}`}>
                        <Award size={12} className="inline mr-1" />
                        {getCompactStandardBadge(cert.standard, cert.governingBody)}
                      </span>

                      <span className="cert-zoom-pill">
                        <Maximize2 size={12} className="inline mr-1" /> Inspect
                      </span>
                    </div>

                    {/* Certificate Document Preview Sheet */}
                    <div className="cert-stream-sheet-frame">
                      <Image
                        src={cert.previewImage}
                        alt={`${cert.title} official certificate`}
                        fill
                        sizes="(max-width: 640px) 270px, 295px"
                        priority={index < 4}
                        className="cert-stream-sheet-img"
                      />
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="cert-stream-card-overlay">
                      <span className="cert-stream-location">
                        {cert.city}, {cert.state}
                      </span>
                      <h3 className="cert-stream-venue-title">{cert.title}</h3>
                      <div className="cert-stream-click-row">
                        <Eye size={14} />
                        <span>Preview Certificate</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* View All Redirect CTA Banner */}
        <div className="cert-view-all-cta-wrap">
          <div className="cert-view-all-copy">
            <h4>Browse Our Complete Accredited Portfolio</h4>
            <p>
              Access all 45+ official certificates spanning Kalinga Stadium,
              National Stadium Delhi, INS Valsura, and SAI high-performance academies.
            </p>
          </div>
          <Link
            href="/certificates"
            className="ast-button ast-button-red cert-view-all-btn"
          >
            View All 45+ Certificates <ExternalLink size={17} />
          </Link>
        </div>

        {/* Certificate Inspection Modal */}
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
                      Official Certified Facility
                    </span>
                    <DialogTitle>{selectedCert.title}</DialogTitle>
                    <DialogDescription>
                      {selectedCert.city}, {selectedCert.state} · Accredited Standard:{" "}
                      <strong>{selectedCert.standard}</strong>
                    </DialogDescription>
                  </div>

                  <button
                    type="button"
                    className="certification-dialog-close"
                    aria-label="Close image preview"
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
                      className="object-contain p-3"
                      unoptimized
                    />
                  </div>

                  <div className="cert-modal-actions-bar">
                    <div className="cert-modal-details">
                      <span className="cert-detail-pill">
                        Governing Body: <strong>{selectedCert.governingBody}</strong>
                      </span>
                      <span className="cert-detail-pill">
                        Sport: <strong>{selectedCert.sport}</strong>
                      </span>
                    </div>

                    <div className="cert-modal-btns">
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ast-button ast-button-glass cert-pdf-link"
                      >
                        <Download size={16} /> Open Official PDF
                      </a>
                      <Link
                        href="/certificates"
                        className="ast-button ast-button-red"
                        onClick={() => setSelectedCert(null)}
                      >
                        Browse All 45+ Certificates <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
