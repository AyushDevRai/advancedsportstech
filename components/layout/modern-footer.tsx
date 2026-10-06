"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";

export function ModernFooter() {
  return (
    <footer className="relative bg-[#07080c] border-t border-white/10 text-slate-300 overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-40">
                <Image
                  src="/brand/ast-logo1.png"
                  alt="AST Sports"
                  fill
                  className="ast-brand-logo ast-brand-logo-on-dark object-contain"
                  sizes="160px"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Advanced Sports Technologies (AST) is India&apos;s premier sports infrastructure company.
              As the exclusive partner of Polytan / SportGroup Germany, we build certified world-class
              athletic tracks, Olympic hockey turfs, FIFA football fields, and LED sports lighting across
              India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[13px] text-amber-400 font-semibold bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span>Polytan Germany Exclusive Partner</span>
              </div>
            </div>

            <div className="pt-2 text-[13px] text-slate-400">
              <p>Certified Partner Brands:</p>
              <p className="text-white font-medium mt-1">
                POLIGRAS · REKORTAN · LIGATURF · SMARTRACKS · SPURTAN · PANASONIC
              </p>
            </div>
          </div>

          {/* Column 2: Sports Surfaces */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              Sports Surfaces
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/sport/athletic-tracks" className="hover:text-red-400 transition-colors">
                  Athletic Tracks
                </Link>
              </li>
              <li>
                <Link href="/sport/hockey-track" className="hover:text-red-400 transition-colors">
                  Hockey Turf
                </Link>
              </li>
              <li>
                <Link href="/sport/football" className="hover:text-red-400 transition-colors">
                  Football Turfs
                </Link>
              </li>
              <li>
                <Link href="/sport/basketball" className="hover:text-red-400 transition-colors">
                  Basketball Courts
                </Link>
              </li>
              <li>
                <Link href="/sport/wooden-flooring" className="hover:text-red-400 transition-colors">
                  Wooden Flooring
                </Link>
              </li>
              <li>
                <Link href="/sport/indoor-flooring" className="hover:text-red-400 transition-colors">
                  Indoor Synthetic Flooring
                </Link>
              </li>
              <li>
                <Link href="/sport/tennis" className="hover:text-red-400 transition-colors">
                  Tennis Courts
                </Link>
              </li>
              <li>
                <Link href="/sport/badminton" className="hover:text-red-400 transition-colors">
                  Badminton Courts
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/sports" className="text-[13px] text-red-400 font-semibold hover:underline">
                  View All Surfaces →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Technology */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              Products & Tech
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/products/athletics-track" className="hover:text-red-400 transition-colors">
                  Rekortan Running Tracks
                </Link>
              </li>
              <li>
                <Link href="/products/synthetic-turf" className="hover:text-red-400 transition-colors">
                  Synthetic Turf Overview
                </Link>
              </li>
              <li>
                <Link href="/products/synthetic-turf/hockey" className="hover:text-red-400 transition-colors">
                  Poligras Hockey Turf
                </Link>
              </li>
              <li>
                <Link href="/products/synthetic-turf/football" className="hover:text-red-400 transition-colors">
                  LigaTurf Football Systems
                </Link>
              </li>
              <li>
                <Link href="/products/smartracks" className="hover:text-red-400 transition-colors">
                  SmarTracks Timing
                </Link>
              </li>
              <li>
                <Link href="/products/smartracks/inbuilt" className="hover:text-red-400 transition-colors">
                  Inbuilt Magnetic Gates
                </Link>
              </li>
              <li>
                <Link href="/products/sports-lighting" className="hover:text-red-400 transition-colors">
                  Panasonic LED Lighting
                </Link>
              </li>
              <li>
                <Link href="/products/cleaning-and-maintenance" className="hover:text-red-400 transition-colors">
                  Cleaning & Maintenance (AMC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2.5">
              Head Office
            </h3>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>
                  E-42, 3rd Floor, Okhla Industrial Area, Phase II, New Delhi – 110020, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:+911143063708" className="hover:text-white transition-colors">
                  +91 11 430 63 708
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:info@astsports.com" className="hover:text-white transition-colors">
                  info@astsports.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/917290036622"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </address>

            <div className="mt-5 pt-3 border-t border-white/5">
              <Link
                href="/projects-map"
                className="inline-flex items-center gap-1.5 text-[13px] text-amber-400 font-semibold hover:text-amber-300"
              >
                <span>Browse Nationwide Projects Map (160+)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Advanced Sports Technologies LLP. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
            <Link href="/contact-us" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
