import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2, ShieldCheck, Zap, Award, User, Mail, Phone, FolderOpen, AlignLeft, MapPin, Star } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Demande de devis — Ellipsys Solutions",
  "description": "Demandez un devis pour le nettoyage par drone en Occitanie : panneaux photovoltaïques, façades, toitures, nids de frelons. Réponse sous 24h.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ellipsys Solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "159 Rue de Thor",
      "addressLocality": "Montpellier",
      "postalCode": "34057",
      "addressRegion": "Occitanie",
      "addressCountry": "FR"
    },
    "telephone": "+33467209709",
    "url": "https://ellipsys-solutions.com",
    "areaServed": [{"@type":"Country","name":"France"},{"@type":"Country","name":"Belgique"},{"@type":"Country","name":"Espagne"},{"@type":"AdministrativeArea","name":"Occitanie"},{"@type":"AdministrativeArea","name":"Hérault"},{"@type":"AdministrativeArea","name":"Gard"},{"@type":"AdministrativeArea","name":"Aude"},{"@type":"AdministrativeArea","name":"Haute-Garonne"},{"@type":"AdministrativeArea","name":"Pyrénées-Orientales"}]
  }
};

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
      console.log('Données transmises:', data);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <Header />

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e0f2fe] to-transparent pointer-events-none z-0"></div>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-28 md:pt-36 max-w-7xl relative z-10">

        {/* Breadcrumb SEO */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" className="hover:text-blue-600 font-medium flex items-center gap-1" itemProp="item">
                <Home className="w-3 h-3" /><span itemProp="name">{isFr ? "Accueil" : "Home"}</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-3 h-3" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-blue-600 font-bold" itemProp="name">{isFr ? "Demande de Devis" : "Quote Request"}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {isActuallySent ? (
          <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <div className="bg-white border-2 border-green-100 rounded-[3rem] p-10 shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                {isFr ? "Demande reçue !" : "Request received!"}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-bold">
                {isFr
                  ? "Notre équipe technique analyse votre demande. Nous vous recontactons dans les 24h ouvrées."
                  : "Our technical team is analyzing your request. We will contact you within 24 business hours."}
              </p>
            </div>
            <p className="mt-10 text-gray-400 italic animate-pulse font-medium">
              {isFr ? "Redirection automatique vers l'accueil..." : "Redirecting automatically to home..."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-12">

            {/* SIDEBAR RÉASSURANCE */}
            <aside className="hidden lg:block sticky top-32 space-y-6">

              {/* Bloc principal */}
              <div className="bg-gradient-to-br from-[#233B72] to-blue-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                  <ShieldCheck size={200} />
                </div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter relative z-10">
                  {isFr ? "Pourquoi Ellipsys Solutions ?" : "Why Ellipsys Solutions?"}
                </h3>
                <div className="space-y-6 relative z-10">
                  {[
                    { icon: ShieldCheck, title: isFr ? "Certifié DGAC" : "DGAC Certified", desc: isFr ? "Pilotes agréés Scénarios S1, S2, S3. Conformité totale EASA." : "Pilots approved for S1, S2, S3 scenarios. Full EASA compliance." },
                    { icon: Award, title: isFr ? "Assurance RC Pro" : "Liability Insurance", desc: isFr ? "Couverture aérienne et industrielle complète." : "Complete aerial and industrial coverage." },
                    { icon: Zap, title: isFr ? "Réponse Rapide" : "Fast Response", desc: isFr ? "Devis personnalisé sous 24h ouvrées." : "Personalized quote within 24 business hours." },
                    { icon: MapPin, title: isFr ? "Zone Occitanie" : "Occitanie Coverage", desc: isFr ? "Occitanie · PACA · Île-de-France · France entière & International sur devis." : "Occitanie · PACA · Île-de-France · France entière & International sur devis." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-2xl flex-shrink-0 backdrop-blur-sm">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="font-black uppercase tracking-tight text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-blue-200 font-medium leading-snug">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note clients */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="font-black text-[#233B72] text-lg">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600 font-medium italic leading-relaxed">
                  {isFr ? "\"Résultats impeccables, équipe professionnelle. Intervention ultra-rapide sur notre centrale solaire de 2 MWc.\"" : "\"Impeccable results, professional team. Ultra-fast intervention on our 2 MWp solar plant.\""}
                </p>
                <p className="text-xs text-gray-400 font-bold mt-3 uppercase tracking-widest">
                  {isFr ? "— Directeur exploitation, ferme solaire Hérault" : "— Operations Director, Hérault solar farm"}
                </p>
              </div>

              {/* Contact direct */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg text-center">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-orange-500" />
                </div>
                <h4 className="font-black text-[#233B72] uppercase tracking-tight mb-2 text-sm">
                  {isFr ? "Besoin d'une réponse immédiate ?" : "Need an immediate answer?"}
                </h4>
                <p className="text-xs text-gray-500 font-medium mb-4">
                  {isFr ? "Notre équipe technique vous répond directement." : "Our technical team answers directly."}
                </p>
                <a href="tel:0467209709" className="text-xl font-black text-orange-500 hover:text-orange-600 transition-colors block">
                  04 67 20 97 09
                </a>
                <p className="text-xs text-gray-400 mt-2 font-medium">
                  {isFr ? "Lun–Ven 8h–18h · Urgences 7j/7" : "Mon–Fri 8am–6pm · Emergency 7/7"}
                </p>
              </div>

            </aside>

            {/* FORMULAIRE PRINCIPAL */}
            <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl border border-gray-100">
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                    {isFr ? "France entière · International" : "All France · International"}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">
                  {isFr ? "Demande de Devis" : "Quote Request"}
                </h1>
                <p className="text-gray-500 text-lg font-medium">
                  {isFr
                    ? "Nettoyage drone en Occitanie — Remplissez le formulaire pour obtenir une étude personnalisée sous 24h."
                    : "Drone cleaning in Southern France — Fill in the form for a personalized study within 24h."}
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} aria-hidden="true" />

                {showErrorMessage && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" />
                    <span>{t('quote.form.error')}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" name="name" required value={fields.name?.value || ''} onChange={(e) => form.handleChange(e)}
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium"
                      placeholder={isFr ? "Nom ou Raison Sociale *" : "Name or Company Name *"} />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" name="email" required value={fields.email?.value || ''} onChange={(e) => form.handleChange(e)}
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium"
                      placeholder={isFr ? "Adresse Email *" : "Email Address *"} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="tel" name="phone" required value={fields.phone?.value || ''} onChange={(e) => form.handleChange(e)}
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium"
                      placeholder={isFr ? "Numéro de téléphone *" : "Phone Number *"} />
                  </div>
                  <div className="relative">
                    <FolderOpen className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <select name="service" required value={fields.service?.value || ''} onChange={(e) => form.handleChange(e)}
                      className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-gray-900 font-bold appearance-none cursor-pointer">
                      <option value="" disabled className="text-gray-400 font-medium">{t('quote.form.selectService')}</option>
                      <option value="facade">{isFr ? "Nettoyage de Façade" : "Facade Cleaning"}</option>
                      <option value="toiture">{isFr ? "Démoussage de Toiture" : "Roof Moss Removal"}</option>
                      <option value="photovoltaique">{isFr ? "Panneaux Photovoltaïques" : "Solar Panel Cleaning"}</option>
                      <option value="thermographie">{isFr ? "Thermographie par Drone" : "Drone Thermography"}</option>
                      <option value="frelons">{isFr ? "Destruction Nids de Frelons" : "Hornet Nest Removal"}</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <AlignLeft className="absolute left-5 top-6 text-gray-400 w-5 h-5" />
                  <textarea name="message" required rows={5} value={fields.message?.value || ''} onChange={(e) => form.handleChange(e)}
                    className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400 placeholder:font-medium resize-none"
                    placeholder={isFr ? "Décrivez votre besoin : surface estimée, adresse d'intervention en Occitanie, contraintes d'accès..." : "Describe your need: estimated surface area, address in Southern France, access constraints..."}></textarea>
                </div>

                {/* Zone de confiance visible */}
                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-bold text-blue-700">
                    {isFr
                      ? "Devis 100% gratuit et sans engagement. Réponse sous 24h ouvrées. Vos données restent confidentielles."
                      : "100% free and no-commitment quote. Response within 24 business hours. Your data remains confidential."}
                  </p>
                </div>

                <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" required onChange={(e) => form.handleChange({ target: { name: 'rgpd', value: e.target.checked ? 'true' : '' } } as any)}
                      className="w-5 h-5 mt-0.5 accent-blue-600 rounded cursor-pointer" />
                    <span className="text-xs md:text-sm text-gray-600 font-bold leading-relaxed group-hover:text-gray-900 transition-colors">
                      {isFr
                        ? "J'accepte que les informations saisies soient exploitées dans le cadre strict de la demande de devis et de la relation commerciale qui peut en découler."
                        : "I agree that the information entered will be used strictly within the context of the quote request and the business relationship that may result from it."}
                    </span>
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-[#233B72] to-blue-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-widest mt-4">
                  {isSubmitting
                    ? (isFr ? 'ENVOI EN COURS...' : 'SENDING...')
                    : (isFr ? 'Envoyer ma demande' : 'Submit my request')}
                  {!isSubmitting && <ChevronRight className="w-6 h-6" />}
                </button>

                {/* Réassurance mobile */}
                <div className="lg:hidden grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: isFr ? "Certifié DGAC" : "DGAC Certified", icon: ShieldCheck },
                    { label: isFr ? "Réponse 24h" : "24h Response", icon: Zap },
                    { label: isFr ? "RC Pro" : "Liability Ins.", icon: Award },
                    { label: "4.9/5 ⭐", icon: Star }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <item.icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-xs font-black text-gray-700 uppercase tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>

              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
