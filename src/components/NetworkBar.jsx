import { motion } from 'framer-motion'

const networks = ['ChargePoint', 'EVgo', 'Blink Charging', 'Tesla', 'Electrify America', 'Volta', 'EVCS', 'FLO', 'SemaConnect', 'Greenlots']

export default function NetworkBar() {
  return (
    <section style={{
      background: '#FFFFFF',
      borderTop: '1px solid rgba(15,23,42,0.07)',
      borderBottom: '1px solid rgba(15,23,42,0.07)',
      padding: '1.75rem clamp(1.5rem, 5vw, 5rem)',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: '2rem',
      }}>
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 10px rgba(34,197,94,0.5)' }} />
          <span style={{ color: 'rgba(15,23,42,0.38)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Compatible networks
          </span>
        </div>
        <div style={{ flex: 1, overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <style>{`
            @keyframes networkScroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .network-track { animation: networkScroll 28s linear infinite; display: flex; }
            .network-track:hover { animation-play-state: paused; }
          `}</style>
          <div className="network-track" style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap' }}>
            {[...networks, ...networks].map((name, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0 1.75rem' }}>
                <span style={{ color: 'rgba(15,23,42,0.48)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                  {name}
                </span>
                <span style={{ color: 'rgba(15,23,42,0.18)', fontSize: '0.5rem' }}>◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
