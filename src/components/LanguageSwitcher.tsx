import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
          language === 'fr' ? 'border-blue-600' : 'border-gray-300 opacity-70 hover:opacity-100'
        }`}
        aria-label="Français"
        title="Français"
      >
        <svg viewBox="0 0 3 2" className="w-full h-full">
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      </button>

      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
          language === 'en' ? 'border-blue-600' : 'border-gray-300 opacity-70 hover:opacity-100'
        }`}
        aria-label="English"
        title="English"
      >
        <svg viewBox="0 0 3 2" className="w-full h-full" preserveAspectRatio="none">
          <clipPath id="s">
            <path d="M0,0 v2 h3 v-2 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M1.5,1 h1.5 v1 z v-2 h-1.5 z h-1.5 v1 z v-2 h1.5 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v2 h3 v-2 z" fill="#012169"/>
            <path d="M0,0 L3,2 M3,0 L0,2" stroke="#fff" strokeWidth="0.3"/>
            <path d="M0,0 L3,2 M3,0 L0,2" clipPath="url(#t)" stroke="#C8102E" strokeWidth="0.2"/>
            <path d="M1.5,0 v2 M0,1 h3" stroke="#fff" strokeWidth="0.5"/>
            <path d="M1.5,0 v2 M0,1 h3" stroke="#C8102E" strokeWidth="0.3"/>
          </g>
        </svg>
      </button>
    </div>
  );
}
