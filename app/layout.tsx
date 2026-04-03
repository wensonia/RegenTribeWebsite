import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            marginTop: '80px',
            padding: '48px 24px',
            backgroundColor: 'var(--bg)',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: '280px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--green-deep)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="4" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="6" cy="6" r="1.5" fill="white" />
                  </svg>
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--green-deep)',
                  }}
                >
                  Regen Tribe
                </span>
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                }}
              >
                Building a global ecosystem of regenerative neighborhoods — connecting people, projects &amp; solutions.
              </p>
            </div>

            {/* Links */}
            <div
              style={{
                display: 'flex',
                gap: '48px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--text)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  Platform
                </p>
                {['Tribes Platform', 'Agency', 'Education', 'About Us'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      marginBottom: '8px',
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--text)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  Community
                </p>
                {['Telegram', 'Discord', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      marginBottom: '8px',
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: '1200px',
              margin: '32px auto 0',
              paddingTop: '24px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} Regen Tribe. Building a better future.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['Privacy Policy', 'Terms'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
