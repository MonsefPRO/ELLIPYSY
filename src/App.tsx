import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets, Shield, Clock, Award, Mail, Phone, MapPin, ChevronRight, ChevronDown, Star, TrendingUp, Users, ChevronLeft, Zap, BarChart3, Play } from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter';
import CookieBanner from './components/CookieBanner';
import DroneBenefits from './components/DroneBenefits';
import CertificationsSection from './components/CertificationsSection';
import { useLanguage } from './contexts/LanguageContext';
import { Hover3DCard } from './components/Hover3DCard';
import { ScrollReveal } from './components/ScrollReveal';
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
      text: "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité.",
      name: "Jean Martin",
      role: "Directeur logistique, Société Industrie+",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Technologie impressionnante et résultats impeccables. Notre façade n'a jamais été aussi propre. L'équipe est pro.",
      name: "Sophie Dubois",
      role: "Syndic, Résidence Le Parc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Solution innovante et écologique. Nous avons économisé près de 40% par rapport à un prestataire traditionnel.",
      name: "Pierre Lefebvre",
      role: "Gérant, Centre Commercial Horizon",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
        {/* HERO SECTION RESPONSIVE */}
        <section id="accueil" className="min-h-[90vh] md:min-h-screen pt-24 md:pt-32 pb-12 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                  {t('hero.title1')} <span className="text-brand-orange-500">{t('hero.title2')}</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-2xl text-white font-medium mb-10 leading-relaxed drop-shadow-lg px-2">
                  {t('hero.subtitle')}
                  <span className="block mt-4 flex flex-wrap justify-center gap-3">
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm md:text-lg">
                      <Shield className="w-4 h-4 mr-2" /> {t('benefits.safety.title')}
                    </span>
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm md:text-lg">
                      <Zap className="w-4 h-4 mr-2" /> {t('benefits.speed.title')}
                    </span>
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                  <Link to="/devis" className="w-full sm:w-auto bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-orange-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    {t('hero.cta')}
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button onClick={() => setIsVideoModalOpen(true)} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-sky-900 transition-all flex items-center justify-center gap-2">
                    <Play className="w-5 h-5 fill-current" /> Voir la démo
                  </button>
                </div>
              </ScrollReveal>

              {/* STATS RAPIDES */}
              <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-12 mt-12 md:mt-20">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <div className="text-2xl md:text-4xl font-bold text-white"><AnimatedCounter end={120000} suffix="m²" /></div>
                  <div className="text-xs md:text-sm text-sky-100 uppercase tracking-widest font-bold">Traités</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <div className="text-2xl md:text-4xl font-bold text-white"><AnimatedCounter end={98} suffix="%" /></div>
                  <div className="text-xs md:text-sm text-sky-100 uppercase tracking-widest font-bold">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CertificationsSection />
        
        {/* SECTION SERVICES GRILLE OPTIMISÉE */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#334786] mb-6">{t('mainServices.title')}</h2>
              <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t('mainServices.subtitle') }}></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { id: '01', title: t('mainServices.facade.title'), desc: t('mainServices.facade.description'), color: 'border-sky-500', link: '/prestations/nettoyage-facade' },
                { id: '02', title: t('mainServices.demoussage.title'), desc: t('mainServices.demoussage.description'), color: 'border-green-500', link: '/prestations/demoussage' },
                { id: '03', title: t('mainServices.hornets.title'), desc: t('mainServices.hornets.description'), color: 'border-red-500', link: '/prestations/elimination-frelons' },
                { id: '04', title: 'Industrie & Solaire', desc: t('servicesSection.industrial2.description'), color: 'border-amber-500', link: '/prestations' }
              ].map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Link to={s.link} className="block group h-full">
                    <div className={`bg-gray-50 p-8 rounded-3xl border-t-8 ${s.color} shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
                      <span className="text-4xl font-black text-gray-200 mb-4 group-hover:text-sky-100 transition-colors">{s.id}</span>
                      <h3 className="text-xl font-bold text-[#334786] mb-4">{s.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">{s.desc}</p>
                      <div className="flex items-center text-sky-600 font-bold group-hover:gap-2 transition-all">
                        En savoir plus <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES MOBILE-FRIENDLY */}
        <section id="avis" className="py-16 md:py-24 bg-sky-50 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#334786] mb-4">{t('testimonials.title')}</h2>
              <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="font-bold text-gray-800 text-lg">Note moyenne de 4.9/5</p>
            </div>

            <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-2xl border border-white">
              <div className="min-h-[200px] flex flex-col justify-center items-center text-center">
                 <p className="text-lg md:text-2xl italic text-gray-700 leading-relaxed mb-8">
                   "{testimonials[currentTestimonial].text}"
                 </p>
                 <div className="flex items-center gap-4">
                   <img src={testimonials[currentTestimonial].image} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-sky-100" alt={testimonials[currentTestimonial].name} />
                   <div className="text-left">
                     <div className="font-bold text-[#334786]">{testimonials[currentTestimonial].name}</div>
                     <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                   </div>
                 </div>
              </div>

              {/* FLÈCHES DE NAVIGATION */}
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-2 right-2 md:-left-6 md:-right-6">
                <button onClick={prevTestimonial} className="bg-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all text-sky-600"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={nextTestimonial} className="bg-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all text-sky-600"><ChevronRight className="w-6 h-6" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION MOBILE */}
        <section id="faq" className="py-16 md:py-24 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-[#334786] mb-12">{t('faq.title')}</h2>
            <div className="space-y-4">
              {[
                { q: t('faq.q3.question'), a: t('faq.q3.answer') },
                { q: t('faq.q1.question'), a: t('faq.q1.answer') },
                { q: t('faq.q2.question'), a: t('faq.q2.answer') }
              ].map((item, i) => (
                <div key={i} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setExpandedFAQ({...expandedFAQ, [i]: !expandedFAQ[i]})}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span className="pr-4 text-sm md:text-base">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFAQ[i] ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFAQ[i] && <div className="p-5 pt-0 text-gray-600 text-sm md:text-base leading-relaxed bg-gray-50/50">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT RAPIDE MOBILE */}
        <section id="contact" className="py-16 bg-[#233B72] text-white px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('quote.title')}</h2>
            <p className="text-sky-100 mb-10 text-base md:text-xl px-2">{t('quote.subtitle')}</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-left">
              <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl">
                <div className="bg-brand-orange-500 p-3 rounded-xl"><Phone className="w-6 h-6" /></div>
                <div><div className="text-xs uppercase text-sky-200">Appelez-nous</div><div className="text-lg font-bold">04 67 20 97 09</div></div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl">
                <div className="bg-brand-orange-500 p-3 rounded-xl"><Mail className="w-6 h-6" /></div>
                <div><div className="text-xs uppercase text-sky-200">Email</div><div className="text-lg font-bold">contact@ellipsys-group.com</div></div>
              </div>
            </div>

            <Link to="/devis" className="inline-flex items-center gap-3 bg-brand-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-orange-600 transition-all shadow-2xl active:scale-95">
              DÉMARRER MON DEVIS <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />

      <footer className="bg-gray-950 text-white py-12 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8 mb-8 text-center md:text-left">
            <img src="/bonlogo_de_cote.png" className="h-12 md:h-16 invert brightness-0" alt="Ellipsys" />
            <div className="text-gray-400 text-sm max-w-md">Expert Européen en maintenance par drone industriel et résidentiel.</div>
          </div>
          <div className="text-center text-gray-500 text-xs md:text-sm">
            &copy; 2026 Ellipsys Solutions. {t('footer.rights')} • <Link to="/politique-confidentialite" className="hover:text-white underline">Mentions légales</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
