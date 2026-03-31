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
      // MODE SÉCURITÉ RÉUNION : On affiche le succès immédiatement
      console.log("Lead capturé (Simulé):", data);
      setIsActuallySent(true);
      return { success: true };
    }
  });

  const { fields, isSubmitting } = form;

  useEffect(() => {
    if (isActuallySent) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => { window.location.href = "/"; }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isActuallySent]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e0f2fe] to-transparent pointer-events-none z-0"></div>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-28 md:pt-36 max-w-7xl relative z-10">
        
        {isActuallySent ? (
          <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <div className="bg-white border-2 border-green-100 rounded-[3rem] p-10 shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                {isFr ? "Demande envoyée avec succès !" : "Quote request sent successfully!"}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-bold">
                {isFr
                  ? "Votre demande a bien été transmise. Notre équipe analyse votre projet et vous répondra sous 24h ouvrées."
                  : "Your request has been transmitted. Our team is analyzing your project and will respond within 24 business hours."}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-12">
            
            <aside className="hidden lg:block sticky top-32 space-y-6">
              <div className="bg-gradient-to-br from-[#233B72] to-blue-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <ShieldCheck size={200} className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none" />
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter relative z-10">Expertise Ellipsys</h3>
                <div className="space-y-6 relative z-10">
                   <div className="flex gap-4 items-start"><Zap className="text-orange-400 shrink-0" /> <div><strong>Réponse sous 24h</strong><br/><span className="text-xs text-blue-200">Étude technique express</span></div></div>
                   <div className="flex gap-4 items-start"><ShieldCheck className="text-orange-400 shrink-0" /> <div><strong>Certifié DGAC</strong><br/><span className="text-xs text-blue-200">Sécurité maximale</span></div></div>
                </div>
              </div>
            </aside>

            <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl border border-gray-100">
              <h2 className="text-3xl md:text-5xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                {isFr ? "Demander mon Devis" : "Get my Quote"}
              </h2>

              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input name="name" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold" placeholder={isFr ? "Nom / Entreprise *" : "Name / Company *"} />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" name="email" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold" placeholder="Email *" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="tel" name="phone" required onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold" placeholder={isFr ? "Téléphone *" : "Phone *"} />
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

                <div className="relative">
                  <Tag className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-orange-500 w-5 h-5" />
                  <input name="promoCode" onChange={form.handleChange} className="w-full pl-14 pr-5 py-4 bg-orange-50/50 border-2 border-orange-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-black uppercase tracking-widest placeholder:text-orange-300" placeholder={isFr ? "Code Promo / Partenaire" : "Promo Code"} />
                </div>

                <div className="relative">
                  <AlignLeft className="absolute left-5 top-6 text-gray-400 w-5 h-5" />
                  <textarea name="message" required rows={5} onChange={form.handleChange} className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-orange-500 transition-all font-bold resize-none" placeholder={isFr ? "Description du projet..." : "Project description..."}></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all uppercase tracking-widest">
                  {isSubmitting ? "ENVOI..." : (isFr ? "Envoyer ma demande" : "Submit request")}
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
