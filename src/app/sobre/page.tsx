'use client'

import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { Award, Users, Truck, Heart, Target, Eye, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-sky-500">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">Sobre Nós</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-blue-800 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Sobre a Suplex Suplementos</h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Somos o site de referência em análise e comparativa de suplementos no Brasil. Nossa missão é ajudar você a fazer a melhor escolha, com reviews honestas e os melhores preços.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Nossa História</h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>Fundada em 2018, a Suplex Suplementos nasceu da necessidade de um site que realmente ajudasse as pessoas a escolherem o suplemento certo. Com tantas marcas, tipos e preços diferentes, decidir o que comprar pode ser confuso.</p>
            <p>Nossa equipe de especialistas analisa cada product, compara preços em diversas lojas e cria guias completos para que você tome a melhor decisão. Trabalhamos com links de afiliados para as lojas mais confiáveis do mercado, como o Mercado Livre.</p>
            <p>Já ajudamos mais de 500 mil pessoas a encontrar o suplemento ideal pelo melhor preço. E estamos apenas começando!</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-sky-500" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Nossa Missão</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Simplificar a escolha de suplementos, oferecendo informações claras, reviews honestas e os melhores preços do mercado.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-sky-500" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Nossa Visão</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ser o site de referência número um em suplementos no Brasil, conhecido pela qualidade das informações e transparência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '500K+', label: 'Visitantes mensais' },
              { icon: Truck, value: '200+', label: 'Produtos analisados' },
              { icon: Award, value: '8+', label: 'Anos de experiência' },
              { icon: Heart, value: '98%', label: 'Satisfação' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-7 h-7 text-sky-400" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-black">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 text-center">Nossos Valores</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Transparência', desc: 'Reviews honestas, sem viés. Dizemos o que pensamos.' },
              { title: 'Qualidade', desc: 'Conteúdo rico e detalhado em cada análise.' },
              { title: 'Confiança', desc: 'Links verificados para lojas confiáveis.' },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl mx-auto mb-4" />
                <h3 className="font-black text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}