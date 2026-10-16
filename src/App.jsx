import './App.css'
import { Cabins } from './components/Cabins'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Location } from './components/Location'
import { ScenicBreak } from './components/ScenicBreak'
import { Seo } from './components/Seo'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import { siteData } from './data/siteData'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Seo data={siteData} />
      <Header data={siteData} />
      <main>
        <Hero data={siteData} />
        <Intro data={siteData} />
        <ScenicBreak data={siteData} />
        <Cabins data={siteData} />
        <Services data={siteData} />
        <Gallery data={siteData} />
        <Location data={siteData} />
        <FAQ data={siteData} />
        <FinalCTA data={siteData} />
      </main>
      <Footer data={siteData} />
      <WhatsAppButton data={siteData} />
    </>
  )
}

export default App
