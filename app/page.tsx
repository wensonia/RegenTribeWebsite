'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

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

/* ── Text link CTA ── */
function TextLink({ href, children, light, external }: { href: string; children: React.ReactNode; light?: boolean; external?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '17px', fontWeight: '400', color: light ? 'white' : 'var(--text)',
    textDecoration: 'none', letterSpacing: '0.01em',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={1.5} /></>
  if (external) return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style} whileHover={{ x: 5 }} transition={{ duration: 0.15 }}>{inner}</motion.a>
  )
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Pill button ── */
function PillBtn({ href, children, light, external }: { href: string; children: React.ReactNode; light?: boolean; external?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '14px', fontWeight: '600', letterSpacing: '0.02em',
    color: light ? 'var(--text)' : 'white',
    backgroundColor: light ? 'white' : 'var(--text)',
    border: 'none', borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={2} /></>
  if (external) return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>{inner}</motion.a>
  )
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Label ── */
function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.45)' : 'var(--text-muted)', marginBottom: '28px',
    }}>{children}</p>
  )
}

/* ── Data ── */
const heroPanels = [
  { color: 'var(--green)', label: 'Global Network', symbol: '○', href: 'https://tribesplatform.app', external: true },
  { color: 'var(--pink)', label: 'Agency', symbol: '△', href: '/agency', external: false },
  { color: 'var(--yellow)', label: 'Education', symbol: '□', href: '/education', external: false },
  { color: 'var(--blue)', label: 'Land Development', symbol: '○', href: '/agency', external: false },
]

const coreNeeds = ['WATER', 'FOOD', 'ENERGY', 'WASTE', 'HUMAN CONNECTION', 'NATURE', 'CLEAN AIR']

const offerings = [
  { label: 'global network', dot: 'var(--green)', desc: 'connect to a growing network of people, neighborhoods and solutions around the world.', cta: 'Connect', href: 'https://tribesplatform.app', external: true },
  { label: 'education', dot: 'var(--yellow-deep)', desc: 'get open source educational materials, guides, vocational programs, and tools.', cta: 'Learn More', href: '/agency' },
  { label: 'agency', dot: 'var(--pink)', desc: 'get support for your existing or new neighborhood with regenerative goals through our consultancy service.', cta: 'Get Support', href: '/agency' },
  { label: 'land development', dot: 'var(--blue)', desc: 'work with us to build a global network of microcommunities at partner projects & 150 person Regenerative Neighborhoods.', cta: 'Collaborate', href: '/join' },
]

const projects = [
  { name: 'Kuyabeh', loc: 'Tulum, Mexico', desc: '375 hectares sustainable micro city in Mexico', dot: 'var(--green)' },
  { name: 'La Ecovilla', loc: 'Costa Rica', desc: 'neighborhood in Costa Rica housing 43 families', dot: 'var(--pink)' },
  { name: 'MOOS Space', loc: 'Berlin, Germany', desc: 'urban community in the heart of Berlin', dot: 'var(--blue)' },
  { name: 'La Reserva', loc: 'Tulum, Mexico', desc: 'sustainable neighborhood in Tulum, Mexico', dot: 'var(--yellow-deep)' },
  { name: 'WildSeeds Ranch', loc: 'San Diego, California', desc: 'coliving community in San Diego, California', dot: 'var(--green)' },
]

const testimonials = [
  {
    name: 'Jordan Hammond', role: 'Vision holder of WildSeeds Ranch', about: 'Agency',
    quote: 'I\'m glad to have found you. We are a large family who have just purchased a chunk of forest and I\'m happy to see how other groups have formed intentional neighborhoods through the resources on Tribes.',
  },
  {
    name: 'Laurence Ion', role: 'Co-founder of Vitalia (current Viva City)', about: 'Agency',
    quote: 'Grateful to have come across Regen Tribes and the digital club house. Really loving all of the awesome projects and inspiration that is emerging through this container – grateful and honored to be here.',
  },
  {
    name: 'Vivo Zerbe', role: 'Agent In-Practice', about: 'Agent Program',
    quote: 'The Agent Program was really helpful in understanding and internalizing the steps necessary in the community creation process. The program was super well organized, and as informative as it was interactive.',
  },
]

const faqs = [
  { q: 'What is a regenerative neighborhood?', a: 'A regenerative neighborhood is a community land development with resilient systems for water, food, energy, waste management, nature & human connection — designed to have a net positive effect on people and the planet.' },
  { q: 'Where are you building neighborhoods?', a: 'We are actively collaborating with projects in Mexico (Aldea Kuyabeh, La Reserva), Costa Rica (La Ecovilla), Germany (MOOS Space), and California (WildSeeds Ranch), with more alliance partner sites globally.' },
  { q: 'Can I buy a home in a regenerative neighborhood?', a: 'Yes — we are developing land and real estate opportunities. Reach out to us to learn more about current openings at our partner sites and upcoming developments.' },
  { q: 'Can I join Regen Tribe?', a: 'Absolutely. We are always looking for ambassadors, collaborators, and core team members. Visit the Tribes Platform or reach out to hello@regentribe.co to find your role.' },
  { q: 'Where can I see the list of regenerative neighborhoods?', a: 'The full global database of regenerative neighborhoods is on the Tribes Platform at tribesplatform.app.' },
  { q: 'How do I start my own community project?', a: 'Start with our 11-step Alchemy Guide on the Tribes Platform. You can also reach out to the Regen Tribe Agency for direct consulting support.' },
]

const partners = ['Free Cities Foundation', 'REGENS', '#TEAM PLASTIC POSITIVE', 'cohere', 'ECOLECTA']

/* ── Page ── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section style={{ padding: '80px 0 96px', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...wrap, width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.72fr', gap: '64px', alignItems: 'center' }}>

            {/* Left: text */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Label>Regenerative Neighborhood Accelerator</Label>
              </motion.div>

              <h1 style={{
                fontSize: 'clamp(36px, 4.5vw, 72px)', fontWeight: '400',
                lineHeight: '1.05', letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '28px',
              }}>
                {['create,', 'grow', '&', 'find', 'Regenerative', 'Neighborhoods'].map((word, i) => (
                  <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.28em', verticalAlign: 'bottom' }}>
                    <motion.span
                      initial={{ y: '110%' }} animate={{ y: 0 }}
                      transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 + i * 0.07 }}
                      style={{
                        display: 'inline-block',
                        fontFamily: i >= 4 ? 'var(--font-lora), Georgia, serif' : 'inherit',
                        fontStyle: i >= 4 ? 'italic' : 'normal',
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p variants={fadeUp} style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '480px' }}>
                The Regen Tribe ecosystem connects people, projects, &amp; solutions to accelerate regenerative neighborhood development.
              </motion.p>

              <motion.div variants={fadeUp} style={{
                display: 'inline-block', borderLeft: '2px solid var(--border)', paddingLeft: '16px',
                marginBottom: '40px',
              }}>
                <p style={{ fontSize: '13px', fontWeight: '400', color: 'var(--text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>
                  regenerative neighborhood <span style={{ fontStyle: 'normal', opacity: 0.5 }}>/noun/</span> — community land development with resilient systems for water, food, shelter, energy, waste management, nature &amp; human connection.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} style={{
                borderTop: '1px solid var(--border)', paddingTop: '40px',
                display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap',
              }}>
                <PillBtn href="https://tribesplatform.app" external>Join the Tribes Platform</PillBtn>
                <TextLink href="#ecosystem">About our ecosystem</TextLink>
              </motion.div>
            </motion.div>

            {/* Right: color panels — hover expands, click navigates */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-panels"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {heroPanels.map((panel) => {
                const inner = (
                  <>
                    <span style={{ fontSize: '40px', lineHeight: 1, color: 'var(--text)', opacity: 0.45, fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: '400' }}>
                      {panel.symbol}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)' }}>
                      {panel.label}
                    </span>
                  </>
                )
                const panelStyle: React.CSSProperties = {
                  backgroundColor: panel.color, borderRadius: '6px', padding: '28px 24px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  aspectRatio: '1 / 1', textDecoration: 'none', width: '100%',
                }
                return (
                  <motion.div
                    key={panel.label}
                    variants={fadeUp}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ cursor: 'pointer' }}
                  >
                    {panel.external ? (
                      <a href={panel.href} target="_blank" rel="noopener noreferrer" style={panelStyle}>{inner}</a>
                    ) : (
                      <Link href={panel.href} style={panelStyle}>{inner}</Link>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          OUR WHY — Challenge + Solution
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp}><Label>our why</Label></motion.div>

            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              {/* Challenge */}
              <motion.div variants={fadeUp}>
                <h2 style={{
                  fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: '400', lineHeight: '1.0',
                  letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '40px',
                }}>
                  The challenge.
                </h2>
                <p style={{ fontSize: '20px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  We face urgent global challenges — resource scarcity, climate change, social inequality, and loneliness — demanding collective action to reshape our systems.
                </p>
                <p style={{ fontSize: '20px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '40px' }}>
                  Society&apos;s flawed development is making essential resources scarce — and the change starts in our neighborhood.
                </p>
                <TextLink href="https://tribesplatform.app" external>Read our documentation</TextLink>
              </motion.div>

              {/* Solution */}
              <motion.div variants={fadeUp}>
                <h2 style={{
                  fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: '400', lineHeight: '1.0',
                  letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '40px',
                }}>
                  The solution.
                </h2>
                <p style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '36px' }}>
                  Community land developments with resilient systems provide our core needs:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                  {coreNeeds.map((need) => (
                    <span key={need} style={{
                      fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em',
                      textTransform: 'uppercase', border: '1px solid var(--border)',
                      borderRadius: '9999px', padding: '8px 16px', color: 'var(--text)',
                    }}>{need}</span>
                  ))}
                </div>
                <p style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', fontFamily: 'var(--font-lora), Georgia, serif', fontStyle: 'italic' }}>
                  We call these places <em>regenerative neighborhoods</em> — because they have a positive effect on humans, the environment, &amp; can adapt to change. Let&apos;s build more.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHAT ARE REGENERATIVE NEIGHBORHOODS?
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--text)', padding: '120px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp}><Label light>what are regenerative neighborhoods?</Label></motion.div>
            <div className="rn-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              <motion.div variants={fadeUp}>
                <h2 style={{
                  fontSize: 'clamp(44px, 5.5vw, 88px)', fontWeight: '400', lineHeight: '0.95',
                  letterSpacing: '-0.025em', color: 'white', marginBottom: '40px',
                }}>
                  What are regenerative neighborhoods?
                </h2>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p style={{ fontSize: '22px', fontWeight: '300', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>
                  Regenerative Neighborhoods are resource resilient &amp; intentional community land developments.
                </p>
                <p style={{ fontSize: '18px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65', marginBottom: '24px' }}>
                  And provide true sovereignty when created and run well. They provide resilient solutions for the important things:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '56px' }}>
                  {['WATER', 'FOOD', 'ENERGY', 'WASTE', 'HUMAN CONNECTION', 'NATURE'].map((need) => (
                    <span key={need} style={{
                      fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em',
                      textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '9999px', padding: '8px 16px', color: 'rgba(255,255,255,0.75)',
                    }}>{need}</span>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '40px' }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>Our vision</p>
                  <p style={{ fontSize: '28px', fontWeight: '400', color: 'white', lineHeight: '1.3', fontFamily: 'var(--font-lora), Georgia, serif' }}>
                    To create 53 million regenerative neighborhoods around the world collectively.
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '300', color: 'rgba(255,255,255,0.45)', lineHeight: '1.65', marginTop: '16px' }}>
                    Enough for each person (8 billion people) on the planet to have their core needs met &amp; feel the sense of community.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHAT WE OFFER
      ════════════════════════════════ */}
      <section id="ecosystem" style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border)', paddingBottom: '40px', marginBottom: '72px', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <Label>what we offer</Label>
                <h2 style={{ fontSize: 'clamp(48px, 6vw, 96px)', fontWeight: '400', lineHeight: '0.92', letterSpacing: '-0.025em', color: 'var(--text)' }}>
                  What we<br />offer.
                </h2>
              </div>
              <TextLink href="https://tribesplatform.app" external>Find all of the above on Tribes Platform</TextLink>
            </motion.div>

            {/* 4 offerings grid */}
            <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', marginBottom: '80px' }}>
              {offerings.map((o, i) => (
                <motion.div key={o.label} variants={fadeUp} style={{
                  borderRight: i < offerings.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingRight: i < offerings.length - 1 ? '32px' : '0',
                  paddingLeft: i > 0 ? '32px' : '0',
                }}>
                  <div style={{ width: '32px', height: '3px', backgroundColor: o.dot, marginBottom: '24px', borderRadius: '2px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: '400', color: 'var(--text)', marginBottom: '14px', fontFamily: 'var(--font-lora), Georgia, serif', textTransform: 'lowercase' }}>
                    {o.label}
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
                    {o.desc}
                  </p>
                  {o.external ? (
                    <motion.a href={o.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}
                      whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                      {o.cta} <ArrowRight size={12} strokeWidth={2} />
                    </motion.a>
                  ) : (
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
                      <Link href={o.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>
                        {o.cta} <ArrowRight size={12} strokeWidth={2} />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Tribes Platform hub */}
            <motion.div variants={fadeUp} style={{ backgroundColor: 'var(--yellow)', borderRadius: '8px', padding: '56px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text)', opacity: 0.5, marginBottom: '12px' }}>Find it all here</p>
                <h3 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: '400', letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '12px', fontFamily: 'var(--font-lora), Georgia, serif' }}>
                  Tribes Platform
                </h3>
                <p style={{ fontSize: '18px', fontWeight: '300', color: 'var(--text)', opacity: 0.65, maxWidth: '420px', lineHeight: '1.55' }}>
                  join the networking &amp; education hub to develop regenerative neighborhoods.
                </p>
              </div>
              <PillBtn href="https://tribesplatform.app" external>Join Tribes</PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          ACTIVE PROJECTS
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--green)', padding: '120px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(54,54,54,0.2)', paddingBottom: '40px', marginBottom: '72px', flexWrap: 'wrap', gap: '24px' }}>
            <motion.div variants={fadeUp}>
              <Label>active projects</Label>
              <h2 style={{ fontSize: 'clamp(48px, 6vw, 96px)', fontWeight: '400', lineHeight: '0.92', letterSpacing: '-0.025em', color: 'var(--text)' }}>
                Projects<br />in motion.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <TextLink href="/agency">See all projects</TextLink>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0' }}>
            {projects.map((p, pi) => (
              <motion.div key={p.name} variants={fadeUp} style={{
                borderRight: pi < projects.length - 1 ? '1px solid rgba(54,54,54,0.2)' : 'none',
                paddingRight: pi < projects.length - 1 ? '24px' : '0',
                paddingLeft: pi > 0 ? '24px' : '0',
              }}>
                <div style={{ width: '28px', height: '3px', backgroundColor: p.dot, marginBottom: '20px', borderRadius: '2px' }} />
                <h3 style={{
                  fontSize: 'clamp(16px, 1.6vw, 22px)', fontWeight: '400', lineHeight: '1.2',
                  letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: '6px',
                  fontFamily: 'var(--font-lora), Georgia, serif',
                }}>{p.name}</h3>
                <p style={{ fontSize: '12px', color: 'var(--text)', opacity: 0.45, marginBottom: '16px', letterSpacing: '0.02em' }}>{p.loc}</p>
                <p style={{ fontSize: '14px', fontWeight: '300', color: 'var(--text)', lineHeight: '1.6', opacity: 0.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHO WE ARE
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
              <motion.div variants={fadeUp}><Label>who we are</Label></motion.div>
              <motion.h2 variants={fadeUp} style={{
                fontSize: 'clamp(44px, 5.5vw, 88px)', fontWeight: '400', lineHeight: '0.95',
                letterSpacing: '-0.025em', color: 'var(--text)',
              }}>
                Who we are.
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
              <motion.p variants={fadeUp} style={{ fontSize: '22px', fontWeight: '300', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '24px' }}>
                we are an open collective of community builders.
              </motion.p>
              <motion.p variants={fadeUp} style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Our team has been researching, documenting and studying community land developments of various sizes and structures since 2022.
              </motion.p>
              <motion.p variants={fadeUp} style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '20px' }}>
                We are a collective of social entrepreneurs from different walks of life, coming together to co.create the world we want to live in.
              </motion.p>
              <motion.p variants={fadeUp} style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '48px' }}>
                We are always looking for new ambassadors, collaborators and core team members to enhance our operational power and help develop more neighborhoods faster.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
                <TextLink href="/join">Choose your level of involvement</TextLink>
                <TextLink href="/about">More about us</TextLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PARTNERS
      ════════════════════════════════ */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <motion.p variants={fadeUp} style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', flexShrink: 0 }}>
              Partners in our ecosystem
            </motion.p>
            <div style={{ flex: 1, display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
              {partners.map((p) => (
                <motion.span key={p} variants={fadeUp} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text)', opacity: 0.5, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                  {p}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp}><Label>what the community says</Label></motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: '400', lineHeight: '0.95',
              letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '72px',
            }}>
              What the community<br />says about us.
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {testimonials.map((t, i) => (
                <motion.div key={t.name} variants={fadeUp} style={{
                  borderTop: '2px solid var(--border)', paddingTop: '32px',
                }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    about {t.about}
                  </p>
                  <p style={{ fontSize: '17px', fontWeight: '300', color: 'var(--text)', lineHeight: '1.7', marginBottom: '32px', fontFamily: 'var(--font-lora), Georgia, serif', fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text)', marginBottom: '4px' }}>{t.name}</p>
                    <p style={{ fontSize: '13px', fontWeight: '300', color: 'var(--text-muted)' }}>{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          FAQs
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '80px', alignItems: 'start' }}>
            <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
              <motion.div variants={fadeUp}><Label>FAQs</Label></motion.div>
              <motion.h2 variants={fadeUp} style={{
                fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: '400', lineHeight: '0.95',
                letterSpacing: '-0.025em', color: 'var(--text)',
              }}>
                Common questions.
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '28px 0', background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: '18px', fontWeight: '400', color: 'var(--text)', textAlign: 'left',
                      fontFamily: 'var(--font-lora), Georgia, serif',
                    }}
                  >
                    {faq.q}
                    {openFaq === i ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ fontSize: '16px', fontWeight: '300', color: 'var(--text-muted)', lineHeight: '1.65', paddingBottom: '28px' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          LET'S CONNECT
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--yellow)', padding: '140px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp}><Label>get involved</Label></motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize: 'clamp(56px, 7.5vw, 120px)', fontWeight: '400', lineHeight: '0.92',
              letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '32px', maxWidth: '900px',
            }}>
              Let&apos;s connect.
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              fontSize: '20px', fontWeight: '300', color: 'var(--text)', opacity: 0.7,
              lineHeight: '1.65', maxWidth: '520px', marginBottom: '16px',
            }}>
              Whether you&apos;re an individual seeking community, a visionary with land, a skilled professional, or an impact investor — there is a vital role for you within Regen Tribe.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '16px', fontWeight: '400', color: 'var(--text)', opacity: 0.5, marginBottom: '56px' }}>
              hello@regentribe.co
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'center', borderTop: '1px solid rgba(54,54,54,0.2)', paddingTop: '40px' }}>
              <PillBtn href="/join">Choose your level of involvement</PillBtn>
              <TextLink href="/about">More about us</TextLink>
            </motion.div>
            <motion.p variants={fadeUp} style={{ marginTop: '56px', fontSize: '13px', fontWeight: '400', letterSpacing: '0.05em', color: 'var(--text)', opacity: 0.35 }}>
              Regen Tribe — let&apos;s re.develop the society
            </motion.p>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-panels { display: none !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .rn-grid { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
          .faq-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) {
          .offerings-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
