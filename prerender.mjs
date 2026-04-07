import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const DIST_DIR = './dist';
const SITE_URL = 'https://ellipsys-solutions.com';

const routes = [
  {
    path: '/',
    title: 'Nettoyage par Drone & Robotique — France & International | Ellipsys Solutions',
    description: 'Ellipsys Solutions : nettoyage professionnel par drone et robotique. Panneaux solaires, facades, toitures, thermographie, nids de frelons. Certifies DGAC/EASA. Bases a Montpellier — France entiere & International.',
    image: '/og-image.jpg'
  },
  {
    path: '/devis',
    title: 'Devis Gratuit Nettoyage Drone — Reponse 24h | Ellipsys Solutions',
    description: 'Demandez votre devis gratuit pour nettoyage par drone : panneaux solaires, facades, toitures, frelons, thermographie. Reponse sous 24h. France entiere et international.',
    image: '/og-image.jpg'
  },
  {
    path: '/prestations',
    title: 'Prestations Nettoyage Drone & Robotique | Ellipsys Solutions',
    description: 'Decouvrez les 5 prestations Ellipsys Solutions : panneaux photovoltaiques, facades, demoussage, thermographie, nids de frelons. Intervention France entiere.',
    image: '/og-image.jpg'
  },
  {
    path: '/prestations/panneaux-photovoltaiques',
    title: 'Nettoyage Panneaux Solaires par Drone — +30% Rendement | Ellipsys',
    description: 'Nettoyage panneaux photovoltaiques par drone et robot. +30% de rendement recupere, eau osmosee pure, 500m2 en 45min. 40% moins cher que la nacelle. France entiere.',
    image: '/og-image.jpg'
  },
  {
    path: '/prestations/nettoyage-facade',
    title: 'Nettoyage Facades par Drone — Acces jusqu\'a 50m | Ellipsys Solutions',
    description: 'Nettoyage facades par drone : acces jusqu\'a 50m, 4x plus rapide, 30% moins cher. Eau osmosee chaude 90 degres. Zero echafaudage. France entiere et international.',
    image: '/og-image.jpg'
  },
  {
    path: '/prestations/demoussage',
    title: 'Demoussage Toiture par Drone — Zero Tuile Cassee | Ellipsys',
    description: 'Demoussage toiture par drone : 3x plus rapide, zero risque de chute, zero tuile cassee. Protection hydrofuge jusqu\'a 10 ans. France entiere.',
    image: '/og-image.jpg'
  },
  {
    path: '/prestations/thermographie',
    title: 'Thermographie Drone — Camera HD 1280x1024 | Ellipsys Solutions',
    description: 'Inspection thermographique par drone. Camera HD 1280x1024, precision RTK centimetrique, rapport sous 48h. Fermes solaires, batiments industriels. France entiere.',
    image: '/og-image.jpg'
  },
  {
    path: '/prestations/elimination-frelons',
    title: 'Destruction Nids de Frelons par Drone — Acces 50m | Ellipsys',
    description: 'Elimination nids de frelons asiatiques par drone. Acces jusqu\'a 50m, biocides certifies Certibiocide, zero risque operateur. DGAC certifie. France entiere.',
    image: '/og-image.jpg'
  },
  {
    path: '/blog',
    title: 'Blog Nettoyage Drone & Robotique | Ellipsys Solutions',
    description: 'Actualites, conseils et guides sur le nettoyage par drone : panneaux solaires, facades, toitures. Expertise Ellipsys Solutions.',
    image: '/og-image.jpg'
  },
  {
    path: '/realisations',
    title: 'Realisations Nettoyage Drone — Nos Chantiers | Ellipsys Solutions',
    description: 'Decouvrez nos realisations : nettoyage panneaux solaires, facades, demoussage toiture par drone en France. Photos et resultats concrets.',
    image: '/og-image.jpg'
  },
  {
    path: '/valeurs',
    title: 'Nos Valeurs — Engagement & Innovation | Ellipsys Solutions',
    description: 'Les valeurs Ellipsys Solutions : innovation technologique, securite, ecologie et excellence. Notre engagement pour un nettoyage responsable par drone.',
    image: '/og-image.jpg'
  },
  {
    path: '/risques-et-responsabilites',
    title: 'Risques & Responsabilites | Ellipsys Solutions',
    description: 'Informations sur la gestion des risques et responsabilites pour les interventions par drone. Certifications DGAC/EASA, assurance RC Pro.',
    image: '/og-image.jpg'
  },
  {
    path: '/rejoignez-nous',
    title: 'Rejoignez Ellipsys Solutions — Recrutement Drone | Ellipsys',
    description: 'Rejoignez l\'equipe Ellipsys Solutions : telepilotes certifies DGAC, techniciens robotique. Postes ouverts en France.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-montpellier',
    title: 'Nettoyage par Drone a Montpellier (34) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Montpellier : panneaux solaires, facades, toitures, thermographie, nids de frelons. Certifies DGAC. Bases a Montpellier — intervention immediate.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-nimes',
    title: 'Nettoyage par Drone a Nimes (30) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Nimes et dans tout le Gard : panneaux solaires, facades, demoussage, frelons. Certifies DGAC. A moins d\'1h de Montpellier.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-toulouse',
    title: 'Nettoyage par Drone a Toulouse (31) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Toulouse : panneaux photovoltaiques, facades, toitures, thermographie. Sites industriels et logistiques. Certifies DGAC/EASA.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-marseille',
    title: 'Nettoyage par Drone a Marseille (13) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Marseille et en region PACA : panneaux solaires, facades maritimes, toitures. Certifies DGAC. Devis gratuit sous 24h.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-carcassonne',
    title: 'Nettoyage par Drone a Carcassonne (11) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Carcassonne et dans l\'Aude : panneaux solaires, toitures historiques, demoussage, frelons. Certifies DGAC. A moins d\'1h de Montpellier.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-perpignan',
    title: 'Nettoyage par Drone a Perpignan (66) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Perpignan et dans les Pyrenees-Orientales : panneaux solaires, facades, thermographie. Forte exposition solaire. Certifies DGAC.',
    image: '/og-image.jpg'
  },
  {
    path: '/nettoyage-drone-lyon',
    title: 'Nettoyage par Drone a Lyon (69) | Ellipsys Solutions',
    description: 'Nettoyage par drone a Lyon et en region Auvergne-Rhone-Alpes : panneaux solaires, facades, demoussage, thermographie. Certifies DGAC. Devis gratuit sous 24h.',
    image: '/og-image.jpg'
  },
];

// Lire le index.html de base genere par Vite
const baseHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

let count = 0;

for (const route of routes) {
  const url = `${SITE_URL}${route.path}`;

  const metaTags = `
  <title>${route.title}</title>
  <meta name="description" content="${route.description}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Ellipsys Solutions" />
  <meta property="og:image" content="${SITE_URL}${route.image}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.description}" />`;

  // Injecter les meta dans le <head> apres le charset
  let html = baseHtml.replace(
    /<meta charset="UTF-8"\s*\/>/,
    `<meta charset="UTF-8" />${metaTags}`
  );

  // Ecrire le fichier dans le bon dossier
  const dir = route.path === '/' ? DIST_DIR : join(DIST_DIR, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');

  count++;
  console.log(`Prerandu [${count}/${routes.length}]: ${route.path}`);
}

console.log(`\nOK - ${count} pages prerendues.`);
