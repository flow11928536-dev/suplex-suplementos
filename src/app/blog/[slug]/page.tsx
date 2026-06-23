import { blogPosts } from '@/lib/blog-data'
import BlogPostPageClient from './BlogPostPageClient'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient slug={params.slug} />
}