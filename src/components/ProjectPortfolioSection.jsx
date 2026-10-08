import React, { useState } from 'react';
import { Briefcase, MapPin, CheckCircle2, ChevronRight, ArrowRight, Shield, Sparkles, Building2, Calendar, Lock, Users, Truck } from 'lucide-react';

export default function ProjectPortfolioSection({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioProjects = [
    {
      id: 'proj-1',
      title: 'Corporate Security Solutions',
      sourceName: 'ChatGPT Image Oct 8, 2025, 06_29_54 PM',
      category: 'Corporate & Commercial',
      location: 'Rhodes Park / Cairo Road, Lusaka',
      summary: 'Comprehensive corporate access control, visitor screening, and 24/7 static guarding for premier financial and corporate headquarters.',
      image: '/assets/service-corporate.jpg',
      icon: Building2,
      metrics: '100% Biometric Access Logged'
    },
    {
      id: 'proj-2',
      title: 'Event Security Management',
      sourceName: 'ChatGPT Image Oct 8, 2025, 06_44_37 PM',
      category: 'Special Events',
      location: 'Lusaka National Showgrounds / Hotels',
      summary: 'Crowd management, stage perimeter zoning, bag screening, and rapid medical/evacuation coordination for large-scale conventions and concerts.',
      image: '/assets/service-event.jpg',
      icon: Calendar,
      metrics: 'Zero Incidents Across 50+ Events'
    },
    {
      id: 'proj-3',
      title: 'Community Safety Initiatives',
      sourceName: 'Community Safety Initiatives',
      category: 'Mobile Patrols',
      location: 'Residential Estates & Commercial Corridors',
      summary: 'Dedicated 24/7 rapid mobile patrol cruisers, neighborhood watch integration, and radio-linked emergency response.',
      image: '/assets/security-patrol.jpg',
      icon: Users,
      metrics: 'Sub-5 Min Emergency Arrival'
    },
    {
      id: 'proj-4',
      title: 'Cash Management Solutions',
      sourceName: 'cao',
      category: 'Cash Management & CIT',
      location: 'Commercial Bank Vaults & Retail Transit',
      summary: 'Specialized armored vehicle transport for cash and valuables, designed to ensure secure delivery with minimal risk and GPS telemetry.',
      image: '/assets/cao.jpg',
      icon: Truck,
      metrics: 'Zero-Loss Bullion Transport'
    },
    {
      id: 'proj-5',
      title: 'Industrial & Concession Security',
      sourceName: 'pexels-photo-207574-1',
      category: 'Industrial & Mining',
      location: 'Copperbelt & North-Western Mining Corridors',
      summary: 'Perimeter fence surveillance, canine patrols, and gatehouse verification for remote mining concessions and logistics hubs.',
      image: '/assets/security-parade.jpg',
      icon: Lock,
      metrics: '24/7 Monitored NFC Patrols'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Corporate & Commercial', label: 'Corporate Solutions' },
    { id: 'Special Events', label: 'Event Security' },
    { id: 'Mobile Patrols', label: 'Community Patrols' },
    { id: 'Cash Management & CIT', label: 'Cash & CIT' },
    { id: 'Industrial & Mining', label: 'Industrial & Mining' }
  ];

  const filtered = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="our-project-portfolio" className="py-24 lg:py-32 bg-[#080c14] text-slate-100 border-t border-slate-800/90 relative">
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header with Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-800 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5 mr-1" />
              <span>OPERATIONAL EXCELLENCE IN ACTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
              OUR PROJECT <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">PORTFOLIO</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Real-world execution of our security protocols across corporate complexes, high-profile events, cash transit, and industrial corridors.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-[#0e1628] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#090e1a] border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-2 shadow-xl group"
              >
                {/* Image Section with Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.08] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628] via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#060a14]/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-cyan-300">
                    {proj.category}
                  </div>

                  {/* Location Chip */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center text-xs text-slate-200 bg-[#060a14]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" />
                    <span className="truncate font-medium">{proj.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-black font-display text-white group-hover:text-blue-300 transition-colors uppercase leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Metrics & Action Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 flex items-center font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      {proj.metrics}
                    </span>

                    <button
                      onClick={() => onOpenQuote(proj.title)}
                      className="text-xs font-bold text-blue-400 hover:text-white flex items-center transition-colors group-hover:translate-x-1"
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
