import { useEffect } from 'react';
import { ChevronRight, Shield, Clock, Droplets, Award, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FloatingDrone } from '../components/FloatingDrone';

export default function NettoyageFacade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION RESPONSIVE */}
      <div className="h-[320px] md:h-96 bg-gradient-to-br from-sky-500 to-blue-700 relative overflow-hidden pt-20">
        <FloatingDrone
          src="/ares.png"
          alt="Nettoyage de façade par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              Nettoyage de façade par drone
            </h1>
            <p className="text-lg md:text-2xl text-sky-100 font-medium">
              La technologie au service de votre patrimoine
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        {/* BREADCRUMB */}
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-sky-600 font-medium">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold">Nettoyage de façade</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            {/* INTRODUCTION */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233B72] mb-6">L'excellence du nettoyage aérien</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg text-justify">
                <p>
                  Ellipsys révolutionne l'entretien des façades avec une solution par <strong>drone</strong>, spécialement conçue pour les entreprises et collectivités. Notre méthode s'impose comme la référence du <strong>nettoyage sans échafaudage</strong>.
                </p>
                <p>
                  Nos pilotes certifiés interviennent sur tous matériaux : pierre, béton, bardage ou vitres, éliminant efficacement pollution et contaminants par une pulvérisation précise.
                </p>
              </div>
            </section>

            {/* TYPES DE FAÇADES - GRID RESPONSIVE */}
            <section className="bg-sky-50 rounded-3xl p-6 md:p-10 border border-sky-100 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-[#233B72] mb-6 text-center md:text-left">Supports pris en charge</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Pierre naturelle & Monuments',
                  'Bâtiments en béton',
                  'Bardage métallique industriel',
                  'Façades vitrées & Verrières',
                  'Crépi & Enduits fragiles',
                  'Chéneaux & Gouttières'
                ].map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-sky-50">
                    <div className="w-2 h-2 bg-sky-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{type}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ÉQUIPEMENTS & MÉTHODES */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Équipements de pointe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Drone Spécialisé', desc: 'Accès sécurisé aux grandes hauteurs' },
                  { title: 'Pression Adaptative', desc: 'Puissance réglée selon le support' },
                  { title: 'Produits Bio AB', desc: 'Nettoyants écologiques performants' },
                  { title: 'Thermique HD', desc: 'Diagnostic des zones critiques' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-50 rounded-2xl p-6 hover:border-sky-200 transition-all shadow-sm">
                    <h4 className="font-bold text-[#233B72] mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-sky-500" />
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* AVANTAGES VS TRADITIONNEL */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Pourquoi choisir le drone ?</h3>
              <div className="space-y-3">
                {[
                  { title: 'Sécurité Totale', desc: 'Zéro risque de chute pour les techniciens.' },
                  { title: 'Gain de Temps', desc: 'Pas de montage d\'échafaudage ou nacelle.' },
                  { title: 'Économie Majeure', desc: 'Réduction des coûts logistiques et matériels.' },
                  { title: 'Matériaux Préservés', desc: 'Nettoyage doux sans contact mécanique.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold text-sm md:text-base">{item.title}</p>
                      <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CERTIFICATIONS - BADGES COMPACTS */}
            <section className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center uppercase tracking-widest text-sky-400">Garanties Légales</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Certifié DGAC', 'Pilotes Pro', 'RC Pro Complète',
                  'ISO 9001/14001', 'Normes 2026', 'Décennale'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/10 flex flex-col items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-sky-400" />
                    <span className="text-[10px] md:text-xs font-black uppercase">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR STICKY RESPONSIVE */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* CARD DEVIS */}
              <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Besoin d'un ravalement ?</h3>
                <p className="mb-8 text-sky-100 text-sm md:text-base leading-relaxed">
                  Confiez votre façade à nos experts pour un résultat irréprochable et sécurisé.
                </p>
                <Link
                  to="/devis"
                  className="block w-full bg-white text-blue-700 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg active:scale-95"
                >
                  Devis Personnalisé
                </Link>
              </div>

              {/* POINTS FORTS RAPIDES */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-6 border-b pb-2">Atouts Ellipsys</h4>
                <div className="space-y-5">
                  {[
                    { icon: Shield, title: 'Sécurité', desc: 'Intervention sans nacelle' },
                    { icon: Clock, title: 'Rapidité', desc: 'Mise en place immédiate' },
                    { icon: Droplets, title: 'Écologie', desc: 'Produits certifiés AB' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-2 bg-sky-50 rounded-xl">
                        <item.icon className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 text-sm">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NAVIGATION INTERNE */}
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-widest">Autres Services</h4>
                <div className="space-y-4">
                  <Link to="/prestations/demoussage" className="flex items-center justify-between group text-sky-600">
                    <span className="text-sm font-bold group-hover:underline">Démoussage toiture</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/prestations/elimination-frelons" className="flex items-center justify-between group text-sky-600">
                    <span className="text-sm font-bold group-hover:underline">Nids de frelons</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
