import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CallToAction() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-32 h-32 border border-white/10 rounded-full"
        style={{ y, rotate }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[8%] w-48 h-48 border border-white/5 rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), rotate: useTransform(scrollYProgress, [0, 1], [5, -5]) }}
      />
      <motion.div
        className="absolute top-[40%] right-[20%] w-20 h-20 bg-white/[0.02] rounded-2xl rotate-45"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ scale }}
        className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 text-center"
      >
        <motion.p
          className="text-xs md:text-sm tracking-[0.5em] uppercase text-white/30 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Limited Spots Available
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-white leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          READY TO
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
            TRANSFORM
          </span>
          <br />
          YOUR CRAFT?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Join 500+ creators in the most comprehensive study on digital creator resilience.
          Applications close when spots fill up.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            className="px-12 py-5 bg-white text-black text-sm tracking-[0.2em] uppercase font-bold hover:bg-white/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply Now
          </motion.button>

          <motion.a
            href="#"
            className="text-white/50 hover:text-white text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            Learn More
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-20 pt-12 border-t border-white/10 grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[
            { value: '4', label: 'Weeks' },
            { value: '₹0', label: 'Cost' },
            { value: '∞', label: 'Value' }
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <span className="block text-3xl md:text-5xl font-black text-white">{stat.value}</span>
              <span className="block mt-2 text-xs tracking-widest uppercase text-white/40">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
