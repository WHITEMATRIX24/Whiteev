import { useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NetworkBar from './components/NetworkBar'
import HowItWorks from './components/HowItWorks'
import ProductFeatures from './components/ProductFeatures'
import SessionDashboard from './components/SessionDashboard'
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
      <PageLoader onLoadComplete={() => setLoaded(true)} />
      {loaded && (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.1 }}>
          <Navbar onPageChange={setCurrentPage} />
          {currentPage === 'home' && <FlyingCard />}
          <main>
            {currentPage === 'home' ? (
              <>
                <Hero />
                <NetworkBar />
                <HowItWorks />
                <ProductFeatures />
                <SessionDashboard />
                <FaqSection />
                <CtaSection />
              </>
            ) : (
              <Investors />
            )}
          </main>
          <Footer />
        </ReactLenis>
      )}
    </>
  )
}
