'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ── Layout constants ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const vp = { once: true, margin: '-80px' as const }

/* ── Pill button ── */
function PillBtn({ href, children, bg, light, outline, external }: {
  href: string; children: React.ReactNode; bg?: string; light?: boolean; outline?: boolean; external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
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

/* ── Section heading ── */
function SectionHeading({ kicker, title, intro, kickerColor = 'var(--blue)' }: {
  kicker: string; title: React.ReactNode; intro?: React.ReactNode; kickerColor?: string
}) {
  return (
    <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '720px' }}>
      <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: kickerColor, marginBottom: '16px' }}>
        {kicker}
      </p>
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 20px', lineHeight: '1.15' }}>
        {title}
      </h2>
      {intro && (
        <p style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.7, margin: 0 }}>
          {intro}
        </p>
      )}
    </motion.div>
  )
}

/* ── Card style ── */
const card: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '16px',
  border: '1px solid var(--border)',
  padding: '32px',
}

/* ── Data ── */

const problems = [
  { stat: '70%', label: 'of millennials cannot afford homes', color: '#f16ab0' },
  { stat: '60%', label: 'of Gen Z experience eco-guilt', color: '#6fc6a2' },
  { stat: '1 in 4', label: 'adults report chronic loneliness', color: '#808aeb' },
  { stat: '50%', label: 'of jobs face automation by 2030', color: '#ffe682' },
]

const tiers = [
  {
    name: 'Pioneer',
    price: '$50K–$100K',
    monthly: 'Equity share',
    desc: 'Full membership, one home site, all amenities. The founding equity tier — voting rights and the deepest commitment.',
    color: '#808aeb',
    light: true,
    shape: '△',
    cap: 'Equity',
  },
  {
    name: 'Founder',
    price: '$150K–$250K',
    monthly: 'Lifetime lease',
    desc: 'Permanent home site, equity share, voting rights. For those who want a long-term home in RegenHood Zero.',
    color: '#f16ab0',
    light: true,
    shape: '○',
    cap: 'Lifetime',
  },
  {
    name: 'Resident',
    price: '$1,500–$3,500',
    monthly: 'Per month · all-in',
    desc: 'Fully furnished room, meals included, full community access. The 13-week onboarding starts here.',
    color: '#ffe682',
    light: false,
    shape: '□',
    cap: 'Monthly',
  },
]

type Module = { name: string; theme: string; color: string; textLight: boolean; group: string }
const modules: Module[] = [
  { name: 'Black',  theme: 'Micro-community',     color: '#1a1a1a', textLight: true,  group: 'Core' },
  { name: 'Brown',  theme: 'Food & gastronomy',   color: '#7a4a2a', textLight: true,  group: 'Core' },
  { name: 'Green',  theme: 'Wellness',            color: '#6fc6a2', textLight: false, group: 'Core' },
  { name: 'Red',    theme: 'Creative forces',     color: '#d04a4a', textLight: true,  group: 'Creative' },
  { name: 'Orange', theme: 'Makers spaces',       color: '#e07a3a', textLight: true,  group: 'Creative' },
  { name: 'Indigo', theme: 'Content & media',     color: '#3a4ab0', textLight: true,  group: 'Creative' },
  { name: 'Pink',   theme: 'Education',           color: '#f16ab0', textLight: true,  group: 'Creative' },
  { name: 'Blue',   theme: 'Entrepreneurship',    color: '#808aeb', textLight: true,  group: 'Specialized' },
  { name: 'Yellow', theme: 'Fitness',             color: '#ffe682', textLight: false, group: 'Specialized' },
  { name: 'Violet', theme: 'Spiritual practice',  color: '#7a4ab0', textLight: true,  group: 'Specialized' },
  { name: 'White',  theme: 'Water temple',        color: '#f4f4f4', textLight: false, group: 'Specialized' },
  { name: 'Silver', theme: 'Deep tech',           color: '#c4c4c8', textLight: false, group: 'Specialized' },
  { name: 'Gold',   theme: 'Cultural heritage',   color: '#d4a14a', textLight: false, group: 'Specialized' },
  { name: 'Wood',   theme: 'Tree houses',         color: '#5a4030', textLight: true,  group: 'Specialized' },
]

const land = [
  { label: 'Wooded conservation',  ha: 5.7, color: '#808aeb' },
  { label: 'Working farm',         ha: 1.2, color: '#6fc6a2' },
  { label: '36 home sites',        ha: 1.5, color: '#f16ab0' },
  { label: 'Animal sanctuary',     ha: 0.8, color: '#d4a14a' },
  { label: 'Common buildings',     ha: 0.6, color: '#363636' },
  { label: 'Solar farm',           ha: 0.4, color: '#ffe682' },
]

const phases = [
  { num: '01', range: 'Year 1',     title: 'Pioneer',    residents: 'Founding team', notes: 'Vision, governance, infrastructure. First food forest plantings. Sanctuary established with starter animals.' },
  { num: '02', range: 'Years 1–2',  title: 'Foundation', residents: '5–10 homes',    notes: 'First residents move in. 13-week onboarding launches. Vocational coop operational. Art residencies begin.' },
  { num: '03', range: 'Years 2–3',  title: 'Growth',     residents: '20–30 residents', notes: 'Food forest production begins. Sanctuary fully operational. Community events, workshops, retreats running.' },
  { num: '04', range: 'Year 4+',    title: 'Harvest',    residents: 'Self-sufficient', notes: 'Surplus food and goods shared beyond the community. Model ready to replicate in new locations.' },
]

const onboarding = [
  'Arrival & Orientation',
  'Land & Systems',
  'Governance & Culture',
  'Personal Space & Home',
  'Animals & Sanctuary',
  'Garden & Permaculture',
  'Kitchen & Food Systems',
  'Economy & Contribution',
  'Art & Creative Practice',
  'Community & Relationships',
  'Skills & Learning',
  'Trial Integration',
  'Graduation & Commitment',
]

const governanceLayers = [
  'Identity & Purpose',
  'Membership',
  'Governance Circles',
  'Economy & Resources',
  'Conflict & Accountability',
  'Operations & Coordination',
  'Evolution',
]

const animals = [
  { count: '🐔', kind: 'Chickens' },
  { count: '🐐', kind: 'Goats' },
  { count: '🦆', kind: 'Ducks' },
  { count: '🐰', kind: 'Rabbits' },
  { count: '🐕', kind: 'Senior dogs' },
  { count: '🐈', kind: 'Cats' },
]

export default function RtrnPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        padding: '140px 0 100px',
        background: 'linear-gradient(180deg, var(--bg) 0%, #e4e4e4 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="rtrn-hero-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div variants={fadeUp}>
              <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(48px, 6.5vw, 88px)', fontWeight: '400', lineHeight: '1.02', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
                RegenHood Zero
              </h1>
              <p style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: '400', fontStyle: 'italic', lineHeight: '1.3', margin: '0 0 28px', opacity: 0.85 }}>
                Regenerative Neighborhood by Regen Tribe
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.7', margin: '0 0 36px', opacity: 0.75, maxWidth: '520px' }}>
                <span style={{ color: 'var(--pink)', marginRight: '4px' }}>*</span>
                Prototype for the future of living. Good for the individual, the collective, and the planet.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <PillBtn href="#apply" bg="var(--text)">Apply to join</PillBtn>
                <PillBtn href="#vision" bg="transparent" light outline>Read the plan</PillBtn>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/regenhoodzero/master-plan.png"
                  alt="Top-down infrastructure map of the Regenerative Tribe Regenerative Neighborhood — 50 hectares of residential, food forest, animal sanctuary, solar farm, common buildings, wetlands, and retreat center."
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                {[
                  { top: '7%',  left: '12%', dot: '#ffe682', text: 'Solar farm' },
                  { top: '7%',  left: '42%', dot: '#363636', text: 'Common buildings' },
                  { top: '24%', left: '78%', dot: '#d4a14a', text: 'Animal sanctuary' },
                  { top: '7%',  left: '96%', dot: '#7a4ab0', text: 'Wooded conservation', anchor: 'right' as const },
                  { top: '52%', left: '60%', dot: '#6fc6a2', text: 'Working farm' },
                  { top: '76%', left: '22%', dot: '#f16ab0', text: '36 homes' },
                  { top: '90%', left: '70%', dot: '#808aeb', text: 'Food forest' },
                ].map((l) => (
                  <div key={l.text}
                    style={{
                      position: 'absolute',
                      top: l.top,
                      left: l.anchor === 'right' ? 'auto' : l.left,
                      right: l.anchor === 'right' ? `calc(100% - ${l.left})` : 'auto',
                      transform: l.anchor === 'right' ? 'translate(0, -50%)' : 'translate(-50%, -50%)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      backgroundColor: 'rgba(252, 248, 238, 0.95)',
                      border: '1px solid rgba(54,54,54,0.15)',
                      borderRadius: '9999px',
                      padding: '5px 11px 5px 8px',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text)',
                      whiteSpace: 'nowrap',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                    }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: l.dot, flexShrink: 0, border: l.dot === '#ffe682' ? '1px solid rgba(54,54,54,0.2)' : 'none' }} />
                    {l.text}
                  </div>
                ))}
              </div>
              <p style={{
                fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text)', opacity: 0.5, margin: '14px 0 0', textAlign: 'center',
              }}>
                Concept render · Tulum, Mexico
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="Why now"
              title={<>The reasons we&apos;re building this.</>}
              intro="Housing is unaffordable. Climate dread is rising. People are lonelier than ever. And work itself is changing fast. RTRN is one answer — built around community, land, and shared infrastructure."
              kickerColor="var(--pink)"
            />
            <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {problems.map((p) => (
                <motion.div key={p.label} variants={fadeUp}
                  style={{ ...card, borderTop: `4px solid ${p.color}`, padding: '36px 28px' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: '500', margin: '0 0 12px', lineHeight: '1', color: p.color }}>
                    {p.stat}
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: '1.55', margin: 0, opacity: 0.8 }}>
                    {p.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VISION / OVERVIEW ── */}
      <section id="vision" className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="The vision"
              title={<>What we&apos;re building for.</>}
            />
            <div className="vision-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { shape: '○', color: '#f16ab0', light: true,  title: 'Good for you',         body: 'Affordable housing, deep community, meaningful work, and a healthier daily rhythm.' },
                { shape: '△', color: '#808aeb', light: true,  title: 'Good for the collective', body: 'Sociocratic governance, shared meals, mutual care, and a 13-week path to belonging.' },
                { shape: '□', color: '#6fc6a2', light: false, title: 'Good for the planet',  body: 'Closed-loop food systems, solar power, restored wetlands, and zero synthetic inputs.' },
              ].map((v) => (
                <motion.div key={v.title} variants={fadeUp}
                  style={{ backgroundColor: v.color, borderRadius: '16px', padding: '40px 32px', color: v.light ? 'white' : '#363636' }}>
                  <div style={{ fontSize: '32px', marginBottom: '20px', opacity: 0.55 }}>{v.shape}</div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '500', margin: '0 0 14px' }}>{v.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.65', margin: 0, opacity: 0.9 }}>{v.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMMON BUILDINGS VISUAL BAND ── */}
      <section style={{ padding: '0', borderBottom: '1px solid var(--border)', overflow: 'hidden', backgroundColor: '#f4f0e8' }}>
        <div className="wrap" style={{ ...wrap, padding: '80px 40px' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="common-band-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '20px' }}>
                The village core
              </p>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: '400', margin: '0 0 20px', lineHeight: '1.2' }}>
                Where everyone shows up.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.7', margin: 0, opacity: 0.75 }}>
                A communal dining hall, art studios with an outdoor sculpture garden, and a living-roof gathering pavilion around a central fire pit. Morning circles. Shared meals. Weekly community meetings. The daily rhythm of the neighborhood.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/regenhoodzero/common-buildings.png"
                  alt="Isometric illustration of the village core: communal dining hall, art studio with sculpture garden, and a thatched gathering pavilion with central fire pit."
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                {[
                  { top: '20%', left: '32%', dot: '#363636', text: 'Dining hall' },
                  { top: '24%', left: '78%', dot: '#f16ab0', text: 'Art studio' },
                  { top: '62%', left: '70%', dot: '#d04a4a', text: 'Gathering pavilion' },
                  { top: '85%', left: '32%', dot: '#6fc6a2', text: 'Raised garden beds' },
                ].map((l) => (
                  <div key={l.text}
                    style={{
                      position: 'absolute',
                      top: l.top,
                      left: l.left,
                      transform: 'translate(-50%, -50%)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      backgroundColor: 'rgba(252, 248, 238, 0.95)',
                      border: '1px solid rgba(54,54,54,0.15)',
                      borderRadius: '9999px',
                      padding: '5px 11px 5px 8px',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text)',
                      whiteSpace: 'nowrap',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                    }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: l.dot, flexShrink: 0 }} />
                    {l.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/regenhoodzero/cutout-homes.png" alt=""
          className="cutout-decor"
          style={{ position: 'absolute', top: '40px', right: '-40px', width: '220px', height: 'auto', opacity: 0.85, pointerEvents: 'none' }}
        />
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="Membership"
              title={<>Three ways to belong.</>}
              intro="36 home sites, three ways in. Whether you&apos;re investing in equity, signing on for life, or coming to live and contribute month-to-month — there&apos;s a path for you."
              kickerColor="var(--green)"
            />
            <div className="tier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {tiers.map((t) => (
                <motion.div key={t.name} variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(54,54,54,0.12)' }}
                  transition={{ duration: 0.2 }}
                  style={{ ...card, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ backgroundColor: t.color, color: t.light ? 'white' : '#363636', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 8px', opacity: 0.8 }}>
                        {t.cap}
                      </p>
                      <h3 style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '500', margin: 0, lineHeight: 1 }}>
                        {t.name}
                      </h3>
                    </div>
                    <div style={{ fontSize: '32px', opacity: 0.45 }}>{t.shape}</div>
                  </div>
                  <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                    <div>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '500', margin: '0 0 4px' }}>
                        {t.price}
                      </p>
                      <p style={{ fontSize: '13px', margin: 0, opacity: 0.65 }}>{t.monthly}</p>
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: '1.65', margin: 0, opacity: 0.75 }}>
                      {t.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 14 COLOR MODULES ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="Spatial organization"
              title={<>Fourteen color modules.</>}
              intro="The neighborhood is organized around thematic zones – each with its own programs, spaces, and revenue streams. Together they form one integrated whole."
              kickerColor="var(--pink)"
            />
            <div className="modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '12px' }}>
              {modules.map((m) => (
                <motion.div key={m.name} variants={fadeUp}
                  whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: m.color,
                    color: m.textLight ? 'white' : '#363636',
                    borderRadius: '14px',
                    padding: '20px 16px',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: m.name === 'White' ? '1px solid var(--border)' : 'none',
                  }}>
                  <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0, opacity: 0.7 }}>
                    {m.group}
                  </p>
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '500', margin: '0 0 4px' }}>
                      {m.name}
                    </p>
                    <p style={{ fontSize: '12px', margin: 0, opacity: 0.85, lineHeight: '1.4' }}>
                      {m.theme}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LAND LAYOUT ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="The land"
              title={<>17 acres, by purpose.</>}
              intro="A working farm and protected wooded conservation, with homes, sanctuary, common buildings, and solar woven through it."
              kickerColor="var(--green)"
            />
            <div className="land-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <motion.div variants={fadeUp}>
                {/* Stacked horizontal bar */}
                <div style={{ display: 'flex', height: '52px', borderRadius: '10px', overflow: 'hidden', marginBottom: '32px' }}>
                  {land.map((l) => (
                    <div key={l.label} title={`${l.label}: ${l.ha} ha`}
                      style={{ flex: l.ha, backgroundColor: l.color }} />
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {land.map((l) => (
                    <div key={l.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '4px', backgroundColor: l.color, flexShrink: 0, border: l.color === '#ffe682' || l.color === '#d4d4d4' ? '1px solid var(--border)' : 'none' }} />
                        <span style={{ fontSize: '15px' }}>{l.label}</span>
                      </div>
                      <span style={{ fontFamily: 'Lora, serif', fontSize: '17px', fontWeight: '500', opacity: 0.75 }}>
                        {l.ha} ha
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ ...card, padding: '40px' }}>
                <p style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(56px, 7vw, 96px)', fontWeight: '400', lineHeight: '1', margin: '0 0 8px' }}>
                  17<span style={{ fontSize: '0.4em', opacity: 0.5, marginLeft: '8px' }}>acres</span>
                </p>
                <p style={{ fontSize: '15px', opacity: 0.65, margin: '0 0 32px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                  Total footprint
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '500', margin: '0 0 4px', color: 'var(--green)' }}>3 ac</p>
                    <p style={{ fontSize: '13px', opacity: 0.7, margin: 0, lineHeight: '1.5' }}>Working farm + food forest</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '500', margin: '0 0 4px', color: 'var(--blue)' }}>14 ac</p>
                    <p style={{ fontSize: '13px', opacity: 0.7, margin: 0, lineHeight: '1.5' }}>Wooded conservation, protected</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '500', margin: '0 0 4px', color: 'var(--pink)' }}>36</p>
                    <p style={{ fontSize: '13px', opacity: 0.7, margin: 0, lineHeight: '1.5' }}>Homes on protected land</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '500', margin: '0 0 4px', color: 'var(--text)' }}>6</p>
                    <p style={{ fontSize: '13px', opacity: 0.7, margin: 0, lineHeight: '1.5' }}>Permaculture zones (0–5)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ANIMAL SANCTUARY & FOOD ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/regenhoodzero/cutout-trees.png" alt=""
          className="cutout-decor"
          style={{ position: 'absolute', top: '60px', right: '-30px', width: '200px', height: 'auto', opacity: 0.85, pointerEvents: 'none' }}
        />
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="Living systems"
              title={<>A working sanctuary.</>}
              intro="Rescue, rehabilitation, and lifelong care. The animals feed us and we care for them — every resident rotates through coop, paddock, and pasture care."
              kickerColor="var(--pink)"
            />
            <div className="animals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', marginBottom: '48px' }}>
              {animals.map((a) => (
                <motion.div key={a.kind} variants={fadeUp}
                  style={{ ...card, padding: '24px 20px', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '36px', fontWeight: '500', margin: '0 0 6px', lineHeight: '1' }}>
                    {a.count}
                  </p>
                  <p style={{ fontSize: '13px', margin: 0, opacity: 0.7 }}>{a.kind}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="food-band"
              style={{ backgroundColor: '#363636', color: 'white', borderRadius: '20px', padding: '48px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '16px' }}>
                  Food systems
                </p>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: '400', margin: '0 0 16px', lineHeight: '1.2' }}>
                  Food we grow ourselves.
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', margin: '0 0 28px', opacity: 0.75 }}>
                  A 3-acre working farm with food forest across six permaculture zones — from the kitchen garden out to the silvopasture and wild foraging. Vermicomposting and animal manure close the nutrient loop. First light harvest in Year 3, full production by Year 4–5.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  {[
                    { n: '3 ac', l: 'Working farm', c: '#6fc6a2' },
                    { n: '6',     l: 'Permaculture zones (0–5)', c: '#f16ab0' },
                    { n: 'Yr 3', l: 'First harvest', c: '#ffe682' },
                    { n: '0',    l: 'Synthetic inputs', c: '#808aeb' },
                  ].map((s) => (
                    <div key={s.l} style={{ borderTop: `3px solid ${s.c}`, paddingTop: '12px' }}>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '500', margin: '0 0 4px', color: s.c }}>{s.n}</p>
                      <p style={{ fontSize: '12px', margin: 0, opacity: 0.7 }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/regenhoodzero/food-forest.png"
                  alt="Top-down detail of the 15-hectare food forest divided into five permaculture zones: kitchen gardens, annual vegetables, small fruits, nut and fruit trees, and silvopasture."
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                {[
                  { top: '78%', left: '24%', dot: '#363636', text: 'Zone 0 · Common buildings' },
                  { top: '83%', left: '60%', dot: '#6fc6a2', text: 'Zone 1 · Kitchen garden' },
                  { top: '50%', left: '36%', dot: '#f16ab0', text: 'Zone 2 · Fruit & berries' },
                  { top: '40%', left: '70%', dot: '#d4a14a', text: 'Zone 3 · Silvopasture' },
                  { top: '20%', left: '50%', dot: '#808aeb', text: 'Zone 4 · Wild foraging' },
                  { top: '8%',  left: '70%', dot: '#7a4ab0', text: 'Zone 5 · Sanctuary' },
                ].map((l) => (
                  <div key={l.text}
                    style={{
                      position: 'absolute',
                      top: l.top,
                      left: l.left,
                      transform: 'translate(-50%, -50%)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      backgroundColor: 'rgba(252, 248, 238, 0.95)',
                      border: '1px solid rgba(54,54,54,0.15)',
                      borderRadius: '9999px',
                      padding: '5px 11px 5px 8px',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text)',
                      whiteSpace: 'nowrap',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                    }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: l.dot, flexShrink: 0, border: l.dot === '#ffe682' ? '1px solid rgba(54,54,54,0.2)' : 'none' }} />
                    {l.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ENERGY & WORK ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="dual-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Energy */}
              <motion.div variants={fadeUp} style={{ ...card, padding: '40px', position: 'relative', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/regenhoodzero/cutout-solar.png" alt=""
                  style={{ position: 'absolute', top: '-20px', right: '-30px', width: '180px', height: 'auto', opacity: 0.85, pointerEvents: 'none', zIndex: 0 }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--yellow-deep)', marginBottom: '16px' }}>
                  Energy infrastructure
                </p>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '28px', fontWeight: '400', margin: '0 0 24px', lineHeight: '1.2' }}>
                  Solar in three phases.
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  {[
                    { phase: 'Phase 1 · Year 1',     kw: '50 kW',   pct: 10 },
                    { phase: 'Phase 2 · Years 2–3',  kw: '200 kW',  pct: 40 },
                    { phase: 'Phase 3 · Year 4+',    kw: '500 kW+', pct: 100 },
                  ].map((p) => (
                    <div key={p.phase}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
                        <span style={{ opacity: 0.7 }}>{p.phase}</span>
                        <span style={{ fontWeight: 600 }}>{p.kw}</span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: 'var(--bg)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${p.pct}%`, height: '100%', backgroundColor: 'var(--yellow-deep)' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, opacity: 0.7 }}>
                  Phase 2 generates an estimated $35K–$50K/year selling surplus to the grid, plus carbon credits and significant savings on community utility bills. Battery storage paired with solar; EV charging stations from solar; integration with food forest cold storage.
                </p>
                </div>
              </motion.div>

              {/* Work */}
              <motion.div variants={fadeUp} style={{ ...card, padding: '40px', backgroundColor: 'var(--blue)', color: 'white', border: 'none' }}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0.85 }}>
                  Work & vocational economy
                </p>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '28px', fontWeight: '400', margin: '0 0 24px', lineHeight: '1.2' }}>
                  How the work gets done.
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px 14px', marginBottom: '24px' }}>
                  {['Community Mgmt', 'Venue Mgmt', 'Space Maintenance', 'Sustainable Systems', 'Kitchen Mgmt', 'Marketing & Outreach', 'Animal Program', 'Art Program'].map((d) => (
                    <div key={d} style={{ fontSize: '14px', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.18)' }}>
                      {d}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, opacity: 0.85 }}>
                  Work-to-earn model. Professional roles (Farm Manager, Animal Program Manager, Permaculture Designer, Veterinary Tech) can be filled by residents for income + equity, or outsourced via turnkey service. The RTRN Vocational Institute teaches the skills.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 13-WEEK ONBOARDING ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="Becoming a member"
              title={<>The 13-week path.</>}
              intro="Every new resident moves through a structured progression – landing in the systems, the people, and the daily practice of the neighborhood."
              kickerColor="var(--blue)"
            />
            <div className="weeks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(13, 1fr)', gap: '8px' }}>
              {onboarding.map((step, i) => (
                <motion.div key={step} variants={fadeUp}
                  whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                  style={{
                    ...card,
                    padding: '18px 14px',
                    minHeight: '160px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: i === 12 ? 'var(--green)' : 'white',
                    color: i === 12 ? 'white' : 'var(--text)',
                    border: i === 12 ? 'none' : '1px solid var(--border)',
                  }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '500', margin: 0, opacity: i === 12 ? 0.85 : 0.4 }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p style={{ fontSize: '12px', lineHeight: '1.4', margin: 0, fontWeight: i === 12 ? 600 : 400 }}>
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="gov-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <motion.div variants={fadeUp}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '16px' }}>
                  Governance
                </p>
                <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '400', margin: '0 0 20px', lineHeight: '1.15' }}>
                  RCOS – a 7-layer sociocracy.
                </h2>
                <p style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.75, margin: '0 0 20px' }}>
                  Decision-making operates across seven interconnected layers. The CLIPS health framework tracks Individual, Community, Intention, Structure, and Practice over time.
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.65', opacity: 0.6, margin: 0 }}>
                  Daily morning circles · communal meals · weekly governance meetings · monthly and annual retreats.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {governanceLayers.map((layer, i) => (
                  <div key={layer} style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    backgroundColor: 'white', borderRadius: '12px',
                    padding: '18px 24px', border: '1px solid var(--border)',
                  }}>
                    <span style={{ fontFamily: 'Lora, serif', fontSize: '20px', fontWeight: '500', color: 'var(--pink)', minWidth: '32px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: '16px' }}>{layer}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ART & RETREAT ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="dual-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <motion.div variants={fadeUp} style={{ ...card, padding: '40px', backgroundColor: 'var(--pink)', color: 'white', border: 'none' }}>
                <div style={{ fontSize: '32px', marginBottom: '20px', opacity: 0.6 }}>○</div>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px', opacity: 0.85 }}>
                  Art & cultural programs
                </p>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '28px', fontWeight: '400', margin: '0 0 20px', lineHeight: '1.2' }}>
                  Four artists in residence – rotating quarterly.
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.65', margin: '0 0 20px', opacity: 0.9 }}>
                  $1,000/month stipend, studios for painting, woodworking, metalwork, textiles, video, and photography. Annual events: Burning Man participation, Harvest Festival, Solstice celebrations, monthly skill fairs.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ ...card, padding: '40px', position: 'relative', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/regenhoodzero/cutout-pond.png" alt=""
                  style={{ position: 'absolute', top: '-10px', right: '-30px', width: '160px', height: 'auto', opacity: 0.85, pointerEvents: 'none', zIndex: 0 }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '12px' }}>
                  Retreat center
                </p>
                <h3 style={{ fontFamily: 'Lora, serif', fontSize: '28px', fontWeight: '400', margin: '0 0 20px', lineHeight: '1.2' }}>
                  3.5-hectare campus for 50 guests.
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.65', margin: '0 0 24px', opacity: 0.75 }}>
                  Cottages, suites, and dorm beds. Annual revenue projection $635K across yoga & wellness, corporate, artist workshops, weddings, and spiritual retreats.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {[
                    { n: '70%', l: 'Peak (Nov–Apr)' },
                    { n: '40%', l: 'Shoulder' },
                    { n: '25%', l: 'Low season' },
                  ].map((s) => (
                    <div key={s.l} style={{ borderTop: '3px solid var(--blue)', paddingTop: '10px' }}>
                      <p style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '500', margin: '0 0 2px' }}>{s.n}</p>
                      <p style={{ fontSize: '12px', margin: 0, opacity: 0.65 }}>{s.l}</p>
                    </div>
                  ))}
                </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DEVELOPMENT TIMELINE ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="Roadmap"
              title={<>How it unfolds.</>}
              intro="From land acquisition to a model others can replicate. Five years, with each phase laying the ground for the next."
              kickerColor="var(--green)"
            />
            <div className="phase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {phases.map((p, i) => {
                const colors = ['#808aeb', '#6fc6a2', '#f16ab0', '#ffe682']
                const light = [true, false, true, false]
                return (
                  <motion.div key={p.num} variants={fadeUp}
                    style={{
                      backgroundColor: colors[i],
                      color: light[i] ? 'white' : '#363636',
                      borderRadius: '16px',
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      minHeight: '260px',
                    }}>
                    <p style={{ fontFamily: 'Lora, serif', fontSize: '40px', fontWeight: '500', margin: 0, opacity: 0.55, lineHeight: '1' }}>
                      {p.num}
                    </p>
                    <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0, opacity: 0.85 }}>
                      {p.range}
                    </p>
                    <h3 style={{ fontFamily: 'Lora, serif', fontSize: '24px', fontWeight: '500', margin: '4px 0 0' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '14px', margin: '0 0 4px', fontWeight: 600, opacity: 0.9 }}>
                      {p.residents}
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.55', margin: 0, opacity: 0.85 }}>
                      {p.notes}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINANCIALS ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <SectionHeading
              kicker="How it sustains itself"
              title={<>The economic model.</>}
              intro="Diversified income — agriculture, retreats, art, education, energy. Cooperative ownership, no single employer. Communal infrastructure reduces every resident's cost of living."
              kickerColor="var(--pink)"
            />
            <div className="fin-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { n: '$50K–$250K', l: 'Membership tiers',  sub: 'Pioneer equity, Founder lease, Resident monthly', c: 'var(--blue)' },
                { n: '$35K–$50K',  l: 'Solar Phase 2',     sub: 'Annual grid revenue at 200 kW',                    c: 'var(--yellow-deep)' },
                { n: '$90K–$130K', l: 'Solar Phase 3',     sub: 'Annual grid revenue at 500 kW+',                   c: 'var(--green)' },
                { n: '6+ streams', l: 'Income diversity',  sub: 'Agriculture, retreats, art, education, energy, carbon credits', c: 'var(--pink)' },
              ].map((f) => (
                <motion.div key={f.l} variants={fadeUp}
                  style={{ ...card, padding: '32px 28px', borderTop: `4px solid ${f.c}` }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: '500', margin: '0 0 8px', lineHeight: '1.1', color: f.c }}>
                    {f.n}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {f.l}
                  </p>
                  <p style={{ fontSize: '13px', lineHeight: '1.55', margin: 0, opacity: 0.65 }}>
                    {f.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── APPLY / CTA ── */}
      <section id="apply" className="sec" style={{ padding: '140px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '20px' }}>
                Application process
              </p>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: '400', margin: '0 0 24px', lineHeight: '1.1', maxWidth: '720px' }}>
                Want to come live with us?
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="apply-steps"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', width: '100%', maxWidth: '1000px', marginBottom: '20px' }}>
              {[
                { n: '1', t: 'Apply online' },
                { n: '2', t: '30-minute coordinator call' },
                { n: '3', t: 'Virtual or in-person tour' },
                { n: '4', t: 'Select membership tier' },
                { n: '5', t: 'Begin 13-week onboarding' },
              ].map((s) => (
                <div key={s.n} style={{
                  ...card, padding: '24px 18px', textAlign: 'center',
                }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '32px', fontWeight: '500', margin: '0 0 8px', color: 'var(--blue)' }}>{s.n}</p>
                  <p style={{ fontSize: '13px', margin: 0, opacity: 0.75, lineHeight: '1.4' }}>{s.t}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <PillBtn href="mailto:hello@regentribe.co?subject=RTRN%20application" external bg="var(--text)">
                Apply to RTRN
              </PillBtn>
              <PillBtn href="/about" bg="var(--green)">
                Meet the collective
              </PillBtn>
            </motion.div>

            <motion.p variants={fadeUp} style={{ fontSize: '13px', opacity: 0.5, margin: '20px 0 0' }}>
              Master Plan v1.0 · Updated April 21, 2026 · hello@regentribe.co
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 1100px) {
          .modules-grid { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
          .weeks-grid { grid-template-columns: repeat(7, minmax(0, 1fr)) !important; }
          .phase-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .animals-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 900px) {
          .rtrn-hero-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 48px !important; }
          .problem-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .vision-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .tier-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .land-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 40px !important; }
          .dual-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .gov-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 32px !important; }
          .fin-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .apply-steps { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .food-band { grid-template-columns: minmax(0, 1fr) !important; gap: 32px !important; }
          .common-band-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 700px) {
          .cutout-decor { display: none !important; }
        }
        @media (max-width: 600px) {
          .modules-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .weeks-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          .animals-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .problem-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .fin-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .apply-steps { grid-template-columns: minmax(0, 1fr) !important; }
          .phase-grid { grid-template-columns: minmax(0, 1fr) !important; }
          .food-band { padding: 32px 24px !important; }
        }
      `}</style>
    </>
  )
}
