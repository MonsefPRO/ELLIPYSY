import { Shield, Clock, TrendingDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DroneBenefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t('benefits.safety.title'),
      description: t('benefits.safety.text'),
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: t('benefits.speed.title'),
      description: t('benefits.speed.text'),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingDown,
      title: t('benefits.cost.title'),
      description: t('benefits.cost.text'),
      color: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t('benefits.title')}
          </h2>
          <p
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('benefits.summary') }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {benefit.title}
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              />
            </div>
          ))}
        </div>

      </div>

      <div className="mt-16 bg-gradient-to-br from-white to-sky-50/30 shadow-2xl border-y-2 border-sky-100">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-3">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-semibold mb-2">
                Innovation
              </div>
              <p
                className="text-xl text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('benefits.summaryPart1') }}
              />
            </div>
            <div className="space-y-3">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-semibold mb-2">
                Performance
              </div>
              <p
                className="text-xl text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('benefits.summaryPart2') }}
              />
            </div>
          </div>

          <div className="flex justify-center pt-8 border-t-2 border-sky-100">
            <a
              href="/devis"
              className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-brand-orange-600 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform inline-flex items-center gap-3"
            >
              <span>{t('hero.cta')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
