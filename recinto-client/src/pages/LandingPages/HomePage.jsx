import Button from '../../components/Button';
import home from '../../assets/home.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import home4 from '../../assets/home4.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col bg-[#030108] font-sans selection:bg-[#8B5CF6] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Massive Animated Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[22rem] font-black text-white/1.5 tracking-tighter pointer-events-none select-none z-0 whitespace-nowrap">
          VALENCE
        </div>
        
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.08),transparent_60%)] pointer-events-none z-0"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        
        <div className="relative max-w-7xl mx-auto w-full z-10 mt-12 lg:mt-0">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-px w-16 bg-linear-to-r from-[#C084FC] to-transparent"></div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC]">
                  Studio Portfolio
                </p>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extralight leading-[1.05] text-white tracking-tighter mb-8">
                Architectural <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-[#C084FC] via-[#A855F7] to-[#7C3AED] pr-4">
                  Vision & Design
                </span>
              </h1>
              
              <div className="flex gap-6 max-w-xl mb-12">
                <div className="w-px bg-linear-to-b from-[#8B5CF6]/50 to-transparent shrink-0"></div>
                <p className="text-sm leading-relaxed text-zinc-400 font-light tracking-wide">
                  As an architecture student at National University, Valence Studio is my digital portfolio. We specialize in transforming conceptual ideas into tangible, logic-driven structural designs, balancing aesthetic harmony with environmental context.
                </p>
              </div>
              
              <div className="flex items-center gap-6 pl-6">
                <Button 
                  to="/about" 
                  className="relative overflow-hidden rounded-full bg-white/5 backdrop-blur-md px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white transition-all duration-500 border border-white/10 hover:bg-white/10 hover:border-[#C084FC]/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] group"
                >
                  <span className="relative z-10 group-hover:text-[#C084FC] transition-colors duration-500">Explore The Studio</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </div>
            </div>

            {/* ANIMATED VISUAL COLUMN */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-112.5 aspect-square">
                
                {/* CSS Animated Drafting Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-[#8B5CF6]/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse] pointer-events-none">
                  {/* Orbiting Node */}
                  <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-[#C084FC] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#C084FC]"></div>
                </div>

                {/* Main Image Container */}
                <div className="absolute inset-0 rounded-[3rem] rounded-tr-xl rounded-bl-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 group">
                  <div className="absolute inset-0 bg-linear-to-t from-[#030108]/90 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img 
                    src={home} 
                    alt="Studio Hero" 
                    className="h-full w-full object-cover grayscale opacity-70 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                {/* Floating Glassmorphism Info Card */}
                <div className="absolute -bottom-6 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl z-20 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#C084FC] to-[#7C3AED] flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">Current Status</p>
                      <p className="text-xs font-medium text-white tracking-wide mt-0.5">Accepting Projects</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="relative py-20 border-y border-white/5 bg-[#030108] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-[#8B5CF6]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC] mb-4">
              Academic Milestones
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
              Studio <span className="font-serif italic text-zinc-500">Output</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { val: "12", label: "Studio Projects" },
              { val: "48", label: "Drafted Blueprints" },
              { val: "15", label: "Scale Models" },
              { val: "30", label: "Renderings" }
            ].map((kpi, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-8 rounded-3xl border border-white/3 bg-white/1 transition-all duration-500 hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/5 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.15)] group"
              >
                <span className="text-5xl sm:text-6xl font-extralight text-white transition-colors duration-500 group-hover:text-[#C084FC] tabular-nums">
                  {kpi.val}
                </span>
                <span className="mt-4 text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300 text-center">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNS SECTION */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#030108]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC] mb-4">
              Selected Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-wide">
              Featured <span className="font-serif italic text-zinc-500">Designs</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: home2, title: "Urban Integration", desc: "Deep dive into structural hierarchies and the logic behind effective site planning within dense urban fabrics." },
              { img: home3, title: "Structural Harmony", desc: "Maintaining balanced spatial volume, proportion, and lighting across multi-level architectural experiences." },
              { img: home4, title: "Sustainable Materials", desc: "Creating environmentally conscious material libraries that bridge the gap between design and ecological impact." }
            ].map((feature, i) => (
              <article key={i} className="group flex flex-col rounded-4xl bg-white/2 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#8B5CF6]/30 hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.25)]">
                <div className="aspect-4/3 overflow-hidden bg-zinc-900 relative">
                  <div className="absolute inset-0 bg-linear-to-t from-[#030108] via-transparent to-transparent z-10 opacity-80 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[#8B5CF6]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 mix-blend-overlay pointer-events-none"></div>
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="h-full w-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-[8px] font-black tracking-widest uppercase">
                      Project 0{i + 1}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-8 relative">
                  <h3 className="text-xl font-medium text-white tracking-wide group-hover:text-[#C084FC] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400 font-light">
                    {feature.desc}
                  </p>
                  <div className="mt-8">
                    <Button className="w-full rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C084FC] transition-all duration-500 hover:bg-[#8B5CF6]/20 hover:text-white hover:border-[#8B5CF6]/50">
                      View Blueprint
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;