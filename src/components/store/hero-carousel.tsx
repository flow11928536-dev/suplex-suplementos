'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroBanners } from '@/lib/store-data'

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroBanners.length)
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(next, 5000)
      return () => clearInterval(timer)
    }
  }, [isPaused, next])

  if (heroBanners.length === 0) return null

  return (
    <>
      <style>{`
        @keyframes pulse-inward {
          0%, 100% {
            box-shadow: inset 0 0 0px 0px rgba(251, 191, 36, 0);
            transform: scale(1);
          }
          50% {
            box-shadow: inset 0 0 12px 4px rgba(251, 191, 36, 0.6);
            transform: scale(0.97);
          }
        }
        .btn-pulse {
          animation: pulse-inward 2s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[220px] sm:h-[320px] lg:h-[410px]">
          {heroBanners.map((banner, idx) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={banner.image ?? '/images/fallback-banner.jpg'}
                alt={banner.title ?? 'Banner promocional'}
                fill
                priority={idx === 0}
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Botão no canto inferior esquerdo, acima dos dots */}
              <div className="absolute bottom-14 sm:bottom-16 left-16 sm:left-20 z-10">
                <a
                  href={banner.link ?? '#'}
                  className="btn-pulse inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-xl"
                >
                  {banner.cta ?? 'Saiba mais'}
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          ))}

          {/* Botões de navegação */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indicadores (dots) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {heroBanners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? 'w-10 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Banner ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}