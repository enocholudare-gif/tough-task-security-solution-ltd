import React, { useState } from 'react';
import { Shield, CheckCircle2, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { services } from '../data/servicesData';

export default function ServicesPage({ onOpenQuote }) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);

  const activeService = services.find(s => s.id === selectedServiceId) || services[0];

  return (
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen py-16 lg:py-24 space-y-16">
      
      {/* 1. Header Section */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-3.5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-8 h-[1.5px] bg-[#16A34A]" />
            <span>ENTERPRISE DEFENSE CAPABILITIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] font-display tracking-tight uppercase leading-tight">
            SPECIALIZED <span className="text-[#16A34A]">SECURITY SERVICES</span>
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            From disciplined static sentries to armored bullion logistics and 24/7 CCTV surveillance telemetry, explore our comprehensive spectrum of security services deployed across Zambia.
          </p>
        </div>
      </div>

      {/* 2. Interactive Service Deep-Dive Showcase */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Service Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 text-xs">
          {services.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all font-semibold cursor-pointer flex items-center space-x-2 border shadow-xs ${
                selectedServiceId === srv.id
                  ? 'bg-[#16A34A] text-white border-[#16A34A] font-bold shadow-md shadow-[#16A34A]/25'
                  : 'bg-white text-[#475569] hover:text-[#0F172A] border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className={`font-mono text-[10px] ${selectedServiceId === srv.id ? 'opacity-90' : 'text-[#64748B]'}`}>{srv.number}</span>
              <span>{srv.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Detail Panel with Crisp White Card */}
        <div className="mt-8 bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Media Column (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-gray-900">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
            />
            <div className="absolute top-5 left-5 bg-white/95 border border-gray-200 px-3 py-1 rounded-xl text-xs font-mono font-bold text-[#16A34A] backdrop-blur-md shadow-sm">
              SERVICE SPECIFICATION • {activeService.number}
            </div>
          </div>

          {/* Details Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold block">
                {activeService.tagline}
              </span>

              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                {activeService.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Operational Features */}
            <div className="space-y-3 py-4 border-y border-gray-100">
              <div className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                OPERATIONAL CAPABILITIES &amp; STANDING ORDERS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start text-xs text-[#0F172A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] mr-2 shrink-0 mt-0.5" />
                    <span className="leading-snug text-[#475569]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Sectors */}
            {activeService.targetSectors && (
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-bold">
                  PRIMARY TARGET SECTORS:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.targetSectors.map((sector, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[11px] font-mono text-[#0F172A]"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenQuote(activeService.title)}
                className="w-full sm:w-auto px-7 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#16A34A]/25 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>REQUEST THIS SERVICE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+260777127114"
                className="w-full sm:w-auto px-5 py-3 bg-gray-50 hover:bg-gray-100 text-[#0F172A] border border-gray-200 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>24/7 Dispatch Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* 3. Full Service Catalog Grid with Crisp White Cards */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
            COMPLETE SERVICE CATALOG
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            Comprehensive security solutions available individually or as an integrated master defense package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-xl ${
                selectedServiceId === srv.id
                  ? 'border-[#16A34A] shadow-md shadow-[#16A34A]/15'
                  : 'border-gray-200/90 hover:border-gray-300'
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#16A34A]">
                    {srv.number}
                  </span>
                  <button
                    onClick={() => setSelectedServiceId(srv.id)}
                    className="text-[10px] font-mono text-[#64748B] hover:text-[#16A34A] uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    View Specs
                  </button>
                </div>

                <div className="h-44 w-full rounded-xl overflow-hidden bg-gray-900 relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] group-hover:text-[#16A34A] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {srv.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote(srv.title)}
                  className="text-xs font-bold font-mono text-[#16A34A] hover:text-[#15803D] uppercase flex items-center cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
                <button
                  onClick={() => setSelectedServiceId(srv.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#0F172A] border border-gray-200 text-xs font-mono transition-colors cursor-pointer"
                >
                  Inspect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
