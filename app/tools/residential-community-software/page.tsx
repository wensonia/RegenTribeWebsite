'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import OptimizedImage from '@/components/OptimizedImage'

/* ── Layout ── */
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

/* ── The live demo everything points at ── */
const DEMO = 'https://myconet.correa-oscar11.workers.dev/'

/* ── Modules — index strip, anchors into the sections below ── */
const modules = [
  { id: 'M00', glyph: '⊞', label: 'See the community at a glance', dot: 'var(--blue)', href: '#dashboard' },
  { id: 'M01', glyph: '○', label: 'Meet neighbors & invite others', dot: 'var(--pink)', href: '#members' },
  { id: 'M04', glyph: '□', label: 'Read the whole plan', dot: 'var(--yellow-deep)', href: '#blueprint' },
  { id: 'M05', glyph: '△', label: 'Join by signing the values', dot: 'var(--green)', href: '#values' },
  { id: 'M06', glyph: '◇', label: 'Agree on how you collaborate', dot: 'var(--blue)', href: '#agreements' },
  { id: 'M07', glyph: '⚙', label: 'Track every promise', dot: 'var(--pink)', href: '#operations' },
  { id: 'M08', glyph: '✦', label: 'Get rewarded for showing up', dot: 'var(--yellow-deep)', href: '#contributions' },
  { id: 'M09', glyph: '☉', label: 'Decide together', dot: 'var(--green)', href: '#governance' },
]

/* ── Screenshot sections ── */
type Shot = {
  id: string
  eyebrow: string
  title: string
  line: string
  bullets: string[]
  img: string
  alt: string
  extraWidths?: number[]
  accent: string
}

const shots: Shot[] = [
  {
    id: 'dashboard',
    eyebrow: 'Module 00 · Dashboard',
    title: 'Your community, at a glance.',
    line: 'Who is here, what is being built, what needs attention — updating live.',
    bullets: ['Members', 'Active projects', 'Deliverables'],
    img: '/images/myconet/myconet-dashboard.png',
    alt: 'MyCoNet dashboard — member, project and deliverable counts, a Blueprint readiness score, and a list of recent deliverables.',
    extraWidths: [1024],
    accent: 'var(--blue)',
  },
  {
    id: 'members',
    eyebrow: 'Module 01 · Community Network',
    title: 'Meet the people gathering around this idea.',
    line: 'Real profiles, not posts.',
    bullets: ['What you bring', 'AI match score', 'Travel plans'],
    img: '/images/myconet/myconet-members.png',
    alt: 'MyCoNet members screen — resident profiles sorted by match score, each showing a short bio and location.',
    accent: 'var(--pink)',
  },
  {
    id: 'blueprint',
    eyebrow: 'Module 04 · Blueprint',
    title: 'Read the plan. The whole plan.',
    line: 'Open, honest, updated every week.',
    bullets: ['Four phases', 'Five pillars', 'Gate checks'],
    img: '/images/myconet/myconet-blueprint.png',
    alt: 'MyCoNet Blueprint screen — homes planned, land size and country shortlist, with completion bars for the Spark, Prove, Build and Live phases.',
    accent: 'var(--yellow-deep)',
  },
  {
    id: 'values',
    eyebrow: 'Module 05 · Join',
    title: 'Joining is signing the values — not paying a fee.',
    line: 'No NDAs. No hidden rules.',
    bullets: ['Read them', 'Sign what you stand behind', 'Bring the rest to the circle'],
    img: '/images/myconet/myconet-values.png',
    alt: 'MyCoNet join screen — five community values and best practices, each individually signed, above a submit application button.',
    accent: 'var(--green)',
  },
  {
    id: 'agreements',
    eyebrow: 'Module 06 · Agreements',
    title: 'Make visible deals.',
    line: 'What you will contribute. What you expect back.',
    bullets: ['Clear scope', 'Public by default', 'No side deals'],
    img: '/images/myconet/myconet-agreements.png',
    alt: 'MyCoNet agreements screen — open community projects with a proposal form for what a member will contribute and what they expect in return.',
    accent: 'var(--blue)',
  },
  {
    id: 'operations',
    eyebrow: 'Module 07 · Operations',
    title: 'See every promise. Watch every deliverable.',
    line: 'No surprises at the next meeting.',
    bullets: ['Live status', 'Timeline updates', 'Drift detection'],
    img: '/images/myconet/myconet-operations.png',
    alt: 'MyCoNet operations screen — counts of active projects, deliverables and completed work above a dated list of the latest deliverables.',
    accent: 'var(--pink)',
  },
  {
    id: 'contributions',
    eyebrow: 'Module 08 · Contributions',
    title: 'Log your effort. Get rewarded.',
    line: 'Volunteer work goes invisible. Not here.',
    bullets: ['Points', 'Badges', 'Reputation that travels'],
    img: '/images/myconet/myconet-contributions.png',
    alt: 'MyCoNet contributions screen — a member points total for the sprint, an earned badge, and a log of recent community contributions.',
    accent: 'var(--blue)',
  },
  {
    id: 'governance',
    eyebrow: 'Module 09 · Governance',
    title: 'Decide together.',
    line: 'Four layers run at once. Three of four approve — work begins.',
    bullets: ['Consent', 'Democracy', 'Meritocracy', 'AI facilitation'],
    img: '/images/myconet/myconet-governance.png',
    alt: 'MyCoNet governance screen — an active proposal evaluated in parallel across four layers: consent voting, democratic tally, an expert approval, and an AI facilitation summary.',
    extraWidths: [1024],
    accent: 'var(--green)',
  },
]

/* ── Access ladder ── */
const ladder = [
  { step: '01', title: 'Browse', note: 'No account needed', dot: 'var(--yellow-deep)' },
  { step: '02', title: 'Create an account', note: 'Free · 2 minutes', dot: 'var(--blue)' },
  { step: '03', title: 'Join the community', note: 'Sign the values', dot: 'var(--green)' },
  { step: '04', title: 'Member', note: 'All modules active', dot: 'var(--pink)' },
]

/* ── Reusable call to action ── */
function TryCta({ label = 'Test MyCoNet free', note }: { label?: string; note?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
      <motion.a
        href={DEMO}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '9px',
          fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', textDecoration: 'none',
          color: '#ffffff', backgroundColor: 'var(--text)',
          borderRadius: '9999px', padding: '13px 28px',
        }}
      >
        {label}
        <ArrowRight size={14} strokeWidth={1.75} />
      </motion.a>
      {note && (
        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{note}</span>
      )}
    </div>
  )
}

export default function ResidentialCommunitySoftwarePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="sec" style={{ padding: '96px 0 104px', borderBottom: '1px dashed var(--border-dashed)' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp} style={{ marginBottom: '28px' }}>
              <Link
                href="/tools"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', textDecoration: 'none',
                }}
              >
                <ArrowLeft size={13} strokeWidth={1.5} />
                Tools
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginBottom: '22px' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text)', border: '1px dashed var(--border-dashed)',
                borderRadius: '9999px', padding: '7px 16px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--green)' }} />
                MyCoNet · Community Operating System
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="hero-h1"
              style={{ fontSize: 'clamp(44px, 6.4vw, 82px)', fontWeight: 500, lineHeight: 1.04, letterSpacing: '-0.02em', maxWidth: '15ch' }}
            >
              Residential community software.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ marginTop: '28px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text)', maxWidth: '46ch' }}
            >
              One place to meet, plan, agree, build and decide — for the people
              creating Regenerative Neighborhoods.
            </motion.p>

            <motion.div variants={fadeUp} style={{ marginTop: '38px' }}>
              <TryCta label="Try the live demo" note="No account needed to browse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ MODULE STRIP ══ */}
      <section className="sec" style={{ padding: '96px 0', borderBottom: '1px dashed var(--border-dashed)', backgroundColor: '#f5f5f3' }}>
        <div className="wrap" style={wrap}>
          <motion.p
            initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '40px' }}
          >
            Eight modules
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mod-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'var(--border)' }}
          >
            {modules.map((m) => (
              <motion.a
                key={m.id}
                href={m.href}
                variants={fadeUp}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                style={{ backgroundColor: '#f5f5f3', padding: '28px 24px 30px', textDecoration: 'none', color: 'var(--text)', display: 'block' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '16px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: m.dot }} />
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{m.id}</span>
                </div>
                <div style={{ fontSize: '22px', marginBottom: '10px', color: 'var(--text)' }}>{m.glyph}</div>
                <p style={{ fontSize: '15px', lineHeight: 1.45 }}>{m.label}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ SCREENSHOT SECTIONS ══ */}
      {shots.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="sec"
          style={{
            padding: '104px 0',
            borderBottom: '1px dashed var(--border-dashed)',
            backgroundColor: i % 2 === 1 ? '#f5f5f3' : 'var(--bg)',
            scrollMarginTop: '72px', // sticky navbar height
          }}
        >
          <div className="wrap" style={wrap}>
            <motion.div
              initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
              className="shot-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.85fr 1.15fr',
                gap: '64px',
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              {/* Copy */}
              <div style={{ direction: 'ltr' }}>
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '20px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: s.accent }} />
                  <span style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {s.eyebrow}
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  style={{ fontSize: 'clamp(30px, 3.4vw, 42px)', fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.015em' }}
                >
                  {s.title}
                </motion.h2>

                <motion.p variants={fadeUp} style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.6, color: 'var(--text)' }}>
                  {s.line}
                </motion.p>

                <motion.div variants={fadeUp} style={{ marginTop: '26px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.bullets.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: '13px', color: 'var(--text)',
                        border: '1px dashed var(--border-dashed)',
                        borderRadius: '9999px', padding: '6px 14px',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} style={{ marginTop: '32px' }}>
                  <TryCta label="Try it live" />
                </motion.div>
              </div>

              {/* Screenshot */}
              <motion.div variants={fadeUp} style={{ direction: 'ltr' }}>
                <div style={{
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 18px 60px rgba(54,54,54,0.09)',
                }}>
                  <OptimizedImage
                    src={s.img}
                    alt={s.alt}
                    extraWidths={s.extraWidths}
                    sizes="(max-width: 900px) 100vw, 58vw"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ══ ACCESS LADDER ══ */}
      <section className="sec" style={{ padding: '104px 0', borderBottom: '1px dashed var(--border-dashed)' }}>
        <div className="wrap" style={wrap}>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}
            style={{ fontSize: 'clamp(30px, 3.4vw, 42px)', fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '48px' }}
          >
            How your access grows.
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="ladder-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}
          >
            {ladder.map((l) => (
              <motion.div
                key={l.step}
                variants={fadeUp}
                style={{ borderTop: `2px solid ${l.dot}`, paddingTop: '20px' }}
              >
                <p style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'monospace', marginBottom: '12px' }}>
                  STEP {l.step}
                </p>
                <p style={{ fontSize: '19px', fontWeight: 500, marginBottom: '6px' }}>{l.title}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{l.note}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} style={{ marginTop: '48px' }}>
            <TryCta label="Start browsing" note="Step one is free" />
          </motion.div>
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className="sec" style={{ padding: '112px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} style={{ maxWidth: '640px' }}>
            <motion.h2
              variants={fadeUp}
              style={{ fontSize: 'clamp(34px, 4.2vw, 54px)', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.02em' }}
            >
              Ready to step into the clubhouse?
            </motion.h2>

            <motion.p variants={fadeUp} style={{ marginTop: '22px', fontSize: '17px', lineHeight: 1.6, color: 'var(--text)' }}>
              Read the plan. Meet a member. When you are ready, sign the values.
            </motion.p>

            <motion.div variants={fadeUp} style={{ marginTop: '36px' }}>
              <TryCta label="Test MyCoNet free" note="Opens the live demo" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Responsive ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1100px) {
          .mod-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .shot-row { grid-template-columns: 1fr !important; gap: 40px !important; direction: ltr !important; }
          .ladder-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .mod-grid { grid-template-columns: 1fr !important; }
          .ladder-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </>
  )
}
