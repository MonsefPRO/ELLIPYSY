import { Shield, CheckCircle2, Award } from 'lucide-react';

interface CertificationCardProps {
  logo: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CertificationCard = ({ logo, title, description, icon }: CertificationCardProps) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100/50 hover:border-sky-200 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="relative w-32 h-32 bg-gradient-to-br from-white to-sky-50/30 rounded-2xl p-6 border-2 border-sky-100/50 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-400/5 rounded-2xl"></div>
            <img
              src={logo}
              alt={title}
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
          {icon}
        </div>

        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-sky-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>Certifié et conforme</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-1 -left-1 w-20 h-20 bg-gradient-to-br from-sky-400/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const CertificationsSection = () => {
  const certifications = [
    {
      logo: '/ecolab.png',
      title: 'Écolabel',
      description: 'Engagement environnemental certifié pour des solutions de nettoyage écologiques et durables.',
      icon: <Shield className="w-5 h-5 text-white" />
    },
    {
      logo: '/1.png',
      title: 'DGAC',
      description: 'Certification officielle de la Direction Générale de l\'Aviation Civile pour opérations par drone.',
      icon: <Award className="w-5 h-5 text-white" />
    },
    {
      logo: '/3.jpg',
      title: 'ISO 9001',
      description: 'Système de management de la qualité certifié garantissant excellence et satisfaction client.',
      icon: <CheckCircle2 className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#EFF8FF] via-white to-sky-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBiYTVlYyIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200/50 text-sky-700 rounded-full text-sm font-bold mb-6 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>Certifications & Conformité</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 via-sky-900 to-gray-800 bg-clip-text text-transparent">
            Un service réglementé, sécurisé et certifié
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ellipsys s'engage à respecter les plus hauts standards de qualité et de conformité réglementaire pour garantir votre sérénité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              {...cert}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-sky-100/50">
            <Shield className="w-6 h-6 text-sky-600" />
            <p className="text-gray-700 font-medium">
              Toutes nos opérations sont conformes aux réglementations en vigueur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
