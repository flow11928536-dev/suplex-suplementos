'use client'

import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { FAQAccordion } from '@/components/store/faq-accordion'
import { ChevronRight } from 'lucide-react'

export default function FAQPage() {

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">FAQ</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">Perguntas Frequentes</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Tire suas dúvidas sobre suplementos, whey protein, creatina e muito mais.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-2">Ainda tem dúvidas?</h2>
          <p className="text-sm text-gray-600 mb-4">Entre em contato com nossa equipe</p>
          <a href="/contato" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
            Fale Conosco
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
