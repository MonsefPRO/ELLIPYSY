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
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

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
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [comparisonSlider, setComparisonSlider] = useState<{[key: number]: number}>({});

  const realisations: Realisation[] = [
    {
      id: 1,
      title: language === 'fr' ? "Immeuble de bureaux" : "Office Building",
      category: "commercial",
      location: "Paris 15ème",
      date: language === 'fr' ? "Octobre 2024" : "October 2024",
      surface: "2 500 m²",
      service: t('mainServices.facade.title'),
      imageBefore: "bati1.png",
      imageAfter: "bati2.png",
      description: language === 'fr' 
        ? "Nettoyage complet d'une façade vitrée de 8 étages par drone. Intervention réalisée sans interruption d'activité."
        : "Complete drone cleaning of an 8-story glass facade. Operation carried out without business interruption.",
      benefits: [
        language === 'fr' ? "Aucun échafaudage nécessaire" : "No scaffolding required",
        language === 'fr' ? "Économie de 45% vs traditionnel" : "45% savings vs traditional",
        language === 'fr' ? "Zéro interruption d'activité" : "Zero business interruption"
      ],
      stats: [
        { label: language === 'fr' ? "Durée" : "Duration", value: "2 j" },
        { label: language === 'fr' ? "Économie" : "Savings", value: "-45%" },
        { label: "Surface", value: "2500m²" }
      ]
    },
    {
      id: 2,
      title: language === 'fr' ? "Entrepôt industriel" : "Industrial Warehouse",
      category: "industrial",
      location: "Lyon",
      date: language === 'fr' ? "Septembre 2024" : "September 2024",
      surface: "5 000 m²",
      service: t('mainServices.demoussage.title'),
      imageBefore: "indus1.png",
      imageAfter: "indus2.png",
      description: language === 'fr'
        ? "Traitement anti-mousse longue durée par drone sur une toiture industrielle de grande envergure."
        : "Long-lasting drone anti-moss treatment on a large-scale industrial roof.",
      benefits: [
        language === 'fr' ? "Traitement 100% homogène" : "100% homogeneous treatment",
        language === 'fr' ? "Accès zones difficiles" : "Access to difficult areas",
        language === 'fr' ? "Produit écologique certifié" : "Certified eco-friendly product"
      ],
      stats: [
        { label: language === 'fr' ? "Durée" : "Duration", value: "3 j" },
        { label: language === 'fr' ? "Économie" : "Savings", value: "-50%" },
        { label: "Surface", value: "5000m²" }
      ]
    },
    {
      id: 3,
      title: language === 'fr' ? "Résidence de 6 étages" : "6-Story Residency",
      category: "residential",
      location: "Bordeaux",
      date: language === 'fr' ? "Août 2024" : "August 2024",
      surface: "1 800 m²",
      service: t('mainServices.facade.title'),
      imageBefore: "38.png", 
      imageAfter: "39.png",
      description: language === 'fr'
        ? "Ravalement par drone en milieu habité. Aucune nuisance sonore ou visuelle pour les résidents."
        : "Drone facade restoration in a residential area. No noise or visual nuisance for residents.",
      benefits: [
        language === 'fr' ? "Pas de gêne résidents" : "No resident disturbance",
        language === 'fr' ? "Traitement anti-pollution" : "Anti-pollution treatment",
        language === 'fr' ? "Garantie résultat 2 ans" : "2-year result guarantee"
      ],
      stats: [
        { label: language === 'fr' ? "Durée" : "Duration", value: "3 j" },
        { label: language === 'fr' ? "Économie" : "Savings", value: "-40%" },
        { label: "Surface", value: "1800m²" }
      ]
    },
    {
      id: 4,
      title: language === 'fr' ? "Monument historique" : "Historic Monument",
      category: "heritage",
      location: "Toulouse",
      date: language === 'fr' ? "Juillet 2024" : "July 2024",
      surface: "800 m²",
      service: "Inspection + Nettoyage",
      imageBefore: "36.png",
      imageAfter: "37.png",
      description: language === 'fr'
        ? "Nettoyage délicat d'une façade classée avec validation de l'Architecte des Bâtiments de France."
        : "Delicate cleaning of a listed facade with validation from France's heritage architects.",
      benefits: [
        language === 'fr' ? "Respect du patrimoine" : "Heritage preservation",
        language === 'fr' ? "Produits non agressifs" : "Non-aggressive products",
        language === 'fr' ? "Inspection thermique HD" : "HD thermal inspection"
      ],
      stats: [
        { label: language === 'fr' ? "Durée" : "Duration", value: "4 j" },
        { label: language === 'fr' ? "Précision" : "Precision", value: "100%" },
        { label: "Surface", value: "800m²" }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: t('realisations.categories.all'), icon: Building2 },
    { id: 'commercial', label: t('realisations.categories.commercial'), icon: Building2 },
    { id: 'industrial', label: t('realisations.categories.industrial'), icon: Factory },
    { id: 'residential', label: t('realisations.categories.residential'), icon: Home },
    { id: 'heritage', label: t('realisations.categories.heritage'), icon: Landmark }
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
      
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('realisations.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            {t('realisations.subtitle')}
          </p>
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
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black whitespace-nowrap transition-all text-sm md:text-base shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-[#233B72] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#f97316] hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {filteredRealisations.map(realisation => {
            const sliderValue = comparisonSlider[realisation.id] || 50;

            return (
              <div key={realisation.id} className="group bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 sm:h-72 md:h-80 bg-gray-200 overflow-hidden touch-none">
                  <div className="absolute inset-0">
                    <img src={realisation.imageAfter} alt="After" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
                    <img src={realisation.imageBefore} alt="Before" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20" style={{ left: `${sliderValue}%` }}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-xl flex gap-1">
                         <ChevronLeft className="w-4 h-4 text-[#233B72]" />
                         <ChevronRight className="w-4 h-4 text-[#233B72]" />
                    </div>
                  </div>
                  <input type="range" min="0" max="100" value={sliderValue} onChange={(e) => handleSliderChange(realisation.id, parseInt(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{t('realisations.comparison.before')}</span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#233B72]/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{t('realisations.comparison.after')}</span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 leading-tight uppercase tracking-tighter">{realisation.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase text-gray-400">
                    <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#f97316]" /> {realisation.location}</div>
                    <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#f97316]" /> {realisation.date}</div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mb-8 font-medium leading-relaxed">{realisation.description}</p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {realisation.stats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
                        <div className="text-base md:text-xl font-black text-[#233B72]">{stat.value}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mt-auto border-t border-gray-50 pt-6">
                    {realisation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-gray-700">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-green-600" /></div>
                        <span className="font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
