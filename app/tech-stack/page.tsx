'use client'

import { useState } from 'react'
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
const BG       = '#282a29'
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
  { color: 'var(--pink)',   symbol: '○', label: 'RN Framework'    },
  { color: 'var(--blue)',   symbol: '△', label: 'Knowledge Graph' },
  { color: 'var(--green)',  symbol: '○', label: 'Genesis'         },
  { color: 'var(--yellow)', symbol: '□', label: 'Regen Vision'    },
]

const tools = [
  {
    dot:      'var(--pink)',
    symbol:   '○',
    name:     'Regen Neighborhood Framework',
    tagline:  'Neighborhood Development Playbook',
    desc:     'A comprehensive open playbook for designing, funding, and building regenerative micro-communities. Synthesizes the Community Alchemy Guide, the 5-Spiral development model, and field insights from Regen Tribe\'s global call series into a unified map for neighborhood builders worldwide.',
    skills:   [],
    status:   'In Development',
    builders:     'Regen Tribe',
    contributors: 'collective',
    github:   'https://github.com/regentribes/regen-neighborhood-framework',
    repo:     'regen-neighborhood-framework',
  },
  {
    dot:      'var(--blue)',
    symbol:   '△',
    name:     'Regen Knowledge Graph',
    tagline:  'AI Brain & Semantic Layer',
    desc:     'Visual representation of resources collected during the Regenerative Neighborhood Framework Design Labs. Transforms any document into a typed, traversable knowledge graph using LLM extraction, vector embeddings, and epistemic truth values — ingesting community docs, extracting concepts and relationships, and enabling semantic search across the entire RegenTribes knowledge base.',
    skills:   [],
    status:   'Active',
    builders:     'Ian Tarrea · Vitali',
    contributors: 'collective',
    github:   'https://github.com/regentribes/regen-knowledge-graph',
    repo:     'regen-knowledge-graph',
  },
  {
    dot:      'var(--green)',
    symbol:   '○',
    name:     'Genesis',
    tagline:  'Community AI Agent',
    desc:     'An AI agent living inside the Regen Tribe Telegram. Guides vision holders through the Community Alchemy Guide, captures ideas and turns them into development specs, answers knowledge queries using a live semantic knowledge graph, and archives community conversations for future retrieval.',
    skills:   ['alchemy', 'dreamcatcher', 'genesis-brain', 'telegram-history', 'deep-research'],
    status:   'Active',
    builders:     'Ian Tarrea · Vitali',
    contributors: 'collective',
    github:   'https://github.com/regentribes/genesis-zero-bot',
    repo:     'genesis-zero-bot',
  },
  {
    dot:      'var(--yellow)',
    symbol:   '□',
    name:     'Regen Vision',
    tagline:  '3D Knowledge Visualization',
    desc:     'Interactive 3D force-directed graph visualizations of RegenTribes knowledge structures. Makes the invisible visible — surfacing the ideas, people, and connections that form the regenerative ecosystem as an explorable, living graph.',
    skills:   [],
    status:   'In Development',
    builders:     'Vitali',
    contributors: '',
    github:   'https://github.com/regentribes/regen-vision',
    repo:     'regen-vision',
  },
  {
    dot:      'var(--blue)',
    symbol:   '△',
    name:     'Mythogen AME',
    tagline:  'Affinity Mapping Engine & Field of Trust',
    desc:     'A TypeScript engine for community design — surfacing Living Seed Patterns, detecting Fields of Trust, and mapping relationships through a Tri-Layered System (BODY / FIELD / SEED). Makes the invisible dynamics of community legible and workable.',
    skills:   [],
    status:   'In Development',
    builders:     'Vic D. · Vitali',
    contributors: '',
    github:   'https://github.com/regentribes/mythogen-ame',
    repo:     'mythogen-ame',
  },
]

const modules = [
  { id: 'MyCo0', name: 'Myconet',             purpose: 'People networking & community matching',              status: 'Building', color: 'var(--green)' },
  { id: 'MyCo1', name: 'Educational Resources', purpose: 'Guided neighborhood creation via Community Alchemy Guide', status: 'Building', color: 'var(--green)' },
  { id: 'MyCo2', name: 'Resources',           purpose: 'Searchable community resource library',               status: 'Building', color: 'var(--green)' },
  { id: 'MyCo3', name: 'Alpacatron',          purpose: 'AI onboarding & digital agreement signing',           status: 'Building', color: 'var(--green)' },
  { id: 'MyCo4', name: 'Project Collab',      purpose: 'Project agreements & compensation tools',             status: 'Planned',  color: 'var(--blue)'  },
  { id: 'MyCo5', name: 'Ops Logistics',       purpose: 'Task boards, accounting & community management',      status: 'Building', color: 'var(--green)' },
  { id: 'MyCo6', name: 'Governance',          purpose: 'Configurable voting & decision tools',                status: 'Planned',  color: 'var(--blue)'  },
  { id: 'MyCo7', name: 'Accountability Buddy', purpose: 'Personal goal tracker',                              status: 'Planned',  color: 'var(--blue)'  },
]

/* ─────────────────────────────────────────
   Flip card inner (position managed by HeroScene)
───────────────────────────────────────── */
function FlipCardInner({ onHoverChange }: { onHoverChange: (v: boolean) => void }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      onHoverStart={() => { setFlipped(true);  onHoverChange(true)  }}
      onHoverEnd  ={() => { setFlipped(false); onHoverChange(false) }}
      style={{ perspective: '900px', cursor: 'pointer' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 158, height: 158, position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          backgroundColor: 'var(--yellow)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '18px', textAlign: 'center', gap: '10px',
        }}>
          <span style={{ fontSize: '22px', lineHeight: 1, color: 'rgba(40,42,41,0.4)' }}>○</span>
          <p style={{
            fontSize: '11px', fontWeight: '600', lineHeight: 1.5,
            textTransform: 'uppercase', letterSpacing: '0.06em',
            color: 'rgba(40,42,41,0.62)',
          }}>
            What is a regenerative neighborhood?
          </p>
        </div>
        {/* Back */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          backgroundColor: 'var(--yellow)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '16px', overflow: 'hidden',
        }}>
          <p style={{
            fontSize: '9px', fontWeight: '800', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: BG, marginBottom: '8px',
          }}>
            /noun/
          </p>
          <p style={{ fontSize: '10.5px', fontWeight: '500', color: BG, lineHeight: 1.5 }}>
            Wellness real estate with resilient systems for water, food, shelter, energy,
            waste management, nature & human connection.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Hero shape installation — float + scene
───────────────────────────────────────── */
function HeroScene() {
  const [scene, setScene] = useState(false)

  // base top/left (px) | scene delta x/y | scene scale | scene opacity
  const shapes: {
    id: string; shape: string; col: string
    bt: number; bl: number
    rot: number; dur: number; fd: number; initD: number
    sx: number; sy: number; ss: number; so: number
  }[] = [
    { id:'cg', shape:'circle',   col:'var(--green)',  bt:22,  bl:22,  rot:0,  dur:5.2, fd:0,   initD:0.2, sx:-22,  sy:153,  ss:0.77, so:1 },
    { id:'tb', shape:'triangle', col:'var(--blue)',   bt:14,  bl:285, rot:8,  dur:6.0, fd:0.7, initD:0.3, sx:-177, sy:214,  ss:1.1,  so:1 },
    { id:'cp', shape:'circle',   col:'var(--pink)',   bt:294, bl:9,   rot:0,  dur:5.8, fd:1.1, initD:0.4, sx:231,  sy:-87,  ss:0.4,  so:1 },
    { id:'tg', shape:'triangle', col:'var(--green)',  bt:331, bl:152, rot:-8, dur:4.2, fd:0.9, initD:0.5, sx:160,  sy:-290, ss:0.25, so:0 },
    { id:'sb', shape:'square',   col:'var(--blue)',   bt:262, bl:295, rot:6,  dur:6.4, fd:0.5, initD:0.6, sx:-183, sy:46,   ss:0.96, so:1 },
  ]

  // extra shapes that only appear in scene mode
  const extras: { id: string; top: number; left: number; w: number; h: number; col: string; radius: number; op: number }[] = [
    { id:'trunk',  top:272, left:36,  w:18,  h:65, col:'var(--green)',         radius:2,   op:0.75 },
    { id:'door',   top:355, left:148, w:26,  h:53, col:'rgba(40,42,41,0.22)',  radius:0,   op:1    },
    { id:'p1body', top:284, left:281, w:30,  h:80, col:'var(--pink)',          radius:4,   op:0.82 },
    { id:'p2head', top:243, left:328, w:44,  h:44, col:'var(--yellow)',        radius:999, op:1    },
    { id:'p2body', top:287, left:338, w:30,  h:76, col:'var(--yellow)',        radius:4,   op:0.82 },
    { id:'ground', top:376, left:0,   w:440, h:1,  col:'rgba(237,237,237,0.1)',radius:0,   op:1    },
  ]

  return (
    <div className="ts-hero-panels" style={{ position: 'relative', height: '460px' }}>

      {/* Flip card — lifts to top when scene activates */}
      <motion.div
        style={{ position: 'absolute', top: 124, left: 134, zIndex: 3 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1, scale: scene ? 0.72 : 1,
          y: scene ? -109 : [0, -16, 0],
        }}
        transition={scene ? {
          duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number],
        } : {
          opacity: { duration: 0.6, delay: 0.5 },
          scale:   { duration: 0.55, ease: [0.25,0.1,0.25,1] as [number,number,number,number] },
          y:       { duration: 5.3, delay: 0.6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <FlipCardInner onHoverChange={setScene} />
      </motion.div>

      {/* Floating shapes — animate to scene positions on hover */}
      {shapes.map((s) => (
        <motion.div
          key={s.id}
          style={{ position: 'absolute', top: s.bt, left: s.bl }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={scene ? {
            x: s.sx, y: s.sy, scale: s.ss, rotate: 0, opacity: s.so,
          } : {
            x: 0, y: [0, -20, 0], scale: 1, rotate: [0, s.rot, 0], opacity: 1,
          }}
          transition={scene ? {
            duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number],
          } : {
            opacity: { duration: 0.6, delay: s.initD },
            scale:   { duration: 0.6, delay: s.initD },
            x:       { duration: 0.65, ease: [0.25,0.1,0.25,1] as [number,number,number,number] },
            y:       { duration: s.dur, delay: s.fd, repeat: Infinity, ease: 'easeInOut' },
            rotate:  { duration: s.dur * 1.3, delay: s.fd, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={scene ? undefined : { scale: 1.12, transition: { duration: 0.2 } }}
        >
          {s.shape === 'circle' && (
            <div style={{ width:110, height:110, borderRadius:'50%', backgroundColor:s.col }} />
          )}
          {s.shape === 'square' && (
            <div style={{ width:110, height:110, backgroundColor:s.col }} />
          )}
          {s.shape === 'triangle' && (
            <svg width={110} height={110} viewBox="0 0 100 100" overflow="visible">
              <polygon points="50,6 97,91 3,91" fill={s.col} />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Scene-only extras — fade in when hovering flip card */}
      {extras.map(e => (
        <motion.div
          key={e.id}
          style={{
            position: 'absolute', top: e.top, left: e.left,
            width: e.w, height: e.h,
            backgroundColor: e.col,
            borderRadius: e.radius,
            pointerEvents: 'none',
          }}
          animate={{ opacity: scene ? e.op : 0 }}
          transition={{ duration: 0.45, delay: scene ? 0.3 : 0 }}
        />
      ))}

    </div>
  )
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function TechStack() {
  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: '100vh' }}>

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="ts-hero-section" style={{ padding: '56px 0 64px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...wrap, width: '100%' }}>
          <div className="ts-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.72fr', gap: '64px', alignItems: 'center' }}>

            {/* Left: text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Label>Open Source · By the collective for the collective</Label>
              </motion.div>

              <h1 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(36px, 4.2vw, 68px)',
                fontWeight: '400', lineHeight: '1.0',
                letterSpacing: '-0.025em', color: TEXT,
                marginBottom: '40px',
              }}>
                {['Open-source tools', 'for the regenerative', 'neighborhood', 'movement.'].map((line, i) => (
                  <span key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.12em', marginBottom: '-0.12em' }}>
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

            {/* Right: floating shape installation + scene on hover */}
            <HeroScene />

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TICKER
      ════════════════════════════════ */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, overflow: 'hidden', padding: '16px 0' }}>
        <div className="ticker-track" style={{ display: 'flex', gap: '64px', width: 'max-content' }}>
          {[...Array(6)].flatMap(() => [
            'People', '○', 'Neighborhoods', '△', 'Resources', '□',
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
                The vision and people are there, but the movement is fragmented. The failure rate
                for community land projects remains high. What&apos;s needed is the shared infrastructure —
                systems for connecting community builders, managing operations, onboarding residents,
                and running governance in a way that actually holds.
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
                  desc: 'Purpose-built for the full lifecycle of regenerative neighborhood development — from first vision to daily operations.',
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

          {/* Tool cards — 3-col grid (5 tools: row 1 = 3, row 2 = 2) */}
          <motion.div
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            className="ts-tools-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}
          >
            {tools.map((tool, i) => {
              const col = i % 3
              const row = Math.floor(i / 3)
              return (
              <motion.div key={tool.name} variants={fadeUp} style={{
                borderRight:  col < 2 ? `1px solid ${BORDER}` : 'none',
                borderBottom: row === 0 ? `1px solid ${BORDER}` : 'none',
                paddingRight: col < 2 ? '48px' : '0',
                paddingLeft:  col > 0 ? '48px' : '0',
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
                    <div className="ts-module-header" style={{
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
                <motion.div variants={fadeUp}><Label>Who&apos;s Building It</Label></motion.div>
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
                  This stack isn&apos;t owned by any one organization. It can be contributed to and
                  used by everyone in the regenerative neighborhood movement — people from all
                  walks of life who believe this way of living matters and are doing something about it.
                </motion.p>
              </div>

              {/* Right: people-type cards */}
              <motion.div variants={stagger} className="ts-collective-types" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                {[
                  { dot: 'var(--green)',  title: 'Vision Holders',    desc: 'Landowners and developers turning land into living communities.' },
                  { dot: 'var(--blue)',   title: 'Community Members',  desc: 'People seeking and building regenerative lives day to day.' },
                  { dot: 'var(--yellow)', title: 'Service Providers',  desc: 'Builders, skilled practitioners, and systems designers who serve neighborhoods.' },
                  { dot: 'var(--pink)',   title: 'Regen Activists',    desc: 'Everyone that believes in a future where everyone has their basic needs met and we live in connection to each other and nature.' },
                ].map((type, i) => {
                  const col = i % 2
                  return (

                    <motion.div key={type.title} variants={fadeUp} style={{
                      borderRight:  col === 0 ? `1px solid ${BORDER}` : 'none',
                      borderBottom: i < 2 ? `1px solid ${BORDER}` : 'none',
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
      <section className="ts-cta-section" style={{ backgroundColor: 'var(--green)', padding: '140px 0' }}>
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
          animation: ticker 70s linear infinite;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }

        /* ── TABLET (max 900px) ── */
        @media (max-width: 900px) {
          /* Grids → single column */
          .ts-hero-grid     { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ts-hero-panels   { display: none !important; }
          .ts-two-col       { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ts-tribes-header { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ts-tools-grid    { grid-template-columns: 1fr !important; }
          .ts-pillars-grid  { grid-template-columns: 1fr !important; gap: 0 !important; }
          .ts-collective-types { grid-template-columns: 1fr !important; }

          /* Modules → 2 col but with stacked header to prevent clipping */
          .ts-modules-grid  { grid-template-columns: 1fr 1fr !important; }
          .ts-module-header { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }

          /* Pillars */
          .ts-pillars-grid > div {
            border-right: none !important;
            padding-left: 0 !important; padding-right: 0 !important;
            border-bottom: 1px solid rgba(237,237,237,0.1) !important;
            padding-top: 32px !important; padding-bottom: 32px !important;
          }
          .ts-pillars-grid > div:first-child { padding-top: 0 !important; }
          .ts-pillars-grid > div:last-child  { border-bottom: none !important; padding-bottom: 0 !important; }

          /* Tools cards */
          .ts-tools-grid > div {
            border-right: none !important; border-bottom: 1px solid rgba(237,237,237,0.1) !important;
            padding-left: 0 !important; padding-right: 0 !important;
            padding-top: 0 !important; padding-bottom: 48px !important;
          }
          .ts-tools-grid > div:last-child { border-bottom: none !important; padding-bottom: 0 !important; }

          /* Collective people types */
          .ts-collective-types > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(237,237,237,0.1) !important;
            padding-left: 0 !important; padding-right: 0 !important;
          }
          .ts-collective-types > div:last-child { border-bottom: none !important; }
        }

        /* ── MOBILE (max 600px) ── */
        @media (max-width: 600px) {
          /* Side padding: 40px → 20px */
          .ts-hero-grid,
          .ts-two-col,
          .ts-tools-grid,
          .ts-pillars-grid,
          .ts-tribes-header,
          .ts-modules-grid,
          .ts-collective-types { padding-left: 0 !important; padding-right: 0 !important; }

          /* Wrap containers — override inline padding */
          section > div, .ts-card-wrap { padding-left: 20px !important; padding-right: 20px !important; }

          /* Section vertical padding */
          section { padding-top: 64px !important; padding-bottom: 64px !important; }

          /* Hero: shorter, tighter */
          .ts-hero-section { padding-top: 40px !important; padding-bottom: 48px !important; min-height: auto !important; }

          /* Modules → 1 column on small phones */
          .ts-modules-grid { grid-template-columns: 1fr !important; }
          .ts-modules-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(237,237,237,0.1) !important;
            padding-left: 0 !important; padding-right: 0 !important;
            padding-top: 24px !important; padding-bottom: 24px !important;
          }
          .ts-modules-grid > div:first-child { padding-top: 0 !important; }
          .ts-modules-grid > div:last-child  { border-bottom: none !important; padding-bottom: 0 !important; }

          /* CTA section */
          .ts-cta-section { padding-top: 80px !important; padding-bottom: 80px !important; }
        }
      `}</style>

    </div>
  )
}
