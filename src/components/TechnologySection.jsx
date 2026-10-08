import React, { useState } from 'react';
import { Cpu, Radio, Camera, FileCheck, BarChart3, Smartphone, CheckCircle2, ShieldCheck, Clock, Activity } from 'lucide-react';
import { techPillars } from '../data/technologyData';

export default function TechnologySection({ onOpenQuote }) {
  const [activeTechId, setActiveTechId] = useState('gps-tracking');

  const activePillar = techPillars.find(p => p.id === activeTechId) || techPillars[0];

  return (
    <section id="technology-section" className="py-20 bg-[#080c14] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 mr-1" />
            TECHNOLOGY & COMMAND
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white">
            SECURITY POWERED BY <span className="text-blue-500">PEOPLE & TECHNOLOGY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminating human error and blind spots through real-time GPS telemetry, electronic incident logging, and centralized supervision.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Tab Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {techPillars.map((pillar) => {
              const isActive = activeTechId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTechId(pillar.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                      : 'bg-[#0e1422] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#121a2c]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-blue-800 text-white' : 'bg-[#090d16] text-blue-400 border border-slate-700'
                      }`}>
                        {pillar.id === 'gps-tracking' && <Radio className="w-4 h-4" />}
                        {pillar.id === 'digital-incident' && <Smartphone className="w-4 h-4" />}
                        {pillar.id === 'cctv-integration' && <Camera className="w-4 h-4" />}
                        {pillar.id === 'supervisor-audits' && <FileCheck className="w-4 h-4" />}
                        {pillar.id === 'sla-dashboards' && <BarChart3 className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{pillar.title}</h3>
                        <p className={`text-[11px] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          {pillar.short}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full py-3 bg-slate-800 hover:bg-slate-750 text-blue-400 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-700 transition-colors"
              >
                REQUEST TECH SPECIFICATIONS
              </button>
            </div>
          </div>

          {/* Right: Clean Command Specification Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e1422] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  {activePillar.title} PROTOCOL
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                ACTIVE DEPLOYMENT
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activePillar.description}
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Operational Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activePillar.features.map((feat, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#090d16] border border-slate-800 flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">Standard for all commercial and corporate contracts.</span>
              <button
                onClick={onOpenQuote}
                className="text-blue-400 hover:text-white font-bold"
              >
                Inquire Now →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
