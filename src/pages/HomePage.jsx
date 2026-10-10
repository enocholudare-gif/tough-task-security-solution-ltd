import React from 'react';
import HeroSection from '../components/HeroSection';
import SecurityServicesSection from '../components/SecurityServicesSection';
import ClientsCarouselSection from '../components/ClientsCarouselSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import QuickCallBackSection from '../components/QuickCallBackSection';
import CoverageSection from '../components/CoverageSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectPortfolioSection from '../components/ProjectPortfolioSection';
import { Shield, Phone, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function HomePage({ setActivePage, onOpenQuote }) {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (SPARTAN ELITE SECURITY & TACTICAL RESPONSE HEADLINE + 12 SLIDES) */}
      <HeroSection onOpenQuote={onOpenQuote} setActivePage={setActivePage} />

      {/* 2. OUR SECURITY SERVICES (SPARTAN 6-CARD TACTICAL GRID) */}
      <SecurityServicesSection onOpenQuote={onOpenQuote} />

      {/* 3. TRUSTED BY LEADING ORGANISATIONS (INFINITE CLIENT LOGO MARQUEE) */}
      <ClientsCarouselSection onOpenQuote={onOpenQuote} />

      {/* 4. WHY CHOOSE TOUGH TASK (SPARTAN 5-PILLAR DEFENSE FRAMEWORK) */}
      <WhyChooseUsSection onOpenQuote={onOpenQuote} />

      {/* 5. CONTACT & REQUEST A CALL BACK (SPARTAN SIDE-BY-SIDE LEAD CAPTURE & 24/7 HOTLINE) */}
      <QuickCallBackSection />

      {/* 6. AREAS WE SERVICE (ZAMBIA 10 PROVINCES & 39 DISTRICTS DIRECTORY) */}
      <CoverageSection onOpenQuote={onOpenQuote} />

      {/* 7. WHAT OUR CLIENTS SAY (SPARTAN TRUSTINDEX / GOOGLE REVIEWS SECTION) */}
      <TestimonialsSection />

      {/* 8. PROVEN OPERATIONAL PORTFOLIO */}
      <ProjectPortfolioSection onOpenQuote={onOpenQuote} />

      {/* 9. KEY NATIONAL METRIC TICKER (SPARTAN IMPACT NUMBERS) */}
      <section className="bg-[#04070d] border-y border-slate-800/90 py-10">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 text-center space-y-1.5 hover:border-red-500/50 transition-all shadow-lg spartan-card">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                <span className="text-red-500 mr-1">10</span> / 10
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Provinces Covered
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Nationwide Zambian footprint
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 text-center space-y-1.5 hover:border-red-500/50 transition-all shadow-lg spartan-card">
              <div className="text-3xl sm:text-4xl font-black text-red-400 font-mono">
                39
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Operational Districts
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Active municipal & mining nodes
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 text-center space-y-1.5 hover:border-red-500/50 transition-all shadow-lg spartan-card">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                &lt; 5 MIN
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Tactical Armed Dispatch
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Rapid emergency escalation
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 text-center space-y-1.5 hover:border-red-500/50 transition-all shadow-lg spartan-card">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                100%
              </div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Zambian Owned & Managed
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                PACRA & Ministry registered
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 10. SPARTAN FINAL CALL-TO-ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#060910] via-[#0e070c] to-[#060910] border-t border-slate-800/90 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>24/7 COMMAND DESK ACTIVE • NATIONAL DISPATCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight leading-tight max-w-4xl mx-auto">
            DARE TO ELEVATE YOUR <br />
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              SECURITY STANDARD
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Partner with Tough Task Security Solutions for disciplined physical guarding, electronic GPS telemetry, and rapid emergency intervention.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-2xl shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer border border-red-500/40 btn-shimmer"
            >
              <Shield className="w-4 h-4" />
              <span>REQUEST RAPID SECURITY QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+260777127114"
              className="w-full sm:w-auto px-8 py-4 bg-[#0d1424] hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-slate-700 transition-all flex items-center justify-center space-x-2.5 shadow-lg spartan-card"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>CALL EMERGENCY ROOM: +260 777 127 114</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-400 font-mono flex flex-wrap justify-center items-center gap-4">
            <span>Office No. 5, National Council for the Laity Building, Rhodespark, Lusaka</span>
            <span>•</span>
            <span>info@toughtaskltd.com</span>
          </div>

        </div>
      </section>

    </div>
  );
}
