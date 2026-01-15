import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

interface Article {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Initialisation du moteur Elfsight
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const articles: Article[] = [
    {
      id: 1,
      category: "Conseils",
      title: "Rendement photovoltaïque : Pourquoi 30% de votre énergie s'évapore ?",
      date: "15 Janv 2026",
      image: "rendement.png",
      excerpt: "Ce n'est plus une estimation, mais une réalité mesurée : l'accumulation de poussières fines crée un voile statique que la pluie ne peut rincer.",
      content: `
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p class="text-lg font-medium text-[#233B72]">"La pluie nettoie mes panneaux". C'est l'idée reçue la plus coûteuse du secteur solaire. En réalité, une installation non entretenue perd entre 10% et 30% de sa production annuelle.</p>
          <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">L'effet "Pare-brise sale"</h3>
          <p>Imaginez votre pare-brise après un mois sans lavage, même s'il a plu. Il reste un film grisâtre, gras et statique. C'est exactement ce qui se passe sur vos panneaux solaires.</p>
          <h3 class="text-2xl font-bold text-[#233B72] mt-8 mb-4">Pourquoi l'eau pure est la seule solution ?</h3>
          <p>Nous utilisons une <strong>eau pure à 99.9%, osmosée et déminéralisée</strong>. C'est un aimant à impuretés naturel.</p>
        </div>
      `
    },
    {
      id: 2,
      category: "Réglementation",
      title: "Réglementation 2026 : Ce qui change pour le survol urbain",
      date: "05 Janv 2026",
      image: "regle.png",
      excerpt: "Le passage définitif aux scénarios européens STS-01 est acté. Ellipsys fait le point sur les nouvelles certifications nécessaires.",
      content: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>La réglementation drone évolue pour harmoniser les vols en zone urbaine à travers l'Europe. Les exploitants doivent désormais se conformer aux nouveaux certificats de navigabilité et aux scénarios standards STS.</p></div>`
    },
    {
      id: 3,
      category: "Technologie",
      title: "Soft-Wash vs Haute Pression : Protégez vos enduits",
      date: "20 Déc 2025",
      image: "facadeblog.png",
      excerpt: "Pourquoi la haute pression peut détruire vos façades et comment le drone propose une alternative douce.",
      content: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>Le nettoyage haute pression risque de fragiliser les enduits de façade et de créer des porosités. La technologie Soft-Wash, appliquée par drone, utilise des produits basse pression pour un nettoyage en profondeur sans agression mécanique.</p></div>`
    },
    {
      id: 4,
      category: "Technologie",
      title: "L'ennemi invisible des façades : Les micro-organismes",
      date: "10 Janv 2026",
      image: "ares.png", 
      excerpt: "Algues rouges, lichens et mousses ne sont pas qu'un problème esthétique. Ils s'enracinent dans votre enduit et créent des micro-fissures.",
      content: `
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <h3 class="text-2xl font-bold text-[#233B72]">Pourquoi une façade devient-elle rouge ou noire ?</h3>
          <p>Ces colorations sont dues à la prolifération de micro-organismes qui se nourrissent de l'humidité retenue dans les pores du support.</p>
          <p>Notre traitement par drone utilise des <strong>produits biocides certifiés</strong> qui éliminent le germe à la source.</p>
        </div>
      `
    }
  ];

  const categories = ['Tous', 'Conseils', 'Technologie', 'Réglementation', 'Nos Réseaux'];

  const filteredArticles = selectedCategory === 'Tous'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 pt-32 max-w-5xl">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-[#233B72] hover:text-[#f97316] font-bold mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour aux articles
          </button>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#233B72] text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center text-gray-500 text-xs md:text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedArticle.date}
                </div>
              </div>

              <h1 className="text-2xl md:text-5xl font-black text-[#233B72] mb-8 leading-tight">
                {selectedArticle.title}
              </h1>

              <div
                className="prose prose-sm md:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
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

      {/* HERO SECTION HARMONISÉE : Lueur Risques/Valeurs */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            Blog & Actualités
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg max-w-3xl mx-auto font-semibold text-white">
            L'expertise du nettoyage aérien par drone
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* CATEGORIES HARMONISÉES */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-bold transition-all transform active:scale-95 shadow-sm ${
                cat === selectedCategory
                  ? 'bg-[#233B72] text-white shadow-blue-900/20 shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#f97316] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {selectedCategory === 'Nos Réseaux' ? (
          <div className="bg-white p-4 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 min-h-[600px] animate-in fade-in duration-700">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-[#233B72] mb-2">Suivez nos interventions</h2>
                <p className="text-gray-500 font-medium">L'actualité Ellipsys en direct des réseaux sociaux</p>
                <div className="w-20 h-1.5 bg-[#f97316] mx-auto mt-4 rounded-full"></div>
             </div>
             {/* Widget Elfsight */}
             <div className="elfsight-app-36c77099-6ba2-4501-bf85-3cbb1a1869b7" data-elfsight-app-lazy></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-[#233B72] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-bold text-gray-400 mb-4 uppercase tracking-tighter">
                    <Calendar className="w-4 h-4 mr-2 text-[#f97316]" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-black text-[#233B72] mb-4 group-hover:text-[#f97316] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed font-medium">{article.excerpt}</p>
                  <div className="mt-auto flex items-center text-[#f97316] font-black text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Lire l'article
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
