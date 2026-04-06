import Button from '../components/Button';
import home from '../assets/home.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y bg-white px-4 py-6 sm:px-6 sm:py-12 lg:px-8 border-zinc-200">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center max-w-7xl mx-auto">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-500">
              Valence Studio
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-950 sm:text-6xl uppercase tracking-tighter">
              Architectural Vision & Design
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600">
              As an architecture student at National University, Valence Studio is my digital portfolio. We specialize in transforming conceptual ideas into tangible, logic-driven structural designs, balancing aesthetic harmony with environmental context.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="primary" className="bg-zinc-950 text-white hover:bg-amber-500 transition-colors duration-300 px-8 py-3 uppercase tracking-widest text-xs font-bold">
                Explore The Studio
              </Button>
            </div>
          </div>

          <div className="overflow-hidden bg-zinc-100 shadow-[10px_10px_0px_0px_#f59e0b]">
            <div className="aspect-video w-full">
              <img 
                src={home} 
                alt="Studio Hero" 
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-500">
              Academic Milestones
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-950 uppercase tracking-tight">Studio Output</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { val: "12", label: "Studio Projects" },
              { val: "48", label: "Drafted Blueprints" },
              { val: "15", label: "Scale Models" },
              { val: "30", label: "Renderings" }
            ].map((kpi, i) => (
              <div key={i} className="border-t-4 border-zinc-950 bg-white p-6 transition-all duration-300 hover:border-amber-500 hover:bg-zinc-950 group shadow-sm">
                <p className="text-5xl font-black text-zinc-950 group-hover:text-amber-500 transition-colors">{kpi.val}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-500 group-hover:text-white transition-colors">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6 sm:px-6 sm:py-16 lg:px-8 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-500">
              Selected Works
            </p>
            <h2 className="mt-2 text-4xl font-black text-zinc-950 uppercase tracking-tight">Featured Designs</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="group flex flex-col bg-zinc-50 p-5 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#f59e0b] border border-zinc-200">
              <div className="aspect-video overflow-hidden bg-zinc-200">
                <img 
                  src={home2} 
                  alt="Feature One" 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
              </div>
              <h3 className="mt-6 text-xl font-black text-zinc-950 uppercase tracking-tight">Urban Integration</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                Deep dive into structural hierarchies and the logic behind effective site planning within dense urban fabrics.
              </p>
              <Button className="mt-6 w-full border border-zinc-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors py-3">
                View Blueprint
              </Button>
            </article>

            <article className="group flex flex-col bg-zinc-50 p-5 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#f59e0b] border border-zinc-200">
              <div className="aspect-video overflow-hidden bg-zinc-200">
                <img 
                  src={home3} 
                  alt="Feature Two" 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
              </div>
              <h3 className="mt-6 text-xl font-black text-zinc-950 uppercase tracking-tight">Structural Harmony</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                Maintaining balanced spatial volume, proportion, and lighting across multi-level architectural experiences.
              </p>
              <Button className="mt-6 w-full border border-zinc-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors py-3">
                View Blueprint
              </Button>
            </article>

            <article className="group flex flex-col bg-zinc-50 p-5 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#f59e0b] border border-zinc-200">
              <div className="aspect-video overflow-hidden bg-zinc-200">
                <img 
                  src={home4} 
                  alt="Feature Three" 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
              </div>
              <h3 className="mt-6 text-xl font-black text-zinc-950 uppercase tracking-tight">Sustainable Materials</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                Creating environmentally conscious material libraries that bridge the gap between design and ecological impact.
              </p>
              <Button className="mt-6 w-full border border-zinc-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors py-3">
                View Blueprint
              </Button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;