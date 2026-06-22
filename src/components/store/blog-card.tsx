'use client'

import { Calendar, Clock, ChevronRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-data'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="aspect-[16/9] overflow-hidden bg-gray-50">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-5">
        <span className="inline-block bg-sky-50 text-sky-600 text-[10px] font-bold px-2 py-1 rounded-full mb-2">{post.category}</span>
        <h3 className="font-bold text-base text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-sky-500 transition-colors">{post.title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime} min</span>
        </div>
      </div>
    </a>
  )
}
