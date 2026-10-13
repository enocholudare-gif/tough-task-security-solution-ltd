import React from 'react';
import TechnologySection from '../components/TechnologySection';
import { Radio, FileCheck, BarChart3 } from 'lucide-react';

export default function TechnologyPage({ onOpenQuote }) {
  return (
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen py-16 lg:py-24 space-y-16">
      
      {/* Page Hero */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-3.5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-8 h-[1.5px] bg-[#16A34A]" />
            <span>TACTICAL INNOVATION &amp; TELEMETRY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] font-display tracking-tight uppercase leading-tight">
            COMMAND &amp; <span className="text-[#16A34A]">CONTROL ARCHITECTURE</span>
          </h1>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Eliminating blind spots and human error through real-time GPS telemetry, biometric supervisor audits, and integrated CCTV surveillance intelligence.
          </p>
        </div>
      </div>

      {/* Main Interactive Technology Simulator */}
      <TechnologySection onOpenQuote={onOpenQuote} />

      {/* Detailed Technical Specs Matrix with Crisp White Cards */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
            STANDARDIZED REPORTING &amp; SLA ARCHITECTURE
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm">
            What corporate risk managers receive with every Tough Task deployment contract.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-3.5 hover:border-[#16A34A] transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#16A34A]">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] uppercase font-display tracking-wider">
              DAILY DIGITAL OCCURRENCE LOGS
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Every shift handover, visitor log, vehicle registration, and incident notice is digitally compiled with encrypted timestamps. Accessible via weekly client digests.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-3.5 hover:border-[#16A34A] transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#16A34A]">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] uppercase font-display tracking-wider">
              REAL-TIME DISPATCH ESCALATION
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Upon panic trigger or perimeter tripwire breach, our central desk automatically alerts the nearest mobile patrol vehicle, field supervisor, and Zambia Police branch.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-3.5 hover:border-[#16A34A] transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#16A34A]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] uppercase font-display tracking-wider">
              MONTHLY SLA &amp; COMPLIANCE SCORECARDS
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Corporate clients receive detailed analytical reviews tracking post occupancy rate, guard punctuality, supervisor spot audit tallies, and threat trends.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
