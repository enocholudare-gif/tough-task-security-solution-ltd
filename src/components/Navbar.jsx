import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { id: 'projects', label: 'Projects & Portfolio' },
    { id: 'coverage', label: 'Areas of Operation' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-[#22272E] ${
          scrolled 
            ? 'bg-[#14171A]/95 backdrop-blur-md py-3 shadow-xl' 
            : 'bg-[#14171A] py-4'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo Brand on Left */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-lg group cursor-pointer"
            aria-label="Tough Task Security Solutions Ltd Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#181B1F] border border-[#22272E] p-1.5 flex items-center justify-center shrink-0 shadow-md group-hover:border-[#22C55E] transition-colors duration-200">
              <img 
                src="/assets/logo.png" 
                alt="Tough Task Security Solutions Ltd" 
                className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-200" 
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base font-bold tracking-tight uppercase font-display text-[#F5F4F0] group-hover:text-[#22C55E] transition-colors">
                Tough Task
              </span>
              <span className="text-[10px] tracking-widest text-[#9E9D99] font-mono font-medium uppercase">
                Security Solutions Ltd
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (link.id === 'projects' && activePage === 'operations');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-150 cursor-pointer ${
                    isActive 
                      ? 'text-[#14171A] bg-[#22C55E] font-bold shadow-sm' 
                      : 'text-[#9E9D99] hover:text-[#F5F4F0] hover:bg-[#181B1F]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#14171A] font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-150 shadow-sm flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Direct Call */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:+260777127114"
              className="p-2 text-[#22C55E] bg-[#181B1F] border border-[#22272E] rounded-lg hover:bg-[#22272E] transition-colors"
              aria-label="Call Emergency Control Room"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#181B1F] border border-[#22272E] text-[#F5F4F0] hover:text-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#22272E] bg-[#14171A] px-5 py-5 space-y-3 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activePage === link.id || (link.id === 'projects' && activePage === 'operations');
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors text-left ${
                      isActive
                        ? 'text-[#14171A] bg-[#22C55E] font-bold'
                        : 'text-[#9E9D99] hover:text-[#F5F4F0] hover:bg-[#181B1F]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#14171A]' : 'text-[#6E6D69]'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#22272E] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm bg-[#22C55E] hover:bg-[#16A34A] text-[#14171A] flex items-center justify-center transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </button>
              
              <div className="p-3 bg-[#181B1F] rounded-lg border border-[#22272E] text-xs space-y-1.5 text-[#9E9D99] font-mono">
                <div className="font-semibold text-[#F5F4F0]">24/7 Operations Command:</div>
                <div className="flex justify-between items-center pt-0.5">
                  <a href="tel:+260777127114" className="text-[#22C55E] font-bold hover:underline">
                    +260 777 127 114
                  </a>
                  <a href="tel:+260968025444" className="text-[#9E9D99] hover:text-[#F5F4F0] font-bold hover:underline">
                    +260 968 025 444
                  </a>
                </div>
                <div className="pt-1 border-t border-[#22272E] text-center">
                  <a 
                    href="https://wa.me/260968025444?text=Hello%20Tough%20Task%20Security,%20I%20would%20like%20to%20enquire%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#22C55E] font-bold text-[11px] hover:underline"
                  >
                    WhatsApp Chat: +260 0968025444
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
