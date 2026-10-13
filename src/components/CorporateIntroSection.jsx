import React from 'react';
import { Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CorporateIntroSection({ onOpenQuote }) {
  const metrics = [
    { value: '10 / 10', label: 'Provinces Active', desc: 'Full national coverage in Zambia' },
    { value: '39', label: 'Operational Districts', desc: 'Commercial & mining corridors' },
    { value: '<5m', label: 'Tactical Escalation SLA', desc: 'Priority cruiser response' },
    { value: '100%', label: 'Police CID Vetted', desc: 'Biometric fingerprint clearance' }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F0F2F5] text-[#0F172A] border-y border-gray-200/80 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Straightened Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Straightened, Proportional Hierarchy */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/25 text-[#16A34A] text-xs font-mono font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>ACCREDITED CORPORATE SECURITY • RHODESPARK LUSAKA HQ</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-snug">
              DISCIPLINED PROTECTION FOR <br className="hidden sm:inline" />
              <span className="text-[#16A34A]">COMMERCIAL &amp; DIPLOMATIC</span> ASSETS
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-2xl font-normal">
              Headquartered in Rhodespark, Lusaka, Tough Task Security Solutions Ltd. operates a centralized, 24/7 national command infrastructure. Every deployed sentry is vetted with biometric fingerprint clearances by the Zambia Police Service Criminal Investigation Department (CID), guaranteeing military drill posture, ceremonial turnout, and strict adherence to site standing orders.
            </p>

            {/* Core Verification Checkpoints in White Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-white border border-gray-200/80 shadow-xs text-xs text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="font-medium">Statutory PACRA Co. 120220042456</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-white border border-gray-200/80 shadow-xs text-xs text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="font-medium">Ministry of Home Affairs Registered</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-white border border-gray-200/80 shadow-xs text-xs text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="font-medium">Electronic NFC Patrol Checkpoint Logging</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-white border border-gray-200/80 shadow-xs text-xs text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="font-medium">24/7 Direct VHF/UHF HQ Radio Link</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuote('Site Security Vulnerability Audit')}
                className="px-6 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-md shadow-[#16A34A]/20 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>BOOK ON-SITE SECURITY AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#our-security-services"
                className="px-5 py-3.5 bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>VIEW CORE SERVICES ↓</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Field Asset Photographic Portal */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/assets/security-parade.jpg"
                alt="Tough Task Security Officers on Inspection Parade"
                className="w-full h-full object-cover object-center filter contrast-[1.05] hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Bottom Stamp Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-slate-900/90 border border-white/20 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <span className="text-[#4ADE80] font-bold">CEREMONIAL PARADE INSPECTION</span>
                <span className="text-gray-300">RHODESPARK HQ</span>
              </div>
            </div>
          </div>

        </div>

        {/* Integrated High-Trust Metric Band (Spartan SA Inspired Clean Rows) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-white border border-gray-200/90 hover:border-[#16A34A]/50 transition-colors shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#16A34A] mb-1">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                {m.label}
              </div>
              <div className="text-[11px] text-[#64748B] font-mono mt-0.5">
                {m.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
