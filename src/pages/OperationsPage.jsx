import React from 'react';
import ProjectsSection from '../components/ProjectsSection';
import { Shield, Building, Truck, Lock, ArrowRight } from 'lucide-react';

export default function OperationsPage({ onOpenQuote }) {
  return (
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen py-16 lg:py-24 space-y-16">
      
      {/* Page Hero */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-3.5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-8 h-[1.5px] bg-[#16A34A]" />
            <span>OPERATIONS &amp; CASE REPOSITORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] font-display tracking-tight uppercase leading-tight">
            PROVEN TRACK RECORD ACROSS <span className="text-[#16A34A]">KEY SECTORS</span>
          </h1>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Real-world security operations safeguarding industrial complexes, corporate headquarters, diplomatic missions, and high-value logistics corridors across Zambia.
          </p>
        </div>
      </div>

      {/* Projects Showcase */}
      <ProjectsSection onOpenQuote={onOpenQuote} />

      {/* Sector Expertise Grid with Crisp White Cards */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
            SPECIALIZED INDUSTRY PROTOCOLS
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm">
            We adapt our standard operating procedures to the unique risk profile of each commercial environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-3.5 hover:border-[#16A34A] transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#16A34A]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] uppercase font-display">Corporate &amp; Commercial</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Front-of-house customer hospitality, electronic badge access control, executive boardroom details, and structured parking access management.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-3.5 hover:border-[#16A34A] transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#16A34A]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] uppercase font-display">Industrial &amp; Logistics</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Weighbridge cargo inspection, loss prevention search bays, fuel depot monitoring, and 24/7 perimeter electronic tour checkpoints.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-3.5 hover:border-[#16A34A] transition-all shadow-md">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#16A34A]">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A] uppercase font-display">Banking &amp; High Value Assets</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Armored transit escorts, vault-to-vault dual custody manifests, armed static security guards, and dedicated ATM verification response teams.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Action */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
          Require a Sector-Specific Proposal?
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto">
          Our senior security consultants prepare detailed operational schedules and post matrices for enterprise tenders.
        </p>
        <button
          onClick={() => onOpenQuote('Enterprise Operations Tender')}
          className="px-7 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center space-x-2 cursor-pointer shadow-md shadow-[#16A34A]/25"
        >
          <Shield className="w-4 h-4" />
          <span>REQUEST TENDER PROPOSAL</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
