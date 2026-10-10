import React, { useState } from 'react';
import { Briefcase, MapPin, CheckCircle2, ChevronRight, Building2, Calendar, Lock, Users, Truck, UserCheck } from 'lucide-react';

export default function ProjectPortfolioSection({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 6 balanced authentic operational project showcases
  const portfolioProjects = [
    {
      id: 'proj-1',
      title: 'Corporate Headquarters & Banking Complex',
      category: 'Corporate Guarding',
      location: 'Rhodes Park & Cairo Road, Lusaka',
      summary: 'Biometric access screening, 24/7 static sentries, visitor logs, and perimeter deterrence for premier commercial and banking towers.',
      image: '/assets/service-corporate.jpg',
      icon: Building2,
      metrics: '100% Verified Checkpoint Logging'
    },
    {
      id: 'proj-2',
      title: 'National Conventions & Public Event Security',
      category: 'Special Events',
      location: 'Lusaka Showgrounds & Conference Arenas',
      summary: 'Tactical crowd control, bag scanning, perimeter buffer zones, and medical emergency liaison for high-attendance summits and expos.',
      image: '/assets/service-event.jpg',
      icon: Calendar,
      metrics: 'Zero Security Breaches Logged'
    },
    {
      id: 'proj-3',
      title: 'Residential Estates & Corridor Mobile Patrols',
      category: 'Mobile Patrols',
      location: 'Woodlands, Kabulonga & Rhodes Park',
      summary: '24/7 active mobile patrol cruisers with radio-linked backup, rapid perimeter sweep, and direct emergency control room dispatch.',
      image: '/assets/security-patrol.jpg',
      icon: Users,
      metrics: 'Sub-5 Min Rapid Response Time'
    },
    {
      id: 'proj-4',
      title: 'Armored Cash-In-Transit & Bullion Logistics',
      category: 'Cash Management & CIT',
      location: 'Inter-Provincial Banking Transit Corridors',
      summary: 'Armored carrier transports with GPS satellite telemetry, dual-custody vault manifests, and armed tactical escort escorts.',
      image: '/assets/cao.jpg',
      icon: Truck,
      metrics: 'Zero-Loss Transit Record'
    },
    {
      id: 'proj-5',
      title: 'Mining Concession & Industrial Perimeter Defense',
      category: 'Industrial & Mining',
      location: 'Copperbelt & North-Western Mining Corridors',
      summary: 'Heavy-duty fence surveillance, canine patrols, raw material gatehouse verification, and compound access control in heavy industrial zones.',
      image: '/assets/security-parade.jpg',
      icon: Lock,
      metrics: '24/7 NFC Monitored Guard Tours'
    },
    {
      id: 'proj-6',
      title: 'Diplomatic & VIP Executive Close Protection',
      category: 'VIP Protection',
      location: 'Lusaka Diplomatic Corridors & KKIA Airport',
      summary: 'Discreet executive bodyguard teams, counter-surveillance route surveys, and armored motorcade escorts for visiting dignitaries and CEOs.',
      image: '/assets/services/service-vip-protection.jpg',
      icon: UserCheck,
      metrics: 'International Discretion Standard'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'Corporate Guarding', label: 'Corporate' },
    { id: 'Special Events', label: 'Events' },
    { id: 'Mobile Patrols', label: 'Patrols' },
    { id: 'Cash Management & CIT', label: 'Cash & CIT' },
    { id: 'Industrial & Mining', label: 'Industrial' },
    { id: 'VIP Protection', label: 'VIP Protection' }
  ];

  const filtered = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="our-project-portfolio" className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden light-grid-pattern">
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header with Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
              <Briefcase className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              <span>PROVEN OPERATIONAL DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
              OUR PROJECT <span className="text-emerald-600">PORTFOLIO</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Real-world execution of our security protocols across corporate complexes, high-profile events, cash transit, and industrial corridors.
            </p>
          </div>

          {/* Clean Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Balanced 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-2xl group spartan-card"
              >
                {/* Image Section with Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-emerald-400 shadow-md">
                    {proj.category}
                  </div>

                  {/* Icon Pod */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-slate-800 border border-slate-200 flex items-center justify-center shadow-md group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Location Chip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center text-xs text-slate-800 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                    <span className="truncate font-medium">{proj.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-black font-display text-slate-900 group-hover:text-emerald-600 transition-colors uppercase leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Metrics & Action Footer */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-700 flex items-center font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 shrink-0 text-emerald-600" />
                      {proj.metrics}
                    </span>

                    <button
                      onClick={() => onOpenQuote(proj.title)}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center transition-colors group-hover:translate-x-1 cursor-pointer"
                    >
                      <span>Enquire</span>
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
