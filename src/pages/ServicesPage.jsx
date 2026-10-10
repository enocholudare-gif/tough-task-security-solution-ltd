import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, ChevronRight, Phone, ArrowRight, Layers, Lock, Eye, Users, AlertTriangle, Truck, UserCheck, Search, FileText, Zap, Compass, RotateCw } from 'lucide-react';
import { services } from '../data/servicesData';

export default function ServicesPage({ onOpenQuote }) {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Active service object
  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  // Auto-rotating orbital cards around central logo
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isRotating]);

  // Radius for orbital circle
  const orbitalRadius = 240; // in px for desktop

  return (
    <div className="py-16 bg-[#f1f5f9] text-slate-900 space-y-20 light-grid-pattern">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Layers className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            <span>COMPREHENSIVE DEFENSE CAPABILITIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
            SPECIALIZED <span className="text-emerald-600">SECURITY SERVICES</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From disciplined physical guarding to armored bullion escorts and 24/7 CCTV surveillance, explore our full spectrum of enterprise security solutions.
          </p>
        </div>
      </div>

      {/* ========================================================
          2. SERVICES HERO SECTION:
             GREY BACKGROUND + LOGO IN THE MIDDLE + ROTATING ORBITAL CARDS
             CLICKABLE TO SHOW DETAILS IN A WHITE BACKGROUND CARD
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#e9edf3] border-2 border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden space-y-12">
          
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Section Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-300 pb-5 relative z-10">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                INTERACTIVE 360° DEFENSE WHEEL
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-slate-900">
                OUR SERVICES ORBITAL HUB
              </h2>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="text-slate-600 hidden sm:inline">
                Click any service card to view details:
              </span>
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`px-3 py-1.5 rounded-lg border flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  isRotating 
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                <span>{isRotating ? 'Auto Rotating' : 'Rotation Paused'}</span>
              </button>
            </div>
          </div>

          {/* 360-DEGREE ROTATING ORBITAL HERO STAGE (DESKTOP) */}
          <div 
            className="hidden lg:flex relative items-center justify-center min-h-[580px] w-full"
            onMouseEnter={() => setIsRotating(false)}
            onMouseLeave={() => setIsRotating(true)}
          >
            {/* Concentric Radar Orbit Rings */}
            <div className="absolute w-[480px] h-[480px] rounded-full border-2 border-dashed border-emerald-500/30 pointer-events-none animate-radar" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-300 pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-emerald-400/20 pointer-events-none" />

            {/* ========================================================
                CENTER: TOUGH TASK LOGO WITH GLOWING RADAR PEDESTAL
               ======================================================== */}
            <div className="relative z-20 w-36 h-36 rounded-full bg-white border-4 border-emerald-500 shadow-2xl flex flex-col items-center justify-center p-3 text-center group cursor-pointer">
              <div className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-md pointer-events-none animate-pulse" />
              <img
                src="/assets/logo.png"
                alt="Tough Task Security Solutions Ltd"
                className="w-16 h-16 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] font-black font-display uppercase tracking-tight text-slate-900 mt-1 leading-tight">
                TOUGH TASK
              </span>
              <span className="text-[8px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                CORE DEFENSE
              </span>
            </div>

            {/* ========================================================
                SURROUNDING CARDS: 8 SERVICES ROTATING AROUND LOGO
               ======================================================== */}
            {services.map((svc, idx) => {
              const total = services.length;
              // Calculate orbital position
              const currentAngleRad = ((idx / total) * 360 + rotationAngle) * (Math.PI / 180);
              const xPos = Math.cos(currentAngleRad) * orbitalRadius;
              const yPos = Math.sin(currentAngleRad) * orbitalRadius;
              const isSelected = activeServiceId === svc.id;

              return (
                <div
                  key={svc.id}
                  style={{
                    transform: `translate(${xPos}px, ${yPos}px)`,
                    transition: isRotating ? 'none' : 'transform 0.5s ease-out'
                  }}
                  onClick={() => {
                    setActiveServiceId(svc.id);
                    setIsRotating(false);
                  }}
                  className={`absolute z-30 cursor-pointer w-44 p-3 rounded-2xl border-2 transition-all duration-300 shadow-lg ${
                    isSelected
                      ? 'bg-emerald-600 border-white text-white scale-110 shadow-emerald-600/40 ring-4 ring-emerald-500/30'
                      : 'bg-white/95 border-slate-200 text-slate-900 hover:border-emerald-500 hover:scale-105'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-emerald-700'
                    }`}>
                      {svc.number}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-500'}`} />
                  </div>
                  <h3 className={`text-xs font-black uppercase font-display leading-tight truncate ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {svc.title}
                  </h3>
                  <p className={`text-[10px] mt-1 line-clamp-1 ${
                    isSelected ? 'text-emerald-100' : 'text-slate-500'
                  }`}>
                    {svc.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RESPONSIVE CARDS PICKER (TABLET & MOBILE) */}
          <div className="lg:hidden space-y-4">
            <div className="flex items-center justify-center py-4">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-500 shadow-xl flex flex-col items-center justify-center p-2 text-center">
                <img
                  src="/assets/logo.png"
                  alt="Tough Task"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-[9px] font-bold text-slate-900 uppercase">
                  Tough Task
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {services.map((svc) => {
                const isSelected = activeServiceId === svc.id;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveServiceId(svc.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 border-emerald-500 text-white shadow-md'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold opacity-80 mb-0.5">
                      {svc.number}
                    </div>
                    <div className="text-xs font-bold uppercase truncate">
                      {svc.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              ACTIVE SERVICE DETAILS DISPLAY (WHITE BACKGROUND CARD)
             ======================================================== */}
          <div 
            key={activeService.id}
            className="bg-white text-slate-900 border-2 border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8 animate-fade-in-up relative z-10"
          >
            {/* Top Detail Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
                    SERVICE {activeService.number} OF 08
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                    DEPLOYABLE NATIONWIDE ACROSS ZAMBIA
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-slate-900">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 font-medium">
                  {activeService.tagline}
                </p>
              </div>

              <button
                onClick={() => onOpenQuote(activeService.title)}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer btn-shimmer self-start md:self-center"
              >
                <Shield className="w-4 h-4" />
                <span>REQUEST THIS SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Split Image & Scope Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: HD Service Visual */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80 bg-slate-100 group">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <span className="bg-emerald-600 px-2 py-1 rounded text-[11px] font-bold">
                    VERIFIED SOP
                  </span>
                  <p className="text-[11px] text-slate-200 mt-1">Supervised field execution adhering to Zambian regulatory laws.</p>
                </div>
              </div>

              {/* Right: Operational Capabilities & SLAs */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500">
                    OPERATIONAL OVERVIEW
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {activeService.description}
                  </p>
                </div>

                {/* Core Features */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-700">
                    KEY CAPABILITIES & CONTROLS:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & SLA */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-800 flex items-center space-x-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>CONTRACT DELIVERABLES & GUARANTEED SLAS:</span>
                  </h4>
                  <div className="space-y-1 text-xs text-slate-700">
                    {activeService.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 3. Bottom Multi-Site Deployment Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              CUSTOM CONTRACTS & TENDERS
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight">
              REQUIRE A MULTI-FACILITY OR PROVINCIAL CONTRACT?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Rhodespark operational desk will conduct a complimentary threat assessment and prepare custom deployment proposals.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all shrink-0 cursor-pointer btn-shimmer"
          >
            REQUEST MULTI-SITE QUOTE
          </button>
        </div>
      </div>

    </div>
  );
}
