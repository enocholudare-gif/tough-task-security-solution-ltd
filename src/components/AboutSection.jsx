import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, ChevronRight, ChevronLeft, Award, Lock, Users, Radio, ArrowRight, Eye, Play, Pause } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { processSteps } from '../data/technologyData';

export default function AboutSection({ onOpenQuote, setActivePage }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // 8 authentic Kommodo photos for Tough Task Security Solutions
  const aboutImages = [
    {
      src: '/assets/about/about-1.jpg',
      title: 'Tough Task Command & Guard Formations',
      desc: 'Disciplined security officers on parade and strict drill deployment.',
      tag: 'OPERATIONAL EXCELLENCE'
    },
    {
      src: '/assets/about/about-2.jpg',
      title: 'Armed Escort & Cash-In-Transit Team',
      desc: 'High-risk asset transportation and tactical route protection.',
      tag: 'TACTICAL PROTECTION'
    },
    {
      src: '/assets/about/about-3.jpg',
      title: 'Corporate Access Screening & Frontline Security',
      desc: 'Biometric, visitor logs and courteous corporate reception security.',
      tag: 'CORPORATE GUARDING'
    },
    {
      src: '/assets/about/about-4.jpg',
      title: 'Perimeter Security & Industrial Patrols',
      desc: '24/7 continuous surveillance of facilities, warehouses and mining assets.',
      tag: 'PERIMETER DEFENSE'
    },
    {
      src: '/assets/about/about-5.jpg',
      title: 'VIP Close Protection & Convoy Security',
      desc: 'Specialized executive escort services for diplomats and dignitaries.',
      tag: 'EXECUTIVE PROTECTION'
    },
    {
      src: '/assets/about/about-6.jpg',
      title: 'Integrated CCTV Control & Electronic Telemetry',
      desc: 'Central monitoring station with instant radio dispatch across Zambia.',
      tag: 'CCTV & TELEMETRY'
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
      tag: 'TRAINED PERSONNEL'
    }
  ];

  // 10-second auto-cycling timer with smooth progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 100; // updates every 100ms
    const totalDuration = 10000; // 10 seconds per slide as requested

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentPhotoIndex((curr) => (curr + 1) % aboutImages.length);
          return 0;
        }
        return prev + (intervalStep / totalDuration) * 100;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, aboutImages.length, currentPhotoIndex]);

  const handleNextPhoto = () => {
    setProgress(0);
    setCurrentPhotoIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const handlePrevPhoto = () => {
    setProgress(0);
    setCurrentPhotoIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  const handleSelectPhoto = (idx) => {
    setProgress(0);
    setCurrentPhotoIndex(idx);
  };

  const pillars = [
    {
      id: 'pillar-1',
      title: 'Professionalism',
      desc: 'Our team is dedicated to delivering outstanding services with the utmost competence and professionalism, ensuring client trust and satisfaction.',
      icon: Award,
      badge: 'PILLAR 01',
      color: 'blue'
    },
    {
      id: 'pillar-2',
      title: 'Client-Centric Approach',
      desc: "We prioritize our clients' needs, ensuring that every service is tailored to provide maximum safety, peace of mind, and total satisfaction.",
      icon: Users,
      badge: 'PILLAR 02',
      color: 'cyan'
    },
    {
      id: 'pillar-3',
      title: 'Advanced Technology',
      desc: 'Our integration of cutting-edge technologies enhances the security solutions we provide, staying ahead of potential threats at every turn.',
      icon: Radio,
      badge: 'PILLAR 03',
      color: 'emerald'
    }
  ];

  return (
    <section id="about-section" className="py-24 lg:py-32 bg-[#060911] text-slate-100 border-t border-slate-800/90 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 lg:space-y-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 mr-1 text-cyan-400" />
            <span>EXCELLENCE IN PRIVATE SECURITY • ESTABLISHED IN ZAMBIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
            ABOUT <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">US</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Discover our mission, vision, and values that guide us in delivering exceptional security services.
          </p>
        </div>

        {/* Top Split Layout: 10s Photo Reel Carousel (Left) + Pillars & Story (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: 10-Second Auto-Cycling Photo Reel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Active Image Stage with Overlays */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-[#090d16] h-[380px] sm:h-[460px] lg:h-[500px] group">
              <img
                key={aboutImages[currentPhotoIndex].src}
                src={aboutImages[currentPhotoIndex].src}
                alt={aboutImages[currentPhotoIndex].title}
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/30 to-transparent pointer-events-none" />

              {/* Tag & Counter */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <div className="px-3.5 py-1.5 rounded-full bg-[#060a14]/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-cyan-300 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{aboutImages[currentPhotoIndex].tag}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1.5 rounded-full bg-[#060a14]/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-slate-300">
                    {String(currentPhotoIndex + 1).padStart(2, '0')} / {String(aboutImages.length).padStart(2, '0')}
                  </span>
                  
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-[#060a14]/90 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title={isPlaying ? "Pause auto-advance" : "Resume 10s auto-advance"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-[#090d16]/90 backdrop-blur-md border border-slate-800 space-y-1.5 pointer-events-auto">
                <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide flex items-center justify-between">
                  <span>{aboutImages[currentPhotoIndex].title}</span>
                  <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">10s Auto-Cycle</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {aboutImages[currentPhotoIndex].desc}
                </p>

                {/* 10-Second Progress Bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Left / Right Nav Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#060a14]/80 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#060a14]/80 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Strip (8 Photos) */}
            <div className="grid grid-cols-8 gap-2">
              {aboutImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPhoto(idx)}
                  className={`relative h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentPhotoIndex === idx
                      ? 'border-cyan-400 ring-2 ring-cyan-400/30 scale-105 shadow-md'
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {currentPhotoIndex === idx && (
                    <div className="absolute inset-0 bg-cyan-500/20" />
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Mission, Vision & The 3 Core Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5 mr-1" />
                FOUNDED ON UNCOMPROMISING INTEGRITY
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight uppercase leading-tight">
                PROTECTING ZAMBIA’S <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                  PEOPLE, ASSETS & ENTERPRISES
                </span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>Tough Task Security Solutions Limited</strong> is a premier 100% Zambian-owned security contractor headquartered in Rhodes Park, Lusaka. We deliver disciplined guarding, armored transit, close protection, and electronic security telemetry across all 10 provinces.
              </p>
            </div>

            {/* The 3 Core Pillars as Requested */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0b101c] border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-black text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/80">
                            {pillar.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-400 hover:to-blue-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
              >
                REQUEST SECURITY ASSESSMENT
              </button>

              <button
                onClick={() => {
                  if (setActivePage) setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white flex items-center space-x-1.5 transition-colors cursor-pointer py-3.5 px-4 rounded-xl border border-slate-800 bg-[#0b101c] hover:border-slate-700"
              >
                <span>Read Full Corporate Profile</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom: "How We Work" 5-Stage Deployment Process */}
        <div className="pt-12 border-t border-slate-800/80 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              DEPLOYMENT LIFECYCLE
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
              HOW WE WORK: <span className="text-cyan-400">THE 5-STAGE DEPLOYMENT PROCESS</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              A structured operational workflow from initial site survey to ongoing SLA optimization.
            </p>
          </div>

          {/* 5-Step Process Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {processSteps.map((pStep, index) => {
              const isSelected = activeStepIndex === index;

              return (
                <button
                  key={pStep.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 border-cyan-400 text-white shadow-lg shadow-blue-600/30 scale-102'
                      : 'bg-[#0e1422] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#121a2c]'
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold opacity-80 mb-0.5">
                    STAGE {pStep.step}
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                    {pStep.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Process Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b101c] border border-slate-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xl">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex items-center space-x-2.5">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-950 text-cyan-300 border border-blue-800">
                  STEP {processSteps[activeStepIndex].step} OF 05
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {processSteps[activeStepIndex].name} PHASE
                </span>
              </div>
              <h4 className="text-xl font-bold text-white">
                {processSteps[activeStepIndex].headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {processSteps[activeStepIndex].description}
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{processSteps[activeStepIndex].action}</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-blue-600 hover:bg-cyan-500 text-white hover:text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl shrink-0 transition-all shadow-md cursor-pointer"
            >
              REQUEST SITE SURVEY
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
