import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logooo.png';
import Button from './Button';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'px-4 py-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border-b-2',
    isActive
      ? 'border-[#C084FC] text-white'
      : 'border-transparent text-zinc-500 hover:border-[#8B5CF6] hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05030A]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="flex items-center gap-4 group py-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-105 group-hover:brightness-125" 
          />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-2xl font-light uppercase tracking-widest text-white transition-colors duration-500 group-hover:text-[#C084FC]">
              VALENCE
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#8B5CF6] mt-1">
              Studio
            </span>
          </div>
        </NavLink>

        <div className="flex items-center gap-6 h-full">
          <nav className="hidden md:flex items-center gap-2 h-full">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="h-6 w-px bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-5 py-4">
            <Link 
              to="auth/login" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-300 hover:text-[#C084FC] hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]"
            >
              Log In
            </Link>
            <Button 
              to="auth/signup" 
              className="rounded-full bg-[#8B5CF6]/10 px-6 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C084FC] transition-all duration-500 hover:bg-[#7C3AED] hover:text-white border border-[#8B5CF6]/30 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]"
            >
              Sign Up
            </Button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default NavBar;