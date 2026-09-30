export default function DashboardMockup() {
  const data = [40, 70, 45, 90, 65, 85, 30];
  
  return (
    <div className="w-full h-full bg-zinc-950 p-4 rounded-xl flex flex-col border border-zinc-800 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-[10px] text-zinc-400">Total Revenue</div>
          <div className="text-sm font-bold text-white">$45,231.89</div>
        </div>
        <div className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">+20.1%</div>
      </div>
      
      <div className="flex-1 flex items-end justify-between gap-1.5 mt-2">
        {data.map((val, i) => (
          <div key={i} className="w-full relative group">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {val}k
            </div>
            <div 
              className="w-full bg-purple-500/20 group-hover:bg-purple-500 transition-colors rounded-t-sm"
              style={{ height: `${val}%` }}
            >
              <div className="w-full h-full bg-gradient-to-t from-purple-600 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity rounded-t-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
