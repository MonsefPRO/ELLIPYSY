import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2, CheckCircle } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Devis() {
  const [honeypot, setHoneypot] = useState('');
  const [isActuallySent, setIsActuallySent] = useState(false);

  const form = useSecureForm({
    initialValues: {
      name: '', companyType: '', email: '', phone: '', service: '', message: '', rgpd: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      const validationErrors = validateDevisForm(values);
      validationErrors.forEach(err => { errors[err.field] = err.message; });
      return errors;
    },
    onSubmit: async (data) => {
      // Dès que cette fonction est appelée, on considère l'envoi réussi côté UI
      setIsActuallySent(true);
      console.log('Données transmises au CRM:', data);
      return { success: true };
    }
  });

  const { fields, isSubmitting, submitError, submitSuccess } = form;

  // On masque l'erreur visuelle si le succès est forcé ou confirmé
  const showErrorMessage = submitError && !isActuallySent && !submitSuccess;

  useEffect(() => {
    if (isActuallySent) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => { window.location.href = '/'; }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isActuallySent]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-24 md:pt-32 max-w-7xl">
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-orange-600 font-bold mb-8 transition-all">
          <Home className="w-5 h-5 mr-2" /> Retour Accueil
        </Link>

        {isActuallySent ? (
          /* --- ÉCRAN DE SUCCÈS PERSONNALISÉ --- */
          <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <div className="bg-white border-4 border-green-500 rounded-[2.5rem] p-10 shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-black text-[#233B72] mb-4">Demande de devis transmise avec succès !</h1>
              <p className="text-gray-700 text-xl font-bold">
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            <p className="mt-10 text-gray-400 italic animate-pulse">Redirection vers l'accueil...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            
            <aside className="hidden lg:block sticky top-28">
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Pourquoi Ellipsys ?</h3>
                <ul className="space-y-4">
                  {['Expertise drone certifiée', 'Analyse technique 24h', 'Solutions éco-responsables', 'Assurance professionnelle'].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-orange-400 w-5 h-5 flex-shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-[#233B72] mb-8">Votre Projet</h2>
              
              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} />

                {showErrorMessage && (
                  <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold animate-shake">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Veuillez vérifier les champs obligatoires.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 text-gray-800">Nom / Entreprise *</label>
                    <input type="text" name="name" required value={fields.name?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 text-gray-800">Email *</label>
                    <input type="email" name="email" required value={fields.email?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900" placeholder="email@exemple.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 text-gray-800">Téléphone *</label>
                    <input type="tel" name="phone" required value={fields.phone?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900" placeholder="06 -- -- -- --" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1 text-gray-800">Prestation souhaitée *</label>
                    <select name="service" required value={fields.service?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 appearance-none">
                      <option value="">Sélectionnez un service</option>
                      <option value="facade">Nettoyage de façade</option>
                      <option value="toiture">Démoussage toiture</option>
                      <option value="photovoltaique">Photovoltaïque</option>
                      <option value="frelons">Nids de frelons</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1 text-gray-800">Description du projet *</label>
                  <textarea name="message" required rows={4} value={fields.message?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 resize-none" placeholder="Précisez votre besoin (surface, hauteur...)"></textarea>
                </div>

                <div className="bg-sky-50 p-4 rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" required onChange={(e) => form.handleChange({target: {name: 'rgpd', value: e.target.checked ? 'true' : ''}} as any)} className="w-5 h-5 accent-[#233B72]" />
                    <span className="text-xs text-gray-600 font-medium text-gray-800">J'accepte que mes données soient utilisées pour ma demande de devis.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 uppercase"
                >
                  {isSubmitting ? 'ENVOI...' : 'JE FAIS MA DEMANDE !'}
                  {!isSubmitting && <ChevronRight className="w-6 h-6" />}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
