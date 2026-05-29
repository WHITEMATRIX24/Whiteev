import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A1628 0%, #0E2144 100%)',
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Background animated gradient orbs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          y: y1,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          y: y2,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          width: '80px',
          height: '80px',
          border: '2px solid rgba(59,130,246,0.3)',
          borderRadius: '12px',
          y: y3,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '15%',
          width: '60px',
          height: '60px',
          border: '2px solid rgba(6,182,212,0.3)',
          borderRadius: '50%',
          y: y1,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          opacity,
          scale,
        }}
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(59,130,246,0.1)',
            padding: '8px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(59,130,246,0.3)',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22C55E',
              boxShadow: '0 0 10px rgba(34,197,94,0.6)',
            }}
          />
          <span
            style={{
              color: '#60A5FA',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Seamless Experience
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'white',
            marginBottom: '2rem',
          }}
        >
          Charge Anywhere,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #22C55E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Pay Once
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          No more juggling multiple apps and payment methods. Your WHITE EV card works
          across every integrated charging network—one tap, instant authentication, automatic settlement.
        </motion.p>

      </motion.div>

      {/* Animated particles floating up */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${Math.random() * 100}%`,
              y: '110%',
              scale: 0,
            }}
            animate={{
              y: '-10%',
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              background: i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#06B6D4' : '#22C55E',
              boxShadow: `0 0 10px ${i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#06B6D4' : '#22C55E'}`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
