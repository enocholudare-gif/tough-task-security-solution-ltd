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
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" />
                <span>100% Zambian Owned & Managed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                <span>GPS Telemetry & Digital Evidence Audits</span>
              </div>
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
                    <span className="text-blue-500 mr-1.5 font-mono text-[11px] font-bold">
                      {svc.number}
                    </span>
                    <span>{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              HEAD OFFICE
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-blue-400 mr-2 mt-0.5 shrink-0" />
                <div className="text-slate-300">
                  <p className="font-semibold text-white">National Council for the Laity Building</p>
                  <p>Office No. 5, Rhodespark</p>
                  <p>Lusaka, Zambia</p>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                  <a href="tel:+260777127114" className="text-slate-200 font-bold hover:text-white">
                    +260 777 127 114
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" />
                  <a href="tel:+260968025444" className="text-slate-200 font-bold hover:text-white">
                    +260 968 025 444
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                  <a href="mailto:info@toughtaskltd.com" className="text-slate-300 hover:text-white">
                    info@toughtaskltd.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Social Channels
                </span>
                <div className="flex flex-col space-y-1 text-xs">
                  <a 
                    href="https://www.facebook.com/search/top?q=Tough%20Task%20Security%20Solutions%20Ltd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    • Facebook: Tough Task Security Solutions Ltd
                  </a>
                  <a 
                    href="https://www.tiktok.com/@toughtasksecurity" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-pink-400 transition-colors"
                  >
                    • TikTok: Tough Task Security Solutions Ltd
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/tough-task-security-solutions-ltd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-blue-300 transition-colors"
                  >
                    • LinkedIn: Tough Task Security Solutions Ltd
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Attribution Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © 2026 Tough Task Security Solutions Limited. Registered Private Security Provider in Zambia.
          </div>

          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0b101c] border border-slate-800">
            <span className="text-slate-400 text-[11px]">Built by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 font-mono text-[11px] tracking-wide">
              Zambia Cloud Programmer
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors">
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
