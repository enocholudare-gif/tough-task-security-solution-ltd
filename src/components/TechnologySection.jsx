import React, { useState } from 'react';
import { Radio, Camera, FileCheck, BarChart3, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { techPillars } from '../data/technologyData';

export default function TechnologySection({ onOpenQuote }) {
  const [activeTechId, setActiveTechId] = useState('gps-tracking');

  const activePillar = techPillars.find(p => p.id === activeTechId) || techPillars[0];

  return (
    <section id="technology-section" className="py-20 bg-[#E5E7EB] text-[#0F172A] border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-green-100 border border-green-300 text-green-800 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Radio className="w-3.5 h-3.5 text-[#16A34A] animate-pulse" />
            <span>TECHNOLOGY &amp; COMMAND ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-[#0F172A]">
            COMMAND POWERED BY <span className="text-[#16A34A]">PEOPLE &amp; TELEMETRY</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            Eliminating human error and blind spots through real-time GPS telemetry, electronic NFC checkpoint logging, and centralized supervision from Rhodespark HQ.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Tab Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {techPillars.map((pillar) => {
              const isActive = activeTechId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTechId(pillar.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#16A34A] border-[#16A34A] text-white shadow-md shadow-[#16A34A]/25'
                      : 'bg-white border-gray-200/90 text-[#475569] hover:border-gray-300 hover:text-[#0F172A]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-white text-[#16A34A]' : 'bg-gray-50 text-[#16A34A] border border-gray-200'
                      }`}>
                        {pillar.id === 'gps-tracking' && <Radio className="w-4 h-4" />}
                        {pillar.id === 'digital-incident' && <Smartphone className="w-4 h-4" />}
                        {pillar.id === 'cctv-integration' && <Camera className="w-4 h-4" />}
                        {pillar.id === 'supervisor-audits' && <FileCheck className="w-4 h-4" />}
                        {pillar.id === 'sla-dashboards' && <BarChart3 className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold font-display uppercase tracking-wide ${isActive ? 'text-white' : 'text-[#0F172A]'}`}>{pillar.title}</h3>
                        <p className={`text-[11px] font-mono ${isActive ? 'text-white/80' : 'text-[#64748B]'}`}>
                          {pillar.short}
                        </p>
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-white' : 'text-[#16A34A]'}`}>
                      {pillar.metrics}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Inspection Card (7 cols) with Crisp White Card */}
          <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
            <div className="space-y-2 border-b border-gray-100 pb-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                OPERATIONAL SPECIFICATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                {activePillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activePillar.description}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                KEY TECHNICAL CAPABILITIES:
              </span>
              <div className="space-y-2">
                {activePillar.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start text-xs text-[#0F172A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] mr-2 shrink-0 mt-0.5" />
                    <span className="leading-snug text-[#475569]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#64748B]">
                Deployment Standard: <strong className="text-[#0F172A]">{activePillar.metrics}</strong>
              </div>
              <button
                onClick={() => onOpenQuote(activePillar.title)}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-[#16A34A]/25"
              >
                <span>REQUEST SYSTEM DEMO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
