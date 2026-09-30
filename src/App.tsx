import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div id="top" className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Pricing />
      <section id="docs" className="docs-section">
        <div className="docs-orbit" aria-hidden="true" />
        <p className="eyebrow">THE AURORA HANDBOOK</p>
        <h2>Everything you need to build <span>brighter.</span></h2>
        <p className="docs-copy">Explore setup guides, component references, and practical tips to get your next project moving.</p>
        <div className="docs-links">
          <a href="#products"><span>01</span><strong>Getting started</strong><span>→</span></a>
          <a href="#features"><span>02</span><strong>Component guide</strong><span>→</span></a>
          <a href="#pricing"><span>03</span><strong>Plans & licensing</strong><span>→</span></a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
