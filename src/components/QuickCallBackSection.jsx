import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Shield, ArrowRight } from 'lucide-react';
import { allLocationsList } from '../data/coverageData';

export default function QuickCallBackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Manned Guarding',
    location: 'Lusaka (Lusaka Province)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-call-back" className="py-20 lg:py-28 bg-slate-100 text-slate-900 border-y border-slate-300/80 relative overflow-hidden light-grid-pattern">
      {/* Background Accent Aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Authority */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                <span>24/7 COMMAND DESK</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
                CONTACT <br />
                <span className="text-emerald-600">
                  TOUGH TASK SECURITY
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Speak to our expert security command desk in Rhodespark, Lusaka, <strong className="text-slate-900 font-bold">available 24/7</strong> to protect what matters most.
              </p>
            </div>

            {/* Direct Contact Details Cards */}
            <div className="space-y-3">
              
              {/* Emergency Control Room */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-emerald-500 hover:shadow-xl transition-all duration-300 spartan-card">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-emerald-600 font-bold tracking-wider">
                    Emergency Control Room (24/7/365)
                  </div>
                  <a href="tel:+260777127114" className="text-lg font-black text-slate-900 hover:text-emerald-600 transition-colors font-mono block">
                    +260 777 127 114
                  </a>
                  <p className="text-xs text-slate-500">Direct dispatch, patrol coordination & alarm response</p>
                </div>
              </div>

              {/* Operations & Administration */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-emerald-500 hover:shadow-xl transition-all duration-300 spartan-card">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-emerald-600 font-bold tracking-wider">
                    Operations & Tenders Desk
                  </div>
                  <a href="tel:+260968025444" className="text-lg font-black text-slate-900 hover:text-emerald-600 transition-colors font-mono block">
                    +260 968 025 444
                  </a>
                  <p className="text-xs text-slate-500">Commercial guarding quotes, VIP escorts & contracts</p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-start space-x-4 shadow-sm spartan-card">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-slate-700" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    Lusaka National Headquarters
                  </div>
                  <p className="text-slate-900 font-bold text-sm">
                    National Council for the Laity Building
                  </p>
                  <p className="text-slate-600">Office No. 5, Rhodespark, Lusaka, Zambia</p>
                </div>
              </div>

              {/* Verified Social Media Channels */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                  Official Social Channels
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/1JTXFuQXzp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.tiktok.com/@toughtasksolution?_r=1&_t=ZS-9AQw2u1aGQP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.72 1.34-.05 2.53-.94 2.92-2.22.18-.55.22-1.13.21-1.71V.02h-.78z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/tough-task-security-solutions-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-blue-700" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Spartan-Style "Request a call back" Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Top Bar Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500" />

            <div className="space-y-2 border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-slate-900">
                REQUEST A CALL BACK
              </h3>
              <p className="text-xs text-slate-500">
                Complete this form and an operations officer will contact you within 15 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center shadow-lg animate-beacon">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-display uppercase text-slate-900 tracking-tight">
                    CALL BACK LOGGED
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Rhodespark control desk has prioritized your request for <strong className="text-emerald-600">{formData.service}</strong> in <strong className="text-slate-900">{formData.location}</strong>.
                  </p>
                  <p className="text-xs text-slate-500">
                    We will call you directly at <span className="text-slate-900 font-semibold">{formData.phone}</span>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/260777127114?text=Hello%20Tough%20Task%20Security,%20I%20just%20submitted%20a%20request%20for%20${encodeURIComponent(formData.service)}%20in%20${encodeURIComponent(formData.location)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg flex items-center space-x-2 btn-shimmer"
                  >
                    <span>CONNECT VIA WHATSAPP NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold uppercase rounded-xl transition-colors shadow-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kondwani Banda"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 96X XXX XXX"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. admin@enterprise.co.zm"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase tracking-wider">Required Service *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-colors shadow-sm"
                    >
                      <option value="Manned Guarding">Manned Guarding (Static & Patrol)</option>
                      <option value="Tactical Armed Units">Tactical Armed Units & Response</option>
                      <option value="Rapid Response Panic Button">Rapid Response Panic Button</option>
                      <option value="Offsite CCTV Video Surveillance">Offsite CCTV Video Surveillance & Monitoring</option>
                      <option value="VIP & Close Protection">VIP & Close Protection</option>
                      <option value="Cash-In-Transit Logistics">Cash-In-Transit & Bullion Logistics</option>
                      <option value="Mining & Concession Security">Mining & Concession Security</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold uppercase tracking-wider">Operational Location / Province *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-colors shadow-sm"
                  >
                    <option value="Lusaka (Lusaka Province)">Lusaka Province — National HQ</option>
                    {allLocationsList.map((loc) => (
                      <option key={loc.id} value={`${loc.name} (${loc.province})`}>
                        {loc.name} — {loc.province}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-bold uppercase tracking-wider">Security Brief / Specific Threats</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site (number of guards, facility type, urgent requirements)..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-colors shadow-sm"
                  ></textarea>
                </div>

                {/* Submit Button (Spartan SA High-Contrast Button) */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-emerald-500/40 btn-shimmer"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST CALL BACK</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                  🔒 Confidential threat survey. No spam. 24/7 Rhodespark response guarantee.
                </p>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
