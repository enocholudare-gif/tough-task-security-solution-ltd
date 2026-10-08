import React, { useState } from 'react';
import { UserCheck, Shield, CheckCircle2, Award, BookOpen, Send, Phone, AlertCircle } from 'lucide-react';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    province: 'Lusaka Province',
    experience: '1-3 Years',
    hasPoliceClearance: 'Yes',
    education: 'Grade 12 Certificate'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-20">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            JOIN THE FORCE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            CAREERS & <span className="text-blue-500">TRAINING ACADEMY</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We are building Zambia's most disciplined and respected security force. We hire on character, train for operational excellence, and reward integrity.
          </p>
        </div>
      </div>

      {/* Recruitment Standards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight">
                OUR MINIMUM RECRUITMENT STANDARDS
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tough Task upholds uncompromising vetting criteria before any candidate is admitted into our active roster.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-security-900 border border-security-800 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Valid Zambian NRC & Fingerprint Clearance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Full criminal background investigation verified through Zambia Police Service.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-security-900 border border-security-800 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Educational Qualifications</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Minimum Grade 12 School Certificate with proficiency in English and clear report writing.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-security-900 border border-security-800 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Physical Fitness & Medical Sobriety</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Comprehensive physical endurance drill assessment and zero-tolerance drug/alcohol screening.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-security-900 border border-security-800 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Verified Traceable Referees</h4>
                  <p className="text-xs text-slate-400 mt-0.5">At least two traceable residential and community references before deployment.</p>
                </div>
              </div>
            </div>

            {/* Career Progression Pathway */}
            <div className="pt-4 space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                STRUCTURED CAREER PROGRESSION
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-3 bg-security-900 border border-security-800 rounded-lg">
                  <div className="text-blue-400 font-bold">LEVEL 01</div>
                  <div className="text-slate-200 mt-1">Security Officer</div>
                </div>
                <div className="p-3 bg-security-900 border border-security-800 rounded-lg">
                  <div className="text-blue-400 font-bold">LEVEL 02</div>
                  <div className="text-slate-200 mt-1">Senior Guard</div>
                </div>
                <div className="p-3 bg-security-900 border border-security-800 rounded-lg">
                  <div className="text-blue-400 font-bold">LEVEL 03</div>
                  <div className="text-slate-200 mt-1">Shift Supervisor</div>
                </div>
                <div className="p-3 bg-security-900 border border-security-800 rounded-lg">
                  <div className="text-blue-400 font-bold">LEVEL 04</div>
                  <div className="text-slate-200 mt-1">Ops Commander</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Candidate Expression of Interest Form */}
          <div className="lg:col-span-5 bg-security-900 border border-security-750 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5">
            <div className="border-b border-security-800 pb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                APPLY / REGISTER INTEREST
              </h3>
              <p className="text-xs text-slate-400">
                Submit your profile for upcoming recruitment intakes
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">APPLICATION RECEIVED</h4>
                <p className="text-xs text-slate-300">
                  Your details have been placed in our HR recruitment database. You will be notified when physical vetting and fitness interviews commence in your province.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold uppercase">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="As shown on Zambian NRC"
                    className="w-full px-3 py-2.5 bg-security-950 border border-security-750 rounded-lg text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +260 97X XXX XXX"
                    className="w-full px-3 py-2.5 bg-security-950 border border-security-750 rounded-lg text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold uppercase">Province of Residence</label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-3 py-2.5 bg-security-950 border border-security-750 rounded-lg text-white"
                  >
                    <option value="Lusaka Province">Lusaka Province</option>
                    <option value="Copperbelt Province">Copperbelt Province</option>
                    <option value="Central Province">Central Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="Northern Province">Northern Province</option>
                    <option value="Muchinga Province">Muchinga Province</option>
                    <option value="Luapula Province">Luapula Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="North-Western Province">North-Western Province</option>
                    <option value="Western Province">Western Province</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold uppercase">Security / Military / Police Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 bg-security-950 border border-security-750 rounded-lg text-white"
                  >
                    <option value="No prior experience (Fresh recruit)">No prior experience (Fresh recruit)</option>
                    <option value="1-3 Years Private Security">1-3 Years Private Security</option>
                    <option value="3-5+ Years Private Security">3-5+ Years Private Security</option>
                    <option value="Ex-Service / Police / Military">Ex-Service / Police / Military</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all"
                >
                  SUBMIT RECRUITMENT INTEREST
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
