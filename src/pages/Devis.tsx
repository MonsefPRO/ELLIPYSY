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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 pt-24 md:pt-32">
        {/* BOUTON RETOUR RESPONSIVE */}
        <Link
          to="/"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 font-bold mb-6 transition-all active:scale-95"
        >
          <Home className="w-5 h-5 mr-2" />
          Retour
        </Link>

        {/* TITRE ADAPTÉ MOBILE */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-full text-xs md:text-sm font-bold mb-4 shadow-lg animate-bounce">
            Réponse sous 24h
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#233B72] mb-4 leading-tight">
            Devis Gratuit
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Estimation personnalisée pour votre projet drone
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* GRILLE : Une colonne sur mobile, deux sur PC */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 md:gap-12">
            
            {/* SIDEBAR (Passera en dessous sur mobile pour laisser le formulaire prioritaire, ou au dessus selon ton choix) */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-28 space-y-6 self-start">
              
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-[#233B72] text-white p-6">
                  <h2 className="text-xl font-bold mb-1">Comment ça marche ?</h2>
                  <p className="text-sky-200 text-xs">Un processus simple et rapide</p>
                </div>

                <div className="p-6 space-y-6">
                  {[
                    { step: 1, title: 'Formulaire', desc: 'Décrivez votre projet' },
                    { step: 2, title: 'Analyse', desc: 'Étude technique sous 24h' },
                    { step: 3, title: 'Devis', desc: 'Proposition détaillée' },
                    { step: 4, title: 'Action', desc: 'Intervention planifiée' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 text-sky-600 font-bold">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-800">{s.title}</h3>
                        <p className="text-xs text-gray-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOC INFO MOBILE-FRIENDLY */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hidden md:block">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Garanties Ellipsys</h2>
                <div className="space-y-3">
                  {['Analyse détaillée', 'Produits biodégradables', 'Assurance RC Pro'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FORMULAIRE PRINCIPAL */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl border-2 border-white relative">
                
                <h2 className="text-xl md:text-3xl font-bold text-[#233B72] mb-8 text-center md:text-left">
                  Votre Projet
                </h2>

                <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="absolute opacity-0 pointer-events-none"
                    tabIndex={-1}
                  />

                  {/* ERREURS & SUCCÈS */}
                  {submitError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl flex gap-3 animate-shake">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-xs md:text-sm text-red-700 font-medium">{submitError}</p>
                    </div>
                  )}

                  {submitSuccess && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl flex gap-3 animate-bounce">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-xs md:text-sm text-green-700 font-medium font-bold">Message envoyé avec succès !</p>
                    </div>
                  )}

                  {/* CHAMPS : 1 col sur mobile, 2 col sur tablette/PC */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-700 ml-1">Nom / Entreprise *</label>
                      <input
                        type="text"
                        name="name"
                        value={fields.name?.value || ''}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:bg-white transition-all outline-none ${
                          fields.name?.error && fields.name?.touched ? 'border-red-300' : 'border-gray-100 focus:border-sky-500'
                        }`}
                        placeholder="Ex: Jean Dupont"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-700 ml-1">Type de client</label>
                      <select
                        name="companyType"
                        value={fields.companyType?.value || ''}
                        onChange={(e) => handleChange('companyType', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:bg-white transition-all outline-none focus:border-sky-500 appearance-none"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="particulier">Particulier</option>
                        <option value="entreprise">Entreprise</option>
                        <option value="copropriete">Copropriété</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-700 ml-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={fields.email?.value || ''}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl transition-all outline-none ${
                          fields.email?.error && fields.email?.touched ? 'border-red-300' : 'border-gray-100 focus:border-sky-500'
                        }`}
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-700 ml-1">Téléphone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={fields.phone?.value || ''}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl transition-all outline-none ${
                          fields.phone?.error && fields.phone?.touched ? 'border-red-300' : 'border-gray-100 focus:border-sky-500'
                        }`}
                        placeholder="06 -- -- -- --"
                      />
                    </div>
                  </div>

                  {/* TECHNIQUE : Building & Service */}
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-gray-700 ml-1">Prestation *</label>
                    <select
                      name="service"
                      value={fields.service?.value || ''}
                      onChange={(e) => handleChange('service', e.target.value)}
                      onBlur={() => handleBlur('service')}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none transition-all ${
                        fields.service?.error && fields.service?.touched ? 'border-red-300' : 'border-gray-100 focus:border-sky-500'
                      }`}
                    >
                      <option value="">Quelle intervention ?</option>
                      <option value="facade">Nettoyage de façade</option>
                      <option value="toiture">Démoussage de toiture</option>
                      <option value="frelons">Nids de frelons</option>
                    </select>
                  </div>

                  {/* MESSAGE : On réduit un peu la hauteur sur mobile */}
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-gray-700 ml-1">Votre projet en détails *</label>
                    <textarea
                      name="message"
                      rows={window.innerWidth < 768 ? 4 : 6}
                      value={fields.message?.value || ''}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl transition-all outline-none resize-none ${
                        fields.message?.error && fields.message?.touched ? 'border-red-300' : 'border-gray-100 focus:border-sky-500'
                      }`}
                      placeholder="Décrivez votre besoin..."
                    ></textarea>
                  </div>

                  {/* RGPD : Bien espacé pour le clic au pouce */}
                  <div className="bg-sky-50/50 border-2 border-sky-100 rounded-2xl p-4">
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={fields.rgpd?.value === 'true'}
                        onChange={(e) => handleChange('rgpd', e.target.checked ? 'true' : '')}
                        className="mt-1 mr-3 w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500 transition-all group-hover:scale-110"
                      />
                      <span className="text-[10px] md:text-xs text-gray-600 leading-tight">
                        J'accepte que mes données soient utilisées pour traiter ma demande. *
                      </span>
                    </label>
                  </div>

                  {/* BOUTON SOUMISSION MASSIVE */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-4 md:py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    <span>{isSubmitting ? 'Envoi...' : 'Demander mon devis'}</span>
                    {!isSubmitting && <ChevronRight className="w-6 h-6" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
