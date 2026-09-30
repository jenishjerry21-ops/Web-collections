

const Features = () => {
  return (
    <section id="features" className="w-full min-h-screen flex items-center justify-center bg-zinc-950 text-white p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Incredible Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
              <p className="text-zinc-400">
                Experience the next generation of web design with our cutting-edge tools and smooth animations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
