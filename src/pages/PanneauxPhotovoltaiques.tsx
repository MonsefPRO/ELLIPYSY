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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nettoyage Panneaux Photovoltaïques par Drone",
  "description": "Nettoyage professionnel de panneaux solaires par drone et robotique en Occitanie. Pilotes certifiés DGAC, robots ultra-légers 6-9kg, eau osmosée pure.",
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
  "areaServed": { "@type": "State", "name": "Occitanie" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "À quelle fréquence nettoyer ses panneaux solaires en Occitanie ?",
      "acceptedAnswer": { "@type": "Answer", "text": "En Occitanie, nous recommandons 2 nettoyages par an : avant l'été (avril-mai) et en automne après les pollens." }
    },
    {
      "@type": "Question",
      "name": "Combien coûte le nettoyage de panneaux solaires par drone ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Notre méthode est en moyenne 40% moins chère qu'une nacelle élévatrice. Contactez-nous pour un devis personnalisé." }
    },
    {
      "@type": "Question",
      "name": "Quelle perte de rendement sans nettoyage de panneaux photovoltaïques ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Entre 20% et 30% selon l'encrassement. Sur 100 kWc, cela représente plusieurs milliers d'euros de production perdue par an." }
    },
    {
      "@type": "Question",
      "name": "Le nettoyage par drone endommage-t-il les panneaux solaires ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Non. Nos robots 6-9 kg nettoient sans brossage mécanique, à l'eau osmosée pure filtrée à 99%. Zéro abrasion, zéro risque." }
    },
    {
      "@type": "Question",
      "name": "Ellipsys Solutions intervient dans quelles zones ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hérault, Gard, Aude, Pyrénées-Orientales et Haute-Garonne. Grandes fermes solaires hors zone sur devis." }
    }
  ]
};

export default function PanneauxPhotovoltaiques() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = isFr ? [
    {
      q: "À quelle fréquence nettoyer ses panneaux solaires en Occitanie ?",
      a: "En Occitanie, nous recommandons 2 nettoyages par an : avant l'été (avril-mai) pour maximiser la production estivale, et en automne après les pollens. Le climat méditerranéen — pollens printaniers, poussière, calcaire et fientes d'oiseaux — encrasse les panneaux plus rapidement qu'ailleurs en France."
    },
    {
      q: "Combien coûte le nettoyage de panneaux solaires par drone ?",
      a: "Notre méthode est en moyenne 40% moins chère qu'une nacelle élévatrice traditionnelle (location + sécurité + temps d'immobilisation). Contactez-nous pour un devis personnalisé adapté à votre installation."
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
      a: "Nous intervenons dans tout le Grand Sud : Hérault (Montpellier, Béziers, Sète), Gard (Nîmes, Alès), Aude (Carcassonne, Narbonne), Pyrénées-Orientales (Perpignan) et Haute-Garonne (Toulouse). Disponibles pour les grandes fermes solaires hors zone."
    }
  ] : [
    {
      q: "How often should solar panels be cleaned in Southern France?",
      a: "In Occitanie, we recommend 2 cleanings per year: before summer (April-May) to maximize production, and in autumn after pollen season. The Mediterranean climate clogs panels faster than elsewhere in France."
    },
    {
      q: "How much does drone solar panel cleaning cost?",
      a: "Our method is on average 40% cheaper than a traditional aerial platform (rental + safety + downtime). Contact us for a personalized quote tailored to your installation."
    },
    {
      q: "How much yield is lost without cleaning?",
      a: "Between 20% and 30% depending on fouling. For a 100 kWp installation, this represents thousands of euros in lost production per year. Regular cleaning pays for itself from the first intervention."
    },
    {
      q: "Does drone cleaning damage solar panels?",
      a: "No. Our ultra-light 6-9 kg robots clean without mechanical brushing, exclusively with 99% filtered pure osmosed water. Zero abrasion, zero mechanical pressure, zero risk to your cells."
    },
    {
      q: "Which areas do you cover?",
      a: "We operate throughout the Greater South: Hérault (Montpellier, Béziers), Gard (Nîmes), Aude (Carcassonne), Pyrénées-Orientales (Perpignan) and Haute-Garonne (Toulouse). Available for large solar farms outside this area."
    }
  ];

  const zones = [
    { dept: "Hérault (34)", villes: "Montpellier, Béziers, Sète, Lunel" },
    { dept: "Gard (30)", villes: "Nîmes, Alès, Bagnols-sur-Cèze" },
    { dept: "Aude (11)", villes: "Carcassonne, Narbonne, Limoux" },
    { dept: "Haute-Garonne (31)", villes: "Toulouse, Muret, Saint-Gaudens" },
    { dept: "Pyrénées-Orientales (66)", villes: "Perpignan, Canet, Prades" },
    { dept: isFr ? "Hors zone" : "Outside area", villes: isFr ? "Grandes fermes solaires sur devis" : "Large solar farms on quote" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/rony.jpg" 
            className="w-full h-full object-cover scale-110"
            alt={isFr ? "Nettoyage panneaux photovoltaïques par drone en Occitanie - Ellipsys Solutions" : "Drone solar panel cleaning in Southern France - Ellipsys Solutions"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-orange-800/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-bold uppercase tracking-widest">
                {isFr ? "Occitanie · Grand Sud" : "Occitanie · Southern France"}
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              {isFr ? (
                <>Nettoyage Panneaux<br />Photovoltaïques<br /><span className="text-amber-400">par Drone</span></>
              ) : (
                <>Solar Panel<br />Cleaning<br /><span className="text-amber-400">by Drone</span></>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-bold italic">
              {isFr ? "Maximisez votre production d'énergie solaire en Occitanie" : "Maximize your solar energy production in Southern France"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-amber-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Accueil" : "Home"}</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/prestations" className="hover:text-amber-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Nos Prestations" : "Our Services"}</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-amber-600 font-bold" itemProp="name">{isFr ? "Nettoyage Panneaux Photovoltaïques" : "Solar Panel Cleaning"}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contenu Principal */}
          <div className="lg:w-2/3 space-y-16">

            {/* Introduction */}
            <ScrollReveal>
              <section>
                <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  {isFr ? "Performance & Robotique en Occitanie" : "Performance & Robotics in Southern France"}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium">
                  {isFr ? (
                    <>
                      <p>En Occitanie, les panneaux photovoltaïques encrassés perdent entre <strong>20% et 30% de rendement énergétique</strong>. Poussière du Midi, pollens printaniers, calcaire, fientes d'oiseaux : le climat méditerranéen accélère l'encrassement bien plus qu'en nord de la France.</p>
                      <p>Ellipsys Solutions intervient dans tout le Grand Sud — <strong>Hérault, Gard, Aude, Haute-Garonne et Pyrénées-Orientales</strong> — avec une double expertise unique : l'agilité du drone certifié DGAC et la précision de la robotique spécialisée.</p>
                      <p>Nos robots ultra-légers de <strong>6 kg et 9 kg</strong> nettoient sans brossage mécanique à l'eau osmosée pure. <strong>500 m² nettoyés en 45 minutes</strong>, sans nacelle, sans échafaudage, sans interruption d'activité.</p>
                    </>
                  ) : (
                    <>
                      <p>In Southern France, dirty photovoltaic panels lose between <strong>20% and 30% of energy yield</strong>. Mediterranean dust, spring pollen, limestone and bird droppings accelerate fouling far faster than in northern France.</p>
                      <p>Ellipsys Solutions operates throughout the Greater South — <strong>Hérault, Gard, Aude, Haute-Garonne and Pyrénées-Orientales</strong> — with a unique dual expertise: DGAC-certified drones and specialized robotics precision.</p>
                      <p>Our ultra-light <strong>6 kg and 9 kg robots</strong> clean without mechanical brushing using pure osmosed water. <strong>500 m² cleaned in 45 minutes</strong>, no aerial platform, no scaffolding, no business interruption.</p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { val: "+30%", label: isFr ? "Rendement récupéré" : "Yield recovered" },
                    { val: "40%", label: isFr ? "Moins cher qu'une nacelle" : "Cheaper than aerial platform" },
                    { val: "45min", label: isFr ? "Pour 500m²" : "For 500m²" },
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
                {isFr ? "Équipements de pointe" : "State-of-the-art Equipment"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: isFr ? "Robotique 6kg & 9kg" : "6kg & 9kg Robotics", desc: isFr ? "Nettoyage robotisé ultra-léger sans brossage mécanique pour une sécurité totale de vos panneaux." : "Ultra-light robotic cleaning without mechanical brushing for total panel safety.", icon: Cpu },
                  { title: isFr ? "Drone Spécialisé DGAC" : "DGAC-Certified Drone", desc: isFr ? "Idéal pour les accès complexes, fortes pentes ou grandes fermes solaires agricoles en Occitanie." : "Ideal for complex access, steep slopes or large agricultural solar farms in Southern France.", icon: Zap },
                  { title: isFr ? "Eau Osmosée Pure" : "Pure Osmosed Water", desc: isFr ? "Séchage parfait sans résidus minéraux grâce à une eau filtrée à 99%. Aucune trace de calcaire." : "Perfect drying without mineral residue with 99% filtered water. No limestone traces.", icon: Droplets },
                  { title: isFr ? "Analyse Thermique" : "Thermal Analysis", desc: isFr ? "Détection des points chauds et défauts de cellules par caméra infrarouge. Diagnostic inclus." : "Detection of hot spots and cell defects via infrared camera. Diagnosis included.", icon: TrendingUp }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-amber-50 p-6 md:p-8 rounded-[2rem] border border-amber-100 flex items-start gap-5 h-full transition-all hover:bg-amber-100/50">
                      <div className="bg-white p-4 rounded-2xl shadow-md"><item.icon className="w-6 h-6 text-amber-600" /></div>
                      <div>
                        <h3 className="font-black text-[#233B72] text-lg mb-2 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </Hover3DCard>
                ))}
              </div>
            </section>

            {/* Avantages */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  {isFr ? "Pourquoi choisir Ellipsys Solutions ?" : "Why choose Ellipsys Solutions?"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { t: isFr ? "Zéro Brossage" : "Zero Brushing", d: isFr ? "Nettoyage à l'eau osmosée pure, sans abrasion mécanique sur vos cellules." : "Pure osmosed water cleaning, no mechanical abrasion on your cells.", icon: Shield },
                    { t: isFr ? "Poids Plume (6-9kg)" : "Ultra-Light (6-9kg)", d: isFr ? "Aucune contrainte structurelle sur vos châssis ou vos panneaux." : "No structural stress on your frames or panels.", icon: Target },
                    { t: isFr ? "Rapidité & ROI" : "Speed & ROI", d: isFr ? "500m² en 45 minutes. Retour sur investissement dès la première intervention." : "500m² in 45 minutes. Return on investment from the first intervention.", icon: TrendingUp },
                    { t: isFr ? "Sécurité Sol" : "Ground Safety", d: isFr ? "Techniciens au sol uniquement. Risques de chute ou d'arc électrique éliminés." : "Ground-level technicians only. Fall and electric arc risks completely eliminated.", icon: Zap }
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
                  {isFr ? "Zone d'intervention — Occitanie & Grand Sud" : "Coverage Area — Occitanie & Southern France"}
                </h2>
                <p className="text-gray-600 font-medium mb-6">
                  {isFr
                    ? "Ellipsys Solutions intervient pour le nettoyage de panneaux photovoltaïques dans les départements suivants. Exploitant une ferme solaire hors zone ? Contactez-nous, nous nous déplaçons sur devis."
                    : "Ellipsys Solutions provides solar panel cleaning in the following departments. Operating a solar farm outside this area? Contact us, we travel on quote."
                  }
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

            {/* Garanties */}
            <section className="bg-gradient-to-br from-gray-900 to-[#233B72] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none"><Award size={250} /></div>
              <h2 className="text-xl md:text-2xl font-black mb-12 text-center uppercase tracking-[0.2em] text-amber-400 italic">
                {isFr ? "Garanties & Certifications" : "Guarantees & Certifications"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {[
                  isFr ? 'Certifié DGAC' : 'DGAC Certified',
                  isFr ? 'RC Pro Spécifique' : 'Specific Liability Insurance',
                  isFr ? 'Conforme Législation 2026' : 'Compliant 2026 Legislation',
                  isFr ? 'Expertise Solaire' : 'Solar Expertise',
                  isFr ? 'Assurance Décennale' : 'Ten-Year Insurance',
                  'Respect Normes VDE'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 flex flex-col items-center gap-4 transition-colors hover:bg-white/10">
                    <Award className="w-8 h-8 text-amber-400" />
                    <span className="text-xs md:text-sm font-black uppercase tracking-wider leading-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <ScrollReveal>
              <section itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-amber-500 rounded-full"></div>
                  {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                        <span className="font-black text-[#233B72] pr-4" itemProp="name">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed border-t border-gray-100 pt-4" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
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
                  {isFr ? "Prêt à maximiser votre production solaire ?" : "Ready to maximize your solar production?"}
                </h2>
                <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                  {isFr
                    ? "Nous intervenons dans toute l'Occitanie pour le nettoyage de vos panneaux photovoltaïques. Contactez-nous pour un devis personnalisé."
                    : "We operate throughout Southern France for photovoltaic panel cleaning. Contact us for a personalized quote."
                  }
                </p>
                <Link to="/devis" className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-amber-200 hover:shadow-amber-300 hover:-translate-y-1">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">

              {/* CTA */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] p-10 text-white shadow-2xl text-center">
                <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                  {isFr ? "Boostez votre ROI" : "Boost your ROI"}
                </h3>
                <p className="mb-8 text-amber-50 font-medium leading-relaxed">
                  {isFr ? "Récupérez jusqu'à 30% de rendement grâce à nos robots ultra-légers certifiés DGAC." : "Recover up to 30% yield with our DGAC-certified ultra-light robots."}
                </p>
                <Link to="/devis" className="w-full bg-white text-orange-600 py-5 rounded-2xl font-black text-center block hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </div>

              {/* Spécifications */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {isFr ? "Spécifications" : "Specifications"}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Cpu, title: isFr ? 'Poids Robot' : 'Robot Weight', val: '6 - 9kg' },
                    { icon: Droplets, title: isFr ? 'Technologie' : 'Technology', val: isFr ? 'Sans brosse' : 'Brushless' },
                    { icon: TrendingUp, title: isFr ? 'Rendement' : 'Yield', val: '+30%' },
                    { icon: Clock, title: isFr ? 'Intervention' : 'Coverage', val: '45min/500m²' },
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

              {/* Zone sidebar */}
              <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
                <h4 className="font-black text-[#233B72] mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  {isFr ? "Zone d'intervention" : "Coverage Area"}
                </h4>
                <p className="text-sm font-black text-gray-700 mb-1">Hérault · Gard · Aude</p>
                <p className="text-sm font-black text-gray-700 mb-3">Pyrénées-Orientales · Haute-Garonne</p>
                <p className="text-xs text-gray-500 font-medium">
                  {isFr ? "Montpellier, Nîmes, Perpignan, Toulouse, Carcassonne et alentours" : "Montpellier, Nîmes, Perpignan, Toulouse, Carcassonne and surroundings"}
                </p>
              </div>

              {/* Autres prestations */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                  {isFr ? "Autres Prestations" : "Other Services"}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage de Façade" : "Facade Cleaning"}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Démoussage de Toiture" : "Roof Moss Removal"}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/nids-frelons" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Destruction Nids de Frelons" : "Hornet Nest Removal"}
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
