import React, { useState } from 'react';
import { Shield, X, CheckCircle2, Phone, Mail, MapPin, Building, Send, ChevronRight, AlertCircle } from 'lucide-react';
import { services } from '../data/servicesData';
import { allLocationsList, provincesData } from '../data/coverageData';
import { companyInfo } from '../data/companyInfo';

export default function QuoteBuilderModal({ isOpen, onClose, preselectedService = '', preselectedLocation = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: preselectedService || 'Manned Guarding',
    location: preselectedLocation || 'Lusaka',
    guardCount: '2 - 4 Guards',
    shiftRequirement: '24/7 Day & Night Coverage',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch & confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-security-950 border border-security-750 rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-security-900 border-b border-security-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                REQUEST A SECURITY ASSESSMENT
              </h3>
              <p className="text-xs text-slate-400">
                Tailored threat survey & formal quotation for Zambia operations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-security-950 text-slate-400 hover:text-white hover:bg-security-800 border border-security-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center animate-beacon">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white font-display uppercase tracking-tight">
                  ASSESSMENT REQUEST RECEIVED
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your requirement for <strong className="text-blue-400">{formData.serviceRequired}</strong> in <strong className="text-blue-400">{formData.location}</strong> has been logged with our central operations command.
                </p>
                <p className="text-xs text-slate-400">
                  A senior Tough Task security officer will contact you at <span className="text-slate-200 font-semibold">{formData.phone}</span> within 2 hours.
                </p>
              </div>

              {/* Instant Call Option */}
              <div className="p-4 bg-security-900 rounded-xl border border-security-800 max-w-md mx-auto space-y-2">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Need Immediate Tactical Deployment?
                </div>
                <div className="flex justify-center gap-3">
                  <a
                    href="tel:+260777127114"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    Call +260 777 127 114
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Mwansa Phiri"
                    className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Copperbelt Logistics Ltd"
                    className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Phone Number <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +260 97X XXX XXX"
                    className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. operations@company.co.zm"
                    className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Row 3: Service Required & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Service Required <span className="text-blue-400">*</span>
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.number} - {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Deployment Location (Zambia) <span className="text-blue-400">*</span>
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <optgroup label="Core Provincial Commands">
                      <option value="Lusaka (Lusaka Province)">Lusaka (National HQ)</option>
                      <option value="Ndola (Copperbelt Province)">Ndola (Copperbelt)</option>
                      <option value="Kitwe (Copperbelt Province)">Kitwe (Copperbelt)</option>
                      <option value="Chipata (Eastern Province)">Chipata (Eastern)</option>
                      <option value="Kasama (Northern Province)">Kasama (Northern)</option>
                    </optgroup>
                    <optgroup label="All 39 Operational Districts">
                      {allLocationsList.map((loc) => (
                        <option key={loc.id} value={`${loc.name} (${loc.province})`}>
                          {loc.name} — {loc.province}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Message / Scope */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Specific Requirements or Premises Overview
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your site, perimeter size, estimated guard count, or specific threat concerns..."
                  className="w-full px-3.5 py-2.5 bg-security-900 border border-security-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING REQUEST...</span>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      <span>REQUEST SECURITY ASSESSMENT</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                <span>Confidential corporate security enquiry. Strict non-disclosure upheld.</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
