import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Target, 
  Clock, 
  ChevronRight, 
  CheckCircle2,
  Wind,
  Droplets,
  ThermometerSun
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function NettoyageFacade() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ares.png" 
            className="w-full h-full object-cover scale-110"
            alt={t('prestations.service1.title')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233B72]/90 to-[#233B72]/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              {t('prestations.service1.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-bold italic">
              {language === 'fr' 
                ? 'La technologie au service de votre patrimoine' 
                : 'Technology at the service of your heritage'}
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
                  <div className="w-2 h-10 bg-brand-orange-500 rounded-full"></div>
                  {language === 'fr' ? "L'excellence du nettoyage aérien" : "Excellence in aerial cleaning"}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium">
                  <p dangerouslySetInnerHTML={{ __html: t('prestations.service1.description') }} />
                </div>
              </section>
            </ScrollReveal>

            {/* Équipements de pointe (Grille Bento) */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                {language === 'fr' ? 'Équipements de pointe' : 'State-of-the-art Equipment'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: language === 'fr' ? "Drone Spécialisé" : "Specialized Drone", desc: language === 'fr' ? "Accès sécurisé aux grandes hauteurs" : "Secure access to great heights", icon: Wind },
                  { title: language === 'fr' ? "Pression Adaptative" : "Adaptive Pressure", desc: language === 'fr' ? "Puissance réglée selon le support" : "Power adjusted according to substrate", icon: Droplets },
                  { title: "Produits Bio AB", desc: language === 'fr' ? "Nettoyants écologiques performants" : "High-performance eco-cleaners", icon: Leaf },
                  { title: "Thermique HD", desc: language === 'fr' ? "Diagnostic des zones critiques" : "Diagnostic of critical areas", icon: ThermometerSun }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-sky-50 p-6 md:p-8 rounded-[2rem] border border-sky-100 flex items-start gap-5 h-full transition-all hover:bg-sky-100/50">
                      <div className="bg-white p-4 rounded-2xl shadow-md">
                        <item.icon className="w-6 h-6 text-[#233B72]" />
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

            {/* Pourquoi choisir le drone ? */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  {t('benefits.title')}
                </h2>
                <div className="space-y-6">
                  {[
                    { t: t('prestations.service1.benefit1'), d: language === 'fr' ? "Zéro risque de chute pour les techniciens." : "Zero risk of falls for technicians.", icon: ShieldCheck },
                    { t: t('prestations.service1.benefit2'), d: language === 'fr' ? "Pas de montage d'échafaudage ou nacelle." : "No scaffolding or lift setup required.", icon: Clock },
                    { t: language === 'fr' ? "Économie Majeure" : "Major Savings", d: language === 'fr' ? "Réduction des coûts logistiques et matériels." : "Reduction in logistical and material costs.", icon: Target },
                    { t: t('prestations.service1.benefit7'), d: language === 'fr' ? "Nettoyage doux sans contact mécanique." : "Gentle cleaning without mechanical contact.", icon: CheckCircle2 }
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6 p-4 hover:bg-sky-50 rounded-2xl transition-all border border-transparent hover:border-sky-100">
                      <benefit.icon className="w-10 h-10 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900 uppercase tracking-tight text-lg">{benefit.t}</h4>
                        <p className="text-gray-600 font-medium leading-relaxed">{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Bleu */}
              <div className="bg-gradient-to-br from-[#233B72] to-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">
                  {language === 'fr' ? "Besoin d'un ravalement ?" : "Need a restoration?"}
                </h3>
                <p className="mb-8 text-blue-100 font-medium relative z-10 leading-relaxed">
                  {language === 'fr' 
                    ? 'Confiez votre façade à nos experts pour un résultat irréprochable et sécurisé.' 
                    : 'Entrust your facade to our experts for a flawless and safe result.'}
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-[#233B72] py-5 rounded-2xl font-black text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                >
                  {t('nav.quote')}
                </Link>
              </div>

              {/* Atouts Rapides */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {language === 'fr' ? 'Atouts Ellipsys' : 'Ellipsys Assets'}
                </h4>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="bg-sky-50 p-2 rounded-lg"><ShieldCheck className="w-5 h-5 text-blue-500" /></div>
                    {language === 'fr' ? 'Intervention sans nacelle' : 'No lift required'}
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="bg-sky-50 p-2 rounded-lg"><Zap className="w-5 h-5 text-blue-500" /></div>
                    {language === 'fr' ? 'Mise en place immédiate' : 'Immediate setup'}
                  </li>
                  <li className="flex items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="bg-sky-50 p-2 rounded-lg"><Leaf className="w-5 h-5 text-blue-500" /></div>
                    {t('prestations.hero.productsAB')}
                  </li>
                </ul>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                  {t('footer.services')}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.demoussage.title')}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('servicesSection.industrial2.title')}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Section Garanties Légales */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-16 tracking-[0.2em] uppercase">
            {language === 'fr' ? 'Garanties Légales' : 'Legal Guarantees'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="font-black text-xl mb-4 text-blue-400 uppercase tracking-tighter">{t('prestations.hero.certified')}</div>
              <p className="text-gray-400 font-medium">{language === 'fr' ? 'Pilotes homologués pour vols en zone urbaine' : 'Pilots certified for urban area flights'}</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="font-black text-xl mb-4 text-blue-400 uppercase tracking-tighter">{language === 'fr' ? 'PILOTES PRO' : 'PRO PILOTS'}</div>
              <p className="text-gray-400 font-medium">{language === 'fr' ? 'Formation continue et expertise technique' : 'Continuous training and technical expertise'}</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="font-black text-xl mb-4 text-blue-400 uppercase tracking-tighter">{language === 'fr' ? 'RC PRO COMPLÈTE' : 'FULL LIABILITY'}</div>
              <p className="text-gray-400 font-medium">{language === 'fr' ? "Assurance couvrant l'intégralité du chantier" : 'Insurance covering the entire work site'}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
