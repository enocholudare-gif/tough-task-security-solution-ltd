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
    <section id="contact-call-back" className="py-24 lg:py-32 bg-[#05080e] text-slate-100 border-t border-slate-800/90 relative overflow-hidden">
      {/* Background Accent Aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Authority (Matching Spartan SA Left Side) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5 mr-1" />
                <span>24/7 COMMAND DESK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-white leading-tight">
                CONTACT <br />
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                  TOUGH TASK SECURITY
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Speak to our expert security team, <strong className="text-white">available 24/7</strong> to protect what matters most.
              </p>
            </div>

            {/* Spartan-Style Direct Contact Details Cards */}
            <div className="space-y-4">
              
              {/* Emergency Control Room */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090e1a]/95 border border-slate-800 flex items-start space-x-4 shadow-lg hover:border-red-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-red-400 font-bold tracking-wider">
                    Emergency Control Room (24/7/365)
                  </div>
                  <a href="tel:+260777127114" className="text-lg font-black text-white hover:text-red-400 transition-colors font-mono block">
                    +260 777 127 114
                  </a>
                  <p className="text-xs text-slate-400">Direct dispatch, patrol coordination & alarm response</p>
                </div>
              </div>

              {/* Operations & Administration */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090e1a]/95 border border-slate-800 flex items-start space-x-4 shadow-lg hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-blue-400 font-bold tracking-wider">
                    Operations & Tenders Desk
                  </div>
                  <a href="tel:+260968025444" className="text-lg font-black text-white hover:text-blue-400 transition-colors font-mono block">
                    +260 968 025 444
                  </a>
                  <p className="text-xs text-slate-400">Commercial guarding quotes, VIP escorts & contracts</p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090e1a]/95 border border-slate-800 flex items-start space-x-4 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-slate-300" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Lusaka National Headquarters
                  </div>
                  <p className="text-white font-bold text-sm">
                    National Council for the Laity Building
                  </p>
                  <p className="text-slate-300">Office No. 5, Rhodespark, Lusaka, Zambia</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090e1a]/95 border border-slate-800 flex items-start space-x-4 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-slate-300" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                    Corporate Enquiries
                  </div>
                  <a href="mailto:info@toughtaskltd.com" className="text-white font-bold hover:text-blue-400 transition-colors block text-sm">
                    info@toughtaskltd.com
                  </a>
                  <p className="text-slate-400">Formal tenders & service level agreements</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Spartan-Style "Request a call back" Form */}
          <div className="lg:col-span-7 bg-[#0a0f1c] border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
            
            {/* Top Bar Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

            <div className="space-y-2 border-b border-slate-800/90 pb-4">
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
                REQUEST A CALL BACK
              </h3>
              <p className="text-xs text-slate-400">
                Complete this form and an operations officer will contact you within 15 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg animate-beacon">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-display uppercase text-white tracking-tight">
                    CALL BACK LOGGED
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our Rhodespark control desk has prioritized your request for <strong className="text-red-400">{formData.service}</strong> in <strong className="text-white">{formData.location}</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    We will call you directly at <span className="text-slate-200 font-semibold">{formData.phone}</span>.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/260777127114?text=Hello%20Tough%20Task%20Security,%20I%20just%20submitted%20a%20request%20for%20${encodeURIComponent(formData.service)}%20in%20${encodeURIComponent(formData.location)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg flex items-center space-x-2"
                  >
                    <span>CONNECT VIA WHATSAPP NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 bg-[#080d18] hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase rounded-xl transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kondwani Banda"
                      className="w-full px-4 py-3 bg-[#060a14] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 96X XXX XXX"
                      className="w-full px-4 py-3 bg-[#060a14] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. admin@enterprise.co.zm"
                      className="w-full px-4 py-3 bg-[#060a14] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold uppercase tracking-wider">Required Service *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#060a14] border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="Manned Guarding">Manned Guarding (Static & Patrol)</option>
                      <option value="Tactical Armed Units">Tactical Armed Units & Response</option>
                      <option value="Rapid Response Panic Button">Rapid Response Panic Button</option>
                      <option value="Offsite AI Monitoring">Offsite AI Monitoring & CCTV</option>
                      <option value="VIP & Close Protection">VIP & Close Protection</option>
                      <option value="Cash-In-Transit Logistics">Cash-In-Transit & Bullion Logistics</option>
                      <option value="Mining & Concession Security">Mining & Concession Security</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold uppercase tracking-wider">Operational Location / Province *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-[#060a14] border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
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
                  <label className="text-slate-300 font-bold uppercase tracking-wider">Security Brief / Specific Threats</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site (number of guards, facility type, urgent requirements)..."
                    className="w-full px-4 py-3 bg-[#060a14] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button (Spartan SA High-Contrast Button) */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-red-500/40"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST CALL BACK</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
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
