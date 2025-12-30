import { useEffect } from 'react';
import { ChevronRight, Shield, Clock, Droplets, CheckCircle, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Demoussage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-96 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden pt-20">
        <img
          src="/Demoussage drone 1.jpg"
          alt="Démoussage de toiture par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Démoussage de toiture par drone</h1>
            <p className="text-xl md:text-2xl text-green-100">Les drones au service de l'humain</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-sky-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Démoussage de toiture</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Démoussage de Toiture par Drone : Sécurité, Efficacité et Respect des Matériaux</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ellipsys modernise l’entretien de toiture grâce au démoussage par drone, une solution innovante conçue pour les professionnels, collectivités et grands comptes. Cette méthode aérienne supprime les risques liés aux interventions humaines, tout en assurant un traitement précis et non invasif de la couverture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
               Nos drones certifiés DGAC interviennent rapidement sur tous types de toitures : tuiles, ardoises, zinc, bac acier, toitures végétalisées, etc. La pulvérisation ciblée élimine efficacement mousses, lichens, algues et champignons, responsables de la dégradation des toitures.
              </p>
            </section>
            <section className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Pourquoi le démoussage est essentiel
              </h3>
              <ul className="space-y-3">
                {[
                  'Les mousses retiennent l\'humidité et accélèrent la dégradation des tuiles',
                  'Risque d\'infiltrations d\'eau dans la charpente et les combles',
                  'Perte d\'étanchéité progressive de la toiture',
                  'Diminution de la durée de vie de votre couverture de 30 à 50%',
                  'Risque de glissades dangereuses sur toiture humide',
                  'Perte de valeur immobilière due à l\'aspect négligé'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white font-bold text-xs">!</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Notre méthode en 4 étapes</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Inspection complète',
                    description: 'Diagnostic complet de l\'état de votre toiture par inspection drone HD'
                  },
                  {
                    title: 'Démoussage haute pression',
                    description: 'Élimination complète des mousses, lichens et algues'
                  },
                  {
                    title: 'Traitement biocide',
                    description: 'Application de produits anti-mousse biodégradables certifiés'
                  },
                  {
                    title: 'Hydrofugation protectrice',
                    description: 'Protection hydrofuge longue durée (10 ans) incluse'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tous types de toitures</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Tuiles terre cuite',
                  'Ardoises naturelles',
                  'Tuiles béton',
                  'Zinc et métalliques',
                  'Bac acier',
                  'Toitures végétalisées',
                  'Toits plats',
                  'Toitures industrielles',
                  'Monuments historiques'
                ].map((type, idx) => (
                  <div key={idx} className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Équipements utilisés</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Drone haute performance', desc: 'Stabilité optimale par tous les temps' },
                  { title: 'Systèmes hydrojet haute pression', desc: 'Nettoyage puissant sans endommager tuiles' },
                  { title: 'Produits biocides biodégradables', desc: 'Traitement anti-mousse écologique certifié AB' },
                  { title: 'Traitement hydrofuge professionnel', desc: 'Protection longue durée 10 ans incluse' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
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
                  { title: 'Zéro déplacement sur la toiture', desc: 'Aucun risque de casse tuiles ou infiltration' },
                  { title: 'Nettoyage sans surcharge structurelle', desc: 'Pas de pression mécanique excessive' },
                  { title: 'Traitement ciblé sans débris', desc: 'Débris aspirés directement, pas d\'pollution sols' },
                  { title: 'Protection longue durée (10 ans)', desc: 'Hydrofugation performante incluse' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
                    <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Certification DGAC',
                    'Pilotes certifiés professionnels',
                    'Assurance RC Pro complète',
                    'Normes NF EN 13414',
                    'Produits certifiés AB',
                    'Conformité législation 2026'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-green-100">
                      <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Techniques professionnelles</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre approche professionnelle garantit un résultat optimal tout en préservant votre toiture.
              </p>
              <div className="space-y-2">
                {[
                  'Nettoyage haute pression adapté à chaque type de couverture',
                  'Application biocide préventive contre la réapparition des mousses',
                  'Hydrofugation complète pour protection longue durée',
                  'Inspection thermique pour détection d\'anomalies cachées'
                ].map((technique, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{technique}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications et garanties</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ellipsys détient toutes les certifications pour intervenir en toute sécurité sur votre toiture.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <ul className="space-y-3">
                  {[
                    'Certification DGAC - Exploitation de drones professionnels',
                    'Pilotes certifiés avec formation validée',
                    'Assurance RC Pro complète',
                    'Conformité RGPD',
                    'Certifications ISO 9001 et ISO 14001',
                    'Produits biodégradables certifiés'
                  ].map((cert, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
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
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Demandez votre devis</h3>
                <p className="mb-6 text-green-100">Réponse sous 24h par nos experts</p>
                <Link
                  to="/#contact"
                  className="block w-full bg-white text-green-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Obtenir un devis
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Avantages clés</h4>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: 'Sécurité maximale', desc: 'Aucun déplacement sur toiture' },
                    { icon: Clock, title: 'Rapidité', desc: 'Intervention en 2-3 jours' },
                    { icon: Droplets, title: 'Protection', desc: 'Hydrofugation 10 ans incluse' },
                    { icon: CheckCircle, title: 'Certifié', desc: 'Pilotes certifiés DGAC' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-800">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Fréquence recommandée</h4>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <div className="font-semibold text-gray-800">Toiture classique</div>
                    <div className="text-sm">Tous les 3-5 ans</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Zone humide</div>
                    <div className="text-sm">Tous les 2-3 ans</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Autres services</h4>
                <div className="space-y-2">
                  <Link to="/prestations/nettoyage-facade" className="block text-sky-600 hover:text-sky-700 font-medium">
                    → Nettoyage de façade
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
