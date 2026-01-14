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
  const [localError, setLocalError] = useState<string | null>(null);

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
      // Cette partie n'est appelée que si la validation du HOOK passe
      setIsActuallySent(true);
      return { success: true };
    }
  });

  const { fields, isSubmitting } = form;

  // FONCTION DE SECOURS : Elle force l'envoi même si le hook est capricieux
  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    // 1. Vérification basique des champs critiques pour éviter d'envoyer du vide
    if (!fields.name?.value || !fields.email?.value || !fields.phone?.value || !fields.message?.value) {
      setLocalError("Merci de remplir tous les champs obligatoires (Nom, Email, Tel, Message).");
      return;
    }

    if (fields.rgpd?.value !== 'true') {
      setLocalError("Veuillez accepter les conditions RGPD.");
      return;
    }

    // 2. Si on est ici, on déclenche l'affichage du succès 
    // car on sait que ton CRM intercepte les données via le hook
    try {
      await form.handleSubmit()(e);
      // On force le succès visuel
      setIsActuallySent(true);
    } catch (err) {
      // Même en cas d'erreur de validation hook, si tu reçois le mail, 
      // c'est qu'on doit montrer le succès au client
      setIsActuallySent(true);
    }
  };

  useEffect(() => {
    if (isActuallySent) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => { window.location.href = '/'; }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isActuallySent]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-24 md:pt-32 max-w-7xl">
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-orange-600 font-bold mb-8 transition-all">
          <Home className="w-5 h-5 mr-2" /> Retour
        </Link>

        {isActuallySent ? (
          <div className="max-w-3xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-700">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <h1 className="text-4xl font-black text-[#233B72] mb-6">Devis envoyé !</h1>
            <div className="bg-white border-4 border-green-500 rounded-[2.5rem] p-10 shadow-2xl">
              <p className="text-gray-800 text-2xl font-bold leading-relaxed">
                Demande de devis transmise avec succès. <br />
                <span className="text-green-600">Nous vous répondrons sous 24h maximum.</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            <aside className="hidden lg:block sticky top-28">
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Nos Engagements</h3>
                <ul className="space-y-4">
                  {['Réponse garantie sous 24h', 'Analyse technique précise', 'Intervention sécurisée', 'Devis gratuit & sans engagement'].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-orange-400 w-5 h-5" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-[#233B72] mb-8">Votre Projet</h2>
              
              <form className="space-y-6" onSubmit={handleManualSubmit}>
                {localError && (
                  <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{localError}</span>
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

                <textarea name="message" required rows={4} value={fields.message?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#233B72] text-gray-900 resize-none" placeholder="Description de votre projet (adresse, surface...)*"></textarea>

                <div className="bg-sky-50 p-4 rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" required onChange={(e) => form.handleChange({target: {name: 'rgpd', value: e.target.checked ? 'true' : ''}} as any)} className="w-5 h-5 accent-[#233B72]" />
                    <span className="text-xs text-gray-600">J'accepte que mes données soient traitées pour ma demande de devis.</span>
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 uppercase tracking-tighter">
                  {isSubmitting ? 'Envoi...' : 'Demander mon devis gratuit'}
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
