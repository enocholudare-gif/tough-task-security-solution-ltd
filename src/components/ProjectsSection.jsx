import React, { useState } from 'react';
import { Briefcase, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { projectShowcases } from '../data/technologyData';

export default function ProjectsSection({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Sectors' },
    { id: 'Corporate & Industrial', label: 'Corporate & Industrial' },
    { id: 'Event Security', label: 'Event Security' },
    { id: 'Cash-in-Transit', label: 'Cash Management & CIT' },
    { id: 'VIP & Executive Protection', label: 'VIP Protection' },
    { id: 'Manned Guarding', label: 'Manned Guarding' },
    { id: 'Mobile Patrols', label: 'Mobile Patrols' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectShowcases 
    : projectShowcases.filter(p => p.category === selectedCategory);

  return (
    <section id="projects-section" className="py-20 bg-[#080c14] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-800 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5 mr-1" />
              OPERATIONAL SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white">
              DEPLOYMENT & <span className="text-emerald-500">OPERATIONS</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Real-world execution of our security protocols across industrial corridors, financial transit, and corporate complexes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-[#0e1422] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean 3-Column Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-xl bg-[#0e1422] border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-200 hover:-translate-y-1 shadow-md group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-[#090d16]/90 px-2.5 py-0.5 rounded text-[11px] font-semibold text-emerald-400 border border-slate-700">
                  {proj.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center text-xs text-slate-300 bg-[#090d16]/90 px-2.5 py-1 rounded border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                  <span className="truncate">{proj.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white font-display group-hover:text-emerald-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-emerald-400 font-medium flex items-center text-[11px]">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Active Protocol
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="text-emerald-400 hover:text-white font-bold flex items-center"
                  >
                    Enquire <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
