import { BrandIdentity } from './components/BrandIdentity'
import { Categories } from './components/Categories'
import { FashionAccessories } from './components/FashionAccessories'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InstagramSection } from './components/InstagramSection'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { PerfumerySensorial } from './components/PerfumerySensorial'
import { ProductGallery } from './components/ProductGallery'
import { Showroom } from './components/Showroom'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <BrandIdentity />
        <Categories />
        <ProductGallery />
        <PerfumerySensorial />
        <FashionAccessories />
        <Showroom />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
