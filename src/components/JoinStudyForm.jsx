import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`

const faqs = [
  {
    id: 1,
    question: 'How do I get started with WHITE EV?',
    answer: 'Getting started is simple! Download the WHITE EV app from the App Store or Google Play, sign up with your email, and order your free NFC card. The card ships within 3-5 business days, and once you receive it, you can start charging at any of our 10,000+ partner stations nationwide.',
  },
  {
    id: 2,
    question: 'Is the NFC card really free?',
    answer: 'Yes! Your first NFC card is completely free, including shipping. We believe everyone should have access to universal EV charging without barriers. If you ever need a replacement card, Premium members get them free, while Pay As You Go users pay a small fee to cover manufacturing costs.',
  },
  {
    id: 3,
    question: 'Where can I use my WHITE EV card?',
    answer: 'Your WHITE EV card works at 10,000+ charging stations nationwide across all major networks including ChargePoint, EVgo, Electrify America, Blink, and many more. Simply look for the WHITE EV logo or check the app to find compatible stations near you with real-time availability.',
  },
  {
    id: 4,
    question: "What if I don't have my card with me?",
    answer: 'No problem! You can still charge using the WHITE EV app. Just open the app, select your charging station, and scan the QR code displayed on the charger. Your phone becomes your backup payment method, so you\'re never stuck without power.',
  },
  {
    id: 5,
    question: 'How does billing work?',
    answer: 'We believe in transparent pricing. With Pay As You Go, you only pay for what you use at the standard station rate. Premium members save 15% on every charge, and Family plan users save 20%. All charges appear in your app immediately with detailed breakdowns of energy used and cost. No hidden fees, ever.',
  },
]

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-white/10 last:border-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span
              className="text-[#CCFF00] font-bold text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {String(faq.id).padStart(2, '0')}
            </span>
            <h3
              className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                isOpen ? 'text-[#CCFF00]' : 'text-white group-hover:text-[#CCFF00]'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {faq.question}
            </h3>
          </div>
        </div>

        {/* Plus/Minus Icon */}
        <div className="relative w-6 h-6 flex-shrink-0 mt-1">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#CCFF00] -translate-y-1/2" />
              <motion.span
                className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#CCFF00] -translate-x-1/2"
                animate={{ opacity: isOpen ? 0 : 1, scaleY: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-white/70 leading-relaxed pb-6 pl-10 pr-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function JoinStudyForm() {
  const sectionRef = useRef(null)

  return (
    <>
      <style>{FONT_IMPORT}</style>

      <section
        ref={sectionRef}
        className="relative py-32 md:py-40 bg-[#0d0d0d] overflow-hidden"
      >
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Header */}
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
                Got Questions?
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
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Frequently Asked
              <br />
              <span className="text-[#CCFF00]">Questions</span>
            </motion.h2>

            <motion.p
              className="text-lg text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Everything you need to know about WHITE EV and our universal charging platform
            </motion.p>
          </motion.div>

          {/* FAQ List */}
          <div className="bg-[#151515] border border-white/10 rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p
              className="text-white/50 mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Still have questions?
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#CCFF00] text-black text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 hover:bg-[#EAB308]"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
