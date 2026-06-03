import { motion } from 'framer-motion'

function NFCCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 'clamp(280px, 85vw, 400px)',
          maxWidth: '400px',
          aspectRatio: '1.586',
          borderRadius: '20px',
          background: 'linear-gradient(145deg, #FFFFFF 0%, #F0F9FF 25%, #E0F2FE 60%, #BFDBFE 100%)',
          boxShadow: `
            0 2px 4px rgba(0,0,0,0.05),
            0 8px 16px rgba(0,0,0,0.1),
            0 20px 40px rgba(0,0,0,0.15),
            0 40px 80px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.3) inset,
            0 2px 4px rgba(255,255,255,0.5) inset,
            0 0 120px rgba(59,130,246,0.4)
          `,
          padding: 'clamp(20px, 3vw, 28px) clamp(22px, 3.5vw, 32px)',
          position: 'relative', overflow: 'hidden',
          transform: 'perspective(1000px) rotateX(2deg)',
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          animate={{ x: ['-120%', '220%'] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Top light reflection */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '50%', pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
          borderRadius: '20px 20px 0 0',
        }} />
        {/* Bottom shadow */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', pointerEvents: 'none',
          background: 'linear-gradient(0deg, rgba(59,130,246,0.12) 0%, transparent 100%)',
          borderRadius: '0 0 20px 20px',
        }} />
        {/* Grid texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        {/* Corner glow */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '160px', height: '140px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.25), transparent 65%)',
          borderRadius: '0 20px 0 0',
        }} />
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: 22, height: 22, borderRadius: '5px',
            background: 'linear-gradient(135deg, #1E40AF, #0891B2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
            </svg>
          </div>
          <span style={{ color: '#1E293B', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>WHITE EV</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
            <span style={{ color: '#334155', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em' }}>ACTIVE</span>
          </div>
        </div>
        {/* Card number */}
        <div style={{
          position: 'absolute', zIndex: 1,
          bottom: 'clamp(46px, 7vw, 58px)', left: 'clamp(22px, 3.5vw, 32px)', right: 'clamp(22px, 3.5vw, 32px)',
          color: '#475569', fontSize: 'clamp(0.7rem, 1.2vw, 0.875rem)',
          letterSpacing: '0.22em', fontFamily: 'monospace', fontWeight: 600,
        }}>
          •••• •••• •••• 4729
        </div>
        {/* Bottom row */}
        <div style={{
          position: 'absolute', zIndex: 1,
          bottom: 'clamp(16px, 2.5vw, 24px)', left: 'clamp(22px, 3.5vw, 32px)', right: 'clamp(22px, 3.5vw, 32px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <div>
            <div style={{ color: '#64748B', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '2px' }}>CARDHOLDER</div>
            <div style={{ color: '#1E293B', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em' }}>EV DRIVER</div>
          </div>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M5 13 C5 8.5 8.5 5 13 5"  stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
            <path d="M2 13 C2 6.9 6.9 2 13 2"  stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 13 C8 10.2 10.2 8 13 8" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="13" cy="13" r="2.5" fill="#1E40AF"/>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }

export default function Hero() {
  return (
    <section id="hero" aria-label="WhiteEV Hero - Universal EV Charging Card" style={{
      minHeight: '100vh',
      background: 'linear-gradient(155deg, #0A1628 0%, #0E2A5C 45%, #1248A8 100%)',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(80px, 12vh, 140px) clamp(1rem, 4vw, 5rem) clamp(2rem, 6vh, 6rem)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grain texture */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.14 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden>
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)"/>
      </motion.svg>

      {/* Dot grid */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glow orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', top: '-80px', right: '-40px', width: '600px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(99,179,237,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: '-60px', left: '-60px', width: '500px', height: '420px',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{
        maxWidth: '1200px', width: '100%', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'center',
        position: 'relative',
      }}>
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#7DD3FC', boxShadow: '0 0 10px rgba(125,211,252,0.6)' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              The WHITE EV Network
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900,
            lineHeight: 0.95, letterSpacing: '-0.06em', color: 'white',
            textTransform: 'uppercase',
          }} itemProp="headline">
            One Card.<br />Every Network.<br />
            <span style={{ background: 'linear-gradient(120deg, #7DD3FC, #38BDF8, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Anywhere.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.72, maxWidth: '460px',
          }} itemProp="description">
            Receive a WHITE EV card through a participating partner, link your wallet, and tap to charge across every integrated network, with seamless authentication and automatic payment settlement.
          </motion.p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div id="hero-card-anchor">
            <NFCCard />
          </div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.67rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Integrated with</span>
            {['ChargePoint', 'EVgo', 'Blink', 'Electrify America'].map(n => (
              <span key={n} style={{
                color: 'rgba(255,255,255,0.55)', fontSize: '0.67rem', fontWeight: 600,
                padding: '3px 9px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '20px',
                background: 'rgba(255,255,255,0.07)',
              }}>{n}</span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, rgba(125,211,252,0.7), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
