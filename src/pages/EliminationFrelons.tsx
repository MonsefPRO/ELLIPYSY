import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  ChevronRight, 
  AlertCircle,
  Phone,
  Target,
  Wind,
  ShieldAlert,
  ChevronDown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { FloatingDrone } from '../components/FloatingDrone';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function EliminationFrelons() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ pour le SEO et l'affichage
  const faqs = isFr ? [
    {
      q: "Pourquoi utiliser un drone pour détruire un nid de frelons ?",
      a: "Le drone permet d'atteindre des nids inaccessibles (cimes d'arbres, toitures très hautes) sans utiliser de nacelle ou d'échelle. C'est la méthode la plus sûre car l'opérateur reste à distance sécurisée au sol."
    },
    {
      q: "Est-ce dangereux pour l'environnement ?",
      a: "Nous utilisons exclusivement des biocides certifiés et éco-responsables, ciblés par injection directe au cœur du nid. Cela évite la dispersion de produits chimiques dans l'air et protège la biodiversité environnante."
    },
    {
      q: "Combien de temps dure l'intervention ?",
      a: "L'intervention par drone est extrêmement rapide. En général, la localisation, le vol et l'injection prennent moins de 30 minutes. Le nid est neutralisé quasi instantanément."
    },
    {
      q: "Que se passe-t-il après le traitement du nid ?",
      a: "Une fois le nid neutralisé, il se dégradera naturellement avec les intempéries. S'il est accessible et gênant, nous pouvons proposer son retrait, mais la neutralisation garantit que les frelons ne reviendront pas."
    }
  ] : [
    {
      q: "Why use a drone to destroy a hornet's nest?",
      a: "The drone allows reaching inaccessible nests (tree tops, very high roofs) without using a lift or ladder. It is the safest method as the operator remains at a safe distance on the ground."
    },
    {
      q: "Is it dangerous for the environment?",
      a: "We use exclusively certified and eco-responsible biocides, targeted by direct injection into the heart of the nest. This prevents the dispersion of chemicals in the air and protects the surrounding biodiversity."
    },
    {
      q: "How long does the intervention take?",
      a: "Drone intervention is extremely fast. Generally, locating, flying, and injecting takes less than 30 minutes. The nest is neutralized almost instantly."
    },
    {
      q: "What happens after the nest is treated?",
      a: "Once the nest is neutralized, it will naturally degrade with the weather. If it is accessible and bothersome, we can offer its removal, but neutralization guarantees that the hornets will not return."
    }
  ];

  // Données SEO Dynamiques
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isFr ? "Destruction de Nids de Frelons par Drone" : "Drone Hornet Nest Removal",
    "description": isFr 
      ? "Intervention d'urgence pour la destruction de nids de frelons asiatiques par drone. Méthode sécurisée, biocides écologiques, accès grande hauteur."
      : "Emergency intervention for the destruction of Asian hornet nests by drone. Safe method, ecological biocides, high altitude access.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ellipsys Solutions",
      "telephone": "+33467209709",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montpellier",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      }
    },
    "serviceType": isFr ? "Pest Control" : "Extermination"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Injection des scripts SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* Hero Section Dynamique avec FloatingDrone */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingDrone 
            src="/abateur_de_frelons.png" 
            className="w-full h-full object-cover scale-110"
            alt={t('prestations.service4.title')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-rose-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter drop-shadow-lg">
              {t('prestations.service4.title')}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 font-bold italic drop-shadow-md">
              {isFr 
                ? 'Intervention sécurisée sans exposition humaine' 
                : 'Safe intervention without human exposure'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-red-600 font-medium">{isFr ? "Accueil" : "Home"}</Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li>
              <Link to="/prestations" className="hover:text-red-600 font-medium">{isFr ? "Nos Prestations" : "Our Services"}</Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li>
              <span className="text-red-600 font-bold">{isFr ? "Élimination Frelons" : "Hornet Removal"}</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction */}
            <ScrollReveal>
              <section>
                <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-10 bg-red-600 rounded-full"></div>
                  {isFr ? 'Neutralisation de précision' : 'Precision Neutralization'}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t('prestations.service4.description') }} />
                </div>
              </section>
            </ScrollReveal>

            {/* Alerte Urgence (Bento Style) */}
            <ScrollReveal delay={0.1}>
              <section className="bg-red-50 rounded-[2.5rem] p-8 md:p-10 border border-red-200 shadow-md relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 p-4 pointer-events-none">
                  <ShieldAlert size={120} className="text-red-600" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <AlertCircle className="w-20 h-20 text-red-600 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-red-900 mb-3 uppercase tracking-tight">
                      {isFr ? 'Ne prenez aucun risque !' : 'Take no risks!'}
                    </h3>
                    <p className="text-red-800 font-bold text-lg leading-relaxed">
                      {isFr 
                        ? "Ne tentez jamais de détruire un nid vous-même. Les frelons asiatiques attaquent en groupe et sont extrêmement agressifs. Une intervention inadaptée peut être fatale." 
                        : "Never attempt to destroy a nest yourself. Asian hornets attack in groups and are extremely aggressive. Improper intervention can be fatal."}
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Technologie de pointe (Grille Bento) */}
            <ScrollReveal delay={0.15}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {isFr ? 'Technologie de pointe' : 'Cutting-edge Technology'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: isFr ? "Hauteur 50m+" : "Height 50m+", desc: isFr ? "Accès total sans nacelle ni échelle" : "Full access without lift or ladder", icon: Wind },
                    { title: isFr ? "Injection Précise" : "Precision Injection", desc: isFr ? "Cible le cœur du nid directement" : "Targets the heart of the nest directly", icon: Target },
                    { title: isFr ? "Biocides Éco" : "Eco Biocides", desc: isFr ? "Produits certifiés biodégradables" : "Certified biodegradable products", icon: ShieldCheck },
                    { title: isFr ? "Thermique HD" : "HD Thermal", desc: isFr ? "Localisation par signature de chaleur" : "Heat signature localization", icon: Zap }
                  ].map((item, idx) => (
                    <Hover3DCard key={idx}>
                      <div className="bg-rose-50 p-6 md:p-8 rounded-[2rem] border border-rose-100 flex items-start gap-5 h-full transition-colors hover:bg-rose-100/50 shadow-sm">
                        <div className="bg-white p-4 rounded-2xl shadow-md flex-shrink-0">
                          <item.icon className="w-6 h-6 text-red-600" />
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
            </ScrollReveal>

            {/* Avantages */}
            <ScrollReveal delay={0.2}>
              <section className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-inner">
                <h3 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 text-center uppercase tracking-tighter">
                  {isFr ? "Les avantages de l'aérien" : "Aerial advantages"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    t('prestations.service4.benefit1'),
                    t('prestations.service4.benefit2'),
                    t('prestations.service4.benefit3'),
                    t('prestations.service4.benefit7')
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all hover:-translate-y-1">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-bold text-gray-700 leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal delay={0.25}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-red-600 rounded-full"></div>
                  {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                      <button 
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                        aria-expanded={openFaq === i}
                      >
                        <span className="font-black text-[#233B72] pr-4">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed border-t border-gray-100 pt-4">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Urgence */}
              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-90 relative z-10" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter relative z-10">
                  {isFr ? 'URGENCE FRELONS' : 'HORNET EMERGENCY'}
                </h3>
                <p className="mb-8 text-red-50 font-medium leading-relaxed relative z-10 text-sm">
                  {isFr 
                    ? 'Intervention rapide garantie. Nos techniciens sont mobilisables immédiatement.' 
                    : 'Fast intervention guaranteed. Our technicians are ready to secure your area.'}
                </p>
                <div className="space-y-4 relative z-10">
                  <Link 
                    to="/devis"
                    className="w-full bg-white text-red-700 py-5 rounded-2xl font-black text-center block hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                  >
                    {t('nav.quote')}
                  </Link>
                  <a 
                    href="tel:0467209709"
                    className="flex items-center justify-center gap-3 w-full bg-red-900/40 backdrop-blur-md text-white py-5 rounded-2xl font-black text-center hover:bg-red-900 transition-all border border-white/20 uppercase tracking-widest"
                  >
                    <Phone className="w-5 h-5" /> 04 67 20 97 09
                  </a>
                </div>
              </div>

              {/* Atouts Expertise */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {isFr ? 'Garanties de sécurité' : 'Safety Guarantees'}
                </h4>
                <div className="space-y-5">
                  {[
                    isFr ? 'Certifié DGAC' : 'DGAC Certified', 
                    isFr ? 'Assurance RC Pro Spécifique' : 'Specialized Liability Insurance', 
                    isFr ? 'Agrément Certibiocide' : 'Certibiocide Approval'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-sm font-black text-gray-800 uppercase tracking-tight leading-tight">{cert}</span>
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
                    <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.demoussage.title')}
                    <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/thermographie" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Thermographie par Drone" : "Drone Thermography"}
                    <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-1" />
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
