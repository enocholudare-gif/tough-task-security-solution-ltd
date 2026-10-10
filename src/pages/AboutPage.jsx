import React from 'react';
import { Shield, CheckCircle2, Award, Users, Target, Lock, HeartHandshake, Eye, BookOpen, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { processSteps } from '../data/technologyData';

export default function AboutPage({ onOpenQuote, setActivePage }) {
  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-24">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            ABOUT TOUGH TASK
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            DISCIPLINE, TECHNOLOGY & <span className="text-emerald-500">TRUST IN ZAMBIA</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A 100% Zambian-owned private security enterprise setting new national benchmarks for corporate guarding, tactical telemetry, and rapid incident resolution.
          </p>
        </div>
      </div>

      {/* Mission & Vision Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-2xl bg-security-900 border border-security-750 space-y-4 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-display uppercase tracking-wider">
              OUR MISSION
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-security-900 border border-security-750 space-y-4 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-display uppercase tracking-wider">
              OUR VISION
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>

        </div>
      </div>

      {/* Detailed Company Narrative & Leadership Photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-security-900 text-blue-400 text-xs font-bold uppercase tracking-wider border border-security-750">
              OUR FOUNDATIONAL PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
              MORE THAN GUARDS: A COMPLETE SECURITY ECOSYSTEM
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Tough Task Security Solutions was established to bridge the critical gap between traditional static guarding and modern tactical accountability. 
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Too often in Zambia, private security has suffered from unreliable attendance, unverified patrol routes, and lack of real-time supervisor escalation. Tough Task solves this through our proven operational formula:
            </p>
            
            <div className="p-4 rounded-xl bg-security-900 border border-security-750 text-xs text-slate-200 font-mono space-y-2">
              <div className="font-bold text-blue-400 uppercase">THE TOUGH TASK OPERATIONAL EQUATION:</div>
              <p className="text-white font-bold">
                PEOPLE + TECHNOLOGY + DISCIPLINE + RAPID RESPONSE + ACCOUNTABILITY
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Headquartered at the National Council for the Laity Building in Rhodespark, Lusaka, our operations span all 10 provinces and 39 key districts, protecting commercial enterprises, industrial plants, financial institutions, and diplomatic residences.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-security-750 shadow-2xl bg-security-900">
              <img
                src="/assets/security-leadership.jpg"
                alt="Tough Task Leadership and Officers"
                className="w-full h-88 sm:h-96 object-cover filter brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-security-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-security-900/90 backdrop-blur-md border border-security-750 text-xs">
                <div className="font-bold text-white uppercase">Operational Leadership & Supervision</div>
                <p className="text-slate-400 text-[11px] mt-0.5">Strict hierarchical command and continuous spot audits.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Core Values Expanded */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            GUIDING PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
            OUR FIVE CORE PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyInfo.coreValues.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-security-900 border border-security-800 space-y-3 hover:border-blue-500/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}

          {/* Vetting Standard Card */}
          <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/80 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                SOP
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                VETTING STANDARDS
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every Tough Task security candidate is subjected to verified criminal fingerprint clearance, background references, mental aptitude assessments, and intensive physical drill evaluations.
              </p>
            </div>
            <button
              onClick={() => {
                setActivePage('careers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-blue-300 hover:text-white flex items-center pt-2"
            >
              Explore Training & Vetting <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* The 5-Stage "How We Work" Workflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Target className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
            THE 5-STAGE DEPLOYMENT PROCESS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Structured rigor applied to every security assignment across Zambia.
          </p>
        </div>

        <div className="space-y-4">
          {processSteps.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-security-900 border border-security-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-2 flex items-center space-x-3">
                <span className="text-2xl font-black font-mono text-blue-500">
                  {step.step}
                </span>
                <span className="text-lg font-extrabold uppercase text-white font-display">
                  {step.name}
                </span>
              </div>
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-sm font-bold text-slate-200">
                  {step.headline}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="md:col-span-4 text-left md:text-right">
                <span className="inline-block text-xs font-mono text-emerald-400 bg-emerald-950/60 p-2 rounded border border-emerald-800/60">
                  {step.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Social Responsibility & Community Safety */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-security-900 border border-security-750 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <HeartHandshake className="w-3.5 h-3.5 mr-1" />
              COMMUNITY SAFETY & CSR
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight">
              PROTECTING ZAMBIAN COMMUNITIES & YOUTH EMPLOYMENT
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              As a proud Zambian company, Tough Task creates dignified, career-oriented employment opportunities for young men and women across all ten provinces. We partner with local neighborhood safety initiatives, schools, and charitable organizations to enhance community resilience and security literacy.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onOpenQuote}
              className="px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all btn-shimmer"
            >
              REQUEST SECURITY PARTNERSHIP
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
