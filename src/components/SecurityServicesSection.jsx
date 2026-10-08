import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, Lock, Truck, Users, UserCheck, BellRing, Sparkles, MapPin, Eye, Zap, ChevronLeft } from 'lucide-react';

export default function SecurityServicesSection({ onOpenQuote }) {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'manned-guarding',
      number: '01',
      title: 'Manned Guarding',
      image: '/assets/services/service-manned-guarding.jpg',
      kommodoUrl: 'https://kommodo.ai/i/edjHGlQ2YCfxUNG8ifuQ',
      description: 'Our professionally trained security officers ensure continuous surveillance and safety at residential, corporate, and industrial locations, providing a visible security presence.',
      icon: Users,
      badge: '24/7 STATIC & PATROL FORCE',
      accentColor: 'text-blue-400',
      glowColor: 'rgba(59,130,246,0.35)',
      highlights: [
        'Vetted & disciplined security force',
        'Electronic NFC perimeter checkpoint tags',
        'Unannounced day and night supervisor audits',
        'Visible crime deterrence & access screening'
      ],
      sla: 'Continuous on-post attendance & digital incident logging'
    },
    {
      id: 'cash-in-transit',
      number: '02',
      title: 'Cash-In-Transit Services',
      image: '/assets/services/service-cash-in-transit.jpg',
      kommodoUrl: 'https://kommodo.ai/i/Pk2KK6k0AhWQTbPvQn0D',
      description: 'Specialized transportation solution for cash and valuables, designed to ensure secure delivery with minimal risk.',
      icon: Truck,
      badge: 'ARMORED BULLION & VAULT ESCORT',
      accentColor: 'text-amber-400',
      glowColor: 'rgba(245,158,11,0.35)',
      highlights: [
        'Armored transport & armed tactical escort',
        'Real-time GPS route telemetry & geofencing',
        'Dual-custody verification protocols',
        'Direct emergency liaison with Zambia Police'
      ],
      sla: 'Zero-breach bullion & cash transfer protocols'
    },
    {
      id: 'event-security',
      number: '03',
      title: 'Event Security management',
      image: '/assets/services/service-event-security.jpg',
      kommodoUrl: 'https://kommodo.ai/i/9CyC1vvi8n0T64fLY8vE',
      description: 'Our event security security encompass comprehensive planning and deployment strategies to ensure the safe conduct of events large and small.',
      icon: Shield,
      badge: 'LARGE & SMALL SCALE EVENTS',
      accentColor: 'text-emerald-400',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        'Comprehensive crowd control & perimeter zoning',
        'VIP backstage & stage protection cordons',
        'Access badge scanning & bag inspection',
        'Rapid emergency evacuation protocols'
      ],
      sla: 'Flawless crowd coordination & emergency safe-haven readiness'
    },
    {
      id: 'vip-protection',
      number: '04',
      title: 'VIP & Executive Protection',
      image: '/assets/services/service-vip-protection.jpg',
      kommodoUrl: 'https://kommodo.ai/i/7FUCwVZSCuUDWWUvmkK8',
      description: 'We specialize in close protection services for high-profile individuals, ensuring their safety in every circumstance with our expert team.',
      icon: UserCheck,
      badge: 'CLOSE PROTECTION & BODYGUARDS',
      accentColor: 'text-cyan-400',
      glowColor: 'rgba(6,182,212,0.35)',
      highlights: [
        'Elite close protection bodyguards',
        'Advanced motorcade & defensive driving',
        'Discreet suited executive details',
        'High-threat route reconnaissance'
      ],
      sla: 'Discreet high-level protection adhering to international standards'
    },
    {
      id: 'alarm-monitoring',
      number: '05',
      title: 'Alarm Monitoring & Response',
      image: '/assets/services/service-alarm-response.jpg',
      kommodoUrl: 'https://kommodo.ai/i/w0y986Q7PS3vmuVkLxJb',
      description: 'We provide advanced alarm systems monitored by our rapid response teams to ensure immediate action in case of any security breaches.',
      icon: BellRing,
      badge: 'SUB-5 MINUTE RAPID INTERVENTION',
      accentColor: 'text-rose-400',
      glowColor: 'rgba(239,68,68,0.35)',
      highlights: [
        '24/7 central command telemetry monitoring',
        'Sub-minute rapid armed response dispatch',
        'Intrusion, panic button & perimeter beam alarms',
        'Instant client smartphone alarm alerts'
      ],
      sla: 'Sub-5 minute priority armed response arrival'
    }
  ];

  const current = services[activeService];
  const IconComp = current.icon;

  return (
    <section id="our-security-services" className="py-24 lg:py-32 bg-[#06080e] text-slate-100 border-t border-slate-800/90 relative overflow-hidden">
      
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-20"
        style={{
          background: current.glowColor
        }}
      />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-800 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 mr-1" />
              <span>PROTECTION DELIVERED ACROSS ZAMBIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
              OUR SECURITY <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">SERVICES</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Tailored, disciplined, and technologically empowered security solutions protecting residential, corporate, and industrial assets.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-end px-7 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center space-x-2 shadow-xl group cursor-pointer"
          >
            <span>REQUEST SERVICE QUOTE</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5-Column Interactive Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((srv, idx) => {
            const SrvIcon = srv.icon;
            const isSelected = activeService === idx;
            const isHovered = hoveredCard === srv.id;

            return (
              <div
                key={srv.id}
                onClick={() => setActiveService(idx)}
                onMouseEnter={() => setHoveredCard(srv.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between border transition-all duration-500 cursor-pointer group relative ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#101b33] via-[#0b1324] to-[#070b14] border-blue-400 shadow-[0_20px_45px_rgba(59,130,246,0.3)] scale-[1.03] -translate-y-2 z-10'
                    : 'bg-[#090e1a]/90 border-slate-800/90 hover:border-slate-600 hover:bg-[#0e172a] shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Top Active Indicator Glow Line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 z-20" />
                )}

                {/* Service Image Header with Animated Zoom & Contrast */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    onError={(e) => {
                      e.currentTarget.src = srv.kommodoUrl;
                    }}
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.08] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/40 to-transparent" />
                  
                  {/* Floating Number Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#05080e]/90 border border-slate-700 text-xs font-mono font-bold text-blue-400 backdrop-blur-md shadow-md">
                    {srv.number}
                  </div>

                  {/* Animated Icon Floating Pod */}
                  <div className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110' 
                      : 'bg-[#05080e]/90 border border-slate-700 text-blue-400 group-hover:border-blue-500'
                  }`}>
                    <SrvIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Service Text Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {srv.badge}
                    </div>
                    <h3 className="text-base sm:text-lg font-black font-display text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {srv.description}
                    </p>
                  </div>

                  {/* Animated Action Footer */}
                  <div className="pt-4 border-t border-slate-800/90 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-blue-400 font-bold group-hover:text-cyan-300 transition-colors">
                      {isSelected ? 'Active Selection' : 'Inspect'}
                    </span>
                    <div className="p-1.5 rounded-full bg-blue-500/10 group-hover:bg-blue-600 text-blue-400 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Deep Dive Active Service Interactive Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d162a] via-[#091122] to-[#0d162a] border border-blue-500/40 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span>ACTIVE DEPLOYMENT PREVIEW • {current.number} / 05</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white uppercase tracking-tight">
                {current.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-2xl bg-[#060a14] border border-slate-800 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{h}</span>
                </div>
              ))}
            </div>

            {/* Service SLA Box */}
            <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-xs text-cyan-300 flex items-center space-x-2.5">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Guaranteed SLA:</strong> {current.sla}</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote(current.title)}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center space-x-2 cursor-pointer"
              >
                <span>DEPLOY {current.title.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl group">
            <img
              src={current.image}
              alt={current.title}
              onError={(e) => {
                e.currentTarget.src = current.kommodoUrl;
              }}
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09101f] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#05080e]/95 backdrop-blur-md border border-slate-800 text-xs flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-cyan-400 font-bold font-mono block">NATIONWIDE REACH:</span>
                <span className="text-slate-200">All 10 Provinces • 39 Districts</span>
              </div>
              <Shield className="w-6 h-6 text-blue-400 shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
