import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col items-center justify-center py-32 px-6 text-center bg-zinc-50">
        <h1 className="text-4xl font-black text-zinc-950 uppercase tracking-widest">Document Not Found</h1>
        <div className="mt-6 h-1 w-24 bg-amber-500 mx-auto"></div>
        <div className="mt-10">
          <Button to="/articles" className="inline-block bg-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-amber-500 transition-colors duration-300">
            Return to Library
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 border-b border-zinc-200">
        <div className="mx-auto max-w-3xl w-full">
          <div className="mb-12">
            <Button to="/articles" className="border border-zinc-200 text-xs font-bold uppercase tracking-widest px-6 py-3 hover:border-amber-500 hover:text-amber-500 transition-colors">
              ← Back to Index
            </Button>
          </div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
            Architectural Study
          </p>
          <h1 className="text-4xl font-black leading-tight text-zinc-950 sm:text-5xl uppercase tracking-tighter">
            {article.title}
          </h1>
          <p className="mt-6 text-xs font-bold tracking-widest text-zinc-400 uppercase">
            Reference No. {article.name.replace(/-/g, '.')}
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl w-full">
          <div className="flex aspect-video items-center justify-center bg-zinc-200 border border-zinc-300 mb-12 shadow-[8px_8px_0px_0px_#f59e0b]">
            <div className="h-24 w-24 border-[4px] border-amber-500 transform rotate-45" />
          </div>

          <div className="space-y-8 text-zinc-800">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 border-t-4 border-zinc-950 pt-12 text-center md:text-left">
            <Button to="/articles" className="bg-zinc-950 text-white hover:bg-amber-500 transition-colors duration-300 px-10 py-4 uppercase tracking-widest text-xs font-bold inline-block">
              Return to Index
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;