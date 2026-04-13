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
                  Platform
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
                {[
                  { label: 'Telegram', href: 'https://t.me/+fsFL1jIIGM9jOWFh', external: true },
                  { label: 'Instagram', href: 'https://www.instagram.com/regen.tribe', external: true },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/regen-tribe/', external: true },
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
