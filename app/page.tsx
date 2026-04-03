import Link from 'next/link'

/* ─────────────────────────────────────────────
   Shared style helpers
───────────────────────────────────────────── */
const container: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
}

const sectionPadding: React.CSSProperties = {
  paddingTop: '96px',
  paddingBottom: '96px',
}

/* ─────────────────────────────────────────────
   Timeline data
───────────────────────────────────────────── */
const timelineItems = [
  {
    year: '2021',
    title: 'Community Becomes the Goal',
    desc: 'Consulted first eco-hotel-to-RN project, raised $150K for renewable energy, moved to Tulum to launch the RT Incubator house.',
  },
  {
    year: '2022',
    title: 'Growing the Network',
    desc: 'Established Regen Tribe Incubator houses in Tulum. Identified 200+ neighborhoods worldwide. Launched Regen Tribe Discord.',
  },
  {
    year: '2023',
    title: 'Building the Ecosystem',
    desc: 'Launched Vitalia Longevity Startup City, the first Agent Program, Tribes v1, and Community Lab 1 in Ixchel, Mexico.',
  },
  {
    year: '2024',
    title: 'On-Site at Communities',
    desc: 'Active engagement at WildSeeds, Community Lab X, and Network School. Developed AI-powered co-living tools.',
  },
  {
    year: '2025',
    title: 'Digital Tools & RN Alliance',
    desc: 'Launching key digital tools and AI integrations. Kick-off of the RN Alliance. Partnering with first permanent RT location: Kuyabeh.',
  },
  {
    year: '2030',
    title: 'Kuyabeh Collective Spaces',
    desc: 'The 10-flower Regenerative Neighborhood at Kuyabeh completes its collective spaces, establishing a vibrant hub near Tulum.',
  },
  {
    year: '2040',
    title: 'Dozens of RNs Globally',
    desc: 'Regen Tribe properties established on every continent — Kuyabeh, The Ark, Alpaca, Wild Seeds, and key European & Asian sites.',
  },
  {
    year: '2100',
    title: 'Regenerative Neighborhoods Everywhere',
    desc: 'A global network where everyone has access to a regenerative neighborhood. 53M+ communities sustaining 8 billion people.',
  },
]

/* ─────────────────────────────────────────────
   Platform pillars
───────────────────────────────────────────── */
const pillars = [
  {
    icon: '🌍',
    title: 'Global Network',
    subtitle: 'The Movement',
    desc: 'Connect with community creators, members, service providers, and resource holders building RNs around the world.',
  },
  {
    icon: '📚',
    title: 'Education & Tools',
    subtitle: 'The Catalyzer',
    desc: 'Access our 11-step Alchemy Guide, resource database, Agent Program vocational training, and assessment rubrics.',
  },
  {
    icon: '🤝',
    title: 'Direct Support',
    subtitle: 'RT Agency',
    desc: 'Get hands-on consulting from our core team, or use our self-guided platform to plan and build your own RN.',
  },
]

/* ─────────────────────────────────────────────
   Active projects
───────────────────────────────────────────── */
const projects = [
  {
    name: 'Aldea Kuyabeh',
    location: 'Mexico',
    desc: 'A micro-city collaboration — design, project management, and community development within a 365-hectare regenerative vision outside Tulum.',
    tag: 'Land Development',
  },
  {
    name: 'The Ark',
    location: 'Costa Rica',
    desc: 'Partnering to establish micro Regenerative Neighborhoods focused on ecological balance and resilient resource systems.',
    tag: 'Alliance Partner',
  },
  {
    name: 'WildSeeds Collective',
    location: 'California, USA',
    desc: 'Implementing internal team management systems, wikis, and community agreements for an existing evolving community.',
    tag: 'Agency Support',
  },
  {
    name: 'Community Lab X',
    location: 'Tulum, Mexico',
    desc: 'Transforming a retreat center into a thriving community hub with activated sustainable systems and regular programs.',
    tag: 'Incubator',
  },
]

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────── */}
      <section
        style={{
          ...sectionPadding,
          paddingTop: '120px',
          paddingBottom: '120px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle background ring */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(46,125,82,0.07) 0%, rgba(247,246,242,0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ ...container, position: 'relative' }}>
          {/* eyebrow */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--green-mid)',
              backgroundColor: 'var(--green-light)',
              padding: '4px 12px',
              borderRadius: '100px',
              marginBottom: '28px',
            }}
          >
            Regenerative Neighborhood Accelerator
          </span>

          <h1
            style={{
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: '700',
              color: 'var(--green-deep)',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              marginBottom: '8px',
            }}
          >
            create, grow
          </h1>
          <h1
            style={{
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: '700',
              color: 'var(--text)',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              marginBottom: '8px',
            }}
          >
            &amp; find
          </h1>
          <h2
            style={{
              fontSize: 'clamp(18px, 3vw, 28px)',
              fontWeight: '400',
              color: 'var(--text-muted)',
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}
          >
            regenerative neighborhoods
          </h2>

          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              margin: '0 auto 48px',
              lineHeight: '1.65',
            }}
          >
            The Regen Tribe ecosystem connects people, projects &amp; solutions so we can create
            more regenerative neighborhoods around the world.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/join"
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'white',
                backgroundColor: 'var(--green-deep)',
                padding: '14px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Join the Movement →
            </Link>
            <a
              href="https://tribesplatform.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: 'var(--green-deep)',
                backgroundColor: 'var(--green-light)',
                padding: '14px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Explore Tribes Platform
            </a>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────── */}
      <div style={{ ...container }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
      </div>

      {/* ── WHY / HOW / WHAT ──────────────────────── */}
      <section style={{ ...sectionPadding }}>
        <div style={{ ...container }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '48px',
            }}
          >
            {[
              {
                label: 'Why',
                heading: 'Improve life for humanity while taking care of our planet.',
                body: 'We focus on meeting core human needs — air, water, food, shelter, energy, connection, and self-actualization — using regenerative systems that create net positive impact.',
              },
              {
                label: 'How',
                heading: 'Re-developing society by transitioning to Regenerative Neighborhoods.',
                body: 'Real estate developments with resilient resource systems, intentional community lifestyle practices, and self-sustaining economies — embodying regenerative values as foundational systemic change.',
              },
              {
                label: 'What',
                heading: 'A digital platform, a global alliance, and real-world projects.',
                body: 'We build the tools, forge the alliances, and develop the projects — starting with micro-communities in Mexico and Costa Rica and expanding to every corner of the planet.',
              },
            ].map((card) => (
              <div key={card.label}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    marginBottom: '16px',
                  }}
                >
                  {card.label}
                </span>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--text)',
                    lineHeight: '1.35',
                    letterSpacing: '-0.01em',
                    marginBottom: '12px',
                  }}
                >
                  {card.heading}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
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

      {/* ── TRIBES PLATFORM ───────────────────────── */}
      <section
        style={{
          ...sectionPadding,
          backgroundColor: 'var(--green-deep)',
        }}
      >
        <div style={{ ...container }}>
          {/* header */}
          <div style={{ marginBottom: '56px', maxWidth: '640px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(234,242,236,0.7)',
                marginBottom: '16px',
              }}
            >
              The Platform
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Tribes Platform
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6' }}>
              The people, neighborhoods &amp; solutions of the Regenerative Neighborhood Movement —
              all in one place at{' '}
              <a
                href="https://tribesplatform.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--green-light)', textDecoration: 'underline' }}
              >
                tribesplatform.app
              </a>
              .
            </p>
          </div>

          {/* pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '28px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '16px' }}>{p.icon}</div>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(234,242,236,0.6)',
                    marginBottom: '6px',
                  }}
                >
                  {p.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '10px',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section style={{ ...sectionPadding }}>
        <div style={{ ...container }}>
          <div style={{ marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--green-mid)',
                marginBottom: '16px',
              }}
            >
              The Journey
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: '700',
                color: 'var(--text)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              2021 → 2100
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* vertical line */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: '80px',
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: 'var(--border)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timelineItems.map((item, i) => {
                const isFuture = parseInt(item.year) > 2025
                return (
                  <div
                    key={item.year}
                    style={{
                      display: 'flex',
                      gap: '32px',
                      alignItems: 'flex-start',
                      paddingBottom: i < timelineItems.length - 1 ? '40px' : '0',
                    }}
                  >
                    {/* year */}
                    <div
                      style={{
                        width: '64px',
                        flexShrink: 0,
                        textAlign: 'right',
                        paddingTop: '2px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: '700',
                          color: isFuture ? 'var(--text-muted)' : 'var(--green-mid)',
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* dot */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        marginTop: '4px',
                        backgroundColor: isFuture ? 'var(--border)' : 'var(--green-mid)',
                        border: isFuture
                          ? '2px solid var(--border)'
                          : '2px solid var(--green-light)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    />

                    {/* content */}
                    <div style={{ paddingBottom: '4px' }}>
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: isFuture ? 'var(--text-muted)' : 'var(--text)',
                          marginBottom: '4px',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-muted)',
                          lineHeight: '1.6',
                          maxWidth: '560px',
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

      {/* ── ACTIVE PROJECTS ───────────────────────── */}
      <section
        style={{
          ...sectionPadding,
          backgroundColor: 'var(--green-light)',
        }}
      >
        <div style={{ ...container }}>
          <div style={{ marginBottom: '48px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--green-mid)',
                marginBottom: '16px',
              }}
            >
              Active Collaborations
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: '700',
                color: 'var(--green-deep)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Projects in Motion
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {projects.map((p) => (
              <div
                key={p.name}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '17px',
                        fontWeight: '600',
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{p.location}</p>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'var(--green-mid)',
                      backgroundColor: 'var(--green-light)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN THE MOVEMENT ─────────────────────── */}
      <section style={{ ...sectionPadding }}>
        <div
          style={{
            ...container,
            textAlign: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              marginBottom: '20px',
            }}
          >
            Get Involved
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '700',
              color: 'var(--text)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              maxWidth: '700px',
              margin: '0 auto 20px',
            }}
          >
            Become part of the regenerative future.
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-muted)',
              maxWidth: '500px',
              margin: '0 auto 40px',
              lineHeight: '1.65',
            }}
          >
            Whether you&apos;re seeking community, have land, skills, or investment — there&apos;s a
            vital role for you in the Regen Tribe.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '56px',
            }}
          >
            <Link
              href="/join"
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'white',
                backgroundColor: 'var(--green-deep)',
                padding: '14px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Join the Movement →
            </Link>
            <Link
              href="/about"
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: 'var(--text)',
                backgroundColor: 'transparent',
                padding: '14px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                border: '1px solid var(--border)',
              }}
            >
              Learn More
            </Link>
          </div>

          {/* 4 ways to get involved */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {[
              { icon: '🔍', label: 'Explore', desc: 'Discover existing RNs worldwide' },
              { icon: '📖', label: 'Learn', desc: 'Access guides & training programs' },
              { icon: '🌐', label: 'Connect', desc: 'Join our global network' },
              { icon: '🏗️', label: 'Build', desc: 'Partner on land development' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--green-light)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--green-deep)',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
