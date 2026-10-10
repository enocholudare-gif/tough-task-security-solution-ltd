import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, ChevronRight, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function HeroSection({ onOpenQuote, setActivePage }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // The 12 authentic Tough Task security operation photos
  const heroImages = [
    { src: '/assets/hero/hero-1.jpg', alt: 'Tough Task Security Officers Parade' },
    { src: '/assets/hero/hero-2.jpg', alt: 'Tough Task Tactical Response Unit' },
    { src: '/assets/hero/hero-3.jpg', alt: 'Tough Task Manned Guarding Team' },
    { src: '/assets/hero/hero-4.jpg', alt: 'Tough Task VIP Close Protection' },
    { src: '/assets/hero/hero-5.jpg', alt: 'Tough Task Mobile Patrol Cruisers' },
    { src: '/assets/hero/hero-6.jpg', alt: 'Tough Task Commercial Security Screening' },
    { src: '/assets/hero/hero-7.jpg', alt: 'Tough Task Armed Intervention Squad' },
    { src: '/assets/hero/hero-8.jpg', alt: 'Tough Task Security Control Operations' },
    { src: '/assets/hero/hero-9.jpg', alt: 'Tough Task Industrial Facility Guarding' },
    { src: '/assets/hero/hero-10.jpg', alt: 'Tough Task Checkpoint Verification' },
    { src: '/assets/hero/hero-11.jpg', alt: 'Tough Task Cash Transit & Asset Escort' },
    { src: '/assets/hero/hero-12.jpg', alt: 'Tough Task Executive Protection Sentry' }
  ];

  // Rotate between the 12 images every 10 seconds as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section 
      id="hero-section"
      className="relative bg-white text-slate-900 border-b border-slate-200 overflow-hidden light-grid-pattern py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle Ambient Emerald Aura */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: SPARTAN SA SIGNATURE HEADLINE & ACTIONS
             ======================================================== */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in-up">
            
            {/* Top Tactical Callout Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>ELITE DEFENSE & TACTICAL RESPONSE • ZAMBIA</span>
            </div>

            {/* Spartan SA Refined Editorial Title */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display uppercase tracking-tight text-slate-900 leading-[1.15]">
                Elite
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display uppercase tracking-tight text-slate-900 leading-[1.15]">
                Security &amp; Tactical <span className="text-emerald-600">Response</span>
              </h2>
            </div>

            {/* Spartan SA Signature Gradient Accent Bar (96px wide) */}
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-transparent rounded-full" />

            {/* Subheadline */}
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 leading-snug font-display">
              Protecting people, properties and businesses across Zambia.
            </h3>

            {/* Comprehensive Supporting Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Operating round-the-clock from our National Command Center in Rhodespark, Lusaka, Tough Task Security Solutions delivers disciplined static guarding, sub-5 minute tactical emergency dispatch, bullion logistics, and VIP close protection across all 10 provinces.
            </p>

            {/* Dual Action CTAs (Side by Side) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer border border-emerald-500/30 btn-shimmer"
              >
                <Shield className="w-4 h-4" />
                <span>GET SECURITY QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const svc = document.getElementById('our-security-services');
                  if (svc) svc.scrollIntoView({ behavior: 'smooth' });
                  else if (setActivePage) setActivePage('services');
                }}
                className="px-7 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border-2 border-slate-900 hover:border-emerald-600 hover:text-emerald-600 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm group"
              >
                <span>LEARN ABOUT OUR SERVICES</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Proof Indicators Strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-medium">
              <span className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Police Vetted Officers</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sub-5 Min Tactical Dispatch</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>10 Provinces • 39 Districts</span>
              </span>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: CLEAN 12-IMAGE SHOWCASE (ROTATES EVERY 10S)
              (All distracting text removed per user request)
             ======================================================== */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200/80 shadow-2xl group h-[420px] sm:h-[480px] lg:h-[530px] flex items-center justify-center">
              
              {/* 12 Images with Smooth Fade & Ken-Burns subtle motion */}
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>
              ))}

              {/* Navigation Arrows (Visible on hover) */}
              <button
                onClick={handlePrev}
                aria-label="Previous Image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Subtle Slide Indicators & Counter (Clean, Minimalist) */}
              <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-bold">
                  <span>{String(currentImageIndex + 1).padStart(2, '0')}</span>
                  <span className="text-emerald-400 mx-1">/</span>
                  <span className="text-slate-300">12</span>
                </div>

                {/* 12 Slide Progress Dots */}
                <div className="flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {heroImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentImageIndex(dotIdx)}
                      aria-label={`Jump to image ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === currentImageIndex
                          ? 'w-6 bg-emerald-500 shadow-sm'
                          : 'w-1.5 bg-white/40 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
