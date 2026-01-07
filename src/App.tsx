import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets, Shield, Clock, Award, Mail, Phone, MapPin, ChevronRight, ChevronDown, Star, TrendingUp, Users, ChevronLeft, Zap, BarChart3, Play } from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter';
import CookieBanner from './components/CookieBanner';
import LanguageSwitcher from './components/LanguageSwitcher';
import DroneBenefits from './components/DroneBenefits';
import CertificationsSection from './components/CertificationsSection';
import { useLanguage } from './contexts/LanguageContext';
import { Hover3DCard } from './components/Hover3DCard';
import { ScrollReveal } from './components/ScrollReveal';
import { AnimatedButton } from './components/AnimatedButton';
import { VideoModal } from './components/VideoModal';

function App() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActualitesOpen, setIsActualitesOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<{[key: number]: boolean}>({});
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const heroImages = [
    { src: '/rony.jpg', alt: 'Expert drone Ellipsys' },
    { src: '/ares.png', alt: 'Drone ARES' },
    { src: '/abateur_de_frelons.png', alt: 'Abatteur de frelons' },
    { src: '/rony2.jpg', alt: 'Expert drone en action' },
    { src: '/chronos.jpg', alt: 'Drone Chronos' },
    { src: '/rony4.jpg', alt: 'Expert drone Ellipsys' },
    { src: '/chronos2.jpg', alt: 'Drone Chronos 2' },
    { src: '/rony5.jpg', alt: 'Expert drone Ellipsys' }
  ];

  const testimonials = [
    {
      text: "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité. Je recommande vivement.",
      name: "Jean Martin",
      role: "Directeur logistique, Société Industrie+",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Technologie impressionnante et résultats impeccables. Notre façade n'a jamais été aussi propre. L'équipe est professionnelle et ponctuelle.",
      name: "Sophie Dubois",
      role: "Syndic de copropriété, Résidence Le Parc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Solution innovante et écologique. Le rapport qualité-prix est excellent. Nous avons économisé près de 40% par rapport à un prestataire traditionnel.",
      name: "Pierre Lefebvre",
      role: "Gérant, Centre Commercial Horizon",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Parfait pour notre bâtiment historique. Le nettoyage a été réalisé avec délicatesse. La pierre n'a subi aucun dommage. Très satisfaits du résultat.",
      name: "Marie Chevalier",
      role: "Responsable patrimoine, Mairie de Versailles",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Intervention rapide et efficace. Notre façade vitrée est impeccable. Le gain de temps est considérable comparé aux méthodes classiques.",
      name: "Thomas Rousseau",
      role: "Directeur technique, Tour Moderne Business",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Prestation de qualité à un tarif compétitif. L'équipe est à l'écoute et s'adapte à nos contraintes. Nous avons signé un contrat annuel.",
      name: "Anne Laurent",
      role: "Facility Manager, Groupe TechPro",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#EFF8FF]">
      <CookieBanner />
      <header className="fixed w-full bg-white/98 backdrop-blur-md shadow-md z-40 transition-all border-b border-gray-100">
        <nav className="w-full">
          <div className="flex justify-between items-center h-24 md:h-[110px] px-6 md:px-[120px]">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/bonlogo_de_cote.png"
                  alt="Ellipsys"
                  className="h-12 md:h-24 w-auto transition-transform duration-300 cursor-pointer"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <Link to="/prestations" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-colors relative group">
                <span>{t('nav.services')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <div className="relative group">
                <button
                  onMouseEnter={() => setIsActualitesOpen(true)}
                  className="flex items-center text-gray-700 hover:text-sky-600 font-semibold text-lg transition-all duration-300 relative"
                >
                  <span>{t('nav.news')}</span>
                  <ChevronDown className={`w-5 h-5 ml-1 transition-transform duration-300 ${isActualitesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
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

              <Link to="/valeurs" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-colors relative group">
                <span>{t('nav.values')}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/rejoignez-nous" className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-colors relative group">
                <span>Rejoignez-nous</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-600 font-semibold text-lg transition-colors relative group">
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                to="/devis"
                className="flex items-center gap-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-brand-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transform"
              >
                <span>{t('hero.cta')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <button
              className="md:hidden hover:scale-110 hover:rotate-12 transition-all duration-300 transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2 hover:translate-x-2 transition-all duration-300 transform hover:bg-sky-50 rounded px-2">
                {t('nav.home')}
              </button>
              <Link to="/prestations" className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2 hover:translate-x-2 transition-all duration-300 transform hover:bg-sky-50 rounded px-2">
                {t('nav.services')}
              </Link>
              <div className="space-y-1">
                <div className="text-gray-700 font-medium py-2 px-2 bg-gray-50 rounded">
                  {t('nav.news')}
                </div>
                <Link to="/blog" className="block w-full text-left text-gray-600 hover:text-sky-600 py-2 pl-4 hover:translate-x-2 transition-all duration-300 transform hover:bg-sky-50 rounded">
                  {t('nav.blog')}
                </Link>
                <Link to="/realisations" className="block w-full text-left text-gray-600 hover:text-sky-600 py-2 pl-4 hover:translate-x-2 transition-all duration-300 transform hover:bg-sky-50 rounded">
                  {t('nav.portfolio')}
                </Link>
              </div>
              <Link to="/valeurs" className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2 hover:translate-x-2 transition-all duration-300 transform hover:bg-sky-50 rounded px-2">
                {t('nav.values')}
              </Link>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium py-2 hover:translate-x-2 transition-all duration-300 transform hover:bg-sky-50 rounded px-2">
                {t('contact.title')}
              </button>
              <div className="flex items-center justify-center py-4">
                <LanguageSwitcher />
              </div>
              <Link to="/devis" className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-medium text-center block hover:from-brand-orange-600 hover:to-red-700 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                {t('hero.cta')}
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="accueil" className="min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/25 via-blue-50/20 to-white/25 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImage ? 'opacity-75' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="space-y-7 w-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap" style={{ color: '#334786' }}>
                  {t('hero.title1')} {t('hero.title2')}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed space-y-7">
                  <span className="block whitespace-nowrap text-black font-bold">
                    {t('hero.subtitle')}
                  </span>
                  <span className="flex flex-wrap justify-center gap-2 font-bold">
                    <span
                      onClick={() => scrollToSection('benefit-safety')}
                      className="inline-flex items-center bg-gray-100/50 px-3 py-1 rounded-lg hover:bg-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-1.5" style={{ color: '#334786' }} />
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl" style={{ color: '#334786' }}>{t('benefits.safety.title')}</span>
                    </span> 
                    <span
                      onClick={() => scrollToSection('benefit-speed')}
                      className="inline-flex items-center bg-gray-100/50 px-3 py-1 rounded-lg hover:bg-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-1.5" style={{ color: '#334786' }} />
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl" style={{ color: '#334786' }}>{t('benefits.speed.title')}</span>
                    </span>
                    <span
                      onClick={() => scrollToSection('benefit-cost')}
                      className="inline-flex items-center bg-gray-100/50 px-3 py-1 rounded-lg hover:bg-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-1.5" style={{ color: '#334786' }} />
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl" style={{ color: '#334786' }}>{t('benefits.cost.title')}</span>
                    </span>
                  </span> 
                  <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold">
                    {t('hero.intervention')}
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="w-6 h-6 text-sky-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">
                        <AnimatedCounter end={120000} suffix={t('hero.stat1Value')} />
                      </div>
                      <div className="text-sm text-black">{t('hero.stat1Label')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 group-hover:scale-110 transition-all duration-300">
                      <Users className="w-6 h-6 text-sky-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">
                        <AnimatedCounter end={62} suffix={t('hero.stat2Value')} />
                      </div>
                      <div className="text-sm text-black">{t('hero.stat2Label')}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/devis"
                    className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-brand-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 flex items-center justify-center group transform"
                  >
                    {t('hero.cta')}
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="border-2 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 transform flex items-center justify-center gap-2 group"
                    style={{ borderColor: '#334786', color: '#334786' }}
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Voir la démo
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-12">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroImage(index)}
                  className={`transition-all duration-300 transform hover:scale-125 ${
                    index === currentHeroImage
                      ? 'w-8 h-2 bg-sky-600'
                      : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                  } rounded-full`}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <CertificationsSection />
        <DroneBenefits />

     <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src="/dsc07832.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full relative z-10 px-4 py-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: '#334786' }}>
                {t('mainServices.title')}
              </h2>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed px-4 sm:px-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t('mainServices.subtitle') }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8">
              <ScrollReveal delay={0.1}>
