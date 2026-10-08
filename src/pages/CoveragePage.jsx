import React from 'react';
import CoverageSection from '../components/CoverageSection';
import { Shield, MapPin, CheckCircle2, Phone, Truck, Radio, Building2 } from 'lucide-react';
import { provincesData, allLocationsList } from '../data/coverageData';

export default function CoveragePage({ onOpenQuote }) {
  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-20">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 mr-1 text-emerald-400 animate-pulse" />
            NATIONAL DEPLOYMENT NETWORK
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            OPERATIONS IN ALL <span className="text-blue-500">10 PROVINCES</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            With verified operational presence in 39 core economic districts, Tough Task delivers rapid mobilization, armed escorts, and managed guarding anywhere across the Republic of Zambia.
          </p>
        </div>
      </div>

      {/* Main Interactive Map & District Explorer */}
      <CoverageSection onOpenQuote={onOpenQuote} />

      {/* Province Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
            PROVINCIAL OPERATIONAL BREAKDOWN
          </h2>
          <p className="text-slate-400 text-sm">
            Complete list of active districts and response commands by province.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provincesData.map((prov) => (
            <div key={prov.id} className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-4 hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <h3 className="text-base font-bold text-white font-display uppercase">
                      {prov.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {prov.districts.length} {prov.districts.length === 1 ? 'District' : 'Districts'}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {prov.description}
                </p>

                <div className="pt-2 border-t border-security-850 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Active Operational Districts:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {prov.districts.map((d, dIdx) => (
                      <span key={dIdx} className="px-2 py-0.5 rounded bg-security-950 border border-security-800 text-xs text-slate-200 font-mono">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-security-850 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">
                  Regional Command: <strong className="text-white">{prov.capital}</strong>
                </span>
                <button
                  onClick={() => onOpenQuote(`${prov.name}`)}
                  className="text-xs font-bold text-blue-400 hover:text-white"
                >
                  Deploy Here →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
