'use client'

import Link from 'next/link'
import { Star, ExternalLink } from 'lucide-react'
import type { Product } from '@/lib/store-data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md ${
              product.badge === "⚙️OFERTA IMPERDÍVEL"
                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                : product.badge === "Premium"
                ? "bg-gradient-to-r from-green-500 to-green-600"
                : product.badge === "Top Tier"
                ? "bg-gradient-to-r from-purple-500 to-violet-600"
                : product.badge === "Promoção"
                ? "bg-gradient-to-r from-red-500 to-red-700"
                : "bg-gradient-to-r from-orange-500 to-red-500"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Imagem */}
      <Link
        href={`/produto/${product.slug}`}
        className="block relative aspect-square bg-gray-50 overflow-hidden"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} - Review e Comparativo`}
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
        />
      </Link>

      {/* Conteúdo */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">

        {/* Categoria */}
        <p className="text-[10px] sm:text-xs text-sky-500 font-bold uppercase tracking-wide mb-1">
          {product.categoryName}
        </p>

        {/* Vendidos */}
        {product.sold && (
          <p className="text-[10px] text-gray-400 mb-1">
            {product.sold}
          </p>
        )}

        {/* Nome */}
        <Link
          href={`/produto/${product.slug}`}
          className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 hover:text-sky-500 transition-colors mb-2 min-h-[2.5rem]"
        >
          {product.name}
        </Link>

        {/* Avaliação */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i <= Math.round(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Descrição */}
        <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 mb-3 flex-1">
          {product.shortDescription}
        </p>

        {/* Botão afiliado */}
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          aria-label={`Ver preço de ${product.name}`}
          className="w-full h-10 rounded-xl font-bold text-xs sm:text-sm transition-all bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 hover:shadow-lg flex items-center justify-center gap-1.5"
        >
          Ver Preço
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

      </div>
    </div>
  )
}