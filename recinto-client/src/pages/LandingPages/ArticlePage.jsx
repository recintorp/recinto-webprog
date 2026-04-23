import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import articlesData from '../../assets/article-content.js';
import concept1 from '../../assets/concept.jpg';
import concept2 from '../../assets/concept2.jpg';
import concept3 from '../../assets/concept3.jpg';
import concept4 from '../../assets/concept4.jpg';
import concept5 from '../../assets/concept5.jpg';

function ArticlePage() {
  const { name } = useParams();
  
  const articleIndex = articlesData.findIndex(article => article.name === name);
  const article = articlesData[articleIndex];
  
  const images = [concept1, concept2, concept3, concept4, concept5];
  const articleImage = images[articleIndex % images.length] || concept1;

  if (!article) {
    return (
      <div className="flex w-full min-h-[80vh] flex-col items-center justify-center py-32 px-6 text-center bg-[#030108] selection:bg-[#8B5CF6] selection:text-white">
        <h1 className="text-4xl sm:text-5xl font-light text-white uppercase tracking-widest">Document Not Found</h1>
        <div className="mt-8 h-px w-32 bg-linear-to-r from-transparent via-[#C084FC] to-transparent mx-auto"></div>
        <p className="mt-6 text-sm text-zinc-500 font-light tracking-wide">The requested architectural study could not be located in the archives.</p>
        <div className="mt-12">
          <Button to="/articles" className="rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C084FC] hover:bg-[#7C3AED] hover:text-white transition-all duration-500">
            Return to Library
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col bg-[#030108] min-h-screen font-sans selection:bg-[#8B5CF6] selection:text-white">
      <section className="relative px-4 pt-12 pb-16 sm:px-6 lg:px-8 border-b border-white/5 bg-[#030108] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="mx-auto max-w-4xl w-full relative z-10">
          <div className="mb-16">
            <Button to="/articles" className="rounded-full border border-white/10 bg-white/2 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 px-6 py-3 hover:bg-white/10 hover:text-white hover:border-[#8B5CF6]/30 transition-all duration-500">
              ← Back to Index
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#A855F7]"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C084FC]">
              Architectural Study
            </p>
          </div>
          
          <h1 className="text-4xl font-light leading-[1.15] text-white sm:text-6xl tracking-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC]"></div>
            <p className="text-[9px] font-medium tracking-[0.4em] text-zinc-500 uppercase">
              Reference No. {article.name.replace(/-/g, '.')}
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-[#030108]">
        <div className="mx-auto max-w-4xl w-full">
          <div className="aspect-video overflow-hidden rounded-4xl border border-white/5 bg-zinc-900 mb-16 shadow-[0_20px_50px_-20px_rgba(139,92,246,0.15)] group relative">
            <div className="absolute inset-0 bg-linear-to-t from-[#030108]/60 via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10 pointer-events-none"></div>
            <img 
              src={articleImage} 
              alt={article.title} 
              className="h-full w-full object-cover grayscale opacity-70 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-2 bottom-2 w-px bg-linear-to-b from-[#8B5CF6]/50 via-white/5 to-transparent hidden md:block"></div>
            
            <div className="space-y-10 text-zinc-400 font-light">
              {article.content.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={`whitespace-pre-wrap ${
                    index === 0 
                      ? 'text-xl sm:text-2xl text-zinc-300 leading-[1.8]' 
                      : 'text-lg leading-relaxed'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-24 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-2">
                End of Document
              </p>
              <p className="text-sm font-light text-zinc-400">
                Valence Studio Archives
              </p>
            </div>
            <Button to="/articles" className="rounded-full bg-white/5 border border-white/10 px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white hover:bg-[#8B5CF6]/10 hover:border-[#8B5CF6]/40 hover:text-[#C084FC] transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]">
              Return to Index
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;