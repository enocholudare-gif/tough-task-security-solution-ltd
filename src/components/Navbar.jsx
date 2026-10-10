import React, { useState, useEffect } from 'react';
import { Shield, Phone, Menu, X, ChevronRight, MapPin, Mail, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoToggled, setLogoToggled] = useState(false);
  const [quoteBtnState, setQuoteBtnState] = useState(0); // 0: Default Blue, 1: Emerald Active, 2: Amber Alert

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'coverage', label: 'Areas We Service' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setLogoToggled(!logoToggled);
    handleNavClick('home');
  };

  const handleQuoteClick = () => {
    setQuoteBtnState((prev) => (prev + 1) % 3);
    onOpenQuote();
  };

  return (
    <>
      {/* Top Emergency Control Room Bar (Spartan SA Style) */}
      <div className="bg-[#04070d] border-b border-slate-800 text-slate-300 text-[11px] sm:text-xs py-2 px-4 sm:px-8 lg:px-12 relative z-50">
        <div className="w-full max-w-[1680px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 font-mono">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-300">
              24/7 National Command Center: <span className="text-emerald-400 font-bold">Active</span>
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">Rhodespark, Lusaka HQ</span>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400 uppercase font-medium">Emergency Control Room:</span>
              <a
                href="tel:+260777127114"
                className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors tracking-wide"
              >
                +260 777 127 114
              </a>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400 uppercase font-medium">Operations:</span>
              <a
                href="tel:+260968025444"
                className="text-slate-300 hover:text-emerald-400 font-bold transition-colors"
              >
                +260 968 025 444
              </a>
            </div>

            <a
              href="https://wa.me/260777127114"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors hidden lg:inline"
            >
              WhatsApp Dispatch →
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Spartan High-Contrast Tactical Layout) */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-slate-800/90 shadow-2xl ${
          scrolled 
            ? 'bg-[#070b14]/98 backdrop-blur-md py-3' 
            : 'bg-[#070b14] py-3.5 sm:py-4'
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo Brand on Left */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Tough Task Security Solutions Ltd Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d1424] border border-slate-700/80 p-1.5 flex items-center justify-center shrink-0 shadow-lg group-hover:border-emerald-500 transition-all duration-300">
              <img 
                src="/assets/logo.png" 
                alt="Tough Task Security Solutions Ltd" 
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform" 
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base font-black tracking-tight uppercase font-display text-white group-hover:text-emerald-400 transition-colors">
                TOUGH TASK SECURITY
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono font-semibold uppercase">
                SOLUTIONS LIMITED • ZAMBIA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-white bg-emerald-600 shadow-md shadow-emerald-600/30 font-extrabold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Spartan-Style GET SECURITY QUOTE Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleQuoteClick}
              className="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center group cursor-pointer border border-emerald-500/30 btn-shimmer"
            >
              <span>GET SECURITY QUOTE</span>
              <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:+260777127114"
              className="p-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/80 rounded-lg hover:bg-emerald-900/60 transition-colors"
              aria-label="Call emergency control room"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#070b14] px-5 py-5 space-y-3 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors text-left ${
                      isActive
                        ? 'text-white bg-emerald-600 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full py-3.5 font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white flex items-center justify-center transition-all btn-shimmer"
              >
                <span>GET SECURITY QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              
              <div className="p-3 bg-[#0d1320] rounded-lg border border-slate-800 text-xs space-y-1.5 text-slate-300 font-mono">
                <div className="font-semibold text-white">Emergency Control Room:</div>
                <div className="flex justify-between items-center pt-0.5">
                  <a href="tel:+260777127114" className="text-emerald-400 font-bold hover:underline">
                    +260 777 127 114
                  </a>
                  <a href="tel:+260968025444" className="text-blue-400 font-bold hover:underline">
                    +260 968 025 444
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
