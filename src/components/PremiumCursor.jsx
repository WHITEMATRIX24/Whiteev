import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useSpring } from 'framer-motion'

export default function PremiumCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useSpring(0, { damping: 25, stiffness: 250, mass: 0.5 })
  const cursorY = useSpring(0, { damping: 25, stiffness: 250, mass: 0.5 })

  useEffect(() => {
    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], [data-cursor]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], [data-cursor]')) {
        setIsHovering(false)
      }
    }

    const handleDocumentLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)
    document.addEventListener('mouseleave', handleDocumentLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      document.removeEventListener('mouseleave', handleDocumentLeave)
    }
  }, [cursorX, cursorY, isVisible])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (!isVisible) return null

  const cursorContent = (
    <>
      {/* Main cursor dot with mix-blend-difference for inverted colors */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 2147483647,
          mixBlendMode: 'difference',
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 60 : 16,
            height: isHovering ? 60 : 16,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
            mass: 0.5
          }}
        />
      </motion.div>

      {/* Inner dot when hovering */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
            zIndex: 2147483647,
            mixBlendMode: 'difference',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </motion.div>
      )}
    </>
  )

  return createPortal(cursorContent, document.body)
}
