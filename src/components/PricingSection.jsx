import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Free',
    badge: null,
    price: '$0',
    period: 'forever',
    desc: 'Perfect for occasional EV drivers who want zero commitment.',
    features: [
      'Universal NFC card (free shipping)',
      'Access to all 10,000+ stations',
      'Pay-as-you-go at standard rates',
      'Basic charge history',
      'iOS & Android app',
    ],
    cta: 'Get Started Free',
    tier: 'free',
  },
  {
    name: 'Premium',
    badge: 'Most Popular',
    price: '$9.99',
    period: '/ month',
    sub: 'Billed monthly · cancel anytime',
    desc: 'For regular commuters who want the best rates and full analytics.',
    features: [
      'Everything in Free',
      'Discounted per-kWh rates',
      'Priority customer support',
      'Full usage analytics & reports',
      'Price comparison across networks',
      'Session scheduling',
    ],
    cta: 'Start Premium',
    tier: 'premium',
  },
  {
    name: 'Family',
    badge: 'Best Value',
    price: '$19.99',
    period: '/ month',
    sub: 'Just $4/card · up to 5 cards',
    desc: 'One plan for the whole household — manage all your EVs together.',
    features: [
      'Everything in Premium',
      'Up to 5 NFC cards',
      'Shared spending dashboard',
      'Per-card usage breakdown',
      'Family billing with one invoice',
      'Dedicated account manager',
    ],
    cta: 'Get Family Plan',
    tier: 'family',
  },
]

const tierStyles = {
  free: {
    cardBg: 'linear-gradient(#0A1220, #0A1220) padding-box, linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06)) border-box',
    border: '1.5px solid transparent',
    glow: 'none',
    badgeStyle: null,
    ctaBg: 'rgba(255,255,255,0.07)',
    ctaBorder: '1px solid rgba(255,255,255,0.12)',
    ctaColor: 'rgba(255,255,255,0.75)',
    checkColor: 'rgba(255,255,255,0.45)',
    checkBg: 'rgba(255,255,255,0.05)',
    checkBorder: 'rgba(255,255,255,0.1)',
  },
  premium: {
    cardBg: 'linear-gradient(160deg, #142850 0%, #0E1F40 55%, #091829 100%) padding-box, linear-gradient(135deg, #3B82F6, #06B6D4) border-box',
    border: '2px solid transparent',
    glow: '0 0 0 1px rgba(59,130,246,0.15), 0 20px 80px rgba(59,130,246,0.28)',
    badgeStyle: { background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', color: 'white' },
    ctaBg: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    ctaBorder: 'none',
    ctaColor: 'white',
    checkColor: '#93C5FD',
    checkBg: 'rgba(59,130,246,0.18)',
    checkBorder: 'rgba(59,130,246,0.4)',
  },
  family: {
    cardBg: 'linear-gradient(#0A1220, #0A1220) padding-box, linear-gradient(135deg, rgba(6,182,212,0.45), rgba(59,130,246,0.3)) border-box',
    border: '1.5px solid transparent',
    glow: 'none',
    badgeStyle: { background: 'rgba(6,182,212,0.15)', color: '#67E8F9', border: '1px solid rgba(6,182,212,0.3)' },
    ctaBg: 'rgba(6,182,212,0.12)',
    ctaBorder: '1px solid rgba(6,182,212,0.35)',
    ctaColor: '#67E8F9',
    checkColor: '#67E8F9',
    checkBg: 'rgba(6,182,212,0.12)',
    checkBorder: 'rgba(6,182,212,0.3)',
  },
}

export default function 
() {
  return (
    <section id="pricing" style={{
      background: '#05091A',
      padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem)',
    }}>
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          align-items: start;
        }
        @media (min-width: 860px) {
          .pricing-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .pricing-premium {
            transform: translateY(-12px);
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(3rem, 6vh, 5rem)', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, transparent, #3B82F6)' }} />
            <span style={{ color: '#60A5FA', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Pricing</span>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to left, transparent, #3B82F6)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.03em', color: 'white', marginBottom: '1rem',
          }}>
            Start free. Scale when ready.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
            No contracts. Cancel anytime. Your NFC card is always free.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => {
            const s = tierStyles[plan.tier]
            const isPremium = plan.tier === 'premium'
            return (
              <motion.div
                key={plan.name}
                className={isPremium ? 'pricing-premium' : ''}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: '22px',
                  padding: `clamp(1.75rem, 3vw, ${isPremium ? '2.75rem' : '2.25rem'})`,
                  display: 'flex', flexDirection: 'column', gap: '1.5rem',
                  position: 'relative', overflow: 'hidden',
                  background: s.cardBg,
                  border: s.border,
                  boxShadow: s.glow,
                }}
              >
                {/* Diagonal texture for premium */}
                {isPremium && (
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-4 20L20-4M0 24L24 0' stroke='rgba(59,130,246,0.04)' stroke-width='1'/%3E%3C/svg%3E")`,
                  }} />
                )}

                {/* Top glow for premium */}
                {isPremium && (
                  <div style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                    width: '200px', height: '80px', pointerEvents: 'none',
                    background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.25), transparent 70%)',
                  }} />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div style={{ display: 'flex' }}>
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', padding: '4px 12px', borderRadius: '20px',
                      ...s.badgeStyle,
                    }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name + price */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    color: isPremium ? '#93C5FD' : 'rgba(255,255,255,0.45)',
                    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
                    textTransform: 'uppercase', marginBottom: '1rem',
                  }}>
                    {plan.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                    <span style={{
                      fontSize: 'clamp(2.2rem, 4vw, isPremium ? 3.25rem : 2.75rem)', fontWeight: 900,
                      letterSpacing: '-0.05em', lineHeight: 1,
                      color: isPremium ? 'white' : 'rgba(255,255,255,0.88)',
                    }}>
                      {plan.price}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{plan.period}</span>
                  </div>
                  {plan.sub && (
                    <div style={{ color: isPremium ? 'rgba(147,197,253,0.6)' : 'rgba(6,182,212,0.65)', fontSize: '0.75rem' }}>
                      {plan.sub}
                    </div>
                  )}
                  <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: '0.75rem' }}>
                    {plan.desc}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: isPremium ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.07)' }} />

                {/* Features */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
                  {plan.features.map((f, fi) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: '1px',
                        background: s.checkBg,
                        border: `1px solid ${s.checkBorder}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={s.checkColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{
                        color: fi === 0 && plan.tier !== 'free' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.68)',
                        fontSize: '0.875rem', lineHeight: 1.5,
                        fontStyle: fi === 0 && plan.tier !== 'free' ? 'italic' : 'normal',
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: isPremium ? '1rem 1.5rem' : '0.875rem 1.5rem',
                  borderRadius: '12px',
                  background: s.ctaBg, border: s.ctaBorder || 'none',
                  color: s.ctaColor, fontWeight: 700, fontSize: '0.9rem',
                  textDecoration: 'none', letterSpacing: '-0.01em',
                  boxShadow: isPremium ? '0 4px 24px rgba(59,130,246,0.3)' : 'none',
                  position: 'relative',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    if (isPremium) e.currentTarget.style.boxShadow = '0 8px 32px rgba(59,130,246,0.45)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    if (isPremium) e.currentTarget.style.boxShadow = '0 4px 24px rgba(59,130,246,0.3)'
                  }}
                >
                  {plan.cta}
                  {isPremium && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', color: 'rgba(255,255,255,0.28)', fontSize: '0.8rem', marginTop: '2.5rem' }}
        >
          All plans include your free NFC card. Prices in USD. Taxes may apply.
        </motion.p>
      </div>
    </section>
  )
}
