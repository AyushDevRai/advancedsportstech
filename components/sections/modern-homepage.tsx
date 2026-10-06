"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Trophy,
  Award,
  Layers,
  Activity,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
  ExternalLink,
  Sparkles,
  Zap,
  Building,
  Wrench,
  Sun,
  Eye,
  X
} from "lucide-react";
import { GlassHeader } from "@/components/layout/glass-header";
import { ModernFooter } from "@/components/layout/modern-footer";
import { ModernCTA } from "@/components/sections/modern-cta";
import { sportsData } from "@/content/sports-data";

// 30 Clients
const clientLogos = Array.from({ length: 30 }, (_, i) => `/clients/client-${i + 1}.png`);

// Featured Gallery Items
const featuredProjects = [
  {
    title: "Major Dhyan Chand National Stadium",
    location: "New Delhi",
    category: "Hockey Ground",
    image: "/Products Images/Hockey Turf/MAJOR DHYAN CHAND NATIONAL STADIUM.webp",
    detail: "Olympic standard blue Poligras hockey turf with high-performance water spray system."
  },
  {
    title: "Rajgir International Hockey Stadium",
    location: "Bihar",
    category: "Hockey Ground",
    image: "/Projects/Rajgir hockey stadium/RAJGIR HOCKEY STADIUM - BIHAR.jpeg",
    detail: "State-of-the-art FIH Global certified pitch hosted international hockey tournaments."
  },
  {
    title: "Sri Kanteerava Athletic Stadium",
    location: "Bangalore",
    category: "Athletic Track",
    image: "/Products Images/Athletic Tracks/SRI KANTEERAVA STADIUM BANGALORE.jpeg",
    detail: "World Athletics Class 1 certified Rekortan 400m synthetic running track."
  },
  {
    title: "MRK Hockey Stadium",
    location: "Chennai",
    category: "Hockey Ground",
    image: "/Projects/MRK Hockey Stadium/MRK HOCKEY STADIUM CHENNAI.JPG",
    detail: "Premier southern championship venue laid with Poligras synthetic turf."
  },
  {
    title: "INS Valsura Naval Sports Complex",
    location: "Gujarat",
    category: "Athletic Track",
    image: "/Products Images/Athletic Tracks/INS VALSURA GUJARAT.jpeg",
    detail: "High-end military training athletic track and multisport surface."
  },
  {
    title: "SAI Regional Centre Athletics Track",
    location: "Bhopal",
    category: "Athletic Track",
    image: "/Projects/Bhopal/IMG-20180926-WA0016.jpg",
    detail: "Sports Authority of India elite national athlete training facility."
  }
];

export function ModernHomepage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#08090d] text-white selection:bg-red-600 selection:text-white">
      {/* 1. Glassmorphic Sticky Header */}
      <GlassHeader />

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Full-bleed video background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/Fallback/athletic.jpg"
            className="w-full h-full object-cover opacity-45 scale-105"
          >
            <source
              src="https://res.cloudinary.com/ddrzgbhnl/video/upload/v1763355658/astw3_ubxyop_aogana.mp4"
              type="video/mp4"
            />
          </video>
          {/* Multi-layered cinematic gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          {/* Exclusive Partner Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-xl mb-6 shadow-xl animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white uppercase">
              Exclusive Partner of Polytan / SportGroup Germany
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-6">
            <span className="block text-white">ADVANCED SPORTS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400">
              TECHNOLOGY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10">
            Asia&apos;s leading sports infrastructure company. Engineered for champions, certified by{" "}
            <strong className="font-semibold text-white">World Athletics</strong>,{" "}
            <strong className="font-semibold text-white">FIH</strong> &amp;{" "}
            <strong className="font-semibold text-white">FIFA</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/sports"
              className="ast-btn-glow w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 group shadow-2xl"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects-map"
              className="ast-btn-glass w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 group"
            >
              <MapPin className="w-5 h-5 text-red-400" />
              <span>Nationwide Projects Map</span>
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-slate-300 hover:text-white font-medium text-base hover:bg-white/5 transition-colors"
            >
              Get a Quote →
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6 border-t border-white/10 text-left">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">100+</div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Completed Stadium &amp; Track Projects
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-red-400">1,000K+</div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Sq. Meters of World-Class Surfaces
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">20+</div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Years of Industry-Leading Experience
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">100%</div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                IAAF &amp; FIH Federation Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Infinite Client & Partner Marquee */}
      <section className="py-10 bg-[#0d0f17] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Trusted by Leading Sports Federations, Governments &amp; Institutions Across India
          </p>
        </div>

        <div className="ast-marquee">
          <div className="ast-marquee-content items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={`client-${index}`}
                className="relative h-12 w-28 shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`AST Sports Client ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About AST Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/Projects/Major Dhyan Chandra Stadium/MAJOR DHYAN CHAND NATIONAL STADIUM.webp"
                  alt="Major Dhyan Chand National Stadium New Delhi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-red-400 bg-red-950/60 px-2.5 py-1 rounded-full border border-red-800/40">
                    National Landmark
                  </span>
                  <h3 className="text-lg font-bold mt-2">Major Dhyan Chand National Stadium</h3>
                  <p className="text-xs text-slate-300">New Delhi, India</p>
                </div>
              </div>

              {/* Floating Award Pill */}
              <div className="absolute -bottom-6 -left-6 bg-[#12141f] border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl hidden sm:flex items-center gap-4">
                <div className="p-3 bg-red-600/20 text-red-400 rounded-xl">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">German Certified</div>
                  <div className="text-xs text-slate-400">Polytan / SportGroup Exclusive</div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Asia&apos;s Premier Sports Infrastructure
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Built For The Game.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                  Facilitating Excellence.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Advanced Sports Technologies (AST) is India&apos;s premier provider of synthetic sports
                surfaces and Olympic-standard sports infrastructure. As the exclusive representative of
                <strong className="text-white font-semibold"> Polytan / SportGroup Germany</strong>, we
                bring world-renowned brands like{" "}
                <span className="text-white font-semibold">
                  POLIGRAS, LIGATURF, REKORTAN, and SMARTRACKS
                </span>{" "}
                directly to India&apos;s leading federations, armed forces, and universities.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Specialized Equipment
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Ownership of specialized imported German paving and laser-grading machinery.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Broadcast LED Lighting
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Partnership with Panasonic Japan for flicker-free 4K tournament floodlighting.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/contact-us"
                  className="ast-btn-glow px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2"
                >
                  <span>Connect With Our Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects-map"
                  className="text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <span>View Project Map</span>
                  <ChevronRight className="w-4 h-4 text-red-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sports Surfaces Showcase (8 Sports Grid) */}
      <section className="py-24 bg-[#0a0c12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Sports Surfaces
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Your Sport. <span className="text-red-500">Our Surface.</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm sm:text-base">
              Explore high-performance sports surfaces certified by World Athletics, FIH, FIFA, FIBA,
              and BWF.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(sportsData).map((sport) => (
              <Link
                key={sport.slug}
                href={`/sport/${sport.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#12141f] shadow-lg hover:border-red-500/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-end aspect-[3/4]"
              >
                {/* Background Image */}
                <Image
                  src={sport.poster}
                  alt={sport.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Content */}
                <div className="relative z-10 p-5 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-800/50 px-2 py-0.5 rounded-full">
                    {sport.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors flex items-center justify-between">
                    <span>{sport.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {sport.overview}
                  </p>
                  <div className="pt-2 text-[11px] font-semibold text-red-400 flex items-center gap-1">
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/sports"
              className="ast-btn-glass inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm"
            >
              <span>Explore All Sports Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive Services (What We Do) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Our Comprehensive Services
            </h2>
            <p className="text-slate-400 text-base mt-4">
              From site survey and international concept design to laser-guided installation and lifelong
              maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stadium Construction",
                desc: "Turnkey civil engineering and construction of international standard sports stadiums adhering to strict tolerance guidelines.",
                icon: Building
              },
              {
                title: "Athletic Tracks",
                desc: "Design, basemat preparation, full-pour polyurethane paving, and IAAF certified line marking.",
                icon: Trophy
              },
              {
                title: "Hockey Fields",
                desc: "Olympic water-based and sand-dressed Poligras synthetic turf installations with advanced sub-base drainage.",
                icon: Award
              },
              {
                title: "Football Pitches",
                desc: "FIFA Quality and Quality Pro artificial grass pitches with hybrid infill systems for 24/7 playability.",
                icon: Activity
              },
              {
                title: "Sports Lighting",
                desc: "Partnering with Panasonic Japan to deliver 4K HD broadcast compliant LED sports floodlighting.",
                icon: Sun
              },
              {
                title: "Cleaning & Maintenance",
                desc: "Transforming maintenance from 'Fail & Fixed' to 'Predict & Prevent' using specialized Teraclean German machinery.",
                icon: Wrench
              }
            ].map((srv, i) => (
              <div
                key={i}
                className="ast-card-glass p-8 space-y-4 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{srv.desc}</p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 pt-2"
                >
                  <span>Enquire for this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Projects & Interactive Gallery */}
      <section className="py-24 bg-[#0a0c12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Featured Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">Landmark Installations</h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {["All", "Hockey Ground", "Athletic Track"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-[#12141f] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedImage(proj.image)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2.5 rounded-full backdrop-blur-md text-white">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-red-400 flex items-center gap-1 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {proj.location}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{proj.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects-map"
              className="ast-btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Explore Interactive Projects Map (160+ Sites)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-video">
            <Image
              src={selectedImage}
              alt="Project View"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* 8. Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-[#08090d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">In Their Words</h2>
            <p className="text-slate-400 text-sm mt-3">
              Hear from the partners and sports administrators who have experienced the AST Sports
              difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "AST Sports delivered beyond our expectations. Their professionalism, German equipment precision, and commitment to quality are unmatched. The new hockey stadium is a masterpiece.",
                author: "Sports Federation Representative",
                role: "National Stadium Authority"
              },
              {
                quote:
                  "The athletic track is world-class. Our athletes have recorded significant performance improvements and zero joint issues. Thank you, AST Sports!",
                author: "State Athletic Association",
                role: "High-Performance Training Wing"
              },
              {
                quote:
                  "Working with AST was a seamless experience from soil survey to final laser line marking. They transformed our facilities and delivered on time.",
                author: "Premier Educational Institute",
                role: "Director of Physical Education"
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className="ast-card-glass p-8 flex flex-col justify-between space-y-6 hover:border-red-500/40"
              >
                <p className="text-slate-200 text-sm leading-relaxed italic">“{t.quote}”</p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center font-bold text-red-400">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. High-Impact CTA Section */}
      <ModernCTA />

      {/* 10. Footer */}
      <ModernFooter />
    </div>
  );
}
