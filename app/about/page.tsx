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

/* ── Archetypes data ── */
const archetypes = [
  {
    name: 'Vision Holders',
    color: '#808aeb',
    textLight: true,
    shape: '△',
    description:
      'Individuals and teams actively creating a Regenerative Neighborhood. You have a vision for intentional community and are building it into reality.',
  },
  {
    name: 'Service Providers',
    color: '#6fc6a2',
    textLight: false,
    shape: '□',
    description:
      'Professionals offering skills, services, and products for creating Regenerative Neighborhoods — builders, designers, systems experts, coaches, and beyond.',
  },
  {
    name: 'Community Members',
    color: '#f16ab0',
    textLight: true,
    shape: '○',
    description:
      'Individuals living in or looking for a Regenerative Neighborhood to call home. Seeking deeper connection, purpose, and a healthier way of life.',
  },
  {
    name: 'Resource Holders',
    color: '#ffe682',
    textLight: false,
    shape: '◇',
    description:
      'Those with land, capital, or resources to support Regenerative Neighborhood development. Your assets can seed the next generation of communities.',
  },
  {
    name: 'Regen Curious',
    color: '#363636',
    textLight: true,
    shape: '⬡',
    description:
      'Drawn to the regenerative movement but still finding your place. Learning, exploring, and figuring out how you want to contribute to a better world.',
  },
]

/* ── Pill button ── */
function PillBtn({ href, children, bg, light, external }: {
  href: string; children: React.ReactNode; bg?: string; light?: boolean; external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
    color: light ? 'var(--text)' : 'white',
    backgroundColor: bg || 'var(--text)',
    borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none', border: 'none', cursor: 'pointer',
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

export default function AboutPage() {
  return (
    <>

        {/* ── WHO WE ARE ── */}
        <section style={{ padding: '100px 0 80px', borderBottom: '1px dashed var(--border)' }}>
          <div style={wrap}>
            <motion.div variants={stagger} initial="hidden" animate="visible"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

              <motion.div variants={fadeUp}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '24px' }}>
                  Who we are
                </p>
                <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: '400', lineHeight: '1.1', margin: '0 0 32px' }}>
                  An open collective of<br />community builders.
                </h1>
              </motion.div>

              <motion.div variants={fadeUp} style={{ paddingTop: '60px' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px', color: 'var(--text)' }}>
                  Our team has been researching, documenting, and studying community land developments of various sizes and structures since 2022.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px', color: 'var(--text)' }}>
                  We are a collective of social entrepreneurs from different walks of life, coming together to co.create the world we want to live in.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--text)' }}>
                  We are always looking for new ambassadors, collaborators, and core team members to enhance our operational power and help develop more neighborhoods faster.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* ── ARCHETYPES ── */}
        <section style={{ padding: '100px 0', borderBottom: '1px dashed var(--border)' }}>
          <div style={wrap}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>

              <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
                  The collective
                </p>
                <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 16px', maxWidth: '600px' }}>
                  Five types of change-makers.
                </h2>
                <p style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--text)', maxWidth: '540px', opacity: 0.75 }}>
                  The Regen Tribe collective is made up of all the people it takes to design, build, and grow Regenerative Neighborhoods and their communities.
                </p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                {archetypes.map((a) => (
                  <motion.div key={a.name} variants={fadeUp}
                    style={{
                      backgroundColor: a.color,
                      borderRadius: '16px',
                      padding: '36px 28px',
                      color: a.textLight ? 'white' : '#363636',
                    }}>
                    <div style={{ fontSize: '28px', marginBottom: '20px', opacity: 0.6 }}>{a.shape}</div>
                    <h3 style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '500', margin: '0 0 12px' }}>
                      {a.name}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: '1.65', margin: 0, opacity: 0.85 }}>
                      {a.description}
                    </p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>

        {/* ── HOW TO JOIN ── */}
        <section style={{ padding: '100px 0' }}>
          <div style={wrap}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>

              <motion.div variants={fadeUp}>
                <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
                  Join the collective
                </p>
                <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 20px' }}>
                  We are always growing.
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto', opacity: 0.75 }}>
                  Whether you are building a community, offering your skills, looking for a place to call home, or simply regen curious — there is a place for you in Regen Tribe.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <PillBtn
                  href="https://regentribe.notion.site/Join-Regen-Tribe-ac482cc256d4495d820010c28200698e"
                  external
                  bg="var(--blue)"
                >
                  Join the Collective
                </PillBtn>
              </motion.div>

            </motion.div>
          </div>
        </section>

    </>
  )
}
