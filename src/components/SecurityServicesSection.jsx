import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, Lock, Truck, Users, UserCheck, BellRing, MapPin, Eye, Zap, ChevronLeft } from 'lucide-react';

export default function SecurityServicesSection({ onOpenQuote }) {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'guarding-services',
      number: '01',
      title: 'Guarding Services',
      image: '/assets/services/service-manned-guarding.jpg',
      kommodoUrl: 'https://kommodo.ai/i/edjHGlQ2YCfxUNG8ifuQ',
      description: 'Disciplined static and mobile guarding providing visible deterrence, access screening, and patrol coverage for corporate, industrial, and residential premises.',
      icon: Users,
      badge: 'ARMED & UNARMED GUARDS',
      accentColor: 'text-emerald-500',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        '100% Police vetted with fingerprint clearance',
        'Electronic NFC perimeter checkpoint verification',
        'Unannounced day and night supervisor audits',
        'Smart uniform presentation & military drill'
      ],
      sla: 'Continuous post attendance & digital incident logging'
    },
    {
      id: 'tactical-units',
      number: '02',
      title: 'Tactical Units & Armed Patrols',
      image: '/assets/hero/hero-7.jpg',
      kommodoUrl: 'https://kommodo.ai/i/6yAi3RLLW55YddojIRxJ',
      description: 'Specialized tactical response units equipped for high-risk environments, counter-intrusion operations, and sub-minute emergency escalation.',
      icon: Shield,
      badge: 'SUB-5 MINUTE TACTICAL INTERVENTION',
      accentColor: 'text-emerald-500',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        'Armed tactical backup cruisers on 24/7 patrol',
        'Direct VHF/UHF tactical radio synchronization',
        'Advanced defensive drill and threat neutralization',
        'Sub-5 minute priority escalation in Lusaka & Copperbelt'
      ],
      sla: 'Sub-5 minute emergency response deployment'
    },
    {
      id: 'rapid-response-button',
      number: '03',
      title: 'Rapid Response Panic Button',
      image: '/assets/services/service-alarm-response.jpg',
      kommodoUrl: 'https://kommodo.ai/i/w0y986Q7PS3vmuVkLxJb',
      description: 'One-touch emergency activation with instant GPS coordinates and priority dispatch directly linked to our 24/7 Rhodespark control room.',
      icon: BellRing,
      badge: 'ONE-TOUCH GPS ACTIVATION',
      accentColor: 'text-emerald-500',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        'Instant wireless distress beacon to central dispatch',
        'Automated live vehicle GPS telemetry routing',
        'Simultaneous client SMS & WhatsApp alert relays',
        'Direct emergency liaison with Zambia Police Service'
      ],
      sla: 'Instantaneous distress receipt & cruiser dispatch'
    },
    {
      id: 'offsite-monitoring',
      number: '04',
      title: 'Offsite CCTV Video Surveillance & Monitoring',
      image: '/assets/service-cctv.jpg',
      kommodoUrl: 'https://kommodo.ai/i/V7XKKsO9SYq7IoA23wqN',
      description: 'Continuous 24/7 video surveillance detecting perimeter breaches, compound activity, and unauthorized intrusion in real time with two-way audio challenge capabilities.',
      icon: Eye,
      badge: '24/7 VIDEO SURVEILLANCE & CHALLENGE',
      accentColor: 'text-emerald-500',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        'Perimeter intrusion line-crossing alarm detection',
        'Live 24/7 control room surveillance feed monitoring',
        'Two-way audio challenge and siren activation',
        'Encrypted cloud evidence vault storage'
      ],
      sla: 'Zero-downtime surveillance & instant breach alerts'
    },
    {
      id: 'vip-protection',
      number: '05',
      title: 'VIP & Close Protection',
      image: '/assets/services/service-vip-protection.jpg',
      kommodoUrl: 'https://kommodo.ai/i/7FUCwVZSCuUDWWUvmkK8',
      description: 'Discreet close protection officers and armored motorcades for chief executives, foreign dignitaries, diplomats, and high-profile individuals.',
      icon: UserCheck,
      badge: 'EXECUTIVE BODYGUARD DETAILS',
      accentColor: 'text-emerald-500',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        'Trained close protection officers and evasive drivers',
        'Advance route reconnaissance and threat intelligence',
        'Discreet suited executive details for summits & galas',
        'Armored escort vehicle convoys'
      ],
      sla: 'Impeccable discretion adhering to international standards'
    },
    {
      id: 'cash-in-transit',
      number: '06',
      title: 'Cash-In-Transit & Bullion Logistics',
      image: '/assets/services/service-cash-in-transit.jpg',
      kommodoUrl: 'https://kommodo.ai/i/Pk2KK6k0AhWQTbPvQn0D',
      description: 'Ironclad armored vehicle bullion transit and cash management across banking networks, mining concessions, and retail commercial nodes.',
      icon: Truck,
      badge: 'ARMORED BULLION & VAULT ESCORT',
      accentColor: 'text-emerald-500',
      glowColor: 'rgba(16,185,129,0.35)',
      highlights: [
        'Armored transport vehicles with satellite GPS tracking',
        'Dual-custody vault-to-vault transfer manifests',
        'Armed tactical escort teams on national transit routes',
        'Comprehensive cash-in-transit insurance coverage'
      ],
      sla: 'Zero-loss bullion & cash transfer protocols'
    }
  ];

  const current = services[activeService];
  const IconComp = current.icon;

  return (
    <section id="our-security-services" className="py-24 lg:py-32 bg-[#f5f5f5] text-slate-900 border-t border-slate-200 relative overflow-hidden light-grid-pattern">
      
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-15"
        style={{
          background: current.glowColor
        }}
      />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
              <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              <span>ELITE DEFENSE CAPABILITIES IN ZAMBIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
              OUR SECURITY <span className="text-emerald-600">SERVICES</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Advanced security solutions including armed guarding, video surveillance, VIP protection, and rapid response teams.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-end px-7 py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-xl shadow-emerald-600/30 group cursor-pointer border border-emerald-500/30 btn-shimmer"
          >
            <span>GET SECURITY QUOTE</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-Card Spartan-Style Tactical Grid (2 Rows of 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const SrvIcon = srv.icon;
            const isSelected = activeService === idx;

            return (
              <div
                key={srv.id}
                onClick={() => setActiveService(idx)}
                onMouseEnter={() => setHoveredCard(srv.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 cursor-pointer group relative spartan-card ${
                  isSelected
                    ? 'bg-white border-2 border-emerald-600 shadow-[0_20px_45px_rgba(16,185,129,0.2)] scale-[1.02] -translate-y-2 z-10'
                    : 'bg-white border-slate-200/90 hover:border-emerald-500/70 hover:shadow-2xl hover:-translate-y-2 shadow-md'
                }`}
              >
                {/* Top Active Indicator Glow Line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 z-20" />
                )}

                {/* Service Image Header with Animated Zoom & Contrast */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    onError={(e) => {
                      e.currentTarget.src = srv.kommodoUrl;
                    }}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] spartan-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Number Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono font-bold text-emerald-400 backdrop-blur-md shadow-md">
                    {srv.number}
                  </div>

                  {/* Animated Icon Floating Pod */}
                  <div className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
                    isSelected 
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/50 scale-110' 
                      : 'bg-white/95 border border-slate-200 text-slate-800 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 shadow-md'
                  }`}>
                    <SrvIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Service Text Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                      {srv.badge}
                    </div>
                    <h3 className="text-lg font-black font-display text-slate-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {srv.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {srv.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Animated Action Footer (Spartan SA "Learn More" Link) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuote(srv.title);
                      }}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider transition-colors flex items-center group-hover:translate-x-0.5 cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-900 transition-colors flex items-center">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Deep Dive Active Service Interactive Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d162a] via-[#091122] to-[#0d162a] border border-emerald-500/30 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-emerald-400 uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>ACTIVE DEPLOYMENT PREVIEW • {current.number} / 06</span>
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
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{h}</span>
                </div>
              ))}
            </div>

            {/* Service SLA Box */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center space-x-2.5">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Guaranteed SLA:</strong> {current.sla}</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote(current.title)}
                className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center space-x-2 cursor-pointer btn-shimmer"
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
                <span className="text-emerald-400 font-bold font-mono block">NATIONWIDE REACH:</span>
                <span className="text-slate-200">All 10 Provinces • 39 Districts</span>
              </div>
              <Shield className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
