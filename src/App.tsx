import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, ChevronRight, Star, Zap, 
  BarChart3, Play, ChevronLeft 
} from 'lucide-react';

import { AnimatedCounter } from './components/AnimatedCounter';
import CookieBanner from './components/CookieBanner';
import DroneBenefits from './components/DroneBenefits';
import CertificationsSection from './components/CertificationsSection';
import { useLanguage } from './contexts/LanguageContext';
import { Hover3DCard } from './components/Hover3DCard';
import { ScrollReveal } from './components/ScrollReveal';
import { VideoModal } from './components/VideoModal';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
      text: language === 'fr' 
        ? "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité. Je recommande vivement."
        : "Exceptional service! Our warehouse cleaning was completed in record time with zero business interruption. Highly recommended.",
      name: "Jean Martin",
      role: language === 'fr' ? "Directeur logistique, Société Industrie+" : "Logistics Director, Industrie+ Corp",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: language === 'fr'
        ? "Technologie impressionnante et résultats impeccables. Notre façade n'a jamais été aussi propre. L'équipe est professionnelle et ponctuelle."
        : "Impressive technology and spotless results. Our building facade has never looked better. The team is professional and punctual.",
      name: "Sophie Dubois",
      role: language === 'fr' ? "Syndic de copropriété, Résidence Le Parc" : "Property Manager, Le Parc Residency",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#EFF8FF] overflow-x-hidden flex flex-col">
      <CookieBanner />
      <Header />
      
      <main className="flex-grow">
        {/* SECTION HERO HARMONISÉE */}
        <section id="accueil" className="min-h-[70vh] md:min-h-screen pt-28 pb-12 relative overflow-hidden flex items-center">
          
          {/* LUEUR HARMONISÉE : red-900 / blue-900 / black */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
          
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'}`}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="w-full relative z-20 container mx-auto px-4 text-center">
            {/* TYPOGRAPHIE HARMONISÉE : uppercase + tracking-tighter */}
            <h1 className="text-3xl md:text-7xl font-black leading-tight drop-shadow-2xl text-white mb-6 uppercase tracking-tighter">
              {t('hero.title1')} <br className="md:hidden" /> {t('hero.title2')}
            </h1>
            
            <div className="text-white space-y-6">
              <p className="text-sm md:text-xl font-bold drop-shadow-md">{t('hero.subtitle')}</p>
              <div className="flex flex-wrap justify-center gap-2 font-bold px-2">
                <span onClick={() => scrollToSection('benefit-safety')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                  <Shield className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.safety.title')}</span>
                </span>
                <span onClick={() => scrollToSection('benefit-speed')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                  <Zap className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.speed.title')}</span>
                </span>
                <span onClick={() => scrollToSection('benefit-cost')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                  <BarChart3 className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.cost.title')}</span>
                </span>
              </div>
              <p className="text-sm md:text-xl font-bold drop-shadow-md">{t('hero.intervention')}</p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                <div className="text-xl md:text-3xl font-bold text-white"><AnimatedCounter end={120000} suffix="m²" /></div>
                <div className="text-[10px] md:text-xs text-orange-200 font-bold uppercase tracking-widest mt-1">
                  {language === 'fr' ? 'Traités' : 'Treated'}
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                <div className="text-xl md:text-3xl font-bold text-white"><AnimatedCounter end={98} suffix="%" /></div>
                <div className="text-[10px] md:text-xs text-orange-200 font-bold uppercase tracking-widest mt-1">
                  {language === 'fr' ? 'Satisfaction' : 'Satisfaction'}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/devis" className="bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl uppercase tracking-wider">
                {t('hero.cta')}
              </Link>
              <button onClick={() => setIsVideoModalOpen(true)} className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 uppercase tracking-wider hover:bg-white/20 transition-all">
                <Play className="w-5 h-5 fill-current" /> {language === 'fr' ? 'Voir la démo' : 'Watch Demo'}
              </button>
            </div>
          </div>
        </section>

        <CertificationsSection />
        <DroneBenefits />

        {/* SECTION PRESTATIONS */}
        <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-5xl font-black mb-12 text-center text-[#233B72] uppercase tracking-tighter">{t('mainServices.title')}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {['facade', 'demoussage', 'hornets', 'industrial2'].map((key, i) => (
                <ScrollReveal delay={0.1 * (i + 1)} key={key}>
                  <Hover3DCard className={`bg-white rounded-[2rem] p-5 md:p-8 shadow-lg border-t-8 h-full flex flex-col hover:shadow-2xl transition-all ${i === 0 ? 'border-sky-500' : i === 1 ? 'border-green-500' : i === 2 ? 'border-red-500' : 'border-amber-500'}`}>
                    <div className="flex-grow">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-gray-400 font-black text-lg">0{i + 1}</span>
                      </div>
                      <h3 className="text-sm md:text-2xl font-black mb-2 text-[#233B72] leading-tight uppercase tracking-tighter">{t(`mainServices.${key}.title`)}</h3>
                    </div>
                    <Link to="/prestations" className="mt-4 pt-4 border-t border-gray-100 text-sky-600 font-bold text-xs md:text-base flex items-center hover:gap-2 transition-all">
                      {language === 'fr' ? 'Découvrir' : 'Discover'} <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Hover3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION AVIS */}
        <section id="avis" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-[#233B72] uppercase tracking-tighter">{t('testimonials.title')}</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] text-center w-full lg:w-1/4 border border-slate-100 shadow-inner">
                <div className="text-5xl font-black text-gray-900 mb-2">4.9/5</div>
                <div className="flex justify-center mb-3 text-orange-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">98% satisfaction</p>
              </div>
              <div className="flex-1 bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50 relative">
                <p className="text-gray-700 md:text-xl italic mb-8 font-medium leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex items-center">
                  <img src={testimonials[currentTestimonial].image} className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-slate-50" alt="client" />
                  <div>
                    <div className="font-black text-[#233B72] text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <button onClick={prevTestimonial} className="p-4 rounded-xl bg-slate-50 shadow-md hover:bg-[#233B72] hover:text-white transition-all text-[#233B72]"><ChevronLeft /></button>
                  <button onClick={nextTestimonial} className="p-4 rounded-xl bg-slate-50 shadow-md hover:bg-[#233B72] hover:text-white transition-all text-[#233B72]"><ChevronRight /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />
      <Footer />
    </div>
  );
}
