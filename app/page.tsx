import Link from 'next/link'

const W = '1280px'
const PX = '40px'

/* ── Shared ───────────────────────────────────────── */
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Outlined square button ───────────────────────── */
function SquareBtn({
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
    gap: '10px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    color: dark ? 'white' : 'var(--green-deep)',
    backgroundColor: dark ? 'var(--green-deep)' : 'transparent',
    border: dark ? '1.5px solid var(--green-deep)' : '1.5px solid var(--green-deep)',
    padding: '14px 22px',
    textDecoration: 'none',
    flexShrink: 0,
  }

  const grid = (
    <span
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2px',
        width: '12px',
        height: '12px',
        flexShrink: 0,
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: dark ? 'white' : 'var(--green-deep)',
          }}
        />
      ))}
    </span>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
        {grid}
      </a>
    )
  }
  return (
    <Link href={href} style={style}>
      {children}
      {grid}
    </Link>
  )
}

/* ── Section label ────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '24px',
      }}
    >
      {children}
    </p>
  )
}

/* ── Decorative shape components ──────────────────── */
function Circle({ size, color, style }: { size: number; color: string; style?: React.CSSProperties }) {
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

function Rect({ w, h, color, style }: { w: number; h: number; color: string; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: w,
        height: h,
        backgroundColor: color,
        flexShrink: 0,
        ...style,
      }}
    />
  )
}

/* ── Image placeholder ────────────────────────────── */
function ImgBlock({
  w,
  h,
  label,
  bg,
  style,
}: {
  w: number | string
  h: number
  label?: string
  bg?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        width: w,
        height: h,
        backgroundColor: bg ?? 'var(--green-light)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* placeholder texture lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(0,0,0,0.04) 28px, rgba(0,0,0,0.04) 29px)',
        }}
      />
      {label && (
        <span
          style={{
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.4)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {label}
        </span>
      )}
    </div>
  )
}

/* ── Timeline data ────────────────────────────────── */
const timeline = [
  { year: '2021', title: 'Community Becomes the Goal', desc: 'First eco-hotel-to-RN consultation. Raised $150K for renewable energy. Moved to Tulum to launch the RT Incubator house.' },
  { year: '2022', title: 'Growing the Network', desc: 'RT Incubator houses in Tulum. Identified 200+ neighborhoods worldwide. Launched Regen Tribe Discord.' },
  { year: '2023', title: 'Building the Ecosystem', desc: 'Vitalia Longevity Startup City. First Agent Program. Tribes v1. Community Lab 1 in Ixchel, Mexico.' },
  { year: '2024', title: 'On-Site at Communities', desc: 'Active at WildSeeds, Community Lab X, and Network School. AI-powered co-living tools developed.' },
  { year: '2025', title: 'Digital Tools & RN Alliance', desc: 'Launching AI integrations and digital tools. RN Alliance kick-off. First permanent RT location: Aldea Kuyabeh.' },
  { year: '2030', title: 'Kuyabeh Collective Spaces', desc: '10-flower Regenerative Neighborhood at Kuyabeh completes collective spaces near Tulum.' },
  { year: '2040', title: 'Dozens of RNs Globally', desc: 'Kuyabeh, The Ark, Alpaca, Wild Seeds, and key European & Asian sites established on every continent.' },
  { year: '2100', title: 'Regenerative Neighborhoods Everywhere', desc: 'A global network. 53M+ communities. Every person with access to a regenerative neighborhood.' },
]

/* ── Projects data ────────────────────────────────── */
const projects = [
  { name: 'Aldea Kuyabeh', loc: 'Tulum, Mexico', tag: 'Land Development', color: 'var(--green-light)' },
  { name: 'The Ark', loc: 'Costa Rica', tag: 'Alliance Partner', color: 'var(--orange-light)' },
  { name: 'WildSeeds Collective', loc: 'California, USA', tag: 'Agency Support', color: '#E8E0D0' },
  { name: 'Community Lab X', loc: 'Tulum, Mexico', tag: 'Incubator', color: '#DDE8D8' },
]

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ════════════════════════════════
          HERO — asymmetric split
      ════════════════════════════════ */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            ...wrap,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left — headline */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '32px',
              }}
            >
              Regenerative Neighborhood Accelerator
            </p>

            <h1
              style={{
                fontSize: 'clamp(56px, 6.5vw, 88px)',
                fontWeight: '800',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
                color: 'var(--green-deep)',
                marginBottom: '4px',
              }}
            >
              create,
            </h1>
            <h1
              style={{
                fontSize: 'clamp(56px, 6.5vw, 88px)',
                fontWeight: '800',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '4px',
              }}
            >
              grow &amp;
            </h1>
            <h1
              style={{
                fontSize: 'clamp(56px, 6.5vw, 88px)',
                fontWeight: '800',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '32px',
              }}
            >
              find
            </h1>

            <p
              style={{
                fontSize: '17px',
                fontWeight: '400',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                maxWidth: '420px',
                marginBottom: '40px',
              }}
            >
              The Regen Tribe ecosystem connects people, projects &amp; solutions
              so we can create more regenerative neighborhoods around the world.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <SquareBtn href="/join" dark>Join the Movement</SquareBtn>
              <SquareBtn href="https://tribesplatform.app" external>Tribes Platform</SquareBtn>
            </div>
          </div>

          {/* Right — collage of shapes + image blocks */}
          <div
            style={{
              position: 'relative',
              height: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Main large image */}
            <ImgBlock
              w={280}
              h={340}
              label="Regen Community"
              bg="#C8D9C0"
              style={{ position: 'absolute', top: '20px', left: '40px' }}
            />
            {/* Smaller image */}
            <ImgBlock
              w={200}
              h={200}
              label="Aldea Kuyabeh"
              bg="#D4C5A0"
              style={{ position: 'absolute', bottom: '20px', right: '0px' }}
            />
            {/* Lime circle */}
            <Circle
              size={130}
              color="var(--shape-lime)"
              style={{ position: 'absolute', top: '10px', right: '40px' }}
            />
            {/* Deep green circle */}
            <Circle
              size={80}
              color="var(--green-deep)"
              style={{ position: 'absolute', bottom: '60px', left: '20px' }}
            />
            {/* Orange rect */}
            <Rect
              w={90}
              h={90}
              color="var(--orange)"
              style={{ position: 'absolute', bottom: '20px', left: '170px' }}
            />
            {/* Sage circle */}
            <Circle
              size={56}
              color="var(--shape-sage)"
              style={{ position: 'absolute', top: '180px', right: '10px' }}
            />
            {/* Sand small rect */}
            <Rect
              w={60}
              h={40}
              color="var(--shape-sand)"
              style={{ position: 'absolute', top: '0px', left: '200px' }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TICKER / marquee strip
      ════════════════════════════════ */}
      <div
        style={{
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--green-deep)',
          padding: '14px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: '48px',
            animation: 'marquee 30s linear infinite',
          }}
        >
          {Array(3).fill(null).map((_, i) =>
            ['People', 'Projects', 'Solutions', 'Neighborhoods', 'Ecosystem', 'Community', 'Regeneration', 'Movement'].map((word) => (
              <span
                key={`${i}-${word}`}
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {word} <span style={{ color: 'var(--shape-lime)', marginLeft: '-32px' }}>·</span>
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
          WHY / HOW / WHAT — editorial
      ════════════════════════════════ */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--border)' }}>
        <div style={wrap}>
          {/* Full-width heading */}
          <h2
            style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: '800',
              lineHeight: '0.95',
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '64px',
              maxWidth: '900px',
            }}
          >
            Re-developing society through regenerative neighborhoods.
          </h2>

          {/* Three columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'var(--border)',
            }}
          >
            {[
              {
                tag: 'Why',
                color: 'var(--shape-lime)',
                heading: 'Improve life for humanity while caring for our planet.',
                body: 'We focus on meeting core human needs — air, water, food, shelter, energy, connection, and self-actualization — through regenerative systems with net positive impact.',
              },
              {
                tag: 'How',
                color: 'var(--orange)',
                heading: 'Real estate + intentional community + self-sustaining economy.',
                body: 'Regenerative Neighborhoods are real estate developments built around resilient resource systems, intentional community lifestyle practices, and circular economies.',
              },
              {
                tag: 'What',
                color: 'var(--green-mid)',
                heading: 'A platform, a global alliance, and real-world projects.',
                body: 'We build the digital tools, forge the alliances, and develop the projects — starting with micro-communities in Mexico and Costa Rica and expanding globally.',
              },
            ].map((card) => (
              <div
                key={card.tag}
                style={{
                  backgroundColor: 'var(--bg)',
                  padding: '40px 36px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: card.color,
                    marginBottom: '24px',
                  }}
                />
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                  }}
                >
                  {card.tag}
                </p>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em',
                    color: 'var(--text)',
                    marginBottom: '16px',
                  }}
                >
                  {card.heading}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.65',
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
          backgroundColor: 'var(--green-deep)',
          padding: '120px 0',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={wrap}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            {/* Left */}
            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '24px',
                }}
              >
                The Platform
              </p>
              <h2
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: '800',
                  lineHeight: '0.95',
                  letterSpacing: '-0.03em',
                  color: 'white',
                  marginBottom: '32px',
                }}
              >
                Tribes<br />Platform
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: '1.65',
                  marginBottom: '40px',
                  maxWidth: '380px',
                }}
              >
                The people, neighborhoods &amp; solutions of the Regenerative Neighborhood
                Movement — all in one place.
              </p>
              <SquareBtn
                href="https://tribesplatform.app"
                external
              >
                <span style={{ color: 'white' }}>Visit tribesplatform.app</span>
              </SquareBtn>
            </div>

            {/* Right — three pillars stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              {[
                {
                  num: '01',
                  title: 'Global Network',
                  sub: 'The Movement',
                  desc: 'Connect with community creators, service providers, and resource holders building RNs worldwide.',
                },
                {
                  num: '02',
                  title: 'Education & Tools',
                  sub: 'The Catalyzer',
                  desc: 'Access the 11-step Alchemy Guide, resource database, Agent Program vocational training, and assessment rubrics.',
                },
                {
                  num: '03',
                  title: 'Direct Support',
                  sub: 'RT Agency',
                  desc: 'Hands-on consulting from our core team, or self-guided tools to plan and build your own RN.',
                },
              ].map((p) => (
                <div
                  key={p.num}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    padding: '28px 32px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.08em',
                      marginTop: '3px',
                      flexShrink: 0,
                    }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--shape-lime)',
                        marginBottom: '4px',
                      }}
                    >
                      {p.sub}
                    </p>
                    <h3
                      style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '8px',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: '1.55',
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
              gridTemplateColumns: '1fr 2fr',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            {/* Sticky left */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <Label>The Journey</Label>
              <h2
                style={{
                  fontSize: 'clamp(40px, 4vw, 56px)',
                  fontWeight: '800',
                  lineHeight: '0.95',
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  marginBottom: '24px',
                }}
              >
                2021<br />→<br />2100
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                  maxWidth: '240px',
                }}
              >
                From a Tulum incubator house to a planet of regenerative neighborhoods.
              </p>

              {/* Decorative shapes */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Circle size={40} color="var(--shape-lime)" />
                <Circle size={28} color="var(--green-deep)" />
                <Rect w={28} h={28} color="var(--orange)" />
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
                      gridTemplateColumns: '72px 1fr',
                      gap: '24px',
                      paddingBottom: '40px',
                      marginBottom: '0',
                      borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none',
                      paddingTop: i > 0 ? '40px' : '0',
                      opacity: isFuture ? 0.45 : 1,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: '700',
                          color: isFuture ? 'var(--text-muted)' : 'var(--green-mid)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          letterSpacing: '-0.01em',
                          color: 'var(--text)',
                          marginBottom: '8px',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-muted)',
                          lineHeight: '1.6',
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
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: '800',
                  lineHeight: '0.95',
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                }}
              >
                Projects<br />in Motion
              </h2>
            </div>
            <SquareBtn href="/projects">See All Projects</SquareBtn>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              backgroundColor: 'var(--border)',
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.name}
                style={{ backgroundColor: 'var(--bg)' }}
              >
                {/* Color block top */}
                <div
                  style={{
                    height: '180px',
                    backgroundColor: p.color,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative shape inside */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      borderRadius: i % 2 === 0 ? '50%' : '0',
                      backgroundColor: 'rgba(0,0,0,0.07)',
                    }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: '700',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {p.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                      marginBottom: '4px',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{p.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          JOIN THE MOVEMENT — statement
      ════════════════════════════════ */}
      <section style={{ padding: '140px 0' }}>
        <div style={wrap}>
          {/* Big statement */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '60px',
              alignItems: 'end',
              marginBottom: '80px',
            }}
          >
            <div>
              <Label>Get Involved</Label>
              <h2
                style={{
                  fontSize: 'clamp(48px, 6.5vw, 96px)',
                  fontWeight: '800',
                  lineHeight: '0.92',
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                }}
              >
                Become part<br />
                of the<br />
                <span style={{ color: 'var(--green-deep)' }}>regenerative</span><br />
                future.
              </h2>
            </div>

            {/* Decorative cluster */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'flex-end',
              }}
            >
              <Circle size={120} color="var(--shape-lime)" />
              <Rect w={80} h={80} color="var(--green-deep)" />
              <Circle size={56} color="var(--orange)" />
            </div>
          </div>

          {/* Sub-copy + CTAs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'end',
              paddingTop: '48px',
              borderTop: '1px solid var(--border)',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                maxWidth: '440px',
              }}
            >
              Whether you&apos;re seeking community, have land to develop, skills to contribute,
              or capital to invest — there&apos;s a vital role for you in the Regen Tribe.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <SquareBtn href="/join" dark>Join the Movement</SquareBtn>
              <SquareBtn href="/about">Learn About Us</SquareBtn>

              {/* 4-way grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1px',
                  backgroundColor: 'var(--border)',
                  marginTop: '12px',
                  width: '100%',
                }}
              >
                {[
                  { label: 'Explore', desc: 'Find RNs worldwide' },
                  { label: 'Learn', desc: 'Guides & training' },
                  { label: 'Connect', desc: 'Join the network' },
                  { label: 'Build', desc: 'Partner on land' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      backgroundColor: 'var(--bg)',
                      padding: '16px 20px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        color: 'var(--text)',
                        marginBottom: '2px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
