import React from 'react';
import HeroSection from '../components/HeroSection';
import KeyFeaturesSection from '../components/KeyFeaturesSection';
import SecurityServicesSection from '../components/SecurityServicesSection';
import ProjectPortfolioSection from '../components/ProjectPortfolioSection';
import ClientsCarouselSection from '../components/ClientsCarouselSection';
import AboutSection from '../components/AboutSection';
import CoverageSection from '../components/CoverageSection';
import { Shield, Phone, ArrowRight } from 'lucide-react';

export default function HomePage({ setActivePage, onOpenQuote }) {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (12 AUTO-ADVANCING SLIDES WITH UNCLIPPED RESPONSIVE GRID TABS) */}
      <HeroSection onOpenQuote={onOpenQuote} setActivePage={setActivePage} />

      {/* 2. KEY FEATURES (LUMINOUS WHITE FLOWING WATER BACKGROUND & FROSTED GLASS CARDS) */}
      <KeyFeaturesSection onOpenQuote={onOpenQuote} />

      {/* 3. OUR SECURITY SERVICES (5 INTERACTIVE ANIMATED CARDS WITH KOMMODO ASSETS) */}
      <SecurityServicesSection onOpenQuote={onOpenQuote} />

      {/* 4. OUR PROJECT PORTFOLIO (REAL-WORLD OPERATIONAL EXCELLENCE) */}
      <ProjectPortfolioSection onOpenQuote={onOpenQuote} />

      {/* 5. OUR CLIENTS (ANIMATED INFINITE LOGO MARQUEE CAROUSEL) */}
      <ClientsCarouselSection onOpenQuote={onOpenQuote} />

      {/* 6. ABOUT US (MISSION, VISION, 3 CORE PILLARS & 10-SECOND PHOTO REEL) */}
      <AboutSection onOpenQuote={onOpenQuote} setActivePage={setActivePage} />

      {/* 7. KEY NATIONAL METRIC TICKER */}
      <section className="bg-[#05080e] border-y border-slate-800/80 py-8">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 text-center space-y-1 hover:border-blue-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                <span className="text-blue-400 mr-1">10</span> / 10
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                Provinces Covered
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                Nationwide Zambian footprint
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 text-center space-y-1 hover:border-cyan-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                39
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                Operational Districts
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                Active municipal & mining nodes
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 text-center space-y-1 hover:border-emerald-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                24/7/365
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                Rhodes Park Command
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                Instant dispatch & radio link
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 text-center space-y-1 hover:border-amber-500/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                100%
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                Zambian Owned
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                PACRA registered security firm
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. NATIONWIDE ZAMBIA MAP & 39 DISTRICTS DIRECTORY */}
      <CoverageSection onOpenQuote={onOpenQuote} />

      {/* 9. FULL-WIDTH FINAL CALL-TO-ACTION */}
      <section className="py-20 bg-gradient-to-b from-[#060910] via-[#091020] to-[#060910] border-t border-slate-800/90 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DISPATCH COMMAND ACTIVE • NATIONWIDE DEPLOYMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight leading-tight max-w-4xl mx-auto">
            DARE TO ELEVATE YOUR <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              SECURITY STANDARD
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Partner with Tough Task Security Solutions for disciplined guarding, electronic GPS telemetry, and rapid emergency intervention.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-cyan-400 hover:via-blue-600 hover:to-indigo-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>REQUEST SITE ASSESSMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+260777127114"
              className="w-full sm:w-auto px-8 py-4 bg-[#0d1424] hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full border border-slate-700 transition-all flex items-center justify-center space-x-2.5 shadow-lg"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>CALL 24/7 COMMAND: +260 777 127 114</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-500 font-mono flex flex-wrap justify-center items-center gap-4">
            <span>Office No. 5, National Council for the Laity Building, Rhodes Park, Lusaka</span>
            <span>•</span>
            <span>info@toughtaskltd.com</span>
          </div>

        </div>
      </section>

    </div>
  );
}
