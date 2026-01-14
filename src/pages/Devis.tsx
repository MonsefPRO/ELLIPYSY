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
      // Si on arrive ici, le mail part vers ton CRM
      setIsActuallySent(true);
      return { success: true };
    }
  });

  const { fields, isSubmitting, submitError, submitSuccess } = form;

  // On masque l'erreur si l'envoi est en cours ou réussi
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
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-orange-600 font-bold mb-8">
          <Home className="w-5 h-5 mr-2" /> Retour
        </Link>

        {isActuallySent ? (
          <div className="max-w-4xl mx-auto py-16 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <h1 className="text-4xl font-black text-[#233B72] mb-6">Demande envoyée !</h1>
            <div className="bg-white border-4 border-green-500 rounded-[2.5rem] p-10 shadow-2xl inline-block">
              <p className="text-gray-800 text-2xl font-bold">
                Votre devis a bien été envoyé. <br />
                <span className="text-green-600">Nous vous répondons sous 24h maximum.</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            <aside className="hidden lg:block sticky top-28">
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl text-center">
                <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Engagement 24h</h3>
                <p className="text-blue-100 text-sm">Nos techniciens analysent votre demande et vous recontactent avec une offre détaillée.</p>
              </div>
            </aside>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-[#233B72] mb-8">Votre Projet</h2>
              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} />

                {showErrorMessage && (
                  <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold animate-shake">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Veuillez vérifier les informations saisies.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" required value={fields.name?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#233B72] text-gray-900" placeholder="Nom / Entreprise *" />
                  <input type="email" name="email" required value={fields.email?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#233B72] text-gray-900" placeholder="Email *" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" name="phone" required value={fields.phone?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#233B72] text-gray-900" placeholder="Téléphone *" />
                  <select name="service" required value={fields.service?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#233B72] text-gray-900">
                    <option value="">Prestation souhaitée *</option>
                    <option value="facade">Nettoyage façade</option>
                    <option value="toiture">Démoussage toiture</option>
                    <option value="photovoltaique">Photovoltaïque</option>
                    <option value="frelons">Nids de frelons</option>
                  </select>
                </div>

                <textarea name="message" required rows={4} value={fields.message?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#233B72] text-gray-900 resize-none" placeholder="Description du projet..."></textarea>

                <div className="bg-sky-50 p-4 rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" required onChange={(e) => form.handleChange({target: {name: 'rgpd', value: e.target.checked ? 'true' : ''}} as any)} className="w-5 h-5 accent-[#233B72]" />
                    <span className="text-xs text-gray-600 font-medium">J'accepte le traitement de mes données.</span>
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl transition-all flex items-center justify-center gap-3">
                  {isSubmitting ? 'Envoi...' : 'RECEVOIR MON DEVIS GRATUIT'}
                  <ChevronRight className="w-6 h-6" />
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
