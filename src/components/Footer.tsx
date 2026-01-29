import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* LOGO & DESCRIPTION */}
          <div className="space-y-6">
            <img src="/bonlogo_de_cote.png" className="h-12 invert brightness-0" alt="Ellipsys" />
            <p className="text-gray-400 text-sm leading-relaxed text-justify font-medium">
              {t('footer.description')}
            </p>
          </div>

          {/* LIENS RAPIDES */}
          <div>
            <h4 className="text-lg font-black mb-6 border-b border-white/10 pb-2 uppercase tracking-tighter">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/prestations" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
                  <ChevronRight className="w-4 h-4 text-sky-500" /> {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
                  <ChevronRight className="w-4 h-4 text-sky-500" /> {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/rejoignez-nous" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
                  <ChevronRight className="w-4 h-4 text-sky-500" /> {t('rejoignez.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-black mb-6 border-b border-white/10 pb-2 uppercase tracking-tighter">
              {t('footer.services')}
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm font-medium">{t('mainServices.facade.title')}</li>
              <li className="text-gray-400 text-sm font-medium">{t('mainServices.demoussage.title')}</li>
              <li className="text-gray-400 text-sm font-medium">{t('servicesSection.industrial2.title')}</li>
              <li className="text-gray-400 text-sm font-medium">{t('mainServices.hornets.title')}</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-black mb-6 border-b border-white/10 pb-2 uppercase tracking-tighter">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm font-bold">
                <Phone className="w-4 h-4 text-sky-500" /> 04 67 20 97 09
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-bold">
                <Mail className="w-4 h-4 text-sky-500" /> contact@ellipsys-group.com
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm font-bold">
                <MapPin className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" /> 
                <span>Montpellier & Grand Sud</span>
              </li>
            </ul>
          </div>
        </div>

        {/* LIGNE FINALE */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase font-bold">
            &copy; 2026 Ellipsys Solutions. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link to="/politique-confidentialite" className="text-gray-500 hover:text-white text-[10px] uppercase underline underline-offset-4 font-bold">
              {t('footer.privacy')}
            </Link>
            <Link to="/mentions-legales" className="text-gray-500 hover:text-white text-[10px] uppercase underline underline-offset-4 font-bold">
              {t('footer.legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
