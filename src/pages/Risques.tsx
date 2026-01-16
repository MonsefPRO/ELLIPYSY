import { ChevronRight, ShieldAlert, Scale, AlertTriangle, CheckCircle, FileText, BarChart3, ShieldCheck, Zap, Lock } from 'lucide-react';
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
      items: ['Suppression totale du risque de chute', 'Protection collective par technologie déportée', 'Réduction drastique de la pénibilité (TMS)', 'Zéro personnel suspendu ou en nacelle']
    },
    {
      id: 'cadre-juridique',
      title: 'Sécurisation de votre Position Juridique',
      description: "Syndics, foncières et industriels : votre responsabilité civile et pénale est engagée. Nous sécurisons votre position par un transfert de risque administratif.",
      icon: Scale,
      content: `Nous ne livrons pas seulement une façade propre, nous livrons un dossier de conformité. Nous gérons l'intégralité des protocoles : déclarations préfectorales S1, S2, S3, accords avec la DGAC, et assurances RC Pro spécifiques aux travaux aériens. Choisir Ellipsys, c'est prouver votre diligence en cas d'audit.`,
      items: ['Assurance RC Aérienne spécifique (hors standard)', 'Conformité DGAC & Protocoles Préfectoraux', 'Dossier de levée de risques complet', 'Traçabilité et archivage post-intervention']
    },
    {
      id: 'limites-techniques',
      title: 'L\'Honnêteté Technique : Savoir dire Non',
      description: "La confiance naît de la rigueur, pas des promesses intenables. Notre rôle est de valider la faisabilité technique avant toute intervention.",
      icon: AlertTriangle,
      content: `Le drone est une solution d'excellence, mais elle possède des contre-indications. Si le vent dépasse 30 km/h, si le support est trop poreux ou si la pathologie nécessite une action mécanique lourde (brossage), nous préconisons d'autres méthodes. Cette transparence garantit l'intégrité de votre bâti.`,
      items: ['Seuil météo strict (Vent < 30km/h)', 'Diagnostic de porosité préalable', 'Analyse No-Fly Zone (Zone d\'exclusion)', 'Validation d\'intégrité du support']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* HERO SECTION - REVISITÉE */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a]/80 via-[#1a2e5a]/60 to-black/70 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            La Maîtrise des Risques
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-light text-blue-200">
            Votre protection juridique, notre priorité absolue
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* BREADCRUMB */}
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 mb-8 md:mb-12">
          <Link to="/" className="hover:text-[#1a2e5a]">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-navy font-medium">Gestion des risques & conformité</span>
        </nav>

        {/* INTRODUCTION STRATÉGIQUE */}
        <ScrollReveal>
          <div className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a] mb-6 leading-tight">
              "Celui qui explique le risque inspire plus confiance que celui qui promet qu'il n'existe pas."
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Le nettoyage de façade par drone n'est pas une simple innovation, c'est une <strong>stratégie de réduction des risques industriels</strong>. 
              Pour un gestionnaire d'actifs, l'enjeu est triple : supprimer le risque humain, sécuriser sa responsabilité civile et garantir la continuité d'exploitation sans entrave logistique.
            </p>
          </div>
        </ScrollReveal>

        {/* LISTE DES SECTIONS EXPERTES */}
        <div className="space-y-16 md:space-y-32">
          {sections.map((section, index) => {
            const Icon = section.icon;
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
                      <h3 className="font-bold text-[#1a2e5a] mb-4 flex items-center gap-2">
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
                    <Hover3DCard className="bg-[#1a2e5a] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <BarChart3 size={48} className="mb-6 text-[#e63946]" />
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Rapport de Performance</h3>
                            <p className="text-blue-100/80 mb-6 leading-relaxed">Chaque intervention fait l'objet d'un rapport de conformité technique et sécuritaire, garantissant la traçabilité totale pour vos assureurs et vos audits HSE.</p>
                            <div className="flex gap-4">
                                <ShieldCheck className="opacity-50" />
                                <Lock className="opacity-50" />
                                <Zap className="opacity-50" />
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    </Hover3DCard>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* NOUVELLE SECTION : LE TABLEAU DE L'HONNÊTETÉ (SEO & RÉASSURANCE) */}
        <ScrollReveal>
            <div className="mt-32 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-[#1a2e5a] mb-12 text-center">Pourquoi le drone est votre meilleur levier de gestion des risques</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#1a2e5a] text-white">
                            <tr>
                                <th className="p-6 font-bold uppercase text-xs">Facteurs de Risque</th>
                                <th className="p-6 font-bold uppercase text-xs">Méthodes Traditionnelles</th>
                                <th className="p-6 font-bold uppercase text-xs bg-[#1a2e5a]/90">Approche Ellipsys Drone</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm md:text-base">
                            <tr className="border-b border-slate-100">
                                <td class="p-6 font-bold text-[#1a2e5a]">Chute de hauteur</td>
                                <td class="p-6 text-gray-500">Risque majeur (humain exposé)</td>
                                <td class="p-6 font-bold text-green-600 bg-green-50/30">Risque supprimé (Opérateur au sol)</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td class="p-6 font-bold text-[#1a2e5a]">Détérioration support</td>
                                <td class="p-6 text-gray-500">Risque de chocs (nacelles/appuis)</td>
                                <td class="p-6 font-bold text-green-600 bg-green-50/30">Zéro contact physique façade</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td class="p-6 font-bold text-[#1a2e5a]">Intrusion / Sécurité</td>
                                <td class="p-6 text-gray-500">Échafaudages (accès facilités)</td>
                                <td class="p-6 font-bold text-green-600 bg-green-50/30">Zéro structure fixe sur site</td>
                            </tr>
                            <tr>
                                <td class="p-6 font-bold text-[#1a2e5a]">Continuité d'activité</td>
                                <td class="p-6 text-gray-500">Accès bloqués, nuisances longues</td>
                                <td class="p-6 font-bold text-green-600 bg-green-50/30">Intervention rapide (heures)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ScrollReveal>

        {/* CTA FINALE ORIENTÉE DIAGNOSTIC */}
        <div className="mt-32 bg-[#1a2e5a] rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-[#e63946]" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt pour un diagnostic de faisabilité ?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light">
              Ne recevez pas un simple devis, obtenez une analyse de risques réelle. Nous étudions votre bâtiment pour confirmer si le drone est la solution la plus sûre pour votre projet.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-3 bg-[#e63946] text-white px-10 py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl text-xl uppercase tracking-tighter">
              Demander mon diagnostic de faisabilité
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
          {/* Subtle background circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
