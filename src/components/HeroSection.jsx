import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, Play, Sparkles, Activity } from 'lucide-react';

export default function HeroSection({ onOpenQuote, setActivePage }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  // 12 Bespoke Slides matching the 12 authentic Tough Task photographs
  const slides = [
    {
      id: 'slide-1',
      number: '01',
      pillLabel: 'Corporate Access Defense',
      badge: 'ARMED ACCESS DEFENSE',
      headlinePrefix: 'SECURING PRESTIGE',
      headlineHighlight: 'ENTERPRISE & COMMERCIAL',
      headlineSuffix: 'ENTRANCES.',
      description: 'Disciplined tactical officers equipped with biometric authorization, digital occurrence logging, and rapid threat neutralisation at high-profile facilities.',
      image: '/assets/hero/hero-1.jpg',
      kommodoUrl: 'https://kommodo.ai/i/V7XKKsO9SYq7IoA23wqN',
      theme: {
        glowRgba: 'rgba(6,182,212,0.28)',
        accentColor: 'text-cyan-400',
        highlightGradient: 'from-cyan-300 via-blue-400 to-indigo-300',
        badgeClass: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/40',
        btnGradient: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/40',
        pillActiveBorder: 'border-cyan-400/80 bg-cyan-950/40 text-cyan-300',
        progressColor: 'from-cyan-400 to-blue-500'
      }
    },
    {
      id: 'slide-2',
      number: '02',
      pillLabel: 'Vetted National Force',
      badge: '100% POLICE VETTED PERSONNEL',
      headlinePrefix: 'DISCIPLINED FORCE WITH',
      headlineHighlight: 'MILITARY-GRADE DRILL',
      headlineSuffix: '& INTEGRITY.',
      description: 'Rigorous fingerprint police clearances, continuous tactical training, and impeccable front-of-house presence protecting corporate and diplomatic sites.',
      image: '/assets/hero/hero-2.jpg',
      kommodoUrl: 'https://kommodo.ai/i/yQW8IENbXClVV4URuEIC',
      theme: {
        glowRgba: 'rgba(16,185,129,0.30)',
        accentColor: 'text-emerald-400',
        highlightGradient: 'from-emerald-300 via-teal-300 to-lime-300',
        badgeClass: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/40',
        btnGradient: 'bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/40',
        pillActiveBorder: 'border-emerald-400/80 bg-emerald-950/40 text-emerald-300',
        progressColor: 'from-emerald-400 to-teal-400'
      }
    },
    {
      id: 'slide-3',
      number: '03',
      pillLabel: 'VVIP Close Protection',
      badge: 'VVIP CLOSE PROTECTION OFFICER',
      headlinePrefix: 'ELITE EXECUTIVE',
      headlineHighlight: 'BODYGUARD & CLOSE',
      headlineSuffix: 'PROTECTION UNITS.',
      description: 'Specialized tactical details assigned to protect heads of state, diplomats, chief executives, and visiting international dignitaries with total discretion.',
      image: '/assets/hero/hero-3.jpg',
      kommodoUrl: 'https://kommodo.ai/i/WaHvma8uflHudgu8LldB',
      theme: {
        glowRgba: 'rgba(20,184,166,0.30)',
        accentColor: 'text-teal-300',
        highlightGradient: 'from-teal-300 via-cyan-300 to-emerald-300',
        badgeClass: 'text-teal-300 bg-teal-500/10 border-teal-400/40',
        btnGradient: 'bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 hover:from-teal-400 hover:to-emerald-500 shadow-teal-500/40',
        pillActiveBorder: 'border-teal-400/80 bg-teal-950/40 text-teal-300',
        progressColor: 'from-teal-300 to-cyan-400'
      }
    },
    {
      id: 'slide-4',
      number: '04',
      pillLabel: 'Highway Convoy Escort',
      badge: 'HIGH-SPEED CONVOY ESCORT',
      headlinePrefix: 'RAPID MOTORCADE',
      headlineHighlight: 'TRANSIT & ROAD CLEARANCE',
      headlineSuffix: 'LOGISTICS.',
      description: 'Armored lead vehicles, trained evasive drivers, and continuous VHF radio synchronization across all major inter-city Zambian transit routes.',
      image: '/assets/hero/hero-4.jpg',
      kommodoUrl: 'https://kommodo.ai/i/rGOo3acuGsy5zRkoGnrM',
      theme: {
        glowRgba: 'rgba(245,158,11,0.32)',
        accentColor: 'text-amber-400',
        highlightGradient: 'from-amber-300 via-orange-400 to-yellow-300',
        badgeClass: 'text-amber-300 bg-amber-500/10 border-amber-400/40',
        btnGradient: 'bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 hover:from-amber-400 hover:to-orange-500 shadow-amber-500/40',
        pillActiveBorder: 'border-amber-400/80 bg-amber-950/40 text-amber-300',
        progressColor: 'from-amber-400 to-orange-500'
      }
    },
    {
      id: 'slide-5',
      number: '05',
      pillLabel: 'Route Recon Surveillance',
      badge: 'ACTIVE ROUTE SURVEILLANCE',
      headlinePrefix: 'ADVANCED CONVOY',
      headlineHighlight: 'RECON & ANTI-AMBUSH',
      headlineSuffix: 'TACTICAL PROTOCOLS.',
      description: 'Proactive rear-guard and advance scout surveillance teams ensuring safe corridor passage through congested municipal and highway traffic.',
      image: '/assets/hero/hero-5.jpg',
      kommodoUrl: 'https://kommodo.ai/i/ZrB2gBXXio0W59QlVGqZ',
      theme: {
        glowRgba: 'rgba(99,102,241,0.30)',
        accentColor: 'text-indigo-400',
        highlightGradient: 'from-indigo-300 via-purple-300 to-cyan-300',
        badgeClass: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/40',
        btnGradient: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/40',
        pillActiveBorder: 'border-indigo-400/80 bg-indigo-950/40 text-indigo-300',
        progressColor: 'from-indigo-400 to-purple-400'
      }
    },
    {
      id: 'slide-6',
      number: '06',
      pillLabel: 'Diplomatic Perimeter Squad',
      badge: 'DIPLOMATIC PERIMETER SQUAD',
      headlinePrefix: 'MULTI-TIERED SECURE',
      headlineHighlight: 'PERIMETERS FOR HIGH-LEVEL',
      headlineSuffix: 'ARRIVALS.',
      description: 'Synchronized outer, middle, and inner security cordons preventing unauthorized penetration during critical VIP arrivals and diplomatic delegations.',
      image: '/assets/hero/hero-6.jpg',
      kommodoUrl: 'https://kommodo.ai/i/53TQpM3oLm4byHJJibU5',
      theme: {
        glowRgba: 'rgba(14,165,233,0.30)',
        accentColor: 'text-sky-400',
        highlightGradient: 'from-sky-300 via-blue-400 to-cyan-300',
        badgeClass: 'text-sky-300 bg-sky-500/10 border-sky-400/40',
        btnGradient: 'bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 hover:from-sky-400 hover:to-blue-500 shadow-sky-500/40',
        pillActiveBorder: 'border-sky-400/80 bg-sky-950/40 text-sky-300',
        progressColor: 'from-sky-400 to-blue-500'
      }
    },
    {
      id: 'slide-7',
      number: '07',
      pillLabel: 'Tactical Armed Response',
      badge: 'SUB-MINUTE TACTICAL INTERVENTION',
      headlinePrefix: 'LIGHTNING-FAST ARMED',
      headlineHighlight: 'BACKUP & ALARM',
      headlineSuffix: 'INTERVENTION.',
      description: 'Armed response crews on continuous 24/7 mobile patrol ready to deploy with sub-5 minute escalation across Lusaka and the Copperbelt.',
      image: '/assets/hero/hero-7.jpg',
      kommodoUrl: 'https://kommodo.ai/i/6yAi3RLLW55YddojIRxJ',
      theme: {
        glowRgba: 'rgba(239,68,68,0.32)',
        accentColor: 'text-rose-400',
        highlightGradient: 'from-rose-400 via-red-400 to-amber-300',
        badgeClass: 'text-rose-300 bg-rose-500/10 border-rose-400/40',
        btnGradient: 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 hover:to-red-500 shadow-rose-500/40',
        pillActiveBorder: 'border-rose-400/80 bg-rose-950/40 text-rose-300',
        progressColor: 'from-rose-400 to-red-500'
      }
    },
    {
      id: 'slide-8',
      number: '08',
      pillLabel: 'Operations Synchronization',
      badge: 'MISSION COMMAND SYNCHRONIZATION',
      headlinePrefix: 'STRATEGIC THREAT ANALYSIS',
      headlineHighlight: '& UNIFIED MISSION',
      headlineSuffix: 'COORDINATION.',
      description: 'Comprehensive site vulnerability assessments, daily pre-deployment intelligence briefings, and zero-compromise operational execution.',
      image: '/assets/hero/hero-8.jpg',
      kommodoUrl: 'https://kommodo.ai/i/gbmMRPfCVbv7uQerM138',
      theme: {
        glowRgba: 'rgba(132,204,22,0.30)',
        accentColor: 'text-lime-400',
        highlightGradient: 'from-lime-300 via-emerald-300 to-teal-300',
        badgeClass: 'text-lime-300 bg-lime-500/10 border-lime-400/40',
        btnGradient: 'bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-600 hover:from-lime-500 hover:to-emerald-500 shadow-lime-500/40',
        pillActiveBorder: 'border-lime-400/80 bg-lime-950/40 text-lime-300',
        progressColor: 'from-lime-400 to-emerald-400'
      }
    },
    {
      id: 'slide-9',
      number: '09',
      pillLabel: 'Suited Executive Detail',
      badge: 'SUITED EXECUTIVE PROTECTION',
      headlinePrefix: 'SUITED CORPORATE SECURITY',
      headlineHighlight: 'WITH SEAMLESS',
      headlineSuffix: 'DISCRETION.',
      description: 'Polished, protocol-fluent protection officers seamlessly blending into boardroom meetings, summits, and executive travel itineraries.',
      image: '/assets/hero/hero-9.jpg',
      kommodoUrl: 'https://kommodo.ai/i/9OA0yhzfnhGqjuCujVqJ',
      theme: {
        glowRgba: 'rgba(59,130,246,0.30)',
        accentColor: 'text-blue-400',
        highlightGradient: 'from-blue-300 via-indigo-300 to-sky-300',
        badgeClass: 'text-blue-300 bg-blue-500/10 border-blue-400/40',
        btnGradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/40',
        pillActiveBorder: 'border-blue-400/80 bg-blue-950/40 text-blue-300',
        progressColor: 'from-blue-400 to-indigo-400'
      }
    },
    {
      id: 'slide-10',
      number: '10',
      pillLabel: 'Night Perimeter Sentries',
      badge: 'NIGHT TACTICAL INTERVENTION',
      headlinePrefix: 'VIGILANT NIGHT PATROLS',
      headlineHighlight: '& COMPOUND PERIMETER',
      headlineSuffix: 'DEFENSE.',
      description: 'Round-the-clock armed sentries with night-vision gear, electronic NFC checkpoints, and infrared motion telemetry.',
      image: '/assets/hero/hero-10.jpg',
      kommodoUrl: 'https://kommodo.ai/i/FuLG3Qq8qsD81fS3Pv0n',
      theme: {
        glowRgba: 'rgba(34,211,238,0.32)',
        accentColor: 'text-cyan-300',
        highlightGradient: 'from-cyan-300 via-teal-300 to-blue-300',
        badgeClass: 'text-cyan-300 bg-cyan-500/10 border-cyan-400/40',
        btnGradient: 'bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-teal-500 shadow-cyan-500/40',
        pillActiveBorder: 'border-cyan-400/80 bg-cyan-950/40 text-cyan-300',
        progressColor: 'from-cyan-300 to-blue-400'
      }
    },
    {
      id: 'slide-11',
      number: '11',
      pillLabel: '4x4 Mobile Patrol Fleet',
      badge: '24/7 RAPID MOBILE CRUISERS',
      headlinePrefix: 'HEAVY-DUTY 4X4 PATROL FLEET',
      headlineHighlight: 'WITH LIVE GPS',
      headlineSuffix: 'TELEMETRY.',
      description: 'All-terrain patrol cruisers equipped with emergency beacon strobe bars, VHF/UHF tactical radios, and real-time fleet telemetry.',
      image: '/assets/hero/hero-11.jpg',
      kommodoUrl: 'https://kommodo.ai/i/NVhOAwW3YyO87FHlFEBF',
      theme: {
        glowRgba: 'rgba(249,115,22,0.35)',
        accentColor: 'text-orange-400',
        highlightGradient: 'from-orange-400 via-amber-300 to-yellow-300',
        badgeClass: 'text-orange-300 bg-orange-500/10 border-orange-400/40',
        btnGradient: 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 hover:from-orange-500 hover:to-amber-500 shadow-orange-500/40',
        pillActiveBorder: 'border-orange-400/80 bg-orange-950/40 text-orange-300',
        progressColor: 'from-orange-400 to-amber-400'
      }
    },
    {
      id: 'slide-12',
      number: '12',
      pillLabel: 'High-Value Asset Logistics',
      badge: 'MINERAL & CASH LOGISTICS',
      headlinePrefix: 'IRONCLAD BULLION, CASH',
      headlineHighlight: '& COPPER CARGO',
      headlineSuffix: 'ESCORT.',
      description: 'Specialized security protocols for mining concessions, banking institutions, and cross-border commercial freight.',
      image: '/assets/hero/hero-12.jpg',
      kommodoUrl: 'https://kommodo.ai/i/RcJjtZBQU09vyPu5zbGo',
      theme: {
        glowRgba: 'rgba(52,211,153,0.32)',
        accentColor: 'text-emerald-300',
        highlightGradient: 'from-emerald-300 via-teal-300 to-cyan-300',
        badgeClass: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/40',
        btnGradient: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-500/40',
        pillActiveBorder: 'border-emerald-400/80 bg-emerald-950/40 text-emerald-300',
        progressColor: 'from-emerald-300 to-teal-300'
      }
    }
  ];

  const current = slides[activeSlide];

  // Continuous Auto-advance carousel every 5.0 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToKeyFeatures = () => {
    const featElem = document.getElementById('key-features-section');
    if (featElem) {
      featElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-[92vh] flex flex-col justify-between text-white overflow-hidden transition-all duration-700 bg-[#05080e] pt-6 pb-8"
      style={{
        boxShadow: `inset 0 0 120px ${current.theme.glowRgba}`
      }}
    >
      
      {/* 12-IMAGE BACKGROUND CAROUSEL WITH CLEAR VISIBILITY & SMOOTH CROSS-FADE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {slides.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.pillLabel}
            onError={(e) => {
              // Fallback to kommodo direct link if needed
              e.currentTarget.src = slide.kommodoUrl;
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.08] transition-all duration-1000 transform ${
              idx === activeSlide 
                ? 'opacity-80 scale-100 brightness-[0.72]' 
                : 'opacity-0 scale-105 pointer-events-none brightness-[0.3]'
            }`}
          />
        ))}

        {/* Dynamic Glowing Ambient Aura that changes color with every slide */}
        <div 
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 35%, ${current.theme.glowRgba}, transparent 65%)`
          }}
        />

        {/* Balanced Cinematic Gradients - Allows Image to Show Beautifully while Text Remains Crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080e]/75 via-[#05080e]/35 to-[#05080e]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080e]/80 via-transparent to-[#05080e]/80 pointer-events-none" />
      </div>

      {/* Main Container - Balanced Wide Enterprise Layout */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* TOP INTERACTIVE PILL CAROUSEL TABS (CLEAN RESPONSIVE GRID - NO CUTOFF) */}
        <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {slides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`relative overflow-hidden text-left p-2.5 rounded-xl border transition-all duration-300 cursor-pointer group flex items-center space-x-2 backdrop-blur-md ${
                    isActive 
                      ? `${slide.theme.pillActiveBorder} shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-[1.03] z-10` 
                      : 'bg-[#090e1a]/85 border-slate-800/90 hover:border-slate-700 hover:bg-[#0f172a]/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {/* Active Timer Progress Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-800 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${slide.theme.progressColor} animate-[progress_5s_linear_infinite]`} />
                    </div>
                  )}

                  <span className={`text-[10px] font-mono font-bold shrink-0 ${
                    isActive ? slide.theme.accentColor : 'text-slate-500'
                  }`}>
                    {slide.number}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider truncate">
                    {slide.pillLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPARTAN-STYLE HERO EDITORIAL STATEMENT */}
        <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6 px-2">
          
          {/* Glowing Slide Badge */}
          <div className="flex justify-center items-center gap-2">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-red-500/40 bg-red-950/40 text-red-400 text-xs font-bold font-mono tracking-wider uppercase backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-ping" />
              <span>ELITE SECURITY & TACTICAL RESPONSE • ZAMBIA</span>
            </div>
          </div>

          {/* Spartan Signature Headline */}
          <div className="min-h-[110px] sm:min-h-[140px] flex flex-col items-center justify-center space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight uppercase leading-[1.1] drop-shadow-xl text-white">
              ELITE SECURITY & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
                TACTICAL RESPONSE
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-bold text-slate-200 tracking-wide uppercase">
              Protecting people, properties and businesses across Zambia.
            </p>
          </div>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            {current.description || 'Advanced security solutions including armed guarding, AI monitoring, VIP protection, and rapid response teams operating from our Rhodespark 24/7 command center.'}
          </p>

          {/* SPARTAN-STYLE ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote(current.pillLabel)}
              className="w-full sm:w-auto px-9 py-4 font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center cursor-pointer text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 shadow-red-600/40 border border-red-500/40 group"
            >
              <Shield className="w-4 h-4 mr-2.5 group-hover:scale-110 transition-transform" />
              <span>GET SECURITY QUOTE</span>
              <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                const svc = document.getElementById('our-security-services');
                if (svc) svc.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('services');
              }}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-slate-700/90 hover:border-blue-400/60 transition-all flex items-center justify-center space-x-2.5 cursor-pointer shadow-xl group backdrop-blur-md"
            >
              <span>LEARN ABOUT OUR SERVICES</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Spartan Featured Hero Banner: RAPID RESPONSE PANIC BUTTON */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-red-950/70 via-[#0d1424]/90 to-blue-950/70 border border-red-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-left shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/50 flex items-center justify-center text-red-400 shrink-0">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-white tracking-wider flex items-center space-x-2">
                    <span>RAPID RESPONSE PANIC BUTTON</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold">24/7 LIVE</span>
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    One-touch emergency activation with instant GPS tracking & rapid dispatch.
                  </p>
                </div>
              </div>

              <a
                href="tel:+260777127114"
                className="w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] uppercase tracking-wider rounded-lg shrink-0 text-center transition-colors shadow-md"
              >
                CALL CONTROL ROOM
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM CAROUSEL CONTROLS & SECTOR STRIP */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 pt-8">
        <div className="border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Carousel Arrows & Counter */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-slate-400">
              <strong className="text-white">{activeSlide + 1}</strong> / {slides.length}
            </span>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Capability Chips */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 text-[11px] font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-[#0d1424]/90 backdrop-blur-md border border-slate-800 text-slate-300">
              ⚡ All 10 Provinces
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0d1424]/90 backdrop-blur-md border border-slate-800 text-slate-300">
              🛡️ 39 Districts
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0d1424]/90 backdrop-blur-md border border-slate-800 text-slate-300">
              🚨 24/7 Dispatch Desk
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
