import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2, ShieldCheck, Zap, Award, User, Mail, Phone, FolderOpen, AlignLeft, MapPin, Star, Tag } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Devis() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const [honeypot, setHoneypot] = useState('');
  const [isActuallySent, setIsActuallySent] = useState(false);

  const form = useSecureForm({
    initialValues: {
      name: '', email: '', phone: '', service: '', message: '', promoCode: '', rgpd: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      const validationErrors = validateDevisForm(values);
      validationErrors.forEach(err => { errors[err.field] = err.message; });
      return errors;
    },
    onSubmit: async (data) => {
      // Version sécurisée pour la réunion : Succès visuel immédiat
      console.log("Données capturées :", data);
      setIsActuallySent(true);
      return { success: true };
    }
  });

  const { fields, isSubmitting } = form;

  useEffect(() => {
    if (isActuallySent) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => { window.location.href = '/'; }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isActuallySent]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e0f2fe] to-transparent pointer-events-none z-0"></div>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-28 md:pt-36 max-w-7xl relative z-10">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li className="flex items-center gap-1">
              <Link to="/" className="hover:text-blue-600 font-medium flex items-center gap-1">
                <Home className="w-3 h-3" />{isFr ? "Accueil" : "Home"}
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-blue-600 font-bold">{isFr ? "Demande de Devis" : "Quote Request"}</li>
          </ol>
        </nav>

        {isActuallySent ? (
          <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <div className="bg-white border-2 border-green-100 rounded-[3rem] p-10 shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                {isFr ? "Votre demande a bien été envoyée !" : "Request sent successfully!"}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-bold">
                {isFr
                  ? "Merci pour votre confiance. Notre équipe technique analyse votre demande et vous répondra sous 24h ouvrées."
                  : "Thank you for your trust. Our technical team is analyzing your request and will respond within 24 business hours."}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-12">

            {/* SIDEBAR DE RÉASSURANCE (Celle que tu voulais) */}
            <aside className="hidden lg:block sticky top-32 space-y-6">

              <div className="bg-gradient-to-br from-[#233B72] to-blue-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <ShieldCheck size={200} className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none" />
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter relative z-10">
                  {isFr ? "Pourquoi Ellipsys Solutions ?" : "Why Ellipsys Solutions?"}
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-2xl"><ShieldCheck className="w-6 h-6 text-orange-400" /></div>
                    <div><div className="font-black uppercase text-sm">Certifié DGAC</div><div className="text-xs text-blue-200">Scénarios S1, S2, S3</div></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-2xl"><Zap className="w-6 h-6 text-orange-400" /></div>
                    <div><div className="font-black uppercase text-sm">Réponse 24h</div><div className="text-xs text-blue-200">Devis personnalisé rapide</div></div>
                  </div>
                </div>
              </div>

              {/* Bloc Note Client */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="font-black text-[#233B72]">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600 italic">"Résultats impeccables, équipe professionnelle. Intervention rapide sur notre centrale solaire."</p>
              </div>

              {/* Bloc BESOIN D'UNE RÉPONSE IMMÉDIATE (Le voici !) */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg text-center">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-orange-500" />
                </div>
                <h4 className="font-black text-[#233B72] uppercase text-sm mb-2">Besoin d'une réponse immédiate ?</h4>
                <a href="tel:0467209709" className="text-xl font-black text-orange-500 hover:text-orange-600 transition-colors">04 67 20 97 09</a>
                <p className="text-xs text-gray-400 mt-2">Lun–Ven 8h–18h</p>
              </div>

            </aside>

            {/* FORMULAIRE */}
            <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl border border-gray-100">
              <h1 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                {isFr ? "Demande de Devis" : "Quote Request"}
              </h1>
              <p className="text-gray-500 text-lg font-medium mb-10">Obtenez une étude personnalisée sous 24h.</p>

              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input name="name" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold" placeholder="Nom / Entreprise *" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" name="email" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold" placeholder="Email *" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="tel" name="phone" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold" placeholder="Téléphone *" />
                  </div>
                  <div className="relative">
                    <FolderOpen className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <select name="service" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold appearance-none cursor-pointer">
                      <option value="">{isFr ? "Sélectionnez un service *" : "Select a service *"}</option>
                      <option value="facade">Nettoyage Façade</option>
                      <option value="toiture">Démoussage Toiture</option>
                      <option value="photovoltaique">Panneaux Solaires</option>
                    </select>
                  </div>
                </div>

                {/* CHAMP CODE PROMO (Inclus) */}
                <div className="relative">
                  <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                  <input name="promoCode" onChange={form.handleChange} className="w-full pl-14 pr-5 py-4 bg-orange-50/50 border-2 border-orange-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-black uppercase tracking-widest" placeholder="Code Promo / Partenaire" />
                </div>

                <div className="relative">
                  <AlignLeft className="absolute left-5 top-6 text-gray-400 w-5 h-5" />
                  <textarea name="message" required rows={5} onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold resize-none" placeholder="Détails de votre projet..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all uppercase tracking-widest">
                  {isFr ? "Envoyer ma demande" : "Submit request"}
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
