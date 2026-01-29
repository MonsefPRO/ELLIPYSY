import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Shield,
  Droplets,
  AlertTriangle,
  Sun,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import CertificationsSection from '../components/CertificationsSection';
import { Hover3DCard } from '../components/Hover3DCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

export default function Prestations() {
  const { t } = useLanguage();

  const prestations = [
    {
      id: 'nettoyage-facade',
      title: t('prestations.service1.title'),
      description: t('prestations.service1.description'),
      image: '/ares.png',
      image2: '/chronos.jpg',
      link: '/prestations/nettoyage-facade',
      icon: Droplets,
      benefits: [
        t('prestations.service1.benefit1'),
        t('prestations.service1.benefit2'),
        t('prestations.service1.benefit3'),
        t('prestations.service1.benefit4'),
        t('prestations.service1.benefit5')
      ],
      color: 'sky'
    },
    {
      id: 'demoussage',
      title: t('prestations.service2.title'),
      description: t('prestations.service2.description'),
      image: '/Demoussage drone 1.jpg',
      image2: '/5kmh_et_jusqu’a_600m2_heure_de_traitement.png',
      link: '/prestations/demoussage',
      icon: Shield,
      benefits: [
        t('prestations.service2.benefit1'),
        t('prestations.service2.benefit2'),
        t('prestations.service2.benefit3'),
        t('prestations.service2.benefit4'),
        t('prestations.service2.benefit5')
      ],
      color: 'green'
    },
    {
      id: 'panneaux-photovoltaiques',
      title: t('prestations.service3.title'),
      description: t('prestations.service3.description'),
      image: '/rony.jpg',
      image2: '/rony4.jpg',
      link: '/prestations/panneaux-photovoltaiques',
      icon: Sun,
      benefits: [
        t('prestations.service3.benefit1'),
        t('prestations.service3.benefit2'),
        t('prestations.service3.benefit3'),
        t('prestations.service3.benefit4'),
        t('prestations.service3.benefit7')
      ],
      color: 'amber'
    },
    {
      id: 'elimination-frelons',
      title: t('prestations.service4.title'),
      description: t('prestations.service4.description'),
      image: '/abateur_de_frelons.png',
      image2: '/frel.png',
      link: '/prestations/elimination-frelons',
      icon: AlertTriangle,
      benefits: [
        t('prestations.service4.benefit1'),
        t('prestations.service4.benefit2'),
        t('prestations.service4.benefit3'),
        t('prestations.service4.benefit5'),
        t('prestations.service4.benefit6')
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      sky: { gradient: 'from-[#233B72] to-blue-600', text: 'text-[#233B72]', bg: 'bg-slate-50', border: 'border-blue-100' },
      green: { gradient: 'from-green-600 to-emerald-600', text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
      amber: { gradient: 'from-orange-500 to-amber-600', text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
      red: { gradient: 'from-red-600 to-rose-700', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' }
    };
    return colors[color] || colors.sky;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('prestations.hero.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            {t('prestations.hero.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8 md:mb-12 font-medium">
          <Link to="/" className="hover:text-[#233B72]">{t('prestations.breadcrumb.home')}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{t('prestations.breadcrumb.current')}</span>
        </nav>

        <div className="space-y-12 md:space-y-28">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            const colors = getColorClasses(prestation.color);
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={prestation.id} delay={0.1}>
                <Hover3DCard className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden p-6 md:p-12 lg:p-14">
                  <h2 className="text-2xl md:text-5xl font-black mb-8 md:mb-12 text-center lg:text-left text-[#233B72] leading-tight uppercase tracking-tighter">
                    {prestation.title}
                  </h2>

                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden rounded-3xl shadow-2xl">
                          <img src={prestation.image} alt={prestation.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute top-5 left-5">
                            <div className={`w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-2xl text-white`}>
                              <Icon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                          </div>
                        </div>
                        <div className="hidden lg:block h-72 relative overflow-hidden rounded-3xl shadow-lg border-4 border-white">
                          <img src={prestation.image2} alt={`${prestation.title} - Expertise`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify font-medium">
                        {prestation.description}
                      </p>

                      <div className={`${colors.bg} ${colors.border} border-2 rounded-[2rem] p-6 md:p-8 shadow-inner`}>
                        <h3 className="font-bold text-gray-900 mb-5 text-lg md:text-xl flex items-center gap-3 uppercase tracking-tight">
                          <CheckCircle className={`w-6 h-6 ${colors.text}`} />
                          {t('prestations.excellence.title')} :
                        </h3>
                        <ul className="space-y-4">
                          {prestation.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <div className={`w-6 h-6 rounded-full bg-white border-2 ${colors.border} flex items-center justify-center flex-shrink-0 mt-1 shadow-sm`}>
                                <div className={`w-2.5 h-2.5 rounded-full ${colors.gradient} bg-gradient-to-br`} />
                              </div>
                              <span className="text-gray-800 text-base md:text-lg font-bold">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-5 pt-6">
                        <Link
                          to={prestation.link}
                          className={`flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r ${colors.gradient} text-white px-8 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 uppercase tracking-wider`}
                        >
                          {t('prestations.service1.learnMore')}
                          <ChevronRight className="w-6 h-6" />
                        </Link>

                        <Link
                          to="/devis"
                          className={`flex-1 inline-flex items-center justify-center gap-3 border-2 ${colors.text} border-current px-8 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all active:scale-95 uppercase tracking-wider`}
                        >
                          {t('nav.quote')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Hover3DCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* SECTION CTA SUR-MESURE */}
        <div className="mt-24 md:mt-32 bg-gradient-to-br from-[#233B72] via-blue-900 to-black rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
              {t('prestations.cta.title')}
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium">
              {t('prestations.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/devis"
                className="bg-white text-[#233B72] px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest"
              >
                {t('hero.cta')}
                <ChevronRight className="w-6 h-6" />
              </Link>

              <a href="tel:0467209709" className="border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-widest">
                {t('contact.phone')}
              </a>
            </div>
          </div>
          {/* Lueurs décoratives */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 opacity-20 blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400 opacity-20 blur-[100px]"></div>
        </div>
      </div>
      <CertificationsSection />
      <Footer />
    </div>
  );
}
