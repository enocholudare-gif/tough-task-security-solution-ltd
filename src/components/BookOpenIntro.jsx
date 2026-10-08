import React, { useState, useEffect } from 'react';
import { Shield, Play, ArrowRight, X, Volume2, VolumeX, Eye } from 'lucide-react';

export default function BookOpenIntro({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // Start the book opening animation after a brief initial pause
    const timer1 = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    // Auto complete intro after animation finishes
    const timer2 = setTimeout(() => {
      handleFinish();
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleFinish = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#04060a] flex items-center justify-center overflow-hidden select-none">
      
      {/* Top Controls: Skip & Mute */}
      <div className="absolute top-6 right-6 z-50 flex items-center space-x-3">
        <button
          onClick={() => setMuted(!muted)}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all text-xs flex items-center"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
        </button>

        <button
          onClick={handleFinish}
          className="px-4 py-2 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center space-x-1.5"
        >
          <span>ENTER SITE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3D Book Container */}
      <div 
        className="relative w-[92vw] max-w-5xl h-[75vh] max-h-[580px] perspective-[2200px]"
        style={{ perspective: '2200px' }}
      >
        
        {/* INSIDE VIDEO REVEAL (The Content inside the book) */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0a0f1d] border border-slate-750 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col justify-between p-6 sm:p-10 z-10">
          
          {/* Background Video / Cinematic Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/security-leadership.jpg"
              alt="Tough Task Tactical Video"
              className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.2] scale-105 animate-pulse"
            />
            {/* Subtle animated scanline / grid */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-transparent to-[#060911]/80" />
            <div className="absolute inset-0 tactical-grid opacity-40" />
          </div>

          {/* Video Header HUD */}
          <div className="relative z-10 flex justify-between items-center text-xs border-b border-slate-800/80 pb-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-emerald-400 font-bold tracking-wider">
                TOUGH TASK COMMAND • LIVE FEED
              </span>
            </div>
            <span className="text-slate-400 font-mono hidden sm:inline">
              SECURE DOSSIER • ZAMBIA 2026
            </span>
          </div>

          {/* Video Center Presentation Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4 py-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0f172a]/90 border border-blue-500/40 rounded-2xl mx-auto p-3 flex items-center justify-center shadow-2xl animate-bounce">
              <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase font-display tracking-tight leading-tight">
                TOUGH TASK SECURITY SOLUTIONS
              </h2>
              <p className="text-xs sm:text-sm text-blue-400 font-mono font-semibold tracking-wider uppercase">
                SECURITY YOU CAN TRUST. PROTECTION THAT PERFORMS.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Nationwide guarding, rapid mobile patrols, GPS telemetry, and CCTV surveillance across all 10 provinces in Zambia.
            </p>

            <div className="pt-3">
              <button
                onClick={handleFinish}
                className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-blue-600/40 transition-all hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>OPEN OFFICIAL WEBSITE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Bottom Telemetry Bar */}
          <div className="relative z-10 flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-800/80 pt-3 font-mono">
            <span>PROVINCES: 10/10 ACTIVE</span>
            <span>DISPATCH: 24/7/365</span>
            <span className="hidden sm:inline">RHODESPARK, LUSAKA HQ</span>
          </div>

        </div>

        {/* LEFT BOOK COVER (3D FLIP) */}
        <div
          className={`absolute top-0 bottom-0 left-0 w-1/2 rounded-l-2xl bg-gradient-to-r from-[#0d1424] via-[#090e18] to-[#060a12] border-y border-l border-slate-700 shadow-2xl p-6 sm:p-8 flex flex-col justify-between z-20 origin-left transition-transform duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isOpen ? 'rotate-y-[-140deg] opacity-0 pointer-events-none' : 'rotate-y-0 opacity-100'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpen ? 'rotateY(-140deg) scale(0.95)' : 'rotateY(0deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Spine and Gold Foil Details */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-[10px] font-mono text-amber-400 tracking-widest uppercase">
              CONFIDENTIAL • CORPORATE PORTFOLIO
            </span>
            <span className="text-slate-600 font-mono text-[10px]">VOL. 2026</span>
          </div>

          <div className="space-y-3 text-left">
            <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-xl p-2">
              <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-display leading-tight">
              TOUGH TASK
            </h1>
            <div className="text-xs text-blue-400 font-semibold tracking-wider uppercase">
              SECURITY SOLUTIONS LIMITED
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Official Corporate Brief & National Operational Capabilities — Republic of Zambia.
            </p>
          </div>

          <div className="text-[10px] font-mono text-slate-500">
            HEAD OFFICE: RHODESPARK, LUSAKA
          </div>
        </div>

        {/* RIGHT BOOK COVER (3D FLIP) */}
        <div
          className={`absolute top-0 bottom-0 right-0 w-1/2 rounded-r-2xl bg-gradient-to-l from-[#0d1424] via-[#090e18] to-[#060a12] border-y border-r border-slate-700 shadow-2xl p-6 sm:p-8 flex flex-col justify-between z-20 origin-right transition-transform duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isOpen ? 'rotate-y-[140deg] opacity-0 pointer-events-none' : 'rotate-y-0 opacity-100'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpen ? 'rotateY(140deg) scale(0.95)' : 'rotateY(0deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
              REPUBLIC OF ZAMBIA
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>

          <div className="space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 mx-auto flex items-center justify-center text-blue-400 shadow-inner">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
              CLICK TO OPEN DOSSIER
            </div>
            <p className="text-[11px] text-slate-400">
              National Security Footprint • 10 Provinces • 39 Districts
            </p>
          </div>

          <div className="text-right text-[10px] font-mono text-slate-500">
            24/7 OPERATIONS COMMAND
          </div>
        </div>

      </div>
    </div>
  );
}
