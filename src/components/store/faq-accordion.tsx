'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems, faqCategories } from '@/lib/faq-data'

export function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered = activeCategory === 'Todos'
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory)

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setActiveCategory('Todos')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            activeCategory === 'Todos' ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        {faqCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === cat ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filtered.map(item => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-sm text-gray-900 pr-4">{item.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openId === item.id ? 'rotate-180' : ''}`} />
            </button>
            {openId === item.id && (
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
