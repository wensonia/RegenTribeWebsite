'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react'
import { useState } from 'react'
import { posts } from './posts'

/* ── Layout constants ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const vp = { once: true, margin: '-60px' as const }

/* ── Label ── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'var(--text-muted)', marginBottom: '28px',
    }}>{children}</p>
  )
}

/* ── Recent Substack posts ── */
const recentSubstackPosts = [
  {
    title: 'Enter the world of startup societies',
    date: 'Jan 21, 2024',
    href: 'https://regentribe.substack.com/p/enter-the-world-of-startup-societies',
  },
  {
    title: 'Regen Tribe Agent Training Program',
    date: 'Dec 29, 2023',
    href: 'https://regentribe.substack.com/p/regen-tribe-agent-training-program',
  },
  {
    title: 'Building Tomorrow: How the Tribes Platform is Accelerating Regenerative Communities',
    date: 'Nov 27, 2023',
    href: 'https://regentribe.substack.com/p/building-tomorrow-how-the-tribes',
  },
]

/* ── Year filter colors ── */
const yearColors: Record<string, string> = {
  '2024': 'var(--green)',
  '2023': 'var(--pink)',
  '2022': 'var(--blue)',
  '2021': 'var(--yellow-deep)',
}

export default function BlogPage() {
  const [activeYear, setActiveYear] = useState<string | null>(null)

  const filteredPosts = activeYear ? posts.filter(p => p.year === activeYear) : posts
  const years = [...new Set(posts.map(p => p.year))].sort((a, b) => Number(b) - Number(a))

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', borderBottom: '1px dashed var(--border-dashed)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Blog &amp; Updates</Label>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), serif', fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', maxWidth: '720px', marginBottom: '24px',
            }}>
              Regen Tribe Chronicles
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: '18px', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '560px',
            }}>
              Documenting the journey of regenerative neighborhood development around the world — stories, updates, and insights from the Regen Tribe collective.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── QUARTERLY UPDATES GRID ── */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
        style={{ paddingTop: '120px', paddingBottom: '120px', borderBottom: '1px dashed var(--border-dashed)' }}
      >
        <div style={wrap}>
          <motion.div variants={fadeUp}>
            <Label>Quarterly Updates</Label>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-lora), serif', fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', marginBottom: '32px',
          }}>
            What we&apos;ve been up to
          </motion.h2>

          {/* Year filter pills */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
            <button
              onClick={() => setActiveYear(null)}
              style={{
                fontSize: '13px', fontWeight: activeYear === null ? 600 : 400, padding: '8px 20px',
                borderRadius: '9999px', border: '1.5px solid var(--border)',
                backgroundColor: activeYear === null ? 'var(--text)' : 'transparent',
                color: activeYear === null ? 'white' : 'var(--text)',
                cursor: 'pointer',
              }}
            >
              All
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(activeYear === year ? null : year)}
                style={{
                  fontSize: '13px', fontWeight: activeYear === year ? 600 : 400, padding: '8px 20px',
                  borderRadius: '9999px', border: `1.5px solid ${activeYear === year ? yearColors[year] || 'var(--border)' : 'var(--border)'}`,
                  backgroundColor: activeYear === year ? yearColors[year] || 'var(--text)' : 'transparent',
                  color: activeYear === year ? 'white' : 'var(--text)',
                  cursor: 'pointer',
                }}
              >
                {year}
              </button>
            ))}
          </motion.div>

          {/* Post cards grid */}
          <motion.div variants={stagger} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '28px',
          }}>
            {filteredPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      borderRadius: '12px', overflow: 'hidden',
                      border: '1px solid var(--border)',
                      backgroundColor: 'white', cursor: 'pointer',
                      height: '100%', display: 'flex', flexDirection: 'column',
                    }}
                  >
                    {/* Cover image */}
                    <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#e0e0e0', position: 'relative' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          const el = e.target as HTMLImageElement
                          el.style.display = 'none'
                          el.parentElement!.style.background = `linear-gradient(135deg, ${yearColors[post.year] || '#808aeb'}22, ${yearColors[post.year] || '#808aeb'}44)`
                        }}
                      />
                      {/* Year badge */}
                      <span style={{
                        position: 'absolute', top: '12px', right: '12px',
                        fontSize: '11px', fontWeight: 600, padding: '4px 12px',
                        borderRadius: '9999px', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white',
                      }}>
                        {post.year}
                      </span>
                    </div>

                    {/* Card content */}
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: '17px', fontWeight: 500, color: 'var(--text)',
                        lineHeight: 1.35, marginBottom: '10px',
                      }}>
                        {post.title}
                      </p>
                      <p style={{
                        fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6,
                        marginBottom: '16px', flex: 1,
                      }}>
                        {post.tldr}
                      </p>
                      {post.locations.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                          <MapPin size={12} strokeWidth={1.5} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                            {post.locations.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── SUBSTACK SECTION ── */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
        style={{ paddingTop: '120px', paddingBottom: '120px', borderBottom: '1px dashed var(--border-dashed)' }}
      >
        <div style={wrap}>
          <motion.div variants={fadeUp}>
            <Label>From the Substack</Label>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-lora), serif', fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', marginBottom: '16px',
          }}>
            Regen Tribe Chronicles
          </motion.h2>
          <motion.p variants={fadeUp} style={{
            fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', maxWidth: '520px', marginBottom: '48px',
          }}>
            Long-form writing on regenerative communities, startup societies, and the tools shaping the movement. Subscribe on Substack for deep dives.
          </motion.p>

          {/* Substack embed */}
          <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
            <iframe
              src="https://regentribe.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'white' }}
              frameBorder="0"
              scrolling="no"
            />
          </motion.div>

          {/* Recent posts list */}
          <motion.div variants={stagger}>
            <p style={{
              fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '20px',
            }}>
              Recent Posts
            </p>
            {recentSubstackPosts.map((post) => (
              <motion.a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 0', borderBottom: '1px solid var(--border)',
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '17px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.4, marginBottom: '4px' }}>
                    {post.title}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{post.date}</p>
                </div>
                <ExternalLink size={16} strokeWidth={1.5} style={{ color: 'var(--text-muted)', flexShrink: 0, marginLeft: '16px' }} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: '36px' }}>
            <motion.a
              href="https://regentribe.substack.com"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ x: 5 }} transition={{ duration: 0.15 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '17px', fontWeight: 400, color: 'var(--text)',
                textDecoration: 'none', letterSpacing: '0.01em',
              }}
            >
              View all posts on Substack <ArrowRight size={14} strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>


      <style>{`
        input::placeholder { color: var(--text-muted); opacity: 0.6; }
        input:focus { border-color: var(--green) !important; }
        @media (max-width: 640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </>
  )
}
