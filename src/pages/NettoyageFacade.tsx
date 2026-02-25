import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Target, 
  Clock, 
  ChevronRight, 
  CheckCircle,
  Wind,
  Droplets,
  ThermometerSun,
  Award,
  Building
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
                  { title: language === 'fr' ? "Drone Spécialisé" : "Specialized Drone", desc: language === 'fr' ? "Accès sécurisé et rapide aux grandes hauteurs." : "Secure and fast access to great heights.", icon: Wind },
                  { title: language === 'fr' ? "Basse Pression Douce" : "Gentle Low Pressure", desc: language === 'fr' ? "Préserve l'intégrité de vos crépis et enduits." : "Preserves the integrity of your plaster and coatings.", icon: Droplets },
                  { title: language === 'fr' ? "Produits Bio Performants" : "Eco-friendly Products", desc: language === 'fr' ? "Nettoyants respectueux de l'environnement (certifiés AB)." : "Environmentally friendly cleaners.", icon: Leaf },
                  { title: "Diagnostic HD", desc: language === 'fr' ? "Inspection détaillée de la façade avant intervention." : "Detailed facade inspection before intervention.", icon: Target }
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

            {/* Avantages de la solution - Format Photovoltaïque */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  {t('benefits.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { t: language === 'fr' ? "Zéro Échafaudage" : "Zero Scaffolding", d: language === 'fr' ? "Pas de montage, pas de gêne pour les occupants." : "No setup, no disturbance for occupants.", icon: Building },
                    { t: language === 'fr' ? "Sécurité Absolue" : "Absolute Safety", d: language === 'fr' ? "Aucun technicien en hauteur, risque de chute nul." : "No technician at height, zero fall risk.", icon: ShieldCheck },
                    { t: language === 'fr' ? "Intervention Rapide" : "Fast Intervention", d: language === 'fr' ? "Temps de traitement divisé par 3." : "Treatment time divided by 3.", icon: Clock },
                    { t: language === 'fr' ? "Protection des Façades" : "Facade Protection", d: language === 'fr' ? "Nettoyage chimique doux sans contact mécanique." : "Gentle chemical cleaning without mechanical contact.", icon: Droplets }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-5 p-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-brand-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-200">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 uppercase text-sm tracking-tight mb-1">{benefit.t}</h4>
                        <p className="text-sm text-gray-600 font-medium leading-snug">{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Garanties de Service (Déplacé ici pour uniformiser) */}
            <section className="bg-gradient-to-br from-gray-900 to-[#233B72] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Award size={250} />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-12 text-center uppercase tracking-[0.2em] text-blue-400 italic">
                {language === 'fr' ? 'Garanties & Sécurité' : 'Guarantees & Security'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {[
                  t('prestations.hero.certified'), 
                  language === 'fr' ? 'RC Pro Complète' : 'Full Liability', 
                  language === 'fr' ? 'Respect des Enduits' : 'Coating Respect', 
                  language === 'fr' ? 'Pilotes Pro' : 'Pro Pilots', 
                  language === 'fr' ? 'Sécurité Urbaine' : 'Urban Safety', 
                  language === 'fr' ? 'Produits Certifiés' : 'Certified Products'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 flex flex-col items-center gap-4 transition-colors hover:bg-white/10">
                    <Award className="w-8 h-8 text-blue-400" />
                    <span className="text-xs md:text-sm font-black uppercase tracking-wider leading-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
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
                    ? 'Confiez votre façade à nos experts pour un résultat irréprochable sans nacelle.' 
                    : 'Entrust your facade to our experts for a flawless result without a lift.'}
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-[#233B72] py-5 rounded-2xl font-black text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                >
                  {t('nav.quote')}
                </Link>
              </div>

              {/* Atouts Rapides - Format Spécifications */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {language === 'fr' ? 'Spécifications' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Building, title: language === 'fr' ? 'Échafaudage' : 'Scaffolding', val: 'Zéro' },
                    { icon: Wind, title: language === 'fr' ? 'Hauteur Max' : 'Max Height', val: '+ 40 mètres' },
                    { icon: Droplets, title: language === 'fr' ? 'Pression' : 'Pressure', val: language === 'fr' ? 'Basse (Douce)' : 'Low (Gentle)' },
                    { icon: Leaf, title: 'Produits', val: 'Bio / Certifiés' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-sky-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-blue-500" /></div>
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-sm font-black text-[#233B72]">{item.val}</span>
                    </div>
                  ))}
                </div>
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

      <Footer />
    </div>
  );
}
