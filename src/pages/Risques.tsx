import React from 'react';
import { ChevronRight, ShieldAlert, Scale, AlertTriangle, CheckCircle, ShieldCheck, Zap, Lock, Activity, Radar, ArrowRight, XCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function Risques() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  const sections = [
    {
      id: 'securite-humaine',
      title: isFr ? 'Maîtrise des Risques Humains' : 'Human Risk Management',
      description: isFr ? "Neutraliser le risque de chute : La priorité absolue." : "Neutralize fall risks: The absolute priority.",
      icon: ShieldAlert,
      image: '/ares.png',
      content: isFr 
        ? "En application du Code du Travail (R4323-58), la priorité doit être donnée aux équipements de protection collective. Le drone n'est pas une alternative 'gadget', c'est le seul bouclier technologique qui supprime totalement l'exposition au vide et protège vos équipes ainsi que les nôtres."
        : "Under labor regulations, collective protection equipment must take priority. The drone is not a 'gimmick' alternative, it's the only technological shield that completely eliminates exposure to heights and protects your teams as well as ours.",
      items: [
        isFr ? 'Zéro personnel suspendu ou en nacelle' : 'Zero personnel suspended or in lifts',
        isFr ? 'Protection collective par technologie déportée' : 'Collective protection via remote tech',
        isFr ? 'Réduction drastique de la pénibilité (TMS)' : 'Drastic reduction of physical strain'
      ],
      visualTitle: isFr ? "Bulle de Sécurité" : "Safety Bubble",
      visualDesc: isFr ? "Zone 100% hermétique aux tiers durant l'intervention." : "100% airtight zone for third parties during operation.",
      visualDetail: isFr ? 'SCANNER_SOL: ACTIF' : 'GROUND_SCAN: ACTIVE'
    },
    {
      id: 'cadre-juridique',
      title: isFr ? 'Sécurisation Juridique' : 'Legal Security',
      description: isFr ? "Syndics & industriels : votre responsabilité est engagée." : "Property managers & industrials: your liability is at stake.",
      icon: Scale,
      image: '/regle.png', 
      content: isFr
        ? "Nous ne livrons pas seulement une façade propre, nous livrons un dossier de conformité. Nous gérons l'intégralité des protocoles : déclarations préfectorales S1, S2, S3, accords avec la DGAC et autorisations de survol spécifiques."
        : "We don't just deliver a clean facade, we deliver a compliance file. We manage all protocols: S1, S2, S3 prefectural declarations, DGAC agreements and specific flight authorizations.",
      items: [
        isFr ? 'Assurance RC Aérienne spécifique' : 'Specific Aerial Liability Insurance',
        isFr ? 'Conformité DGAC & Protocoles Préfectoraux' : 'DGAC Compliance & Prefectural Protocols',
        isFr ? 'Dossier de levée de risques complet' : 'Comprehensive risk assessment file'
      ],
      visualTitle: isFr ? "Dossier de Diligence" : "Due Diligence File",
      visualDesc: isFr ? "Accès aux protocoles S1-S3 et attestations RC Pro." : "Access to S1-S3 protocols and liability certificates.",
      visualDetail: isFr ? 'Auth_DGAC: Validé' : 'DGAC_Auth: Approved'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a]/90 via-[#1a2e5a]/80 to-black/80 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {isFr ? "Risques & Cadre Légal" : "Risks & Legal Framework"}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-bold text-blue-200 italic uppercase tracking-wider">
            {isFr ? "La sécurité n'est pas une option, c'est la règle." : "Safety is not an option, it's the rule."}
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-[#1a2e5a] font-medium">
                {isFr ? "Accueil" : "Home"}
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li>
              <span className="text-[#1a2e5a] font-bold uppercase tracking-tight">
                {isFr ? "Risques & Responsabilités" : "Risks & Liabilities"}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        
        {/* INTRODUCTION */}
        <ScrollReveal>
          <div className="max-w-4xl mb-16 md:mb-24 text-center mx-auto">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-red-100">
              <ShieldCheck className="w-10 h-10 text-[#e63946]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1a2e5a] mb-6 leading-tight uppercase tracking-tighter italic">
              {isFr ? "\"Celui qui explique le risque inspire plus confiance que celui qui promet qu'il n'existe pas.\"" : "\"He who explains the risk inspires more trust than he who promises it doesn't exist.\""}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {isFr 
                ? "Le nettoyage technique par drone n'est pas une simple innovation, c'est une stratégie redoutable de réduction des risques industriels et d'accidents du travail." 
                : "Technical drone cleaning is not a simple innovation, it is a formidable strategy for reducing industrial risks and workplace accidents."}
            </p>
          </div>
        </ScrollReveal>

        {/* SECTIONS DE MAÎTRISE - DESIGN AÉRÉ ET IMAGES NON COUPÉES */}
        <div className="space-y-16 md:space-y-24">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={section.id} delay={0.1}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 bg-white rounded-[3rem] p-6 md:p-10 shadow-xl border border-gray-100 overflow-hidden`}>
                  
                  {/* TEXTE */}
                  <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-2xl bg-slate-50 text-[#e63946] border border-gray-100 shadow-inner">
                            <Icon size={32} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-[#1a2e5a] uppercase tracking-tighter leading-none">
                            {section.title}
                        </h2>
                    </div>
                    <p className="text-[#e63946] font-black text-lg md:text-xl uppercase tracking-tight">
                      {section.description}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      {section.content}
                    </p>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 mt-6 shadow-sm">
                      <ul className="space-y-4">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700 font-bold">
                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <span className="mt-0.5">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* IMAGE / VISUEL (Ajusté pour ne rien couper) */}
                  <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="bg-slate-50 rounded-t-[2rem] border-x border-t border-gray-100 p-6 flex justify-center items-center flex-grow min-h-[300px]">
                      <img 
                        src={section.image} 
                        alt={section.title} 
                        className="w-full h-auto max-h-[400px] object-contain hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                    <div className="bg-[#1a2e5a] rounded-b-[2rem] p-6 md:p-8 text-white relative overflow-hidden shadow-inner">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <Radar className="w-6 h-6 text-[#e63946]" />
                          <h3 className="text-xl font-black text-white uppercase tracking-wider">{section.visualTitle}</h3>
                        </div>
                        <p className="text-blue-100 text-sm mb-4 font-medium">{section.visualDesc}</p>
                        <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 font-mono text-xs text-white uppercase tracking-widest">
                          <Activity className="w-4 h-4 mr-2 text-green-400" />
                          {section.visualDetail}
                        </div>
                      </div>
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* LIMITES TECHNIQUES */}
        <ScrollReveal delay={0.2}>
          <section className="mt-24 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[3rem] p-8 md:p-16 border border-amber-200 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-5 p-8 pointer-events-none">
              <AlertTriangle size={200} className="text-amber-700" />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-2xl md:text-4xl font-black text-amber-900 mb-4 uppercase tracking-tighter">
                {isFr ? "L'Honnêteté Technique : Savoir dire Non" : "Technical Honesty: Knowing when to say No"}
              </h2>
              <p className="text-lg md:text-xl text-amber-800 font-bold mb-8 italic">
                {isFr ? "La confiance naît de la rigueur, pas des promesses intenables." : "Trust is born from rigor, not from untenable promises."}
              </p>
              <p className="text-gray-700 font-medium mb-10 leading-relaxed text-lg">
                {isFr 
                  ? "Le drone est une solution d'excellence, mais elle possède des contre-indications. Si le vent dépasse 30 km/h, si le support est trop abîmé, ou si la zone d'exclusion aérienne l'interdit, nous préconisons d'autres méthodes." 
                  : "The drone is an excellent solution, but it has contraindications. If the wind exceeds 30 km/h, if the surface is too damaged, or if the no-fly zone prohibits it, we recommend other methods."}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl text-sm font-black text-gray-700 border border-amber-200 shadow-sm">
                  <Zap className="w-5 h-5 text-amber-500" /> {isFr ? "Vent < 30km/h" : "Wind < 30km/h"}
                </div>
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl text-sm font-black text-gray-700 border border-amber-200 shadow-sm">
                  <MapPin className="w-5 h-5 text-amber-500" /> {isFr ? "Analyse No-Fly Zone" : "No-Fly Zone Analysis"}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* TABLEAU COMPARATIF AMÉLIORÉ ET 100% BILINGUE */}
        <ScrollReveal>
            <div className="mt-24 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-[#1a2e5a] mb-12 text-center uppercase tracking-tighter">
                  {isFr ? 'Drone vs Traditionnel : Gestion des risques' : 'Drone vs Traditional: Risk Management'}
                </h2>
                <div className="overflow-x-auto rounded-[2.5rem] border border-gray-200 shadow-2xl bg-white">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead className="bg-[#1a2e5a] text-white">
                            <tr>
                                <th className="p-6 md:p-8 font-black uppercase text-xs md:text-sm tracking-[0.2em] w-1/3">
                                  {isFr ? 'Risques' : 'Risks'}
                                </th>
                                <th className="p-6 md:p-8 font-black uppercase text-xs md:text-sm tracking-[0.2em] text-blue-200 w-1/3 border-l border-white/10">
                                  {isFr ? 'Méthodes Classiques' : 'Classic Methods'}
                                </th>
                                <th className="p-6 md:p-8 font-black uppercase text-xs md:text-sm tracking-[0.2em] bg-green-600/20 w-1/3 border-l border-white/10">
                                  {isFr ? 'Solution Drone' : 'Drone Solution'}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm md:text-base">
                            {[
                              { 
                                label: isFr ? "Chute de hauteur" : "Fall from height", 
                                trad: isFr ? "Risque majeur (Échafaudage/Nacelle)" : "Major risk (Scaffolding/Lift)", 
                                drone: isFr ? "Risque éliminé (Opérateur au sol)" : "Risk eliminated (Ground operator)" 
                              },
                              { 
                                label: isFr ? "Dégradation du bâti" : "Surface damage", 
                                trad: isFr ? "Risque d'impact (Ancrages, frottements)" : "Impact risk (Anchors, friction)", 
                                drone: isFr ? "Zéro contact physique" : "Zero physical contact" 
                              },
                              { 
                                label: isFr ? "Sécurité / Intrusion" : "Security / Intrusion", 
                                trad: isFr ? "Facilite l'accès aux balcons/fenêtres" : "Eases access to balconies/windows", 
                                drone: isFr ? "Aucune structure d'accès fixe" : "No fixed access structures" 
                              },
                              { 
                                label: isFr ? "Continuité d'activité" : "Operation continuity", 
                                trad: isFr ? "Gêne longue (Bruit, blocage accès)" : "Long term disruptions (Noise, access)", 
                                drone: isFr ? "Rapide et discret (Quelques heures)" : "Fast & discreet (A few hours)" 
                              }
                            ].map((row, i) => (
                              <tr key={i} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                                <td className="p-6 md:p-8 font-black text-[#1a2e5a] uppercase tracking-tight">{row.label}</td>
                                <td className="p-6 md:p-8 text-gray-500 font-medium border-l border-gray-100">
                                  <div className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" /> 
                                    <span>{row.trad}</span>
                                  </div>
                                </td>
                                <td className="p-6 md:p-8 font-black text-green-700 bg-green-50/50 border-l border-gray-100">
                                  <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> 
                                    <span>{row.drone}</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ScrollReveal>

        {/* CTA FINAL AUDIT */}
        <div className="mt-32 bg-gradient-to-br from-[#1a2e5a] to-blue-900 rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <ShieldCheck size={400} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic">
              {isFr ? "Besoin d'un audit de risque ?" : "Need a risk audit?"}
            </h2>
            <p className="text-lg md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              {isFr 
                ? "Nous étudions votre bâtiment pour confirmer si le drone est la solution la plus sûre pour votre projet." 
                : "We study your building to confirm if the drone is the safest solution for your project."}
            </p>
            <Link to="/devis" className="inline-flex items-center gap-3 bg-[#e63946] hover:bg-red-500 text-white px-10 md:px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl text-lg md:text-xl uppercase tracking-widest">
              {isFr ? "Demander mon audit gratuit" : "Request my free audit"}
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
