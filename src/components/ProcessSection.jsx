import React from 'react';
import { Search, FileText, ShieldCheck, Radio, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenQuote }) {
  const steps = [
    {
      step: '01',
      title: 'Site Vulnerability Audit',
      icon: Search,
      desc: 'Our security consultants conduct an on-site audit of your perimeter boundaries, access choke points, asset flows, and neighborhood risk factors with zero obligation.',
      deliverable: 'Output: Threat Assessment & Post Matrix'
    },
    {
      step: '02',
      title: 'Tailored Standing Orders',
      icon: FileText,
      desc: 'We draft site-specific Standard Operating Procedures (SOPs), access control protocols, visitor search guidelines, and emergency evacuation orders matching your facility.',
      deliverable: 'Output: Facility Security Plan & SOPs'
    },
    {
      step: '03',
      title: 'Vetted Sentry Deployment',
      icon: ShieldCheck,
      desc: 'Disciplined officers with verified police fingerprint clearances are deployed in full ceremonial turnout, equipped with electronic NFC perimeter checkpoint tags.',
      deliverable: 'Output: Active Post Coverage & Digital Logging'
    },
    {
      step: '04',
      title: '24/7 Telemetry & Command',
      icon: Radio,
      desc: 'Your facility is synchronized with our Rhodespark control room for 24/7 radio dispatch, automated supervisor spot audits, and monthly SLA analytical scorecards.',
      deliverable: 'Output: Continuous Oversight & Monthly Reports'
    }
  ];

  return (
    <section id="our-process" className="py-20 lg:py-28 bg-[#F0F2F5] text-[#0F172A] border-t border-gray-200/80 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header with Refined Font Size */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-200 gap-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16A34A]/10 border border-[#16A34A]/25 text-[#16A34A] text-xs font-mono font-bold uppercase tracking-wider">
              <span>HOW WE OPERATE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-snug">
              OUR 4-STEP SECURITY <span className="text-[#16A34A]">DEPLOYMENT PROCESS</span>
            </h2>

            <p className="text-[#475569] text-xs sm:text-sm md:text-base leading-relaxed">
              From initial perimeter vulnerability assessment to continuous 24/7 command oversight, our structured operational methodology ensures zero security blind spots.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Site Vulnerability Assessment')}
            className="self-start md:self-end px-5 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center space-x-2 shadow-md shadow-[#16A34A]/20 cursor-pointer shrink-0"
          >
            <span>BOOK INITIAL SITE AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Step Grid with 3D Tactile White Cards on Grey Surface */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;

            return (
              <div
                key={st.step}
                className="relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 hover:border-[#16A34A]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 shadow-[0_10px_25px_rgba(0,0,0,0.05),0_1px_0_rgba(255,255,255,0.8)_inset] hover:shadow-[0_20px_35px_rgba(0,0,0,0.1)] space-y-6"
              >
                {/* 3D Top Border Indicator */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#16A34A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#16A34A]">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 group-hover:border-[#16A34A]/40 flex items-center justify-center text-[#16A34A] transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-[#0F172A] group-hover:text-[#16A34A] transition-colors leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 text-[11px] font-mono text-[#16A34A] font-bold">
                  {st.deliverable}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
