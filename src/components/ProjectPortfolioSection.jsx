import React, { useState } from 'react';
import { Briefcase, MapPin, Building2, Calendar, Lock, Users, Truck, UserCheck, ArrowRight } from 'lucide-react';

export default function ProjectPortfolioSection({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioProjects = [
    {
      id: 'proj-1',
      title: 'Commercial Towers & Banking Headquarters',
      category: 'Corporate Guarding',
      location: 'Rhodes Park & Cairo Road, Lusaka',
      summary: 'Biometric access screening, 24/7 uniformed sentries, electronic visitor logs, and perimeter deterrence for premier commercial and banking headquarters.',
      image: '/assets/service-corporate.jpg',
      icon: Building2,
      metrics: '100% Verified Checkpoint Logging'
    },
    {
      id: 'proj-2',
      title: 'National Conventions & Public Event Security',
      category: 'Special Events',
      location: 'Lusaka Showgrounds & Conference Arenas',
      summary: 'Tactical crowd screening, walk-through metal detectors, sterile VIP buffer zones, and coordination with local law enforcement for high-attendance expos.',
      image: '/assets/service-event.jpg',
      icon: Calendar,
      metrics: 'Zero Security Breaches Logged'
    },
    {
      id: 'proj-3',
      title: 'Residential Estates & Corridor Mobile Patrols',
      category: 'Mobile Patrols',
      location: 'Woodlands, Kabulonga & Rhodes Park',
      summary: 'Round-the-clock motorized patrol cruisers equipped with VHF radios, GPS telemetry, rapid response alarms, and continuous supervisor oversight.',
      image: '/assets/security-patrol.jpg',
      icon: Users,
      metrics: 'Sub-5 Min Rapid Response Time'
    },
    {
      id: 'proj-4',
      title: 'Armored Cash-In-Transit & Bullion Logistics',
      category: 'Cash Management & CIT',
      location: 'Inter-Provincial Banking Transit Corridors',
      summary: 'Reinforced armored carrier transports with GPS satellite telemetry, dual-custody vault manifests, and armed tactical escort convoys across national routes.',
      image: '/assets/cao.jpg',
      icon: Truck,
      metrics: 'Zero-Loss Bullion Transit Record'
    },
    {
      id: 'proj-5',
      title: 'Industrial Complex & Cargo Depot Defense',
      category: 'Industrial & Mining',
      location: 'Copperbelt & Kafue Logistics Nodes',
      summary: 'Weighbridge inspection, loss prevention search bays, fuel depot monitoring, raw material gatehouse verification, and compound perimeter sentries.',
      image: '/assets/about/about-2.jpg',
      icon: Lock,
      metrics: '24/7 Electronic Tour Checkpoints'
    },
    {
      id: 'proj-6',
      title: 'Diplomatic & Executive Close Protection',
      category: 'VIP Protection',
      location: 'Lusaka Diplomatic Enclave & KKIA Corridors',
      summary: 'Discreet close protection officers, advance route reconnaissance, threat intelligence, and armored motorcade coordination for visiting dignitaries and CEOs.',
      image: '/assets/services/service-vip-protection.jpg',
      icon: UserCheck,
      metrics: 'International Discretion Standard'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'Corporate Guarding', label: 'Corporate' },
    { id: 'Special Events', label: 'Events' },
    { id: 'Mobile Patrols', label: 'Mobile Patrols' },
    { id: 'Cash Management & CIT', label: 'Cash & CIT' },
    { id: 'Industrial & Mining', label: 'Industrial' },
    { id: 'VIP Protection', label: 'VIP Protection' }
  ];

  const filtered = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="our-project-portfolio" 
      className="py-20 lg:py-28 bg-[#E5E7EB] text-[#0F172A] border-t border-gray-300/80 relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-300/80 gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 border border-green-300 text-green-800 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>PROVEN OPERATIONAL DEPLOYMENTS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-snug">
              OPERATIONAL CASE STUDIES &amp; <span className="text-[#16A34A]">SECTOR PROJECTS</span>
            </h2>

            <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed">
              Explore documented security operations executed across banking headquarters, diplomatic convoys, industrial warehouses, and premier commercial facilities in Zambia.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-xs ${
                  selectedCategory === cat.id
                    ? 'bg-[#16A34A] text-white shadow-md shadow-[#16A34A]/25'
                    : 'bg-white text-[#475569] hover:text-[#0F172A] border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Organized Animated Grid with Crisp White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white border border-gray-200/90 hover:border-[#16A34A] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
            >
              {/* Media Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 border border-gray-200 text-[10px] font-mono text-[#16A34A] font-bold shadow-sm backdrop-blur-md">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-xs text-[#64748B] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] group-hover:text-[#16A34A] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#16A34A] font-bold">
                    {item.metrics}
                  </span>
                  <button
                    onClick={() => onOpenQuote(item.title)}
                    className="text-xs font-bold text-[#0F172A] hover:text-[#16A34A] transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>ENQUIRE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#16A34A]" />
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
