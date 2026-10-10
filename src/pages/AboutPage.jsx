import React from 'react';
import { Shield, CheckCircle2, Award, Users, Target, Lock, HeartHandshake, Eye, BookOpen, ChevronRight, Radio } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { processSteps } from '../data/technologyData';

export default function AboutPage({ onOpenQuote, setActivePage }) {
  const fiveCorePillars = [
    {
      id: 'pillar-1',
      number: '01',
      title: 'Integrity',
      desc: 'Uncompromising honesty, transparent reporting, and zero tolerance for deviation across every guard post and command log.',
      icon: Award,
      animationClass: 'animate-float-water-1'
    },
    {
      id: 'pillar-2',
      number: '02',
      title: 'Discipline',
      desc: 'Military-grade drill posture, crisp ceremonial uniform inspection, punctuality, and unwavering alertness under all conditions.',
      icon: Shield,
      animationClass: 'animate-float-water-2'
    },
    {
      id: 'pillar-3',
      number: '03',
      title: 'Professionalism',
      desc: '100% Police vetted officers with fingerprint clearance certificates, trained in diplomatic etiquette and de-escalation protocols.',
      icon: Users,
      animationClass: 'animate-float-water-3'
    },
    {
      id: 'pillar-4',
      number: '04',
      title: 'Reliability',
      desc: 'Guaranteed 24/7/365 operational continuity, seamless shift handovers, and unannounced supervisor field audits day and night.',
      icon: Lock,
      animationClass: 'animate-float-water-4'
    },
    {
      id: 'pillar-5',
      number: '05',
      title: 'Innovation',
      desc: 'Field telemetry, electronic NFC guard patrol checkpoints, GPS fleet telemetry, and real-time incident escalation to Rhodespark.',
      icon: Radio,
      animationClass: 'animate-float-water-1'
    }
  ];

  return (
    <div className="py-16 bg-[#f1f5f9] text-slate-900 space-y-20 light-grid-pattern">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            ABOUT TOUGH TASK SECURITY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
            DISCIPLINE, TECHNOLOGY & <span className="text-emerald-600">TRUST IN ZAMBIA</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A 100% Zambian-owned private security enterprise setting new national benchmarks for corporate guarding, tactical telemetry, and rapid incident resolution.
          </p>
        </div>
      </div>

      {/* Picture Under About Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-900 group">
          <img
            src="/assets/security-parade.jpg"
            alt="Tough Task Officers Parade"
            className="w-full h-80 sm:h-96 md:h-[450px] object-cover object-center filter brightness-[0.95] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white space-y-1.5 max-w-2xl">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              OPERATIONAL COMMAND • RHODESPARK LUSAKA
            </span>
            <h3 className="text-base sm:text-lg font-bold uppercase">
              Elite Sentry Force on Daily Drill Inspection
            </h3>
            <p className="text-xs text-slate-300">
              Every officer undergoes rigorous vetting through the Zambia Police Service with verified fingerprint clearance certificates.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display uppercase tracking-wider">
              OUR MISSION
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {companyInfo.mission}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display uppercase tracking-wider">
              OUR VISION
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {companyInfo.vision}
            </p>
          </div>

        </div>
      </div>

      {/* Detailed Company Narrative & Leadership Photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              OUR FOUNDATIONAL PHILOSOPHY
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
              MORE THAN GUARDS: A COMPLETE SECURITY ECOSYSTEM
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tough Task Security Solutions was established to bridge the critical gap between traditional static guarding and modern tactical accountability. 
            </p>
            
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-mono space-y-2 shadow-sm">
              <div className="font-bold text-emerald-700 uppercase">THE TOUGH TASK OPERATIONAL EQUATION:</div>
              <p className="text-slate-900 font-bold">
                PEOPLE + TECHNOLOGY + DISCIPLINE + RAPID RESPONSE + ACCOUNTABILITY
              </p>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Headquartered at the National Council for the Laity Building in Rhodespark, Lusaka, our operations span all 10 provinces and 39 key districts, protecting commercial enterprises, industrial plants, financial institutions, and diplomatic residences.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src="/assets/security-leadership.jpg"
                alt="Tough Task Leadership and Officers"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1">
                <div className="font-bold text-slate-900 uppercase">Operational Leadership & Field Supervision</div>
                <p className="text-slate-500 text-[11px]">Strict command hierarchy and continuous unannounced inspections.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 5 Core Pillars Section with Animated Pillars Background & Floating Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-slate-800 bg-[#070b13] text-white shadow-2xl">
          
          {/* Animated Pillar Beams */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 tactical-grid opacity-25" />
            <div className="absolute left-[15%] top-0 bottom-0 w-24 bg-gradient-to-t from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 blur-lg animate-pillar-beam-1" />
            <div className="absolute left-[35%] top-0 bottom-0 w-20 bg-gradient-to-t from-teal-500/0 via-teal-400/20 to-teal-500/0 blur-lg animate-pillar-beam-2" />
            <div className="absolute left-[55%] top-0 bottom-0 w-28 bg-gradient-to-t from-emerald-600/0 via-emerald-400/25 to-emerald-600/0 blur-lg animate-pillar-beam-3" />
            <div className="absolute left-[75%] top-0 bottom-0 w-20 bg-gradient-to-t from-emerald-500/0 via-green-400/20 to-emerald-500/0 blur-lg animate-pillar-beam-4" />
            <div className="absolute left-[90%] top-0 bottom-0 w-24 bg-gradient-to-t from-teal-500/0 via-teal-300/20 to-teal-500/0 blur-lg animate-pillar-beam-5" />
          </div>

          <div className="relative z-10 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                FOUNDATIONAL VALUES
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
                OUR FIVE CORE PILLARS
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Each pillar represents an unbreakable commitment to our clients across Zambia.
              </p>
            </div>

            {/* Floating Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {fiveCorePillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className={`p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-emerald-400 flex flex-col justify-between space-y-4 shadow-xl ${pillar.animationClass}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                          0{pillar.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-white uppercase tracking-wider">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Standard Protocol</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* The 5-Stage "How We Work" Workflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Target className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
            THE 5-STAGE DEPLOYMENT PROCESS
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Structured rigor applied to every security assignment across Zambia.
          </p>
        </div>

        <div className="space-y-3">
          {processSteps.map((step) => (
            <div key={step.step} className="p-5 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center shadow-sm hover:shadow-md transition-all">
              <div className="md:col-span-2 flex items-center space-x-3">
                <span className="text-xl font-black font-mono text-emerald-600">
                  {step.step}
                </span>
                <span className="text-sm font-extrabold uppercase text-slate-900 font-display">
                  {step.name}
                </span>
              </div>
              <div className="md:col-span-6 space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                  {step.headline}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
              <div className="md:col-span-4 text-left md:text-right">
                <span className="inline-block text-xs font-mono text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200 font-semibold">
                  {step.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Social Responsibility & Community Safety */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest">
              <HeartHandshake className="w-3.5 h-3.5 mr-1" />
              COMMUNITY SAFETY & CSR
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display uppercase tracking-tight">
              PROTECTING ZAMBIAN COMMUNITIES & YOUTH EMPLOYMENT
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              As a proud Zambian company, Tough Task creates dignified, career-oriented employment opportunities for young men and women across all ten provinces. We partner with local neighborhood safety initiatives, schools, and charitable organizations to enhance community resilience and security literacy.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all btn-shimmer"
            >
              REQUEST SECURITY PARTNERSHIP
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
