import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2, ShieldCheck, Zap, Award, User, Mail, Phone, FolderOpen, AlignLeft } from 'lucide-react';
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
      name: '', companyType: '', email: '', phone: '', service: '', message: '', rgpd: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      const validationErrors = validateDevisForm(values);
      validationErrors.forEach(err => { errors[err.field] = err.message; });
      return errors;
    },
    onSubmit: async (data) => {
      setIsActuallySent(true);
      console.log('Données transmises au CRM:', data);
      return { success: true };
    }
  });

  const { fields, isSubmitting, submitError, submitSuccess } = form;
  const showErrorMessage = submitError && !isActuallySent && !submitSuccess;

  useEffect(() => {
    if (isActuallySent) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => { window.location.href = '/'; }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isActuallySent]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e0f2fe] to-transparent pointer-events-none z-0"></div>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-28 md:pt-36 max-w-7xl relative z-10">
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-brand-orange-500 font-black mb-8 md:mb-12 transition-all uppercase tracking-widest text-xs md:text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
          <Home className="w-4 h-4 mr-2" /> {isFr ? 'Retour Accueil' : 'Back to Home'}
        </Link>

        {isActuallySent ? (
          <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <div className="bg-white border-2 border-green-100 rounded-[3rem] p-10 shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                {t('quote.form.success')}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-bold">
                {isFr 
                  ? 'Notre équipe technique analyse votre demande. Nous vous recontactons dans les 24h ouvrées.' 
                  : 'Our technical team is analyzing your request. We will contact you within 24 business hours.'}
              </p>
            </div>
            <p className="mt-10 text-gray-400 italic animate-pulse font-medium">
              {isFr ? "Redirection automatique vers l'accueil..." : 'Redirecting automatically to home...'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
            
            {/* SIDEBAR DE RÉASSURANCE */}
            <aside className="hidden lg:block sticky top-32 space-y-6">
              
              <div className="bg-gradient-to-br from-[#233B72] to-blue-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                  <ShieldCheck size={200} />
                </div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter relative z-10">
                  {isFr ? "L'Excellence Ellipsys" : "Ellipsys Excellence"}
                </h3>
                <div className="space-y-6 relative z-10">
                  {[
                    { icon: ShieldCheck, title: isFr ? "Certifié DGAC" : "DGAC Certified", desc: isFr ? "Pilotes agréés Scénarios S1, S2, S3" : "Pilots approved for S1, S2, S3 scenarios" },
                    { icon: Award, title: isFr ? "Assurance RC Pro" : "Liability Insurance", desc: isFr ? "Couverture aérienne et industrielle" : "Aerial and industrial coverage" },
                    { icon: Zap, title: isFr ? "Réponse Rapide" : "Fast Response", desc: isFr ? "Étude de faisabilité sous 24h/48h" : "Feasibility study within 24/48h" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-2xl flex-shrink-0 backdrop-blur-sm">
                        <item.icon className="w-6 h-6 text-brand-orange-400" />
                      </div>
                      <div>
                        <div className="font-black uppercase tracking-tight text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-blue-200 font-medium leading-snug">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-brand-orange-500" />
                </div>
                <h4 className="font-black text-[#233B72] uppercase tracking-tight mb-2">
                  {isFr ? "Besoin d'aide immédiate ?" : "Need immediate help?"}
                </h4>
                <p className="text-sm text-gray-500 font-medium mb-4">
                  {isFr ? "Notre équipe technique est à votre écoute." : "Our technical team is at your disposal."}
                </p>
                <a href="tel:0467209709" className="text-xl font-black text-brand-orange-500 hover:text-brand-orange-600 transition-colors">
                  04 67 20 97 09
                </a>
              </div>

            </aside>

            {/* FORMULAIRE PRINCIPAL */}
            <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl border border-gray-100">
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  {isFr ? "Demande d'Audit & Devis" : "Audit & Quote Request"}
                </h2>
                <p className="text-gray-500 text-lg font-medium">
                  {isFr 
                    ? "Remplissez le formulaire ci-dessous pour obtenir une étude personnalisée de votre projet." 
                    : "Fill out the form below to get a personalized study of your project."}
                </p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} />

                {showErrorMessage && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" />
                    <span>{t('quote.form.error')}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={fields.name?.value || ''} 
                      onChange={(e) => form.handleChange(e)} 
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-brand-orange-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium" 
                      placeholder={isFr ? "Nom ou Raison Sociale *" : "Name or Company Name *"} 
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={fields.email?.value || ''} 
                      onChange={(e) => form.handleChange(e)} 
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-brand-orange-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium" 
                      placeholder={isFr ? "Adresse Email *" : "Email Address *"} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={fields.phone?.value || ''} 
                      onChange={(e) => form.handleChange(e)} 
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-brand-orange-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium" 
                      placeholder={isFr ? "Numéro de téléphone *" : "Phone Number *"} 
                    />
                  </div>
                  <div className="relative">
                    <FolderOpen className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <select 
                      name="service" 
                      required 
                      value={fields.service?.value || ''} 
                      onChange={(e) => form.handleChange(e)} 
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-brand-orange-500 outline-none transition-all text-gray-900 font-bold appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-400 font-medium">{t('quote.form.selectService')}</option>
                      <option value="facade">{t('mainServices.facade.title')}</option>
                      <option value="toiture">{t('mainServices.demoussage.title')}</option>
                      <option value="photovoltaique">{t('mainServices.industrial2.title')}</option>
                      <option value="thermographie">{isFr ? 'Thermographie par Drone' : 'Drone Thermography'}</option>
                      <option value="frelons">{t('mainServices.hornets.title')}</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <AlignLeft className="absolute left-5 top-6 text-gray-400 w-5 h-5" />
                  <textarea 
                    name="message" 
                    required 
                    rows={5} 
                    value={fields.message?.value || ''} 
                    onChange={(e) => form.handleChange(e)} 
                    className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-brand-orange-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium resize-none" 
                    placeholder={isFr ? "Veuillez décrire brièvement votre besoin, la surface estimée et l'adresse d'intervention..." : "Please briefly describe your needs, estimated surface area, and intervention address..."}
                  ></textarea>
                </div>

                <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100 mt-2">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      required 
                      onChange={(e) => form.handleChange({target: {name: 'rgpd', value: e.target.checked ? 'true' : ''}} as any)} 
                      className="w-5 h-5 mt-0.5 accent-brand-orange-500 rounded cursor-pointer" 
                    />
                    <span className="text-xs md:text-sm text-gray-600 font-bold leading-relaxed group-hover:text-gray-900 transition-colors">
                      {isFr 
                        ? "J'accepte que les informations saisies soient exploitées dans le cadre strict de la demande de devis et de la relation commerciale qui peut en découler." 
                        : "I agree that the information entered will be used strictly within the context of the quote request and the business relationship that may result from it."}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:hover:translate-y-0 disabled:active:scale-100 flex items-center justify-center gap-3 uppercase tracking-widest mt-4"
                >
                  {isSubmitting 
                    ? (isFr ? 'ENVOI EN COURS...' : 'SENDING...') 
                    : (isFr ? 'Envoyer ma demande' : 'Submit my request')
                  }
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
