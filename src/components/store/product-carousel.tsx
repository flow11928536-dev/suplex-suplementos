'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCard } from './product-card'
import type { Product } from '@/lib/store-data'

interface ProductCarouselProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllLink?: string
}

export function ProductCarousel({ title, subtitle, products, viewAllLink }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-1">{title}</h2>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            {viewAllLink && (
              <a
                href={viewAllLink}
                className="hidden sm:block text-sm font-bold text-sky-500 hover:text-sky-600 mr-3"
              >
                Ver todos →
              </a>
            )}
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 hover:border-sky-500 hover:text-sky-500 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 hover:border-sky-500 hover:text-sky-500 flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {products.map(product => (
            <div
              key={product.id}
              className="shrink-0 w-[160px] xs:w-[180px] sm:w-[220px] lg:w-[240px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
