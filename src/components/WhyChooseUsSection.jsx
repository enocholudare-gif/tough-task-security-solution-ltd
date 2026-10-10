import React from 'react';
import { Camera, Shield, Radio, CheckCircle2, TrendingDown, ArrowRight, Zap, Award, Lock, Clock } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenQuote }) {
  const points = [
    {
      id: 'cctv-monitoring',
      title: '24/7 CCTV Video Surveillance & GPS Fleet Telemetry',
      description: 'High-resolution CCTV camera networks with perimeter tripwire alarms, NFC guard patrol verification, and automated occurrence logging.',
      icon: Camera,
      tag: 'ADVANCED SURVEILLANCE'
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
    <section id="why-choose-us" className="py-20 lg:py-28 relative overflow-hidden border-t border-slate-200">
      {/* High-Resolution Picture Background (Not Dark) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/security-parade.jpg"
          alt="Tough Task Security Parade"
          className="w-full h-full object-cover object-center filter contrast-105"
        />
        {/* Light & Grey Overlay with subtle backdrop blur so image shows through crisply */}
        <div className="absolute inset-0 bg-slate-100/90 backdrop-blur-[3px]" />
        <div className="absolute inset-0 light-grid-pattern opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Spartan-Style Section Header with Reduced Font Size */}
        <div className="max-w-3xl space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            <span>UNCOMPROMISING EXCELLENCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
            WHY CHOOSE <span className="text-emerald-600">TOUGH TASK SECURITY</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Advanced CCTV video surveillance, elite tactical personnel, and rapid response units built to protect what matters most across Zambia.
          </p>
        </div>

        {/* 5-Card Feature Grid with Clean Grey/White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const isHighlight = pt.id === 'cost-savings';

            return (
              <div
                key={pt.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-md hover:shadow-xl relative overflow-hidden spartan-card ${
                  isHighlight
                    ? 'bg-gradient-to-br from-emerald-50/95 via-white/95 to-slate-50/95 border-emerald-500/50 md:col-span-2 lg:col-span-2 shadow-emerald-600/10'
                    : 'bg-white/95 border-slate-200 hover:border-emerald-500/70'
                }`}
              >
                {/* Header with Tag & Icon */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {pt.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-emerald-500 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black font-display uppercase tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pt.description}
                  </p>
                </div>

                {/* Footer Checkmark Indicator */}
                <div className="pt-4 border-t border-slate-200/90 flex items-center justify-between mt-5">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Guaranteed SLA Standard</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-800 transition-colors font-bold">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 border border-emerald-600/40 text-white flex flex-col justify-between space-y-5 shadow-xl">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                GET STARTED IN UNDER 24 HOURS
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-white uppercase leading-snug">
                READY TO SECURE YOUR ENTERPRISE?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our Rhodespark control room for a complimentary comprehensive site security risk assessment.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-emerald-500/40 btn-shimmer"
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
