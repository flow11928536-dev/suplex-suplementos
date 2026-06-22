'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Receba as Melhores Ofertas</h2>
          <p className="text-white/90 text-sm sm:text-base mb-6">
            Inscreva-se e receba promoções exclusivas de suplementos direto no seu e-mail. Cupons, descontos e muito mais!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 h-12 px-5 rounded-full text-gray-900 outline-none text-sm"
            />
            <button type="submit" className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
              {subscribed ? '✓ Inscrito!' : 'QUERO RECEBER'}
              {!subscribed && <Send className="w-4 h-4" />}
            </button>
          </form>
          <p className="text-[11px] text-white/70 mt-4">Não enviamos spam. Você pode cancelar a qualquer momento.</p>
        </div>
      </div>
    </section>
  )
}
