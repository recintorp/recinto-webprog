import Button from '../../components/Button';
import ArticleList from '../../components/ArticleList';
import articlesData from '../../data/article-content.js';
import concept1 from '../../assets/concept.jpg';
import concept2 from '../../assets/concept2.jpg';
import concept3 from '../../assets/concept3.jpg';
import concept4 from '../../assets/concept4.jpg';
import concept5 from '../../assets/concept5.jpg';

const ArticleListPage = () => {
  const articles = articlesData.map((article, index) => ({
    ...article,
    image: [concept1, concept2, concept3, concept4, concept5][index] || concept1
  }));

  return (
    <div className="flex w-full flex-col bg-[#030108] min-h-screen font-sans selection:bg-[#8B5CF6] selection:text-white">
      <section className="relative min-h-[90vh] flex items-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-125 h-125 bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#030108] to-transparent pointer-events-none z-0"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[20rem] font-black text-white/2 tracking-tighter pointer-events-none select-none z-0 whitespace-nowrap">
          ARCHIVE
        </div>

        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-px w-16 bg-linear-to-r from-[#C084FC] to-transparent"></div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC]">
                  Library
                </p>
              </div>
              
              <h1 className="text-6xl sm:text-7xl font-extralight leading-[1.05] text-white tracking-tighter mb-8">
                Architectural <br/>
                <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-[#C084FC] via-[#A855F7] to-[#7C3AED] pr-4">
                  Theory & Insights
                </span>
              </h1>
              
              <div className="flex gap-6 max-w-xl mb-12">
                <div className="w-px bg-linear-to-b from-[#8B5CF6]/50 to-transparent shrink-0"></div>
                <p className="text-sm leading-relaxed text-zinc-400 font-light tracking-wide">
                  A curated collection of essays and studies exploring spatial fundamentals, sustainable design principles, and the evolving role of the architect in urban development.
                </p>
              </div>
              
              <div className="pl-6">
                <Button to="/" className="relative overflow-hidden rounded-full bg-white/5 backdrop-blur-md px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white transition-all duration-500 border border-white/10 hover:bg-white/10 hover:border-[#C084FC]/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] group">
                  <span className="relative z-10 group-hover:text-[#C084FC] transition-colors duration-500">Return to Studio</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
              <div className="relative w-full max-w-125 h-125">
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-white/3 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse] pointer-events-none">
                   <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#C084FC]/60 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#C084FC]"></div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#8B5CF6]/20 blur-[70px] rounded-full pointer-events-none"></div>

                <div className="absolute top-0 right-4 w-52 h-72 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 hover:z-40 transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:rotate-2 group cursor-pointer">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#030108]/80 z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C084FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500">Vol. 01</span>
                  </div>
                  <img src={concept1} alt="Concept 1" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

                <div className="absolute bottom-8 left-0 w-64 h-48 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30 hover:z-40 transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:-rotate-2 group cursor-pointer">
                  <div className="absolute inset-0 bg-linear-to-t from-[#030108]/90 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C084FC] opacity-0 group-hover:opacity-100 transition-opacity duration-500">Vol. 02</span>
                  </div>
                  <img src={concept2} alt="Concept 2" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-3xl overflow-hidden border border-[#8B5CF6]/30 shadow-[0_0_60px_rgba(139,92,246,0.15)] z-20 hover:z-40 transition-all duration-700 hover:scale-110 group cursor-pointer">
                  <div className="absolute inset-0 bg-[#8B5CF6]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-[#030108] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="text-[8px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Vol. 03</span>
                  </div>
                  <img src={concept3} alt="Concept 3" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#030108] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-[#8B5CF6]/30 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-[#8B5CF6]/5 blur-[60px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mb-20 flex flex-col items-center text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC] mb-4">
              Publications
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-wide">
              Research <span className="font-serif italic text-zinc-500">Index</span>
            </h2>
          </div>

          <div className="relative">
            <ArticleList articles={articles} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleListPage;