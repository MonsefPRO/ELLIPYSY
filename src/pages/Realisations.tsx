import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Building2, Home, Factory, Landmark, Check, Calendar, MapPin, TrendingUp, Award } from 'lucide-react';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';

interface Realisation {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  surface: string;
  service: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
  benefits: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export default function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [comparisonSlider, setComparisonSlider] = useState<{[key: number]: number}>({});

  const realisations: Realisation[] = [
    {
      id: 1,
      title: "Nettoyage de façade - Immeuble de bureaux",
      category: "commercial",
      location: "Paris 15ème",
      date: "Octobre 2024",
      surface: "2 500 m²",
      service: "Nettoyage de façade",
      imageBefore: "bati1.png",
      imageAfter: "bati2.png",
      description: "Nettoyage complet d'une façade vitrée de 8 étages avec technologie drone. Intervention réalisée en 2 jours sans interruption d'activité.",
      benefits: [
        "Aucun échafaudage nécessaire",
        "Zéro interruption d'activité",
        "Économie de 45% par rapport aux méthodes traditionnelles (échafaudages, nacelles)",
        "Résultat impeccable sur toute la surface"
      ],
      stats: [
        { label: "Durée", value: "2 jours" },
        { label: "Économie vs trad.", value: "-45%" },
        { label: "Surface", value: "2500 m²" }
      ]
    },
    {
      id: 2,
      title: "Démoussage toiture - Entrepôt industriel",
      category: "industrial",
      location: "Lyon",
      date: "Septembre 2024",
      surface: "5 000 m²",
      service: "Démoussage de toiture",
      imageBefore: "indus1.png",
      imageAfter: "indus2.png",
      description: "Traitement et démoussage d'une toiture industrielle avec application de produit anti-mousse longue durée par drone.",
      benefits: [
        "Traitement homogène sur toute la surface",
        "Accès aux zones difficiles",
        "Pas de risque pour les opérateurs",
        "Produit écologique certifié"
      ],
      stats: [
        { label: "Durée", value: "3 jours" },
        { label: "Économie vs trad.", value: "-50%" },
        { label: "Surface", value: "5000 m²" }
      ]
    },
    {
      id: 3,
      title: "Nettoyage façade - Copropriété résidentielle",
      category: "residential",
      location: "Bordeaux",
      date: "Août 2024",
      surface: "1 800 m²",
      service: "Nettoyage de façade",
      imageBefore: "38.png", 
      imageAfter: "39.png",
      description: "Ravalement de façade d'une résidence de 6 étages avec nettoyage haute pression par drone et traitement anti-pollution.",
      benefits: [
        "Intervention en période habitée",
        "Pas de gêne pour les résidents",
        "Ravalement complet en 3 jours",
        "Garantie résultat 2 ans"
      ],
      stats: [
        { label: "Durée", value: "3 jours" },
        { label: "Économie vs trad.", value: "-40%" },
        { label: "Surface", value: "1800 m²" }
      ]
    },
    {
      id: 4,
      title: "Inspection et nettoyage - Monument historique",
      category: "heritage",
      location: "Toulouse",
      date: "Juillet 2024",
      surface: "800 m²",
      service: "Inspection + Nettoyage",
      imageBefore: "36.png",
      imageAfter: "37.png",
      description: "Inspection thermique et nettoyage délicat d'une façade classée monument historique avec produits spécialement adaptés.",
      benefits: [
        "Respect du patrimoine architectural",
        "Produits non agressifs",
        "Inspection détaillée incluse",
        "Validation Architecte des Bâtiments de France"
      ],
      stats: [
        { label: "Durée", value: "4 jours" },
        { label: "Précision", value: "100%" },
        { label: "Surface", value: "800 m²" }
      ]
    },
    {
      id: 5,
      title: "Nettoyage grande hauteur - Centre commercial",
      category: "commercial",
      location: "Marseille",
      date: "Juin 2024",
      surface: "3 200 m²",
      service: "Nettoyage de façade",
      imageBefore: "40.png",
      imageAfter: "41.png",
      description: "Nettoyage de vitres et façades d'un centre commercial de 12 étages, intervention de nuit pour éviter toute gêne aux clients.",
      benefits: [
        "Intervention nocturne possible",
        "Résultat uniforme sur grande hauteur",
        "Aucune fermeture nécessaire",
        "Sécurité maximale"
      ],
      stats: [
        { label: "Durée", value: "5 nuits" },
        { label: "Économie vs trad.", value: "-42%" },
        { label: "Surface", value: "3200 m²" }
      ]
    },
    {
      id: 6,
      title: "Démoussage toiture - Complexe résidentiel",
      category: "residential",
      location: "Nantes",
      date: "Mai 2024",
      surface: "4 500 m²",
      service: "Démoussage de toiture",
      imageBefore: "44.png",
      imageAfter: "45.png",
      description: "Démoussage et traitement hydrofuge de toitures sur un ensemble de 15 pavillons en copropriété. Traitement préventif 5 ans inclus.",
      benefits: [
        "Traitement préventif longue durée",
        "Tous les pavillons traités simultanément",
        "Protection anti-mousse 5 ans",
        "Rapport détaillé par bâtiment"
      ],
      stats: [
        { label: "Durée", value: "6 jours" },
        { label: "Économie vs trad.", value: "-48%" },
        { label: "Surface", value: "4500 m²" }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: Building2 },
    { id: 'commercial', label: 'Commercial', icon: Building2 },
    { id: 'industrial', label: 'Industriel', icon: Factory },
    { id: 'residential', label: 'Résidentiel', icon: Home },
    { id: 'heritage', label: 'Patrimoine', icon: Landmark }
  ];

  const filteredRealisations = selectedCategory === 'all'
    ? realisations
    : realisations.filter(r => r.category === selectedCategory);

  const handleSliderChange = (id: number, value: number) => {
    setComparisonSlider(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header onBlueBanner={false} />
      
    <section className="relative pt-32 pb-20 overflow-hidden flex items-center min-h-[400px]">
        <HeroCarousel />
        
        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l'accueil</span>
          </Link>

          <div className="max-w-3xl text-left text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Portfolio & Références Clients
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Nos Réalisations
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 drop-shadow-md mb-8">
              Découvrez nos interventions techniques et nos projets d'envergure par drone
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Projets réalisés</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-white/80">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredRealisations.map(realisation => {
            const sliderValue = comparisonSlider[realisation.id] || 50;

            return (
              <div
                key={realisation.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100"
              >
                <div className="relative h-80 bg-gray-100 overflow-hidden group">
                  <div className="absolute inset-0">
                    <img
                      src={realisation.imageAfter}
                      alt={`${realisation.title} - Après`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                  >
                    <img
                      src={realisation.imageBefore}
                      alt={`${realisation.title} - Avant`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
                    style={{ left: `${sliderValue}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl">
                      <div className="flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4 text-gray-700" />
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(realisation.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Avant
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Après
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 flex-1">
                      {realisation.title}
                    </h3>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-lg">
                      {realisation.service}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{realisation.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{realisation.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {realisation.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {realisation.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-sky-700">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {realisation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Références Clients
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collectivités, entreprises et particuliers : découvrez les clients qui ont choisi nos prestations drone certifiées pour leurs projets.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-12 items-center justify-center flex-wrap">
              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-sky-300 hover:shadow-lg transition-all min-w-[200px] h-32">
                <div className="text-center">
                  <Building2 className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Tours de bureaux</p>
                  <p className="text-xs text-gray-500">Paris & Île-de-France</p>
                </div>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-sky-300 hover:shadow-lg transition-all min-w-[200px] h-32">
                <div className="text-center">
                  <Factory className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Entrepôts industriels</p>
                  <p className="text-xs text-gray-500">Lyon & Rhône-Alpes</p>
                </div>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-sky-300 hover:shadow-lg transition-all min-w-[200px] h-32">
                <div className="text-center">
                  <Home className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Copropriétés</p>
                  <p className="text-xs text-gray-500">Bordeaux & Nantes</p>
                </div>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-sky-300 hover:shadow-lg transition-all min-w-[200px] h-32">
                <div className="text-center">
                  <Landmark className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Monuments historiques</p>
                  <p className="text-xs text-gray-500">Toulouse & Occitanie</p>
                </div>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-sky-300 hover:shadow-lg transition-all min-w-[200px] h-32">
                <div className="text-center">
                  <Award className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Centres commerciaux</p>
                  <p className="text-xs text-gray-500">Marseille & PACA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Votre projet mérite la même qualité
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Obtenez un devis personnalisé sous 24h pour vos prestations drone
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-white text-sky-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            <span>Demander un devis gratuit</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
