import React from 'react';

interface CertificationCardProps {
  logo: string;
}

const CertificationCard = ({ logo }: CertificationCardProps) => {
  return (
    <div className="group relative flex items-center justify-center transition-all duration-500">
      {/* Halo de lumière très diffus au survol */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Conteneur du logo sans bordures ni fond blanc opaque */}
      <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <img
          src={logo}
          alt="Certification logo"
          className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all"
        />
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const certifications = [
    { logo: '/6.png' },    // DGAC
    { logo: '/3.jpg' },    // EASA
    { logo: '/ecolab.png' } // Ecolabel
  ];

  return (
    <section className="py-6 md:py-10 bg-white/30 backdrop-blur-md border-y border-slate-100/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24">
          
          {/* Titre signature : plus petit, espacé et élégant */}
          <div className="relative text-center md:text-left">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">
              Certifications <br className="hidden md:block" /> & Normes
            </h2>
            {/* Petite barre de rappel de ta couleur marque */}
            <div className="mt-2 mx-auto md:mx-0 w-8 h-0.5 bg-[#e63946] opacity-40"></div>
          </div>
          
          {/* Alignement horizontal des logos épurés */}
          <div className="flex items-center justify-center gap-12 md:gap-20">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                logo={cert.logo}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
