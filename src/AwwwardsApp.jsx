import { useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { AnimatePresence } from 'framer-motion'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NetworkBar from './components/NetworkBar'
import HowItWorks from './components/HowItWorks'
import ProductFeatures from './components/ProductFeatures'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import FlyingCard from './components/FlyingCard'
import Investors from './components/Investors'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <PageLoader key="loader" onLoadComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.1 }}>
        {loaded && <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />}
        {loaded && currentPage === 'home' && <FlyingCard />}
        <main>
          {currentPage === 'home' ? (
            <>
              <Hero />
              <HowItWorks />
              <ProductFeatures />

              <NetworkBar />
              <FaqSection />
              <CtaSection onPageChange={setCurrentPage} />
            </>
          ) : (
            <Investors />
          )}
        </main>
        {loaded && <Footer />}
      </ReactLenis>
    </>
  )
}
