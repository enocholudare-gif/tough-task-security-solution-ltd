import React from 'react';
import { Shield, ArrowRight, Phone, Radio, Award } from 'lucide-react';

export default function HeroSection({ onOpenQuote }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#14171A] text-[#F5F4F0]"
    >
      {/* ========================================================
          FULL-SCREEN BACKGROUND VIDEO (VID-20261012-WA0418.mp4)
          (Spartan Elite Security Architecture)
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
          poster="/assets/cao.jpg"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Pure Sleek Grey Editorial Gradient Overlays */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(20,23,26,0.92) 0%, rgba(20,23,26,0.72) 45%, rgba(20,23,26,0.30) 80%, rgba(20,23,26,0.15) 100%), linear-gradient(to top, rgba(20,23,26,0.95) 0%, rgba(20,23,26,0.20) 50%, rgba(20,23,26,0.60) 100%)"
          }}
        />

        {/* Ambient Subtle Grid Texture */}
        <div className="absolute inset-0 dark-pattern-grid opacity-20 pointer-events-none" />
      </div>

      {/* ========================================================
          EDITORIAL HERO CANVAS (SPARTAN ELITE AESTHETIC)
         ======================================================== */}
      <div className="relative z-20 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center pt-28 lg:pt-36 pb-12">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow with Tactical Green Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#1B1F24]/85 backdrop-blur-md text-xs font-mono font-bold text-[#22C55E] shadow-sm animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full opacity-75 bg-[#22C55E]" />
              <span className="relative rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span className="tracking-widest uppercase">ZAMBIA DEFENSE & ARMED RESPONSE • 24/7 RHODESPARK HQ</span>
          </div>

          {/* Monumental Spartan Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F4F0] leading-[1.05] tracking-tight uppercase font-display drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] animate-slideUpFade">
            DISCIPLINED PROTECTION. <br />
            <span className="text-[#22C55E]">UNCOMPROMISING DEFENSE.</span>
          </h1>

          {/* Reassuring Operational Briefing Narrative */}
          <p className="text-base sm:text-lg text-[#DDDCD5] font-normal leading-relaxed max-w-2xl drop-shadow-md animate-slideUpFade">
            Tough Task Security Solutions Ltd. deploys 100% Police CID vetted sentries, rapid armed cruisers, 24/7 offsite CCTV telemetry, and armored bullion escorts to protect corporate, diplomatic, and industrial assets nationwide.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote('Comprehensive Security Proposal')}
              className="px-8 py-4 bg-[#16A34A] hover:bg-[#22C55E] text-[#14171A] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-[#16A34A]/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>REQUEST SECURITY QUOTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+260777127114"
              className="px-6 py-4 bg-[#242930]/80 hover:bg-[#2E343D] text-[#F5F4F0] border border-white/15 hover:border-[#22C55E]/50 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl backdrop-blur-md transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span>CONTROL ROOM: +260 777 127 114</span>
            </a>
          </div>

          {/* Institutional Trust Footnote */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#9E9D99]">
            <span className="flex items-center gap-1.5 text-[#F5F4F0]">
              <Award className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Ministry of Home Affairs Registered</span>
            </span>
            <span className="text-white/30">•</span>
            <span>PACRA Co. 120220042456</span>
            <span className="text-white/30">•</span>
            <span>10 Provinces Active</span>
          </div>

        </div>
      </div>

      {/* ========================================================
          BOTTOM TELEMETRY & FOOTPRINT STRIP
         ======================================================== */}
      <div className="relative z-20 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 pb-6 lg:pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 gap-4 text-xs font-mono text-[#9E9D99]">
          <div className="flex items-center space-x-2">
            <Radio className="w-4 h-4 text-[#22C55E] animate-beacon" />
            <span className="text-[#F5F4F0] font-bold">24/7 COMMAND DESK ACTIVE</span>
            <span className="text-white/30">|</span>
            <span>RHODESPARK LUSAKA HQ</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#22C55E] font-bold">&lt;5 MIN TACTICAL SLA</span>
            <span className="text-white/30">•</span>
            <span>39 OPERATIONAL DISTRICTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
