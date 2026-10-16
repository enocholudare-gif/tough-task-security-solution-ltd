import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function ClientsCarouselSection({ onOpenQuote }) {
  const [isHovered, setIsHovered] = useState(false);

  // Verified Client Organizations & Commercial Partners in Zambia
  const clientLogos = [
    { id: 'client-etg', name: 'ETG Agri Inputs', category: 'Agricultural Logistics', logo: '/assets/clients/logo 4.jpeg' },
    { id: 'client-skylark', name: 'Skylark', category: 'Commercial Enterprise', logo: '/assets/2.jpg' },
    { id: 'client-ipl', name: 'IPL International', category: 'Industrial & Trade', logo: '/assets/3.jpg' },
    { id: 'client-villa', name: 'Villa Emile', category: 'Hospitality & Estates', logo: '/assets/4.jpg' },
    { id: 'client-farmarama', name: 'Farmarama', category: 'Commercial Agri-Retail', logo: '/assets/5.jpg' },
    { id: 'client-lumiere', name: 'Lumiére', category: 'Retail & Commercial', logo: '/assets/clients/logo 6.jpeg' },
    { id: 'client-zioh', name: 'Italian Orthopedic Hospital', category: 'Healthcare Facility', logo: '/assets/clients/logo 7.jpeg' }
  ];

  // Seamless infinite loop list
  const marqueeList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section 
      id="our-clients" 
      className="py-16 lg:py-20 bg-[#E5E7EB] text-[#0F172A] border-y border-gray-300 relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-8 h-[2px] bg-[#16A34A]" />
            <span>COMMERCIAL &amp; INSTITUTIONAL TRUST</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-tight">
            TRUSTED BY LEADING <span className="text-[#16A34A]">ORGANISATIONS</span>
          </h2>

          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Providing reliable physical guarding, CCTV surveillance telemetry, and tactical escalation for premier commercial institutions, industrial operations, and healthcare estates across Zambia.
          </p>
        </div>

        {/* Infinite Animated Client Logo Carousel Marquee */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full overflow-hidden py-3"
        >
          {/* Gradient Fade Masks for Grey Background */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#E5E7EB] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#E5E7EB] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className={`flex items-center space-x-5 sm:space-x-7 w-max ${
            isHovered ? 'animate-none' : 'animate-marquee'
          }`}>
            {marqueeList.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="w-52 sm:w-60 h-24 sm:h-28 rounded-xl bg-white border border-gray-200/90 hover:border-[#16A34A]/50 p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-sm group shrink-0"
              >
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="mt-1.5 text-center">
                  <span className="text-[11px] font-bold text-[#0F172A] tracking-wide block truncate max-w-[190px]">
                    {client.name}
                  </span>
                  <span className="text-[9px] font-mono uppercase text-[#64748B] tracking-wider block">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="pt-4 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#475569]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center text-[#0F172A] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] mr-2" />
              SLA-Guaranteed Manned Guarding
            </span>
            <span className="flex items-center text-[#0F172A] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] mr-2" />
              Direct Zambia Police Coordination
            </span>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="text-[#16A34A] hover:text-[#15803D] font-bold flex items-center transition-colors cursor-pointer group"
          >
            <span>Partner With Tough Task</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
