import { useState, useEffect } from 'react';

export const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // On reprend exactement tes images de la page d'accueil
  const images = [
    { src: '/rony.jpg' },
    { src: '/ares.png' },
    { src: '/abateur_de_frelons.png' },
    { src: '/rony2.jpg' },
    { src: '/chronos.jpg' },
    { src: '/rony4.jpg' },
    { src: '/chronos2.jpg' },
    { src: '/rony5.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Filtre pour que le texte reste lisible */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/25 via-blue-50/20 to-white/25 z-10"></div>
      
      {/* Boucle des images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-70' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
