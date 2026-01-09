import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Home, 
  Factory, 
  Landmark, 
  Check, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Award 
} from 'lucide-react';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer'; // IMPORT DU FOOTER

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
      title: "Immeuble de bureaux",
      category: "commercial",
      location: "Paris 15ème",
      date: "Octobre 2024",
      surface: "2 500 m²",
      service: "Nettoyage de façade",
      imageBefore: "bati1.png",
      imageAfter: "bati2.png",
      description: "Nettoyage complet d'une façade vitrée de 8 étages par drone. Intervention réalisée sans interruption d'activité.",
      benefits: [
        "Aucun échafaudage nécessaire",
        "Économie de 45% vs traditionnel",
        "Zéro interruption d'activité"
      ],
      stats: [
        { label: "Durée", value: "2 j" },
        { label: "Économie", value: "-45%" },
        { label: "Surface", value: "2500m²" }
      ]
    },
    {
      id: 2,
      title: "Entrepôt industriel",
      category: "industrial",
      location: "Lyon",
      date: "Septembre 2024",
      surface: "5 000 m²",
      service: "Démoussage de toiture",
      imageBefore: "indus1.png",
      imageAfter: "indus2.png",
      description: "Traitement anti-mousse longue durée par drone sur une toiture industrielle de grande envergure.",
      benefits: [
        "Traitement 100% homogène",
        "Accès zones difficiles",
        "Produit écologique certifié"
      ],
      stats: [
        { label: "Durée", value: "3 j" },
        { label: "Économie", value: "-50%" },
        { label: "Surface", value: "5000m²" }
      ]
    },
    {
        id: 3,
        title: "Résidence de 6 étages",
        category: "residential",
        location: "Bordeaux",
        date: "Août 2024",
        surface: "1 800 m²",
        service: "Nettoyage de façade",
        imageBefore: "38.png", 
        imageAfter: "39.png",
        description: "Ravalement par drone en milieu habité. Aucune nuisance sonore ou visuelle pour les résidents.",
        benefits: [
          "Pas de gêne résidents",
          "Traitement anti-pollution",
          "Garantie résultat 2 ans"
        ],
        stats: [
          { label: "Durée", value: "3 j" },
          { label: "Économie", value: "-40%" },
          { label: "Surface", value: "1800m²" }
        ]
      },
      {
        id: 4,
        title: "Monument historique",
        category: "heritage",
        location: "Toulouse",
        date: "Juillet 2024",
        surface: "800 m²",
        service: "Inspection + Nettoyage",
        imageBefore: "36.png",
        imageAfter: "37.png",
        description: "Nettoyage délicat d'une façade classée avec validation de l'Architecte des Bâtiments de France.",
        benefits: [
          "Respect du patrimoine",
          "Produits non agressifs",
          "Inspection thermique HD"
        ],
        stats: [
          { label: "Durée", value: "4 j" },
          { label: "Précision", value: "100%" },
          { label: "Surface", value: "800m²" }
        ]
      }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: Building2 },
    { id: 'commercial', label: 'Pro', icon: Building2 },
    { id: 'industrial', label: 'Usine', icon: Factory },
    { id: 'residential', label: 'Habitat', icon: Home },
    { id: 'heritage', label: 'Patrimoine', icon: Landmark }
  ];

  const filteredRealisations = selectedCategory === 'all'
    ? realisations
    : realisations.filter(r => r.category === selectedCategory);

  const handleSliderChange = (id: number, value: number) => {
    setComparisonSlider(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
    <section className="relative pt-32 pb-20 overflow-hidden flex items-center h-[400px]">
  <HeroCarousel />
  <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
  
  <div className="relative z-20 w-full text-center px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl text-white">
      Nos Réalisations
    </h1>
    <p className="text-xl md:text-2xl drop-shadow-lg font-semibold text-white">
      Les drones au service de l'humain
    </p>

    <div className="flex justify-center gap-8 mt-6">
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
        <TrendingUp className="w-5 h-5 text-sky-200" />
        <span className="font-bold text-white">500+ Projets</span>
      </div>
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
        <Check className="w-5 h-5 text-green-300" />
        <span className="font-bold text-white">98% Satisfaction</span>
      </div>
    </div>
  </div>
</section>
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
        
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-2 md:gap-3 mb-10 md:mb-16 no-scrollbar justify-start md:justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all text-sm md:text-base ${
                  selectedCategory === cat.id
                    ? 'bg-[#233B72] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-transparent'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredRealisations.map(realisation => {
            const sliderValue = comparisonSlider[realisation.id] || 50;

            return (
              <div
                key={realisation.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 sm:h-72 md:h-80 bg-gray-200 overflow-hidden touch-none">
                  <div className="absolute inset-0">
                    <img src={realisation.imageAfter} alt="Après" className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="absolute inset-0 transition-none"
                    style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                  >
                    <img src={realisation.imageBefore} alt="Avant" className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20"
                    style={{ left: `${sliderValue}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-2xl">
                       <div className="flex gap-0.5">
                         <ChevronLeft className="w-3 h-3 text-gray-800" />
                         <ChevronRight className="w-3 h-3 text-gray-800" />
                       </div>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(realisation.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />

                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Avant</span>
                  </div>
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-sky-600/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Après</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                      {realisation.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs md:text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                      <MapPin className="w-4 h-4 text-sky-500" /> {realisation.location}
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                      <Calendar className="w-4 h-4 text-sky-500" /> {realisation.date}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-3">
                    {realisation.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                    {realisation.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-2xl p-2 md:p-3 text-center">
                        <div className="text-sm md:text-lg font-bold text-[#233B72]">{stat.value}</div>
                        <div className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-tighter">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mt-auto">
                    {realisation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-gray-700">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#233B72] text-white py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Votre bâtiment mérite ce résultat
          </h2>
          <p className="text-sky-100 text-sm md:text-lg mb-8 opacity-90">
            Rejoignez les centaines de clients qui ont déjà fait confiance à notre expertise drone.
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-brand-orange-600 transition-all shadow-xl active:scale-95"
          >
            Demander mon devis gratuit
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      {/* AJOUT DU FOOTER ICI */}
      <Footer />
    </div>
  );
}
