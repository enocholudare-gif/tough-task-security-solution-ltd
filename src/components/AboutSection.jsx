import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, ChevronRight, ChevronLeft, Award, Lock, Users, Radio, ArrowRight, Eye, Play, Pause, MapPin, Zap, Target } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { processSteps } from '../data/technologyData';

export default function AboutSection({ onOpenQuote, setActivePage }) {
  // 1. Text Animation Ticker
  const animatedTaglines = [
    "100% POLICE-VETTED & FINGERPRINT-CLEARED SENTRIES",
    "SUB-5 MINUTE ARMED TACTICAL INTERVENTION IN KEY HUBS",
    "CONTINUOUS 24/7 CCTV VIDEO SURVEILLANCE & TWO-WAY AUDIO",
    "DISCIPLINED GUARDING WITH MILITARY DRILL ACCOUNTABILITY",
    "ARMORED BULLION TRANSIT & ZERO-LOSS LOGISTICS ACROSS ZAMBIA"
  ];
  const [activeTaglineIndex, setActiveTaglineIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setActiveTaglineIndex((prev) => (prev + 1) % animatedTaglines.length);
    }, 3500);
    return () => clearInterval(textTimer);
  }, [animatedTaglines.length]);

  // 2. Photo Carousel State (10s auto-cycle)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPhotoPlaying, setIsPhotoPlaying] = useState(true);
  const [photoProgress, setPhotoProgress] = useState(0);

  const aboutImages = [
    {
      src: '/assets/about/about-1.jpg',
      title: 'Tough Task Command & Guard Formations',
      desc: 'Disciplined security officers on parade and strict military drill deployment.',
      tag: 'DISCIPLINED SENTRY FORCE'
    },
    {
      src: '/assets/about/about-2.jpg',
      title: 'Armed Escort & Cash-In-Transit Team',
      desc: 'High-risk asset transportation and tactical route protection.',
      tag: 'TACTICAL ASSET ESCORT'
    },
    {
      src: '/assets/about/about-3.jpg',
      title: 'Corporate Access Screening & Frontline Security',
      desc: 'Biometric, visitor logs and courteous corporate reception security.',
      tag: 'CORPORATE RECEPTION GUARDING'
    },
    {
      src: '/assets/about/about-4.jpg',
      title: 'Perimeter Security & Industrial Patrols',
      desc: '24/7 continuous surveillance of facilities, warehouses and mining assets.',
      tag: 'INDUSTRIAL PERIMETER'
    },
    {
      src: '/assets/about/about-5.jpg',
      title: 'VIP Close Protection & Convoy Security',
      desc: 'Specialized executive escort services for diplomats and dignitaries.',
      tag: 'EXECUTIVE BODYGUARD'
    },
    {
      src: '/assets/about/about-6.jpg',
      title: 'Integrated CCTV Control & Electronic Telemetry',
      desc: 'Central monitoring station with instant radio dispatch across Zambia.',
      tag: '24/7 COMMAND DESK'
    },
    {
      src: '/assets/about/about-7.jpg',
      title: 'Rapid Alarm Intervention & Mobile Patrol Units',
      desc: 'Sub-5 minute response cruisers linked with emergency centers.',
      tag: 'RAPID INTERVENTION'
    },
    {
      src: '/assets/about/about-8.jpg',
      title: 'Drill Standards & Rigorous Personnel Vetting',
      desc: 'Continuous training updates on modern risk mitigation techniques.',
      tag: 'POLICE VETTED'
    }
  ];

  useEffect(() => {
    if (!isPhotoPlaying) return;
    const step = 100;
    const duration = 10000;
    const timer = setInterval(() => {
      setPhotoProgress((prev) => {
        if (prev >= 100) {
          setCurrentPhotoIndex((curr) => (curr + 1) % aboutImages.length);
          return 0;
        }
        return prev + (step / duration) * 100;
      });
    }, step);
    return () => clearInterval(timer);
  }, [isPhotoPlaying, aboutImages.length]);

  // 3. Five Core Pillars
  const fiveCorePillars = [
    {
      id: 'pillar-1',
      number: '01',
      title: 'Integrity',
      desc: 'Uncompromising honesty, transparent reporting, and zero tolerance for deviation across every guard post and command log.',
      icon: Award,
      animationClass: 'animate-float-water-1'
    },
    {
      id: 'pillar-2',
      number: '02',
      title: 'Discipline',
      desc: 'Military-grade drill posture, crisp ceremonial uniform inspection, punctuality, and unwavering alertness under all conditions.',
      icon: Shield,
      animationClass: 'animate-float-water-2'
    },
    {
      id: 'pillar-3',
      number: '03',
      title: 'Professionalism',
      desc: '100% Police vetted officers with fingerprint clearance certificates, trained in diplomatic etiquette and de-escalation protocols.',
      icon: Users,
      animationClass: 'animate-float-water-3'
    },
    {
      id: 'pillar-4',
      number: '04',
      title: 'Reliability',
      desc: 'Guaranteed 24/7/365 operational continuity, seamless shift handovers, and unannounced supervisor field audits day and night.',
      icon: Lock,
      animationClass: 'animate-float-water-4'
    },
    {
      id: 'pillar-5',
      number: '05',
      title: 'Innovation',
      desc: 'Field telemetry, electronic NFC guard patrol checkpoints, GPS fleet telemetry, and real-time incident escalation to Rhodespark.',
      icon: Radio,
      animationClass: 'animate-float-water-1'
    }
  ];

  // 4. Animated 5-Stage Deployment Process State (4s auto-advance)
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isProcessPlaying, setIsProcessPlaying] = useState(true);

  useEffect(() => {
    if (!isProcessPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % processSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isProcessPlaying]);

  return (
    <section id="about-section" className="py-20 lg:py-28 bg-[#f1f5f9] text-slate-900 border-t border-slate-200 relative overflow-hidden light-grid-pattern">
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
        
        {/* ========================================================
            1. ABOUT US HEADER WITH TEXT ANIMATION
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            <span>ESTABLISHED SECURITY ENTERPRISE • REPUBLIC OF ZAMBIA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
            ABOUT <span className="text-emerald-600">TOUGH TASK SECURITY</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            A 100% Zambian-owned corporate security provider setting the national benchmark for disciplined guarding, armed tactical response, and physical asset defense.
          </p>

          {/* Smooth Kinetic Text Animation */}
          <div className="pt-2">
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white border border-emerald-200 shadow-sm text-xs font-mono font-bold text-emerald-700 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="animate-fade-in-up" key={activeTaglineIndex}>
                {animatedTaglines[activeTaglineIndex]}
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. PICTURE SHOWING UNDER ABOUT US (REAL TEAM & PARADE)
           ======================================================== */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900 group">
          <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
            <img
              src="/assets/security-parade.jpg"
              alt="Tough Task Security Officers Parade and Drill Inspection"
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-103 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent hidden md:block" />

            {/* Top Operational Pill */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-emerald-400 flex items-center space-x-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OFFICIAL GUARD FORCE PARADE • RHODESPARK LUSAKA</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-600/90 text-white text-[11px] font-mono font-bold uppercase shadow-lg">
                100% POLICE VETTED
              </div>
            </div>

            {/* Bottom Caption Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-white space-y-2 max-w-3xl shadow-2xl">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>TOUGH TASK OPERATIONAL ROSTER • NATIONWIDE DEPLOYMENT</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-tight text-white">
                Discipline, Precision & Physical Presence Across Zambia
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Headquartered at the National Council for the Laity Building in Rhodespark, Lusaka, our officers undergo daily military drill standards, rigorous biometric background vetting, and supervisory spot audits.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. PHOTO REEL (8 PHOTOS) + MISSION / PHILOSOPHY
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: 10s Photo Reel Carousel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-900 h-[340px] sm:h-[400px] group">
              <img
                key={aboutImages[currentPhotoIndex].src}
                src={aboutImages[currentPhotoIndex].src}
                alt={aboutImages[currentPhotoIndex].title}
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

              {/* Tag & Counter */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <div className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-bold text-emerald-400 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{aboutImages[currentPhotoIndex].tag}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-bold text-slate-300">
                    {String(currentPhotoIndex + 1).padStart(2, '0')} / {String(aboutImages.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setIsPhotoPlaying(!isPhotoPlaying)}
                    className="p-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title={isPhotoPlaying ? "Pause" : "Play"}
                  >
                    {isPhotoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-emerald-400" />}
                  </button>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 space-y-1 pointer-events-auto">
                <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide flex items-center justify-between">
                  <span>{aboutImages[currentPhotoIndex].title}</span>
                  <span className="text-[10px] font-mono text-emerald-400">10s Auto-Cycle</span>
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                  {aboutImages[currentPhotoIndex].desc}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${photoProgress}%` }}
                  />
                </div>
              </div>

              {/* Left / Right Nav Arrows */}
              <button
                onClick={() => {
                  setPhotoProgress(0);
                  setCurrentPhotoIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setPhotoProgress(0);
                  setCurrentPhotoIndex((prev) => (prev + 1) % aboutImages.length);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-8 gap-1.5">
              {aboutImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPhotoProgress(0);
                    setCurrentPhotoIndex(idx);
                  }}
                  className={`relative h-11 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    currentPhotoIndex === idx
                      ? 'border-emerald-600 ring-2 ring-emerald-500/30 scale-105 shadow-sm'
                      : 'border-slate-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Mission & Operational Equation */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                FOUNDED ON DISCIPLINE &amp; ACCOUNTABILITY
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight uppercase leading-snug">
                PROTECTING ZAMBIA’S <br />
                <span className="text-emerald-600">PEOPLE, ASSETS & ENTERPRISES</span>
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                <strong>Tough Task Security Solutions Limited</strong> is a fully accredited private security contractor headquartered at the National Council for the Laity Building in Rhodes Park, Lusaka. We provide comprehensive physical guarding, rapid armed mobile intervention, VIP escorts, and 24/7 command room surveillance across all 10 provinces.
              </p>

              {/* The Tough Task Formula */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="font-mono font-bold text-emerald-700 uppercase tracking-wider text-[11px]">
                  OUR OPERATIONAL FORMULA:
                </div>
                <div className="text-slate-900 font-bold text-xs sm:text-sm">
                  PEOPLE + TECHNOLOGY + DISCIPLINE + RAPID RESPONSE + ACCOUNTABILITY
                </div>
                <p className="text-slate-500 text-[11px] leading-tight">
                  Every guard post is electronically verified with NFC checkpoints and unannounced night supervisory inspections.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer btn-shimmer"
              >
                REQUEST SECURITY ASSESSMENT
              </button>
              <button
                onClick={() => {
                  if (setActivePage) setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 flex items-center space-x-1.5 py-3.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span>Read Full Profile</span>
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================
            4. THE 5 CORE PILLARS WITH VIDEO ANIMATION OF PILLARS & FLOATING TEXT
           ======================================================== */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-slate-800 bg-[#070b13] text-white shadow-2xl">
          
          {/* Animated Pillar Video / Light Beam Effect Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Dark architectural mesh floor */}
            <div className="absolute inset-0 tactical-grid opacity-25" />
            
            {/* Luminous Architectural Pillars (Moving vertical beams simulating video pillar animation) */}
            <div className="absolute left-[10%] top-0 bottom-0 w-24 bg-gradient-to-t from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 blur-lg animate-pillar-beam-1" />
            <div className="absolute left-[30%] top-0 bottom-0 w-20 bg-gradient-to-t from-teal-500/0 via-teal-400/20 to-teal-500/0 blur-lg animate-pillar-beam-2" />
            <div className="absolute left-[50%] top-0 bottom-0 w-28 bg-gradient-to-t from-emerald-600/0 via-emerald-400/25 to-emerald-600/0 blur-lg animate-pillar-beam-3" />
            <div className="absolute left-[70%] top-0 bottom-0 w-20 bg-gradient-to-t from-emerald-500/0 via-green-400/20 to-emerald-500/0 blur-lg animate-pillar-beam-4" />
            <div className="absolute left-[90%] top-0 bottom-0 w-24 bg-gradient-to-t from-teal-500/0 via-teal-300/20 to-teal-500/0 blur-lg animate-pillar-beam-5" />

            {/* Glowing Pillar Shafts */}
            <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-emerald-500/40 animate-pillar-glow" />
            <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-emerald-500/30 animate-pillar-glow" />
            <div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-emerald-500/30 animate-pillar-glow" />
            <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-emerald-500/40 animate-pillar-glow" />
            
            {/* Center Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10 space-y-10">
            {/* Pillars Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                <span>ARCHITECTURAL FOUNDATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white leading-tight">
                OUR FIVE <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">CORE PILLARS</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                The five unshakeable columns upholding every deployment and client relationship across Zambia.
              </p>
            </div>

            {/* 5 Floating Pillar Cards (Floating physics animation on each card) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {fiveCorePillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className={`p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 hover:border-emerald-400 flex flex-col justify-between space-y-4 group transition-all duration-300 shadow-xl ${pillar.animationClass}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                          PILLAR {pillar.number}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-base font-black font-display uppercase tracking-wide text-white group-hover:text-emerald-400 transition-colors">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 text-[10px] font-mono text-emerald-400/90 flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Certified Operational Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================
            5. ANIMATED 5-STAGE DEPLOYMENT PROCESS
           ======================================================== */}
        <div className="pt-4 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
              <Zap className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              <span>STRUCTURED OPERATIONAL LIFECYCLE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
              THE 5-STAGE <span className="text-emerald-600">DEPLOYMENT PROCESS</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              An animated step-by-step workflow ensuring total accountability from initial site survey to continuous SLA execution.
            </p>
          </div>

          {/* Animated Process Navigation with Live Connecting Line */}
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="hidden sm:block absolute top-1/2 left-6 right-6 h-1 bg-slate-200 -translate-y-1/2 z-0" />
            
            {/* Animated Progress Fill Line */}
            <div
              className="hidden sm:block absolute top-1/2 left-6 h-1 bg-emerald-500 -translate-y-1/2 z-0 transition-all duration-500 ease-out"
              style={{
                width: `${(activeStepIndex / (processSteps.length - 1)) * 90}%`
              }}
            />

            {/* 5-Step Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 relative z-10">
              {processSteps.map((pStep, index) => {
                const isSelected = activeStepIndex === index;

                return (
                  <button
                    key={pStep.step}
                    onClick={() => setActiveStepIndex(index)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-600/30 scale-102 ring-4 ring-emerald-500/20'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                    }`}
                  >
                    {/* Active Pulse Beacon */}
                    {isSelected && (
                      <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-white animate-ping" />
                    )}

                    <div className="text-[11px] font-mono font-bold opacity-90 mb-0.5">
                      STAGE {pStep.step}
                    </div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wide truncate">
                      {pStep.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Process Card (Animated Card Content) */}
          <div 
            key={activeStepIndex}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xl animate-fade-in-up"
          >
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-2.5">
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  STEP {processSteps[activeStepIndex].step} OF 05
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {processSteps[activeStepIndex].name} PHASE
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase">
                {processSteps[activeStepIndex].headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {processSteps[activeStepIndex].description}
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 flex items-center space-x-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{processSteps[activeStepIndex].action}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shrink-0 transition-all shadow-md cursor-pointer btn-shimmer text-center"
              >
                REQUEST SITE SURVEY
              </button>
              <button
                onClick={() => setIsProcessPlaying(!isProcessPlaying)}
                className="px-3.5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-mono font-semibold transition-colors flex items-center space-x-1.5"
                title={isProcessPlaying ? "Pause process cycle" : "Resume process cycle"}
              >
                {isProcessPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-600" />}
                <span className="text-[11px]">{isProcessPlaying ? "Pause" : "Auto"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
