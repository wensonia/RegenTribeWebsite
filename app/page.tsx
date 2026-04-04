import Link from 'next/link'

const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ══════════════════════════════════════════════════
   DECORATIVE SHAPES — circle, triangle, square only
══════════════════════════════════════════════════ */

function Circle({
  size,
  color,
  outline,
  style,
}: {
  size: number
  color: string
  outline?: boolean
  style?: React.CSSProperties
}) {
  if (outline) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        style={{ flexShrink: 0, ...style }}
      >
        <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="3" fill="none" />
      </svg>
    )
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        flexShrink: 0,
        ...style,
      }}
    />
  )
}

function Square({
  size,
  color,
  outline,
  style,
}: {
  size: number
  color: string
  outline?: boolean
  style?: React.CSSProperties
}) {
  if (outline) {
    return (
      <div
        style={{
          width: size,
          height: size,
          border: `2.5px solid ${color}`,
          backgroundColor: 'transparent',
          flexShrink: 0,
          ...style,
        }}
      />
    )
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        flexShrink: 0,
        ...style,
      }}
    />
  )
}

function Triangle({
  size,
  color,
  outline,
  style,
}: {
  size: number
  color: string
  outline?: boolean
  style?: React.CSSProperties
}) {
  const h = Math.round(size * 0.866)
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 100 86.6"
      fill="none"
      style={{ flexShrink: 0, ...style }}
    >
      <polygon
        points="50,0 100,86.6 0,86.6"
        fill={outline ? 'none' : color}
        stroke={outline ? color : 'none'}
        strokeWidth={outline ? '3' : '0'}
      />
    </svg>
  )
}

/* ══════════════════════════════════════════════════
   UI COMPONENTS
══════════════════════════════════════════════════ */

/* Pill button */
function PillBtn({
  href,
  children,
  dark,
  external,
}: {
  href: string
  children: React.ReactNode
  dark?: boolean
  external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    color: dark ? 'white' : 'var(--primary)',
    backgroundColor: dark ? 'var(--primary)' : 'transparent',
    border: '1.5px solid var(--primary)',
    borderRadius: '9999px',
    padding: '13px 28px',
    textDecoration: 'none',
    flexShrink: 0,
  }

  const arrow = (
    <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={dark ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
        {arrow}
      </a>
    )
  }
  return (
    <Link href={href} style={style}>
      {children}
      {arrow}
    </Link>
  )
}

/* Section eyebrow label */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '20px',
      }}
    >
      {children}
    </p>
  )
}

/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */

const timeline = [
  { year: '2021', title: 'Community Becomes the Goal', desc: 'First eco-hotel-to-RN consultation. Raised $150K for renewable energy. Moved to Tulum to launch the RT Incubator house.' },
  { year: '2022', title: 'Growing the Network', desc: 'RT Incubator houses in Tulum. Identified 200+ neighborhoods worldwide. Launched Regen Tribe Discord. Developed v1 guide for RN development.' },
  { year: '2023', title: 'Building the Ecosystem', desc: 'Vitalia Longevity Startup City. First Agent Program. Tribes v1. Community Lab 1 in Ixchel, Mexico. D.pact Istanbul, Free Cities Conference.' },
  { year: '2024', title: 'On-Site at Communities', desc: 'Active at WildSeeds, Community Lab X, and Network School Pop-up City. AI-powered co-living tools developed in Malaysia.' },
  { year: '2025', title: 'Digital Tools & RN Alliance', desc: 'Launching AI integrations and digital tools. RN Alliance kick-off. First permanent RT location at Aldea Kuyabeh.' },
  { year: '2030', title: 'Kuyabeh Collective Spaces', desc: '10-flower Regenerative Neighborhood at Kuyabeh completes its collective spaces, establishing a vibrant hub near Tulum.' },
  { year: '2040', title: 'Dozens of RNs Globally', desc: 'Kuyabeh, The Ark, Alpaca, Wild Seeds, and key European & Asian sites reach 5% of global population.' },
  { year: '2100', title: 'Regenerative Neighborhoods Everywhere', desc: 'A global network of 53M+ communities. 80% of the world population with access to a regenerative neighborhood.' },
]

const projects = [
  {
    name: 'Aldea Kuyabeh',
    loc: 'Tulum, Mexico',
    tag: 'Land Development',
    dot: 'var(--green)',
    desc: '365-hectare regenerative micro-city outside Tulum. 10-flower neighborhood model, construction begins 2027.',
  },
  {
    name: 'The Ark',
    loc: 'Costa Rica',
    tag: 'Alliance Partner',
    dot: 'var(--pink)',
    desc: 'Micro regenerative neighborhoods in the rainforest, focusing on ecological balance and resilient living systems.',
  },
  {
    name: 'WildSeeds Collective',
    loc: 'California, USA',
    tag: 'Agency Support',
    dot: 'var(--blue)',
    desc: 'Implementing team management systems, wikis, and community agreements for an evolving urban collective.',
  },
  {
    name: 'Community Lab X',
    loc: 'Tulum, Mexico',
    tag: 'Incubator Hub',
    dot: 'var(--yellow-deep)',
    desc: 'Transforming a retreat center into a thriving community hub with activated sustainable systems and programs.',
  },
]

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════
          HERO — centered editorial
      ════════════════════════════════ */}
      <section
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Floating decorative shapes */}
        <Circle
          size={96}
          color="var(--yellow)"
          style={{ position: 'absolute', top: '40px', left: '6%', opacity: 0.7 }}
        />
        <Triangle
          size={80}
          color="var(--green)"
          style={{ position: 'absolute', top: '60px', right: '8%', opacity: 0.65 }}
        />
        <Square
          size={56}
          color="var(--pink)"
          style={{ position: 'absolute', bottom: '60px', left: '10%', opacity: 0.6 }}
        />
        <Circle
          size={44}
          color="var(--blue)"
          style={{ position: 'absolute', bottom: '80px', right: '12%', opacity: 0.7 }}
        />
        <Triangle
          size={44}
          color="var(--pink-deep)"
          outline
          style={{ position: 'absolute', top: '100px', left: '22%', opacity: 0.3 }}
        />
        <Square
          size={32}
          color="var(--blue-deep)"
          outline
          style={{ position: 'absolute', bottom: '100px', right: '24%', opacity: 0.3 }}
        />

        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <Label>Regenerative Neighborhood Accelerator</Label>

          <h1
            style={{
              fontSize: 'clamp(60px, 8vw, 110px)',
              fontWeight: '400',
              lineHeight: '1.0',
              color: 'var(--primary)',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            Create, grow<br />
            &amp; find your<br />
            community.
          </h1>

          <p
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'var(--text-muted)',
              lineHeight: '1.65',
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}
          >
            The Regen Tribe ecosystem connects people, projects &amp; solutions
            to accelerate regenerative neighborhood development worldwide.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <PillBtn href="/join" dark>Join the Movement</PillBtn>
            <PillBtn href="https://tribesplatform.app" external>Tribes Platform</PillBtn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TICKER / marquee strip
      ════════════════════════════════ */}
      <div
        style={{
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--primary)',
          padding: '15px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: '56px',
            animation: 'marquee 32s linear infinite',
          }}
        >
          {Array(3).fill(null).map((_, i) =>
            ['People', 'Projects', 'Solutions', 'Neighborhoods', 'Ecosystem', 'Community', 'Regeneration', 'Land', 'Alliance'].map((word) => (
              <span
                key={`${i}-${word}`}
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '56px',
                }}
              >
                {word}
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--yellow)',
                    marginLeft: '-48px',
                  }}
                />
              </span>
            ))
          )}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>

      {/* ════════════════════════════════
          WHY / HOW / WHAT
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          {/* Full-width serif heading */}
          <h2
            style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: '400',
              lineHeight: '1.1',
              color: 'var(--text)',
              marginBottom: '72px',
              maxWidth: '820px',
              letterSpacing: '-0.01em',
            }}
          >
            Re-developing society through regenerative neighborhoods — for people and planet.
          </h2>

          {/* Three columns with dashed borders */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0',
            }}
          >
            {[
              {
                tag: 'Why',
                dot: 'var(--pink)',
                heading: 'Improve life for humanity while healing our planet.',
                body: 'We focus on meeting core human needs — air, water, food, shelter, energy, connection, and self-actualization — through regenerative circular systems with net positive impact.',
              },
              {
                tag: 'How',
                dot: 'var(--yellow)',
                heading: 'Real estate, intentional community, circular economy.',
                body: 'Regenerative Neighborhoods are real estate developments built around resilient resource systems, intentional community practices, and self-sustaining local economies.',
              },
              {
                tag: 'What',
                dot: 'var(--blue)',
                heading: 'A platform, a global alliance, and real-world projects.',
                body: 'We build digital tools, forge international alliances, and develop land projects — starting with micro-communities in Mexico and Costa Rica, expanding globally.',
              },
            ].map((card, i) => (
              <div
                key={card.tag}
                style={{
                  padding: '40px 40px',
                  borderTop: '1.5px dashed var(--border-dashed)',
                  borderRight: i < 2 ? '1.5px dashed var(--border-dashed)' : 'none',
                  borderLeft: 'none',
                  borderBottom: 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '28px',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: card.dot,
                    }}
                  />
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {card.tag}
                  </p>
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '1.3',
                    color: 'var(--text)',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-lora), Georgia, serif',
                  }}
                >
                  {card.heading}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.7',
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TRIBES PLATFORM — dark section
      ════════════════════════════════ */}
      <section
        style={{
          backgroundColor: 'var(--primary)',
          padding: '120px 0',
        }}
      >
        <div style={wrap}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '100px',
              alignItems: 'start',
            }}
          >
            {/* Left */}
            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '28px',
                }}
              >
                The Platform
              </p>
              <h2
                style={{
                  fontSize: 'clamp(40px, 5vw, 66px)',
                  fontWeight: '400',
                  lineHeight: '1.05',
                  color: 'white',
                  marginBottom: '32px',
                  letterSpacing: '-0.01em',
                }}
              >
                Tribes<br />Platform
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: '1.7',
                  marginBottom: '44px',
                  maxWidth: '360px',
                }}
              >
                The people, neighborhoods &amp; solutions of the Regenerative Neighborhood
                Movement — all in one digital ecosystem.
              </p>

              {/* Shape trio decoration */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '44px' }}>
                <Circle size={28} color="rgba(245,220,122,0.7)" />
                <Triangle size={26} color="rgba(168,217,176,0.7)" />
                <Square size={22} color="rgba(162,200,232,0.7)" />
              </div>

              <a
                href="https://tribesplatform.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.02em',
                  color: 'white',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  borderRadius: '9999px',
                  padding: '12px 28px',
                }}
              >
                Visit tribesplatform.app
                <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right — three pillars with dashed borders */}
            <div>
              {[
                {
                  num: '01',
                  sub: 'The Movement',
                  title: 'Global Network',
                  desc: 'Connect with community creators, service providers, and resource holders building RNs worldwide.',
                  dot: 'var(--green)',
                },
                {
                  num: '02',
                  sub: 'The Catalyzer',
                  title: 'Education & Tools',
                  desc: 'Access the 11-step Alchemy Guide, resource database, Agent Program vocational training, and assessment rubrics.',
                  dot: 'var(--yellow)',
                },
                {
                  num: '03',
                  sub: 'RT Agency',
                  title: 'Direct Support',
                  desc: 'Hands-on consulting from our core team, or self-guided tools to plan and build your own Regenerative Neighborhood.',
                  dot: 'var(--pink)',
                },
              ].map((p, i) => (
                <div
                  key={p.num}
                  style={{
                    padding: '32px 0',
                    borderTop: i === 0 ? '1.5px dashed rgba(255,255,255,0.15)' : 'none',
                    borderBottom: '1.5px dashed rgba(255,255,255,0.15)',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'rgba(255,255,255,0.25)',
                      letterSpacing: '0.06em',
                      marginTop: '4px',
                      flexShrink: 0,
                      width: '24px',
                    }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          backgroundColor: p.dot,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontSize: '10px',
                          fontWeight: '600',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {p.sub}
                      </p>
                    </div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '400',
                        color: 'white',
                        marginBottom: '10px',
                        fontFamily: 'var(--font-lora), Georgia, serif',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: '1.6',
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TIMELINE — 2021 → 2100
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            {/* Sticky left */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <Label>The Journey</Label>
              <h2
                style={{
                  fontSize: 'clamp(44px, 4vw, 60px)',
                  fontWeight: '400',
                  lineHeight: '1.1',
                  color: 'var(--text)',
                  marginBottom: '24px',
                  letterSpacing: '-0.01em',
                }}
              >
                2021<br />→<br />2100
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.65',
                  marginBottom: '40px',
                  maxWidth: '220px',
                }}
              >
                From a Tulum incubator house to a planet of regenerative neighborhoods.
              </p>

              {/* Shape trio */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                <Circle size={36} color="var(--yellow)" />
                <Triangle size={36} color="var(--green)" />
                <Square size={30} color="var(--blue)" />
              </div>
            </div>

            {/* Timeline items */}
            <div>
              {timeline.map((item, i) => {
                const isFuture = parseInt(item.year) > 2025
                return (
                  <div
                    key={item.year}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr',
                      gap: '28px',
                      paddingBottom: '44px',
                      borderBottom: i < timeline.length - 1 ? '1.5px dashed var(--border-dashed)' : 'none',
                      paddingTop: i > 0 ? '44px' : '0',
                      opacity: isFuture ? 0.4 : 1,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: isFuture ? 'var(--text-muted)' : 'var(--blue-deep)',
                          letterSpacing: '0.01em',
                          fontFamily: 'var(--font-open-sans), sans-serif',
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '1.3',
                          color: 'var(--text)',
                          marginBottom: '10px',
                          fontFamily: 'var(--font-lora), Georgia, serif',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-muted)',
                          lineHeight: '1.65',
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PROJECTS IN MOTION
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '64px',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <Label>Active Collaborations</Label>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 62px)',
                  fontWeight: '400',
                  lineHeight: '1.05',
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}
              >
                Projects<br />in Motion
              </h2>
            </div>
            <PillBtn href="/projects">See All Projects</PillBtn>
          </div>

          {/* Dashed border project cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.name}
                style={{
                  borderTop: '1.5px dashed var(--border-dashed)',
                  borderRight: i < projects.length - 1 ? '1.5px dashed var(--border-dashed)' : 'none',
                  borderBottom: '1.5px dashed var(--border-dashed)',
                  borderLeft: 'none',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}
              >
                {/* Top: colored shape accent */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: p.dot,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: '400',
                    color: 'var(--text)',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    lineHeight: '1.2',
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {p.loc}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    flexGrow: 1,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          JOIN — centered editorial statement
      ════════════════════════════════ */}
      <section style={{ padding: '140px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background shapes */}
        <Circle
          size={140}
          color="var(--yellow)"
          style={{ position: 'absolute', top: '-40px', right: '5%', opacity: 0.35 }}
        />
        <Triangle
          size={100}
          color="var(--green)"
          style={{ position: 'absolute', bottom: '-20px', left: '4%', opacity: 0.3 }}
        />
        <Square
          size={64}
          color="var(--pink)"
          style={{ position: 'absolute', bottom: '60px', right: '15%', opacity: 0.35 }}
        />
        <Circle
          size={44}
          color="var(--blue)"
          outline
          style={{ position: 'absolute', top: '80px', left: '18%', opacity: 0.3 }}
        />

        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <Label>Get Involved</Label>

          <h2
            style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: '400',
              lineHeight: '1.05',
              color: 'var(--text)',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              margin: '0 auto 40px',
            }}
          >
            Become part of<br />
            the regenerative<br />
            future.
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-muted)',
              lineHeight: '1.65',
              maxWidth: '480px',
              margin: '0 auto 48px',
            }}
          >
            Whether you have land to develop, skills to contribute, or are simply
            seeking community — there is a vital role for you in the Regen Tribe.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '72px',
            }}
          >
            <PillBtn href="/join" dark>Connect with Regen Tribe</PillBtn>
            <PillBtn href="/about">Learn About Us</PillBtn>
          </div>

          {/* 4-way pill grid */}
          <div
            style={{
              display: 'inline-grid',
              gridTemplateColumns: 'repeat(4, auto)',
              gap: '10px',
            }}
          >
            {[
              { label: 'Explore', desc: 'Find RNs worldwide', dot: 'var(--green)' },
              { label: 'Learn', desc: 'Guides & training', dot: 'var(--yellow)' },
              { label: 'Connect', desc: 'Join the network', dot: 'var(--blue)' },
              { label: 'Build', desc: 'Partner on land', dot: 'var(--pink)' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  border: '1.5px dashed var(--border-dashed)',
                  borderRadius: '9999px',
                  padding: '14px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  minWidth: '130px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: item.dot,
                    }}
                  />
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
