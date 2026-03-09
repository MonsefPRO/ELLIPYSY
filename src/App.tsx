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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ellipsys Solutions",
  "description": "Nettoyage professionnel par drone et robotique : panneaux photovoltaïques, façades, démoussage toiture, nids de frelons, thermographie. Basés en Occitanie, intervention France entière et international. Certifiés DGAC/EASA.",
  "url": "https://ellipsys-solutions.com",
  "telephone": "+33467209709",
  "email": "contact@ellipsys-solutions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "159 Rue de Thor",
    "addressLocality": "Montpellier",
    "postalCode": "34057",
    "addressRegion": "Occitanie",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "43.6047", "longitude": "3.8737" },
  "areaServed": [
    { "@type": "Country", "name": "France" },
    { "@type": "Country", "name": "Belgique" },
    { "@type": "Country", "name": "Espagne" },
    { "@type": "Country", "name": "Italie" },
    { "@type": "AdministrativeArea", "name": "Occitanie" },
    { "@type": "AdministrativeArea", "name": "Hérault" },
    { "@type": "AdministrativeArea", "name": "Gard" },
    { "@type": "AdministrativeArea", "name": "Aude" },
    { "@type": "AdministrativeArea", "name": "Haute-Garonne" },
    { "@type": "AdministrativeArea", "name": "Pyrénées-Orientales" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations nettoyage drone et robotique",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nettoyage panneaux photovoltaïques par drone", "url": "https://ellipsys-solutions.com/prestations/panneaux-photovoltaiques" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nettoyage façades par drone", "url": "https://ellipsys-solutions.com/prestations/nettoyage-facade" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Démoussage toiture par drone", "url": "https://ellipsys-solutions.com/prestations/demoussage" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Destruction nids de frelons par drone", "url": "https://ellipsys-solutions.com/prestations/elimination-frelons" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermographie par drone", "url": "https://ellipsys-solutions.com/prestations/thermographie" } }
    ]
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00", "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/ellipsys-solutions",
    "https://www.instagram.com/ellipsys_solutions"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ellipsys Solutions",
  "url": "https://ellipsys-solutions.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ellipsys-solutions.com/devis?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function App() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const heroImages = [
    { src: '/rony.jpg', alt: isFr ? 'Robot nettoyage panneaux solaires France - Ellipsys Solutions' : 'Robot solar panel cleaning France - Ellipsys Solutions' },
    { src: '/ares.png', alt: isFr ? 'Drone ARES nettoyage façade France' : 'ARES drone facade cleaning France' },
    { src: '/abateur_de_frelons.png', alt: isFr ? 'Drone destruction nids frelons France' : 'Drone hornet nest removal France' },
    { src: '/rony2.jpg', alt: isFr ? 'Nettoyage panneaux photovoltaïques robotique France' : 'Robotic solar panel cleaning France' },
    { src: '/chronos.jpg', alt: isFr ? 'Drone Chronos inspection bâtiment France' : 'Chronos drone building inspection France' },
    { src: '/rony4.jpg', alt: isFr ? 'Expert nettoyage drone Ellipsys Solutions' : 'Ellipsys Solutions drone cleaning expert' },
    { src: '/chronos2.jpg', alt: isFr ? 'Thermographie drone France Ellipsys' : 'Ellipsys drone thermography France' },
    { src: '/rony5.jpg', alt: isFr ? 'Entretien panneaux solaires robotique Ellipsys' : 'Robotic solar panel maintenance Ellipsys' }
  ];

  const testimonials = [
    {
      text: isFr
        ? "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité. Je recommande vivement."
        : "Exceptional service! Our warehouse cleaning was completed in record time with zero business interruption. Highly recommended.",
      name: "Jean Martin",
      role: isFr ? "Directeur logistique, Société Industrie+" : "Logistics Director, Industrie+ Corp",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: isFr
        ? "Technologie impressionnante et résultats impeccables. Notre façade n'a jamais été aussi propre. L'équipe est professionnelle et ponctuelle."
        : "Impressive technology and spotless results. Our building facade has never looked better. The team is professional and punctual.",
      name: "Sophie Dubois",
      role: isFr ? "Syndic de copropriété, Résidence Le Parc" : "Property Manager, Le Parc Residency",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const homeServices = [
    { key: 'facade', link: '/prestations/nettoyage-facade', border: 'border-sky-500', image: '/ares.png', altFr: 'Nettoyage façade drone France', altEn: 'Drone facade cleaning France' },
    { key: 'demoussage', link: '/prestations/demoussage', border: 'border-green-500', image: '/Demoussage drone 1.jpg', altFr: 'Démoussage toiture drone France', altEn: 'Drone roof moss removal France' },
    { key: 'industrial2', link: '/prestations/panneaux-photovoltaiques', border: 'border-amber-500', image: '/rony.jpg', altFr: 'Nettoyage panneaux solaires drone France', altEn: 'Solar panel cleaning drone France' },
    { key: 'thermographie', link: '/prestations/thermographie', border: 'border-indigo-500', image: '/thermo.jpg', customTitle: isFr ? 'Thermographie' : 'Thermography', altFr: 'Thermographie drone France', altEn: 'Drone thermography France' },
    { key: 'hornets', link: '/prestations/elimination-frelons', border: 'border-red-500', image: '/abateur_de_frelons.png', altFr: 'Destruction nids frelons drone France', altEn: 'Hornet nest removal drone France' }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const scrollToSection = (id: string) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

  useEffect(() => {
    const interval = setInterval(() => setCurrentHeroImage((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#EFF8FF] overflow-x-hidden flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      <CookieBanner />
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section id="accueil" className="min-h-[70vh] md:min-h-screen pt-28 pb-12 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'}`}>
                <img src={image.src} alt={isFr ? image.altFr : image.altEn} className="w-full h-full object-cover" loading={index === 0 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>

          <div className="w-full relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-7xl font-black leading-tight drop-shadow-2xl text-white mb-6 uppercase tracking-tighter">
              {isFr ? (
                <>Nettoyage par Drone<br />&amp; Robotique<br /><span className="text-orange-400">France &amp; International</span></>
              ) : (
                <>Drone &amp; Robotic<br />Cleaning<br /><span className="text-orange-400">France &amp; International</span></>
              )}
            </h1>

            <div className="text-white space-y-6">
              <p className="text-sm md:text-xl font-bold drop-shadow-md">
                {isFr
                  ? "Panneaux solaires · Façades · Toitures · Thermographie · Frelons — Certifiés DGAC/EASA"
                  : "Solar panels · Facades · Roofs · Thermography · Hornets — DGAC/EASA Certified"}
              </p>
              <div className="flex flex-wrap justify-center gap-2 font-bold px-2">
                <span onClick={() => scrollToSection('benefit-safety')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                  <Shield className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /><span className="text-[11px] md:text-xl uppercase">{t('quickStats.safety')}</span>
                </span>
                <span onClick={() => scrollToSection('benefit-speed')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                  <Zap className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /><span className="text-[11px] md:text-xl uppercase">{t('quickStats.fast')}</span>
                </span>
                <span onClick={() => scrollToSection('benefit-cost')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-all">
                  <BarChart3 className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /><span className="text-[11px] md:text-xl uppercase">{t('quickStats.economic')}</span>
                </span>
              </div>
              <p className="text-sm md:text-xl font-bold drop-shadow-md">
                {isFr
                  ? "Basés à Montpellier · France entière · International sur devis"
                  : "Based in Montpellier · All of France · International on request"}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                <div className="text-xl md:text-3xl font-bold text-white"><AnimatedCounter end={180000} suffix="m²" /></div>
                <div className="text-[10px] md:text-xs text-orange-200 font-bold uppercase tracking-widest mt-1">{isFr ? "Surfaces traitées" : "Treated surfaces"}</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                <div className="text-xl md:text-3xl font-bold text-white"><AnimatedCounter end={500} suffix="+" /></div>
                <div className="text-[10px] md:text-xs text-orange-200 font-bold uppercase tracking-widest mt-1">{isFr ? "Interventions" : "Interventions"}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/devis" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl uppercase tracking-wider">
                {t('hero.cta')}
              </Link>
              <button onClick={() => setIsVideoModalOpen(true)} className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 uppercase tracking-wider hover:bg-white/20 transition-all">
                <Play className="w-5 h-5 fill-current" />{isFr ? 'Voir la démo' : 'Watch Demo'}
              </button>
            </div>
          </div>
        </section>

        <CertificationsSection />
        <DroneBenefits />

        {/* PRESTATIONS */}
        <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50" id="prestations">
          <div className="container mx-auto max-w-[1400px]">
            <h2 className="text-2xl md:text-5xl font-black mb-4 text-center text-[#233B72] uppercase tracking-tighter">
              {isFr ? "Nos Prestations Drone & Robotique" : "Our Drone & Robotic Services"}
            </h2>
            <p className="text-center text-gray-500 font-medium mb-12 max-w-2xl mx-auto">
              {isFr
                ? "5 prestations spécialisées pour particuliers, syndics, industriels et exploitants solaires. Basés en Occitanie — France entière et international sur devis."
                : "5 specialized services for homeowners, property managers, industrials and solar operators. Based in Occitanie — all France and international on request."}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {homeServices.map((service, i) => (
                <ScrollReveal delay={0.1 * (i + 1)} key={service.key}>
                  <Hover3DCard className={`bg-white rounded-[2.5rem] shadow-lg border-t-8 h-full flex flex-col hover:shadow-2xl transition-all ${service.border}`}>
                    <img src={service.image} alt={isFr ? service.altFr : service.altEn} className="w-full h-40 object-cover rounded-t-3xl" loading="lazy" />
                    <div className="flex-grow p-5 flex flex-col">
                      <div className="flex-grow">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-4 mt-2">
                          <span className="text-gray-400 font-black text-lg">0{i + 1}</span>
                        </div>
                        <h3 className="text-sm md:text-xl font-black mb-2 text-[#233B72] leading-tight uppercase tracking-tighter">
                          {service.customTitle ? service.customTitle : t(`mainServices.${service.key}.title`)}
                        </h3>
                      </div>
                      <Link to={service.link} className="mt-4 pt-4 border-t border-gray-100 text-[#233B72] font-bold text-xs md:text-sm flex items-center hover:gap-2 hover:text-orange-500 transition-all">
                        {isFr ? 'Découvrir' : 'Discover'}<ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </Hover3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS */}
        <section id="avis" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-[#233B72] uppercase tracking-tighter">
              {t('testimonials.title')}
            </h2>
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
                  <img src={testimonials[currentTestimonial].image} className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-slate-50" alt="Avis client" />
                  <div>
                    <div className="font-black text-[#233B72] text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <button onClick={prevTestimonial} aria-label={isFr ? "Précédent" : "Previous"} className="p-4 rounded-xl bg-slate-50 shadow-md hover:bg-[#233B72] hover:text-white transition-all text-[#233B72]"><ChevronLeft /></button>
                  <button onClick={nextTestimonial} aria-label={isFr ? "Suivant" : "Next"} className="p-4 rounded-xl bg-slate-50 shadow-md hover:bg-[#233B72] hover:text-white transition-all text-[#233B72]"><ChevronRight /></button>
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
