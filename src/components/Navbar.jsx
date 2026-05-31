import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features',     href: '#features' },
  { label: 'Network',      href: '#network' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Navbar({ onPageChange, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div style={{
        position: 'fixed', top: '1.25rem', left: 0, right: 0,
        zIndex: 1000, display: 'flex', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{
            pointerEvents: 'auto',
            display: 'flex', alignItems: 'center',
            gap: '0.15rem',
            padding: '0.3rem 0.4rem 0.3rem 0.8rem',
            background: scrolled
              ? 'rgba(255,255,255,0.92)'
              : 'rgba(248,250,255,0.75)',
            backdropFilter: 'blur(28px) saturate(160%)',
            WebkitBackdropFilter: 'blur(28px) saturate(160%)',
            borderRadius: '100px',
            border: '1px solid rgba(15,23,42,0.09)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(15,23,42,0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
              : '0 4px 20px rgba(15,23,42,0.07), inset 0 1px 0 rgba(255,255,255,0.8)',
            transition: 'background 0.5s, box-shadow 0.5s',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); onPageChange?.('home'); }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginRight: '1.25rem', cursor: 'pointer' }}>
            <img src="/EvLogo.png" alt="White EV" style={{ height: '48px', width: 'auto', borderRadius: '8px', display: 'block' }} />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ display: 'flex', gap: '0.1rem', alignItems: 'center' }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage === 'investors') {
                    // Switch to home page first
                    onPageChange?.('home')
                    // Wait for page to render, then scroll
                    setTimeout(() => {
                      const element = document.querySelector(l.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }, 100)
                  } else {
                    // Already on home page, just scroll
                    const element = document.querySelector(l.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                style={{
                  color: 'rgba(15,23,42,0.52)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  padding: '0.38rem 0.8rem',
                  borderRadius: '100px',
                  transition: 'color 0.2s, background 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#0F172A'
                  e.currentTarget.style.background = 'rgba(15,23,42,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(15,23,42,0.52)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="hidden md:inline-flex"
            onClick={(e) => { e.preventDefault(); onPageChange?.('investors') }}
            style={{
              marginLeft: '0.6rem',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
              color: 'white',
              padding: '0.48rem 1.1rem',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              boxShadow: '0 0 20px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
              transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(59,130,246,0.55), inset 0 1px 0 rgba(255,255,255,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)'
            }}
          >
            Investment Opportunity
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            style={{
              marginLeft: '0.5rem',
              background: 'rgba(15,23,42,0.05)',
              border: '1px solid rgba(15,23,42,0.1)',
              borderRadius: '100px',
              padding: '7px 10px',
              flexDirection: 'column', gap: '4px',
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '16px', height: '1.5px',
                background: 'rgba(15,23,42,0.7)', borderRadius: '2px',
                transition: 'transform 0.25s, opacity 0.25s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(5.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-5.5px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </motion.nav>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 'calc(1.25rem + 52px + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 999,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(15,23,42,0.09)',
              borderRadius: '20px',
              padding: '0.75rem',
              display: 'flex', flexDirection: 'column', gap: '0.15rem',
              minWidth: '220px',
              boxShadow: '0 20px 60px rgba(15,23,42,0.15)',
            }}
          >
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  if (currentPage === 'investors') {
                    // Switch to home page first
                    onPageChange?.('home')
                    // Wait for page to render, then scroll
                    setTimeout(() => {
                      const element = document.querySelector(l.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }, 100)
                  } else {
                    // Already on home page, just scroll
                    const element = document.querySelector(l.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                style={{
                  color: 'rgba(15,23,42,0.65)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  padding: '0.6rem 0.9rem',
                  borderRadius: '12px',
                  transition: 'color 0.2s, background 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#0F172A'
                  e.currentTarget.style.background = 'rgba(15,23,42,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(15,23,42,0.65)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ height: '1px', background: 'rgba(15,23,42,0.07)', margin: '0.4rem 0' }} />
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onPageChange?.('investors'); setMenuOpen(false) }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                color: 'white', padding: '0.7rem 1rem', borderRadius: '12px',
                textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600,
                boxShadow: '0 0 20px rgba(59,130,246,0.3)',
              }}
            >
              Investment Opportunity
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
