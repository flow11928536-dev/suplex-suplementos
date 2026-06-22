'use client'

import { X, ChevronRight } from 'lucide-react'
import { categories } from '@/lib/store-data'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[101] shadow-2xl transition-transform duration-300 flex flex-col lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
          <span className="font-black text-lg">SUPLEX</span>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <a href="/" className="flex items-center justify-between px-4 py-3 hover:bg-sky-50 border-b">
            <span className="text-sm font-bold">Início</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>

          <div className="px-4 py-3">
            <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Categorias</p>
          </div>

          {categories.map(cat => (
            <a key={cat.id} href={`/categoria/${cat.slug}`} className="flex items-center justify-between px-4 py-3 hover:bg-sky-50 transition-colors border-b">
              <div className="flex items-center gap-3">
                <img src={cat.image} alt={cat.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm text-gray-700">{cat.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          ))}

          <div className="px-4 py-3 mt-2">
            <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Conteúdo</p>
          </div>

          {[
            { name: 'Blog', href: '/blog' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Sobre Nós', href: '/sobre' },
            { name: 'Contato', href: '/contato' },
          ].map(link => (
            <a key={link.href} href={link.href} className="flex items-center justify-between px-4 py-3 hover:bg-sky-50 transition-colors border-b">
              <span className="text-sm text-gray-700">{link.name}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
