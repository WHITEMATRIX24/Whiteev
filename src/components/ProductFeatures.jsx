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
      <motion.div
        id="network-svg-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '85%', maxWidth: '340px' }}
      >
        <svg viewBox="0 0 100 100" style={{ width: '100%' }}>
          {edges.map(([a, b], i) => (
            <motion.line key={i}
              x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="rgba(255,255,255,0.35)" strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle key={i}
              cx={n.x} cy={n.y}
              r={i === 0 ? 5 : 2.5}
              fill={i === 0 ? '#FFFFFF' : 'rgba(255,255,255,0.6)'}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              animate={{ r: i === 0 ? [5, 6, 5] : [2.5, 3, 2.5], opacity: [0.8, 1, 0.8] }}
            />
          ))}
        </svg>
      </motion.div>
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
    <section id="features" aria-label="WhiteEV Product Features - Universal EV Charging Solutions" style={{
      background: '#FFFFFF',
      padding: 'clamp(3rem, 8vh, 8rem) clamp(1rem, 4vw, 5rem)',
    }}>
      <style>{`
        .features-container {
          display: flex;
          flex-direction: column;
          gap: clamp(5rem, 10vh, 8rem);
        }
        .feature-item-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: clamp(2.5rem, 5vw, 5rem);
          align-items: center;
        }
        .feature-visual-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .features-container {
            gap: clamp(2rem, 4vh, 3rem);
          }
          .feature-item-grid {
            gap: clamp(1.5rem, 3vw, 2rem);
          }
          .feature-visual-container {
            padding: 0.5rem;
          }
        }
      `}</style>
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
          }} itemProp="headline">
            Built for the network.<br />
            <span style={{ color: 'rgba(15,23,42,0.32)' }}>Designed for the driver.</span>
          </h2>
        </motion.div>

        <div className="features-container">
          {features.map((f, i) => {
            const Visual = visuals[f.visual]
            return (
              <motion.div key={f.tag}
                className="feature-item-grid"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ order: f.flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                  {/* Animated background glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    animate={{
                      opacity: [0.03, 0.08, 0.03],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                      position: 'absolute',
                      top: '-20%',
                      left: '-10%',
                      width: '120%',
                      height: '140%',
                      background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />

                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                      color: '#3B82F6',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      position: 'relative',
                      zIndex: 1,
                      display: 'inline-block',
                      width: 'fit-content',
                    }}
                  >
                    {f.tag}
                  </motion.span>

                  <motion.div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        color: '#0F172A',
                        lineHeight: 1.15,
                        position: 'relative',
                      }}
                    >
                      {f.title}
                      {/* Animated underline */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          position: 'absolute',
                          bottom: -8,
                          left: 0,
                          height: 3,
                          width: '60px',
                          background: 'linear-gradient(90deg, #3B82F6, rgba(59,130,246,0.3))',
                          transformOrigin: 'left',
                          borderRadius: 2,
                        }}
                      />
                    </motion.h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      color: 'rgba(15,23,42,0.58)',
                      fontSize: '1rem',
                      lineHeight: 1.72,
                      maxWidth: '440px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {f.desc}
                  </motion.p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.25rem', position: 'relative', zIndex: 1 }}>
                    {f.bullets.map((b, bulletIndex) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{
                          x: 8,
                          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + bulletIndex * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          padding: '4px 0',
                        }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.2,
                            backgroundColor: 'rgba(59,130,246,0.2)',
                            borderColor: 'rgba(59,130,246,0.5)',
                            transition: { duration: 0.3 }
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.45 + bulletIndex * 0.1,
                            ease: [0.34, 1.56, 0.64, 1]
                          }}
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            background: 'rgba(59,130,246,0.1)',
                            border: '1px solid rgba(59,130,246,0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <motion.svg
                            width="9" height="9" viewBox="0 0 12 12" fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + bulletIndex * 0.1,
                              ease: [0.16, 1, 0.3, 1]
                            }}
                          >
                            <motion.path d="M2 6l3 3 5-5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                        </motion.div>
                        <motion.span
                          whileHover={{
                            color: 'rgba(15,23,42,0.85)',
                            transition: { duration: 0.3 }
                          }}
                          style={{ color: 'rgba(15,23,42,0.65)', fontSize: '0.9rem' }}
                        >
                          {b}
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="feature-visual-container" style={{
                  order: f.flip ? 1 : 2,
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
