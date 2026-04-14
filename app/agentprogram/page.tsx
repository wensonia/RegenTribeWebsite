'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

/* ── Layout constants ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const vp = { once: true, margin: '-80px' as const }

/* ── Sub-components ── */
function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase',
      color: light ? 'rgba(237,237,237,0.45)' : 'rgba(54,54,54,0.45)', marginBottom: '28px',
    }}>
      {children}
    </p>
  )
}

function PillBtn({ href, children, bg, textColor, external }: {
  href: string; children: React.ReactNode; bg?: string; textColor?: string; external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
    color: textColor ?? 'white', backgroundColor: bg ?? 'var(--text)',
    borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none', cursor: 'pointer', fontFamily: 'inherit',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={2} /></>
  if (external) return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
      {inner}
    </motion.a>
  )
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

function OutlinePill({ href, children, light, external }: {
  href: string; children: React.ReactNode; light?: boolean; external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
    color: light ? 'white' : 'var(--text)', backgroundColor: 'transparent',
    border: `1.5px solid ${light ? 'rgba(255,255,255,0.35)' : 'var(--text)'}`,
    borderRadius: '9999px', padding: '12px 32px', textDecoration: 'none', cursor: 'pointer', fontFamily: 'inherit',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={2} /></>
  if (external) return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
      {inner}
    </motion.a>
  )
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Data ── */
const galleryPhotos = [
  { src: '/images/collective/team-palapa-table.jpg', alt: 'Agent Program whiteboard with post-it notes' },
  { src: '/images/agency/whiteboard.png', alt: 'Writing the master plan on a whiteboard' },
  { src: '/images/blog/q3-2023-community-lab-moos-2.jpg', alt: 'Team working on laptops at Moos Space' },
  { src: '/images/blog/q1-2022-workshops-tulum-1.jpg', alt: 'Workshop group photo in Tulum' },
  { src: '/images/collective/team-whiteboard-agent-program.jpg', alt: 'Outdoor workshop session' },
  { src: '/images/blog/q1-2022-workshops-tulum-3.jpg', alt: 'Co-working session on laptops' },
  { src: '/images/blog/q3-2023-community-lab-moos-3.jpg', alt: 'Workshop with whiteboard at Moos Space' },
  { src: '/images/collective/team-indoor-group.jpg', alt: 'Working on a laptop in the jungle' },
  { src: '/images/blog/q2-2022-cowork-days-mexico.jpg', alt: 'Workshop group under a palapa' },
  { src: '/images/collective/collective-call-outdoor.jpg', alt: 'Team working session with laptops' },
  { src: '/images/blog/q3-2023-community-lab-moos-1.jpg', alt: 'Community Lab group at Moos Space' },
  { src: '/images/collective/sonia-laptop-jungle.jpg', alt: 'Working on the road with laptops' },
]

const steps = [
  {
    number: '01',
    title: 'Join the Agent Program Group',
    desc: 'This is where you can see all the updates & connect with other future Agents.',
    color: 'var(--green)',
  },
  {
    number: '02',
    title: 'Join the Agent Intro Course',
    desc: '10 sessions introducing you to community creation best practices.',
    color: 'var(--blue)',
  },
  {
    number: '03',
    title: 'Agent On-site Training',
    desc: 'Participate in a physical Regenerative Neighborhood activation. Limited spots available.',
    color: 'var(--pink)',
  },
  {
    number: '04',
    title: 'Junior Agent Phase',
    desc: 'Shadow & support a Regenerative Neighborhood consultation led by our team of Senior Agents.',
    color: 'var(--yellow-deep)',
  },
  {
    number: '05',
    title: 'Senior Agent Phase',
    desc: 'Consult Regenerative Neighborhoods autonomously with Regen Tribe tools and network.',
    color: 'var(--green)',
  },
]

const interests = [
  'Learning the Regenerative Neighborhood creation process',
  'Supporting vision holders on their journey',
  'Visiting community projects globally',
  'Starting a career in the regenerative space',
]

const whatYouGet = [
  {
    title: 'Community Alchemy Guide',
    desc: 'Community creation best practices based on our 10-step process.',
    icon: '📖',
  },
  {
    title: 'Regen Neighborhood Passport',
    desc: 'Certification proving your knowledge in specific areas of community creation & management.',
    icon: '🛂',
  },
  {
    title: 'Regen Alchemists Database',
    desc: 'Access to verified Regenerative Neighborhood service providers.',
    icon: '🗂️',
  },
  {
    title: 'Regen Tribe Network Support',
    desc: 'Support from Senior Agents & community hotline access to ask questions and share your story.',
    icon: '🌐',
  },
]

const agents = [
  { name: 'Laila Martins', status: 'Agent In-Practice', location: 'Germany', photo: '/images/agents/laila-martins.jpg', joined: 'Nov 2023' },
  { name: 'Vivo Zerbe', status: 'Agent In-Practice', location: 'Germany, Colombia', photo: '/images/agents/vivo-zerbe.jpg', joined: 'Jan 2024' },
  { name: 'Cem Elibol', status: 'Agent In-Practice', location: 'Turkey', photo: '/images/agents/cem-elibol.jpg', joined: 'Jan 2024' },
  { name: 'Andoni Alvarez', status: 'Agent In-Training', location: 'Mexico, UK', photo: '/images/agents/andoni-alvarez.jpg', joined: 'Jan 2024' },
  { name: 'Kelsey Faith', status: 'Agent In-Training', location: 'Colombia, USA', photo: '/images/agents/kelsey-faith.jpg', joined: 'Jan 2024' },
  { name: 'Michael', status: 'Agent In-Training', location: 'Canada', photo: '/images/agents/michael.jpg', joined: 'Jan 2024' },
  { name: 'Mauricio Latorre', status: 'Agent In-Training', location: 'Nicaragua', photo: '/images/agents/mauricio-latorre.jpg', joined: 'Aug 2024' },
  { name: 'Kelsia', status: 'Agent In-Training', location: 'Mexico', photo: '/images/agents/kelsia.jpg', joined: 'Oct 2024' },
  { name: 'Eric', status: 'Agent In-Training', location: 'Belgium', photo: '/images/agents/eric.jpg', joined: 'Nov 2024' },
]

const statusColor: Record<string, string> = {
  'Agent In-Practice': 'var(--green)',
  'Agent In-Training': 'var(--blue)',
  'Senior Agent': 'var(--pink)',
  'Junior Agent': 'var(--yellow-deep)',
}

const programs = [
  {
    date: '2022 Feb — Apr',
    title: 'Co.creating Regen Communities Workshop Series',
    detail: '10-week in-person & streamed workshops',
    link: { label: 'Watch on YouTube', href: 'https://youtube.com/playlist?list=PLfy4cQQeBzVYiTKek800sLnSKZZKRK9ie&si=FGkN6T82cYOn6W51' },
  },
  {
    date: '2023 May — Jun',
    title: 'Catalyzer Open Calls',
    detail: '10 weekly calls co-creating Community Alchemy Guide Intro',
    link: { label: 'View Recordings', href: 'https://drive.google.com/drive/folders/11-j_4x3h4jfwfMnb8GcazlDa4E7VjAOD' },
  },
  {
    date: '2024 Jan — Feb',
    title: 'Regen Tribe Agent Program Online Course',
    detail: 'First cohort of Regenerative Neighborhood Agents, 6-week online training',
    link: { label: 'Watch on YouTube', href: 'https://youtube.com/playlist?list=PLfy4cQQeBzVYJR9BviJiA19o5hMELa8-6&si=NCURvz4pVp9TS5F2' },
  },
  {
    date: '2024 Mar — May',
    title: 'Agent Program On-site Training at Community Lab X',
    detail: '10-week immersive training shadowing our Community Lab process',
    link: { label: 'View the Work', href: 'https://communitylabx.notion.site/Community-Lab-X-Wiki-87f8d94474e04ed99fa08401ab1df1d2?source=copy_link' },
  },
  {
    date: '2024 Jun 9 — 14',
    title: 'June Bloom at Wild Seeds',
    detail: 'In-person theory and practical application, 5-day immersive training',
    link: { label: 'Check Out WildSeeds', href: 'https://www.wildseedsranch.com/' },
  },
]

/* ── Page ── */
export default function AgentProgramPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    const { error } = await supabase.from('agent_program_signups').insert({
      email,
      name: name || null,
    })
    setStatus(error ? 'error' : 'sent')
  }

  return (
    <main>
      {/* ─── HERO ─── */}
      <section style={{ padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Agent Program</Label>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '400', lineHeight: '1.15',
              marginBottom: '20px',
            }}>
              Learn to Create Regenerative Neighborhoods
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: '18px', lineHeight: '1.6', color: 'var(--text-muted)',
              maxWidth: '640px', margin: '0 auto 40px',
            }}>
              Learn the process of building Regenerative Neighborhoods.
            </motion.p>

            {/* ── Signup form ── */}
            <motion.div variants={fadeUp} style={{
              maxWidth: '520px', margin: '0 auto 32px',
              borderRadius: '20px',
              padding: '32px 36px',
              backgroundColor: 'white',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
            }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', marginBottom: '6px' }}>🌱</p>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>
                    You&apos;re on the list!
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    We&apos;ll reach out when the next cohort opens.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignup}>
                  <p style={{
                    fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--green)', marginBottom: '6px',
                  }}>
                    Sign up for the next cohort
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Leave your details and we&apos;ll let you know when enrollment opens.
                  </p>
                  <div className="signup-fields" style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                    <input
                      type="text"
                      placeholder="your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{
                        flex: '1', padding: '13px 16px',
                        border: '1px solid var(--border)', borderRadius: '10px',
                        fontSize: '14px', fontFamily: 'inherit', outline: 'none',
                        boxSizing: 'border-box', backgroundColor: 'var(--bg)',
                      }}
                    />
                    <input
                      type="email"
                      placeholder="your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={{
                        flex: '1.4', padding: '13px 16px',
                        border: '1px solid var(--border)', borderRadius: '10px',
                        fontSize: '14px', fontFamily: 'inherit', outline: 'none',
                        boxSizing: 'border-box', backgroundColor: 'var(--bg)',
                      }}
                    />
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      aria-label="Sign up"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '48px', height: '48px', flexShrink: 0,
                        backgroundColor: 'var(--text)', color: 'white',
                        border: 'none', borderRadius: '12px',
                        cursor: 'pointer',
                        opacity: status === 'sending' ? 0.6 : 1,
                      }}
                    >
                      <ArrowRight size={18} strokeWidth={2} />
                    </motion.button>
                  </div>
                  {status === 'error' && (
                    <p style={{ fontSize: '13px', color: 'var(--pink)', marginTop: '4px', textAlign: 'center' }}>
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <OutlinePill href="#programs">
                View Past Programs
              </OutlinePill>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY ─── */}
      <section style={{ padding: '0 0 80px', overflow: 'hidden' }}>
        <div className="wrap" style={wrap}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={stagger}
            className="gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
            }}
          >
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '260px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── THIS IS FOR YOU ─── */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Is this for you?</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '12px',
              }}>This course is for you if you are interested in</h2>
            </motion.div>
            <div className="interests-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '36px' }}>
              {interests.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    border: '1px dashed var(--border-dashed)', borderRadius: '16px',
                    padding: '28px 32px',
                    display: 'flex', alignItems: 'center', gap: '16px',
                  }}
                >
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: [
                      'var(--green)', 'var(--blue)', 'var(--pink)', 'var(--yellow-deep)',
                    ][i],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '15px', fontWeight: '600', color: 'white', flexShrink: 0,
                  }}>
                    {['○', '△', '□', '◇'][i]}
                  </span>
                  <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'var(--text)' }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div style={{ ...wrap as object, borderTop: '1px dashed var(--border-dashed)', margin: '0 auto' } as React.CSSProperties} />

      {/* ─── JOURNEY / 5 STEPS ─── */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Your path</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '12px',
              }}>Journey to Become a Regenerative Neighborhood Agent</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', marginBottom: '48px' }}>
                Five steps from newcomer to autonomous Senior Agent.
              </p>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '700px' }}>
              {steps.map((step, i) => (
                <motion.div key={step.number} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                  {/* Timeline */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '48px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      backgroundColor: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '15px', fontWeight: '700', color: 'white', flexShrink: 0,
                    }}>
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: '2px', height: '100%', minHeight: '40px', backgroundColor: 'var(--border)' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ marginLeft: '20px', paddingBottom: i < steps.length - 1 ? '32px' : '0' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-lora), Georgia, serif',
                      fontSize: '20px', fontWeight: '500', marginBottom: '6px',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div style={{ ...wrap as object, borderTop: '1px dashed var(--border-dashed)', margin: '0 auto' } as React.CSSProperties} />

      {/* ─── WHAT YOU GET ─── */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>What you get</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '48px',
              }}>Tools & support for your journey</h2>
            </motion.div>
            <div className="get-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {whatYouGet.map(item => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  style={{
                    border: '1px dashed var(--border-dashed)', borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    fontSize: '18px', fontWeight: '500', marginBottom: '8px',
                  }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div style={{ ...wrap as object, borderTop: '1px dashed var(--border-dashed)', margin: '0 auto' } as React.CSSProperties} />

      {/* ─── PAST PROGRAMS ─── */}
      <section id="programs" style={{ padding: '80px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Our Programs</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '48px',
              }}>Program timeline</h2>
            </motion.div>
            <div className="programs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {programs.map((prog, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '28px',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: '180px',
                  }}
                >
                  <div>
                    <p style={{
                      fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--green)', marginBottom: '12px',
                    }}>{prog.date}</p>
                    <h3 style={{
                      fontFamily: 'var(--font-lora), Georgia, serif',
                      fontSize: '18px', fontWeight: '500', marginBottom: '6px', lineHeight: '1.3',
                    }}>{prog.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{prog.detail}</p>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    {prog.link ? (
                      <motion.a
                        href={prog.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          fontSize: '13px', fontWeight: '600', color: 'var(--text)',
                          textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase',
                        }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        {prog.link.label} <ArrowRight size={14} strokeWidth={2} />
                      </motion.a>
                    ) : (
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Recordings coming soon
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* ── 6th card: next cohort signup ── */}
              <motion.div
                variants={fadeUp}
                style={{
                  backgroundColor: 'var(--text)',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  minHeight: '180px',
                }}
              >
                <div>
                  <p style={{
                    fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--green)', marginBottom: '12px',
                  }}>Coming soon</p>
                  <h3 style={{
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    fontSize: '18px', fontWeight: '500', marginBottom: '6px', lineHeight: '1.3',
                    color: 'white',
                  }}>Next Agent Program Cohort</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                    Sign up to be notified when the next cohort opens.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  {status === 'sent' ? (
                    <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--green)' }}>
                      You&apos;re on the list!
                    </p>
                  ) : (
                    <form onSubmit={handleSignup} style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{
                          flex: '1', padding: '10px 12px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px',
                          color: 'white', fontSize: '13px', fontFamily: 'inherit', outline: 'none',
                          boxSizing: 'border-box', minWidth: 0,
                        }}
                      />
                      <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{
                          flex: '1.3', padding: '10px 12px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px',
                          color: 'white', fontSize: '13px', fontFamily: 'inherit', outline: 'none',
                          boxSizing: 'border-box', minWidth: 0,
                        }}
                      />
                      <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        aria-label="Sign up"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: '40px', height: '40px', flexShrink: 0,
                          backgroundColor: 'var(--green)', color: 'var(--text)',
                          border: 'none', borderRadius: '10px',
                          cursor: 'pointer',
                          opacity: status === 'sending' ? 0.6 : 1,
                        }}
                      >
                        <ArrowRight size={16} strokeWidth={2} />
                      </motion.button>
                    </form>
                  )}
                  {status === 'error' && (
                    <p style={{ fontSize: '12px', color: 'var(--pink)', marginTop: '6px' }}>
                      Something went wrong — try again.
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div style={{ ...wrap as object, borderTop: '1px dashed var(--border-dashed)', margin: '0 auto' } as React.CSSProperties} />

      {/* ─── AGENTS SECTION ─── */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Meet the agents</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '12px',
              }}>Regenerative Neighborhood Agents</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', marginBottom: '48px' }}>
                Get to know the agents, their training, and the experience they have in supporting the development of Regenerative Neighborhoods.
              </p>
            </motion.div>
            <div className="agents-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {agents.map(agent => (
                <motion.div
                  key={agent.name}
                  variants={fadeUp}
                  style={{
                    border: '1px dashed var(--border-dashed)', borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#ddd' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-lora), Georgia, serif',
                      fontSize: '18px', fontWeight: '500', marginBottom: '8px',
                    }}>{agent.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        backgroundColor: statusColor[agent.status] || 'var(--text-muted)',
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>
                        {agent.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      {agent.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FOOTER ─── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="wrap" style={wrap}>
          <motion.div
            className="agent-cta-card"
            initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            style={{
              backgroundColor: 'var(--text)', borderRadius: '24px', padding: '64px 48px',
              textAlign: 'center',
            }}
          >
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', color: 'white', marginBottom: '16px',
            }}>Ready to become an Agent?</motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', maxWidth: '520px', margin: '0 auto 36px' }}>
              Sign up to join the next cohort of the Agent Program and start your journey toward becoming a Regenerative Neighborhood Agent.
            </motion.p>
            <motion.div variants={fadeUp} style={{ maxWidth: '440px', margin: '0 auto' }}>
              {status === 'sent' ? (
                <p style={{ fontSize: '16px', fontWeight: '600', color: 'var(--green)' }}>
                  You&apos;re on the list! We&apos;ll reach out when the next cohort opens.
                </p>
              ) : (
                <form onSubmit={handleSignup}>
                  <div className="cta-signup-fields" style={{ display: 'flex', gap: '10px', marginBottom: '16px', justifyContent: 'center' }}>
                    <input
                      type="text"
                      placeholder="your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{
                        flex: '1', maxWidth: '170px', padding: '12px 16px',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px',
                        color: 'white', fontSize: '14px', fontFamily: 'inherit', outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                    <input
                      type="email"
                      placeholder="your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={{
                        flex: '1', maxWidth: '220px', padding: '12px 16px',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px',
                        color: 'white', fontSize: '14px', fontFamily: 'inherit', outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '14px 32px',
                      backgroundColor: 'white', color: 'var(--text)',
                      border: 'none', borderRadius: '9999px',
                      fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
                      cursor: 'pointer', fontFamily: 'inherit',
                      opacity: status === 'sending' ? 0.6 : 1,
                    }}
                  >
                    {status === 'sending' ? 'Signing up...' : 'Sign Up'}
                    {status !== 'sending' && <ArrowRight size={14} strokeWidth={2} />}
                  </motion.button>
                  {status === 'error' && (
                    <p style={{ fontSize: '13px', color: 'var(--pink)', marginTop: '10px' }}>
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .get-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .interests-grid { grid-template-columns: 1fr !important; }
          .agent-cta-card { padding: 48px 32px !important; }
          .programs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .agents-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .gallery-grid > div:nth-child(n+10) { display: none !important; }
        }
        @media (max-width: 540px) {
          .get-grid { grid-template-columns: 1fr !important; }
          .agent-cta-card { padding: 32px 20px !important; }
          .signup-fields { flex-direction: column !important; }
          .signup-fields input { max-width: 100% !important; }
          .cta-signup-fields { flex-direction: column !important; }
          .cta-signup-fields input { max-width: 100% !important; }
          .agents-grid { grid-template-columns: 1fr !important; }
          .programs-grid { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid > div:nth-child(n+5) { display: none; }
        }
      `}</style>
    </main>
  )
}
