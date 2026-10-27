import React, { useState, useEffect } from 'react';
import { Shield, X, CheckCircle2, Phone, Send } from 'lucide-react';
import { services } from '../data/servicesData';
import { allLocationsList } from '../data/coverageData';

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

  // Sync preselected values when modal opens
  useEffect(() => {
    if (isOpen) {
      // oxlint-disable-next-line react/set-state-in-effect
      setFormData(prev => ({
        ...prev,
        ...(preselectedService ? { serviceRequired: preselectedService } : {}),
        ...(preselectedLocation ? { location: preselectedLocation } : {})
      }));
      setSubmitted(false);
    }
  }, [isOpen, preselectedService, preselectedLocation]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gray-50 border-b border-gray-200 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-[#16A34A]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-[#0F172A] uppercase tracking-wider font-display">
                Request a Security Assessment
              </h3>
              <p className="text-xs text-[#64748B]">
                Tailored security survey &amp; formal proposal for operations in Zambia
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white text-[#64748B] hover:text-[#0F172A] hover:bg-gray-100 border border-gray-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 text-[#16A34A] mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#0F172A] font-display uppercase tracking-tight">
                  Assessment Request Received
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0F172A]">{formData.fullName}</strong>. Your enquiry for <strong className="text-[#16A34A]">{formData.serviceRequired}</strong> in <strong className="text-[#16A34A]">{formData.location}</strong> has been logged directly with our Rhodespark operations command.
                </p>
                <p className="text-xs text-[#64748B]">
                  A senior Tough Task security officer will contact you at <span className="text-[#0F172A] font-mono font-bold">{formData.phone}</span> promptly.
                </p>
              </div>

              {/* Instant Call Option */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 max-w-md mx-auto space-y-2">
                <div className="text-xs text-[#475569] font-semibold uppercase tracking-wider">
                  Require Immediate Operational Deployment?
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  <a
                    href="tel:+260777127114"
                    className="px-4 py-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    Call +260 777 127 114
                  </a>

                  <a
                    href={`https://wa.me/260968025444?text=Hello%20Tough%20Task%20Security,%20I%20have%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.serviceRequired)}%20in%20${encodeURIComponent(formData.location)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 text-green-800 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center transition-colors shadow-xs"
                  >
                    WhatsApp: +260 0968025444
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-[#0F172A] rounded-xl border border-gray-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Kondwani Banda"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Copperbelt Logistics Ltd"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +260 96X XXX XXX"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. admin@organization.co.zm"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Service Required *</label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.number} - {s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Location / Province *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Deployment Size</label>
                  <select
                    value={formData.guardCount}
                    onChange={(e) => setFormData({ ...formData, guardCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                  >
                    <option value="1 - 2 Guards">1 - 2 Sentry Posts</option>
                    <option value="2 - 4 Guards">2 - 4 Guards (Standard Commercial)</option>
                    <option value="5 - 10 Guards">5 - 10 Guards (Industrial / Estate)</option>
                    <option value="10+ Guards">10+ Guards (Mining / Major Enterprise)</option>
                    <option value="Close Protection Detail">VIP Close Protection Detail</option>
                    <option value="CIT Bullion Escort">Cash-in-Transit / Cargo Escort</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#475569] font-semibold uppercase text-[11px]">Coverage Shift</label>
                  <select
                    value={formData.shiftRequirement}
                    onChange={(e) => setFormData({ ...formData, shiftRequirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                  >
                    <option value="24/7 Day & Night Coverage">24/7 Continuous (Day &amp; Night)</option>
                    <option value="Night Shift Only (12 Hours)">Night Shift Only (18:00 - 06:00)</option>
                    <option value="Day Shift Only (12 Hours)">Day Shift Only (06:00 - 18:00)</option>
                    <option value="Event Temporary Deployment">Temporary / Event Basis</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#475569] font-semibold uppercase text-[11px]">Requirements Overview</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline any specific perimeter, access screening, or monitoring requirements..."
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md shadow-[#16A34A]/25 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Assessment Request'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#64748B] text-center font-mono">
                Confidential corporate inquiry. Direct dispatch liaison with Zambia Police Service.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
