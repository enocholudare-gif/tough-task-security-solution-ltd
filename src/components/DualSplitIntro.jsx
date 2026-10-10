import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function DualSplitIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Majestic slow opening after an initial pause
    const timer1 = setTimeout(() => {
      setOpened(true);
    }, 1200);

    // Remove overlay once doors have completely parted slowly
    const timer2 = setTimeout(() => {
      setRemoved(true);
      if (onComplete) onComplete();
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleManualOpen = () => {
    setOpened(true);
    setTimeout(() => {
      setRemoved(true);
      if (onComplete) onComplete();
    }, 2600);
  };

  if (removed) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden select-none pointer-events-auto">
      
      {/* LEFT HALF DOOR - TACTICAL GREY - SLOW MAJESTIC GLIDE */}
      <div 
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 border-r border-slate-600/70 shadow-[25px_0_60px_rgba(0,0,0,0.6)] z-20 flex flex-col justify-between p-8 sm:p-14 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          opened ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>TOUGH TASK SECURITY</span>
        </div>

        <div className="space-y-3 max-w-md">
          <span className="text-[11px] font-mono text-slate-300 tracking-wider uppercase font-semibold">
            REPUBLIC OF ZAMBIA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight leading-tight">
            SECURITY YOU CAN <span className="text-emerald-400">TRUST.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed hidden sm:block">
            Professional physical protection, manned guarding, and rapid response for people, properties, and corporate assets nationwide.
          </p>
        </div>

        <div className="text-[11px] font-mono text-slate-400">
          RHODESPARK, LUSAKA HQ • #SecureWhatMattersMost
        </div>
      </div>

      {/* RIGHT HALF DOOR - TACTICAL GREY - SLOW MAJESTIC GLIDE */}
      <div 
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-bl from-slate-800 via-slate-850 to-slate-900 border-l border-slate-600/70 shadow-[-25px_0_60px_rgba(0,0,0,0.6)] z-20 flex flex-col justify-between p-8 sm:p-14 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          opened ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex justify-end items-center text-[11px] font-mono text-slate-300 tracking-widest">
          <span>24/7 COMMAND DESK</span>
        </div>

        <div className="space-y-3 max-w-md text-right self-end">
          <span className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase font-semibold">
            NATIONAL DEFENSE OPERATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight leading-tight">
            PROTECTION THAT <span className="text-emerald-400">PERFORMS.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed hidden sm:block">
            Vetted security sentries, armed mobile patrol cruisers, cash escort, and 24/7 control room surveillance.
          </p>
        </div>

        <div className="text-[11px] font-mono text-slate-400 text-right">
          DISPATCH: +260 777 127 114
        </div>
      </div>

      {/* CENTER CREST EMBLEM */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-1000 ease-out flex flex-col items-center space-y-3 pointer-events-auto ${
          opened ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <button
          onClick={handleManualOpen}
          aria-label="Enter Website"
          className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-800 border-2 border-emerald-500/60 p-4 shadow-[0_0_50px_rgba(16,185,129,0.35)] flex items-center justify-center hover:border-emerald-400 hover:scale-105 transition-all cursor-pointer"
        >
          <img 
            src="/assets/logo.png" 
            alt="Tough Task Emblem" 
            className="w-full h-full object-contain filter drop-shadow" 
          />
        </button>

        <div className="text-center space-y-1">
          <div className="text-xs font-bold font-display uppercase tracking-widest text-white">
            TOUGH TASK SECURITY
          </div>
          <button
            onClick={handleManualOpen}
            className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/90 px-3.5 py-1.5 rounded-full border border-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer shadow-md"
          >
            <span>CLICK TO ENTER</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
}
