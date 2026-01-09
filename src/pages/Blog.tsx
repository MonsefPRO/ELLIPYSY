import { useState } from 'react';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';

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
          <p class="text-lg font-medium text-[#334786]">"La pluie nettoie mes panneaux". C'est l'idée reçue la plus coûteuse du secteur solaire. En réalité, une installation non entretenue perd entre 10% et 30% de sa production annuelle.</p>
          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">L'effet "Pare-brise sale"</h3>
          <p>Imaginez votre pare-brise après un mois sans lavage, même s'il a plu. Il reste un film grisâtre, gras et statique. C'est exactement ce qui se passe sur vos panneaux solaires.</p>
          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">Pourquoi l'eau pure est la seule solution ?</h3>
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
      content: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>Contenu sur la réglementation 2026...</p></div>`
    },
    {
      id: 3,
      category: "Technologie",
      title: "Soft-Wash vs Haute Pression : Protégez vos enduits",
      date: "20 Déc 2025",
      image: "facadeblog.png",
      excerpt: "Pourquoi la haute pression peut détruire vos façades et comment le drone propose une alternative douce.",
      content: `<div class="space-y-6 text-slate-700 leading-relaxed"><p>Contenu sur le Soft-Wash...</p></div>`
    }
  ];

  const categories = ['Tous', 'Conseils', 'Technologie', 'Réglementation'];

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
            className="flex items-center gap-2 text-[#334786] hover:text-[#f97316] font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour aux articles
          </button>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#334786] text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center text-gray-500 text-xs md:text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedArticle.date}
                </div>
              </div>

              <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {selectedArticle.title}
              </h1>

              <div
                className="prose prose-sm md:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* BANNIÈRE HARMONISÉE : h-[400px] IDENTIQUE AUX RÉALISATIONS */}
      <section className="relative pt-32 pb-20 overflow-hidden flex items-center h-[400px]">
        <HeroCarousel />
        
        {/* FILTRE RÉFÉRENCE SOMBRE (z-10) */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
        
        {/* TEXTE BLANC AVEC OMBRE (z-20) */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-2xl text-white">
            Blog & Actualités
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg max-w-3xl mx-auto font-semibold text-white">
            Les drones au service de l'humain
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* FILTRES CATÉGORIES */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all transform active:scale-95 ${
                cat === selectedCategory
                  ? 'bg-[#334786] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#f97316] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLE D'ARTICLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#334786] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#334786] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center text-[#f97316] font-bold text-sm group-hover:gap-2 transition-all">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
