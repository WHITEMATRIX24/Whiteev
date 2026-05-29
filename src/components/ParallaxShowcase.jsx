import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Parallax effect - subtle movement for single screen
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Text parallax - subtle depth effect
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Line reveal
  const lineScale = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Solid background to prevent bleed-through */}
      <div className="absolute inset-0 bg-black" />

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[130%]"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&h=1080&fit=crop"
          alt="NFC Card Charging"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Center Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-20 text-center px-8"
          style={{ y: textY, opacity: textOpacity }}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-xs tracking-[0.5em] uppercase text-[#CCFF00] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Your Universal Charging Key
          </motion.p>

          {/* Main headline */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl xl:text-[10rem] font-black tracking-tighter text-white leading-[0.9]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            NFC
          </motion.h2>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl xl:text-[10rem] font-black tracking-tighter leading-[0.9]"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.3)'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            CARD
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="flex justify-center mt-12"
            style={{ scaleX: lineScale }}
          >
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-white/50 text-lg md:text-xl mt-8 max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            One card to access every charging network nationwide
          </motion.p>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 w-12 h-12 md:w-20 md:h-20 pointer-events-none z-30">
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-[#CCFF00]"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-[2px] bg-[#CCFF00]"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 md:w-20 md:h-20 pointer-events-none z-30">
        <motion.div
          className="absolute bottom-0 right-0 h-[2px] bg-[#CCFF00]"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[2px] bg-[#CCFF00]"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>

      {/* Side text */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block z-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p
          className="text-[10px] tracking-[0.4em] uppercase text-white/30"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Tap & Charge
        </p>
      </motion.div>

      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <p
          className="text-[10px] tracking-[0.4em] uppercase text-white/30"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Universal Network
        </p>
      </motion.div>

      {/* Floating circle accent */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-32 h-32 border border-white/10 rounded-full pointer-events-none z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-4 border border-[#CCFF00]/20 rounded-full" />
      </motion.div>
    </section>
  )
}
