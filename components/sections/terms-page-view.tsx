"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  FileText,
  Lock,
  Mail,
  MapPin,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { HomepageFooter } from "@/components/layout/homepage-footer";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { company } from "@/content/ast";

type SectionTab = "terms" | "warranty" | "maintenance" | "privacy" | "standards";

export function TermsPageView() {
  const [activeTab, setActiveTab] = useState<SectionTab>("terms");

  return (
    <div className="ast-terms-page">
      <SiteHeader />

      <main id="main-content">
        {/* Terms Hero */}
        <section className="terms-hero" data-nav-theme="dark" aria-labelledby="terms-hero-title">
          <Image
            className="terms-hero-image"
            src="/placeholders/sports-facility.jpg"
            alt="Sports facility stadium background"
            fill
            priority
            sizes="100vw"
          />
          <div className="terms-hero-shade" />

          <div className="page-container terms-hero-content">
            <nav className="terms-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Company</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Terms &amp; Policy</span>
            </nav>

            <p className="eyebrow hero-eyebrow">
              <span className="red-rule" />
              LEGAL, WARRANTIES &amp; COMPLIANCE
            </p>

            <h1 id="terms-hero-title" className="terms-hero-title">
              TERMS &amp; <span className="highlight-red">POLICIES.</span>
            </h1>

            <p className="terms-hero-lead">
              Our commitment to legal transparency, international sports surface warranties,
              environmental safeguards, and client data confidentiality across all AST infrastructure projects.
            </p>
          </div>
        </section>

        {/* Content Body Section */}
        <section className="terms-body-section" data-nav-theme="light">
          <div className="page-container terms-layout">
            {/* Sticky Sidebar Navigation */}
            <aside className="terms-sidebar" aria-label="Policy sections">
              <span className="terms-nav-title">Document Directory</span>
              <div className="terms-nav-links">
                <button
                  type="button"
                  className={`terms-nav-item ${activeTab === "terms" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("terms")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Scale size={16} />
                    <span>Terms of Service</span>
                  </span>
                  <ChevronRight size={15} />
                </button>

                <button
                  type="button"
                  className={`terms-nav-item ${activeTab === "warranty" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("warranty")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <ShieldCheck size={16} />
                    <span>Warranties &amp; Guarantees</span>
                  </span>
                  <ChevronRight size={15} />
                </button>

                <button
                  type="button"
                  className={`terms-nav-item ${activeTab === "maintenance" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("maintenance")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Shield size={16} />
                    <span>Maintenance Protocols</span>
                  </span>
                  <ChevronRight size={15} />
                </button>

                <button
                  type="button"
                  className={`terms-nav-item ${activeTab === "standards" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("standards")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FileText size={16} />
                    <span>Standards &amp; Testing</span>
                  </span>
                  <ChevronRight size={15} />
                </button>

                <button
                  type="button"
                  className={`terms-nav-item ${activeTab === "privacy" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("privacy")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Lock size={16} />
                    <span>Privacy Policy</span>
                  </span>
                  <ChevronRight size={15} />
                </button>
              </div>

              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "20px",
                  borderTop: "1px solid #e1e7e2",
                  fontSize: "12.5px",
                  color: "#6e8075",
                  lineHeight: "1.6",
                }}
              >
                <strong style={{ display: "block", color: "#16221c", marginBottom: "4px" }}>
                  Legal &amp; Compliance Helpdesk
                </strong>
                Direct queries to:{" "}
                <a href={`mailto:${company.contact.email}`} style={{ color: "#ff3e41", fontWeight: 600 }}>
                  {company.contact.email}
                </a>
              </div>
            </aside>

            {/* Main Content Article Panel */}
            <article className="terms-content-panel">
              {activeTab === "terms" && (
                <div>
                  <div className="terms-article-header">
                    <h2>Terms of Service &amp; Project Execution</h2>
                    <p>Last revised: October 2026 · Advanced Sports Technologies LLP</p>
                  </div>

                  <div className="terms-section-block">
                    <h3>1. Scope of Commercial &amp; Civil Undertakings</h3>
                    <p>
                      Advanced Sports Technologies LLP (&quot;AST&quot;) provides turnkey design, engineering,
                      procurement, laser grading, installation, and certification services for synthetic
                      athletic tracks, artificial hockey turfs, football pitches, indoor wooden flooring,
                      and specialized sports floodlighting across the Republic of India and neighboring territories.
                    </p>
                    <p>
                      All technical proposals, quotations, tender bids, and installation contracts are governed
                      strictly by AST&apos;s master project agreements and the certified manufacturing tolerances
                      established by our principal technology partner, Polytan / Sport Group Germany.
                    </p>
                  </div>

                  <div className="terms-section-block">
                    <h3>2. Site Readiness &amp; Sub-Base Tolerances</h3>
                    <p>
                      The longevity and tournament certification of synthetic running tracks and hockey pitches
                      depend fundamentally on the underlying civil sub-base (asphalt or concrete). AST requires:
                    </p>
                    <ul>
                      <li>
                        Precision laser level tolerances conforming to World Athletics Rule 140/DIN 18035 standards
                        (maximum 3mm deviation under a 4-metre straightedge).
                      </li>
                      <li>
                        Adequate perimeter drainage, French drains, and engineered falls of 0.5% to 1.0% to prevent
                        sub-surface hydraulic pressure.
                      </li>
                      <li>
                        Full curing of asphalt or concrete foundations (minimum 28 days for cementitious sub-bases)
                        prior to the application of polyurethane primers or elastic layers.
                      </li>
                    </ul>
                  </div>

                  <div className="terms-section-block">
                    <h3>3. Intellectual Property &amp; Brand Usage</h3>
                    <p>
                      All registered trademarks — including <strong>POLIGRAS</strong>, <strong>LIGATURF</strong>,
                      <strong> REKORTAN</strong>, <strong>SPURTAN</strong>, and <strong>SMARTRACKS</strong> — are
                      the exclusive intellectual property of Sport Group Holding GmbH or their respective owners.
                      AST is licensed to distribute, install, and service these proprietary systems in India.
                    </p>
                  </div>

                  <div className="terms-highlight-callout">
                    <strong>Jurisdiction &amp; Dispute Resolution</strong>
                    <p>
                      All commercial agreements executed by Advanced Sports Technologies LLP are subject to the
                      exclusive jurisdiction of the courts of New Delhi, India.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "warranty" && (
                <div>
                  <div className="terms-article-header">
                    <h2>Product Warranties &amp; Performance Guarantees</h2>
                    <p>Comprehensive coverage backed by Polytan Germany and AST Civil Engineering</p>
                  </div>

                  <div className="terms-section-block">
                    <h3>1. Manufacturer System Warranties</h3>
                    <p>
                      Every synthetic surface installed by AST is backed by comprehensive manufacturer warranties
                      covering material integrity, UV stability, tensile elasticity, and colorfastness under
                      tropical Indian climate conditions:
                    </p>
                    <ul>
                      <li>
                        <strong>Rekortan &amp; Spurtan Athletic Tracks:</strong> 5 to 10-year structural warranty
                        against delamination, UV degradation, and excessive hardening when maintained per AST guidelines.
                      </li>
                      <li>
                        <strong>Poligras Hockey Turfs:</strong> 5 to 8-year yarn integrity warranty against fiber fibrilation,
                        premature yarn shearing, and backing breakdown.
                      </li>
                      <li>
                        <strong>LigaTurf Football Systems:</strong> 5 to 8-year warranty for yarn tuft-bind strength,
                        resilience, and dimensional stability.
                      </li>
                      <li>
                        <strong>GigaTera Sports Floodlighting:</strong> 5-year replacement warranty on optical modules,
                        LED driver components, and surge suppression units.
                      </li>
                    </ul>
                  </div>

                  <div className="terms-section-block">
                    <h3>2. Warranty Conditions &amp; Exclusions</h3>
                    <p>
                      Warranties remain valid provided the sports facility is utilized in accordance with intended
                      athletic activities. Warranties do not cover damages resulting from:
                    </p>
                    <ul>
                      <li>Use of improper spike lengths (maximum 6mm pyramid spikes on synthetic running tracks).</li>
                      <li>Introduction of non-approved footwear, vehicular traffic, or heavy machinery without surface protection.</li>
                      <li>Sub-base subsidence or structural failure caused by ground movement external to AST&apos;s scope.</li>
                      <li>Use of corrosive cleaning agents, solvents, or petroleum spills on polyurethane or turf fibers.</li>
                    </ul>
                  </div>

                  <div className="terms-highlight-callout">
                    <strong>Prompt Warranty Inspection Service</strong>
                    <p>
                      AST maintains dedicated service engineers in Delhi and regional hubs capable of conducting on-site
                      surface diagnostics within 48 to 72 hours of notice.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "maintenance" && (
                <div>
                  <div className="terms-article-header">
                    <h2>Surface Care &amp; Preventative Maintenance</h2>
                    <p>&quot;Predict and Prevent&quot; rather than &quot;Fail and Fixed&quot;</p>
                  </div>

                  <div className="terms-section-block">
                    <h3>1. Maintenance Philosophy</h3>
                    <p>
                      The lifespan of synthetic sports infrastructure can be extended by 40% to 60% through proactive,
                      scheduled surface grooming and deep washing. AST provides custom annual maintenance contracts
                      (AMC) utilizing specialized European machinery.
                    </p>
                  </div>

                  <div className="terms-section-block">
                    <h3>2. Mandatory Facility Protocols</h3>
                    <ul>
                      <li>
                        <strong>Regular Grooming:</strong> High-pressure water-jet washing and rotatory brushing of
                        water-based hockey pitches to remove algae, dust sediment, and organic buildup.
                      </li>
                      <li>
                        <strong>Athletic Track De-clogging:</strong> Periodic clearing of water-permeable track pores
                        to preserve shock absorption and surface drainage coefficients.
                      </li>
                      <li>
                        <strong>Line Re-marking:</strong> Precise laser touch-ups of lane lines, start/finish marks,
                        and boundary indicators using polyurethane-based non-fade athletic marking paints.
                      </li>
                      <li>
                        <strong>Footwear Control:</strong> Clear signage mandating regulation studs, turf boots, and
                        track spikes at all facility entry points.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "standards" && (
                <div>
                  <div className="terms-article-header">
                    <h2>Testing Standards &amp; International Accreditations</h2>
                    <p>World Athletics, FIH, and FIFA Category 1 Field Compliance</p>
                  </div>

                  <div className="terms-section-block">
                    <h3>1. International Governing Body Approvals</h3>
                    <p>
                      AST installs sports surfaces compliant with the highest benchmarks set by global federations:
                    </p>
                    <ul>
                      <li>
                        <strong>World Athletics (formerly IAAF):</strong> Rekortan systems certified for Category 1
                        and Category 2 international athletics competitions, meeting strict force reduction (35%–50%)
                        and vertical deformation limits.
                      </li>
                      <li>
                        <strong>International Hockey Federation (FIH):</strong> Poligras surfaces certified for FIH
                        Global Elite tournament play, including Olympic Games and FIH Hockey World Cups.
                      </li>
                      <li>
                        <strong>FIFA Quality Programme:</strong> LigaTurf synthetic grass systems tested for shock
                        absorption, vertical ball rebound, and rotational resistance per FIFA Quality Pro standards.
                      </li>
                    </ul>
                  </div>

                  <div className="terms-section-block">
                    <h3>2. Third-Party Lab Testing</h3>
                    <p>
                      Following project completion, AST arranges third-party field performance testing conducted by
                      accredited laboratories (such as Labosport, Sports Labs, or ISA Sport) to deliver authentic
                      federation certificates to the stadium owner.
                    </p>
                    <div style={{ marginTop: "20px" }}>
                      <Link href="/certificates" className="ast-button ast-button-red">
                        <span>View 45+ Active Stadium Certificates</span>
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "privacy" && (
                <div>
                  <div className="terms-article-header">
                    <h2>Privacy Policy &amp; Corporate Confidentiality</h2>
                    <p>Safeguarding client architectural drawings, RFP data, and inquiry details</p>
                  </div>

                  <div className="terms-section-block">
                    <h3>1. Information We Collect</h3>
                    <p>
                      When you submit an inquiry, request a project quote, or download technical brochures through
                      our website (ast-sports.com), we collect:
                    </p>
                    <ul>
                      <li>Contact details: Name, corporate email, mobile phone number, department, and organization.</li>
                      <li>Project specifications: Venue dimensions, sport categories, target timelines, and site location.</li>
                      <li>Technical logs: Basic browser analytics, IP address, and cookie sessions used solely to optimize website speed.</li>
                    </ul>
                  </div>

                  <div className="terms-section-block">
                    <h3>2. Purpose &amp; Non-Disclosure</h3>
                    <p>
                      We never sell, rent, or trade client data to third-party advertisers. Information submitted
                      to AST is used strictly for:
                    </p>
                    <ul>
                      <li>Preparing technical feasibility reports, architectural layouts, and budget estimates.</li>
                      <li>Transmitting requested product brochures, laboratory certificates, and CAD drawings.</li>
                      <li>Direct communication between AST engineering consultants and the project owner.</li>
                    </ul>
                  </div>

                  <div className="terms-section-block">
                    <h3>3. Data Protection &amp; Contact</h3>
                    <p>
                      You may request the correction, verification, or deletion of your corporate contact details
                      at any time by emailing us at{" "}
                      <a href={`mailto:${company.contact.email}`} style={{ color: "#ff3e41", fontWeight: 600 }}>
                        {company.contact.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      </main>

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
