import { posts } from '../posts'
import BlogPostClient from './BlogPostClient'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <BlogPostClient slug={slug} />
}
