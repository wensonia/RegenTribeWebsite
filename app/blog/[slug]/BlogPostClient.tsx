'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import { posts } from '../posts'
import OptimizedImage from '@/components/OptimizedImage'

/* ── Layout constants ── */
const W = '800px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

/* ── Simple markdown renderer ── */
function renderContent(md: string) {
  const lines = md.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim()) continue

    if (line.startsWith('# ')) {
      elements.push(<h1 key={key++} style={{ fontFamily: 'var(--font-lora), serif', fontSize: '28px', fontWeight: 400, color: 'var(--text)', margin: '48px 0 16px', lineHeight: 1.3 }}>{line.slice(2)}</h1>)
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} style={{ fontFamily: 'var(--font-lora), serif', fontSize: '22px', fontWeight: 400, color: 'var(--text)', margin: '40px 0 12px', lineHeight: 1.3 }}>{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', margin: '32px 0 8px', lineHeight: 1.4 }}>{line.slice(4)}</h3>)
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={key++} style={{
          borderLeft: '3px solid var(--green)', padding: '12px 20px', margin: '24px 0',
          backgroundColor: '#f5f5f5', borderRadius: '0 8px 8px 0', fontSize: '15px', color: 'var(--text)', lineHeight: 1.7,
        }}>
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(2)) }} />
        </blockquote>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text)', marginBottom: '6px', marginLeft: '20px' }}>
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(2)) }} />
        </li>
      )
    } else if (line.startsWith('---')) {
      elements.push(<hr key={key++} style={{ border: 'none', borderTop: '1px dashed var(--border-dashed)', margin: '40px 0' }} />)
    } else {
      elements.push(
        <p key={key++} style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text)', marginBottom: '16px' }}>
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
        </p>
      )
    }
  }
  return elements
}

function inlineFormat(text: string): string {
  let result = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--green-deep); text-decoration: underline;">$1</a>')
  return result
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div style={{ ...wrap, paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '32px', color: 'var(--text)' }}>Post not found</h1>
        <Link href="/blog" style={{ color: 'var(--green-deep)', marginTop: '20px', display: 'inline-block' }}>Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      {/* Cover image */}
      <div style={{ width: '100%', height: 'clamp(200px, 40vw, 400px)', overflow: 'hidden', position: 'relative' }}>
        <OptimizedImage
          src={post.coverImage}
          alt={post.title}
          sizes="100vw"
          loading="eager"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          onError={(e) => {
            const el = e.target as HTMLImageElement
            el.style.display = 'none'
            el.parentElement!.style.background = 'linear-gradient(135deg, #6fc6a222, #808aeb33)'
          }}
        />
      </div>

      <article style={{ paddingTop: '56px', paddingBottom: '96px' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Back link */}
            <motion.div variants={fadeUp} style={{ marginBottom: '40px' }}>
              <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
                <Link href="/blog" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none',
                }}>
                  <ArrowLeft size={14} strokeWidth={1.5} /> Back to Blog
                </Link>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), serif', fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', marginBottom: '24px',
            }}>
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-muted)' }}>
                <Calendar size={14} strokeWidth={1.5} /> {post.date}
              </span>
              {post.locations.length > 0 && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <MapPin size={14} strokeWidth={1.5} /> {post.locations.join(', ')}
                </span>
              )}
            </motion.div>

            {/* Location tags */}
            {post.locations.length > 0 && (
              <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                {post.locations.map(loc => (
                  <span key={loc} style={{
                    fontSize: '12px', fontWeight: 500, padding: '5px 14px',
                    borderRadius: '9999px', backgroundColor: '#e8f7f1', color: '#1a5e3a',
                  }}>
                    {loc}
                  </span>
                ))}
              </motion.div>
            )}

            {/* TLDR */}
            {post.tldr && (
              <motion.div variants={fadeUp} style={{
                padding: '20px 24px', borderRadius: '12px', backgroundColor: '#f5f5f5',
                borderLeft: '3px solid var(--green)', marginBottom: '48px',
              }}>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>TLDR</p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text)' }}>{post.tldr}</p>
              </motion.div>
            )}

            {/* Content */}
            <motion.div variants={fadeUp}>
              {renderContent(post.content)}
            </motion.div>

            {/* Photo Gallery */}
            {post.images && post.images.length > 0 && (
              <motion.div variants={fadeUp} style={{ marginTop: '48px' }}>
                <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '22px', fontWeight: 400, color: 'var(--text)', marginBottom: '24px' }}>Photos</h2>
                <div className="blog-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                  {post.images.map((img, i) => (
                    <div key={i} style={{ borderRadius: '8px', overflow: 'hidden' }}>
                      <OptimizedImage src={img.src} alt={img.alt}
                        sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 280px"
                        loading="lazy"
                        style={{ width: '100%', height: 'clamp(160px, 20vw, 240px)', objectFit: 'cover' }} />
                      {img.alt && <p style={{ fontSize: '12px', color: 'var(--text-muted)', padding: '8px 4px' }}>{img.alt}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </article>

      <style>{`
        @media (max-width: 540px) {
          .blog-gallery { grid-template-columns: 1fr !important; }
          .blog-gallery img { height: clamp(140px, 30vw, 200px) !important; }
        }
      `}</style>
    </>
  )
}
