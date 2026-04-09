'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

/* ── Layout constants ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const vp = { once: true, margin: '-80px' as const }

/* ── Pill button ── */
function PillBtn({
  href, children, bg, light, external,
}: { href: string; children: React.ReactNode; bg?: string; light?: boolean; external?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: light ? 'var(--text)' : 'white',
    backgroundColor: bg || 'var(--text)',
    borderRadius: '9999px',
    padding: '14px 32px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={2} /></>
  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style}
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
        {inner}
      </motion.a>
    )
  }
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Outline pill button ── */
function OutlinePill({
  href, children, light, external,
}: { href: string; children: React.ReactNode; light?: boolean; external?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: light ? 'white' : 'var(--text)',
    backgroundColor: 'transparent',
    border: `1.5px solid ${light ? 'rgba(255,255,255,0.35)' : 'var(--text)'}`,
    borderRadius: '9999px',
    padding: '12px 32px',
    textDecoration: 'none',
    cursor: 'pointer',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={2} /></>
  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style}
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
        {inner}
      </motion.a>
    )
  }
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Data ── */
const primaryProjects = [
  { name: 'Community Lab X', loc: 'Tulum, Mexico', img: '/images/agency/portfolio/community-lab-x.png', highlight: true },
  { name: 'Ekumal', loc: 'Akumal, Mexico', img: '/images/agency/portfolio/ekumal.png' },
  { name: 'Kuyabeh', loc: 'Tulum, Mexico', img: '/images/agency/portfolio/kuyabeh.png' },
  { name: 'WildSeeds Ranch', loc: 'California, USA', img: '/images/agency/portfolio/wildseeds-ranch.png' },
  { name: 'Ixchel', loc: 'Tulum, Mexico', img: '/images/agency/portfolio/ixchel.png' },
  { name: 'Alpaca Playhouse', loc: 'Austin, TX, USA', img: '/images/agency/portfolio/alpaca-playhouse.jpg' },
  { name: 'Moos Space', loc: 'Berlin, Germany', img: '/images/agency/portfolio/moos-space.png' },
]

const secondaryProjects = [
  { name: 'Green Dream', loc: 'Tulum, Mexico', img: '/images/agency/portfolio/green-dream.png' },
  { name: 'Mothertree', loc: 'Tulum, Mexico', img: '/images/agency/portfolio/mothertree.png' },
  { name: 'Paledora', loc: 'Chemuyli, Mexico', img: '/images/agency/portfolio/paledora.png' },
  { name: 'Hapori Eco-Cohousing', loc: 'San Miguel de Allende, MX', img: '/images/agency/portfolio/hapori.png' },
  { name: 'Vitalia', loc: 'Roatan, Honduras', img: '/images/agency/portfolio/vitalia.png' },
  { name: 'La Reserva', loc: 'Tulum, Mexico', img: '/images/agency/portfolio/la-reserva.png' },
]

const alchemists = [
  'Conscious Coliving', '○', 'OASA', '△', 'WaterNow', '□',
  'Fenix Farms', '○', '5thWorld', '△', 'Regen Alchemists', '□',
]

const cycles = [
  {
    num: '01',
    name: 'understand.',
    desc: 'We assess & understand the current status of your Regenerative Neighborhood using the RN Rubric.',
    bullets: [
      { label: 'Strategy', detail: 'what is your big why?' },
      { label: 'Operations', detail: 'how are you getting it done?' },
      { label: 'Marketing', detail: 'how are you sharing it?' },
    ],
  },
  {
    num: '02',
    name: 'optimize.',
    desc: 'We design & optimize your regenerative neighborhood plan based on the 11 step Community Alchemy Guide ©.',
    bullets: [
      { label: 'Ideation', detail: 'of your vision, recruitment and governance' },
      { label: 'Design', detail: 'of your business models, land stewardship, marketing & funding' },
      { label: 'Building', detail: 'plan for your physical infrastructure & sustainable systems' },
      { label: 'Operation', detail: 'upgrade for your community culture & ecosystem' },
    ],
  },
  {
    num: '03',
    name: 'activate.',
    desc: 'We come to your neighborhood to host an on-site activation through internal and open workshops.',
    bullets: [
      { label: 'Project management', detail: 'structure to keep your project organized' },
      { label: 'Unleash the Alchemists', detail: 'to provide services you need' },
      { label: 'Community Lab', detail: 'pioneer community activation' },
      { label: 'Marketing', detail: 'to capture & share the story of your regenerative neighborhood' },
    ],
  },
]

/* ── Page ── */
export default function Agency() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState<string[]>([])

  function toggleInterest(val: string) {
    setInterests(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire to Supabase newsletter table
    console.log({ name, email, interests })
  }

  return (
    <>
      {/* ════════════════════════════════
          HERO — full-bleed dark photo
      ════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/agency/hero.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.52)' }} />

        <div style={{ ...wrap, position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ maxWidth: '620px' }}
          >
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(52px, 7vw, 108px)',
                fontWeight: '400',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '20px',
              }}
            >
              Grow your neighborhood with us.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'clamp(22px, 2.5vw, 36px)',
                fontWeight: '400',
                color: 'var(--green)',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '28px',
              }}
            >
              Regen Tribe Agency
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '18px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: '1.6',
                marginBottom: '48px',
                maxWidth: '480px',
              }}
            >
              we help you plan, optimize & activate your community land development.
            </motion.p>

            <motion.div variants={fadeUp}>
              <PillBtn href="https://tribesplatform.app/create-community/" bg="var(--blue)" external>
                Assess Your Neighborhood
              </PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          ACCELERATOR — 2-col, photo + content
      ════════════════════════════════ */}
      <section style={{ borderBottom: '1px solid var(--border)', minHeight: '90vh', display: 'flex', alignItems: 'stretch', overflow: 'hidden' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'stretch', width: '100%', padding: '0 40px' }}>
          <div className="agency-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', width: '100%' }}>

            {/* Left: photo — stretches to match text height */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={vp}
              style={{ display: 'flex', alignItems: 'stretch' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/agency/whiteboard.png"
                alt="Regen Tribe team member planning at whiteboard"
                style={{ width: '100%', height: '100%', minHeight: '480px', maxHeight: '680px', objectFit: 'cover', objectPosition: 'center top', borderRadius: '4px', display: 'block' }}
              />
            </motion.div>

            {/* Right: content with dashed bracket frame */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
              style={{ paddingLeft: '8px', paddingTop: '80px', paddingBottom: '80px' }}
            >
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(32px, 3.5vw, 56px)',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  color: 'var(--pink)',
                  marginBottom: '36px',
                }}
              >
                We are a Regenerative Neighborhood Accelerator.
              </motion.h2>

              {[
                'We support projects globally through our end to end consulting from a collective of verified service providers.',
                'Our collective has been researching and empowering community land developments since 2021.',
                'We integrate verified best practices and customize them for your regenerative neighborhood.',
              ].map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  style={{
                    fontSize: '17px',
                    fontWeight: '300',
                    color: 'var(--text-muted)',
                    lineHeight: '1.7',
                    marginBottom: i < 2 ? '20px' : '0',
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          HOW WE DO IT — dark, 3 cycles
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--text)', padding: '120px 0' }}>
        <div style={wrap}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(36px, 4vw, 64px)',
                fontWeight: '400',
                letterSpacing: '-0.025em',
                color: 'white',
                marginBottom: '72px',
              }}
            >
              How we do it
            </motion.h2>

            {/* Cycles */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {cycles.map((cycle, i) => (
                <motion.div
                  key={cycle.num}
                  variants={fadeUp}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1px 1fr',
                    gap: '0',
                    padding: '56px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Cycle label */}
                  <div style={{ paddingRight: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.2)',
                      marginBottom: '8px',
                    }}>
                      cycle {cycle.num}
                    </p>
                    <p style={{
                      fontSize: 'clamp(24px, 2.5vw, 36px)',
                      fontWeight: '400',
                      color: i === 0 ? 'var(--green)' : i === 1 ? 'var(--pink)' : 'var(--blue)',
                      fontFamily: 'var(--font-lora), Georgia, serif',
                      lineHeight: '1.1',
                    }}>
                      {cycle.name}
                    </p>
                  </div>

                  {/* Vertical timeline line */}
                  <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.12)', alignSelf: 'stretch' }} />

                  {/* Cycle content */}
                  <div style={{ paddingLeft: '48px' }}>
                    <p style={{
                      fontSize: '17px',
                      fontWeight: '300',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: '1.65',
                      marginBottom: '28px',
                      maxWidth: '560px',
                    }}>
                      {cycle.desc}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {cycle.bullets.map((b) => (
                        <div key={b.label} style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: i === 0 ? 'var(--green)' : i === 1 ? 'var(--pink)' : 'var(--blue)', flexShrink: 0, marginTop: '7px' }} />
                          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>
                            <strong style={{ fontWeight: '600', color: 'white' }}>{b.label}</strong>
                            {' '}— {b.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp} style={{ paddingTop: '56px' }}>
              {/* SEE THE DETAILED BREAKDOWN — links to pricing subpage (coming soon) */}
              <OutlinePill href="#" light>
                See the Detailed Breakdown
              </OutlinePill>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          PORTFOLIO — 4-col grid
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          {/* Heading with dashed rules */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={vp}
            style={{ marginBottom: '16px' }}
          >
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 60px)',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              color: 'var(--green-deep)',
              fontFamily: 'var(--font-lora), Georgia, serif',
              textAlign: 'center',
            }}>
              Our neighborhood portfolio
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={vp}
            style={{
              textAlign: 'center',
              fontSize: '17px',
              fontWeight: '300',
              color: 'var(--text-muted)',
              marginBottom: '72px',
            }}
          >
            Explore projects we&apos;ve worked with and see how we supported them.
          </motion.p>

          {/* Primary projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
            className="portfolio-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '64px' }}
          >
            {primaryProjects.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '4px', overflow: 'hidden', marginBottom: '14px', backgroundColor: '#c8c5c0' }}>
                  {p.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                  )}
                  {'highlight' in p && p.highlight && (
                    <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'var(--green)', borderRadius: '9999px', padding: '3px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)' }}>
                      Regen Tribe
                    </div>
                  )}
                </div>
                <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'highlight' in p && p.highlight ? 'var(--green-deep)' : 'var(--text)', marginBottom: '4px' }}>
                  {p.name}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>{p.loc}</p>
                <a href="#" style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  + Read More
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary projects — smaller, muted */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
          >
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '24px', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              Also in our network
            </motion.p>
            <div className="portfolio-grid-sm" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
              {secondaryProjects.map((p) => (
                <motion.div key={p.name} variants={fadeUp}>
                  <div style={{ width: '100%', aspectRatio: '4 / 3', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px', backgroundColor: '#d5d2cd' }}>
                    {p.img && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    )}
                  </div>
                  <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>{p.name}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', opacity: 0.6 }}>{p.loc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          COLLECTIVE — dark, photo + copy
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--text)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0' }}>
        <div style={{ ...wrap, width: '100%' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={vp}
            style={{ marginBottom: '64px' }}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 5vw, 80px)',
              fontWeight: '400',
              letterSpacing: '-0.025em',
              color: 'var(--pink)',
            }}>
              We are a collective.
            </h2>
          </motion.div>

          <div className="agency-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

            {/* Left: photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={vp}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '4px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/agency/fenix-farms.png"
                  alt="Fenix Farms — agroforestry team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                {/* Caption overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '3px' }}>FENIX FARMS</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>agroforestry firm & our leading food systems team</p>
                </div>
              </div>
            </motion.div>

            {/* Right: copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
            >
              <motion.h3
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: '400',
                  color: 'white',
                  lineHeight: '1.35',
                  marginBottom: '32px',
                  fontFamily: 'var(--font-lora), Georgia, serif',
                }}
              >
                connect with the network of verified regenerative service providers
              </motion.h3>

              <motion.p
                variants={fadeUp}
                style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}
              >
                Building micro societies is a multi-angle process. It takes everything — from planning and design to building & optimizing the{' '}
                <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: '600' }}>hardware</strong>,{' '}
                <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: '600' }}>software</strong> and{' '}
                <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: '600' }}>humanware</strong>.
              </motion.p>

              <motion.p
                variants={fadeUp}
                style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '48px' }}
              >
                Our core team offers high-level consulting on strategy, business growth, operations, and community building. For specialized projects — like permaculture, renewable energy or water systems — we partner with our curated collective of regenerative service providers, delivering tailored, top-quality solutions for your neighborhood.
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <PillBtn href="/service-providers" bg="var(--pink)">
                  Explore Our Service Providers
                </PillBtn>
                <OutlinePill href="/become-alchemist" light>
                  Become a Regen Alchemist
                </OutlinePill>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          ALCHEMISTS — logo ticker
      ════════════════════════════════ */}
      <div style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '48px 0 32px', overflow: 'hidden' }}>
        <div style={{ ...wrap, marginBottom: '32px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 56px)',
            fontWeight: '400',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            fontFamily: 'var(--font-lora), Georgia, serif',
          }}>
            Regen Alchemists in our ecosystem
          </h2>
        </div>
        <div style={{ overflow: 'hidden', padding: '8px 0' }}>
          <div className="alchemist-track" style={{ display: 'flex', gap: '64px', width: 'max-content', alignItems: 'center' }}>
            {[...Array(4)].flatMap(() => alchemists).map((item, i) => (
              <span key={i} style={{
                fontSize: item.length === 1 ? '16px' : '13px',
                fontWeight: item.length === 1 ? '400' : '600',
                letterSpacing: item.length === 1 ? '0' : '0.1em',
                textTransform: 'uppercase',
                color: item.length === 1 ? 'var(--text-muted)' : 'var(--text)',
                whiteSpace: 'nowrap',
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          OUR WORK TOGETHER
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(40px, 5vw, 80px)',
                fontWeight: '400',
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                marginBottom: '72px',
              }}
            >
              Our work together
            </motion.h2>

            <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {[
                {
                  mode: 'online',
                  desc: 'Digital collaboration with weekly check-ins and workshops.',
                  detail: 'Based on your needs we help you bring your project forward remotely, either as a one-off session or a consistent collaboration with regular meetings.',
                  dot: 'var(--blue)',
                },
                {
                  mode: 'on-site',
                  desc: 'In-person activation of your project by our team.',
                  detail: 'We come on site, observe, learn and help you implement tools for your neighborhood to thrive.',
                  dot: 'var(--green)',
                },
              ].map((item) => (
                <motion.div
                  key={item.mode}
                  variants={fadeUp}
                  style={{
                    backgroundColor: '#d8d5cf',
                    borderRadius: '8px',
                    padding: '48px 44px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.dot }} />
                    <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {item.mode}
                    </p>
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(22px, 2.2vw, 36px)',
                    fontWeight: '400',
                    letterSpacing: '-0.015em',
                    color: 'var(--text)',
                    lineHeight: '1.2',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-lora), Georgia, serif',
                  }}>
                    {item.desc}
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          PARTNER WITH US
      ════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '120px 0', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
        {/* Image: anchored to right edge, fills full section height, bleeds off right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={vp}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/agency/partner-new.png"
            alt="Partnership — handshake and seedling"
            style={{
              height: '75vh',
              width: 'auto',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Left: copy — constrained to left half */}
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '520px' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
            >
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(36px, 4vw, 64px)',
                  fontWeight: '400',
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  marginBottom: '36px',
                  whiteSpace: 'nowrap',
                }}
              >
                partner with us
              </motion.h2>

              {[
                'We are open for long-term partnership with an existing community land project.',
                'We are looking for a place to call home that we can contribute our time and knowledge to everyday in a collaboration with the existing community.',
              ].map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  style={{
                    fontSize: '18px',
                    fontWeight: '300',
                    color: 'var(--text-muted)',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                  }}
                >
                  {p}
                </motion.p>
              ))}

              <motion.div variants={fadeUp} style={{ marginTop: '16px' }}>
                <p style={{ fontSize: '16px', fontWeight: '400', color: 'var(--text)', marginBottom: '20px' }}>
                  Are you looking for partners & neighbors?
                </p>
                <PillBtn href="mailto:grow@regentribe.co" external>
                  Get in Touch
                </PillBtn>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          LET'S CONNECT — dark, newsletter
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--text)', padding: '120px 0' }}>
        <div style={{ ...wrap, maxWidth: '720px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: '400',
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '56px',
                textAlign: 'center',
              }}
            >
              Let&apos;s connect.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '48px',
              }}
            >
              <p style={{
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--green)',
                marginBottom: '28px',
                textAlign: 'center',
              }}>
                Subscribe to our newsletter
              </p>

              <form onSubmit={handleSubscribe}>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  {[
                    { placeholder: 'your name', value: name, setter: setName },
                    { placeholder: 'your email address', value: email, setter: setEmail },
                  ].map((field) => (
                    <input
                      key={field.placeholder}
                      type={field.placeholder.includes('email') ? 'email' : 'text'}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={e => field.setter(e.target.value)}
                      required={field.placeholder.includes('email')}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '15px',
                        fontFamily: 'inherit',
                        outline: 'none',
                      }}
                    />
                  ))}
                </div>

                {/* Interests */}
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', textAlign: 'center' }}>
                  Apart from the general newsletter I want to receive special updates about:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: '32px' }}>
                  {[
                    'Regen Tribe Agency',
                    'Real Estate opportunities',
                    'Agent Program',
                    'land development',
                    'Recruitment',
                    'events invites',
                  ].map((item) => (
                    <label
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.6)',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={interests.includes(item)}
                        onChange={() => toggleInterest(item)}
                        style={{ accentColor: 'var(--green)', width: '15px', height: '15px', cursor: 'pointer' }}
                      />
                      {item}
                    </label>
                  ))}
                </div>

                {/* Submit */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 40px',
                      backgroundColor: 'var(--green)',
                      color: 'var(--text)',
                      border: 'none',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        .alchemist-track {
          animation: ticker 28s linear infinite;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @media (max-width: 900px) {
          .agency-2col     { grid-template-columns: 1fr !important; }
          .portfolio-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .portfolio-grid-sm { grid-template-columns: repeat(3, 1fr) !important; }
          .work-grid       { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .portfolio-grid  { grid-template-columns: 1fr !important; }
          .portfolio-grid-sm { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
