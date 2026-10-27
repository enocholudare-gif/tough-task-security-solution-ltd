import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const fivePrinciples = [
    {
      number: '01',
      title: 'Uncompromising Integrity',
      desc: 'Transparent digital occurrence logs, biometric guard muster checks, and zero tolerance for deviations or unauthorized absence across every guard post in Zambia.'
    },
    {
      number: '02',
      title: 'Military-Grade Turnout & Discipline',
      desc: 'Rigorous daily drill inspections, crisp uniform turnout, unwavering vigilance, and strict enforcement of site-specific standing orders around the clock.'
    },
    {
      number: '03',
      title: 'Zambia Police CID Biometric Clearance',
      desc: 'Every officer on our roster undergoes compulsory fingerprint vetting through the Zambia Police Criminal Investigation Department, ensuring verifiable clearances and zero criminal record.'
    },
    {
      number: '04',
      title: 'Direct Command Responsibility',
      desc: 'Active command continuity with 24/7 monitoring from our Rhodespark HQ and unannounced mobile supervisor inspections day and night to verify vigilance.'
    },
    {
      number: '05',
      title: 'Electronic Telemetry & Response SLA',
      desc: 'Electronic NFC patrol checkpoints with live timestamp logging, GPS cruiser tracking, and tactical backup escorts ready for emergency intervention within minutes.'
    }
  ];

  const commandHubs = [
    {
      region: 'Central Command & Lusaka HQ',
      location: 'Rhodespark, Lusaka',
      desc: '24/7 central operations desk, CCTV remote video monitoring, and rapid dispatch fleet.'
    },
    {
      region: 'Copperbelt Operational Division',
      location: 'Ndola & Kitwe',
      desc: 'Commercial, industrial warehousing, and mining logistical security command.'
    },
    {
      region: 'Northwestern Mining Hub',
      location: 'Solwezi Concession',
      desc: 'Heavy industrial sentries, access control gates, and freight corridor protection.'
    },
    {
      region: 'Southern Transit Corridor',
      location: 'Livingstone & Choma',
      desc: 'Cross-border logistics escort, hospitality defense, and commercial perimeter security.'
    }
  ];

  return (
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION: Background Video with Cinematic Dual Gradient Overlay */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-gray-200">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/security-leadership.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.05]"
          >
            <source src="/assets/about-video.mp4" type="video/mp4" />
          </video>
          
          {/* Dual Sleek Charcoal/Grey Overlays for authority */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="max-w-3xl space-y-5">
            
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#22C55E] uppercase">
              <span className="w-8 h-[1.5px] bg-[#22C55E]" />
              <span>ABOUT TOUGH TASK SECURITY SOLUTIONS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-white leading-[1.05]">
              BUILT FOR ENVIRONMENTS WHERE <br />
              <span className="text-[#22C55E]">DISCRETION &amp; DISCIPLINE</span> MATTER.
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              A 100% Zambian-owned corporate security force setting national benchmarks for disciplined static guarding, electronic patrol telemetry, and rapid emergency intervention across all 10 provinces.
            </p>

            {/* Fact Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 text-[10px] sm:text-[11px] font-mono text-gray-300 uppercase tracking-wider">
              <span>PACRA: 120220042456</span>
              <span className="text-[#22C55E] mx-2.5">/</span>
              <span>10 PROVINCES ACTIVE</span>
              <span className="text-[#22C55E] mx-2.5">/</span>
              <span>100% CID VETTED</span>
              <span className="text-[#22C55E] mx-2.5">/</span>
              <span>RHODESPARK LUSAKA HQ</span>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center space-x-2 shadow-md shadow-[#16A34A]/25 cursor-pointer"
              >
                <span>REQUEST SECURITY PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="tel:+260777127114"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center space-x-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>+260 777 127 114</span>
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* 2. CORPORATE AUTHORITY & CREDENTIALS STRIP */}
      <section className="py-5 bg-white border-b border-gray-200 text-xs font-mono text-[#475569] shadow-xs">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5 text-[#0F172A]">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">ACCREDITED CORPORATE DEFENSE FORCE • REPUBLIC OF ZAMBIA</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 font-semibold">
              ✓ Ministry of Home Affairs Licensed
            </span>
            <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 font-semibold">
              ✓ Zambia Police CID Clearances
            </span>
            <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 font-semibold">
              ✓ PACRA &amp; ZRA Compliant
            </span>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL NARRATIVE & SENTRY PARADE PORTAL */}
      <section className="py-20 lg:py-28 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
              <span className="w-6 h-[1.5px] bg-[#16A34A]" />
              <span>DIRECT RESPONSIBILITY • CLEAR ACCOUNTABILITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display uppercase tracking-tight text-[#0F172A] leading-tight">
              PROTECTION SHAPED AROUND <br />
              <span className="text-[#16A34A]">OPERATIONAL RIGOR</span>
            </h2>

            <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed">
              Tough Task Security Solutions Ltd was established to bring military-standard discipline, genuine vetting, and technology-driven proof of presence to the Zambian private security sector.
            </p>

            <p className="text-[#334155] text-xs sm:text-sm md:text-base leading-relaxed">
              We operate on an unwavering philosophy: security fails when routine breeds complacency. That is why every sentry on our roster is inspected daily before parade, monitored through electronic NFC checkpoint telemetry during patrol, and verified through unannounced field supervisor inspections.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-200 text-xs font-mono">
              <div className="space-y-1 p-3 bg-white border border-gray-200 rounded-xl shadow-xs">
                <span className="text-2xl font-black text-[#0F172A] font-display block">10/10</span>
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider block">Provinces Active</span>
              </div>
              <div className="space-y-1 p-3 bg-white border border-gray-200 rounded-xl shadow-xs">
                <span className="text-2xl font-black text-[#16A34A] font-display block">42</span>
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider block">Operational Districts</span>
              </div>
              <div className="space-y-1 p-3 bg-white border border-gray-200 rounded-xl shadow-xs">
                <span className="text-2xl font-black text-[#0F172A] font-display block">&lt;5min</span>
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider block">Tactical Response SLA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
              <img
                src="/assets/services/service-manned-guarding.jpg"
                alt="Tough Task Guard Force Inspection"
                className="w-full h-80 sm:h-96 md:h-[440px] object-cover object-center filter brightness-[0.95] group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 text-xs space-y-1.5 shadow-md">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-green-700 uppercase font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>PARADE INSPECTION • DAILY DRILL MUSTER</span>
                </div>
                <h4 className="font-bold text-[#0F172A] text-sm uppercase">
                  Verified Physical Turnout &amp; Standing Orders
                </h4>
                <p className="text-[#475569] text-[11px] leading-relaxed">
                  Before reporting to corporate client premises, every officer passes uniform, posture, and equipment checks conducted by former tactical instructors.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE TOUGH TASK STANDARD (SPARTAN 5 PRINCIPLES LAYOUT) */}
      <section className="py-20 lg:py-28 bg-[#E5E7EB] border-t border-b border-gray-300">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
                <span className="w-6 h-[1.5px] bg-[#16A34A]" />
                <span>THE TOUGH TASK STANDARD</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display uppercase tracking-tight text-[#0F172A] leading-tight">
                FIVE PRINCIPLES <br />
                SHAPING <span className="text-[#16A34A]">EVERY DEPLOYMENT</span>
              </h2>

              <p className="text-[#334155] text-xs sm:text-sm leading-relaxed max-w-md">
                Our operational principles eliminate the vulnerabilities that common security providers leave open. Every deployment adheres to these verified standards without exception.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-5 py-3 bg-white hover:bg-gray-50 text-[#0F172A] text-xs font-mono font-bold uppercase tracking-wider rounded-xl border border-gray-200 transition-colors flex items-center space-x-2 cursor-pointer shadow-sm"
                >
                  <span>REQUEST STANDARDS AUDIT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#16A34A]" />
                </button>
              </div>
            </div>

            {/* Right Column: 5 Numbered Rows (Clean Spartan Style) with Crisp White Backgrounds */}
            <div className="lg:col-span-7 space-y-3">
              {fivePrinciples.map((item) => (
                <div key={item.number} className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline group hover:border-[#16A34A] transition-all">
                  <div className="sm:col-span-2 text-xs font-mono font-bold text-[#16A34A] tracking-wider">
                    {item.number}
                  </div>
                  <div className="sm:col-span-10 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] group-hover:text-[#16A34A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. OPERATIONAL COMMAND HUBS */}
      <section className="py-20 lg:py-28 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-6 h-[1.5px] bg-[#16A34A]" />
            <span>NATIONWIDE COMMAND CENTERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
            REGIONAL COMMAND <span className="text-[#16A34A]">INFRASTRUCTURE</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Coordinated leadership and tactical cruisers strategically positioned across Zambia's premier commercial corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commandHubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200/90 space-y-3 hover:border-[#16A34A] transition-all duration-300 shadow-md"
            >
              <div className="text-[10px] font-mono text-[#16A34A] font-bold uppercase tracking-wider">
                HUB 0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] uppercase font-display">
                {hub.region}
              </h3>
              <div className="text-xs font-semibold text-[#16A34A]">
                {hub.location}
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {hub.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CLOSING CTA (SPARTAN CALL TO ACTION) */}
      <section className="py-20 bg-[#0F172A] border-t border-gray-200 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#22C55E] uppercase">
            — DISPATCH INQUIRY
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-white">
            TELL US WHAT <span className="text-[#22C55E]">NEEDS PROTECTING</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Our security consultants conduct physical site surveys and tailored deployment plans across all 10 provinces in Zambia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#16A34A]/25 cursor-pointer"
            >
              <span>REQUEST SITE SECURITY SURVEY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+260777127114"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span>CALL CONTROL ROOM: +260 777 127 114</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
