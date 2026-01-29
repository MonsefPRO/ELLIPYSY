import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActualitesOpen, setIsActualitesOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/98 backdrop-blur-md shadow-md z-50 transition-all border-b border-gray-100">
      <nav className="w-full">
        <div className="flex justify-between items-center h-20 md:h-[110px] px-4 md:px-[120px]">
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/bonlogo_de_cote.png"
                alt="Ellipsys"
                className="h-10 md:h-24 w-auto transition-transform duration-300"
              />
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link to="/prestations" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-all relative group">
              <span>{t('nav.services')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="relative group">
              <button 
                onMouseEnter={() => setIsActualitesOpen(true)}
                className="flex items-center text-gray-700 hover:text-sky-600 font-semibold text-lg transition-all"
              >
                <span>{t('nav.news')}</span>
                <ChevronDown className={`w-5 h-5 ml-1 transition-transform ${isActualitesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isActualitesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border py-2 z-50"
                  onMouseLeave={() => setIsActualitesOpen(false)}
                >
                  <Link to="/blog" className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-gray-700 font-medium">
                    <ChevronRight className="w-4 h-4" /> {t('nav.blog')}
                  </Link>
                  <Link to="/realisations" className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-gray-700 font-medium">
                    <ChevronRight className="w-4 h-4" /> {t('nav.portfolio')}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/valeurs" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-all relative group">
              <span>{t('nav.values')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* RISQUES & CADRE LÉGAL */}
            <Link to="/risques-et-responsabilites" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-all relative group">
              <span>{t('risques.title')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/rejoignez-nous" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-all relative group">
              <span>{t('rejoignez.title')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* ACTIONS DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/devis" className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
              {t('nav.quote')}
            </Link>
          </div>

          {/* BOUTON MOBILE */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8 text-gray-800" /> : <Menu className="w-8 h-8 text-gray-800" />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 space-y-4 text-xl font-bold">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-gray-800">
                {t('nav.home')}
              </Link>
              <Link to="/prestations" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-gray-800">
                {t('nav.services')}
              </Link>
              
              <div className="py-2">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">{t('nav.news')}</p>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="flex items-center py-3 pl-4 text-gray-700 font-bold">
                  <ChevronRight className="w-5 h-5 mr-2 text-sky-500"/> {t('nav.blog')}
                </Link>
                <Link to="/realisations" onClick={() => setIsMenuOpen(false)} className="flex items-center py-3 pl-4 text-gray-700 font-bold">
                  <ChevronRight className="w-5 h-5 mr-2 text-sky-500"/> {t('nav.portfolio')}
                </Link>
              </div>

              <Link to="/valeurs" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-gray-800">
                {t('nav.values')}
              </Link>
              
              <Link to="/risques-et-responsabilites" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-gray-800">
                {t('risques.title')}
              </Link>
              
              <Link to="/rejoignez-nous" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-gray-800">
                {t('rejoignez.title')}
              </Link>
              
              <div className="pt-4 flex flex-col gap-4">
                 <div className="flex justify-center"><LanguageSwitcher /></div>
                 <Link to="/devis" onClick={() => setIsMenuOpen(false)} className="w-full bg-brand-orange-500 text-white py-4 rounded-xl text-center shadow-lg font-bold">
                   {t('nav.quote')}
                 </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
