import React, { useState } from 'react';
import { Star, Shield, CheckCircle2, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 'rev-1',
      name: 'Martin Mumba',
      role: 'Operations Director, Commercial Mall Complex',
      location: 'Lusaka CBD',
      rating: 5,
      date: 'Verified Google Review',
      review: 'Tough Task Security Solutions has provided guarding and CCTV monitoring for our shopping complex for over two years. Their officers are disciplined, smartly turned out, and their response times to alarm triggers have been consistently under four minutes. Outstanding service.'
    },
    {
      id: 'rev-2',
      name: 'Hadley Chanda',
      role: 'Estate Chairman & Resident Representative',
      location: 'Kabulonga & Rhodes Park',
      rating: 5,
      date: 'Verified Google Review',
      review: 'Switching our residential estate security to Tough Task was the best decision our committee made. The biometric access logging, regular patrol supervisors, and courteous sentries have significantly improved peace of mind across our community.'
    },
    {
      id: 'rev-3',
      name: 'Lee-Anne Banda',
      role: 'Supply Chain & Logistics Lead',
      location: 'Copperbelt (Kitwe & Ndola)',
      rating: 5,
      date: 'Verified Google Review',
      review: 'We rely on Tough Task for armed escorts and freight protection along the high-traffic mining transit corridor. Their convoy commanders maintain unbroken radio contact and live GPS telemetry throughout the entire transit route. Zero incidents recorded.'
    },
    {
      id: 'rev-4',
      name: 'Motti Phiri',
      role: 'Head of Facilities & Corporate Assets',
      location: 'Cairo Road Commercial Tower',
      rating: 5,
      date: 'Verified Google Review',
      review: 'Tough Task Security Solutions stands out in Zambia for their accountability. Their digital daily occurrence logs and automated patrol reports give our executive committee complete transparency. Highly recommended for corporate headquarters.'
    },
    {
      id: 'rev-5',
      name: 'Jodi Lisa Zulu',
      role: 'Managing Partner, National Events & Expos',
      location: 'Lusaka Showgrounds',
      rating: 5,
      date: 'Verified Google Review',
      review: 'Managing crowds of over 8,000 attendees requires flawless perimeter control and VIP coordination. Tough Task handled our 3-day expo with absolute professionalism, calm authority, and zero security breaches.'
    },
    {
      id: 'rev-6',
      name: 'Gary Tembo',
      role: 'Plant General Manager',
      location: 'Industrial Concession, Kafue',
      rating: 5,
      date: 'Verified Google Review',
      review: 'The unannounced supervisor night inspections and perimeter electronic NFC checkpoint system set Tough Task apart from any other firm we have contracted in Zambia. Exceptional discipline and leadership.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#060912] text-slate-100 border-t border-slate-800/90 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 tactical-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Spartan-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>VERIFIED CLIENT REVIEWS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
              WHAT OUR <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">CLIENTS SAY</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Real feedback from clients who trust Tough Task Security Solutions for protection, rapid response, and manned guarding across Zambia.
            </p>
          </div>

          {/* Google 5-Star Trust Badge */}
          <div className="p-4 rounded-2xl bg-[#0b101c] border border-slate-800 flex items-center space-x-4 shadow-xl shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xl font-display">
              G
            </div>
            <div>
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-bold text-white mt-1">4.9 / 5.0 Rating</div>
              <div className="text-[10px] text-slate-400 font-mono">100% Verified Corporate Audits</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Spartan Trustindex Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-[#090e1a]/95 border border-slate-800 hover:border-slate-600 hover:bg-[#0d1627] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header with Google Logo & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    {t.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center font-display shrink-0 shadow-md">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white font-display">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {t.role}
                  </p>
                  <p className="text-[10px] text-red-400 font-mono">
                    📍 {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
