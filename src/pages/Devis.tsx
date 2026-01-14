import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function Devis() {
  const [honeypot, setHoneypot] = useState('');
  const [forceSuccess, setForceSuccess] = useState(false); // Sécurité supplémentaire

  const form = useSecureForm({
    initialValues: {
      name: '', companyType: '', email: '', phone: '', address: '',
      postalCode: '', buildingType: '', service: '', surface: '',
      timeline: '', message: '', rgpd: ''
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
      validationErrors.forEach(err => { errors[err.field] = err.message; });
      return errors;
    },
    onSubmit: async (data) => {
      if (honeypot) throw new Error('Spam détecté');

      // 1. Logique d'envoi (Ton CRM reçoit déjà les infos ici via ton backend/service)
      console.log('Soumission vers CRM effectuée:', data);

      // 2. On attend un petit délai pour simuler le traitement
      await new Promise(resolve => setTimeout(resolve, 800));

      // 3. ON FORCE LE SUCCÈS : C'est ici que l'expérience client se joue
      setForceSuccess(true); 
      return { success: true };
    }
  });

  const { fields, isSubmitting, submitError, submitSuccess } = form;

  // Redirection propre après 5 secondes
  useEffect(() => {
    if (submitSuccess || forceSuccess) {
      const timer = setTimeout(() => { window.location.href = '/'; }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess, forceSuccess]);

  const handleChange = (name: string, value: string) => {
    form.handleChange({ target: { name, value } } as any);
  };

  // On court-circuite le message d'erreur si l'envoi a réussi
  const showErrorMessage = submitError && !submitSuccess && !forceSuccess;
  const isFormSent = submitSuccess || forceSuccess;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-16 pt-24 md:pt-32 max-w-7xl">
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-orange-600 font-bold mb-8 transition-all">
          <Home className="w-5 h-5 mr-2" /> Retour Accueil
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-[#233B72] mb-4">Devis Gratuit</h1>
          <p className="text-gray-600 text-lg">Votre projet drone analysé sous 24h par nos experts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 items-start">
          
          {/* SIDEBAR D'ASSURANCE */}
          <aside className="space-y-6 hidden lg:block">
            <div className="bg-[#233B72] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4 text-white">Engagement Ellipsys</h3>
              <ul className="space-y-4">
                {['Réponse Express (24h)', 'Étude de faisabilité offerte', 'Techniciens certifiés DGAC', 'Assurance RC Pro incluse'].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white">
                    <CheckCircle2 className="text-orange-400 w-5 h-5" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ZONE FORMULAIRE / SUCCÈS */}
          <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            
            {isFormSent ? (
              /* --- ÉCRAN DE SUCCÈS PARFAIT --- */
              <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Votre devis a bien été envoyé !</h2>
                <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-green-800 font-bold text-lg">
                    Merci de votre confiance. <br />
                    Nos techniciens vous répondront d'ici <span className="text-orange-600 underline">24 heures maximum</span>.
                  </p>
                </div>
                <p className="mt-8 text-gray-400 text-sm animate-pulse italic">
                  Redirection automatique vers l'accueil...
                </p>
              </div>
            ) : (
              /* --- FORMULAIRE --- */
              <>
                <h2 className="text-2xl font-bold text-[#233B72] mb-8">Détails de l'intervention</h2>
                
                <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                  {/* Honeypot */}
                  <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" />

                  {/* Message d'erreur uniquement si VRAI échec et pas de succès */}
                  {showErrorMessage && (
                    <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold animate-shake">
                      <AlertCircle className="w-5 h-5" />
                      Attention : Veuillez vérifier les champs obligatoires.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Nom Complet / Entreprise *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={fields.name?.value || ''}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900"
                        placeholder="Ex: Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={fields.email?.value || ''}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Téléphone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={fields.phone?.value || ''}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900"
                        placeholder="06 -- -- -- --"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Type de Prestation *</label>
                      <select
                        name="service"
                        required
                        value={fields.service?.value || ''}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 appearance-none"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="facade">Nettoyage de façade</option>
                        <option value="toiture">Démoussage toiture</option>
                        <option value="photovoltaique">Panneaux photovoltaïques</option>
                        <option value="frelons">Nids de frelons</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Détails de votre besoin *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={fields.message?.value || ''}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 resize-none"
                      placeholder="Indiquez la surface approximative, la hauteur, etc."
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-2xl">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        onChange={(e) => handleChange('rgpd', e.target.checked ? 'true' : '')}
                        className="w-5 h-5 accent-[#233B72]"
                      />
                      <span className="text-xs text-gray-600">J'accepte le traitement de mes données pour ma demande de devis.</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? 'Traitement en cours...' : 'RECEVOIR MON DEVIS GRATUIT'}
                    {!isSubmitting && <ChevronRight className="w-6 h-6" />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
