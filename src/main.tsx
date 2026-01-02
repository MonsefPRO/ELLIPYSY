import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import App from './App.tsx';
import Prestations from './pages/Prestations.tsx';
import NettoyageFacade from './pages/NettoyageFacade.tsx';
import Demoussage from './pages/Demoussage.tsx';
import EliminationFrelons from './pages/EliminationFrelons.tsx';
import PanneauxPhotovoltaiques from './pages/PanneauxPhotovoltaiques.tsx';
import Blog from './pages/Blog.tsx';
import Realisations from './pages/Realisations.tsx';
import Devis from './pages/Devis.tsx';
import Valeurs from './pages/Valeurs.tsx';
import RejoignezNous from './pages/RejoignezNous.tsx';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite.tsx';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <App />
            </motion.div>
          }
        />
        <Route
          path="/prestations"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Prestations />
            </motion.div>
          }
        />
        <Route
          path="/prestations/nettoyage-facade"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <NettoyageFacade />
            </motion.div>
          }
        />
        <Route
          path="/prestations/demoussage"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Demoussage />
            </motion.div>
          }
        />
        <Route
          path="/prestations/panneaux-photovoltaiques"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <PanneauxPhotovoltaiques />
            </motion.div>
          }
        />
        <Route
          path="/prestations/elimination-frelons"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <EliminationFrelons />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Blog />
            </motion.div>
          }
        />
        <Route
          path="/realisations"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Realisations />
            </motion.div>
          }
        />
        <Route
          path="/devis"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Devis />
            </motion.div>
          }
        />
        <Route
          path="/valeurs"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Valeurs />
            </motion.div>
          }
        />
        <Route
          path="/rejoignez-nous"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <RejoignezNous />
            </motion.div>
          }
        />
        <Route
          path="/politique-confidentialite"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <PolitiqueConfidentialite />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
