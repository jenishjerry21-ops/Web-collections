import { useState } from 'react';

export default function UIKitMockup() {
  const [active, setActive] = useState(false);
  
  return (
    <div className="w-full h-full bg-zinc-950 p-4 rounded-xl flex flex-col gap-4 overflow-hidden select-none border border-zinc-800">
      <div className="flex gap-2">
        <button className="flex-1 py-1.5 px-3 bg-blue-500 hover:bg-blue-400 text-white text-xs font-semibold rounded-md transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          Primary
        </button>
        <button className="flex-1 py-1.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded-md transition-colors border border-zinc-700">
          Secondary
        </button>
      </div>
      
      <div className="flex flex-col gap-2 relative">
        <label className="text-[10px] text-zinc-400 font-medium">Username</label>
        <input 
          type="text" 
          placeholder="Enter name..." 
          className="w-full bg-zinc-900 border border-zinc-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-md py-1.5 px-2 text-xs text-white outline-none transition-all placeholder:text-zinc-600"
        />
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-zinc-300">Enable feature</span>
        <button 
          onClick={() => setActive(!active)}
          className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${active ? 'bg-cyan-500' : 'bg-zinc-700'}`}
        >
          <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${active ? 'left-4' : 'left-0.5'}`} />
        </button>
      </div>
    </div>
  );
}
