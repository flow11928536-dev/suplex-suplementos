'use client'

import { useState } from 'react'
import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductGrid } from '@/components/store/product-grid'
import { products, categories } from '@/lib/store-data'
import { Filter, ChevronRight } from 'lucide-react'

export default function CategoryPageClient({
  slug,
}: {
  slug: string
}) {
  const [sortBy, setSortBy] = useState('relevance')

  const category = categories.find((c) => c.slug === slug)
  const categoryProducts = products.filter((p) => p.category === slug)

  const sortedProducts = [
    ...(categoryProducts.length > 0 ? categoryProducts : products),
  ]

  if (sortBy === 'name')
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name))

  if (sortBy === 'rating')
    sortedProducts.sort((a, b) => b.rating - a.rating)

  if (sortBy === 'reviews')
    sortedProducts.sort((a, b) => b.reviews - a.reviews)

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">
            Início
          </a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">
            {category?.name || 'Categoria'}
          </span>
        </nav>
      </div>

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 pb-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              {category?.name || 'Todos os Produtos'}
            </h1>

            <p className="text-sm text-gray-600 max-w-2xl">
              {category?.name === 'Whey Protein' &&
                'Whey Protein é o suplemento mais popular do mundo. Rico em proteína de alta qualidade, acelera a recuperação muscular, promove hipertrofia e complementa a dieta.'}
              {category?.name === 'Creatina' &&
                'Creatina é o suplemento mais estudado cientificamente. Aumenta força, potência e volume muscular.'}
              {category?.name === 'Pré-Treino' &&
                'Pré-treinos aumentam energia, foco e performance nos treinos.'}
            </p>
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b">
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 lg:hidden">
              <Filter className="w-4 h-4" />
              Filtros
            </button>

            <span className="text-sm text-gray-500">
              {sortedProducts.length} produtos
            </span>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">
                Ordenar:
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-semibold text-gray-900 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="relevance">Relevância</option>
                <option value="name">Nome A-Z</option>
                <option value="rating">Melhor avaliados</option>
                <option value="reviews">Mais populares</option>
              </select>
            </div>
          </div>

          <ProductGrid title="" products={sortedProducts} />
        </div>
      </div>

      <Footer />
    </>
  )
}