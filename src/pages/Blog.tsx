import { useState } from 'react';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

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
          <p>Les pollens, les fientes d'oiseaux (très acides), la pollution atmosphérique et les poussières agricoles créent une couche opaque qui bloque les rayons UV avant qu'ils n'atteignent les cellules photovoltaïques.</p>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">Pourquoi l'eau pure est la seule solution ?</h3>
          <p>Chez Ellipsys, nous n'utilisons pas l'eau du robinet. Pourquoi ? Parce qu'elle contient du calcaire. En séchant au soleil, l'eau calcaire laisse des traces blanches qui sont... opaques !</p>
          <p>Nous utilisons une <strong>eau pure à 99.9%, osmosée et déminéralisée</strong>. C'est un aimant à impuretés naturel :</p>
          <ul class="list-disc pl-6 space-y-2 mt-2">
            <li>Séchage sans aucune trace (Spot-free).</li>
            <li>Aucun produit chimique agressif pour les joints d'étanchéité.</li>
            <li>Respect total de l'environnement.</li>
          </ul>

          <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <h4 class="font-bold text-orange-700 mb-2">Le saviez-vous ?</h4>
            <p class="text-sm">Le nettoyage par drone permet d'éviter tout appui physique sur les panneaux. Pas de marche, pas d'échelle, donc zéro risque de micro-fissure invisible sur les cellules.</p>
          </div>
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
      content: `
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p class="text-lg font-medium text-[#334786]">Depuis le 1er janvier 2026, la transition est terminée. Les anciens scénarios nationaux (S1, S2, S3) ont laissé place aux standards européens harmonisés.</p>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">La fin du Scénario S3</h3>
          <p>Le scénario S3, qui encadrait le vol en zone peuplée (ville), est remplacé par le scénario européen <strong>STS-01</strong>. Ce changement n'est pas qu'administratif, il impose des contraintes techniques strictes :</p>
          <ul class="list-disc pl-6 space-y-2 mt-2">
            <li>Les drones doivent désormais porter le marquage de classe <strong>C5</strong>.</li>
            <li>Ils doivent être équipés de systèmes de coupure des moteurs indépendants (FTS).</li>
            <li>Le volume de vol est strictement limité à 120m de hauteur.</li>
          </ul>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">Pourquoi choisir un opérateur certifié ?</h3>
          <p>En tant que donneur d'ordre (Syndic, Propriétaire), votre responsabilité peut être engagée si vous faites appel à un prestataire non conforme. Ellipsys garantit :</p>
          <ul class="list-disc pl-6 space-y-2 mt-2">
            <li>Des pilotes titulaires du BAPD et de la formation pratique STS.</li>
            <li>Une déclaration d'exploitation à jour auprès de la DSAC.</li>
            <li>Une assurance RC Aérienne spécifique couvrant les dommages aux tiers.</li>
          </ul>

          <div class="bg-blue-50 border-l-4 border-[#334786] p-6 my-8">
            <p class="text-sm">Avant chaque mission, nous réalisons une étude de sécurité (SORA) et déclarons le vol en préfecture via AlphaTango, garantissant une sérénité totale pour nos clients.</p>
          </div>
        </div>
      `
    },
    {
      id: 3,
      category: "Technologie",
      title: "Soft-Wash vs Haute Pression : Protégez vos enduits",
      date: "20 Déc 2025",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      excerpt: "Trop de prestataires utilisent encore la haute pression sur des façades fragiles. Découvrez pourquoi nous privilégions la pulvérisation basse pression.",
      content: `
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p class="text-lg font-medium text-[#334786]">Le nettoyage de façade a mauvaise réputation, et pour cause. L'utilisation massive des nettoyeurs haute pression (type Kärcher) a causé des dégâts irréversibles sur de nombreux bâtiments.</p>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">Le danger de la Haute Pression</h3>
          <p>Projeter de l'eau à 200 bars sur un crépi ou un enduit gratté est une erreur technique majeure. La pression mécanique :</p>
          <ul class="list-disc pl-6 space-y-2 mt-2">
            <li>Arrache la couche superficielle imperméabilisante de l'enduit.</li>
            <li>Crée des micro-fissures invisibles à l'œil nu.</li>
            <li>Ouvre la porosité du mur : les mousses reviendront deux fois plus vite l'année suivante (effet "spongieux").</li>
          </ul>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">La solution Ellipsys : Le Soft-Wash</h3>
          <p>Nous utilisons nos drones pour une approche "chimique" et non "mécanique". Nous pulvérisons à <strong>basse pression</strong> (similaire à un jet d'eau de jardin) un mélange biocide et fongicide.</p>
          <p>C'est le produit qui travaille, pas la pression de l'eau. Il détruit les racines des lichens et des algues rouges en profondeur, sans jamais agresser le support. Le résultat est durable et préserve l'intégrité de votre bâti.</p>
        </div>
      `
    },
    {
      id: 4,
      category: "Technologie",
      title: "IA et inspection thermique : Voir l'invisible",
      date: "10 Déc 2025",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      excerpt: "Cartographiez les déperditions de chaleur de vos bâtiments en temps réel grâce à nos capteurs radiométriques et l'analyse IA.",
      content: `
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p class="text-lg font-medium text-[#334786]">L'inspection visuelle ne suffit plus. Pour comprendre l'efficacité énergétique d'un bâtiment industriel ou résidentiel, il faut voir au-delà du visible.</p>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">La Thermographie Aérienne</h3>
          <p>Nos drones sont équipés de caméras thermiques radiométriques de haute précision. En survolant une toiture ou une façade, nous captons le rayonnement infrarouge émis par la structure.</p>

          <h3 class="text-2xl font-bold text-[#334786] mt-8 mb-4">Que détectons-nous ?</h3>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
              <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <h5 class="font-bold text-orange-500">Ponts Thermiques</h5>
                  <p class="text-sm text-slate-600">Zones où l'isolation est manquante ou défaillante, laissant s'échapper la chaleur.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <h5 class="font-bold text-orange-500">Infiltrations d'eau</h5>
                  <p class="text-sm text-slate-600">L'eau emprisonnée sous une toiture terrasse a une inertie thermique différente. Elle apparaît clairement à la caméra thermique.</p>
              </div>
          </div>

          <p class="mt-6">Ces données sont ensuite traitées par nos algorithmes pour générer des cartes de chaleur précises, permettant de cibler les travaux de rénovation uniquement là où c'est nécessaire.</p>
        </div>
      `
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
            <div className="relative h-96 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#334786] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedArticle.date}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {selectedArticle.title}
              </h1>

              <div
                className="prose prose-lg max-w-none"
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
      <div
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-32 pt-40 overflow-hidden"
        style={{
          backgroundImage: 'url(/design_sans_titre.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'normal'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/30"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">Blog & Actualités</h1>
          <p className="text-2xl text-gray-100 drop-shadow-lg">Expertise, conseils et innovations dans le nettoyage par drone</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                cat === selectedCategory
                  ? 'bg-[#334786] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#f97316] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#334786] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#334786] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="flex items-center text-[#f97316] font-medium group-hover:gap-2 transition-all"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
