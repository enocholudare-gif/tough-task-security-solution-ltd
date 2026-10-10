import React from 'react';
import { Shield, Phone, Mail, MapPin, ArrowUp, ChevronRight, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { services } from '../data/servicesData';

export default function Footer({ setActivePage, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-400 font-sans pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid - Neat & Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0e1422] border border-slate-700 rounded-lg p-1.5 flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Tough Task Security Solutions" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight uppercase font-display">
                  TOUGH TASK
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                  SECURITY SOLUTIONS LIMITED
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional, technology-driven security solutions protecting people, property, corporate institutions, and high-value assets across all 10 provinces in Zambia.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                <span>100% Zambian Owned & Managed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                <span>GPS Telemetry & Digital Evidence Audits</span>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="pt-2 flex items-center space-x-2.5">
              <a
                href="https://www.facebook.com/share/1JTXFuQXzp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tough Task Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@toughtasksolution?_r=1&_t=ZS-9AQw2u1aGQP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tough Task TikTok"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.72 1.34-.05 2.53-.94 2.92-2.22.18-.55.22-1.13.21-1.71V.02h-.78z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/tough-task-security-solutions-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tough Task LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('careers')} className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('coverage')} className="hover:text-white transition-colors cursor-pointer">
                  Coverage
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              SECURITY SERVICES
            </h4>
            <ul className="space-y-1.5 text-xs">
              {services.map((svc) => (
                <li key={svc.id}>
                  <button 
                    onClick={() => handleLink('services')} 
                    className="hover:text-white transition-colors text-left flex items-start"
                  >
                    <span className="text-emerald-400 mr-1.5 font-mono text-[11px] font-bold">
                      {svc.number}
                    </span>
                    <span>{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch & Download Profile (Spartan SA Style) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              GET IN TOUCH
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed">
              Need a security solution tailored to your premises? Our Rhodespark control desk is ready 24/7 with professional guarding, tactical response, and offsite CCTV video monitoring.
            </p>

            <button
              onClick={() => onOpenQuote()}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2 cursor-pointer btn-shimmer"
            >
              <span>GET A SECURITY QUOTE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <div className="pt-2 text-xs text-slate-300 space-y-2 font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#0a0f1b] border border-slate-800">
                <span className="text-[11px] text-slate-400">Emergency 24/7:</span>
                <a href="tel:+260777127114" className="text-emerald-400 font-bold hover:underline">
                  +260 777 127 114
                </a>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#0a0f1b] border border-slate-800">
                <span className="text-[11px] text-slate-400">Operations Desk:</span>
                <a href="tel:+260968025444" className="text-emerald-400 font-bold hover:underline">
                  +260 968 025 444
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Head Office
              </div>
              <p className="text-xs text-slate-300">
                National Council for the Laity Building, Office No. 5, Rhodespark, Lusaka, Zambia
              </p>
            </div>
          </div>

        </div>

        {/* Spartan-Style Compliance & Accreditation Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Zambian-Owned & Managed Security Enterprise</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <span className="px-2.5 py-1 rounded bg-[#0b101c] border border-slate-800 text-slate-300">
              ✓ Ministry of Home Affairs Licensed
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0b101c] border border-slate-800 text-slate-300">
              ✓ Zambia Police Vetting & Clearance
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0b101c] border border-slate-800 text-slate-300">
              ✓ PACRA & ZRA Compliant
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © 2026 Tough Task Security Solutions Limited. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0b101c] border border-slate-800">
            <span className="text-slate-400 text-[11px]">System Status:</span>
            <span className="font-bold text-emerald-400 font-mono text-[11px] flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-ping"></span>
              Rhodespark Command Online
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors cursor-pointer">
              Privacy & Terms
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#0e1422] border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
