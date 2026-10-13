import React, { useState } from 'react';
import { CheckCircle2, Send, MapPin, ChevronRight, Clock, AlertCircle } from 'lucide-react';

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
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen py-16 lg:py-24 space-y-16">
      
      {/* 1. Header Section */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-3.5">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
            <span className="w-8 h-[1.5px] bg-[#16A34A]" />
            <span>DISCIPLINED SENTRY RECRUITMENT • ZAMBIA</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] font-display tracking-tight uppercase leading-tight">
            CAREERS AT <span className="text-[#16A34A]">TOUGH TASK SECURITY</span>
          </h1>

          <p className="text-[#475569] text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            We are building Zambia's most disciplined, professional, and trusted security force. We hire on character, train for operational excellence, and reward integrity.
          </p>

          {/* Key Standards Strip with Crisp White Cards */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center space-y-1">
              <span className="text-[#16A34A] font-bold block text-lg font-display">100%</span>
              <span className="text-[#64748B] text-[10px]">Police Vetted</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center space-y-1">
              <span className="text-[#16A34A] font-bold block text-lg font-display">Guaranteed</span>
              <span className="text-[#64748B] text-[10px]">Punctual Pay</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center space-y-1">
              <span className="text-[#16A34A] font-bold block text-lg font-display">Full Kit</span>
              <span className="text-[#64748B] text-[10px]">Issued Gear &amp; Uniform</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center space-y-1">
              <span className="text-[#16A34A] font-bold block text-lg font-display">Merit</span>
              <span className="text-[#64748B] text-[10px]">Rank Promotion</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Current Open Positions */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-4 gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-green-700 uppercase tracking-widest block">
              ACTIVE INTAKE OPENINGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
              AVAILABLE OPERATIONAL POSITIONS
            </h2>
          </div>
          <p className="text-xs text-[#64748B] max-w-md">
            Select a position below to automatically populate the application form.
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
                className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-md hover:shadow-xl ${
                  isSelected
                    ? 'bg-white border-[#16A34A] shadow-[#16A34A]/10 -translate-y-1 ring-2 ring-[#16A34A]/20'
                    : 'bg-white border-gray-200/90 hover:border-gray-300'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-green-50 text-green-800 border border-green-200 text-[10px] font-mono font-bold uppercase">
                      {pos.slots}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#16A34A]" />
                      {pos.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-display uppercase tracking-tight">
                    {pos.title}
                  </h3>

                  <div className="flex items-center text-xs text-[#16A34A] font-mono font-bold">
                    <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />
                    <span>{pos.location}</span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {pos.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-gray-100">
                  <div className="text-[10px] font-mono text-green-700 font-bold uppercase">
                    Key Prerequisites:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-[#0F172A]">
                    {pos.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-center">
                        <CheckCircle2 className="w-3 h-3 text-[#16A34A] mr-1.5 shrink-0" />
                        <span className="truncate text-[#475569] text-[11px]">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs font-mono">
                  <span className={`font-bold uppercase text-[11px] ${isSelected ? 'text-[#16A34A]' : 'text-[#64748B]'}`}>
                    {isSelected ? '✓ Role Selected for Application' : 'Click to Apply for this Role'}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#16A34A]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Recruitment Standards & Application Form Split */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Vetting Criteria */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-green-700 uppercase tracking-widest block">
                VERIFICATION CRITERIA
              </span>
              <h2 className="text-2xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
                MANDATORY INTAKE STANDARDS
              </h2>
              <p className="text-[#475569] text-xs leading-relaxed">
                Before admission into the Tough Task active deployment roster, all recruits must satisfy strict background, physical, and medical criteria.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm space-y-1">
                <span className="text-xs font-bold text-[#0F172A] uppercase font-display block">
                  1. Biometric Police Clearance
                </span>
                <p className="text-[11px] text-[#475569]">
                  Certified fingerprint vetting through Zambia Police CID. Zero criminal convictions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm space-y-1">
                <span className="text-xs font-bold text-[#0F172A] uppercase font-display block">
                  2. National Registration Card (NRC)
                </span>
                <p className="text-[11px] text-[#475569]">
                  Valid Zambian NRC with verified residential address and traceable local references.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm space-y-1">
                <span className="text-xs font-bold text-[#0F172A] uppercase font-display block">
                  3. Academic Credentials
                </span>
                <p className="text-[11px] text-[#475569]">
                  Minimum Grade 12 Certificate with legible English literacy for digital logbook reporting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-sm space-y-1">
                <span className="text-xs font-bold text-[#0F172A] uppercase font-display block">
                  4. Medical &amp; Fitness Exam
                </span>
                <p className="text-[11px] text-[#475569]">
                  Full medical check including vision, stamina, drug screening, and physical fitness test.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-xs text-[#0F172A] flex items-start space-x-3">
              <AlertCircle className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <p className="text-[#475569] text-[11px] leading-relaxed">
                <strong className="text-green-800">Fair Employment Notice:</strong> Tough Task does not charge any application or recruitment fees. Uniforms and equipment are issued free of charge upon contract signing.
              </p>
            </div>
          </div>

          {/* Right: Application Portal Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-md space-y-5">
            <div className="space-y-1 border-b border-gray-100 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                RECRUITMENT APPLICATION PORTAL
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                APPLY FOR: {selectedRole.toUpperCase()}
              </h3>
              <p className="text-xs text-[#64748B]">
                Submit your credentials for review by our recruitment officers in Rhodespark, Lusaka.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 text-[#16A34A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold font-display uppercase text-[#0F172A]">
                  Application Successfully Submitted
                </h4>
                <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0F172A]">{formData.fullName}</strong>. Your application for <strong className="text-[#16A34A]">{selectedRole}</strong> has been logged. Successful candidates will be contacted on <strong className="text-[#0F172A]">{formData.phone}</strong> for physical drill assessment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-gray-100 text-[#0F172A] hover:bg-gray-200 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border border-gray-200 transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="As shown on NRC"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+260 9XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      NRC Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 123456/11/1"
                      value={formData.nrcNumber}
                      onChange={(e) => setFormData({ ...formData, nrcNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Province of Residence
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    >
                      <option value="Lusaka Province">Lusaka Province</option>
                      <option value="Copperbelt Province">Copperbelt Province</option>
                      <option value="Central Province">Central Province</option>
                      <option value="Southern Province">Southern Province</option>
                      <option value="Eastern Province">Eastern Province</option>
                      <option value="North-Western Province">North-Western Province</option>
                      <option value="Northern Province">Northern Province</option>
                      <option value="Muchinga Province">Muchinga Province</option>
                      <option value="Luapula Province">Luapula Province</option>
                      <option value="Western Province">Western Province</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Position Applied For
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => {
                        setFormData({ ...formData, role: e.target.value });
                        setSelectedRole(e.target.value);
                      }}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    >
                      {openPositions.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Security Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    >
                      <option value="None / Entry Level">None / Entry Level (Training Required)</option>
                      <option value="1-3 Years Private Security">1-3 Years Private Security</option>
                      <option value="3-5 Years Private Security">3-5 Years Private Security</option>
                      <option value="Ex-Police / Military Service">Ex-Police / Military Service</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Police Clearance Available?
                    </label>
                    <select
                      value={formData.hasPoliceClearance}
                      onChange={(e) => setFormData({ ...formData, hasPoliceClearance: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    >
                      <option value="Yes">Yes — Valid Certificate on Hand</option>
                      <option value="In Process">In Process at Zambia Police</option>
                      <option value="Will Obtain">Will Obtain upon Shortlisting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Highest Education
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    >
                      <option value="Grade 12 Certificate">Grade 12 Certificate</option>
                      <option value="College Diploma">College Diploma</option>
                      <option value="University Degree">University Degree</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#16A34A]/25 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT APPLICATION TO RECRUITMENT DESK</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
