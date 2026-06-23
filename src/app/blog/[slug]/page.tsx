import { Header } from '@/components/store/header'
import { Footer } from '@/components/store/footer'
import { ProductCarousel } from '@/components/store/product-carousel'
import { BlogCard } from '@/components/store/blog-card'
import {
  getBlogPostBySlug,
  getRelatedPosts,
  blogPosts,
} from '@/lib/blog-data'
import { products } from '@/lib/store-data'
import { Calendar, Clock, ChevronRight, User } from 'lucide-react'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = getBlogPostBySlug(slug) || blogPosts[0]
  const relatedPosts = getRelatedPosts(post, 3)
  const relatedProducts = products
    .filter((p) => p.category === 'whey-protein')
    .slice(0, 5)

  return (
    <>
      {/* TODO: manter todo o JSX que você já possui */}
    </>
  )
}