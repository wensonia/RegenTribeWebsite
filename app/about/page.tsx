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

const members: Member[] = [
  // Core Team
  {
    name: 'Oscar Correa', status: 'Core Team', roles: ['Co-Founder'],
    desc: 'Engineer, permaculturist and founder of Regen Tribe.',
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F4ccb803b-d793-4961-af06-b3a67ca0aa7e%2FWhatsApp_Image_2023-02-06_at_16.30.54.jpg?table=block&id=47365fd3-14ce-4c52-899c-3baec227d6d1&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Sonia Wendorff', status: 'Core Team', roles: ['Co-Founder'],
    desc: 'Logistics engineer, project manager.',
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F0a3f552c-141a-45a0-91d4-97a47df51d1d%2FIMG_9056.jpg?table=block&id=4f0eb1cb-a6db-4acc-85ca-864ff0604eec&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Bubba', status: 'Core Team', roles: ['Barketing Lead'],
    desc: 'Chief morale officer and head of barketing.',
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F1b712b72-1f83-40dd-af27-10cfc9925037%2F1000029138.jpg?table=block&id=13d89e19-3b20-49fb-a100-976f5a64a9ba&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  // Collaborators
  {
    name: 'Julia Becker', status: 'Collaborator', roles: ['Psychologist'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F898a1e91-9e54-4222-b270-27ea2435937b%2FWhatsApp_Image_2023-06-07_at_17.03.16.jpg?table=block&id=ed8c4038-9f79-44b2-b5a4-3dc73ea9d39b&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Nicole Reese', status: 'Collaborator', roles: ['Education & Research'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fea51aaea-4baf-486c-b24b-7a52148551eb%2Fnicoleee.jpg?table=block&id=3e24105a-f67f-4cb3-a41f-7d0794ef9b8e&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Laila Martins', status: 'Collaborator', roles: ['Education & Training'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F0d096dec-85ad-4050-8c10-06bf148a7b68%2FLailaMartins_profile.jpeg?table=block&id=91892f14-8b32-4745-b19a-ff90f4199e1f&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Florijn DaGraaf', status: 'Collaborator', roles: ['Resilient systems engineer'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fc11cda1e-5b5e-4e21-9ba9-495d3bf15f8d%2Fflorijn_profile.jpeg?table=block&id=130bfd4b-cbe8-80e5-9c99-f8e31956d030&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Alex Keehnen', status: 'Collaborator', roles: ['Mycelium networker'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fceb4d0b2-796a-49ab-b409-5bfb73354c9e%2F1667224651620.jpeg?table=block&id=507e7a64-d845-4d5c-a12e-6731ec506923&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Max Song', status: 'Collaborator', roles: [],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fea5a3e56-ad4f-42ab-af86-191b91afe08a%2F1000108827.jpg?table=block&id=12ebfd4b-cbe8-8026-aa25-e5dd541e6f1c&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Gabriel Ramírez Urbano', status: 'Collaborator', roles: ['Permaculturist'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F2c175d3d-5410-470c-92c8-dd1d02c44482%2FScreenshot_2023-08-24_091429.png?table=block&id=3f5c6c16-496d-4b57-97ea-7e856920360f&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Nina Bazan-Sakamoto', status: 'Collaborator', roles: [],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fd5334523-f0f1-4276-9447-838a2973294a%2FScreenshot_2023-05-15_183412.png?table=block&id=3c12cd11-3b38-4a48-9f3d-09201e393ae4&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Gabriela', status: 'Collaborator', roles: [],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F16871eff-7eee-4821-8acf-7f08363f2a9b%2FWhatsApp_Image_2024-10-17_at_18.28.31.jpeg?table=block&id=130bfd4b-cbe8-80ab-a902-e332d351b53d&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  // RNF Design Lab Collaborators (new)
  {
    name: 'Camara Cassin', status: 'Collaborator', roles: ['Environmental scientist', 'Systems designer'],
    desc: 'Founder of Masterminding EDEN.',
    img: 'https://regentribe.org/wp-content/uploads/2026/01/RNMD-Open-Calls-Flyers-3.png',
  },
  {
    name: 'Thomas Poetter', status: 'Collaborator', roles: ['Potentialism founder'],
    desc: 'Founder of Potentialism – socio-economic model for regenerative future.',
    img: 'https://regentribe.org/wp-content/uploads/2026/01/RNMD-Open-Calls-Flyers-5.png',
  },
  {
    name: 'Steven Streetman', status: 'Collaborator', roles: ['Real Estate', 'ReFi'],
    desc: 'Crypto Currency & Real Estate | Jevity City Project | Streetsmart Investments LLC.',
    img: 'https://regentribe.org/wp-content/uploads/2026/01/Steven-Streetman-rnf.png',
  },
  {
    name: 'Dr Bryan von Herzen', status: 'Collaborator', roles: ['Climate Scientist'],
    desc: 'Climate Scientist at Climate Foundation.',
    img: 'https://regentribe.org/wp-content/uploads/2026/01/dr.-Bryan-rnf.png',
  },
  {
    name: 'Kevin Howard', status: 'Collaborator', roles: ['Climate consultant'],
    desc: 'Principal Consultant for Climate Changes Everything, LLC.',
    img: 'https://regentribe.org/wp-content/uploads/2026/01/RNF-Open-Calls-Flyers.png',
  },
  {
    name: 'Justin Lofton', status: 'Collaborator', roles: ['Food systems'],
    desc: 'Co-founder and Chief Marketing Officer at Thrive Garden.',
    img: 'https://regentribe.org/wp-content/uploads/2026/01/RNF-Open-Calls-Flyers-1.png',
  },
  // Advisor
  {
    name: 'Rahul Sonnad', status: 'Advisor', roles: ['Technology strategist'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fcba91e1a-d025-4ac8-8846-1cfe42c1c07d%2Frahulio_cover.jpg?table=block&id=dc70c2ac-8abd-48e8-b8a8-a5492ea6d619&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  // Ambassadors
  {
    name: 'Vivi', status: 'Ambassador', roles: ['Biozones Ambassador', 'Regen Agent'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F678aac35-96e2-4cf8-8f42-2b4c50bd73b1%2F1000108825.jpg?table=block&id=12ebfd4b-cbe8-8050-bab0-ff51122c2af0&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Kelsey', status: 'Ambassador', roles: ['Indigenous community support'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F96512dfe-56d8-4102-adb2-922290a28e2c%2FKelsey_cover.png?table=block&id=8c56dc4c-254b-45d8-8595-25bfd84645c3&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Kelsia Cadet', status: 'Ambassador', roles: ['Regen Agent'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fda5ea6a5-0627-45ad-af99-d5004e45d9ae%2F1000108824.jpg?table=block&id=12ebfd4b-cbe8-80a5-8c3c-c5a91e0f26f6&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Arie', status: 'Ambassador', roles: [],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fbaba508e-d413-45a9-99e0-4a4e645e41ef%2FWhatsApp_Image_2024-10-17_at_18.29.08.jpeg?table=block&id=130bfd4b-cbe8-80c9-9193-e4c8b6fd7ed1&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Aakash', status: 'Ambassador', roles: ['Biozones Ambassador'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F3d7bf9b7-e1df-4a55-b99a-0c7ea8daa588%2F1000108829.jpg?table=block&id=12ebfd4b-cbe8-802f-ad9e-d2578db69325&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Kenia Labarre', status: 'Ambassador', roles: [],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F8aa05c1b-e874-4126-a665-addbadd38e0e%2Fnse-1670040720565057958-1000049597.jpg?table=block&id=12ebfd4b-cbe8-81c2-84c1-c3a5da3e4901&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Saeed Abu Alhassan', status: 'Ambassador', roles: ['Community culture creator', 'Cooking magician'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Ffe8be9bd-2f9d-4693-83a1-82fc8e72f0e2%2FScreenshot_2023-08-24_111456.png?table=block&id=c449c075-d6fd-4cd1-aca9-46db5453ff6f&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Katja Wallisch', status: 'Ambassador', roles: ['Immersive experience designer'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F7b740b01-cfaa-4f59-9d42-5e63950a31f4%2Fkatja_cover.jpg?table=block&id=48e8671e-2da3-47f9-b6e4-a74bb3d9e9c0&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Gabriel Gutiérrez (Azul)', status: 'Ambassador', roles: ['Education researcher'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F68668643-4658-4aca-bbd5-0a2180906ee9%2FAzul_cover.jpg?table=block&id=018c17f1-f511-43b4-b74b-1ba3c108b071&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Cedric Schmoll', status: 'Ambassador', roles: ['Community Lab Team'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F59fcc602-02c8-481d-9bba-655f34be2efb%2FScreenshot_2023-08-24_111833.png?table=block&id=bd3cf493-c1a2-43b1-ac04-57f9265e24d4&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Tijn Tjoelker', status: 'Ambassador', roles: ['Mycelium networker'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F53014d65-fb12-4fa3-91f3-7e415cb740b9%2FTijn_cover.jpg?table=block&id=70283e48-676f-4d64-9df0-beb75e884c76&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Miroslava', status: 'Ambassador', roles: ['Fractional ownership consultant'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Ff4ad0144-6951-4ebc-9dbd-b91a417f60c5%2FScreenshot_2023-08-24_113114.png?table=block&id=899ead4e-84d0-47f7-8b61-769874b50c5e&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Stephanie Ferrera', status: 'Ambassador', roles: ['ReFi consultant'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fa9a8b5e6-25c2-4ea2-aa34-a3b5f9815ba8%2FScreenshot_2023-08-24_113405.png?table=block&id=37ead4b9-9850-43c5-8fcc-a3a0029cb0b8&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Konstantin Kornev', status: 'Ambassador', roles: ['Technology strategist'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2Fdd32dcaf-b0a2-4918-b7a8-5ec3fde9b7cf%2FWhatsApp_Image_2023-06-06_at_12.31.32.jpg?table=block&id=42c1d7dc-c883-4f6f-a7a4-c4e1f682f636&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Emmanuel Jaramillo', status: 'Ambassador', roles: ['Content Creator'],
    img: 'https://regentribe.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F49fc94a1-53ee-49b5-bd18-c82442c39f70%2F86e2e86a-ad76-4031-94fd-5bae7072489d%2FIMG-20230611-WA0044.jpg?table=block&id=72e2fa7e-a99c-47af-94fc-45f249bff966&spaceId=49fc94a1-53ee-49b5-bd18-c82442c39f70&width=360&userId=&cache=v2',
  },
  {
    name: 'Sofy', status: 'Ambassador', roles: ['Technology strategist'], img: null,
  },
  {
    name: 'Rajad Yoda', status: 'Ambassador', roles: ['Biozones Ambassador'], img: null,
  },
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
    borderRadius: '9999px', padding: '14px 32px', textDecoration: 'none', border: 'none', cursor: 'pointer',
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

export default function AboutPage() {
  return (
    <>
      {/* ── WHO WE ARE ── */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px dashed var(--border)' }}>
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" animate="visible"
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
              <p style={{ fontSize: '18px', lineHeight: '1.7' }}>
                We are always looking for new ambassadors, collaborators, and core team members to enhance our operational power and help develop more neighborhoods faster.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── COLLECTIVE DIRECTORY ── */}
      <section style={{ padding: '100px 0', borderBottom: '1px dashed var(--border)' }}>
        <div style={wrap}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
                Collective directory
              </p>
              <h2 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '400', margin: '0 0 16px', maxWidth: '600px' }}>
                Meet the people.
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.65', opacity: 0.65, maxWidth: '500px' }}>
                {members.length} humans (and one dog) building regenerative neighborhoods around the world.
              </p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {members.map((m) => <MemberCard key={m.name} member={m} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARCHETYPES ── */}
      <section style={{ padding: '100px 0', borderBottom: '1px dashed var(--border)' }}>
        <div style={wrap}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
              {archetypes.map((a) => (
                <motion.div key={a.name} variants={fadeUp}
                  style={{ backgroundColor: a.color, borderRadius: '16px', padding: '36px 28px', color: a.textLight ? 'white' : '#363636' }}>
                  <div style={{ fontSize: '28px', marginBottom: '20px', opacity: 0.55 }}>{a.shape}</div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontSize: '22px', fontWeight: '500', margin: '0 0 12px' }}>{a.name}</h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.65', margin: 0, opacity: 0.85 }}>{a.description}</p>
                </motion.div>
              ))}
              {/* Quote — pinned to last column, right-aligned */}
              <motion.div variants={fadeUp}
                style={{ display: 'flex', alignItems: 'flex-end', padding: '36px 0', gridColumn: '-2 / -1' }}>
                <p style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: '400', fontStyle: 'italic', color: 'var(--text)', opacity: 0.35, margin: 0, textAlign: 'right', lineHeight: '1.25', width: '100%' }}>
                  it takes a village.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW TO JOIN ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={wrap}>
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
            <motion.div variants={fadeUp}>
              <PillBtn href="https://regentribe.notion.site/Join-Regen-Tribe-ac482cc256d4495d820010c28200698e" external bg="var(--blue)">
                Join the Collective
              </PillBtn>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
