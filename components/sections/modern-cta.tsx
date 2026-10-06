"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function ModernCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#090a0f]">
      {/* Dynamic ambient gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/70 via-[#400000]/60 to-[#090a0f] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          {/* Left Column: Copy & Checklist */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Build With The Best
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Let&apos;s Build World-Class{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                Sports Facilities
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              From national Olympic stadiums to university athletic complexes, AST delivers turnkey sports infrastructure engineered to the highest international federation benchmarks.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 text-slate-200 text-sm font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>World Athletics & FIH certified systems</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Turnkey design, base & delivery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Proven nationwide portfolio (160+ sites)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Dedicated lifecycle & AMC support</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact-us"
                className="ast-btn-glow inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm shadow-xl group"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects-map"
                className="ast-btn-glass inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm hover:text-white"
              >
                Explore Projects Map
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Trusted by Sports Authority of India, State Governments, and Premier Universities nationwide.
            </p>
          </div>

          {/* Right Column: Visual Render & Pill */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
              <Image
                src="/images/ChatGPT Image Aug 18, 2025, 05_37_20 PM-3.png"
                alt="AST Sports Stadium Installation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  Featured Project
                </p>
                <p className="text-sm font-semibold mt-0.5">
                  Olympic Standard Track & Hockey Complex
                </p>
              </div>
            </div>

            {/* Floating highlight badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#0d0f17]/95 border border-white/15 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md">
              <div className="text-xl font-black text-amber-400">100+</div>
              <div className="text-[11px] font-semibold text-slate-300">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
