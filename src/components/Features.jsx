import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@media (min-width: 768px) {
  .features-card {
    flex-direction: row !important;
    max-height: calc(100vh - 160px) !important;
  }
  .features-image {
    flex: 1 !important;
    order: 2 !important;
    min-height: auto !important;
  }
  .features-content {
    width: 55% !important;
    flex: none !important;
    order: 1 !important;
    border-top: none !important;
    border-right: 1px solid rgba(255,255,255,0.06) !important;
    min-width: 320px !important;
  }
}
`

const projects = [
  {
    id: 'FIND',
    logo: 'App Feature 01',
    title: 'Find Chargers — Locate nearby charging stations with real-time availability and navigation.',
    icon: '📍',
    platform: 'iOS & Android',
    services: ['Live Map', 'Availability', 'Navigation'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1400&h=900&fit=crop',
  },
  {
    id: 'PAYMENT',
    logo: 'App Feature 02',
    title: 'Quick Payments — Seamless payment processing with automatic receipts and transaction history.',
    icon: '💳',
    platform: 'iOS & Android',
    services: ['Auto-Pay', 'Receipts', 'History'],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1400&h=900&fit=crop',
  },
  {
    id: 'TRACKING',
    logo: 'App Feature 03',
    title: 'Track Usage — Monitor your charging history and energy consumption with detailed analytics.',
    icon: '📊',
    platform: 'iOS & Android',
    services: ['Usage Stats', 'Energy Reports', 'Cost Analysis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop',
  },
  {
    id: 'COMPARE',
    logo: 'App Feature 04',
    title: 'Price Comparison — Compare prices across stations to find the best rates in real-time.',
    icon: '💰',
    platform: 'iOS & Android',
    services: ['Price Alerts', 'Rate Finder', 'Savings Tips'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=900&fit=crop',
  },
  {
    id: 'CONTROL',
    logo: 'App Feature 05',
    title: 'Session Control — Start, stop, and monitor charging sessions remotely from anywhere.',
    icon: '⚡',
    platform: 'iOS & Android',
    services: ['Remote Start', 'Live Monitor', 'Auto-Stop'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop',
  },
  {
    id: 'SUPPORT',
    logo: 'App Feature 06',
    title: '24/7 Support — Get help anytime with our dedicated support team via chat, phone, or email.',
    icon: '🎧',
    platform: 'iOS & Android',
    services: ['Live Chat', 'Phone Support', 'Email Help'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&h=900&fit=crop',
  },
]

function ProjectNav({ activeIndex }) {
  return (
    <div className="flex flex-col gap-[2px]">
      {projects.map((p, i) => {
        const isActive = i === activeIndex
        return (
          <div key={p.id} className="flex items-center gap-2">
            <span
              style={{
                display: 'inline-block',
                width: 18,
                height: 3,
                borderRadius: 2,
                backgroundColor: isActive ? '#CCFF00' : 'transparent',
                flexShrink: 0,
                transition: 'background-color 0.3s',
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.3)',
                transition: 'color 0.3s',
              }}
            >
              {p.id}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function LeftContent({ project }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', paddingTop: 16, paddingBottom: 16 }}>
      <div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '0.6rem',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4 }}>
            <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor"/>
            <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor"/>
            <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor"/>
            <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>
          </svg>
          <AnimatePresence mode="wait">
            <motion.span
              key={project.id + '-logo'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {project.logo}
            </motion.span>
          </AnimatePresence>
        </div>

        <div style={{ marginBottom: '2rem', maxWidth: 400, minHeight: 60 }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={project.id + '-title'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.3rem, 2.4vw, 1.75rem)',
                lineHeight: 1.2,
                color: '#ffffff',
              }}
            >
              {project.title}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', minWidth: 80, fontStyle: 'italic' }}>Platform</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={project.id + '-platform'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}
              >
                {project.platform}
              </motion.span>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', minWidth: 80, fontStyle: 'italic' }}>Features</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id + '-services'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
              >
                {project.services.map(s => (
                  <span key={s} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    borderRadius: 999,
                    padding: '3px 10px',
                    letterSpacing: '0.04em',
                  }}>{s}</span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Scroll-driven images - continuous scroll-based reveal */
function ScrollDrivenImages({ scrollProgress }) {
  const total = projects.length

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#151515' }}>
      {projects.map((p, i) => {
        // Calculate the scroll range for each image
        const start = i / total
        const end = (i + 1) / total

        return (
          <ScrollImage
            key={p.id}
            image={p.image}
            id={p.id}
            index={i}
            scrollProgress={scrollProgress}
            start={start}
            end={end}
            total={total}
          />
        )
      })}
    </div>
  )
}

function ScrollImage({ image, id, index, scrollProgress, start, end, total }) {
  // Stack: Image 0 at bottom, Image 1 on top, Image 2 on top of that
  // Image 0: Always fully visible (base)
  // Image 1: Reveals from top, covering image 0
  // Image 2: Reveals from top, covering image 1

  const segmentSize = 1 / total
  const transitionSize = segmentSize * 0.35 // 35% for slow reveal

  // Only images after the first one need to animate in
  // They reveal from top (clipTop goes from 100 to 0)
  const revealStart = start
  const revealEnd = start + transitionSize

  // For the clip - only animate the reveal, don't hide
  const clipTop = useTransform(
    scrollProgress,
    [revealStart, revealStart + transitionSize * 0.3, revealStart + transitionSize * 0.7, revealEnd],
    index === 0 ? [0, 0, 0, 0] : [100, 85, 30, 0]
  )

  const clipPath = useTransform(
    clipTop,
    (top) => `inset(${top}% 0% 0% 0%)`
  )

  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: index + 1, // Image 0 = z-index 1, Image 1 = z-index 2, etc.
        clipPath,
      }}
    >
      <img
        src={image}
        alt={id}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </motion.div>
  )
}

export default function Features() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const prevIndex = useRef(0)
  const total = projects.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Text changes only at specific thresholds (when image is ~80% transitioned)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Sync text change with image reveal - change text when image is mostly revealed
    // Image transition happens at: start + (segmentSize * 0.35)
    // We want text to change when image is about 70% revealed
    const segmentSize = 1 / total
    const transitionSize = segmentSize * 0.35

    // Calculate which section we're in based on when the image transition completes
    let newIndex = 0
    for (let i = 1; i < total; i++) {
      const revealComplete = (i / total) + (transitionSize * 0.7)
      if (v >= revealComplete) {
        newIndex = i
      }
    }

    if (newIndex !== prevIndex.current) {
      setActiveIndex(newIndex)
      prevIndex.current = newIndex
    }
  })

  return (
    <>
      <style>{FONT_IMPORT}</style>

      <div
        ref={containerRef}
        style={{ height: `${total * 150}vh`, background: '#0a0a0a' }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            padding: 'clamp(20px, 5vw, 80px) clamp(16px, 4vw, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
          }}
        >
          <div
            className="features-card"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: 'calc(100vh - 80px)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Image Panel */}
            <div
              className="features-image"
              style={{
                flex: '0 0 40%',
                position: 'relative',
                minHeight: '200px',
              }}
            >
              <ScrollDrivenImages scrollProgress={scrollYProgress} />
            </div>

            {/* Content Panel */}
            <div
              className="features-content"
              style={{
                flex: 1,
                background: '#151515',
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(16px, 4vw, 28px) clamp(16px, 4vw, 32px)',
                position: 'relative',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                overflow: 'hidden',
              }}
            >
              <div style={{ marginBottom: 'clamp(16px, 4vw, 40px)' }}>
                <ProjectNav activeIndex={activeIndex} />
              </div>

              <div style={{ flex: 1 }}>
                <LeftContent project={projects[activeIndex]} />
              </div>

              {/* Scroll progress indicator */}
              <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', gap: 6 }}>
                {projects.map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: i === activeIndex ? '#CCFF00' : 'rgba(255,255,255,0.2)',
                      transition: 'background-color 0.3s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
