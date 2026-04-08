'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ─────────────────────────────────────────
   Layout constants
───────────────────────────────────────── */
const W   = '1280px'
const PX  = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ─────────────────────────────────────────
   Dark palette (same accent tokens, dark bg)
───────────────────────────────────────── */
const BG       = '#363636'
const BG_CARD  = '#2a2a2a'
const TEXT      = '#ededed'
const MUTED     = 'rgba(237,237,237,0.45)'
const BORDER    = 'rgba(237,237,237,0.1)'

/* ─────────────────────────────────────────
   Animation — identical to main site
───────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const vp = { once: true, margin: '-80px' as const }

/* ─────────────────────────────────────────
   Shared sub-components
───────────────────────────────────────── */
function Label({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(13,26,18,0.5)' : MUTED,
      marginBottom: '28px',
    }}>
      {children}
    </p>
  )
}

function TextLink({ href, children, external, dark }: {
  href: string; children: React.ReactNode; external?: boolean; dark?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '17px', fontWeight: '400',
    color: dark ? BG : TEXT,
    textDecoration: 'none', letterSpacing: '0.01em',
  }
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={style}
      whileHover={{ x: 5 }} transition={{ duration: 0.15 }}
    >
      {children}<ArrowRight size={14} strokeWidth={1.5} />
    </motion.a>
  )
}

function PillBtn({ href, children, external, accent, textColor }: {
  href: string; children: React.ReactNode; external?: boolean; accent?: string; textColor?: string
}) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '14px', fontWeight: '600', letterSpacing: '0.02em',
        color: textColor ?? BG,
        backgroundColor: accent ?? TEXT,
        borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none',
      }}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
    >
      {children}<ArrowRight size={14} strokeWidth={2} />
    </motion.a>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    'Active':         { bg: 'var(--green)',               color: BG },
    'Building':       { bg: 'var(--pink)',                color: BG },
    'In Development': { bg: 'var(--yellow)',              color: BG },
    'Planned':        { bg: 'rgba(237,237,237,0.08)',     color: MUTED },
  }
  const s = styles[status] ?? styles['Planned']
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: s.color,
      backgroundColor: s.bg, borderRadius: '9999px', padding: '4px 12px',
    }}>
      {status}
    </span>
  )
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const heroPanels = [
  { color: 'var(--green)',  symbol: '○', label: 'Genesis'         },
  { color: 'var(--blue)',   symbol: '△', label: 'Knowledge Graph' },
  { color: 'var(--yellow)', symbol: '□', label: 'Regen Vision'    },
  { color: 'var(--pink)',   symbol: '○', label: 'Tribes Platform' },
]

const tools = [
  {
    dot:      'var(--green)',
    symbol:   '○',
    name:     'Genesis',
    tagline:  'Community AI Agent',
    desc:     'An AI agent living inside the RegenTribes Telegram. Guides vision holders through the Community Alchemy Playbook, captures ideas and turns them into development specs, answers knowledge queries using a live semantic knowledge graph, and archives community conversations for future retrieval.',
    skills:   ['alchemy', 'dreamcatcher', 'genesis-brain', 'telegram-history', 'deep-research'],
    status:   'Active',
    builders:     'Ian Tarrea · Vitali',
    contributors: 'collective',
    github:   'https://github.com/regentribes/genesis-zero-bot',
    repo:     'genesis-zero-bot',
  },
  {
    dot:      'var(--blue)',
    symbol:   '△',
    name:     'Regen Knowledge Graph',
    tagline:  'AI Brain & Semantic Layer',
    desc:     'Transforms any document into a typed, traversable knowledge graph using LLM extraction, vector embeddings, and epistemic truth values. Powers Genesis\'s intelligence — ingesting community docs, extracting concepts and relationships, and enabling semantic search across the entire RegenTribes knowledge base.',
    skills:   [],
    status:   'Active',
    builders:     'Ian Tarrea · Vitali',
    contributors: 'collective',
    github:   'https://github.com/regentribes/regen-knowledge-graph',
    repo:     'regen-knowledge-graph',
  },
  {
    dot:      'var(--yellow)',
    symbol:   '□',
    name:     'Regen Vision',
    tagline:  '3D Knowledge Visualization',
    desc:     'Interactive 3D force-directed graph visualizations of RegenTribes knowledge structures. Makes the invisible visible — surfacing the ideas, people, and connections that form the regenerative ecosystem as an explorable, living graph.',
    skills:   [],
    status:   'In Development',
    builders:     '',
    contributors: '',
    github:   'https://github.com/regentribes/regen-vision',
    repo:     'regen-vision',
  },
  {
    dot:      'var(--pink)',
    symbol:   '○',
    name:     'Regen Neighborhood Framework',
    tagline:  'Community Development Playbook',
    desc:     'A comprehensive open playbook for designing, funding, and building regenerative micro-communities. Synthesizes the Community Alchemy Guide, the 5-Spiral development model, and field insights from Regen Tribe\'s global call series into a unified map for neighborhood builders worldwide.',
    skills:   [],
    status:   'In Development',
    builders:     '',
    contributors: '',
    github:   'https://github.com/regentribes/regen-neighborhood-framework',
    repo:     'regen-neighborhood-framework',
  },
]

const modules = [
  { id: 'MyCo0', name: 'Myconet',             purpose: 'People networking & community matching',              status: 'Building', color: 'var(--green)' },
  { id: 'MyCo1', name: 'RN Catalyzer',        purpose: 'Guided neighborhood creation via Community Alchemy',  status: 'Building', color: 'var(--green)' },
  { id: 'MyCo2', name: 'Resources',           purpose: 'Searchable community resource library',               status: 'Building', color: 'var(--green)' },
  { id: 'MyCo3', name: 'Alpacatron',          purpose: 'AI onboarding & digital agreement signing',           status: 'Building', color: 'var(--green)' },
  { id: 'MyCo4', name: 'Project Collab',      purpose: 'Project agreements & compensation tools',             status: 'Planned',  color: 'var(--blue)'  },
  { id: 'MyCo5', name: 'Ops Logistics',       purpose: 'Task boards, accounting & community management',      status: 'Building', color: 'var(--green)' },
  { id: 'MyCo6', name: 'Governance',          purpose: 'Configurable voting & decision tools',                status: 'Planned',  color: 'var(--blue)'  },
  { id: 'MyCo7', name: 'Accountability Buddy', purpose: 'Personal goal tracker',                              status: 'Planned',  color: 'var(--blue)'  },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function TechStack() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: '100vh' }}>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section style={{ padding: '56px 0 64px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...wrap, width: '100%' }}>
          <div className="ts-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.72fr', gap: '64px', alignItems: 'center' }}>

            {/* Left: text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Label>Open Source · Community Built · Regen Tribe</Label>
              </motion.div>

              <h1 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(36px, 4.2vw, 68px)',
                fontWeight: '400', lineHeight: '1.0',
                letterSpacing: '-0.025em', color: TEXT,
                marginBottom: '40px',
              }}>
                {['Open-source tools', 'for the regenerative', 'neighborhood', 'movement.'].map((line, i) => (
                  <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
                    <motion.span
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 + i * 0.08 }}
                      style={{ display: 'block' }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.div variants={fadeUp} style={{
                borderTop: `1px solid ${BORDER}`, paddingTop: '40px',
                display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap',
              }}>
                <PillBtn href="https://github.com/regentribes" external accent="var(--green)">
                  View on GitHub
                </PillBtn>
                <TextLink href="https://t.me/+fsFL1jIIGM9jOWFh" external>Join the collective</TextLink>
              </motion.div>
            </motion.div>

            {/* Right: 2×2 color panels */}
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="ts-hero-panels"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
            >
              {heroPanels.map((p) => (
                <motion.div key={p.label} variants={fadeUp} style={{
                  backgroundColor: p.color, borderRadius: '6px', padding: '28px 24px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  aspectRatio: '1 / 1',
                }}>
                  <span style={{
                    fontSize: '44px', lineHeight: 1, opacity: 0.4,
                    fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: '400', color: BG,
                  }}>
                    {p.symbol}
                  </span>
                  <span style={{
                    fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: BG,
                  }}>
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TICKER
      ════════════════════════════════ */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, overflow: 'hidden', padding: '16px 0' }}>
        <div className="ticker-track" style={{ display: 'flex', gap: '64px', width: 'max-content' }}>
          {[...Array(3)].flatMap(() => [
            'Open Source', '○', 'Community Built', '△', 'Regen Tribe', '□',
            'Regenerative Neighborhoods', '○', 'Genesis', '△', 'Knowledge Graph', '□',
            'Tribes Platform', '○', 'Open to Collaborators', '△', 'Regen Vision', '□',
          ]).map((item, i) => (
            <span key={i} style={{
              fontSize: '13px',
              fontWeight: item.length === 1 ? '400' : '500',
              letterSpacing: item.length === 1 ? '0' : '0.1em',
              textTransform: 'uppercase',
              color: item.length === 1 ? 'rgba(237,237,237,0.15)' : 'rgba(237,237,237,0.35)',
              whiteSpace: 'nowrap',
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════
          WHY THIS MATTERS
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            {/* Heading */}
            <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '860px' }}>
              <Label>Why It Matters</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(40px, 5vw, 80px)',
                fontWeight: '400', lineHeight: '1.0',
                letterSpacing: '-0.025em', color: TEXT,
              }}>
                Empowering the growing movement.
              </h2>
            </motion.div>

            {/* Body */}
            <motion.div variants={fadeUp} className="ts-two-col" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
              borderBottom: `1px solid ${BORDER}`, paddingBottom: '72px', marginBottom: '72px',
            }}>
              <p style={{ fontSize: '20px', fontWeight: '300', color: MUTED, lineHeight: '1.7' }}>
                The failure rate for community land projects remains high. The vision and people are
                there. What&apos;s needed is the shared infrastructure — systems for connecting community
                builders, managing operations, onboarding residents, and running governance in a way
                that actually holds.
              </p>
              <p style={{ fontSize: '20px', fontWeight: '300', color: MUTED, lineHeight: '1.7' }}>
                The knowledge exists — earned across hundreds of projects and thousands of builders
                worldwide. This stack makes it accessible, shared, and compounding. Open source.
                Owned by no one. Useful to everyone in the movement.
              </p>
            </motion.div>

            {/* Three pillars */}
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}
              className="ts-pillars-grid"
            >
              {[
                {
                  symbol: '○',
                  dot: 'var(--green)',
                  title: 'Software built for this work',
                  desc: 'Purpose-built for the full lifecycle of regenerative neighborhood development — from first vision to daily operations. Not adapted from corporate tools.',
                },
                {
                  symbol: '△',
                  dot: 'var(--blue)',
                  title: 'One stack, every community',
                  desc: 'Any community can adopt, adapt, and contribute back. Every improvement made anywhere benefits everyone building everywhere.',
                },
                {
                  symbol: '□',
                  dot: 'var(--yellow)',
                  title: 'Builders working together',
                  desc: 'A network of developers, practitioners, and community builders working on the same problems — sharing knowledge instead of reinventing it.',
                },
              ].map((p, i) => (
                <motion.div key={p.title} variants={fadeUp} style={{
                  borderRight: i < 2 ? `1px solid ${BORDER}` : 'none',
                  paddingRight: i < 2 ? '48px' : '0',
                  paddingLeft: i > 0 ? '48px' : '0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: p.dot, flexShrink: 0 }} />
                    <span style={{
                      fontFamily: 'var(--font-lora)', fontSize: '20px',
                      color: TEXT, opacity: 0.2,
                    }}>
                      {p.symbol}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    fontSize: '22px', fontWeight: '400',
                    color: TEXT, marginBottom: '14px', lineHeight: '1.2',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: '300', color: MUTED, lineHeight: '1.7' }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          ACTIVE TOOLS
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div style={wrap}>

          {/* Section header */}
          <motion.div
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              borderBottom: `1px solid ${BORDER}`, paddingBottom: '40px', marginBottom: '72px',
              flexWrap: 'wrap', gap: '24px',
            }}
          >
            <motion.div variants={fadeUp}>
              <Label>The Stack</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: '400', lineHeight: '0.92',
                letterSpacing: '-0.025em', color: TEXT,
              }}>
                Active<br />Tools
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <TextLink href="https://github.com/regentribes" external>
                github.com/regentribes
              </TextLink>
            </motion.div>
          </motion.div>

          {/* Tool cards — 2×2 grid */}
          <motion.div
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            className="ts-tools-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }}
          >
            {tools.map((tool, i) => {
              const col = i % 2
              const row = Math.floor(i / 2)
              return (
              <motion.div key={tool.name} variants={fadeUp} style={{
                borderRight:  col === 0 ? `1px solid ${BORDER}` : 'none',
                borderBottom: row === 0 ? `1px solid ${BORDER}` : 'none',
                paddingRight: col === 0 ? '56px' : '0',
                paddingLeft:  col === 1 ? '56px' : '0',
                paddingBottom: row === 0 ? '72px' : '0',
                paddingTop:    row === 1 ? '72px' : '0',
                display: 'flex', flexDirection: 'column',
              }}>

                {/* Top bar + symbol */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                  <div style={{ width: '32px', height: '3px', backgroundColor: tool.dot, borderRadius: '2px', marginTop: '8px' }} />
                  <span style={{
                    fontSize: '40px', fontFamily: 'var(--font-lora)', color: TEXT, opacity: 0.1,
                  }}>
                    {tool.symbol}
                  </span>
                </div>

                {/* Status badge */}
                <div style={{ marginBottom: '20px' }}>
                  <StatusBadge status={tool.status} />
                </div>

                {/* Name */}
                <h3 style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(24px, 2.5vw, 34px)',
                  fontWeight: '400', lineHeight: '1.1',
                  letterSpacing: '-0.015em', color: TEXT,
                  marginBottom: '8px',
                }}>
                  {tool.name}
                </h3>

                {/* Tagline */}
                <p style={{
                  fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: tool.dot, marginBottom: '24px',
                }}>
                  {tool.tagline}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: '15px', fontWeight: '300', color: MUTED,
                  lineHeight: '1.7', marginBottom: '28px', flexGrow: 1,
                }}>
                  {tool.desc}
                </p>

                {/* Skill tags */}
                {tool.skills.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {tool.skills.map(s => (
                      <span key={s} style={{
                        fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: MUTED,
                        border: `1px solid ${BORDER}`, borderRadius: '4px',
                        padding: '4px 10px',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Builders / Contributors */}
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '24px', marginBottom: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                      { label: 'Builders',     value: tool.builders },
                      { label: 'Contributors', value: tool.contributors },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p style={{
                          fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em',
                          textTransform: 'uppercase', color: MUTED, marginBottom: '8px',
                        }}>
                          {label}
                        </p>
                        <p style={{
                          fontSize: '14px',
                          color: value ? TEXT : 'rgba(237,237,237,0.2)',
                          fontStyle: value ? 'normal' : 'italic',
                        }}>
                          {value || '—'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub link */}
                <motion.a
                  href={tool.github} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '13px', fontWeight: '500', color: MUTED,
                    textDecoration: 'none', letterSpacing: '0.02em',
                  }}
                  whileHover={{ x: 4 }} transition={{ duration: 0.15 }}
                >
                  ↗ {tool.repo}
                </motion.a>

              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          TRIBES PLATFORM
      ════════════════════════════════ */}
      <section style={{ backgroundColor: BG_CARD, padding: '120px 0' }}>
        <div style={wrap}>

          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: '64px', marginBottom: '72px' }}
          >
            <motion.div variants={fadeUp}>
              <Label>Flagship Product · v1 Live</Label>
            </motion.div>

            <div className="ts-tribes-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end' }}>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(56px, 7vw, 112px)',
                fontWeight: '400', lineHeight: '0.9',
                letterSpacing: '-0.03em', color: TEXT,
              }}>
                Tribes<br />Platform
              </motion.h2>

              <motion.div variants={fadeUp}>
                <p style={{
                  fontSize: '20px', fontWeight: '300', color: MUTED,
                  lineHeight: '1.65', marginBottom: '40px',
                }}>
                  Social-networking platform for people, projects and solutions in the
                  Regenerative Neighborhood movement — a modular, interconnected platform
                  that brings the entire stack together. Currently 1,400 users, with v2
                  open-source in development.
                </p>

                {/* Builders / Contributors */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px',
                  borderTop: `1px solid ${BORDER}`, paddingTop: '32px', marginBottom: '40px',
                }}>
                  {[
                    { label: 'Builders',     value: 'Regen Tribe' },
                    { label: 'Contributors', value: 'the whole collective' },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p style={{
                        fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: MUTED, marginBottom: '8px',
                      }}>
                        {label}
                      </p>
                      <p style={{ fontSize: '15px', color: TEXT }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <PillBtn href="https://tribesplatform.app" external accent="var(--green)">
                    Join v1
                  </PillBtn>
                  <TextLink href="https://github.com/regentribes" external>
                    View on GitHub
                  </TextLink>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* MYCONET module grid */}
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp} style={{ marginBottom: '40px' }}>
              <Label>MYCONET — Module Roadmap</Label>
            </motion.div>

            <div className="ts-modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
              {modules.map((mod, i) => {
                const col = i % 4
                const row = Math.floor(i / 4)
                const isBuilding = mod.status === 'Building'
                return (
                  <motion.div key={mod.id} variants={fadeUp} style={{
                    borderRight:  col < 3 ? `1px solid ${BORDER}` : 'none',
                    borderBottom: row === 0 ? `1px solid ${BORDER}` : 'none',
                    padding: '32px 0',
                    paddingLeft:  col > 0 ? '28px' : '0',
                    paddingRight: col < 3 ? '28px' : '0',
                    opacity: isBuilding ? 1 : 0.5,
                  }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', marginBottom: '16px',
                    }}>
                      <span style={{
                        fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: MUTED,
                      }}>
                        {mod.id}
                      </span>
                      <StatusBadge status={mod.status} />
                    </div>

                    <div style={{
                      width: '24px', height: '2px',
                      backgroundColor: mod.color, borderRadius: '2px', marginBottom: '16px',
                    }} />

                    <h4 style={{
                      fontFamily: 'var(--font-lora), Georgia, serif',
                      fontSize: '18px', fontWeight: '400',
                      color: TEXT, lineHeight: '1.2', marginBottom: '10px',
                    }}>
                      {mod.name}
                    </h4>
                    <p style={{ fontSize: '13px', fontWeight: '300', color: MUTED, lineHeight: '1.6' }}>
                      {mod.purpose}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════
          THE COLLECTIVE
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            <div className="ts-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

              {/* Left: heading + intro */}
              <div>
                <motion.div variants={fadeUp}><Label>The Collective</Label></motion.div>
                <motion.h2 variants={fadeUp} style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(44px, 5.5vw, 88px)',
                  fontWeight: '400', lineHeight: '0.95',
                  letterSpacing: '-0.025em', color: TEXT,
                  marginBottom: '32px',
                }}>
                  The Collective.
                </motion.h2>
                <motion.p variants={fadeUp} style={{
                  fontSize: '20px', fontWeight: '300', color: MUTED, lineHeight: '1.7',
                }}>
                  This stack isn&apos;t owned by any one organization. It&apos;s contributed to and used
                  by everyone in the regenerative neighborhood movement — people from all walks
                  of life who believe this way of living matters and are doing something about it.
                </motion.p>
              </div>

              {/* Right: people-type cards */}
              <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                {[
                  { dot: 'var(--green)',  title: 'Vision Holders',     desc: 'Landowners and developers turning land into living communities.' },
                  { dot: 'var(--blue)',   title: 'Community Members',   desc: 'People seeking and building regenerative lives day to day.' },
                  { dot: 'var(--yellow)', title: 'Service Providers',   desc: 'Builders, architects, and systems designers who serve communities.' },
                  { dot: 'var(--pink)',   title: 'Developers',          desc: 'Engineers and coders contributing tools to the open stack.' },
                  { dot: 'var(--green)',  title: 'Practitioners',       desc: 'Those who have lived inside intentional communities and know what works.' },
                  { dot: 'var(--blue)',   title: 'Advocates',           desc: 'People who believe this way of living matters and help spread it.' },
                ].map((type, i) => {
                  const col = i % 2
                  const row = Math.floor(i / 3)
                  return (
                    <motion.div key={type.title} variants={fadeUp} style={{
                      borderRight:  col === 0 ? `1px solid ${BORDER}` : 'none',
                      borderBottom: i < 4 ? `1px solid ${BORDER}` : 'none',
                      padding: '28px 0',
                      paddingRight: col === 0 ? '28px' : '0',
                      paddingLeft:  col === 1 ? '28px' : '0',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: type.dot, flexShrink: 0 }} />
                        <h4 style={{
                          fontFamily: 'var(--font-lora), Georgia, serif',
                          fontSize: '16px', fontWeight: '400', color: TEXT,
                        }}>
                          {type.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '13px', fontWeight: '300', color: MUTED, lineHeight: '1.6' }}>
                        {type.desc}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA — green full-bleed
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--green)', padding: '140px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp}><Label dark>Get Involved</Label></motion.div>

            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(56px, 7.5vw, 120px)',
              fontWeight: '400', lineHeight: '0.92',
              letterSpacing: '-0.03em', color: BG,
              marginBottom: '48px', maxWidth: '860px',
            }}>
              Build with us.
            </motion.h2>

            <motion.p variants={fadeUp} style={{
              fontSize: '20px', fontWeight: '300',
              color: 'rgba(13,26,18,0.65)', lineHeight: '1.65',
              maxWidth: '520px', marginBottom: '56px',
            }}>
              All tools are open source and actively developed. Pick a module, open an issue,
              or reach out — collaborators are welcome at every level.
            </motion.p>

            <motion.div variants={fadeUp} style={{
              display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'center',
              borderTop: '1px solid rgba(13,26,18,0.2)', paddingTop: '40px',
            }}>
              <PillBtn href="https://t.me/+fsFL1jIIGM9jOWFh" external accent={BG} textColor="var(--green)">
                Join the collective
              </PillBtn>
              <TextLink href="https://github.com/regentribes" external dark>
                github.com/regentribes
              </TextLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Responsive + Ticker CSS ── */}
      <style>{`
        .ticker-track {
          animation: ticker 36s linear infinite;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }

        @media (max-width: 900px) {
          .ts-hero-grid     { grid-template-columns: 1fr !important; }
          .ts-hero-panels   { display: none !important; }
          .ts-two-col       { grid-template-columns: 1fr !important; }
          .ts-tribes-header { grid-template-columns: 1fr !important; }
          .ts-modules-grid  { grid-template-columns: 1fr 1fr !important; }
          .ts-tools-grid    { grid-template-columns: 1fr !important; }
          .ts-pillars-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ts-pillars-grid > div { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; border-bottom: 1px solid rgba(237,237,237,0.1) !important; padding-bottom: 40px !important; }
          .ts-pillars-grid > div:last-child { border-bottom: none !important; padding-bottom: 0 !important; }
          .ts-tools-grid > div {
            border-right: none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-bottom: 1px solid rgba(237,237,237,0.1) !important;
            padding-bottom: 48px !important;
          }
          .ts-tools-grid > div:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>

    </div>
  )
}
