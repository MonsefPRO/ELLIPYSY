import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Droplets, 
  CheckCircle, 
  ChevronRight, 
  AlertTriangle,
  Home,
  Waves
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Demoussage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Demoussage drone 1.jpg" 
            className="w-full h-full object-cover scale-110"
            alt={t('demoussage.hero.title')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tighter">
              {t('demoussage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-bold italic">
              {t('demoussage.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction */}
            <ScrollReveal>
              <section>
                <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-10 bg-emerald-500 rounded-full"></div>
                  {language === 'fr' ? 'Innovation & Patrimoine' : 'Innovation & Heritage'}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium">
                  <p dangerouslySetInnerHTML={{ __html: t('demoussage.intro.paragraph1') }} />
                  <p dangerouslySetInnerHTML={{ __html: t('demoussage.intro.paragraph2') }} />
                </div>
              </section>
            </ScrollReveal>

            {/* Box Alerte Vitale (Bento Style) */}
            <section className="bg-amber-50 rounded-[2.5rem] p-8 md:p-10 border border-amber-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 p-4">
                <AlertTriangle size={120} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-black text-amber-800 mb-8 flex items-center gap-3 uppercase tracking-tight">
                <Shield className="w-7 h-7" />
                {t('demoussage.why.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {[
                  t('demoussage.why.reason1'),
                  t('demoussage.why.reason2'),
                  t('demoussage.why.reason3'),
                  t('demoussage.why.reason4')
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl border border-amber-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-900 font-bold text-sm md:text-base leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Méthode d'intervention (Grille Bento) */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                {t('demoussage.method.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: t('demoussage.method.step1.title'), desc: t('demoussage.method.step1.description'), icon: Waves },
                  { title: t('demoussage.method.step2.title'), desc: t('demoussage.method.step2.description'), icon: Zap },
                  { title: t('demoussage.method.step3.title'), desc: t('demoussage.method.step3.description'), icon: Droplets },
                  { title: t('demoussage.method.step4.title'), desc: t('demoussage.method.step4.description'), icon: Shield }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-emerald-50 p-6 md:p-8 rounded-[2rem] border border-emerald-100 flex items-start gap-5 h-full transition-colors hover:bg-emerald-100/50">
                      <div className="bg-white p-4 rounded-2xl shadow-md">
                        <item.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#233B72] text-lg mb-2 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </Hover3DCard>
                ))}
              </div>
            </section>

            {/* Supports traités */}
            <ScrollReveal delay={0.2}>
              <section className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner text-center">
                <h3 className="text-2xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                   {t('demoussage.roofTypes.title')}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    language === 'fr' ? 'Tuiles' : 'Tiles',
                    language === 'fr' ? 'Ardoises' : 'Slates',
                    'Zinc',
                    language === 'fr' ? 'Bac acier' : 'Steel deck',
                    language === 'fr' ? 'Toits plats' : 'Flat roofs',
                    'Industrial',
                    'Monuments'
                  ].map((type, idx) => (
                    <span key={idx} className="px-6 py-3 bg-white text-emerald-700 font-black rounded-xl border border-emerald-100 shadow-sm transition-all hover:scale-105 hover:bg-emerald-50 cursor-default uppercase text-xs tracking-widest">
                      {type}
                    </span>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Vert */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">
                  {t('demoussage.sidebar.quoteTitle')}
                </h3>
                <p className="mb-8 text-emerald-50 font-medium relative z-10 leading-relaxed">
                  {t('demoussage.sidebar.quoteSubtitle')}
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-emerald-700 py-5 rounded-2xl font-black text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                >
                  {t('demoussage.sidebar.quoteButton')}
                </Link>
              </div>

              {/* Atouts Rapides */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                   {language === 'fr' ? 'Pourquoi le drone ?' : 'Why Drones?'}
                </h4>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="bg-emerald-50 p-2 rounded-lg"><Shield className="w-5 h-5 text-emerald-500" /></div>
                    {language === 'fr' ? 'Sécurité : Zéro risque de chute' : 'Safety: Zero fall risk'}
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="bg-emerald-50 p-2 rounded-lg"><Zap className="w-5 h-5 text-emerald-500" /></div>
                    {language === 'fr' ? 'Rapidité : 3x plus vite' : 'Speed: 3x faster'}
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="bg-emerald-50 p-2 rounded-lg"><Home className="w-5 h-5 text-emerald-500" /></div>
                    {language === 'fr' ? 'Intégrité : Aucune tuile cassée' : 'Integrity: No broken tiles'}
                  </li>
                </ul>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                   {t('footer.services')}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all">
                    <span className="text-blue-100 group-hover:text-white font-bold text-sm">{t('mainServices.facade.title')}</span>
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all">
                    <span className="text-blue-100 group-hover:text-white font-bold text-sm">{t('servicesSection.industrial2.title')}</span>
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
