import { categories } from '@/lib/store-data'
import CategoryPageClient from './CategoryPageClient'

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default function Page({
  params,
}: {
  params: { slug: string }
}) {
  return <CategoryPageClient slug={params.slug} />
}