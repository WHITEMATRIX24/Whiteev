import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How do I get a WHITE EV card?',
    a: 'WHITE EV cards are distributed through our network of participating partners — including EV manufacturers, charging operators, and mobility platforms. If your platform is integrated, you\'ll receive or be offered a WHITE EV compatible NFC card directly through them.',
  },
  {
    q: 'Which charging networks are supported?',
    a: 'WHITE EV is integrated with 10,000+ stations across ChargePoint, EVgo, Blink, Electrify America, EVCS, FLO, SemaConnect, and more. Our network is continuously expanding as new operators join the WHITE EV ecosystem.',
  },
  {
    q: 'How does wallet linking work?',
    a: 'Once you have your WHITE EV card, you connect your preferred partner wallet or charging account through the WHITE EV app or your partner\'s platform. The link is secured end-to-end and takes under a minute to complete.',
  },
  {
    q: 'How does payment settlement work?',
    a: 'When you tap to charge, WHITE EV authenticates your card and initiates a session on the network. Payment is settled automatically through your linked wallet or charging account — no manual input required at the station.',
  },
  {
    q: 'What if my platform isn\'t a WHITE EV partner yet?',
    a: 'We\'re onboarding new EV platforms, OEMs, and charging operators continuously. If your provider isn\'t integrated yet, you can join our waitlist at whiteev.com and we\'ll notify you as soon as they come on board.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(15,23,42,0.08)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', padding: '1.5rem 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem',
          textAlign: 'left', cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        <span style={{ color: '#0F172A', fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.4 }}>
          {q}
        </span>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          border: isOpen ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(15,23,42,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 0.2s, background 0.2s',
          background: isOpen ? 'rgba(59,130,246,0.08)' : 'transparent',
        }}>
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            width="12" height="12" viewBox="0 0 12 12" fill="none"
          >
            <path d="M6 1v10M1 6h10" stroke={isOpen ? '#3B82F6' : 'rgba(15,23,42,0.5)'} strokeWidth="1.8" strokeLinecap="round"/>
          </motion.svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: 'rgba(15,23,42,0.58)', fontSize: '0.95rem', lineHeight: 1.75, paddingBottom: '1.5rem', maxWidth: '680px' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" style={{
      background: '#F0F5FF',
      padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 'clamp(3rem, 6vw, 8rem)',
        alignItems: 'start',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'sticky', top: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, #3B82F6, transparent)' }} />
            <span style={{ color: '#3B82F6', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>FAQ</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '1.25rem',
          }}>
            Common questions
          </h2>
          <p style={{ color: 'rgba(15,23,42,0.52)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Everything you need to know about the WHITE EV network, partner cards, and how charging works.
          </p>
          <a href="mailto:support@whiteev.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '0.75rem 1.5rem', borderRadius: '10px',
            border: '1px solid rgba(59,130,246,0.3)',
            color: '#3B82F6', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem',
            background: 'rgba(59,130,246,0.04)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.08)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.04)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8"/></svg>
            Contact Support
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ borderTop: '1px solid rgba(15,23,42,0.08)' }}>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
