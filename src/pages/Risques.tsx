import { ChevronRight, ShieldAlert, Scale, AlertTriangle, CheckCircle, Mail, FileText, BarChart3 } from 'lucide-react';
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
      title: 'Maîtrise des Risques Humains',
      description: "Le nettoyage en hauteur est l'une des activités les plus accidentogènes du bâtiment. Chez Ellipsys, nous appliquons le Code du Travail (R4323-58) en privilégiant la technologie qui supprime l'exposition au vide. Le drone n'est pas un gadget, c'est un bouclier pour vos collaborateurs et les nôtres.",
      icon: ShieldAlert,
      color: 'red',
      content: `En déportant l'opérateur au sol, nous éliminons le risque de chute de hauteur, première cause d'accidents graves dans le secteur. Cette approche permet aux coordonnateurs SPS et aux responsables HSE de valider des plans de prévention simplifiés et sécurisés.`,
      items: ['Suppression du risque de chute', 'Périmètre de sécurité actif au sol', 'Réduction de la pénibilité (TMS)', 'Zéro personnel suspendu dans le vide']
    },
    {
      id: 'cadre-juridique',
      title: 'Responsabilité du Donneur d’Ordre',
      description: "Syndics, foncières et industriels : votre responsabilité civile et pénale est engagée lors de travaux sur vos actifs. Nous sécurisons votre position juridique par un cadre administratif et assurantiel sans faille.",
      icon: Scale,
      color: 'blue',
      content: `Nous gérons l'intégralité des protocoles : déclarations préalables en préfecture, accords avec la DGAC, et assurances RC Pro spécifiques aux travaux aériens. Choisir Ellipsys, c'est prouver votre diligence en cas d'audit ou de contrôle.`,
      items: ['Assurance RC Aérienne spécifique', 'Déclarations préfectorales S1, S2, S3', 'Conformité totale DGAC', 'Traçabilité post-intervention']
    },
    {
      id: 'limites-techniques',
      title: 'Transparence : Les Limites du Drone',
      description: "La confiance naît de l'honnêteté technique. Le drone est une solution d'excellence, mais elle possède des contre-indications. Notre rôle de conseil est de vous dire quand ne pas l'utiliser.",
      icon: AlertTriangle,
      color: 'gray',
      content: `Nous n'intervenons pas si les vents dépassent 30 km/h ou si la structure nécessite une action mécanique lourde (brossage). Cette rigueur garantit l'intégrité de vos façades et la précision de nos traitements.`,
      items: ['Seuil météo strict (Vent < 30km/h)', 'Analyse préalable du support', 'Diagnostic de porosité', 'Respect des zones d\'exclusion aérienne']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            Risques & Responsabilités
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            Sécuriser votre patrimoine, protéger l'humain
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* BREADCRUMB */}
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8 md:mb-12">
          <Link to="/" class="hover:text-sky-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Gestion des risques</span>
        </nav>

        {/* INTRODUCTION EXPERTE (SEO/GEO) */}
        <ScrollReveal>
          <div className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 italic">
              "Celui qui explique le risque inspire plus confiance que celui qui promet qu'il n'existe pas."
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
              Le nettoyage de façade par drone n'est pas une simple innovation technologique, c'est une stratégie de <strong>réduction des risques industriels</strong>. 
              Pour un gestionnaire de parc ou un syndic, l'enjeu est triple : garantir la sécurité des personnes, assurer la pérennité du bâti et s'affranchir des lourdeurs logistiques traditionnelles.
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
                  
                  {/* TEXTE CONTENT */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4 mb-2">
                        <div className={`p-3 rounded-xl bg-slate-100 text-blue-900`}>
                            <Icon size={32} />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#233B72]">
                            {section.title}
                        </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify font-medium">
                      {section.description}
                    </p>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed italic">
                      {section.content}
                    </p>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-inner">
                      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-600" />
                        Engagements Ellipsys :
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span className="text-gray-700 text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* VISUEL / CARD D'EXPERTISE */}
                  <div className="w-full lg:w-1/2">
                    <Hover3DCard className="bg-[#233B72] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <BarChart3 size={48} className="mb-6 opacity-50" />
                            <h3 className="text-2xl font-bold mb-4 italic">Analyse de Performance</h3>
                            <p className="text-blue-100 mb-6">Chaque intervention fait l'objet d'un rapport de conformité technique et sécuritaire, garantissant la traçabilité totale pour vos assureurs.</p>
                            <div className="h-1 w-24 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    </Hover3DCard>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA FINALE ORIENTÉE CONSEIL */}
        <div className="mt-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <FileText className="w-12 h-12 mx-auto mb-6 text-red-500" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Besoin d'un audit de faisabilité ?</h2>
            <p className="text-base md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Nous n'envoyons pas seulement un devis, nous réalisons une analyse des risques complète de votre façade.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg text-lg">
              Demander mon analyse de risques
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
