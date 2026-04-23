import { Outlet, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import loginImg from '../assets/login.jpg';
import signupImg from '../assets/signup.jpg';

const AuthLayout = () => {
  const location = useLocation();
  const isSignup = location.pathname.includes('signup');
  const displayImage = isSignup ? signupImg : loginImg;

  return (
    <div className="relative flex min-h-screen w-full bg-[#030108] font-sans selection:bg-[#8B5CF6] selection:text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(192,132,252,0.1),transparent_50%)] pointer-events-none z-0"></div>

      <Link 
        to="/" 
        className="absolute left-8 top-8 z-50 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition-all duration-500 hover:text-[#C084FC] sm:left-12 sm:top-12 group"
      >
        <span className="w-8 h-px bg-zinc-600 transition-all duration-500 group-hover:w-12 group-hover:bg-[#C084FC]"></span>
        Return to Studio
      </Link>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-16 sm:py-20 lg:px-12 relative z-10 min-h-screen">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-24 h-full">
          
          <div className="hidden lg:flex flex-col justify-center relative h-full min-h-125">
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-white/2 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border border-dashed border-[#8B5CF6]/20 animate-[spin_40s_linear_infinite_reverse] pointer-events-none">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#C084FC] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#C084FC]"></div>
            </div>

            <div className="relative w-full max-w-lg mx-auto aspect-4/5 rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0a0710] shadow-[0_0_50px_rgba(139,92,246,0.15)] group">
              <div className="absolute inset-0 bg-linear-to-t from-[#030108] via-transparent to-transparent z-10 opacity-90 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[#8B5CF6]/10 opacity-0 transition-opacity duration-700 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-100"></div>
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={displayImage}
                  src={displayImage} 
                  alt="Studio Architecture Workflow"
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  animate={{ opacity: 0.6, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </AnimatePresence>

              <div className="absolute bottom-8 left-8 z-20 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isSignup ? 'signup-text' : 'login-text'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C084FC] mb-2 drop-shadow-md">
                      {isSignup ? 'Phase 01' : 'Phase 02'}
                    </p>
                    <p className="text-2xl font-light text-white tracking-wide">
                      {isSignup ? 'Establish Foundation' : 'Access Blueprints'}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start w-full relative z-20">
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8B5CF6]/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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