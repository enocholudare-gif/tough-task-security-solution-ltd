import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 'MBYFeIszQhQG8FUytF7J',
    src: '/assets/gallery/gallery-01.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/MBYFeIszQhQG8FUytF7J/image.jpg',
    alt: 'Tough Task Security Field Operations - 01'
  },
  {
    id: '1OletrOqBZr0os3ecRXv',
    src: '/assets/gallery/gallery-02.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/1OletrOqBZr0os3ecRXv/image.jpg',
    alt: 'Tough Task Security Field Operations - 02'
  },
  {
    id: '462n9BAJwfv0zeRIx45S',
    src: '/assets/gallery/gallery-03.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/462n9BAJwfv0zeRIx45S/image.jpg',
    alt: 'Tough Task Security Field Operations - 03'
  },
  {
    id: 'E9TlGMITm1TzaSi1isMj',
    src: '/assets/gallery/gallery-04.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/E9TlGMITm1TzaSi1isMj/image.jpg',
    alt: 'Tough Task Security Field Operations - 04'
  },
  {
    id: 'aqkEFlsmiyFfAvAogRFa',
    src: '/assets/gallery/gallery-05.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/aqkEFlsmiyFfAvAogRFa/image.jpg',
    alt: 'Tough Task Security Field Operations - 05'
  },
  {
    id: 'RTpUAwSzKxY9tnkZtNYu',
    src: '/assets/gallery/gallery-06.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/RTpUAwSzKxY9tnkZtNYu/image.jpg',
    alt: 'Tough Task Security Field Operations - 06'
  },
  {
    id: 'aFGTh9ZX4HaCP3SfgSpk',
    src: '/assets/gallery/gallery-07.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/aFGTh9ZX4HaCP3SfgSpk/image.jpg',
    alt: 'Tough Task Security Field Operations - 07'
  },
  {
    id: 'FUwr2RuAW9LW6P1ZxtMG',
    src: '/assets/gallery/gallery-08.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/FUwr2RuAW9LW6P1ZxtMG/image.jpg',
    alt: 'Tough Task Security Field Operations - 08'
  },
  {
    id: 'caz3VKrexLl9ODtL7kDa',
    src: '/assets/gallery/gallery-09.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/caz3VKrexLl9ODtL7kDa/image.jpg',
    alt: 'Tough Task Security Field Operations - 09'
  },
  {
    id: 'V2y77xFKZweqjU2pbKWi',
    src: '/assets/gallery/gallery-10.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/V2y77xFKZweqjU2pbKWi/image.jpg',
    alt: 'Tough Task Security Field Operations - 10'
  },
  {
    id: 'Atme6EjgXtpJbvXeXq1L',
    src: '/assets/gallery/gallery-11.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/Atme6EjgXtpJbvXeXq1L/image.jpg',
    alt: 'Tough Task Security Field Operations - 11'
  },
  {
    id: 'AaypfGZLy1SHCegR5Djf',
    src: '/assets/gallery/gallery-12.jpg',
    fallback: 'https://plain-weur-prod-public.komododecks.com/202610/15/AaypfGZLy1SHCegR5Djf/image.jpg',
    alt: 'Tough Task Security Field Operations - 12'
  }
];

export default function CorporateIntroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F0F2F5] text-[#0F172A] border-y border-gray-200/80">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Plain Seamless Image Carousel: No progress line, no indicator lines */}
        <div
          className="relative w-full h-[360px] sm:h-[460px] md:h-[560px] lg:h-[640px] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-950 border border-gray-200/90 shadow-xl group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {galleryImages.map((img, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={img.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onError={(e) => {
                    if (e.target.src !== img.fallback) {
                      e.target.src = img.fallback;
                    }
                  }}
                  className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98]"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Clean Subtle Navigation Arrows: Plain & Unobtrusive */}
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-105 cursor-pointer border border-white/10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next Image"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-105 cursor-pointer border border-white/10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
