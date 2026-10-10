import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Send, CheckCircle2, MessageSquare, ExternalLink, ChevronRight, ArrowRight } from 'lucide-react';
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
    <div className="py-16 bg-[#f1f5f9] text-slate-900 space-y-16 light-grid-pattern">
      
      {/* 1. Page Hero (Spartan SA Refined Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>24/7 COMMAND DESK ACTIVE • NATIONAL DISPATCH</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase leading-tight">
            CONTACT <span className="text-emerald-600">TOUGH TASK SECURITY</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Connect directly with our 24/7 Rhodespark Command Center in Lusaka for site security surveys, emergency armed dispatch, or national corporate tenders.
          </p>
        </div>
      </div>

      {/* 2. Top Tier: 3-Column Contact Authority Cards (Spartan SA Structure) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Physical HQ Address */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all spartan-card">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                HEADQUARTERS LOCATION
              </span>
              <h3 className="text-base font-bold text-slate-900">
                National Council for the Laity Building
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Office No. 5, Rhodespark, Lusaka, Zambia
              </p>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-700 font-bold border-t border-slate-100 flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              <span>Active National Operations Hub</span>
            </div>
          </div>

          {/* Card 2: 24/7 Telephone & Rapid Dispatch */}
          <div className="p-7 rounded-2xl bg-white border-2 border-emerald-500/80 space-y-4 shadow-md spartan-card">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                24/7 TELEPHONE DISPATCH
              </span>
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Control Room (24/7):</div>
                <a 
                  href="tel:+260777127114" 
                  className="text-base font-black text-slate-900 hover:text-emerald-600 transition-colors font-mono block"
                >
                  +260 777 127 114
                </a>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-mono">Operations & Tenders:</div>
                <a 
                  href="tel:+260968025444" 
                  className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors font-mono block"
                >
                  +260 968 025 444
                </a>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
              <a
                href="tel:+260777127114"
                className="text-xs font-bold text-white bg-emerald-600 px-3.5 py-1.5 rounded-lg hover:bg-emerald-500 transition-colors"
              >
                CALL NOW
              </a>
              <a
                href="https://wa.me/260777127114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                WHATSAPP CHAT
              </a>
            </div>
          </div>

          {/* Card 3: Email & Operating Hours */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all spartan-card">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                CORPORATE EMAIL & HOURS
              </span>
              <p className="text-sm font-bold text-slate-900">
                <a href="mailto:info@toughtaskltd.com" className="hover:text-emerald-600 transition-colors">
                  info@toughtaskltd.com
                </a>
              </p>
              <div className="pt-1.5 text-xs text-slate-600 space-y-0.5">
                <p><strong>Tactical Dispatch:</strong> 24/7/365 Non-stop</p>
                <p><strong>Administration:</strong> Mon – Fri: 08:00 – 17:00</p>
              </div>
            </div>
            <div className="pt-2 text-xs font-mono text-emerald-700 font-bold border-t border-slate-100">
              Prompt response to commercial tenders
            </div>
          </div>

        </div>
      </div>

      {/* 3. Middle Tier: Asymmetric Split Form (7 cols) + Map & Socials (5 cols) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-7 sm:p-9 rounded-3xl shadow-md space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500" />

            <div className="border-b border-slate-200 pb-4 space-y-1">
              <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                CONFIDENTIAL SITE SURVEY REQUEST
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase tracking-tight">
                REQUEST A CALL BACK / SECURITY ASSESSMENT
              </h2>
              <p className="text-xs text-slate-500">
                Complete the form below to request security sentries, risk audits, or patrol coverage.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center shadow-lg animate-beacon">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display uppercase">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our command desk in Rhodespark has received your brief and will contact you promptly at <span className="text-emerald-700 font-mono font-bold">{formData.phone}</span>.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 text-xs font-bold text-slate-700 hover:text-slate-900 rounded-xl border border-slate-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kondwani Banda"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Zambian Enterprise Ltd"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +260 96X XXX XXX"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. admin@organization.co.zm"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase">Service Required *</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.number} - {s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-bold uppercase">Location / Province *</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
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
                  <label className="text-slate-700 font-bold uppercase">Security Brief / Premises Overview</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your facility, guard quantity, shift requirements, or emergency needs..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer btn-shimmer"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST SECURITY ASSESSMENT</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                  🔒 Confidential threat survey. No spam. 24/7 Rhodespark response guarantee.
                </p>
              </form>
            )}
          </div>

          {/* Right: Rhodespark Office Map & Verified Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Embedded Interactive Map Card for Rhodespark Lusaka */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    RHODESPARK, LUSAKA LOCATION
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  HEADQUARTERS
                </span>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Tough Task Security Solutions Location - Rhodespark Lusaka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.023450376757!2d28.2934335!3d-15.4168057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3531b672809%3A0x86134b2230efc4f7!2sRhodes%20Park%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1700000000000!5m2!1sen!2szm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong>Address:</strong> National Council for the Laity Building, Office No. 5, Rhodespark, Lusaka, Zambia.
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-md space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3">
                OFFICIAL SOCIAL MEDIA CHANNELS
              </h3>

              <div className="space-y-2.5">
                <a
                  href="https://www.facebook.com/share/1JTXFuQXzp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-emerald-500 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      f
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Facebook</div>
                      <div className="text-[11px] text-slate-500 font-mono">Tough Task Security Solutions Ltd</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                </a>

                <a
                  href="https://www.tiktok.com/@toughtasksolution?_r=1&_t=ZS-9AQw2u1aGQP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-emerald-500 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      ♪
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">TikTok</div>
                      <div className="text-[11px] text-slate-500 font-mono">@toughtasksolution</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                </a>

                <a
                  href="https://www.linkedin.com/company/tough-task-security-solutions-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:border-emerald-500 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      in
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">LinkedIn</div>
                      <div className="text-[11px] text-slate-500 font-mono">Tough Task Security Solutions Limited</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
