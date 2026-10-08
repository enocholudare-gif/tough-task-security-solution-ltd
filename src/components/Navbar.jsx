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
    { id: 'careers', label: 'Careers' },
    { id: 'coverage', label: 'Coverage' },
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

  // Button Color Styles based on Click State
  const getQuoteBtnStyle = () => {
    if (quoteBtnState === 1) {
      return 'bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-emerald-500/30 text-white';
    }
    if (quoteBtnState === 2) {
      return 'bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-amber-500/30 text-white';
    }
    return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-600 shadow-blue-600/30 text-white';
  };

  return (
    <>
      {/* Main Sticky Navbar - Clean & Never Touches Hero Section */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-slate-800/90 shadow-2xl ${
          scrolled 
            ? 'bg-[#080c16]/98 backdrop-blur-md py-3' 
            : 'bg-[#080c16] py-3.5 sm:py-4'
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo Brand on Left: Clean Single Name (TOUGH TASK SECURITY SOLUTION LTD) */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3.5 text-left focus:outline-none group cursor-pointer"
            title="Click to toggle emblem animation"
            aria-label="Tough Task Security Solution Ltd Home"
          >
            {/* Animated Logo Container: 3D Flip, Halo Glow & Status Light */}
            <div 
              className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-lg transition-all duration-500 transform ${
                logoToggled 
                  ? 'bg-blue-600/30 border-2 border-blue-400 rotate-y-180 scale-105 shadow-[0_0_25px_rgba(59,130,246,0.7)]' 
                  : 'bg-[#0f172a] border border-slate-700 hover:border-blue-500 hover:scale-105 shadow-md'
              }`}
            >
              <img 
                src="/assets/logo.png" 
                alt="Tough Task Security Solution Ltd" 
                className={`w-full h-full object-contain transition-transform duration-500 ${
                  logoToggled ? 'rotate-12 scale-110' : 'group-hover:scale-105'
                }`}
              />
              {logoToggled && (
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#080c16] animate-ping" />
              )}
            </div>

            {/* Clean, Non-Repetitive Company Name */}
            <div className="flex flex-col justify-center">
              <span className={`text-sm sm:text-base font-black tracking-tight uppercase font-display leading-tight transition-colors duration-300 ${
                logoToggled ? 'text-blue-400' : 'text-white group-hover:text-blue-400'
              }`}>
                TOUGH TASK SECURITY SOLUTION LTD
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-mono font-medium">
                ZAMBIA • 10 PROVINCES COVERAGE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30 shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* REQUEST A QUOTE Button with Animated Multi-Color Hover & Click Transition */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleQuoteClick}
              className={`relative overflow-hidden px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center group cursor-pointer ${getQuoteBtnStyle()}`}
            >
              <span className="relative z-10 flex items-center">
                <span>REQUEST A QUOTE</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:+260777127114"
              className="p-2 text-emerald-400 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800"
              aria-label="Call emergency hotline"
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
          <div className="lg:hidden border-t border-slate-800 bg-[#080c16] px-5 py-5 space-y-3 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors text-left ${
                      isActive
                        ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-600'}`} />
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
                className={`w-full py-3 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center transition-all ${getQuoteBtnStyle()}`}
              >
                <span>REQUEST A SECURITY QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              
              <div className="p-3 bg-[#0d1320] rounded-lg border border-slate-800 text-xs space-y-1 text-slate-300">
                <div className="font-semibold text-white">24/7 Dispatch Desk:</div>
                <div className="flex justify-between items-center pt-1">
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
