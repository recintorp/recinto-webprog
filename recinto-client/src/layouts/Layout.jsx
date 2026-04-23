import { Outlet, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-[#05030A] text-zinc-300 selection:bg-[#8B5CF6] selection:text-white font-sans">
      <NavBar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grow pb-16 pt-24"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Layout;