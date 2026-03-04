import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Users, Heart, Award, FileText, Building2, Handshake, Target, TrendingUp, Sparkles, CheckCircle2, User, Mail, Phone, MapPin, AlignLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { useSecureForm } from '../hooks/useSecureForm';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';

// --- SECTIONS DE SOUTIEN ---

function WhyJoinSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  
  const benefits = [
    { icon: Heart, title: t('rejoignez.benefit1_title'), description: t('rejoignez.benefit1_desc'), color: 'from-pink-500 to-red-500' },
    { icon: Award, title: t('rejoignez.benefit2_title'), description: t('rejoignez.benefit2_desc'), color: 'from-sky-500 to-blue-600' },
    { icon: TrendingUp, title: t('rejoignez.benefit3_title'), description: t('rejoignez.benefit3_desc'), color: 'from-green-500 to-emerald-600' },
    { icon: Target, title: t('rejoignez.benefit4_title'), description: t('rejoignez.benefit4_desc'), color: 'from-orange-500 to-red-600' },
    { icon: Users, title: t('rejoignez.benefit5_title'), description: t('rejoignez.benefit5_desc'), color: 'from-purple-500 to-pink-600' },
    { icon: Sparkles, title: t('rejoignez.benefit6_title'), description: t('rejoignez.benefit6_desc'), color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">{t('rejoignez.why_title')}</h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">{t('rejoignez.why_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#233B72] mb-3 uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PAGE PRINCIPALE ---

export default function RejoignezNous() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'candidature' | 'apporteur' | 'franchisee' | 'architecte'>('candidature');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-[#233B72]/80 via-[#233B72]/60 to-black/70 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('rejoignez.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-bold text-white italic">
            {language === 'fr' ? "Rejoignez l'aventure technologique Ellipsys" : "Join the Ellipsys technological adventure"}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-[1400px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
          {[
            { tab: 'candidature', icon: FileText, title: t('rejoignez.tab1_title'), color: 'green', desc: t('rejoignez.tab1_desc') },
            { tab: 'apporteur', icon: Handshake, title: t('rejoignez.tab2_title'), color: 'sky', desc: t('rejoignez.tab2_desc') },
            { tab: 'franchisee', icon: Briefcase, title: t('rejoignez.tab3_title'), color: 'amber', desc: t('rejoignez.tab3_desc') },
            { tab: 'architecte', icon: Building2, title: t('rejoignez.tab4_title'), color: 'orange', desc: t('rejoignez.tab4_desc') }
          ].map(({ tab, icon: Icon, title, color, desc }) => {
            const isActive = activeTab === tab;
            const colorClasses: any = {
                green: 'border-green-500 bg-green-50/50',
                sky: 'border-sky-500 bg-sky-50/50',
                amber: 'border-amber-500 bg-amber-50/50',
                orange: 'border-orange-500 bg-orange-50/50'
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`group relative p-6 md:p-10 rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col items-center text-center ${
                  isActive ? `${colorClasses[color]} shadow-2xl scale-105 z-10` : 'bg-white border-gray-100 hover:border-gray-200 opacity-80 hover:opacity-100'
                }`}
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center mb-6 transition-all duration-500 shadow-md ${
                  isActive ? 'bg-white' : 'bg-gray-50'
                }`}>
                  <Icon className={`w-7 h-7 md:w-10 md:h-10 ${isActive ? `text-${color}-600` : 'text-[#233B72]'}`} />
                </div>
                <h3 className={`text-xs md:text-xl font-black uppercase tracking-widest transition-colors mb-3 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                  {title}
                </h3>
                <p className={`hidden md:block text-sm font-medium leading-relaxed ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                   {desc}
                </p>
                {isActive && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-inherit border-r-2 border-b-2 border-inherit"></div>}
              </button>
            );
          })}
        </div>

        <div className="transition-all duration-700 w-full">
          {activeTab === 'candidature' && <ScrollReveal><CandidatureSpontaneeForm /></ScrollReveal>}
          {activeTab === 'apporteur' && <ScrollReveal><ApporteurAffairesForm /></ScrollReveal>}
          {activeTab === 'franchisee' && <ScrollReveal><FranchiseeForm /></ScrollReveal>}
          {activeTab === 'architecte' && <ScrollReveal><ArchitecteForm /></ScrollReveal>}
        </div>
      </div>

      <WhyJoinSection />
      <Footer />
    </div>
  );
}

// --- FORMULAIRES ---

function CandidatureSpontaneeForm() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', poste: '', motivation: ''
  });

  return (
    <div className="bg-white rounded-[4rem] shadow-2xl p-8 md:p-20 border-t-8 border-green-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="flex items-center mb-12 relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-6 shadow-lg text-white">
          <FileText className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase text-[#233B72]">{t('rejoignez.tab1_title')}</h2>
      </div>
      
      {submitSuccess ? <SuccessView color="green" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="email" type="email" placeholder={`${t('quote.form.email')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input name="poste" placeholder={isFr ? "Poste recherché *" : "Desired position *"} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all" />
          </div>
          <div className="relative">
            <AlignLeft className="absolute left-4 top-5 text-gray-400 w-5 h-5" />
            <textarea name="motivation" placeholder={isFr ? "Décrivez votre parcours et vos motivations..." : "Describe your background and motivations..."} rows={6} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase tracking-widest mt-4">
            {isFr ? "Envoyer ma candidature" : "Submit my application"}
          </button>
        </form>
      )}
    </div>
  );
}

function ApporteurAffairesForm() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', message: ''
  });

  return (
    <div className="bg-white rounded-[4rem] shadow-2xl p-8 md:p-20 border-t-8 border-sky-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="flex items-center mb-12 relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mr-6 shadow-lg text-white">
          <Handshake className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase text-[#233B72]">{t('rejoignez.tab2_title')}</h2>
      </div>
      
      {submitSuccess ? <SuccessView color="sky" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="email" type="email" placeholder={`${t('quote.form.email')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="relative">
            <AlignLeft className="absolute left-4 top-5 text-gray-400 w-5 h-5" />
            <textarea name="message" placeholder={isFr ? "Parlez-nous de votre réseau et de vos opportunités..." : "Tell us about your network and opportunities..."} rows={6} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-sky-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-sky-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase tracking-widest mt-4">
            {isFr ? "Devenir Apporteur d'Affaires" : "Become a Business Introducer"}
          </button>
        </form>
      )}
    </div>
  );
}

function FranchiseeForm() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', ville: '', apport: '', motivation: ''
  });

  return (
    <div className="bg-white rounded-[4rem] shadow-2xl p-8 md:p-20 border-t-8 border-amber-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="flex items-center mb-12 relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mr-6 shadow-lg text-white">
          <Briefcase className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase text-[#233B72]">{t('rejoignez.tab3_title')}</h2>
      </div>
      
      {submitSuccess ? <SuccessView color="amber" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="email" type="email" placeholder={`${t('quote.form.email')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="ville" placeholder={`${t('quote.form.city')} ciblée *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="apport" placeholder={isFr ? "Apport personnel disponible" : "Available personal contribution"} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="relative">
            <AlignLeft className="absolute left-4 top-5 text-gray-400 w-5 h-5" />
            <textarea name="motivation" placeholder={isFr ? "Décrivez votre projet entrepreneurial..." : "Describe your entrepreneurial project..."} rows={6} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase tracking-widest mt-4">
            {isFr ? "Demander la documentation" : "Request Documentation"}
          </button>
        </form>
      )}
    </div>
  );
}

function ArchitecteForm() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', cabinet: '', message: ''
  });

  return (
    <div className="bg-white rounded-[4rem] shadow-2xl p-8 md:p-20 border-t-8 border-orange-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="flex items-center mb-12 relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mr-6 shadow-lg text-white">
          <Building2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase text-[#233B72]">{t('rejoignez.tab4_title')}</h2>
      </div>
      
      {submitSuccess ? <SuccessView color="orange" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input name="cabinet" placeholder={isFr ? "Nom du cabinet d'architecture *" : "Architecture firm name *"} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="email" type="email" placeholder={isFr ? "Email professionnel *" : "Professional Email *"} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" />
            </div>
          </div>
          <div className="relative">
            <AlignLeft className="absolute left-4 top-5 text-gray-400 w-5 h-5" />
            <textarea name="message" placeholder={isFr ? "Quels sont vos besoins spécifiques (Jumeau numérique, nettoyage...) ?" : "What are your specific needs (Digital twin, cleaning...)?"} rows={6} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 uppercase tracking-widest mt-4">
            {isFr ? "Contacter le service pro" : "Contact Pro Services"}
          </button>
        </form>
      )}
    </div>
  );
}

// --- UTILS ---

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return { ref, isInView };
}

function SuccessView({ color }: { color: string }) {
    const { language } = useLanguage();
    const isFr = language === 'fr';
    
    // Attribution de la couleur pour le bouton/icone
    let bgClass = 'bg-green-500';
    if (color === 'sky') bgClass = 'bg-sky-500';
    if (color === 'amber') bgClass = 'bg-amber-500';
    if (color === 'orange') bgClass = 'bg-orange-500';

    return (
        <div className="text-center py-20 relative z-10">
            <div className={`w-32 h-32 ${bgClass} rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-2xl`}>
              <CheckCircle2 size={64} />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-[#233B72] uppercase tracking-tighter mb-4">
              {isFr ? "Demande envoyée !" : "Request sent!"}
            </h3>
            <p className="text-gray-500 text-xl font-medium">
              {isFr ? "Notre équipe reviendra vers vous très prochainement." : "Our team will get back to you very soon."}
            </p>
        </div>
    );
}
