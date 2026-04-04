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
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1',
          }}
        >
          <span
            style={{
              fontSize: '13px',
              fontWeight: '800',
              color: 'var(--green-deep)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Regen Tribe
          </span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: '500',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}
          >
            RN Accelerator
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.02em',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — outlined square style */}
        <Link
          href="/join"
          className="desktop-cta"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--green-deep)',
            textDecoration: 'none',
            border: '1.5px solid var(--green-deep)',
            padding: '8px 16px',
          }}
        >
          Join the Movement
          <span
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2px',
              width: '12px',
              height: '12px',
            }}
          >
            {[0,1,2,3].map(i => (
              <span
                key={i}
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'var(--green-deep)',
                }}
              />
            ))}
          </span>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: 'var(--text)',
          }}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: 'var(--bg)',
            borderTop: '1px solid var(--border)',
            padding: '24px 40px 32px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontSize: '20px',
                fontWeight: '700',
                color: 'var(--text)',
                textDecoration: 'none',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: '8px',
              fontSize: '13px',
              fontWeight: '700',
              color: 'var(--green-deep)',
              textDecoration: 'none',
              border: '1.5px solid var(--green-deep)',
              padding: '12px 24px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Join the Movement
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
