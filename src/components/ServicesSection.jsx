import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'INSTANT ACCESS',
    description: 'Tap and start charging in seconds at any compatible station. No apps to open, no codes to enter - just pure convenience.'
  },
  {
    number: '02',
    title: 'SECURE PAYMENTS',
    description: 'Bank-level encryption protects every transaction. Your payment data is never stored on the card, ensuring complete security.'
  },
  {
    number: '03',
    title: 'REAL-TIME TRACKING',
    description: 'Monitor your charging sessions and costs in the app. Get instant notifications when charging starts, stops, or completes.'
  },
  {
    number: '04',
    title: 'UNIVERSAL NETWORK',
    description: 'Works with all major charging networks nationwide. One card to access 10,000+ stations from coast to coast.'
  }
]

export default function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const panels = gsap.utils.toArray('.service-panel')

    panels.forEach((panel, i) => {
      if (i < panels.length - 1) {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: true,
        })
      }

      // Clip-path wipe effect
      if (i > 0) {
        gsap.fromTo(panel,
          {
            clipPath: 'inset(0 0 100% 0)'
          },
          {
            clipPath: 'inset(0 0 0% 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white">
      {services.map((service, i) => {
        const isDark = i % 2 === 0
        return (
          <div
            key={i}
            className="service-panel h-screen flex items-center justify-center relative"
            style={{
              backgroundColor: isDark ? '#0d0d0d' : '#ffffff'
            }}
          >
            <div className="max-w-[1800px] w-full px-6 md:px-12 lg:px-20">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
                <div>
                  <div className={`text-xs md:text-sm tracking-[0.5em] uppercase mb-4 md:mb-8 ${isDark ? 'text-[#CCFF00]' : 'text-black/30'}`}>
                    {service.number}
                  </div>
                  <h2 className={`text-[clamp(2.5rem,12vw,14rem)] font-black tracking-tighter leading-[0.9] ${isDark ? 'text-white' : 'text-black'}`}>
                    {service.title}
                  </h2>
                </div>
                <div className="max-w-md md:pt-8">
                  <p className={`text-base md:text-xl leading-relaxed ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
