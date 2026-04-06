'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

/* ── Text link CTA ── */
function TextLink({
  href, children, light, external,
}: { href: string; children: React.ReactNode; light?: boolean; external?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '17px',
    fontWeight: '400',
    color: light ? 'white' : 'var(--text)',
    textDecoration: 'none',
    letterSpacing: '0.01em',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={1.5} /></>
  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style}
        whileHover={{ x: 5 }} transition={{ duration: 0.15 }}>
        {inner}
      </motion.a>
    )
  }
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Pill button ── */
function PillBtn({
  href, children, light, external,
}: { href: string; children: React.ReactNode; light?: boolean; external?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    color: light ? 'var(--text)' : 'white',
    backgroundColor: light ? 'white' : 'var(--text)',
    border: 'none',
    borderRadius: '9999px',
    padding: '14px 32px',
    textDecoration: 'none',
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
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Label ── */
function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.45)' : 'var(--text-muted)',
      marginBottom: '28px',
    }}>
      {children}
    </p>
  )
}

/* ── Data ── */
const timeline = [
  { year: '2021', title: 'Community Becomes the Goal', desc: 'First eco-hotel-to-regenerative neighborhood consultation. Raised $150K for renewable energy. Moved to Tulum to launch the Regen Tribe Incubator house.' },
  { year: '2022', title: 'Growing the Network', desc: 'Regen Tribe Incubator houses in Tulum. Identified 200+ neighborhoods worldwide. Launched Regen Tribe Discord. Developed v1 guide for regenerative neighborhood development.' },
  { year: '2023', title: 'Building the Ecosystem', desc: 'Vitalia Longevity Startup City. First Agent Program. Tribes v1. Community Lab 1 in Ixchel, Mexico. D.pact Istanbul, Free Cities Conference.' },
  { year: '2024', title: 'On-Site at Communities', desc: 'Active at WildSeeds, Community Lab X, and Network School Pop-up City. AI-powered co-living tools developed in Malaysia.' },
  { year: '2025', title: 'Digital Tools & Alliance', desc: 'Launching AI integrations and digital tools. Regenerative Neighborhood Alliance kick-off. First permanent Regen Tribe location at Aldea Kuyabeh.' },
  { year: '2030', title: 'Kuyabeh Collective Spaces', desc: '10-flower regenerative neighborhood at Kuyabeh completes its collective spaces, establishing a vibrant hub near Tulum.' },
  { year: '2040', title: 'Dozens of Regenerative Neighborhoods Globally', desc: 'Kuyabeh, The Ark, Alpaca, Wild Seeds, and key European & Asian sites reach 5% of global population.' },
  { year: '2100', title: 'Regenerative Neighborhoods Everywhere', desc: 'A global network of 53M+ communities. 80% of the world population with access to a regenerative neighborhood.' },
]

const projects = [
  { name: 'Aldea Kuyabeh', loc: 'Tulum, Mexico', tag: 'Land Development', dot: 'var(--green)', desc: '365-hectare regenerative micro-city outside Tulum. 10-flower neighborhood model, construction begins 2027.' },
  { name: 'The Ark', loc: 'Costa Rica', tag: 'Alliance Partner', dot: 'var(--pink)', desc: 'Micro regenerative neighborhoods in the rainforest, focusing on ecological balance and resilient living systems.' },
  { name: 'WildSeeds Collective', loc: 'California, USA', tag: 'Agency Support', dot: 'var(--blue)', desc: 'Implementing team management systems, wikis, and community agreements for an evolving urban collective.' },
  { name: 'Community Lab X', loc: 'Tulum, Mexico', tag: 'Incubator Hub', dot: 'var(--yellow-deep)', desc: 'Transforming a retreat center into a thriving community hub with activated sustainable systems and programs.' },
]

/* ── Hero visual panels ── */
const heroPanels = [
  { color: 'var(--green)', label: 'Tribes Platform', symbol: '○' },
  { color: 'var(--pink)', label: 'Agency', symbol: '△' },
  { color: 'var(--yellow)', label: 'Education', symbol: '□' },
  { color: 'var(--blue)', label: 'Community', symbol: '○' },
]

/* ── Page ── */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════
          HERO — two-column, massive type
      ════════════════════════════════ */}
      <section style={{ padding: '80px 0 96px', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...wrap, width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.72fr', gap: '64px', alignItems: 'center' }}>

            {/* Left: text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Label>Regenerative Neighborhood Accelerator</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(64px, 8.5vw, 120px)',
                  fontWeight: '400',
                  lineHeight: '0.92',
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  marginBottom: '56px',
                }}
              >
                Create, grow &amp; find your community.
              </motion.h1>

              <motion.div
                variants={fadeUp}
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '40px',
                  display: 'flex',
                  gap: '48px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <TextLink href="/join">Join the Movement</TextLink>
                <TextLink href="https://tribesplatform.app" external>Explore Tribes Platform</TextLink>
              </motion.div>
            </motion.div>

            {/* Right: color panel grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="hero-panels"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
            >
              {heroPanels.map((panel) => (
                <motion.div
                  key={panel.label}
                  variants={fadeUp}
                  style={{
                    backgroundColor: panel.color,
                    borderRadius: '6px',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <span style={{
                    fontSize: '44px',
                    lineHeight: 1,
                    color: 'var(--text)',
                    opacity: 0.45,
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    fontWeight: '400',
                  }}>
                    {panel.symbol}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                  }}>
                    {panel.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TICKER STRIP
      ════════════════════════════════ */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', padding: '16px 0' }}>
        <div className="ticker-track" style={{ display: 'flex', gap: '64px', width: 'max-content' }}>
          {[...Array(3)].flatMap(() => [
            'Tribes Platform', '○', 'Regen Tribe Agency', '△', 'Education', '□',
            'Regenerative Neighborhoods', '○', 'Global Movement', '△', 'Circular Economy', '□',
          ]).map((item, i) => (
            <span key={i} style={{
              fontSize: '13px',
              fontWeight: item.length === 1 ? '400' : '500',
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

      {/* ════════════════════════════════
          ABOUT — 2-column editorial
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

            {/* Left: big heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={vp}
              style={{
                fontSize: 'clamp(44px, 5.5vw, 88px)',
                fontWeight: '400',
                lineHeight: '0.95',
                letterSpacing: '-0.025em',
                color: 'var(--text)',
              }}
            >
              Re-developing society through regenerative neighborhoods.
            </motion.h2>

            {/* Right: body + why/how/what */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
            >
              <motion.p
                variants={fadeUp}
                style={{ fontSize: '20px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '48px' }}
              >
                We focus on meeting core human needs — air, water, food, shelter, energy, connection — through regenerative circular systems with net positive impact on people and planet.
              </motion.p>

              <motion.div
                variants={fadeUp}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  borderTop: '1px solid var(--border)',
                  marginBottom: '40px',
                }}
              >
                {[
                  { tag: 'Why', dot: 'var(--pink)', text: 'Improve life for humanity while healing our planet.' },
                  { tag: 'How', dot: 'var(--yellow-deep)', text: 'Real estate, intentional community, circular economy.' },
                  { tag: 'What', dot: 'var(--blue)', text: 'A platform, a global alliance, and real-world projects.' },
                ].map((item, i) => (
                  <div
                    key={item.tag}
                    style={{
                      padding: '24px 20px 24px 0',
                      borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                      paddingLeft: i > 0 ? '20px' : '0',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: item.dot, flexShrink: 0 }} />
                      <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        {item.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: '15px', fontWeight: '400', color: 'var(--text)', lineHeight: '1.5', fontFamily: 'var(--font-lora), Georgia, serif' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginTop: '8px' }}>
                <TextLink href="/about">About Regen Tribe</TextLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PROJECTS — yellow full-bleed
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--yellow)', padding: '120px 0' }}>
        <div style={wrap}>
          {/* Header row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderBottom: '1px solid rgba(54,54,54,0.2)',
              paddingBottom: '40px',
              marginBottom: '72px',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <motion.div variants={fadeUp}>
              <Label>Active Collaborations</Label>
              <h2 style={{
                fontSize: 'clamp(48px, 6vw, 96px)',
                fontWeight: '400',
                lineHeight: '0.92',
                letterSpacing: '-0.025em',
                color: 'var(--text)',
              }}>
                Projects<br />in Motion
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <TextLink href="/projects">See all projects</TextLink>
            </motion.div>
          </motion.div>

          {/* Project cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                style={{
                  borderRight: i < projects.length - 1 ? '1px solid rgba(54,54,54,0.2)' : 'none',
                  paddingRight: i < projects.length - 1 ? '32px' : '0',
                  paddingLeft: i > 0 ? '32px' : '0',
                }}
              >
                {/* Color bar */}
                <div style={{ width: '32px', height: '3px', backgroundColor: p.dot, marginBottom: '24px', borderRadius: '2px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', opacity: 0.5 }}>
                    {p.tag}
                  </span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: '400',
                  lineHeight: '1.15',
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-lora), Georgia, serif',
                }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text)', opacity: 0.45, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  {p.loc}
                </p>
                <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--text)', lineHeight: '1.65', opacity: 0.7 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          TRIBES PLATFORM — dark full-bleed
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--text)', padding: '120px 0' }}>
        <div style={wrap}>
          <div className="platform-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'start' }}>

            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
              <motion.div variants={fadeUp}>
                <Label light>The Platform</Label>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(48px, 6vw, 96px)',
                  fontWeight: '400',
                  lineHeight: '0.92',
                  letterSpacing: '-0.025em',
                  color: 'white',
                  marginBottom: '32px',
                }}
              >
                Tribes<br />Platform
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: '20px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65', marginBottom: '48px', maxWidth: '380px' }}
              >
                The people, neighborhoods &amp; solutions of the Regenerative Neighborhood
                Movement — all in one digital ecosystem.
              </motion.p>
              <motion.div variants={fadeUp}>
                <TextLink href="https://tribesplatform.app" external light>Visit tribesplatform.app</TextLink>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
              {[
                { num: '01', sub: 'The Movement', title: 'Global Network', desc: 'Connect with community creators, service providers, and resource holders building regenerative neighborhoods worldwide.', dot: 'var(--green)' },
                { num: '02', sub: 'The Catalyzer', title: 'Education & Tools', desc: 'Access the 11-step Alchemy Guide, resource database, Agent Program vocational training, and assessment rubrics.', dot: 'var(--yellow)' },
                { num: '03', sub: 'Regen Tribe Agency', title: 'Direct Support', desc: 'Hands-on consulting from our core team, or self-guided tools to plan and build your own regenerative neighborhood.', dot: 'var(--pink)' },
              ].map((p, i) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.12)',
                    padding: '32px 0',
                    display: 'flex',
                    gap: '20px',
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: '500', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em', marginTop: '4px', flexShrink: 0, width: '24px' }}>
                    {p.num}
                  </span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: p.dot, flexShrink: 0 }} />
                      <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                        {p.sub}
                      </p>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: '400', color: 'white', marginBottom: '10px', fontFamily: 'var(--font-lora), Georgia, serif' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '15px', fontWeight: '300', color: 'rgba(255,255,255,0.45)', lineHeight: '1.65' }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TIMELINE — light bg
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '80px', alignItems: 'start' }}>

            {/* Sticky left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
              style={{ position: 'sticky', top: '100px' }}
            >
              <motion.div variants={fadeUp}><Label>The Journey</Label></motion.div>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(48px, 5vw, 80px)',
                  fontWeight: '400',
                  lineHeight: '0.95',
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  marginBottom: '28px',
                }}
              >
                2021<br />→<br />2100
              </motion.h2>
              <motion.p
                variants={fadeUp}
                style={{ fontSize: '16px', fontWeight: '300', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '40px', maxWidth: '220px' }}
              >
                From a Tulum incubator house to a planet of regenerative neighborhoods.
              </motion.p>
            </motion.div>

            {/* Timeline items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
            >
              {timeline.map((item, i) => {
                const isFuture = parseInt(item.year) > 2025
                return (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr',
                      gap: '32px',
                      padding: '40px 0',
                      borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none',
                      opacity: isFuture ? 0.4 : 1,
                    }}
                  >
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isFuture ? 'var(--text-muted)' : 'var(--blue-deep)',
                      letterSpacing: '0.01em',
                      paddingTop: '4px',
                    }}>
                      {item.year}
                    </span>
                    <div>
                      <h3 style={{
                        fontSize: 'clamp(18px, 1.8vw, 24px)',
                        fontWeight: '400',
                        lineHeight: '1.25',
                        letterSpacing: '-0.01em',
                        color: 'var(--text)',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-lora), Georgia, serif',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          JOIN — green full-bleed
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--green)', padding: '140px 0' }}>
        <div style={wrap}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
          >
            <motion.div variants={fadeUp}><Label>Get Involved</Label></motion.div>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(56px, 7.5vw, 120px)',
                fontWeight: '400',
                lineHeight: '0.92',
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '48px',
                maxWidth: '900px',
              }}
            >
              Become part of the regenerative future.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{ fontSize: '20px', fontWeight: '300', color: 'var(--text)', opacity: 0.7, lineHeight: '1.65', maxWidth: '520px', marginBottom: '56px' }}
            >
              Whether you have land to develop, skills to contribute, or are simply
              seeking community — there is a vital role for you in Regen Tribe.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'center', borderTop: '1px solid rgba(54,54,54,0.2)', paddingTop: '40px' }}
            >
              <PillBtn href="/join">Connect with Regen Tribe</PillBtn>
              <TextLink href="/about">Learn About Us</TextLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .ticker-track {
          animation: ticker 32s linear infinite;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-panels { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .platform-grid { grid-template-columns: 1fr !important; }
          .timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
