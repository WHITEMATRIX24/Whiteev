import { motion } from 'framer-motion'

const columns = [
  {
    heading: 'Product',
    links: ['Features', 'NFC Card', 'Partner With Us', 'Station Map'],
  },
  {
    heading: 'Resources',
    links: ['Help Center', 'Documentation', 'Status Page', 'FAQ'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0B1120',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(4rem, 8vh, 6rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 4vh, 3rem)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 4rem)',
          marginBottom: 'clamp(3rem, 6vh, 5rem)',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1', minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '8px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 14px rgba(59,130,246,0.35)',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" />
                </svg>
              </div>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                WHITE<span style={{ color: '#60A5FA' }}>EV</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '240px', marginBottom: '1.25rem' }}>
              The universal NFC charging card for every EV driver. One card. Every charger.
            </p>
            <a href="mailto:support@whiteev.com" style={{
              color: 'rgba(255,255,255,0.38)', fontSize: '0.85rem', textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
            >
              support@whiteev.com
            </a>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.heading}>
              <div style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                {col.heading}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.75rem', borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
            © {year} WhiteMatrix Solutions. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
