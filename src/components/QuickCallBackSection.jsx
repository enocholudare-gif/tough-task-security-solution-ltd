import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { allLocationsList } from '../data/coverageData';

export default function QuickCallBackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Manned Guarding & Sentry Services',
    location: 'Lusaka (Lusaka Province)',
    message: ''
  });

  const serviceOptions = [
    'Manned Guarding & Sentry Services',
    'Tactical Armed Patrols & Escort',
    '24/7 Offsite CCTV Surveillance',
    'Rapid Alarm & Panic Response',
    'VIP & Close Protection Details',
    'Cash-In-Transit & Bullion Logistics'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-call-back" className="py-20 lg:py-28 bg-[#F0F2F5] text-[#0F172A] border-t border-gray-200/80 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Command Authority */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
                <span className="w-6 h-[1.5px] bg-[#16A34A]" />
                <span>24/7 COMMAND DESK • CENTRAL DISPATCH</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-tight">
                TELL US WHAT <br />
                <span className="text-[#16A34A]">NEEDS PROTECTING</span>
              </h2>

              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-lg">
                Direct responsibility. Clear communication. Reach our Rhodespark Lusaka HQ command desk by phone, email, or submission for rapid deployments and tender quotes across Zambia.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              
              {/* Emergency Control Room */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 flex items-start space-x-4 hover:border-[#16A34A] transition-all duration-300 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 text-[#16A34A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-green-700 font-bold tracking-wider">
                      Control Room (24/7/365)
                    </span>
                    <span className="inline-flex items-center text-[10px] font-mono text-green-800 bg-green-100 px-2 py-0.5 rounded-full font-bold">
                      <Clock className="w-2.5 h-2.5 mr-1 text-[#16A34A]" />
                      Live Active
                    </span>
                  </div>
                  <a href="tel:+260777127114" className="text-lg sm:text-xl font-bold text-[#0F172A] hover:text-[#16A34A] transition-colors font-mono block">
                    +260 777 127 114
                  </a>
                  <p className="text-[11px] text-[#64748B]">Emergency tactical dispatch, patrol coordination &amp; immediate alarm response</p>
                </div>
              </div>

              {/* Operations & Administration */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 flex items-start space-x-4 hover:border-[#16A34A] transition-all duration-300 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 text-[#16A34A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="text-[10px] font-mono uppercase text-[#64748B] font-bold tracking-wider">
                    Operations &amp; Tenders Desk
                  </div>
                  <a href="tel:+260968025444" className="text-lg sm:text-xl font-bold text-[#0F172A] hover:text-[#16A34A] transition-colors font-mono block">
                    +260 968 025 444
                  </a>
                  <p className="text-[11px] text-[#64748B]">Corporate contracts, site security surveys, VIP protection &amp; CIT logistics</p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 flex items-start space-x-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 text-[#16A34A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] font-mono uppercase text-[#64748B] font-bold tracking-wider">
                    Lusaka National Headquarters
                  </div>
                  <p className="text-[#0F172A] font-semibold text-xs sm:text-sm">
                    National Council for the Laity Building
                  </p>
                  <p className="text-[#64748B] text-[11px]">Office No. 5, Rhodespark, Lusaka, Zambia</p>
                </div>
              </div>

              {/* Email & WhatsApp Quick Row */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs font-mono">
                <a
                  href="mailto:info@toughtaskltd.com"
                  className="p-3.5 rounded-xl bg-white border border-gray-200/90 hover:border-[#16A34A] shadow-sm flex items-center space-x-2 text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span className="truncate text-[11px] font-semibold">info@toughtaskltd.com</span>
                </a>
                <a
                  href="https://wa.me/260777127114?text=Hello%20Tough%20Task%20Security,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-gray-200/90 hover:border-[#16A34A] shadow-sm flex items-center space-x-2 text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span className="text-[11px] font-semibold">WhatsApp Desk</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-md relative">
            <div className="space-y-1.5 pb-5 border-b border-gray-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                PRIORITY INQUIRY FORM
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                REQUEST A SECURITY CONSULTATION
              </h3>
              <p className="text-xs text-[#64748B]">
                Submit your facility requirements and our operations command will review and contact you within 60 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 text-[#16A34A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold font-display uppercase text-[#0F172A]">
                  Inquiry Received by Rhodespark Command
                </h4>
                <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0F172A]">{formData.name}</strong>. An operations duty officer will reach out directly on <strong className="text-[#16A34A]">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-gray-100 text-[#0F172A] hover:bg-gray-200 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border border-gray-200 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-5 space-y-4 text-xs">
                
                {/* Service Selection Radio Group */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                    Select Requirement *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((svc, i) => (
                      <label
                        key={i}
                        className={`flex items-center space-x-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          formData.service === svc
                            ? 'bg-green-50/80 border-[#16A34A] text-[#0F172A] font-semibold'
                            : 'bg-gray-50/60 border-gray-200 text-[#475569] hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={svc}
                          checked={formData.service === svc}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="accent-[#16A34A]"
                        />
                        <span className="text-[11px] leading-tight">{svc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mwamba Banda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.co.zm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Deployment District
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    >
                      {allLocationsList.slice(0, 39).map((loc, idx) => (
                        <option key={idx} value={`${loc.name} (${loc.province})`}>
                          {loc.name} — {loc.province}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                    Security Requirements / Site Notes
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Briefly describe your site (e.g. guard posts required, perimeter extent, hours of coverage, current challenges)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#16A34A]/25 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT SECURITY INQUIRY TO COMMAND</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
