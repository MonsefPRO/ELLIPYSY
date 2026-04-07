import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

interface Article {
  id: number;
  categoryKey: string;
  title: { fr: string; en: string };
  date: string;
  image: string;
  excerpt: { fr: string; en: string };
  content: { fr: string; en: string };
}

export default function Blog() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const articles: Article[] = [
    {
      id: 1,
      categoryKey: "tips",
      title: {
        fr: "Rendement photovoltaique : Pourquoi 30% de votre energie s'evapore ?",
        en: "Solar Yield: Why is 30% of your energy vanishing?"
      },
      date: "15 Janv 2026",
      image: "rendement.png",
      excerpt: {
        fr: "Ce n'est plus une estimation, mais une realite mesuree : l'accumulation de poussieres fines cree un voile statique que la pluie ne peut rincer.",
        en: "It's no longer an estimate, but a measured reality: fine dust accumulation creates a static veil that rain cannot rinse away."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <p class="text-lg font-medium text-[#233B72]">"La pluie nettoie mes panneaux". C'est l'idee recue la plus couteuse du secteur solaire. En realite, une installation non entretenue perd entre 10% et 30% de sa production annuelle.</p>
            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">L'effet "Pare-brise sale"</h3>
            <p>Imaginez votre pare-brise apres un mois sans lavage, meme s'il a plu. Il reste un film grisatre, gras et statique. C'est exactement ce qui se passe sur vos panneaux solaires.</p>
            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Pourquoi l'eau pure est la seule solution ?</h3>
            <p>Nous utilisons une <strong>eau pure a 99.9%, osmosee et demineralisee</strong>. C'est un aimant a impuretes naturel.</p>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <p class="text-lg font-medium text-[#233B72]">"Rain cleans my panels". This is the most costly misconception. In reality, an unmaintained installation loses 10% to 30% of its production.</p>
            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">The "Dirty Windshield" Effect</h3>
            <p>Imagine your windshield after a month without washing. A greasy static film remains. The same happens to your solar panels.</p>
          </div>
        `
      }
    },
    {
      id: 2,
      categoryKey: "regulations",
      title: {
        fr: "Reglementation 2026 : Ce qui change pour le survol urbain",
        en: "2026 Regulations: What changes for urban flights"
      },
      date: "05 Janv 2026",
      image: "regle.png",
      excerpt: {
        fr: "Le passage definitif aux scenarios europeens STS-01 est acte. Ellipsys fait le point sur les nouvelles certifications necessaires.",
        en: "The final transition to European STS-01 scenarios is official. Ellipsys reviews the new required certifications."
      },
      content: {
        fr: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>La reglementation drone evolue pour harmoniser les vols en zone urbaine a travers l'Europe. Les exploitants doivent desormais se conformer aux nouveaux certificats de navigabilite et aux scenarios standards STS.</p></div>`,
        en: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>Drone regulations are evolving to harmonize urban flights across Europe. Operators must now comply with new airworthiness certificates.</p></div>`
      }
    },
    {
      id: 3,
      categoryKey: "technology",
      title: {
        fr: "Soft-Wash vs Haute Pression : Protegez vos enduits",
        en: "Soft-Wash vs High Pressure: Protect your coatings"
      },
      date: "20 Dec 2025",
      image: "facadeblog.png",
      excerpt: {
        fr: "Pourquoi la haute pression peut detruire vos facades et comment le drone propose une alternative douce.",
        en: "Why high pressure can destroy your facades and how drones offer a gentle alternative."
      },
      content: {
        fr: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>Le nettoyage haute pression risque de fragiliser les enduits de facade et de creer des porosites. La technologie Soft-Wash utilise des produits basse pression.</p></div>`,
        en: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>High pressure cleaning risks weakening the coatings. Soft-Wash technology uses low-pressure products.</p></div>`
      }
    },
    {
      id: 4,
      categoryKey: "technology",
      title: {
        fr: "L'ennemi invisible des facades : Les micro-organismes",
        en: "The invisible enemy of facades: Micro-organisms"
      },
      date: "10 Janv 2026",
      image: "ares.png",
      excerpt: {
        fr: "Algues rouges, lichens et mousses ne sont pas qu'un probleme esthetique. Ils s'enracinent dans votre enduit.",
        en: "Red algae, lichens, and mosses are not just an aesthetic problem. They take root in your coating."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">Pourquoi une facade devient-elle rouge ou noire ?</h3>
            <p>Ces colorations sont dues a la proliferation de micro-organismes qui se nourrissent de l'humidite.</p>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">Why does a facade turn red or black?</h3>
            <p>These colors are due to the proliferation of microorganisms feeding on moisture.</p>
          </div>
        `
      }
    },
    {
      id: 5,
      categoryKey: "technology",
      title: {
        fr: "Inspection Thermographique par Drone : Le futur de la maintenance",
        en: "Drone Thermographic Inspection: The future of maintenance"
      },
      date: "05 Fev 2026",
      image: "thermoo3.png",
      excerpt: {
        fr: "Comment les cameras thermiques embarquees permettent d'anticiper les pannes sur les reseaux de chaleur et batiments industriels.",
        en: "How embedded thermal cameras allow anticipating failures on heating networks and industrial buildings."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">La puissance de la radiometrie HD</h3>
            <p>L'inspection traditionnelle a la camera thermique manuelle prend un temps considerable. Le drone, equipe de capteurs haute resolution, scanne des toitures entieres en quelques minutes. Les anomalies (ponts thermiques, fuites d'isolation, surchauffes) sont detectees instantanement et geolocalisees via RTK.</p>
            <p>C'est un atout majeur pour cibler les travaux de renovation energetique sans perturber l'activite du site.</p>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">The power of HD radiometry</h3>
            <p>Traditional inspection with a handheld thermal camera takes a considerable amount of time. The drone, equipped with high-resolution sensors, scans entire roofs in minutes. Anomalies (thermal bridges, insulation leaks, overheating) are instantly detected and geolocated via RTK.</p>
          </div>
        `
      }
    },
    {
      id: 6,
      categoryKey: "tips",
      title: {
        fr: "Toiture envahie par la mousse : Quels sont les risques reels ?",
        en: "Moss-invaded roof: What are the real risks?"
      },
      date: "12 Fev 2026",
      image: "Demoussage drone 1.jpg",
      excerpt: {
        fr: "Au-dela de l'aspect neglige, la mousse retient l'eau, gele en hiver et finit par faire eclater vos tuiles. Explications.",
        en: "Beyond the neglected look, moss retains water, freezes in winter and eventually shatters your tiles. Explanations."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">L'effet eponge destructeur</h3>
            <p>La mousse n'est pas qu'un vegetal inoffensif. Elle agit comme une eponge geante qui gorge vos tuiles ou vos ardoises d'humidite. Lorsque les temperatures chutent en dessous de zero, cette eau gele et se dilate, provoquant des micro-fissures puis l'eclatement des materiaux.</p>
            <p>Un demoussage preventif par drone avec traitement hydrofuge prolonge la duree de vie de votre toiture de plusieurs decennies.</p>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">The destructive sponge effect</h3>
            <p>Moss is not just a harmless plant. It acts like a giant sponge that soaks your tiles or slates with moisture. When temperatures drop below freezing, this water freezes and expands, causing micro-cracks and material shattering.</p>
          </div>
        `
      }
    },
    {
      id: 7,
      categoryKey: "regulations",
      title: {
        fr: "La securite avant tout : Nos parachutes de drones certifies C5",
        en: "Safety first: Our C5 certified drone parachutes"
      },
      date: "22 Fev 2026",
      image: "thermoo4.png",
      excerpt: {
        fr: "Voler en ville ou au-dessus d'installations industrielles critiques exige un equipement de securite absolu. Focus sur la norme C5.",
        en: "Flying in cities or over critical industrial facilities requires absolute safety equipment. Focus on the C5 standard."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">Pourquoi l'homologation C5 est cruciale</h3>
            <p>Realiser une prestation de nettoyage ou d'inspection par drone en agglomeration n'est pas autorise a n'importe qui. Nos drones lourds sont equipes de systemes de parachutes a declenchement automatique et crypte.</p>
            <p>Cette technologie de pointe garantit une protection totale des personnes et des infrastructures situees sous l'appareil, repondant aux exigences les plus strictes de la DGAC.</p>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">Why C5 certification is crucial</h3>
            <p>Performing a drone cleaning or inspection service in an urban area is not permitted for everyone. Our heavy drones are equipped with automatic and encrypted parachute systems.</p>
          </div>
        `
      }
    },
    {
      id: 8,
      categoryKey: "technology",
      title: {
        fr: "Le nettoyage drone vs nacelle elevatrice : Le match des couts",
        en: "Drone cleaning vs Aerial platform: The cost match"
      },
      date: "01 Mars 2026",
      image: "rony2.jpg",
      excerpt: {
        fr: "Decouvrez pourquoi faire appel a un drone pour l'entretien de vos batiments reduit vos couts operationnels de pres de 40%.",
        en: "Discover why using a drone for building maintenance reduces your operational costs by nearly 40%."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">Au-dela de la location de materiel</h3>
            <p>Louer une nacelle ou installer un echafaudage coute cher, bloque la voirie, demande des autorisations municipales et immobilise des equipes entieres pendant des jours. Le nettoyage par drone supprime toutes ces contraintes.</p>
            <p>Le temps d'intervention est divise par trois, et le risque d'accident de travail (chute de hauteur) est reduit a zero. Le calcul financier est sans appel pour les gestionnaires de parc immobilier.</p>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <h3 class="text-2xl font-bold text-[#233B72]">Beyond equipment rental</h3>
            <p>Renting a cherry picker or scaffolding is expensive, blocks roads, requires municipal permits, and ties up entire teams for days. Drone cleaning eliminates all these constraints.</p>
          </div>
        `
      }
    },
    {
      id: 9,
      categoryKey: "tips",
      title: {
        fr: "Combien coute le nettoyage de panneaux solaires en 2026 ?",
        en: "How much does solar panel cleaning cost in 2026?"
      },
      date: "07 Avr 2026",
      image: "rony.jpg",
      excerpt: {
        fr: "Nacelle, cordistes ou drone : les prix varient du simple au triple. Comparatif complet des methodes et calcul du retour sur investissement pour votre installation.",
        en: "Cherry picker, rope access or drone: prices vary threefold. Full comparison of methods and ROI calculation for your installation."
      },
      content: {
        fr: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <p class="text-lg font-medium text-[#233B72]">Un panneau solaire encroute perd entre 15 et 30% de son rendement. Pour une installation de 100 kWc, cela represente plusieurs milliers d'euros de production perdus chaque annee.</p>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Pourquoi nettoyer ses panneaux solaires ?</h3>
            <p>La poussiere, le pollen, les fientes d'oiseaux et les depots de pollution se cumulent sur les cellules photovoltaiques. Un panneau non nettoye depuis 12 mois perd en moyenne 15 a 20% de rendement en zone urbaine, et jusqu'a 30% en zone agricole. Sur une centrale de 500 kWc vendue a 0,10 euro par kWh, une perte de 20% represente environ 10 000 euros de manque a gagner annuel.</p>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">La nacelle elevatrice</h3>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>Location nacelle : 300 a 600 euros par jour</li>
              <li>Main d'oeuvre : 300 a 500 euros par jour</li>
              <li>Total pour 500 m2 : 1 500 a 2 500 euros</li>
              <li>Risque de chute operateur</li>
              <li>Interruption partielle de l'activite sur site</li>
            </ul>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Les cordistes</h3>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>4 a 8 euros par m2 selon la complexite</li>
              <li>Pour 500 m2 : 2 000 a 4 000 euros</li>
              <li>Disponibilite limitee</li>
            </ul>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Le nettoyage par drone et robotique</h3>
            <p>Notre robot autonome se deplace sur les panneaux et nettoie a l'eau osmosee pure. Aucun produit chimique, sechage sans traces, 600 m2 traites par heure.</p>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>A partir de 0,08 euro par m2 pour les grandes surfaces</li>
              <li>Pour 500 m2 : 400 a 800 euros selon la configuration</li>
              <li>40% moins cher qu'une nacelle a resultat equivalent</li>
              <li>Zero risque de chute — aucun operateur en hauteur</li>
              <li>Production non interrompue pendant l'intervention</li>
              <li>Certifies DGAC/EASA</li>
            </ul>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Retour sur investissement</h3>
            <p>Pour une centrale de 500 m2 en zone agricole :</p>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>Perte de rendement sans entretien : 25% soit environ 5 000 euros par an</li>
              <li>Cout nettoyage Ellipsys 2 fois par an : environ 1 200 euros par an</li>
              <li><strong>Gain net : environ 3 800 euros par an</strong></li>
            </ul>
            <p>Le nettoyage se rembourse en moins de 3 mois de production recuperee.</p>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Quelle frequence de nettoyage ?</h3>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>Zone cotiere ou urbaine : 2 fois par an</li>
              <li>Zone agricole : 2 a 3 fois par an (pic pollen avril-juin)</li>
              <li>Zone industrielle : 2 a 4 fois par an</li>
            </ul>

            <div class="bg-[#EFF8FF] rounded-2xl p-6 mt-8 border border-blue-100">
              <p class="font-black text-[#233B72] text-lg">Devis gratuit sous 24h</p>
              <p class="text-gray-600 mt-2">Ellipsys Solutions intervient sur toute la France pour le nettoyage de vos panneaux photovoltaiques. Contactez-nous au 04 67 20 97 09.</p>
            </div>
          </div>
        `,
        en: `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            <p class="text-lg font-medium text-[#233B72]">A dirty solar panel loses between 15 and 30% of its output. For a 100 kWp installation, that means thousands of euros in lost production every year.</p>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Cherry picker</h3>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>Equipment rental: 300 to 600 euros per day</li>
              <li>Labour: 300 to 500 euros per day</li>
              <li>Total for 500 m2: 1,500 to 2,500 euros</li>
              <li>High fall risk for operators</li>
            </ul>

            <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Drone and robotic cleaning</h3>
            <ul class="list-disc pl-6 space-y-2 font-medium">
              <li>From 0.08 euros per m2 for large surfaces</li>
              <li>For 500 m2: 400 to 800 euros</li>
              <li>40% cheaper than a cherry picker</li>
              <li>Zero fall risk, zero production interruption</li>
              <li>DGAC/EASA certified</li>
            </ul>

            <div class="bg-[#EFF8FF] rounded-2xl p-6 mt-8 border border-blue-100">
              <p class="font-black text-[#233B72] text-lg">Free quote within 24h</p>
              <p class="text-gray-600 mt-2">Ellipsys Solutions operates throughout France. Contact us at 04 67 20 97 09.</p>
            </div>
          </div>
        `
      }
    },
  ];

  const categories = [
    { id: 'all', label: t('blog.categories.all') },
    { id: 'tips', label: t('blog.categories.tips') },
    { id: 'technology', label: t('blog.categories.technology') },
    { id: 'regulations', label: t('blog.categories.regulations') },
    { id: 'social', label: language === 'fr' ? 'Nos Reseaux' : 'Social Media' }
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.categoryKey === selectedCategory);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 pt-32 max-w-5xl">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-[#233B72] hover:text-[#f97316] font-black mb-8 transition-colors group uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {language === 'fr' ? 'Retour aux articles' : 'Back to articles'}
          </button>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img src={selectedArticle.image} alt={selectedArticle.title[language as 'fr' | 'en']} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-12">
              <h1 className="text-2xl md:text-5xl font-black text-[#233B72] mb-8 leading-tight uppercase tracking-tighter">
                {selectedArticle.title[language as 'fr' | 'en']}
              </h1>
              <div
                className="prose prose-lg max-w-none text-gray-700 font-medium"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content[language as 'fr' | 'en'] }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('blog.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg max-w-3xl mx-auto font-bold text-white italic">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-black transition-all transform active:scale-95 shadow-sm uppercase tracking-wider ${
                cat.id === selectedCategory
                  ? 'bg-[#233B72] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#f97316] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {selectedCategory === 'social' ? (
          <div className="bg-white p-4 md:p-10 rounded-[3rem] shadow-2xl border border-gray-100 min-h-[600px]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-[#233B72] uppercase tracking-tighter">
                {language === 'fr' ? 'Suivez nos interventions' : 'Follow our work'}
              </h2>
            </div>
            <div className="elfsight-app-36c77099-6ba2-4501-bf85-3cbb1a1869b7" data-elfsight-app-lazy></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={article.image} alt={article.title[language as 'fr' | 'en']} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-[#233B72] mb-4 group-hover:text-[#f97316] transition-colors leading-tight uppercase tracking-tight">
                    {article.title[language as 'fr' | 'en']}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 font-bold">{article.excerpt[language as 'fr' | 'en']}</p>
                  <div className="mt-auto flex items-center text-[#f97316] font-black text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    {t('blog.readMore')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
