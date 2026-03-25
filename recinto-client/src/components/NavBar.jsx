import { NavLink } from 'react-router-dom';
import logo from '../assets/logooo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition-all duration-200',
    isActive
      ? 'border-black bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
      : 'border-transparent text-zinc-500 hover:border-black hover:text-black',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-black bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="flex items-center gap-4 group">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-2xl font-black uppercase tracking-tighter text-black">
              VALENCE
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              Studio
            </span>
          </div>
        </NavLink>

        <nav className="flex items-center gap-1">
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

      </div>
    </header>
  );
};

export default NavBar;