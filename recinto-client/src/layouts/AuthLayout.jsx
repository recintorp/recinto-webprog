import { Outlet, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import loginImg from '../assets/login.jpg';
import signupImg from '../assets/signup.jpg';

const AuthLayout = () => {
  const location = useLocation();
  const displayImage = location.pathname.includes('signup') ? signupImg : loginImg;

  return (
    <div className="relative flex min-h-screen w-full bg-zinc-50 selection:bg-amber-500 selection:text-white">
      <Link 
        to="/" 
        className="absolute left-8 top-8 z-20 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-amber-500 sm:left-12 sm:top-12"
      >
        ← Return to Studio
      </Link>

      <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          <div className="hidden justify-end lg:flex">
            <div className="group relative aspect-4/5 w-full max-w-md overflow-hidden border border-zinc-200 bg-zinc-200 shadow-[12px_12px_0px_0px_#f59e0b] transition-all duration-500 hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_#f59e0b]">
              <AnimatePresence>
                <motion.img 
                  key={displayImage}
                  src={displayImage} 
                  alt="Studio Architecture Workflow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 border-8 border-white/20 mix-blend-overlay transition-all duration-700 group-hover:border-white/0"></div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full flex justify-center lg:justify-start"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthLayout;