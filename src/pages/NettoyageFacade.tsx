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
  Award,
  Building,
  Factory,
  Warehouse,
  ClipboardCheck,
  Sparkles
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ares.png" 
            className="w-full h-full object-cover scale-110"
            alt={language === 'fr' ? 'Nettoyage de façade par drone' : 'Drone Facade Cleaning'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233B72]/95 to-[#233B72]/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {language === 'fr' ? 'Nettoyage de Façades par Drone' : 'Drone Facade Cleaning'}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-bold italic drop-shadow-md">
              {language === 'fr' 
                ? 'Syndics, Usines & Entrepôts : La solution sans échafaudage' 
                : 'Property Managers & Factories: The scaffolding-free solution'}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction SEO */}
            <ScrollReveal>
              <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-8 bg-brand-orange-500 rounded-full"></div>
                  {language === 'fr' ? "L'innovation au service de vos bâtiments" : "Innovation for your buildings"}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                  <p>
                    {language === 'fr' 
                      ? "Les pollutions atmosphériques, les micro-organismes (algues rouges, lichens, champignons) et les intempéries dégradent l'esthétique et l'intégrité de vos façades. Le nettoyage traditionnel nécessite l'installation lourde et coûteuse d'échafaudages ou de nacelles."
                      : "Atmospheric pollution, microorganisms, and weather degrade your facades. Traditional cleaning requires heavy and expensive scaffolding or lifts."}
                  </p>
                  <p>
                    {language === 'fr'
                      ? "Ellipsys Solutions révolutionne l'entretien de votre patrimoine immobilier grâce à l'intervention de drones télépilotés par nos experts certifiés DGAC. Nous pulvérisons des traitements de haute qualité professionnelle (gamme Ecolab) à basse pression, garantissant un résultat irréprochable sans aucune agression mécanique sur vos supports."
                      : "Ellipsys Solutions revolutionizes building maintenance with DGAC-certified drone pilots. We spray high-quality professional treatments (Ecolab) at low pressure, guaranteeing flawless results without mechanical damage."}
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* NOUVEAU BLOC SEO : À qui s'adresse notre solution ? */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {language === 'fr' ? 'Nos clients & Domaines d\'intervention' : 'Our Clients & Expertise'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: language === 'fr' ? 'Syndics & Copropriétés' : 'Property Managers', desc: language === 'fr' ? 'Aucune gêne pour les résidents. Entretien rapide des résidences et tours d\'habitation.' : 'No disturbance for residents. Fast maintenance of residential buildings.', icon: Building },
                    { title: language === 'fr' ? 'Directeurs d\'Usines' : 'Factory Directors', desc: language === 'fr' ? 'Nettoyage de bardages industriels sans arrêt de vos lignes de production.' : 'Industrial cladding cleaning without stopping production lines.', icon: Factory },
                    { title: language === 'fr' ? 'Entrepôts & Logistique' : 'Warehouses & Logistics', desc: language === 'fr' ? 'Traitement des immenses surfaces métalliques et façades commerciales.' : 'Treatment of massive metal surfaces and commercial facades.', icon: Warehouse }
                  ].map((target, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-colors">
                        <target.icon className="w-7 h-7 text-[#233B72] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-black text-[#233B72] text-lg mb-3 uppercase tracking-tight">{target.title}</h3>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">{target.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* NOUVEAU BLOC SEO : Surfaces et Méthodologie */}
            <ScrollReveal delay={0.2}>
              <section className="bg-[#233B72] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
                  <Building size={300} />
                </div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                      {language === 'fr' ? '100% des surfaces traitées' : '100% of surfaces treated'}
                    </h3>
                    <ul className="space-y-4 font-medium text-blue-100">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /> Enduits, Crépis et Peintures</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /> Bardages métalliques industriels</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /> Façades vitrées et murs-rideaux</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /> Briques, Pierres et Béton architectonique</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                      {language === 'fr' ? 'Notre Méthodologie' : 'Our Methodology'}
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Diagnostic & Sécurisation' : 'Diagnosis & Security'}</h4>
                          <p className="text-sm text-blue-200">{language === 'fr' ? 'Analyse du support et balisage de la zone d\'exclusion.' : 'Surface analysis and exclusion zone marking.'}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Pulvérisation Drone' : 'Drone Spraying'}</h4>
                          <p className="text-sm text-blue-200">{language === 'fr' ? 'Application uniforme de notre solution professionnelle Ecolab.' : 'Uniform application of our professional Ecolab solution.'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Avantages de la solution */}
            <ScrollReveal delay={0.3}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  {t('benefits.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { t: language === 'fr' ? "Zéro Échafaudage" : "Zero Scaffolding", d: language === 'fr' ? "Pas de montage, économie drastique sur les coûts annexes." : "No setup, drastic savings on additional costs.", icon: Building },
                    { t: language === 'fr' ? "Sécurité Légale" : "Legal Safety", d: language === 'fr' ? "Pilotes certifiés DGAC, aucun risque de chute (Plan de Prévention allégé)." : "DGAC certified pilots, zero fall risk.", icon: ShieldCheck },
                    { t: language === 'fr' ? "Produits Ecolab" : "Ecolab Products", d: language === 'fr' ? "Efficacité redoutable contre les pollutions urbaines et biologiques." : "Highly effective against urban and biological pollution.", icon: Sparkles },
                    { t: language === 'fr' ? "Basse Pression" : "Low Pressure", d: language === 'fr' ? "Nettoyage chimique doux qui n'altère ni la peinture ni l'enduit." : "Gentle chemical cleaning that doesn't alter paint or plaster.", icon: Droplets }
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

          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Bleu */}
              <div className="bg-gradient-to-br from-[#233B72] to-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">
                  {language === 'fr' ? "Devis pour professionnels" : "Quote for Professionals"}
                </h3>
                <p className="mb-8 text-blue-100 font-medium relative z-10 leading-relaxed text-sm">
                  {language === 'fr' 
                    ? 'Syndics, industriels, gestionnaires : obtenez votre étude chiffrée sous 48h pour vos façades et bardages.' 
                    : 'Property managers, industrials: get your estimate within 48h for your facades.'}
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
                  {language === 'fr' ? 'Fiche Technique' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: ShieldCheck, title: 'Légalité', val: 'Certifié DGAC' },
                    { icon: Wind, title: language === 'fr' ? 'Hauteur Max' : 'Max Height', val: 'Accès illimité' },
                    { icon: Sparkles, title: 'Traitement', val: 'Gamme Ecolab' },
                    { icon: ClipboardCheck, title: 'Risque', val: 'Zéro chute (0%)' }
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
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('servicesSection.industrial2.title')}
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 group-hover:translate-x-1" />
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
