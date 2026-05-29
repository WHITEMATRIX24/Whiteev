import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RING_COUNT = 4

export default function PageLoader({ onLoadComplete }) {
  const [phase, setPhase] = useState('enter')
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let frame
    let start
    const duration = 1500

    const tick = (now) => {
      if (!start) start = now
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setPct(Math.round(eased * 94))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setPct(100)
      setPhase('exit')
    }, 1800)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      onLoadComplete?.()
    }, 2500)
    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer) }
  }, [onLoadComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: '#F8FAFF',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Subtle dot grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />

          {/* Ambient glow behind rings */}
          <div style={{
            position: 'absolute', width: '420px', height: '420px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          {/* NFC pulse rings */}
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Array.from({ length: RING_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.15, opacity: 0 }}
                animate={{ scale: [0.15, 2.2], opacity: [0.6, 0] }}
                transition={{
                  duration: 2.2,
                  delay: i * 0.55,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                style={{
                  position: 'absolute',
                  width: 180, height: 180,
                  borderRadius: '50%',
                  border: `1.5px solid rgba(59,130,246,${0.5 - i * 0.08})`,
                  pointerEvents: 'none',
                }}
              />
            ))}
          </div>

          {/* Central icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}
          >
            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
            >
              <span style={{
                color: '#0F172A', fontWeight: 800, fontSize: '1.75rem',
                letterSpacing: '-0.04em',
              }}>
                WHITE<span style={{ color: '#3B82F6' }}>EV</span>
              </span>
              <span style={{
                color: 'rgba(15,23,42,0.35)', fontSize: '0.68rem',
                fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>
                Universal NFC Charging
              </span>
            </motion.div>

            {/* Progress track */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', width: '200px' }}
            >
              <div style={{
                width: '100%', height: '2px',
                background: 'rgba(15,23,42,0.07)', borderRadius: '2px', overflow: 'hidden',
              }}>
                <motion.div
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.15, ease: 'linear' }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(59,130,246,0.5)',
                  }}
                />
              </div>
              <span style={{
                fontFamily: 'monospace', fontSize: '0.7rem',
                color: 'rgba(15,23,42,0.3)', fontWeight: 600, letterSpacing: '0.06em',
              }}>
                {String(pct).padStart(3, ' ')}%
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
