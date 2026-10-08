import React, { useState, useMemo } from 'react';
import { MapPin, Search, CheckCircle2, Shield, Radio, Filter, ChevronRight } from 'lucide-react';
import { provincesData, allLocationsList } from '../data/coverageData';

export default function CoverageSection({ onOpenQuote }) {
  const [selectedProvinceId, setSelectedProvinceId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered districts
  const filteredDistricts = useMemo(() => {
    return allLocationsList.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (selectedProvinceId === 'all') return matchesSearch;
      
      const provinceObj = provincesData.find(p => p.id === selectedProvinceId);
      const matchesProvince = provinceObj ? item.province.toLowerCase().includes(provinceObj.name.toLowerCase()) : true;
      return matchesSearch && matchesProvince;
    });
  }, [searchQuery, selectedProvinceId]);

  const activeProvince = provincesData.find(p => p.id === selectedProvinceId);

  return (
    <section id="coverage-section" className="py-20 bg-[#070b12] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 mr-1 text-emerald-400 animate-pulse" />
            OPERATIONAL FOOTPRINT
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white">
            NATIONWIDE SECURITY <span className="text-blue-500">COVERAGE</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tough Task Security Solutions provides professional security services across Zambia, with operational coverage spanning all ten provinces and 39 key economic districts.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-1 text-xs font-semibold text-slate-300">
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" /> 10 / 10 Provinces Active</span>
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-400 mr-2" /> 39 Operational Districts</span>
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-400 mr-2" /> National Inter-District Escorts</span>
          </div>
        </div>

        {/* Clean Search & Province Filter Bar */}
        <div className="bg-[#0e1422] border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-lg space-y-3.5">
          <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search district or province..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#090d16] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count & Deploy Action */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end text-xs">
              <span className="text-slate-400 font-mono">
                Showing <strong className="text-white">{filteredDistricts.length}</strong> of 39 Districts
              </span>
              <button
                onClick={onOpenQuote}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
              >
                DEPLOY IN YOUR AREA
              </button>
            </div>
          </div>

          {/* Province Pills */}
          <div className="pt-2 border-t border-slate-800/80">
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => setSelectedProvinceId('all')}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedProvinceId === 'all'
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-[#090d16] text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                All 10 Provinces ({allLocationsList.length})
              </button>
              {provincesData.map((prov) => (
                <button
                  key={prov.id}
                  onClick={() => setSelectedProvinceId(prov.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedProvinceId === prov.id
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-[#090d16] text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {prov.name} ({prov.districts.length})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map & District List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Zambia SVG Map Visualization (5 cols) */}
          <div className="lg:col-span-5 bg-[#0e1422] border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  ZAMBIA PROVINCE MAP
                </h3>
                <p className="text-[11px] text-slate-400">
                  Select a province node to inspect deployment
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                10 PROVINCES
              </span>
            </div>

            {/* Tactical SVG Map */}
            <div className="relative aspect-[4/3] bg-[#090d16] rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 400 320" className="w-full h-full max-h-[300px]">
                <defs>
                  <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#182235" />
                    <stop offset="100%" stopColor="#0e1726" />
                  </linearGradient>
                </defs>

                {/* Stylized Zambia Contour */}
                <path
                  d="M 120 40 L 220 30 L 280 60 L 340 100 L 360 160 L 310 210 L 260 210 L 230 270 L 180 270 L 150 220 L 90 200 L 70 140 L 100 90 Z"
                  fill="url(#mapGrad)"
                  stroke="#334155"
                  strokeWidth="1.5"
                />

                {/* Province Nodes */}
                {provincesData.map((prov) => {
                  const isSelected = selectedProvinceId === prov.id;
                  const posX = (prov.mapCoord.x / 100) * 360 + 20;
                  const posY = (prov.mapCoord.y / 100) * 280 + 20;

                  return (
                    <g 
                      key={prov.id}
                      onClick={() => setSelectedProvinceId(prov.id)}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={posX}
                        cy={posY}
                        r={isSelected ? "8" : "5"}
                        fill={isSelected ? "#3b82f6" : "#0284c7"}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? "2" : "1"}
                        className="transition-all duration-200"
                      />
                      <text
                        x={posX}
                        y={posY - 9}
                        textAnchor="middle"
                        fill={isSelected ? "#ffffff" : "#94a3b8"}
                        fontSize="9"
                        fontWeight={isSelected ? "bold" : "normal"}
                        className="pointer-events-none tracking-tight"
                      >
                        {prov.name.replace(' Province', '')}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div className="absolute bottom-2 left-2 right-2 bg-[#090d16]/90 p-2 rounded border border-slate-800 text-[11px] flex justify-between items-center">
                <span className="text-slate-300 font-medium">
                  {activeProvince ? activeProvince.name : "All 10 Provinces"}
                </span>
                <span className="text-blue-400 font-bold">
                  {activeProvince ? `${activeProvince.districts.length} Districts` : "39 Districts Total"}
                </span>
              </div>
            </div>

            {/* Active Province Details */}
            {activeProvince && (
              <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white uppercase">{activeProvince.name}</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {activeProvince.status}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  {activeProvince.description}
                </p>
              </div>
            )}
          </div>

          {/* Right: Clean 2-Column District Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
              {filteredDistricts.length > 0 ? (
                filteredDistricts.map((district) => (
                  <div
                    key={district.id}
                    className="p-3.5 rounded-xl bg-[#0e1422] border border-slate-800 hover:border-blue-500/50 transition-colors flex flex-col justify-between space-y-2 shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <h4 className="text-sm font-bold text-white">{district.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-[#090d16] px-1.5 py-0.5 rounded border border-slate-800">
                          #{district.id}
                        </span>
                      </div>
                      <div className="text-[11px] text-blue-400 mt-0.5">
                        {district.province}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-1">
                        {district.coverage}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px]">
                      <span className="text-emerald-400 font-medium flex items-center">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Active Post
                      </span>
                      <button
                        onClick={() => onOpenQuote(district.name)}
                        className="text-blue-400 hover:text-white font-bold"
                      >
                        Deploy →
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 p-8 text-center bg-[#0e1422] rounded-xl border border-slate-800 text-xs text-slate-400">
                  No districts match "{searchQuery}".
                </div>
              )}
            </div>

            <div className="p-3 bg-[#0e1422] rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400 shrink-0" />
              <span>All 39 districts represent active deployment capability under Tough Task Security Solutions.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
