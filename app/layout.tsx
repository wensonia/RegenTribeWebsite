import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
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
    <html lang="en" className={openSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: '1px solid var(--border)', marginTop: '120px' }}>
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '64px 40px 40px',
            }}
          >
            {/* Top row */}
            <div
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
                <p
                  style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: 'var(--primary)',
                    lineHeight: '1',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                  }}
                >
                  Regen<br />Tribe
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    maxWidth: '220px',
                  }}
                >
                  Building a global ecosystem of regenerative neighborhoods.
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
                {['Tribes Platform', 'Agency', 'Education', 'About Us'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      marginBottom: '12px',
                    }}
                  >
                    {item}
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
                {['Telegram', 'Discord', 'Contact', 'Join the Movement'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      marginBottom: '12px',
                    }}
                  >
                    {item}
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
                © {new Date().getFullYear()} Regen Tribe
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
      </body>
    </html>
  )
}
