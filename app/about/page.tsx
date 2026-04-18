'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ── Layout constants ── */
const W = '1280px'
const PX = '40px'
const wrap: React.CSSProperties = { maxWidth: W, margin: '0 auto', padding: `0 ${PX}` }

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const vp = { once: true, margin: '-60px' as const }

/* ── Status badge colors ── */
const statusColor: Record<string, { bg: string; text: string; accent: string }> = {
  'Core Team':    { bg: '#e8f7f1', text: '#1a5e3a', accent: '#6fc6a2' },
  'Collaborator': { bg: '#edeffe', text: '#3a3d8a', accent: '#808aeb' },
  'Ambassador':   { bg: '#fdeef7', text: '#8a1a5a', accent: '#f16ab0' },
  'Advisor':      { bg: '#fffae6', text: '#6b5000', accent: '#ffe682' },
}

/* ── Collective members ── */
type Member = { name: string; status: string; roles: string[]; desc?: string; img: string | null }

const P = '/images/collective-members'

const members: Member[] = [
  // Core Team
  { name: 'Oscar Correa',             status: 'Core Team',    roles: ['Co-Founder'],                                        desc: 'Engineer, permaculturist and founder of Regen Tribe.',                              img: `${P}/oscar-correa.jpg` },
  { name: 'Sonia Wendorff',           status: 'Core Team',    roles: ['Co-Founder'],                                        desc: 'Logistics engineer, project manager.',                                              img: `${P}/sonia-wendorff.jpg` },
  { name: 'Bubba',                    status: 'Core Team',    roles: ['Barketing Lead'],                                    desc: 'Chief morale officer and head of barketing.',                                       img: `${P}/bubba.jpg` },
  // Collaborators
  { name: 'Julia Becker',             status: 'Collaborator', roles: ['Psychologist'],                                      img: `${P}/julia-becker.jpg` },
  { name: 'Nicole Reese',             status: 'Collaborator', roles: ['Education & Research'],                              img: `${P}/nicole-reese.jpg` },
  { name: 'Laila Martins',            status: 'Collaborator', roles: ['Education & Training'],                              img: `${P}/laila-martins.jpg` },
  { name: 'Florijn DaGraaf',          status: 'Collaborator', roles: ['Resilient systems engineer'],                        img: `${P}/florijn-dagraaf.jpg` },
  { name: 'Alex Keehnen',             status: 'Collaborator', roles: ['Mycelium networker'],                                img: `${P}/alex-keehnen.jpg` },
  { name: 'Max Song',                 status: 'Collaborator', roles: [],                                                    img: `${P}/max-song.jpg` },
  { name: 'Gabriel Ramírez Urbano',   status: 'Collaborator', roles: ['Permaculturist'],                                    img: `${P}/gabriel-ramirez-urbano.jpg` },
  { name: 'Nina Bazan-Sakamoto',      status: 'Collaborator', roles: [],                                                    img: `${P}/nina-bazan-sakamoto.jpg` },
  { name: 'Gabriela',                 status: 'Collaborator', roles: [],                                                    img: `${P}/gabriela.jpg` },
  // RNF Design Lab Collaborators
  { name: 'Camara Cassin',            status: 'Collaborator', roles: ['Environmental scientist', 'Systems designer'],       desc: 'Founder of Masterminding EDEN.',                                                    img: `${P}/camara-cassin.png` },
  { name: 'Thomas Poetter',           status: 'Collaborator', roles: ['Potentialism founder'],                              desc: 'Founder of Potentialism – socio-economic model for regenerative future.',             img: `${P}/thomas-poetter.jpg` },
  { name: 'Steven Streetman',         status: 'Collaborator', roles: ['Real Estate', 'ReFi'],                              desc: 'Crypto Currency & Real Estate | Jevity City Project | Streetsmart Investments LLC.', img: `${P}/steven-streetman.jpg` },
  { name: 'Dr Bryan von Herzen',      status: 'Collaborator', roles: ['Climate Scientist'],                                 desc: 'Climate Scientist at Climate Foundation.',                                           img: `${P}/dr-bryan-von-herzen.png` },
  { name: 'Kevin Howard',             status: 'Collaborator', roles: ['Climate consultant'],                                desc: 'Principal Consultant for Climate Changes Everything, LLC.',                          img: `${P}/kevin-howard.jpg` },
  { name: 'Justin Lofton',            status: 'Collaborator', roles: ['Food systems'],                                      desc: 'Co-founder and Chief Marketing Officer at Thrive Garden.',                          img: `${P}/justin-lofton.jpg` },
  { name: 'Ian Tairea',               status: 'Collaborator', roles: [],                                                    img: `${P}/ian-tairea.jpeg` },
  // Advisor
  { name: 'Rahul Sonnad',             status: 'Advisor',      roles: ['Technology strategist'],                             img: `${P}/rahul-sonnad.jpg` },
  // Ambassadors
  { name: 'Vivi',                     status: 'Ambassador',   roles: ['Biozones Ambassador', 'Regen Agent'],                img: `${P}/vivi.jpg` },
  { name: 'Kelsey',                   status: 'Ambassador',   roles: ['Indigenous community support'],                      img: `${P}/kelsey.jpg` },
  { name: 'Kelsia Cadet',             status: 'Ambassador',   roles: ['Regen Agent'],                                       img: `${P}/kelsia-cadet.jpg` },
  { name: 'Arie',                     status: 'Ambassador',   roles: [],                                                    img: `${P}/arie.jpg` },
  { name: 'Aakash',                   status: 'Ambassador',   roles: ['Biozones Ambassador'],                               img: `${P}/aakash.jpg` },
  { name: 'Kenia Labarre',            status: 'Ambassador',   roles: [],                                                    img: `${P}/kenia-labarre.jpg` },
  { name: 'Saeed Abu Alhassan',       status: 'Ambassador',   roles: ['Community culture creator', 'Cooking magician'],     img: `${P}/saeed-abu-alhassan.jpg` },
  { name: 'Katja Wallisch',           status: 'Ambassador',   roles: ['Immersive experience designer'],                     img: `${P}/katja-wallisch.jpg` },
  { name: 'Gabriel Gutiérrez (Azul)', status: 'Ambassador',   roles: ['Education researcher'],                              img: `${P}/gabriel-gutierrez-azul.jpg` },
  { name: 'Cedric Schmoll',           status: 'Ambassador',   roles: ['Community Lab Team'],                                img: `${P}/cedric-schmoll.jpg` },
  { name: 'Tijn Tjoelker',            status: 'Ambassador',   roles: ['Mycelium networker'],                                img: `${P}/tijn-tjoelker.jpg` },
  { name: 'Miroslava',                status: 'Ambassador',   roles: ['Fractional ownership consultant'],                   img: `${P}/miroslava.jpg` },
  { name: 'Stephanie Ferrera',        status: 'Ambassador',   roles: ['ReFi consultant'],                                   img: `${P}/stephanie-ferrera.jpg` },
  { name: 'Konstantin Kornev',        status: 'Ambassador',   roles: ['Technology strategist'],                             img: `${P}/konstantin-kornev.jpg` },
  { name: 'Emmanuel Jaramillo',       status: 'Ambassador',   roles: ['Content Creator'],                                   img: `${P}/emmanuel-jaramillo.jpg` },
]

/* ── Archetypes ── */
const archetypes = [
  { name: 'Vision Holders',    color: '#808aeb', textLight: true,  shape: '△', description: 'Individuals and teams actively creating a Regenerative Neighborhood. You have a vision for intentional community and are building it into reality.' },
  { name: 'Service Providers', color: '#6fc6a2', textLight: false, shape: '□', description: 'Professionals offering skills, services, and products for creating Regenerative Neighborhoods — builders, designers, systems experts, coaches, and beyond.' },
  { name: 'Community Members', color: '#f16ab0', textLight: true,  shape: '○', description: 'Individuals living in or looking for a Regenerative Neighborhood to call home. Seeking deeper connection, purpose, and a healthier way of life.' },
  { name: 'Resource Holders',  color: '#ffe682', textLight: false, shape: '◇', description: 'Those with land, capital, or resources to support Regenerative Neighborhood development. Your assets can seed the next generation of communities.' },
  { name: 'Regen Curious',     color: '#363636', textLight: true,  shape: '⬡', description: 'Drawn to the regenerative movement but still finding your place. Learning, exploring, and figuring out how you want to contribute to a better world.' },
]

/* ── Pill button ── */
function PillBtn({ href, children, bg, light, external }: {
  href: string; children: React.ReactNode; bg?: string; light?: boolean; external?: boolean
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    fontSize: '13px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
    color: light ? 'var(--text)' : 'white',
    backgroundColor: bg || 'var(--text)',
    borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
  }
  const inner = <>{children}<ArrowRight size={14} strokeWidth={2} /></>
  if (external) return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
      {inner}
    </motion.a>
  )
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }} style={{ display: 'inline-flex' }}>
      <Link href={href} style={style}>{inner}</Link>
    </motion.div>
  )
}

/* ── Member card ── */
function MemberCard({ member }: { member: Member }) {
  const colors = statusColor[member.status] || { bg: '#eee', text: '#363636', accent: '#aaa' }
  const initials = member.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <motion.div
      variants={fadeUp}
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(54,54,54,0.10)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: colors.bg, flexShrink: 0 }}>
        {member.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.img}
            alt={member.name}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Lora, serif', fontSize: '36px', fontWeight: '600', color: colors.text, opacity: 0.5 }}>{initials}</span>
          </div>
        )}
        {/* Status accent bar at bottom of photo */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', backgroundColor: colors.accent }} />
      </div>

      {/* Content */}
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'Lora, serif', fontSize: '17px', fontWeight: '500', margin: 0, color: 'var(--text)', lineHeight: '1.3' }}>
            {member.name}
          </h3>
          <span style={{
            fontSize: '10px', fontWeight: '700', letterSpacing: '0.07em', textTransform: 'uppercase',
            backgroundColor: colors.bg, color: colors.text,
            borderRadius: '9999px', padding: '3px 9px', whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {member.status}
          </span>
        </div>
        {member.roles.length > 0 && (
          <p style={{ fontSize: '13px', color: 'var(--text)', opacity: 0.6, margin: 0, lineHeight: '1.5' }}>
            {member.roles.join(' · ')}
          </p>
        )}
        {member.desc && (
          <p style={{ fontSize: '13px', color: 'var(--text)', opacity: 0.5, margin: 0, lineHeight: '1.55' }}>
            {member.desc}
          </p>
        )}
      </div>
    </motion.div>
  )
}

/* ── Carousel photos (1 per slide, caption overlaid at bottom) ── */
const carouselPhotos = [
  { src: '/images/blog/q1-2022-workshops-tulum-2.jpg',          label: 'Filming · Tulum, 2022' },
  { src: '/images/blog/q1-2022-workshops-tulum-3.jpg',          label: 'Working session · Tulum, 2022' },
  { src: '/images/blog/q2-2023-community-lab-2.jpg',            label: 'Rooftop garden · Mexico City, 2023' },
  { src: '/images/blog/q2-2023-community-lab-5.jpg',            label: 'Regen Lounge · Tulum, 2023' },
  { src: '/images/blog/q2-2024-clx-wildseeds-1.jpg',            label: 'Community Lab · Tulum, 2024' },
  { src: '/images/blog/q2-2024-clx-wildseeds-3.jpg',            label: 'Planting in the jungle · Tulum, 2024' },
  { src: '/images/blog/q2-2024-clx-wildseeds-4.jpg',            label: 'Team planning · California, 2024' },
  { src: '/images/blog/q3-2023-community-lab-moos-2.jpg',       label: 'Working session · MOOS, Berlin, 2023' },
  { src: '/images/blog/q3-2023-community-lab-moos-3.jpg',       label: 'Strategy session · MOOS, Berlin, 2023' },
  { src: '/images/blog/q3-2023-community-lab-moos-1.jpg',       label: 'Community gathering · MOOS, Belgium, 2023' },
  { src: '/images/blog/q3-2023-community-lab-moos-5.jpg',       label: 'Regen Tribe HQ · Berlin, 2023' },
  { src: '/images/blog/q3-2022-europe-summer-3.jpg',            label: 'Community circle · Portugal, 2022' },
  { src: '/images/blog/q3-2022-europe-summer-2.jpg',            label: 'Exploring · Berlin, 2022' },
  { src: '/images/blog/q4-2021-regen-tribe-incubation-4.jpg',   label: 'Site visit · Guanajuato, Mexico, 2021' },
  { src: '/images/blog/q4-2021-regen-tribe-incubation-3.jpg',   label: 'Community · Tulum, 2021' },
  { src: '/images/blog/q3-2024-mexico-to-europe-4.jpg',         label: 'Sunset gathering · Europe, 2024' },
  { src: '/images/blog/q4-2022-tulum-homecoming-1.jpg',         label: 'Building on site · Tulum, 2022' },
  { src: '/images/blog/q3-2024-mexico-to-europe-5.jpg',         label: 'Collective · Berlin, 2024' },
  { src: '/images/blog/q1-2024-vitalia-clx.jpg',               label: 'Vitalia · Roatán, 2024' },
  { src: '/images/blog/q1-2023-new-members-tribes-1.jpg',       label: 'Regen Tribe team · Tulum, 2023' },
  { src: '/images/blog/q1-2023-new-members-tribes-2.jpg',       label: 'Presenting · Tulum, 2023' },
  { src: '/images/blog/q1-2023-new-members-tribes-3.jpg',       label: 'Panel · Tulum, 2023' },
  { src: '/images/blog/q3-2022-europe-summer-1.jpg',            label: 'Exploring · Amsterdam, 2022' },
]

function PhotoCarousel() {
  // Duplicate for seamless loop
  const doubled = [...carouselPhotos, ...carouselPhotos]

  return (
    <section style={{ borderBottom: '1px dashed var(--border)', overflow: 'hidden' }}>
      <div className="carousel-viewport" style={{ overflow: 'hidden' }}>
        <div className="carousel-track">
          {doubled.map((photo, i) => (
            <div key={i} className="carousel-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.label} loading="lazy"
                style={{ width: '100%', height: 'clamp(220px, 30vw, 420px)', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)', pointerEvents: 'none' }} />
              <p style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px', margin: 0, color: 'rgba(255,255,255,0.92)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* ── WHO WE ARE ── */}
      <section style={{ padding: '120px 0 80px', borderBottom: '1px dashed var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div className="about-hero-grid" variants={stagger} initial="hidden" animate="visible"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '24px' }}>
                Who we are
              </p>
              <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: '400', lineHeight: '1.1', margin: '0 0 32px' }}>
                An open collective of<br />community builders.
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} style={{ paddingTop: '60px' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
                Our team has been researching, documenting, and studying community land developments of various sizes and structures since 2022.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
                We are a collective of social entrepreneurs from different walks of life, coming together to co.create the world we want to live in.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '36px' }}>
                We are always looking for new ambassadors, collaborators, and core team members to enhance our operational power and help develop more neighborhoods faster.
              </p>
              <PillBtn href="https://t.me/+fsFL1jIIGM9jOWFh" external bg="var(--green)">
                Join our Telegram
              </PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PhotoCarousel />

      {/* ── COLLECTIVE DIRECTORY ── */}
      <section id="collective" className="sec" style={{ padding: '120px 0', borderBottom: '1px dashed var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
                Collective directory
              </p>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 16px', maxWidth: '600px' }}>
                Meet the people.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '500px' }}>
                A growing collective of humans (and one dog) building regenerative neighborhoods around the world.
              </p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {members.map((m) => <MemberCard key={m.name} member={m} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARCHETYPES ── */}
      <section className="sec" style={{ padding: '120px 0', borderBottom: '1px dashed var(--border)' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
                Who joins us
              </p>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 16px', maxWidth: '600px' }}>
                Five types of change-makers.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '540px' }}>
                The Regen Tribe collective is made up of all the people it takes to design, build, and grow Regenerative Neighborhoods and their communities.
              </p>
            </motion.div>
            <div className="archetype-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
              {archetypes.map((a) => (
                <motion.div key={a.name} variants={fadeUp}
                  style={{ backgroundColor: a.color, borderRadius: '16px', padding: '36px 28px', color: a.textLight ? 'white' : '#363636' }}>
                  <div style={{ fontSize: '28px', marginBottom: '20px', opacity: 0.55 }}>{a.shape}</div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '500', margin: '0 0 12px' }}>{a.name}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.65', margin: 0, opacity: 0.85 }}>{a.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Quote — right-aligned below cards */}
            <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '32px' }}>
              <p style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: '400', fontStyle: 'italic', color: 'var(--text)', opacity: 0.35, margin: 0, textAlign: 'right', lineHeight: '1.25' }}>
                it takes a village.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW TO JOIN ── */}
      <section className="sec" style={{ padding: '120px 0' }}>
        <div className="wrap" style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
                Join the collective
              </p>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 20px' }}>
                We are always growing.
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto', opacity: 0.65 }}>
                Whether you are building a community, offering your skills, looking for a place to call home, or simply regen curious — there is a place for you in Regen Tribe.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <PillBtn href="/join" bg="var(--blue)">
                Join the Collective
              </PillBtn>
              <PillBtn href="https://t.me/+fsFL1jIIGM9jOWFh" external bg="var(--green)">
                Join our Telegram
              </PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes carousel-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .carousel-track {
          display: flex;
          width: max-content;
          animation: carousel-scroll 100s linear infinite;
        }
        .carousel-viewport:hover .carousel-track {
          animation-play-state: paused;
        }
        .carousel-slide {
          flex: 0 0 calc(100vw / 3);
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .archetype-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .carousel-slide { flex: 0 0 50vw; }
        }
        @media (max-width: 540px) {
          .archetype-grid { grid-template-columns: 1fr !important; }
          .carousel-slide { flex: 0 0 85vw; }
        }
      `}</style>
    </>
  )
}
