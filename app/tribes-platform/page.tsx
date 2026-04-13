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
const stats = [
  { label: 'Registered Members', value: '1,379' },
  { label: 'Public Forums', value: '191' },
  { label: 'Discussions', value: '247' },
  { label: 'Replies', value: '417' },
  { label: 'Discussion Tags', value: '68' },
]

const features = [
  {
    title: 'Neighborhood Profiles',
    description: 'Browse detailed profiles of regenerative neighborhoods and create one for your established or emerging community.',
    cta: 'Explore Neighborhoods',
    href: 'https://tribesplatform.app/neighborhoods/',
    shape: '○',
    color: 'var(--green)',
    img: '/images/tribes-platform/neighborhoods.jpg',
  },
  {
    title: 'User Profiles',
    description: 'Create an individual profile to share your bio, your skills, and your ideal community — while connecting with others in the network.',
    cta: 'Meet the Tribe',
    href: 'https://tribesplatform.app/members/',
    shape: '△',
    color: 'var(--pink)',
    img: '/images/tribes-platform/members.jpg',
  },
  {
    title: 'Regenerative Resources',
    description: 'Share resources to build regenerative neighborhoods and discuss topics with the online community.',
    cta: 'Find Resources',
    href: 'https://tribesplatform.app/forums/',
    shape: '□',
    color: 'var(--yellow)',
    img: '/images/tribes-platform/forums.jpg',
  },
  {
    title: 'Community Feed',
    description: 'Follow topics, projects, and people — get updates of their journey on your feed and stay connected with the movement.',
    cta: 'See the Feed',
    href: 'https://tribesplatform.app/',
    shape: '○',
    color: 'var(--blue)',
    img: '/images/tribes-platform/feed.jpg',
  },
  {
    title: 'Community Alchemy Guide',
    description: 'A curated 11-step best practices guide to create regenerative neighborhoods — from vision to living ecosystem.',
    cta: 'Get the Guide',
    href: 'https://tribesplatform.app/alchemy/',
    shape: '△',
    color: 'var(--green)',
    img: '/images/tribes-platform/alchemy-guide.jpg',
  },
]

const extras = [
  {
    title: 'Regenerative Organizations',
    description: 'Meet the most active organizations in the field of building regenerative communities.',
    cta: 'Meet the Movers',
    href: 'https://tribesplatform.app/regen-orgs/',
    shape: '○',
    color: 'var(--blue)',
  },
  {
    title: 'Event Calendar',
    description: 'Stay up to date with all the upcoming and past regenerative community events worldwide.',
    cta: 'Regenerative Events',
    href: 'https://tribesplatform.app/events/',
    shape: '△',
    color: 'var(--green)',
  },
]

const modulesV2 = [
  { id: '01', name: 'Community Network',     desc: 'Profile-based discovery for community builders, vision holders, and service providers. Search, swipe, and connect with people building regenerative neighborhoods worldwide.', status: 'Building', color: 'var(--green)' },
  { id: '02', name: 'Neighborhood Directory', desc: 'Explore regenerative neighborhoods on a live map. Check in as a visitor, leave a guest book entry, and find communities that match your values.', status: 'Building', color: 'var(--green)' },
  { id: '03', name: 'Blueprint',             desc: 'The Regenerative Neighborhood Wizard — a guided, step-by-step design framework for planning your community. Built on the 5-Spiral model and Community Alchemy Guide.', status: 'Building', color: 'var(--green)' },
  { id: '04', name: 'Resources & Tools',     desc: 'A curated, community-powered archive of regenerative resources — articles, tools, case studies, guides, and templates. Searchable, filterable, continuously growing.', status: 'Building', color: 'var(--green)' },
  { id: '05', name: 'Movement Updates',      desc: 'A living timeline of the movement. Share updates, celebrate milestones, follow the communities and people you care about — the pulse of regenerative neighborhood life.', status: 'Building', color: 'var(--green)' },
  { id: '06', name: 'Join',                  desc: 'Apply to live in or collaborate with a regenerative neighborhood. Manages the full onboarding flow from initial inquiry to welcome.', status: 'Building', color: 'var(--green)' },
  { id: '07', name: 'Pacts',                 desc: 'Digital agreements and payment rails for community participation. Sign living agreements, set up recurring contributions, and manage financial commitments.', status: 'Planned', color: 'var(--blue)' },
  { id: '08', name: 'Operations',            desc: 'Internal operations for community teams — project boards, task assignment, budget tracking, and reporting. Everything a neighborhood needs to self-organize.', status: 'Planned', color: 'var(--blue)' },
  { id: '09', name: 'Community Glue',        desc: 'AI-powered pairing of people to communities, collaborators to projects, and skills to needs. The intelligence layer that puts the right people in the right places.', status: 'Building', color: 'var(--green)' },
  { id: '10', name: 'Governance',            desc: 'An AI-facilitated governance layer for community decision-making. Mediates conflicts, surfaces proposals, and guides transparent, values-aligned decisions.', status: 'Planned', color: 'var(--blue)' },
  { id: '11', name: 'Contribution Tracking', desc: 'Reputation points and badges that recognize participation across the ecosystem. Makes regenerative action visible, rewarding, and portable across communities.', status: 'Planned', color: 'var(--blue)' },
  { id: '12', name: 'AI Personal Assistant', desc: 'Your personal AI guide through the Regen Tribe ecosystem. Answers questions, surfaces opportunities, tracks your journey, and helps you navigate.', status: 'Planned', color: 'var(--pink)' },
  { id: '13', name: 'Hive',                  desc: 'The inter-community layer — connecting neighborhoods into a living network. Share resources, knowledge, surplus, and people across the ecosystem.', status: 'Planned', color: 'var(--blue)' },
]

const audiences = [
  { label: 'People with a vision to build regenerative community land developments', icon: '○' },
  { label: 'Community members who are seeking or living in intentional community', icon: '△' },
  { label: 'Organizations and service providers with skills in regeneration', icon: '□' },
  { label: 'Landowners and investors with resources for regeneration', icon: '○' },
]

/* ══════════════════════════════════════
    PAGE
══════════════════════════════════════ */
export default function TribesPlatformPage() {
  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--green)', minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...wrap, paddingTop: '120px', paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '24px',
              }}
            >
              Global Network
            </motion.p>

            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(44px, 6vw, 88px)',
                fontWeight: '400',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                color: 'white',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '32px',
                maxWidth: '700px',
              }}
            >
              Tribes<br />Platform
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '18px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: '1.6',
                marginBottom: '48px',
                maxWidth: '520px',
              }}
            >
              The networking &amp; education platform to accelerate the development of startup societies, regenerative neighborhoods, ecovillages &amp; sustainable communities.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <PillBtn href="https://tribesplatform.app/" bg="var(--text)" external>
                Explore the Platform
              </PillBtn>
              <OutlinePill href="https://tribesplatform.app/register/" light external>
                Join the Movement
              </OutlinePill>
            </motion.div>
          </motion.div>
        </div>
        {/* decorative shape */}
        <div style={{ position: 'absolute', right: '-60px', bottom: '-60px', width: '340px', height: '340px', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: '60px', bottom: '60px', width: '200px', height: '200px', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: '50%', pointerEvents: 'none' }} />
      </section>

      {/* ════════════════════════════════
          WHO IS THIS FOR
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              Who is this for
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '64px',
                maxWidth: '560px',
              }}
            >
              Create, grow, or find regenerative neighborhoods.
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
              {audiences.map((a) => (
                <motion.div key={a.label} variants={fadeUp} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '24px', color: 'var(--green)', lineHeight: '1.2', flexShrink: 0 }}>{a.icon}</span>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text)', fontWeight: '300' }}>{a.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          PLATFORM FEATURES
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--text)', padding: '120px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '16px',
              }}
            >
              What is happening on Tribes
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'white',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '80px',
                maxWidth: '620px',
              }}
            >
              Connect with the global network of humans creating regenerative neighborhoods.
            </motion.h2>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            {features.map((f) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={vp}
              >
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="phone-card"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', textAlign: 'center', maxWidth: '240px' }}
                >
                  {/* Phone frame */}
                  <div className="phone-body" style={{ borderTopColor: f.color }}>
                    <div className="phone-notch" />
                    <div className="phone-screen">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={f.img}
                        alt={`${f.title} on Tribes Platform`}
                        className="phone-scroll-img"
                      />
                    </div>
                  </div>

                  {/* Text below phone */}
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)', marginBottom: '14px' }}>
                    {f.description}
                  </p>
                  <span className="phone-card-cta" style={{ color: f.color }}>
                    {f.cta} <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* ── Also on Tribes — text-only extras ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={vp}
            style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}
          >
            {extras.map((e) => (
              <motion.a
                key={e.title}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '28px 36px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: 'white',
                  maxWidth: '320px',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '22px', color: e.color, marginBottom: '4px' }}>{e.shape}</span>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>{e.title}</span>
                <span style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.5)' }}>{e.description}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: e.color, marginTop: '8px' }}>
                  {e.cta} <ArrowRight size={14} strokeWidth={2} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          PLATFORM FEATURES — ALT (floating boxes)
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              Explore the Platform — Alt Layout
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(32px, 3.5vw, 56px)',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '80px',
                maxWidth: '620px',
              }}
            >
              Connect with the global network of humans creating regenerative neighborhoods.
            </motion.h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {features.map((f) => (
              <motion.a
                key={f.title}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={vp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="floating-card"
                style={{
                  display: 'flex',
                  gap: '28px',
                  alignItems: 'center',
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Phone */}
                <div className="phone-body floating-phone-sm" style={{ borderTopColor: f.color, flexShrink: 0 }}>
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.img} alt={`${f.title} on Tribes Platform`} className="phone-scroll-img floating-phone-img" />
                  </div>
                </div>

                {/* Text */}
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontSize: '22px', color: f.color, display: 'block', marginBottom: '10px' }}>{f.shape}</span>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '400',
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    letterSpacing: '-0.01em',
                    marginBottom: '10px',
                    color: 'var(--text)',
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                  }}>
                    {f.description}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: f.color,
                  }}>
                    {f.cta} <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Extras — fills the 6th grid slot, next to Alchemy Guide */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={vp}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}
            >
              {extras.map((e) => (
                <motion.a
                  key={`alt-${e.title}`}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    padding: '24px 32px',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    flex: 1,
                  }}
                >
                  <span style={{ fontSize: '28px', color: e.color, flexShrink: 0 }}>{e.shape}</span>
                  <div>
                    <span style={{ fontSize: '15px', fontWeight: '600', display: 'block', marginBottom: '4px' }}>{e.title}</span>
                    <span style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--text-muted)' }}>{e.description}</span>
                  </div>
                  <ArrowRight size={16} strokeWidth={2} style={{ color: e.color, flexShrink: 0 }} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              Tribes Platform Stats
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '64px',
              }}
            >
              A growing community of co.creators
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px' }}>
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: 'clamp(40px, 4vw, 64px)',
                    fontWeight: '400',
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    color: 'var(--green)',
                    letterSpacing: '-0.02em',
                    lineHeight: '1',
                    marginBottom: '12px',
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          V2 TRIBES — MYCONET MODULES
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              What&apos;s Next
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(28px, 3vw, 48px)',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '16px',
                maxWidth: '560px',
              }}
            >
              v2 Tribes — MyCoNet
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '17px',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '56px',
                maxWidth: '560px',
              }}
            >
              A full-stack modular app — 13 interconnected modules on a shared database, from global networking to AI-powered community operations.
            </motion.p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {modulesV2.map((m) => (
              <motion.div
                key={m.id}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={vp}
                style={{
                  padding: '28px',
                  border: '1px dashed var(--border-dashed)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: m.color,
                  }}>
                    {m.id}
                  </span>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: m.status === 'Building' ? 'var(--green)' : 'var(--blue)',
                    backgroundColor: m.status === 'Building' ? 'rgba(111,198,162,0.1)' : 'rgba(128,138,235,0.1)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                  }}>
                    {m.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: 'var(--text)', marginBottom: '8px' }}>
                  {m.name}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)', fontWeight: '300' }}>
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA
      ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--green)', padding: '120px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: '400',
                letterSpacing: '-0.02em',
                color: 'white',
                fontFamily: 'var(--font-lora), Georgia, serif',
                marginBottom: '20px',
              }}
            >
              Join the community of community co.creators
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '17px',
                fontWeight: '300',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '1.6',
                marginBottom: '48px',
              }}
            >
              Connect with people, projects, and solutions accelerating regenerative neighborhood development worldwide.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <PillBtn href="https://tribesplatform.app/register/" bg="var(--text)" external>
                Join the Movement
              </PillBtn>
              <OutlinePill href="https://tribesplatform.app/" light external>
                Explore the Platform
              </OutlinePill>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Phone mockup styles ── */}
      <style>{`
        .phone-body {
          width: 220px;
          height: 450px;
          background: #1a1a1a;
          border-radius: 32px;
          padding: 10px;
          border: 2px solid rgba(255,255,255,0.10);
          border-top-width: 3px;
          position: relative;
          margin: 0 auto 20px auto;
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
          filter: brightness(0.6) saturate(0.3);
          transition: filter 0.4s ease, transform 0s ease 0s;
          transform: translateY(0);
        }
        .phone-card:hover .phone-scroll-img {
          filter: brightness(1) saturate(1);
          transform: translateY(calc(-100% + 430px));
          transition: filter 0.4s ease, transform 25s linear 0.3s;
        }
        .phone-card:hover .phone-body {
          box-shadow: 0 8px 32px rgba(255,255,255,0.06);
        }
        .phone-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: gap 0.15s ease;
        }
        .phone-card:hover .phone-card-cta {
          gap: 10px;
        }
        /* ── Floating card variant ── */
        .floating-phone-sm {
          width: 160px !important;
          height: 328px !important;
          border-radius: 26px !important;
          padding: 7px !important;
        }
        .floating-phone-sm .phone-screen {
          border-radius: 20px;
        }
        .floating-phone-sm .phone-notch {
          width: 38px;
          height: 13px;
          border-radius: 0 0 8px 8px;
          top: 7px;
        }
        .floating-phone-img {
          filter: brightness(1) saturate(1) !important;
          transition: transform 0s ease 0s !important;
          transform: translateY(0);
        }
        .floating-card:hover .floating-phone-img {
          transform: translateY(calc(-100% + 314px));
          transition: transform 25s linear 0.3s !important;
        }
        @media (max-width: 900px) {
          .floating-card {
            flex-direction: column !important;
            text-align: center;
          }
        }
        @media (max-width: 900px) {
          .phone-body {
            width: 180px;
            height: 368px;
            border-radius: 28px;
            padding: 8px;
          }
          .phone-screen { border-radius: 22px; }
          .phone-notch { width: 42px; height: 14px; border-radius: 0 0 9px 9px; top: 8px; }
        }
        @media (max-width: 900px) {
          .phone-card:hover .phone-scroll-img {
            transform: translateY(calc(-100% + 350px));
          }
        }
        @media (max-width: 540px) {
          .phone-scroll-img {
            filter: brightness(0.8) saturate(0.7);
          }
        }
      `}</style>
    </>
  )
}
