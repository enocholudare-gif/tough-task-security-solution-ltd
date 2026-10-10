import React, { useState, useEffect } from 'react';
import { Shield, Phone, AlertTriangle, CheckCircle2, ChevronRight, ArrowRight, Lock, MapPin, Radio, Users } from 'lucide-react';

export default function HeroSection({ onOpenQuote, setActivePage }) {
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);

  // Tactical showcases matching Tough Task's authentic units
  const responseUnits = [
    {
      id: 'unit-panic',
      title: 'Rapid Response Panic Button',
      tag: 'ONE-TOUCH WIRELESS GPS DISTANCE',
      image: '/assets/services/service-alarm-response.jpg',
      badge: '24/7 RHODESPARK LINK',
      description: 'Instant distress signal with real-time GPS telemetry dispatched directly to our Rhodespark control room and tactical cruisers.',
      features: [
        'Sub-5 minute priority armed escalation',
        'Direct satellite GPS vehicle tracking relay',
        'Simultaneous SMS & WhatsApp family/corporate alerts'
      ]
    },
    {
      id: 'unit-tactical',
      title: 'Tactical Armed Response Units',
      tag: 'HEAVY ARMED ESCORT & PATROLS',
      image: '/assets/hero/hero-7.jpg',
      badge: 'ZAMBIA POLICE COORDINATED',
      description: 'Specialized armed intervention squads equipped for high-risk intrusion defense, perimeter breaches, and cash-in-transit escorts.',
      features: [
        'Dedicated 24/7 mobile cruisers on active patrol',
        'Multi-channel tactical radio synchronization',
        'Counter-intrusion and perimeter breach containment'
      ]
    },
    {
      id: 'unit-guarding',
      title: 'Elite Manned Guarding Sentries',
      tag: 'STATIC & PERIMETER ACCESS SCREENING',
      image: '/assets/services/service-manned-guarding.jpg',
      badge: '100% POLICE VETTED',
      description: 'Disciplined uniformed officers maintaining 24/7 access control, perimeter patrols, and visitor screening for corporate and residential facilities.',
      features: [
        'Police vetted with fingerprint clearance certificates',
        'NFC electronic checkpoint patrol verification',
        'Unannounced day and night supervisor inspections'
      ]
    }
  ];

  // Rotate between units every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUnitIndex((prev) => (prev + 1) % responseUnits.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [responseUnits.length]);

  const activeUnit = responseUnits[activeUnitIndex];

  return (
    <section 
      id="hero-section"
      className="relative bg-white text-slate-900 border-b border-slate-200 overflow-hidden light-grid-pattern py-14 sm:py-20 lg:py-24"
    >
      {/* Subtle Ambient Emerald Aura */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: SPARTAN SA SIGNATURE HEADLINE & ACTIONS
              (Elementor 50% fadeInLeft layout)
             ======================================================== */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            
            {/* Top Tactical Callout Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>ELITE DEFENSE & TACTICAL RESPONSE • ZAMBIA</span>
            </div>

            {/* Spartan SA Bold Editorial Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-slate-900 leading-[1.05]">
                Elite
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-slate-900 leading-[1.05]">
                Security &amp; Tactical <span className="text-emerald-600">Response</span>
              </h2>
            </div>

            {/* Spartan SA Signature Gradient Accent Bar (80px wide) */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-transparent rounded-full" />

            {/* Subheadline (Spartan SA H4) */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug font-display">
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

            {/* Spartan Proof Indicators Strip */}
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
              RIGHT COLUMN: SPARTAN SA RAPID RESPONSE PANIC BUTTON CARD
              (Elementor 50% fadeInDown layout)
             ======================================================== */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 spartan-card relative overflow-hidden">
              
              {/* Top Emerald Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500" />

              {/* Card Header matching Spartan SA */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-display uppercase tracking-tight text-slate-900">
                      RAPID RESPONSE PANIC BUTTON
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono">
                      One-Touch Emergency GPS Activation
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider shrink-0 shadow-sm animate-pulse">
                  24/7 LIVE
                </span>
              </div>

              {/* Unit Image Showcase with Interactive Crossfade */}
              <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-200 my-5 border border-slate-200 shadow-inner group">
                <img
                  src={activeUnit.image}
                  alt={activeUnit.title}
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold block uppercase">
                      {activeUnit.badge}
                    </span>
                    <span className="font-bold text-slate-900">{activeUnit.title}</span>
                  </div>
                  <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
                </div>
              </div>

              {/* Unit Features Checklist */}
              <div className="space-y-2 py-2">
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeUnit.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {activeUnit.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+260777127114"
                  className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 btn-shimmer"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL: +260 777 127 114</span>
                </a>

                <button
                  onClick={() => onOpenQuote(activeUnit.title)}
                  className="px-5 py-3.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Unit Selector Pills */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Select Unit Preview:</span>
                <div className="flex items-center space-x-1.5">
                  {responseUnits.map((u, uIdx) => (
                    <button
                      key={u.id}
                      onClick={() => setActiveUnitIndex(uIdx)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all cursor-pointer ${
                        uIdx === activeUnitIndex
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      0{uIdx + 1}
                    </button>
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
