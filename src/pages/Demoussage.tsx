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
  Waves,
  Building,
  ThermometerSun,
  Award,
  Sparkles
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Demoussage drone 1.jpg" 
            className="w-full h-full object-cover scale-110"
            alt={t('demoussage.hero.title')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-800/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {t('demoussage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-bold italic drop-shadow-md">
              {language === 'fr' 
                ? 'Curatif, préventif et surtout : Zéro tuile cassée.' 
                : 'Curative, preventive and above all: Zero broken tiles.'}
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
                  {language === 'fr' ? 'Protéger votre toiture sans l\'abîmer' : 'Protecting your roof without damaging it'}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                  <p>
                    {language === 'fr' 
                      ? "Mousses, lichens et champignons ne sont pas qu'un problème esthétique. Leurs micro-racines s'infiltrent dans les tuiles et les rendent poreuses. En hiver, l'eau gorgée dans la mousse gèle, fait éclater la tuile et provoque des infiltrations graves dans votre charpente."
                      : "Moss, lichens and fungi are not just an aesthetic problem. Their micro-roots infiltrate the tiles and make them porous. In winter, water soaked in the moss freezes, causing tiles to crack and leading to severe leaks in your roof structure."}
                  </p>
                  <p>
                    {language === 'fr'
                      ? "Le nettoyage manuel est risqué : marcher sur un toit ancien garantit presque toujours la casse de plusieurs tuiles. Ellipsys Solutions élimine ce risque à 100%. Nos drones pulvérisent à basse pression des traitements curatifs et préventifs directement depuis les airs. C'est plus rapide, ultra-efficace, et totalement sûr pour votre toiture."
                      : "Manual cleaning is risky: walking on an old roof almost always breaks tiles. Ellipsys eliminates this risk 100%. Our drones spray curative and preventive treatments at low pressure directly from the air. It's faster, highly effective, and completely safe for your roof."}
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Box Alerte Vitale - Les Dangers de la Mousse */}
            <ScrollReveal delay={0.1}>
              <section className="bg-amber-50 rounded-[2.5rem] p-8 md:p-10 border border-amber-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 p-4 pointer-events-none">
                  <AlertTriangle size={120} className="text-amber-600" />
                </div>
                <h3 className="text-2xl font-black text-amber-800 mb-8 flex items-center gap-3 uppercase tracking-tight relative z-10">
                  <Shield className="w-7 h-7" />
                  {t('demoussage.why.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  {[
                    language === 'fr' ? "Éclatement des tuiles par le gel en hiver." : "Tiles bursting due to frost in winter.",
                    language === 'fr' ? "Porosité accrue et perte d'imperméabilité." : "Increased porosity and loss of waterproofing.",
                    language === 'fr' ? "Infiltrations d'eau dans l'isolation thermique." : "Water infiltration into thermal insulation.",
                    language === 'fr' ? "Dégradation prématurée de la charpente." : "Premature degradation of the roof structure."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl border border-amber-100 shadow-sm hover:bg-white transition-colors">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-900 font-bold text-sm md:text-base leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* NOUVEAU BLOC SEO : Surfaces et Méthodologie */}
            <ScrollReveal delay={0.2}>
              <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                  <Home size={300} />
                </div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                      {language === 'fr' ? 'Toitures prises en charge' : 'Supported Roofs'}
                    </h3>
                    <ul className="space-y-4 font-medium text-emerald-100">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {language === 'fr' ? 'Tuiles canal, romanes, plates' : 'Canal, Roman, flat tiles'}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {language === 'fr' ? 'Ardoises naturelles et synthétiques' : 'Natural and synthetic slates'}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {language === 'fr' ? 'Bacs acier et toitures industrielles' : 'Steel decks and industrial roofs'}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {language === 'fr' ? 'Toits-terrasses et fibrociment' : 'Flat roofs and fiber cement'}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                      {language === 'fr' ? 'Double Action' : 'Dual Action'}
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Traitement Curatif' : 'Curative Treatment'}</h4>
                          <p className="text-sm text-emerald-200">{language === 'fr' ? 'Pulvérisation d\'un algicide/fongicide professionnel détruisant la mousse jusqu\'à la racine.' : 'Spraying of a professional algaecide/fungicide destroying moss down to the root.'}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Finition Hydrofuge' : 'Water Repellent Finish'}</h4>
                          <p className="text-sm text-emerald-200">{language === 'fr' ? 'Application d\'un hydrofuge pour imperméabiliser la tuile durablement et retarder le retour des végétaux.' : 'Application of a water repellent to durably waterproof the tile and delay the return of vegetation.'}</p>
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
                   {language === 'fr' ? 'Les Avantages du Drone' : 'Drone Benefits'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: language === 'fr' ? "Zéro Tuile Cassée" : "Zero Broken Tiles", d: language === 'fr' ? "Aucune pression mécanique humaine sur votre toiture." : "No human mechanical pressure on your roof.", icon: Home },
                    { t: language === 'fr' ? "Sécurité Humaine" : "Human Safety", d: language === 'fr' ? "Opération réalisée 100% depuis le sol, aucun risque d'accident." : "Operation performed 100% from the ground, no accident risk.", icon: Shield },
                    { t: language === 'fr' ? "Efficacité Éclair" : "Lightning Efficiency", d: language === 'fr' ? "Traitement de centaines de m² en un temps record." : "Treatment of hundreds of sqm in record time.", icon: Zap },
                    { t: language === 'fr' ? "Économique" : "Cost-Effective", d: language === 'fr' ? "Pas de nacelle, d'échafaudage ou de ligne de vie à installer." : "No lift, scaffolding or lifeline to install.", icon: Award }
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
              {/* Call to Action Vert */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">
                  {language === 'fr' ? 'Sauvez votre Toiture' : 'Save your Roof'}
                </h3>
                <p className="mb-8 text-emerald-50 font-medium relative z-10 leading-relaxed text-sm">
                  {language === 'fr' 
                    ? 'N\'attendez pas les fuites ou la casse. Demandez un devis gratuit pour éliminer la mousse durablement.' 
                    : 'Don\'t wait for leaks or breakage. Ask for a free quote to eliminate moss durably.'}
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-emerald-700 py-5 rounded-2xl font-black text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                >
                  {t('nav.quote')}
                </Link>
              </div>

              {/* Atouts Rapides - Format Spécifications (ENTIÈREMENT TRADUIT) */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {language === 'fr' ? 'Spécifications' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Home, title: language === 'fr' ? 'Intégrité' : 'Integrity', val: language === 'fr' ? 'Zéro Casse' : 'Zero Breakage' },
                    { icon: Droplets, title: language === 'fr' ? 'Technique' : 'Method', val: language === 'fr' ? 'Basse Pression' : 'Low Pressure' },
                    { icon: Sparkles, title: language === 'fr' ? 'Produit' : 'Product', val: language === 'fr' ? 'Algicide Pro' : 'Pro Algaecide' },
                    { icon: Shield, title: language === 'fr' ? 'Risque' : 'Risk', val: language === 'fr' ? 'Nul (Sol)' : 'None (Ground)' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-emerald-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-emerald-600" /></div>
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
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.facade.title')}
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
