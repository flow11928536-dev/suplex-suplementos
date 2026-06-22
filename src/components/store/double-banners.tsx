'use client'

import { doubleBanners } from '@/lib/store-data'
import { ChevronRight } from 'lucide-react'

export function DoubleBanners() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {doubleBanners.map(banner => (
            <a key={banner.id} href={banner.link} className="group relative overflow-hidden rounded-2xl aspect-[16/9] sm:aspect-[2/1] block">
              <img src={banner.image} alt={banner.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-white font-black text-lg sm:text-2xl mb-1 sm:mb-2">{banner.title}</h3>
                <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4">{banner.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-white font-bold text-sm group-hover:gap-2 transition-all">
                  {banner.cta} <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
