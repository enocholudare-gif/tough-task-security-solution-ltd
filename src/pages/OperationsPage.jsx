import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import { Briefcase, Shield, CheckCircle2, Award, Building, Truck, Lock } from 'lucide-react';

export default function OperationsPage({ onOpenQuote }) {
  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-20">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            OPERATIONS & CASE STUDIES
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            PROVEN TRACK RECORD ACROSS <span className="text-emerald-500">KEY SECTORS</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real-world security operations safeguarding industrial complexes, corporate headquarters, diplomatic missions, and high-value logistics corridors.
          </p>
        </div>
      </div>

      {/* Projects Showcase */}
      <ProjectsSection onOpenQuote={onOpenQuote} />

      {/* Sector Expertise Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
            SPECIALIZED INDUSTRY PROTOCOLS
          </h2>
          <p className="text-slate-400 text-sm">
            We adapt our standard operating procedures to the unique risk profile of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3">
            <Building className="w-8 h-8 text-emerald-400" />
            <h3 className="text-base font-bold text-white uppercase">Corporate & Commercial</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Front-of-house customer hospitality, electronic badge access control, executive boardroom details, and structured parking management.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3">
            <Truck className="w-8 h-8 text-emerald-400" />
            <h3 className="text-base font-bold text-white uppercase">Industrial & Logistics</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Weighbridge cargo inspection, loss prevention search bays, fuel depot monitoring, and 24/7 perimeter electronic tour checkpoints.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3">
            <Lock className="w-8 h-8 text-emerald-400" />
            <h3 className="text-base font-bold text-white uppercase">Banking & High Value Assets</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Armored transit escorts, vault-to-vault dual custody manifests, armed static security guards, and dedicated ATM verification response teams.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
