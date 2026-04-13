'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Users, Compass, Wrench, Landmark } from 'lucide-react'
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

/* ── Shared components ── */
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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'var(--text-muted)', marginBottom: '28px',
    }}>{children}</p>
  )
}

/* ── Data ── */
const archetypes = [
  {
    id: 'vision-holder',
    icon: Compass,
    title: 'Vision Holder',
    color: 'var(--green)',
    colorDeep: 'var(--green-deep)',
    tagline: 'I have land or a project I want to develop into a Regenerative Neighborhood',
    journey: [
      { step: 'Share Your Vision', desc: 'Tell us about your land project, your goals, and your community vision.' },
      { step: 'Get a Consultation', desc: 'Our agency team helps you assess your project and create a regenerative development plan.' },
      { step: 'Access Tools & Network', desc: 'Use the Alchemy Guide, connect with service providers, and tap into the Tribes Platform network.' },
      { step: 'Grow Your Neighborhood', desc: 'From empowered to activated to fully regenerative — we support you at every phase.' },
    ],
    cta: { label: 'Get Agency Support', href: '/agency', external: false },
  },
  {
    id: 'community-member',
    icon: Users,
    title: 'Community Member',
    color: 'var(--blue)',
    colorDeep: 'var(--blue-deep)',
    tagline: 'I\'m looking for a Regenerative Neighborhood to join or invest in',
    journey: [
      { step: 'Explore Communities', desc: 'Browse our database of 60+ Regenerative Neighborhoods worldwide on the Tribes Platform.' },
      { step: 'Connect with Residents', desc: 'Join community calls, visit Community Labs, and find the right fit for your lifestyle.' },
      { step: 'Apply & Move In', desc: 'Each neighborhood has its own process — we help you navigate it.' },
    ],
    cta: { label: 'Browse Neighborhoods', href: 'https://tribesplatform.app', external: true },
  },
  {
    id: 'service-provider',
    icon: Wrench,
    title: 'Service Provider',
    color: 'var(--pink)',
    colorDeep: 'var(--pink-deep)',
    tagline: 'I offer services relevant to regenerative development',
    journey: [
      { step: 'List Your Services', desc: 'Create a profile on the Tribes Platform and get discovered by neighborhood projects worldwide.' },
      { step: 'Get Matched', desc: 'We connect you with Vision Holders and communities that need your expertise.' },
      { step: 'Become a Regen Alchemist', desc: 'Level up through our training to become a certified regenerative neighborhood consultant.' },
    ],
    cta: { label: 'Service Provider Guide', href: 'https://regentribe.notion.site/Regen-Service-Provider-Journey-9ffde0aaa3db428b8d61f84c4a324e34', external: true },
  },
  {
    id: 'resource-holder',
    icon: Landmark,
    title: 'Resource Holder',
    color: 'var(--yellow-deep)',
    colorDeep: 'var(--yellow-deep)',
    tagline: 'I have land or capital to invest in Regenerative Neighborhoods',
    journey: [
      { step: 'Discover Opportunities', desc: 'Review our portfolio of active and upcoming regenerative land development projects.' },
      { step: 'Choose Your Model', desc: 'Invest through equity, revenue sharing, or direct land partnerships — multiple models available.' },
      { step: 'Partner with Us', desc: 'Work with our team and Vision Holders to bring regenerative neighborhoods to life.' },
    ],
    cta: { label: 'Learn About Contributing', href: 'https://regentribe.notion.site/Resource-holder-12abfd4bcbe8806c967ce086e42d5609', external: true },
  },
]

const journeySteps = [
  {
    title: 'Collective Member',
    color: 'var(--pink)',
    emoji: '🌱',
    desc: 'Every human that connects with us online is part of the collective.',
    tasks: ['Follow our socials', 'Make your profile on Tribes Platform', 'Join the Collective Telegram'],
    perks: ['Access to the Regen Tribe network', 'Invites to online events & calls'],
  },
  {
    title: 'Ambassador',
    color: 'var(--green)',
    emoji: '🌿',
    desc: 'Engage with the movement, share the mission, and take on focused tasks.',
    tasks: [
      'Level 1 — engage on socials, join group calls, invite friends',
      'Level 2 — take on specific roles aligned with your skills',
    ],
    perks: ['Earn Hugs points by logging hours', 'Community Lab invites', 'Network access for your needs'],
  },
  {
    title: 'Collaborator',
    color: 'var(--blue)',
    emoji: '🌳',
    desc: 'Take on mission-critical tasks and receive compensation for your contributions.',
    tasks: [
      'Contribute defined skills and thought work to a specific project',
      'Receive proof of collaboration NFTs',
    ],
    perks: ['Revenue share or set project payment', 'Collective income based on contribution area'],
  },
  {
    title: 'Core Team',
    color: 'var(--yellow-deep)',
    emoji: '🌍',
    desc: 'Remote or in-person position working at the heart of the collective.',
    tasks: ['Lead initiatives and strategy', 'Shape the direction of the ecosystem'],
    perks: ['Full compensation model', 'Decision-making votes', 'All collective benefits'],
  },
]

const valueTypes = [
  { title: 'Hugs', desc: 'Tokens that reflect your contribution to the collective. Log hours, earn Hugs.', icon: '🤗' },
  { title: 'Collective Income', desc: 'Earn money from collective income based on your area of contribution.', icon: '💰' },
  { title: 'Team Recognition', desc: 'Featured on socials, added to the team page, recommendations and experience credit.', icon: '⭐' },
  { title: 'Network Access', desc: 'Connect with our global network of regenerators for any of your needs.', icon: '🌐' },
  { title: 'Community Labs', desc: 'Priority access to in-person community lab residencies at our partner locations.', icon: '🏡' },
  { title: 'Decision-Making', desc: 'Core team members participate in collective governance and votes.', icon: '🗳️' },
]

/* ── Archetype Card ── */
function ArchetypeCard({ arch }: { arch: typeof archetypes[number] }) {
  const [open, setOpen] = useState(false)
  const Icon = arch.icon
  return (
    <motion.div
      variants={fadeUp}
      style={{
        border: `1px dashed var(--border-dashed)`,
        borderRadius: '16px',
        padding: '32px',
        cursor: 'pointer',
        background: open ? 'white' : 'transparent',
        transition: 'background 0.3s',
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px',
            backgroundColor: arch.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Icon size={24} color="white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '22px', fontWeight: '500', marginBottom: '4px' }}>
              {arch.title}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{arch.tagline}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, marginTop: '4px' }}>
          <ChevronDown size={20} color="var(--text-muted)" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: '28px', paddingLeft: '64px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
                {arch.journey.map((j, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      border: `2px solid ${arch.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', fontWeight: '600', color: arch.colorDeep, flexShrink: 0,
                    }}>{i + 1}</div>
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: '600', marginBottom: '2px' }}>{j.step}</p>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{j.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {arch.cta.external ? (
                <motion.a
                  href={arch.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '14px', fontWeight: '600', color: arch.colorDeep,
                    textDecoration: 'none',
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.15 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {arch.cta.label} <ArrowRight size={14} strokeWidth={2} />
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: 'inline-flex' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link href={arch.cta.href} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '14px', fontWeight: '600', color: arch.colorDeep,
                    textDecoration: 'none',
                  }}>
                    {arch.cta.label} <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Journey Step Card ── */
function JourneyStep({ step, index, isLast }: { step: typeof journeySteps[number]; index: number; isLast: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '48px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          backgroundColor: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', flexShrink: 0,
        }}>{step.emoji}</div>
        {!isLast && <div style={{ width: '2px', height: '100%', minHeight: '40px', backgroundColor: 'var(--border)' }} />}
      </div>
      <div
        style={{
          marginLeft: '20px', paddingBottom: isLast ? '0' : '32px', flex: 1,
          cursor: 'pointer',
        }}
        onClick={() => setOpen(!open)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
          <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '20px', fontWeight: '500' }}>{step.title}</h3>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} color="var(--text-muted)" />
          </motion.div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{step.desc}</p>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ padding: '16px', borderRadius: '12px', border: '1px dashed var(--border-dashed)' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>What you do</p>
                  {step.tasks.map((t, i) => (
                    <p key={i} style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text)', marginBottom: '4px' }}>• {t}</p>
                  ))}
                </div>
                <div style={{ padding: '16px', borderRadius: '12px', border: '1px dashed var(--border-dashed)' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>What you get</p>
                  {step.perks.map((p, i) => (
                    <p key={i} style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text)', marginBottom: '4px' }}>• {p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function JoinPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section style={{ padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={wrap}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Get Involved</Label>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '400', lineHeight: '1.15',
              marginBottom: '20px',
            }}>
              Join the Collective
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontSize: '18px', lineHeight: '1.6', color: 'var(--text-muted)',
              maxWidth: '600px', margin: '0 auto 40px',
            }}>
              Choose the path that fits you in the Regenerative Neighborhood movement.
              Whether you have a project or want to contribute your skills — there&apos;s a place for you.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <PillBtn href="#archetypes">I have a project</PillBtn>
              <PillBtn href="#ecosystem" light>I want to contribute</PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARCHETYPE CARDS ─── */}
      <section id="archetypes" style={{ padding: '60px 0 80px' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Choose your path</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '12px',
              }}>Who are you?</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '540px', marginBottom: '40px' }}>
                Select the role that best describes you to see your journey with Regen Tribe.
              </p>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {archetypes.map(a => <ArchetypeCard key={a.id} arch={a} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div style={{ ...wrap as object, borderTop: '1px dashed var(--border-dashed)', margin: '0 auto' } as React.CSSProperties} />

      {/* ─── ECOSYSTEM JOURNEY ─── */}
      <section id="ecosystem" style={{ padding: '80px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>Build the ecosystem with us</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '12px',
              }}>Your journey in the collective</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', marginBottom: '48px' }}>
                Our collective comprises contributors with different levels of involvement. It&apos;s a journey — grow at your own pace.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} style={{ maxWidth: '680px' }}>
              {journeySteps.map((step, i) => (
                <JourneyStep key={step.title} step={step} index={i} isLast={i === journeySteps.length - 1} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div style={{ ...wrap as object, borderTop: '1px dashed var(--border-dashed)', margin: '0 auto' } as React.CSSProperties} />

      {/* ─── VALUE EXCHANGE ─── */}
      <section style={{ padding: '80px 0' }}>
        <div style={wrap}>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Label>How we value your contributions</Label>
              <h2 style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', marginBottom: '12px',
              }}>Creating collective abundance</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', marginBottom: '48px' }}>
                We use traditional compensation alongside community models of exchange — sharing what we have in abundance for what you have in abundance.
              </p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
              {valueTypes.map(v => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  style={{
                    border: '1px dashed var(--border-dashed)', borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FOOTER ─── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div style={wrap}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            style={{
              backgroundColor: 'var(--text)', borderRadius: '24px', padding: '64px 48px',
              textAlign: 'center',
            }}
          >
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '400', color: 'white', marginBottom: '16px',
            }}>Start your journey</motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto 36px' }}>
              Join the growing network of community co-creators building Regenerative Neighborhoods worldwide.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
              <PillBtn href="https://tribesplatform.app" light external>Join Tribes Platform</PillBtn>
              <PillBtn href="https://t.me/+fsFL1jIIGM9jOWFh" light external>Join Telegram</PillBtn>
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/regen.tribe' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/regen-tribe/' },
                { label: 'Facebook', href: 'https://www.facebook.com/regen.tribe' },
                { label: 'Substack', href: 'https://regentribe.substack.com/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                >{s.label}</a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
