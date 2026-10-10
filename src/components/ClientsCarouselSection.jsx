import React, { useState } from 'react';
import { Award, Shield, CheckCircle2, ChevronRight, Building, Sparkles } from 'lucide-react';

export default function ClientsCarouselSection({ onOpenQuote }) {
  const [isHovered, setIsHovered] = useState(false);

  // Client Logos from the project
  const clientLogos = [
    { id: 'client-1', name: 'Partner Organization 01', logo: '/assets/clients/logo 1.jpeg' },
    { id: 'client-2', name: 'Partner Organization 02', logo: '/assets/clients/logo 2.jpeg' },
    { id: 'client-4', name: 'Corporate Client 04', logo: '/assets/clients/logo 4.jpeg' },
    { id: 'client-5', name: 'Enterprise Client 05', logo: '/assets/clients/logo 5.jpeg' },
    { id: 'client-6', name: 'Institutional Client 06', logo: '/assets/clients/logo 6.jpeg' },
    { id: 'client-7', name: 'Commercial Partner 07', logo: '/assets/clients/logo 7.jpeg' },
  ];

  // Duplicate list to create a seamless infinite marquee
  const marqueeList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section 
      id="our-clients" 
      className="py-16 lg:py-20 bg-white text-slate-900 border-y border-slate-200/90 relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Award className="w-3.5 h-3.5 mr-1 text-red-600" />
            <span>NATIONWIDE CORPORATE PARTNERSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
            TRUSTED BY LEADING <span className="text-red-600">ORGANISATIONS</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Providing high-reliability physical guarding, AI video telemetry, and rapid emergency intervention for commercial institutions and estates across Zambia.
          </p>
        </div>

        {/* Infinite Animated Client Logo Carousel Marquee */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full overflow-hidden py-3"
        >
          {/* Gradient Fade Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className={`flex items-center space-x-6 sm:space-x-8 w-max ${
            isHovered ? 'animate-none' : 'animate-marquee'
          }`}>
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="w-48 sm:w-56 h-28 sm:h-32 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:bg-white p-4 sm:p-5 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-xl group cursor-pointer shrink-0 spartan-card"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 contrast-125 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-700">100% Verified SLAs & Direct Police Coordination</span>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="text-red-600 hover:text-red-700 font-bold flex items-center transition-colors cursor-pointer group"
          >
            <span>Partner With Tough Task</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
