import React from 'react';
import TechnologySection from '../components/TechnologySection';
import { Cpu, Radio, ShieldCheck, Smartphone, Camera, FileCheck, BarChart3, Lock, CheckCircle2 } from 'lucide-react';
import { techPillars } from '../data/technologyData';

export default function TechnologyPage({ onOpenQuote }) {
  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-20">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            TACTICAL INNOVATION
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            COMMAND & <span className="text-blue-500">CONTROL ARCHITECTURE</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Eliminating blind spots and human error through real-time GPS telemetry, biometric supervisor audits, and integrated CCTV surveillance intelligence.
          </p>
        </div>
      </div>

      {/* Main Interactive Technology Simulator */}
      <TechnologySection onOpenQuote={onOpenQuote} />

      {/* Detailed Technical Specs Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
            STANDARDIZED REPORTING & SLA ARCHITECTURE
          </h2>
          <p className="text-slate-400 text-sm">
            What corporate risk managers receive with every Tough Task deployment contract.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              DAILY DIGITAL OCCURRENCE LOGS
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every shift handover, visitor log, vehicle registration, and incident notice is digitally compiled with encrypted time stamps. Accessible via weekly client digests.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              REAL-TIME DISPATCH ESCALATION
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upon panic trigger or perimeter tripwire breach, our central desk automatically alerts the nearest mobile patrol vehicle, field supervisor, and Zambia Police branch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              MONTHLY SLA & COMPLIANCE SCORECARDS
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Corporate clients receive detailed analytical reviews tracking post occupancy rate, guard punctuality, supervisor spot audit tallies, and threat trends.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
