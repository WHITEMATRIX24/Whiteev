import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// Scroll-fill masked text component
function ScrollFillText({ children, progress, className = '' }) {
  const fillProgress = useSpring(progress, { stiffness: 100, damping: 30 })

  return (
    <div className={`relative ${className}`}>
      {/* Outlined text (stroke only) */}
      <span
        className="absolute inset-0"
        style={{
          WebkitTextStroke: '1px rgba(0,0,0,0.2)',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>

      {/* Filled text with clip mask */}
      <motion.span
        className="relative"
        style={{
          clipPath: useTransform(fillProgress, (v) => `inset(0 ${100 - v * 100}% 0 0)`),
          color: '#000000',
        }}
      >
        {children}
      </motion.span>
    </div>
  )
}

// Parallax decorative element
function ParallaxElement({ children, speed = 1, rotate = false, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        rotate: rotate ? rotation : 0,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function ResearchFocusSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Individual progress for each word
  const nfcCardProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const featuresProgress = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])

  // Entry animations
  const textY = useTransform(scrollYProgress, [0, 0.2], [100, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] bg-white py-40 overflow-hidden"
    >
      {/* Background grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Decorative parallax elements */}

      {/* Floating circle */}
      <ParallaxElement
        speed={0.5}
        rotate={true}
        className="absolute top-[20%] right-[10%] w-32 h-32 md:w-48 md:h-48"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: '1px solid rgba(204,255,0,0.2)',
          }}
        />
      </ParallaxElement>

      {/* Square outline */}
      <ParallaxElement
        speed={0.3}
        className="absolute top-[40%] left-[5%] w-20 h-20 md:w-32 md:h-32"
      >
        <div
          className="w-full h-full"
          style={{
            border: '1px solid rgba(204,255,0,0.15)',
            transform: 'rotate(15deg)',
          }}
        />
      </ParallaxElement>

      {/* Diagonal gradient line */}
      <ParallaxElement
        speed={0.7}
        className="absolute bottom-[30%] right-[15%] w-40 h-[1px] md:w-64"
      >
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, rgba(204,255,0,0.3), transparent)',
            transform: 'rotate(-45deg)',
            transformOrigin: 'left center',
          }}
        />
      </ParallaxElement>

      {/* Small floating dot */}
      <ParallaxElement
        speed={0.8}
        className="absolute top-[60%] right-[30%]"
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: 'rgba(204,255,0,0.3)' }}
        />
      </ParallaxElement>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">

        {/* Section label with horizontal line */}
        <motion.div
          className="flex items-center gap-4 mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="w-[60px] h-[1px] bg-[#CCFF00]"
          />
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-black/40"
            style={{
              fontFamily: '"Inter", sans-serif',
            }}
          >
            [ YOUR UNIVERSAL CHARGING KEY ]
          </span>
        </motion.div>

        {/* Main scroll-fill text */}
        <motion.div
          className="flex flex-col gap-0"
          style={{ y: textY, opacity: textOpacity }}
        >
          {/* NFC CARD */}
          <ScrollFillText
            progress={nfcCardProgress}
            className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-[-0.05em]"
          >
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 800,
              }}
            >
              NFC CARD
            </span>
          </ScrollFillText>

          {/* Features - italic accent */}
          <ScrollFillText
            progress={featuresProgress}
            className="text-[clamp(2rem,8vw,6rem)] leading-[1.1] mt-4"
          >
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#000000',
              }}
            >
              Features
            </span>
          </ScrollFillText>
        </motion.div>

        {/* Description text */}
        <motion.div
          className="mt-20 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-sm md:text-base leading-relaxed text-black/50"
            style={{
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Experience the future of EV charging with instant access, secure payments, real-time tracking, and universal network compatibility.
          </p>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="absolute bottom-20 left-8 md:left-16 lg:left-24 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className="w-3 h-3 rounded-full border border-[#CCFF00]"
          />
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-black/30"
            style={{
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  )
}
