import React, { useState } from 'react';
import { MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
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
    <section id="projects-section" className="py-16 lg:py-20 bg-[#E5E7EB] text-[#0F172A] border-t border-gray-300">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-300 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
              <span className="w-6 h-[1.5px] bg-[#16A34A]" />
              <span>OPERATIONAL CASE REPOSITORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight uppercase text-[#0F172A]">
              DEPLOYMENT &amp; <span className="text-[#16A34A]">OPERATIONS</span>
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
              Real-world execution of our security protocols across industrial corridors, financial transit routes, and commercial complexes in Zambia.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-xs ${
                  selectedCategory === cat.id
                    ? 'bg-[#16A34A] text-white font-bold shadow-md shadow-[#16A34A]/25'
                    : 'bg-white text-[#475569] hover:text-[#0F172A] border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid with Crisp White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-white border border-gray-200/90 overflow-hidden flex flex-col justify-between hover:border-[#16A34A] transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#16A34A] border border-gray-200 shadow-sm backdrop-blur-md">
                  {proj.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center text-xs text-[#0F172A] bg-white/95 px-2.5 py-1 rounded-xl border border-gray-200 shadow-sm backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-[#16A34A] mr-1.5 shrink-0" />
                  <span className="truncate font-mono text-[11px] font-medium">{proj.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0F172A] font-display uppercase tracking-tight group-hover:text-[#16A34A] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                  <span className="text-[#16A34A] font-medium flex items-center text-[11px] font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Active Protocol
                  </span>
                  <button
                    onClick={() => onOpenQuote(proj.title)}
                    className="text-[#0F172A] hover:text-[#16A34A] font-bold font-mono text-xs uppercase flex items-center cursor-pointer transition-colors"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 text-[#16A34A]" />
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
