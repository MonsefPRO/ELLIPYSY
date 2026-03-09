import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, Droplets, CheckCircle, ChevronRight, 
  AlertTriangle, Home, Sparkles, Award, MapPin, ChevronDown
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
  "name": "Démoussage de Toiture par Drone Occitanie",
  "description": "Démoussage professionnel de toiture par drone en Occitanie. Traitement curatif et préventif, hydrofuge, zéro tuile cassée. Intervention dans l'Hérault, Gard, Aude, Haute-Garonne et Pyrénées-Orientales.",
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
  "serviceType": "Démoussage toiture",
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

export default function Demoussage() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = isFr ? [
    {
      q: "À quelle fréquence faut-il faire démoussage sa toiture en Occitanie ?",
      a: "En Occitanie, le climat humide de l'automne et les printemps doux favorisent la repousse rapide des mousses. Un traitement préventif tous les 2 à 3 ans est recommandé. Le démoussage par drone permet d'intervenir sans monter sur le toit, sans risque de casse de tuiles."
    },
    {
      q: "Le drone endommage-t-il les tuiles lors du démoussage ?",
      a: "Non. Notre drone pulvérise à basse pression sans contact mécanique avec votre toiture. Contrairement au passage d'un technicien sur le toit, il n'y a aucun risque de casse de tuiles ni d'infiltration liée à une tuile déplacée."
    },
    {
      q: "Quelle est la différence entre traitement curatif et préventif ?",
      a: "Le traitement curatif détruit la mousse, le lichen et les champignons existants grâce à un algicide/fongicide professionnel. Le traitement préventif (hydrofuge) imperméabilise ensuite la tuile pour retarder la repousse jusqu'à 5 ans. Nous proposons les deux en une seule intervention."
    },
    {
      q: "Combien coûte le démoussage de toiture par drone en Occitanie ?",
      a: "Le coût dépend de la surface et de l'inclinaison de votre toit. Notre méthode par drone est plus économique qu'une intervention avec nacelle ou échafaudage car elle ne nécessite aucune installation lourde. Contactez-nous pour un devis personnalisé sous 24h."
    },
    {
      q: "Dans quelles villes d'Occitanie intervenez-vous pour le démoussage ?",
      a: "Nous intervenons dans tout l'Hérault (Montpellier, Béziers, Sète), le Gard (Nîmes, Alès), l'Aude (Carcassonne, Narbonne), les Pyrénées-Orientales (Perpignan) et la Haute-Garonne (Toulouse). Contactez-nous pour tout site hors zone."
    }
  ] : [
    {
      q: "How often should roof moss removal be done in Southern France?",
      a: "In Occitanie, the humid autumn climate and mild springs encourage rapid moss regrowth. A preventive treatment every 2 to 3 years is recommended. Drone moss removal allows intervention without climbing on the roof, with no tile breakage risk."
    },
    {
      q: "Does the drone damage tiles during moss removal?",
      a: "No. Our drone sprays at low pressure with no mechanical contact with your roof. Unlike a technician walking on the roof, there is no risk of tile breakage or infiltration from displaced tiles."
    },
    {
      q: "What is the difference between curative and preventive treatment?",
      a: "Curative treatment destroys existing moss, lichen and fungi using professional algaecide/fungicide. Preventive treatment (water repellent) then waterproofs the tile to delay regrowth for up to 5 years. We offer both in a single intervention."
    },
    {
      q: "How much does drone roof moss removal cost in Southern France?",
      a: "Cost depends on the surface area and slope of your roof. Our drone method is more economical than aerial platform or scaffolding as it requires no heavy installation. Contact us for a personalized quote within 24h."
    },
    {
      q: "Which cities in Southern France do you cover for moss removal?",
      a: "We operate throughout Hérault (Montpellier, Béziers, Sète), Gard (Nîmes, Alès), Aude (Carcassonne, Narbonne), Pyrénées-Orientales (Perpignan) and Haute-Garonne (Toulouse). Contact us for sites outside this area."
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
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Demoussage drone 1.jpg" className="w-full h-full object-cover scale-110"
            alt={isFr ? "Démoussage toiture par drone en Occitanie - Ellipsys Solutions" : "Drone roof moss removal in Southern France - Ellipsys Solutions"} />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 to-emerald-800/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-200 text-sm font-bold uppercase tracking-widest">
                {isFr ? "Occitanie · Grand Sud" : "Occitanie · Southern France"}
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-lg">
              {isFr ? <>Démoussage<br />de Toiture<br /><span className="text-emerald-400">par Drone</span></> 
                     : <>Roof Moss<br />Removal<br /><span className="text-emerald-400">by Drone</span></>}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-bold italic drop-shadow-md">
              {isFr ? 'Curatif, préventif et surtout : Zéro tuile cassée.' : 'Curative, preventive and above all: Zero broken tiles.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb SEO */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-emerald-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Accueil" : "Home"}</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/prestations" className="hover:text-emerald-600 font-medium" itemProp="item"><span itemProp="name">{isFr ? "Nos Prestations" : "Our Services"}</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-emerald-600 font-bold" itemProp="name">{isFr ? "Démoussage de Toiture" : "Roof Moss Removal"}</span>
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
                  <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                  {isFr ? 'Protéger votre toiture en Occitanie sans l\'abîmer' : 'Protecting your roof in Southern France without damage'}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
                  {isFr ? (
                    <>
                      <p>En Occitanie, le climat méditerranéen crée des conditions idéales pour le développement des mousses, lichens et champignons sur les toitures. Les hivers humides, les printemps doux et les pluies automnales accélèrent leur prolifération sur les toits de <strong>Montpellier, Nîmes, Toulouse, Perpignan et Carcassonne</strong>.</p>
                      <p>Ces végétaux ne sont pas qu'un problème esthétique. Leurs micro-racines s'infiltrent dans les tuiles et les rendent poreuses. En hiver, l'eau gorgée dans la mousse gèle, fait éclater la tuile et provoque des <strong>infiltrations graves dans votre charpente</strong>.</p>
                      <p>Ellipsys Solutions élimine ce risque à 100%. Nos drones pulvérisent à <strong>basse pression des traitements curatifs et préventifs</strong> directement depuis les airs — plus rapide, ultra-efficace, et totalement sûr pour votre toiture.</p>
                    </>
                  ) : (
                    <>
                      <p>In Occitanie, the Mediterranean climate creates ideal conditions for moss, lichen and fungi growth on roofs. Humid winters, mild springs and autumn rains accelerate their proliferation on roofs in <strong>Montpellier, Nîmes, Toulouse, Perpignan and Carcassonne</strong>.</p>
                      <p>These organisms are not just an aesthetic problem. Their micro-roots infiltrate tiles and make them porous. In winter, water soaked in moss freezes, causing tiles to crack and leading to <strong>severe leaks in your roof structure</strong>.</p>
                      <p>Ellipsys Solutions eliminates this risk 100%. Our drones spray <strong>curative and preventive treatments at low pressure</strong> directly from the air — faster, highly effective, and completely safe for your roof.</p>
                    </>
                  )}
                </div>
                {/* Chiffres clés */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { val: "3x", label: isFr ? "Plus rapide" : "Faster" },
                    { val: "5 ans", label: isFr ? "Protection hydrofuge" : "Water repellent protection" },
                    { val: "0", label: isFr ? "Tuile cassée" : "Broken tile" },
                  ].map((item, i) => (
                    <div key={i} className="bg-emerald-50 rounded-2xl p-4 text-center border border-emerald-100">
                      <div className="text-2xl md:text-3xl font-black text-emerald-600">{item.val}</div>
                      <div className="text-xs text-gray-600 font-bold uppercase tracking-tight mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Dangers de la mousse */}
            <ScrollReveal delay={0.1}>
              <section className="bg-amber-50 rounded-[2.5rem] p-8 md:p-10 border border-amber-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 p-4 pointer-events-none">
                  <AlertTriangle size={120} className="text-amber-600" />
                </div>
                <h3 className="text-2xl font-black text-amber-800 mb-8 flex items-center gap-3 uppercase tracking-tight relative z-10">
                  <Shield className="w-7 h-7" />
                  {isFr ? "Les dangers de la mousse sur votre toit" : "The dangers of moss on your roof"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  {(isFr ? [
                    "Éclatement des tuiles par le gel en hiver.",
                    "Porosité accrue et perte d'imperméabilité.",
                    "Infiltrations d'eau dans l'isolation thermique.",
                    "Dégradation prématurée de la charpente."
                  ] : [
                    "Tiles bursting due to frost in winter.",
                    "Increased porosity and loss of waterproofing.",
                    "Water infiltration into thermal insulation.",
                    "Premature degradation of the roof structure."
                  ]).map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl border border-amber-100 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-900 font-bold text-sm leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Double action */}
            <ScrollReveal delay={0.2}>
              <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none"><Home size={300} /></div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-emerald-400">
                      {isFr ? 'Toitures prises en charge' : 'Supported Roofs'}
                    </h3>
                    <ul className="space-y-4 font-medium text-emerald-100">
                      {(isFr ? [
                        'Tuiles canal, romanes, plates',
                        'Ardoises naturelles et synthétiques',
                        'Bacs acier et toitures industrielles',
                        'Toits-terrasses et fibrociment'
                      ] : [
                        'Canal, Roman, flat tiles',
                        'Natural and synthetic slates',
                        'Steel decks and industrial roofs',
                        'Flat roofs and fiber cement'
                      ]).map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-emerald-400">
                      {isFr ? 'Double Action' : 'Dual Action'}
                    </h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{isFr ? 'Traitement Curatif' : 'Curative Treatment'}</h4>
                          <p className="text-sm text-emerald-200">{isFr ? "Algicide/fongicide professionnel détruisant la mousse jusqu'à la racine." : "Professional algaecide/fungicide destroying moss down to the root."}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{isFr ? 'Finition Hydrofuge' : 'Water Repellent Finish'}</h4>
                          <p className="text-sm text-emerald-200">{isFr ? "Imperméabilisation durable, retarde le retour des végétaux jusqu'à 5 ans." : "Durable waterproofing, delays the return of vegetation for up to 5 years."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Avantages drone */}
            <ScrollReveal delay={0.3}>
              <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-10 text-center uppercase tracking-tighter">
                  {isFr ? 'Les Avantages du Drone' : 'Drone Benefits'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: isFr ? "Zéro Tuile Cassée" : "Zero Broken Tiles", d: isFr ? "Aucune pression mécanique humaine sur votre toiture." : "No human mechanical pressure on your roof.", icon: Home },
                    { t: isFr ? "Sécurité Humaine" : "Human Safety", d: isFr ? "100% depuis le sol, aucun risque d'accident en hauteur." : "100% from the ground, no accident risk at height.", icon: Shield },
                    { t: isFr ? "Efficacité Éclair" : "Lightning Efficiency", d: isFr ? "Traitement de centaines de m² en un temps record." : "Treatment of hundreds of sqm in record time.", icon: Zap },
                    { t: isFr ? "Économique" : "Cost-Effective", d: isFr ? "Pas de nacelle, d'échafaudage ou de ligne de vie à installer." : "No lift, scaffolding or lifeline to install.", icon: Award }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-5 p-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
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
                  <div className="w-2 h-10 bg-emerald-500 rounded-full"></div>
                  {isFr ? "Zone d'intervention — France & International" : "Coverage Area — France & International"}
                </h2>
                <p className="text-gray-600 font-medium mb-6">
                  {isFr
                    ? "Basés à Montpellier en Occitanie, nous intervenons pour le démoussage de toitures sur toute la France et à l'international. Nos départements de proximité sont listés ci-dessous, mais aucun projet n'est trop éloigné. Contactez-nous pour un devis."
                    : "Ellipsys Solutions provides roof moss removal in the following departments. Property manager outside this area? Contact us."
                  }
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zones.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
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
                  <div className="w-2 h-10 bg-emerald-500 rounded-full"></div>
                  {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                        <span className="font-black text-[#233B72] pr-4" itemProp="name">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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
              <section className="bg-emerald-50 rounded-[2.5rem] p-10 md:p-14 border border-emerald-100 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  {isFr ? "Protégez votre toiture dès maintenant" : "Protect your roof now"}
                </h2>
                <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
                  {isFr ? "Intervention rapide en Occitanie. Devis personnalisé sous 24h, sans engagement." : "Fast intervention in Southern France. Personalized quote within 24h, no commitment."}
                </p>
                <Link to="/devis" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">

              {/* CTA */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-[2.5rem] p-10 text-white shadow-2xl text-center">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
                  {isFr ? 'Sauvez votre Toiture' : 'Save your Roof'}
                </h3>
                <p className="mb-8 text-emerald-50 font-medium leading-relaxed text-sm">
                  {isFr ? "N'attendez pas les fuites ou la casse. Devis gratuit sous 24h." : "Don't wait for leaks or breakage. Free quote within 24h."}
                </p>
                <Link to="/devis" className="w-full bg-white text-emerald-700 py-5 rounded-2xl font-black text-center block hover:bg-emerald-900 hover:text-white transition-all shadow-xl uppercase tracking-widest">
                  {isFr ? "Demander un devis" : "Request a quote"}
                </Link>
              </div>

              {/* Spécifications */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {isFr ? 'Spécifications' : 'Specifications'}
                </h4>
                <div className="space-y-6">
                  {[
                    { icon: Home, title: isFr ? 'Intégrité' : 'Integrity', val: isFr ? 'Zéro Casse' : 'Zero Breakage' },
                    { icon: Droplets, title: isFr ? 'Technique' : 'Method', val: isFr ? 'Basse Pression' : 'Low Pressure' },
                    { icon: Sparkles, title: isFr ? 'Produit' : 'Product', val: isFr ? 'Algicide Pro' : 'Pro Algaecide' },
                    { icon: Shield, title: isFr ? 'Protection' : 'Protection', val: isFr ? 'Jusqu\'à 5 ans' : 'Up to 5 years' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className="bg-emerald-50 p-2 rounded-lg"><item.icon className="w-5 h-5 text-emerald-600" /></div>
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-sm font-black text-emerald-700">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone sidebar */}
              <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100">
                <h4 className="font-black text-[#233B72] mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
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
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage de Façade" : "Facade Cleaning"}
                    <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Nettoyage Panneaux PV" : "Solar Panel Cleaning"}
                    <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/nids-frelons" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {isFr ? "Destruction Nids de Frelons" : "Hornet Nest Removal"}
                    <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1" />
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
