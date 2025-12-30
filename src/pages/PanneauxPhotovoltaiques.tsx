import { useEffect } from 'react';
import { ChevronRight, Shield, TrendingUp, Zap, CheckCircle, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function PanneauxPhotovoltaiques() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-96 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden pt-20">
        <img
          src="/rony.jpg"
          alt="Nettoyage de panneaux photovoltaïques par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nettoyage de panneaux photovoltaïques</h1>
            <p className="text-xl md:text-2xl text-amber-100">Les drones au service de l'humain</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-amber-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/prestations" className="hover:text-amber-600">Prestations</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Nettoyage de panneaux photovoltaïques</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nettoyage de Panneaux Solaires</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Des <strong>panneaux photovoltaïques</strong> encrassés peuvent perdre <strong>jusqu'à 30 % de leur production énergétique</strong>. Poussières, pollens, fientes d'oiseaux et pollution s'accumulent, réduisant votre performance jour après jour — et impactant directement votre rentabilité énergétique.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
              Grâce à notre solution de <strong>nettoyage par drone professionnel</strong>, vous <strong>optimisez votre production solaire</strong> en <strong>toute sécurité, sans contact, sans rayures</strong>, et <strong>sans immobiliser votre site</strong>. Une intervention <strong>2 fois par an</strong> suffit pour maintenir un <strong>rendement optimal</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre technologie est conçue pour les <strong>sites industriels, toitures d'entreprises, hangars agricoles ou installations solaires étendues</strong>. Chaque intervention inclut un <strong>rapport avant/après</strong> avec mesures de performance, preuve chiffrée à l'appui de votre <strong>retour sur investissement (ROI)</strong>.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Équipements utilisés</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Drone agronomique certifié', desc: 'Technologie spécialisée pour zones étendues' },
                  { title: 'Systèmes basse pression doux', desc: 'Protection maximale de vos panneaux' },
                  { title: 'Eau déminéralisée osmosée', desc: 'Zéro résidus, zéro traces après nettoyage' },
                  { title: 'Inspection HD et caméras thermiques', desc: 'Détection des défauts et dysfonctionnements' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Avantages vs. méthodes traditionnelles</h3>
              <div className="space-y-3">
                {[
                  { title: 'Nettoyage sans contact direct', desc: 'Aucun risque d\'rayures ou endommagement des panneaux' },
                  { title: 'Zéro risque électrocution', desc: 'Intervention complètement sécurisée sans contact électrique' },
                  { title: 'Intervention ultra-rapide (2-3h)', desc: 'Grande surface nettoyée en quelques heures seulement' },
                  { title: 'Production énergétique optimisée', desc: 'Récupération jusqu\'à 30% de rendement perdu' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
                    <div className="w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
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
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Certification DGAC',
                    'Formation photovoltaïque spécialisée',
                    'Assurance RC Pro électricité',
                    'Garantie decennale',
                    'Protocoles sécurité haute tension',
                    'Conformité législation 2026'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-amber-100">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Bénéfices clients</h3>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100">
                <ul className="space-y-3">
                  {[
                    'Récupérez jusqu\'à 30% de production d\'énergie perdue',
                    'Nettoyage sans contact direct : aucun risque de rayures ou dommages',
                    'Intervention 5x plus rapide que le nettoyage manuel',
                    'Produits spécialisés photovoltaïques certifiés et non abrasifs',
                    'Planning d\'entretien bi-annuel avec rappel automatique',
                    'Rapport de performance énergétique avant/après intervention',
                    'Allongement de la durée de vie des panneaux'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Devis gratuit</h3>
                <p className="mb-6 text-amber-100">Découvrez combien vous pourriez récupérer en rendement énergétique</p>
                <Link
                  to="/devis"
                  className="block w-full bg-white text-amber-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  Demander un devis
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Points clés</h4>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: 'Rendement +30%', desc: 'Production énergétique maximisée' },
                    { icon: Shield, title: 'Sans contact', desc: 'Zéro risque endommagement' },
                    { icon: Leaf, title: 'Écologique', desc: 'Eau déminéralisée uniquement' },
                    { icon: CheckCircle, title: 'Rapide', desc: '2-3h pour grande surface' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-800">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Autres prestations</h4>
                <div className="space-y-2">
                  <Link to="/prestations/nettoyage-facade" className="block text-amber-600 hover:text-amber-700 font-medium">
                    → Nettoyage de façade
                  </Link>
                  <Link to="/prestations/demoussage" className="block text-amber-600 hover:text-amber-700 font-medium">
                    → Démoussage de toiture
                  </Link>
                  <Link to="/prestations/elimination-frelons" className="block text-amber-600 hover:text-amber-700 font-medium">
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
