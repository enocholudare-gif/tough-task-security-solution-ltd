import React, { useState } from 'react';
import { Phone, MessageSquare, X, ArrowRight } from 'lucide-react';

export default function FloatingEmergencyButton({ onOpenQuote }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Expanded Quick Options Panel */}
      {expanded && (
        <div 
          className="p-4 rounded-xl bg-[#181B1F] border border-white/10 shadow-2xl backdrop-blur-xl w-72 space-y-3 text-xs"
          role="dialog"
          aria-label="24/7 Emergency Dispatch Panel"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center space-x-2 text-[#22C55E] font-bold uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>24/7 Command Dispatch</span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded hover:bg-[#22272E] text-[#9E9D99] hover:text-[#F5F4F0] cursor-pointer"
              aria-label="Close panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#9E9D99]">
            Direct connection with our Rhodespark, Lusaka operations desk.
          </p>

          <div className="space-y-2">
            <a
              href="tel:+260777127114"
              className="w-full py-2.5 px-3 bg-[#22C55E] hover:bg-[#16A34A] text-[#14171A] font-bold rounded-lg flex items-center justify-between transition-colors shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Control Room</span>
              </div>
              <span className="font-mono text-[10px] bg-[#14171A]/20 px-1.5 py-0.5 rounded font-bold">24/7</span>
            </a>

            <a
              href="https://wa.me/260968025444?text=EMERGENCY%20DISPATCH%20REQUIRED:%20Please%20respond."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#22272E] hover:bg-white/10 border border-white/10 text-[#22C55E] hover:text-[#4ADE80] font-bold rounded-lg flex items-center justify-between transition-colors shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +260 0968025444</span>
              </div>
              <span className="font-mono text-[10px] bg-[#22C55E]/20 px-1.5 py-0.5 rounded text-[#22C55E]">Live</span>
            </a>

            <button
              onClick={() => {
                setExpanded(false);
                if (onOpenQuote) onOpenQuote();
              }}
              className="w-full py-2 px-3 bg-[#14171A] hover:bg-[#22272E] border border-white/10 text-[#F5F4F0] font-medium rounded-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>Request Quote / Callback</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#22C55E]" />
            </button>
          </div>

          <div className="text-[10px] text-[#6E6D69] font-mono text-center pt-1 border-t border-white/10">
            +260 777 127 114 • +260 968 025 444
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="relative group p-3.5 rounded-full bg-[#181B1F] hover:bg-[#22272E] text-[#22C55E] hover:text-[#4ADE80] shadow-xl border border-[#22C55E]/60 hover:border-[#22C55E] cursor-pointer transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
        aria-label="24/7 Emergency Dispatch Quick Action"
        aria-expanded={expanded}
      >
        <div className="relative z-10 flex items-center space-x-2">
          {expanded ? (
            <X className="w-5 h-5 text-[#F5F4F0]" />
          ) : (
            <>
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider font-mono pr-1 text-[#F5F4F0]">
                24/7 Dispatch
              </span>
            </>
          )}
        </div>
      </button>

    </div>
  );
}
