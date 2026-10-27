import React from 'react';
import HeroSection from '../components/HeroSection';
import CorporateIntroSection from '../components/CorporateIntroSection';
import SecurityServicesSection from '../components/SecurityServicesSection';
import ClientsCarouselSection from '../components/ClientsCarouselSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProjectPortfolioSection from '../components/ProjectPortfolioSection';
import CoverageSection from '../components/CoverageSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import TestimonialsSection from '../components/TestimonialsSection';
import QuickCallBackSection from '../components/QuickCallBackSection';
import { Shield, Phone, ArrowRight } from 'lucide-react';

export default function HomePage({ setActivePage, onOpenQuote }) {
  return (
    <div className="space-y-0 bg-[#F0F2F5] text-[#0F172A]">
      
      {/* 1. HERO SECTION: Full-Bleed Video Hero with Sleek Grey & Tactical Green */}
      <HeroSection onOpenQuote={onOpenQuote} setActivePage={setActivePage} />

      {/* 2. CORPORATE AUTHORITY & CREDIBILITY BRIEFING */}
      <CorporateIntroSection onOpenQuote={onOpenQuote} />

      {/* 3. CORE SERVICES: Professional 6-Service Portfolio */}
      <SecurityServicesSection onOpenQuote={onOpenQuote} />

      {/* 4. OPERATIONAL PROCESS: 4-Step Methodology */}
      <ProcessSection onOpenQuote={onOpenQuote} />

      {/* 5. TRUSTED BY LEADING ORGANISATIONS: Verified Zambian Client Marquee */}
      <ClientsCarouselSection onOpenQuote={onOpenQuote} />

      {/* 6. WHY CHOOSE TOUGH TASK: 6 Verified Differentiators */}
      <WhyChooseUsSection onOpenQuote={onOpenQuote} />

      {/* 7. OPERATIONAL FOOTPRINT: Zambia 10 Provinces & 42 Districts Directory & Official Map */}
      <CoverageSection onOpenQuote={onOpenQuote} />

      {/* 8. OPERATIONAL CASE STUDIES: Proven Sector Deployments */}
      <ProjectPortfolioSection onOpenQuote={onOpenQuote} />

      {/* 9. VERIFIED REVIEWS: What Our Commercial Clients Say */}
      <TestimonialsSection />

      {/* 10. FREQUENTLY ASKED QUESTIONS: Transparent Client FAQ */}
      <FAQSection onOpenQuote={onOpenQuote} />

      {/* 11. COMMAND DESK & DIRECT CONSULTATION INQUIRY */}
      <QuickCallBackSection />

      {/* 12. CLOSING CONSULTATION BANNER */}
      <section className="py-20 bg-[#0F172A] border-t border-gray-200/80 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-[#22C55E] text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
            <span>24/7 COMMAND DESK ACTIVE • RHODESPARK LUSAKA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display uppercase tracking-tight leading-tight max-w-4xl mx-auto">
            SECURE YOUR PREMISES WITH <br />
            <span className="text-[#22C55E]">
              TOUGH TASK SECURITY SOLUTIONS
            </span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Partner with Zambia's disciplined private security force for static guarding, CCTV surveillance telemetry, armed escorts, and immediate tactical intervention.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>REQUEST SECURITY QUOTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+260777127114"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center space-x-2.5 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span>CONTROL ROOM: +260 777 127 114</span>
            </a>
          </div>

          <div className="pt-5 text-xs text-gray-400 font-mono flex flex-wrap justify-center items-center gap-3">
            <span>Office No. 5, National Council for the Laity Building, Rhodespark, Lusaka</span>
            <span>•</span>
            <span>info@toughtaskltd.com</span>
          </div>
        </div>
      </section>

    </div>
  );
}
