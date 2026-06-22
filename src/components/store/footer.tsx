'use client'

import { Mail, Clock, ShieldCheck, CreditCard, Smartphone } from 'lucide-react'
import { categories, siteConfig } from '@/lib/store-data'

const footerSections = [
  {
    title: 'Institucional',
    links: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Categorias',
    links: categories.slice(0, 6).map(c => ({ name: c.name, href: `/categoria/${c.slug}` })),
  },
  {
    title: 'Blog',
    links: [
      { name: 'Guia de Whey Protein', href: '/blog/whey-protein-guia-completo' },
      { name: 'Creatina Funciona?', href: '/blog/creatina-funciona' },
      { name: 'Pré-Treino', href: '/blog/pre-treino-como-escolher' },
      { name: 'Ganho de Massa', href: '/blog/como-ganhar-massa-muscular' },
      { name: 'Emagrecimento', href: '/blog/suplementos-para-emagrecimento' },
      { name: 'Colágeno', href: '/blog/colageno-hidrolisado-beneficios' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { name: 'Central de Ajuda', href: '/faq' },
      { name: 'Como Comprar', href: '/faq' },
      { name: 'Sobre Afiliados', href: '/faq' },
      { name: 'Contato', href: '/contato' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none">SUPLEX</p>
                <p className="text-xs text-sky-400">SUPLEMENTOS</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Link sections */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name + link.href}>
                    <a href={link.href} className="text-xs hover:text-sky-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-xs">{siteConfig.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-xs">Seg-Sex 9h-18h</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-800">
          <span className="text-xs font-bold text-gray-500">Parceiro oficial:</span>
          <span className="text-sm font-bold text-white">Mercado Livre</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span className="text-xs">Site Seguro SSL</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-sky-400" />
            <span className="text-xs">Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-teal-400" />
            <span className="text-xs">Links Verificados</span>
          </div>
        </div>
      </div>

      {/* Copyright + affiliate disclosure */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-gray-500 mb-2">
            © 2026 Suplex Suplementos - Todos os direitos reservados.
          </p>
          <p className="text-center text-[10px] text-gray-600">
            Aviso de Afiliados: Este site contém links de afiliados. Podemos receber uma comissão por compras realizadas através dos nossos links, sem custo adicional para você.
          </p>
        </div>
      </div>
    </footer>
  )
}