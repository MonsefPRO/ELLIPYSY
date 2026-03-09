// prerender.mjs
// Ce script tourne APRÈS le build Vite.
// Il génère un fichier index.html statique pour chaque route du site.
// Google reçoit ainsi du HTML complet dès le premier crawl — plus besoin d'exécuter le JS.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');

// ============================================================
// LISTE DE TOUTES LES ROUTES DU SITE
// Ajoute ici toute nouvelle route créée dans l'application
// ============================================================
const routes = [
  '/',
  '/devis',
  '/prestations/nettoyage-facade',
  '/prestations/demoussage',
  '/prestations/panneaux-photovoltaiques',
  '/prestations/thermographie',
  '/prestations/elimination-frelons',
];

// Lire le template HTML généré par Vite
const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('❌ dist/index.html introuvable. Lance `npm run build` d\'abord.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');

// Métadonnées SEO par route
const routeMeta = {
  '/': {
    title: 'Ellipsys Solutions — Nettoyage par Drone & Robotique | France & International',
    description: 'Nettoyage professionnel par drone et robotique : panneaux solaires, façades, toitures, thermographie, nids de frelons. Basés en Occitanie — France entière et international. Certifiés DGAC/EASA.',
    canonical: 'https://ellipsys-solutions.com/',
  },
  '/devis': {
    title: 'Demande de Devis — Nettoyage Drone | Ellipsys Solutions',
    description: 'Obtenez un devis gratuit pour le nettoyage par drone en France. Réponse sous 24h. Panneaux solaires, façades, toitures, thermographie, nids de frelons.',
    canonical: 'https://ellipsys-solutions.com/devis',
  },
  '/prestations/nettoyage-facade': {
    title: 'Nettoyage de Façades par Drone — France & International | Ellipsys Solutions',
    description: 'Nettoyage de façades par drone : accès jusqu\'à 50m, 30% moins cher qu\'une nacelle, 4x plus rapide. Certifié DGAC. Intervention France entière et international.',
    canonical: 'https://ellipsys-solutions.com/prestations/nettoyage-facade',
  },
  '/prestations/demoussage': {
    title: 'Démoussage de Toiture par Drone — France & International | Ellipsys Solutions',
    description: 'Démoussage de toiture par drone : zéro tuile cassée, traitement biocide professionnel, protection hydrofuge 5 ans. Intervention France entière. Certifié DGAC.',
    canonical: 'https://ellipsys-solutions.com/prestations/demoussage',
  },
  '/prestations/panneaux-photovoltaiques': {
    title: 'Nettoyage Panneaux Photovoltaïques par Drone & Robot — France | Ellipsys Solutions',
    description: 'Nettoyage panneaux solaires par drone et robot : +30% de rendement, 500m² en 45 min, 40% moins cher qu\'une nacelle. Eau osmosée pure. France entière et international.',
    canonical: 'https://ellipsys-solutions.com/prestations/panneaux-photovoltaiques',
  },
  '/prestations/thermographie': {
    title: 'Thermographie par Drone — Inspection Solaire & Bâtiment | Ellipsys Solutions',
    description: 'Inspection thermographique par drone : caméra radiométrique HD 1280×1024, précision RTK centimétrique, rapports sous 48h. Centrales PV, bâtiments, industrie. France entière.',
    canonical: 'https://ellipsys-solutions.com/prestations/thermographie',
  },
  '/prestations/elimination-frelons': {
    title: 'Destruction Nids de Frelons par Drone — France | Ellipsys Solutions',
    description: 'Destruction de nids de frelons asiatiques par drone : accès jusqu\'à 50m, biocides certifiés Certibiocide, intervention en moins de 30 min. Opérateurs au sol. France entière.',
    canonical: 'https://ellipsys-solutions.com/prestations/elimination-frelons',
  },
};

// Générer un HTML statique pour chaque route
let generated = 0;

for (const route of routes) {
  const meta = routeMeta[route] || routeMeta['/'];
  
  // Injecter les balises meta dans le <head>
  let html = template
    // Title
    .replace(
      /<title>.*?<\/title>/,
      `<title>${meta.title}</title>`
    )
    // Meta description (remplace si existe, sinon ajoute)
    .replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${meta.description}">`
    )
    // Canonical
    .replace(
      /<link rel="canonical" href=".*?">/,
      `<link rel="canonical" href="${meta.canonical}">`
    );

  // Si pas de meta description dans le template, l'ajouter après <title>
  if (!html.includes(`name="description"`)) {
    html = html.replace(
      `<title>${meta.title}</title>`,
      `<title>${meta.title}</title>\n    <meta name="description" content="${meta.description}">`
    );
  }

  // Si pas de canonical dans le template, l'ajouter
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${meta.canonical}">\n  </head>`
    );
  }

  // Créer le dossier de la route si nécessaire
  const routePath = route === '/' ? '' : route;
  const outputDir = join(distDir, routePath);
  
  if (routePath && !existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Écrire le fichier index.html
  const outputPath = routePath
    ? join(outputDir, 'index.html')
    : join(distDir, 'index.html');

  writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ Prérrendu : ${route} → ${outputPath.replace(distDir, 'dist')}`);
  generated++;
}

console.log(`\n🚀 ${generated} pages prérendues avec succès.`);
console.log('Google recevra maintenant du HTML complet dès le premier crawl.');
