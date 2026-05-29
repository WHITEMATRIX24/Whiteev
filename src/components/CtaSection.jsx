import { motion } from 'framer-motion'

function CardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      style={{ perspective: '1000px', display: 'flex', justifyContent: 'center' }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 'clamp(240px, 30vw, 340px)',
          aspectRatio: '1.586',
          borderRadius: '18px',
          background: 'linear-gradient(145deg, #0D1A38 0%, #162C55 45%, #0B1529 100%)',
          boxShadow: [
            '0 0 0 1px rgba(255,255,255,0.1)',
            '0 40px 80px rgba(0,0,0,0.55)',
            '0 0 120px rgba(59,130,246,0.18)',
          ].join(', '),
          padding: '18px 22px',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          animate={{ x: ['-120%', '220%'] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, transparent 35%, rgba(99,179,237,0.1) 50%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        {/* Corner glow */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '100px', height: '80px',
          background: 'radial-gradient(ellipse at top right, rgba(6,182,212,0.22), transparent 70%)',
          borderRadius: '0 18px 0 0', pointerEvents: 'none',
        }} />
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: 19, height: 19, borderRadius: '4px',
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
            </svg>
          </div>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em' }}>WHITE EV</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
            <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.48rem', letterSpacing: '0.08em' }}>ACTIVE</span>
          </div>
        </div>
        {/* Card number */}
        <div style={{
          position: 'absolute', zIndex: 1, bottom: '30px', left: '22px', right: '22px',
          color: 'rgba(255,255,255,0.32)', fontSize: '0.52rem', letterSpacing: '0.2em', fontFamily: 'monospace',
        }}>
          •••• •••• •••• 4729
        </div>
        {/* Bottom row */}
        <div style={{
          position: 'absolute', zIndex: 1, bottom: '10px', left: '22px', right: '22px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.4rem', letterSpacing: '0.1em', marginBottom: '2px' }}>CARDHOLDER</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.06em' }}>EV DRIVER</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 26 26" fill="none">
            <path d="M5 13C5 8.5 8.5 5 13 5"   stroke="rgba(59,130,246,0.4)" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M2 13C2 6.9 6.9 2 13 2"   stroke="rgba(59,130,246,0.6)" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M8 13C8 10.2 10.2 8 13 8"  stroke="rgba(59,130,246,0.3)" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="13" cy="13" r="2" fill="#3B82F6"/>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CtaSection() {
  return (
    <section id="cta" style={{
      background: 'linear-gradient(135deg, #0C1C6B 0%, #1348C0 50%, #0A7EC7 100%)',
      padding: 'clamp(5rem, 12vh, 10rem) clamp(1.5rem, 5vw, 5rem)',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Grain texture */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.18 }} aria-hidden>
        <filter id="cta-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#cta-grain)"/>
      </svg>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        opacity: 0.5,
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '-120px', left: '-60px', width: '560px', height: '480px',
        background: 'radial-gradient(ellipse, rgba(99,179,237,0.22) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-40px', width: '500px', height: '420px',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto', position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
        gap: 'clamp(3rem, 8vw, 7rem)',
        alignItems: 'center',
      }}>

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#7DD3FC', boxShadow: '0 0 10px rgba(125,211,252,0.6)' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Join the network
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontWeight: 900,
            lineHeight: 1.04, letterSpacing: '-0.04em', color: 'white',
          }}>
            One card.<br />Every network.<br />
            <span style={{
              background: 'linear-gradient(120deg, #7DD3FC, #38BDF8, #06B6D4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Zero friction.
            </span>
          </h2>

          {/* Body */}
          <p style={{
            color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            lineHeight: 1.75, maxWidth: '440px',
          }}>
            Get your WHITE EV card through a participating partner, link your wallet, and tap to charge across every integrated network — with automatic payment settlement every time.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.9rem 1.75rem', borderRadius: '12px',
                background: 'white',
                color: '#1048C0', fontWeight: 700, fontSize: '0.9rem',
                textDecoration: 'none', letterSpacing: '-0.01em',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)'}
            >
              Find a Partner
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '0.9rem 1.5rem', borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.28)',
                background: 'rgba(255,255,255,0.09)',
                color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.9rem',
                textDecoration: 'none', letterSpacing: '-0.01em',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M9 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Learn More
            </motion.a>
          </div>

          {/* Trust strip */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '0.25rem' }}>
            {[
              { v: '10,000+', l: 'Stations' },
              { v: '256-bit', l: 'Encryption' },
              { v: '99.9%', l: 'Uptime SLA' },
            ].map(item => (
              <div key={item.l}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '-0.01em' }}>{item.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem', marginTop: '2px' }}>{item.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — card + pills */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <CardMockup />

        </div>

      </div>
    </section>
  )
}
