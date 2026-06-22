'use client'

import { Star } from 'lucide-react'

const testimonials = [
  { name: "Carlos Eduardo", role: "Leitor verificado", rating: 5, text: "Excelente site! As reviews me ajudaram a escolher o melhor whey protein pelo melhor preço. Economizei muito comparando aqui.", avatar: "CE" },
  { name: "Mariana Silva", role: "Leitora verificada", rating: 5, text: "Adoro os artigos do blog! Muito informativos e sem viés. As comparações de preços são super úteis.", avatar: "MS" },
  { name: "Rafael Mendes", role: "Leitor verificado", rating: 5, text: "Encontrei a melhor oferta de creatina aqui. O link levou direto pro Mercado Livre com desconto. Recomendo!", avatar: "RM" },
]

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-2">O que nossos leitores dizem</h2>
        <p className="text-sm text-gray-500 text-center mb-8">Milhares de pessoas confiam em nossas análises</p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{t.avatar}</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-green-600">✓ {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
