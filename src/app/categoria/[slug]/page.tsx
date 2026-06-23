import { categories } from '@/lib/store-data'
import CategoryPageClient from './CategoryPageClient'

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return <CategoryPageClient slug={params.slug} />
}