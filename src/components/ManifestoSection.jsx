import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Download the App',
    description: 'Download the WHITE EV app from the App Store or Google Play to get started.',
  },
  {
    num: '02',
    title: 'Order Your Free Card',
    description: 'Request your free NFC card through the app. Shipping takes 3-5 business days.',
  },
  {
    num: '03',
    title: 'Tap & Charge Anywhere',
    description: 'Simply tap your card at any compatible charging station and start charging instantly.',
  },
]

export default function ManifestoSection() {
  return (
    <section className="relative bg-white py-32 md:py-40 overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black mb-4">
            How It Works
          </h2>
          <p className="text-xl text-black/50 max-w-2xl mx-auto">
            Get charging in three simple steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Number */}
              <div className="mb-6">
                <span className="text-8xl md:text-9xl font-black text-black/5 group-hover:text-[#CCFF00]/20 transition-colors duration-500">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="absolute -bottom-6 left-0 h-[2px] bg-[#CCFF00]"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
