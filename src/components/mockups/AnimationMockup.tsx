export default function AnimationMockup() {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 overflow-hidden relative group cursor-crosshair">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* 3D-like spinning element purely with CSS */}
      <div className="relative w-16 h-16 transform-gpu transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-180">
        <div className="absolute inset-0 border-2 border-rose-500 rounded-lg animate-[spin_3s_linear_infinite] shadow-[0_0_20px_rgba(244,63,94,0.4)]" />
        <div className="absolute inset-0 border-2 border-red-500 rounded-lg animate-[spin_4s_linear_infinite_reverse] scale-75 shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
        <div className="absolute inset-2 bg-gradient-to-br from-rose-400 to-red-600 rounded animate-pulse shadow-[0_0_30px_rgba(244,63,94,0.6)]" />
      </div>
      
      <div className="absolute bottom-3 left-0 w-full text-center text-[10px] text-zinc-500 group-hover:text-rose-400 transition-colors">
        Hover to interact
      </div>
    </div>
  );
}
