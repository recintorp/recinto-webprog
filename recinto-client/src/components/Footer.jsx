import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#05030A] pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-linear-to-r from-transparent via-[#8B5CF6]/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-1/2 bg-[#8B5CF6]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <h2 className="text-2xl font-light tracking-widest text-white uppercase mb-6 flex items-center gap-3">
              Valence<span className="text-[10px] font-bold tracking-[0.4em] text-[#C084FC] mt-1 border-l border-[#8B5CF6]/30 pl-3">Studio</span>
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-light mb-8">
              Transforming conceptual ideas into tangible, logic-driven structural designs. We balance aesthetic harmony with environmental context to construct the spaces of tomorrow.
            </p>
            <div className="inline-block rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C084FC]">
              Architecture & Urban Design
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C084FC] mb-6">Exploration</h3>
            <div className="flex flex-col gap-4 text-xs font-light tracking-wider text-zinc-400">
              <Link to="/" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Home</Link>
              <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">About Studio</Link>
              <Link to="/articles" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Design Articles</Link>
              <Link to="/auth/signin" className="hover:text-[#8B5CF6] hover:translate-x-1 transition-all duration-300 w-fit">Client Portal</Link>
              <Link to="/dashboard" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Dashboard</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C084FC] mb-6">Headquarters</h3>
            <div className="flex flex-col gap-4 text-xs font-light tracking-wider text-zinc-400">
              <p>National University-Manila</p>
              <p>551 F Jhocson St, Sampaloc</p>
              <p>Manila, 1008 Metro Manila</p>
              <a href="mailto:studio@valence.com" className="text-[#C084FC] hover:text-white transition-colors duration-300 mt-2 block w-fit">
                studio@valence.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C084FC] mb-6">Connect</h3>
            <div className="flex flex-col gap-4 text-xs font-light tracking-wider text-zinc-400">
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Instagram</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">LinkedIn</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">Behance</a>
              <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">ArchDaily</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-zinc-500 font-light tracking-wider text-center md:text-left uppercase">
            © {new Date().getFullYear()} Valence Studio. Architectural Portfolio.
          </div>
          <div className="flex gap-6 text-[10px] text-zinc-500 font-light tracking-wider uppercase">
            <a href="#" className="hover:text-zinc-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;