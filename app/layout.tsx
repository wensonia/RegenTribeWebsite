import type { Metadata } from 'next'
import { Lora, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import NewsletterCTA from '@/components/NewsletterCTA'
import SmoothScroll from '@/components/SmoothScroll'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Regen Tribe — Regenerative Neighborhood Accelerator',
  description:
    'The Regen Tribe ecosystem connects people, projects & solutions so we can create more regenerative neighborhoods around the world.',
  openGraph: {
    title: 'Regen Tribe',
    description: 'Create, grow & find regenerative neighborhoods.',
    url: 'https://regentribe.co',
    siteName: 'Regen Tribe',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body>
        <SmoothScroll>
        <Navbar />
        <main>{children}</main>

        {/* NEWSLETTER CTA — appears on every page above footer */}
        <NewsletterCTA />

        {/* FOOTER */}
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
          }}
        >
          <div
            className="footer-wrap"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '72px 40px 48px',
            }}
          >
            {/* Top row */}
            <div
              className="footer-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '40px',
                paddingBottom: '56px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Brand */}
              <div>
                <div style={{ marginBottom: '20px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logos/logo-black-text.png"
                    alt="Regen Tribe"
                    style={{ height: '36px', width: 'auto' }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.65',
                    maxWidth: '220px',
                  }}
                >
                  Building a global ecosystem of regenerative neighborhoods — for people and planet.
                </p>
              </div>

              {/* Platform links */}
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                  }}
                >
                  Our Ecosystem
                </p>
                {[
                  { label: 'Tribes Platform', href: '/tribes-platform' },
                  { label: 'Agency', href: '/agency' },
                  { label: 'Tools', href: '/tools' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'About Us', href: '/about' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '400',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      marginBottom: '14px',
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Community links */}
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                  }}
                >
                  Community
                </p>
                {/* Social icons row */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <a
                    href="https://t.me/+fsFL1jIIGM9jOWFh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.2 4.6 2.5 11.1c-.6.2-.6.6 0 .8l4.7 1.5 1.8 5.8c.1.4.6.5.9.3l2.6-2.1 5.1 3.7c.4.3 1 .1 1.1-.4L22.3 5.5c.2-.6-.4-1.1-1.1-.9z" />
                      <path d="m9.2 13.4 8.3-6.3" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/regen.tribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/regen-tribe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/regen.tribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/regentribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://regentribe.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Substack"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                    </svg>
                  </a>
                  <a
                    href="https://medium.com/@regentribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    style={{ color: 'var(--text)', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  </a>
                </div>
                {/* Text links */}
                {[
                  { label: 'Contact', href: 'mailto:hello@regentribe.co', external: true },
                  { label: 'Join the Movement', href: '/join', external: false },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '400',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      marginBottom: '14px',
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '24px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                &copy; {new Date().getFullYear()} Regen Tribe. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Privacy', 'Terms'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 900px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding-bottom: 40px !important; }
          }
          @media (max-width: 540px) {
            .footer-wrap { padding: 48px 20px 32px !important; }
          }
        `}} />
        </SmoothScroll>
      </body>
    </html>
  )
}
