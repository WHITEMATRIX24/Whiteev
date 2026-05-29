import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function CardFace() {
  return (
    <div style={{
      width: '100%', height: '100%',
      borderRadius: '18px',
      background: 'linear-gradient(135deg, #0A1628 0%, #1A2F4F 50%, #0D1B2E 100%)',
      boxShadow: [
        '0 0 0 1px rgba(59,130,246,0.15)',
        '0 25px 70px rgba(0,0,0,0.75)',
        '0 0 100px rgba(59,130,246,0.3)',
        'inset 0 1px 0 rgba(255,255,255,0.05)',
      ].join(', '),
      padding: '16px 20px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Circuit pattern background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px),
          linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }} />

      {/* Glowing orb - top right */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '120px', height: '120px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      {/* Top section - Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
        marginBottom: '8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <div style={{
            width: 18, height: 18, borderRadius: '5px',
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 12px rgba(59,130,246,0.6)',
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
            </svg>
          </div>
          <span style={{
            color: 'white',
            fontWeight: 800,
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
          }}>
            WHITE<span style={{ color: '#3B82F6' }}>EV</span>
          </span>
        </div>
        <div style={{
          fontSize: '0.44rem',
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.1em',
          fontWeight: 600,
        }}>
          NFC
        </div>
      </div>

      {/* Center - Large NFC Symbol */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* NFC waves */}
          <path d="M16 24 C16 19.6 19.6 16 24 16"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M12 24 C12 17.4 17.4 12 24 12"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M8 24 C8 15.2 15.2 8 24 8"
            stroke="rgba(59,130,246,0.6)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M20 24 C20 21.8 21.8 20 24 20"
            stroke="rgba(59,130,246,0.15)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle cx="24" cy="24" r="3.5" fill="#3B82F6" />
          <circle cx="24" cy="24" r="3.5" fill="url(#nfcGlow)" opacity="0.6" />
          <defs>
            <radialGradient id="nfcGlow">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom left - Card ID */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '20px',
        zIndex: 1,
      }}>
        <div style={{
          color: 'rgba(255,255,255,0.25)',
          fontSize: '0.4rem',
          letterSpacing: '0.12em',
          marginBottom: '2px',
          textTransform: 'uppercase',
        }}>
          Card ID
        </div>
        <div style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.52rem',
          fontFamily: 'monospace',
          letterSpacing: '0.08em',
        }}>
          WEV-7429
        </div>
      </div>

      {/* Bottom right - Status indicator */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        zIndex: 1,
      }}>
        <div style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#22C55E',
          boxShadow: '0 0 8px #22C55E'
        }} />
        <span style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.46rem',
          letterSpacing: '0.1em',
          fontWeight: 600,
        }}>
          READY
        </span>
      </div>

      {/* Bottom section - Charging Network */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '20px',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}>
        <span style={{
          color: 'rgba(255,255,255,0.28)',
          fontSize: '0.4rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          Universal Charging
        </span>
      </div>
    </div>
  )
}

function LockOverlay() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2,
    }}>
      {/* Frosted glow disc behind the icon */}
      <motion.div
        animate={{ scale: [1, 1.07, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.22) 0%, rgba(59,130,246,0.14) 45%, transparent 72%)',
          border: '1px solid rgba(96,165,250,0.25)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 28px rgba(59,130,246,0.35), inset 0 0 14px rgba(96,165,250,0.08)',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="lg" x1="6" y1="3" x2="26" y2="29" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="55%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          {/* Shackle — rounded arch */}
          <path
            d="M10 14V10C10 6.69 12.69 4 16 4C19.31 4 22 6.69 22 10V14"
            stroke="url(#lg)" strokeWidth="2" strokeLinecap="round" fill="none"
          />
          {/* Body */}
          <rect x="6" y="14" width="20" height="14" rx="4"
            fill="rgba(59,130,246,0.14)" stroke="url(#lg)" strokeWidth="1.6"
          />
          {/* Keyhole outer ring */}
          <circle cx="16" cy="20" r="2.8" fill="url(#lg)" />
          {/* Keyhole slot */}
          <rect x="14.8" y="22" width="2.4" height="3" rx="1.2" fill="url(#lg)" />
        </svg>
      </motion.div>
    </div>
  )
}

function TrackingOverlay() {
  const bars = [45, 72, 38, 91, 60, 85, 78]
  return (
    <div style={{
      position: 'absolute', inset: 0,
      borderRadius: '16px',
      background: 'rgba(5, 12, 30, 0.82)',
      backdropFilter: 'blur(10px)',
      padding: '12px 14px',
      display: 'flex', flexDirection: 'column', gap: '7px',
      zIndex: 2,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Current Session
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}
          />
          <span style={{ color: '#22C55E', fontSize: '0.44rem', fontWeight: 700, letterSpacing: '0.1em' }}>LIVE</span>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '5px' }}>
        {[
          { v: '42.6', u: 'kWh', l: 'Delivered' },
          { v: '$11.20', u: '', l: 'Cost' },
          { v: '78%', u: '', l: 'Battery' },
        ].map(s => (
          <div key={s.l} style={{
            flex: 1,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '6px',
            padding: '4px 5px',
          }}>
            <div style={{ color: 'white', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1 }}>
              {s.v}
              {s.u && <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.45)', marginLeft: '1px' }}>{s.u}</span>}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.41rem', letterSpacing: '0.05em', marginTop: '2px' }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
          <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.41rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}>Charge Level</span>
          <span style={{ color: '#60A5FA', fontSize: '0.44rem', fontWeight: 600 }}>78%</span>
        </div>
        <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '78%' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}
          />
        </div>
      </div>

      {/* Mini bar chart */}
      <div>
        <div style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.41rem', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '4px' }}>This Week</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '22px' }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.45, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: '1.5px',
                transformOrigin: 'bottom',
                background: i === 6
                  ? 'linear-gradient(to top, #3B82F6, #06B6D4)'
                  : 'rgba(255,255,255,0.14)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FlyingCard() {
  const elRef       = useRef(null)
  const lockRef     = useRef(null)
  const trackingRef = useRef(null)

  useEffect(() => {
    const el         = elRef.current
    const lockEl     = lockRef.current
    const trackingEl = trackingRef.current
    if (!el || !lockEl || !trackingEl) return

    let rafId

    const lerp = (a, b, t) => a + (b - a) * t
    const LERP_POS    = 0.14
    const LERP_OPC    = 0.18
    const LERP_REVEAL = 0.07

    let curTop = 0, curLeft = 0, curWidth = 0
    let curOpacity = 0, curLockOpacity = 0, curTrackingOpacity = 0
    let curNetworkSvgOpacity = 0, curNfcRingsOpacity = 0
    let curRotateY = 0

    const tick = () => {
      if (window.innerWidth < 768) {
        el.style.opacity = '0'
        lockEl.style.opacity = '0'
        trackingEl.style.opacity = '0'
        rafId = requestAnimationFrame(tick)
        return
      }

      const heroAnchor      = document.getElementById('hero-card-anchor')
      const nfcTarget       = document.getElementById('features-nfc-right')
      const secureTarget    = document.getElementById('features-secure-left')
      const trackingTarget  = document.getElementById('features-tracking-right')
      const networkTarget   = document.getElementById('features-network-left')

      if (!heroAnchor || !nfcTarget || !secureTarget || !trackingTarget || !networkTarget) {
        el.style.opacity = '0'
        lockEl.style.opacity = '0'
        trackingEl.style.opacity = '0'
        rafId = requestAnimationFrame(tick)
        return
      }

      const scrollY = window.scrollY
      const vh = window.innerHeight

      const heroRect     = heroAnchor.getBoundingClientRect()
      const nfcRect      = nfcTarget.getBoundingClientRect()
      const secureRect   = secureTarget.getBoundingClientRect()
      const trackingRect = trackingTarget.getBoundingClientRect()
      const networkRect  = networkTarget.getBoundingClientRect()

      const heroPageTop     = heroRect.top     + scrollY
      const nfcPageTop      = nfcRect.top      + scrollY
      const securePageTop   = secureRect.top   + scrollY
      const trackingPageTop = trackingRect.top + scrollY
      const networkPageTop  = networkRect.top  + scrollY

      // Phase 1: hero → NFC
      const p1Start = heroPageTop
      const p1End   = nfcPageTop    - vh * 0.5
      // Phase 2: NFC → Secure
      const p2Start = securePageTop   - vh * 0.8
      const p2End   = securePageTop   - vh * 0.4
      // Phase 3: Secure → Tracking
      const p3Start = trackingPageTop - vh * 0.8
      const p3End   = trackingPageTop - vh * 0.4
      // Phase 4: Tracking → Network
      const p4Start = networkPageTop  - vh * 0.8
      const p4End   = networkPageTop  - vh * 0.4

      const ease = t => t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

      const fly = (p, from, to) => {
        const e = ease(p)
        return {
          top:   from.top   + e * (to.top   - from.top),
          left:  from.left  + e * (to.left  - from.left),
          width: from.width + e * (to.width - from.width),
        }
      }

      const networkSvgEl = document.getElementById('network-svg-visual')
      const nfcRingsEl   = document.getElementById('nfc-rings-visual')

      let top, left, width, opacity, lockOpacity, trackingOpacity, networkSvgOpacity = 0, nfcRingsOpacity = 0, targetRotateY = 0

      if (scrollY < p1Start) {
        opacity = 0; lockOpacity = 0; trackingOpacity = 0
        top = heroRect.top; left = heroRect.left; width = heroRect.width
      } else if (scrollY <= p1End) {
        const p = Math.min(1, (scrollY - p1Start) / Math.max(1, p1End - p1Start))
        ;({ top, left, width } = fly(p, heroRect, nfcRect))
        opacity = Math.min(1, p * 12); lockOpacity = 0; trackingOpacity = 0
      } else if (scrollY < p2Start) {
        top = nfcRect.top; left = nfcRect.left; width = nfcRect.width
        opacity = 1; lockOpacity = 0; trackingOpacity = 0
        nfcRingsOpacity = Math.min(1, (scrollY - p1End) / 120)
      } else if (scrollY <= p2End) {
        const p = Math.min(1, (scrollY - p2Start) / Math.max(1, p2End - p2Start))
        ;({ top, left, width } = fly(p, nfcRect, secureRect))
        opacity = 1; lockOpacity = 0; trackingOpacity = 0
        nfcRingsOpacity = Math.max(0, 1 - p * 8)
      } else if (scrollY < p3Start) {
        top = secureRect.top; left = secureRect.left; width = secureRect.width
        opacity = 1
        lockOpacity = Math.min(1, (scrollY - p2End) / 100)
        trackingOpacity = 0
      } else if (scrollY <= p3End) {
        const p = Math.min(1, (scrollY - p3Start) / Math.max(1, p3End - p3Start))
        ;({ top, left, width } = fly(p, secureRect, trackingRect))
        opacity = 1; lockOpacity = Math.max(0, 1 - p * 8); trackingOpacity = 0
        targetRotateY = p * 360
      } else if (scrollY < p4Start) {
        top = trackingRect.top; left = trackingRect.left; width = trackingRect.width
        opacity = 1; lockOpacity = 0
        trackingOpacity = Math.min(1, (scrollY - p3End) / 100)
        targetRotateY = 360
      } else if (scrollY <= p4End) {
        const p = Math.min(1, (scrollY - p4Start) / Math.max(1, p4End - p4Start))
        ;({ top, left, width } = fly(p, trackingRect, networkRect))
        opacity = 1; lockOpacity = 0; trackingOpacity = Math.max(0, 1 - p * 8)
        targetRotateY = 360 + p * 360
      } else {
        top = networkRect.top; left = networkRect.left; width = networkRect.width
        const parkProgress = Math.min(1, (scrollY - p4End) / 120)
        opacity = 1 - parkProgress * 0.65
        lockOpacity = 0; trackingOpacity = 0
        networkSvgOpacity = parkProgress
        targetRotateY = 720
      }

      curTop    = lerp(curTop,    top,    LERP_POS)
      curLeft   = lerp(curLeft,   left,   LERP_POS)
      curWidth  = lerp(curWidth,  width,  LERP_POS)
      curOpacity          = lerp(curOpacity,          opacity,          LERP_OPC)
      curLockOpacity      = lerp(curLockOpacity,      lockOpacity,      LERP_OPC)
      curTrackingOpacity  = lerp(curTrackingOpacity,  trackingOpacity,  LERP_OPC)
      curNetworkSvgOpacity = lerp(curNetworkSvgOpacity, networkSvgOpacity, LERP_REVEAL)
      curNfcRingsOpacity   = lerp(curNfcRingsOpacity,   nfcRingsOpacity,   LERP_REVEAL)
      curRotateY = lerp(curRotateY, targetRotateY, LERP_POS)

      el.style.transform = `translate(${curLeft}px, ${curTop}px) perspective(800px) rotateY(${curRotateY}deg)`
      el.style.width     = `${curWidth}px`
      el.style.opacity   = String(curOpacity)
      lockEl.style.opacity     = String(curLockOpacity)
      trackingEl.style.opacity = String(curTrackingOpacity)
      if (networkSvgEl) networkSvgEl.style.opacity = String(curNetworkSvgOpacity)
      if (nfcRingsEl)   nfcRingsEl.style.opacity   = String(curNfcRingsOpacity)

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div
      ref={elRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        aspectRatio: '1.586',
        zIndex: 200,
        pointerEvents: 'none',
        opacity: 0,
        transformOrigin: 'center center',
        willChange: 'transform, opacity',
      }}
    >
      <CardFace />
      <div ref={lockRef} style={{ opacity: 0 }}>
        <LockOverlay />
      </div>
      <div ref={trackingRef} style={{ opacity: 0 }}>
        <TrackingOverlay />
      </div>
    </div>
  )
}
