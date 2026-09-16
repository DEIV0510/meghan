import { CalzadoEditorial } from './components/CalzadoEditorial'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FourWorlds } from './components/FourWorlds'
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
        <FourWorlds />
        <PerfumeryImmersive />
        <ModaEditorial />
        <LentesEditorial />
        <CalzadoEditorial />
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
