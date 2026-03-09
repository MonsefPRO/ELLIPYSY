import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Target, Clock, ChevronRight, CheckCircle,
  Thermometer, Activity, FileText, Camera, Sun,
  Building2, Factory, Zap, Moon, BrainCircuit, MapPin, ChevronDown
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
  "name": "Thermographie par Drone Occitanie",
  "description": "Inspection thermographique professionnelle par drone en Occitanie. Détection de pannes, hotspots panneaux solaires, déperditions thermiques bâtiments. Caméra radiométrique HD, précision centimétrique RTK. Hérault, Gard, Aude, Haute-Garonne.",
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
  "serviceType": "Thermographie drone inspection",
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

export default function Thermographie() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = isFr ? [
    {
      q: "À quoi sert la thermographie par drone sur des panneaux solaires en Occitanie ?",
      a: "La thermographie infrarouge permet de détecter les hotspots (points chauds), les modules défectueux, les déséquilibres de chaînes et les problèmes de connexion invisibles à l'œil nu. En Occitanie, où l'irradiation solaire est forte, un module défaillant non détecté peut représenter une perte de production significative sur l'année."
    },
    {
      q: "Quelle est la précision de la thermographie par drone ?",
      a: "Nos drones sont équipés de caméras radiométriques HD (1280x1024 pixels) et d'un module RTK permettant une géolocalisation centimétrique de chaque anomalie. Chaque défaut est localisé avec précision GPS pour permettre une intervention de maintenance ciblée."
    },
    {
      q: "La thermographie peut-elle être réalisée de nuit ?",
      a: "Oui, nos équipements permettent des vols de nuit jusqu'à 100 mètres de hauteur. Pour les infrastructures industrielles ou les réseaux de chaleur, les inspections nocturnes présentent l'avantage d'éliminer le rayonnement solaire parasite et d'obtenir des mesures plus précises."
    },
    {
      q: "Quels livrables sont fournis après une inspection thermographique ?",
      a: "Nous fournissons un rapport PDF structuré avec résumé, tableaux d'anomalies et recommandations de maintenance, les images radiométriques HD géolocalisées, une cartographie complète de l'installation, et des recommandations O&M actionnables transmises sous 48h après l'intervention."
    },
    {
      q: "Pour quels types de bâtiments ou d'installations réalisez-vous des inspections thermiques en Occitanie ?",
      a: "Nous intervenons sur les centrales photovoltaïques (conformité IEC 62446-3), les bâtiments résidentiels et commerciaux (diagnostic de déperditions thermiques), les réseaux de chaleur urbains, et les sites industriels (contrôle qualité, sécurité QHSE). Nous couvrons l'Hérault, le Gard, l'Aude, la Haute-Garonne et les Pyrénées-Orientales."
    }
  ] : [
    {
      q: "What is drone thermography used for on solar panels in Southern France?",
      a: "Infrared thermography detects hotspots, defective modules, chain imbalances and connection issues invisible to the naked eye. With high solar irradiance in Southern France, an undetected failing module can represent significant annual production losses."
    },
    {
      q: "What is the accuracy of drone thermography?",
      a: "Our drones are equipped with HD radiometric cameras (1280x1024 pixels) and an RTK module for centimeter-accurate geolocation of each anomaly. Each defect is GPS-located to enable targeted maintenance intervention."
    },
    {
      q: "Can thermography be performed at night?",
      a: "Yes, our equipment enables night flights up to 100 meters. For industrial infrastructure or heat networks, night inspections eliminate solar radiation interference for more accurate measurements."
    },
    {
      q: "What deliverables are provided after a thermographic inspection?",
      a: "We provide a structured PDF report with summary, anomaly tables and maintenance recommendations, HD geolocated radiometric images, complete facility mapping, and actionable O&M recommendations delivered within 48h of the intervention."
    },
    {
      q: "What types of buildings or installations do you inspect in Southern France?",
      a: "We operate on photovoltaic plants (IEC 62446-3 compliance), residential and commercial buildings (thermal loss diagnosis), urban heat networks, and industrial sites (quality control, QHSE safety). We cover Hérault, Gard, Aude, Haute-Garonne and Pyrénées-Orientales."
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
          <img src="/bannerthermo.png" className="w-full h-full object-cover scale-110"
            alt={isFr ? "Thermographie par drone Occitanie - Ellipsys Solutions" : "Drone thermography Southern France - Ellipsys Solutions"} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-orange-300" />
              <span className="text-orange-200 text-sm font-bold uppercase tracking-widest">
                {isFr ? "Occitanie · Grand Sud" : "Occitanie · Southern France"}
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {isFr ? <>Thermographie<br />&amp; Inspections<br /><span className="text-orange-400">par Drone</span></> : <>Thermography<br />&amp; Inspections<br /><span className="text-orange-400">by Drone</span></>}
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 font-bold italic drop-shadow-md">
              {isFr ? "L'imagerie de pointe au service de vos infrastructures en Occitanie." : "Cutting-edge imaging for your Southern France infrastructure."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb SEO */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-orange-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Accueil" : "Home"}</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/prestations" className="hover:text-orange-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Nos Prestations" : "Our Services"}</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-orange-600 font-bold" itemProp="name">{isFr ? "Thermographie par Drone" : "Drone Thermography"}</span>
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
              <section className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-black text-[#233B72] mb-8 flex items-center gap-3 uppercase tracking-tighter">
                    <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
                    {isFr ? "Détectez l'invisible en Occitanie avec une précision chirurgicale" : "Detect the invisible in Southern France with surgical precision"}
                  </h2>
                  <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed mb-8">
                    {isFr ? (
                      <>
                        <p>En Occitanie, les centrales photovoltaïques, bâtiments industriels et réseaux de chaleur nécessitent des inspections régulières. Les méthodes traditionnelles — démontage, échafaudages, arrêt de production — sont coûteuses et chronophages pour les exploitants de <strong>Montpellier à Toulouse</strong>.</p>
                        <p>Ellipsys Solutions réalise des audits thermiques et visuels d'une précision inédite grâce à ses drones équipés de <strong>caméras radiométriques HD 1280×1024</strong> et de modules RTK. Nous identifions les anomalies au centimètre près, sans aucune interruption de production, depuis le sol.</p>
                        <p>Résultat : des rapports actionnables livrés sous 48h, une maintenance ciblée qui réduit vos coûts d'exploitation, et une conformité totale aux normes <strong>IEC 62446-3</strong> pour les centrales solaires en Occitanie.</p>
                      </>
                    ) : (
                      <>
                        <p>In Southern France, photovoltaic plants, industrial buildings and heat networks require regular inspections. Traditional methods — dismantling, scaffolding, production shutdown — are costly and time-consuming for operators from <strong>Montpellier to Toulouse</strong>.</p>
                        <p>Ellipsys Solutions performs thermal and visual audits of unprecedented precision using drones equipped with <strong>HD 1280×1024 radiometric cameras</strong> and RTK modules. We locate anomalies to the centimeter, without production interruption, from the ground.</p>
                        <p>Result: actionable reports delivered within 48h, targeted maintenance that reduces operating costs, and full compliance with <strong>IEC 62446-3</strong> standards for solar plants in Southern France.</p>
                      </>
                    )}
                  </div>
                  {/* Chiffres clés */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { val: "1280×1024", label: isFr ? "Résolution IR" : "IR Resolution" },
                      { val: "x112", label: isFr ? "Zoom hybride" : "Hybrid zoom" },
                      { val: "±1cm", label: isFr ? "Précision RTK" : "RTK accuracy" },
                    ].map((item, i) => (
                      <div key={i} className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
                        <div className="text-xl md:text-2xl font-black text-orange-600">{item.val}</div>
                        <div className="text-xs text-gray-600 font-bold uppercase tracking-tight mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-slate-50 p-4 flex justify-center items-center">
                  <img src="/thermoo1.png" alt={isFr ? "Inspection thermographique par drone Occitanie - Ellipsys Solutions" : "Drone thermographic inspection Southern France - Ellipsys Solutions"}
                    className="w-full h-auto max-h-[600px] object-contain rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </section>
            </ScrollReveal>

            {/* Technologie */}
            <ScrollReveal delay={0.1}>
              <section className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden flex flex-col p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {isFr ? "Équipements de Pointe" : "Cutting-Edge Equipment"}
                </h2>
                <div className="w-full mb-10 bg-white flex justify-center items-center rounded-2xl overflow-hidden border border-gray-100 p-4">
                  <img src="/thermoo2.png" alt={isFr ? "Équipement radiométrique drone Ellipsys" : "Ellipsys drone radiometric equipment"}
                    className="w-full h-auto max-h-[500px] object-contain hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: isFr ? "Thermique Radiométrique" : "Radiometric Thermal", desc: isFr ? "Résolution HD (1280x1024) pour des mesures de température pixel par pixel." : "HD resolution (1280x1024) for pixel-by-pixel temperature measurements.", icon: Camera },
                    { title: isFr ? "Zoom Hybride x112" : "112x Hybrid Zoom", desc: isFr ? "Détection de micro-fissures ou défauts à plus de 10 mètres, en toute sécurité." : "Detection of micro-cracks from more than 10 meters away, safely.", icon: Target },
                    { title: isFr ? "Géolocalisation RTK" : "RTK Geolocation", desc: isFr ? "Télémètre laser (1800m) et module RTK pour positionnement au centimètre." : "Laser rangefinder (1800m) and RTK module for centimeter-accurate positioning.", icon: MapPin },
                    { title: isFr ? "Vision Nocturne & IA" : "Night Vision & AI", desc: isFr ? "Vols de nuit jusqu'à 100m. L'IA embarquée assure le suivi automatique." : "Night flights up to 100m. Embedded AI ensures automatic tracking.", icon: BrainCircuit }
                  ].map((item, idx) => (
                    <Hover3DCard key={idx}>
                      <div className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-200 flex flex-col gap-4 h-full transition-all hover:bg-white hover:shadow-md">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 w-fit">
                          <item.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-black text-[#233B72] text-base mb-2 uppercase tracking-tight">{item.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    </Hover3DCard>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Domaines d'application */}
            <ScrollReveal delay={0.15}>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                  {isFr ? "Domaines d'Application en Occitanie" : "Application Areas in Southern France"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: isFr ? "Centrales Photovoltaïques" : "Solar Power Plants", desc: isFr ? "Détection de hotspots et modules défectueux. Conformité norme IEC 62446-3. Fermes solaires Occitanie." : "Detection of hotspots and defective modules. IEC 62446-3 standard compliant.", icon: Sun },
                    { title: isFr ? "Bâtiments & Façades" : "Buildings & Facades", desc: isFr ? "Diagnostic des déperditions thermiques, ponts thermiques et défauts d'isolation. Résidentiel et tertiaire." : "Diagnosis of thermal losses, thermal bridges and insulation defects.", icon: Building2 },
                    { title: isFr ? "Sécurité & Industrie" : "Security & Industry", desc: isFr ? "Contrôle des réseaux de chaleur, inspections nocturnes, levées de doutes QHSE sur sites industriels." : "Heat network control, night inspections, QHSE doubt removal on industrial sites.", icon: Moon }
                  ].map((target, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full">
                      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                        <target.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-black text-[#233B72] text-lg mb-3 uppercase tracking-tight">{target.title}</h3>
                      <p className="text-sm text-gray-600 font-medium leading-relaxed flex-grow">{target.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-4 md:p-8 flex justify-center items-center">
                  <img src="/thermoo3.png" alt={isFr ? "Domaines thermographie drone Occitanie" : "Drone thermography areas Southern France"}
                    className="w-full h-auto max-h-[600px] object-contain hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </section>
            </ScrollReveal>

            {/* Méthodologie */}
            <ScrollReveal delay={0.2}>
              <section className="bg-[#233B72] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none"><Thermometer size={300} /></div>
                <div className="relative z-10 grid sm:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-orange-400">
                      {isFr ? "Livrables Techniques" : "Technical Deliverables"}
                    </h3>
                    <ul className="space-y-4 font-medium text-blue-100">
                      {(isFr ? [
                        "Rapport PDF structuré et détaillé",
                        "Images radiométriques HD géolocalisées",
                        "Cartographie et position RTK",
                        "Recommandations maintenance O&M"
                      ] : [
                        "Structured detailed PDF report",
                        "HD geolocated radiometric images",
                        "Mapping and RTK positioning",
                        "O&M maintenance recommendations"
                      ]).map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-orange-400">
                      {isFr ? "Notre Méthode" : "Our Methodology"}
                    </h3>
                    <div className="space-y-5">
                      {[
                        { n: 1, t: isFr ? "Cadrage HSE" : "HSE Scoping", d: isFr ? "Analyse des contraintes et plan de vol." : "Constraint analysis and flight plan." },
                        { n: 2, t: isFr ? "Acquisition" : "Acquisition", d: isFr ? "Vols automatisés par intelligence artificielle." : "AI-automated flights." },
                        { n: 3, t: isFr ? "Restitution" : "Restitution", d: isFr ? "Qualification et rapport actionnable sous 48h." : "Qualification and actionable report within 48h." }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center font-bold text-orange-400 shrink-0">{step.n}</div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{step.t}</h4>
                            <p className="text-sm text-blue-200">{step.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 flex justify-center items-center p-4">
                  <img src="/thermoo6.png" alt={isFr ? "Analyse thermique drone Occitanie" : "Thermal analysis Southern France"}
                    className="w-full h-auto max-h-[600px] object-contain hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </section>
            </ScrollReveal>

            {/* Certification C5 */}
            <ScrollReveal delay={0.25}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl flex flex-col">
                <div className="w-full bg-white flex justify-center items-center p-6 md:p-8">
                  <img src="/thermoo4.png" alt={isFr ? "Certification C5 vols urbains Ellipsys" : "C5 urban flight certification Ellipsys"}
                    className="w-full h-auto max-h-[500px] object-contain hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-600 to-green-500 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none"><ShieldCheck size={200} /></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <ShieldCheck className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter">
                        {isFr ? "Vols Urbains : Homologation C5" : "Urban Flights: C5 Certification"}
                      </h3>
                    </div>
                    <p className="text-emerald-50 font-medium leading-relaxed text-lg">
                      {isFr
                        ? "Nos équipements sont certifiés pour évoluer en toute légalité en agglomération en Occitanie. Équipés de parachutes à déclenchement automatique et de capteurs d'évitement d'obstacles à 360°, nous garantissons une sécurité absolue au-dessus de vos installations et du public."
                        : "Our equipment is certified to operate legally in urban areas throughout Southern France. Equipped with automatic deployment parachutes and 360° obstacle avoidance sensors, we guarantee absolute safety above your facilities and the public."}
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Zone d'intervention */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
                  {isFr ? "Zone d'intervention — France & International" : "Coverage Area — France & International"}
                </h2>
                <p className="text-gray-600 font-medium mb-6">
                  {isFr
                    ? "Basés à Montpellier, nous réalisons des inspections thermographiques par drone sur toute la France et à l'international. Nos départements habituels sont listés ci-dessous, mais nous intervenons sans limite géographique pour les fermes solaires et sites industriels."
                    : "Based in Montpellier, we perform drone thermographic inspections across all France and internationally. Our usual departments are listed below, but we operate without geographic limits for solar farms and industrial sites."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zones.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
                  <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
                  {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                        <span className="font-black text-[#233B72] pr-4" itemProp="name">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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

            {/* Avantages ROI + Image thermoo5 */}
            <ScrollReveal delay={0.3}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl flex flex-col">
                <div className="w-full bg-slate-50 border-b border-gray-100 flex justify-center items-center p-6 md:p-8">
                  <img src="/thermoo5.png"
                    alt={isFr ? "Retour sur investissement thermographie drone Occitanie" : "Drone thermography return on investment Southern France"}
                    className="w-full h-auto max-h-[500px] object-contain hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                    {isFr ? "Une Logique de R.O.I Rapide" : "A Fast R.O.I Logic"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: isFr ? "Zéro Interruption" : "Zero Interruption", d: isFr ? "Aucun arrêt de production ni de consignation électrique." : "No production shutdown or electrical lockout.", icon: Zap },
                      { t: isFr ? "Déploiement Éclair" : "Rapid Deployment", d: isFr ? "Le drone est opérationnel en 15 secondes sur site." : "The drone is operational in 15 seconds on site.", icon: Clock },
                      { t: isFr ? "Maintenance Ciblée" : "Targeted Maintenance", d: isFr ? "Intervention uniquement là où l'anomalie est avérée (Point GPS)." : "Intervention only where the anomaly is confirmed (GPS Point).", icon: Target },
                      { t: isFr ? "Livrables Actionnables" : "Actionable Deliverables", d: isFr ? "Rapports détaillés avec corrélation immédiate IR/Visible." : "Detailed reports with immediate IR/Visible correlation.", icon: FileText }
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-5 p-2 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-black text-gray-900 uppercase text-base tracking-tight mb-1">{benefit.t}</h4>
                          <p className="text-sm text-gray-600 font-medium leading-snug">{benefit.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* CTA final */}
            <ScrollReveal>
              <section className="bg-orange-50 rounded-[2.5rem] p-10 md:p-14 border border-orange-100 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  {isFr ? "Planifier une inspection thermique en Occitanie" : "Schedule a thermal inspection in Southern France"}
                </h2>
                <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                  {isFr ? "Campagne ponctuelle ou contrat de surveillance. Devis personnalisé sous 24h pour vos installations en Occitanie." : "One-off campaign or surveillance contract. Personalized quote within 24h for your installations."}
                </p>
                <Link to="/devis" className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">

              <div className="bg-gradient-to-br from-[#233B72] to-slate-800 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">
                  {isFr ? "Planifier un Audit" : "Schedule an Audit"}
                </h3>
                <p className="mb-8 text-blue-100 font-medium relative z-10 leading-relaxed text-sm">
                  {isFr ? "Campagne ponctuelle ou contrat de surveillance. Étude de faisabilité gratuite." : "One-off campaign or surveillance contract. Free feasibility study."}
                </p>
                <Link to="/devis" className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-center block hover:bg-white hover:text-[#233B72] transition-all shadow-xl uppercase tracking-widest relative z-10">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {isFr ? "Spécifications" : "Specifications"}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Camera, title: isFr ? "Résolution IR" : "IR Resolution", val: "1280×1024" },
                    { icon: Target, title: isFr ? "Zoom Max" : "Max Zoom", val: "x112" },
                    { icon: MapPin, title: isFr ? "Précision" : "Accuracy", val: isFr ? "Centimétrique (RTK)" : "Centimetric (RTK)" },
                    { icon: ShieldCheck, title: isFr ? "Sécurité" : "Safety", val: "Parachute (C5)" },
                    { icon: Activity, title: isFr ? "Diagnostic" : "Diagnostics", val: isFr ? "Radiométrique" : "Radiometric" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-orange-500" /></div>
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-sm font-black text-[#233B72]">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 rounded-[2rem] p-8 border border-orange-100">
                <h4 className="font-black text-[#233B72] mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  {isFr ? "Zone d'intervention" : "Coverage Area"}
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
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage Panneaux PV" : "Solar Panel Cleaning"}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage de Façade" : "Facade Cleaning"}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Démoussage de Toiture" : "Roof Moss Removal"}
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
