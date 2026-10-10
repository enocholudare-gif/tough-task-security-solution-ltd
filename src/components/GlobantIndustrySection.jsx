import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, Building2, Landmark, Pickaxe, Store, Plane, Zap, Lock } from 'lucide-react';

export default function GlobantIndustrySection({ onOpenQuote }) {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: 'financial',
      number: '01',
      title: 'Financial Services & Banking',
      tagline: 'We secure high-value transactions, bank branches, and bullion transit with ironclad accountability.',
      icon: Landmark,
      image: '/assets/service-guarding.jpg',
      badge: 'BANKING GRADE PROTOCOL',
      description: 'Our specialized banking security teams combine vetted armed personnel, ATM lobby monitoring, vault surveillance, and GPS-escorted cash-in-transit (CIT) coordination across Zambia.',
      highlights: [
        'Armed vault guards & cash transport protection',
        '24/7 ATM lobby surveillance & access control',
        'Digital occurrence log with timestamped evidence',
        'Direct emergency liaison with Zambia Police'
      ],
      deliverable: 'Zero-breach SLA with real-time biometric access verification'
    },
    {
      id: 'mining',
      number: '02',
      title: 'Mining & Heavy Resources',
      tagline: 'Defending remote concessions, copper corridors, and high-value mineral processing zones.',
      icon: Pickaxe,
      image: '/assets/security-patrol.jpg',
      badge: 'COPPERBELT & NORTH-WESTERN',
      description: 'Engineered for harsh, expansive mining terrain. We deploy canine patrol squads, drone-assisted perimeter monitoring, mineral convoy escorts, and 24/7 checkpoint verification.',
      highlights: [
        'Perimeter fence patrols with canine units',
        'High-value mineral convoy armed tracking',
        'Illegal artisanal mining intrusion deterrence',
        'Heavy machinery and refinery asset protection'
      ],
      deliverable: 'Comprehensive perimeter telemetry & anti-theft response units'
    },
    {
      id: 'retail',
      number: '03',
      title: 'Retail, Malls & Commercial Hubs',
      tagline: 'Elevating customer safety, loss prevention, and seamless foot-traffic management.',
      icon: Store,
      image: '/assets/1.jpg',
      badge: 'COMMERCIAL LOSS PREVENTION',
      description: 'Customer-focused, impeccably uniformed security personnel trained in de-escalation, emergency evacuation, undercover loss prevention, and parking lot vigilance.',
      highlights: [
        'Undercover & uniformed loss prevention officers',
        'EAS electronic article surveillance monitoring',
        'Crowd management & emergency evacuation plans',
        'Dedicated night parking & loading dock security'
      ],
      deliverable: 'Measurable shrink reduction & high-prestige front-of-house presence'
    },
    {
      id: 'diplomatic',
      number: '04',
      title: 'Diplomatic Missions & Embassies',
      tagline: 'Elite close protection and perimeter defense for embassies, consulates, and international NGOs.',
      icon: Building2,
      image: '/assets/security-leadership.jpg',
      badge: 'DIPLOMATIC GRADE VETTING',
      description: 'Discreet, highly trained protective officers with specialized background clearances. We manage access control, VIP residences, motorcade security, and international delegation protection.',
      highlights: [
        'Top-tier police and state intelligence vetting',
        'Diplomatic residence & embassy perimeter security',
        'VIP motorcade routing & emergency safe-havens',
        'Multilingual, protocol-trained security personnel'
      ],
      deliverable: 'Discreet high-level protection adhering to international standards'
    },
    {
      id: 'energy',
      number: '05',
      title: 'Energy, Utilities & Critical Grids',
      tagline: 'Safeguarding substations, solar plants, and telecommunications towers 24/7.',
      icon: Zap,
      image: '/assets/service-cctv.jpg',
      badge: 'CRITICAL INFRASTRUCTURE',
      description: 'Protecting Zambia’s vital utility lifelines against vandalism, copper wire theft, and sabotage through remote CCTV telemetry, rapid response alarms, and continuous armed guard tours.',
      highlights: [
        'Remote solar farm & power substation surveillance',
        'Anti-vandalism patrols for telecom base stations',
        'Electronic NFC perimeter checkpoint tags',
        'Rapid alarm response with sub-minute dispatch'
      ],
      deliverable: 'Unbroken asset uptime & instantaneous sabotage alarm escalation'
    }
  ];

  const current = industries[activeIndustry];
  const IconComponent = current.icon;

  return (
    <section className="py-20 lg:py-24 bg-[#060910] text-slate-100 border-t border-slate-800/90 relative overflow-hidden">
      
      {/* Background Subtle Tech Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Globant-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#162238] border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 mr-1 text-blue-400" />
              <span>INDUSTRY SPECIALIZATIONS • GLOBANT BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
              TAILORED PROTECTION FOR <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">EVERY SECTOR</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              We engineer specialized security frameworks addressing the distinct threat landscape of Zambia’s primary economic engines.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-end px-6 py-3 bg-[#0d1424] hover:bg-blue-600 border border-slate-700 hover:border-blue-400 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg group cursor-pointer"
          >
            <span>FIND YOUR INDUSTRY</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Globant-Style Interactive 2-Column Multi-Panel Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Industry Selector Accordion */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            {industries.map((ind, idx) => {
              const isSelected = idx === activeIndustry;
              const IndIcon = ind.icon;

              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustry(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0d172e] to-[#0a1224] border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.18)] scale-[1.02]'
                      : 'bg-[#080d1a]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#0c1326]'
                  }`}
                >
                  {/* Left Accent Bar for Selected Item */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600" />
                  )}

                  <div className="flex items-start justify-between pl-1">
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:text-slate-200 group-hover:border-slate-600'
                      }`}>
                        <IndIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-[11px] font-mono font-bold ${
                            isSelected ? 'text-blue-400' : 'text-slate-500'
                          }`}>
                            {ind.number}
                          </span>
                          <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors ${
                            isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {ind.title}
                          </span>
                        </div>
                        <p className={`text-xs mt-1 line-clamp-1 transition-colors ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {ind.tagline}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 mt-2 transition-transform duration-300 ${
                      isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Industry Deep Dive (Globant Style) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-3xl bg-gradient-to-br from-[#0c1426] via-[#09101f] to-[#060b16] border border-blue-500/30 overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-8 relative">
              
              {/* Background Top Image Banner */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-700/80 mb-6 bg-slate-900 shadow-inner group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.8] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09101f] via-transparent to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#060b16]/95 border border-blue-400/50 text-cyan-300 text-[11px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{current.badge}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-300 bg-[#060b16]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-blue-400 font-bold">DEPLOYMENT CAPABILITY:</span>
                  <span className="text-white font-medium">All 10 Provinces • 39 Districts</span>
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-4 flex-1">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-display text-white uppercase tracking-tight">
                    {current.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {current.description}
                </p>

                {/* 4 Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {current.highlights.map((hl, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#070d18] border border-slate-800 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* SLA Deliverable Box */}
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-blue-300 flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>SLA Guarantee:</strong> {current.deliverable}</span>
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  Ready to deploy in your facility? Receive a customized risk assessment within 24 hours.
                </div>

                <button
                  onClick={() => onOpenQuote(current.title)}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                >
                  <span>REQUEST {current.title.split(' ')[0].toUpperCase()} ASSESSMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
