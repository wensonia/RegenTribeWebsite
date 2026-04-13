'use client'

import { useState, useEffect, useRef } from 'react'
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
        fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase' as const,
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
      opacity: 0.5,
    }}>
      {status}
    </span>
  )
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

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
    demoLink:  'https://rn-wizard.vercel.app/',
    demoLabel: 'Test v1',
  },
  {
    dot:      'var(--blue)',
    symbol:   '△',
    name:     'Regen Knowledge Graph',
    tagline:  'AI Brain & Semantic Layer',
    desc:     'Visual representation of resources collected during the Regenerative Neighborhood Framework Design Labs. Transforms any document into a typed, traversable knowledge graph using LLM extraction, vector embeddings, and epistemic truth values — ingesting community docs, extracting concepts and relationships, and enabling semantic search across the entire RegenTribes knowledge base.',
    skills:   [],
    status:   'Active',
    builders:     'Ian Tairea · Vitali Bohush',
    contributors: 'collective',
    github:   'https://github.com/regentribes/regen-knowledge-graph',
    repo:     'regen-knowledge-graph',
    demoLink:  'https://graph.regentribe.org/graph-chain-stories.html',
    demoLabel: 'Play around',
  },
  {
    dot:      'var(--green)',
    symbol:   '○',
    name:     'Genesis',
    tagline:  'Community AI Agent',
    desc:     'An AI agent living inside the Regen Tribe Telegram. Guides vision holders through the Community Alchemy Guide, captures ideas and turns them into development specs, answers knowledge queries using a live semantic knowledge graph, and archives community conversations for future retrieval.',
    skills:   ['alchemy', 'dreamcatcher', 'genesis-brain', 'telegram-history', 'deep-research'],
    status:   'Active',
    builders:     'Ian Tairea · Vitali Bohush',
    contributors: 'collective',
    github:   'https://github.com/regentribes/genesis-zero-bot',
    repo:     'genesis-zero-bot',
    demoLink:  'https://t.me/+fsFL1jIIGM9jOWFh',
    demoLabel: 'Test out Genesis',
  },
  {
    dot:      'var(--yellow)',
    symbol:   '□',
    name:     'Regen Vision',
    tagline:  '3D Knowledge Visualization',
    desc:     'Interactive 3D force-directed graph visualizations of RegenTribes knowledge structures. Makes the invisible visible — surfacing the ideas, people, and connections that form the regenerative ecosystem as an explorable, living graph.',
    skills:   [],
    status:   'In Development',
    builders:     'Vitali Bohush',
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
    builders:     'Vic D. · Vitali Bohush',
    contributors: '',
    github:   'https://github.com/regentribes/mythogen-ame',
    repo:     'mythogen-ame',
  },
]


const modulesV2 = [
  { id: '01', name: 'Community Network',      purpose: 'Profile-based discovery for the key archetypes of the Regenerative Neighborhood movement — community members, vision holders, service providers, and resource holders of land and funding.',                       status: 'Building', color: 'var(--green)'  },
  { id: '02', name: 'Neighborhood Directory', purpose: 'Explore regenerative neighborhoods on a live map. See posts, milestones, and updates from communities. Check in as a visitor, leave a guest book entry, browse community events.',                                 status: 'Building', color: 'var(--green)'  },
  { id: '03', name: 'Resources & Tools',      purpose: 'A curated, community-powered archive of regenerative resources — articles, tools, case studies, guides, and templates. Searchable and filterable, continuously growing.',                                          status: 'Building', color: 'var(--green)'  },
  { id: '04', name: 'Blueprint',              purpose: 'The Regenerative Neighborhood Wizard — a guided design framework and journey to create a thorough plan and project management schedule for your Regenerative Neighborhood.',                                        status: 'Building', color: 'var(--green)'  },
  { id: '05', name: 'Join',                   purpose: 'Applications and full onboarding flow — from initial inquiry to welcome. Manages screening, orientation, and everything in between.',                                                                              status: 'Building', color: 'var(--green)'  },
  { id: '06', name: 'Agreements',             purpose: 'Digital agreements and payment rails for community participation. Sign living agreements, set up recurring contributions, and manage financial commitments transparently via Stripe.',                              status: 'Planned',  color: 'var(--blue)'   },
  { id: '07', name: 'Operations',             purpose: 'Internal operations for community teams — project boards, task assignment, budget tracking, and reporting. Everything a neighborhood needs to function as a living, self-organizing system.',                      status: 'Planned',  color: 'var(--blue)'   },
  { id: '08', name: 'Community Glue',         purpose: 'AI-powered pairing of people to communities, collaborators to projects, and skills to needs. The intelligence layer that puts the right people in the right places at the right time.',                           status: 'Building', color: 'var(--green)'  },
  { id: '09', name: 'Governance',             purpose: 'An AI-facilitated governance layer for community decision-making. Mediates conflicts, surfaces proposals, and guides neighborhoods through transparent, values-aligned decisions.',                                 status: 'Planned',  color: 'var(--blue)'   },
  { id: '10', name: 'Contribution Tracking',  purpose: 'Contribution tracking, reputation points, and badges that recognize participation across the ecosystem. Makes regenerative action visible, rewarding, and portable across communities.',                          status: 'Planned',  color: 'var(--blue)'   },
  { id: '11', name: 'AI Personal Assistant',  purpose: 'Your personal AI guide through the Regen Tribe ecosystem. Answers questions, surfaces opportunities, tracks your journey, and helps you navigate toward the life you are building.',                               status: 'Planned',  color: 'var(--pink)'   },
  { id: '12', name: 'Hive',                   purpose: 'The inter-community layer — connecting individual neighborhoods into a living network. Share resources, knowledge, surplus, and people across the full ecosystem of regenerative communities.',                     status: 'Planned',  color: 'var(--blue)'   },
]

/* ─────────────────────────────────────────
   Flip card (state controlled by parent)
───────────────────────────────────────── */
function FlipCard({ flipped }: { flipped: boolean }) {
  return (
    <div style={{ perspective: '900px' }}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
        style={{ width: 220, height: 220, position: 'relative', transformStyle: 'preserve-3d' }}
      >
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          backgroundColor: 'var(--yellow)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '24px', textAlign: 'center', gap: '12px',
        }}>
          <span style={{ fontSize: '26px', lineHeight: 1, color: 'rgba(40,42,41,0.35)' }}>○</span>
          <p style={{ fontSize: '13px', fontWeight: '600', lineHeight: 1.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(40,42,41,0.65)' }}>
            What is a regenerative neighborhood?
          </p>
        </div>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)', backgroundColor: 'var(--yellow)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '22px', overflow: 'hidden',
        }}>
          <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.14em', textTransform: 'uppercase', color: BG, marginBottom: '10px' }}>/noun/</p>
          <p style={{ fontSize: '13px', fontWeight: '500', color: BG, lineHeight: 1.6 }}>
            Wellness real estate with resilient systems for water, food, shelter, energy,
            waste management, nature & human connection.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Individual floating shape
   CSS handles the float loop — Framer Motion only handles scene transitions.
   This avoids the glitch caused by interrupting repeat:Infinity animations.
───────────────────────────────────────── */
function FloatShape({ shape, color, size, ix, iy, sdx, sdy, sscale, sopacity, floatCls, scene }: {
  shape: string; color: string; size: number
  ix: number; iy: number; sdx: number; sdy: number
  sscale: number; sopacity: number; floatCls: string; scene: boolean
}) {
  const [floating, setFloating] = useState(false)
  const mounted = useRef(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    if (!mounted.current) {
      // first mount: start CSS float after a short delay
      mounted.current = true
      t = setTimeout(() => setFloating(true), 350)
    } else if (scene) {
      // entering scene: stop CSS float (deferred to avoid sync setState in effect)
      t = setTimeout(() => setFloating(false), 0)
    } else {
      // returning from scene: wait for Framer Motion transition to finish, then re-float
      t = setTimeout(() => setFloating(true), 680)
    }
    return () => clearTimeout(t)
  }, [scene])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: scene ? sopacity : 1, scale: scene ? sscale : 1, x: scene ? sdx : 0, y: scene ? sdy : 0 }}
      transition={{
        opacity: { duration: 0.5 },
        scale:   { duration: 0.6,  ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
        x:       { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
        y:       { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
      }}
      style={{ position: 'absolute', top: iy, left: ix, transformOrigin: '50% 50%' }}
    >
      {/* Inner div carries CSS float — separate from Framer Motion transforms above */}
      <div className={floating && !scene ? floatCls : ''}>
        {shape === 'circle'   && <div style={{ width: size, height: size, borderRadius: '50%', backgroundColor: color }} />}
        {shape === 'square'   && <div style={{ width: size, height: size, backgroundColor: color }} />}
        {shape === 'triangle' && (
          <svg width={size} height={size} viewBox="0 0 100 100" overflow="visible">
            <polygon points="50,6 97,91 3,91" fill={color} />
          </svg>
        )}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Hero scene — shapes float freely, hover reveals neighborhood
───────────────────────────────────────── */
function HeroScene() {
  const [hovered, setHovered] = useState(false)

  // idle (ix, iy) → scene (ix+sdx, iy+sdy) at sscale/sopacity
  // Scene layout: house (green sq + blue triangle) | tree (yellow circle) | 2 people (pink + blue circles)
  const shapes: Array<{
    id: string; shape: string; color: string; size: number
    ix: number; iy: number; sdx: number; sdy: number
    sscale: number; sopacity: number; floatCls: string
  }> = [
    // All scene bottoms aligned to y=540 (CTA level). Working backwards from bottom=540.
    // sq1 (house walls): size=130, scene top=410 → bottom=540. sdy=410-18=392
    // tr1 (roof): scaled size≈149, scene top=261 so bottom touches house top=410. sdy=261-8=253
    // ci1 (tree canopy): size=110, scene top=360 so bottom=470 = trunk top. sdy=360-250=110
    // ci2 (person1 head): scaled size≈52, body top=472, head top=420. sdy=420-248=172
    // ci3 (person2 head): scaled size≈52, body top=472, head top=420. sdy=420-16=404
    { id:'sq1', shape:'square',   color:'var(--green)',  size:130, ix:14,  iy:18,  sdx:100,  sdy:392, sscale:1,    sopacity:1, floatCls:'hero-fl-a' },
    { id:'tr1', shape:'triangle', color:'var(--blue)',   size:130, ix:288, iy:8,   sdx:-184, sdy:253, sscale:1.15, sopacity:1, floatCls:'hero-fl-b' },
    { id:'ci1', shape:'circle',   color:'var(--yellow)', size:110, ix:10,  iy:250, sdx:2,    sdy:110, sscale:1,    sopacity:1, floatCls:'hero-fl-c' },
    { id:'ci2', shape:'circle',   color:'var(--pink)',   size:100, ix:284, iy:248, sdx:-10,  sdy:172, sscale:0.52, sopacity:1, floatCls:'hero-fl-d' },
    { id:'ci3', shape:'circle',   color:'var(--blue)',   size:80,  ix:162, iy:16,  sdx:152,  sdy:404, sscale:0.65, sopacity:1, floatCls:'hero-fl-e' },
    { id:'tr2', shape:'triangle', color:'var(--green)',  size:80,  ix:182, iy:360, sdx:0,    sdy:0,   sscale:1,    sopacity:0, floatCls:'hero-fl-f' },
  ]

  // Scene-only details — all bottoms at y=540
  // trunk: top=470, h=70 → bottom=540
  // door: top=488, h=52 → bottom=540
  // p1b/p2b: top=472, h=68 → bottom=540
  const extras: Array<{ id: string; top: number; left: number; w: number; h: number; col: string; r: number; op: number }> = [
    { id:'trunk', top:470, left:55,  w:22, h:70, col:'var(--green)',        r:2, op:0.82 },
    { id:'door',  top:488, left:160, w:28, h:52, col:'rgba(40,42,41,0.45)', r:0, op:1    },
    { id:'p1b',   top:472, left:276, w:26, h:68, col:'var(--pink)',          r:3, op:0.85 },
    { id:'p2b',   top:472, left:318, w:26, h:68, col:'var(--blue)',          r:3, op:0.85 },
  ]

  return (
    <div className="ts-hero-panels" style={{ position: 'relative', height: '590px' }}>

      {/* Hover zone sized to idle card (~110px effective) */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position: 'absolute', top: 82, left: 92, width: 130, height: 130, zIndex: 10, cursor: 'pointer' }}
      />

      {/* Flip card: small idle (scale 0.5 ≈ 110px) → full size on hover (220px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], opacity: { duration: 0.6, delay: 0.5 } }}
        style={{ position: 'absolute', top: 90, left: 100, zIndex: 5, pointerEvents: 'none', transformOrigin: 'top left' }}
      >
        <FlipCard flipped={hovered} />
      </motion.div>

      {shapes.map(s => <FloatShape key={s.id} {...s} scene={hovered} />)}

      {extras.map(e => (
        <motion.div
          key={e.id}
          animate={{ opacity: hovered ? e.op : 0 }}
          transition={{ duration: 0.5, delay: hovered ? 0.28 : 0.05 }}
          style={{ position: 'absolute', top: e.top, left: e.left, width: e.w, height: e.h, backgroundColor: e.col, borderRadius: e.r, pointerEvents: 'none' }}
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
      <section className="sec" style={{ padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="wrap" style={wrap}>
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
      <section className="sec" style={{ padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="wrap" style={wrap}>

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

          {/* Tool cards — 3-col floating grid */}
          <motion.div
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            className="ts-tools-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
          >
            {tools.map((tool) => (
              <motion.div key={tool.name} variants={fadeUp} style={{
                backgroundColor: '#323432',
                border: `1px solid rgba(237,237,237,0.07)`,
                borderRadius: '10px',
                padding: '36px',
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
                    fontSize: '13px', fontWeight: '600', letterSpacing: '0.04em',
                    color: tool.dot, textDecoration: 'none',
                    borderTop: `1px solid rgba(237,237,237,0.07)`,
                    paddingTop: '20px', marginTop: 'auto',
                  }}
                  whileHover={{ x: 5, opacity: 0.8 }} transition={{ duration: 0.15 }}
                >
                  <ArrowRight size={13} strokeWidth={2} />
                  github/{tool.repo}
                </motion.a>

                {/* Demo link (optional) */}
                {'demoLink' in tool && tool.demoLink && (
                  <motion.a
                    href={tool.demoLink} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      fontSize: '13px', fontWeight: '600', letterSpacing: '0.04em',
                      color: TEXT, textDecoration: 'none',
                      borderTop: `1px solid rgba(237,237,237,0.07)`,
                      paddingTop: '16px', marginTop: '8px',
                    }}
                    whileHover={{ x: 5, opacity: 0.8 }} transition={{ duration: 0.15 }}
                  >
                    <ArrowRight size={13} strokeWidth={2} />
                    {tool.demoLabel}
                  </motion.a>
                )}

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          TRIBES PLATFORM
      ════════════════════════════════ */}
      <section className="sec" style={{ backgroundColor: BG_CARD, padding: '120px 0' }}>
        <div className="wrap" style={wrap}>

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

        </div>
      </section>

      {/* ════════════════════════════════
          MYCONET MODULE ROADMAP
      ════════════════════════════════ */}
      <section className="sec" style={{ backgroundColor: BG, padding: '120px 0', borderTop: `1px solid ${BORDER}` }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            {/* Header */}
            <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
              <Label>Myconet · In Development</Label>
            </motion.div>
            <motion.div variants={fadeUp} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              borderBottom: `1px solid ${BORDER}`, paddingBottom: '48px', marginBottom: '64px',
              flexWrap: 'wrap', gap: '40px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(36px, 4.5vw, 72px)',
                fontWeight: '400', lineHeight: '0.95',
                letterSpacing: '-0.025em', color: TEXT,
              }}>
                Myconet.
              </h2>
              <p style={{
                fontSize: '18px', fontWeight: '300', color: MUTED,
                lineHeight: '1.75', maxWidth: '520px',
              }}>
                A modular internet and intranet stack for regenerative neighborhoods —
                currently in development. Each module can be used independently or
                as part of the full connected network, giving neighborhoods the digital
                infrastructure they need to form, grow, and thrive.
              </p>
            </motion.div>

            {/* Module grid — 4 columns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="ts-modules-grid">
              {modulesV2.map((mod, i) => {
                const totalCols = 4
                const col = i % totalCols
                const totalRows = Math.ceil(modulesV2.length / totalCols)
                const row = Math.floor(i / totalCols)
                const isBuilding = mod.status === 'Building'
                return (
                  <motion.div key={mod.id} variants={fadeUp} style={{
                    borderRight:  col < totalCols - 1 ? `1px solid ${BORDER}` : 'none',
                    borderBottom: row < totalRows - 1 ? `1px solid ${BORDER}` : 'none',
                    padding: '32px 0',
                    paddingLeft:  col > 0 ? '28px' : '0',
                    paddingRight: col < totalCols - 1 ? '28px' : '0',
                    opacity: isBuilding ? 1 : 0.55,
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
      <section className="sec" style={{ padding: '120px 0', borderBottom: `1px solid ${BORDER}` }}>
        <div className="wrap" style={wrap}>
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
        <div className="wrap" style={wrap}>
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
        /* Hero shape float — CSS only, no Framer Motion conflict */
        @keyframes hero-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-17px); } }
        .hero-fl-a { animation: hero-float 5.2s ease-in-out 0.0s infinite; }
        .hero-fl-b { animation: hero-float 6.0s ease-in-out 0.7s infinite; }
        .hero-fl-c { animation: hero-float 4.8s ease-in-out 0.4s infinite; }
        .hero-fl-d { animation: hero-float 5.8s ease-in-out 1.1s infinite; }
        .hero-fl-e { animation: hero-float 5.5s ease-in-out 0.3s infinite; }
        .hero-fl-f { animation: hero-float 4.2s ease-in-out 0.9s infinite; }

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

          /* Tool cards — stack to 1-col, keep card box */
          .ts-tools-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .ts-tools-grid > div { padding: 28px !important; }

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
