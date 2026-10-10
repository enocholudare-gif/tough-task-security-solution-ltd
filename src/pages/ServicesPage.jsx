import React, { useState } from 'react';
import { Shield, CheckCircle2, ChevronRight, Phone, ArrowRight, Layers, Lock, Eye, Users, AlertTriangle, Truck, UserCheck, Search, FileText } from 'lucide-react';
import { services } from '../data/servicesData';

export default function ServicesPage({ onOpenQuote }) {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-20">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            COMPREHENSIVE PROTECTION
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            SPECIALIZED <span className="text-emerald-500">SECURITY SERVICES</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From disciplined physical guarding to armored bullion escorts and 24/7 CCTV video surveillance, discover our full spectrum of enterprise security solutions.
          </p>
        </div>
      </div>

      {/* Interactive Service Selector & Detailed Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Service Nav List (4 cols) */}
          <div className="lg:col-span-4 space-y-2 bg-security-900 border border-security-800 p-3 rounded-2xl">
            {services.map((svc) => {
              const isActive = activeServiceId === svc.id;

              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveServiceId(svc.id)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-md'
                      : 'bg-transparent text-slate-300 hover:bg-security-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      isActive ? 'bg-emerald-800 text-white' : 'bg-security-950 text-slate-400'
                    }`}>
                      {svc.number}
                    </span>
                    <span className="text-sm font-semibold truncate">{svc.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                </button>
              );
            })}

            <div className="pt-4 p-2 border-t border-security-800">
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-3 bg-security-950 hover:bg-security-800 border border-security-700 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
              >
                REQUEST CUSTOM MULTI-SITE QUOTE
              </button>
            </div>
          </div>

          {/* Right: Active Service Deep Dive Card (8 cols) */}
          <div className="lg:col-span-8 bg-security-900 border border-security-750 rounded-2xl overflow-hidden shadow-2xl space-y-6">
            
            {/* Service Banner Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-security-950">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-security-900 via-security-900/40 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-security-950/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-bold text-emerald-400 border border-security-700">
                SERVICE {activeService.number} OF 08
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase">
                  DEPLOYABLE NATIONWIDE ACROSS ZAMBIA
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase">
                  {activeService.title}
                </h2>
              </div>
            </div>

            {/* Service Body Content */}
            <div className="p-6 sm:p-8 space-y-8 pt-0">
              
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Comprehensive Service Scope
                </h3>
                <p className="text-base text-slate-200 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Core Features */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Standard Operational Capabilities & Controls
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-security-950 border border-security-800 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & SLAs */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contract Deliverables & SLA Guarantees
                </h3>
                <div className="p-4 rounded-xl bg-security-950 border border-security-800 space-y-2 text-xs text-slate-300">
                  {activeService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable Sectors */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Recommended For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.targetSectors.map((sec, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-security-950 border border-security-800 text-xs text-slate-300">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-security-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-xs text-slate-400">
                  Need custom deployment specifications?
                </div>
                <button
                  onClick={() => onOpenQuote(activeService.title)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center cursor-pointer btn-shimmer"
                >
                  <span>REQUEST QUOTE FOR {activeService.title}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
