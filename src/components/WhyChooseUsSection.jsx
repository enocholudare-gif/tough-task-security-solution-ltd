import React from 'react';
import { Cpu, Shield, Radio, CheckCircle2, TrendingDown, ArrowRight, Zap, Award, Lock, Clock } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenQuote }) {
  const points = [
    {
      id: 'ai-monitoring',
      title: 'AI-Powered Surveillance & GPS Telemetry',
      description: 'Intelligent perimeter analytics with real-time intrusion alarms, NFC guard tour verification, and automated occurrence reporting.',
      icon: Cpu,
      tag: 'TECH-ENABLED DEFENSE'
    },
    {
      id: 'control-room',
      title: '24/7 Rhodespark Central Control Room',
      description: 'Round-the-clock command center providing immediate dispatch, multi-channel VHF radio links, and continuous supervision nationwide.',
      icon: Radio,
      tag: 'SUB-5 MIN ESCALATION'
    },
    {
      id: 'elite-personnel',
      title: 'Police-Vetted & Disciplined Personnel',
      description: 'Rigorous fingerprint background clearances verified through Zambia Police Service, military drill standards, and regular tactical refreshers.',
      icon: Shield,
      tag: '100% VETTED ROSTER'
    },
    {
      id: 'tailored-solutions',
      title: 'Tailored Solutions for Corporate & Mining',
      description: 'Bespoke standard operating procedures adapted to commercial facilities, mining concessions, residential estates, and diplomatic properties.',
      icon: Award,
      tag: 'CUSTOM RISK PROTOCOLS'
    },
    {
      id: 'cost-savings',
      title: 'We Save You Money & Mitigate Loss',
      description: 'Optimized security deployments and digital accountability that dramatically decrease shrinkage, unauthorized access, and operational liability.',
      icon: TrendingDown,
      tag: 'PROVEN ROI'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-[#060a12] text-slate-100 border-t border-slate-800/90 relative overflow-hidden">
      {/* Ambient Tactical Grid Background */}
      <div className="absolute inset-0 tactical-grid opacity-30 pointer-events-none" />

      {/* Radiant Glow Orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Spartan-Style Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 mr-1" />
            <span>UNCOMPROMISING EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
            WHY CHOOSE <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">TOUGH TASK SECURITY</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Advanced AI-driven monitoring, elite tactical personnel, and rapid response systems built to protect what matters most across Zambia.
          </p>
        </div>

        {/* 5-Card Feature Grid (Matching Spartan SA "Why Choose" layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const isHighlight = pt.id === 'cost-savings';

            return (
              <div
                key={pt.id}
                className={`p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-xl relative overflow-hidden spartan-card ${
                  isHighlight
                    ? 'bg-gradient-to-br from-[#1c1316] via-[#100d17] to-[#0a0f1b] border-red-500/50 hover:border-red-400 md:col-span-2 lg:col-span-2 shadow-red-500/10'
                    : 'bg-[#090e1a]/95 border-slate-800 hover:border-red-500/60 hover:bg-[#0e1627]'
                }`}
              >
                {/* Header with Tag & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {pt.tag}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-red-500/60 flex items-center justify-center text-red-400 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white group-hover:text-red-400 transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                {/* Footer Checkmark Indicator */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Guaranteed SLA Standard</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-red-900/40 via-red-950/30 to-[#0a0f1b] border border-red-500/40 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                GET STARTED IN UNDER 24 HOURS
              </span>
              <h3 className="text-2xl font-black font-display text-white uppercase leading-snug">
                READY TO SECURE YOUR ENTERPRISE?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our Rhodespark control room for a complimentary comprehensive site security risk assessment.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="w-full py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-red-500/40 btn-shimmer"
            >
              <Shield className="w-4 h-4" />
              <span>REQUEST SITE SURVEY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
