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
    <div className="py-16 bg-slate-900 text-slate-100 space-y-20">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            <span>DISCIPLINED SENTRY RECRUITMENT • ZAMBIA</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            CAREERS AT <span className="text-emerald-500">TOUGH TASK SECURITY</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            We are building Zambia's most disciplined, professional, and trusted security force. We hire on character, train for operational excellence, and reward integrity.
          </p>

          {/* Key Officer Standards Banner */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
              <span className="text-emerald-400 font-bold block text-sm">100%</span>
              <span>Police Vetted</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
              <span className="text-emerald-400 font-bold block text-sm">Punctual</span>
              <span>Guaranteed Pay</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
              <span className="text-emerald-400 font-bold block text-sm">Complete</span>
              <span>Issued Kit & Gear</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
              <span className="text-emerald-400 font-bold block text-sm">Merit-Based</span>
              <span>Rank Advancement</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Current Open Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-4 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              ACTIVE INTAKE OPENINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
              AVAILABLE OPERATIONAL POSITIONS
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
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
                className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
                  isSelected
                    ? 'bg-slate-800/90 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 -translate-y-1'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono font-bold uppercase">
                      {pos.slots}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                      {pos.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white font-display uppercase tracking-tight">
                    {pos.title}
                  </h3>

                  <div className="flex items-center text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400 shrink-0" />
                    <span>{pos.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pos.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                    Key Prerequisites:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {pos.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                        <span className="truncate">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className={`font-bold uppercase ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {isSelected ? '✓ Role Selected for Application' : 'Click to Apply for this Role'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
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
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                VERIFICATION CRITERIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                MANDATORY INTAKE STANDARDS
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Before admission into the Tough Task active deployment roster, all recruits must satisfy strict background, physical, and medical criteria.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3.5">
                <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Valid NRC & Fingerprint Police Clearance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Original Zambian National Registration Card with clean criminal record verified by Zambia Police Service.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3.5">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Educational Qualifications</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Minimum Grade 12 School Certificate with proficiency in spoken and written English for accurate daily occurrence logs.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3.5">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Medical Fitness & Sobriety Screen</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Physical agility test, eye examination, and zero-tolerance drug/alcohol toxicology screening.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3.5">
                <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Two Traceable Residential Referees</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Contactable community, civic, or former employer referees prior to posting.</p>
                </div>
              </div>
            </div>

            {/* Rank Career Track */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-black text-white uppercase tracking-wider font-display">
                STRUCTURED PROMOTION & RANK PATHWAY
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="text-emerald-400 font-bold block">RANK 01</span>
                  <span className="text-slate-200 mt-1 block">Security Officer</span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="text-emerald-400 font-bold block">RANK 02</span>
                  <span className="text-slate-200 mt-1 block">Senior Sentry</span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="text-emerald-400 font-bold block">RANK 03</span>
                  <span className="text-slate-200 mt-1 block">Shift Sergeant</span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="text-emerald-400 font-bold block">RANK 04</span>
                  <span className="text-slate-200 mt-1 block">Ops Commander</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Direct Candidate Application Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-7 sm:p-9 rounded-3xl shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                CANDIDATE PORTAL
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-display mt-1">
                EXPRESSION OF INTEREST FORM
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Selected Position: <strong className="text-emerald-400">{selectedRole}</strong>
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-800 shadow-xl">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase font-display">APPLICATION RECORDED</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your profile has been entered into the Tough Task HR recruitment registry. Candidates shortlisted for upcoming drill intakes in your province will be contacted via SMS / phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white uppercase transition-colors"
                >
                  Submit Another Profile
                </button>
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 97X XXX XXX"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">NRC Number</label>
                    <input
                      type="text"
                      required
                      value={formData.nrcNumber}
                      onChange={(e) => setFormData({ ...formData, nrcNumber: e.target.value })}
                      placeholder="e.g. 123456/11/1"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Province of Residence</label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                    <label className="text-slate-300 font-semibold uppercase">Applying For Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => {
                        setFormData({ ...formData, role: e.target.value });
                        setSelectedRole(e.target.value);
                      }}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    >
                      {openPositions.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Prior Security Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    >
                      <option value="Fresh Recruit (No Prior Security)">Fresh Recruit (No Prior Security)</option>
                      <option value="1-3 Years Private Security">1-3 Years Private Security</option>
                      <option value="3-5+ Years Private Security">3-5+ Years Private Security</option>
                      <option value="Ex-Police / Military / ZNS">Ex-Police / Military / ZNS</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Police Clearance Available?</label>
                    <select
                      value={formData.hasPoliceClearance}
                      onChange={(e) => setFormData({ ...formData, hasPoliceClearance: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-600/30 transition-all cursor-pointer btn-shimmer"
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
