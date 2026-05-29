import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Benefits() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glowing accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCFF00]/5 rounded-full blur-[120px]" />

      <motion.div style={{ y }} className="relative max-w-5xl mx-auto px-8 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-6">
            START CHARGING
            <br />
            <span className="text-[#CCFF00]">EVERYWHERE</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join 50,000+ drivers who've unlocked universal EV charging access. Download the app and get your free NFC card today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#CCFF00] text-black text-sm tracking-[0.1em] uppercase font-semibold overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download App</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="relative z-10"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              <div className="absolute inset-0 bg-[#EAB308] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>

            <span className="text-white/40 text-sm">iOS & Android</span>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[#CCFF00]">⭐⭐⭐⭐⭐</span>
              <span className="text-sm">4.9/5 rating</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <span className="text-sm">50,000+ downloads</span>
            <div className="h-4 w-[1px] bg-white/20" />
            <span className="text-sm">10,000+ stations</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
