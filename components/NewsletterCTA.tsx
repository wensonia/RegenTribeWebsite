'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const vp = { once: true, margin: '-80px' as const }

export default function NewsletterCTA() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState<string[]>([])

  const toggleInterest = (item: string) => {
    setInterests(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to Supabase newsletter table
    console.log('Newsletter subscribe:', { name, email, interests })
  }

  return (
    <section style={{ backgroundColor: 'var(--text)', padding: '120px 0' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={vp}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: '400',
              letterSpacing: '-0.03em',
              color: 'white',
              marginBottom: '56px',
              textAlign: 'center',
            }}
          >
            Let&apos;s connect.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              padding: '48px',
            }}
          >
            <p style={{
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--green)',
              marginBottom: '28px',
              textAlign: 'center',
            }}>
              Subscribe to our newsletter
            </p>

            <form onSubmit={handleSubscribe}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                {[
                  { placeholder: 'your name', value: name, setter: setName },
                  { placeholder: 'your email address', value: email, setter: setEmail },
                ].map((field) => (
                  <input
                    key={field.placeholder}
                    type={field.placeholder.includes('email') ? 'email' : 'text'}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={e => field.setter(e.target.value)}
                    required={field.placeholder.includes('email')}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '6px',
                      color: 'white',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                ))}
              </div>

              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', textAlign: 'center' }}>
                Apart from the general newsletter I want to receive special updates about:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: '32px' }}>
                {[
                  'Regen Tribe Agency',
                  'Real Estate opportunities',
                  'Agent Program',
                  'land development',
                  'Recruitment',
                  'events invites',
                ].map((item) => (
                  <label
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={interests.includes(item)}
                      onChange={() => toggleInterest(item)}
                      style={{ accentColor: 'var(--green)', width: '15px', height: '15px', cursor: 'pointer' }}
                    />
                    {item}
                  </label>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 40px',
                    backgroundColor: 'var(--green)',
                    color: 'var(--text)',
                    border: 'none',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
