import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Send, CheckCircle2, MessageSquare, ExternalLink, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { services } from '../data/servicesData';
import { allLocationsList } from '../data/coverageData';

export default function ContactPage({ onOpenQuote }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'Manned Guarding',
    location: 'Lusaka (Lusaka Province)',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-16 bg-security-950 text-slate-100 space-y-20">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Phone className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            GET IN TOUCH
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            CONTACT <span className="text-emerald-500">TOUGH TASK SECURITY</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Connect with our operations command in Rhodespark, Lusaka for site security surveys, emergency dispatch, or national corporate tenders.
          </p>
        </div>
      </div>

      {/* Verified Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Physical HQ Address */}
          <div className="p-8 rounded-2xl bg-security-900 border border-security-750 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                HEAD OFFICE LOCATION
              </h3>
              <p className="text-base font-semibold text-slate-200">
                National Council for the Laity Building
              </p>
              <p className="text-sm text-slate-400">
                Office No. 5, Rhodespark
              </p>
              <p className="text-sm text-slate-400">
                Lusaka, Zambia
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              Active National Operations Hub
            </div>
          </div>

          {/* Card 2: Verified Phone Numbers */}
          <div className="p-8 rounded-2xl bg-security-900 border border-security-750 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                TELEPHONE & RAPID DISPATCH
              </h3>
              <div className="space-y-1.5 text-sm">
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Primary Operations:</div>
                  <a 
                    href="tel:+260777127114" 
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    +260 777 127 114
                  </a>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Direct / Emergency Line:</div>
                  <a 
                    href="tel:+260968025444" 
                    className="text-base font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    +260 968 025 444
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="tel:+260777127114"
                className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/80 hover:bg-emerald-600 hover:text-white transition-colors"
              >
                CALL NOW
              </a>
              <a
                href="https://wa.me/260777127114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-400 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-800/80 hover:bg-blue-600 hover:text-white transition-colors"
              >
                WHATSAPP CHAT
              </a>
            </div>
          </div>

          {/* Card 3: Email & Hours */}
          <div className="p-8 rounded-2xl bg-security-900 border border-security-750 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                CORPORATE EMAIL & HOURS
              </h3>
              <p className="text-sm font-semibold text-slate-200">
                <a href="mailto:info@toughtaskltd.com" className="hover:text-blue-400 transition-colors">
                  info@toughtaskltd.com
                </a>
              </p>
              <div className="pt-2 text-xs text-slate-400 space-y-0.5">
                <p><strong>Operations Command:</strong> 24/7/365 Non-stop</p>
                <p><strong>Administration:</strong> Mon – Fri: 08:00 – 17:00</p>
              </div>
            </div>
            <div className="pt-2 text-xs font-mono text-slate-400">
              Prompt response to all written tenders
            </div>
          </div>

        </div>
      </div>

      {/* Main Form & Location Map Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact & Assessment Form (7 cols) */}
          <div className="lg:col-span-7 bg-security-900 border border-security-750 p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="border-b border-security-800 pb-4 space-y-1">
              <h2 className="text-2xl font-bold text-white font-display uppercase tracking-tight">
                SEND AN ENQUIRY / REQUEST A QUOTE
              </h2>
              <p className="text-xs text-slate-400">
                Complete the form below to request security personnel, risk surveys, or patrol services.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 mx-auto flex items-center justify-center animate-beacon">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display uppercase">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Our operations team in Rhodespark has received your submission and will contact you promptly at <span className="text-blue-400">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-security-950 text-xs font-bold text-slate-300 hover:text-white rounded-xl border border-security-750"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kondwani Banda"
                      className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Zambian Enterprise Ltd"
                      className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 96X XXX XXX"
                      className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. admin@organization.co.zm"
                      className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Service Required *</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white focus:border-blue-500"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.number} - {s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold uppercase">Location *</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white focus:border-emerald-500"
                    >
                      <option value="Lusaka (Lusaka Province)">Lusaka (National HQ)</option>
                      {allLocationsList.map((loc) => (
                        <option key={loc.id} value={`${loc.name} (${loc.province})`}>
                          {loc.name} — {loc.province}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold uppercase">Message / Security Scope</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your facility, location, guard requirements, or specific security concerns..."
                    className="w-full px-3.5 py-2.5 bg-security-950 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:border-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center cursor-pointer btn-shimmer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>REQUEST SECURITY ASSESSMENT</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Rhodespark Office Map & Verified Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Embedded Interactive Map Card for Rhodespark Lusaka */}
            <div className="bg-security-900 border border-security-750 p-6 rounded-3xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    RHODESPARK, LUSAKA LOCATION
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  HEADQUARTERS
                </span>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-security-800">
                <iframe
                  title="Tough Task Security Solutions Location - Rhodespark Lusaka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.023450376757!2d28.2934335!3d-15.4168057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3531b672809%3A0x86134b2230efc4f7!2sRhodes%20Park%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1700000000000!5m2!1sen!2szm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter invert-[0.85] hue-rotate-180 contrast-125"
                ></iframe>
              </div>

              <div className="p-3 bg-security-950 rounded-xl border border-security-800 text-xs text-slate-300">
                <strong>Address:</strong> National Council for the Laity Building, Office No. 5, Rhodespark, Lusaka, Zambia.
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="bg-security-900 border border-security-750 p-6 rounded-3xl shadow-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-security-800 pb-3">
                OFFICIAL SOCIAL MEDIA
              </h3>

              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/search/top?q=Tough%20Task%20Security%20Solutions%20Ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-security-950 rounded-xl border border-security-800 flex items-center justify-between hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      f
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">Facebook</div>
                      <div className="text-[11px] text-slate-400">Tough Task Security Solutions Ltd</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                <a
                  href="https://www.tiktok.com/@toughtasksecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-security-950 rounded-xl border border-security-800 flex items-center justify-between hover:border-pink-500 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center font-bold text-xs">
                      ♪
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">TikTok</div>
                      <div className="text-[11px] text-slate-400">Tough Task Security Solutions Ltd</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                <a
                  href="https://www.linkedin.com/company/tough-task-security-solutions-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-security-950 rounded-xl border border-security-800 flex items-center justify-between hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs">
                      in
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-400">Tough Task Security Solutions Ltd</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
