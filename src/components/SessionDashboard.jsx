import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const networks = [
  { name: 'ChargePoint', color: '#22C55E' },
  { name: 'EVgo',        color: '#3B82F6' },
  { name: 'Blink',       color: '#F59E0B' },
  { name: 'Electrify America', color: '#8B5CF6' },
  { name: 'Tesla',       color: '#EF4444' },
  { name: 'Shell Recharge', color: '#F97316' },
]

const steps = [
  { label: 'NFC Tap Detected',        icon: '📡', done: true  },
  { label: 'Identity Verified',        icon: '🔐', done: true  },
  { label: 'Network Authenticated',    icon: '⚡', done: true  },
  { label: 'Session Active',           icon: '🔋', done: true  },
  { label: 'Auto Settlement Pending',  icon: '💳', done: false },
]

function AnimatedCounter({ to, decimals = 0, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * to).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, decimals, duration])

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>
}

export default function SessionDashboard() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0A1628',
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle animated grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vh, 5rem)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 10px rgba(34,197,94,0.7)' }} />
            <span style={{ color: '#22C55E', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Live Session</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Tap. Charge.{' '}
            <span style={{ background: 'linear-gradient(120deg, #7DD3FC, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Done.
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', fontWeight: 300, maxWidth: '500px', margin: '0 auto' }}>
            From NFC tap to active charging session in under 3 seconds — across every network.
          </p>
        </motion.div>

        {/* Main dashboard grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>

          {/* LEFT — Session Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '4px' }}>Active Session</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>ChargePoint · Station #A4</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '100px', padding: '4px 12px' }}>
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ color: '#22C55E', fontSize: '0.72rem', fontWeight: 700 }}>Charging</span>
              </div>
            </div>

            {/* Battery visual */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', alignItems: 'flex-end' }}>
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', fontWeight: 500 }}>Battery Level</span>
                <span style={{ color: '#7DD3FC', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>
                  {inView ? <AnimatedCounter to={87} suffix="%" duration={2500} /> : '0%'}
                </span>
              </div>
              <div style={{ height: '10px', background: 'rgba(255,255,255,0.07)', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
                <motion.div
                  initial={{ width: '23%' }}
                  whileInView={{ width: '87%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  style={{
                    height: '100%', borderRadius: '10px',
                    background: 'linear-gradient(90deg, #3B82F6, #06B6D4, #22C55E)',
                    boxShadow: '0 0 12px rgba(34,197,94,0.4)',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}
                  />
                </motion.div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.68rem' }}>23% on arrival</span>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.68rem' }}>Target: 90%</span>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Energy', value: <AnimatedCounter to={24.8} decimals={1} suffix=" kWh" duration={2400} />, color: '#7DD3FC' },
                { label: 'Duration', value: '18:34', color: '#A78BFA' },
                { label: 'Cost', value: <AnimatedCounter to={4.96} decimals={2} suffix=" $" duration={2400} />, color: '#34D399' },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '0.9rem 0.75rem', textAlign: 'center' }}>
                  <div style={{ color: stat.color, fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', marginBottom: '4px' }}>{inView ? stat.value : '—'}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Network badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <img src="/EvLogo.png" alt="White EV" style={{ height: '32px', width: 'auto', borderRadius: '6px' }} />
              <div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Powered by</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>White EV Network</div>
              </div>
              <div style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>NFC · #WE-4729</div>
            </div>
          </motion.div>

          {/* RIGHT — Auth flow + network list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Authentication flow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '1.75rem', flex: 1 }}
            >
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Transaction Flow
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', paddingBottom: i < steps.length - 1 ? '0' : '0', position: 'relative' }}
                  >
                    {/* Vertical line */}
                    {i < steps.length - 1 && (
                      <div style={{ position: 'absolute', left: '15px', top: '30px', width: '1px', height: '28px', background: step.done ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)', zIndex: 0 }} />
                    )}
                    {/* Icon circle */}
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                      background: step.done ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${step.done ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.82rem', zIndex: 1, position: 'relative',
                      marginBottom: '24px',
                    }}>
                      {step.done
                        ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                      }
                    </div>
                    <div style={{ paddingTop: '4px' }}>
                      <div style={{ color: step.done ? '#fff' : 'rgba(255,255,255,0.35)', fontWeight: step.done ? 600 : 400, fontSize: '0.9rem' }}>{step.label}</div>
                    </div>
                    {i === 3 && (
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        style={{ marginLeft: 'auto', marginTop: '4px', color: '#22C55E', fontSize: '0.7rem', fontWeight: 700, whiteSpace: 'nowrap' }}
                      >
                        ● LIVE
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connected networks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '1.75rem' }}
            >
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Connected Networks
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {networks.map((n, i) => (
                  <motion.div
                    key={n.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '5px 12px', borderRadius: '100px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                    }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: n.color, boxShadow: `0 0 6px ${n.color}99`, flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', fontWeight: 600 }}>{n.name}</span>
                  </motion.div>
                ))}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '5px 12px', borderRadius: '100px',
                  background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
                }}>
                  <span style={{ color: '#7DD3FC', fontSize: '0.78rem', fontWeight: 600 }}>+44 more</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px', overflow: 'hidden',
          }}
        >
          {[
            { label: 'Avg. Session Start', value: '2.8s', sub: 'NFC to charging' },
            { label: 'Uptime', value: '99.9%', sub: 'Network reliability' },
            { label: 'Daily Transactions', value: '12,400+', sub: 'Processed today' },
            { label: 'Settlement Time', value: '<1s', sub: 'Auto payment' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '1.5rem 1.75rem',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', letterSpacing: '-0.03em', marginBottom: '4px' }}>{s.value}</div>
              <div style={{ color: '#7DD3FC', fontWeight: 600, fontSize: '0.8rem', marginBottom: '2px' }}>{s.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem' }}>{s.sub}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
