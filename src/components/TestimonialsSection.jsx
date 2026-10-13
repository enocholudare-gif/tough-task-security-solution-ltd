import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 'rev-1',
      name: 'Martin Mumba',
      role: 'Operations Director, Commercial Mall Complex',
      location: 'Lusaka CBD',
      rating: 5,
      date: 'Verified Corporate Review',
      review: 'Tough Task Security Solutions has provided guarding and CCTV monitoring for our shopping complex for over two years. Their officers are disciplined, smartly turned out, and their response times to alarm triggers have been consistently under four minutes. Outstanding operational discipline.'
    },
    {
      id: 'rev-2',
      name: 'Hadley Chanda',
      role: 'Estate Chairman & Resident Representative',
      location: 'Kabulonga & Rhodes Park',
      rating: 5,
      date: 'Verified Residential Review',
      review: 'Switching our residential estate security to Tough Task was the best decision our committee made. The electronic NFC checkpoint logging, regular patrol supervisors, and courteous sentries have significantly improved peace of mind across our community.'
    },
    {
      id: 'rev-3',
      name: 'Lee-Anne Banda',
      role: 'Supply Chain & Logistics Lead',
      location: 'Copperbelt (Kitwe & Ndola)',
      rating: 5,
      date: 'Verified Industrial Review',
      review: 'We rely on Tough Task for armed escorts and freight protection along the high-traffic mining transit corridor. Their convoy commanders maintain unbroken radio contact and live GPS telemetry throughout the entire transit route. Zero incidents recorded.'
    },
    {
      id: 'rev-4',
      name: 'Motti Phiri',
      role: 'Head of Facilities & Corporate Assets',
      location: 'Cairo Road Commercial Tower',
      rating: 5,
      date: 'Verified Corporate Review',
      review: 'Tough Task Security Solutions stands out in Zambia for their accountability. Their digital daily occurrence logs and automated patrol reports give our executive committee complete transparency. Highly recommended for corporate headquarters.'
    },
    {
      id: 'rev-5',
      name: 'Jodi Lisa Zulu',
      role: 'Managing Partner, National Events & Expos',
      location: 'Lusaka Showgrounds',
      rating: 5,
      date: 'Verified Events Review',
      review: 'Managing crowds of over 8,000 attendees requires flawless perimeter control and VIP coordination. Tough Task handled our 3-day expo with absolute professionalism, calm authority, and zero security breaches.'
    },
    {
      id: 'rev-6',
      name: 'Gary Tembo',
      role: 'Plant General Manager',
      location: 'Industrial Concession, Kafue',
      rating: 5,
      date: 'Verified Industrial Review',
      review: 'The unannounced supervisor night inspections and perimeter electronic NFC checkpoint system set Tough Task apart from any other firm we have contracted in Zambia. Exceptional discipline and leadership.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F0F2F5] text-[#0F172A] border-t border-gray-200/80 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-300/80">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-widest text-[#16A34A] uppercase">
              <span className="w-6 h-[1.5px] bg-[#16A34A]" />
              <span>VERIFIED REPUTATION • CLIENT REVIEWS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight uppercase text-[#0F172A] leading-tight">
              WHAT OUR <span className="text-[#16A34A]">CLIENTS SAY</span>
            </h2>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
              Real feedback from corporate facilities managers, residential estate committees, and industrial logistics leads who trust Tough Task Security across Zambia.
            </p>
          </div>

          {/* Trust Scorecard */}
          <div className="p-3.5 rounded-xl bg-white border border-gray-200/90 flex items-center space-x-3.5 shrink-0 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-[#16A34A] font-bold text-lg font-display">
              ★
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[#16A34A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#0F172A] mt-0.5 font-mono">4.9 / 5.0 Rating</div>
              <div className="text-[10px] text-[#64748B] font-mono">Verified Corporate Audits</div>
            </div>
          </div>
        </div>

        {/* Testimonials 3-Card Grid with Crisp White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 hover:border-[#16A34A] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#16A34A]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                    {test.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic pt-1">
                  "{test.review}"
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-[#16A34A] font-bold font-mono text-xs shrink-0">
                  {test.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs sm:text-sm font-bold text-[#0F172A] truncate font-display uppercase tracking-wide">
                    {test.name}
                  </div>
                  <div className="text-[11px] text-[#64748B] truncate">
                    {test.role}
                  </div>
                  <div className="text-[10px] text-[#16A34A] font-mono truncate font-medium">
                    {test.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
