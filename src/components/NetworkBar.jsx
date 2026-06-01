import { motion } from 'framer-motion'

export default function NetworkBar() {
  const stations = [
    { name: 'Network A', angle: 0 },
    { name: 'Network B', angle: 60 },
    { name: 'Network C', angle: 120 },
    { name: 'Network D', angle: 180 },
    { name: 'Network E', angle: 240 },
    { name: 'Network F', angle: 300 },
  ]

  return (
    <section
      id="network"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1F3C 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(3rem, 5vh, 4rem) clamp(1rem, 3vw, 1.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 4rem)', zIndex: 2, padding: '0 1rem' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
            fontWeight: 900,
            color: 'white',
            margin: 0,
            marginBottom: '1rem',
            lineHeight: 0.95,
            letterSpacing: '-0.06em',
            textTransform: 'uppercase',
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
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', margin: 0 }}
        >
          WHITE EV connects charging stations worldwide
        </motion.p>
      </motion.div>

      {/* Globe Structure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Outer rotating ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          animate={{ rotate: 360 }}
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
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          animate={{ rotate: -360 }}
          style={{
            position: 'absolute',
            width: '75%',
            height: '75%',
            borderRadius: '50%',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        />

        {/* Inner ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.2 + i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
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
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.2 + i * 0.15 }}
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
                    fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)',
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
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.5,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 100
          }}
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
              width: 'clamp(100px, 25vw, 140px)',
              height: 'clamp(100px, 25vw, 140px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src="/EvLogo.png"
              alt="WHITE EV"
              style={{
                width: 'clamp(60px, 15vw, 90px)',
                height: 'auto',
                borderRadius: '8px',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginTop: 'clamp(2rem, 5vw, 3rem)',
          fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
          color: 'rgba(255,255,255,0.5)',
          zIndex: 2,
          padding: '0 1rem',
        }}
      >
        One platform connecting all charging networks globally
      </motion.p>
    </section>
  )
}
