'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'

/* ── Layout constants ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }
const sec: React.CSSProperties = { padding: '120px 0' }

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const vp = { once: true, margin: '-80px' as const }

/* ── Style helpers ── */
const kickerStyle = (color: string, opacity = 1): React.CSSProperties => ({
  fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
  color, opacity, marginBottom: '16px',
})
const h2: React.CSSProperties = {
  fontFamily: 'Lora, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400,
  margin: 0, lineHeight: 1.1, letterSpacing: '-0.01em',
}
const bodyP: React.CSSProperties = {
  fontSize: '17px', lineHeight: 1.7, margin: 0, opacity: 0.82, maxWidth: '720px',
}

/* ── Pill button ── */
function PillBtn({ href, children, bg, light, outline, external }: {
  href: string; children: React.ReactNode; bg?: string; light?: boolean; outline?: boolean; external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
    color: light ? 'var(--text)' : 'white',
    backgroundColor: bg || 'var(--text)',
    borderRadius: '9999px', padding: outline ? '12.5px 30.5px' : '14px 32px',
    textDecoration: 'none',
    border: outline ? '1.5px solid var(--text)' : 'none',
    cursor: 'pointer', fontFamily: 'inherit',
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

/* ── Card base ── */
const card: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '16px',
  border: '1px solid var(--border)',
  padding: '32px',
}

/* ── Data ── */

const phases = [
  { num: '01', title: 'Incubator',              desc: 'One building, 10–20 founding members. Co.living + co.working + lounge/cafe and a maker space.' },
  { num: '02', title: 'Co-housing & retreats',  desc: 'Footprint expands into a multi-building cluster. Retreats, residencies, and memberships launch. Hospitality revenue starts funding operations.' },
  { num: '03', title: 'Long-term community',    desc: 'Permanent resident lots alongside communal infrastructure. Color/flower niches anchor talent density, with a central blend area. Governance and internal economy mature into stable, community-run systems.' },
  { num: '04', title: 'Network',                desc: 'Sister neighborhoods across bioregions. Shared infrastructure, members, and economy. The blueprint replicates where conditions and partners align.' },
]

const niches = [
  { color: '#363636', name: 'Black',  niche: 'Micro-Community',                  desc: 'Central coordination ensuring integration and collective wellbeing across all niches.', dark: true },
  { color: '#8c6a4a', name: 'Brown',  niche: 'Food & Gastronomy',                desc: 'Connection to food systems through permaculture, kitchens, and culinary education.', dark: true },
  { color: '#e76b5e', name: 'Red',    niche: 'Creation & Creative Forces',       desc: 'Imagination workshops exploring regenerative futures and generative possibilities.', dark: true },
  { color: '#ee9c5b', name: 'Orange', niche: 'Imagination & Makers Spaces',      desc: 'Hands-on artistic creation – wood, metal, textiles, performing arts.' },
  { color: '#ffe682', name: 'Yellow', niche: 'Fitness & Movement',               desc: 'Physical vitality through movement practices, gyms, and natural movement areas.' },
  { color: '#6fc6a2', name: 'Green',  niche: 'Longevity & Wellness',             desc: 'Proactive health through spas, clinics, and integrated wellness practices.' },
  { color: '#808aeb', name: 'Blue',   niche: 'Entrepreneurship & Innovation',    desc: 'New ideas and businesses through coworking and incubation.', dark: true },
  { color: '#5c67d6', name: 'Indigo', niche: 'Broadcast: Content & Media',       desc: 'Storytelling through photo, video, podcast, and music production.', dark: true },
  { color: '#a87bd0', name: 'Violet', niche: 'Cosmic, Spiritual, Energetic',     desc: 'Exploration of existence, transcendence, and philosophical inquiry.', dark: true },
  { color: '#f16ab0', name: 'Pink',   niche: 'Education & Growth',               desc: 'Mental and emotional development through schools and vocational training.', dark: true },
  { color: '#f8f8f5', name: 'White',  niche: 'Water Temple',                     desc: 'Sensory integration through water in all forms (ice, steam, liquid, E.Z.).', border: true },
  { color: '#c0c4c8', name: 'Silver', niche: 'Technology',                       desc: 'Deep tech infrastructure – robotics, AI, IoT, DAO governance.' },
  { color: '#d4a64a', name: 'Gold',   niche: 'Cultural Heritage',                desc: 'Preservation and celebration of local history and wisdom.' },
  { color: '#b8895c', name: 'Wood',   niche: 'Natural Building & Craftsmanship', desc: 'Timber work, natural building, treehouse hospitality, traditional joinery.', dark: true },
]

const pillars = [
  { name: 'Ecology',       color: 'var(--green)',  desc: 'Climate, biodiversity, ecosystem restoration, land stewardship.' },
  { name: 'Hardware',      color: 'var(--blue)',   desc: 'Architecture and resilient systems for water, food, energy, waste, air.' },
  { name: 'Human Systems', color: 'var(--pink)',   desc: 'Governance, operations, education, events, and care services.' },
  { name: 'Economy',       color: 'var(--yellow)', desc: 'Local currencies, investment models, ownership, regenerative trade.' },
  { name: 'Technology',    color: '#a87bd0',       desc: 'Digital infrastructure, AI, governance apps, IoT, blockchain.' },
]

const landCriteria = [
  { title: 'Proximity to a city',                desc: 'Within 45 minutes of a city of at least 100,000 people.' },
  { title: 'Airport access',                     desc: 'Within 1 hour of an international airport.' },
  { title: 'Existing infrastructure',            desc: 'Roads, utilities, and basic services already in place.' },
  { title: 'Climate suited to growing food',     desc: 'Year-round growing – no snow.' },
  { title: 'Residency pathways for foreigners',  desc: 'Workable long-stay programs for an international resident base.' },
  { title: 'Existing community ideal',           desc: 'Land already hosting a small community or project is the strongest match.' },
]

const archetypes = [
  { name: 'Founding members',                         desc: 'Creators with their offering – founders, makers, entrepreneurs growing something inside an aligned community.' },
  { name: 'Community pillars',                        desc: 'Retreat holders, facilitators, ceremony leaders, hosts.' },
  { name: 'Regenerative service providers',           desc: 'Permaculture designers, systems engineers, agriculture practitioners, governance facilitators.' },
  { name: 'Artists',                                  desc: 'Visual, written, performing, musical.' },
  { name: 'Sociologists, researchers, practitioners', desc: 'People studying how communities work.' },
  { name: 'Anyone called to this lifestyle',          desc: '' },
]

const formArchetypes = [
  'Resident',
  'Landowner',
  'Existing community / eco-village',
  'Creator with an offering',
  'Community pillar (facilitator, retreat holder, host)',
  'Regenerative service provider',
  'Artist',
  'Researcher / sociologist',
  'Investor / partner',
  'Just exploring',
]

/* ── Page ── */
export default function RegenHoodZeroPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggleArchetype = (a: string) => {
    setSelected(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to Supabase / form handler
    console.log('Signup submitted:', { name, email, archetypes: selected })
    setSubmitted(true)
  }

  return (
    <>
      {/* ─────────────── 1. HERO ─────────────── */}
      <section style={{
        padding: '160px 0 120px',
        background: 'linear-gradient(180deg, var(--bg) 0%, #e4e4e4 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'Lora, serif', fontSize: 'clamp(56px, 9vw, 132px)', fontWeight: 400,
              lineHeight: 1, margin: '0 0 24px', letterSpacing: '-0.03em',
            }}>
              RegenHood Zero
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'Lora, serif', fontSize: 'clamp(22px, 2.6vw, 32px)', fontStyle: 'italic',
              fontWeight: 400, lineHeight: 1.3, margin: '0 0 32px', opacity: 0.85, maxWidth: '720px',
            }}>
              A pilot for the future of living.
            </motion.p>
            <motion.p variants={fadeUp} style={{
              fontSize: '18px', lineHeight: 1.7, margin: '0 0 24px', opacity: 0.78, maxWidth: '620px',
            }}>
              A modular regenerative neighborhood – good for the individual, the collective, and the planet.
            </motion.p>
            <motion.details variants={fadeUp} style={{
              marginBottom: '40px', maxWidth: '620px',
              border: '1px solid var(--border)', borderRadius: '10px',
              padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.5)',
            }}>
              <summary style={{
                cursor: 'pointer', listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                opacity: 0.75,
              }}>
                <span>What is a regenerative neighborhood?</span>
                <Plus size={16} strokeWidth={1.6} style={{ opacity: 0.5 }} />
              </summary>
              <div style={{ marginTop: '14px', fontSize: '14.5px', lineHeight: 1.65, opacity: 0.82 }}>
                <em style={{ opacity: 0.6 }}>/noun/</em>{' '}
                wellness real estate with resilient water, food, energy and economic systems, plus community lifestyle and amenities.
              </div>
            </motion.details>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <PillBtn href="#join" bg="var(--text)">Live here</PillBtn>
              <PillBtn href="#partner" bg="transparent" light outline>Partner with us</PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 2. FIVE YEARS OF RESEARCH ─────────────── */}
      <section style={{ ...sec, borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} style={{ maxWidth: '780px' }}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--blue)')}>OUR JOURNEY</motion.p>
            <motion.h2 variants={fadeUp} style={h2}>Five years of research</motion.h2>
            <motion.p variants={fadeUp} style={{ ...bodyP, marginTop: '24px' }}>
              For five years, our collective has been visiting, documenting, and consulting eco-villages, pop-up cities, coliving spaces, and intentional communities across Latin America, North America, Europe, and Asia. We have been identifying successes and pain points that make or break these projects. RegenHood Zero is the first place we&apos;re putting all of it together.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: '28px' }}>
              <a href="https://regentribe.co" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '15px', fontWeight: 500,
                color: 'var(--blue-deep)', textDecoration: 'underline', textUnderlineOffset: '4px',
              }}>
                Read more about Regen Tribe <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Collapsible "What we kept asking" */}
            <motion.details variants={fadeUp} style={{
              marginTop: '48px',
              border: '1px solid var(--border)', borderRadius: '12px',
              padding: '20px 24px',
              backgroundColor: 'white',
            }}>
              <summary style={{
                cursor: 'pointer', listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                <span>What we kept asking</span>
                <Plus size={18} strokeWidth={1.6} style={{ opacity: 0.5 }} />
              </summary>
              <ul style={{ margin: '20px 0 0', paddingLeft: '20px', fontSize: '15px', lineHeight: 1.75, opacity: 0.82 }}>
                <li style={{ marginBottom: '6px' }}>What governance structures survive their first conflict?</li>
                <li style={{ marginBottom: '6px' }}>Which infrastructure systems are still working five years in?</li>
                <li style={{ marginBottom: '6px' }}>Which economic models keep the lights on without depending on outside capital forever?</li>
                <li>What turns a group of aligned people into a community that lasts?</li>
              </ul>
            </motion.details>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 3. WHAT REGENHOOD ZERO IS ─────────────── */}
      <section id="framework" style={{ ...sec, backgroundColor: 'var(--text)', color: 'white' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} style={{ maxWidth: '880px' }}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--green)')}>THE PROJECT</motion.p>
            <motion.h2 variants={fadeUp} style={{ ...h2, color: 'white' }}>What RegenHood Zero is</motion.h2>
            <motion.blockquote variants={fadeUp} style={{
              fontFamily: 'Lora, serif', fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.2vw, 28px)', lineHeight: 1.4,
              borderLeft: '3px solid var(--yellow)', paddingLeft: '24px',
              margin: '32px 0', opacity: 0.9, maxWidth: '780px',
            }}>
              Regeneration: making living systems more healthy over time, to sustain more life – through circular and biomimetic systems.
            </motion.blockquote>
            <motion.p variants={fadeUp} style={{ fontSize: '18px', lineHeight: 1.7, margin: 0, opacity: 0.85, maxWidth: '780px' }}>
              RegenHood Zero is a regenerative neighborhood, designed end-to-end on the framework we&apos;ve spent five years developing. Integrated across ecology, hardware, human systems, economy, and technology – and intentionally replicable, so what we build here can take root in many more places after.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 4. NICHES ─────────────── */}
      <section style={{ ...sec, backgroundColor: '#f5f5f0', borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--pink)')}>THE NICHES</motion.p>
            <motion.h2 variants={fadeUp} style={h2}>A neighborhood of niches</motion.h2>
            <motion.p variants={fadeUp} style={{ ...bodyP, marginTop: '20px', marginBottom: '56px' }}>
              RegenHood Zero is organized around 14 color-coded niches – each one a domain of human flourishing. In early phases, each is a section within the shared infrastructure. The full vision places each niche in its own sub-neighborhood on its own land.
            </motion.p>

            <motion.div variants={stagger} style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px',
            }}>
              {niches.map((n, i) => (
                <motion.div key={n.name} variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(54,54,54,0.10)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: 'white', borderRadius: '14px',
                    border: '1px solid var(--border)',
                    overflow: 'hidden', display: 'flex', flexDirection: 'column',
                  }}>
                  <div style={{
                    height: '110px',
                    backgroundColor: n.color,
                    borderBottom: n.border ? '1px solid var(--border)' : 'none',
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute', top: '12px', left: '14px',
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: n.dark ? 'rgba(255,255,255,0.85)' : 'rgba(54,54,54,0.7)',
                    }}>{String(i + 1).padStart(2, '0')} · {n.name}</span>
                  </div>
                  <div style={{ padding: '20px 22px 22px' }}>
                    <h3 style={{ fontFamily: 'Lora, serif', fontSize: '17px', fontWeight: 500, margin: '0 0 8px', lineHeight: 1.25 }}>{n.niche}</h3>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, margin: 0, opacity: 0.75 }}>{n.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 5. PHASES OF DEVELOPMENT ─────────────── */}
      <section style={{ ...sec, borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--blue)')}>MODULAR DESIGN</motion.p>
            <motion.h2 variants={fadeUp} style={{ ...h2, marginBottom: '48px' }}>Phases of development</motion.h2>
            <motion.div variants={stagger} style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px',
            }}>
              {phases.map(p => (
                <motion.div key={p.num} variants={fadeUp} style={{ ...card, padding: '28px' }}>
                  <div style={{ fontFamily: 'Lora, serif', fontSize: '40px', fontWeight: 400, color: 'var(--blue)', lineHeight: 1, marginBottom: '12px' }}>{p.num}</div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: 500, margin: '0 0 10px', lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, margin: 0, opacity: 0.78 }}>{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 6. FIVE PILLARS FOR DESIGN ─────────────── */}
      <section style={{ ...sec, borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--green)')}>THE FRAMEWORK</motion.p>
            <motion.h2 variants={fadeUp} style={h2}>Five pillars for design</motion.h2>
            <motion.p variants={fadeUp} style={{ ...bodyP, marginTop: '20px', marginBottom: '40px' }}>
              We design all five from day one – they only work as a whole. Each pillar runs across every niche.
            </motion.p>

            <motion.ul variants={stagger} style={{
              listStyle: 'none', padding: 0, margin: 0,
              borderTop: '1px solid var(--border)',
            }}>
              {pillars.map(p => (
                <motion.li key={p.name} variants={fadeUp} style={{
                  display: 'grid', gridTemplateColumns: '24px 220px 1fr', gap: '24px', alignItems: 'center',
                  padding: '24px 0', borderBottom: '1px solid var(--border)',
                }} className="rh-pillar-row">
                  <span style={{
                    width: '14px', height: '14px', borderRadius: '50%',
                    backgroundColor: p.color, display: 'inline-block',
                  }} />
                  <span style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: 500 }}>{p.name}</span>
                  <span style={{ fontSize: '15.5px', lineHeight: 1.5, opacity: 0.78 }}>{p.desc}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 7. ARCHITECTURE & SPATIAL DESIGN ─────────────── */}
      <section style={{ ...sec, borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} style={{ maxWidth: '780px' }}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--yellow-deep)')}>THE PLACE</motion.p>
            <motion.h2 variants={fadeUp} style={h2}>Architecture &amp; spatial design</motion.h2>
            <motion.p variants={fadeUp} style={{ ...bodyP, marginTop: '24px', marginBottom: '32px' }}>
              The masterplan organizes shared infrastructure, resource systems, and resident space around a golden-ratio spiral – so each phase grows outward without breaking the systems already in place.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6, margin: '0 0 16px' }}>Core elements</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15.5px', lineHeight: 1.8 }}>
                <li>Common areas</li>
                <li>Commercial area</li>
                <li>Short-term rental / retreat space</li>
                <li>Permanent community area</li>
                <li>Animal sanctuary</li>
                <li style={{ marginTop: '8px' }}>
                  <span style={{ fontWeight: 500 }}>Resource systems</span>
                  <ul style={{ listStyle: 'none', padding: '4px 0 0 20px', margin: 0, fontSize: '15px', opacity: 0.85 }}>
                    <li>– Food forest</li>
                    <li>– Water systems</li>
                    <li>– Passive solar design and solar panel walkways</li>
                  </ul>
                </li>
                <li style={{ marginTop: '8px' }}>Golden ratio spiral</li>
              </ul>
            </motion.div>
            <motion.p variants={fadeUp} style={{
              fontSize: '14px', lineHeight: 1.6, opacity: 0.55, fontStyle: 'italic', marginTop: '28px',
            }}>
              Site plan, building elevations, and interior renderings to be added next.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 8. TWO WAYS TO PARTNER WITH US ─────────────── */}
      <section id="partner" style={{ ...sec, backgroundColor: 'var(--green)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--text)', 0.7)}>PARTNERSHIPS</motion.p>
            <motion.h2 variants={fadeUp} style={{ ...h2, marginBottom: '48px' }}>Two ways to partner with us</motion.h2>
            <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="rh-2col">
              <motion.div variants={fadeUp} style={{ ...card, padding: '36px' }}>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: 500, margin: '0 0 14px', lineHeight: 1.25 }}>You have an existing eco-village or community.</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, margin: 0, opacity: 0.82 }}>
                  We want to partner with a land project that already has some physical and human infrastructure and could use our support to grow.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} style={{ ...card, padding: '36px' }}>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: 500, margin: '0 0 14px', lineHeight: 1.25 }}>You have land and seek development &amp; creative direction.</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, margin: 0, opacity: 0.82 }}>
                  We bring the framework, the design, and the operating playbook. You bring the place. We build it together.
                </p>
              </motion.div>
            </motion.div>

            {/* Land criteria toggle */}
            <motion.details variants={fadeUp} style={{
              marginTop: '32px',
              border: '1px solid rgba(54,54,54,0.15)', borderRadius: '12px',
              padding: '20px 24px',
              backgroundColor: 'rgba(255,255,255,0.55)',
            }}>
              <summary style={{
                cursor: 'pointer', listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily: 'Lora, serif', fontSize: '19px', fontWeight: 500,
              }}>
                <span>Is that you? See what we&apos;re looking for in a place.</span>
                <Plus size={20} strokeWidth={1.6} style={{ opacity: 0.55 }} />
              </summary>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', borderTop: '1px solid rgba(54,54,54,0.12)' }}>
                {landCriteria.map(c => (
                  <li key={c.title} style={{
                    display: 'grid', gridTemplateColumns: '300px 1fr', gap: '24px',
                    padding: '16px 0', borderBottom: '1px solid rgba(54,54,54,0.12)', alignItems: 'baseline',
                  }} className="rh-2col-tight">
                    <span style={{ fontFamily: 'Lora, serif', fontSize: '17px', fontWeight: 500 }}>{c.title}</span>
                    <span style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.82 }}>{c.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.details>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 10. WHO WE'RE INVITING ─────────────── */}
      <section style={{ ...sec, backgroundColor: '#f5f5f0', borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--pink-deep)')}>ARCHETYPES</motion.p>
            <motion.h2 variants={fadeUp} style={{ ...h2, marginBottom: '40px' }}>Who we&apos;re inviting to live with us</motion.h2>
            <motion.ul variants={stagger} style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--border)' }}>
              {archetypes.map(a => (
                <motion.li key={a.name} variants={fadeUp} style={{
                  padding: '20px 0', borderBottom: '1px solid var(--border)',
                }}>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '19px', fontWeight: 500, margin: '0 0 6px' }}>{a.name}</h3>
                  {a.desc && <p style={{ fontSize: '14.5px', lineHeight: 1.6, margin: 0, opacity: 0.78 }}>{a.desc}</p>}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 11. THE TEAM ─────────────── */}
      <section style={{ ...sec, borderBottom: '1px solid var(--border)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} style={{ maxWidth: '780px' }}>
            <motion.p variants={fadeUp} style={kickerStyle('var(--blue-deep)')}>THE TEAM</motion.p>
            <motion.h2 variants={fadeUp} style={h2}>Our team</motion.h2>
            <motion.p variants={fadeUp} style={{ ...bodyP, marginTop: '24px' }}>
              RegenHood Zero is being built by <strong>Oscar and Sonia</strong>, co-founders of Regen Tribe. The wider operating team grows in step with the project – most roles are filled by residents through the work-to-earn system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── 12. APPLY TO JOIN ─────────────── */}
      <section id="join" style={{ ...sec, backgroundColor: 'var(--yellow)' }} className="sec">
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="rh-2col">
            <motion.div variants={fadeUp}>
              <p style={kickerStyle('var(--text)', 0.7)}>JOIN US</p>
              <h2 style={h2}>Apply to join</h2>
              <p style={{ ...bodyP, marginTop: '24px', marginBottom: '24px' }}>
                Whether you&apos;re a future resident, a landowner, an existing community, or an investor – we&apos;d like to talk.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.6, margin: 0, opacity: 0.7 }}>
                Or email us: <a href="mailto:hello@regentribe.co" style={{ textDecoration: 'underline' }}>hello@regentribe.co</a>
              </p>
            </motion.div>

            <motion.form variants={fadeUp} onSubmit={handleSubmit} style={{ ...card, padding: '32px' }}>
              {submitted ? (
                <div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: 500, margin: '0 0 12px' }}>Thanks – we&apos;ll be in touch.</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, margin: 0, opacity: 0.75 }}>
                    Your archetype{selected.length === 1 ? '' : 's'} {selected.length === 1 ? 'has' : 'have'} been logged. Someone from the team will reach out soon.
                  </p>
                </div>
              ) : (
                <>
                  <label style={{ display: 'block', marginBottom: '16px' }}>
                    <span style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px', opacity: 0.7 }}>Name</span>
                    <input
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{
                        width: '100%', padding: '12px 14px', fontSize: '15px',
                        border: '1px solid var(--border)', borderRadius: '8px',
                        backgroundColor: 'var(--bg)', fontFamily: 'inherit', color: 'var(--text)',
                      }}
                    />
                  </label>
                  <label style={{ display: 'block', marginBottom: '20px' }}>
                    <span style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px', opacity: 0.7 }}>Email</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{
                        width: '100%', padding: '12px 14px', fontSize: '15px',
                        border: '1px solid var(--border)', borderRadius: '8px',
                        backgroundColor: 'var(--bg)', fontFamily: 'inherit', color: 'var(--text)',
                      }}
                    />
                  </label>
                  <fieldset style={{ border: 'none', padding: 0, marginBottom: '24px' }}>
                    <legend style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px', opacity: 0.7 }}>I&apos;m a... <span style={{ opacity: 0.5, textTransform: 'none', letterSpacing: 0 }}>(select all that apply)</span></legend>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px' }}>
                      {formArchetypes.map(a => (
                        <label key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '13px', lineHeight: 1.4 }}>
                          <input
                            type="checkbox"
                            checked={selected.includes(a)}
                            onChange={() => toggleArchetype(a)}
                            style={{ marginTop: '3px', accentColor: 'var(--text)' }}
                          />
                          <span>{a}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <button type="submit" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                    color: 'white', backgroundColor: 'var(--text)',
                    borderRadius: '9999px', padding: '14px 32px',
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  }}>
                    Apply to join <ArrowRight size={14} strokeWidth={2} />
                  </button>
                </>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── Responsive ─────────────── */}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.rh-2col) {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          :global(.rh-2col-tight) {
            grid-template-columns: 1fr !important;
            gap: 6px !important;
          }
          :global(.rh-pillar-row) {
            grid-template-columns: 16px 1fr !important;
            gap: 12px !important;
            row-gap: 6px !important;
          }
          :global(.rh-pillar-row > span:nth-child(3)) {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </>
  )
}
