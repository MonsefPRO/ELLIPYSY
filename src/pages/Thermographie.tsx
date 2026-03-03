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
  Zap,
  Moon,
  BrainCircuit,
  MapPin
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/20"></div>
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
                ? 'L\'imagerie de pointe au service de vos infrastructures.' 
                : 'Cutting-edge imaging for your infrastructures.'}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction SEO + Image thermoo1.png */}
            <ScrollReveal>
              <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-gray-100 overflow-hidden">
                <h2 className="text-3xl font-black text-[#233B72] mb-8 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-8 bg-brand-orange-500 rounded-full"></div>
                  {language === 'fr' ? 'Détectez l\'invisible avec une précision chirurgicale' : 'Detect the invisible with surgical precision'}
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                    <p>
                      {language === 'fr' 
                        ? "Équipés des dernières technologies embarquées (gamme Enterprise), nos drones réalisent des audits thermiques et visuels d'une précision inédite. Nous identifions les anomalies sans aucune interruption de votre chaîne de production."
                        : "Equipped with the latest airborne technologies (Enterprise range), our drones perform thermal and visual audits of unprecedented precision. We identify anomalies without any interruption to your production line."}
                    </p>
                    <p>
                      {language === 'fr'
                        ? "Grâce à des capteurs radiométriques surpuissants couplés à l'Intelligence Artificielle, notre approche génère une donnée fiable, traçable et géolocalisée au centimètre près. Objectif : cibler la maintenance, réduire les pertes et maîtriser vos risques (QHSE)."
                        : "Thanks to highly powerful radiometric sensors coupled with Artificial Intelligence, our approach generates reliable, traceable, and centimetric geolocated data. Goal: target maintenance, reduce losses, and control your risks (QHSE)."}
                    </p>
                  </div>
                  
                  {/* IMAGE 1 */}
                  <div className="h-64 lg:h-full min-h-[300px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group">
                    <img 
                      src="/thermoo1.png" 
                      alt="Inspection thermographique" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Technologie Embarquée + Image thermoo2.png (MODIFIÉE POUR NE PAS COUPER) */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {language === 'fr' ? 'Technologie & Équipement de Pointe' : 'Technology & Cutting-Edge Equipment'}
                </h2>
                
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* IMAGE 2 (Colonne de gauche) - Object-contain pour être visible à 100% */}
                  <div className="lg:col-span-5 h-64 lg:h-auto rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 relative group bg-white flex items-center justify-center p-6">
                    <img 
                      src="/thermoo2.png" 
                      alt="Équipement radiométrique" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* CARTES ÉQUIPEMENTS (Colonne de droite) */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { 
                        title: language === 'fr' ? "Thermique Radiométrique" : "Radiometric Thermal", 
                        desc: language === 'fr' ? "Résolution HD (1280x1024) pour des mesures de température pixel par pixel." : "HD resolution (1280x1024) for pixel-by-pixel temperature measurements.", 
                        icon: Camera 
                      },
                      { 
                        title: language === 'fr' ? "Zoom Hybride x112" : "112x Hybrid Zoom", 
                        desc: language === 'fr' ? "Détection de micro-fissures ou défauts à plus de 10 mètres de distance, en toute sécurité." : "Detection of micro-cracks or defects from more than 10 meters away, safely.", 
                        icon: Target 
                      },
                      { 
                        title: language === 'fr' ? "Géolocalisation RTK" : "RTK & Laser Geolocation", 
                        desc: language === 'fr' ? "Télémètre laser (1800m) et module RTK pour un positionnement du défaut au centimètre près." : "Laser rangefinder (1800m) and RTK module for centimeter-accurate defect positioning.", 
                        icon: MapPin 
                      },
                      { 
                        title: language === 'fr' ? "Vision Nocturne & IA" : "Night Vision & AI", 
                        desc: language === 'fr' ? "Vols de nuit jusqu'à 100m. L'IA embarquée assure le suivi et le comptage automatique." : "Night flights up to 100m. Embedded AI ensures tracking and automatic counting.", 
                        icon: BrainCircuit 
                      }
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

            {/* Applications Ciblées + Image thermoo3.png (MODIFIÉE POUR NE PAS COUPER) */}
            <ScrollReveal delay={0.15}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {language === 'fr' ? 'Domaines d\'Application' : 'Application Areas'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: language === 'fr' ? 'Centrales Photovoltaïques' : 'Solar Power Plants', desc: language === 'fr' ? 'Détection de hotspots, modules défectueux, et déséquilibres. Conformité norme IEC 62446-3.' : 'Detection of hotspots, defective modules, and imbalances. IEC 62446-3 standard compliant.', icon: Sun },
                    { title: language === 'fr' ? 'Bâtiments & Modélisation' : 'Buildings & 3D Modeling', desc: language === 'fr' ? 'Vols obliques (5 axes) pour scanner les façades sans zones mortes. Diagnostic des déperditions thermiques.' : 'Oblique flights (5 axes) to scan facades without dead zones. Diagnosis of heat loss.', icon: Building2 },
                    { title: language === 'fr' ? 'Sécurité & Industrie' : 'Security & Industry', desc: language === 'fr' ? 'Contrôle des réseaux de chaleur, inspections nocturnes et levées de doutes sécurisées.' : 'Control of heating networks, night inspections, and secure doubt removal.', icon: Moon }
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
                
                {/* IMAGE 3 EN BANNIÈRE - Object-contain avec fond blanc pour être vue à 100% */}
                <div className="mt-8 w-full rounded-[2.5rem] overflow-hidden shadow-xl relative group border border-gray-100 bg-white p-4 md:p-8 flex justify-center items-center">
                  <img 
                    src="/thermoo3.png" 
                    alt="Domaines d'intervention thermographique" 
                    className="w-full h-auto max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </section>
            </ScrollReveal>

            {/* Méthodologie (Fond sombre) + Image thermoo6.png */}
            <ScrollReveal delay={0.2}>
              <section className="bg-[#233B72] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
                  <Thermometer size={300} />
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                        {language === 'fr' ? 'Livrables Techniques' : 'Technical Deliverables'}
                      </h3>
                      <ul className="space-y-4 font-medium text-blue-100">
                        <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Rapport PDF structuré et détaillé' : 'Structured PDF report (summary, tables)'}</li>
                        <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Images radiométriques HD' : 'HD Radiometric images'}</li>
                        <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Cartographie et position RTK' : 'Mapping and RTK positioning'}</li>
                        <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-orange-400 shrink-0" /> {language === 'fr' ? 'Recommandations de maintenance' : 'O&M maintenance recommendations'}</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-orange-500">
                        {language === 'fr' ? 'Notre Méthode' : 'Our Methodology'}
                      </h3>
                      <div className="space-y-5">
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-brand-orange-500/20 border border-brand-orange-500 flex items-center justify-center font-bold text-brand-orange-400 shrink-0">1</div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Cadrage HSE' : 'HSE Scoping'}</h4>
                            <p className="text-sm text-blue-200">{language === 'fr' ? 'Analyse des contraintes et plan de vol.' : 'Constraint analysis and flight plan.'}</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-brand-orange-500/20 border border-brand-orange-500 flex items-center justify-center font-bold text-brand-orange-400 shrink-0">2</div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Acquisition' : 'Acquisition'}</h4>
                            <p className="text-sm text-blue-200">{language === 'fr' ? 'Vols automatisés par intelligence artificielle.' : 'Automated flights by AI.'}</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-brand-orange-500/20 border border-brand-orange-500 flex items-center justify-center font-bold text-brand-orange-400 shrink-0">3</div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{language === 'fr' ? 'Restitution' : 'Restitution'}</h4>
                            <p className="text-sm text-blue-200">{language === 'fr' ? 'Qualification et rapport actionnable.' : 'Qualification and actionable report.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* IMAGE 6 (Colonne de droite pour aérer le bloc bleu) */}
                  <div className="lg:col-span-5 h-64 lg:h-full min-h-[350px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative group">
                    <img 
                      src="/thermoo6.png" 
                      alt="Analyse thermique" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Sécurité et Homologation + Image thermoo4.png (MODIFIÉE POUR NE PAS COUPER) */}
            <ScrollReveal delay={0.25}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-600 to-green-500 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                      <ShieldCheck size={200} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                          <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter">
                          {language === 'fr' ? 'Vols Urbains : Homologation C5' : 'Urban flights: C5 Certification'}
                        </h3>
                      </div>
                      <p className="text-emerald-50 font-medium leading-relaxed text-lg">
                        {language === 'fr' 
                          ? "Nos équipements sont certifiés pour évoluer en toute légalité en agglomération. Équipés de parachutes à déclenchement automatique crypté et de capteurs d'évitement d'obstacles à 360°, nous garantissons une sécurité absolue au-dessus de vos installations et du public." 
                          : "Our equipment is certified to operate legally in urban areas. Equipped with encrypted automatic deployment parachutes and 360° obstacle avoidance sensors, we guarantee absolute safety above your facilities and the public."}
                      </p>
                    </div>
                  </div>
                  {/* IMAGE 4 - Object-contain pour être visible à 100% */}
                  <div className="w-full relative group bg-white flex items-center justify-center p-8 md:p-12">
                    <img 
                      src="/thermoo4.png" 
                      alt="Sécurité et Homologation C5" 
                      className="w-full h-auto max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Avantages et ROI + Image thermoo5.png */}
            <ScrollReveal delay={0.3}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE 5 */}
                  <div className="h-64 lg:h-auto w-full relative group order-2 lg:order-1">
                    <img 
                      src="/thermoo5.png" 
                      alt="Retour sur investissement thermographie" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* TEXTE ROI */}
                  <div className="p-8 md:p-12 order-1 lg:order-2">
                    <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                      {language === 'fr' ? 'Une Logique de R.O.I Rapide' : 'A Fast R.O.I Logic'}
                    </h2>
                    <div className="flex flex-col gap-6">
                      {[
                        { t: language === 'fr' ? "Zéro Interruption" : "Zero Interruption", d: language === 'fr' ? "Aucun arrêt de production ni de consignation électrique." : "No production shutdown or electrical lockout.", icon: Zap },
                        { t: language === 'fr' ? "Déploiement Éclair" : "Rapid Deployment", d: language === 'fr' ? "Le drone est opérationnel en 15 secondes sur site." : "The drone is operational in 15 seconds on site.", icon: Clock },
                        { t: language === 'fr' ? "Maintenance ciblée" : "Targeted Maintenance", d: language === 'fr' ? "Intervention uniquement là où l'anomalie est avérée (Point GPS)." : "Intervention only where the anomaly is confirmed (GPS Point).", icon: Target },
                        { t: language === 'fr' ? "Livrables Actionnables" : "Actionable Deliverables", d: language === 'fr' ? "Rapports détaillés avec corrélation Immédiate (IR / Visible)." : "Detailed reports with immediate correlation (IR / Visible).", icon: FileText }
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
                  {language === 'fr' ? "Planifier un Audit" : "Schedule an Audit"}
                </h3>
                <p className="mb-8 text-blue-100 font-medium relative z-10 leading-relaxed text-sm">
                  {language === 'fr' 
                    ? 'Campagne ponctuelle ou contrat de surveillance. Obtenez une étude de faisabilité.' 
                    : 'One-off campaign or surveillance contract. Get a feasibility study.'}
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
                  {language === 'fr' ? 'Spécifications' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Camera, title: 'Résolution IR', val: '1280×1024' },
                    { icon: Target, title: 'Zoom Max', val: 'x112' },
                    { icon: MapPin, title: 'Précision', val: 'Centimétrique (RTK)' },
                    { icon: ShieldCheck, title: 'Sécurité', val: 'Parachute (C5)' },
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
