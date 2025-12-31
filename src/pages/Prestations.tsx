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

export default function Prestations() {
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);

  const carouselImages = [
    { src: '/rony.jpg', alt: 'Robot de nettoyage drone sur panneaux solaires' },
    { src: '/abateur_de_frelons.png', alt: 'Système de nettoyage en action' },
    { src: '/rony3.jpg', alt: 'Drone nettoyant une toiture' }, 
    { src: '/ares.png', alt: 'Drone professionnel au sol' },
    { src: '/rony2.jpg', alt: 'Équipement de nettoyage drone' },
    { src: '/ares2.jpg', alt: 'Drone sur panneaux solaires' },
    { src: '/Demoussage drone 1.jpg', alt: 'Technologie de nettoyage drone' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const prestations = [
    {
      id: 'nettoyage-facade',
      title: 'Nettoyage de façades',
      description:
        "Une façade encrassée ou négligée nuit à l'image de votre bâtiment et accélère la dégradation des matériaux. Grâce à notre technologie de nettoyage par drone, certifiée et sans recours à l'échafaudage ou à la nacelle, redonnez éclat, propreté et durabilité à vos façades professionnelles en toute sécurité.",
      image: '/ares.png',
      link: '/prestations/nettoyage-facade',
      icon: Droplets,
      equipment: [
        'Drone haute altitude',
        'Systèmes haute pression réglable',
        'Produits biodégradables certifiés AB',
        'Inspection thermique HD'
      ],
      advantages: [
        'Zéro risque de chute ou accident',
        "Pas d'installation d'équipement lourd (échelle, échafaudage)",
        'Nettoyage homogène sans surcharges',
        'Protection des matériaux fragiles'
      ],
      benefits: [
        'Sécurité maximale : zéro risque de chute, pas de rappel ni d’échafaudage',
        'Intervention 3x plus rapide que les méthodes traditionnelles',
        'Produits de nettoyage certifiés AB et biodégradables',
        'Certifications DGAC et conformité législation 2026',
        'Suivi client personnalisé avec rapport photo avant/après',
        'Spécialisés : façades historiques, monuments, bâtiments industriels et logistiques',
        'Protection hydrofuge longue durée incluse'
      ],
      certifications: [
        'Certification DGAC',
        'Pilotes certifiés',
        'Assurance RC Pro',
        'Conformité 2026',
        'Produits certifiés AB'
      ],
      color: 'sky',
      seoKeywords:
        'nettoyage façade drone, nettoyage façade industrielle, nettoyage monument historique, nettoyage bâtiment logistique, nettoyage façade sans échafaudage'
    },
    {
      id: 'demoussage',
      title: 'Nettoyage et démoussage de Toitures',
      description:
        "Sans traitement régulier, les mousses, lichens et champignons dégradent progressivement l'étanchéité de votre toiture, réduisant sa durée de vie jusqu'à 30 %. Préservez votre patrimoine immobilier avec notre service de démoussage par drone, une solution sécurisée, rapide et certifiée pour une toiture durable et performante.",
      image: '/Demoussage drone 1.jpg',
      link: '/prestations/demoussage',
      icon: Shield,
      equipment: [
        'Drone haute performance', 
        'Systèmes hydrojet haute pression',
        'Produits biocides biodégradables',
        'Traitement hydrofuge professionnel'
      ],
      advantages: [
        'Zéro déplacement sur la toiture',
        'Nettoyage sans surcharge structurelle',
        'Traitement ciblé sans débris',
        'Protection longue durée (10 ans)'
      ],
      benefits: [
        'Intervention sans marcher sur la toiture : préservation des tuiles',
        "Traitement 70% plus rapide qu'un démoussage traditionnel",
        'Produits anti-mousse certifiés AB et écologiques',
        'Opérateurs certifiés DGAC et conformité réglementation 2026',
        "Traitement préventif anti-repousse efficace jusqu'à 10 ans",
        "Rapport d'intervention détaillé et suivi client annuel",
        'Hydrofugation haute performance disponible'
      ],
      certifications: [
        'Certification DGAC',
        'Pilotes certifiés',
        'Assurance RC Pro',
        'Normes NF EN 13414',
        'Produits éco-responsable'
      ],
      color: 'green',
      seoKeywords:
        'démoussage toiture drone, démoussage sans échafaudage, traitement anti-mousse écologique, démoussage rapide, entretien toiture drone'
    },
    {
      id: 'panneaux-photovoltaiques',
      title: "Nettoyage de panneaux photovaltaiques",
      description:
        "Des panneaux solaires encrassés peuvent perdre jusqu\'à 30 % de rendement énergétique. L\'accumulation de saletés peut également provoquer des points chauds (hotspots), causant des dommages localisés et réduisant la durée de vie de vos équipements. Grâce à un nettoyage professionnel par drone, réalisé deux fois par an, vous récupérez une production énergétique maximale et optimisez durablement votre retour sur investissement photovoltaïque.",
      image: '/rony.jpg',
      link: '/prestations/panneaux-photovoltaiques',
      icon: Sun,
      equipment: [
        'Drone agronomique certifié',
        'Systèmes basse pression doux',
        'Eau déminéralisée osmosée',
        'Inspection HD défauts'
      ],
      advantages: [
        'Nettoyage sans contact direct',
        "Zéro risque électrocution",
        'Intervention ultra-rapide (2-3h)',
        'Production énergétique optimisée'
      ],
      benefits: [
        "Récupérez jusqu'à 30% de production d'énergie perdue",
        'Nettoyage sans contact direct : aucun risque de rayures ou dommages',
        'Intervention 5x plus rapide que le nettoyage manuel',
        'Produits spécialisés photovoltaïques certifiés et non abrasifs',
        'Certification DGAC et conformité législation 2026',
        "Planning d'entretien bi-annuel avec rappel automatique",
        'Rapport de performance énergétique avant/après intervention'
      ],
      certifications: [
        'Certification DGAC',
        'Formation photovoltaïque',
        'Assurance RC Pro électricité',
        'Conformité normes électriques',
        'Protocoles sécurité'
      ],
      color: 'amber',
      seoKeywords:
        'nettoyage panneaux solaires, entretien photovoltaïque, nettoyage panneaux drone, rendement panneaux solaires, maintenance photovoltaïque'
    },
    {
      id: 'elimination-frelons',
      title: 'Destruction de nids de frelons',
      description:
        "L’élimination des nids de frelons, en particulier des frelons asiatiques, constitue un risque sérieux pour les intervenants non équipés. Grâce à notre technologie drone de neutralisation, nous traitons rapidement et efficacement les nids situés en hauteur ou dans des zones difficiles d’accès, avec un minimum d'exposition humaine au danger de piqûres.",
      image: '/abateur_de_frelons.png',
      link: '/prestations/elimination-frelons',
      icon: AlertTriangle,
      equipment: [
        'Drone haute altitude 50+ m',
        'Systèmes injection précision',
        'Biocides certifiés écologiques',
        'Caméras thermiques HD'
      ],
      advantages: [
        'Zéro exposition intervenant',
        'Accès zones inaccessibles',
        'Destruction complète garantie',
        'Prévention réinfestation'
      ],
      benefits: [
        'Aucune prise de risque humaine : intervention 100% sécurisée',
        'Accès aux nids en hauteur ou difficiles d’accès',
        'Méthode rapide et précise par drone',
        'Spécialement adaptée aux frelons asiatiques',
        'Intervention professionnelle certifiée DGAC',
        "Destruction ciblée sans danger pour l'environnement immédiat",
        "Rapport d'intervention avec photos avant/après"
      ],
      certifications: [
        'Certification DGAC',
        'Agrément biocides DGAC',
        'Assurance RC Pro spécifique',
        'Désinsectisation professionnelle',
        'Directive biocides 2009/128/CE'
      ],
      color: 'red',
      seoKeywords:
        "élimination nid de frelons, destruction nid de frelons par drone, frelons asiatiques, nid difficile d'accès, destruction nid frelons hauteur"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: {
      [key: string]: { gradient: string; text: string; bg: string; border: string };
    } = {
      sky: {
        gradient: 'from-sky-500 to-blue-600',
        text: 'text-sky-600',
        bg: 'bg-sky-50',
        border: 'border-sky-200'
      },
      green: {
        gradient: 'from-green-500 to-emerald-600',
        text: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200'
      },
      amber: {
        gradient: 'from-amber-500 to-orange-600',
        text: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-200'
      },
      violet: {
        gradient: 'from-violet-500 to-fuchsia-600',
        text: 'text-violet-600',
        bg: 'bg-violet-50',
        border: 'border-violet-200'
      },
      orange: {
        gradient: 'from-orange-500 to-red-600',
        text: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200'
      },
      red: {
        gradient: 'from-red-500 to-rose-600',
        text: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200'
      }
    };
    return colors[color] || colors.sky;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="h-[500px] bg-gradient-to-br from-sky-600 to-blue-700 relative overflow-hidden pt-32">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentCarouselImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/40 to-blue-700/40" />

        <div className="relative z-10 text-center text-white px-4">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Maintenance & Entretien par Drone</h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-6">
              Les drones au service de l'humain
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCarouselImage(index)}
              className={`transition-all duration-300 ${
                index === currentCarouselImage
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/70'
              } rounded-full`}
              aria-label={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-12">
          <Link to="/" className="hover:text-sky-600">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Prestations</span>
        </nav>

        <div className="space-y-16">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            const colors = getColorClasses(prestation.color);
            const isEven = index % 2 === 0;

            return (
              <div
                key={prestation.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-0 items-center bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="w-full lg:w-1/2 flex-shrink-0 p-4">
                  <div className="h-[320px] relative overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={prestation.image}
                      alt={prestation.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap text-center" style={{ color: '#233B72' }}>{prestation.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">{prestation.description}</p>
                  </div>

                  <div className={`${colors.bg} ${colors.border} border rounded-xl p-6`}>
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">Bénéfices clients :</h3>
                    <ul className="space-y-3">
                      {prestation.benefits.slice(0, 5).map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div
                            className={`w-6 h-6 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Link
                      to={prestation.link}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 group`}
                    >
                      <span>En savoir plus</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/devis"
                      className={`inline-flex items-center gap-2 border-2 ${colors.text} border-current px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all`}
                    >
                      <span>Demander un devis</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center border border-sky-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#233B72' }}>Besoin d'une prestation sur mesure ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pour des demandes spécifiques, nous proposons également des missions complémentaires : cartographie, thermographie, prises de vue techniques, analyses….
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-brand-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Demander un devis</span>
              <ChevronRight className="w-5 h-5" />
            </Link>

            <a
              href="/#contact"
              className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all inline-flex items-center justify-center"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <CertificationsSection />
    </div>
  );
}
