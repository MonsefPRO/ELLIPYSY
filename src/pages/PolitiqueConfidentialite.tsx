import { Link } from 'react-router-dom';
import { Home, Shield, Lock, Eye, Cookie, FileText } from 'lucide-react';
import Header from '../components/Header';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20">
        <Link
          to="/"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium mb-8 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mb-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-gray-600">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-8">
            <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed">
                Chez <strong>Ellipsys</strong>, nous nous engageons à protéger votre vie privée et vos données personnelles.
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations conformément au RGPD.
              </p>
            </div>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">1. Responsable du traitement</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p><strong>Raison sociale :</strong> Ellipsys</p>
                <p><strong>Site web :</strong> ellipsys-solution.com</p>
                <p><strong>Email :</strong> contact@ellipsys-group.com</p>
                <p><strong>Téléphone :</strong> 04 67 20 97 09 </p>
                <p className="text-sm italic">
                  Le responsable du traitement est la personne qui détermine les finalités et les moyens du traitement des données personnelles.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">2. Données collectées</h2>
              </div>
              <div className="pl-13 space-y-4">
                <p className="text-gray-600">
                  Nous collectons uniquement les données nécessaires à la gestion de nos services :
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Données d'identification</h3>
                    <p className="text-sm text-gray-600">
                      Nom, prénom, raison sociale, email, numéro de téléphone, adresse postale
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Données de projet</h3>
                    <p className="text-sm text-gray-600">
                      Type de bâtiment, surface, localisation, description du projet, délai souhaité
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Données de connexion</h3>
                    <p className="text-sm text-gray-600">
                      Adresse IP, type de navigateur, pages visitées, durée de visite
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">3. Finalités du traitement</h2>
              </div>
              <div className="pl-13 space-y-3">
                <p className="text-gray-600">Vos données sont utilisées pour :</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Répondre à vos demandes de devis et de contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Gérer notre relation commerciale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Améliorer notre site web et nos services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Vous envoyer des informations sur nos services (avec votre consentement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Respecter nos obligations légales et réglementaires</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">4. Base légale</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p>Le traitement de vos données repose sur :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span><strong>Votre consentement :</strong> pour l'envoi de communications marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span><strong>L'exécution d'un contrat :</strong> pour traiter vos demandes de devis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span><strong>Notre intérêt légitime :</strong> pour améliorer nos services</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">5. Durée de conservation</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p>Nous conservons vos données :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span><strong>Données de contact :</strong> 3 ans après le dernier contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span><strong>Données contractuelles :</strong> 10 ans (obligations comptables)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span><strong>Données de navigation :</strong> 13 mois maximum</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">6. Destinataires des données</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p>Vos données peuvent être partagées avec :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Notre équipe interne pour le traitement de vos demandes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Nos prestataires techniques (hébergement, CRM) sous contrat de confidentialité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Les autorités compétentes en cas d'obligation légale</span>
                  </li>
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-green-800 font-medium">
                    ✓ Nous ne vendons jamais vos données à des tiers
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">7. Vos droits RGPD</h2>
              </div>
              <div className="pl-13 space-y-4">
                <p className="text-gray-600">Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Droit d'accès</h3>
                    <p className="text-sm text-gray-600">
                      Obtenir une copie de vos données personnelles
                    </p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Droit de rectification</h3>
                    <p className="text-sm text-gray-600">
                      Corriger vos données inexactes ou incomplètes
                    </p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Droit à l'effacement</h3>
                    <p className="text-sm text-gray-600">
                      Supprimer vos données sous certaines conditions
                    </p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Droit d'opposition</h3>
                    <p className="text-sm text-gray-600">
                      Vous opposer au traitement de vos données
                    </p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Droit à la limitation</h3>
                    <p className="text-sm text-gray-600">
                      Limiter le traitement de vos données
                    </p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Droit à la portabilité</h3>
                    <p className="text-sm text-gray-600">
                      Récupérer vos données dans un format structuré
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl p-6 mt-6">
                  <h3 className="font-bold text-lg mb-3">Comment exercer vos droits ?</h3>
                  <p className="mb-4">
                    Pour toute demande concernant vos données personnelles, contactez-nous :
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>📧 <strong>Email :</strong> contact@ellipsys-group.comcontact@ellipsys-group.com</p>
                    <p>📞 <strong>Téléphone :</strong> 04 67 20 97 09</p>
                  </div>
                  <p className="text-sm mt-4 opacity-90">
                    Nous vous répondrons dans un délai d'un mois maximum.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">8. Cookies</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-600">
                <p>Notre site utilise des cookies pour améliorer votre expérience :</p>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Cookies nécessaires</h3>
                    <p className="text-sm">
                      Indispensables au fonctionnement du site (navigation, préférences). Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Cookies analytiques</h3>
                    <p className="text-sm">
                      Nous aident à comprendre comment vous utilisez notre site (pages visitées, temps passé). Données anonymisées.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Cookies marketing</h3>
                    <p className="text-sm">
                      Permettent de personnaliser le contenu et les publicités en fonction de vos intérêts.
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau qui apparaît lors de votre première visite.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">9. Sécurité</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p>Nous mettons en œuvre des mesures de sécurité adaptées :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Chiffrement des données sensibles (SSL/TLS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Accès restreint aux données personnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Sauvegardes régulières et sécurisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Serveurs hébergés en France (OVH/Supabase)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-600 mt-1">•</span>
                    <span>Audits de sécurité réguliers</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">10. Modifications</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p>
                  Cette politique peut être modifiée pour refléter les changements dans nos pratiques ou la législation.
                  Nous vous informerons de toute modification importante par email ou via un bandeau sur notre site.
                </p>
                <p className="text-sm font-medium">
                  Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">11. Autorité de contrôle</h2>
              </div>
              <div className="pl-13 space-y-3 text-gray-600">
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="font-medium text-gray-800">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                  <p className="text-sm">3 Place de Fontenoy - TSA 80715</p>
                  <p className="text-sm">75334 PARIS CEDEX 07</p>
                  <p className="text-sm">Téléphone : 01 53 73 22 22</p>
                  <p className="text-sm">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 underline">www.cnil.fr</a></p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Des questions sur vos données ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la protection de vos données
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@ellipsys.fr"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-800 transition-all"
                >
                  ✉️ Nous contacter
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all"
                >
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
