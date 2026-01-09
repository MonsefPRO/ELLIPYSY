import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Users, Heart, Award, Send, FileText, Building2, Handshake, Target, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useSecureForm } from '../hooks/useSecureForm';
import { HeroCarousel } from '../components/HeroCarousel';

// --- SECTIONS DE SOUTIEN ---

function WhyJoinSection() {
  const { ref, isInView } = useInView();
  const benefits = [
    { icon: Heart, title: 'Équipe passionnée', description: 'Rejoignez une équipe engagée et bienveillante où chaque membre compte', color: 'from-pink-500 to-red-500' },
    { icon: Award, title: 'Innovation technologique', description: 'Travaillez avec des technologies de pointe dans le secteur des drones', color: 'from-sky-500 to-blue-600' },
    { icon: TrendingUp, title: 'Opportunités de croissance', description: 'Développez vos compétences et évoluez dans un marché en pleine expansion', color: 'from-green-500 to-emerald-600' },
    { icon: Target, title: 'Impact positif', description: 'Contribuez à des solutions écologiques et innovantes pour l\'environnement', color: 'from-orange-500 to-red-600' },
    { icon: Users, title: 'Culture collaborative', description: 'Participez à un environnement de travail stimulant et collaboratif', color: 'from-purple-500 to-pink-600' },
    { icon: Sparkles, title: 'Formation continue', description: 'Accédez à des formations régulières et développez votre expertise', color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233B72] mb-4">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-600 text-lg">Découvrez les avantages de faire partie de l'équipe Ellipsys</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#233B72] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{benefit.description}</p>
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
  const [activeTab, setActiveTab] = useState<'candidature' | 'apporteur' | 'franchisee' | 'architecte'>('candidature');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative pt-32 pb-16 overflow-hidden flex items-center h-[350px] md:h-[400px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
        <div className="relative z-20 w-full text-center px-4 text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-2xl">Rejoignez-nous</h1>
          <p className="text-lg md:text-2xl font-semibold">Les drones au service de l'humain</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        {/* BLOCS DE SELECTION AVEC COULEURS ORIGINALES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { tab: 'candidature', icon: FileText, title: 'Candidature', color: 'green', hex: '#22c55e' },
            { tab: 'apporteur', icon: Handshake, title: 'Apporteur', color: 'sky', hex: '#0ea5e9' },
            { tab: 'franchisee', icon: Briefcase, title: 'Franchisé', color: 'amber', hex: '#f59e0b' },
            { tab: 'architecte', icon: Building2, title: 'Architecte', color: 'orange', hex: '#f97316' }
          ].map(({ tab, icon: Icon, title, color, hex }) => {
            const isActive = activeTab === tab;
            const colorClasses: any = {
                green: 'bg-green-50 border-green-500',
                sky: 'bg-sky-50 border-sky-500',
                amber: 'bg-amber-50 border-amber-500',
                orange: 'bg-orange-50 border-orange-500'
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`p-4 md:p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center text-center ${
                  isActive ? `${colorClasses[color]} shadow-xl scale-105` : 'bg-white border-gray-100 opacity-70'
                }`}
              >
                <div className={`w-12 h-12 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 transition-all shadow-md bg-white border border-gray-100`}>
                  {/* ICÔNE COULEUR BLEU FONCÉ ELLIPSYS */}
                  <Icon className="w-6 h-6 md:w-10 md:h-10 text-[#233B72]" />
                </div>
                <h3 className={`text-[10px] md:text-lg font-bold uppercase tracking-tight ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* AFFICHAGE DES FORMULAIRES SELON L'ONGLET ACTIF */}
        <div className="mt-8 transition-all duration-500 max-w-4xl mx-auto">
          {activeTab === 'candidature' && <CandidatureSpontaneeForm />}
          {activeTab === 'apporteur' && <ApporteurAffairesForm />}
          {activeTab === 'franchisee' && <FranchiseeForm />}
          {activeTab === 'architecte' && <ArchitecteForm />}
        </div>
      </div>

      <WhyJoinSection />

      <footer className="bg-gray-950 text-white py-12 px-4 text-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Ellipsys Solutions. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

// --- FORMULAIRES COMPLETS ORIGINAUX ---

function CandidatureSpontaneeForm() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', poste: '', experience: '', motivation: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-green-100 animate-fadeIn">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4 shadow-lg text-white"><FileText /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Candidature spontanée</h2>
      </div>
      {submitSuccess ? <SuccessView color="green" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-custom" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-custom" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <input name="poste" placeholder="Poste recherché *" onChange={handleChange} required className="input-field-custom" />
          <textarea name="motivation" placeholder="Votre motivation *" rows={5} onChange={handleChange} required className="input-field-custom"></textarea>
          <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg">Envoyer mon profil</button>
        </form>
      )}
    </div>
  );
}

function ApporteurAffairesForm() {
  const { formData, handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', entreprise: '', secteur: '', message: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-sky-50 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-sky-100 animate-fadeIn">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg text-white"><Handshake /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Devenir apporteur d'affaires</h2>
      </div>
      {submitSuccess ? <SuccessView color="sky" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-custom" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-custom" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <textarea name="message" placeholder="Votre message..." rows={4} onChange={handleChange} className="input-field-custom"></textarea>
          <button className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg">Envoyer la demande</button>
        </form>
      )}
    </div>
  );
}

function FranchiseeForm() {
  const { formData, handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', ville: '', apport: '', experience: '', motivation: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-amber-100 animate-fadeIn">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mr-4 shadow-lg text-white"><Briefcase /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Devenir franchisé</h2>
      </div>
      {submitSuccess ? <SuccessView color="amber" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-custom" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-custom" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input name="ville" placeholder="Ville souhaitée *" onChange={handleChange} required className="input-field-custom" />
            <input name="apport" placeholder="Apport personnel" onChange={handleChange} className="input-field-custom" />
          </div>
          <textarea name="motivation" placeholder="Parlez-nous de votre projet..." rows={4} onChange={handleChange} className="input-field-custom"></textarea>
          <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 shadow-lg">Demander une documentation</button>
        </form>
      )}
    </div>
  );
}

function ArchitecteForm() {
  const { formData, handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', cabinet: '', localisation: '', specialites: '', message: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-orange-100 animate-fadeIn">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mr-4 shadow-lg text-white"><Building2 /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Groupe d'architectes</h2>
      </div>
      {submitSuccess ? <SuccessView color="orange" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-custom" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <input name="cabinet" placeholder="Nom du cabinet *" onChange={handleChange} required className="input-field-custom" />
          <div className="grid md:grid-cols-2 gap-6">
            <input name="email" type="email" placeholder="Email professionnel *" onChange={handleChange} required className="input-field-custom" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-custom" />
          </div>
          <textarea name="message" placeholder="Quels sont vos besoins en drone ?" rows={4} onChange={handleChange} className="input-field-custom"></textarea>
          <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 shadow-lg">Rejoindre le réseau</button>
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
    const bg = color === 'green' ? 'bg-green-500' : color === 'sky' ? 'bg-sky-500' : color === 'amber' ? 'bg-amber-500' : 'bg-orange-500';
    return (
        <div className="text-center py-10">
            <div className={`w-20 h-20 ${bg} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl shadow-lg animate-bounce`}>✓</div>
            <h3 className="text-2xl font-bold">Demande envoyée !</h3>
            <p className="text-gray-600 mt-2">Nous reviendrons vers vous dans les plus brefs délais.</p>
        </div>
    );
}

// Ajoute ce style dans ton index.css ou un fichier style global
// .input-field-custom { @apply w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl outline-none focus:border-[#233B72] focus:bg-white transition-all text-sm md:text-base; }
