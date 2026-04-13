'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Tribes Platform', href: '/tribes-platform', dot: 'var(--green)' },
  { label: 'Agency', href: '/agency', dot: 'var(--pink)' },
  { label: 'Tools', href: '/tools', dot: 'var(--yellow-deep)' },
  { label: 'Blog', href: '/blog', dot: 'var(--green)' },
  { label: 'About Us', href: '/about', dot: 'var(--blue)' },
]

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
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
              <Link href={link.href} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', fontWeight: '400', color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: link.dot, flexShrink: 0 }} />
                {link.label}
              </Link>
            </motion.div>
          ))}
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: '400', color: 'var(--text)', textDecoration: 'none', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: link.dot, flexShrink: 0 }} />
              {link.label}
            </Link>
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
