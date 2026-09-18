import { AccesoriosCarousel } from './components/AccesoriosCarousel'
import { Archive } from './components/Archive'
import { CalzadoEditorial } from './components/CalzadoEditorial'
import { CartDrawer } from './components/CartDrawer'
import { ExploraMeghan } from './components/ExploraMeghan'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InstagramSection } from './components/InstagramSection'
import { LentesEditorial } from './components/LentesEditorial'
import { Loader } from './components/Loader'
import { Manifesto } from './components/Manifesto'
import { ModaEditorial } from './components/ModaEditorial'
import { Navbar } from './components/Navbar'
import { Novedades } from './components/Novedades'
import { PerfumeryImmersive } from './components/PerfumeryImmersive'
import { ProductModal } from './components/ProductModal'
import { SearchOverlay } from './components/SearchOverlay'
import { Showroom } from './components/Showroom'
import { TheMeghanEdit } from './components/TheMeghanEdit'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { CartProvider } from './lib/CartContext'
import { SmoothScroll } from './lib/smoothScroll'
import { UIProvider, useUI } from './lib/UIContext'

function GlobalOverlays() {
  const { activeProduct, closeProduct } = useUI()
  return (
    <>
      <ProductModal product={activeProduct} onClose={closeProduct} />
      <SearchOverlay />
      <CartDrawer />
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <UIProvider>
        <SmoothScroll>
          <Loader />
          <Navbar />
          <main>
            <Hero />
            <Novedades />
            <Manifesto />
            <ExploraMeghan />
            <PerfumeryImmersive />
            <ModaEditorial />
            <AccesoriosCarousel />
            <LentesEditorial />
            <CalzadoEditorial />
            <TheMeghanEdit />
            <Archive />
            <Showroom />
            <InstagramSection />
            <FinalCTA />
          </main>
          <Footer />
          <WhatsAppFloat />
          <GlobalOverlays />
        </SmoothScroll>
      </UIProvider>
    </CartProvider>
  )
}

export default App
