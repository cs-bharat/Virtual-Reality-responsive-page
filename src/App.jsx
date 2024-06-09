import { Feather} from 'lucide-react'
import './App.css'
import HeroSection from './componets/HeroSection'
import Navbar from './componets/Navbar'
import Feature from './componets/Feature'
import Workflow from './componets/Workflow'
import Pricing from './componets/Pricing'
import Testimonial from './componets/Testimonial'
import Footer from './componets/Footer'


function App() {
  
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      </div>
      <Feature/>
      <Workflow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
