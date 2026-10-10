import React, { useState } from 'react';
import { Phone, MessageSquare, Shield, X, AlertTriangle, ArrowRight } from 'lucide-react';

export default function FloatingEmergencyButton({ onOpenQuote }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Expanded Quick Options Panel */}
      {expanded && (
        <div className="p-4 rounded-2xl bg-[#070b14]/98 border border-red-500/50 shadow-2xl backdrop-blur-xl w-72 space-y-3 animate-fadeIn text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2 text-red-400 font-bold uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>24/7 EMERGENCY DISPATCH</span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300">
            Instant connection with our Rhodespark, Lusaka operations desk.
          </p>

          <div className="space-y-2">
            <a
              href="tel:+260777127114"
              className="w-full py-2.5 px-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl flex items-center justify-between transition-colors shadow-md"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Control Room</span>
              </div>
              <span className="font-mono text-[10px] bg-red-700 px-2 py-0.5 rounded">24/7</span>
            </a>

            <a
              href="https://wa.me/260777127114?text=EMERGENCY%20DISPATCH%20REQUIRED:%20Please%20respond."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-between transition-colors shadow-md"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Dispatch</span>
              </div>
              <span className="font-mono text-[10px] bg-emerald-700 px-2 py-0.5 rounded">Live</span>
            </a>

            <button
              onClick={() => {
                setExpanded(false);
                if (onOpenQuote) onOpenQuote();
              }}
              className="w-full py-2 px-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
            >
              <span>Get Security Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[10px] text-slate-500 font-mono text-center pt-1">
            +260 777 127 114 • +260 968 025 444
          </div>
        </div>
      )}

      {/* Floating Main Button with Pulsing Beacon Ring */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white shadow-2xl shadow-red-600/50 border-2 border-red-400 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center btn-shimmer"
        aria-label="24/7 Emergency Dispatch"
      >
        {/* Pulsing Sonar Waves */}
        <span className="absolute -inset-3 rounded-full bg-red-600/30 animate-sonar pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-red-500 opacity-40 animate-ping pointer-events-none" />

        <div className="relative z-10 flex items-center space-x-2">
          {expanded ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Phone className="w-6 h-6 animate-pulse" />
              <span className="hidden sm:inline text-xs font-black uppercase tracking-wider font-mono pr-1">
                24/7 DISPATCH
              </span>
            </>
          )}
        </div>
      </button>

    </div>
  );
}
