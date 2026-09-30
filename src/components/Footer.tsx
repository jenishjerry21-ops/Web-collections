import { motion } from 'framer-motion'

const Footer = () => (
  <footer id="contact" className="site-footer">
    <div className="footer-stars" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <motion.i key={i} style={{ left: `${(i * 37 + 8) % 100}%`, top: `${(i * 53 + 12) % 90}%` }} animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.7, 1.25, 0.7] }} transition={{ duration: 2.4 + (i % 5) * 0.55, delay: (i % 7) * 0.3, repeat: Infinity, ease: 'easeInOut' }} />)}</div>
    <div className="footer-inner">
      <div className="footer-main">
        <div className="footer-brand"><span className="brand-mark">✳</span><span>AURORA</span></div>
        <div><p className="footer-kicker">A brighter way to build.</p><h2>Make something<br /><span>out of this world.</span></h2><a className="footer-contact" href="mailto:hello@aurora.design">Let’s talk <span>↗</span></a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Aurora Studio. Made for curious minds.</span>
        <nav aria-label="Footer navigation"><a href="#products">Products</a><a href="#pricing">Pricing</a><a href="#docs">Docs</a><a href="mailto:hello@aurora.design">Email us</a></nav>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top ↑</a>
      </div>
    </div>
  </footer>
)

export default Footer
