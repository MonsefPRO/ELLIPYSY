import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, CheckCircle, ChevronRight, AlertCircle,
  Phone, Target, Wind, ShieldAlert, ChevronDown, MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { FloatingDrone } from '../components/FloatingDrone';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const schemaData = (isFr: boolean) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": isFr ? "Destruction Nids de Frelons par Drone Occitanie" : "Drone Hornet Nest Removal Southern France",
  "description": isFr
    ? "Destruction professionnelle de nids de frelons asiatiques par drone en Occitanie. Intervention d'urgence, biocides certifiés Certibiocide, accès jusqu'à 50 mètres. Hérault, Gard, Aude, Haute-Garonne, Pyrénées-Orientales."
    : "Professional Asian hornet nest removal by drone in Southern France. Emergency intervention, Certibiocide-certified biocides, access up to 50 meters.",
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
  "serviceType": isFr ? "Destruction nids frelons asiatiques" : "Asian hornet nest removal",
  "areaServed": { "@type": "Country", "name": "France" }
});

const faqSchemaData = (faqs: {q: string, a: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

export default function EliminationFrelons() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = isFr ? [
    {
      q: "Pourquoi utiliser un drone pour détruire un nid de frelons en Occitanie ?",
      a: "Le drone permet d'atteindre des nids inaccessibles (cimes d'arbres, toitures très hautes) sans nacelle ni échelle. En Occitanie, le frelon asiatique est particulièrement présent dans l'Hérault, le Gard et l'Aude. Notre méthode est la plus sûre : l'opérateur reste au sol à distance sécurisée."
    },
    {
      q: "Est-ce dangereux pour l'environnement ?",
      a: "Non. Nous utilisons exclusivement des biocides certifiés Certibiocide, ciblés par injection directe au cœur du nid. Cela évite toute dispersion de produits chimiques dans l'air et protège la biodiversité environnante — notamment les abeilles et la faune locale en Occitanie."
    },
    {
      q: "Combien de temps dure l'intervention sur nid de frelons ?",
      a: "L'intervention par drone est extrêmement rapide. Localisation, vol et injection prennent généralement moins de 30 minutes. Le nid est neutralisé quasi instantanément, sans aucune installation de matériel lourd."
    },
    {
      q: "Que se passe-t-il après la destruction du nid de frelons ?",
      a: "Une fois le nid neutralisé, il se dégradera naturellement avec les intempéries. S'il est accessible et gênant, nous pouvons proposer son retrait. La neutralisation garantit que les frelons ne reviendront pas dans ce nid."
    },
    {
      q: "Intervenez-vous en urgence pour les nids de frelons à Montpellier et en Occitanie ?",
      a: "Oui. Nous proposons des interventions en urgence dans tout l'Hérault, le Gard, l'Aude, les Pyrénées-Orientales et la Haute-Garonne. Contactez-nous directement par téléphone au 04 67 20 97 09 pour une intervention rapide."
    }
  ] : [
    {
      q: "Why use a drone to destroy a hornet's nest in Southern France?",
      a: "The drone reaches inaccessible nests (tree tops, very high roofs) without lifts or ladders. The Asian hornet is particularly prevalent in Hérault, Gard and Aude. Our method is the safest: the operator remains on the ground at a safe distance."
    },
    {
      q: "Is it dangerous for the environment?",
      a: "No. We use exclusively Certibiocide-certified biocides, targeted by direct injection into the heart of the nest. This prevents chemical dispersion and protects local biodiversity — especially bees and local wildlife."
    },
    {
      q: "How long does a hornet nest intervention take?",
      a: "Drone intervention is extremely fast. Locating, flying and injecting takes less than 30 minutes. The nest is neutralized almost instantly, with no heavy equipment setup."
    },
    {
      q: "What happens after the hornet nest is destroyed?",
      a: "Once neutralized, the nest degrades naturally. If accessible and bothersome, we can offer removal. Neutralization guarantees hornets will not return to that nest."
    },
    {
      q: "Do you provide emergency hornet nest removal in Montpellier and Southern France?",
      a: "Yes. We offer emergency interventions throughout Hérault, Gard, Aude, Pyrénées-Orientales and Haute-Garonne. Call us directly at 04 67 20 97 09 for a rapid response."
    }
  ];

  const zones = [
    { dept: "Hérault (34)", villes: "Montpellier, Béziers, Sète, Lunel, Lodève" },
    { dept: "Gard (30)", villes: "Nîmes, Alès, Bagnols-sur-Cèze, Le Vigan" },
    { dept: "Aude (11)", villes: "Carcassonne, Narbonne, Limoux" },
    { dept: "Haute-Garonne (31)", villes: "Toulouse, Muret, Saint-Gaudens" },
    { dept: "Pyrénées-Orientales (66)", villes: "Perpignan, Canet, Prades" },
    { dept: isFr ? "France entière & International" : "All France & International", villes: isFr ? "Déplacement sans restriction sur devis" : "No restriction travel on request" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData(isFr)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData(faqs)) }} />

      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingDrone
            src="/abateur_de_frelons.png"
            className="w-full h-full object-cover scale-110"
            alt={isFr ? "Destruction nid de frelons par drone Occitanie - Ellipsys Solutions" : "Drone hornet nest removal Southern France - Ellipsys Solutions"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-rose-800/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-red-300" />
              <span className="text-red-200 text-sm font-bold uppercase tracking-widest">
                {isFr ? "Occitanie · Intervention d'urgence" : "Occitanie · Emergency Response"}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter drop-shadow-lg">
              {isFr ? <>Destruction<br />Nids de<br /><span className="text-red-400">Frelons</span><br />par Drone</> : <>Hornet Nest<br />Removal<br /><span className="text-red-400">by Drone</span></>}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 font-bold italic drop-shadow-md">
              {isFr ? 'Intervention sécurisée, sans exposition humaine, en Occitanie' : 'Safe intervention, no human exposure, in Southern France'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb SEO */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-red-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Accueil" : "Home"}</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/prestations" className="hover:text-red-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Nos Prestations" : "Our Services"}</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-red-600 font-bold" itemProp="name">{isFr ? "Destruction Nids de Frelons" : "Hornet Nest Removal"}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-16">

            {/* Introduction géolocalisée */}
            <ScrollReveal>
              <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-8 bg-red-600 rounded-full"></div>
                  {isFr ? "Neutralisation de précision en Occitanie" : "Precision Neutralization in Southern France"}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                  {isFr ? (
                    <>
                      <p>En Occitanie, le frelon asiatique (<em>Vespa velutina</em>) représente une menace croissante pour les habitants de <strong>Montpellier, Nîmes, Toulouse, Perpignan et Carcassonne</strong>. Ses nids, souvent nichés en hauteur dans les arbres ou sous les toitures, rendent toute intervention manuelle extrêmement dangereuse.</p>
                      <p>Ellipsys Solutions est certifiée <strong>DGAC et Certibiocide</strong> pour la destruction de nids de frelons par drone dans tout le Grand Sud. Nos pilotes qualifiés localisent le nid par caméra thermique HD, puis injectent un biocide écologique certifié directement au cœur du nid — sans aucune exposition humaine, en moins de 30 minutes.</p>
                      <p>Accès jusqu'à <strong>50 mètres de hauteur</strong>, opérateurs au sol, zéro risque de piqûre. La méthode la plus sûre disponible en Occitanie.</p>
                    </>
                  ) : (
                    <>
                      <p>In Southern France, the Asian hornet (<em>Vespa velutina</em>) poses a growing threat to residents of <strong>Montpellier, Nîmes, Toulouse, Perpignan and Carcassonne</strong>. Its nests, often located high in trees or under rooftops, make manual intervention extremely dangerous.</p>
                      <p>Ellipsys Solutions holds <strong>DGAC and Certibiocide certifications</strong> for drone-based hornet nest destruction throughout the Greater South. Our qualified pilots locate the nest by HD thermal camera, then inject a certified ecological biocide directly into the nest's core — zero human exposure, in under 30 minutes.</p>
                      <p>Access up to <strong>50 meters high</strong>, ground-based operators, zero sting risk. The safest method available in Southern France.</p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { val: "50m", label: isFr ? "Hauteur d'accès" : "Access height" },
                    { val: "30min", label: isFr ? "Intervention" : "Intervention" },
                    { val: "0", label: isFr ? "Risque opérateur" : "Operator risk" },
                  ].map((item, i) => (
                    <div key={i} className="bg-red-50 rounded-2xl p-4 text-center border border-red-100">
                      <div className="text-2xl md:text-3xl font-black text-red-600">{item.val}</div>
                      <div className="text-xs text-gray-600 font-bold uppercase tracking-tight mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Alerte urgence */}
            <ScrollReveal delay={0.1}>
              <section className="bg-red-50 rounded-[2.5rem] p-8 md:p-10 border border-red-200 shadow-md relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 p-4 pointer-events-none">
                  <ShieldAlert size={120} className="text-red-600" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <AlertCircle className="w-20 h-20 text-red-600 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-red-900 mb-3 uppercase tracking-tight">
                      {isFr ? "Ne prenez aucun risque !" : "Take no risks!"}
                    </h3>
                    <p className="text-red-800 font-bold text-lg leading-relaxed">
                      {isFr
                        ? "Ne tentez jamais de détruire un nid vous-même. Les frelons asiatiques attaquent en groupe et sont extrêmement agressifs. Une intervention inadaptée peut être fatale. Appelez-nous immédiatement."
                        : "Never attempt to destroy a nest yourself. Asian hornets attack in groups and are extremely aggressive. Improper intervention can be fatal. Call us immediately."}
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Technologie */}
            <ScrollReveal delay={0.15}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {isFr ? "Technologie de pointe pour nids inaccessibles" : "Cutting-Edge Technology for Inaccessible Nests"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: isFr ? "Hauteur 50m+" : "Height 50m+", desc: isFr ? "Accès total sans nacelle ni échelle. Idéal pour les arbres et toitures hautes en Occitanie." : "Full access without lift or ladder. Ideal for trees and high roofs.", icon: Wind },
                    { title: isFr ? "Injection Précise" : "Precision Injection", desc: isFr ? "Cible le cœur du nid directement. Efficacité maximale, dégâts collatéraux nuls." : "Targets the heart of the nest directly. Maximum efficiency, zero collateral damage.", icon: Target },
                    { title: isFr ? "Biocides Certibiocide" : "Certibiocide Biocides", desc: isFr ? "Produits certifiés biodégradables, respectueux de la faune et flore locales." : "Certified biodegradable products, respectful of local fauna and flora.", icon: ShieldCheck },
                    { title: isFr ? "Caméra Thermique HD" : "HD Thermal Camera", desc: isFr ? "Localisation précise du nid par signature thermique, même dissimulé dans la végétation." : "Precise nest location by thermal signature, even hidden in vegetation.", icon: Zap }
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
                  {isFr ? "Les avantages de l'intervention par drone" : "Advantages of drone intervention"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {(isFr ? [
                    "Opérateurs 100% au sol — zéro risque de piqûre",
                    "Accès à tous les nids jusqu'à 50m de hauteur",
                    "Biocides écologiques certifiés Certibiocide",
                    "Intervention en moins de 30 minutes sur site"
                  ] : [
                    "100% ground operators — zero sting risk",
                    "Access to all nests up to 50m high",
                    "Certibiocide-certified ecological biocides",
                    "Intervention in under 30 minutes on site"
                  ]).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all hover:-translate-y-1">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-bold text-gray-700 leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Zone d'intervention */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-red-600 rounded-full"></div>
                  {isFr ? "Zone d'intervention — France & International" : "Coverage Area — France & International"}
                </h2>
                <p className="text-gray-600 font-medium mb-6">
                  {isFr
                    ? "Basés en Occitanie, nous intervenons en urgence pour la destruction de nids de frelons sur toute la France. Nos départements de proximité sont indiqués ci-dessous, mais nous nous déplaçons sans restriction. Appelez-nous."
                    : "Based in Occitanie, we respond urgently for hornet nest removal across all of France. Our local departments are below, but we travel without restriction. Call us."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zones.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-black text-[#233B72] text-sm uppercase tracking-tight">{zone.dept}</div>
                        <div className="text-sm text-gray-500 font-medium mt-1">{zone.villes}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* FAQ SEO */}
            <ScrollReveal>
              <section itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-red-600 rounded-full"></div>
                  {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                        <span className="font-black text-[#233B72] pr-4" itemProp="name">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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

            {/* CTA */}
            <ScrollReveal>
              <section className="bg-red-50 rounded-[2.5rem] p-10 md:p-14 border border-red-100 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  {isFr ? "Nid de frelons en Occitanie ? Appelez-nous" : "Hornet nest in Southern France? Call us"}
                </h2>
                <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                  {isFr ? "Intervention d'urgence dans tout l'Hérault, Gard, Aude et Haute-Garonne. Réponse rapide garantie." : "Emergency response throughout Hérault, Gard, Aude and Haute-Garonne. Fast response guaranteed."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/devis" className="inline-block bg-red-600 hover:bg-red-700 text-white py-5 px-10 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                    {isFr ? "Demander un devis" : "Request a quote"}
                  </Link>
                  <a href="tel:0467209709" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-red-200 text-red-700 py-5 px-10 rounded-2xl font-black uppercase tracking-widest transition-all shadow hover:border-red-600">
                    <Phone className="w-5 h-5" /> 04 67 20 97 09
                  </a>
                </div>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">

              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-90 relative z-10" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter relative z-10">
                  {isFr ? "URGENCE FRELONS" : "HORNET EMERGENCY"}
                </h3>
                <p className="mb-8 text-red-50 font-medium leading-relaxed relative z-10 text-sm">
                  {isFr ? "Intervention rapide garantie en Occitanie. Techniciens mobilisables immédiatement." : "Fast intervention guaranteed in Southern France. Technicians ready to mobilize immediately."}
                </p>
                <div className="space-y-4 relative z-10">
                  <Link to="/devis" className="w-full bg-white text-red-700 py-5 rounded-2xl font-black text-center block hover:bg-gray-900 hover:text-white transition-all shadow-xl uppercase tracking-widest">
                    {isFr ? "Demander un devis" : "Request a quote"}
                  </Link>
                  <a href="tel:0467209709" className="flex items-center justify-center gap-3 w-full bg-red-900/40 backdrop-blur-md text-white py-5 rounded-2xl font-black text-center hover:bg-red-900 transition-all border border-white/20 uppercase tracking-widest">
                    <Phone className="w-5 h-5" /> 04 67 20 97 09
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {isFr ? "Garanties & Certifications" : "Guarantees & Certifications"}
                </h4>
                <div className="space-y-5">
                  {(isFr ? ['Certifié DGAC', 'Agrément Certibiocide', 'Assurance RC Pro Spécifique'] : ['DGAC Certified', 'Certibiocide Approval', 'Specialized Liability Insurance']).map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-sm font-black text-gray-800 uppercase tracking-tight leading-tight">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 rounded-[2rem] p-8 border border-red-100">
                <h4 className="font-black text-[#233B72] mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  {isFr ? "Zone d'urgence" : "Emergency Area"}
                </h4>
                <p className="text-sm font-black text-gray-700 mb-1">Hérault · Gard · Aude</p>
                <p className="text-sm font-black text-gray-700 mb-3">Pyrénées-Orientales · Haute-Garonne</p>
                <p className="text-xs text-gray-500 font-medium">
                  {isFr ? "Occitanie · PACA · Île-de-France · France entière · International sur devis" : "Occitanie · PACA · Île-de-France · All France · International on request"}
                </p>
              </div>

              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                  {isFr ? "Autres Prestations" : "Other Services"}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage de Façade" : "Facade Cleaning"}
                    <ChevronRight className="w-4 h-4 text-red-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Démoussage de Toiture" : "Roof Moss Removal"}
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
