import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActualitesOpen, setIsActualitesOpen] = useState(false);
  
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' 
    : 'bg-transparent border-b border-white/10';
    
  const linkColor = isScrolled 
    ? 'text-[#233B72] hover:text-brand-orange-500' 
    : 'text-white hover:text-sky-400 drop-shadow-md';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}>
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
            
            {/* MENU DÉROULANT PRESTATIONS */}
            <div className="relative group" onMouseLeave={() => setIsPrestationsOpen(false)}>
              <div className="flex items-center">
                <Link 
                  to="/prestations" 
                  onMouseEnter={() => setIsPrestationsOpen(true)}
                  className={`flex items-center ${linkColor} font-semibold text-lg transition-all relative group`}
                >
                  <span>{t('nav.services')}</span>
                  <ChevronDown className={`w-5 h-5 ml-1 transition-transform ${isPrestationsOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
              
              {isPrestationsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                  onMouseEnter={() => setIsPrestationsOpen(true)}
                >
                  <Link to="/prestations/nettoyage-facade" onClick={() => setIsPrestationsOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 shrink-0" /> 
                    {language === 'fr' ? 'Nettoyage de façade par drone' : 'Drone Facade Cleaning'}
                  </Link>
                  <Link to="/prestations/demoussage" onClick={() => setIsPrestationsOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 shrink-0" /> 
                    {language === 'fr' ? 'Nettoyage de toiture par drone' : 'Drone Roof Cleaning'}
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" onClick={() => setIsPrestationsOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 shrink-0" /> 
                    {language === 'fr' ? 'Nettoyage de panneaux photovoltaïques' : 'Photovoltaic Panel Cleaning'}
                  </Link>
                  {/* NOUVEAU LIEN THERMOGRAPHIE DESKTOP */}
                  <Link to="/prestations/thermographie" onClick={() => setIsPrestationsOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 shrink-0" /> 
                    {language === 'fr' ? 'Thermographie par drone' : 'Drone Thermography'}
                  </Link>
                  <Link to="/prestations/elimination-frelons" onClick={() => setIsPrestationsOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 shrink-0" /> 
                    {language === 'fr' ? 'Élimination de frelons par drone' : 'Drone Hornet Elimination'}
                  </Link>
                </div>
              )}
            </div>

            {/* MENU DÉROULANT ACTUALITÉS */}
            <div className="relative group" onMouseLeave={() => setIsActualitesOpen(false)}>
              <div className="flex items-center">
                <button 
                  onMouseEnter={() => setIsActualitesOpen(true)}
                  className={`flex items-center ${linkColor} font-semibold text-lg transition-all`}
                >
                  <span>{t('nav.news')}</span>
                  <ChevronDown className={`w-5 h-5 ml-1 transition-transform ${isActualitesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {isActualitesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setIsActualitesOpen(true)}
                >
                  <Link to="/blog" onClick={() => setIsActualitesOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500" /> {t('nav.blog')}
                  </Link>
                  <Link to="/realisations" onClick={() => setIsActualitesOpen(false)} className="flex items-center gap-3 px-6 py-3 hover:bg-sky-50 text-[#233B72] font-bold transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-orange-500" /> {t('nav.portfolio')}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/valeurs" className={`${linkColor} font-semibold text-lg transition-all relative group`}>
              <span>{t('nav.values')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/risques-et-responsabilites" className={`${linkColor} font-semibold text-lg transition-all relative group`}>
              <span>{t('risques.title')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/rejoignez-nous" className={`${linkColor} font-semibold text-lg transition-all relative group`}>
              <span>{t('rejoignez.title')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange-500 group-hover:w-full transition-all duration-300"></span>
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
          <button className="md:hidden p-2 bg-white/50 rounded-lg backdrop-blur-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8 text-[#233B72]" /> : <Menu className="w-8 h-8 text-[#233B72]" />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300 h-screen overflow-y-auto pb-24">
            <div className="flex flex-col p-6 space-y-2 text-xl font-bold">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#233B72] hover:text-brand-orange-500">
                {t('nav.home')}
              </Link>
              
              {/* SOUS-MENU PRESTATIONS MOBILE */}
              <div className="py-2 border-b border-gray-50">
                <Link to="/prestations" onClick={() => setIsMenuOpen(false)} className="py-3 text-[#233B72] hover:text-brand-orange-500 block">
                  {t('nav.services')}
                </Link>
                <div className="pl-4 mt-2 space-y-3">
                  <Link to="/prestations/nettoyage-facade" onClick={() => setIsMenuOpen(false)} className="flex items-center text-[#233B72] text-base font-bold hover:text-brand-orange-500">
                    <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500 shrink-0"/> {language === 'fr' ? 'Nettoyage de façade' : 'Facade Cleaning'}
                  </Link>
                  <Link to="/prestations/demoussage" onClick={() => setIsMenuOpen(false)} className="flex items-center text-[#233B72] text-base font-bold hover:text-brand-orange-500">
                    <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500 shrink-0"/> {language === 'fr' ? 'Nettoyage de toiture' : 'Roof Cleaning'}
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" onClick={() => setIsMenuOpen(false)} className="flex items-center text-[#233B72] text-base font-bold hover:text-brand-orange-500">
                    <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500 shrink-0"/> {language === 'fr' ? 'Panneaux photovoltaïques' : 'Solar Panels'}
                  </Link>
                  {/* NOUVEAU LIEN THERMOGRAPHIE MOBILE */}
                  <Link to="/prestations/thermographie" onClick={() => setIsMenuOpen(false)} className="flex items-center text-[#233B72] text-base font-bold hover:text-brand-orange-500">
                    <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500 shrink-0"/> {language === 'fr' ? 'Thermographie' : 'Thermography'}
                  </Link>
                  <Link to="/prestations/elimination-frelons" onClick={() => setIsMenuOpen(false)} className="flex items-center text-[#233B72] text-base font-bold hover:text-brand-orange-500">
                    <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500 shrink-0"/> {language === 'fr' ? 'Élimination frelons' : 'Hornet Elimination'}
                  </Link>
                </div>
              </div>
              
              <div className="py-2 border-b border-gray-50">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 mt-2">{t('nav.news')}</p>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="flex items-center py-3 pl-4 text-[#233B72] font-bold hover:text-brand-orange-500">
                  <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500"/> {t('nav.blog')}
                </Link>
                <Link to="/realisations" onClick={() => setIsMenuOpen(false)} className="flex items-center py-3 pl-4 text-[#233B72] font-bold hover:text-brand-orange-500">
                  <ChevronRight className="w-5 h-5 mr-2 text-brand-orange-500"/> {t('nav.portfolio')}
                </Link>
              </div>

              <Link to="/valeurs" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#233B72] hover:text-brand-orange-500">
                {t('nav.values')}
              </Link>
              
              <Link to="/risques-et-responsabilites" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#233B72] hover:text-brand-orange-500">
                {t('risques.title')}
              </Link>
              
              <Link to="/rejoignez-nous" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-50 text-[#233B72] hover:text-brand-orange-500">
                {t('rejoignez.title')}
              </Link>
              
              <div className="pt-6 pb-10 flex flex-col gap-4">
                 <div className="flex justify-center"><LanguageSwitcher /></div>
                 <Link to="/devis" onClick={() => setIsMenuOpen(false)} className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white py-4 rounded-xl text-center shadow-lg font-bold">
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
