import { useState } from 'react';
import { Shield, Zap, BarChart3, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DroneBenefits() {
  const { t } = useLanguage();
  // État pour gérer quel bloc est ouvert sur mobile (null = tous fermés)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const benefits = [
    {
      id: 'benefit-safety',
      icon: Shield,
      title: t('benefits.safety.title'),
      description: t('benefits.safety.text'),
    },
    {
      id: 'benefit-speed',
      icon: Zap,
      title: t('benefits.speed.title'),
      description: t('benefits.speed.text'),
    },
    {
      id: 'benefit-cost',
      icon: BarChart3,
      title: t('benefits.cost.title'),
      description: t('benefits.cost.text'),
    }
  ];

  const toggleBenefit = (index: number) => {
    // Si on clique sur celui déjà ouvert, on le ferme, sinon on ouvre le nouveau
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        {/* TITRE : Ajusté sur deux lignes sur mobile avec <br /> */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
            Pourquoi choisir le <br className="md:hidden" /> nettoyage par drone ?
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed text-justify md:text-center max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t('benefits.summary') }}
          />
        </div>

        {/* GRILLE : Se comporte normalement sur PC (grid), devient une liste d'accordéons sur mobile */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
          {benefits.map((benefit, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={index}
                id={benefit.id}
                className="bg-white rounded-2xl shadow-xl md:shadow-lg overflow-hidden transition-all duration-300 md:hover:-translate-y-2"
              >
                {/* HEADER DU BLOC : Bouton sur mobile, div simple sur PC */}
                <button
                  onClick={() => window.innerWidth < 768 && toggleBenefit(index)}
                  className="w-full flex items-center justify-between md:justify-start md:flex-col md:items-start p-5 md:p-8 text-left cursor-default md:cursor-default group"
                >
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-0 md:mb-6 shadow-md" 
                      style={{ backgroundColor: '#233B72' }}
                    >
                      <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold md:mb-4" style={{ color: '#334786' }}>
                      {benefit.title}
                    </h3>
                  </div>

                  {/* FLÈCHE : Visible uniquement sur mobile */}
                  <ChevronDown 
                    className={`w-5 h-5 text-sky-500 transition-transform duration-300 md:hidden ${isExpanded ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* DESCRIPTION : Dépliable sur mobile, toujours visible sur PC */}
                <div 
                  className={`
                    transition-all duration-300 ease-in-out px-5 md:px-8 md:pb-8 md:max-h-none md:opacity-100 md:block
                    ${isExpanded ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0 md:max-h-none hidden md:block'}
                  `}
                >
                  <p
                    className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify border-t border-gray-50 pt-4 md:border-0 md:pt-0"
                    dangerouslySetInnerHTML={{ __html: benefit.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
