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
  Target
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';

export default function PanneauxPhotovoltaiques() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/rony.jpg" 
            className="w-full h-full object-cover scale-110"
            alt="Nettoyage de panneaux photovoltaïques par drone"
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
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6">
              Nettoyage de Panneaux Photovoltaïques
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-medium">
              Maximisez votre production d'énergie solaire
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
                <h2 className="text-3xl font-bold text-[#233B72] mb-6 flex items-center gap-3">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  Optimisez votre rendement
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                  <p>
                    Des panneaux encrassés par la poussière, le pollen ou la pollution perdent <strong>jusqu'à 30 % de leur capacité de production</strong>. Un entretien régulier est la clé de la rentabilité de votre installation.
                  </p>
                  <p>
                    Grâce à notre solution de nettoyage par drone, vous bénéficiez d'une intervention <strong>sans aucun contact physique</strong>, éliminant tout risque de rayures ou de micro-fissures sur vos cellules photovoltaïques.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Équipements spécialisés (Grille Bento) */}
            <section>
              <h2 className="text-2xl font-bold text-[#233B72] mb-8 uppercase tracking-wider">Équipements de pointe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Drone Spécialisé", desc: "Certifié pour le traitement de grandes surfaces", icon: Zap },
                  { title: "Basse Pression", desc: "Nettoyage doux respectant les normes constructeurs", icon: Droplets },
                  { title: "Eau Osmosée", desc: "Séchage parfait sans aucun résidu minéral", icon: Sun },
                  { title: "Thermique HD", desc: "Détection des points chauds et défauts de cellules", icon: TrendingUp }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4 h-full">
                      <div className="bg-white p-3 rounded-xl shadow-sm">
                        <item.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Hover3DCard>
                ))}
              </div>
            </section>

            {/* Avantages de la solution (Cartes horizontales) */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#233B72] mb-8 text-center md:text-left">Pourquoi choisir Ellipsys ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { t: "Zéro Contact", d: "Aucune pression mécanique, aucune rayure garantie.", icon: Shield },
                    { t: "Sécurité Totale", d: "Risque électrique nul pour les techniciens au sol.", icon: Zap },
                    { t: "Vitesse d'exécution", d: "Intervention jusqu'à 5x plus rapide qu'en manuel.", icon: Target },
                    { t: "Rentabilité (ROI)", d: "Retour sur investissement immédiat via le gain d'énergie.", icon: TrendingUp }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-4 hover:bg-amber-50 rounded-xl transition-colors border border-transparent hover:border-amber-100">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{benefit.t}</h4>
                        <p className="text-sm text-gray-600">{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Garanties de Service (Style Dark) */}
            <section className="bg-gradient-to-br from-gray-900 to-[#233B72] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Award size={200} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-10 text-center uppercase tracking-[0.2em] text-amber-400">Garanties & Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {[
                  'Certifié DGAC', 'RC Pro Électricité', 'Normes 2026', 'Expertise PV', 'Garantie 10 ans', 'Eco-Responsable'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10 flex flex-col items-center gap-3">
                    <Award className="w-6 h-6 text-amber-400" />
                    <span className="text-xs md:text-sm font-bold">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Solaire */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden text-center">
                <Sun className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Augmentez vos revenus</h3>
                <p className="mb-8 text-amber-100">
                  Nos experts analysent vos pertes de rendement et interviennent sous 48h.
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-orange-600 py-4 rounded-xl font-bold text-center block hover:bg-gray-900 hover:text-white transition-all shadow-lg"
                >
                  Devis Gratuit
                </Link>
              </div>

              {/* Atouts Rapides */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#233B72] mb-4 uppercase text-xs tracking-widest">Performance Directe</h4>
                <div className="space-y-5">
                  {[
                    { icon: TrendingUp, title: 'Rendement', val: '+30%' },
                    { icon: Shield, title: 'Protection', val: 'Zéro rayure' },
                    { icon: Leaf, title: 'Bio', val: 'Écologique' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-700">{item.title}</span>
                      </div>
                      <span className="text-sm font-extrabold text-[#233B72]">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4 text-sm text-center">AUTRES PRESTATIONS</h4>
                <div className="space-y-2">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-amber-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-amber-700 font-medium">Nettoyage façade</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-amber-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-amber-700 font-medium">Démoussage toiture</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
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
