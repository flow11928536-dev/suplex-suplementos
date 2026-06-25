'use client'

import { Star, ExternalLink, Check, ShieldCheck, Truck, RefreshCw, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/store-data'

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">Início</a>
          <ChevronRight className="w-3 h-3" />
          <a href={`/categoria/${product.category}`} className="hover:text-sky-500">{product.categoryName}</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>
      </div>

      {/* Product main */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-sm max-h-[380px] object-contain"
            />
          </div>
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-sky-500 font-bold uppercase tracking-wide mb-2">{product.categoryName}</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-5 h-5 ${i <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating} ({product.reviews} avaliações)</span>
            </div>

            {/* Short description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{product.description}</p>

            {/* 🔗 BOTÃO DE AFILIADO PRINCIPAL */}
            {/* Substitua o href pelo link de afiliado do Mercado Livre */}
            {/* O botão abre em nova aba e não passa autoridade SEO (rel=nofollow sponsored) */}
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 sm:px-12 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-black text-base sm:text-lg rounded-2xl transition-all hover:shadow-2xl hover:scale-[1.02] mb-4"
            >
              VER PREÇO NO MERCADO LIVRE
              <ExternalLink className="w-5 h-5" />
            </a>

            <p className="text-xs text-gray-500 mb-6">
              🔒 Você será redirecionado para o site parceiro com segurança.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t">
              <div className="text-center">
                <ShieldCheck className="w-6 h-6 text-sky-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Compra Segura</p>
                <p className="text-[10px] text-gray-500">Site protegido</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-sky-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Entrega Rápida</p>
                <p className="text-[10px] text-gray-500">Todo Brasil</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-6 h-6 text-sky-500 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">Troca Fácil</p>
                <p className="text-[10px] text-gray-500">Até 7 dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Benefícios do Produto</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100">
                <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-700 pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Como Usar</h2>
          <p className="text-gray-700 leading-relaxed">{product.howToUse}</p>
        </div>
      </section>

      {/* Who should use */}
      {product.whoShouldUse && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Para Quem é Recomendado</h2>
            <p className="text-gray-700 leading-relaxed">{product.whoShouldUse}</p>
          </div>
        </section>
      )}

      {/* Ingredients */}
      {product.ingredients && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Composição</h2>
            <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>
          </div>
        </section>
      )}

      {/* FAQ about product */}
      {product.faq && product.faq.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="space-y-3">
              {product.faq.map((item, idx) => (
                <details key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                  <summary className="cursor-pointer p-4 font-bold text-gray-900 flex items-center justify-between list-none">
                    {item.question}
                    <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🔗 CTA de AFILIADO FINAL - Lembre de atualizar o link de afiliado */}
      <section className="py-12 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Pronto para Comprar?</h2>
          <p className="text-white/90 mb-6">Clique no botão abaixo e seja redirecionado para a loja parceira</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-black text-lg hover:bg-yellow-50 transition-all hover:scale-105 shadow-xl"
          >
            VER PREÇO NO MERCADO LIVRE
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
