// prerender.mjs v2 - toutes les pages du site
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');

const routes = [
  '/',
  '/devis',
  '/blog',
  '/realisations',
  '/prestations',
  '/valeurs',
  '/risques-et-responsabilites',
  '/rejoignez-nous',
  '/prestations/nettoyage-facade',
  '/prestations/demoussage',
  '/prestations/panneaux-photovoltaiques',
  '/prestations/thermographie',
  '/prestations/elimination-frelons',
];

const routeMeta = {
  '/': {
    title: 'Ellipsys Solutions — Nettoyage par Drone & Robotique | France & International',
    description: 'Nettoyage professionnel par drone et robotique : panneaux solaires, façades, toitures, thermographie, nids de frelons. Basés en Occitanie — France entière et international. Certifiés DGAC/EASA.',
    canonical: 'https://ellipsys-solutions.com/',
  },
  '/devis': {
    title: 'Demande de Devis Gratuit — Nettoyage Drone | Ellipsys Solutions',
    description: 'Obtenez un devis gratuit sous 24h pour le nettoyage par drone en France. Panneaux solaires, façades, toitures, thermographie, nids de frelons. Sans engagement.',
    canonical: 'https://ellipsys-solutions.com/devis',
  },
  '/blog': {
    title: 'Blog — Actualités Drone & Robotique Nettoyage | Ellipsys Solutions',
    description: 'Actualités, conseils et innovations sur le nettoyage par drone et robotique. Panneaux solaires, façades, toitures, thermographie. Ellipsys Solutions.',
    canonical: 'https://ellipsys-solutions.com/blog',
  },
  '/realisations': {
    title: 'Nos Réalisations — Nettoyage Drone & Robotique en France | Ellipsys Solutions',
    description: 'Découvrez nos chantiers et réalisations de nettoyage par drone en France : centrales solaires, façades industrielles, toitures, thermographie. Ellipsys Solutions.',
    canonical: 'https://ellipsys-solutions.com/realisations',
  },
  '/prestations': {
    title: 'Nos Prestations — Nettoyage Drone & Robotique | Ellipsys Solutions',
    description: 'Toutes nos prestations de nettoyage par drone et robotique : panneaux photovoltaïques, façades, démoussage toiture, thermographie, destruction nids de frelons. France entière.',
    canonical: 'https://ellipsys-solutions.com/prestations',
  },
  '/valeurs': {
    title: 'Nos Valeurs — Innovation, Sécurité & Écologie | Ellipsys Solutions',
    description: 'Découvrez les valeurs d\'Ellipsys Solutions : innovation technologique, sécurité opérationnelle, engagement écologique et excellence du service. Certifiés DGAC/EASA.',
    canonical: 'https://ellipsys-solutions.com/valeurs',
  },
  '/risques-et-responsabilites': {
    title: 'Risques & Responsabilités — Conformité DGAC | Ellipsys Solutions',
    description: 'Informations sur la conformité réglementaire, les certifications DGAC/EASA et la gestion des risques pour nos opérations de drone en France. Ellipsys Solutions.',
    canonical: 'https://ellipsys-solutions.com/risques-et-responsabilites',
  },
  '/rejoignez-nous': {
    title: 'Rejoignez-Nous — Carrières Drone & Robotique | Ellipsys Solutions',
    description: 'Rejoignez l\'équipe Ellipsys Solutions : pilotes de drone certifiés DGAC, techniciens robotique, commerciaux. Postes disponibles en France. Envoyez votre candidature.',
    canonical: 'https://ellipsys-solutions.com/rejoignez-nous',
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

const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('❌ dist/index.html introuvable. Lance `npm run build` d\'abord.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');
let generated = 0;

for (const route of routes) {
  const meta = routeMeta[route] || {
    title: 'Ellipsys Solutions — Nettoyage par Drone & Robotique',
    description: 'Nettoyage professionnel par drone et robotique en France. Certifiés DGAC/EASA.',
    canonical: `https://ellipsys-solutions.com${route}`,
  };

  let html = template;

  // Title
  if (/<title>.*?<\/title>/.test(html)) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  } else {
    html = html.replace('</head>', `  <title>${meta.title}</title>\n  </head>`);
  }

  // Meta description
  if (/<meta name="description" content=".*?">/.test(html)) {
    html = html.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${meta.description}">`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${meta.description}">\n  </head>`);
  }

  // Canonical
  if (/<link rel="canonical" href=".*?">/.test(html)) {
    html = html.replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="${meta.canonical}">`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${meta.canonical}">\n  </head>`);
  }

  // Open Graph tags
  if (!html.includes('og:title')) {
    const ogTags = `  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:url" content="${meta.canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Ellipsys Solutions">
  <meta property="og:image" content="https://ellipsys-solutions.com/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.description}">`;
    html = html.replace('</head>', `${ogTags}\n  </head>`);
  }

  // Créer le dossier si nécessaire
  const routePath = route === '/' ? '' : route;
  const outputDir = join(distDir, routePath);
  if (routePath && !existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = routePath
    ? join(outputDir, 'index.html')
    : join(distDir, 'index.html');

  writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ Prérendu : ${route} → ${outputPath.replace(distDir, 'dist')}`);
  generated++;
}

console.log(`\n🚀 ${generated} pages prérendues avec succès.`);
console.log('Google recevra maintenant du HTML complet dès le premier crawl.');
