import { useEffect } from 'react';
import { ChevronRight, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FloatingDrone } from '../components/FloatingDrone';

export default function EliminationFrelons() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-96 bg-gradient-to-br from-red-600 to-rose-700 relative overflow-hidden pt-20">
        <FloatingDrone
          src="/abateur_de_frelons.png"
          alt="Élimination de nids de frelons par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Élimination de nids de frelons par drone</h1>
            <p className="text-xl md:text-2xl text-red-100">Les drones au service de l'humain</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/prestations" className="hover:text-red-600">Prestations</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Élimination de Nids de Frelons par Drone</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Élimination de Nids de Frelons</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L'<strong>élimination des nids de frelons</strong>, notamment de <strong>frelons asiatiques</strong>, représente un <strong>risque majeur</strong> lorsqu'elle est réalisée sans équipement adapté. Avec notre <strong>solution aérienne par drone</strong>, nous intervenons <strong>sans exposition humaine</strong>, même dans les zones les plus complexes d'accès.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
               Notre technologie permet une <strong>neutralisation rapide et précise</strong> des nids, en hauteur ou sur des structures inaccessibles : toitures, arbres, pylônes, façades, hangars... Chaque intervention est menée par des <strong>pilotes certifiés DGAC</strong>, selon des protocoles stricts de sécurité. Que vous soyez une <strong>collectivité, une entreprise industrielle, ou un gestionnaire de site</strong>, notre méthode garantit un <strong>traitement efficace, durable et conforme</strong> à la réglementation en vigueur.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2 text-lg">⚠️ Avertissement important</h3>
                    <p className="text-red-800 leading-relaxed">
                      <strong>Ne tentez jamais de détruire un nid de frelons vous-même.</strong> Une intervention non professionnelle
                      peut entraîner de graves accidents. Les frelons asiatiques sont particulièrement agressifs lorsque leur nid est
                      menacé et peuvent attaquer en groupe. Faites toujours appel à des professionnels certifiés.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Équipements utilisés</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Drone haute altitude 50+ m', desc: 'Accès à tous les types de nids en hauteur' },
                  { title: 'Systèmes injection précision', desc: 'Diffusion ciblée sans dispersion' },
                  { title: 'Biocides certifiés écologiques', desc: 'Produits approuvés biodégradables' },
                  { title: 'Caméras thermiques HD', desc: 'Localisation précise nids avant intervention' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
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
                  { title: 'Zéro exposition intervenant', desc: 'Aucun contact humain avec essaim agressif' },
                  { title: 'Accès zones inaccessibles', desc: 'Hauteurs extrêmes, zones dangereuses' },
                  { title: 'Destruction complète garantie', desc: 'Injection précise complète du nid' },
                  { title: 'Prévention réinfestation', desc: 'Traitement curatif et préventif combiné' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border border-red-100">
                    <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
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
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-8 border border-red-200 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Certification DGAC',
                    'Agrément biocides DGAC',
                    'Assurance RC Pro spécifique',
                    'Désinsectisation professionnelle',
                    'Directive biocides 2009/128/CE',
                    'Conformité législation 2026'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-red-100">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl p-8 text-white shadow-xl">
                <AlertTriangle className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Intervention urgente ?</h3>
                <p className="mb-6 text-red-100">
                  Contactez-nous rapidement pour une élimination sécurisée de votre nid de frelons
                </p>
                <Link
                  to="/devis"
                  className="block w-full bg-white text-red-600 text-center px-6 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors mb-3"
                  aria-label="Demander un devis pour l'élimination d'un nid de frelons"
                >
                  👉 Demander un devis gratuit
                </Link>
                <a
                  href="/#contact"
                  className="block w-full bg-red-700 text-white text-center px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-colors"
                >
                  Nous contacter
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Nos garanties
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Intervention sécurisée certifiée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Pilotes certifiés DGAC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Assurance RC professionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Rapport d'intervention détaillé</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Autres prestations</h4>
                <div className="space-y-2">
                  <Link to="/prestations/nettoyage-facade" className="block text-red-600 hover:text-red-700 font-medium">
                    → Nettoyage de façade
                  </Link>
                  <Link to="/prestations/demoussage" className="block text-red-600 hover:text-red-700 font-medium">
                    → Démoussage de toiture
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 md:p-12 text-center border border-red-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Un nid de frelons à éliminer ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ne prenez aucun risque. Contactez nos experts pour une intervention rapide, sécurisée et professionnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              aria-label="Demander un devis pour l'élimination d'un nid de frelons"
            >
              <span>👉 Demander un devis gratuit</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="/#contact"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all inline-flex items-center justify-center"
            >
              Nous contacter rapidement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
