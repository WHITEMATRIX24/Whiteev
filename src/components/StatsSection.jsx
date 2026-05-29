import { motion } from 'framer-motion'

const topStats = [
  {
    value: '10,000+',
    label: 'Charging Stations',
    sub: 'Across all major networks, nationwide',
    accent: '#3B82F6',
    bar: 88,
  },
  {
    value: '50,000+',
    label: 'Active Drivers',
    sub: 'Growing by 2,000 new users every month',
    accent: '#0EA5E9',
    bar: 72,
  },
  {
    value: '99.9%',
    label: 'Network Uptime',
    sub: 'Guaranteed reliability, backed by our SLA',
    accent: '#22C55E',
    bar: 99,
  },
]

const ratingBars = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 14 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 1 },
]

export default function StatsSection() {
  return (
    <section id="stats" style={{
      background: '#FFFFFF',
      padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(2.5rem, 5vh, 4rem)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, #3B82F6, transparent)' }} />
            <span style={{ color: '#3B82F6', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>By the numbers</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A',
          }}>
            The scale of our network
          </h2>
        </motion.div>

        {/* Top row — 3 stat cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}>
          {topStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 1px 12px rgba(15,23,42,0.05)',
                transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(15,23,42,0.1)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 1px 12px rgba(15,23,42,0.05)'
              }}
            >
              {/* Colored top strip */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${s.accent}, ${s.accent}44)`,
              }} />

              {/* Ghost watermark number */}
              <div style={{
                position: 'absolute', bottom: '-12px', right: '-8px',
                fontSize: '5.5rem', fontWeight: 900, lineHeight: 1,
                color: `${s.accent}09`,
                letterSpacing: '-0.06em',
                pointerEvents: 'none', userSelect: 'none',
                whiteSpace: 'nowrap',
              }}>
                {s.value}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', position: 'relative' }}>
                {/* Live indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: s.accent, flexShrink: 0 }}
                  />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: s.accent, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Live</span>
                </div>

                {/* Value */}
                <div style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.25rem)', fontWeight: 900,
                  letterSpacing: '-0.05em', lineHeight: 1,
                  background: `linear-gradient(135deg, #0F172A 0%, ${s.accent} 120%)`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {s.value}
                </div>

                {/* Label + sub */}
                <div>
                  <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.2rem' }}>
                    {s.label}
                  </div>
                  <div style={{ color: 'rgba(15,23,42,0.48)', fontSize: '0.78rem', lineHeight: 1.55 }}>
                    {s.sub}
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ height: '3px', background: 'rgba(15,23,42,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ height: '100%', background: `linear-gradient(90deg, ${s.accent}, ${s.accent}77)`, borderRadius: '3px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
                    <span style={{ fontSize: '0.65rem', color: s.accent, fontWeight: 600 }}>{s.bar}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom — featured rating card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FFF7E6 100%)',
            border: '1px solid rgba(245,158,11,0.18)',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 1px 12px rgba(15,23,42,0.05)',
          }}
        >
          {/* Amber glow */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '240px', height: '240px', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)',
          }} />

          {/* Left: score + stars */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', minWidth: '120px' }}>
            <div style={{
              fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 900,
              letterSpacing: '-0.06em', lineHeight: 1,
              background: 'linear-gradient(135deg, #B45309 0%, #F59E0B 60%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              4.9
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div style={{ color: 'rgba(15,23,42,0.45)', fontSize: '0.72rem', fontWeight: 500, textAlign: 'center' }}>
              App Rating
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', alignSelf: 'stretch', background: 'rgba(245,158,11,0.2)', minHeight: '80px', flexShrink: 0 }} />

          {/* Right: breakdown bars */}
          <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            <div style={{ color: '#92400E', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.01em', marginBottom: '0.4rem' }}>
              Rating breakdown
            </div>
            {ratingBars.map((r, i) => (
              <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'rgba(15,23,42,0.45)', fontSize: '0.7rem', fontWeight: 600, width: '24px', flexShrink: 0 }}>
                  {r.stars}★
                </span>
                <div style={{ flex: 1, height: '5px', background: 'rgba(180,83,9,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.07 + 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: '100%', borderRadius: '3px',
                      background: r.stars >= 4 ? '#F59E0B' : r.stars === 3 ? '#FCD34D' : 'rgba(245,158,11,0.4)',
                    }}
                  />
                </div>
                <span style={{ color: 'rgba(15,23,42,0.38)', fontSize: '0.68rem', fontWeight: 500, width: '28px', textAlign: 'right', flexShrink: 0 }}>
                  {r.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Right copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '220px' }}>
            <div style={{ color: '#92400E', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Verified reviews
            </div>
            <div style={{ color: '#78350F', fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
              Rated by 50,000+ EV drivers
            </div>
            <div style={{ color: 'rgba(15,23,42,0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>
              Available on iOS & Android
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
