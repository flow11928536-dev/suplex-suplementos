'use client'

import { useState, useEffect } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import { categories } from '@/lib/store-data'
import { MobileMenu } from './mobile-menu'

const frasesAfiliados = [
  "🔥 PROCURANDO O MENOR PREÇO? Comparamos as melhores ofertas de suplementos do Brasil!",
  "🚀 CUPONS DE DESCONTO: Clique nos produtos e economize em lojas oficiais!",
  "📦 COMPRA 100% SEGURA: Links verificados direto para o Mercado Livre e parceiros oficiais!",
  "⚡ ATUALIZAÇÃO DIÁRIA: As melhores promoções e reviews reais atualizados hoje!",
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const listaDuplicada = [...frasesAfiliados, ...frasesAfiliados, ...frasesAfiliados]

  return (
    <>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* BARRA PRETA DO TOPO */}
      <div className="bg-gray-900 text-white py-2 overflow-hidden select-none border-b border-gray-800">
        <div className="flex whitespace-nowrap min-w-full">
          <div
            className="flex animate-marquee shrink-0 items-center gap-16 pr-16 hover:[animation-play-state:paused] cursor-pointer"
            style={{ animationDuration: '35s' }}
          >
            {listaDuplicada.map((texto, idx) => (
              <span key={`f1-${idx}`} className="text-xs font-semibold tracking-wide flex items-center gap-2">
                {texto}
              </span>
            ))}
          </div>
          <div
            className="flex animate-marquee shrink-0 items-center gap-16 pr-16 hover:[animation-play-state:paused] cursor-pointer"
            style={{ animationDuration: '35s' }}
          >
            {listaDuplicada.map((texto, idx) => (
              <span key={`f2-${idx}`} className="text-xs font-semibold tracking-wide flex items-center gap-2">
                {texto}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Botão menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* LOGOS — Suplex + Mercado Livre lado a lado */}
            <a
              href="/"
              className="flex items-center gap-4 select-none"
            >
              <img
                src="/images/suplex-logo-pure.png"
                alt="Suplex Suplementos"
                className="h-12 lg:h-16 w-auto object-contain"
              />

              {/* Divisor vertical */}
              <span className="w-px h-8 bg-gray-200" />

              <img
                src="/images/mercado-livre-logo.png"
                alt="Mercado Livre"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </a>

            {/* Right side - Text banner */}
            <div className="hidden lg:block">
              <p className="text-sm text-gray-500 font-medium">Guias e Reviews de Suplementos</p>
            </div>
            <div className="lg:hidden w-10" />
          </div>
        </div>

        {/* Navigation bar */}
        <nav className="hidden lg:block border-t border-gray-100">
          <div className="container mx-auto px-4">
            <ul className="flex items-center gap-1 h-12">
              <li>
                <a href="/" className="px-4 py-2 text-sm font-bold text-gray-900 hover:text-sky-500 transition-colors">
                  Início
                </a>
              </li>
              <li className="relative" onMouseEnter={() => setHoveredCategory('all')} onMouseLeave={() => setHoveredCategory(null)}>
                <button className="px-4 py-2 text-sm font-bold text-gray-900 hover:text-sky-500 transition-colors flex items-center gap-1">
                  Categorias <ChevronDown className="w-4 h-4" />
                </button>
                {hoveredCategory === 'all' && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-2xl border border-gray-100 z-50">
                    {categories.map(cat => (
                      <a key={cat.id} href={`/categoria/${cat.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50 transition-colors border-b border-gray-50 last:border-0">
                        <span className="text-lg">{cat.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{cat.name}</p>
                          <p className="text-xs text-gray-500">{cat.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </li>
              {categories.slice(0, 6).map(cat => (
                <li key={cat.id} className="relative" onMouseEnter={() => setHoveredCategory(cat.id)} onMouseLeave={() => setHoveredCategory(null)}>
                  <a href={`/categoria/${cat.slug}`} className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-sky-500 transition-colors flex items-center gap-1">
                    {cat.name}
                    {cat.subcategories && <ChevronDown className="w-3 h-3" />}
                  </a>
                  {cat.subcategories && hoveredCategory === cat.id && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-2xl border border-gray-100 z-50 overflow-hidden">
                      <div className="p-2">
                        {cat.subcategories.map(sub => (
                          <a key={sub.slug} href={`/categoria/${cat.slug}`} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors">
                            {sub.name}
                          </a>
                        ))}
                      </div>
                      <a href={`/categoria/${cat.slug}`} className="block bg-sky-50 text-sky-600 text-sm font-bold text-center py-3 hover:bg-sky-100 transition-colors">
                        Ver todos →
                      </a>
                    </div>
                  )}
                </li>
              ))}
              <li><a href="/blog" className="px-4 py-2 text-sm font-bold text-gray-900 hover:text-sky-500 transition-colors">Blog</a></li>
              <li><a href="/faq" className="px-4 py-2 text-sm font-bold text-gray-900 hover:text-sky-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}