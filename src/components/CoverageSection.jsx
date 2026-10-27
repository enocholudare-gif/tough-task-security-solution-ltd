import React, { useState } from 'react';
import { MapPin, Shield, CheckCircle2, Radio, ArrowRight } from 'lucide-react';
import { provincesData } from '../data/coverageData';

export default function CoverageSection({ onOpenQuote }) {
  const [activeProvId, setActiveProvId] = useState(provincesData[0].id);

  const activeProvince = provincesData.find(p => p.id === activeProvId) || provincesData[0];

  return (
    <section 
      id="coverage-section" 
      className="py-20 lg:py-28 bg-[#F0F2F5] text-[#0F172A] border-t border-gray-200/80 relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-300/80 gap-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-300 text-green-800 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Radio className="w-3.5 h-3.5 text-[#16A34A] animate-pulse" />
              <span>NATIONAL OPERATIONAL FOOTPRINT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-snug">
              NATIONWIDE COVERAGE: <span className="text-[#16A34A]">10 PROVINCES &amp; 42 DISTRICTS</span>
            </h2>

            <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed">
              Headquartered in Rhodespark, Lusaka, Tough Task Security Solutions Ltd. operates a centralized, 24/7 national command infrastructure with active sentry detachments and tactical patrol cruisers across all 10 provinces in Zambia.
            </p>
          </div>

          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={() => onOpenQuote(`${activeProvince.name} Deployment`)}
              className="px-5 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center space-x-2 shadow-md shadow-[#16A34A]/25 cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>DEPLOY IN {activeProvince.name.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            MODERNIZED, CLEAN INTERACTIVE PROVINCE SELECTOR BAR
           ======================================================== */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 text-xs scrollbar-thin">
          {provincesData.map((prov) => (
            <button
              key={prov.id}
              onClick={() => setActiveProvId(prov.id)}
              className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all font-semibold cursor-pointer flex items-center space-x-2 border shadow-xs ${
                activeProvId === prov.id
                  ? 'bg-[#16A34A] text-white border-[#16A34A] shadow-md shadow-[#16A34A]/25'
                  : 'bg-white text-[#475569] hover:text-[#0F172A] border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeProvId === prov.id ? 'bg-white' : 'bg-[#16A34A]'}`} />
              <span>{prov.name.replace(' Province', '')}</span>
              <span className={`font-mono text-[10px] ${activeProvId === prov.id ? 'opacity-90' : 'text-[#64748B]'}`}>({prov.districts.length})</span>
            </button>
          ))}
        </div>

        {/* ========================================================
            FULLY ARRANGED PROVINCE DOSSIER & DISTRICT GRID
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Provincial Command Intelligence Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 flex flex-col justify-between space-y-6 shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                  PROVINCIAL COMMAND REPORT
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-green-50 border border-green-200 text-[10px] font-mono text-green-700 font-bold">
                  {activeProvince.status || '24/7 ACTIVE'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                {activeProvince.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activeProvince.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-mono">
                  <span className="text-[#64748B]">Regional Command Center:</span>
                  <strong className="text-[#0F172A]">{activeProvince.capital}</strong>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-mono">
                  <span className="text-[#64748B]">Operational Districts:</span>
                  <strong className="text-[#16A34A] font-bold">{activeProvince.districts.length} Districts Active</strong>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-mono">
                  <span className="text-[#64748B]">Central Telemetry:</span>
                  <strong className="text-[#0F172A]">Synchronized to Rhodespark HQ</strong>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote(`${activeProvince.name} Deployment Requirements`)}
                className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#16A34A]/25 cursor-pointer"
              >
                <span>REQUEST DEPLOYMENT IN {activeProvince.name.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Clean, Modernized Districts Grid (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 flex flex-col justify-between space-y-6 shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                  ACTIVE DISTRICT STATIONS IN {activeProvince.name.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-[#64748B]">
                  {activeProvince.districts.length} Locations Monitored
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeProvince.districts.map((dst, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-green-50/70 border border-gray-100 hover:border-green-300 transition-all flex items-center space-x-2.5 group shadow-xs"
                  >
                    <MapPin className="w-4 h-4 text-[#16A34A] shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0F172A] truncate font-display">
                        {dst}
                      </div>
                      <div className="text-[10px] font-mono text-[#64748B] flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                        <span>24/7 Monitored</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* National Compliance Note */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-between text-xs font-mono text-[#475569]">
              <span className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] mr-2 shrink-0" />
                Continuous supervisory patrols across all provincial corridors
              </span>
              <span className="text-[#16A34A] font-bold shrink-0 ml-2">Zambia Nationwide</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
