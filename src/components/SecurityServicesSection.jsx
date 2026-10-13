import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SecurityServicesSection({ onOpenQuote }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const services = [
    {
      id: 'guarding-services',
      number: '01',
      title: 'Manned Guarding & Sentry Services',
      image: '/assets/services/service-manned-guarding.jpg',
      badge: '100% POLICE CID VETTED',
      description: 'Disciplined static and mobile sentries providing strict access control, visitor verification, and perimeter deterrence for corporate towers, industrial compounds, and gated estates.'
    },
    {
      id: 'tactical-patrols',
      number: '02',
      title: 'Tactical Armed Patrols & Escorts',
      image: '/assets/cao.jpg',
      badge: '<5 MIN TACTICAL SLA',
      description: 'High-visibility armored patrol cruisers and tactical response units deployed for high-risk deterrence, counter-intrusion support, and rapid incident escalation across primary corridors.'
    },
    {
      id: 'cctv-monitoring',
      number: '03',
      title: '24/7 Offsite CCTV Surveillance',
      image: '/assets/service-cctv.jpg',
      badge: 'REAL-TIME VIDEO TELEMETRY',
      description: 'Round-the-clock remote video telemetry detecting unauthorized access, line-crossing breaches, and suspicious perimeter loitering with direct two-way audio voice-down intervention.'
    },
    {
      id: 'alarm-response',
      number: '04',
      title: 'Rapid Alarm & Panic Response',
      image: '/assets/services/service-alarm-response.jpg',
      badge: 'ONE-TOUCH GPS DISPATCH',
      description: 'Direct wireless distress integration linking commercial premises and residential facilities with our 24/7 Rhodespark command desk for immediate cruiser routing.'
    },
    {
      id: 'vip-protection',
      number: '05',
      title: 'VIP & Close Protection Details',
      image: '/assets/services/service-vip-protection.jpg',
      badge: 'EXECUTIVE BODYGUARD DETAILS',
      description: 'Discreet, highly trained close protection officers and armored motorcade escorts for visiting foreign dignitaries, diplomats, corporate executives, and high-net-worth delegations.'
    },
    {
      id: 'cash-in-transit',
      number: '06',
      title: 'Cash-In-Transit & Bullion Logistics',
      image: '/assets/services/service-cash-in-transit.jpg',
      badge: 'ARMORED BULLION TRANSIT',
      description: 'Ironclad armored bullion carriers and tactical armed escorts safeguarding inter-bank cash movements, mining gold/copper payouts, and large retail deposits nationwide.'
    }
  ];

  // Auto-advance progress timer (4.5s cycle, pauses on hover)
  useEffect(() => {
    if (!isHovered) return;

    const intervalTime = 50;
    const step = (intervalTime / 4500) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % services.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timerRef.current);
  }, [isHovered, services.length]);

  const activeService = services[activeIndex];

  return (
    <section 
      id="our-security-services"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-20 lg:py-28 bg-[#E5E7EB] text-[#0F172A] overflow-hidden relative border-y border-gray-300"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-[1600px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: EDITORIAL OVERVIEW & FIELD ASSET PORTAL
             ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eyebrow with leading tactical green line */}
            <p className="text-[#16A34A] text-xs uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#16A34A] inline-block" />
              <span>CORE DEFENSE CAPABILITIES</span>
            </p>

            {/* Headline with slightly reduced, elegant font size */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display leading-tight uppercase text-[#0F172A]">
              PROFESSIONAL SECURITY <span className="text-[#16A34A]">SERVICES</span>
            </h2>

            {/* Description Narrative */}
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
              We deploy vetted static sentries, rapid armed cruiser escorts, 24/7 offsite CCTV telemetry, and armored bullion logistics to safeguard commercial enterprises, diplomatic assets, and industrial facilities across Zambia.
            </p>

            {/* Synchronized Real Photographic Asset Portal in White Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-300 shadow-xl aspect-[16/10] group">
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-103 transition-transform duration-700 animate-fadeIn"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Status HUD Tags */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-[#16A34A]/50 text-[10px] font-mono font-bold text-[#4ADE80] backdrop-blur-md">
                  0{activeIndex + 1} // ACTIVE SPECIFICATION
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-white/20 text-[10px] font-mono text-white backdrop-blur-md">
                  {activeService.badge}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] font-mono text-gray-200">
                <span className="truncate text-white font-bold">{activeService.title}</span>
                <span className="text-[#4ADE80] shrink-0 ml-2 font-bold">RHODESPARK HQ</span>
              </div>

              {/* Bottom Countdown Progress Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                <div 
                  className="h-full bg-gradient-to-r from-[#16A34A] to-[#4ADE80] transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Direct Quote Request Action Link (Zamclouds styling) */}
            <div className="pt-1">
              <button
                onClick={() => onOpenQuote(activeService.title)}
                className="inline-flex items-center gap-3 text-[#0F172A] hover:text-[#16A34A] font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors cursor-pointer group"
              >
                <span>REQUEST PROPOSAL FOR THIS SERVICE</span>
                <ArrowRight className="w-4 h-4 text-[#16A34A] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: SIGNATURE ZAMCLOUDS ANIMATED TYPOGRAPHIC LIST
             ======================================================== */}
          <div className="lg:col-span-7 relative">
            <div className="flex flex-col gap-4 pl-0 lg:pl-10 border-l-0 lg:border-l border-gray-300">
              {services.map((srv, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => {
                      setActiveIndex(idx);
                      setProgress(0);
                    }}
                    onClick={() => {
                      setActiveIndex(idx);
                      setProgress(0);
                    }}
                    className={`transition-all duration-400 ease-in-out cursor-pointer p-4 rounded-xl ${
                      isActive 
                        ? 'bg-white shadow-md border border-gray-200 translate-x-2' 
                        : 'bg-white/40 hover:bg-white/80 border border-transparent hover:border-gray-200'
                    }`}
                  >
                    {/* Capability Heading with refined font size */}
                    <div className="flex items-center justify-between">
                      <h3 
                        className={`text-lg sm:text-xl lg:text-2xl font-bold font-display tracking-tight transition-colors duration-300 ${
                          isActive 
                            ? 'text-[#16A34A]' 
                            : 'text-[#334155] hover:text-[#0F172A]'
                        }`}
                      >
                        {srv.title}
                      </h3>
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#16A34A]' : 'text-gray-400'}`}>
                        {srv.number}
                      </span>
                    </div>

                    {/* Smoothly Expanding Minimalist Description */}
                    <div 
                      className={`grid transition-all duration-400 ease-in-out ${
                        isActive 
                          ? 'grid-rows-[1fr] opacity-100 mt-2' 
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <p className="overflow-hidden text-[#475569] font-normal text-xs sm:text-sm leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
