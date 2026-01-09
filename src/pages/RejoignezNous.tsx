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
    <section ref={ref} className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233B72] mb-4">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-600 text-sm md:text-lg">Découvrez les avantages de faire partie de l'équipe Ellipsys</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <section className="relative pt-32 pb-16 overflow-hidden flex items-center h-[350px] md:h-[400px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
        
        <div className="relative z-20 w-full text-center px-4">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-[10px] md:text-sm font-semibold mb-4 uppercase tracking-widest">
            Rejoignez l'aventure
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-2xl text-white">
            Rejoignez-nous
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            Les drones au service de l'humain
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-600 mb-8 md:mb-12">
          <Link to="/" className="hover:text-sky-600 transition-colors font-medium">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#233B72] font-bold">Rejoignez-nous</span>
        </nav>

        {/* ONGLETS / BLOCS DE SELECTION : 2 colonnes sur mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
          {[
            { tab: 'candidature', icon: FileText, title: 'Candidature' },
            { tab: 'apporteur', icon: Handshake, title: 'Apporteur' },
            { tab: 'franchisee', icon: Briefcase, title: 'Franchisé' },
            { tab: 'architecte', icon: Building2, title: 'Architecte' }
          ].map(({ tab, icon: Icon, title }) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`p-5 md:p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center text-center group ${
                activeTab === tab 
                ? 'bg-sky-50 border-[#233B72] shadow-xl scale-105' 
                : 'bg-white border-gray-100 hover:border-sky-200'
              }`}
            >
              <div className={`w-12 h-12 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 transition-all shadow-md ${
                activeTab === tab ? 'bg-white' : 'bg-gray-50'
              }`}>
                {/* ICONES FORCÉES EN BLEU FONCÉ #233B72 */}
                <Icon className="w-6 h-6 md:w-10 md:h-10 text-[#233B72]" />
              </div>
              <h3 className={`text-xs md:text-xl font-bold uppercase tracking-tight ${activeTab === tab ? 'text-[#233B72]' : 'text-gray-500'}`}>
                {title}
              </h3>
            </button>
          ))}
        </div>

        {/* FORMULAIRES ACTIFS */}
        <div className="mt-8 transition-all duration-500 max-w-4xl mx-auto">
          {activeTab === 'candidature' && <CandidatureSpontaneeForm />}
          {activeTab === 'apporteur' && <ApporteurAffairesForm />}
          {activeTab === 'franchisee' && <FranchiseeForm />}
          {activeTab === 'architecte' && <ArchitecteForm />}
        </div>
      </div>

      <WhyJoinSection />

      <footer className="bg-[#0f172a] text-white py-12 px-4 text-center">
        <p className="text-gray-500 text-xs md:text-sm">&copy; {new Date().getFullYear()} Ellipsys Solutions. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

// --- FORMULAIRES COMPLETS RÉINTÉGRÉS ET RESPONSIVES ---

function ApporteurAffairesForm() {
  const { formData, handleChange, handleSubmit, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', entreprise: '', secteur: '', message: '' });
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-sky-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#233B72] flex items-center justify-center text-white shadow-lg"><Handshake /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#233B72]">Devenir apporteur d'affaires</h2>
      </div>
      {submitSuccess ? <SuccessView /> : (
        <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-custom" />
          <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-custom" />
          <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-custom" />
          <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-custom" />
          <input name="entreprise" placeholder="Entreprise" onChange={handleChange} className="input-field-custom" />
          <input name="secteur" placeholder="Secteur d'activité" onChange={handleChange} className="input-field-custom" />
          <textarea name="message" placeholder="Votre message..." className="md:col-span-2 input-field-custom h-32" onChange={handleChange}></textarea>
          <button className="md:col-span-2 w-full bg-[#233B72] text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-900 transition-all shadow-lg">Envoyer la demande</button>
        </form>
      )}
    </div>
  );
}

function CandidatureSpontaneeForm() {
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', poste: '', motivation: '' });
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-green-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#233B72] flex items-center justify-center text-white shadow-lg"><FileText /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#233B72]">Candidature Spontanée</h2>
      </div>
      {submitSuccess ? <SuccessView /> : (
        <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input placeholder="Nom *" className="input-field-custom" required />
          <input placeholder="Prénom *" className="input-field-custom" required />
          <input placeholder="Email *" className="input-field-custom" required />
          <input placeholder="Téléphone *" className="input-field-custom" required />
          <input placeholder="Poste recherché *" className="md:col-span-2 input-field-custom" required />
          <textarea placeholder="Votre motivation..." className="md:col-span-2 input-field-custom h-32" required></textarea>
          <button className="md:col-span-2 w-full bg-[#233B72] text-white py-4 rounded-xl font-bold text-lg shadow-lg">Envoyer mon profil</button>
        </form>
      )}
    </div>
  );
}

function FranchiseeForm() {
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', ville: '', apport: '', message: '' });
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-amber-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#233B72] flex items-center justify-center text-white shadow-lg"><Briefcase /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#233B72]">Devenir Franchisé</h2>
      </div>
      {submitSuccess ? <SuccessView /> : (
        <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input placeholder="Nom *" className="input-field-custom" required />
          <input placeholder="Prénom *" className="input-field-custom" required />
          <input placeholder="Email *" className="input-field-custom" required />
          <input placeholder="Téléphone *" className="input-field-custom" required />
          <input placeholder="Ville d'implantation souhaitée *" className="input-field-custom" required />
          <input placeholder="Apport personnel disponible (ex: 30k€)" className="input-field-custom" />
          <textarea placeholder="Décrivez votre projet..." className="md:col-span-2 input-field-custom h-32"></textarea>
          <button className="md:col-span-2 w-full bg-[#233B72] text-white py-4 rounded-xl font-bold text-lg shadow-lg">Demander une documentation</button>
        </form>
      )}
    </div>
  );
}

function ArchitecteForm() {
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', cabinet: '', message: '' });
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-orange-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#233B72] flex items-center justify-center text-white shadow-lg"><Building2 /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#233B72]">Partenariat Architecte</h2>
      </div>
      {submitSuccess ? <SuccessView /> : (
        <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input placeholder="Nom *" className="input-field-custom" required />
          <input placeholder="Prénom *" className="input-field-custom" required />
          <input placeholder="Nom du cabinet *" className="input-field-custom" required />
          <input placeholder="Ville *" className="input-field-custom" required />
          <input placeholder="Email professionnel *" className="md:col-span-2 input-field-custom" required />
          <textarea placeholder="Quels sont vos besoins en drone (Inspection, Thermographie...) ?" className="md:col-span-2 input-field-custom h-32"></textarea>
          <button className="md:col-span-2 w-full bg-[#233B72] text-white py-4 rounded-xl font-bold text-lg shadow-lg">Rejoindre le réseau</button>
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

function SuccessView() {
    return <div className="text-center py-10 px-4"><div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-lg animate-bounce">✓</div><h3 className="text-xl md:text-2xl font-bold text-[#233B72]">Demande envoyée avec succès !</h3><p className="mt-2 text-gray-500">Nos équipes reviendront vers vous sous 48h.</p></div>
}

// CSS Inline simulé pour les champs de texte
const inputStyle = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#233B72] focus:bg-white transition-all text-sm md:text-base placeholder-gray-400";
// Note : J'utilise className="input-field-custom" dans le code, assurez-vous d'ajouter ce style dans votre CSS global ou remplacez-le par les classes Tailwind ci-dessus.
