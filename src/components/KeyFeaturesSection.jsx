import React, { useState, useRef } from 'react';
import { Shield, Award, Users, Radio, HeartHandshake, ArrowUpRight, Droplets, Waves, CheckCircle2 } from 'lucide-react';

export default function KeyFeaturesSection({ onOpenQuote }) {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const features = [
    {
      id: 'professionalism',
      number: '01',
      title: 'Professionalism',
      tagline: 'Utmost Competence & Client Trust',
      description: 'Our team is dedicated to delivering outstanding services with the utmost competence and professionalism, ensuring client trust and satisfaction.',
      icon: Award,
      floatSpeed: 'animate-[waterFlow_7s_ease-in-out_infinite]',
      pillLabel: 'UNCOMPROMISING STANDARD'
    },
    {
      id: 'client-centric',
      number: '02',
      title: 'Client-Centric Approach',
      tagline: 'Tailored Safety & Maximum Satisfaction',
      description: "We prioritize our clients' needs, ensuring that every service is tailored to provide maximum safety and satisfaction.",
      icon: HeartHandshake,
      floatSpeed: 'animate-[waterFlow_8.5s_ease-in-out_infinite_1.2s]',
      pillLabel: 'BESPOKE DEPLOYMENT'
    },
    {
      id: 'advanced-tech',
      number: '03',
      title: 'Advanced Technology',
      tagline: 'Proactive Threat Prevention',
      description: 'Our integration of cutting-edge technologies enhances the security solutions we provide, staying ahead of potential threats.',
      icon: Radio,
      floatSpeed: 'animate-[waterFlow_7.8s_ease-in-out_infinite_2.4s]',
      pillLabel: 'REAL-TIME TELEMETRY'
    },
    {
      id: 'trained-personnel',
      number: '04',
      title: 'Trained Personnel',
      tagline: 'Continuous Upgrades & Best Practices',
      description: 'Our team of security professionals is continuously updated on the latest techniques and technologies to ensure best practices in security management.',
      icon: Users,
      floatSpeed: 'animate-[waterFlow_9s_ease-in-out_infinite_3.6s]',
      pillLabel: 'POLICE VETTED DRILL'
    }
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="key-features-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 lg:py-36 bg-[#f8fafc] text-slate-900 overflow-hidden border-y border-slate-200/80"
    >
      
      {/* 1. LUMINOUS WHITE & SILVER FLOWING WATER BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Crisp White Pearl Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f1f5f9] to-[#e2e8f0]" />

        {/* Ambient Silver Water Refraction Glow */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-[0.45] transition-all duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(203,213,225,0.7) 0%, rgba(226,232,240,0.4) 45%, transparent 70%)',
            left: `calc(${mousePos.x}% - 400px)`,
            top: `calc(${mousePos.y}% - 400px)`
          }}
        />

        {/* Silky Silver Water Ribbons */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-32 right-1/4 w-[700px] h-[700px] bg-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />

        {/* Pure Flowing Water SVG Waves (Luminous Silk Mesh) */}
        <div className="absolute inset-x-0 bottom-0 h-64 opacity-40 pointer-events-none">
          <svg className="w-full h-full animate-[flowingWater_14s_ease-in-out_infinite_alternate]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="url(#white-water-grad-1)" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,208C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            <defs>
              <linearGradient id="white-water-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-48 opacity-30 pointer-events-none">
          <svg className="w-full h-full animate-[flowingWater_10s_ease-in-out_infinite_alternate-reverse]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="url(#white-water-grad-2)" d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            <defs>
              <linearGradient id="white-water-grad-2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Micro Grid Overlay for High-End Engineering Texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* 2. SECTION CONTENT */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
        
        {/* Header - Crisp High-End Editorial Black & Platinum Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-300/80 text-slate-800 text-[11px] font-mono font-bold tracking-[0.2em] uppercase shadow-sm">
            <Waves className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>EXCELLENCE AT ITS FINEST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight uppercase text-slate-900 leading-[1.08] font-display">
            KEY <span className="bg-gradient-to-r from-blue-600 via-slate-800 to-indigo-600 bg-clip-text text-transparent">FEATURES</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Built upon military-standard discipline, technology-driven transparency, and tailored client protection across Zambia.
          </p>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-600/60 to-transparent mx-auto pt-1" />
        </div>

        {/* 3. FOUR FLOATING WHITE/SILVER LIQUID GLASS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            const isHovered = activeCard === feat.id;

            return (
              <div
                key={feat.id}
                onMouseEnter={() => setActiveCard(feat.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative group cursor-pointer transition-all duration-700 ${feat.floatSpeed}`}
              >
                {/* Frosted Pure White / Silver Floating Pod */}
                <div 
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full backdrop-blur-2xl transition-all duration-500 border ${
                    isHovered
                      ? 'bg-white/95 border-blue-500/80 shadow-[0_25px_60px_rgba(37,99,235,0.15)] -translate-y-2.5 scale-[1.02]'
                      : 'bg-white/80 border-slate-200/90 hover:border-slate-400 shadow-[0_15px_35px_rgba(0,0,0,0.05)]'
                  }`}
                >
                  {/* Subtle Silver Top Line */}
                  <div className={`absolute top-0 left-6 right-6 h-[2px] transition-opacity duration-500 rounded-full ${
                    isHovered ? 'bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-100' : 'bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-40'
                  }`} />

                  <div className="space-y-6">
                    
                    {/* Top Row: Icon + Numeral */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                        isHovered 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-110' 
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}>
                        <IconComponent className="w-5 h-5 transition-transform duration-300" />
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                        / 0{idx + 1}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-black font-display text-slate-900 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                        {feat.title}
                      </h3>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                        {feat.tagline}
                      </div>
                    </div>

                    {/* Exact Description Provided */}
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {feat.description}
                    </p>

                  </div>

                  {/* Card Bottom: Clean Action Trigger */}
                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold">
                      {feat.pillLabel}
                    </span>

                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuote(feat.title);
                      }}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-sm"
                      title={`Enquire: ${feat.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>

                {/* Soft Liquid Shadow Reflection */}
                <div className={`h-4 mx-8 rounded-full blur-md transition-all duration-500 ${
                  isHovered ? 'bg-blue-500/20 scale-105' : 'bg-slate-300/40 scale-90'
                }`} />

              </div>
            );
          })}
        </div>

        {/* 4. REFINED BOTTOM FLOWING WATER BAR (WHITE THEME) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-900 uppercase font-display tracking-tight">
                Single-Contract Security Management
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Unified SLAs, real-time GPS telemetry, and 24/7 central dispatch.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>REQUEST RISK ASSESSMENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
