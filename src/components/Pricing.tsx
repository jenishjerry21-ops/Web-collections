import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', description: 'A little cosmic momentum for personal projects.', monthly: 0, annual: 0, featured: false, features: ['3 premium products', 'Personal use license', 'New releases included', 'Community support'] },
  { name: 'Creator', description: 'Everything independent makers need to ship.', monthly: 19, annual: 15, featured: true, features: ['All 6 premium products', 'Commercial use license', 'Unlimited projects', 'Figma + code source files', 'Priority email support'] },
  { name: 'Studio', description: 'A shared toolkit for teams building at scale.', monthly: 49, annual: 39, featured: false, features: ['Everything in Creator', 'Up to 10 team members', 'Extended client license', 'Shared team library', 'Dedicated support'] },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-glow" aria-hidden="true" />
      <div className="pricing-content">
        <p className="eyebrow">FLEXIBLE BY DESIGN</p>
        <h2>Choose your <span>orbit.</span></h2>
        <p className="pricing-intro">One simple membership for thoughtfully made tools that help good ideas take off.</p>
        <div className="billing-toggle" role="group" aria-label="Billing frequency">
          <button className={!annual ? 'active' : ''} onClick={() => setAnnual(false)} aria-pressed={!annual}>Monthly</button>
          <button className={annual ? 'active' : ''} onClick={() => setAnnual(true)} aria-pressed={annual}>Yearly <span>Save 20%</span></button>
        </div>
        <div className="plan-grid">
          {plans.map((plan, index) => {
            const price = annual ? plan.annual : plan.monthly
            return <motion.article key={plan.name} className={`plan-card ${plan.featured ? 'featured' : ''}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              {plan.featured && <span className="plan-badge">MOST POPULAR</span>}
              <p className="plan-name">{plan.name}</p><p className="plan-description">{plan.description}</p>
              <div className="plan-price"><strong>${price}</strong><span>/ month</span></div>
              {annual && price > 0 && <p className="billing-note">Billed annually · ${(price * 12)} per year</p>}
              {!annual && <p className="billing-note">Billed monthly · cancel anytime</p>}
              <a href="#contact" className={`plan-cta ${plan.featured ? 'primary' : ''}`}>{plan.name === 'Starter' ? 'Start for free' : `Choose ${plan.name}`} <span>→</span></a>
              <div className="plan-divider" /><p className="included-label">INCLUDED IN THIS PLAN</p>
              <ul>{plan.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
            </motion.article>
          })}
        </div>
        <p className="pricing-footnote">All plans include lifetime access to purchased products and a 14-day refund window. Need something tailored? <a href="#contact">Talk to our team →</a></p>
      </div>
    </section>
  )
}
