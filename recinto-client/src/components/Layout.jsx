import { Outlet, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-950 selection:bg-amber-500 selection:text-white">
      <NavBar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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