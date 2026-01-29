import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2, CheckCircle } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Devis() {
  const { t, language } = useLanguage();
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-24 md:pt-32 max-w-7xl">
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-orange-600 font-black mb-8 transition-all uppercase tracking-widest text-sm">
          <Home className="w-5 h-5 mr-2" /> {language === 'fr' ? 'Retour Accueil' : 'Back to Home'}
        </Link>

        {isActuallySent ? (
          <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <div className="bg-white border-4 border-green-500 rounded-[2.5rem] p-10 shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-black text-[#233B72] mb-4">
                {t('quote.form.success')}
              </h1>
              <p className="text-gray-700 text-xl font-bold">
                {language === 'fr' ? 'Nous vous répondrons dans les plus brefs délais.' : 'We will get back to you as soon as possible.'}
              </p>
            </div>
            <p className="mt-10 text-gray-400 italic animate-pulse">
              {language === 'fr' ? "Redirection vers l'accueil..." : 'Redirecting to home...'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            
            <aside className="hidden lg:block sticky top-28">
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h3 className="text-xl font-black mb-6 border-b border-white/20 pb-4 uppercase tracking-tighter">
                  {t('valeurs.whyChoose.title')}
                </h3>
                <ul className="space-y-4">
                  {[
                    t('prestations.hero.certified'),
                    t('valeurs.whyChoose.reason3'),
                    t('valeurs.whyChoose.reason5'),
                    t('whyUs.certified.title')
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCircle className="text-orange-400 w-5 h-5 flex-shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                {t('quote.title')}
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} />

                {showErrorMessage && (
                  <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold animate-shake">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{t('quote.form.error')}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">
                      {t('quote.form.lastName')} / {language === 'fr' ? 'Entreprise' : 'Company'} *
                    </label>
                    <input type="text" name="name" required value={fields.name?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 font-bold" placeholder={t('quote.form.lastName')} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">{t('quote.form.email')} *</label>
                    <input type="email" name="email" required value={fields.email?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 font-bold" placeholder="email@exemple.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">{t('quote.form.phone')} *</label>
                    <input type="tel" name="phone" required value={fields.phone?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 font-bold" placeholder="06 -- -- -- --" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">{t('quote.form.service')} *</label>
                    <select name="service" required value={fields.service?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 font-bold appearance-none">
                      <option value="">{t('quote.form.selectService')}</option>
                      <option value="facade">{t('mainServices.facade.title')}</option>
                      <option value="toiture">{t('mainServices.demoussage.title')}</option>
                      <option value="photovoltaique">{t('mainServices.industrial2.title')}</option>
                      <option value="frelons">{t('mainServices.hornets.title')}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 ml-1 uppercase tracking-wider">{language === 'fr' ? 'Description du projet' : 'Project description'} *</label>
                  <textarea name="message" required rows={4} value={fields.message?.value || ''} onChange={(e) => form.handleChange(e)} className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 font-bold resize-none" placeholder={t('quote.form.message')}></textarea>
                </div>

                <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" required onChange={(e) => form.handleChange({target: {name: 'rgpd', value: e.target.checked ? 'true' : ''}} as any)} className="w-5 h-5 accent-[#233B72]" />
                    <span className="text-xs text-gray-700 font-bold leading-tight">
                      {language === 'fr' 
                        ? "J'accepte que mes données soient utilisées pour ma demande de devis." 
                        : "I agree that my data will be used for my quote request."}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-wider"
                >
                  {isSubmitting 
                    ? (language === 'fr' ? 'ENVOI...' : 'SENDING...') 
                    : t('quote.form.submit')
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
