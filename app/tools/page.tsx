'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

function TextLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}
      whileHover={{ x: 5 }} transition={{ duration: 0.15 }}
    >
      {children} <ArrowRight size={14} strokeWidth={2} />
    </motion.a>
  )
}

function DevBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'rgba(54,54,54,0.55)', backgroundColor: 'rgba(54,54,54,0.08)',
      borderRadius: '9999px', padding: '5px 14px',
    }}>
      In Development
    </span>
  )
}


/* ── Page ── */
export default function ToolsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

      {/* ════════════════════
          HERO
      ════════════════════ */}
      <section style={{ padding: '120px 0 80px', borderBottom: '1px dashed rgba(54,54,54,0.18)' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp}>
              <Label>Open Source · Free to Use · Built by the Collective</Label>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(40px, 5.5vw, 88px)', fontWeight: '400', lineHeight: '1.0',
              letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '32px', maxWidth: '860px',
            }}>
              education &amp; resources
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: 'clamp(22px, 2.5vw, 36px)',
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontWeight: '400', color: 'rgba(54,54,54,0.45)',
              marginBottom: '32px', letterSpacing: '-0.01em',
            }}>
              learn. apply. track.
            </motion.p>

            <motion.p variants={fadeUp} style={{
              fontSize: '18px', fontWeight: '300', lineHeight: '1.7',
              color: 'rgba(54,54,54,0.6)', maxWidth: '600px', marginBottom: '48px',
            }}>
              The Regen Tribe collective has been gathering, synthesizing and sharing regenerative neighborhood best practices since 2021. Open source content guiding regenerative neighborhood development.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <PillBtn href="https://tribesplatform.app" external bg="var(--green)" textColor="var(--text)">
                Join Tribes Platform
              </PillBtn>
              <OutlinePill href="#learn">
                Explore the Tools
              </OutlinePill>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════
          LEARN — The Hive
      ════════════════════ */}
      <section id="learn" style={{ padding: '120px 0', borderBottom: '1px dashed rgba(54,54,54,0.18)' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            {/* Top 2-col: text + phone */}
            <motion.div
              className="tool-grid"
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '72px' }}
            >
              <div>
                <motion.div variants={fadeUp}>
                  <Label>Open &amp; Crowd-Sourced Library</Label>
                </motion.div>
                <motion.h2 variants={fadeUp} style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(56px, 7vw, 112px)', fontWeight: '400', lineHeight: '1.0',
                  letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0',
                }}>
                  learn.
                </motion.h2>
                <motion.h3 variants={fadeUp} style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(22px, 2.2vw, 34px)', fontWeight: '400',
                  color: 'var(--green)', letterSpacing: '-0.015em', marginBottom: '24px',
                }}>
                  The Hive
                </motion.h3>
                <motion.p variants={fadeUp} style={{
                  fontSize: '18px', fontWeight: '300', lineHeight: '1.7',
                  color: 'rgba(54,54,54,0.65)', marginBottom: '40px',
                }}>
                  Resource library &amp; forum categorized by topics. The living, crowd-sourced knowledge base for everyone building regenerative neighborhoods — articles, guides, case studies, tools, and templates, continuously growing.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <PillBtn href="https://tribesplatform.app/hive/" external bg="var(--green)" textColor="var(--text)">
                    Explore the Hive
                  </PillBtn>
                </motion.div>
              </div>

              {/* Phone mockup — same pattern as tribes-platform page */}
              <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="phone-card hive-phone-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', textAlign: 'center', maxWidth: '240px' }}>
                  <div className="phone-body" style={{ borderTopColor: 'var(--green)' }}>
                    <div className="phone-notch" />
                    <div className="phone-screen">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/tribes-platform/forums.jpg"
                        alt="The Hive on Tribes Platform"
                        className="phone-scroll-img"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom: 5 category columns */}
            <motion.div className="hive-categories" variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px' }}>
              {[
                {
                  sym: '○', col: 'var(--green)', hex: '#6fc6a2', label: 'Ecology',
                  subs: ['Landscape & Natural Resources', 'Land Stewardship', 'Ecosystem Restoration', 'Biodiversity', 'Climate'],
                },
                {
                  sym: '□', col: 'var(--blue)', hex: '#808aeb', label: 'Hardware',
                  subs: ['Architecture & Design', 'Master Planning', 'Building', 'Water', 'Food', 'Energy', 'Transportation', 'Waste Management'],
                },
                {
                  sym: '△', col: 'var(--pink)', hex: '#f16ab0', label: 'Humanware',
                  subs: ['Governance', 'Legal', 'Community Membership', 'Culture & Art', 'Education', 'Emotional & Mental Health', 'Security'],
                },
                {
                  sym: '○', col: 'var(--yellow)', hex: '#ffe682', label: 'Economy',
                  subs: ['Investment Models', 'Ownership Models', 'Land Purchase & Stewarding', 'Currency & Exchange', 'Financial Management'],
                },
                {
                  sym: '△', col: 'var(--blue)', hex: '#808aeb', label: 'Technology',
                  subs: ['AI & Large Language Models', 'Software Applications', 'Blockchain', 'IoT & Sensors', 'Data', '3D Mapping'],
                },
              ].map(({ sym, col, hex, label, subs }) => (
                <motion.div key={label} variants={fadeUp} style={{
                  backgroundColor: 'white', padding: '24px 20px',
                  borderTop: `3px solid ${hex}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '14px', color: col }}>{sym}</span>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)', letterSpacing: '-0.01em' }}>{label}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {subs.map((s) => (
                      <span key={s} style={{ fontSize: '10px', fontWeight: '300', color: 'rgba(54,54,54,0.55)', lineHeight: '1.5' }}>{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════
          APPLY — Alchemy Guide + Agent Program
      ════════════════════ */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px dashed rgba(54,54,54,0.18)', backgroundColor: '#f5f5f3' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            {/* Section heading */}
            <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
              <Label>Put the knowledge to work</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(56px, 7vw, 112px)', fontWeight: '400', lineHeight: '1.0',
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                apply.
              </h2>
            </motion.div>

            {/* Two tool cards */}
            <motion.div
              className="apply-grid"
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
            >

              {/* Community Alchemy Guide */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(0,0,0,0.12)', transition: { duration: 0.25 } }}
                style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
              >
                <div style={{ height: '3px', backgroundColor: 'var(--pink)', flexShrink: 0 }} />
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '18px', color: 'var(--pink)', lineHeight: 1 }}>△</span>
                  <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(54,54,54,0.4)' }}>11-Step Guide</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(22px, 2.2vw, 34px)', fontWeight: '400',
                  color: 'var(--text)', letterSpacing: '-0.015em', marginBottom: '20px',
                }}>
                  Community Alchemy Guide
                </h3>
                <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '1.7', color: 'rgba(54,54,54,0.65)', marginBottom: '32px', flexGrow: 1 }}>
                  Curated 11 step best practices guide to create regenerative neighborhoods. A step-by-step journey map from vision to living ecosystem.
                </p>

                {/* 11 steps list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '36px' }}>
                  {[
                    'Hone Your Community Vision',
                    'Recruit Your Ideal Members',
                    'Align on Agreements & Governance',
                    'Plan Business Models & Infrastructure',
                    'Acquire the Best Land',
                    'Identify Your Funding Needs',
                    'Strategize Your Marketing',
                    'Master Plan Sustainable Systems',
                    'Construct Physical Infrastructure',
                    'Activate Community Culture',
                    'Manage & Review Holistically',
                  ].map((step, i) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '10px 0', borderBottom: '1px solid rgba(54,54,54,0.07)' }}>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--pink)', minWidth: '18px', paddingTop: '3px' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '400', color: 'rgba(54,54,54,0.7)', lineHeight: '1.5' }}>{step}</span>
                    </div>
                  ))}
                </div>

                <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--pink)', borderRadius: '2px', marginBottom: '28px' }} />
                <TextLink href="https://tribesplatform.app/community-alchemy/" external>
                  Use the Guide
                </TextLink>
                </div>
              </motion.div>

              {/* Regen Agent Program */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(0,0,0,0.12)', transition: { duration: 0.25 } }}
                style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
              >
                <div style={{ height: '3px', backgroundColor: 'var(--blue)', flexShrink: 0 }} />
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '18px', color: 'var(--blue)', lineHeight: 1 }}>□</span>
                  <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(54,54,54,0.4)' }}>Vocational Program</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(22px, 2.2vw, 34px)', fontWeight: '400',
                  color: 'var(--text)', letterSpacing: '-0.015em', marginBottom: '20px',
                }}>
                  Regen Agent Program
                </h3>
                <p style={{ fontSize: '17px', fontWeight: '300', lineHeight: '1.7', color: 'rgba(54,54,54,0.65)', marginBottom: '32px' }}>
                  A vocational training equipping you with the skills and knowledge to guide vision holders in creating their dream regenerative neighborhoods.
                </p>

                {/* What you'll learn */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '36px', flexGrow: 1 }}>
                  <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(54,54,54,0.4)', marginBottom: '16px' }}>
                    What you&apos;ll learn
                  </p>
                  {[
                    'Guide vision holders through the Community Alchemy Guide',
                    'Design and plan community land developments',
                    'Build & activate regenerative neighborhood culture',
                    'Business models, governance, and funding strategies',
                    'Connect with a global network of verified Regen Agents',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '10px 0', borderBottom: '1px solid rgba(54,54,54,0.07)' }}>
                      <span style={{ fontSize: '13px', color: 'var(--blue)', flexShrink: 0, lineHeight: '1.5' }}>□</span>
                      <span style={{ fontSize: '13px', fontWeight: '400', color: 'rgba(54,54,54,0.7)', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--blue)', borderRadius: '2px', marginBottom: '28px' }} />
                <TextLink href="/agentprogram">
                  Become an Agent
                </TextLink>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════
          TRACK — RNF
      ════════════════════ */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px dashed rgba(54,54,54,0.18)' }}>
        <div className="wrap" style={wrap}>
          <motion.div
            className="tool-grid"
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
          >
            {/* Left: verb + name */}
            <div>
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <Label>Build &amp; Measurement Architecture</Label>
              </motion.div>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(56px, 7vw, 112px)', fontWeight: '400', lineHeight: '1.0',
                letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0',
              }}>
                track.
              </motion.h2>
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <h3 style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontSize: 'clamp(22px, 2.2vw, 34px)', fontWeight: '400',
                  color: 'var(--blue)', letterSpacing: '-0.015em', margin: 0,
                }}>
                  Regen Neighborhood Framework
                </h3>
                <DevBadge />
              </motion.div>
              <motion.p variants={fadeUp} style={{
                fontSize: '18px', fontWeight: '300', lineHeight: '1.7',
                color: 'rgba(54,54,54,0.65)', marginBottom: '40px',
              }}>
                A comprehensive playbook and measurement architecture for designing, funding, building, and continuously evaluating regenerative neighborhoods. Built on 5 pillars, 5 development spirals, and gate checkpoints — with quarterly scorecards, annual holistic reviews, and templates throughout.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <PillBtn href="https://github.com/regentribes/regen-neighborhood-framework" external bg="var(--blue)" textColor="white">
                  View the Framework
                </PillBtn>
                <TextLink href="https://rn-wizard.vercel.app/" external>
                  Test the Wizard
                </TextLink>
              </motion.div>
            </div>

            {/* Right: pillars + spirals */}
            <motion.div variants={fadeUp} style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>

              {/* 5 Pillars */}
              <div style={{ backgroundColor: 'white', padding: '28px 32px' }}>
                <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(54,54,54,0.4)', marginBottom: '16px' }}>
                  5 Pillars
                </p>
                <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                  {[
                    ['○', 'var(--green)',  '#6fc6a2', 'Ecology'],
                    ['□', 'var(--blue)',   '#808aeb', 'Hardware'],
                    ['△', 'var(--pink)',   '#f16ab0', 'Human Systems'],
                    ['○', 'var(--yellow)', '#ffe682', 'Economy'],
                    ['△', 'var(--green)',  '#6fc6a2', 'Software'],
                  ].map(([sym, col, hex, label]) => (
                    <div key={label} style={{
                      borderTop: `2px solid ${hex}`,
                      backgroundColor: hex + '18',
                      padding: '14px 8px',
                      textAlign: 'center',
                    }}>
                      <span style={{ fontSize: '18px', color: col, display: 'block', marginBottom: '8px', lineHeight: 1 }}>{sym}</span>
                      <span style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text)', letterSpacing: '-0.01em', lineHeight: '1.3', display: 'block' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Spirals */}
              <div style={{ backgroundColor: 'white', padding: '32px 40px' }}>
                <p style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(54,54,54,0.4)', marginBottom: '20px' }}>
                  5 Development Spirals
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    ['01', 'Proof of Concept',       'Months 0–6'],
                    ['02', 'Feasibility Validation', 'Months 3–12'],
                    ['03', 'Capital Optimization',   'Months 9–15'],
                    ['04', 'Construction & Operation','Months 12–36'],
                    ['05', 'Continuous Regeneration', 'Year 2+'],
                  ].map(([num, name, time]) => (
                    <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 0', borderBottom: '1px solid rgba(54,54,54,0.07)' }}>
                      <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--blue)', minWidth: '20px' }}>{num}</span>
                      <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text)', flexGrow: 1 }}>{name}</span>
                      <span style={{ fontSize: '11px', color: 'rgba(54,54,54,0.4)', whiteSpace: 'nowrap' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════
          REGEN TECH STACK
      ════════════════════ */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px dashed rgba(54,54,54,0.18)', backgroundColor: '#f5f5f3' }}>
        <div className="wrap" style={wrap}>
          <motion.div
            className="tool-grid"
            initial="hidden" whileInView="visible" variants={stagger} viewport={vp}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          >
            <div>
              <motion.div variants={fadeUp}>
                <Label>Open-Source Software</Label>
              </motion.div>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(32px, 3.5vw, 56px)', fontWeight: '400', lineHeight: '1.05',
                letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: '28px',
              }}>
                Regen Tech Stack
              </motion.h2>
              <motion.p variants={fadeUp} style={{
                fontSize: '18px', fontWeight: '300', lineHeight: '1.7',
                color: 'rgba(54,54,54,0.6)', marginBottom: '40px',
              }}>
                Open-source software tools for the regenerative neighborhood movement. Built by the collective, for the collective — from AI community agents to knowledge graphs and neighborhood planning wizards.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <PillBtn href="/tech-stack" bg="var(--text)" textColor="white">
                  Explore the Tech Stack
                </PillBtn>
                <OutlinePill href="https://github.com/regentribes" external>
                  View on GitHub
                </OutlinePill>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="techstack-cards" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                { sym: '△', col: 'var(--blue)',   name: 'Regen Knowledge Graph',        tag: 'AI Brain & Semantic Layer',          status: 'Active'         },
                { sym: '○', col: 'var(--green)',  name: 'Genesis',                      tag: 'Community AI Agent',                 status: 'Active'         },
                { sym: '○', col: 'var(--pink)',   name: 'Regen Neighborhood Framework', tag: 'Neighborhood Development Playbook',  status: 'In Development' },
                { sym: '□', col: 'var(--yellow)', name: 'Regen Vision',                 tag: '3D Knowledge Visualization',         status: 'In Development' },
              ].map((t) => (
                <div key={t.name} style={{ backgroundColor: 'white', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '16px', color: t.col, flexShrink: 0 }}>{t.sym}</span>
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(54,54,54,0.45)', letterSpacing: '0.04em' }}>{t.tag}</p>
                  </div>
                  <span style={{
                    fontSize: '9px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0,
                    color: t.status === 'Active' ? 'var(--text)' : 'rgba(54,54,54,0.45)',
                    backgroundColor: t.status === 'Active' ? 'var(--green)' : 'rgba(54,54,54,0.08)',
                    borderRadius: '9999px', padding: '4px 10px',
                  }}>{t.status}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════
          CONNECT — CTA
      ════════════════════ */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px dashed rgba(54,54,54,0.18)' }}>
        <div style={{ ...wrap, maxWidth: '860px' }}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp} style={{ textAlign: 'center' }}>
            <motion.div variants={fadeUp}>
              <Label>Network of Regenerative Neighborhoods &amp; People Building Them</Label>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(56px, 7vw, 112px)', fontWeight: '400', lineHeight: '1.0',
              letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '28px',
            }}>
              connect.
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              fontSize: '18px', fontWeight: '300', lineHeight: '1.7',
              color: 'rgba(54,54,54,0.6)', marginBottom: '48px',
            }}>
              All tools live on the Tribes Platform — the networking and education hub for the regenerative neighborhood movement. Join to access the Hive, the Alchemy Guide, connect with neighborhood builders worldwide, and find communities to be part of.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <PillBtn href="https://tribesplatform.app" external bg="var(--green)" textColor="var(--text)">
                Join the Tribes Platform
              </PillBtn>
              <OutlinePill href="https://tribesplatform.app/hive/" external>
                Go to the Hive
              </OutlinePill>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <style>{`
        /* ── Phone mockup (same as tribes-platform page) ── */
        .phone-body {
          width: 220px;
          height: 450px;
          background: #1a1a1a;
          border-radius: 32px;
          padding: 10px;
          border: 2px solid rgba(255,255,255,0.10);
          border-top-width: 3px;
          position: relative;
          margin: 0 auto;
          transition: box-shadow 0.4s ease;
        }
        .phone-notch {
          width: 50px;
          height: 18px;
          background: #1a1a1a;
          border-radius: 0 0 12px 12px;
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: #f5f5f5;
        }
        .phone-scroll-img {
          width: 100%;
          height: auto;
          display: block;
          filter: brightness(0.7) saturate(0.4);
          transition: filter 0.4s ease, transform 0s ease 0s;
          transform: translateY(0);
        }
        .phone-card:hover .phone-scroll-img,
        .hive-phone-card:hover .phone-scroll-img {
          filter: brightness(1) saturate(1);
          transform: translateY(calc(-100% + 430px));
          transition: filter 0.4s ease, transform 25s linear 0.3s;
        }
        .phone-card:hover .phone-body,
        .hive-phone-card:hover .phone-body {
          box-shadow: 0 12px 48px rgba(111,198,162,0.25);
        }
        @media (max-width: 900px) {
          .tool-grid      { grid-template-columns: 1fr !important; gap: 48px !important; }
          .apply-grid     { grid-template-columns: 1fr !important; }
          .techstack-cards { display: none !important; }
          .hive-categories { grid-template-columns: repeat(2, 1fr) !important; }
          .pillars-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .phone-body     { width: 180px; height: 368px; border-radius: 28px; padding: 8px; }
          .phone-screen   { border-radius: 22px; }
          .phone-notch    { width: 42px; height: 14px; border-radius: 0 0 9px 9px; top: 8px; }
          .phone-card:hover .phone-scroll-img,
          .hive-phone-card:hover .phone-scroll-img {
            transform: translateY(calc(-100% + 350px));
          }
        }
        @media (max-width: 540px) {
          .hive-categories { grid-template-columns: 1fr !important; }
          .pillars-grid   { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

    </div>
  )
}
