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
    <section id="contact-call-back" className="py-24 lg:py-32 bg-white text-slate-900 border-y border-slate-200/90 relative overflow-hidden light-grid-pattern">
      {/* Background Accent Aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Authority (Matching Spartan SA Left Side) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <Shield className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                <span>24/7 COMMAND DESK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-slate-900 leading-tight">
                CONTACT <br />
                <span className="text-emerald-600">
                  TOUGH TASK SECURITY
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Speak to our expert security team, <strong className="text-slate-900 font-bold">available 24/7</strong> to protect what matters most.
              </p>
            </div>

            {/* Spartan-Style Direct Contact Details Cards */}
            <div className="space-y-4">
              
              {/* Emergency Control Room */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 spartan-card">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
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
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-sm hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 spartan-card">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
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
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-sm spartan-card">
                <div className="w-12 h-12 rounded-xl bg-slate-200/80 border border-slate-300 text-slate-700 flex items-center justify-center shrink-0">
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

              {/* Email Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4 shadow-sm spartan-card">
                <div className="w-12 h-12 rounded-xl bg-slate-200/80 border border-slate-300 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-slate-700" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    Corporate Enquiries
                  </div>
                  <a href="mailto:info@toughtaskltd.com" className="text-slate-900 font-bold hover:text-emerald-600 transition-colors block text-sm">
                    info@toughtaskltd.com
                  </a>
                  <p className="text-slate-500">Formal tenders & service level agreements</p>
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
