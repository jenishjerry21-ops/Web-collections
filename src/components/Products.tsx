import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UIKitMockup from './mockups/UIKitMockup';
import DashboardMockup from './mockups/DashboardMockup';
import IconsMockup from './mockups/IconsMockup';
import LandingMockup from './mockups/LandingMockup';
import AnimationMockup from './mockups/AnimationMockup';
import IllustrationMockup from './mockups/IllustrationMockup';

const categoryModels: Record<string, { name: string; note: string; colors: string[]; kind: string }[]> = {
  'Aurora UI Kit': [
    { name: 'Interface essentials', note: 'Buttons, fields, and controls', colors: ['#5187ff', '#182d67'], kind: 'Components' },
    { name: 'Commerce screens', note: 'Product, cart, and checkout UI', colors: ['#21b6a3', '#164b4d'], kind: 'Commerce' },
    { name: 'SaaS dashboard', note: 'Navigation and data widgets', colors: ['#a177ff', '#492873'], kind: 'Application' },
  ],
  'Nebula Dashboard': [
    { name: 'Analytics overview', note: 'Revenue and growth at a glance', colors: ['#9775ff', '#33215e'], kind: 'Analytics' },
    { name: 'Sales pipeline', note: 'Track deals across each stage', colors: ['#32c5a5', '#174d48'], kind: 'Sales' },
    { name: 'Team operations', note: 'Workload, activity, and goals', colors: ['#ff9e68', '#653450'], kind: 'Operations' },
  ],
  'Starlight Icons': [
    { name: 'Essentials set', note: 'Everyday interface symbols', colors: ['#f2b94b', '#704520'], kind: '240 icons' },
    { name: 'Commerce set', note: 'Shopping and payment icons', colors: ['#ee8a4d', '#71374b'], kind: '180 icons' },
    { name: 'Nature set', note: 'Organic shapes and outdoors', colors: ['#57c68a', '#20584f'], kind: '160 icons' },
  ],
  'Cosmic Landing': [
    { name: 'SaaS launch', note: 'A focused product launch page', colors: ['#3ac9a9', '#164b55'], kind: 'Landing page' },
    { name: 'Studio portfolio', note: 'A visual home for your work', colors: ['#a67dff', '#432970'], kind: 'Portfolio' },
    { name: 'App waitlist', note: 'Turn early interest into signups', colors: ['#ff9b64', '#653852'], kind: 'Waitlist' },
  ],
  'Nova Animations': [
    { name: 'Soft entrances', note: 'Elegant reveals and page transitions', colors: ['#f176a0', '#66315b'], kind: 'Motion set' },
    { name: 'Micro interactions', note: 'Tactile feedback for controls', colors: ['#9f83ff', '#352765'], kind: 'Interaction set' },
    { name: 'Loading states', note: 'Distinctive progress and wait states', colors: ['#ff9c63', '#68384a'], kind: 'Motion set' },
  ],
  'Galaxy Illustrations': [
    { name: 'People at work', note: 'Friendly scenes for teams and tools', colors: ['#9380ff', '#3b367b'], kind: '12 illustrations' },
    { name: 'Space explorers', note: 'Playful scenes for big ideas', colors: ['#ffae68', '#703659'], kind: '10 illustrations' },
    { name: 'Abstract shapes', note: 'Colorful accents for any layout', colors: ['#56c9bb', '#24545d'], kind: '16 illustrations' },
  ],
  'Orbit Navbar Collection': [
    { name: 'Floating glass', note: 'A translucent nav with pill links', colors: ['#8b7cff', '#30266b'], kind: 'Navigation' },
    { name: 'Editorial bar', note: 'A clean split layout for content sites', colors: ['#28b8a2', '#164b4d'], kind: 'Navigation' },
    { name: 'Commerce header', note: 'Search, account, and cart in one row', colors: ['#ff9c63', '#653450'], kind: 'Navigation' },
  ],
  'Afterglow Footer Collection': [
    { name: 'Studio sitemap', note: 'A spacious multi-column footer', colors: ['#9a7cff', '#32215e'], kind: 'Footer' },
    { name: 'Newsletter sign-up', note: 'A bold closing call to action', colors: ['#2bbda7', '#15494a'], kind: 'Footer' },
    { name: 'Compact links', note: 'A minimal footer for product pages', colors: ['#ff9e68', '#65364b'], kind: 'Footer' },
  ],
  'Horizon Hero Sections': [
    { name: 'Product spotlight', note: 'Big headline with product preview', colors: ['#8b7cff', '#30266b'], kind: 'Hero section' },
    { name: 'Launch announcement', note: 'Focused copy with a single action', colors: ['#2abca7', '#164b4d'], kind: 'Hero section' },
    { name: 'Split showcase', note: 'Editorial image and text composition', colors: ['#ff9c63', '#653450'], kind: 'Hero section' },
  ],
  'Prism Card Collection': [
    { name: 'Feature cards', note: 'Icon-led blocks for product features', colors: ['#947bff', '#342462'], kind: 'Cards' },
    { name: 'Pricing cards', note: 'Clear tiers with highlighted choice', colors: ['#25bda5', '#174c4c'], kind: 'Cards' },
    { name: 'Profile cards', note: 'Portrait layouts for people and teams', colors: ['#ff9b66', '#62344f'], kind: 'Cards' },
  ],
  'Constellation Website Collection': [
    { name: 'SaaS launch site', note: 'A complete product marketing website', colors: ['#8474ff', '#29245f'], kind: '5 pages' },
    { name: 'Creative studio', note: 'An editorial portfolio for independent teams', colors: ['#f09b6c', '#63384d'], kind: '6 pages' },
    { name: 'Online storefront', note: 'A polished shop with product discovery', colors: ['#4ac4a8', '#184b49'], kind: '7 pages' },
  ],
  'Pulse Button Collection': [
    { name: 'Gradient actions', note: 'Expressive gradient buttons with soft glow', colors: ['#9a78ff', '#4527a0'], kind: '12 styles' },
    { name: 'Quiet controls', note: 'Minimal buttons for calm interfaces', colors: ['#4cc9aa', '#1d725e'], kind: '16 styles' },
    { name: 'High contrast', note: 'Bold actions with crisp outlines', colors: ['#ff9d65', '#a83f35'], kind: '10 styles' },
  ],
}

function CollectionVariant({ productName, modelIndex, model }: { productName: string; modelIndex: number; model: { name: string; note: string; colors: string[]; kind: string } }) {
  const frame = 'h-full min-h-[260px] rounded-xl p-5 sm:p-7 text-white overflow-hidden'
  if (productName === 'Orbit Navbar Collection') return <div className={frame} style={{ background: '#101019' }}><span className="text-[10px] text-zinc-500">ORBIT / NAVBAR {modelIndex + 1}</span><h3 className="mt-1 text-xl font-semibold">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p>{modelIndex === 0 ? <div className="mt-10 flex justify-center"><div className="flex items-center gap-6 rounded-full border border-white/15 bg-white/10 px-5 py-4 shadow-xl"><b className="text-xs">✳ ORBIT</b><span className="text-[10px]">Work</span><span className="text-[10px]">About</span><span className="rounded-full px-3 py-2 text-[10px]" style={{ background: model.colors[0] }}>Let’s talk</span></div></div> : modelIndex === 1 ? <div className="mt-9 border-y border-white/15 py-4"><div className="flex items-center justify-between"><b className="font-serif text-lg">FIELDNOTES</b><div className="flex gap-4 text-[10px] text-zinc-300"><span>Stories</span><span>Places</span><span>About</span></div><span className="text-xs" style={{ color: model.colors[0] }}>Subscribe ↗</span></div><small className="mt-3 block text-[9px] text-zinc-500">INDEPENDENT JOURNAL · EST. 2026</small></div> : <div className="mt-9 rounded-xl bg-white p-4 text-zinc-900"><div className="flex justify-between text-[10px]"><b>NORTH / GOODS</b><span>New arrivals　Collections　⌕　♡　Bag (2)</span></div><div className="mt-4 rounded border border-zinc-200 p-2 text-[9px] text-zinc-400">Search products…</div></div>}</div>
  if (productName === 'Afterglow Footer Collection') return <div className={frame + ' flex flex-col justify-end'} style={{ background: '#101019' }}><span className="text-[10px] text-zinc-500">AFTERGLOW / FOOTER {modelIndex + 1}</span><h3 className="mb-4 mt-1 text-xl font-semibold">{model.name}</h3>{modelIndex === 0 ? <div className="rounded-t-xl border border-white/10 p-5" style={{ background: model.colors[1] }}><div className="grid grid-cols-4 gap-3"><div className="col-span-2"><b className="text-sm">AURORA®</b><p className="mt-2 text-[9px] text-white/60">Independent tools for people making the future.</p></div>{['Explore','Company'].map(t=><div key={t}><b className="text-[10px]">{t}</b><p className="mt-2 text-[9px] leading-4 text-white/60">Products<br/>Our story<br/>Contact</p></div>)}</div><div className="mt-4 border-t border-white/15 pt-2 text-[8px] text-white/50">© 2026 Aurora <span className="float-right">Terms　Privacy</span></div></div> : modelIndex === 1 ? <div className="rounded-2xl p-6 text-center" style={{ background: model.colors[1] }}><small className="text-[9px] tracking-widest text-white/60">THE GOOD STUFF, OCCASIONALLY</small><b className="mt-2 block text-lg">A little inspiration for your inbox.</b><div className="mx-auto mt-4 flex max-w-sm rounded-full bg-white p-1"><span className="flex-1 self-center text-left pl-3 text-[9px] text-zinc-400">Your email address</span><span className="rounded-full px-3 py-2 text-[9px] text-white" style={{ background: model.colors[0] }}>Join us →</span></div></div> : <div className="flex items-center justify-between border-y border-white/15 py-6"><b className="text-xs tracking-widest">AFTERGLOW</b><span className="text-[9px] text-zinc-400">© 2026　Privacy　Terms</span><span style={{ color: model.colors[0] }}>ig　in　↗</span></div>}</div>
  if (productName === 'Horizon Hero Sections') return <div className={frame + ' flex flex-col'} style={{ background: `radial-gradient(circle at 80% 35%, ${model.colors[1]}, transparent 44%), #101019` }}><span className="text-[10px] text-zinc-500">HORIZON / HERO {modelIndex + 1}</span>{modelIndex === 0 ? <div className="my-auto grid sm:grid-cols-[1.2fr_.8fr] items-center gap-5"><div><small style={{ color: model.colors[0] }}>BUILT FOR WHAT’S NEXT</small><h3 className="mt-2 text-3xl font-bold">A brighter way to build.</h3><p className="mt-2 text-xs text-zinc-300">{model.note}</p><button className="mt-4 rounded-full px-4 py-2 text-xs" style={{ background: model.colors[0] }}>Explore collection</button></div><div className="hidden sm:grid h-36 place-items-center rounded-2xl border border-white/10 text-6xl" style={{ background: `${model.colors[0]}44` }}>✦</div></div> : modelIndex === 1 ? <div className="my-auto flex flex-col items-center text-center"><span className="rounded-full border px-3 py-1 text-[9px]" style={{ borderColor: model.colors[0], color: model.colors[0] }}>JUST LAUNCHED · 2026</span><h3 className="mt-4 max-w-md text-3xl sm:text-4xl font-bold">Your next favorite thing is here.</h3><p className="mt-3 max-w-xs text-xs text-zinc-300">{model.note}</p><button className="mt-4 rounded-lg px-5 py-3 text-xs" style={{ background: model.colors[0] }}>Get early access</button></div> : <div className="my-auto grid sm:grid-cols-2 items-center gap-5"><div className="order-2 h-36 rounded-2xl border border-white/10 p-3" style={{ background: `${model.colors[0]}44` }}><div className="h-full rounded-xl border border-white/20 bg-white/10" /></div><div className="order-1"><small className="text-zinc-400">MADE FOR YOUR NEXT CHAPTER</small><h3 className="mt-2 font-serif text-3xl">Stories begin here.</h3><p className="mt-2 text-xs text-zinc-300">{model.note}</p><span className="mt-3 block text-xs" style={{ color: model.colors[0] }}>Discover the collection ↗</span></div></div>}</div>
  if (productName === 'Prism Card Collection') return <div className={frame} style={{ background: '#101019' }}><span className="text-[10px] text-zinc-500">PRISM / CARD {modelIndex + 1}</span><h3 className="mt-1 text-xl font-semibold">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p>{modelIndex === 0 ? <div className="mt-5 grid grid-cols-3 gap-2">{['⚡','◈','✦'].map((icon,i)=><div key={icon} className="rounded-xl border border-white/10 p-3" style={{ background: `${model.colors[i % 2]}33` }}><span className="text-xl" style={{ color: model.colors[i % 2] }}>{icon}</span><b className="mt-3 block text-[10px]">Feature {i+1}</b><small className="text-[8px] text-zinc-400">A focused benefit.</small></div>)}</div> : modelIndex === 1 ? <div className="mt-5 grid grid-cols-3 gap-2">{['Starter','Creator','Studio'].map((name,i)=><div key={name} className={`rounded-xl border p-3 ${i === 1 ? 'border-violet-400' : 'border-white/10'}`}><small className="text-[9px]">{name}</small><b className="my-2 block text-lg">${[9,19,39][i]}</b><span className="rounded px-2 py-1 text-[8px]" style={{ background: i === 1 ? model.colors[0] : '#ffffff22' }}>Choose</span></div>)}</div> : <div className="mt-5 grid grid-cols-3 gap-2">{['Maya Chen','Alex Rivera','Sam Lee'].map((name,i)=><div key={name} className="rounded-xl border border-white/10 p-3 text-center"><div className="mx-auto h-10 w-10 rounded-full" style={{ background: `linear-gradient(145deg, ${model.colors[i % 2]}, #fff5)` }} /><b className="mt-2 block text-[9px]">{name}</b><small className="text-[8px] text-zinc-400">Design team</small></div>)}</div>}</div>
  if (productName === 'Constellation Website Collection') return <div className="h-full min-h-[260px] rounded-xl bg-[#0e0f16] p-5 sm:p-7 text-white"><div className="flex items-center justify-between text-[10px] text-zinc-500"><span>CONSTELLATION / COMPLETE WEBSITE</span><span>{model.kind}</span></div>{modelIndex === 0 ? <div className="mt-4 overflow-hidden rounded-xl border border-white/10"><div className="flex items-center justify-between bg-[#171722] px-3 py-2"><b className="text-[9px]">NOVA / SOFTWARE</b><span className="text-[8px] text-zinc-400">Platform　Solutions　Pricing</span><span className="rounded px-2 py-1 text-[8px]" style={{ background: model.colors[0] }}>Start free</span></div><div className="grid sm:grid-cols-2 items-center gap-3 p-4" style={{ background: `linear-gradient(130deg, ${model.colors[1]}, #101019)` }}><div><small className="text-[8px]" style={{ color: model.colors[0] }}>YOUR WORK, IN ORBIT</small><h3 className="mt-2 text-xl font-bold">Ideas move faster together.</h3><p className="mt-1 text-[9px] text-zinc-300">{model.note}</p><div className="mt-3 h-5 w-20 rounded bg-white/15" /></div><div className="hidden sm:block h-20 rounded-lg border border-white/10 bg-white/10" /></div><div className="flex gap-2 bg-[#171722] p-2 text-[8px] text-zinc-400"><span>Features</span><span>How it works</span><span>Customer stories</span><span>Contact</span></div></div> : modelIndex === 1 ? <div className="mt-4 overflow-hidden rounded-xl bg-[#efe9dd] text-[#25231f]"><div className="flex justify-between border-b border-black/10 px-3 py-2 font-serif text-[9px]"><b>COMMON / STUDIO</b><span>Selected work　About　↗</span></div><div className="grid sm:grid-cols-[1.1fr_.9fr] gap-3 p-4"><div><small className="text-[8px] uppercase tracking-widest">Independent creative practice</small><h3 className="mt-2 font-serif text-2xl leading-tight">Making useful things feel special.</h3><p className="mt-2 text-[9px]">{model.note}</p></div><div className="hidden sm:flex items-center justify-center rounded-lg" style={{ background: `linear-gradient(145deg, ${model.colors[0]}, ${model.colors[1]})` }}><span className="text-4xl">✳</span></div></div><div className="flex justify-between border-t border-black/10 px-3 py-2 text-[8px]"><span>Project index</span><span>London · Everywhere</span></div></div> : <div className="mt-4 overflow-hidden rounded-xl bg-[#f7f5ef] text-[#20231f]"><div className="flex justify-between border-b border-black/10 px-3 py-2 text-[9px]"><b>GOODFORM MARKET</b><span>Shop　Our story　⌕　Bag (0)</span></div><div className="grid grid-cols-3 gap-2 p-3">{['Everyday objects','Soft essentials','New arrivals'].map((item,i)=><div key={item}><div className="flex h-20 items-center justify-center rounded-lg" style={{ background: `linear-gradient(145deg, ${model.colors[i % 2]}88, #e9e5dd)` }}><span className="text-2xl">{['◒','✦','◈'][i]}</span></div><b className="mt-2 block text-[8px]">{item}</b><span className="text-[7px] text-zinc-500">Explore the edit →</span></div>)}</div></div>}</div>
  if (productName === 'Pulse Button Collection') return <div className="h-full min-h-[260px] rounded-xl bg-[#101019] p-5 sm:p-7 text-white"><div className="flex items-center justify-between"><div><span className="text-[10px] text-zinc-500">PULSE / INTERACTIVE BUTTONS</span><h3 className="mt-1 text-xl font-semibold">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p></div><span className="rounded-full px-3 py-1 text-[9px]" style={{ background: `${model.colors[0]}33`, color: model.colors[0] }}>{model.kind}</span></div>{modelIndex === 0 ? <div className="mt-7 rounded-xl border border-white/10 bg-white/[.03] p-5"><span className="text-[9px] text-zinc-500">PRIMARY ACTIONS</span><div className="mt-4 flex flex-wrap items-center gap-3"><button className="rounded-lg px-4 py-2.5 text-xs font-semibold text-white shadow-lg" style={{ background: `linear-gradient(120deg, ${model.colors[0]}, ${model.colors[1]})`, boxShadow: `0 6px 24px ${model.colors[0]}55` }}>Launch project ↗</button><button className="rounded-full px-4 py-2.5 text-xs font-semibold text-white" style={{ background: `linear-gradient(120deg, ${model.colors[0]}, ${model.colors[1]})` }}>Get started</button><button className="rounded-xl border border-white/15 px-4 py-2.5 text-xs">Watch demo ▶</button></div></div> : modelIndex === 1 ? <div className="mt-7 rounded-xl border border-white/10 bg-[#f4f6f4] p-5 text-[#26332e]"><span className="text-[9px] text-zinc-500">SUBTLE INTERFACE CONTROLS</span><div className="mt-4 flex flex-wrap items-center gap-3"><button className="rounded-md bg-[#24332d] px-4 py-2.5 text-xs text-white">Save changes</button><button className="rounded-md border border-[#ccd4ce] bg-white px-4 py-2.5 text-xs">Cancel</button><button className="px-3 py-2.5 text-xs" style={{ color: model.colors[1] }}>Learn more →</button><button className="rounded-full border border-[#ccd4ce] bg-white px-4 py-2 text-xs">•••</button></div></div> : <div className="mt-7 rounded-xl border border-white/10 bg-[#191313] p-5"><span className="text-[9px] text-zinc-500">BOLD, ACCESSIBLE ACTIONS</span><div className="mt-4 flex flex-wrap items-center gap-3"><button className="rounded-none border-2 px-4 py-2.5 text-xs font-bold" style={{ borderColor: model.colors[0], background: model.colors[0] }}>Create account</button><button className="rounded-none border-2 px-4 py-2.5 text-xs font-bold" style={{ borderColor: model.colors[0], color: model.colors[0] }}>View pricing</button><button className="rounded-md bg-white px-4 py-2.5 text-xs font-bold text-black">Continue →</button></div></div>}<div className="mt-4 flex gap-2 text-[9px] text-zinc-500"><span>Default</span><span>·</span><span>Hover</span><span>·</span><span>Focus</span><span>·</span><span>Disabled</span></div></div>
  return null
}

function CategoryPreview({ productName, modelIndex, model }: { productName: string; modelIndex: number; model: { name: string; note: string; colors: string[]; kind: string } }) {
  if (['Orbit Navbar Collection', 'Afterglow Footer Collection', 'Horizon Hero Sections', 'Prism Card Collection', 'Constellation Website Collection', 'Pulse Button Collection'].includes(productName)) return <CollectionVariant productName={productName} modelIndex={modelIndex} model={model} />
  if (productName === 'Starlight Icons') {
    const symbols = modelIndex === 0 ? ['⌂', '⌕', '＋', '♡', '⚙', '✉', '↗', '⌘', '✓', '☰', '◉', '⌖'] : modelIndex === 1 ? ['▣', '$', '▤', '▱', '♧', '◷', '↗', '♢', '％', '⌑', '▦', '✓'] : ['☼', '✿', '♧', '☾', '❋', '♢', '♨', '❀', '♬', '☁', '✦', '⌁']
    return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7" style={{ background: '#12131a' }}>
      <div className="flex items-center justify-between"><div><span className="text-xs text-zinc-500">STARLIGHT / COLLECTION</span><h3 className="text-xl sm:text-2xl font-semibold text-white mt-1">{model.name}</h3></div><span className="rounded-full px-3 py-1 text-[10px] text-white" style={{ background: model.colors[0] }}>{model.kind}</span></div>
      <div className="mt-6 grid grid-cols-6 gap-2 sm:gap-3">{symbols.map((symbol, index) => <div key={`${symbol}-${index}`} className="aspect-square rounded-xl border border-white/10 flex items-center justify-center text-2xl sm:text-3xl" style={{ background: index % 3 === 0 ? `${model.colors[1]}88` : '#1b1c26', color: index % 2 ? '#f4f2ff' : model.colors[0] }}>{symbol}</div>)}</div>
      <p className="mt-4 text-xs text-zinc-400">{model.note} · Available in SVG, PNG, and Figma.</p>
    </div>
  }
  if (productName === 'Nebula Dashboard') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 text-white" style={{ background: '#11121a' }}>
    <div className="flex justify-between"><div><span className="text-xs text-zinc-500">WORKSPACE / {model.kind.toUpperCase()}</span><h3 className="mt-1 text-xl font-semibold">{model.name}</h3></div><span className="text-xs text-emerald-300">↗ 18.6%</span></div>
    <div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-lg bg-white/5 p-3"><span className="text-[10px] text-zinc-500">Revenue</span><b className="mt-1 block text-sm">$48,290</b></div><div className="rounded-lg bg-white/5 p-3"><span className="text-[10px] text-zinc-500">Active</span><b className="mt-1 block text-sm">2,840</b></div><div className="rounded-lg bg-white/5 p-3"><span className="text-[10px] text-zinc-500">Growth</span><b className="mt-1 block text-sm">+24.8%</b></div></div>
    <div className="mt-4 flex h-20 items-end gap-2 rounded-lg bg-white/[.03] px-4 pt-3">{[35,55,42,76,61,90,68,100,78,86,64,94].map((height, i) => <span key={i} className="flex-1 rounded-t-sm" style={{ height: `${height}%`, background: model.colors[i % 2], opacity: .55 + (i % 3) * .15 }} />)}</div>
  </div>
  if (productName === 'Aurora UI Kit') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 text-white" style={{ background: '#11121a' }}>
    <div className="flex items-center justify-between"><div><span className="text-xs text-zinc-500">AURORA / COMPONENT LIBRARY</span><h3 className="mt-1 text-xl font-semibold">{model.name}</h3></div><span className="text-xs" style={{ color: model.colors[0] }}>● {model.kind}</span></div>
    <div className="mt-5 grid sm:grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/[.03] p-4"><span className="text-[10px] text-zinc-500">BUTTONS</span><div className="mt-3 flex gap-2"><span className="rounded-md px-3 py-2 text-[10px] text-white" style={{ background: model.colors[0] }}>Primary</span><span className="rounded-md border border-white/15 px-3 py-2 text-[10px]">Secondary</span></div><div className="mt-3 h-7 rounded-md border border-white/10 bg-white/5" /></div><div className="rounded-xl border border-white/10 bg-white/[.03] p-4"><span className="text-[10px] text-zinc-500">FORM CONTROLS</span><div className="mt-3 h-8 rounded-md border border-white/10 px-3 py-2 text-[10px] text-zinc-500">Email address</div><div className="mt-3 flex items-center gap-2 text-[10px] text-zinc-300"><span className="h-4 w-4 rounded border" style={{ borderColor: model.colors[0], background: `${model.colors[0]}55` }}>✓</span>Keep me updated</div></div></div>
  </div>
  if (productName === 'Nova Animations') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 text-white flex flex-col justify-between" style={{ background: '#11121a' }}>
    <div><span className="text-xs text-zinc-500">MOTION LIBRARY / {model.kind.toUpperCase()}</span><h3 className="mt-1 text-xl font-semibold">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p></div>
    <div className="flex items-center justify-center gap-4 py-5"><motion.div animate={modelIndex === 0 ? { y: [0, -18, 0], opacity: [0.55, 1, 0.55] } : modelIndex === 1 ? { scale: [1, 1.25, 1], rotate: [0, 12, 0] } : { scaleX: [0.4, 1, 0.65] }} transition={{ duration: 2, repeat: Infinity }} className="h-14 w-14 rounded-2xl" style={{ background: `linear-gradient(145deg, ${model.colors[0]}, ${model.colors[1]})` }} /><span className="h-9 w-9 rounded-full border-2" style={{ borderColor: model.colors[0] }} /><span className="h-7 w-20 rounded-full" style={{ background: `${model.colors[0]}66` }} /></div>
    <div className="flex gap-1"><span className="h-1 flex-1 rounded-full" style={{ background: model.colors[0] }} /><span className="h-1 flex-1 rounded-full bg-white/15" /><span className="h-1 flex-1 rounded-full bg-white/15" /></div>
  </div>
  if (productName === 'Galaxy Illustrations') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 flex flex-col justify-between" style={{ background: '#11121a' }}>
    <div><span className="text-xs text-zinc-500">ILLUSTRATION PACK / {model.kind.toUpperCase()}</span><h3 className="mt-1 text-xl font-semibold text-white">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p></div>
    <div className="flex justify-center gap-3 py-4">{[0,1,2].map((i) => <div key={i} className="relative flex h-28 w-24 items-end justify-center overflow-hidden rounded-2xl" style={{ background: `linear-gradient(160deg, ${model.colors[i % 2]}, ${model.colors[1]})` }}><div className="absolute top-3 h-11 w-11 rounded-full bg-white/25" /><div className="h-14 w-16 rounded-t-[45%] border border-white/15 bg-white/15" /><span className="absolute bottom-2 text-[9px] text-white/80">0{i + 1}</span></div>)}</div>
    <p className="text-xs text-zinc-400">Layered vector artwork · {model.kind}</p>
  </div>
  if (productName === 'Orbit Navbar Collection') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 flex flex-col" style={{ background: '#101019' }}>
    <div className="flex justify-between text-[10px] text-zinc-500"><span>ORBIT / NAVIGATION PATTERNS</span><span>0{modelIndex + 1} OF 12</span></div><h3 className="mt-2 text-xl font-semibold text-white">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p>
    <div className="mt-8 rounded-2xl border border-white/10 p-4" style={{ background: `${model.colors[1]}55` }}><div className="flex items-center justify-between gap-3"><span className="font-bold text-white">✳ AURORA</span><div className="hidden sm:flex gap-4 text-[10px] text-zinc-300"><span>Discover</span><span>Studio</span><span>Journal</span></div><span className="rounded-full px-3 py-2 text-[10px] font-semibold text-white" style={{ background: model.colors[0] }}>Get started ↗</span></div></div>
    <div className="mt-auto pt-5 flex gap-2"><span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-300">Desktop</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-300">Mobile menu</span><span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-zinc-300">12 patterns</span></div>
  </div>
  if (productName === 'Afterglow Footer Collection') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 flex flex-col justify-end" style={{ background: '#101019' }}>
    <div className="mb-4"><span className="text-[10px] text-zinc-500">AFTERGLOW / FOOTER PATTERNS</span><h3 className="mt-1 text-xl font-semibold text-white">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p></div>
    <div className="rounded-t-2xl border border-white/10 p-4" style={{ background: `linear-gradient(130deg, ${model.colors[1]}, #14131e)` }}><div className="flex justify-between gap-4"><div><span className="text-sm font-bold text-white">Make room for wonder.</span><p className="mt-1 text-[9px] text-zinc-300">Thoughtful tools for your next big idea.</p></div><span className="text-[10px] text-white/70">Say hello ↗</span></div><div className="mt-4 border-t border-white/15 pt-3 flex justify-between text-[9px] text-white/60"><span>© 2026 Aurora Studio</span><span>About　Work　Contact</span></div></div>
  </div>
  if (productName === 'Horizon Hero Sections') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 flex flex-col justify-between text-white" style={{ background: `radial-gradient(circle at 80% 45%, ${model.colors[1]}, transparent 44%), #101019` }}>
    <div className="flex justify-between text-[10px] text-zinc-400"><span>HORIZON / HERO SECTIONS</span><span>0{modelIndex + 1} OF 18</span></div><div className="grid sm:grid-cols-[1.2fr_.8fr] items-center gap-4"><div><span className="text-[9px] uppercase tracking-widest" style={{ color: model.colors[0] }}>{model.kind} · 2026</span><h3 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight">A brighter way to build.</h3><p className="mt-2 text-xs text-zinc-300">{model.note}</p><span className="mt-4 inline-block rounded-full px-4 py-2 text-[10px]" style={{ background: model.colors[0] }}>Explore the collection →</span></div><div className="hidden sm:flex h-32 items-center justify-center rounded-2xl border border-white/10" style={{ background: `linear-gradient(145deg, ${model.colors[0]}55, ${model.colors[1]}aa)` }}><span className="text-5xl">✦</span></div></div><div className="flex gap-2 text-[9px] text-zinc-400"><span>Responsive</span><span>·</span><span>18 ready-to-use sections</span></div>
  </div>
  if (productName === 'Prism Card Collection') return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 flex flex-col" style={{ background: '#101019' }}>
    <div className="flex justify-between text-[10px] text-zinc-500"><span>PRISM / CARD PATTERNS</span><span>{model.kind.toUpperCase()}</span></div><h3 className="mt-2 text-xl font-semibold text-white">{model.name}</h3><p className="mt-1 text-xs text-zinc-400">{model.note}</p>
    <div className="mt-5 grid grid-cols-3 gap-2">{['01','02','03'].map((n,i)=><div key={n} className="rounded-xl border border-white/10 p-3" style={{ background: `linear-gradient(150deg, ${model.colors[i % 2]}33, #171720)` }}><span className="flex h-7 w-7 items-center justify-center rounded-lg text-xs text-white" style={{ background: model.colors[i % 2] }}>{['✦','↗','◈'][i]}</span><div className="mt-3 h-1.5 w-3/4 rounded bg-white/65"/><div className="mt-1.5 h-1 w-full rounded bg-white/20"/><div className="mt-1 h-1 w-2/3 rounded bg-white/15"/><span className="mt-3 block text-[8px] text-zinc-400">CARD {n}</span></div>)}</div>
  </div>
  return <div className="h-full min-h-[260px] rounded-xl p-5 sm:p-7 text-white flex flex-col justify-between" style={{ background: `radial-gradient(circle at 78% 25%, ${model.colors[1]}, transparent 45%), #101019` }}>
    <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest">COSMIC / TEMPLATE</span><span className="text-[10px] opacity-60">{model.kind}</span></div><div><span className="text-xs opacity-60">A DIGITAL EXPERIENCE</span><h3 className="mt-2 max-w-lg text-3xl sm:text-5xl font-bold tracking-tight">{model.name}</h3><p className="mt-2 max-w-sm text-sm opacity-65">{model.note}. Made to make your next launch shine.</p><span className="mt-4 inline-block rounded-full px-4 py-2 text-xs font-semibold" style={{ background: model.colors[0] }}>Get started ↗</span></div><div className="flex gap-2"><span className="h-1 flex-1 rounded-full" style={{ background: model.colors[0] }} /><span className="h-1 flex-1 rounded-full bg-white/20" /><span className="h-1 flex-1 rounded-full bg-white/20" /></div>
  </div>
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<{name: string, description: string, mockup: any, color: string, price: string, tag: string} | null>(null);
  const [selectedModel, setSelectedModel] = useState(0);
  const modelStyles = selectedProduct ? categoryModels[selectedProduct.name] : [];

  const products = [
    {
      name: "Aurora UI Kit",
      description: "A comprehensive design system for modern web applications.",
      price: "$49",
      tag: "Design",
      color: "from-blue-500 to-cyan-400",
      mockup: <UIKitMockup />
    },
    {
      name: "Nebula Dashboard",
      description: "Admin template with 100+ components and dark mode.",
      price: "$79",
      tag: "Template",
      color: "from-purple-500 to-pink-500",
      mockup: <DashboardMockup />
    },
    {
      name: "Starlight Icons",
      description: "Premium vector icon set containing over 2000 icons.",
      price: "$29",
      tag: "Assets",
      color: "from-amber-400 to-orange-500",
      mockup: <IconsMockup />
    },
    {
      name: "Cosmic Landing",
      description: "High-converting landing page template for SaaS.",
      price: "$39",
      tag: "Template",
      color: "from-emerald-400 to-teal-500",
      mockup: <LandingMockup />
    },
    {
      name: "Nova Animations",
      description: "Plug-and-play Framer Motion animation library.",
      price: "$59",
      tag: "Code",
      color: "from-rose-400 to-red-500",
      mockup: <AnimationMockup />
    },
    {
      name: "Galaxy Illustrations",
      description: "Hand-drawn illustration pack for startups.",
      price: "$35",
      tag: "Assets",
      color: "from-indigo-400 to-purple-600",
      mockup: <IllustrationMockup />
    },
    {
      name: "Orbit Navbar Collection",
      description: "Responsive navigation bars for portfolios, stores, and SaaS products.",
      price: "$24",
      tag: "Navigation",
      color: "from-violet-400 to-indigo-500",
      mockup: <UIKitMockup />
    },
    {
      name: "Afterglow Footer Collection",
      description: "Polished footer layouts with link groups, newsletter forms, and calls to action.",
      price: "$19",
      tag: "Footer",
      color: "from-fuchsia-400 to-purple-600",
      mockup: <LandingMockup />
    },
    {
      name: "Horizon Hero Sections",
      description: "Ready-to-use hero sections for launches, product sites, and creative portfolios.",
      price: "$29",
      tag: "Sections",
      color: "from-cyan-400 to-blue-500",
      mockup: <LandingMockup />
    },
    {
      name: "Prism Card Collection",
      description: "Flexible feature, pricing, profile, and testimonial cards for modern websites.",
      price: "$22",
      tag: "Components",
      color: "from-amber-400 to-rose-500",
      mockup: <DashboardMockup />
    },
    {
      name: "Constellation Website Collection",
      description: "Complete responsive website designs for software launches, creative studios, and online shops.",
      price: "$69",
      tag: "Websites",
      color: "from-indigo-400 to-teal-400",
      mockup: <LandingMockup />
    },
    {
      name: "Pulse Button Collection",
      description: "Modern, accessible button styles for product interfaces, landing pages, and dashboards.",
      price: "$18",
      tag: "Components",
      color: "from-violet-400 to-fuchsia-500",
      mockup: <UIKitMockup />
    }
  ];

  useEffect(() => {
    if (!selectedProduct) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedProduct]);

  return (
    <section id="products" className="relative w-full min-h-screen flex items-center justify-center bg-zinc-950 text-white p-8 overflow-hidden py-24">
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" src="/hero.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            Our Products
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover our premium digital products designed to accelerate your workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 hover:from-zinc-700 hover:to-zinc-900 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl -z-10" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
              <div className="h-full bg-zinc-900 rounded-[22px] p-6 border border-zinc-800 flex flex-col relative overflow-hidden group/card">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.color}`}></div>
                <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative">
                  <div className={`absolute inset-0 opacity-10 mix-blend-overlay bg-gradient-to-r ${product.color} pointer-events-none z-10`}></div>
                  {product.mockup}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                    {product.tag}
                  </span>
                  <span className="text-xl font-bold text-white">{product.price}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-zinc-400 mb-8 flex-grow">{product.description}</p>
                <button 
                  onClick={() => { setSelectedModel(0); setSelectedProduct(product) }}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors border border-zinc-700 hover:border-zinc-500"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Realistic Reference View */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl max-h-[92vh] bg-zinc-900 rounded-3xl border border-zinc-800 overflow-y-auto shadow-2xl"
            >
              <div className="grid lg:grid-cols-[1.45fr_0.8fr]">
                <div className="p-5 sm:p-8 bg-zinc-950 relative overflow-hidden min-h-[440px] flex flex-col">
                  <div className={`absolute inset-0 opacity-15 bg-gradient-to-tr ${selectedProduct.color} blur-2xl pointer-events-none`} />
                  <div className="relative z-10 flex items-center justify-between mb-5">
                    <div><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Live product preview</p><p className="text-sm text-zinc-300 mt-1">Reference model · Desktop</p></div>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Interactive</span>
                  </div>
                  <motion.div key={`${selectedProduct.name}-${selectedModel}`} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .25 }} className="relative z-10 flex-1 min-h-[300px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl p-5 sm:p-8 flex flex-col justify-between" style={{ background: `radial-gradient(circle at 78% 25%, ${modelStyles[selectedModel].colors[1]}, transparent 45%), ${selectedModel === 1 ? '#f2fbfa' : '#101019'}`, color: selectedModel === 1 ? '#182b2c' : 'white' }}>
                    <div className="absolute inset-0 z-20 overflow-y-auto"><CategoryPreview productName={selectedProduct.name} modelIndex={selectedModel} model={modelStyles[selectedModel]} /></div>
                    <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest">{selectedProduct.name.toUpperCase()}</span><span className="text-[10px] opacity-60">MODEL 0{selectedModel + 1}</span></div>
                    <div className="grid sm:grid-cols-[1fr_0.8fr] items-center gap-5"><div><span className="text-xs opacity-60">{modelStyles[selectedModel].kind} / 2026</span><h3 className="text-3xl sm:text-5xl font-bold tracking-tight mt-3">{['Build with clarity.', 'Room to explore.', 'Make it memorable.'][selectedModel]}</h3><p className="text-sm opacity-65 mt-3 max-w-xs">{modelStyles[selectedModel].note}. A polished direction for your {selectedProduct.name}.</p><span className="inline-block mt-5 rounded-full px-4 py-2 text-xs font-semibold text-white" style={{ background: modelStyles[selectedModel].colors[0] }}>Explore collection ↗</span></div><div className="hidden sm:flex min-h-44 rounded-2xl items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(145deg, ${modelStyles[selectedModel].colors[0]}, ${modelStyles[selectedModel].colors[1]})` }}><div className="w-28 h-28 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm shadow-2xl" /><div className="absolute bottom-3 left-3 right-3 h-8 rounded-lg bg-black/20 border border-white/15" /></div></div>
                    <div className="flex gap-2">{['Curated layouts', 'Responsive', 'Ready to ship'].map(item => <span key={item} className="rounded-full border border-current/15 px-3 py-1.5 text-[10px] opacity-70">{item}</span>)}</div>
                  </motion.div>
                  <div className="relative z-30 grid grid-cols-3 gap-3 mt-4">
                    {modelStyles.map((model, index) => <button type="button" key={model.name} onClick={() => setSelectedModel(index)} aria-pressed={selectedModel === index} className={`rounded-xl border p-3 text-left transition-colors ${selectedModel === index ? 'border-violet-400 bg-violet-500/10 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600'}`}><span className="mb-2 block h-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${model.colors[0]}, ${model.colors[1]})` }} /><span className="block text-xs font-semibold">{model.name}</span><span className="mt-1 block text-[10px] opacity-60">{model.kind}</span></button>)}
                  </div>
                </div>

              {/* Details Panel */}
              <div className="p-7 sm:p-9 flex flex-col bg-zinc-900 border-t lg:border-t-0 lg:border-l border-zinc-800 relative">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close product details"
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
                <div className="mb-auto mt-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 inline-block mb-4">
                    {selectedProduct.tag}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    {selectedProduct.description} Now viewing the {modelStyles[selectedModel].name} design model: {modelStyles[selectedModel].note.toLowerCase()}.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Fully Interactive
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Production Ready
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Responsive Design
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div className="text-3xl font-bold">{selectedProduct.price}</div>
                  <button className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Purchase Now
                  </button>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
