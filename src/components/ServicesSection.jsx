import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, X, Lock, Eye, Users, AlertTriangle, Truck, UserCheck, Search } from 'lucide-react';
import { services } from '../data/servicesData';

export default function ServicesSection({ onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (id) => {
    switch(id) {
      case 'manned-guarding': return <Users className="w-5 h-5 text-blue-400" />;
      case 'corporate-industrial': return <Lock className="w-5 h-5 text-blue-400" />;
      case 'event-security': return <Shield className="w-5 h-5 text-blue-400" />;
      case 'cash-in-transit': return <Truck className="w-5 h-5 text-blue-400" />;
      case 'surveillance-cctv': return <Eye className="w-5 h-5 text-blue-400" />;
      case 'vip-executive': return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'security-consultancy': return <Search className="w-5 h-5 text-blue-400" />;
      case 'emergency-response': return <AlertTriangle className="w-5 h-5 text-blue-400" />;
      default: return <Shield className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services-section" className="py-20 bg-[#080c14] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Focused */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 mr-1" />
            SECURITY SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white">
            OUR CORE <span className="text-blue-500">SERVICES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered protection protocols tailored to corporate entities, industrial facilities, and high-value operations across Zambia.
          </p>
        </div>

        {/* Clean, Uniform 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-xl bg-[#0e1422] border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1 shadow-lg group"
            >
              {/* Image Section */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.75] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/30 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-[#090d16]/90 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold text-blue-400 border border-slate-700">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#090d16]/90 border border-slate-700 flex items-center justify-center">
                  {getServiceIcon(service.id)}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 hover:bg-blue-600 rounded transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal - Clean & Crisp */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#090d16] border border-slate-750 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover filter brightness-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/50 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/90 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-xs font-mono text-blue-400 font-bold mb-1">
                  SERVICE #{selectedService.number}
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-300">
              <p className="text-slate-200 leading-relaxed text-sm">
                {selectedService.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Key Operational Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#0e1422] border border-slate-800 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Service Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedService.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center">
                      <Shield className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0e1422] border-t border-slate-800 flex justify-between items-center shrink-0">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuote(title);
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md"
              >
                Request Quotation
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
