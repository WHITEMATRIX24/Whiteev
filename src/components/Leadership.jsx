import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`

const pricingPlans = [
  {
    id: 'free',
    name: 'Pay As You Go',
    price: '$0',
    period: '/month',
    description: 'Perfect for occasional EV drivers',
    popular: false,
    features: [
      'Free NFC card',
      'Access to all 10,000+ stations',
      'Pay per kWh used',
      'Basic app features',
      'Standard support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99',
    period: '/month',
    description: 'Best for regular EV drivers',
    popular: true,
    features: [
      'Everything in Free',
      '15% discount on all charging',
      'Priority customer support',
      'Advanced analytics',
      'Charging history export',
      'Free card replacement',
    ],
  },
  {
    id: 'family',
    name: 'Family',
    price: '$19.99',
    period: '/month',
    description: 'Ideal for households with multiple EVs',
    popular: false,
    features: [
      'Everything in Premium',
      'Up to 5 NFC cards',
      '20% discount on all charging',
      'Shared payment method',
      'Family usage dashboard',
      'Dedicated account manager',
    ],
  },
]

function PricingCard({ plan, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`group relative ${plan.popular ? 'lg:-mt-8' : ''}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#CCFF00] z-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        >
          <span
            className="text-[9px] tracking-[0.2em] uppercase text-black font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Most Popular
          </span>
        </motion.div>
      )}

      <div
        className={`relative h-full bg-[#151515] border-2 transition-all duration-500 ${
          plan.popular
            ? 'border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.15)]'
            : isHovered
            ? 'border-[#CCFF00]/50'
            : 'border-white/10'
        } ${plan.popular ? 'p-8 md:p-10' : 'p-6 md:p-8'}`}
      >
        {/* Glowing corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#CCFF00] to-transparent" />
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#CCFF00] to-transparent" />
        </motion.div>

        {/* Plan Name */}
        <h3
          className={`${
            plan.popular ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          } font-bold text-white mb-3 transition-colors duration-300 ${
            isHovered ? 'text-[#CCFF00]' : ''
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {plan.name}
        </h3>

        {/* Description */}
        <p
          className="text-white/50 text-sm mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span
              className={`${
                plan.popular ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'
              } font-black text-white`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {plan.price}
            </span>
            <span
              className="text-lg text-white/40 ml-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {plan.period}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => {
            const formSection = document.querySelector('#pricing')
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className={`w-full py-4 mb-8 text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 ${
            plan.popular
              ? 'bg-[#CCFF00] text-black hover:bg-[#EAB308]'
              : 'bg-white/10 text-white hover:bg-[#CCFF00] hover:text-black border border-white/20 hover:border-[#CCFF00]'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-6" />

        {/* Features List */}
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + i * 0.05 }}
            >
              <span className="text-[#CCFF00] mt-1 flex-shrink-0">✓</span>
              <span
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Leadership() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <>
      <style>{FONT_IMPORT}</style>

      <section id="pricing" ref={containerRef} className="relative py-32 md:py-40 bg-black overflow-hidden">
        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 30,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.04,
          }}
        />

        {/* Glowing accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCFF00]/5 rounded-full blur-[120px]" />

        {/* Large background text */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none tracking-tighter"
          style={{ y, fontFamily: "'Inter', sans-serif" }}
        >
          PRICING
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="w-12 h-[1px] bg-[#CCFF00]"
                initial={{ scaleX: 0, originX: 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.span
                className="text-[10px] tracking-[0.4em] uppercase text-[#CCFF00]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Simple Pricing
              </motion.span>
              <motion.div
                className="w-12 h-[1px] bg-[#CCFF00]"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              className="text-lg text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Start with our free plan and upgrade anytime. All plans include access to our nationwide network.
            </motion.p>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p
              className="text-sm text-white/40"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              All plans include a 30-day money-back guarantee. Cancel anytime.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}
