'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'

/* ── Types ── */
type SubLink = {
  label: string
  href: string
  external?: boolean
}

type NavItem = {
  label: string
  href: string
  dot: string
  sub?: SubLink[]
}

/* ── Nav structure ── */
const navLinks: NavItem[] = [
  {
    label: 'Agency',
    href: '/agency',
    dot: 'var(--pink)',
    sub: [
      { label: 'Our Process', href: '/agency#process' },
      { label: 'Portfolio', href: '/agency#portfolio' },
      { label: 'Service Breakdown', href: '/agency/breakdown' },
    ],
  },
  {
    label: 'Tools',
    href: '/tools',
    dot: 'var(--yellow-deep)',
    sub: [
      { label: 'The Hive', href: '/tools#hive' },
      { label: 'Community Alchemy Guide', href: '/tools#alchemy-guide' },
      { label: 'Agent Program', href: '/agentprogram' },
      { label: 'Regen Tech Stack', href: '/tech-stack' },
      { label: 'Regen Neighborhood Framework', href: '/tools#framework' },
    ],
  },
  {
    label: 'Tribes Platform',
    href: '/tribes-platform',
    dot: 'var(--green)',
  },
  {
    label: 'About Us',
    href: '/about',
    dot: 'var(--blue)',
    sub: [
      { label: 'Our Collective', href: '/about#collective' },
      { label: 'Join', href: '/join' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    dot: 'var(--green)',
  },
]

/* ── Dropdown component ── */
function NavDropdown({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current)
    setOpen(true)
  }
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150)
  }

  /* Close on outside click (safety) */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} onMouseEnter={enter} onMouseLeave={leave} style={{ position: 'relative' }}>
      <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
        <Link
          href={item.href}
          onClick={onNavigate}
          style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            fontSize: '13px', fontWeight: '400', color: 'var(--text)',
            textDecoration: 'none', letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.dot, flexShrink: 0 }} />
          {item.label}
          <ChevronDown
            size={12}
            strokeWidth={1.5}
            style={{
              marginLeft: '-2px',
              transition: 'transform 0.2s ease',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              opacity: 0.45,
            }}
          />
        </Link>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 12px)',
              left: '0',
              minWidth: '220px',
              backgroundColor: 'white',
              boxShadow: '0 12px 48px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
              border: '1px solid rgba(54, 54, 54, 0.06)',
              borderRadius: '8px',
              padding: '6px 0',
              zIndex: 100,
            }}
          >
            {/* Invisible bridge so mouse doesn't lose hover between link and dropdown */}
            <div style={{ position: 'absolute', top: '-12px', left: 0, right: 0, height: '12px' }} />

            {item.sub!.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => { setOpen(false); onNavigate?.() }}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  margin: '2px 6px',
                  fontSize: '13px',
                  fontWeight: '400',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  borderRadius: '5px',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(54,54,54,0.06)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
              >
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Simple nav link (no dropdown) ── */
function NavLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  return (
    <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
      <Link
        href={item.href}
        onClick={onNavigate}
        style={{
          display: 'flex', alignItems: 'center', gap: '7px',
          fontSize: '13px', fontWeight: '400', color: 'var(--text)',
          textDecoration: 'none', letterSpacing: '0.08em',
          textTransform: 'uppercase' as const,
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.dot, flexShrink: 0 }} />
        {item.label}
      </Link>
    </motion.div>
  )
}

/* ── Mobile accordion item ── */
function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false)

  if (!item.sub) {
    return (
      <Link href={item.href} onClick={onClose}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: '400', color: 'var(--text)', textDecoration: 'none', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: item.dot, flexShrink: 0 }} />
        {item.label}
      </Link>
    )
  }

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Parent row – tap toggles accordion, link still goes to parent page */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 0' }}>
        <Link href={item.href} onClick={onClose}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: '400', color: 'var(--text)', textDecoration: 'none', flexGrow: 1 }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: item.dot, flexShrink: 0 }} />
          {item.label}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', color: 'var(--text)' }}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            style={{ transition: 'transform 0.2s ease', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingLeft: '24px', paddingBottom: '12px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {item.sub.map((sub) => (
                <Link key={sub.href} href={sub.href} onClick={onClose}
                  style={{ display: 'block', padding: '10px 0', fontSize: '16px', fontWeight: '400', color: 'rgba(54,54,54,0.7)', textDecoration: 'none' }}>
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Main Navbar ── */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(237, 237, 237, 0.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <nav className="nav-bar" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logos/logo-black-text.png" alt="Regen Tribe" style={{ height: '36px', width: 'auto' }} />
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {navLinks.map((item) =>
            item.sub
              ? <NavDropdown key={item.href} item={item} />
              : <NavLink key={item.href} item={item} />
          )}
        </div>

        {/* CTA */}
        <div className="desktop-cta">
          <Link href="/join" className="cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '500', color: 'var(--text)', textDecoration: 'none', borderRadius: '9999px', padding: '8px 20px', transition: 'all 0.25s ease', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>
            Join the Movement
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="mobile-btn" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--text)' }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mobile-menu"
          style={{ backgroundColor: 'rgba(237, 237, 237, 0.85)', borderTop: '1px solid var(--border)', padding: '24px 40px 32px' }}
        >
          {navLinks.map((item) => (
            <MobileNavItem key={item.href} item={item} onClose={() => setOpen(false)} />
          ))}
          <Link href="/join" onClick={() => setOpen(false)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '28px', fontSize: '16px', fontWeight: '500', color: 'var(--text)', textDecoration: 'none' }}>
            Join the Movement
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
        @media (max-width: 540px) {
          .nav-bar { padding-left: 20px !important; padding-right: 20px !important; }
          .mobile-menu { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </header>
  )
}
