'use client'

import { TrendingUp, Award, Users, Clock } from 'lucide-react'

const icons: Record<string, React.ElementType> = {
  users: Users,
  trending: TrendingUp,
  award: Award,
  clock: Clock,
}

const stats = [
  { icon: "users", value: "500K+", label: "Visitantes mensais" },
  { icon: "trending", value: "200+", label: "Produtos analisados" },
  { icon: "award", value: "8+", label: "Anos de experiência" },
  { icon: "clock", value: "24h", label: "Atualizações diárias" },
]

export function BrandSpotlight() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3">
            Por que confiar na <span className="text-sky-400">SUPLEX</span>?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Somos referência em análise de suplementos no Brasil. Comparamos preços, analisamos produtos e ajudamos você a fazer a melhor escolha.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = icons[stat.icon]
            return (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-7 h-7 text-sky-400" />
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
