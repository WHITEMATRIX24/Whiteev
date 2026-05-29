import { motion } from 'framer-motion'

const features = [
  {
    tag: 'Partner Distribution',
    title: 'Cards delivered through your ecosystem.',
    desc: 'WHITE EV cards are issued directly through participating OEMs, EV platforms, and charging operators — no separate sign-up required.',
    bullets: ['Distributed via OEM & platform partners', 'No direct consumer onboarding friction', 'White-label compatible for partners', 'Physical NFC card, instantly ready'],
    visual: 'nfc',
    flip: false,
  },
  {
    tag: 'Secure Wallet Linking',
    title: 'Connect once. Charge everywhere.',
    desc: 'Drivers link their preferred partner wallet or charging account to the WHITE EV network in under a minute, secured end-to-end.',
    bullets: ['256-bit AES encryption', 'Partner wallet & account support', 'Zero-liability fraud protection', 'One-time setup, persistent access'],
    visual: 'secure',
    flip: true,
  },
  {
    tag: 'Seamless Settlement',
    title: 'Automatic payment. Every session.',
    desc: 'Every tap triggers authentication and initiates automatic payment settlement through the linked wallet — no manual steps at the station.',
    bullets: ['Real-time session authentication', 'Automatic post-session billing', 'Live kWh and cost tracking', 'Instant digital receipts'],
    visual: 'tracking',
    flip: false,
  },
  {
    tag: 'Universal Network',
    title: '10,000+ stations. One card.',
    desc: 'WHITE EV is integrated across every major charging operator so drivers never need to think about which network they\'re on.',
    bullets: ['ChargePoint, EVgo, Blink & more', 'Level 2 and DC Fast Charge', 'Continuously expanding integrations', 'Nationwide coverage'],
    visual: 'network',
    flip: true,
  },
]

function VisualNFC() {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1', maxWidth: '400px', width: '100%' }}>
      <div id="nfc-rings-visual" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0 }}>
        {[420, 340, 290].map((size, i) => (
          <motion.div key={i}
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.06, 0.25] }}
            transition={{ duration: 3, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', width: size, height: size, borderRadius: '50%',
              border: `1.5px solid rgba(59,130,246,${0.45 - i * 0.1})`,
            }}
          />
        ))}
      </div>
      <div
        id="features-nfc-right"
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', aspectRatio: '1.586', pointerEvents: 'none',
        }}
      />
    </div>
  )
}

function VisualSecure() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1', maxWidth: '400px', width: '100%', position: 'relative' }}>
      <div
        id="features-secure-left"
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', aspectRatio: '1.586', pointerEvents: 'none',
        }}
      />
    </div>
  )
}

function VisualTracking() {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1', maxWidth: '380px', width: '100%' }}>
      <div
        id="features-tracking-right"
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', aspectRatio: '1.586', pointerEvents: 'none',
        }}
      />
    </div>
  )
}

function VisualNetwork() {
  const nodes = [
    { x: 50, y: 50 }, { x: 20, y: 25 }, { x: 80, y: 20 },
    { x: 15, y: 65 }, { x: 85, y: 70 }, { x: 45, y: 80 },
    { x: 70, y: 45 }, { x: 30, y: 55 },
  ]
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,3],[2,6],[4,5]]
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1', maxWidth: '400px', width: '100%' }}>
      <div id="network-svg-visual" style={{ width: '85%', maxWidth: '340px', opacity: 0 }}>
        <svg viewBox="0 0 100 100" style={{ width: '100%' }}>
          {edges.map(([a, b], i) => (
            <motion.line key={i}
              x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="rgba(59,130,246,0.25)" strokeWidth="0.6"
              animate={{ opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle key={i}
              cx={n.x} cy={n.y}
              r={i === 0 ? 5 : 2.5}
              fill={i === 0 ? '#3B82F6' : 'rgba(59,130,246,0.5)'}
              animate={{ r: i === 0 ? [5, 6, 5] : [2.5, 3, 2.5], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>
      <div
        id="features-network-left"
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', aspectRatio: '1.586', pointerEvents: 'none',
        }}
      />
    </div>
  )
}

const visuals = { nfc: VisualNFC, secure: VisualSecure, tracking: VisualTracking, network: VisualNetwork }

export default function ProductFeatures() {
  return (
    <section id="features" style={{
      background: '#FFFFFF',
      padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(3.5rem, 7vh, 6rem)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, #3B82F6, transparent)' }} />
            <span style={{ color: '#3B82F6', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Features</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A',
          }}>
            Built for the network.<br />
            <span style={{ color: 'rgba(15,23,42,0.32)' }}>Designed for the driver.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5rem, 10vh, 8rem)' }}>
          {features.map((f, i) => {
            const Visual = visuals[f.visual]
            return (
              <motion.div key={f.tag}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                  gap: 'clamp(2.5rem, 5vw, 5rem)',
                  alignItems: 'center',
                }}
              >
                <div style={{ order: f.flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <span style={{ color: '#3B82F6', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    {f.tag}
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', lineHeight: 1.15 }}>
                    {f.title}
                  </h3>
                  <p style={{ color: 'rgba(15,23,42,0.58)', fontSize: '1rem', lineHeight: 1.72, maxWidth: '440px' }}>
                    {f.desc}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.25rem' }}>
                    {f.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ color: 'rgba(15,23,42,0.65)', fontSize: '0.9rem' }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  order: f.flip ? 1 : 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '2rem', overflow: 'hidden',
                }}>
                  <Visual />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
