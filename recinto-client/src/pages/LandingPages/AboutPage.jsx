import Button from '../../components/Button';
import designer from '../../assets/designer.jpg';
import designer2 from '../../assets/designer2.jpg';
import nar1 from '../../assets/nar.jpg';
import nar2 from '../../assets/nar2.jpg';
import nar3 from '../../assets/nar3.jpg';
import nar4 from '../../assets/nar4.jpg';

const AboutPage = () => {
  const visualNarrative = [
    { id: '01', img: nar1 },
    { id: '02', img: nar2 },
    { id: '03', img: nar3 },
    { id: '04', img: nar4 },
  ];

  return (
    <div className="flex w-full flex-col bg-[#030108] font-sans selection:bg-[#8B5CF6] selection:text-white">
      <section className="relative min-h-[90vh] flex items-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] sm:text-[25rem] font-black text-white/2 tracking-tighter pointer-events-none select-none z-0 whitespace-nowrap">
          STUDIO
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.08),transparent_60%)] pointer-events-none z-0"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-[#8B5CF6]/5 to-transparent pointer-events-none z-0"></div>

        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-px w-16 bg-linear-to-r from-[#C084FC] to-transparent"></div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC] letter">
                  The Architect
                </p>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extralight leading-[1.05] text-white tracking-tighter mb-6">
                Rafael Alexis <br />
                <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-[#C084FC] via-[#A855F7] to-[#7C3AED] pr-4">
                  P. Recinto
                </span>
              </h1>
              
              <div className="flex gap-6 mt-6 max-w-xl">
                <div className="w-px bg-linear-to-b from-[#8B5CF6]/50 to-transparent shrink-0"></div>
                <p className="text-sm leading-relaxed text-zinc-400 font-light tracking-wide">
                  Founder of Valence Studio and architecture student at National University. My design philosophy bridges the gap between tropical urbanism and Japanese minimalism, prioritizing structural logic and human experience through meticulous contextual analysis.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-5 mt-12 pl-6">
                <Button to="/" className="relative overflow-hidden rounded-full bg-white/5 backdrop-blur-md px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white transition-all duration-500 border border-white/10 hover:bg-white/10 hover:border-[#C084FC]/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] group">
                  <span className="relative z-10 group-hover:text-[#C084FC] transition-colors duration-500">View Blueprints</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
                <Button to="/articles" className="rounded-full bg-transparent px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition-all duration-500 hover:text-white relative after:absolute after:bottom-2 after:left-10 after:right-10 after:h-px after:bg-[#8B5CF6] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left">
                  Read Theory
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-100">
                <div className="aspect-3/4 w-full rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-lg rounded-bl-lg overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(139,92,246,0.1)] relative z-10">
                  <div className="absolute inset-0 bg-linear-to-t from-[#030108] via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                  <img 
                    src={designer} 
                    alt="Main Portrait" 
                    className="h-full w-full object-cover grayscale brightness-90 transition-all duration-1000 hover:grayscale-0 hover:scale-105" 
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-12 w-48 aspect-square rounded-full border border-white/10 bg-white/5 backdrop-blur-xl p-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] z-20 group">
                  <div className="w-full h-full overflow-hidden rounded-full relative">
                    <div className="absolute inset-0 bg-[#8B5CF6]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                    <img 
                      src={designer2} 
                      alt="Workspace" 
                      className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                    />
                  </div>
                </div>
                
                <div className="absolute top-12 -right-6 w-24 h-24 rounded-full border border-[#8B5CF6]/30 animate-[spin_20s_linear_infinite] pointer-events-none hidden sm:block">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#C084FC] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#C084FC]"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-16 border-y border-white/5 bg-white/1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: 'Years in Studio', value: '04' },
              { label: 'Drafted Plans', value: '24' },
              { label: 'Scale Models', value: '12' },
              { label: 'Design Focuses', value: '03' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left group cursor-default">
                <span className="text-5xl font-extralight text-white group-hover:text-[#C084FC] transition-colors duration-500 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-500 mt-4 group-hover:text-zinc-300 transition-colors">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#030108]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-5/12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#A855F7]"></div>
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC]">
                Methodology
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-12">Strategic <span className="font-serif italic text-zinc-500">Workflow</span></h2>
            
            <div className="grid gap-6">
              {[
                { id: '01', title: 'Site Analysis', desc: 'Uncovering contextual constraints through topographical research and environmental studies.' },
                { id: '02', title: 'Spatial Planning', desc: 'Iterating on volumetric layout and circulation hierarchy for logical movement.' },
                { id: '03', title: 'Material & Form', desc: 'Selecting sustainable materials to create structurally sound, elegant final designs.' }
              ].map((step) => (
                <div key={step.id} className="group p-8 rounded-3xl border border-white/5 bg-white/1 hover:bg-[#8B5CF6]/5 hover:border-[#8B5CF6]/20 transition-all duration-500">
                  <div className="flex gap-8 items-start">
                    <span className="text-2xl font-serif italic text-[#8B5CF6]/40 group-hover:text-[#C084FC] transition-colors">
                      {step.id}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2 tracking-wide group-hover:text-[#C084FC] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="sticky top-32 p-2 rounded-[2.5rem] border border-white/5 bg-white/2 backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-2 p-2">
                {visualNarrative.map((item) => (
                  <div key={item.id} className="relative aspect-4/5 overflow-hidden rounded-3xl group border border-white/5 bg-zinc-900">
                    <img 
                      src={item.img} 
                      alt="Process Gallery" 
                      className="h-full w-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#030108]/90 via-[#030108]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-[8px] font-black tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      VOL. {item.id}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 pt-4">
                <Button className="w-full rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 py-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C084FC] hover:bg-[#8B5CF6] hover:text-white transition-all duration-500 shadow-inner">
                  View Detailed Schematics
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;