'use client'

import { useState } from 'react'
import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">Contato</span>
        </nav>
      </div>

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Fale Conosco</h1>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">Tem alguma dúvida, sugestão ou parceria? Estamos aqui para ajudar!</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Mail, title: 'E-mail', value: 'falcao_21@msn.com', desc: 'Resposta em até 24h' },
              { icon: Phone, title: 'WhatsApp', value: '(11) 99999-9999', desc: 'Seg a Sex, 9h-18h' },
              { icon: MapPin, title: 'Endereço', value: 'São Paulo, SP', desc: 'Brasil' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-xl font-black text-gray-900 mb-4">Envie sua mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">Nome *</label>
                  <input required className="w-full px-4 py-3 border rounded-xl outline-none focus:border-sky-500 text-sm" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">E-mail *</label>
                  <input required type="email" className="w-full px-4 py-3 border rounded-xl outline-none focus:border-sky-500 text-sm" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Assunto</label>
                <select className="w-full px-4 py-3 border rounded-xl outline-none focus:border-sky-500 text-sm bg-white">
                  <option>Dúvida sobre produto</option>
                  <option>Sugestão</option>
                  <option>Parceria</option>
                  <option>Reportar erro</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Mensagem *</label>
                <textarea required rows={5} className="w-full px-4 py-3 border rounded-xl outline-none focus:border-sky-500 resize-none text-sm" placeholder="Escreva sua mensagem..." />
              </div>
              <button type="submit" className={`h-12 px-8 font-bold rounded-xl transition-all flex items-center gap-2 text-white ${sent ? 'bg-green-500' : 'bg-sky-500 hover:bg-sky-600'}`}>
                {sent ? '✓ Mensagem enviada!' : (<>Enviar mensagem <Send className="w-4 h-4" /></>)}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
