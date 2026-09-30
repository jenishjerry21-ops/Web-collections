export default function IllustrationMockup() {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden relative group">
      <div className="absolute inset-0 bg-indigo-950/20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-24 h-24 text-indigo-500 transform-gpu transition-all duration-700 group-hover:scale-110"
        >
          {/* Planet */}
          <circle cx="50" cy="50" r="25" fill="currentColor" className="opacity-80" />
          <ellipse cx="50" cy="50" rx="40" ry="10" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50 transform -rotate-12 origin-center group-hover:rotate-12 transition-transform duration-1000" />

          {/* Stars */}
          <circle cx="20" cy="30" r="2" fill="currentColor" className="animate-ping" />
          <circle cx="80" cy="25" r="1.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="75" cy="75" r="2" fill="currentColor" className="animate-ping" style={{ animationDelay: '1s' }} />
          <circle cx="30" cy="70" r="1.5" fill="currentColor" className="animate-pulse" />

          {/* Orbiting moon */}
          <g className="animate-[spin_4s_linear_infinite] origin-center">
            <circle cx="15" cy="50" r="4" fill="currentColor" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-[10px] text-center text-indigo-300">Vector SVG Graphics</div>
      </div>
    </div>
  );
}
