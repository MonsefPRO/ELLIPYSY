import { ChevronRight, Heart, Award, Leaf, Cpu, CheckCircle, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import { Hover3DCard } from '../components/Hover3DCard';
import { ScrollReveal } from '../components/ScrollReveal';

// On utilise la même structure de couleur que dans Prestations pour l'unité visuelle
const getColorClasses = (color: string) => {
  const colors: { [key: string]: { gradient: string; text: string; bg: string; border: string } } = {
    red: { gradient: 'from-red-500 to-rose-600', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    sky: { gradient: 'from-sky-500 to-blue-600', text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
    gray: { gradient: 'from-gray-600 to-slate-700', text: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-200' },
    green: { gradient: 'from-green-500 to-emerald-600', text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    blue: { gradient: 'from-blue-500 to-indigo-600', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' }
  };
  return colors[color] || colors.sky;
};

export default function Valeurs() {
  const valeurs = [
    {
      id: 'securite',
      title: 'Sécurité',
      description: "Nous plaçons la sécurité de vos équipes au cœur de chaque intervention. Lors de chaque opération, un agent au sol accompagne le pilote, établissant un périmètre de sécurité pour garantir que l'intervention se déroule sans risque.",
      image: '/nnewsecu.png',
      icon: Shield,
      color: 'red',
      items: ['Conformité aux normes en vigueur', 'Assurance responsabilité civile', 'Pilotes certifiés et qualifiés', 'Protocoles de sécurité rigoureux']
    },
    {
      id: 'rigueur',
      title: 'Rigueur',
      description: "Nous faisons de la qualité notre priorité. Grâce à des méthodes structurées et rigoureuses, chaque intervention par drone est réalisée avec précision, fiabilité et résultats irréprochables.",
      image: '/newrig.png',
      icon: Award,
      color: 'gray',
      items: ['Sérieux professionnel', 'Standards élevés', 'Méthodes éprouvées', 'Solutions pérennes']
    },
    {
      id: 'bienveillance',
      title: 'Bienveillance',
      description: "Nous plaçons la relation client au cœur de chaque projet, avec écoute attentive, accompagnement personnalisé, transparence totale et un suivi dédié à chaque étape.",
      image: '/bienveillance.png',
      icon: Heart,
      color: 'sky',
      items: ['Écoute active de vos besoins', 'Transparence totale', 'Suivi personnalisé', 'Disponibilité garantie']
    },
    {
      id: 'eco',
      title: 'Eco-responsable',
      description: "Engagement environnemental au cœur de nos pratiques. Produits respectueux et démarche durable pour une empreinte carbone minimale lors de nos interventions.",
      image: '/eco.png',
      icon: Leaf,
      color: 'green',
      items: ['Produits éco-responsable', 'Respect environnemental', 'Approche durable', 'Empreinte minimale']
    },
    {
      id: 'technologie',
      title: 'Technologie française',
      description: "Innovation dans notre ADN. Drones français, technologies avancées, excellence et sécurité maximale pour un savoir-faire unique.",
      image: '/fr.png',
      icon: Cpu,
      color: 'blue',
      items: ['Drones fabriqués en France', 'Innovation constante', 'Sécurité maximale', 'Savoir-faire français']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* BANNIÈRE IDENTIQUE AUX PRESTATIONS */}
      <section className="relative pt-20 pb-10 overflow-hidden flex items-center h-[400px]">
        <HeroCarousel />
        <div className="relative z-10 w-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg" style={{ color: '#233B72' }}>Nos Valeurs</h1>
          <p className="text-xl md:text-2xl drop-shadow-md font-semibold" style={{ color: '#233B72' }}>Les drones au service de l'humain</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-12">
          <Link to="/" className="hover:text-sky-600">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Nos valeurs</span>
        </nav>

        <div className="space-y-16">
          {valeurs.map((valeur, index) => {
            const Icon = valeur.icon;
            const colors = getColorClasses(valeur.color);
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={valeur.id} delay={index * 0.1}>
                <Hover3DCard className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8 lg:p-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#233B72' }}>{valeur.title}</h2>

                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    {/* IMAGE (Même style que Prestations) */}
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                      <div className="h-[400px] relative overflow-hidden rounded-2xl shadow-md">
                        <img
                          src={valeur.image}
                          alt={valeur.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TEXTE ET LISTE (Même style que Prestations) */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <p className="text-gray-600 leading-relaxed text-lg text-justify">{valeur.description}</p>
                      
                      <div className={`${colors.bg} ${colors.border} border rounded-xl p-6`}>
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">Nos engagements :</h3>
                        <ul className="space-y-3">
                          {valeur.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className={`w-6 h-6 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-700 text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Hover3DCard>
              </ScrollReveal>
            );
          })}
        </div>
        
        {/* SECTION FINALE */}
        <div className="mt-20 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <Mail className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à travailler avec nous ?</h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">Découvrez comment nos valeurs font la différence pour votre projet de maintenance par drone.</p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
              Contactez Ellipsys
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
