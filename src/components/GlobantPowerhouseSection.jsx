import React, { useState } from 'react';
import { Shield, Radio, Eye, Award, CheckCircle2, ChevronRight, Activity, ArrowRight, Lock, MapPin } from 'lucide-react';

export default function GlobantPowerhouseSection({ onOpenQuote, setActivePage }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'guard-force',
      number: '01',
      tag: 'HUMAN DISCIPLINE & DRILL',
      title: 'Tactical Guard Force & Police Vetting',
      subtitle: 'Impeccable discipline, physical drill, and comprehensive background verification.',
      description: 'Every Tough Task guard is vetted through fingerprint background checks and undergoes intensive combat readiness, access management, and customer care training before site assignment.',
      metrics: [
        { label: 'Vetting Standard', value: '100% Police Verified' },
        { label: 'Drill Standard', value: 'Military Grade Uniformity' },
        { label: 'Site Briefings', value: 'Daily Pre-Shift Parades' }
      ],
      points: [
        'Unannounced day and night supervisor audit inspections',
        'Strict code of conduct and de-escalation expertise',
        'Specialized canine protection and riot dispersal units',
        'Direct coordination with local Zambian police stations'
      ],
      bgAccent: 'from-blue-600/20 to-transparent'
    },
    {
      id: 'telemetry',
      number: '02',
      tag: 'DIGITAL OPERATING SYSTEM',
      title: 'GPS Telemetry & Digital Evidence',
      subtitle: 'Eliminating paper logbooks with timestamped NFC patrol checkpoints and photo audits.',
      description: 'Our proprietary guard tour OS ensures round-the-clock accountability. Field officers scan NFC perimeter tags at assigned intervals, transmitting real-time GPS telemetry to our command center.',
      metrics: [
        { label: 'Patrol Verification', value: 'NFC Electronic Tags' },
        { label: 'Incident Evidence', value: 'Timestamped Photos' },
        { label: 'Client Portal', value: 'Real-Time Telemetry' }
      ],
      points: [
        'Geofenced patrol route verification with deviation alerts',
        'Digital occurrence book accessible by client management',
        'Automatic supervisor alert if a checkpoint is missed',
        'Weekly audit reports with comprehensive SLA metrics'
      ],
      bgAccent: 'from-cyan-600/20 to-transparent'
    },
    {
      id: 'command-desk',
      number: '03',
      tag: '24/7 CENTRAL COMMAND',
      title: 'Rhodes Park HQ Command & Dispatch',
      subtitle: 'Continuous nationwide telemetry, CCTV surveillance, and rapid armed unit escalation.',
      description: 'Stationed at Office No. 5, National Council for the Laity Building, Rhodes Park, Lusaka. Our 24/7 Operations Command coordinates multi-province field units with sub-minute radio dispatch.',
      metrics: [
        { label: 'Command Active', value: '24 Hours / 365 Days' },
        { label: 'Radio Frequency', value: 'Dedicated VHF/UHF' },
        { label: 'National Hotlines', value: '+260 777 127 114' }
      ],
      points: [
        'Sub-minute panic alarm response dispatch coordination',
        'Remote live CCTV perimeter surveillance & AI motion flags',
        'Direct tactical backup for high-risk transit routes',
        'Emergency response escalation protocols for all 10 provinces'
      ],
      bgAccent: 'from-emerald-600/20 to-transparent'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#070b12] text-slate-100 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 mr-1" />
            <span>THE TOUGH TASK POWERHOUSE PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
            THREE PILLARS OF <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">TOTAL ACCOUNTABILITY</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A battle-tested synergy of disciplined human guards, electronic GPS telemetry, and 24/7 centralized command.
          </p>
        </div>

        {/* 3 Globant-Style Powerhouse Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="rounded-3xl bg-gradient-to-b from-[#0e1628] via-[#09101f] to-[#070b14] border border-slate-800/90 hover:border-blue-500/60 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-black text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/60">
                    PILLAR {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-blue-300 transition-colors uppercase leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>

                {/* 3 Micro Metrics Box */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                  {pillar.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-[#060a14] border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 line-clamp-1">{m.label}</div>
                      <div className="text-[11px] font-bold text-white mt-0.5 truncate">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Checklist Points */}
                <div className="space-y-2 pt-2">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-4 border-t border-slate-800/90">
                <button
                  onClick={() => onOpenQuote(pillar.title)}
                  className="w-full py-3 bg-[#0d1424] hover:bg-blue-600 border border-slate-700 hover:border-blue-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>INSPECT THIS CAPABILITY</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Globant-Style National Trust & Recognition Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0b1324] via-[#09101f] to-[#0b1324] border border-blue-500/30 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>ZAMBIA NATIONAL COMMAND • DISPATCH HOTLINE ACTIVE</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
              PROTECTING ENTERPRISE ASSETS IN ALL 10 PROVINCES
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              From Lusaka HQ to the Copperbelt mining belt and rural agricultural hubs, Tough Task delivers unified corporate security SLAs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="px-7 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center space-x-2 cursor-pointer"
            >
              <span>REQUEST ENTERPRISE ASSESSMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+260777127114"
              className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-full border border-slate-700 transition-all flex items-center space-x-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>+260 777 127 114</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
