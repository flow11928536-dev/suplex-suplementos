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

  // Se não houver banners, não renderiza nada
  if (heroBanners.length === 0) return null

  return (
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
            {/* Imagem com fallback seguro */}
            <Image
              src={banner.image ?? '/images/fallback-banner.jpg'}
              alt={banner.title ?? 'Banner promocional'}
              fill
              priority={idx === 0}
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 drop-shadow-lg">
                    
                  </h2>
                  <p className="text-sm sm:text-lg text-white/95 mb-5 sm:mb-7 max-w-lg drop-shadow-md">
                  </p>
                  <a
                    href={banner.link ?? '#'}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-sky-50 transition-all hover:scale-105 shadow-xl"
                  >
                    {banner.cta ?? 'Saiba mais'}
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
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
  )
}