import Button from '../components/Button';
import designer from '../assets/designer.jpg';
import designer2 from '../assets/designer2.jpg';
import nar1 from '../assets/nar.jpg';
import nar2 from '../assets/nar2.jpg';
import nar3 from '../assets/nar3.jpg';
import nar4 from '../assets/nar4.jpg';

const AboutPage = () => {
  const visualNarrative = [
    { id: '01', img: nar1 },
    { id: '02', img: nar2 },
    { id: '03', img: nar3 },
    { id: '04', img: nar4 },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y bg-white px-4 py-6 sm:px-6 sm:py-16 lg:px-8 border-zinc-200">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-square overflow-hidden bg-zinc-100 shadow-[8px_8px_0px_0px_#f59e0b]">
              <img 
                src={designer} 
                alt="Lead Architect" 
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 overflow-hidden border-4 border-white bg-zinc-100 sm:h-48 sm:w-48 shadow-lg">
              <img 
                src={designer2} 
                alt="Studio Workspace" 
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="pt-12 lg:pt-0">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
              The Architect
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl uppercase tracking-tighter">
              Merging structural integrity with spatial elegance.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-600">
              My name is Rafael Alexis P. Recinto, an ex-architecture student at National University and the founder of Valence Studio. My architectural philosophy is heavily influenced by our tropical urban fabric and japanese architecture. I specialize in crafting spaces that prioritize environmental context and human experience building strong foundations through meticulous site analysis before layering on high-fidelity structural aesthetics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/" variant="primary" className="bg-zinc-950 text-white hover:bg-amber-500 transition-colors duration-300 px-8 py-3 uppercase tracking-widest text-xs font-bold">
                View Blueprints
              </Button>
              <Button to="/articles" className="border border-zinc-950 font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-zinc-50 transition-colors">
                Read Theory
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
              Academic & Studio Metrics
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-950 uppercase tracking-tight">Core Experience</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Years in Studio', value: '04' },
              { label: 'Drafted Plans', value: '24' },
              { label: 'Scale Models', value: '12' },
              { label: 'Design Focuses', value: '03' }
            ].map((stat, i) => (
              <div key={i} className="border-t-4 border-zinc-950 bg-white p-6 transition-all duration-300 hover:border-amber-500 hover:-translate-y-1 shadow-sm">
                <p className="text-4xl font-black text-zinc-950">{stat.value}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6 sm:px-6 sm:py-16 lg:px-8 border-t border-zinc-200">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] max-w-7xl mx-auto">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
              Methodology
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-950 uppercase tracking-tight">Strategic Workflow</h2>
            
            <div className="mt-8 space-y-6">
              <article className="group border-l-4 border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:border-amber-500 hover:bg-zinc-950">
                <h3 className="text-xl font-bold text-zinc-950 group-hover:text-white uppercase tracking-tight transition-colors">01. Site Analysis</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Uncovering contextual constraints and defining the core spatial problem through topographical research and environmental studies.
                </p>
              </article>

              <article className="group border-l-4 border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:border-amber-500 hover:bg-zinc-950">
                <h3 className="text-xl font-bold text-zinc-950 group-hover:text-white uppercase tracking-tight transition-colors">02. Spatial Planning</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Iterating on volumetric layout and circulation hierarchy using conceptual massing to ensure movement is fluid and logical.
                </p>
              </article>

              <article className="group border-l-4 border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:border-amber-500 hover:bg-zinc-950">
                <h3 className="text-xl font-bold text-zinc-950 group-hover:text-white uppercase tracking-tight transition-colors">03. Material & Form</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Applying structural detailing and selecting sustainable materials to create a sophisticated, structurally sound final design.
                </p>
              </article>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 border border-zinc-200 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
              Process Gallery
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {visualNarrative.map((item) => (
                <div key={item.id} className="group relative flex aspect-square overflow-hidden items-center justify-center bg-zinc-200 transition-all hover:shadow-[4px_4px_0px_0px_#f59e0b]">
                   <img 
                    src={item.img} 
                    alt={`Process piece ${item.id}`} 
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                   />
                   <div className="absolute bottom-3 left-3 bg-white px-2 py-1 shadow-sm">
                      <span className="text-amber-500 font-black text-xs">{item.id}</span>
                   </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 w-full border border-zinc-950 bg-white font-bold uppercase tracking-widest text-xs hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors py-4">
              View Detailed Schematics
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;