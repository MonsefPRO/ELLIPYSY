import { useState } from 'react';
import { Shield, Zap, BarChart3, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Hover3DCard } from './Hover3DCard';

export default function DroneBenefits() {
  const { t, language } = useLanguage();
  // État pour gérer quel bloc est ouvert sur mobile (null = tous fermés)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const benefits = [
    {
      id: 'benefit-safety',
      icon: Shield,
      title: t('benefits.safety.title'),
      description: t('benefits.safety.text'),
      color: 'green',
      gradient: 'from-emerald-500 to-green-600',
      bgLight: 'bg-emerald-50',
      borderLight: 'border-emerald-100',
      borderTop: 'border-t-emerald-500'
    },
    {
      id: 'benefit-speed',
      icon: Zap,
      title: t('benefits.speed.title'),
      description: t('benefits.speed.text'),
      color: 'orange',
      gradient: 'from-brand-orange-400 to-red-500',
      bgLight: 'bg-orange-50',
      borderLight: 'border-orange-100',
      borderTop: 'border-t-brand-orange-500'
    },
    {
      id: 'benefit-cost',
      icon: BarChart3,
      title: t('benefits.cost.title'),
      description: t('benefits.cost.text'),
      color: 'blue',
      gradient: 'from-[#233B72] to-blue-600',
      bgLight: 'bg-blue-50',
      borderLight: 'border-blue-100',
      borderTop: 'border-t-[#233B72]'
    }
  ];

  const toggleBenefit = (index: number) => {
    // Si on clique sur celui déjà ouvert, on le ferme, sinon on ouvre le nouveau
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Éléments de décor en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#233B72] font-black text-sm uppercase tracking-widest mb-6">
            <CheckCircle2 className="w-5 h-5 text-brand-orange-500" />
            {language === 'fr' ? "L'Avantage Ellipsys" : "The Ellipsys Advantage"}
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tighter text-[#233B72] leading-tight">
            {language === 'fr' ? 'Pourquoi choisir le' : 'Why choose'} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-red-600">
              {language === 'fr' ? 'nettoyage par drone ?' : 'drone cleaning?'}
            </span>
          </h2>
          
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-justify md:text-center w-full font-medium"
            dangerouslySetInnerHTML={{ __html: t('benefits.summary') }}
          />
        </div>

        {/* GRILLE : Accordon sur mobile, Grille 3 colonnes sur PC */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <Hover3DCard key={index} className="h-full">
                <div
                  id={benefit.id}
                  className={`bg-white rounded-[2rem] shadow-xl md:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100 border-t-8 ${benefit.borderTop} h-full flex flex-col`}
                >
                  {/* HEADER DU BLOC */}
                  <button
                    onClick={() => window.innerWidth < 768 && toggleBenefit(index)}
                    className="w-full flex items-center justify-between md:justify-start md:flex-col md:items-start p-6 md:p-10 text-left cursor-pointer md:cursor-default group focus:outline-none"
                    aria-expanded={isExpanded}
                    aria-label={language === 'fr' ? `Voir les détails pour ${benefit.title}` : `See details for ${benefit.title}`}
                  >
                    <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-0 w-full">
                      <div 
                        className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-0 md:mb-8 shadow-lg bg-gradient-to-br ${benefit.gradient} shrink-0 transition-transform group-hover:scale-110 duration-500`}
                      >
                        <benefit.icon className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-[#233B72] leading-none">
                        {benefit.title}
                      </h3>
                    </div>

                    {/* FLÈCHE : Visible uniquement sur mobile */}
                    <div className={`md:hidden shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${benefit.bgLight} ${benefit.borderLight} border`}>
                      <ChevronDown 
                        className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        style={{ color: benefit.color === 'green' ? '#10b981' : benefit.color === 'orange' ? '#f97316' : '#233B72' }}
                      />
                    </div>
                  </button>

                  {/* DESCRIPTION : Dépliable sur mobile, toujours visible sur PC */}
                  <div 
                    className={`
                      transition-all duration-500 ease-in-out px-6 md:px-10 md:pb-10 md:max-h-none md:opacity-100 md:block flex-grow
                      ${isExpanded ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0 md:max-h-none hidden md:block'}
                    `}
                  >
                    <div className="h-px w-full bg-gray-100 mb-6 md:hidden"></div>
                    <div
                      className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify font-medium"
                      dangerouslySetInnerHTML={{ __html: benefit.description }}
                    />
                  </div>
                </div>
              </Hover3DCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
