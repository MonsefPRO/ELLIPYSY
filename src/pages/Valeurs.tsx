import { ChevronRight, Heart, Award, Leaf, Cpu, CheckCircle, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import { Hover3DCard } from '../components/Hover3DCard';
import { ScrollReveal } from '../components/ScrollReveal';
import Footer from '../components/Footer';

const getColorClasses = (color: string) => {
  const colors: { [key: string]: { gradient: string; text: string; bg: string; border: string } } = {
    red: { gradient: 'from-red-500 to-rose-600', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    sky: { gradient: 'from-sky-500 to-blue-600', text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
    gray: { gradient: 'from-gray-600 to-slate-700', text: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200' },
    green: { gradient: 'from-green-500 to-emerald-600', text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    blue: { gradient: 'from-blue-500 to-indigo-600', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' }
  };
  return colors[color] || colors.sky;
};

export default function Valeurs() {
  const { t } = useLanguage();

  const valeurs = [
    {
      id: 'securite',
      title: t('benefits.safety.title'),
      description: t('valeurs.value1.description'),
      image: '/nnewsecu.png',
      icon: Shield,
      color: 'red',
      items: [
        t('valeurs.value1.item1'),
        t('valeurs.value1.item2'),
        t('valeurs.value1.item3'),
        t('valeurs.value1.item4')
      ]
    },
    {
      id: 'rigueur',
      title: t('valeurs.value2.title'),
      description: t('valeurs.value2.description'),
      image: '/newrig.png',
      icon: Award,
      color: 'gray',
      items: [
        t('valeurs.value2.item1'),
        t('valeurs.value2.item2'),
        t('valeurs.value2.item3'),
        t('valeurs.value2.item4')
      ]
    },
    {
      id: 'bienveillance',
      title: t('valeurs.value1.title'), // Clé correspondant à Benevolence/Bienveillance
      description: t('valeurs.value1.description'),
      image: '/bienveillance.png',
      icon: Heart,
      color: 'sky',
      items: [
        t('valeurs.value1.item1'),
        t('valeurs.value1.item2'),
        t('valeurs.value1.item3'),
        t('valeurs.value1.item4')
      ]
    },
    {
      id: 'eco',
      title: t('valeurs.value3.title'),
      description: t('valeurs.value3.description'),
      image: '/eco.png',
      icon: Leaf,
      color: 'green',
      items: [
        t('valeurs.value3.item1'),
        t('valeurs.value3.item2'),
        t('valeurs.value3.item3'),
        t('valeurs.value3.item4')
      ]
    },
    {
      id: 'technologie',
      title: t('valeurs.value4.title'),
      description: t('valeurs.value4.description'),
      image: '/fr.png',
      icon: Cpu,
      color: 'blue',
      items: [
        t('valeurs.value4.item1'),
        t('valeurs.value4.item2'),
        t('valeurs.value4.item3'),
        t('valeurs.value4.item4')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION HARMONISÉE */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>

        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('valeurs.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            {t('valeurs.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8 md:mb-12">
          <Link to="/" className="hover:text-sky-600">{t('valeurs.breadcrumb.home')}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold uppercase tracking-tight">{t('valeurs.breadcrumb.current')}</span>
        </nav>

        <div className="space-y-12 md:space-y-24">
          {valeurs.map((valeur, index) => {
            const Icon = valeur.icon;
            const colors = getColorClasses(valeur.color);
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={valeur.id} delay={0.1}>
                <Hover3DCard className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden p-5 md:p-10 lg:p-12">
                  <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-10 text-center lg:text-left uppercase tracking-tighter" style={{ color: '#233B72' }}>
                    {valeur.title}
                  </h2>

                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                      <div className="h-40 sm:h-56 md:h-[400px] relative overflow-hidden rounded-3xl shadow-lg">
                        <img
                          src={valeur.image}
                          alt={valeur.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 md:top-4 md:left-4">
                          <div className={`w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">
                      <p className="text-gray-600 leading-relaxed text-base md:text-xl font-bold italic">
                        {valeur.description}
                      </p>
                      <div className={`${colors.bg} ${colors.border} border-2 rounded-[2rem] p-5 md:p-8 shadow-inner`}>
                        <h3 className="font-black text-gray-800 mb-4 text-md md:text-lg uppercase tracking-wider">{t('valeurs.whyChoose.subtitle')} :</h3>
                        <ul className="space-y-3">
                          {valeur.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className={`w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm`}>
                                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm md:text-lg font-bold">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Hover3DCard>
              </ScrollReveal>
            );
          })}
        </div>
        
        {/* BANNIÈRE CTA */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-[#233B72] via-blue-800 to-black rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <Mail className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl md:text-5xl font-black mb-4 px-2 uppercase tracking-tighter">{t('valeurs.cta.title')}</h2>
            <p className="text-base md:text-2xl text-sky-100 mb-8 max-w-2xl mx-auto px-4 font-medium">
              {t('valeurs.cta.subtitle')}
            </p>
            <Link to="/devis" className="inline-flex items-center gap-2 bg-white text-[#233B72] px-10 py-5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-2xl text-xl uppercase tracking-widest">
              {t('valeurs.cta.button')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
