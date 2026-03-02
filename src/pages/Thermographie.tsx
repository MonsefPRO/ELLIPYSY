import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  Clock, 
  ChevronRight, 
  CheckCircle,
  Thermometer,
  Activity,
  FileText,
  Camera,
  Sun,
  Building2,
  Factory,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Thermographie() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/bannerthermo.png" 
            className="w-full h-full object-cover scale-110"
            alt={language === 'fr' ? 'Thermographie par drone' : 'Drone Thermography'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {language === 'fr' ? 'Thermographie & Inspections' : 'Thermography & Inspections'}
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 font-bold italic drop-shadow-md">
              {language === 'fr' 
                ? 'Aide à la décision pour industriels et gestionnaires d\'actifs.' 
                : 'Decision support for industrials and asset managers.'}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction SEO + Image thermo1.png */}
            <ScrollReveal>
              <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-gray-100 overflow-hidden">
                <h2 className="text-3xl font-black text-[#233B72] mb-8 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-8 bg-brand-orange-500 rounded-full"></div>
                  {language === 'fr' ? 'Détectez l\'invisible, sécurisez vos actifs' : 'Detect the invisible, secure your assets'}
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                    <p>
                      {language === 'fr' 
                        ? "La thermographie par drone permet d’identifier, mesurer et qualifier les anomalies thermiques sans aucune interruption d’exploitation. Elle s’intègre dans une stratégie globale de maintenance préventive, de maîtrise des risques (QHSE) et d’optimisation de la performance énergétique."
                        : "Drone thermography identifies, measures, and qualifies thermal anomalies without any operational interruption. It integrates into a global strategy of preventive maintenance, risk management (QHSE), and energy performance optimization."}
                    </p>
                    <p>
                      {language === 'fr'
                        ? "Notre approche « Grand Compte » ne se limite pas à la simple détection d’anomalies. Elle vise à produire une donnée radiométrique exploitable, traçable et directement intégrable dans vos processus d'audit. Objectif : réduire les pertes de production et anticiper les défaillances critiques."
                        : "Our 'Key Account' approach goes beyond simple anomaly detection. It aims to produce actionable, traceable radiometric data that directly integrates into your audit processes. Goal: reduce production losses and anticipate critical failures."}
                    </p>
                  </div>
                  
                  {/* IMAGE 1 */}
                  <div className="h-64 lg:h-full min-h-[300px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group">
                    <img 
                      src="/thermo1.png" 
                      alt="Inspection thermographique" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Applications Ciblées + Image thermo2.png */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {language === 'fr' ? 'Applications Industrielles' : 'Industrial Applications'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: language === 'fr' ? 'Centrales Photovoltaïques' : 'Solar Power Plants', desc: language === 'fr' ? 'Détection de hotspots, modules défectueux, déséquilibres de strings et défauts de connectique.' : 'Detection of hotspots, defective modules, string imbalances, and connection faults.', icon: Sun },
                    { title: language === 'fr' ? 'Bâtiments Industriels' : 'Industrial Buildings', desc: language === 'fr' ? 'Diagnostic des déperditions thermiques, défauts d’isolation, infiltrations et ponts thermiques.' : 'Diagnosis of heat loss, insulation defects, infiltrations, and thermal bridges.', icon: Building2 },
                    { title: language === 'fr' ? 'Sites & Processus' : 'Sites & Processes', desc: language === 'fr' ? 'Contrôle des armoires électriques, réseaux de chaleur et équipements soumis à échauffement.' : 'Inspection of electrical cabinets, heating networks, and equipment subject to overheating.', icon: Factory }
                  ].map((target, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full">
                      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-colors">
                        <target.icon className="w-7 h-7 text-brand-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-black text-[#233B72] text-lg mb-3 uppercase tracking-tight">{target.title}</h3>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed flex-grow">{target.desc}</p>
                    </div>
                  ))}
                </div>
                
                {/* IMAGE 2 EN BANNIÈRE */}
                <div className="mt-8 h-64 md:h-80 w-full rounded-[2.5rem] overflow-hidden shadow-xl relative group border border-gray-100">
                  <img 
                    src="/thermo2.png" 
                    alt="Domaines d'intervention thermographique" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233B72]/40 to-transparent"></div>
                </div>
              </section>
            </ScrollReveal>

            {/* Équipement & Données Techniques + Image thermo3.png */}
            <ScrollReveal delay={0.15}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {language === 'fr' ? 'Technologie & Précision' : 'Technology & Precision'}
                </h2>
                
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* IMAGE 3 (Colonne de gauche) */}
                  <div className="lg:col-span-5 h-64 lg:h-auto rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 relative group">
                    <img 
                      src="/thermo3.png" 
                      alt="Équipement radiométrique" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* CARTES ÉQUIPEMENTS (Colonne de droite) */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: language === 'fr' ? "Capteur Radiométrique" : "Radiometric Sensor", desc: language === 'fr' ? "Caméra thermique haute résolution (VOx 640×512, 30 Hz)." : "High-res thermal camera (VOx 640×512, 30 Hz).", icon: Camera },
                      { title: language === 'fr' ? "Double Lecture" : "Dual View", desc: language === 'fr' ? "Corrélation immédiate IR / Spectre visible." : "Immediate IR / Visible spectrum correlation.", icon: Activity },
                      { title: language === 'fr' ? "Norme IEC" : "IEC Standard", desc: language === 'fr' ? "Méthodologie PV alignée TS 62446-3." : "PV Methodology aligned with TS 62446-3.", icon: ShieldCheck },
                      { title: language === 'fr' ? "Télémètre Laser" : "Laser Rangefinder", desc: language === 'fr' ? "Géolocalisation précise jusqu'à 1800m." : "Precise geolocation up to 1800m.", icon: Target }
                    ].map((item, idx) => (
                      <Hover3DCard key={idx}>
                        <div className="bg-slate-50 p-5 rounded-[1.5rem] border border-slate-200 flex flex-col gap-4 h-full transition-all hover:bg-white hover:shadow-md">
                          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 w-fit">
                            <item.icon className="w-5 h-5 text-brand-orange-500" />
                          </div>
                          <div>
                            <h3 className="font-black text-[#233B72] text-sm mb-1 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                          </div>
                        </div>
                      </Hover3DCard>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Méthodologie (Fond sombre) */}
            <ScrollReveal delay={0.2}>
              <section className="bg-[#233B72] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
                  <Thermometer size={300} />
                </div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                      {language === 'fr' ? 'Livrables Techniques' : 'Technical Deliverables'}
                    </h3>
                    <ul className="space-y-4 font-medium text-blue-100">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Rapport PDF structuré (synthèse, tableaux)' : 'Structured PDF report (summary, tables)'}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Images radiométriques et visibles (16 bits)' : 'Radiometric and visible images (16 bits)'}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Localisation géoréférencée des défauts' : 'Georeferenced localization of defects'}</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Recommandations de maintenance O&M' : 'O&M maintenance recommendations'}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                      {language === 'fr' ? 'Méthodologie d\'intervention' : 'Intervention Methodology'}
                    </h3>
                    <div className="space-y-5">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-orange-500/20 border border-brand-orange-500 flex items-center justify-center font-bold text-brand-orange-400 shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Cadrage HSE' : 'HSE Scoping'}</h4>
                          <p className="text-sm text-blue-200">{language === 'fr' ? 'Analyse du site, contraintes d’exploitation et plan de vol.' : 'Site analysis, operational constraints, and flight plan.'}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-orange-500/20 border border-brand-orange-500 flex items-center justify-center font-bold text-brand-orange-400 shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Acquisition Terrain' : 'Field Acquisition'}</h4>
                          <p className="text-sm text-blue-200">{language === 'fr' ? 'Vols automatisés garantissant homogénéité et précision.' : 'Automated flights ensuring homogeneity and precision.'}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-orange-500/20 border border-brand-orange-500 flex items-center justify-center font-bold text-brand-orange-400 shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Analyse & Restitution' : 'Analysis & Restitution'}</h4>
                          <p className="text-sm text-blue-200">{language === 'fr' ? 'Qualification des anomalies par criticité et rapport actionnable.' : 'Qualification of anomalies by criticality and actionable report.'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Avantages et ROI + Image thermo4.png intégrée */}
            <ScrollReveal delay={0.3}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE 4 */}
                  <div className="h-64 lg:h-auto w-full relative group">
                    <img 
                      src="/thermo4.png" 
                      alt="Retour sur investissement thermographie" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* TEXTE ROI */}
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                      {language === 'fr' ? 'Une Logique de R.O.I Rapide' : 'A Fast R.O.I Logic'}
                    </h2>
                    <div className="flex flex-col gap-6">
                      {[
                        { t: language === 'fr' ? "Continuité" : "Continuity", d: language === 'fr' ? "Aucun arrêt de la production nécessaire." : "No production shutdown required.", icon: Zap },
                        { t: language === 'fr' ? "Gain de Temps" : "Time Saving", d: language === 'fr' ? "Inspection 50 à 80% plus rapide." : "Inspection 50 to 80% faster.", icon: Clock },
                        { t: language === 'fr' ? "Maintenance ciblée" : "Targeted Maintenance", d: language === 'fr' ? "Intervention uniquement là où l'anomalie est avérée." : "Intervention only where anomaly is confirmed.", icon: Target },
                        { t: language === 'fr' ? "Auditabilité" : "Auditability", d: language === 'fr' ? "Preuves pour assureurs et directions." : "Proof for insurers and management.", icon: FileText }
                      ].map((benefit, i) => (
                        <div key={i} className="flex gap-4 p-2 hover:translate-x-2 transition-transform duration-300">
                          <div className="w-10 h-10 bg-brand-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-black text-gray-900 uppercase text-sm tracking-tight mb-0.5">{benefit.t}</h4>
                            <p className="text-xs text-gray-600 font-medium leading-snug">{benefit.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action */}
              <div className="bg-gradient-to-br from-[#233B72] to-slate-800 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-orange-500/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">
                  {language === 'fr' ? "Planifier une mission" : "Schedule a Mission"}
                </h3>
                <p className="mb-8 text-blue-100 font-medium relative z-10 leading-relaxed text-sm">
                  {language === 'fr' 
                    ? 'Campagne ponctuelle ou contrat de surveillance périodique. Obtenez une étude chiffrée.' 
                    : 'One-off campaign or periodic surveillance contract. Get a detailed estimate.'}
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-brand-orange-500 text-white py-5 rounded-2xl font-black text-center block hover:bg-white hover:text-[#233B72] transition-all shadow-xl uppercase tracking-widest"
                >
                  {t('nav.quote')}
                </Link>
              </div>

              {/* Atouts Rapides - Format Spécifications */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {language === 'fr' ? 'Performances' : 'Performance'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Camera, title: 'Résolution IR', val: '640×512' },
                    { icon: Zap, title: language === 'fr' ? 'Arrêt de prod.' : 'Prod. Stop', val: '0 (Zéro)' },
                    { icon: ShieldCheck, title: 'Norme PV', val: 'IEC 62446-3' },
                    { icon: Activity, title: 'Diagnostic', val: language === 'fr' ? 'Radiométrique' : 'Radiometric' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-brand-orange-500" /></div>
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
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {language === 'fr' ? 'Nettoyage Photovoltaïque' : 'Solar Panel Cleaning'}
                    <ChevronRight className="w-4 h-4 text-brand-orange-500 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.facade.title')}
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
