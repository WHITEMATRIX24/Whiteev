import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader({ onLoadComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)
  const [logoFadeOut, setLogoFadeOut] = useState(false)
  const [columnsAnimating, setColumnsAnimating] = useState(false)

  const columns = 6

  useEffect(() => {
    const logoTimer = setTimeout(() => setLogoVisible(true), 200)
    const logoFadeTimer = setTimeout(() => setLogoFadeOut(true), 1600)
    const columnTimer = setTimeout(() => setColumnsAnimating(true), 1800)
    const completeTimer = setTimeout(() => {
      setIsVisible(false)
      if (onLoadComplete) onLoadComplete()
    }, 2650)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(logoFadeTimer)
      clearTimeout(columnTimer)
      clearTimeout(completeTimer)
    }
  }, [onLoadComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      {/* Column Panels - White */}
      <div className="fixed inset-0 flex z-[10001]">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 origin-top"
            style={{ background: '#FFFFFF' }}
            initial={{ scaleY: 1 }}
            animate={columnsAnimating ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{
              duration: 0.8,
              delay: columnsAnimating ? i * 0.08 : 0,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        ))}
      </div>

      {/* Logo - On top of columns */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-[10002]"
        initial={{ opacity: 1 }}
        animate={{ opacity: logoFadeOut ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.img
          src="/EvLogo.png"
          alt="White EV"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={logoVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            width: 'clamp(180px, 28vw, 280px)',
            height: 'auto',
            borderRadius: '16px',
          }}
        />
      </motion.div>
    </div>
  )
}
