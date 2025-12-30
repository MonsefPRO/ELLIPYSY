export default function CertificationsBanner() {
  const certifications = [
    {
      id: 1,
      image: '/1.png',
      alt: 'Certification DGAC'
    },
    {
      id: 2,
      image: '/1.png',
      alt: 'Certification 2'
    },
    {
      id: 3,
      image: '/3.jpg', 
      alt: 'Certification 3'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-sky-600 to-blue-700 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="w-40 h-40 bg-white rounded-xl border-2 border-white/30 hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center p-4"
            >
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
