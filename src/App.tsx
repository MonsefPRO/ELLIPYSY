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
import Footer from './components/Footer';

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
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#EFF8FF] overflow-x-hidden">
      <CookieBanner />
      <Header />

      <main>
      {/* BANNIÈRE : HAUTEUR DYNAMIQUE POUR NE PAS COUPER LE TEXTE */}
        <section id="accueil" className="min-h-[70vh] md:min-h-screen pt-28 pb-12 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImage ? 'opacity-100' : 'opacity-0'
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

          <div className="w-full relative z-20">
            <div className="flex flex-col items-center justify-center">
              <div className="space-y-6 w-full text-center px-4">
                {/* TITRE : text-2xl sur mobile pour être sûr que ça tienne */}
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl text-white">
                  {t('hero.title1')} <br className="md:hidden" /> {t('hero.title2')}
                </h1>

                {/* SOUS-TITRE ET ICONES CLIQUABLES */}
                <div className="text-white space-y-6">
                  <p className="text-sm sm:text-lg md:text-xl font-bold drop-shadow-md">
                    {t('hero.subtitle')}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 font-bold px-2">
                    <span
                      onClick={() => scrollToSection('benefit-safety')}
                      className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl hover:bg-white/30 transition-all cursor-pointer border border-white/30"
                    >
                      <Shield className="w-4 h-4 md:w-8 md:h-8 mr-1.5 text-white" />
                      <span className="text-[11px] sm:text-sm md:text-xl uppercase tracking-tighter md:tracking-normal">{t('benefits.safety.title')}</span>
                    </span> 
                    <span
                      onClick={() => scrollToSection('benefit-speed')}
                      className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl hover:bg-white/30 transition-all cursor-pointer border border-white/30"
                    >
                      <Zap className="w-4 h-4 md:w-8 md:h-8 mr-1.5 text-white" />
                      <span className="text-[11px] sm:text-sm md:text-xl uppercase tracking-tighter md:tracking-normal">{t('benefits.speed.title')}</span>
                    </span>
                    <span
                      onClick={() => scrollToSection('benefit-cost')}
                      className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl hover:bg-white/30 transition-all cursor-pointer border border-white/30"
                    >
                      <BarChart3 className="w-4 h-4 md:w-8 md:h-8 mr-1.5 text-white" />
                      <span className="text-[11px] sm:text-sm md:text-xl uppercase tracking-tighter md:tracking-normal">{t('benefits.cost.title')}</span>
                    </span>
                  </div> 

                  <p className="text-sm sm:text-lg md:text-xl font-bold drop-shadow-md">
                    {t('hero.intervention')}
                  </p>
                </div>

                {/* COMPTEURS : Plus petits sur mobile */}
                <div className="flex justify-center gap-4 md:gap-8">
                  <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                    <div className="text-xl md:text-3xl font-bold text-white leading-none">
                      <AnimatedCounter end={120000} suffix="m²" />
                    </div>
                    <div className="text-[10px] md:text-xs text-sky-200 font-bold uppercase tracking-widest mt-1">Traités</div>
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                    <div className="text-xl md:text-3xl font-bold text-white leading-none">
                      <AnimatedCounter end={98} suffix="%" />
                    </div>
                    <div className="text-[10px] md:text-xs text-sky-200 font-bold uppercase tracking-widest mt-1">Satisfaction</div>
                  </div>
                </div>

                {/* BOUTONS */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center px-6">
                  <Link
                    to="/devis"
                    className="bg-brand-orange-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center group active:scale-95"
                  >
                    {t('hero.cta')}
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Voir la démo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CertificationsSection />
        
        {/* COMPOSANT DÉPLOYABLE (MODIFIÉ DANS LE FICHIER PRÉCÉDENT) */}
        <DroneBenefits />

        {/* PRESTATIONS PRINCIPALES : GRILLE 2X2 SUR MOBILE */}
        <section className="pt-8 pb-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('mainServices.title')}
              </h2>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed px-4 text-justify md:text-center max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: t('mainServices.subtitle') }}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-8">
              {/* Carte 01 */}
              <ScrollReveal delay={0.1}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-sky-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">01</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('mainServices.facade.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('mainServices.facade.description')}</p>
                  </div>
                  <Link to="/prestations/nettoyage-facade" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-sky-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>

              {/* Carte 02 */}
              <ScrollReveal delay={0.2}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">02</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('mainServices.demoussage.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('mainServices.demoussage.description')}</p>
                  </div>
                  <Link to="/prestations/demoussage" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-green-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>

              {/* Carte 03 */}
              <ScrollReveal delay={0.3}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-red-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">03</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('mainServices.hornets.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('mainServices.hornets.description')}</p>
                  </div>
                  <Link to="/prestations/elimination-frelons" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-red-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>

              {/* Carte 04 */}
              <ScrollReveal delay={0.4}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-amber-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">04</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('servicesSection.industrial2.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('servicesSection.industrial2.description')}</p>
                  </div>
                  <Link to="/prestations" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-amber-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION AVIS ORIGINALE */}
        <section id="avis" className="py-10 px-4 bg-white relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('testimonials.title')}
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 text-center border border-sky-100 w-full lg:w-1/4">
                <div className="text-5xl font-bold text-gray-800 mb-2">4.9/5</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-0.5" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">98% satisfaction client</p>
              </div>

              <div className="flex-1 w-full relative">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center">
                    <img src={testimonials[currentTestimonial].image} className="w-14 h-14 rounded-full object-cover mr-4" />
                    <div>
                      <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <button onClick={prevTestimonial} className="bg-white p-3 rounded-full shadow-lg text-sky-600 hover:scale-110 transition-all"><ChevronLeft className="w-6 h-6" /></button>
                  <button onClick={nextTestimonial} className="bg-white p-3 rounded-full shadow-lg text-sky-600 hover:scale-110 transition-all"><ChevronRight className="w-6 h-6" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONFIANCE : TITRE SUR UNE LIGNE SANS DÉBORDEMENT */}
        <section className="py-12 bg-gray-50 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-10 text-center whitespace-nowrap overflow-hidden text-ellipsis">
              Ils nous font confiance
            </h2>
            {/* Ici se trouve ton bloc de logos originaux */}
          </div>
        </section>

        {/* SECTION CONTACT ORIGINALE */}
        <section id="contact" className="py-12 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10 px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-full text-sm font-semibold mb-4">
                {t('contact.title')}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('quote.title')}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#233B72] text-white flex-shrink-0"><Phone className="w-6 h-6" /></div>
                  <div><h3 className="font-bold text-gray-800">{t('contact.phone')}</h3><p className="text-gray-600">04 67 20 97 09</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#233B72] text-white flex-shrink-0"><Mail className="w-6 h-6" /></div>
                  <div><h3 className="font-bold text-gray-800">{t('contact.email')}</h3><p className="text-gray-600">contact@ellipsys-group.com</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#233B72] text-white flex-shrink-0"><MapPin className="w-6 h-6" /></div>
                  <div><h3 className="font-bold text-gray-800">{t('contact.address')}</h3><p className="text-gray-600">{t('footer.description')}</p></div>
                </div>
              </div>
              
              <form id="hs-contact-form" className="bg-gradient-to-br from-white to-sky-50/30 rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-sky-100 space-y-6">
                <input type="text" placeholder={t('contact.form.name')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none focus:border-sky-500" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder={t('contact.form.email')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none" />
                  <input type="tel" placeholder={t('contact.form.phone')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none" />
                </div>
                <textarea rows={5} placeholder={t('quote.form.message')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                  {t('quote.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />

    <Footer />
    </div>
  );
}

export default App;
