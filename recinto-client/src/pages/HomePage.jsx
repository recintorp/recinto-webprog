import Button from '../components/Button';
import home from '../assets/home.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-400">
              Welcome to Valence
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-900 sm:text-6xl uppercase italic">
              Crafting Digital Architecture
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600">
              We specialize in structural design and high-fidelity wireframing. Transform your conceptual 
              ideas into scalable, logic-driven user interfaces with our monochromatic studio system.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="primary" className="bg-black text-white hover:bg-zinc-800 px-8 py-3 rounded-full">
                Explore Studio
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-zinc-100 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
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

      <section className="border-y-2 border-zinc-900 bg-white px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-400">
            Performance Metrics
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-900 uppercase">Studio Output</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { val: "12", label: "Projects" },
            { val: "08", label: "Sections" },
            { val: "24", label: "Screens" },
            { val: "04", label: "Layouts" }
          ].map((kpi, i) => (
            <div key={i} className="rounded-3xl border-2 border-zinc-900 bg-zinc-50 p-6 transition-all hover:bg-black group">
              <p className="text-5xl font-black text-zinc-900 group-hover:text-white">{kpi.val}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-400 group-hover:text-zinc-500">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-400">
            Case Studies
          </p>
          <h2 className="mt-2 text-4xl font-black text-zinc-900 uppercase">Feature Components</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="group flex flex-col rounded-3xl border-2 border-zinc-900 bg-white p-5 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-video overflow-hidden rounded-2xl border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={home2} 
                alt="Feature One" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h3 className="mt-6 text-xl font-black text-zinc-900 uppercase">System Logic</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
              Deep dive into structural hierarchies and the logic behind effective wireframe systems.
            </p>
            <Button className="mt-6 w-full border-2 border-zinc-900 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-black hover:text-white">
              View Project
            </Button>
          </article>

          <article className="group flex flex-col rounded-3xl border-2 border-zinc-900 bg-white p-5 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-video overflow-hidden rounded-2xl border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={home3} 
                alt="Feature Two" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h3 className="mt-6 text-xl font-black text-zinc-900 uppercase">Visual Rhythm</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
              Maintaining balanced spacing and grid alignment across multi-screen digital experiences.
            </p>
            <Button className="mt-6 w-full border-2 border-zinc-900 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-black hover:text-white">
              View Project
            </Button>
          </article>

          <article className="group flex flex-col rounded-3xl border-2 border-zinc-900 bg-white p-5 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-video overflow-hidden rounded-2xl border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={home4} 
                alt="Feature Three" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h3 className="mt-6 text-xl font-black text-zinc-900 uppercase">Global Assets</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
              Creating reusable asset libraries that bridge the gap between concept and production.
            </p>
            <Button className="mt-6 w-full border-2 border-zinc-900 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-black hover:text-white">
              View Project
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;