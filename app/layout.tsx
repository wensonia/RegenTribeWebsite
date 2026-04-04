import type { Metadata } from 'next'
import { Lora, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

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

/* ── Regen Tribe Logo Mark SVG ── */
function LogoMark({ size = 36, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer triangle */}
      <polygon
        points="30,4 56,53 4,53"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Square centered at (30, 35), side 19 */}
      <rect x="20.5" y="25.5" width="19" height="19" stroke={color} strokeWidth="1.8" fill="none" />
      {/* Circle centered at (30, 35), r=6.5 */}
      <circle cx="30" cy="35" r="6.5" stroke={color} strokeWidth="1.5" fill="none" />
      {/* 4 dots: 2×2 grid */}
      <circle cx="27.4" cy="32.4" r="1.3" fill={color} />
      <circle cx="32.6" cy="32.4" r="1.3" fill={color} />
      <circle cx="27.4" cy="37.6" r="1.3" fill={color} />
      <circle cx="32.6" cy="37.6" r="1.3" fill={color} />
    </svg>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '72px 40px 48px',
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <LogoMark size={32} color="var(--primary)" />
                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        lineHeight: '1',
                      }}
                    >
                      Regen Tribe
                    </p>
                    <p
                      style={{
                        fontSize: '10px',
                        fontWeight: '500',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginTop: '3px',
                      }}
                    >
                      RN Accelerator
                    </p>
                  </div>
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
                {['Tribes Platform', 'Agency', 'Education', 'About Us'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '400',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      marginBottom: '14px',
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
                      fontWeight: '400',
                      color: 'var(--text)',
                      textDecoration: 'none',
                      marginBottom: '14px',
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
                © {new Date().getFullYear()} Regen Tribe. All rights reserved.
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
