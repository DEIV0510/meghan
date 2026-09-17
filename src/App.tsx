import { Archive } from './components/Archive'
import { CalzadoEditorial } from './components/CalzadoEditorial'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InstagramSection } from './components/InstagramSection'
import { LentesEditorial } from './components/LentesEditorial'
import { Loader } from './components/Loader'
import { Manifesto } from './components/Manifesto'
import { ModaEditorial } from './components/ModaEditorial'
import { Navbar } from './components/Navbar'
import { PerfumeryImmersive } from './components/PerfumeryImmersive'
import { Showroom } from './components/Showroom'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { SmoothScroll } from './lib/smoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <PerfumeryImmersive />
        <ModaEditorial />
        <LentesEditorial />
        <CalzadoEditorial />
        <Archive />
        <Showroom />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SmoothScroll>
  )
}

export default App
