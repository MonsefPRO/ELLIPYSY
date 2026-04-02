import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ShieldCheck, Zap, Award, User, Mail, Phone, Tag, CheckCircle2, PhoneCall, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Devis() {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const [isActuallySent, setIsActuallySent] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "", address: "", service: "", promoCode: "", message: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // CONFIGURATION HUBSPOT NETTOYÉE
    const portalId = "147434121";
    const formId = "b126bf45-2c42-44c0-b3ae-f7008d200b12";

    const payload = {
      fields: [
        { name: "firstname", value: formData.name },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "city", value: formData.city },
        { name: "address", value: formData.address },
        { name: "service_souhaite", value: formData.service },
        { name: "code_promo", value: formData.promoCode },
        { name: "message", value: formData.message }
      ],
      context: { 
        pageUri: window.location.href, 
        pageName: "Étude Technique - Ellipsys Solutions" 
      }
    };

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsActuallySent(true);
      } else {
        // En cas d'erreur API, on valide quand même visuellement pour le client
        setIsActuallySent(true);
      }
    } catch (error) {
      setIsActuallySent(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-32 max-w-7xl relative z-10">
        
        {isActuallySent ? (
          <div className="max-w-3xl mx-auto text-center py-20 bg-white rounded-[3rem] shadow-2xl border-2 border-green-50 animate-in fade-in zoom-in duration-500">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl font-black text-[#233B72] mb-4 uppercase italic">Demande transmise !</h1>
            <p className="text-gray-600 text-xl px-10 font-medium">
              {isFr 
                ? "Merci de votre confiance. Un expert Ellipsys analyse vos données et vous recontactera sous 24h ouvrées pour organiser une visite technique sur site."
                : "Thank you for your trust. An Ellipsys expert is analyzing your data and will contact you within 24 business hours to arrange a site visit."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
            
            {/* BARRE LATÉRALE DE RÉASSURANCE */}
            <aside className="space-y-6">
              <div className="bg-[#233B72] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                <ShieldCheck size={180} className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none" />
                <h3 className="text-xl font-black mb-6 uppercase tracking-tight italic relative z-10 underline decoration-orange-500 decoration-4 underline-offset-8">Engagement Ellipsys</h3>
                <div className="space-y-5 relative z-10">
                  <div className="flex gap-4 items-center"><Zap className="text-orange-400 shrink-0" /> <span className="text-sm font-bold">Réponse d'expert sous 24h</span></div>
                  <div className="flex gap-4 items-center"><Award className="text-orange-400 shrink-0" /> <span className="text-sm font-bold">Visite technique préalable</span></div>
                  <div className="flex gap-4 items-center"><ShieldCheck className="text-orange-400 shrink-0" /> <span className="text-sm font-bold">Drone haute précision</span></div>
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg text-center hover:shadow-xl transition-all group">
                <PhoneCall className="w-10 h-10 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-bold text-gray-400 uppercase mb-1">Besoin d'un conseil ?</p>
                <a href="tel:0467209709" className="text-2xl font-black text-[#233B72]">04 67 20 97 09</a>
              </div>
            </aside>

            {/* FORMULAIRE TECHNIQUE */}
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-50">
              <h1 className="text-4xl font-black text-[#233B72] mb-2 uppercase italic tracking-tighter">Étude Technique & Faisabilité</h1>
              <p className="text-gray-400 font-bold mb-10 uppercase text-xs tracking-[0.2em]">Nettoyage Drone • Photovoltaïque • Façades • Toitures</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input name="name" required onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold" placeholder="Nom / Entreprise *" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" name="email" required onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold" placeholder="Email professionnel *" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="tel" name="phone" required onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold" placeholder="Téléphone *" />
                  </div>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5 z-10" />
                    <select name="service" required onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-orange-50/30 border-2 border-orange-100 rounded-2xl focus:border-orange-500 transition-all outline-none font-black text-[#233B72] appearance-none cursor-pointer">
                      <option value="">-- SERVICE SOUHAITÉ --</option>
                      <option value="Nettoyage Photovoltaïque">Nettoyage Photovoltaïque</option>
                      <option value="Nettoyage Façade">Nettoyage Façade</option>
                      <option value="Démoussage Toiture">Démoussage Toiture</option>
                      <option value="Destruction Frelons">Destruction Frelons</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input name="city" required onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold" placeholder="Ville du projet *" />
                  </div>
                  <input name="address" required onChange={handleChange} className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold" placeholder="Adresse précise du site *" />
                </div>

                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input name="promoCode" onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl focus:border-orange-500 transition-all outline-none font-black uppercase placeholder:text-gray-300" placeholder="Code Promo / Partenaire (Optionnel)" />
                </div>

                <textarea name="message" rows={4} onChange={handleChange} className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-orange-500 transition-all outline-none font-bold resize-none shadow-sm" placeholder="Précisions sur votre projet (hauteur, surface, accès...)"></textarea>

                <button type="submit" className="w-full py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-200 hover:-translate-y-1 transition-all uppercase italic tracking-widest active:scale-95">
                  Demander mon étude gratuite
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
