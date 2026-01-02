import { useEffect } from 'react';
import { ChevronRight, Shield, Clock, Droplets, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FloatingDrone } from '../components/FloatingDrone';

export default function NettoyageFacade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-96 bg-gradient-to-br from-sky-500 to-blue-700 relative overflow-hidden pt-20">
        <FloatingDrone
          src="/ares.png"
          alt="Nettoyage de façade par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nettoyage de façade par drone</h1>
            <p className="text-xl md:text-2xl text-sky-100">Les drones au service de l'humain</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-sky-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Nettoyage de façade</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nettoyage de façade</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ellipsys révolutionne l'entretien des façades avec une solution aérienne par <strong>drone</strong>, spécialement conçue pour les <strong>entreprises, collectivités et gestionnaires de patrimoine immobilier</strong>. Alliant <strong>sécurité maximale</strong>, <strong>rapidité d'exécution</strong> et <strong>rentabilité</strong>, notre méthode s'impose comme la nouvelle référence du <strong>nettoyage de façade professionnel sans échafaudage</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos pilotes de <strong>drone certifiés DGAC</strong> interviennent sur tous types de matériaux : pierre naturelle, béton, brique, crépi, bardage métallique ou encore façades vitrées. Grâce à une <strong>pulvérisation précise et douce</strong>, nous <strong>éliminons efficacement</strong> salissures, pollution atmosphérique, mousses, lichens et autres contaminants.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tous les types de façades</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Façades en pierre naturelle',
                  'Bâtiments en béton',
                  'Murs en brique',
                  'Crépi et enduit',
                  'Bardage métallique',
                  'Façades vitrées',
                  'Toitures et chéneaux',
                  'Monuments historiques'
                ].map((type, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors">
                    <div className="w-2 h-2 bg-sky-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Équipements utilisés</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Drone haute altitude', desc: 'Technologie professionnelle certifiée pour grandes hauteurs' },
                  { title: 'Systèmes haute pression réglable', desc: 'Puissance adaptée par type de façade' },
                  { title: 'Produits biodégradables certifiés AB', desc: 'Nettoyants écologiques et efficaces' },
                  { title: 'Inspection thermique HD', desc: 'Détection anomalies et zones critiques' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-100">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-sky-600" />
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Avantages vs. méthodes traditionnelles</h3>
              <div className="space-y-3 mb-8">
                {[
                  { title: 'Zéro risque de chute ou accident', desc: 'Intervention sécurisée sans équipement dangereux' },
                  { title: 'Pas d\'installation d\'équipement lourd', desc: 'Pas d\'échelle, échafaudage, nacelle coûteux' },
                  { title: 'Nettoyage homogène sans surcharges', desc: 'Pression régulée adaptée à chaque surface' },
                  { title: 'Protection des matériaux fragiles', desc: 'Techniques spécialisées pour monuments historiques' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
                    <div className="w-5 h-5 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications légales</h3>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 border border-sky-200 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Certification DGAC',
                    'Pilotes certifiés professionnels',
                    'Assurance RC Pro complète',
                    'Conformité législation 2026',
                    'Produits certifiés AB écologiques',
                    'Garantie decennale'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-sky-100">
                      <Award className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Techniques et équipements spécialisés</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre approche combine technologie de pointe et expertise professionnelle pour garantir des résultats exceptionnels.
              </p>
              <div className="space-y-3">
                {[
                  'Hydrojet haute pression : nettoyage profond sans endommager les matériaux',
                  'Traitement biocide préventif : protection durable contre la réapparition des mousses',
                  'Application hydrofuge : protection longue durée contre infiltrations d\'eau',
                  'Inspection thermique : diagnostic des défauts non visibles'
                ].map((technique, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{technique}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications et garanties</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ellipsys Solutions détient l'ensemble des certifications requises pour exercer cette activité en toute sécurité.
              </p>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 border border-sky-200">
                <ul className="space-y-3">
                  {[
                    'Certification DGAC - Autorisation d\'exploitation de drones professionnels',
                    'Pilotes certifiés avec formation validée',
                    'Assurance RC Pro complète',
                    'Conformité RGPD',
                    'Certifications ISO 9001 et ISO 14001',
                    'Produits éco-responsable'
                  ].map((cert, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-sky-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Demandez votre devis</h3>
                <p className="mb-6 text-sky-100">Réponse sous 24h par nos experts</p>
                <Link
                  to="/#contact"
                  className="block w-full bg-white text-sky-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
                >
                  Obtenir un devis
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Avantages clés</h4>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: 'Sécurité maximale', desc: 'Zéro risque pour les opérateurs' },
                    { icon: Clock, title: 'Rapidité', desc: 'Intervention rapide' },
                    { icon: Droplets, title: 'Écologique', desc: 'Produits biodégradables' },
                    { icon: Award, title: 'Certifié', desc: 'Pilotes certifiés DGAC' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-800">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Autres services</h4>
                <div className="space-y-2">
                  <Link to="/prestations/demoussage" className="block text-sky-600 hover:text-sky-700 font-medium">
                    → Démoussage de toiture
                  </Link>
                  <Link to="/prestations/elimination-frelons" className="block text-sky-600 hover:text-sky-700 font-medium">
                    → Élimination de frelons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
