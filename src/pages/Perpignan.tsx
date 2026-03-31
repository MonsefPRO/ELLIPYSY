import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  ChevronRight, 
  Building2, 
  Sun, 
  Home, 
  Target, 
  ShieldCheck, 
  Zap, 
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';

export default function Perpignan() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  // Données SEO locales pour Perpignan
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ellipsys Solutions - Nettoyage Drone Perpignan",
    "description": "Spécialiste du nettoyage par drone à Perpignan et dans les Pyrénées-Orientales (66). Façades, toitures, panneaux solaires et destruction de nids de frelons.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perpignan",
      "postalCode": "66000",
      "addressRegion": "Occitanie",
      "addressCountry": "FR"
    },
    "telephone": "+33467209709",
    "areaServed": "Perpignan, Canet-en-Roussillon, Saint-Estève, Argelès-sur-Mer, Pyrénées-Orientales"
  };

  const services = [
    {
      icon: Building2,
      title: isFr ? "Nettoyage de Façades" : "Facade Cleaning",
      // LA CORRECTION EST ICI : GUILLEMETS DOUBLES
      desc: isFr ? "Accès jusqu'à 50m, 4x plus rapide, 30% moins cher. Zéro échafaudage." : "Access up to 50m, 4x faster, 30% cheaper. Zero scaffolding.",
      link: '/prestations/nettoyage-facade',
      color: 'sky'
    },
    {
      icon: Sun,
      title: isFr ? "Panneaux Solaires" : "Solar Panels",
      desc: isFr ? "Boostez votre rendement solaire sous le soleil catalan. Eau osmosée pure." : "Boost your solar yield under the Catalan sun. Pure osmosed water.",
      link: '/prestations/panneaux-photovoltaiques',
      color: 'amber'
    },
    {
      icon: Home,
      title: isFr ? "Démoussage Toiture" : "Roof Moss Removal",
      desc: isFr ? "Traitement curatif et préventif sans marcher sur vos tuiles. Zéro casse." : "Curative and preventive treatment without walking on your tiles. Zero breakage.",
      link: '/prestations/demoussage',
      color: 'emerald'
    },
    {
      icon: Target,
      title: isFr ? "Destruction Frelons" : "Hornet Eradication",
      desc: isFr ? "Intervention d'urgence dans toutes les Pyrénées-Orientales. Précision et sécurité." : "Emergency intervention throughout Pyrénées-Orientales. Precision and safety.",
      link: '/prestations/elimination-frelons',
      color: 'red'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Header />

      {/* HERO SECTION LOCALE */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/rony.jpg" 
            className="w-full h-full object-cover"
            alt="Nettoyage drone Perpignan"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e5a]/90 to-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-sm uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4 text-brand-orange-500" />
              Perpignan & Pyrénées-Orientales (66)
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {isFr ? "Nettoyage par Drone à" : "Drone Cleaning in"} <span className="text-brand-orange-400">Perpignan</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-bold italic drop-shadow-md mb-10 max-w-2xl mx-auto">
              {isFr 
                ? "L'expertise Ellipsys Solutions au service des entreprises, syndics et particuliers en Pays Catalan." 
                : "Ellipsys Solutions expertise serving businesses, property managers, and residents in the Catalan country."}
            </p>
            <Link to="/devis" className="inline-flex items-center gap-3 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 uppercase tracking-widest">
              {isFr ? "Demander un devis gratuit" : "Request a free quote"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-brand-orange-500 font-medium transition-colors">
                {isFr ? "Accueil" : "Home"}
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li>
              <span className="text-[#1a2e5a] font-bold uppercase tracking-tight">Perpignan</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        
        {/* INTRODUCTION SEO LOCALE */}
        <ScrollReveal>
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#1a2e5a] mb-6 uppercase tracking-tighter">
                  {isFr ? "Votre expert local dans le 66" : "Your local expert in the 66 area"}
                </h2>
                <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
                  <p>
                    {isFr 
                      ? "Ellipsys Solutions déploie sa flotte de drones certifiés DGAC sur tout le département des Pyrénées-Orientales (66) et la région Occitanie, pour des interventions rapides, sûres et innovantes."
                      : "Ellipsys Solutions deploys its DGAC-certified drone fleet throughout the Pyrénées-Orientales department and the Occitanie region, for fast, safe, and innovative operations."}
                  </p>
                  <p className="mt-4">
                    {isFr
                      ? "De Perpignan à Canet-en-Roussillon, la tramontane et la forte exposition au soleil altèrent vos toitures, façades et installations solaires. Notre technologie de nettoyage à l'eau osmosée basse pression garantit un résultat impeccable, prolongeant la durée de vie de vos infrastructures."
                      : "From Perpignan to Canet-en-Roussillon, the tramontane wind and strong sun exposure alter your roofs, facades, and solar installations. Our low-pressure pure osmosed water cleaning technology guarantees flawless results, extending the life of your infrastructure."}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: isFr ? "Intervention Rapide" : "Fast Response", desc: isFr ? "Devis sous 24h" : "Quote within 24h", icon: Zap },
                  { title: isFr ? "Sécurité Totale" : "Total Safety", desc: isFr ? "Zéro risque de chute" : "Zero fall risk", icon: ShieldCheck },
                  { title: "Certifié DGAC", desc: isFr ? "Vols en agglomération" : "Urban flights approved", icon: Award },
                  { title: isFr ? "Éco-responsable" : "Eco-friendly", desc: isFr ? "Produits biodégradables" : "Biodegradable products", icon: CheckCircle2 }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all">
                    <feature.icon className="w-8 h-8 text-brand-orange-500 mb-3" />
                    <h4 className="font-black text-[#1a2e5a] text-sm uppercase tracking-tight mb-1">{feature.title}</h4>
                    <span className="text-xs font-bold text-gray-500">{feature.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GRILLE DES SERVICES LOCAUX */}
        <ScrollReveal delay={0.2}>
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-center text-[#1a2e5a] mb-12 uppercase tracking-tighter">
              {isFr ? "Nos interventions dans le 66" : "Our services in the 66 area"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <Hover3DCard key={idx} className="h-full">
                  <div className={`bg-white rounded-[2.5rem] p-8 border-t-8 h-full flex flex-col hover:shadow-2xl transition-all border-gray-100 border-t-${service.color}-500 shadow-lg`}>
                    <div className={`w-16 h-16 rounded-2xl bg-${service.color}-50 flex items-center justify-center mb-6`}>
                      <service.icon className={`w-8 h-8 text-${service.color}-500`} />
                    </div>
                    <h3 className="text-xl font-black text-[#1a2e5a] mb-4 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                      {service.desc}
                    </p>
                    <Link to={service.link} className={`inline-flex items-center text-sm font-black uppercase tracking-widest text-${service.color}-600 hover:text-${service.color}-700 transition-colors group`}>
                      {isFr ? "En savoir plus" : "Learn more"} 
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Hover3DCard>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA FINAL */}
        <ScrollReveal delay={0.3}>
          <div className="bg-gradient-to-br from-[#1a2e5a] to-blue-900 rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <MapPin size={300} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
                {isFr ? "Un projet à Perpignan ou ses alentours ?" : "A project in or around Perpignan?"}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                {isFr 
                  ? "Nos équipes interviennent rapidement. Obtenez une étude de faisabilité et un devis gratuit sous 24h ouvrées." 
                  : "Our teams respond quickly. Get a feasibility study and a free quote within 24 business hours."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/devis" className="inline-flex items-center justify-center gap-3 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl hover:-translate-y-1 text-lg uppercase tracking-widest">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
                <a href="tel:0467209709" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black transition-all text-lg uppercase tracking-widest">
                  04 67 20 97 09
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </main>

      <Footer />
    </div>
  );
}
