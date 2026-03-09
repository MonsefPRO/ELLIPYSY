import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, ChevronRight, CheckCircle, Phone,
  Sun, Building2, Droplets, Thermometer, Bug, ChevronDown, Star
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ScrollReveal } from '../../components/ScrollReveal';
import { useLanguage } from '../../contexts/LanguageContext';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nettoyage par Drone et Robotique à Marseille",
  "description": "Nettoyage professionnel par drone à Marseille (Bouches-du-Rhône (13)) : panneaux photovoltaïques, façades, démoussage toiture, thermographie, destruction nids de frelons. Certifiés DGAC/EASA. Déplacement régulier sur Marseille et la région PACA sur devis.",
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
    "geo": { "@type": "GeoCoordinates", "latitude": "43.2965", "longitude": "5.3698" },
    "areaServed": { "@type": "City", "name": "Marseille" }
  },
  "areaServed": { "@type": "City", "name": "Marseille" },
  "serviceType": "Nettoyage drone robotique"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ellipsys Solutions intervient-il à Marseille ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Ellipsys Solutions intervient à Marseille et dans tout le Bouches-du-Rhône (13) pour le nettoyage par drone : panneaux solaires, façades, toitures, thermographie et destruction de nids de frelons. Déplacement régulier sur Marseille et la région PACA sur devis."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai d'intervention pour un nettoyage par drone à Marseille ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous répondons à toute demande sous 24h. L'intervention est planifiée en fonction de vos contraintes. Devis gratuit et sans engagement pour tout projet à Marseille."
      }
    },
    {
      "@type": "Question",
      "name": "Quels types de bâtiments nettoyez-vous à Marseille ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "À Marseille, nous intervenons sur les façades maritimes, copropriétés, sites portuaires, centrales solaires PACA. Nos drones accèdent à toutes les surfaces sans échafaudage ni nacelle."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte le nettoyage par drone à Marseille ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos tarifs sont 30 à 40% inférieurs aux méthodes traditionnelles (nacelle, échafaudage). Chaque devis est personnalisé selon la surface et le type d'intervention. Demandez votre devis gratuit en 24h."
      }
    }
  ]
};

export default function VilleMarseille() {
  const { language } = useLanguage();
  const isFr = language === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prestations = [
    {
      icon: Sun,
      title: isFr ? 'Panneaux Photovoltaïques' : 'Solar Panels',
      desc: isFr ? 'Nettoyage eau osmosée, +30% rendement, 500m² en 45min.' : 'Osmotic water cleaning, +30% yield, 500m² in 45min.',
      link: '/prestations/panneaux-photovoltaiques',
      color: 'amber'
    },
    {
      icon: Building2,
      title: isFr ? 'Nettoyage Façades' : 'Facade Cleaning',
      desc: isFr ? 'Accès jusqu'à 50m, 4x plus rapide, 30% moins cher.' : 'Access up to 50m, 4x faster, 30% cheaper.',
      link: '/prestations/nettoyage-facade',
      color: 'sky'
    },
    {
      icon: Droplets,
      title: isFr ? 'Démoussage Toiture' : 'Roof Moss Removal',
      desc: isFr ? 'Zéro tuile cassée, protection hydrofuge 5 ans.' : 'Zero broken tiles, 5-year waterproofing.',
      link: '/prestations/demoussage',
      color: 'green'
    },
    {
      icon: Thermometer,
      title: isFr ? 'Thermographie' : 'Thermography',
      desc: isFr ? 'Caméra HD 1280×1024, précision RTK, rapport 48h.' : 'HD 1280×1024 camera, RTK accuracy, 48h report.',
      link: '/prestations/thermographie',
      color: 'orange'
    },
    {
      icon: Bug,
      title: isFr ? 'Nids de Frelons' : 'Hornet Nests',
      desc: isFr ? 'Accès 50m, biocides certifiés, 0 risque opérateur.' : '50m access, certified biocides, 0 operator risk.',
      link: '/prestations/elimination-frelons',
      color: 'red'
    },
  ];

  const faqs = [
    {
      q: isFr ? `Ellipsys Solutions intervient-il à Marseille ?` : `Does Ellipsys Solutions operate in Marseille?`,
      a: isFr ? `Oui. Nous intervenons à Marseille et dans tout le Bouches-du-Rhône (13) pour le nettoyage par drone : panneaux solaires, façades, toitures, thermographie et destruction de nids de frelons. Déplacement régulier sur Marseille et la région PACA sur devis.` : `Yes. We operate in Marseille and throughout Bouches-du-Rhône (13) for drone cleaning: solar panels, facades, roofs, thermography and hornet nest removal. Déplacement régulier sur Marseille et la région PACA sur devis.`
    },
    {
      q: isFr ? `Quel délai d'intervention à Marseille ?` : `What is the response time in Marseille?`,
      a: isFr ? `Nous répondons sous 24h à toute demande. L'intervention est planifiée selon vos contraintes. Devis gratuit et sans engagement.` : `We respond within 24h to any request. The intervention is planned around your constraints. Free and no-commitment quote.`
    },
    {
      q: isFr ? `Quels bâtiments nettoyez-vous à Marseille ?` : `What buildings do you clean in Marseille?`,
      a: isFr ? `À Marseille, nous intervenons sur les façades maritimes, copropriétés, sites portuaires, centrales solaires PACA. Nos drones accèdent à toutes les surfaces sans échafaudage ni nacelle.` : `In Marseille, we operate on façades maritimes, copropriétés, sites portuaires, centrales solaires PACA. Our drones access all surfaces without scaffolding or platforms.`
    },
    {
      q: isFr ? `Combien coûte le nettoyage par drone à Marseille ?` : `How much does drone cleaning cost in Marseille?`,
      a: isFr ? `Nos tarifs sont 30 à 40% inférieurs aux méthodes traditionnelles. Chaque devis est personnalisé selon la surface et le type d'intervention. Demandez votre devis gratuit.` : `Our rates are 30 to 40% below traditional methods. Each quote is customized by surface and intervention type. Request your free quote.`
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#233B72] to-blue-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-blue-200" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="hover:text-white font-medium" itemProp="item"><span itemProp="name">{isFr ? 'Accueil' : 'Home'}</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight className="w-3 h-3" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-white font-bold" itemProp="name">{isFr ? 'Nettoyage Drone Marseille' : 'Drone Cleaning Marseille'}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-bold uppercase tracking-widest text-sm">Bouches-du-Rhône (13) · PACA</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              {isFr ? <>Nettoyage par<br />Drone & Robotique<br /><span className="text-orange-400">à Marseille</span></> : <>Drone & Robotic<br />Cleaning<br /><span className="text-orange-400">in Marseille</span></>}
            </h1>
            <p className="text-xl text-blue-100 font-bold max-w-2xl mb-8">
              {isFr
                ? `Panneaux solaires, façades, toitures, thermographie, nids de frelons — Certifiés DGAC/EASA. Déplacement régulier sur Marseille et la région PACA sur devis.`
                : `Solar panels, facades, roofs, thermography, hornet nests — DGAC/EASA Certified. Déplacement régulier sur Marseille et la région PACA sur devis.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/devis" className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-5 px-10 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                {isFr ? 'Devis gratuit 24h' : 'Free quote 24h'}
              </Link>
              <a href="tel:0467209709" className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white py-5 px-10 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                <Phone className="w-5 h-5" /> 04 67 20 97 09
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 max-w-6xl space-y-16">

        {/* Intro géolocalisée */}
        <ScrollReveal>
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-6 uppercase tracking-tighter flex items-center gap-3">
              <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
              {isFr ? `Ellipsys Solutions intervient à Marseille` : `Ellipsys Solutions operates in Marseille`}
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium leading-relaxed">
              {isFr ? (
                <>
                  <p>Ellipsys Solutions est votre partenaire spécialisé en <strong>nettoyage par drone et robotique à Marseille</strong>, première ville méditerranéenne de France. Nos équipes certifiées <strong>DGAC/EASA</strong> interviennent sur tous types de surfaces et d'infrastructures dans le Bouches-du-Rhône (13).</p>
                  <p>Grâce à nos drones et robots ultra-légers (6 à 9 kg), nous accédons aux surfaces les plus complexes sans nacelle, sans échafaudage, sans interruption de votre activité. <strong>40% moins cher que les méthodes traditionnelles</strong>, 4x plus rapide, zéro risque de chute.</p>
                  <p>Nous intervenons sur les <strong>façades maritimes, copropriétés, sites portuaires, centrales solaires PACA</strong> de Marseille et de l'ensemble du Bouches-du-Rhône (13). Déplacement régulier sur Marseille et la région PACA sur devis.</p>
                </>
              ) : (
                <>
                  <p>Ellipsys Solutions is your specialist partner for <strong>drone and robotic cleaning in Marseille</strong>, première ville méditerranéenne de France. Our <strong>DGAC/EASA</strong> certified teams operate on all surface types and infrastructures in Bouches-du-Rhône (13).</p>
                  <p>With our ultra-light drones and robots (6 to 9 kg), we access the most complex surfaces without lifts, scaffolding, or business interruption. <strong>40% cheaper than traditional methods</strong>, 4x faster, zero fall risk.</p>
                  <p>We serve <strong>façades maritimes, copropriétés, sites portuaires, centrales solaires PACA</strong> in Marseille and throughout Bouches-du-Rhône (13). Déplacement régulier sur Marseille et la région PACA sur devis.</p>
                </>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { val: '40%', label: isFr ? 'Moins cher' : 'Cheaper' },
                { val: '4x', label: isFr ? 'Plus rapide' : 'Faster' },
                { val: '0', label: isFr ? 'Risque chute' : 'Fall risk' },
              ].map((kpi, i) => (
                <div key={i} className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-100">
                  <div className="text-2xl md:text-3xl font-black text-orange-600">{kpi.val}</div>
                  <div className="text-xs text-gray-600 font-bold uppercase tracking-tight mt-1">{kpi.label}</div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Nos 5 prestations à Marseille */}
        <ScrollReveal>
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
              <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
              {isFr ? `Nos prestations à Marseille` : `Our services in Marseille`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prestations.map((p, i) => (
                <Link key={i} to={p.link} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <p.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#233B72] text-lg mb-2 uppercase tracking-tight">{p.title}</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-orange-500 font-bold text-sm mt-auto">
                    {isFr ? 'En savoir plus' : 'Learn more'} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Pourquoi Ellipsys à Marseille */}
        <ScrollReveal>
          <section className="bg-[#233B72] rounded-[2.5rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter text-orange-400">
              {isFr ? `Pourquoi choisir Ellipsys à Marseille ?` : `Why choose Ellipsys in Marseille?`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(isFr ? [
                'Certifiés DGAC/EASA — conformité totale pour vols en agglomération',
                'Robots ultra-légers 6-9kg — zéro contrainte structurelle',
                'Eau osmosée pure — séchage sans traces, sans produits chimiques',
                'Devis gratuit sous 24h — intervention planifiée selon vos contraintes',
                '40% moins cher qu'une nacelle ou un échafaudage',
                'Rapport d'intervention fourni après chaque prestation',
              ] : [
                'DGAC/EASA certified — full compliance for urban flights',
                'Ultra-light robots 6-9kg — zero structural constraint',
                'Pure osmotic water — trace-free drying, no chemicals',
                'Free quote within 24h — intervention planned around your needs',
                '40% cheaper than a lift or scaffolding',
                'Intervention report provided after each service',
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100 font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ SEO géolocalisée */}
        <ScrollReveal>
          <section itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter flex items-center gap-3">
              <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
              {isFr ? `Questions fréquentes — Marseille` : `FAQ — Marseille`}
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

        {/* CTA Final */}
        <ScrollReveal>
          <section className="bg-orange-50 rounded-[2.5rem] p-10 md:p-14 border border-orange-100 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
              {isFr ? `Un projet de nettoyage à Marseille ?` : `A cleaning project in Marseille?`}
            </h2>
            <p className="text-gray-600 font-medium mb-8 max-w-xl mx-auto">
              {isFr ? `Devis gratuit et personnalisé sous 24h. Déplacement régulier sur Marseille et la région PACA sur devis.` : `Free personalized quote within 24h. Déplacement régulier sur Marseille et la région PACA sur devis.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                {isFr ? 'Demander un devis gratuit' : 'Request a free quote'}
              </Link>
              <a href="tel:0467209709" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-orange-200 text-orange-700 py-5 px-10 rounded-2xl font-black uppercase tracking-widest hover:border-orange-500 transition-all">
                <Phone className="w-5 h-5" /> 04 67 20 97 09
              </a>
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </div>
  );
}
