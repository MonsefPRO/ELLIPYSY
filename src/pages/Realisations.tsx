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
  MapPin
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

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
  const isFr = language === 'fr';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [comparisonSlider, setComparisonSlider] = useState<{[key: number]: number}>({});

  const realisations: Realisation[] = [
    {
      id: 1,
      title: isFr ? "Immeuble de bureaux" : "Office Building",
      category: "commercial",
      location: "Paris 15ème",
      date: isFr ? "Mars 2026" : "March 2026",
      surface: "1 200 m²",
      service: isFr ? "Nettoyage de Façade" : "Facade Cleaning",
      imageBefore: "/bati1.png",
      imageAfter: "/bati2.png",
      description: isFr 
        ? "Nettoyage complet d'une façade vitrée de 8 étages par drone. Intervention réalisée en un temps record sans bloquer l'accès au bâtiment."
        : "Complete drone cleaning of an 8-story glass facade. Operation carried out in record time without blocking access to the building.",
      benefits: [
        isFr ? "Aucun échafaudage nécessaire" : "No scaffolding required",
        isFr ? "Économie de 45% vs traditionnel" : "45% savings vs traditional",
        isFr ? "Zéro interruption d'activité" : "Zero business interruption"
      ],
      stats: [
        { label: isFr ? "Durée" : "Duration", value: isFr ? "1 j" : "1 day" },
        { label: isFr ? "Économie" : "Savings", value: "-45%" },
        { label: "Surface", value: "1 200 m²" }
      ]
    },
    {
      id: 2,
      title: isFr ? "Entrepôt industriel" : "Industrial Warehouse",
      category: "industrial",
      location: "Lyon",
      date: isFr ? "Avril 2026" : "April 2026",
      surface: "3 000 m²",
      service: isFr ? "Démoussage Toiture" : "Roof Moss Removal",
      imageBefore: "/indus1.png",
      imageAfter: "/indus2.png",
      description: isFr
        ? "Traitement anti-mousse préventif et curatif par drone sur une toiture industrielle bac acier de grande envergure."
        : "Preventive and curative drone anti-moss treatment on a large-scale steel deck industrial roof.",
      benefits: [
        isFr ? "Traitement 100% homogène" : "100% homogeneous treatment",
        isFr ? "Accès zones difficiles" : "Access to difficult areas",
        isFr ? "Biocide écologique certifié" : "Certified eco-friendly biocide"
      ],
      stats: [
        { label: isFr ? "Durée" : "Duration", value: isFr ? "1 j" : "1 day" },
        { label: isFr ? "Économie" : "Savings", value: "-50%" },
        { label: "Surface", value: "3 000 m²" }
      ]
    },
    {
      id: 3,
      title: isFr ? "Résidence de 6 étages" : "6-Story Residency",
      category: "residential",
      location: "Bordeaux",
      date: isFr ? "Février 2026" : "February 2026",
      surface: "900 m²",
      service: isFr ? "Ravalement par Drone" : "Drone Facade Cleaning",
      imageBefore: "/38.png", 
      imageAfter: "/39.png",
      description: isFr
        ? "Nettoyage par drone en milieu habité. Élimination des traces rouges (algues) sans aucune nuisance sonore ou visuelle pour les résidents."
        : "Drone cleaning in a residential area. Removal of red algae marks without any noise or visual nuisance for residents.",
      benefits: [
        isFr ? "Pas de gêne pour les résidents" : "No resident disturbance",
        isFr ? "Basse pression (Soft-Wash)" : "Low pressure (Soft-Wash)",
        isFr ? "Garantie résultat 2 ans" : "2-year result guarantee"
      ],
      stats: [
        { label: isFr ? "Durée" : "Duration", value: isFr ? "1 j" : "1 day" },
        { label: isFr ? "Économie" : "Savings", value: "-40%" },
        { label: "Surface", value: "900 m²" }
      ]
    },
    {
      id: 4,
      title: isFr ? "Monument historique" : "Historic Monument",
      category: "heritage",
      location: "Toulouse",
      date: isFr ? "Janvier 2026" : "January 2026",
      surface: "500 m²",
      service: isFr ? "Nettoyage Délicat" : "Delicate Cleaning",
      imageBefore: "/36.png",
      imageAfter: "/37.png",
      description: isFr
        ? "Nettoyage délicat d'une façade classée en pierre de taille. Protocole validé avec l'Architecte des Bâtiments de France."
        : "Delicate cleaning of a listed freestone facade. Protocol validated with France's heritage architects.",
      benefits: [
        isFr ? "Respect total du patrimoine" : "Complete heritage preservation",
        isFr ? "Produits non agressifs" : "Non-aggressive products",
        isFr ? "Aucun frottement mécanique" : "No mechanical friction"
      ],
      stats: [
        { label: isFr ? "Durée" : "Duration", value: isFr ? "1 j" : "1 day" },
        { label: isFr ? "Précision" : "Precision", value: "100%" },
        { label: "Surface", value: "500 m²" }
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
    <div className="min-h-screen bg-slate-50">
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

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-2 md:gap-3 mb-10 md:mb-16 no-scrollbar justify-start md:justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-black whitespace-nowrap transition-all text-sm md:text-base shadow-sm uppercase tracking-wider ${
                  selectedCategory === cat.id
                    ? 'bg-[#233B72] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-[#f97316] hover:text-white border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {filteredRealisations.map(realisation => {
            const sliderValue = comparisonSlider[realisation.id] || 50;

            return (
              <ScrollReveal key={realisation.id}>
                <div className="group bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
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
                      <span className="bg-[#1a2e5a]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20">
                        {t('realisations.comparison.before')}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-brand-orange-500/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20">
                        {t('realisations.comparison.after')}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 leading-tight uppercase tracking-tighter">
                      {realisation.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase text-gray-500 tracking-widest">
                      <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <MapPin className="w-4 h-4 text-brand-orange-500" /> {realisation.location}
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <Calendar className="w-4 h-4 text-brand-orange-500" /> {realisation.date}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base mb-8 font-medium leading-relaxed">
                      {realisation.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {realisation.stats.map((stat, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:bg-white hover:border-brand-orange-200 transition-colors">
                          <div className="text-lg md:text-2xl font-black text-[#233B72] mb-1">{stat.value}</div>
                          <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mt-auto border-t border-gray-100 pt-6">
                      {realisation.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-gray-700">
                          <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 border border-green-100">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="font-bold">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
