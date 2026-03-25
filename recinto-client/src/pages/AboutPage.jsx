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
      <section className="border-y-2 border-zinc-900 bg-white px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src={designer} 
                alt="Lead Designer" 
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 overflow-hidden rounded-2xl border-2 border-zinc-900 bg-zinc-100 sm:h-48 sm:w-48">
              <img 
                src={designer2} 
                alt="Designer Workspace" 
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              The Creative Mind
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-900 sm:text-5xl">
              Merging structural logic with visual elegance.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-600">
              As a designer at Valence Studio, I specialize in crafting digital experiences that prioritize 
              clarity and user intent. My approach is rooted in architectural principles—building 
              strong foundations through wireframing before layering on high-fidelity aesthetics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/" variant="primary" className="bg-black text-white hover:bg-zinc-800">
                View Portfolio
              </Button>
              <Button to="/articles" className="border-2 border-zinc-900 font-bold hover:bg-zinc-100">
                Read Insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            Professional Metrics
          </p>
          <h2 className="mt-2 text-3xl font-black text-zinc-900 uppercase italic">Core Experience</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Years', value: '05' },
            { label: 'Projects', value: '16' },
            { label: 'Clients', value: '09' },
            { label: 'Focus Areas', value: '03' }
          ].map((stat, i) => (
            <div key={i} className="rounded-3xl border-2 border-zinc-900 bg-white p-6 transition-transform hover:-translate-y-1">
              <p className="text-4xl font-black text-zinc-900">{stat.value}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-white px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              Methodology
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-900 uppercase">Strategic Workflow</h2>
            
            <div className="mt-8 space-y-6">
              <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-50 p-6 transition-colors hover:bg-black">
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-white uppercase tracking-tight">01. Discovery Phase</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 group-hover:text-zinc-400">
                  Uncovering user pain points and defining the core problem statement through competitive research and stakeholder interviews.
                </p>
              </article>

              <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-50 p-6 transition-colors hover:bg-black">
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-white uppercase tracking-tight">02. Low-Fidelity Logic</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 group-hover:text-zinc-400">
                  Iterating on layout and information hierarchy using grayscale wireframes to ensure the user journey is frictionless.
                </p>
              </article>

              <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-50 p-6 transition-colors hover:bg-black">
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-white uppercase tracking-tight">03. Visual Refinement</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 group-hover:text-zinc-400">
                  Applying monochromatic elegance and high-contrast typography to create a sophisticated, modern final interface.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-8 shadow-[inset_0px_0px_20px_rgba(0,0,0,0.05)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              Visual Narrative
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {visualNarrative.map((item) => (
                <div key={item.id} className="group relative flex aspect-square overflow-hidden items-center justify-center rounded-[1.5rem] border-2 border-zinc-200 bg-white transition-all hover:border-zinc-900 hover:shadow-lg">
                   <img 
                    src={item.img} 
                    alt={`Narrative piece ${item.id}`} 
                    className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
                   />
                   <div className="absolute bottom-2 left-2 rounded-lg border border-zinc-900 bg-white px-2 py-1">
                      <span className="text-zinc-900 font-black text-xs">{item.id}</span>
                   </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 w-full border-2 border-zinc-900 bg-white font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white">
              View Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;