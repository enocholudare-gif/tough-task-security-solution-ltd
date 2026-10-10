import React, { useState } from 'react';
import { UserCheck, Shield, CheckCircle2, Award, Briefcase, Send, Phone, MapPin, ChevronRight, FileCheck, Users, Clock } from 'lucide-react';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Static Security Officer');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    nrcNumber: '',
    province: 'Lusaka Province',
    role: 'Static Security Officer',
    experience: '1-3 Years Private Security',
    hasPoliceClearance: 'Yes',
    education: 'Grade 12 Certificate'
  });

  const openPositions = [
    {
      id: 'role-static',
      title: 'Static Security Officer',
      type: 'Full-Time (Rotational Shifts)',
      location: 'Lusaka & Copperbelt Nodes',
      slots: '15 Positions Open',
      desc: 'Access screening, perimeter patrol, visitor logging, and incident deterrence for premier commercial and diplomatic premises.',
      requirements: ['Grade 12 Certificate', 'Valid Zambian NRC', 'Fingerprint police clearance', 'Min. 21 years old']
    },
    {
      id: 'role-tactical',
      title: 'Tactical Armed Escort Specialist',
      type: 'Full-Time (Active Deployment)',
      location: 'National Logistics Corridors',
      slots: '6 Positions Open',
      desc: 'High-risk asset escort, cash-in-transit convoy security, and rapid tactical armed backup for emergency distress activations.',
      requirements: ['Ex-service / 3+ yrs tactical experience', 'Clean military or police record', 'Firearms proficiency certification', 'Defensive driving advantage']
    },
    {
      id: 'role-cctv',
      title: 'Control Room CCTV Controller',
      type: 'Full-Time (24/7 Rhodespark Desk)',
      location: 'Rhodespark National Command HQ',
      slots: '3 Positions Open',
      desc: 'Real-time CCTV compound monitoring, radio dispatch coordination, GPS mobile patrol tracking, and immediate emergency escalation.',
      requirements: ['Computer literacy & report writing', 'Excellent verbal radio communication', 'Attention to perimeter detail', 'Discretion & security clearance']
    },
    {
      id: 'role-supervisor',
      title: 'Field Operations Supervisor',
      type: 'Full-Time (Field Command)',
      location: 'Lusaka Commercial District',
      slots: '4 Positions Open',
      desc: 'Conduct unannounced day and night guard force audits, enforce military dress code standards, and maintain primary client liaison.',
      requirements: ['Valid manual driver’s license', 'Min. 3 yrs security supervisory record', 'Proven team discipline leadership', 'Traceable corporate references']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-[#f1f5f9] text-slate-900 space-y-20 light-grid-pattern">
      
      {/* 1. Header Section with Sleek Styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <UserCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            <span>DISCIPLINED SENTRY RECRUITMENT • ZAMBIA</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
            CAREERS AT <span className="text-emerald-600">TOUGH TASK SECURITY</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            We are building Zambia's most disciplined, professional, and trusted security force. We hire on character, train for operational excellence, and reward integrity.
          </p>

          {/* Key Officer Standards Banner */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
              <span className="text-emerald-600 font-black block text-base">100%</span>
              <span className="text-slate-600 font-medium">Police Vetted</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
              <span className="text-emerald-600 font-black block text-base">Punctual</span>
              <span className="text-slate-600 font-medium">Guaranteed Pay</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
              <span className="text-emerald-600 font-black block text-base">Complete</span>
              <span className="text-slate-600 font-medium">Issued Kit & Gear</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm">
              <span className="text-emerald-600 font-black block text-base">Merit-Based</span>
              <span className="text-slate-600 font-medium">Rank Advancement</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Current Open Positions (Sleek Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
              ACTIVE INTAKE OPENINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
              AVAILABLE OPERATIONAL POSITIONS
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Select a position below to automatically populate the application portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openPositions.map((pos) => {
            const isSelected = selectedRole === pos.title;
            return (
              <div
                key={pos.id}
                onClick={() => {
                  setSelectedRole(pos.title);
                  setFormData((prev) => ({ ...prev, role: pos.title }));
                }}
                className={`p-6 sm:p-7 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-600 shadow-emerald-600/10 -translate-y-1'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold uppercase">
                      {pos.slots}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {pos.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display uppercase tracking-tight">
                    {pos.title}
                  </h3>

                  <div className="flex items-center text-xs text-emerald-700 font-mono font-bold">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                    <span>{pos.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pos.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Key Prerequisites:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {pos.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                        <span className="truncate">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className={`font-bold uppercase ${isSelected ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {isSelected ? '✓ Role Selected for Application' : 'Click to Apply for this Role'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Recruitment Standards & Application Form Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Vetting Checklist & Progression Pathway */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                VERIFICATION CRITERIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
                MANDATORY INTAKE STANDARDS
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Before admission into the Tough Task active deployment roster, all recruits must satisfy strict background, physical, and medical criteria.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3.5 shadow-sm">
                <FileCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase">Valid NRC & Fingerprint Police Clearance</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Original Zambian National Registration Card with clean criminal record verified by Zambia Police Service.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3.5 shadow-sm">
                <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase">Educational Qualifications</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Minimum Grade 12 School Certificate with proficiency in spoken and written English for accurate daily occurrence logs.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3.5 shadow-sm">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase">Medical Fitness & Sobriety Screen</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Physical agility test, eye examination, and zero-tolerance drug/alcohol toxicology screening.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3.5 shadow-sm">
                <Users className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase">Two Traceable Residential Referees</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Contactable community, civic, or former employer referees prior to posting.</p>
                </div>
              </div>
            </div>

            {/* Rank Career Track */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3.5 shadow-sm">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider font-display">
                STRUCTURED PROMOTION & RANK PATHWAY
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-emerald-700 font-bold block">RANK 01</span>
                  <span className="text-slate-800 mt-1 block font-semibold text-[11px]">Security Officer</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-emerald-700 font-bold block">RANK 02</span>
                  <span className="text-slate-800 mt-1 block font-semibold text-[11px]">Senior Sentry</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-emerald-700 font-bold block">RANK 03</span>
                  <span className="text-slate-800 mt-1 block font-semibold text-[11px]">Shift Sergeant</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-emerald-700 font-bold block">RANK 04</span>
                  <span className="text-slate-800 mt-1 block font-semibold text-[11px]">Ops Commander</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Direct Candidate Application Form (Sleek White Card) */}
          <div className="lg:col-span-6 bg-white border-2 border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl space-y-5">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
                CANDIDATE PORTAL
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight font-display mt-1">
                EXPRESSION OF INTEREST FORM
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Selected Position: <strong className="text-emerald-700">{selectedRole}</strong>
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 uppercase font-display">APPLICATION RECORDED</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your profile has been entered into the Tough Task HR recruitment registry. Candidates shortlisted for upcoming drill intakes in your province will be contacted via SMS / phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 uppercase transition-colors"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold uppercase">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="As shown on Zambian NRC"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold uppercase">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 97X XXX XXX"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold uppercase">NRC Number</label>
                    <input
                      type="text"
                      required
                      value={formData.nrcNumber}
                      onChange={(e) => setFormData({ ...formData, nrcNumber: e.target.value })}
                      placeholder="e.g. 123456/11/1"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold uppercase">Province of Residence</label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    >
                      <option value="Lusaka Province">Lusaka Province</option>
                      <option value="Copperbelt Province">Copperbelt Province</option>
                      <option value="Central Province">Central Province</option>
                      <option value="Eastern Province">Eastern Province</option>
                      <option value="Southern Province">Southern Province</option>
                      <option value="North-Western Province">North-Western Province</option>
                      <option value="Northern Province">Northern Province</option>
                      <option value="Luapula Province">Luapula Province</option>
                      <option value="Muchinga Province">Muchinga Province</option>
                      <option value="Western Province">Western Province</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold uppercase">Applying For Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => {
                        setFormData({ ...formData, role: e.target.value });
                        setSelectedRole(e.target.value);
                      }}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    >
                      {openPositions.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold uppercase">Prior Security Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    >
                      <option value="Fresh Recruit (No Prior Security)">Fresh Recruit (No Prior Security)</option>
                      <option value="1-3 Years Private Security">1-3 Years Private Security</option>
                      <option value="3-5+ Years Private Security">3-5+ Years Private Security</option>
                      <option value="Ex-Police / Military / ZNS">Ex-Police / Military / ZNS</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold uppercase">Police Clearance Available?</label>
                    <select
                      value={formData.hasPoliceClearance}
                      onChange={(e) => setFormData({ ...formData, hasPoliceClearance: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    >
                      <option value="Yes - Current Valid Clearance">Yes - Current Valid Clearance</option>
                      <option value="In Progress with Zambia Police">In Progress with Zambia Police</option>
                      <option value="Ready to Obtain on Request">Ready to Obtain on Request</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer btn-shimmer"
                  >
                    SUBMIT RECRUITMENT APPLICATION
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Tough Task Security Solutions is an equal opportunity employer. No recruitment fees are ever charged.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
