import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Shield,
  Clock,
  Droplets,
  AlertTriangle,
  Sun,
  CheckCircle,
  Award,
  Users
} from 'lucide-react';
import Header from '../components/Header';
import CertificationsSection from '../components/CertificationsSection';
import { Hover3DCard } from '../components/Hover3DCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

export default function Prestations() {
  const prestations = [
    {
      id: 'nettoyage-facade',
      title: 'Nettoyage de façades',
      description:
        "Une façade encrassée ou négligée nuit à l'image de votre bâtiment et accélère la dégradation des matériaux. Grâce à notre technologie de nettoyage par drone, certifiée et sans recours à l'échafaudage ou à la nacelle, redonnez éclat, propreté et durabilité à vos façades professionnelles en toute sécurité.",
      image: '/ares.png',
      image2: '/chronos.jpg',
      link: '/NettoyageFacade', // CORRECTION : Correspond au fichier NettoyageFacade.tsx
      icon: Droplets,
      benefits: [
        'Sécurité maximale : zéro risque de chute',
        'Intervention 3x plus rapide que le traditionnel',
        'Produits de nettoyage certifiés AB',
        'Conformité législation 2026',
        'Suivi avec rapport photo avant/après'
      ],
      color: 'sky'
    },
    {
      id: 'demoussage',
      title: 'Nettoyage de Toitures',
      description:
        "Sans traitement régulier, les mousses et lichens dégradent l'étanchéité de votre toiture. Préservez votre patrimoine avec notre service de démoussage par drone, une solution sécurisée et rapide pour une toiture durable.",
      image: '/Demoussage drone 1.jpg',
      image2: '/5kmh_et_jusqu’a_600m2_heure_de_traitement.png',
      link: '/Demoussage', // CORRECTION : Correspond au fichier Demoussage.tsx
      icon: Shield,
      benefits: [
        'Zéro déplacement sur la toiture : tuiles préservées',
        'Traitement 70% plus rapide',
        'Produits anti-mousse écologiques',
        'Efficace jusqu\'à 10 ans',
        'Rapport d\'intervention détaillé'
      ],
      color: 'green'
    },
    {
      id: 'panneaux-photovoltaiques',
      title: "Panneaux photovoltaïques",
      description:
        "Des panneaux encrassés perdent jusqu'à 30% de rendement. Notre nettoyage professionnel par drone vous permet de récupérer une production maximale et d'optimiser votre investissement.",
      image: '/rony.jpg',
      image2: '/rony4.jpg',
      link: '/PanneauxPhotovoltaiques', // CORRECTION : Correspond au fichier PanneauxPhotovoltaiques.tsx
      icon: Sun,
      benefits: [
        "Récupérez jusqu'à 30% de production d'énergie",
        'Zéro contact direct : aucun risque de rayures',
        'Eau déminéralisée osmosée',
        'Intervention 5x plus rapide que le manuel',
        'Rapport de performance inclus'
      ],
      color: 'amber'
    },
    {
      id: 'elimination-frelons',
      title: 'Nids de frelons',
      description:
        "L'élimination des nids de frelons en hauteur est un risque sérieux. Notre technologie drone traite efficacement les nids difficiles d'accès avec un minimum d'exposition humaine.",
      image: '/abateur_de_frelons.png',
      image2: '/frel.png',
      link: '/EliminationFrelons', // CORRECTION : Correspond au fichier EliminationFrelons.tsx
      icon: AlertTriangle,
      benefits: [
        'Intervention 100% sécurisée à distance',
        'Accès aux nids à plus de 50m de hauteur',
        'Méthode ultra-précise',
        'Biocides certifiés écologiques',
        'Destruction complète garantie'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      sky: { gradient: 'from-sky-500 to-blue-600', text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
      green: { gradient: 'from-green-500 to-emerald-600', text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
      amber: { gradient: 'from-amber-500 to-orange-600', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
      red: { gradient: 'from-red-500 to-rose-600', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' }
    };
    return colors[color] || colors.sky;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-2xl text-white">
            Nos Prestations par Drone
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            L'expertise aérienne au service de votre patrimoine
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8 md:mb-12">
          <Link to="/" className="hover:text-sky-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Prestations</span>
        </nav>

        <div className="space-y-12 md:space-y-24">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            const colors = getColorClasses(prestation.color);
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={prestation.id} delay={0.1}>
                <Hover3DCard className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-5 md:p-10 lg:p-12">
                  <h2 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-10 text-center lg:text-left text-[#233B72]">
                    {prestation.title}
                  </h2>

                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                    <div className="w-full lg:w-1/2 space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-56 sm:h-72 md:h-80 relative overflow-hidden rounded-2xl shadow-lg">
                          <img src={prestation.image} alt={prestation.title} className="w-full h-full object-cover" />
                          <div className="absolute top-4 left-4">
                            <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="hidden lg:block h-80 relative overflow-hidden rounded-2xl shadow-lg">
                          <img src={prestation.image2} alt={`${prestation.title} - Détail`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
                        {prestation.description}
                      </p>

                      <div className={`${colors.bg} ${colors.border} border rounded-2xl p-5 md:p-6`}>
                        <h3 className="font-bold text-gray-800 mb-4 text-md md:text-lg flex items-center gap-2">
                          <CheckCircle className={`w-5 h-5 ${colors.text}`} />
                          Pourquoi nous choisir ?
                        </h3>
                        <ul className="space-y-3">
                          {prestation.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className={`w-5 h-5 rounded-full bg-white border-2 ${colors.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <div className={`w-2 h-2 rounded-full ${colors.gradient} bg-gradient-to-br`} />
                              </div>
                              <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                          to={prestation.link}
                          className={`flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 group`}
                        >
                          En savoir plus
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                          to="/Devis" // CORRECTION : Pointe vers Devis.tsx
                          className={`flex-1 inline-flex items-center justify-center gap-2 border-2 ${colors.text} border-current px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-95`}
                        >
                          Devis gratuit
                        </Link>
                      </div>
                    </div>
                  </div>
                </Hover3DCard>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Un projet spécifique ?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto px-4">
            Cartographie, thermographie ou inspection technique : nos experts s'adaptent à vos besoins les plus complexes.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/Devis" // CORRECTION
              className="bg-brand-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-orange-600 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Demander un devis
              <ChevronRight className="w-5 h-5" />
            </Link>

            <a href="tel:0467209709" className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              Nous appeler
            </a>
          </div>
        </div>
      </div>
      <CertificationsSection />
      <Footer />
    </div>
  );
}
