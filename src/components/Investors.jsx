import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Investors() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div style={{ background: '#FEFEFE' }}>
      {/* Hero - Editorial Style */}
      <section ref={containerRef} style={{
        minHeight: '100vh',
        background: '#0A1628',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(2rem, 5vw, 6rem)',
      }}>
        <motion.div style={{ y, opacity, width: '100%', maxWidth: '1600px', margin: '0 auto' }}>
          {/* Minimal tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: '#7DD3FC',
              fontWeight: 600,
              textTransform: 'uppercase',
              marginBottom: '3rem',
            }}
          >
            Investment Opportunity
          </motion.div>

          {/* Large editorial heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(3rem, 9vw, 9rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              color: '#FFFFFF',
              marginBottom: '2rem',
              letterSpacing: '-0.04em',
            }}
          >
            Building the<br />
            Infrastructure<br />
            <span style={{ fontWeight: 800, fontStyle: 'italic' }}>Layer</span>
          </motion.h1>

          {/* Subtext with line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '2rem',
              maxWidth: '800px',
            }}
          >
            <div style={{
              width: '1px',
              height: '120px',
              background: 'linear-gradient(to bottom, #3B82F6, transparent)',
              marginTop: '0.5rem',
            }} />
            <div>
              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}>
                The EV charging ecosystem is rapidly expanding, but users still face fragmented experiences across networks.
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                color: '#7DD3FC',
                lineHeight: 1.6,
                fontWeight: 500,
              }}>
                WHITE EV is the interoperability layer that connects everything.
              </p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: 'clamp(2rem, 5vw, 6rem)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* Key Points - Diagonal Section */}
      <section style={{
        padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 6rem)',
        background: '#FEFEFE',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          {/* Three key points - no cards, just typography and lines */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(4rem, 8vw, 8rem)',
          }}>
            {[
              {
                number: '01',
                title: 'Universal Identity',
                desc: 'One card across every network. No more juggling multiple apps and RFID tags.',
              },
              {
                number: '02',
                title: 'Network Effects',
                desc: 'Each new operator multiplies value for all participants in the ecosystem.',
              },
              {
                number: '03',
                title: 'Infrastructure Play',
                desc: 'We are the authentication and settlement layer powering the entire industry.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div style={{
                  fontSize: '0.9rem',
                  color: '#3B82F6',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  marginBottom: '1.5rem',
                }}>
                  {item.number}
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 600,
                  color: '#0A1628',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}>
                  {item.title}
                </h3>
                <div style={{
                  width: '60px',
                  height: '2px',
                  background: '#0A1628',
                  marginBottom: '1.5rem',
                }} />
                <p style={{
                  fontSize: '1.05rem',
                  color: 'rgba(10,22,40,0.6)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement - Creative Typography */}
      <section style={{
        padding: 'clamp(8rem, 18vh, 15rem) clamp(2rem, 5vw, 6rem)',
        background: '#0A1628',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div style={{
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              color: '#7DD3FC',
              fontWeight: 600,
              textTransform: 'uppercase',
              marginBottom: '3rem',
            }}>
              Our Vision
            </div>

            {/* Creative typographic statement */}
            <div style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 300,
              marginBottom: '4rem',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Just as </span>
              <span style={{
                fontWeight: 600,
                color: '#FFFFFF',
                fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              }}>
                Visa
              </span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}> unified payments</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>across banks and merchants,</span>
              <br />
              <br />
              <span style={{
                fontWeight: 700,
                background: 'linear-gradient(120deg, #7DD3FC, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
              }}>
                WHITE EV
              </span>
              <span style={{ fontWeight: 500, color: '#FFFFFF' }}> unifies</span>
              <br />
              <span style={{ fontWeight: 500, color: '#FFFFFF' }}>charging access </span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>across</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>fragmented networks.</span>
            </div>

            {/* Bottom statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                borderLeft: '2px solid #3B82F6',
                paddingLeft: '2rem',
                maxWidth: '800px',
              }}
            >
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                We are building the trusted authentication and settlement infrastructure that powers the future of electric mobility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section style={{
        padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 6rem)',
        background: '#FEFEFE',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '5rem' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 600,
              color: '#0A1628',
              marginBottom: '1rem',
            }}>
              How it works
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(10,22,40,0.5)',
              fontWeight: 300,
            }}>
              From driver to settlement in seven steps
            </p>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '0',
              bottom: '0',
              width: '1px',
              background: 'linear-gradient(to bottom, #3B82F6, #06B6D4)',
            }} />

            {[
              { label: 'EV Driver', desc: 'Initiates charging session' },
              { label: 'Partner App / OEM', desc: 'Opens authentication flow' },
              { label: 'WHITE EV NFC Card', desc: 'Taps at charging station' },
              { label: 'Charging Station', desc: 'Reads card credentials' },
              { label: 'WHITE EV Network', desc: 'Authenticates and routes request', highlight: true },
              { label: 'Settlement Engine', desc: 'Processes inter-operator payment' },
              { label: 'Charging Operator', desc: 'Receives settlement confirmation' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  position: 'relative',
                  paddingLeft: '60px',
                  paddingBottom: i < 6 ? '4rem' : '0',
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '13px',
                  top: '6px',
                  width: step.highlight ? '16px' : '14px',
                  height: step.highlight ? '16px' : '14px',
                  borderRadius: '50%',
                  background: step.highlight ? '#F59E0B' : '#3B82F6',
                  boxShadow: step.highlight ? '0 0 20px rgba(245,158,11,0.5)' : 'none',
                }} />

                <div>
                  <div style={{
                    fontSize: step.highlight ? '1.35rem' : '1.15rem',
                    fontWeight: step.highlight ? 700 : 600,
                    color: step.highlight ? '#F59E0B' : '#0A1628',
                    marginBottom: '0.5rem',
                  }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    color: 'rgba(10,22,40,0.5)',
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    {step.desc}
                  </div>
                  {step.highlight && (
                    <div style={{
                      marginTop: '0.75rem',
                      fontSize: '0.7rem',
                      color: '#F59E0B',
                      letterSpacing: '0.15em',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}>
                      Core Infrastructure
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section style={{
        padding: 'clamp(6rem, 15vh, 12rem) clamp(2rem, 5vw, 6rem)',
        background: '#0A1628',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '2rem',
            }}>
              Let us build the future<br />of electric mobility
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '3rem',
              fontWeight: 300,
              lineHeight: 1.7,
            }}>
              Join us in creating the infrastructure layer that connects<br />every EV driver to every charging network.
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <motion.a
                href="mailto:investors@whiteev.com"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '1rem 2.5rem',
                  background: '#FFFFFF',
                  color: '#0A1628',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: '2px',
                  display: 'inline-block',
                }}
              >
                Contact Investor Relations
              </motion.a>
              <motion.a
                href="mailto:investors@whiteev.com?subject=Request Investment Deck"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '1rem 2.5rem',
                  background: 'transparent',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '2px',
                  display: 'inline-block',
                }}
              >
                Request Deck
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
