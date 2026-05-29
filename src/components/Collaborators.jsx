import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const metrics = [
  {
    value: '10,000+',
    label: 'Charging Stations',
    description: 'Nationwide coverage',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
    side: 'left',
  },
  {
    value: '50,000+',
    label: 'Happy Drivers',
    description: 'Join the community',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop',
    side: 'right',
  },
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Always available',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    side: 'left',
  },
  {
    value: '4.9/5',
    label: 'App Rating',
    description: 'Top-rated experience',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    side: 'right',
  },
]

function MetricCard({ metric }) {
  return (
    <div
      className={`group w-[85%] md:w-[60%] max-w-[400px] ${metric.side === 'left' ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}
    >
      <div
        className="relative overflow-hidden cursor-pointer"
      >
        <img
          src={metric.image}
          alt={metric.label}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay - always visible */}
        <div
          className="absolute inset-x-0 bottom-0 transition-opacity duration-300"
          style={{
            height: '70%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%)',
          }}
        />
        {/* Text content - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-300">
          <h3
            className="text-[#CCFF00] font-black uppercase leading-none mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {metric.value}
          </h3>
          <p
            className="text-white font-bold uppercase mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              letterSpacing: '0.05em',
            }}
          >
            {metric.label}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 500,
            }}
          >
            {metric.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Collaborators() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Background text animations - dramatic parallax
  const partnersY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const researchY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const collaborationY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const partnersScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2.5])
  const partnersOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.8, 0])

  // Rotating golden rings - MORE VISIBLE
  const ringRotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const ringRotate2 = useTransform(scrollYProgress, [0, 1], [0, -240])
  const ringRotate3 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.8])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.7, 0.5, 0.2])

  // Background glow that expands - BRIGHTER
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.3, 2.5])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.6, 0.4, 0.1])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-[#0d0d0d]"
      >
        {/* Sticky background - full screen, stays in place */}
        <div className="sticky top-0 h-screen">
          {/* Film grain */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 30,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              opacity: 0.04,
            }}
          />

          {/* Background color */}
          <div className="absolute inset-0 bg-[#0d0d0d]" />

          {/* Expanding white glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: '100vw',
              height: '100vw',
              background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)',
              scale: glowScale,
              opacity: glowOpacity,
            }}
          />

          {/* Rotating ring 1 - outer, WHITE */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '90vmin',
              height: '90vmin',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              rotate: ringRotate1,
              scale: ringScale,
              opacity: ringOpacity,
              boxShadow: '0 0 30px rgba(255,255,255,0.1)',
            }}
          >
            {/* Accent dot on ring */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{ background: '#fff', boxShadow: '0 0 20px rgba(255,255,255,0.8)' }}
            />
            {/* Second dot opposite side */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full"
              style={{ background: '#fff', boxShadow: '0 0 15px rgba(255,255,255,0.6)' }}
            />
          </motion.div>

          {/* Rotating ring 2 - middle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '60vmin',
              height: '60vmin',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              rotate: ringRotate2,
              scale: ringScale,
              opacity: ringOpacity,
            }}
          >
            <div
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: '#fff', boxShadow: '0 0 15px rgba(255,255,255,0.8)' }}
            />
          </motion.div>

          {/* Rotating ring 3 - inner */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '35vmin',
              height: '35vmin',
              border: '1px dashed rgba(255,255,255,0.2)',
              borderRadius: '50%',
              rotate: ringRotate3,
              scale: ringScale,
              opacity: ringOpacity,
            }}
          />

          {/* Radiating lines - WHITE */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ opacity: ringOpacity }}
          >
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <div
                key={angle}
                className="absolute top-1/2 left-1/2 origin-center"
                style={{
                  width: '150vmin',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              />
            ))}
          </motion.div>

          {/* Floating particles - WHITE */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 4 + (i % 3) * 3,
                height: 4 + (i % 3) * 3,
                background: '#fff',
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                top: `${20 + (i * 10)}%`,
                left: `${15 + (i * 12) % 70}%`,
                opacity: ringOpacity,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Background heading - constant, more visible */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
            style={{ zIndex: 1 }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 3vw, 2.4rem)',
                color: '#CCFF00',
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: '0.2em',
              }}
            >
              By The Numbers
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(2rem, 8vw, 7rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.15)',
              }}
            >
              NETWORK
              <br />
              METRICS
            </h2>
          </div>
        </div>

        {/* Cards container - starts after 100vh (after bg is shown) */}
        <div
          className="relative px-2 md:px-4 max-w-7xl mx-auto pt-[30vh]"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col gap-24 md:gap-32 pb-32">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                metric={metric}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
