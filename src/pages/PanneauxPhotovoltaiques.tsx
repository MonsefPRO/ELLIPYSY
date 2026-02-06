import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ChevronRight, 
  Award,
  Leaf,
  Droplets,
  Target,
  Cpu // Ajouté pour symboliser la robotique
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function PanneauxPhotovoltaiques() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/rony.jpg" 
            className="w-full h-full object-cover scale-110"
            alt={t('servicesSection.industrial2.title')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              {t('servicesSection.industrial2.title')}
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-bold italic">
              {language === 'fr' ? "Maximisez votre production d'énergie solaire" : "Maximize your solar energy production"}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction Mise à jour */}
            <ScrollReveal>
              <section>
                <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  {language === 'fr' ? 'Performance & Robotique' : 'Performance & Robotics'}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium">
                  <p>
                    {language === 'fr' 
                      ? "Des panneaux encrassés perdent entre 20% et 30% de rendement énergétique. Pour contrer cette perte, Ellipsys déploie une double expertise unique : l'agilité du drone et la précision de la robotique spécialisée."
                      : "Dirty panels lose 20% to 30% in energy yield. To counter this loss, Ellipsys deploys a unique dual expertise: drone agility and specialized robotics precision."}
                  </p>
                  <p>
                    {language === 'fr'
                      ? "Nous utilisons des robots ultra-légers de 6kg et 9kg conçus pour le nettoyage sans brossage mécanique. Cette technologie permet un traitement à l'eau osmosée qui respecte l'intégrité de vos cellules photovoltaïques sans aucune pression abrasive."
                      : "We use ultra-light 6kg and 9kg robots designed for brushless cleaning. This technology allows for osmosed water treatment that respects the integrity of your photovoltaic cells without any abrasive pressure."}
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Équipements spécialisés - Robotique incluse */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                {language === 'fr' ? 'Équipements de pointe' : 'State-of-the-art Equipment'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: language === 'fr' ? "Robotique 6kg & 9kg" : "6kg & 9kg Robotics", 
                    desc: language === 'fr' ? "Nettoyage robotisé ultra-léger sans brossage mécanique pour une sécurité totale." : "Ultra-light robotic cleaning without mechanical brushing for total safety.", 
                    icon: Cpu 
                  },
                  { 
                    title: language === 'fr' ? "Drone Spécialisé" : "Specialized Drone", 
                    desc: language === 'fr' ? "Idéal pour les accès complexes, fortes pentes ou grandes surfaces agricoles." : "Ideal for complex access, steep slopes, or large agricultural areas.", 
                    icon: Zap 
                  },
                  { 
                    title: language === 'fr' ? "Eau Osmosée Pure" : "Pure Osmosed Water", 
                    desc: language === 'fr' ? "Séchage parfait sans résidus minéraux grâce à une eau filtrée à 99%." : "Perfect drying without mineral residues thanks to 99% filtered water.", 
                    icon: Droplets 
                  },
                  { 
                    title: "Analyse Thermique", 
                    desc: language === 'fr' ? "Détection des points chauds et défauts de cellules par caméra infrarouge." : "Detection of hot spots and cell defects via infrared camera.", 
                    icon: TrendingUp 
                  }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-amber-50 p-6 md:p-8 rounded-[2rem] border border-amber-100 flex items-start gap-5 h-full transition-all hover:bg-amber-100/50">
                      <div className="bg-white p-4 rounded-2xl shadow-md">
                        <item.icon className="w-6 h-6 text-amber-600" />
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

            {/* Avantages de la solution - Mise en avant du Zéro Risque */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                   {t('valeurs.whyChoose.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { 
                      t: language === 'fr' ? "Zéro Brossage" : "Zero Brushing", 
                      d: language === 'fr' ? "Nettoyage chimique doux et eau pure, sans abrasion mécanique." : "Gentle chemical cleaning and pure water, without mechanical abrasion.", 
                      icon: Shield 
                    },
                    { 
                      t: language === 'fr' ? "Poids Plume (6-9kg)" : "Ultra-Light (6-9kg)", 
                      d: language === 'fr' ? "Aucune contrainte structurelle sur vos châssis ou vos panneaux." : "No structural stress on your frames or panels.", 
                      icon: Target 
                    },
                    { 
                      t: language === 'fr' ? "Rapidité & ROI" : "Speed & ROI", 
                      d: language === 'fr' ? "Intervention rapide pour un retour immédiat de votre rendement." : "Fast intervention for an immediate return of your yield.", 
                      icon: TrendingUp 
                    },
                    { 
                      t: language === 'fr' ? "Sécurité Sol" : "Ground Safety", 
                      d: language === 'fr' ? "Techniciens au sol, risques de chute ou d'arc électrique éliminés." : "Technicians on the ground, fall or electric arc risks eliminated.", 
                      icon: Zap 
                    }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-5 p-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200">
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

            {/* Garanties de Service */}
            <section className="bg-gradient-to-br from-gray-900 to-[#233B72] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Award size={250} />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-12 text-center uppercase tracking-[0.2em] text-amber-400 italic">
                {language === 'fr' ? 'Garanties & Certifications' : 'Guarantees & Certifications'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {[
                  t('prestations.hero.certified'), 
                  language === 'fr' ? 'RC Pro Spécifique' : 'Specific Liability', 
                  t('prestations.hero.compliant2026'), 
                  'Expertise Solaire', 
                  language === 'fr' ? 'Assurance décennale ' : 'Ten-year insurance', 
                  'Respect Normes VDE'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 flex flex-col items-center gap-4 transition-colors hover:bg-white/10">
                    <Award className="w-8 h-8 text-amber-400" />
                    <span className="text-xs md:text-sm font-black uppercase tracking-wider leading-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Solaire */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                  {language === 'fr' ? 'Boostez votre ROI' : 'Boost your ROI'}
                </h3>
                <p className="mb-8 text-amber-50 font-medium leading-relaxed">
                  {language === 'fr' 
                    ? 'Récupérez jusqu\'à 30% de rendement grâce à nos robots ultra-légers.' 
                    : 'Recover up to 30% yield thanks to our ultra-light robots.'}
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-orange-600 py-5 rounded-2xl font-black text-center block hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                >
                  {t('nav.quote')}
                </Link>
              </div>

              {/* Atouts Rapides */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                   {language === 'fr' ? 'Spécifications' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Cpu, title: 'Poids Robot', val: '6 - 9kg' },
                    { icon: Droplets, title: 'Technologie', val: language === 'fr' ? 'Sans brosse' : 'Brushless' },
                    { icon: TrendingUp, title: 'Rendement', val: '+30%' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-amber-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-amber-600" /></div>
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-sm font-black text-orange-600">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                   {language === 'fr' ? 'AUTRES PRESTATIONS' : 'OTHER SERVICES'}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.facade.title')}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.demoussage.title')}
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
