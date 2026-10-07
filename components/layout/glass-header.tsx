"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Trophy,
  Zap,
  Activity,
  Download,
  Sun,
  Shield,
  Layers,
  Sparkles
} from "lucide-react";

export function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-[#08090d]/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          : "py-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-10 w-28 sm:h-12 sm:w-36 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/ast-logo1.png"
                alt="AST Sports — Advanced Sports Technologies"
                fill
                priority
                className="ast-brand-logo ast-brand-logo-on-dark object-contain"
                sizes="(max-width: 640px) 112px, 144px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* 1. Home */}
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              Home
            </Link>

            {/* 2. Products & Brands (Mega Menu) */}
            <div
              className="ast-nav-group relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors focus:outline-none"
                aria-expanded={activeDropdown === "products"}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "products" ? "rotate-180 text-red-400" : "text-slate-400"
                  }`}
                />
              </button>

              <div className="ast-dropdown-menu w-[720px] left-1/2 -translate-x-1/2">
                <div className="grid grid-cols-3 gap-6">
                  {/* Rekortan Column */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Rekortan Tracks
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/athletic-tracks"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400 flex items-center justify-between">
                            <span>Rekortan M99</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">World Athletics Class 1 Full Pour</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/athletic-tracks"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400 flex items-center justify-between">
                            <span>Rekortan M</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Impermeable Sandwich System</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/athletic-tracks"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400 flex items-center justify-between">
                            <span>Rekortan PUR E</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">High Acceleration Solid PU</p>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/pdf/REKORTAN-M99.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 hover:text-amber-300 font-medium pt-1 px-2"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download Track Catalogue</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Poligras Column */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Poligras Turf
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/hockey"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-blue-400 flex items-center justify-between">
                            <span>Poligras Tokyo GT</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Official Olympic Games Surface</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/hockey"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-blue-400 flex items-center justify-between">
                            <span>Poligras Platinum GT</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Championship Water-Based Turf</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/hockey"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-blue-400 flex items-center justify-between">
                            <span>Poligras SuperPlay</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Multi-Sport Hybrid Pitch</p>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/pdf/POLIGRAS-GT-CATALOGUE-two-page.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 hover:text-amber-300 font-medium pt-1 px-2"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download Poligras Brochure</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Technology & Systems Column */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Tech & Lighting
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/smartracks"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-emerald-400 flex items-center justify-between">
                            <span>SmarTracks Timing</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Magnetic Athlete Diagnostics</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/sports-lighting"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-emerald-400 flex items-center justify-between">
                            <span>Sports Lighting</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Panasonic 4K Broadcast LED</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/cleaning-and-maintenance"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-emerald-400 flex items-center justify-between">
                            <span>Cleaning & AMC</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-xs text-slate-400">Teraclean Predict & Prevent</p>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/pdf/CATALOGUE-SMARTRACK-RED.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 hover:text-amber-300 font-medium pt-1 px-2"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download SmarTracks PDF</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 bg-white/[0.02] -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                  <span>Exclusive Representative of Polytan / SportGroup Germany in India</span>
                  <Link
                    href="/products/athletics-track"
                    className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
                  >
                    View All Products <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Sports Surfaces (Mega Menu) - commented out per user request */}
            {/* <div
              className="ast-nav-group relative"
              onMouseEnter={() => setActiveDropdown("sports")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors focus:outline-none"
                aria-expanded={activeDropdown === "sports"}
              >
                <span>Sports</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "sports" ? "rotate-180 text-red-400" : "text-slate-400"
                  }`}
                />
              </button>

              <div className="ast-dropdown-menu w-[780px] left-1/2 -translate-x-1/2">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <Trophy className="w-4 h-4 text-red-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Track & Field
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <Link
                          href="/athletic-tracks"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400">
                            Athletic Tracks
                          </div>
                          <p className="text-xs text-slate-400">400m Stadiums & Sprint Straights</p>
                        </Link>
                      </li>
                    </ul>

                    <div className="mt-4 pt-3 border-t border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] bg-red-950/60 border border-red-800/40 text-red-300 px-2 py-0.5 rounded-full font-medium">
                          World Athletics
                        </span>
                        <span className="text-[10px] bg-red-950/60 border border-red-800/40 text-red-300 px-2 py-0.5 rounded-full font-medium">
                          IAAF Class 1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <Activity className="w-4 h-4 text-blue-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Team Sports
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <Link
                          href="/sport/hockey-track"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-blue-400">
                            Hockey Turf
                          </div>
                          <p className="text-xs text-slate-400">FIH Global Certified Pitches</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sport/football"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-blue-400">
                            Football Turf
                          </div>
                          <p className="text-xs text-slate-400">FIFA Quality Pro Systems</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sport/basketball"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-blue-400">
                            Basketball Courts
                          </div>
                          <p className="text-xs text-slate-400">FIBA Sprung Hardwood & Modular</p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-3 border-b border-white/10">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Court & Flooring
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <Link
                          href="/sport/wooden-flooring"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Wooden Flooring
                          </div>
                          <p className="text-xs text-slate-400">North American Maple & Teak</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sport/indoor-flooring"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Indoor Flooring
                          </div>
                          <p className="text-xs text-slate-400">Multipurpose Polyurethane & PVC</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sport/tennis"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Tennis Courts
                          </div>
                          <p className="text-xs text-slate-400">ITF Classified Acrylic Cushion</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sport/badminton"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Badminton Courts
                          </div>
                          <p className="text-xs text-slate-400">BWF Certified Competition Mats</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 bg-white/[0.02] -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                  <span>Custom sub-base engineering and line marking for every sport</span>
                  <Link
                    href="/sports"
                    className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
                  >
                    View All 8 Sports Surfaces <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div> */}

            {/* 4. Solutions Dropdown */}
            <div
              className="ast-nav-group relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors focus:outline-none"
                aria-expanded={activeDropdown === "solutions"}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180 text-red-400" : "text-slate-400"
                  }`}
                />
              </button>

              <div className="ast-dropdown-menu w-[580px] left-1/2 -translate-x-1/2">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 pb-2 mb-3 border-b border-white/10">
                      Surfaces & Technology
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/products/athletics-track"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400">
                            Athletics Track
                          </div>
                          <p className="text-xs text-slate-400">Full Pour & Sandwich Systems</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/synthetic-turf/hockey"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400">
                            Hockey Turf
                          </div>
                          <p className="text-xs text-slate-400">Poligras Water & Sand Turf</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/synthetic-turf/football"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400">
                            Football Turf
                          </div>
                          <p className="text-xs text-slate-400">FIFA Quality Pro Systems</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/smartracks/inbuilt"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-red-400">
                            SmarTracks Inbuilt
                          </div>
                          <p className="text-xs text-slate-400">Sub-Surface Timing Gates</p>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 pb-2 mb-3 border-b border-white/10">
                      Engineering & Services
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/products/sports-lighting"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Sports Lighting
                          </div>
                          <p className="text-xs text-slate-400">Panasonic Japan LED Floodlighting</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/smartracks/wireless-timing-gate"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Wireless Timing Gates
                          </div>
                          <p className="text-xs text-slate-400">Mobile Combine & Sprint Gates</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/cleaning-and-maintenance"
                          className="group block p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="font-semibold text-white group-hover:text-amber-400">
                            Cleaning & Maintenance
                          </div>
                          <p className="text-xs text-slate-400">Teraclean Hydro-Vacuum Washing</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Our Projects */}
            <Link
              href="/our-projects"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Our Projects</span>
              <span className="text-[10px] bg-red-600/30 border border-red-500/50 text-red-300 px-1.5 py-0.2 rounded-full font-bold ml-0.5">
                100+
              </span>
            </Link>

            {/* 6. Group Companies */}
            <div
              className="ast-nav-group relative"
              onMouseEnter={() => setActiveDropdown("group")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors focus:outline-none"
                aria-expanded={activeDropdown === "group"}
              >
                <span>Our Group</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "group" ? "rotate-180 text-red-400" : "text-slate-400"
                  }`}
                />
              </button>

              <div className="ast-dropdown-menu w-[320px] left-1/2 -translate-x-1/2">
                <div className="space-y-3">
                  <a
                    href="https://teraclean.in"
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between text-white font-semibold group-hover:text-emerald-400">
                      <span>Teraclean</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Advanced surface rejuvenation & specialized machine washing
                    </p>
                  </a>
                  <a
                    href="https://sportslightingsolution.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-amber-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between text-white font-semibold group-hover:text-amber-400">
                      <span>Sports Lighting Solution</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      High mast illumination & Panasonic smart stadium controls
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* 7. Contact Us */}
            <Link
              href="/contact-us"
              className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+911143063708"
              className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-colors"
            >
              <Phone className="w-3 h-3 text-red-400" />
              <span>+91 11 430 63 708</span>
            </a>

            <Link
              href="/contact-us"
              className="ast-btn-glow px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/contact-us"
              className="ast-btn-glow px-3 py-1.5 rounded-lg text-xs font-semibold sm:hidden"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0a0c12]/98 backdrop-blur-3xl border-b border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 transition-all duration-300">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-white py-2 border-b border-white/5"
            >
              Home
            </Link>

            {/* Sports Accordion - commented out per user request */}
            {/* <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-400 py-1">
                Sports Surfaces
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link
                  href="/athletic-tracks"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🏃 Athletic Tracks
                </Link>
                <Link
                  href="/sport/hockey-track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🏑 Hockey Turf
                </Link>
                <Link
                  href="/sport/football"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  ⚽ Football Turf
                </Link>
                <Link
                  href="/sport/basketball"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🏀 Basketball Courts
                </Link>
                <Link
                  href="/sport/wooden-flooring"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🪵 Wooden Flooring
                </Link>
                <Link
                  href="/sport/indoor-flooring"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🏢 Indoor Flooring
                </Link>
                <Link
                  href="/sport/tennis"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🎾 Tennis Courts
                </Link>
                <Link
                  href="/sport/badminton"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1.5 px-2 rounded hover:bg-white/5"
                >
                  🏸 Badminton Courts
                </Link>
              </div>
              <Link
                href="/sports"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block text-xs font-bold text-red-400 mt-2 hover:underline"
              >
                View all sports surfaces →
              </Link>
            </div> */}

            {/* Products & Tech */}
            <div className="pt-2 border-t border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 py-1">
                Products & Technologies
              </div>
              <div className="grid grid-cols-1 gap-1.5 mt-2">
                <Link
                  href="/products/athletics-track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1 px-2 rounded hover:bg-white/5"
                >
                  Rekortan M99 & M Running Tracks
                </Link>
                <Link
                  href="/products/synthetic-turf/hockey"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1 px-2 rounded hover:bg-white/5"
                >
                  Poligras Olympic Hockey Turfs
                </Link>
                <Link
                  href="/football"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1 px-2 rounded hover:bg-white/5"
                >
                  LigaTurf FIFA Football Systems
                </Link>
                <Link
                  href="/smartracks"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1 px-2 rounded hover:bg-white/5"
                >
                  SmarTracks Athlete Diagnostics
                </Link>
                <Link
                  href="/products/sports-lighting"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1 px-2 rounded hover:bg-white/5"
                >
                  Panasonic LED Sports Lighting
                </Link>
                <Link
                  href="/products/cleaning-and-maintenance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-white py-1 px-2 rounded hover:bg-white/5"
                >
                  Teraclean Machine Maintenance
                </Link>
              </div>
            </div>

            {/* Our Projects */}
            <div className="pt-2 border-t border-white/5">
              <Link
                href="/our-projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-white py-2"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Our Projects</span>
                </div>
                <span className="text-xs bg-red-600/30 text-red-300 px-2 py-0.5 rounded-full font-bold">
                  100+ Locations
                </span>
              </Link>
            </div>

            {/* Contact & Phone */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full ast-btn-glow py-3 rounded-xl text-center font-bold text-sm block"
              >
                Contact & Request Quote
              </Link>
              <div className="text-center text-xs text-slate-400">
                <p>Office: E-42, Okhla Phase II, New Delhi</p>
                <p className="mt-1">
                  Call:{" "}
                  <a href="tel:+911143063708" className="text-white underline">
                    +91 11 430 63 708
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
