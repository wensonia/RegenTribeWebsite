'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Tribes Platform', href: '/tribes-platform', dot: 'var(--green)' },
  { label: 'Agency', href: '/agency', dot: 'var(--pink)' },
  { label: 'Education', href: '/education', dot: 'var(--yellow)' },
  { label: 'About Us', href: '/about', dot: 'var(--blue)' },
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
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — real PNG */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/logo-black-text.png"
            alt="Regen Tribe"
            style={{ height: '38px', width: 'auto' }}
          />
        </Link>

        {/* Desktop nav — centered links with colored dots */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: link.dot,
                  flexShrink: 0,
                }}
              />
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — pill button */}
        <Link
          href="/join"
          className="desktop-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.03em',
            color: 'var(--primary)',
            textDecoration: 'none',
            border: '1.5px solid var(--primary)',
            borderRadius: '9999px',
            padding: '9px 22px',
          }}
        >
          Join the Movement
          <span
            style={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
            }}
          >
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--text)',
                textDecoration: 'none',
                paddingBottom: '18px',
                borderBottom: '1px solid var(--border)',
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: link.dot,
                  flexShrink: 0,
                }}
              />
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--primary)',
              textDecoration: 'none',
              border: '1.5px solid var(--primary)',
              borderRadius: '9999px',
              padding: '12px 28px',
            }}
          >
            Join the Movement
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
