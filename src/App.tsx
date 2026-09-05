import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { I18nProvider } from '@/i18n/i18n'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Work } from '@/components/work'
import { Engineering } from '@/components/engineering'
import { Experience } from '@/components/experience'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

function App() {
  return (
    <I18nProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <SiteHeader />
          <main>
            <Hero />
            <Work />
            <Engineering />
            <Experience />
            <About />
            <Contact />
          </main>
          <Footer />
        </MotionConfig>
      </LazyMotion>
    </I18nProvider>
  )
}

export default App