export default function LandingMockup() {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl flex flex-col border border-zinc-800 overflow-hidden relative group">
      {/* Mock Browser Header */}
      <div className="h-4 bg-zinc-900 border-b border-zinc-800 flex items-center px-2 gap-1 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      </div>
      
      {/* Content */}
      <div className="flex-1 p-3 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.15)_0%,transparent_70%)]" />
        
        <div className="w-20 h-2 bg-zinc-800 rounded-full mb-3 group-hover:bg-teal-500/50 transition-colors" />
        
        <div className="w-full space-y-1.5 mb-4 z-10">
          <div className="h-4 w-3/4 bg-zinc-200 mx-auto rounded group-hover:scale-105 transition-transform" />
          <div className="h-4 w-1/2 bg-zinc-200 mx-auto rounded group-hover:scale-105 transition-transform delay-75" />
        </div>
        
        <div className="w-full space-y-1 mb-5 z-10">
          <div className="h-1.5 w-4/5 bg-zinc-600 mx-auto rounded" />
          <div className="h-1.5 w-3/5 bg-zinc-600 mx-auto rounded" />
        </div>
        
        <div className="flex gap-2 z-10">
          <button className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-black text-[9px] font-bold rounded shadow-[0_0_10px_rgba(20,184,166,0.4)] transition-all group-hover:-translate-y-0.5">
            Get Started
          </button>
          <button className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-white text-[9px] font-bold rounded transition-all group-hover:-translate-y-0.5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
