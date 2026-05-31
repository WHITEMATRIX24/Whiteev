import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1]

export default function Investors() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} style={{ background: '#FAFAFA', overflow: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HERO - Bold Typography Focus */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background: '#0A1628',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(2rem, 5vw, 4rem)',
          overflow: 'hidden',
        }}
      >
        {/* Noise texture overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }} />

        <motion.div
          style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            opacity: heroOpacity,
          }}
        >
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              border: '1px solid rgba(125,211,252,0.3)',
              borderRadius: '4px',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: '#7DD3FC',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '3rem',
            }}
          >
            Investment Deck
          </motion.div>

          {/* Massive headline */}
          <div style={{ marginBottom: '3rem' }}>
            <motion.h1
              initial={{ opacity: 0, x: -100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(3rem, 11vw, 10rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.05em',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              INDIA'S
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(3rem, 11vw, 10rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.05em',
                background: 'linear-gradient(90deg, #7DD3FC, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
              }}
            >
              EV WALLET
            </motion.h1>
          </div>

          {/* Two column layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              maxWidth: '1000px',
            }}
          >
            <div>
              <p style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.4,
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}>
                One card.<br />
                Multiple networks.<br />
                Zero friction.
              </p>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
              }}>
                Building the payment infrastructure layer for India's EV revolution.
                Backed by Kerala Startup Mission.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'flex-end' }}>
              <motion.a
                href="mailto:investors@whiteev.com?subject=Investor Deck"
                whileHover={{ x: 4 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.2rem 0',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
              >
                <span>Download Deck</span>
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </motion.a>

              <motion.a
                href="mailto:investors@whiteev.com"
                whileHover={{ x: 4 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.2rem 0',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                }}
              >
                <span>Get in Touch</span>
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* BENTO BOX - Asymmetric Grid */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(4rem, 10vh, 8rem) clamp(2rem, 5vw, 4rem)',
        background: '#FAFAFA',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Bento grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            gridAutoRows: 'minmax(180px, auto)',
          }}>
            {/* Large stat box */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                gridColumn: 'span 12',
                gridRow: 'span 2',
                background: 'linear-gradient(135deg, #0A1628 0%, #1E293B 100%)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 4rem)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: '#7DD3FC',
                  textTransform: 'uppercase',
                  marginBottom: '2rem',
                  fontWeight: 600,
                }}>
                  Incubated & Funded
                </div>

                <h2 style={{
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.2,
                  marginBottom: '2rem',
                  letterSpacing: '-0.02em',
                }}>
                  Kerala Startup Mission<br />Innovation Grant Recipient
                </h2>

                <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Status</div>
                    <div style={{ fontSize: '1.2rem', color: '#7DD3FC', fontWeight: 600 }}>Product Launched</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Focus</div>
                    <div style={{ fontSize: '1.2rem', color: '#7DD3FC', fontWeight: 600 }}>Market Deployment</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HOW IT WORKS - Flow Chart */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        background: '#FAFAFA',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 2rem',
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
          {/* Compact Header */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: '#0A1628',
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
            }}>
              From Driver to Settlement — <span style={{
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Seven Steps</span>
            </h2>
          </motion.div>

          {/* Flowchart SVG + Nodes */}
          <div style={{ position: 'relative', padding: '2rem 0' }}>
            {/* SVG Path */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              viewBox="0 0 1400 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Main flow path - S-curve */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                d="M 100 150 Q 250 100, 400 150 T 700 150 Q 850 180, 1000 150 T 1300 150"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Flow Nodes */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'relative',
              zIndex: 1,
              flexWrap: 'wrap',
              gap: '2rem',
            }}>
              {[
                { num: '01', title: 'Driver', sub: 'Initiates', iconType: 'car', color: '#3B82F6' },
                { num: '02', title: 'App/OEM', sub: 'Authenticates', iconType: 'phone', color: '#0284C7' },
                { num: '03', title: 'NFC Card', sub: 'Tap & Pay', icon: '💳', color: '#06B6D4', highlight: true },
                { num: '04', title: 'Station', sub: 'Reads', icon: '⚡', color: '#0891B2' },
                { num: '05', title: 'WHITE EV', sub: 'Routes', icon: '🌐', color: '#3B82F6', highlight: true },
                { num: '06', title: 'Settlement', sub: 'Processes', iconType: 'dollar', color: '#10B981' },
                { num: '07', title: 'Complete', sub: 'Confirmed', iconType: 'check', color: '#059669' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80, scale: 0.7, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    flex: '1 1 140px',
                    minWidth: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Node Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      width: step.highlight ? '110px' : '90px',
                      height: step.highlight ? '110px' : '90px',
                      borderRadius: '50%',
                      background: step.highlight
                        ? `linear-gradient(135deg, ${step.color}, #06B6D4)`
                        : '#FFFFFF',
                      border: step.highlight ? 'none' : `3px solid ${step.color}`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: step.highlight
                        ? `0 20px 50px ${step.color}40, 0 0 0 8px ${step.color}15`
                        : `0 10px 30px ${step.color}20`,
                      position: 'relative',
                      marginBottom: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Icon - SVG or Emoji */}
                    {step.iconType ? (
                      <svg
                        width={step.highlight ? '52' : '44'}
                        height={step.highlight ? '52' : '44'}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        {step.iconType === 'car' && (
                          <path
                            d="M5 13l1.5-4.5h11L19 13m-14 0v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5M5 13h14M7 16h0m10 0h0"
                            stroke={step.color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                        {step.iconType === 'phone' && (
                          <g>
                            <rect
                              x="6"
                              y="3"
                              width="12"
                              height="18"
                              rx="2"
                              stroke={step.color}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 18h.01"
                              stroke={step.color}
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        )}
                        {step.iconType === 'dollar' && (
                          <g>
                            <path
                              d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
                              stroke={step.color}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        )}
                        {step.iconType === 'check' && (
                          <g>
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke={step.color}
                              strokeWidth="2"
                            />
                            <path
                              d="M9 12l2 2 4-4"
                              stroke={step.color}
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        )}
                      </svg>
                    ) : (
                      <>
                        <div style={{
                          fontSize: step.highlight ? '2.5rem' : '2rem',
                          marginBottom: '0.25rem',
                          filter: step.highlight ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none',
                        }}>
                          {step.icon}
                        </div>
                        <div style={{
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          color: step.highlight ? '#FFFFFF' : step.color,
                          letterSpacing: '0.05em',
                        }}>
                          {step.num}
                        </div>
                      </>
                    )}

                    {/* Pulse effect for highlights */}
                    {step.highlight && (
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{
                          position: 'absolute',
                          inset: '-8px',
                          borderRadius: '50%',
                          border: `2px solid ${step.color}`,
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <div>
                    <div style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#0A1628',
                      marginBottom: '0.25rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {step.title}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#6B7280',
                      fontWeight: 500,
                    }}>
                      {step.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Summary - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              textAlign: 'center',
              marginTop: '2.5rem',
              padding: '1.5rem 1rem 0 1rem',
              borderTop: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <p style={{
              fontSize: '1.1rem',
              color: '#0A1628',
              fontWeight: 600,
              margin: 0,
            }}>
              Complete transaction in <span style={{
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}>seconds</span> — seamless for drivers, instant for operators
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* THE PROBLEM - Large Typography Section */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 4rem)',
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1F3C 100%)',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              marginBottom: '3rem',
              maxWidth: '900px',
            }}>
              EV charging in India is{' '}
              <span style={{
                color: '#7DD3FC',
              }}>
                fragmented
              </span>
            </motion.h2>

            {/* Side by side content */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              marginTop: '4rem',
            }}>
              <motion.div
                initial={{ opacity: 0, x: -80, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.1)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>
                  01
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                }}>
                  Multiple Apps
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                }}>
                  EV drivers juggle 5-10 different charging apps, each with their own wallet and payment system.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.1)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>
                  02
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                }}>
                  No Interoperability
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                }}>
                  Charging networks operate in silos. Your wallet from Network A won't work at Network B's stations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.1)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>
                  03
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                }}>
                  Poor Experience
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                }}>
                  Downloading apps, creating accounts, and managing multiple wallets creates friction at every charge.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* THE SOLUTION - Split with Visual */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(to bottom, #F8FAFF, #fff)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '6rem',
            alignItems: 'center',
          }}>
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                marginBottom: '2rem',
                borderRadius: '2px',
              }} />

              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#0A1628',
                letterSpacing: '-0.03em',
                marginBottom: '2rem',
              }}>
                One platform.<br />
                All networks.
              </h2>

              <p style={{
                fontSize: '1.2rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                White EV Wallet is the <strong>interoperability layer</strong> that connects drivers to charging networks across India.
              </p>

              <div style={{
                padding: '2rem',
                background: '#F8FAFF',
                borderLeft: '3px solid #3B82F6',
                borderRadius: '8px',
                marginTop: '2rem',
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#0A1628',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}>
                  "We're not building another charging network. We're building the payment infrastructure that makes all networks work together."
                </p>
              </div>
            </motion.div>

            {/* Right - Flow Visual */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #0A1628, #1E293B)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Flow steps */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {['Tap NFC Card', 'Instant Auth', 'Start Charging', 'Auto Pay'].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -60, scale: 0.8 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        marginBottom: i < 3 ? '2rem' : 0,
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#fff',
                        flexShrink: 0,
                        boxShadow: '0 8px 24px rgba(59,130,246,0.3)',
                      }}>
                        {i + 1}
                      </div>

                      <div>
                        <div style={{
                          fontSize: '1.2rem',
                          fontWeight: 600,
                          color: '#fff',
                        }}>
                          {step}
                        </div>
                      </div>

                      {i < 3 && (
                        <div style={{
                          position: 'absolute',
                          left: '24px',
                          top: `calc(${i * 64 + 48}px)`,
                          width: '2px',
                          height: '32px',
                          background: 'rgba(59,130,246,0.3)',
                        }} />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative element */}
                <div style={{
                  position: 'absolute',
                  bottom: '-30%',
                  right: '-20%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent)',
                  filter: 'blur(60px)',
                }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* BUSINESS MODEL - Text Heavy Editorial */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 4rem)',
        background: '#0A1628',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#7DD3FC',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontWeight: 600,
              }}
            >
              Revenue Model
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: '4rem',
            }}>
              Four revenue streams.<br />
              All scalable.
            </motion.h2>

            {/* Revenue items */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                {
                  num: '01',
                  title: 'Transaction Fees',
                  desc: 'Revenue from every charging transaction processed through our network. Scales directly with adoption.',
                },
                {
                  num: '02',
                  title: 'NFC Card Programs',
                  desc: 'White-labeled card issuance for charging operators, fleet companies, and EV manufacturers.',
                },
                {
                  num: '03',
                  title: 'Enterprise Services',
                  desc: 'Management dashboards, analytics, and reporting tools for network partners.',
                },
                {
                  num: '04',
                  title: 'Settlement Services',
                  desc: 'Cross-network payment routing and automated reconciliation fees.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.9, delay: i * 0.12 + 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: '2.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '2rem',
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.1)',
                    lineHeight: 1,
                  }}>
                    {item.num}
                  </div>

                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.75rem',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.7,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* WHY NOW - Magazine Pull Quote Style */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 4rem)',
        background: '#fff',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#3B82F6',
                textTransform: 'uppercase',
                marginBottom: '3rem',
                fontWeight: 600,
              }}
            >
              Market Timing
            </motion.div>

            {/* Large pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#0A1628',
              letterSpacing: '-0.02em',
              marginBottom: '3rem',
              borderLeft: '4px solid #3B82F6',
              paddingLeft: '2rem',
            }}>
              India is adding 1,000+ public charging stations every month
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
              display: 'grid',
              gap: '2rem',
              fontSize: '1.1rem',
              color: '#374151',
              lineHeight: 1.8,
            }}>
              <p>
                <strong>The EV market in India is at an inflection point.</strong> Government subsidies,
                falling battery costs, and rising fuel prices are driving unprecedented adoption.
              </p>

              <p>
                But infrastructure is growing <em>fragmented</em>. Every charging operator builds their
                own network, their own app, their own wallet. The result? A terrible user experience
                that slows adoption.
              </p>

              <p>
                <strong>We're solving this at the infrastructure layer</strong> — not by building
                more charging stations, but by making all charging stations work together seamlessly.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              marginTop: '4rem',
              padding: '2rem 0',
              borderTop: '1px solid #E5E7EB',
            }}>
              {[
                { value: '2M+', label: 'EVs on Road' },
                { value: '15k+', label: 'Charging Stations' },
                { value: '30+', label: 'Network Operators' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#3B82F6',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6B7280',
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* FINAL CTA - Bold & Simple */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(8rem, 20vh, 16rem) clamp(2rem, 5vw, 4rem)',
        background: '#0A1628',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.25em',
                color: '#7DD3FC',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontWeight: 600,
              }}
            >
              Product Built → Market Ready → Time to
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1], type: 'spring' }}
              style={{
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.05em',
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, #fff 0%, #7DD3FC 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              SCALE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              marginBottom: '4rem',
              maxWidth: '600px',
              margin: '0 auto 4rem',
            }}>
              Join us in building India's EV charging payment infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <motion.a
                href="mailto:investors@whiteev.com"
                whileHover={{ y: -2 }}
                style={{
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  display: 'inline-block',
                  boxShadow: '0 10px 40px rgba(59,130,246,0.3)',
                }}
              >
                investors@whiteev.com
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
