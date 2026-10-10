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
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
              <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              <span>ELITE DEFENSE CAPABILITIES IN ZAMBIA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
              OUR SECURITY <span className="text-emerald-600">SERVICES</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Hover over any service below to explore detailed operational specifications, personnel protocols, and deployment SLAs.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-end px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-xl shadow-emerald-600/30 group cursor-pointer border border-emerald-500/30 btn-shimmer"
          >
            <span>GET SECURITY QUOTE</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-Card 3D Interactive Flip Grid (ONLY IMAGE on front - flips on hover to reveal full details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const SrvIcon = srv.icon;
            const isFlipped = activeService === idx;

            return (
              <div
                key={srv.id}
                className={`flip-card h-[440px] sm:h-[470px] cursor-pointer group ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => setActiveService(activeService === idx ? null : idx)}
              >
                <div className="flip-card-inner">
                  
                  {/* ========================================================
                      FRONT FACE: PURE IMAGE ONLY (NO TEXT OVERLAY)
                     ======================================================== */}
                  <div className="flip-card-front bg-slate-950 border-2 border-slate-200/90 group-hover:border-emerald-500 shadow-xl transition-all relative overflow-hidden">
                    {/* Full Card Image Only - Zero Text */}
                    <img
                      src={srv.image}
                      alt={srv.title}
                      onError={(e) => {
                        e.currentTarget.src = srv.kommodoUrl;
                      }}
                      className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.95] group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>

                  {/* ========================================================
                      BACK FACE: DETAILED TACTICAL SPECS & ACTIONS
                     ======================================================== */}
                  <div className="flip-card-back bg-slate-900 border-2 border-emerald-500 text-white p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative">
                    {/* Ambient Glow */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

                    {/* Header */}
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          SERVICE SPECIFICATION • {srv.number}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                          <SrvIcon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black font-display uppercase tracking-tight text-white leading-tight">
                        {srv.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 py-3 border-y border-slate-800 relative z-10">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                        KEY OPERATIONAL CAPABILITIES:
                      </div>
                      {srv.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                          <span className="leading-tight">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* SLA & Action */}
                    <div className="space-y-3 relative z-10">
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center space-x-2">
                        <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate"><strong>SLA:</strong> {srv.sla}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuote(srv.title);
                        }}
                        className="w-full py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer btn-shimmer"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>REQUEST THIS SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
