import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function DualSplitIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Automatically trigger the left & right split opening after a short intro pause
    const timer1 = setTimeout(() => {
      setOpened(true);
    }, 700);

    // Completely remove the overlay from DOM once doors have parted
    const timer2 = setTimeout(() => {
      setRemoved(true);
      if (onComplete) onComplete();
    }, 2800);

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
    }, 1200);
  };

  if (removed) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden select-none pointer-events-auto">
      
      {/* LEFT HALF CURTAIN / DOOR - GLIDES SMOOTHLY TO THE LEFT */}
      <div 
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-br from-[#0c1220] via-[#070b14] to-[#04060b] border-r border-slate-700/60 shadow-[20px_0_60px_rgba(0,0,0,0.9)] z-20 flex flex-col justify-between p-8 sm:p-12 transition-transform duration-[1400ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          opened ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TOUGH TASK SECURITY</span>
        </div>

        <div className="space-y-2 max-w-sm">
          <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
            REPUBLIC OF ZAMBIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-display uppercase tracking-tight leading-tight">
            SECURITY YOU CAN <span className="text-emerald-500">TRUST.</span>
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed hidden sm:block">
            Professional, technology-driven protection for people, property, and assets across 10 provinces.
          </p>
        </div>

        <div className="text-[10px] font-mono text-slate-500">
          RHODESPARK, LUSAKA HQ • #SecureWhatMattersMost
        </div>
      </div>

      {/* RIGHT HALF CURTAIN / DOOR - GLIDES SMOOTHLY TO THE RIGHT */}
      <div 
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-bl from-[#0c1220] via-[#070b14] to-[#04060b] border-l border-slate-700/60 shadow-[-20px_0_60px_rgba(0,0,0,0.9)] z-20 flex flex-col justify-between p-8 sm:p-12 transition-transform duration-[1400ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          opened ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex justify-end items-center text-[11px] font-mono text-slate-400 tracking-widest">
          <span>24/7 COMMAND DESK</span>
        </div>

        <div className="space-y-2 max-w-sm text-right self-end">
          <span className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase font-semibold">
            NATIONAL OPERATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-display uppercase tracking-tight leading-tight">
            PROTECTION THAT <span className="text-emerald-500">PERFORMS.</span>
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed hidden sm:block">
            Manned guarding, GPS tour telemetry, rapid mobile response, and CCTV analytics.
          </p>
        </div>

        <div className="text-[10px] font-mono text-slate-500 text-right">
          DISPATCH: +260 777 127 114
        </div>
      </div>

      {/* CENTER CREST EMBLEM (Sits right on the seam, fades as doors part) */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-700 ease-out flex flex-col items-center space-y-3 pointer-events-auto ${
          opened ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <button
          onClick={handleManualOpen}
          className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#090d16] border-2 border-emerald-500/50 p-4 shadow-[0_0_50px_rgba(16,185,129,0.4)] flex items-center justify-center hover:border-emerald-400 hover:scale-105 transition-all"
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
            className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>CLICK TO ENTER</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
}
