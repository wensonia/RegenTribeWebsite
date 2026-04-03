'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Tribes Platform', href: '/tribes-platform' },
  { label: 'Agency', href: '/agency' },
  { label: 'Education', href: '/education' },
  { label: 'About Us', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'var(--green-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="7" cy="7" r="2" fill="white" />
            </svg>
          </span>
          <span
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: 'var(--green-deep)',
              letterSpacing: '-0.01em',
            }}
          >
            Regen Tribe
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLAnchorElement).style.color = 'var(--text)'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLAnchorElement).style.color = 'var(--text-muted)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'white',
              backgroundColor: 'var(--green-deep)',
              padding: '8px 20px',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'background-color 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLAnchorElement).style.backgroundColor = 'var(--green-mid)'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLAnchorElement).style.backgroundColor = 'var(--green-deep)'
            }}
          >
            Join the Movement
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: 'var(--text)',
          }}
          className="mobile-menu-btn"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            backgroundColor: 'var(--bg)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: 'var(--text)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setOpen(false)}
            style={{
              marginTop: '12px',
              fontSize: '15px',
              fontWeight: '600',
              color: 'white',
              backgroundColor: 'var(--green-deep)',
              padding: '12px 20px',
              borderRadius: '100px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Join the Movement
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
