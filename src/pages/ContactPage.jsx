import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import { allLocationsList } from '../data/coverageData';

export default function ContactPage({ onOpenQuote: _onOpenQuote }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'Manned Guarding & Sentry Services',
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
    setFormSubmitted(true);
  };

  const contactFaqs = [
    {
      q: 'How quickly can Tough Task mobilize security officers to a new site?',
      a: 'For commercial and industrial facilities, our senior operations managers conduct an on-site security survey within 24 hours. A vetted, uniform-equipped sentry detachment with customized post standing orders can deploy within 48 to 72 hours across Zambia.'
    },
    {
      q: 'Are all sentries vetted by the Zambia Police CID?',
      a: 'Yes. Every security officer on our roster undergoes mandatory biometric fingerprint verification through the Zambia Police Criminal Investigation Department (CID) and possesses verified police clearance certificates.'
    },
    {
      q: 'What is your response time for alarm triggers in Lusaka and Copperbelt?',
      a: 'Our dedicated rapid armed cruiser units achieve a contractually backed sub-5-minute emergency intervention SLA across core commercial zones in Lusaka and the Copperbelt, coordinated via VHF radio by our Rhodespark Control Room.'
    },
    {
      q: 'Can Tough Task handle security tenders across multiple provinces simultaneously?',
      a: 'Yes. With permanent operational detachments in all 10 provinces and 39 districts, we manage unified multi-site national contracts with consolidated reporting and single-point account management.'
    }
  ];

  return (
    <div className="bg-[#F0F2F5] text-[#0F172A] min-h-screen">
      
      {/* 1. Page Hero: Clean Spartan Headline */}
      <section className="py-20 lg:py-28 border-b border-gray-200 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
              <span className="w-8 h-[1.5px] bg-[#16A34A]" />
              <span>DIRECT RESPONSIBILITY • CLEAR COMMUNICATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display uppercase tracking-tight text-[#0F172A] leading-[1.05]">
              CONTACT OUR <br />
              <span className="text-[#16A34A]">COMMAND HEADQUARTERS</span>
            </h1>

            <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Connect directly with our 24/7 central operations desk in Rhodespark, Lusaka for rapid guard deployments, tactical escorts, site audits, or multi-province corporate tenders across Zambia.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 text-[10px] sm:text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
              <span>RHODESPARK LUSAKA HQ</span>
              <span className="text-[#16A34A] mx-2.5">/</span>
              <span>24/7/365 ACTIVE DISPATCH</span>
              <span className="text-[#16A34A] mx-2.5">/</span>
              <span>10 PROVINCES COVERED</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Three Authority Contact Cards (Spartan Style) */}
      <section className="py-14 bg-[#F0F2F5] border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: 24/7 Emergency Control Room */}
            <div className="p-7 rounded-2xl bg-white border-2 border-[#16A34A] space-y-4 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 text-[#16A34A] flex items-center justify-center">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <span className="inline-flex items-center text-[10px] font-mono text-green-800 bg-green-100 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  <Clock className="w-2.5 h-2.5 mr-1 text-[#16A34A]" />
                  Live 24/7/365
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-green-700 font-bold uppercase tracking-wider block">
                  EMERGENCY DISPATCH CONTROL ROOM
                </span>
                <a href="tel:+260777127114" className="text-xl font-bold font-mono text-[#0F172A] hover:text-[#16A34A] transition-colors mt-1 block">
                  +260 777 127 114
                </a>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Direct tactical cruiser routing, alarm monitoring response, and rapid armed escorts.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+260777127114"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#16A34A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#15803D] transition-colors shadow-sm"
                >
                  <span>CALL CONTROL ROOM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Operations & Commercial Tenders */}
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-4 shadow-md hover:border-[#16A34A] transition-all">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-[#16A34A] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] font-bold uppercase tracking-wider block">
                  OPERATIONS &amp; CONTRACT TENDERS
                </span>
                <a href="tel:+260968025444" className="text-xl font-bold font-mono text-[#0F172A] hover:text-[#16A34A] transition-colors mt-1 block">
                  +260 968 025 444
                </a>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Site security assessments, corporate proposals, VIP motorcades, and cash-in-transit planning.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:info@toughtaskltd.com"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-gray-50 text-[#0F172A] text-xs font-semibold uppercase tracking-wider hover:bg-gray-100 border border-gray-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>EMAIL TENDERS DESK</span>
                </a>
              </div>
            </div>

            {/* Card 3: Lusaka HQ Address */}
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-4 shadow-md hover:border-[#16A34A] transition-all">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-[#16A34A] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] font-bold uppercase tracking-wider block">
                  NATIONAL HEADQUARTERS
                </span>
                <h3 className="text-base font-bold text-[#0F172A] mt-1 uppercase font-display">
                  National Council for the Laity
                </h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Office No. 5, Rhodespark, Lusaka, Zambia. Central Command Operations Desk.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/260777127114?text=Hello%20Tough%20Task%20Security,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-green-50 text-green-800 text-xs font-semibold uppercase tracking-wider hover:bg-green-100 border border-green-200 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>WHATSAPP COMMAND DESK</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Consultation Form & HQ Briefing */}
      <section className="py-20 lg:py-28 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md space-y-6">
            <div className="space-y-1.5 pb-5 border-b border-gray-100">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                PRIORITY INQUIRY FORM
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0F172A]">
                REQUEST A SECURITY ASSESSMENT
              </h2>
              <p className="text-xs text-[#64748B]">
                Submit your facility requirements and our senior operations command will respond within 60 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 text-[#16A34A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase text-[#0F172A]">
                  Inquiry Received by Rhodespark Command
                </h3>
                <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0F172A]">{formData.fullName}</strong>. An operations duty officer will contact you directly on <strong className="text-[#16A34A]">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 bg-gray-100 text-[#0F172A] hover:bg-gray-200 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border border-gray-200 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Service Selection Radio Group */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                    Primary Service Requirement *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((svc, i) => (
                      <label
                        key={i}
                        className={`flex items-center space-x-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          formData.serviceRequired === svc
                            ? 'bg-green-50/80 border-[#16A34A] text-[#0F172A] font-semibold'
                            : 'bg-gray-50/60 border-gray-200 text-[#475569] hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="serviceRequired"
                          value={svc}
                          checked={formData.serviceRequired === svc}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
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
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                      Organisation / Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company or Property Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                    Deployment Location / District
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

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold text-[#475569] uppercase">
                    Site Security Scope &amp; Details
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Briefly describe your site (e.g. number of guard posts, hours of duty, access control points, existing issues)..."
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
                  <span>TRANSMIT SECURITY ASSESSMENT REQUEST</span>
                </button>
              </form>
            )}

          </div>

          {/* Right Column: HQ Intelligence & Deployment SLAs */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-4 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                COMMAND CENTER BRIEFING
              </span>
              <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#0F172A]">
                RHODESPARK CENTRAL OPERATIONS ROOM
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                All provincial security detachments, electronic patrol telemetry, and mobile cruiser dispatches are overseen around the clock by duty command officers at our Lusaka headquarters.
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[#64748B]">Control Room Hours:</span>
                  <span className="text-[#16A34A] font-bold">24 Hours / 365 Days</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[#64748B]">Emergency Dial:</span>
                  <span className="text-[#0F172A] font-bold">+260 777 127 114</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[#64748B]">Vetting Standard:</span>
                  <span className="text-[#0F172A] font-bold">100% Police CID Fingerprint</span>
                </div>
              </div>
            </div>

            {/* Deployment Questions Briefing */}
            <div className="p-7 rounded-2xl bg-white border border-gray-200/90 space-y-4 shadow-md">
              <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-green-700 font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENT DEPLOYMENT INQUIRIES</span>
              </div>
              
              <div className="space-y-3.5">
                {contactFaqs.map((faq, i) => (
                  <div key={i} className="space-y-1 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <h4 className="text-xs font-bold text-[#0F172A]">
                      {faq.q}
                    </h4>
                    <p className="text-[11px] text-[#475569] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
