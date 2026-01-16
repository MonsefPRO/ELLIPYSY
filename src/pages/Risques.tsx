import { ChevronRight, ShieldAlert, Scale, AlertTriangle, CheckCircle, FileText, ShieldCheck, Zap, Lock, Activity, Radar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import { Hover3DCard } from '../components/Hover3DCard';
import { ScrollReveal } from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function Risques() {
  const sections = [
    {
      id: 'securite-humaine',
      title: 'Maîtrise des Risques Humains & EPC',
      description: "Neutraliser le risque de chute : La priorité absolue du donneur d'ordre.",
      icon: ShieldAlert,
      content: `En application du Code du Travail (R4323-58), la priorité doit être donnée aux équipements de protection collective. Le drone n'est pas une alternative 'gadget', c'est le seul bouclier technologique qui supprime totalement l'exposition au vide. En déportant l'opérateur au sol, nous éliminons la variable la plus critique de votre chantier : l'erreur humaine en hauteur.`,
      items: ['Suppression totale du risque de chute', 'Protection collective par technologie déportée', 'Réduction drastique de la pénibilité (TMS)', 'Zéro personnel suspendu ou en nacelle'],
      visualTitle: "Bulle de Sécurité Active",
      visualDesc: "Visualisation du périmètre d'exclusion au sol. Zone 100% hermétique aux tiers durant l'intervention.",
      visualIcon: Radar,
      visualDetail: <div className="mt-4 flex items-center gap-2 text-green-400 font-mono text-xs"><Activity size={14} /> SCANNER_SOL: ACTIF</div>
    },
    {
      id: 'cadre-juridique',
      title: 'Sécurisation de votre Position Juridique',
      description: "Syndics, foncières et industriels : votre responsabilité civile et pénale est engagée. Nous sécurisons votre position par un transfert de risque administratif.",
      icon: Scale,
      content: `Nous ne livrons pas seulement une façade propre, nous livrons un dossier de conformité. Nous gérons l'intégralité des protocoles : déclarations préfectorales S1, S2, S3, accords avec la DGAC, et assurances RC Pro spécifiques aux travaux aériens. Choisir Ellipsys, c'est prouver votre diligence en cas d'audit.`,
      items: ['Assurance RC Aérienne spécifique (hors standard)', 'Conformité DGAC & Protocoles Préfectoraux', 'Dossier de levée de risques complet', 'Traçabilité et archivage post-intervention'],
      visualTitle: "Dossier de Diligence",
      visualDesc: "Accès immédiat aux protocoles S1-S2-S3 et attestations RC Pro Aérienne de 10M€.",
      visualIcon: Lock,
      visualDetail: <div className="mt-4 p-2 bg-white/10 rounded border border-white/20 font-mono text-[10px] text-blue-200 uppercase tracking-widest">Auth_DGAC: Validé</div>
    },
    {
      id: 'limites-techniques',
      title: 'L\'Honnêteté Technique : Savoir dire Non',
      description: "La confiance naît de la rigueur, pas des promesses intenables. Notre rôle est de valider la faisabilité technique avant toute intervention.",
      icon: AlertTriangle,
      content: `Le drone est une solution d'excellence, mais elle possède des contre-indications. Si le vent dépasse 30 km/h, si le support est trop poreux ou si la pathologie nécessite une action mécanique lourde (brossage), nous préconisons d'autres méthodes. Cette transparence garantit l'intégrité de votre bâti.`,
      items: ['Seuil météo strict (Vent < 30km/h)', 'Diagnostic de porosité préalable', 'Analyse No-Fly Zone (Zone d\'exclusion)', 'Validation d\'intégrité du support'],
      visualTitle: "Télémétrie Météo",
      visualDesc: "Monitoring temps réel des conditions de vol. Arrêt automatique si seuil > 30km/h.",
      visualIcon: Zap,
      visualDetail: <div className="mt-4 flex gap-2"><span className="text-[10px] font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30 uppercase">Vent: 22km/h</span><span className="text-[10px] font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 uppercase">Statut: OK</span></div>
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a]/80 via-[#1a2e5a]/60 to-black/70 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            La Maîtrise des Risques
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-light text-blue-200 italic">
            Votre protection juridique, notre priorité absolue
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 mb-8 md:mb-12">
          <Link to="/" className="hover:text-[#1a2e5a]">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1a2e5a] font-medium">Gestion des risques & conformité</span>
        </nav>

        <ScrollReveal>
          <div className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a] mb-6 leading-tight">
              "Celui qui explique le risque inspire plus confiance que celui qui promet qu'il n'existe pas."
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              Le nettoyage de façade par drone n'est pas une simple innovation, c'est une <strong>stratégie de réduction des risques industriels</strong>. 
              Pour un gestionnaire d'actifs, l'enjeu est triple : supprimer le risque humain, sécuriser sa responsabilité civile et garantir la continuité d'exploitation sans entrave logistique.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-32">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const VisualIcon = section.visualIcon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={section.id} delay={0.1}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-xl bg-white shadow-md text-[#e63946]">
                            <Icon size={32} />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#1a2e5a]">
                            {section.title}
                        </h2>
                    </div>
                    <p className="text-[#1a2e5a] font-semibold text-lg md:text-xl leading-relaxed italic border-l-4 border-[#e63946] pl-4">
                      {section.description}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                      {section.content}
                    </p>
                    
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                      <h3 className="font-bold text-[#1a2e5a] mb-4 flex items-center gap-2 text-sm md:text-base">
                        <CheckCircle size={20} className="text-green-600" />
                        Engagements Ellipsys Solutions :
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#e63946] font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <Hover3DCard className="bg-[#1a2e5a] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
                        <div className="relative z-10">
                            <VisualIcon size={48} className="mb-6 text-[#e63946] opacity-80" />
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{section.visualTitle}</h3>
                            <p className="text-blue-100/70 mb-4 text-sm leading-relaxed">{section.visualDesc}</p>
                            {section.visualDetail}
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute top-0 right-0 p-4">
                           <Activity size={20} className="text-white/10" />
                        </div>
                    </Hover3DCard>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
            <div className="mt-32 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-[#1a2e5a] mb-12 text-center">Pourquoi le drone est votre meilleur levier de gestion des risques</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#1a2e5a] text-white">
                            <tr>
                                <th className="p-6 font-bold uppercase text-xs tracking-widest">Facteurs de Risque</th>
                                <th className="p-6 font-bold uppercase text-xs tracking-widest text-blue-200">Méthodes Traditionnelles</th>
                                <th className="p-6 font-bold uppercase text-xs tracking-widest bg-navy/50">Approche Ellipsys Drone</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm md:text-base">
                            {[
                              { label: "Chute de hauteur", trad: "Risque majeur (humain exposé)", drone: "Risque supprimé (Opérateur au sol)" },
                              { label: "Détérioration support", trad: "Risque de chocs (nacelles/appuis)", drone: "Zéro contact physique façade" },
                              { label: "Intrusion / Sécurité", trad: "Échafaudages (accès facilités)", drone: "Zéro structure fixe sur site" },
                              { label: "Continuité d'activité", trad: "Accès bloqués, nuisances longues", drone: "Intervention rapide (heures)" }
                            ].map((row, i) => (
                              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="p-6 font-bold text-[#1a2e5a]">{row.label}</td>
                                <td className="p-6 text-gray-500 italic">{row.trad}</td>
                                <td className="p-6 font-bold text-green-700 bg-green-50/50">{row.drone}</td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ScrollReveal>

        <div className="mt-32 bg-[#1a2e5a] rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-[#e63946]" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase italic">Prêt pour un diagnostic de faisabilité ?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Ne recevez pas un simple devis, obtenez une analyse de risques réelle. Nous étudions votre bâtiment pour confirmer si le drone est la solution la plus sûre pour votre projet.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-3 bg-[#e63946] text-white px-10 py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl text-xl uppercase tracking-tighter">
              Demander mon diagnostic de faisabilité
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
