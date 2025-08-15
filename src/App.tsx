import React, { useState } from 'react'
import './styles/intro-animations.css'
// Import all components
import LogoIntroAnimation, { MorphingLogoIntro, Rotating3DLogoIntro } from './components/LogoIntroAnimation'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import TrustIndicators from './components/TrustIndicators'
import ProblemCards from './components/ProblemCards'
import ProcessTimeline from './components/ProcessTimeline'
import KeyFeaturesSlider from './components/KeyFeaturesSlider'
import InteractiveDemo from './components/InteractiveDemo'
import BenefitsGrid from './components/BenefitsGrid'
import SecurityBadges from './components/SecurityBadges'
import ROICalculator from './components/ROICalculator'
import VideoSection from './components/VideoSection'
import ComparisonTable from './components/ComparisonTable'
import SocialProof from './components/SocialProof'
import Whatourusersresaying from './components/Whatourusersresaying'
import FAQ from './components/FAQ'
import BlogResourcesSection from './components/BlogResourcesSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import NewsPage from './components/NewsPage'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const handleIntroComplete = () => {
    setShowContent(true)
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  // ВЫБЕРИТЕ АНИМАЦИЮ: 1, 2 или 3
  const animationType = 2

  return (
    <>
      {/* Анимация логотипа */}
      {animationType === 1 && <LogoIntroAnimation onComplete={handleIntroComplete} />}
      {animationType === 2 && <MorphingLogoIntro onComplete={handleIntroComplete} />}
      {animationType === 3 && <Rotating3DLogoIntro onComplete={handleIntroComplete} />}

      {/* Основной контент сайта */}
      {showContent && (
        <div className="min-h-screen bg-white font-inter text-black animate-reveal">
          {currentPage === 'home' ? (
            <>
              <Navigation />
              <HeroSection />
              <TrustIndicators />
              <ProblemCards />
              <ProcessTimeline />
              <KeyFeaturesSlider />
              <InteractiveDemo />
              <BenefitsGrid />
              <SecurityBadges />
              <ROICalculator />
              <VideoSection />
              <ComparisonTable />
              <SocialProof />
              <FAQ />
              <BlogResourcesSection />
              <CallToAction />
              <Footer onNavigate={handleNavigate} />
              <ChatWidget />
            </>
          ) : currentPage === 'terms' ? (
            <>
              <Navigation />
              <TermsOfService />
              <Footer onNavigate={handleNavigate} />
            </>
          ) : currentPage === 'privacy' ? (
            <>
              <Navigation />
              <PrivacyPolicy />
              <Footer onNavigate={handleNavigate} />
            </>
          ) : currentPage === 'news' ? (
            <>
              <Navigation />
              <NewsPage />
              <Footer onNavigate={handleNavigate} />
            </>
          ) : null}
        </div>
      )}
    </>
  )
}

export default App