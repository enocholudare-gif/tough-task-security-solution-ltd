import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, MapPin, Building, Award, TrendingUp, Lock } from 'lucide-react';

export default function GlobantReinventionSection({ onOpenQuote }) {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 'mining-copperbelt',
      client: 'Copperbelt Mining & Smelter Complex',
      location: 'Kitwe / Ndola Industrial Corridor',
      sector: 'Heavy Industry & Mining',
      headline: 'Securing a 450-hectare mining concession with perimeter canine units and electronic GPS tour logs.',
      challenge: 'Persistent illegal artisanal intrusions along unlit 8km perimeter fences and theft of high-value copper cathodes during night shifts.',
      solution: 'Tough Task deployed a dedicated 24-officer canine squad, 18 NFC perimeter electronic checkpoints, and GPS-tracked mobile patrol cruisers linking back to our Lusaka HQ command telemetry.',
      metrics: [
        { label: 'Perimeter Breaches', value: '0 Incidents (24 Mos)' },
        { label: 'Guard Patrol Compliance', value: '99.8% via NFC' },
        { label: 'Emergency Backup Time', value: '< 4 Minutes' }
      ],
      image: '/assets/security-patrol.jpg'
    },
    {
      id: 'financial-lusaka',
      client: 'Lusaka Commercial Banking Network',
      location: 'Rhodes Park / Cairo Road / Woodlands',
      sector: 'Financial Services & CIT',
      headline: 'Protecting 14 retail branches and central cash vaults with biometric access and armed transit escort.',
      challenge: 'High risk during evening cash settlements and vault loading, requiring uncompromising discipline and zero-latency police communication.',
      solution: 'Armed veteran security details assigned to main vault access points, coupled with live CCTV telemetry feed streaming directly to our 24/7 Operations Desk.',
      metrics: [
        { label: 'Vault Access Accuracy', value: '100% Biometric' },
        { label: 'Cash Transit Safety', value: 'Zero Losses' },
        { label: 'Alarm Test Verification', value: 'Daily Automated' }
      ],
      image: '/assets/service-guarding.jpg'
    },
    {
      id: 'embassy-diplomatic',
      client: 'International Diplomatic Mission & Residences',
      location: 'Kabulonga & Rhodes Park, Lusaka',
      sector: 'Diplomatic & VIP Protection',
      headline: 'Round-the-clock close protection, access gate vetting, and motorcade security for foreign delegation.',
      challenge: 'Strict international diplomatic protocol requiring multilingual, background-screened guards with advanced defensive driving and threat assessment skills.',
      solution: 'Elite close protection officers deployed with direct state intelligence clearances, anti-ambush vehicle maneuvers, and continuous perimeter surveillance.',
      metrics: [
        { label: 'Vetting Rating', value: 'Top Security Clearance' },
        { label: 'Protocol Adherence', value: '100% Exemplary' },
        { label: 'Executive Rating', value: '5-Star Commendation' }
      ],
      image: '/assets/security-leadership.jpg'
    },
    {
      id: 'logistics-warehouse',
      client: 'National Fast-Moving Consumer Goods Hub',
      location: 'Heavy Industrial Area, Lusaka',
      sector: 'Logistics & Warehousing',
      headline: 'Reducing inventory shrinkage by 94% through electronic gate passes and unannounced supervisor audits.',
      challenge: 'Internal stock leakage, unrecorded vehicle dispatch, and tampered container seals during high-volume distribution cycles.',
      solution: 'End-to-end digital occurrence logging, tamper-evident container seal audits, barcode verification at weighbridges, and random night supervisor sweeps.',
      metrics: [
        { label: 'Inventory Shrinkage', value: '-94% Reduction' },
        { label: 'Gate Audit Logs', value: '100% Timestamped' },
        { label: 'Dispatch Speed', value: '+35% Efficiency' }
      ],
      image: '/assets/3.jpg'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#080c16] text-slate-100 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-800 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 mr-1" />
              <span>REINVENTION STORIES • GLOBANT FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
              VERIFIED OPERATIONAL <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">IMPACT</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Explore how Tough Task solves high-stakes vulnerability challenges across Zambian corporate and industrial enterprises.
            </p>
          </div>

          {/* Story Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {stories.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setActiveStory(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeStory === idx
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : 'bg-[#0d1424] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                Story 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Active Impact Showcase Card */}
        {(() => {
          const current = stories[activeStory];
          return (
            <div className="rounded-3xl bg-gradient-to-br from-[#0c1426] via-[#09101f] to-[#070c18] border border-emerald-500/30 overflow-hidden shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Context & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase">
                    <span>CASE STUDY 0{activeStory + 1}</span>
                    <span>•</span>
                    <span>{current.sector}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-white uppercase leading-tight">
                    {current.client}
                  </h3>
                  <div className="flex items-center text-xs text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                    <span>{current.location}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  "{current.headline}"
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800">
                    <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px] block mb-1">
                      The Operational Challenge:
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed">{current.challenge}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block mb-1">
                      The Tough Task Protocol:
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">{current.solution}</p>
                  </div>
                </div>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {current.metrics.map((met, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-[#060a14] border border-emerald-500/20 text-center space-y-1">
                      <div className="text-[10px] text-slate-400 font-mono">{met.label}</div>
                      <div className="text-xs sm:text-sm font-black text-emerald-400 font-display">{met.value}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={() => onOpenQuote(current.sector)}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2 cursor-pointer"
                  >
                    <span>DEPLOY THIS PROTOCOL</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Imagery with High Impact Overlay */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl h-80 sm:h-96 lg:h-full min-h-[320px]">
                <img
                  src={current.image}
                  alt={current.client}
                  className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09101f] via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060a14]/90 backdrop-blur-md border border-slate-800 space-y-1 text-xs">
                  <div className="text-emerald-400 font-bold uppercase font-mono">VERIFIED OUTCOME</div>
                  <div className="text-slate-200 font-medium">Unbroken protection maintained with continuous GPS telemetry.</div>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
}
