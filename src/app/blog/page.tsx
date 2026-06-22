'use client'

import { useState } from 'react'
import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { BlogCard } from '@/components/store/blog-card'
import { blogPosts } from '@/lib/blog-data'
import { ChevronRight } from 'lucide-react'

export default function BlogPage() {
  const categories = ['Todos', ...new Set(blogPosts.map(p => p.category))]
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">Blog</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">Blog Suplex Suplementos</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Guias completos, reviews e comparativas sobre suplementos. Tudo o que você precisa saber para fazer a melhor escolha.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
