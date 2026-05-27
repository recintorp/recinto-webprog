import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center bg-[#030108] font-sans overflow-hidden relative selection:bg-[#8B5CF6] selection:text-white">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[100vw] sm:w-200 sm:h-200 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_60%)] pointer-events-none z-0"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-150 sm:h-150 pointer-events-none opacity-60 z-0 flex items-center justify-center">
        
        <div className="absolute inset-0 rounded-full border border-[#8B5CF6]/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
        
        <div className="absolute inset-8 sm:inset-16 rounded-full border border-white/3 animate-[spin_40s_linear_infinite_reverse]">
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#8B5CF6] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#8B5CF6]"></div>
        </div>
        
        <div className="absolute inset-16 sm:inset-32 rounded-full border border-[#C084FC]/20 border-dotted animate-[spin_25s_linear_infinite]"></div>
        
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 bg-[#8B5CF6]/10 blur-2xl rounded-full animate-pulse mix-blend-screen"></div>
        
        <div className="absolute w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute h-full w-px bg-linear-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[15rem] font-extralight text-transparent bg-clip-text bg-linear-to-b from-white/80 via-white/10 to-transparent leading-none tracking-tighter select-none drop-shadow-[0_0_30px_rgba(139,92,246,0.15)]">
          404
        </h1>

        <div className="flex items-center gap-4 sm:gap-6 mt-2 sm:-mt-8 mb-6">
          <div className="h-px w-8 sm:w-16 bg-linear-to-r from-transparent to-[#A855F7]"></div>
          <h2 className="text-lg sm:text-2xl font-light text-white uppercase tracking-[0.3em] whitespace-nowrap">
            Blueprint <span className="font-serif italic text-[#C084FC]">Not Found</span>
          </h2>
          <div className="h-px w-8 sm:w-16 bg-linear-to-l from-transparent to-[#A855F7]"></div>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-md leading-relaxed">
          The spatial coordinate you are trying to access exists outside our current structural parameters. It may have been relocated, dismantled, or never drafted.
        </p>

        <div className="mt-12 sm:mt-16">
          <Button
            to="/"
            className="relative overflow-hidden rounded-full bg-white/2 backdrop-blur-md px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C084FC] transition-all duration-500 border border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10 hover:border-[#C084FC]/70 hover:text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.1)] hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] group"
          >
            <span className="relative z-10">Return to Foundation</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </Button>
        </div>

      </div>

      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/10 pointer-events-none hidden sm:block"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/10 pointer-events-none hidden sm:block"></div>
    </div>
  );
}

export default NotFoundPage;