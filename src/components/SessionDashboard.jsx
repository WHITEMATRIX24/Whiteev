import { motion } from 'framer-motion'

export default function GlobalNetwork() {
  const stations = [
    { name: 'ChargePoint', angle: 0 },
    { name: 'EVgo', angle: 60 },
    { name: 'Blink', angle: 120 },
    { name: 'Electrify America', angle: 180 },
    { name: 'Tesla', angle: 240 },
    { name: 'Shell Recharge', angle: 300 },
  ]

  return (
    <section
      style={{
        height: '100vh',
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1F3C 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 2 }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'white',
            margin: 0,
            marginBottom: '1rem',
          }}
        >
          Global{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Charging Network
          </span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
          WHITE EV connects charging stations worldwide
        </p>
      </motion.div>

      {/* Globe Structure */}
      <div
        style={{
          position: 'relative',
          width: 'min(500px, 80vw)',
          height: 'min(500px, 80vw)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        />

        {/* Middle rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: '75%',
            height: '75%',
            borderRadius: '50%',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        />

        {/* Inner ring */}
        <div
          style={{
            position: 'absolute',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            border: '1px solid rgba(59,130,246,0.1)',
          }}
        />

        {/* Charging stations positioned around the circle */}
        {stations.map((station, i) => {
          const angle = (station.angle * Math.PI) / 180
          const radius = 50 // percentage
          const x = 50 + radius * Math.cos(angle)
          const y = 50 + radius * Math.sin(angle)

          return (
            <motion.div
              key={station.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Connection line to center */}
              <svg
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '200%',
                  height: '200%',
                  overflow: 'visible',
                  pointerEvents: 'none',
                }}
              >
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  x1="0"
                  y1="0"
                  x2={`${(50 - x) * 2}%`}
                  y2={`${(50 - y) * 2}%`}
                  stroke="rgba(59,130,246,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Station point */}
              <div style={{ position: 'relative' }}>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#3B82F6',
                    boxShadow: '0 0 20px rgba(59,130,246,0.6)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '150%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    fontSize: '0.75rem',
                    color: '#60A5FA',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {station.name}
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* CENTER - WHITE EV */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(59,130,246,0.4)',
                '0 0 60px rgba(59,130,246,0.6)',
                '0 0 40px rgba(59,130,246,0.4)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
              }}
            >
              WHITE
              <br />
              EV
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.8)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.4rem',
                fontWeight: 600,
              }}
            >
              Switch
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.5)',
          zIndex: 2,
        }}
      >
        One platform connecting all charging networks globally
      </motion.p>
    </section>
  )
}
