import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ChevronRight, 
  Award,
  Droplets,
  Target,
  Cpu,
  MapPin,
  ChevronDown,
  Clock,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Données structurées Schema.org pour Google
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nettoyage Panneaux Photovoltaïques par Drone",
  "description": "Nettoyage professionnel de panneaux solaires par drone et robotique en Occitanie. Pilotes certifiés DGAC, robots ultra-légers 6-9kg, eau osmosée pure. Intervention sans échafaudage dans l'Hérault, Gard, Aude, Haute-Garonne et Pyrénées-Orientales.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ellipsys Solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "159 Rue de Thor",
      "addressLocality": "Montpellier",
      "postalCode": "34057",
      "addressRegion": "Occitanie",
      "addressCountry": "FR"
    },
    "telephone": "+33467209709",
    "url": "https://ellipsys-solutions.com",
    "areaServed": ["Hérault", "Gard", "Aude", "Haute-Garonne", "Pyrénées-Orientales"]
  },
  "serviceType": "Nettoyage panneaux photovoltaïques",
  "areaServed": {
    "@type": "State",
    "name": "Occitanie"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "À quelle fréquence nettoyer ses panneaux solaires en Occitanie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Occitanie, nous recommandons 2 nettoyages par an : avant l'été (avril-mai) pour maximiser la production estivale, et en automne après les pollens et la sécheresse. Le climat méditerranéen avec ses pollens printaniers, la poussière de l'air et les fientes d'oiseaux encrassent les panneaux plus rapidement qu'ailleurs en France."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte le nettoyage de panneaux solaires par drone en Occitanie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le coût varie selon la surface et l'accessibilité de votre installation. Notre méthode par drone et robotique est en moyenne 40% moins chère qu'une nacelle élévatrice (location + sécurité + temps). Contactez-nous pour un devis personnalisé sous 24h."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle perte de rendement sans nettoyage de panneaux photovoltaïques ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 20% et 30% selon le niveau d'encrassement. Sur une installation de 100 kWc en Occitanie, cela représente plusieurs milliers d'euros de production perdue par an. Un nettoyage régulier est rentabilisé dès la première intervention."
      }
    },
    {
      "@type": "Question",
      "name": "Le nettoyage par drone endommage-t-il les panneaux solaires ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Nos robots ultra-légers de 6 à 9 kg nettoient sans brossage mécanique, exclusivement à l'eau osmosée pure filtrée à 99%. Zéro abrasion, zéro pression mécanique, zéro risque pour vos cellules photovoltaïques."
      }
    },
    {
      "@type": "Question",
      "name": "Ellipsys Solutions intervient dans quelles zones en Occitanie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intervenons dans tout le Grand Sud : Hérault (Montpellier, Béziers, Sète), Gard (Nîmes, Alès), Aude (Carcassonne, Narbonne), Pyrénées-Orientales (Perpignan) et Haute-Garonne (Toulouse). Nous sommes également disponibles pour les grandes fermes solaires en dehors de cette zone."
      }
    }
  ]
};

export default function PanneauxPhotovoltaiques() {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "À quelle fréquence nettoyer ses panneaux solaires en Occitanie ?",
      a: "En Occitanie, nous recommandons 2 nettoyages par an : avant l'été (avril-mai) pour maximiser la production estivale, et en automne après les pollens et la sécheresse. Le climat méditerranéen — pollens printaniers, poussière de l'air, calcaire et fientes d'oiseaux — encrasse les panneaux plus rapidement qu'ailleurs en France."
    },
    {
      q: "Combien coûte le nettoyage de panneaux solaires par drone ?",
      a: "Notre méthode par drone et robotique est en moyenne 40% moins chère qu'une nacelle élévatrice traditionnelle (location + sécurité + temps d'immobilisation). Contactez-nous pour un devis personnalisé adapté à votre installation."
    },
    {
      q: "Quelle perte de rendement sans nettoyage ?",
      a: "Entre 20% et 30% selon l'encrassement. Sur une installation de 100 kWc en Occitanie, cela représente plusieurs milliers d'euros de production perdue par an. Un nettoyage régulier est rentabilisé dès la première intervention."
    },
    {
      q: "Le nettoyage par drone endommage-t-il les panneaux ?",
      a: "Non. Nos robots ultra-légers de 6 à 9 kg nettoient sans brossage mécanique, exclusivement à l'eau osmosée pure filtrée à 99%. Zéro abrasion, zéro pression mécanique, zéro risque pour vos cellules photovoltaïques."
    },
    {
      q: "Dans quelles zones intervenez-vous en Occitanie ?",
      a: "Nous intervenons dans tout le Grand Sud : Hérault (Montpellier, Béziers, Sète), Gard (Nîmes, Alès), Aude (Carcassonne, Narbonne), Pyrénées-Orientales (Perpignan) et Haute-Garonne (Toulouse). Disponibles également pour les grandes fermes solaires hors zone."
    }
  ];

  const zones = [
    { dept: "Hérault (34)", villes: "Montpellier, Béziers, Sète, Lunel" },
    { dept: "Gard (30)", villes: "Nîmes, Alès, Bagnols-sur-Cèze" },
    { dept: "Aude (11)", villes: "Carcassonne, Narbonne, Limoux" },
    { dept: "Haute-Garonne (31)", villes: "Toulouse, Muret, Saint-Gaudens" },
    { dept: "Pyrénées-Orientales (66)", villes: "Perpignan, Canet, Prades" },
    { dept: "Hors zone", villes: "Grandes fermes solaires sur devis" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/rony.jpg" 
            className="w-full h-full object-cover scale-110"
            alt="Nettoyage panneaux photovoltaïques par drone en Occitanie - Ellipsys Solutions"
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
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-bold uppercase tracking-widest">Occitanie · Grand Sud</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              Nettoyage Panneaux<br />Photovoltaïques<br />
              <span className="text-amber-400">par Drone</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-bold italic">
              Maximisez votre production d'énergie solaire en Occitanie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb SEO */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-amber-600 font-medium" itemProp="item"><span itemProp="name">Accueil</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/prestations" className="hover:text-amber-600 font-medium" itemProp="item"><span itemProp="name">Nos Prestations</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-amber-600 font-bold" itemProp="name">Nettoyage Panneaux Photovoltaïques</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction géolocalisée */}
            <ScrollReveal>
              <section>
                <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  Performance & Robotique en Occitanie
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium">
                  <p>
                    En Occitanie, les panneaux photovoltaïques encrassés perdent entre <strong>20% et 30% de rendement énergétique</strong>. Poussière du Midi, pollens printaniers, calcaire, fientes d'oiseaux : le climat méditerranéen accélère l'encrassement bien plus qu'en nord de la France.
                  </p>
                  <p>
                    Ellipsys Solutions intervient dans tout le Grand Sud — <strong>Hérault, Gard, Aude, Haute-Garonne et Pyrénées-Orientales</strong> — avec une double expertise unique : l'agilité du drone certifié DGAC et la précision de la robotique spécialisée.
                  </p>
                  <p>
                    Nos robots ultra-légers de <strong>6 kg et 9 kg</strong> nettoient sans brossage mécanique à l'eau osmosée pure, respectant l'intégrité de vos cellules photovoltaïques. <strong>500 m² nettoyés en 45 minutes</strong>, sans nacelle, sans échafaudage, sans interruption d'activité.
                  </p>
                </div>

                {/* Chiffres clés */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { val: "+30%", label: "Rendement récupéré" },
                    { val: "40%", label: "Moins cher qu'une nacelle" },
                    { val: "45min", label: "Pour 500m²" },
                  ].map((item, i) => (
                    <div key={i} className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100">
                      <div className="text-2xl md:text-3xl font-black text-amber-600">{item.val}</div>
                      <div className="text-xs text-gray-600 font-bold uppercase tracking-tight mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Équipements */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                Équipements de pointe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Robotique 6kg & 9kg", 
                    desc: "Nettoyage robotisé ultra-léger sans brossage mécanique pour une sécurité totale de vos panneaux.", 
                    icon: Cpu 
                  },
                  { 
                    title: "Drone Spécialisé DGAC", 
                    desc: "Idéal pour les accès complexes, fortes pentes ou grandes fermes solaires agricoles en Occitanie.", 
                    icon: Zap 
                  },
                  { 
                    title: "Eau Osmosée Pure", 
                    desc: "Séchage parfait sans résidus minéraux grâce à une eau filtrée à 99%. Aucune trace de calcaire.", 
                    icon: Droplets 
                  },
                  { 
                    title: "Analyse Thermique", 
                    desc: "Détection des points chauds et défauts de cellules par caméra infrarouge. Diagnostic inclus.", 
                    icon: TrendingUp 
                  }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-amber-50 p-6 md:p-8 rounded-[2rem] border border-amber-100 flex items-start gap-5 h-full transition-all hover:bg-amber-100/50">
                      <div className="bg-white p-4 rounded-2xl shadow-md">
                        <item.icon className="w-6 h-6 text-amber-600" />
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

            {/* Pourquoi choisir Ellipsys */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  Pourquoi choisir Ellipsys Solutions ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { 
                      t: "Zéro Brossage", 
                      d: "Nettoyage chimique doux et eau osmosée pure, sans abrasion mécanique sur vos cellules.", 
                      icon: Shield 
                    },
                    { 
                      t: "Poids Plume (6-9kg)", 
                      d: "Aucune contrainte structurelle sur vos châssis ou vos panneaux. Idéal toitures fragiles.", 
                      icon: Target 
                    },
                    { 
                      t: "Rapidité & ROI", 
                      d: "500m² en 45 minutes. Retour immédiat sur investissement dès la première intervention.", 
                      icon: TrendingUp 
                    },
                    { 
                      t: "Sécurité Sol", 
                      d: "Techniciens au sol uniquement. Risques de chute ou d'arc électrique entièrement éliminés.", 
                      icon: Zap 
                    }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-5 p-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200">
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

            {/* Zone d'intervention */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  Zone d'intervention — Occitanie & Grand Sud
                </h2>
                <p className="text-gray-600 font-medium mb-6">
                  Ellipsys Solutions intervient pour le nettoyage de panneaux photovoltaïques dans les départements suivants. Vous êtes un exploitant de ferme solaire hors zone ? Contactez-nous, nous nous déplaçons sur devis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zones.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-black text-[#233B72] text-sm uppercase tracking-tight">{zone.dept}</div>
                        <div className="text-sm text-gray-500 font-medium mt-1">{zone.villes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Garanties & Certifications */}
            <section className="bg-gradient-to-br from-gray-900 to-[#233B72] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Award size={250} />
              </div>
              <h2 className="text-xl md:text-2xl font-black mb-12 text-center uppercase tracking-[0.2em] text-amber-400 italic">
                Garanties & Certifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {[
                  'Certifié DGAC', 
                  'RC Pro Spécifique', 
                  'Conforme Législation 2026', 
                  'Expertise Solaire', 
                  'Assurance Décennale', 
                  'Respect Normes VDE'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 flex flex-col items-center gap-4 transition-colors hover:bg-white/10">
                    <Award className="w-8 h-8 text-amber-400" />
                    <span className="text-xs md:text-sm font-black uppercase tracking-wider leading-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ SEO */}
            <ScrollReveal>
              <section itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  Questions fréquentes
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div 
                      key={i} 
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                      itemScope 
                      itemProp="mainEntity" 
                      itemType="https://schema.org/Question"
                    >
                      <button
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        aria-expanded={openFaq === i}
                      >
                        <span className="font-black text-[#233B72] pr-4" itemProp="name">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div 
                          className="px-6 pb-6 text-gray-600 font-medium leading-relaxed border-t border-gray-100 pt-4"
                          itemScope 
                          itemProp="acceptedAnswer" 
                          itemType="https://schema.org/Answer"
                        >
                          <p itemProp="text">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* CTA final */}
            <ScrollReveal>
              <section className="bg-amber-50 rounded-[2.5rem] p-10 md:p-14 border border-amber-100 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  Prêt à maximiser votre production solaire ?
                </h2>
                <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                  Nous intervenons dans toute l'Occitanie pour le nettoyage de vos panneaux photovoltaïques. Contactez-nous pour un devis personnalisé adapté à votre installation.
                </p>
                <Link 
                  to="/devis"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-amber-200 hover:shadow-amber-300 hover:-translate-y-1"
                >
                  Demander un devis
                </Link>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar Sticky */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">

              {/* CTA Solaire */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                  Boostez votre ROI
                </h3>
                <p className="mb-8 text-amber-50 font-medium leading-relaxed">
                  Récupérez jusqu'à 30% de rendement grâce à nos robots ultra-légers certifiés DGAC.
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-orange-600 py-5 rounded-2xl font-black text-center block hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                >
                  Demander un devis
                </Link>
              </div>

              {/* Spécifications */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  Spécifications
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Cpu, title: 'Poids Robot', val: '6 - 9kg' },
                    { icon: Droplets, title: 'Technologie', val: 'Sans brosse' },
                    { icon: TrendingUp, title: 'Rendement', val: '+30%' },
                    { icon: Clock, title: 'Intervention', val: '45min/500m²' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-amber-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-amber-600" /></div>
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-sm font-black text-orange-600">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone d'intervention sidebar */}
              <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
                <h4 className="font-black text-[#233B72] mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Zone d'intervention
                </h4>
                <p className="text-sm font-black text-gray-700 mb-1">Hérault · Gard · Aude</p>
                <p className="text-sm font-black text-gray-700 mb-3">Pyrénées-Orientales · Haute-Garonne</p>
                <p className="text-xs text-gray-500 font-medium">
                  Montpellier, Nîmes, Perpignan, Toulouse, Carcassonne et alentours
                </p>
              </div>

              {/* Autres prestations */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                  Autres Prestations
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    Nettoyage de Façade
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    Démoussage de Toiture
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/nids-frelons" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    Destruction Nids de Frelons
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
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
