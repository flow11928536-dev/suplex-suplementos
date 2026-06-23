'use client'

import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductCarousel } from '@/components/store/product-carousel'
import { BlogCard } from '@/components/store/blog-card'
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import { products } from '@/lib/store-data'
import { Calendar, Clock, ChevronRight, User } from 'lucide-react'

export default function BlogPostPageClient({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug) || blogPosts[0]
  const relatedPosts = getRelatedPosts(post, 3)
  const relatedProducts = products.filter(p => p.category === 'whey-protein').slice(0, 5)

  return (
    <>
      <Header />
      <article className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <a href="/" className="hover:text-sky-500">Início</a>
            <ChevronRight className="w-3 h-3" />
            <a href="/blog" className="hover:text-sky-500">Blog</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </nav>
        </div>
        <div className="container mx-auto px-4 mb-8">
          <span className="inline-block bg-sky-50 text-sky-600 text-xs font-bold px-3 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readingTime} min de leitura</span>
          </div>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-50">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">{post.excerpt}</p>
            {post.content.map((section, idx) => {
              if (section.type === 'heading') return <h2 key={idx} className="text-xl sm:text-2xl font-black text-gray-900 mt-8 mb-3">{section.content}</h2>
              if (section.type === 'paragraph') return <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{section.content}</p>
              if (section.type === 'list') return (
                <ul key={idx} className="list-disc pl-6 mb-4 space-y-1">
                  {section.items?.map((item, i) => <li key={i} className="text-gray-700 text-sm sm:text-base">{item}</li>)}
                </ul>
              )
              if (section.type === 'quote') return (
                <blockquote key={idx} className="border-l-4 border-sky-500 bg-sky-50 p-4 rounded-r-xl my-4">
                  <p className="text-gray-800 italic text-sm sm:text-base">{section.content}</p>
                </blockquote>
              )
              if (section.type === 'tip') return (
                <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 my-4">
                  <p className="text-yellow-900 text-sm sm:text-base font-medium">💡 {section.content}</p>
                </div>
              )
              return null
            })}
          </div>
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-gray-500 mb-2">Palavras-chave:</p>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{kw}</span>
              ))}
            </div>
          </div>
        </div>
        {relatedProducts.length > 0 && (
          <ProductCarousel title="Produtos Recomendados" products={relatedProducts} />
        )}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Artigos Relacionados</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(p => <BlogCard key={p.id} post={p} />)}
              </div>
            </div>
          </section>
        )}
      </article>
      <Footer />
    </>
  )
}