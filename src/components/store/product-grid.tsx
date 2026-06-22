'use client'

import { Star } from 'lucide-react'
import type { Product } from '@/lib/store-data'
import { ProductCard } from './product-card'

interface ProductGridProps {
  title: string
  description?: string
  products: Product[]
}

export function ProductGrid({ title, description, products }: ProductGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{title}</h1>}
      {description && <p className="text-sm text-gray-600 mb-6 max-w-2xl">{description}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
