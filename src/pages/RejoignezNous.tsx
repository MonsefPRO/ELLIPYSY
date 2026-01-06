import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Users, Heart, Award, Send, FileText, Building2, Handshake, Target, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useSecureForm } from '../hooks/useSecureForm';
import { HeroCarousel } from '../components/HeroCarousel';

const FloatingOrb = ({ delay }: { delay: number }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-sky-400 to-blue-600 opacity-10"
    style={{
      animation: `float ${6 + delay}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      width: '200px',
      height: '200px',
    }}
  />
);

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}

function WhyJoinSection() {
  const { ref, isInView } = useInView();

  const benefits = [
    {
      icon: Heart,
      title: 'Équipe passionnée',
      description: 'Rejoignez une équipe engagée et bienveillante où chaque membre compte',
      color: 'from-pink-500 to-red-500',
      bgColor: 'from-pink-50 to-red-50'
    },
    {
      icon: Award,
      title: 'Innovation technologique',
      description: 'Travaillez avec des technologies de pointe dans le secteur des drones',
      color: 'from-sky-500 to-blue-600',
      bgColor: 'from-sky-50 to-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'Opportunités de croissance',
      description: 'Développez vos compétences et évoluez dans un marché en pleine expansion',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Target,
      title: 'Impact positif',
      description: 'Contribuez à des solutions écologiques et innovantes pour l\'environnement',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Users,
      title: 'Culture collaborative',
      description: 'Participez à un environnement de travail stimulant et collaboratif',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Sparkles,
      title: 'Formation continue',
      description: 'Accédez à des formations régulières et développez votre expertise',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50'
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-600 leading-relaxed text-lg text-center">
            Découvrez les avantages de faire partie de l'équipe Ellipsys
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group h-full bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg text-justify">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RejoignezNous() {
  const [activeTab, setActiveTab] = useState<'candidature' | 'apporteur' | 'franchisee' | 'architecte'>('candidature');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onBlueBanner={false} />
      <section className="relative pt-32 pb-20 overflow-hidden flex items-center min-h-[500px]">
        <HeroCarousel />
        
        <div className="relative z-10 w-full text-center text-white px-4">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-semibold mb-6">
            Rejoignez l'aventure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Rejoignez-nous
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 drop-shadow-md">
            Développons ensemble l'avenir des services par drone
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-12">
          <Link to="/" className="hover:text-sky-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Rejoignez-nous</span>
        </nav>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { tab: 'candidature', icon: FileText, title: 'Candidature spontanée', desc: 'Rejoignez notre équipe de professionnels passionnés', color: 'green', delay: 0 },
            { tab: 'apporteur', icon: Handshake, title: 'Apporteur d\'affaires & Prescripteurs', desc: 'Devenez partenaire et générez des revenus complémentaires', color: 'sky', delay: 1 },
            { tab: 'franchisee', icon: Briefcase, title: 'Franchisé', desc: 'Développez votre propre activité avec notre marque', color: 'amber', delay: 2 },
            { tab: 'architecte', icon: Building2, title: 'Groupe d\'architectes', desc: 'Intégrez notre réseau de partenaires architectes', color: 'orange', delay: 3 }
          ].map(({ tab, icon: Icon, title, desc, color, delay }) => {
            const colorMap = {
              green: { border: 'green-500', bg: 'from-green-50 to-emerald-50', gradient: 'from-green-500 to-emerald-600', hover: 'green-300', text: 'green-600' },
              sky: { border: 'sky-500', bg: 'from-sky-50 to-blue-50', gradient: 'from-sky-500 to-blue-600', hover: 'sky-300', text: 'sky-600' },
              amber: { border: 'amber-500', bg: 'from-amber-50 to-yellow-50', gradient: 'from-amber-500 to-yellow-600', hover: 'amber-300', text: 'amber-600' },
              orange: { border: 'orange-500', bg: 'from-orange-50 to-red-50', gradient: 'from-orange-500 to-red-600', hover: 'orange-300', text: 'orange-600' }
            };
            const c = colorMap[color as keyof typeof colorMap];
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                style={{
                  animation: `slideInUp 0.6s ease-out ${delay * 0.1}s both`,
                  borderColor: color === 'green' ? '#22c55e' : color === 'sky' ? '#0ea5e9' : color === 'amber' ? '#f59e0b' : '#f97316',
                  backgroundColor: isActive ? (color === 'green' ? '#f0fdf4' : color === 'sky' ? '#f0f9ff' : color === 'amber' ? '#fffbeb' : '#fff7ed') : '#ffffff'
                }}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 transform overflow-hidden ${
                  isActive
                    ? `bg-gradient-to-br shadow-2xl scale-105`
                    : `bg-white hover:shadow-2xl hover:scale-105`
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-500 ${
                    isActive
                      ? `bg-gradient-to-br ${c.gradient} shadow-lg`
                      : `bg-gray-100 group-hover:bg-${color}-100 group-hover:scale-110`
                  }`}>
                    <Icon className={`w-8 h-8 ${isActive ? 'text-white' : `text-gray-400 group-hover:text-${c.text}`} transition-colors duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify group-hover:text-gray-700 transition-colors duration-300">{desc}</p>
                  <div className={`mt-4 flex items-center gap-2 text-${c.text} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    <span className="text-sm font-semibold">En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 animate-fadeIn">
          {activeTab === 'candidature' && <CandidatureSpontaneeForm />}
          {activeTab === 'apporteur' && <ApporteurAffairesForm />}
          {activeTab === 'franchisee' && <FranchiseeForm />}
          {activeTab === 'architecte' && <ArchitecteForm />}
        </div>
      </div>

      <WhyJoinSection />

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Ellipsys. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ApporteurAffairesForm() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    message: ''
  });

  const onSubmit = async (data: typeof formData) => {
    console.log('Apporteur d\'affaires:', data);
  };

  return (
    <div className="bg-gradient-to-br from-white to-sky-50 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-sky-100 hover:shadow-3xl transition-all duration-500 animate-fadeIn" style={{
      animation: 'slideInUp 0.6s ease-out'
    }}>
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg animate-glow">
            <Handshake className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Devenez apporteur d'affaires</h2>
            <p className="text-sky-600 font-medium">Générez des revenus complémentaires</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg text-justify">
          Vous connaissez des professionnels ou particuliers qui pourraient bénéficier de nos services ?
          Devenez partenaire et bénéficiez d'une rémunération attractive pour chaque affaire apportée.
        </p>
      </div>

      {submitSuccess ? (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Demande envoyée !</h3>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">Nous vous contacterons très prochainement pour discuter de notre partenariat.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.nom && <p className="text-red-600 text-sm mt-1">{errors.nom}</p>}
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.prenom && <p className="text-red-600 text-sm mt-1">{errors.prenom}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.telephone && <p className="text-red-600 text-sm mt-1">{errors.telephone}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                Entreprise
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-2">
                Secteur d'activité
              </label>
              <input
                type="text"
                id="secteur"
                name="secteur"
                value={formData.secteur}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="Parlez-nous de votre réseau et de votre motivation..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-5 px-8 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 duration-300 text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma candidature
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function CandidatureSpontaneeForm() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: '',
    experience: '',
    motivation: ''
  });

  const onSubmit = async (data: typeof formData) => {
    console.log('Candidature spontanée:', data);
  };

  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-green-100 hover:shadow-3xl transition-all duration-500 animate-fadeIn" style={{
      animation: 'slideInUp 0.6s ease-out'
    }}>
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4 shadow-lg animate-glow">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Candidature spontanée</h2>
            <p className="text-green-600 font-medium">Rejoignez notre équipe</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg text-justify">
          Vous êtes passionné par les nouvelles technologies et souhaitez rejoindre une équipe dynamique ?
          Envoyez-nous votre candidature spontanée !
        </p>
      </div>

      {submitSuccess ? (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Candidature reçue !</h3>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">Nous examinerons votre profil avec attention et vous contacterons rapidement.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.nom && <p className="text-red-600 text-sm mt-1">{errors.nom}</p>}
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.prenom && <p className="text-red-600 text-sm mt-1">{errors.prenom}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.telephone && <p className="text-red-600 text-sm mt-1">{errors.telephone}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="poste" className="block text-sm font-medium text-gray-700 mb-2">
                Poste recherché *
              </label>
              <input
                type="text"
                id="poste"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Ex: Pilote de drone, Commercial, etc."
              />
              {errors.poste && <p className="text-red-600 text-sm mt-1">{errors.poste}</p>}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Années d'expérience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Ex: 3 ans"
              />
            </div>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
              Lettre de motivation *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="Parlez-nous de votre parcours, vos compétences et votre motivation..."
            ></textarea>
            {errors.motivation && <p className="text-red-600 text-sm mt-1">{errors.motivation}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-8 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 duration-300 text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma candidature
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function FranchiseeForm() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    localisation: '',
    experience: '',
    motivation: '',
    capital: ''
  });

  const onSubmit = async (data: typeof formData) => {
    console.log('Franchisé:', data);
  };

  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-amber-100 hover:shadow-3xl transition-all duration-500 animate-fadeIn" style={{
      animation: 'slideInUp 0.6s ease-out'
    }}>
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mr-4 shadow-lg animate-glow">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Devenir franchisé</h2>
            <p className="text-amber-600 font-medium">Développez votre propre activité</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg text-justify">
          Vous êtes entrepreneur et souhaitez développer une activité dans le secteur des services par drone ?
          Devenez franchisé Ellipsys et bénéficiez de notre expertise et de notre réseau établi.
        </p>
      </div>

      {submitSuccess ? (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Demande reçue !</h3>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">Nous vous contacterons rapidement pour discuter de votre projet de franchise.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.nom && <p className="text-red-600 text-sm mt-1">{errors.nom}</p>}
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.prenom && <p className="text-red-600 text-sm mt-1">{errors.prenom}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.telephone && <p className="text-red-600 text-sm mt-1">{errors.telephone}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                Entreprise ou nom commercial *
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.entreprise && <p className="text-red-600 text-sm mt-1">{errors.entreprise}</p>}
            </div>

            <div>
              <label htmlFor="localisation" className="block text-sm font-medium text-gray-700 mb-2">
                Localisation souhaitée *
              </label>
              <input
                type="text"
                id="localisation"
                name="localisation"
                value={formData.localisation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Région, département"
              />
              {errors.localisation && <p className="text-red-600 text-sm mt-1">{errors.localisation}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Expérience professionnelle *
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Ex: 10 ans en tant que commercial"
              />
              {errors.experience && <p className="text-red-600 text-sm mt-1">{errors.experience}</p>}
            </div>

            <div>
              <label htmlFor="capital" className="block text-sm font-medium text-gray-700 mb-2">
                Capital disponible
              </label>
              <input
                type="text"
                id="capital"
                name="capital"
                value={formData.capital}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Ex: 50 000 à 100 000 €"
              />
            </div>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
              Votre projet et motivation *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="Parlez-nous de votre projet, vos objectifs et pourquoi vous souhaitez rejoindre Ellipsys..."
            ></textarea>
            {errors.motivation && <p className="text-red-600 text-sm mt-1">{errors.motivation}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold py-5 px-8 rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 duration-300 text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Envoyer ma candidature
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function ArchitecteForm() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    cabinet: '',
    siret: '',
    localisation: '',
    specialites: '',
    message: ''
  });

  const onSubmit = async (data: typeof formData) => {
    console.log('Architecte:', data);
  };

  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-orange-100 hover:shadow-3xl transition-all duration-500 animate-fadeIn" style={{
      animation: 'slideInUp 0.6s ease-out'
    }}>
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mr-4 shadow-lg animate-glow">
            <Building2 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Rejoignez notre groupe d'architectes</h2>
            <p className="text-orange-600 font-medium">Partenariat exclusif</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed text-lg text-justify mb-6">
          Vous êtes architecte et souhaitez offrir des services innovants à vos clients ?
          Intégrez notre réseau de partenaires et bénéficiez de nos expertises en drone pour vos projets.
        </p>
        <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 shadow-inner">
          <h3 className="font-bold text-orange-900 mb-4 text-lg flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Avantages du partenariat
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start group">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600 leading-relaxed text-lg text-justify">Inspections de toitures et façades par drone pour vos projets</span>
            </li>
            <li className="flex items-start group">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600 leading-relaxed text-lg text-justify">Modélisation 3D et photogrammétrie pour diagnostics précis</span>
            </li>
            <li className="flex items-start group">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600 leading-relaxed text-lg text-justify">Tarifs préférentiels réservés aux partenaires</span>
            </li>
            <li className="flex items-start group">
              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600 leading-relaxed text-lg text-justify">Support technique dédié et réactivité garantie</span>
            </li>
          </ul>
        </div>
      </div>

      {submitSuccess ? (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-3">Demande envoyée !</h3>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">Nous vous contacterons rapidement pour échanger sur notre partenariat.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.nom && <p className="text-red-600 text-sm mt-1">{errors.nom}</p>}
            </div>

            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.prenom && <p className="text-red-600 text-sm mt-1">{errors.prenom}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.telephone && <p className="text-red-600 text-sm mt-1">{errors.telephone}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cabinet" className="block text-sm font-medium text-gray-700 mb-2">
                Nom du cabinet *
              </label>
              <input
                type="text"
                id="cabinet"
                name="cabinet"
                value={formData.cabinet}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              {errors.cabinet && <p className="text-red-600 text-sm mt-1">{errors.cabinet}</p>}
            </div>

            <div>
              <label htmlFor="siret" className="block text-sm font-medium text-gray-700 mb-2">
                SIRET
              </label>
              <input
                type="text"
                id="siret"
                name="siret"
                value={formData.siret}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="localisation" className="block text-sm font-medium text-gray-700 mb-2">
                Localisation *
              </label>
              <input
                type="text"
                id="localisation"
                name="localisation"
                value={formData.localisation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Ville, département"
              />
              {errors.localisation && <p className="text-red-600 text-sm mt-1">{errors.localisation}</p>}
            </div>

            <div>
              <label htmlFor="specialites" className="block text-sm font-medium text-gray-700 mb-2">
                Spécialités
              </label>
              <input
                type="text"
                id="specialites"
                name="specialites"
                value={formData.specialites}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Ex: Rénovation, Construction neuve..."
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="Parlez-nous de vos projets et de vos besoins..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-5 px-8 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 duration-300 text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Building2 className="w-5 h-5 mr-2" />
                Rejoindre le réseau
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
