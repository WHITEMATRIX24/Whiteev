import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');`

export default function HeroMasterpiece() {
  const heroRef = useRef(null)
  const [showContent, setShowContent] = useState(false)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.15])
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.4, 0.75])

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{FONT_IMPORT}</style>

      <section
        ref={heroRef}
        className="fixed inset-0 h-screen overflow-hidden bg-black z-0"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: imageScale }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
            alt="EV Charging Station"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, filter: 'blur(10px)' }}
            animate={showContent ? { scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
        </motion.div>

        {/* Noise Texture */}
        <div
          className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated vertical lines */}
        <motion.div className="absolute inset-0 z-10 overflow-hidden pointer-events-none" style={{ opacity: heroOpacity }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-[1px]"
              style={{
                left: `${15 + i * 14}%`,
                background: 'linear-gradient(to bottom, transparent, rgba(204,255,0,0.1), transparent)'
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={showContent ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative z-30 h-full flex flex-col"
          style={{ opacity: heroOpacity }}
        >
          {/* Top Bar */}
          <motion.div
            className="flex justify-between items-center px-8 md:px-16 pt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div />
            <div className="flex items-center gap-8">
              {/* Status indicator */}
              <div className="hidden md:flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#CCFF00]"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span
                  className="text-[10px] tracking-[0.3em] uppercase text-white/50"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  10,000+ Stations
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="flex-1 flex items-end pb-24 md:pb-32 px-6 md:px-16 lg:px-24">
            <div className="max-w-5xl w-full">
              {/* Spacer for CHEERS WISDOM logo */}
              <div className="h-[140px] md:h-[200px] lg:h-[260px]" />

              {/* Eyebrow with animated line */}
              <div className="overflow-hidden mb-4">
                <motion.div
                  className="flex items-center gap-5"
                  initial={{ y: 50, opacity: 0 }}
                  animate={showContent ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <motion.div
                    className="h-[1px] bg-[#CCFF00]"
                    initial={{ width: 0 }}
                    animate={showContent ? { width: 50 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  />
                  <span
                    className="text-[11px] tracking-[0.4em] uppercase text-[#CCFF00]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    Universal EV Charging
                  </span>
                </motion.div>
              </div>

              {/* Main Headline */}
              <div className="overflow-hidden">
                <motion.h1
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-[1.2] max-w-2xl"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={showContent ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  <span className="text-white/60">ONE CARD.</span>
                  <br />
                  <span className="font-semibold">EVERY CHARGER.</span>
                  <br />
                  <span className="text-white/50 text-xl md:text-2xl lg:text-3xl mt-4 block">
                    Charge at 10,000+ stations nationwide with one universal NFC card. No apps, no hassle, just tap and charge.
                  </span>
                </motion.h1>
              </div>

              {/* Get Started Button */}
              <motion.div
                className="mt-8 md:mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.button
                  onClick={() => {
                    const formSection = document.querySelector('#pricing')
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#CCFF00] text-black text-sm tracking-[0.1em] uppercase font-semibold overflow-hidden transition-all duration-300 hover:pr-12"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Get Started Free</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                  <div className="absolute inset-0 bg-[#EAB308] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </motion.button>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>4.9/5</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/20" />
                  <span>50,000+ drivers</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Scroll Indicator - centered at bottom */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-[1px] h-12 bg-gradient-to-b from-[#CCFF00] to-transparent"
              animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-[9px] tracking-[0.3em] uppercase text-white/40 mt-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Scroll
            </span>
          </motion.div>
        </motion.div>

        {/* Corner Accents */}
        <motion.div
          className="absolute top-6 left-6 w-16 h-16 pointer-events-none z-40"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-[#CCFF00]"
            initial={{ width: 0 }}
            animate={showContent ? { width: '100%' } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-[2px] bg-[#CCFF00]"
            initial={{ height: 0 }}
            animate={showContent ? { height: '100%' } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-6 right-6 w-16 h-16 pointer-events-none z-40"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            className="absolute bottom-0 right-0 h-[2px] bg-[#CCFF00]"
            initial={{ width: 0 }}
            animate={showContent ? { width: '100%' } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[2px] bg-[#CCFF00]"
            initial={{ height: 0 }}
            animate={showContent ? { height: '100%' } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-[18%] right-[8%] w-24 h-24 border border-white/5 rounded-full pointer-events-none z-20"
          style={{ opacity: heroOpacity }}
          initial={{ scale: 0, rotate: -90 }}
          animate={showContent ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="absolute inset-3 border border-[#CCFF00]/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

      </section>
    </>
  )
}
