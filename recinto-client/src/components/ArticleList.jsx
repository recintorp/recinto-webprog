import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article key={article.name} className="group flex flex-col bg-white/2 border border-white/5 rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#8B5CF6]/30 hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.25)]">
          
          <div className="aspect-4/3 overflow-hidden bg-zinc-900 relative">
            <div className="absolute inset-0 bg-linear-to-t from-[#030108] via-transparent to-transparent z-10 opacity-90 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[#8B5CF6]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 mix-blend-overlay pointer-events-none"></div>
            
            <img 
              src={article.image} 
              alt={article.title} 
              className="h-full w-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            />
            
            <div className="absolute top-5 left-5 z-20">
              <span className="bg-[#030108]/60 backdrop-blur-md border border-white/10 text-[#C084FC] px-3 py-1.5 rounded-full text-[8px] font-black tracking-widest uppercase shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                Vol. {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          <div className="flex flex-1 flex-col p-8 relative">
            <h3 className="text-xl font-medium tracking-wide text-white group-hover:text-[#C084FC] transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="mt-4 mb-8 flex-1 text-sm leading-relaxed text-zinc-400 font-light">
              {article.content[0].substring(0, 130)}...
            </p>
            
            <div className="mt-auto block">
              <Button 
                to={`/articles/${article.name}`} 
                className="w-full rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C084FC] transition-all duration-500 hover:bg-[#8B5CF6]/20 hover:text-white hover:border-[#8B5CF6]/50 shadow-inner"
              >
                Read Document
              </Button>
            </div>
          </div>
          
        </article>
      ))}
    </div>
  );
};

export default ArticleList;