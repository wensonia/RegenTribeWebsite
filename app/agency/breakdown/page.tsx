'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

/* ── Layout ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }
const narrow: React.CSSProperties = { maxWidth: '960px', margin: '0 auto', padding: `0 ${PX}` }

/* ── Animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const vp = { once: true, margin: '-60px' as const }

/* ── Cycle 1 hierarchical data ── */
type SubItem = { label: string; price?: string; time?: string }
type C1Row = {
  offering: string          // section/parent name (column B)
  subitems?: SubItem[]      // column C items with optional price/time
  price?: string            // section-level price (when subitems share one price)
  time?: string             // section-level time
  accent?: string
}

const c1Strategy: C1Row[] = [
  {
    offering: 'Self assessment form',
    subitems: [{ label: 'High level overview of your neighborhood structure and where you are on your journey' }],
    price: 'Free', time: '1–1.5 h',
  },
  {
    offering: 'Discovery meeting / call',
    subitems: [{ label: 'WHY — we discuss your high level intention, big why' }],
    price: '$100', time: '1–2 h',
  },
  {
    offering: 'Community Culture Canvas Workshop\nCommunity visioning documentation review',
    subitems: [{ label: 'HOW — community visioning review documentation. Assessment of your project\'s purpose and how you embody it — Culture canvas, Community / Business plan' }],
    price: '$200', time: '2 h',
  },
  {
    offering: 'Neighborhood Project Mind Map',
    price: '$200', time: '2 h',
  },
  {
    offering: 'Strategy essentials workshop',
    subitems: [
      { label: 'Organizational chart (roles & responsibilities)', price: '$100', time: '1 h' },
      { label: 'Timeline & Milestones', price: '$100', time: '1 h' },
      { label: 'Group Agreements & On/Off Boarding Process', price: '$100', time: '1 h' },
    ],
  },
]

const c1Operations: C1Row[] = [
  {
    offering: 'Project management structure set up',
    subitems: [{ label: 'Task management / Kanban board creation', price: '$300', time: '4 hrs' }],
  },
  {
    offering: 'Documentation Review & Summary',
    subitems: [
      { label: 'Document Glossary', price: '$200' },
      { label: 'High level notion', price: '$300' },
    ],
  },
  {
    offering: 'Community communication channels review',
    subitems: [
      { label: 'Internal team communication' },
      { label: 'Internal community / Residents communication', price: '$100', time: '1 h' },
      { label: 'External community communication' },
    ],
  },
  {
    offering: 'Technology review',
    subitems: [{ label: 'Digital Tools' }],
  },
  {
    offering: 'Finance review',
    subitems: [{ label: 'Proforma / P&L', price: '$200', time: '2 h' }],
  },
  {
    offering: 'Legal structure review',
    subitems: [
      { label: 'Land legal structure' },
      { label: 'Resident agreements' },
    ],
  },
]

const c1Marketing: C1Row[] = [
  {
    offering: 'Existing marketing assessment\n(understanding what exists)',
    price: '$200', time: '2 h',
    subitems: [
      { label: 'Pre branding & Branding' },
      { label: 'Deck' },
      { label: 'One Pager' },
      { label: 'Raw content' },
      { label: 'Website' },
      { label: 'Socials' },
      { label: 'Tour video' },
      { label: 'Explainer videos' },
    ],
  },
]

/* ── Cycle 2 data (11 steps) ── */
const c2Steps = [
  {
    num: '#1',
    title: 'Hone Your Community Vision',
    phase: 'Ideation',
    color: 'var(--green)',
    items: ['Your ethos & values', 'Your big why', 'Mission & vision statement', 'Community type', 'Community culture canvas update', '1, 3, 5 & 10 year goals', 'Inventory of key roles'],
  },
  {
    num: '#2',
    title: 'Recruit Your Ideal Members',
    phase: 'Ideation',
    color: 'var(--green)',
    items: ['Inventory of current stakeholders', 'Screening process', 'Recruitment methods', 'Community agreements', 'Onboarding & offboarding process'],
  },
  {
    num: '#3',
    title: 'Align with Group Agreements & Governance',
    phase: 'Ideation',
    color: 'var(--green)',
    items: ['Conflict resolution', 'Governance structures', 'Legal structures', 'Community layout', 'Community activities', 'Business models'],
  },
  {
    num: '#4',
    title: 'Design Your Community & Income Models',
    phase: 'Design',
    color: 'var(--pink)',
    items: ['Defining community areas & structures', 'Defining public & private spaces', 'Transportation needs', 'Community revenue & expenses'],
  },
  {
    num: '#5',
    title: 'Acquire the Best Land for Your Needs',
    phase: 'Design',
    color: 'var(--pink)',
    items: ['Considerations for finding land', 'How to look for & acquire land', 'Ownership models', 'Legal framework', 'Land assessment'],
  },
  {
    num: '#6',
    title: 'Strategize Your Funding',
    phase: 'Design',
    color: 'var(--pink)',
    items: ['Brand building exercises', 'Financial needs assessment', 'Strategies to raise & track capital', 'Update funding needs'],
  },
  {
    num: '#7',
    title: 'Strategize Your Marketing',
    phase: 'Design',
    color: 'var(--pink)',
    items: ['Strategies to raise & track capital', 'Marketing strategies', 'Recruit ideal members'],
  },
  {
    num: '#8',
    title: 'Master Plan Your Neighborhoods & City: Sustainable Systems, Housing, Roads, Structures',
    phase: 'Building',
    color: 'var(--blue)',
    items: ['Water system', 'Food system', 'Energy system', 'Air', 'Waste management', 'Housing', 'Transport', 'Update funding needs', 'Plan of your sustainable systems'],
  },
  {
    num: '#9',
    title: 'Construct Your Physical Neighborhoods',
    phase: 'Building',
    color: 'var(--blue)',
    items: ['Phases of building', 'Service providers', 'Design', 'Materials', 'Construction methods', 'Plan of your physical infrastructure'],
  },
  {
    num: '#10',
    title: 'Live In Your Dream Community & Curate Community Culture',
    phase: 'Operations',
    color: 'var(--yellow)',
    items: ['Community org chart', 'Recommended trainings', 'Community culture programming', 'Assessment tools'],
  },
  {
    num: '#11',
    title: 'Create, Manage, and Review Holistic Community Ecosystems',
    phase: 'Operations',
    color: 'var(--yellow)',
    items: ['Leadership & Management', 'Operations & Logistics', 'Local relationship building'],
  },
]

/* ── Cycle 3 data ── */
const c3PM = [
  { title: 'Mind map & org chart activation', desc: 'We bring your community organizational structure to life' },
  { title: 'Project management', desc: 'We set up your Kanban board system to manage community strategy and operations' },
]
const c3Alchemists = [
  { title: 'Collaboration with Regen Alchemists', desc: 'We connect you with verified service providers to visit you on-site and fill identified gaps' },
]
const c3Marketing = [
  { title: 'Branding kit', desc: 'Deck, one pager, Instagram, external presentation materials' },
  { title: 'Social media management', desc: 'Facebook, Google location, Twitter, LinkedIn' },
  { title: 'Website & content creation', desc: 'On-site video/photography, graphic design' },
  { title: 'Recruitment / Real Estate Marketing', desc: 'Community member funnel, Regen Tribe recruitment calls, inclusion in the Regen Lifestyle portfolio' },
  { title: 'Community hacking', desc: 'Pitch exercise, documentation, and potential community member funnel building' },
]
const c3Workshops = [
  { cat: 'Mycelium Activations', items: ['Community Request & Offer board', 'Myconet software'] },
  { cat: 'Vitality / physical health programming', items: ['Animal flow class', 'Stretching / Partner stretching', 'Community Gym Time'] },
  { cat: 'Entrepreneurship Activations', items: ['Pitch forum', 'Co.working sessions', 'Networking sessions', 'Hackathon for your community initiative'] },
  { cat: 'Conscious Connection Programming', items: ['Community sharing circles', 'Authentic Relating Workshops'] },
  { cat: 'Operational Meetings', items: ['Community Morning Check-Ins', 'Weekly community operational meeting'] },
  { cat: 'Community Co.Creation Workshops', items: ['Community Ideation', 'Community Design', 'Community Building', 'Community Activation'] },
]
const c3Programs = [
  { title: 'Energy Exchange Program', desc: 'We activate an energy exchange program — recruiting key roles and creating structure for volunteer members to contribute to the community' },
  { title: 'Residents Recruitment', desc: 'Recruitment campaign to bring in more guests and mid & long term residents through various channels' },
  { title: 'Local Community Relations Program', desc: 'Assessment of your local area and a campaign to connect with neighbors, identify needs & offerings, and form win-win relationships' },
]

/* ── Hierarchical row component for Cycle 1 ── */
function OfferingRow({ row, accent }: { row: C1Row; accent: string }) {
  const hasSubitemPrices = row.subitems?.some(s => s.price)
  return (
    <motion.div variants={fadeUp} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 0' }}>
      {/* Parent row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 100px 80px', gap: '0', alignItems: 'start' }}>
        <p style={{ fontSize: '14px', fontWeight: '600', color: 'white', paddingRight: '24px', lineHeight: '1.5', whiteSpace: 'pre-line' }}>{row.offering}</p>
        {/* If no subitems or subitems have no individual prices, show price in the parent row */}
        <div style={{ paddingRight: '24px' }} />
        <p style={{ fontSize: '14px', fontWeight: '600', color: accent, textAlign: 'right', paddingRight: '24px' }}>
          {!hasSubitemPrices && row.price ? row.price : ''}
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>
          {!hasSubitemPrices && row.time ? row.time : ''}
        </p>
      </div>
      {/* Sub-items — in the outcome (2nd) column */}
      {row.subitems && row.subitems.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '4px' }}>
          {row.subitems.map((sub, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 100px 80px', gap: '0', alignItems: 'start', padding: '5px 0' }}>
              {/* Empty first col to keep alignment */}
              <div />
              {/* Sub-item text in outcome col */}
              <div style={{ paddingRight: '24px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: accent, fontSize: '12px', flexShrink: 0, marginTop: '3px' }}>—</span>
                <p style={{ fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.65)', lineHeight: '1.55' }}>{sub.label}</p>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: accent, textAlign: 'right', paddingRight: '24px' }}>{sub.price || ''}</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>{sub.time || ''}</p>
            </div>
          ))}
        </div>
      )}
      {/* Section-level price when subitems exist but price is on parent */}
      {row.subitems && !hasSubitemPrices && !row.price && null}
    </motion.div>
  )
}

/* ── Section label ── */
function SectionLabel({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', marginTop: '40px' }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />
      <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{label}</p>
    </div>
  )
}

export default function BreakdownPage() {
  return (
    <>
      {/* ── Nav breadcrumb ── */}
      <header style={{ backgroundColor: '#ededed', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logos/logo-black-text.png" alt="Regen Tribe" style={{ height: '28px', width: 'auto' }} />
          </Link>
          <Link href="/agency" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Agency
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: 'var(--text)', padding: '100px 0 80px' }}>
        <div style={narrow}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
              Regen Tribe Agency
            </motion.p>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: '400', letterSpacing: '-0.03em', color: 'white', fontFamily: 'var(--font-lora), Georgia, serif', lineHeight: '1.05', marginBottom: '28px' }}>
              Process breakdown.
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '18px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', maxWidth: '600px', marginBottom: '48px' }}>
              A detailed look at everything we do across our three cycles — what we offer, what you get, and how long it takes.
            </motion.p>
            {/* Cycle pill nav */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { label: 'Cycle 1 — Understand', color: 'var(--green)', href: '#cycle1' },
                { label: 'Cycle 2 — Optimize', color: 'var(--pink)', href: '#cycle2' },
                { label: 'Cycle 3 — Activate', color: 'var(--blue)', href: '#cycle3' },
              ].map(({ label, color, href }) => (
                <a key={label} href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em', color: 'white', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9999px', padding: '10px 20px', textDecoration: 'none' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color }} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CYCLE 1 ════════════ */}
      <section id="cycle1" style={{ backgroundColor: '#2a2a2a', padding: '100px 0' }}>
        <div style={narrow}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            {/* Cycle header */}
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Cycle 01</span>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: '400', letterSpacing: '-0.025em', color: 'var(--green)', fontFamily: 'var(--font-lora), Georgia, serif', marginBottom: '16px' }}>
              understand.
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', maxWidth: '620px', marginBottom: '56px' }}>
              We assess and understand the current status of your Regenerative Neighborhood. Every item below can be taken individually or as a package.
            </motion.p>

            {/* Table header */}
            <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 100px 80px', gap: '0', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '12px', marginBottom: '4px' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Offering</p>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', paddingRight: '24px' }}>Outcome</p>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textAlign: 'right', paddingRight: '24px' }}>Price</p>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textAlign: 'right' }}>Time</p>
            </motion.div>

            <SectionLabel label="Strategy" color="var(--green)" />
            {c1Strategy.map((row) => <OfferingRow key={row.offering} row={row} accent="var(--green)" />)}

            <SectionLabel label="Operations" color="var(--green)" />
            {c1Operations.map((row) => <OfferingRow key={row.offering} row={row} accent="var(--green)" />)}

            <SectionLabel label="Marketing" color="var(--green)" />
            {c1Marketing.map((row) => <OfferingRow key={row.offering} row={row} accent="var(--green)" />)}

            {/* Total */}
            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '24px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', marginTop: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Cycle 1 Total</p>
              <p style={{ fontSize: '28px', fontWeight: '600', color: 'var(--green)', fontFamily: 'var(--font-lora), Georgia, serif' }}>$2,100</p>
            </motion.div>
            <motion.p variants={fadeUp} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textAlign: 'right', marginTop: '8px', fontStyle: 'italic' }}>
              We provide you with assessment materials and documents from the current state of your project after the workshop.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CYCLE 2 ════════════ */}
      <section id="cycle2" style={{ backgroundColor: 'var(--text)', padding: '100px 0' }}>
        <div style={narrow}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            <motion.div variants={fadeUp} style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Cycle 02</span>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: '400', letterSpacing: '-0.025em', color: 'var(--pink)', fontFamily: 'var(--font-lora), Georgia, serif', marginBottom: '16px' }}>
              optimize.
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', maxWidth: '680px', marginBottom: '16px' }}>
              We design and optimize your Regenerative Neighborhood plan based on the 11-step Community Alchemy Guide ©. Every project has different parts done at different levels of completion — we ask the questions that are crucial for success, share proven solutions, and connect you with verified service providers.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.35)', marginBottom: '64px', fontStyle: 'italic' }}>
              Pricing and time vary based on the size of your project, needs, and current status.
            </motion.p>

            {/* 10 steps grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }} className="breakdown-grid">
              {c2Steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={vp}
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '36px 40px', borderRadius: i === 0 ? '8px 0 0 0' : i === 1 ? '0 8px 0 0' : i === c2Steps.length - 2 ? '0 0 0 8px' : i === c2Steps.length - 1 ? '0 0 8px 0' : '0' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)' }}>{step.num}</span>
                    <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '9999px', padding: '3px 10px', color: step.color }}>{step.phase}</span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '500', color: 'white', fontFamily: 'var(--font-lora), Georgia, serif', lineHeight: '1.3', marginBottom: '20px' }}>{step.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {step.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: step.color, fontWeight: '700', flexShrink: 0, fontSize: '12px', marginTop: '2px' }}>—</span>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CYCLE 3 ════════════ */}
      <section id="cycle3" style={{ backgroundColor: '#2a2a2a', padding: '100px 0' }}>
        <div style={narrow}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>

            <motion.div variants={fadeUp} style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Cycle 03</span>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: '400', letterSpacing: '-0.025em', color: 'var(--blue)', fontFamily: 'var(--font-lora), Georgia, serif', marginBottom: '16px' }}>
              activate.
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', maxWidth: '620px', marginBottom: '16px' }}>
              We come to your neighborhood to bring the plan to life — activating your community, amplifying your story, and connecting you to the right people and systems.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.35)', marginBottom: '64px', fontStyle: 'italic' }}>
              Pricing and time vary based on the size of your project, needs, and current status.
            </motion.p>

            {/* PM + Alchemists */}
            <motion.div variants={fadeUp}>
              <SectionLabel label="Project Management" color="var(--blue)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '4px' }}>
                {c3PM.map((item) => (
                  <div key={item.title} style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '24px 32px', borderRadius: '4px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px', alignItems: 'start' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', color: 'white' }}>{item.title}</p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <SectionLabel label="Regen Alchemists" color="var(--blue)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '4px' }}>
                {c3Alchemists.map((item) => (
                  <div key={item.title} style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '24px 32px', borderRadius: '4px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px', alignItems: 'start' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', color: 'white' }}>{item.title}</p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <SectionLabel label="Marketing" color="var(--blue)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '4px' }}>
                {c3Marketing.map((item) => (
                  <div key={item.title} style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '24px 32px', borderRadius: '4px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px', alignItems: 'start' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', color: 'white' }}>{item.title}</p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Community Lab Programming */}
        <div style={{ ...narrow, marginTop: '80px' }}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.div variants={fadeUp} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '64px' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: '16px' }}>Community Lab Programming</p>
              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: '400', color: 'white', fontFamily: 'var(--font-lora), Georgia, serif', marginBottom: '16px', lineHeight: '1.2' }}>
                Our team comes on-site to foster community and bring in new residents.
              </h3>
              <p style={{ fontSize: '16px', fontWeight: '300', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', maxWidth: '640px', marginBottom: '56px' }}>
                We host culture-building and educational workshops, activate energy exchange and impact programs, and offer workshops (a few hours) as well as full programs (extended over time) for your neighborhood.
              </p>
            </motion.div>

            {/* Workshops grid */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>Workshops & Activations</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '48px' }} className="breakdown-grid-3">
                {c3Workshops.map((cat) => (
                  <div key={cat.cat} style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '28px 32px', borderRadius: '4px' }}>
                    <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--yellow)', marginBottom: '16px' }}>{cat.cat}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {cat.items.map((item) => (
                        <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--yellow)', fontWeight: '700', flexShrink: 0, fontSize: '12px' }}>—</span>
                          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Programs */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>Programs</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {c3Programs.map((item) => (
                  <div key={item.title} style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '28px 32px', borderRadius: '4px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: '32px', alignItems: 'start' }}>
                    <p style={{ fontSize: '15px', fontWeight: '500', color: 'white', lineHeight: '1.4' }}>{item.title}</p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA footer ── */}
      <section style={{ backgroundColor: 'var(--text)', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ ...narrow, textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" variants={stagger} viewport={vp}>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: '400', letterSpacing: '-0.025em', color: 'white', fontFamily: 'var(--font-lora), Georgia, serif', marginBottom: '20px' }}>
              Ready to start your journey?
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', fontWeight: '300', color: 'rgba(255,255,255,0.45)', marginBottom: '40px' }}>
              Book a free discovery call to find out where your project is today.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="https://tribesplatform.app/create-community/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)', backgroundColor: 'var(--green)', borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none' }}>
                Start Assessment <ArrowRight size={14} />
              </motion.a>
              <Link href="/agency" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'white', backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '9999px', padding: '12px 32px', textDecoration: 'none' }}>
                <ArrowLeft size={14} /> Back to Agency
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        :root {
          --green: #6fc6a2;
          --green-deep: #3d8c6e;
          --pink: #f16ab0;
          --blue: #808aeb;
          --yellow: #ffe682;
          --text: #363636;
          --text-muted: #888;
          --border: rgba(54,54,54,0.12);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Open Sans', sans-serif; background: #ededed; color: #363636; }
        @media (max-width: 760px) {
          .breakdown-grid { grid-template-columns: 1fr !important; }
          .breakdown-grid-3 { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .offering-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
