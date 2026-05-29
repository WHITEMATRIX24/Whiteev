const steps = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 9C7 9 9 11 12 11C15 11 17 9 17 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Get a WHITE-Powered Card',
    desc: 'Receive a WHITE EV compatible NFC card directly through participating EV platforms, OEMs, or charging partners.',
    accent: '#3B82F6',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Link Your Wallet',
    desc: 'Connect your preferred partner wallet or charging account securely to the WHITE EV network.',
    accent: '#0EA5E9',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 12C6 8.69 8.69 6 12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3 12C3 7.03 7.03 3 12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 12C9 10.34 10.34 9 12 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Tap & Charge Anywhere',
    desc: 'Use your card across integrated charging networks with seamless authentication and automatic payment settlement.',
    accent: '#06B6D4',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      background: '#F0F5FF',
      padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
    }}>
      <style>{`
        .steps-open {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          border-left: 1px solid rgba(59,130,246,0.22);
          padding-left: clamp(1.5rem, 4vw, 2.5rem);
          position: relative;
          z-index: 1;
        }
        @media (min-width: 800px) {
          .steps-open {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            border-left: none;
            padding-left: 0;
          }
          .step-open-item:not(:last-child) {
            padding-right: clamp(2rem, 4vw, 3.5rem);
            border-right: 1px solid rgba(15,23,42,0.08);
          }
          .step-open-item:not(:first-child) {
            padding-left: clamp(2rem, 4vw, 3.5rem);
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(3rem, 6vh, 5rem)', maxWidth: '560px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, #3B82F6, transparent)' }} />
            <span style={{ color: '#3B82F6', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              The Process
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.03em', color: '#0F172A', marginBottom: '1rem',
          }}>
            From card to charge<br />in three steps
          </h2>
          <p style={{ color: 'rgba(15,23,42,0.55)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Get your WHITE EV card through a partner, link your wallet, and tap to charge across every integrated network.
          </p>
        </div>

        <div className="steps-open">
          {steps.map((step) => (
            <div key={step.num} className="step-open-item">
              <div style={{
                fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900,
                letterSpacing: '-0.06em', lineHeight: 1,
                background: `linear-gradient(135deg, ${step.accent}, ${step.accent}55)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                marginBottom: '1.5rem',
              }}>
                {step.num}
              </div>

              <div style={{
                height: '1px',
                background: `linear-gradient(90deg, ${step.accent}60, transparent)`,
                marginBottom: '1.75rem',
              }} />

              <div style={{ color: step.accent, marginBottom: '1.25rem', opacity: 0.9 }}>
                {step.icon}
              </div>

              <div style={{
                color: step.accent, fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem',
              }}>
                Step {step.num}
              </div>

              <h3 style={{
                color: '#0F172A', fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>

              <p style={{ color: 'rgba(15,23,42,0.55)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
