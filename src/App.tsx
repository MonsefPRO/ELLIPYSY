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
import Header from './components/Header';

function App() {
  const { t } = useLanguage();
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
     <Header />

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
                <Hover3DCard className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-sky-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <span className="text-white font-bold text-2xl">01</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#334786' }}>
                      {t('mainServices.facade.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                      {t('mainServices.facade.description')}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      to="/prestations/nettoyage-facade"
                      className="text-sky-600 font-semibold hover:text-sky-700 inline-flex items-center group"
                    >
                      {t('mainServices.seeMore')}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Hover3DCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Hover3DCard className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <span className="text-white font-bold text-2xl">02</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#334786' }}>
                      {t('mainServices.demoussage.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                      {t('mainServices.demoussage.description')}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      to="/prestations/demoussage"
                      className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center group"
                    >
                      {t('mainServices.seeMore')}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Hover3DCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Hover3DCard className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <span className="text-white font-bold text-2xl">03</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#334786' }}>
                      {t('mainServices.hornets.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                      {t('mainServices.hornets.description')}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      to="/prestations/elimination-frelons"
                      className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group"
                    >
                      {t('mainServices.seeMore')}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Hover3DCard>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Hover3DCard className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <span className="text-white font-bold text-2xl">04</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#334786' }}>
                      {t('servicesSection.industrial2.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                      {t('servicesSection.industrial2.description')}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      to="/prestations"
                      className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center group"
                    >
                      {t('mainServices.seeMore')}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Hover3DCard>
              </ScrollReveal>

            </div>
          </div>
        </section>
        <section id="avis" className="py-10 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src="/dsc03616.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('testimonials.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('testimonials.subtitle')}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <div className="flex-shrink-0 lg:w-1/4">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 text-center border border-sky-100">
                  <div className="text-6xl font-bold text-gray-800 mb-2">4.9/5</div>
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-0.5" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">98% satisfaction client</p>
                </div>
              </div>

              <div className="flex-1 lg:w-3/4">
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-800 text-base">{testimonials[currentTestimonial].name}</div>
                        <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-all duration-300 hover:scale-125 hover:-rotate-12 transform"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${
                          index === currentTestimonial ? 'bg-sky-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src="/dsc07631.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('faq.title')}
              </h2>
              <p className="text-base sm:text-xl text-gray-600">
                {t('faq.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: t('faq.q3.question'),
                  answer: t('faq.q3.answer')
                },
                {
                  question: t('faq.q1.question'),
                  answer: t('faq.q1.answer')
                },
                {
                  question: t('faq.q4.question'),
                  answer: t('faq.q4.answer')
                },
                {
                  question: t('faq.q2.question'),
                  answer: t('faq.q2.answer')
                },
                {
                  question: t('faq.q5.question'),
                  answer: t('faq.q5.answer')
                },
                {
                  question: t('faq.q6.question'),
                  answer: t('faq.q6.answer')
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
                  <button
                    onClick={() => setExpandedFAQ({...expandedFAQ, [index]: !expandedFAQ[index]})}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-sky-600 flex-shrink-0 transition-transform duration-300 ${
                        expandedFAQ[index] ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFAQ[index] && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                      <p className="text-xs sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t('contact.subtitle')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('faq.subtitle')}
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-brand-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transform inline-flex items-center group"
              >
                {t('contact.title')}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src="/dsc03813.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-full text-sm font-semibold mb-4">
                {t('contact.title')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('quote.title')}
              </h2>
              <p className="text-base sm:text-xl text-gray-600">
                {t('quote.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#233B72' }}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{t('contact.phone')}</h3>
                     <p className="text-gray-600">04 67 20 97 09</p>
                      <p className="text-sm text-gray-500 mt-1">{t('contact.form.phone')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#233B72' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{t('contact.email')}</h3>
                      <p className="text-gray-600">contact@ellipsys-group.com</p>
                      <p className="text-sm text-gray-500 mt-1">{t('quote.subtitle')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#233B72' }}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{t('contact.address')}</h3>
                      <p className="text-gray-600">{t('footer.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">{t('whyUs.title')}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('whyUs.subtitle')}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t('whyUs.certified.title')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t('whyUs.quality.title')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t('whyUs.available.title')}
                    </li>
                  </ul>
                </div>
              </div>

              {/* FORMULAIRE OPTIMISÉ POUR HUBSPOT */}
              <form 
                id="hs-contact-form" 
                name="contact-form"
                method="POST"
                className="bg-gradient-to-br from-white to-sky-50/30 rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-sky-100 space-y-6"
              >
                <div>
                  <label htmlFor="firstname" className="block text-sm font-semibold text-gray-800 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                      placeholder={t('contact.form.email')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                      placeholder={t('contact.form.phone')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="prestation" className="block text-sm font-semibold text-gray-800 mb-2">
                    {t('quote.form.service')}
                  </label>
                  <select
                    id="prestation"
                    name="prestation"
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                  >
                    <option value="">{t('quote.form.selectService')}</option>
                    <option value="Nettoyage Industriel">{t('servicesSection.industrial.title')}</option>
                    <option value="Bureaux">{t('servicesSection.office.title')}</option>
                    <option value="Résidentiel">{t('servicesSection.residential.title')}</option>
                    <option value="Patrimoine">{t('servicesSection.heritage.title')}</option>
                    <option value="Commerce">{t('servicesSection.commercial.title')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300 resize-none"
                    placeholder={t('quote.form.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-brand-orange-600 hover:to-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform flex items-center justify-center gap-3 group"
                >
                  <span>{t('quote.form.submit')}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  {t('footer.privacy')}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="/videodemo.mp4"
      />

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('accueil')} className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('nav.home')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('footer.services')}
                  </button>
                </li>
                <li>
                  <Link to="/valeurs" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('nav.values')}
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection('avantages')} className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('whyUs.badge')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('contact.title')}
                  </button>
                </li>
                <li>
                  <Link to="/realisations" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('nav.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 transform">
                    {t('footer.privacy')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-6">
              <div>
                <h3 className="font-bold mb-4">{t('contact.title')}</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>04 67 20 97 09</li>
                  <li>contact@ellipsys-group.com</li>
                  <li>159 Rue de Thor</li>
                  <li>Business plaza 3</li>
                  <li> 34 000 Montpellier (France).</li>
                </ul>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img
                  src="/4.png"
                  alt="Ellipsys"
                  className="h-32 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link to="/politique-confidentialite" className="hover:text-white transition-all duration-300 hover:scale-110 transform">
                {t('footer.privacy')}
              </Link>
            </div>
            <p>&copy; 2026 Ellipsys Solutions. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
