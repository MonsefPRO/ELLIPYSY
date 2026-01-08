import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, Headphones, Home, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState } from 'react';
import Header from '../components/Header';

export default function Devis() {
  const [honeypot, setHoneypot] = useState('');

  const form = useSecureForm({
    initialValues: {
      name: '',
      companyType: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      buildingType: '',
      service: '',
      surface: '',
      timeline: '',
      message: '',
      rgpd: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      const validationErrors = validateDevisForm({
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        postalCode: values.postalCode,
        buildingType: values.buildingType,
        service: values.service,
        message: values.message,
        rgpd: values.rgpd === 'true'
      }); 

      validationErrors.forEach(err => {
        errors[err.field] = err.message;
      });

      return errors;
    },
    onSubmit: async (data) => {
      if (honeypot) {
        throw new Error('Spam détecté');
      }

      console.log('Formulaire soumis avec succès:', data);
      alert('Votre demande de devis a été envoyée avec succès ! Nous vous recontacterons sous 24h.');

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  });

  const { fields, isSubmitting, submitError, submitSuccess } = form;
  const handleChange = (name: string, value: string) => {
    form.handleChange({ target: { name, value } } as any);
  };
  const handleBlur = (name: string) => form.handleBlur(name);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return form.handleSubmit()(e);
  };

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

        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-full text-sm font-semibold mb-4">
            Réponse sous 24h
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6">
            Demande de devis gratuit
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtenez une estimation personnalisée pour votre projet de nettoyage par drone
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8">
            <div className="lg:sticky lg:top-8 space-y-6 self-start">

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Comment ça marche ?</h2>
              <p className="text-sky-100 text-sm">
                Un processus simple en 4 étapes
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1">Remplissez le formulaire</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Décrivez votre projet en quelques minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1">Analyse de votre demande</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Notre équipe étudie votre projet sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1">Devis personnalisé</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Vous recevez une proposition détaillée
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800 mb-1">Planification</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Nous organisons l'intervention selon vos disponibilités
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Ce qui est inclus</h2>
              <div className="space-y-2">
                {[
                  'Analyse détaillée de votre projet',
                  'Surface à traiter et accessibilité',
                  'Type de traitement recommandé',
                  'Produits utilisés (biodégradables)',
                  'Durée estimée de l\'intervention',
                  'Nombre de passages nécessaires',
                  'Planning d\'intervention proposé',
                  'Garantie et suivi post-intervention',
                  'Assurance RC Pro',
                  'Photos avant/après (optionnel)'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Informations utiles</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-100">
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 text-sky-600 mr-2" />
                  <h3 className="text-base font-bold text-gray-800">Délais</h3>
                </div>
                <ul className="space-y-1 text-gray-600 text-xs">
                  <li>• Réponse : sous 24h</li>
                  <li>• Devis : 2-3 jours ouvrés</li>
                  <li>• Intervention : selon planning</li>
                  <li>• Urgence : nous consulter</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-100">
                <div className="flex items-center mb-2">
                  <FileText className="w-6 h-6 text-sky-600 mr-2" />
                  <h3 className="text-base font-bold text-gray-800">Documents</h3>
                </div>
                <ul className="space-y-1 text-gray-600 text-xs">
                  <li>• Devis détaillé gratuit</li>
                  <li>• Attestation d'assurance</li>
                  <li>• Plan de prévention</li>
                  <li>• Certificats produits</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-100">
                <div className="flex items-center mb-2">
                  <Headphones className="w-6 h-6 text-sky-600 mr-2" />
                  <h3 className="text-base font-bold text-gray-800">Accompagnement</h3>
                </div>
                <ul className="space-y-1 text-gray-600 text-xs">
                  <li>• Conseils personnalisés</li>
                  <li>• Suivi de projet dédié</li>
                  <li>• Support technique</li>
                  <li>• Après-vente réactif</li>
                </ul>
              </div>
            </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white to-sky-50/30 rounded-3xl p-8 sm:p-12 border-2 border-sky-100" style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.15), 8px 12px 20px -8px rgba(0, 0, 0, 0.12)'
              }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Formulaire de demande de devis</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {submitError && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{submitError}</p>
                </div>
              )}

              {submitSuccess && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-700">Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 24h.</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Nom / Entreprise *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={fields.name?.value || ''}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                      fields.name?.error && fields.name?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                    }`}
                    placeholder="Votre nom ou raison sociale"
                  />
                  {fields.name?.error && fields.name?.touched && (
                    <p className="mt-1 text-sm text-red-600">{fields.name.error}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="companyType" className="block text-sm font-semibold text-gray-800 mb-2">
                    Type de client
                  </label>
                  <select
                    id="companyType"
                    name="companyType"
                    value={fields.companyType?.value || ''}
                    onChange={(e) => handleChange('companyType', e.target.value)}
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="particulier">Particulier</option>
                    <option value="entreprise">Entreprise</option>
                    <option value="copropriete">Copropriété / Syndic</option>
                    <option value="collectivite">Collectivité territoriale</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={fields.email?.value || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                      fields.email?.error && fields.email?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {fields.email?.error && fields.email?.touched && (
                    <p className="mt-1 text-sm text-red-600">{fields.email.error}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={fields.phone?.value || ''}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                      fields.phone?.error && fields.phone?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                    }`}
                    placeholder="06 XX XX XX XX"
                  />
                  {fields.phone?.error && fields.phone?.touched && (
                    <p className="mt-1 text-sm text-red-600">{fields.phone.error}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-800 mb-2">
                    Adresse du projet *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={fields.address?.value || ''}
                    onChange={(e) => handleChange('address', e.target.value)}
                    onBlur={() => handleBlur('address')}
                    className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                      fields.address?.error && fields.address?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                    }`}
                    placeholder="Adresse complète"
                  />
                  {fields.address?.error && fields.address?.touched && (
                    <p className="mt-1 text-sm text-red-600">{fields.address.error}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-800 mb-2">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={fields.postalCode?.value || ''}
                    onChange={(e) => handleChange('postalCode', e.target.value)}
                    onBlur={() => handleBlur('postalCode')}
                    className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                      fields.postalCode?.error && fields.postalCode?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                    }`}
                    placeholder="75001"
                  />
                  {fields.postalCode?.error && fields.postalCode?.touched && (
                    <p className="mt-1 text-sm text-red-600">{fields.postalCode.error}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="buildingType" className="block text-sm font-semibold text-gray-800 mb-2">
                  Type de bâtiment *
                </label>
                <select
                  id="buildingType"
                  name="buildingType"
                  value={fields.buildingType?.value || ''}
                  onChange={(e) => handleChange('buildingType', e.target.value)}
                  onBlur={() => handleBlur('buildingType')}
                  className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                    fields.buildingType?.error && fields.buildingType?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                  }`}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="industrial">Bâtiment industriel</option>
                  <option value="commercial">Immeuble commercial</option>
                  <option value="residential">Copropriété / Résidentiel</option>
                  <option value="heritage">Monument / Patrimoine</option>
                  <option value="other">Autre</option>
                </select>
                {fields.buildingType?.error && fields.buildingType?.touched && (
                  <p className="mt-1 text-sm text-red-600">{fields.buildingType.error}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                  Prestation souhaitée *
                </label>
                <select
                  id="service"
                  name="service"
                  value={fields.service?.value || ''}
                  onChange={(e) => handleChange('service', e.target.value)}
                  onBlur={() => handleBlur('service')}
                  className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 ${
                    fields.service?.error && fields.service?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                  }`}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="facade">Nettoyage de façade</option>
                  <option value="toiture">Démoussage de toiture</option>
                  <option value="elimination-frelons">Élimination de nids de frelons</option>
                  <option value="maintenance">Contrat de maintenance</option>
                  <option value="other">Autre / Je ne sais pas</option>
                </select>
                {fields.service?.error && fields.service?.touched && (
                  <p className="mt-1 text-sm text-red-600">{fields.service.error}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="surface" className="block text-sm font-semibold text-gray-800 mb-2">
                    Surface approximative (m²)
                  </label>
                  <input
                    type="text"
                    id="surface"
                    name="surface"
                    value={fields.surface?.value || ''}
                    onChange={(e) => handleChange('surface', e.target.value)}
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                    placeholder="Ex: 500 m²"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-800 mb-2">
                    Délai souhaité
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={fields.timeline?.value || ''}
                    onChange={(e) => handleChange('timeline', e.target.value)}
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all hover:border-gray-300"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="urgent">Urgent (sous 1 semaine)</option>
                    <option value="court">Court terme (2-4 semaines)</option>
                    <option value="moyen">Moyen terme (1-3 mois)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Description détaillée de votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={fields.message?.value || ''}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all hover:border-gray-300 resize-none ${
                    fields.message?.error && fields.message?.touched ? 'border-red-500' : 'border-gray-200 focus:border-sky-500'
                  }`}
                  placeholder="Décrivez-nous votre projet en détail : état actuel, problèmes rencontrés, résultats attendus, contraintes particulières..."
                ></textarea>
                {fields.message?.error && fields.message?.touched && (
                  <p className="mt-1 text-sm text-red-600">{fields.message.error}</p>
                )}
              </div>

              <div className="bg-sky-50 border-2 border-sky-200 rounded-xl p-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="rgpd"
                    checked={fields.rgpd?.value === 'true'}
                    onChange={(e) => handleChange('rgpd', e.target.checked ? 'true' : '')}
                    className="mt-1 mr-3 w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                  />
                  <span className="text-sm text-gray-700">
                    J'accepte que mes données soient utilisées pour traiter ma demande de devis. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en nous contactant. *
                  </span>
                </label>
                {fields.rgpd?.error && fields.rgpd?.touched && (
                  <p className="mt-2 text-sm text-red-600">{fields.rgpd.error}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:from-brand-orange-600 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] transform flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}</span>
                {!isSubmitting && <ChevronRight className="w-6 h-6" />}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires. Réponse garantie sous 24h • Devis gratuit et sans engagement
              </p>
            </form>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Besoin d'aide pour remplir ce formulaire ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est disponible pour vous accompagner dans votre demande
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33XXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-all"
                >
                  📞 Appelez-nous
                </a>
                <a
                  href="mailto:contact@ellipsys-group.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all"
                >
                  ✉️ Envoyez-nous un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
