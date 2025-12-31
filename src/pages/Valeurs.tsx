import { ChevronRight, Heart, Award, Leaf, Cpu, CheckCircle, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';

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

interface ValueSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'red' | 'sky' | 'gray' | 'green' | 'blue';
  image: string;
  items: string[];
}

function ValueSection({ icon: Icon, title, description, color, image, items }: ValueSectionProps) {
  const { ref, isInView } = useInView();

  const colorClasses = {
    red: {
      gradient: 'from-red-500 to-orange-600',
      bg: 'from-red-50 to-orange-50',
      border: 'border-red-100',
      text: 'text-red-600',
      icon: 'bg-red-600'
    },
    sky: {
      gradient: 'from-sky-500 to-blue-600',
      bg: 'from-sky-50 to-blue-50',
      border: 'border-sky-100',
      text: 'text-sky-600',
      icon: 'bg-sky-600'
    },
    gray: {
      gradient: 'from-gray-600 to-slate-700',
      bg: 'from-gray-50 to-slate-50',
      border: 'border-gray-200',
      text: 'text-gray-600',
      icon: 'bg-gray-600'
    },
    green: {
      gradient: 'from-green-500 to-emerald-600',
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-100',
      text: 'text-green-600',
      icon: 'bg-green-600'
    },
    blue: {
      gradient: 'from-blue-500 to-indigo-600',
      bg: 'from-blue-50 to-indigo-50',
      border: 'border-blue-100',
      text: 'text-blue-600',
      icon: 'bg-blue-600'
    }
  };

  const colors = colorClasses[color];

  return (
    <section
      ref={ref}
      className={`transform transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          </div>

          <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 border ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300`}>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {description}
            </p>

            <div className="grid gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 font-medium text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const { ref, isInView } = useInView();

  const reasons = [
    { icon: Heart, title: 'Proximité client', color: 'from-pink-500 to-red-500' },
    { icon: CheckCircle, title: 'Bienveillance', color: 'from-green-500 to-emerald-500' },
    { icon: Award, title: 'Rigueur', color: 'from-yellow-500 to-orange-500' },
    { icon: Cpu, title: 'Innovation', color: 'from-blue-500 to-indigo-500' },
    { icon: Leaf, title: 'Produits certifiés', color: 'from-green-600 to-teal-600' },
    { icon: CheckCircle, title: 'Entreprise engagée', color: 'from-sky-500 to-blue-600' }
  ];

  return (
    <section ref={ref} className="w-full px-4 py-12 bg-gradient-to-b from-sky-50/30 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Pourquoi choisir Ellipsys ?
          </h2>
          <p className="text-lg text-gray-600">Les raisons qui font notre différence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3 mx-auto transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Valeurs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <Header />
      <div className="h-[600px] bg-gradient-to-br from-sky-500 to-blue-700 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/70 to-blue-800/70"></div>
        <img
          src="/banniere_page_nos_valeurs.png"
          alt="Nos valeurs - Ellipsys"
          className="absolute inset-0 w-full h-full object-cover opacity-50 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-[slideDown_0.8s_ease-out]">Nos valeurs</h1>
            <p className="text-lg md:text-xl text-sky-100 animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Les drones au service de l'humain
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <div className="container mx-auto max-w-6xl mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-sky-600">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">Nos valeurs</span>
          </nav>

          <section className="text-center mb-6">
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Chez <span className="font-bold text-sky-600">Ellipsys</span>, la technologie est au service de l'humain.
              Nos valeurs guident chacune de nos actions pour des prestations fiables, responsables et de haute qualité.
            </p>
          </section>
        </div>

        <div className="w-full space-y-16 py-8">
          <div className="container mx-auto max-w-7xl px-6">
            <ValueSection
              icon={Shield}
              title="Sécurité"
              description="Nous plaçons la sécurité de vos équipes au cœur de chaque intervention. Lors de chaque opération, un agent au sol accompagne le pilote, établissant un périmètre de sécurité pour garantir que l'intervention se déroule sans risque. Toutes nos actions respectent les normes et réglementations en vigueur, assurant un nettoyage par drone sûr, fiable et maîtrisé."
              color="red"
              image="/security.png" 
              items={[
                'Conformité aux normes en vigueur',
                'Assurance responsabilité civile',
                'Pilotes certifiés et qualifiés',
                'Protocoles de sécurité rigoureux'
              ]}
            />
          </div>

          <div className="container mx-auto max-w-7xl px-6">
            <ValueSection
              icon={Award}
              title="Rigueur"
              description="Nous faisons de la qualité notre priorité. Grâce à des méthodes structurées et rigoureuses, chaque intervention par drone est réalisée avec précision, fiabilité et résultats irréprochables."
              color="gray"
              image="/rigueur.png"
              items={[
                'Sérieux professionnel',
                'Standards élevés',
                'Méthodes éprouvées',
                'Solutions pérennes'
              ]}
            />
          </div>

          <div className="container mx-auto max-w-7xl px-6">
            <ValueSection
              icon={Heart}
              title="Bienveillance"
              description="Nous plaçons la relation client au cœur de chaque projet, avec écoute attentive, accompagnement personnalisé, transparence totale et un suivi dédié à chaque étape."
              color="sky"
              image="/bienveillance.png" 
              items={[
                'Écoute active de vos besoins',
                'Transparence totale',
                'Suivi personnalisé',
                'Disponibilité garantie'
              ]}
            />
          </div>

          <div className="container mx-auto max-w-7xl px-6">
            <ValueSection
              icon={Leaf}
              title="Engagement responsable"
              description="Engagement environnemental au cœur de nos pratiques. Produits respectueux et démarche durable."
              color="green"
              image="/eco.png" 
              items={[
                'Produits éco-responsable',
                'Respect environnemental',
                'Approche durable',
                'Empreinte minimale'
              ]}
            />
          </div>

          <div className="container mx-auto max-w-7xl px-6">
            <ValueSection
              icon={Cpu}
              title="Technologie française"
              description="Innovation dans notre ADN. Drones français, technologies avancées, excellence et sécurité maximale."
              color="blue" 
              image="/fr.png"
              items={[
                'Drones fabriqués en France',
                'Innovation constante',
                'Sécurité maximale',
                'Savoir-faire français'
              ]}
            />
          </div>
        </div>

        <WhyChooseSection />

        <div className="container mx-auto max-w-6xl px-4">
          <section className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 animate-[gradient_8s_ease_infinite]"></div>
            <img
              src="/reji.png" 
              alt="Contactez-nous"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative p-8 md:p-10 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4 animate-[bounce_2s_ease-in-out_infinite]">
                  <Mail className="w-10 h-10 mx-auto" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Prêt à travailler avec nous ?
                </h2>
                <p className="text-base md:text-lg text-sky-100 mb-6">
                  Découvrez comment nos valeurs font la différence pour votre projet.
                </p>
                <Link
                  to="/#contact"
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-sky-600 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">Contactez Ellipsys</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
