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
  <nav className="container mx-auto px-1 sm:px-2 lg:px-2">
    <div className="flex justify-between items-center h-[160rem] px-[20px]">
      <div className="flex items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo_de_cote.png"
            alt="Ellipsys"
            className="h-[58rem] sm:h-[112rem] md:h-[128rem] lg:h-[144rem] xl:h-[160rem] 2xl:h-[192rem] w-auto ml-[38px] hover:scale-110 transition-transform duration-300 cursor-pointer p-[15px]"
          />
        </Link>
      </div>


          <div className="hidden md:flex items-center space-x-16 flex-1 justify-center">
            <Link to="/prestations" className={`font-semibold text-xl transition-colors relative group ${
              onBlueBanner
                ? 'text-white hover:text-sky-100'
                : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>{t('nav.services')}</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>

            <div className="relative group">
              <button
                onMouseEnter={() => setIsActualitesOpen(true)}
                className={`flex items-center font-semibold text-xl transition-all duration-300 relative ${
                  onBlueBanner
                    ? 'text-white hover:text-sky-100'
                    : 'text-gray-700 hover:text-sky-600'
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

            <Link to="/valeurs" className={`font-semibold text-xl transition-colors relative group ${
              onBlueBanner
                ? 'text-white hover:text-sky-100'
                : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>{t('nav.values')}</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>
            <Link to="/rejoignez-nous" className={`font-semibold text-xl transition-colors relative group ${
              onBlueBanner
                ? 'text-white hover:text-sky-100'
                : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>Rejoignez-nous</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </Link>
            <a href="#contact" className={`font-semibold text-xl transition-colors relative group ${
              onBlueBanner
                ? 'text-white hover:text-sky-100'
                : 'text-gray-700 hover:text-sky-600'
            }`}>
              <span>Contact</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                onBlueBanner ? 'bg-white' : 'bg-sky-600'
              }`}></span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 ml-auto">
            <LanguageSwitcher />
            <Link
              to="/devis"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-brand-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>{t('hero.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link to="/" className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2">
              {t('nav.home')}
            </Link>
            <Link to="/prestations" className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2">
              {t('nav.services')}
            </Link>
            <div className="space-y-1">
              <div className="text-gray-700 font-medium py-2 px-2 bg-gray-50 rounded">
                {t('nav.news')}
              </div>
              <Link to="/blog" className="block w-full text-left text-gray-600 hover:text-sky-600 py-2 pl-4">
                {t('nav.blog')}
              </Link>
              <Link to="/realisations" className="block w-full text-left text-gray-600 hover:text-sky-600 py-2 pl-4">
                {t('nav.portfolio')}
              </Link>
            </div>
            <Link to="/valeurs" className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2">
              {t('nav.values')}
            </Link>
            <a href="#contact" className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2">
              {t('contact.title')}
            </a>
            <div className="flex items-center justify-center py-4">
              <LanguageSwitcher />
            </div>
            <Link to="/devis" className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-center block">
              {t('hero.cta')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
