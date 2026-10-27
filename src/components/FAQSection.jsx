import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How are Tough Task security officers vetted and certified in Zambia?',
      a: 'Every single officer on our roster undergoes compulsory fingerprint biometric vetting through the Zambia Police Criminal Investigation Department (CID). We require clean police clearance certificates, valid Zambian NRCs, Grade 12 educational completion, and verified references before intake into our drill academy.'
    },
    {
      q: 'What is your rapid response emergency SLA in Lusaka and Copperbelt?',
      a: 'We operate dedicated armored tactical backup cruisers linked via direct VHF/UHF tactical frequencies to our 24/7 Rhodespark Central Control Room. In designated commercial corridors in Lusaka and the Copperbelt, our average rapid intervention response is sub-5 minutes upon distress verification.'
    },
    {
      q: 'Do corporate clients receive digital proof of patrol and occurrence reports?',
      a: 'Yes. Tough Task utilizes electronic NFC perimeter checkpoints. Sentries scan tags at designated patrol intervals, transmitting live timestamps and GPS telemetry to our command desk. Clients receive daily digital occurrence digests and monthly analytical SLA scorecards.'
    },
    {
      q: 'What geographic areas and provinces does Tough Task cover?',
      a: 'Tough Task Security Solutions has active operational deployment across all 10 provinces in Zambia, covering 42 core economic districts including Lusaka, Ndola, Kitwe, Kabwe, Livingstone, Chipata, Solwezi, and Kasama, as well as inter-provincial transit routes.'
    },
    {
      q: 'Can we combine static manned guarding with 24/7 offsite CCTV monitoring?',
      a: 'Absolutely. We specialize in integrated defense architectures where physical static sentries are reinforced with 24/7 central CCTV monitoring, perimeter line-crossing analytics, and remote two-way voice challenge, giving full perimeter coverage at optimized cost.'
    },
    {
      q: 'How quickly can Tough Task mobilize security guards for a new facility?',
      a: 'For standard commercial and industrial premises, our mobile operations team can conduct an initial site survey within 24 hours and mobilize a fully vetted, uniform-equipped sentry force with tailored standing orders in as little as 48 to 72 hours.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#E5E7EB] text-[#0F172A] border-t border-gray-300/80 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-gray-300/80 gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
              <span className="w-6 h-[1.5px] bg-[#16A34A]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-tight">
              COMMON CLIENT <span className="text-[#16A34A]">QUESTIONS &amp; ANSWERS</span>
            </h2>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
              Transparent answers regarding our sentry vetting standards, response SLAs, digital accountability, and nationwide contract mobilization.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#64748B]">
            <span>Have a specific inquiry?</span>
            <a
              href="tel:+260777127114"
              className="text-[#16A34A] hover:underline font-bold"
            >
              Call +260 777 127 114
            </a>
          </div>
        </div>

        {/* FAQ Accordion List with Crisp White Cards */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200/90 rounded-2xl shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold pr-6 transition-colors ${
                    isOpen ? 'text-[#16A34A]' : 'text-[#0F172A] group-hover:text-[#16A34A]'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                    isOpen 
                      ? 'bg-[#16A34A] text-white border-[#16A34A] rotate-180' 
                      : 'bg-gray-50 text-[#64748B] border-gray-200 group-hover:border-[#16A34A]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
