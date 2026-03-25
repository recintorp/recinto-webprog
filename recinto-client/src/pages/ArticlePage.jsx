import Button from '../components/Button';
import concept from '../assets/concept.jpg';
import concept2 from '../assets/concept2.jpg';
import concept3 from '../assets/concept3.jpg';
import concept4 from '../assets/concept4.jpg';

const ArticlePage = () => {
  const articles = [
    {
      id: '01',
      img: concept,
      title: 'Digital Brutalism in Modern UI',
      desc: 'Exploring the resurgence of high-contrast, structural design and its impact on user readability.',
    },
    {
      id: '02',
      img: concept2,
      title: 'The Psychology of Grayscale',
      desc: 'How removing color allows designers to focus on information hierarchy and core accessibility.',
    },
    {
      id: '03',
      img: concept3,
      title: 'Structural Integrity',
      desc: 'Why the best interfaces are built on invisible grids and strict architectural principles.',
    },
    {
      id: '04',
      img: concept4,
      title: 'Valence Design Systems',
      desc: 'A deep dive into our internal methodology for maintaining consistency across complex platforms.',
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-white px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
          Insights & Writing
        </p>
        <h1 className="max-w-2xl text-4xl font-black leading-tight text-zinc-900 sm:text-6xl uppercase italic">
          Featured Perspectives
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600">
          A collection of thoughts on design theory, structural logic, and the evolution of digital 
          craftsmanship in an increasingly complex landscape.
        </p>
        <div className="mt-8">
          <Button to="/" className="border-2 border-zinc-900 px-8 font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
            Back Home
          </Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              Journal
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-900 uppercase">Recent Publications</h2>
          </div>
          <div className="hidden h-px flex-1 bg-zinc-200 mx-8 md:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <article key={article.id} className="group relative flex flex-col rounded-3xl border-2 border-zinc-900 bg-white p-4 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-zinc-900 bg-zinc-200">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0" 
                />
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Entry {article.id}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-tight text-zinc-900 group-hover:underline">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-500">
                  {article.desc}
                </p>
                <Button className="mt-6 w-full bg-zinc-900 text-white font-bold uppercase text-[10px] tracking-widest transition-colors hover:bg-black">
                  Read Article
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-zinc-900 bg-white px-4 py-12 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-400">
          End of Journal
        </p>
      </footer>
    </div>
  );
};

export default ArticlePage;