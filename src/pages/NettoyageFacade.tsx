import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Leaf, CheckCircle, ChevronRight,
  Droplets, Award, Building, Factory, Warehouse, Sparkles, MapPin, ChevronDown
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
  "name": "Nettoyage de Façades par Drone Occitanie",
  "description": "Nettoyage professionnel de façades par drone en Occitanie. Syndics, usines, entrepôts. Pilotes certifiés DGAC, produits Ecolab, zéro échafaudage. Intervention dans l'Hérault, Gard, Aude, Haute-Garonne et Pyrénées-Orientales.",
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
    "areaServed": [{"@type":"Country","name":"France"},{"@type":"Country","name":"Belgique"},{"@type":"Country","name":"Espagne"},{"@type":"AdministrativeArea","name":"Occitanie"},{"@type":"AdministrativeArea","name":"Hérault"},{"@type":"AdministrativeArea","name":"Gard"},{"@type":"AdministrativeArea","name":"Aude"},{"@type":"AdministrativeArea","name":"Haute-Garonne"},{"@type":"AdministrativeArea","name":"Pyrénées-Orientales"}]
  },
  "serviceType": "Nettoyage façades bâtiments",
  "areaServed": { "@type": "Country", "name": "France" }
};

const faqSchema = (faqs: {q: string, a: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

export default function NettoyageFacade() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = isFr ? [
    {
      q: "Quels types de façades peuvent être nettoyées par drone en Occitanie ?",
      a: "Nos drones traitent tous les types de surfaces : enduits et crépis, bardages métalliques industriels, façades vitrées, briques, pierre et béton architectonique. Nous intervenons sur des bâtiments résidentiels, industriels et commerciaux dans tout l'Hérault, le Gard, l'Aude et la Haute-Garonne."
    },
    {
      q: "Le nettoyage de façade par drone est-il aussi efficace qu'une nacelle ?",
      a: "Oui, et souvent plus. Nos drones accèdent à des zones inaccessibles aux nacelles (recoins, angles, toitures complexes) et pulvérisent uniformément les produits Ecolab à basse pression. Le résultat est identique ou supérieur, sans aucun risque de dommage mécanique sur votre façade."
    },
    {
      q: "Combien de temps dure le nettoyage d'une façade par drone ?",
      a: "Nos drones traitent jusqu'à 400 m² par heure. Un immeuble résidentiel standard peut être traité en demi-journée. Sans installation de nacelle ni d'échafaudage, l'intervention est 3 à 4 fois plus rapide qu'une méthode traditionnelle."
    },
    {
      q: "Combien coûte le nettoyage de façade par drone par rapport à une nacelle ?",
      a: "En moyenne 30% moins cher qu'une nacelle élévatrice. La différence vient de l'absence totale de logistique lourde (location, transport, montage). Pour un devis précis adapté à votre bâtiment en Occitanie, contactez-nous — réponse sous 24h."
    },
    {
      q: "Intervenez-vous pour les syndics de copropriété à Montpellier et en Occitanie ?",
      a: "Oui, c'est une de nos cibles principales. Nous travaillons avec les syndics et gestionnaires de copropriétés en Occitanie pour l'entretien des façades résidentielles. Intervention sans gêne pour les résidents, sans montage d'échafaudage, avec rapport d'intervention fourni."
    }
  ] : [
    {
      q: "What types of facades can be cleaned by drone in Southern France?",
      a: "Our drones treat all surface types: renders and plaster, industrial metal cladding, glazed facades, brick, stone and architectural concrete. We operate on residential, industrial and commercial buildings throughout Hérault, Gard, Aude and Haute-Garonne."
    },
    {
      q: "Is drone facade cleaning as effective as an aerial platform?",
      a: "Yes, and often more so. Our drones access areas inaccessible to platforms (corners, complex roofs) and spray Ecolab products uniformly at low pressure. Results are equal or superior, with no risk of mechanical damage to your facade."
    },
    {
      q: "How long does drone facade cleaning take?",
      a: "Our drones treat up to 400 m² per hour. A standard residential building can be treated in half a day. Without lift or scaffolding installation, the intervention is 3 to 4 times faster than traditional methods."
    },
    {
      q: "How much does drone facade cleaning cost compared to an aerial platform?",
      a: "On average 30% cheaper than an aerial platform. The difference comes from the complete absence of heavy logistics (rental, transport, assembly). For a precise quote for your building, contact us — response within 24h."
    },
    {
      q: "Do you work with property managers in Montpellier and Southern France?",
      a: "Yes, it's one of our main targets. We work with property managers in Occitanie for residential facade maintenance. Intervention without disruption to residents, no scaffolding assembly, with intervention report provided."
    }
  ];

  const zones = [
    { dept: "Hérault (34)", villes: "Montpellier, Béziers, Sète, Lunel" },
    { dept: "Gard (30)", villes: "Nîmes, Alès, Bagnols-sur-Cèze" },
    { dept: "Aude (11)", villes: "Carcassonne, Narbonne, Limoux" },
    { dept: "Haute-Garonne (31)", villes: "Toulouse, Muret, Saint-Gaudens" },
    { dept: "Pyrénées-Orientales (66)", villes: "Perpignan, Canet, Prades" },
    { dept: isFr ? "France entière & International" : "All France & International", villes: isFr ? "Déplacement sans restriction sur devis" : "No restriction travel on request" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/ares.png" className="w-full h-full object-cover scale-110"
            alt={isFr ? "Nettoyage façade par drone en Occitanie - Ellipsys Solutions" : "Drone facade cleaning in Southern France - Ellipsys Solutions"} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233B72]/95 to-[#233B72]/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                {isFr ? "Occitanie · Grand Sud" : "Occitanie · Southern France"}
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {isFr ? <>Nettoyage<br />de Façades<br /><span className="text-blue-400">par Drone</span></> 
                     : <>Facade<br />Cleaning<br /><span className="text-blue-400">by Drone</span></>}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-bold italic drop-shadow-md">
              {isFr ? 'Syndics, Usines & Entrepôts : La solution sans échafaudage en Occitanie' : 'Property Managers & Factories: The scaffolding-free solution in Southern France'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-blue-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Accueil" : "Home"}</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/prestations" className="hover:text-blue-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Nos Prestations" : "Our Services"}</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-blue-600 font-bold" itemProp="name">{isFr ? "Nettoyage de Façades" : "Facade Cleaning"}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contenu Principal */}
          <div className="lg:w-2/3 space-y-16">

            {/* Introduction géolocalisée */}
            <ScrollReveal>
              <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  {isFr ? "L'innovation au service de vos bâtiments en Occitanie" : "Innovation for your buildings in Southern France"}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                  {isFr ? (
                    <>
                      <p>En Occitanie, les pollutions atmosphériques, les algues rouges, les lichens et les intempéries dégradent rapidement l'esthétique et l'intégrité de vos façades. À <strong>Montpellier, Nîmes, Toulouse et Perpignan</strong>, le nettoyage traditionnel nécessite l'installation lourde et coûteuse d'échafaudages ou de nacelles.</p>
                      <p>Ellipsys Solutions révolutionne l'entretien de votre patrimoine immobilier en Occitanie grâce à ses drones certifiés DGAC. Nous pulvérisons des <strong>traitements professionnels Ecolab</strong> à basse pression, garantissant un résultat irréprochable sans aucune agression mécanique sur vos supports.</p>
                      <p>Résultat : <strong>30% moins cher qu'une nacelle</strong>, 4x plus rapide, zéro risque de chute pour vos équipes, et aucune interruption de votre activité ou de la vie des résidents.</p>
                    </>
                  ) : (
                    <>
                      <p>In Occitanie, atmospheric pollution, red algae, lichens and weather quickly degrade the aesthetics and integrity of your facades. In <strong>Montpellier, Nîmes, Toulouse and Perpignan</strong>, traditional cleaning requires heavy and expensive scaffolding or lifts.</p>
                      <p>Ellipsys Solutions revolutionizes building maintenance in Southern France with DGAC-certified drones. We spray <strong>professional Ecolab treatments</strong> at low pressure, guaranteeing flawless results without mechanical damage.</p>
                      <p>Result: <strong>30% cheaper than an aerial platform</strong>, 4x faster, zero fall risk for your teams, and no disruption to your business or residents' lives.</p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { val: "30%", label: isFr ? "Moins cher nacelle" : "Cheaper than lift" },
                    { val: "4x", label: isFr ? "Plus rapide" : "Faster" },
                    { val: "50m", label: isFr ? "Hauteur max" : "Max height" },
                  ].map((item, i) => (
                    <div key={i} className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                      <div className="text-2xl md:text-3xl font-black text-blue-600">{item.val}</div>
                      <div className="text-xs text-gray-600 font-bold uppercase tracking-tight mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Clients ciblés */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {isFr ? "Nos clients en Occitanie" : "Our clients in Southern France"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: isFr ? 'Syndics & Copropriétés' : 'Property Managers', desc: isFr ? 'Aucune gêne pour les résidents. Entretien rapide des résidences à Montpellier, Nîmes et Toulouse.' : 'No disturbance for residents. Fast maintenance of buildings in Montpellier, Nîmes and Toulouse.', icon: Building },
                    { title: isFr ? 'Directeurs d\'Usines' : 'Factory Directors', desc: isFr ? 'Nettoyage de bardages industriels sans arrêt de production. Intervention sur tout le Grand Sud.' : 'Industrial cladding cleaning without production shutdown. Intervention throughout Greater South.', icon: Factory },
                    { title: isFr ? 'Entrepôts & Logistique' : 'Warehouses & Logistics', desc: isFr ? 'Traitement des immenses surfaces métalliques et façades commerciales en Occitanie.' : 'Treatment of massive metal surfaces and commercial facades in Occitanie.', icon: Warehouse }
                  ].map((target, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <target.icon className="w-7 h-7 text-[#233B72] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-black text-[#233B72] text-lg mb-3 uppercase tracking-tight">{target.title}</h3>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">{target.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Surfaces & Méthodologie */}
            <ScrollReveal delay={0.2}>
              <section className="bg-[#233B72] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none"><Building size={300} /></div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-blue-400">
                      {isFr ? '100% des surfaces traitées' : '100% of surfaces treated'}
                    </h3>
                    <ul className="space-y-4 font-medium text-blue-100">
                      {['Enduits, Crépis et Peintures', 'Bardages métalliques industriels', 'Façades vitrées et murs-rideaux', 'Briques, Pierres et Béton architectonique'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-blue-400">
                      {isFr ? 'Notre Méthodologie' : 'Our Methodology'}
                    </h3>
                    <div className="space-y-6">
                      {[
                        { n: 1, t: isFr ? 'Diagnostic & Sécurisation' : 'Diagnosis & Security', d: isFr ? 'Analyse du support et balisage de la zone d\'exclusion.' : 'Surface analysis and exclusion zone marking.' },
                        { n: 2, t: isFr ? 'Pulvérisation Drone' : 'Drone Spraying', d: isFr ? 'Application uniforme de notre solution Ecolab à basse pression.' : 'Uniform application of our Ecolab solution at low pressure.' },
                        { n: 3, t: isFr ? 'Rapport d\'intervention' : 'Intervention Report', d: isFr ? 'Compte-rendu détaillé transmis sous 48h.' : 'Detailed report delivered within 48h.' },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center font-bold shrink-0">{step.n}</div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{step.t}</h4>
                            <p className="text-sm text-blue-200">{step.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Avantages */}
            <ScrollReveal delay={0.3}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  {isFr ? "Pourquoi choisir Ellipsys Solutions ?" : "Why choose Ellipsys Solutions?"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { t: isFr ? "Zéro Échafaudage" : "Zero Scaffolding", d: isFr ? "Pas de montage, économie drastique sur les coûts annexes." : "No setup, drastic savings on additional costs.", icon: Building },
                    { t: isFr ? "Certifié DGAC" : "DGAC Certified", d: isFr ? "Pilotes certifiés, aucun risque de chute (Plan de Prévention allégé)." : "Certified pilots, zero fall risk.", icon: ShieldCheck },
                    { t: isFr ? "Produits Ecolab" : "Ecolab Products", d: isFr ? "Efficacité redoutable contre les pollutions urbaines et biologiques." : "Highly effective against urban and biological pollution.", icon: Sparkles },
                    { t: isFr ? "Basse Pression" : "Low Pressure", d: isFr ? "Nettoyage doux, n'altère ni la peinture ni l'enduit." : "Gentle cleaning that doesn't alter paint or plaster.", icon: Droplets }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-5 p-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
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

            {/* Zone intervention */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
                  {isFr ? "Zone d'intervention — France & International" : "Coverage Area — France & International"}
                </h2>
                <p className="text-gray-600 font-medium mb-6">
                  {isFr ? "Basés à Montpellier en Occitanie, nous intervenons pour le nettoyage de façades sur toute la France et à l'international. Syndics, industriels, gestionnaires de patrimoine : aucun déplacement n'est un obstacle. Contactez-nous pour un devis." : "Based in Montpellier, we provide facade cleaning across all of France and internationally. Property managers, industrials, asset managers: no travel is an obstacle. Contact us for a quote."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zones.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-black text-[#233B72] text-sm uppercase tracking-tight">{zone.dept}</div>
                        <div className="text-sm text-gray-500 font-medium mt-1">{zone.villes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal>
              <section itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
                  {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                        <span className="font-black text-[#233B72] pr-4" itemProp="name">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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

            {/* CTA Final */}
            <ScrollReveal>
              <section className="bg-blue-50 rounded-[2.5rem] p-10 md:p-14 border border-blue-100 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  {isFr ? "Nettoyage de façade sans échafaudage en Occitanie" : "Scaffolding-free facade cleaning in Southern France"}
                </h2>
                <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                  {isFr ? "Syndics, industriels, gestionnaires : obtenez votre étude chiffrée sous 48h pour vos façades et bardages en Occitanie." : "Property managers, industrials: get your estimate within 48h for your facades in Southern France."}
                </p>
                <Link to="/devis" className="inline-block bg-[#233B72] hover:bg-blue-800 text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#233B72] to-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl text-center">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
                  {isFr ? "Devis pour professionnels" : "Quote for Professionals"}
                </h3>
                <p className="mb-8 text-blue-100 font-medium leading-relaxed text-sm">
                  {isFr ? 'Syndics, industriels, gestionnaires : étude chiffrée sous 48h.' : 'Property managers, industrials: estimate within 48h.'}
                </p>
                <Link to="/devis" className="w-full bg-white text-[#233B72] py-5 rounded-2xl font-black text-center block hover:bg-blue-900 hover:text-white transition-all shadow-xl uppercase tracking-widest">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </div>

              {/* Spécifications */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {isFr ? 'Fiche Technique' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: ShieldCheck, title: isFr ? 'Légalité' : 'Legality', val: 'Certifié DGAC' },
                    { icon: Building, title: isFr ? 'Hauteur Max' : 'Max Height', val: isFr ? 'Accès illimité' : 'Unlimited access' },
                    { icon: Sparkles, title: 'Traitement', val: 'Gamme Ecolab' },
                    { icon: Zap, title: isFr ? 'Vitesse' : 'Speed', val: '400m²/h' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-sky-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-blue-500" /></div>
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-sm font-black text-[#233B72]">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone sidebar */}
              <div className="bg-blue-50 rounded-[2rem] p-8 border border-blue-100">
                <h4 className="font-black text-[#233B72] mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  {isFr ? "Zone d'intervention" : "Coverage Area"}
                </h4>
                <p className="text-sm font-black text-gray-700 mb-1">Hérault · Gard · Aude</p>
                <p className="text-sm font-black text-gray-700 mb-3">Pyrénées-Orientales · Haute-Garonne</p>
                <p className="text-xs text-gray-500 font-medium">
                  {isFr ? "Occitanie · PACA · Île-de-France · France entière · International sur devis" : "Occitanie · PACA · Île-de-France · All France · International on request"}
                </p>
              </div>

              {/* Autres prestations */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                  {isFr ? "Autres Prestations" : "Other Services"}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Démoussage de Toiture" : "Roof Moss Removal"}
                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage Panneaux PV" : "Solar Panel Cleaning"}
                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/nids-frelons" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Destruction Nids de Frelons" : "Hornet Nest Removal"}
                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1" />
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
