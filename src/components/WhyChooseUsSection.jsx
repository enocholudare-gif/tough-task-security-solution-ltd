import React, { useState, useEffect } from 'react';
import { Shield, Radio, ArrowRight, Award, Lock, Clock, TrendingDown, Zap } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenQuote }) {
  const [bgIndex, setBgIndex] = useState(0);

  // Background photographic assets
  const bgImages = [
    '/assets/security-parade.jpg',
    '/assets/cao.jpg',
    '/assets/services/service-manned-guarding.jpg',
    '/assets/services/service-vip-protection.jpg',
    '/assets/services/service-cash-in-transit.jpg'
  ];

  // Auto-advance background carousel every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((curr) => (curr + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  const differentiators = [
    {
      id: 'vetting',
      number: '01',
      title: '100% Police-Vetted Sentries',
      tag: 'VERIFIED INTEGRITY',
      description: 'Every officer undergoes rigorous screening with mandatory fingerprint clearance certificates through the Zambia Police Service Criminal Investigation Department (CID).',
      metrics: 'Zero-tolerance integrity vetting',
      icon: Shield
    },
    {
      id: 'command-desk',
      number: '02',
      title: '24/7 Rhodespark Command HQ',
      tag: 'ROUND-THE-CLOCK OVERSIGHT',
      description: 'Our central operations control room in Rhodespark, Lusaka provides uninterrupted radio dispatch, live telemetry supervision, and immediate multi-agency escalation.',
      metrics: 'Continuous 24/7/365 active dispatch',
      icon: Radio
    },
    {
      id: 'drill-standards',
      number: '03',
      title: 'Military Drill & Smart Turnout',
      tag: 'DISCIPLINED POSTURE',
      description: 'Uniformed sentries trained in strict military drill posture, ceremonial uniform standards, access control etiquette, and diplomatic de-escalation methods.',
      metrics: 'Daily parade & inspection rubrics',
      icon: Award
    },
    {
      id: 'telemetry',
      number: '04',
      title: 'Electronic NFC Patrol Checkpoints',
      tag: 'DIGITAL ACCOUNTABILITY',
      description: 'Electronic patrol tags along perimeter boundaries ensure guards actively sweep designated sectors on schedule with instant supervisor notifications.',
      metrics: '100% verifiable digital tour logs',
      icon: Lock
    },
    {
      id: 'tactical-speed',
      number: '05',
      title: 'Sub-5 Minute Tactical Intervention',
      tag: 'RAPID ESCALATION',
      description: 'Dedicated armed response cruisers operating along strategic commercial corridors in Lusaka and Copperbelt to intercept alarms and distress triggers.',
      metrics: 'Under 5 min emergency dispatch',
      icon: Clock
    },
    {
      id: 'loss-mitigation',
      number: '06',
      title: 'Measurable Loss & Shrinkage Mitigation',
      tag: 'PROVEN COMMERCIAL VALUE',
      description: 'Structured search bays, vehicle cargo manifests, and strict access governance that measurably eliminate inventory shrinkage and compound liabilities.',
      metrics: 'Documented risk reduction',
      icon: TrendingDown
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      className="py-20 lg:py-28 relative text-[#0F172A] border-t border-gray-200/80 overflow-hidden bg-[#F0F2F5]"
    >
      {/* ========================================================
          BACKGROUND IMAGE CAROUSEL WITH SLEEK LIGHT GREY OVERLAY
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {bgImages.map((img, idx) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === bgIndex ? 1 : 0 }}
          >
            <img
              src={img}
              alt="Tough Task Operational Background"
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] scale-105 transition-transform duration-10000"
              loading="lazy"
            />
          </div>
        ))}

        {/* Sleek Visible Grey / Frosted Editorial Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(240,242,245,0.92) 0%, rgba(240,242,245,0.85) 50%, rgba(240,242,245,0.95) 100%)"
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A34A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-300/80 gap-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-300 text-green-800 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>THE TOUGH TASK ADVANTAGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-snug">
              WHY ENTERPRISES CHOOSE <span className="text-[#16A34A]">TOUGH TASK SECURITY</span>
            </h2>

            <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed">
              We combine strict military discipline and biometric vetting with digital telemetry and a 24/7 national command desk to provide dependable protection across Zambia.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-end px-5 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-md shadow-[#16A34A]/25 shrink-0 cursor-pointer"
          >
            <span>DISCUSS YOUR SECURITY NEEDS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6-Card Differentiator Grid with Crisp White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff) => {
            const Icon = diff.icon;

            return (
              <div
                key={diff.id}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/90 hover:border-[#16A34A] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-green-800 px-2.5 py-1 rounded-md bg-green-50 border border-green-200">
                      {diff.number} // {diff.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 group-hover:bg-[#16A34A] group-hover:border-[#16A34A] flex items-center justify-center text-[#16A34A] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] group-hover:text-[#16A34A] transition-colors leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>STANDARD:</span>
                  <span className="text-[#16A34A] font-bold">{diff.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Carousel Indicator Pips */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {bgImages.map((_, bIdx) => (
            <button
              key={bIdx}
              onClick={() => setBgIndex(bIdx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                bgIndex === bIdx ? 'w-8 bg-[#16A34A]' : 'w-2 bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Switch background image ${bIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
