import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-widest text-amber-500 uppercase">
            NU Architecture
          </h2>
          <p className="mt-2 text-sm text-zinc-400 tracking-wide">
            Designing spaces, shaping the future.
          </p>
        </div>
        
        <div className="flex gap-8 text-xs font-semibold uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-500 transition-colors">
            About
          </Link>
          <Link to="/articles" className="hover:text-amber-500 transition-colors">
            Articles
          </Link>
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-zinc-600 border-t border-zinc-800 pt-8 tracking-wider">
        © {new Date().getFullYear()} National University Architecture Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;