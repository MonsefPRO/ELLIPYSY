import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onBlueBanner?: boolean;
}

export default function Header({ onBlueBanner = false }: HeaderProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActualitesOpen, setIsActualitesOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/98 backdrop-blur-md shadow-md z-40 transition-all border-b border-gray-100">
      <nav className="w-full">
    <div className="flex justify-between items-center h-20 md:h-24 px-6 md:px-[120px]">
        <div className="flex justify-between items-center h-20 md:h-24 px-6 md:px-[120px]">
          {/* ZONE LOGO CORRIGÉE */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo_de_cote.png" 
                alt="Ellipsys Logo"
                className="h-14 md:h-20 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>
          </div>
          {/* MENU PC */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/prestations" className={`font-semibold text-lg transition-colors relative group ${
              onBlueBanner ? 'text-white hover:text-sky-100' : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>{t('nav.services')}</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>

            <div className="relative group">
              <button
                onMouseEnter={() => setIsActualitesOpen(true)}
                className={`flex items-center font-semibold text-lg transition-all duration-300 relative ${
                  onBlueBanner ? 'text-white hover:text-sky-100' : 'text-gray-700 hover:text-sky-600'
                }`}
              >
                <span>{t('nav.news')}</span>
                <ChevronDown className={`w-5 h-5 ml-1 transition-transform duration-300 ${isActualitesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  onBlueBanner ? 'bg-white' : 'bg-sky-600'
                }`}></span>
              </button>
              {isActualitesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  onMouseEnter={() => setIsActualitesOpen(true)}
                  onMouseLeave={() => setIsActualitesOpen(false)}
                >
                  <Link to="/blog" className="flex items-center gap-3 px-6 py-4 mx-2 rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 text-gray-700 hover:text-sky-600 transition-all duration-200 hover:translate-x-1 font-medium text-base">
                    <ChevronRight className="w-5 h-5" />
                    <span>{t('nav.blog')}</span>
                  </Link>
                  <Link to="/realisations" className="flex items-center gap-3 px-6 py-4 mx-2 rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 text-gray-700 hover:text-sky-600 transition-all duration-200 hover:translate-x-1 font-medium text-base">
                    <ChevronRight className="w-5 h-5" />
                    <span>{t('nav.portfolio')}</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/valeurs" className={`font-semibold text-lg transition-colors relative group ${
              onBlueBanner ? 'text-white hover:text-sky-100' : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>{t('nav.values')}</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>
            
            <Link to="/rejoignez-nous" className={`font-semibold text-lg transition-colors relative group ${
              onBlueBanner ? 'text-white hover:text-sky-100' : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>Rejoignez-nous</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>

            <Link to="/#contact" className={`font-semibold text-lg transition-colors relative group ${
              onBlueBanner ? 'text-white hover:text-sky-100' : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>Contact</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/devis"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-brand-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>{t('hero.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* BOUTON MENU MOBILE */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* MENU MOBILE DÉROULANT */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-8 space-y-6 shadow-xl animate-in slide-in-from-top duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-sky-600 font-bold text-xl border-b pb-2">
              {t('nav.home')}
            </Link>
            <Link to="/prestations" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-sky-600 font-bold text-xl border-b pb-2">
              {t('nav.services')}
            </Link>
            <div className="space-y-4">
              <div className="text-gray-400 font-bold text-sm uppercase tracking-wider">
                {t('nav.news')}
              </div>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-700 hover:text-sky-600 font-bold text-xl pl-4">
                <ChevronRight className="w-5 h-5 text-sky-500" />
                {t('nav.blog')}
              </Link>
              <Link to="/realisations" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-700 hover:text-sky-600 font-bold text-xl pl-4">
                <ChevronRight className="w-5 h-5 text-sky-500" />
                {t('nav.portfolio')}
              </Link>
            </div>
            <Link to="/valeurs" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-sky-600 font-bold text-xl border-b pb-2">
              {t('nav.values')}
            </Link>
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-sky-600 font-bold text-xl border-b pb-2">
              {t('contact.title')}
            </Link>
            <div className="pt-4 space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <Link to="/devis" onClick={() => setIsMenuOpen(false)} className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-6 py-4 rounded-xl font-bold text-center block shadow-lg">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
