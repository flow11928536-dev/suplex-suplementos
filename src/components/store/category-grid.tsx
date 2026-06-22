'use client'

import { categories } from '@/lib/store-data'

export function CategoryGrid() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 text-center mb-2">
          Compre por Categoria
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">Encontre o suplemento ideal para seu objetivo</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map(cat => (
            <a key={cat.id} href={`/categoria/${cat.slug}`} className="group relative bg-white rounded-2xl p-3 sm:p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" />
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-tight line-clamp-2 group-hover:text-sky-500 transition-colors">{cat.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
