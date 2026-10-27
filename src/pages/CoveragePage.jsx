import React from 'react';
import CoverageSection from '../components/CoverageSection';
import { MapPin, ChevronRight } from 'lucide-react';
import { provincesData } from '../data/coverageData';

export default function CoveragePage({ onOpenQuote }) {
  return (
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen py-16 lg:py-24 space-y-16">
      
      {/* Page Hero */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-3.5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-8 h-[1.5px] bg-[#16A34A]" />
            <span>NATIONAL DEPLOYMENT NETWORK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] font-display tracking-tight uppercase leading-tight">
            OPERATIONS IN ALL <span className="text-[#16A34A]">10 PROVINCES</span>
          </h1>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            With verified operational presence in 42 core economic districts, Tough Task delivers rapid mobilization, armed escorts, and managed guarding anywhere across the Republic of Zambia.
          </p>
        </div>
      </div>

      {/* Main Interactive Map & District Explorer */}
      <CoverageSection onOpenQuote={onOpenQuote} />

      {/* Provincial Directory Grid with Crisp White Cards */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
            PROVINCIAL OPERATIONAL BREAKDOWN
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm">
            Complete list of active districts and response commands across Zambia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provincesData.map((prov) => (
            <div 
              key={prov.id} 
              className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 space-y-4 hover:border-[#16A34A] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#16A34A]" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-display uppercase">
                      {prov.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-green-800 bg-green-50 px-2 py-0.5 rounded-md border border-green-200 font-bold">
                    {prov.districts.length} {prov.districts.length === 1 ? 'District' : 'Districts'}
                  </span>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {prov.description}
                </p>

                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <div className="text-[10px] font-bold text-green-700 uppercase tracking-wider font-mono">
                    Active Operational Districts:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {prov.districts.map((d, dIdx) => (
                      <span key={dIdx} className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-[11px] text-[#0F172A] font-mono">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-mono">
                <span className="text-[#64748B] text-[11px]">
                  HQ: <strong className="text-[#0F172A]">{prov.capital}</strong>
                </span>
                <button
                  onClick={() => onOpenQuote(`${prov.name}`)}
                  className="text-xs font-bold text-[#16A34A] hover:text-[#15803D] uppercase flex items-center cursor-pointer font-mono"
                >
                  <span>Enquire Area</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
