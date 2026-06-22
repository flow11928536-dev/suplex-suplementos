'use client'

import { useState } from 'react'
import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductGrid } from '@/components/store/product-grid'
import { products, categories } from '@/lib/store-data'
import { useParams } from 'next/navigation'
import { Filter, ChevronRight } from 'lucide-react'

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [sortBy, setSortBy] = useState('relevance')

  const category = categories.find(c => c.slug === slug)
  const categoryProducts = products.filter(p => p.category === slug)

  const sortedProducts = [...(categoryProducts.length > 0 ? categoryProducts : products)]
  if (sortBy === 'name') sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
  if (sortBy === 'rating') sortedProducts.sort((a, b) => b.rating - a.rating)
  if (sortBy === 'reviews') sortedProducts.sort((a, b) => b.reviews - a.reviews)

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{category?.name || 'Categoria'}</span>
        </nav>
      </div>

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 pb-8">
          {/* Category header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">{category?.name || 'Todos os Produtos'}</h1>
            <p className="text-sm text-gray-600 max-w-2xl">
              {category?.name === 'Whey Protein' && 'Whey Protein é o suplemento mais popular do mundo. Rico em proteína de alta qualidade, acelera a recuperação muscular, promove hipertrofia e complementa a dieta. Encontre as melhores ofertas e marcas.'}
              {category?.name === 'Creatina' && 'Creatina é o suplemento mais estudado cientificamente. Aumenta força, potência e volume muscular. Descubra as melhores creatinas do mercado com os melhores preços.'}
              {category?.name === 'Pré-Treino' && 'Pré-treinos aumentam energia, foco e performance nos treinos. Cafeína, beta-alanina e outros ingredientes para você treinar no máximo. Compare os melhores.'}
              {category?.name === 'Aminoácidos' && 'Aminoácidos como BCAA e Glutamina são essenciais para recuperação muscular. Reduzem catabolismo e aceleram síntese de proteínas. Veja as melhores opções.'}
              {category?.name === 'Hipercalóricos' && 'Hipercalóricos são para quem quer ganhar peso e massa muscular. Calorias densas e proteínas para acelerar o ganho de massa. Encontre o melhor para você.'}
              {category?.name === 'Vitaminas e Minerais' && 'Vitaminas e minerais essenciais para saúde, performance e bem-estar. Multivitamínicos, ômega 3, vitamina D e muito mais.'}
              {category?.name === 'Emagrecimento' && 'Termogênicos e suplementos para emagrecimento. Acelere o metabolismo e queime gordura com os melhores produtos do mercado.'}
              {category?.name === 'Colágeno' && 'Colágeno hidrolisado para pele, cabelo, unhas e articulações. O suplemento de beleza e saúde mais querido do Brasil.'}
              {category?.name === 'Snacks e Barras' && 'Barras de proteína e snacks saudáveis para comer entre as refeições. Práticos e nutritivos para sua dieta.'}
              {category?.name === 'Acessórios' && 'Acessórios para treino: shakers, garrafas, cintas e muito mais. Tudo para você treinar com conforto e estilo.'}
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b">
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 lg:hidden">
              <Filter className="w-4 h-4" /> Filtros
            </button>
            <span className="text-sm text-gray-500">{sortedProducts.length} produtos</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">Ordenar:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm font-semibold text-gray-900 bg-transparent border-none outline-none cursor-pointer">
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
