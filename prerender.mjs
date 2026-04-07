import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'http://localhost:4173';
const DIST_DIR = './dist';

const routes = [
  { path: '/', title: 'Nettoyage par Drone & Robotique — France & International | Ellipsys Solutions', description: 'Ellipsys Solutions : nettoyage professionnel par drone et robotique. Panneaux solaires, façades, toitures, thermographie, nids de frelons. Certifiés DGAC/EASA. Basés à Montpellier — France entière & International.' },
  { path: '/devis', title: 'Devis Gratuit Nettoyage Drone — Réponse 24h | Ellipsys Solutions', description: 'Demandez votre devis gratuit pour nettoyage par drone : panneaux solaires, façades, toitures, frelons, thermographie. Réponse sous 24h. France entière et international.' },
  { path: '/prestations', title: 'Prestations Nettoyage Drone & Robotique | Ellipsys Solutions', description: 'Découvrez les 5 prestations Ellipsys Solutions : panneaux photovoltaïques, façades, démoussage, thermographie, nids de frelons. Intervention France entière.' },
  { path: '/prestations/panneaux-photovoltaiques', title: 'Nettoyage Panneaux Solaires par Drone — +30% Rendement | Ellipsys', description: 'Nettoyage panneaux photovoltaïques par drone et robot. +30% de rendement récupéré, eau osmosée pure, 500m² en 45min. 40% moins cher que la nacelle. France entière.' },
  { path: '/prestations/nettoyage-facade', title: 'Nettoyage Façades par Drone — Jusqu\'à 50m | Ellipsys Solutions', description: 'Nettoyage façades par drone : accès jusqu\'à 50m, 4x plus rapide, 30% moins cher. Eau osmosée chaude 90°C. Zéro échafaudage. France entière et international.' },
  { path: '/prestations/demoussage', title: 'Démoussage Toiture par Drone — Zéro Tuile Cassée | Ellipsys', description: 'Démoussage toiture par drone : 3x plus rapide, zéro risque de chute, zéro tuile cassée. Protection hydrofuge jusqu\'à 10 ans. France entière.' },
  { path: '/prestations/thermographie', title: 'Thermographie Drone — Caméra HD 1280×1024 | Ellipsys Solutions', description: 'Inspection thermographique par drone. Caméra HD 1280×1024, précision RTK centimétrique, rapport sous 48h. Fermes solaires, bâtiments industriels. France entière.' },
  { path: '/prestations/elimination-frelons', title: 'Destruction Nids de Frelons par Drone — Accès 50m | Ellipsys', description: 'Élimination nids de frelons asiatiques par drone. Accès jusqu\'à 50m, biocides certifiés Certibiocide, zéro risque opérateur. DGAC certifié. France entière.' },
  { path: '/blog', title: 'Blog Nettoyage Drone & Robotique | Ellipsys Solutions', description: 'Actualités, conseils et guides sur le nettoyage par drone : panneaux solaires, façades, toitures. Expertise Ellipsys Solutions.' },
  { path: '/realisations', title: 'Réalisations Nettoyage Drone — Nos Chantiers | Ellipsys Solutions', description: 'Découvrez nos réalisations : nettoyage panneaux solaires, façades, démoussage toiture par drone en France. Photos et résultats concrets.' },
  { path: '/valeurs', title: 'Nos Valeurs — Engagement & Innovation | Ellipsys Solutions', description: 'Les valeurs d\'Ellipsys Solutions : innovation technologique, sécurité, écologie et excellence. Notre engagement pour un nettoyage responsable par drone.' },
  { path: '/risques-et-responsabilites', title: 'Risques & Responsabilités | Ellipsys Solutions', description: 'Informations sur la gestion des risques et responsabilités pour les interventions par drone. Certifications DGAC/EASA, assurance RC Pro.' },
  { path: '/rejoignez-nous', title: 'Rejoignez Ellipsys Solutions — Recrutement Drone | Ellipsys', description: 'Rejoignez l\'équipe Ellipsys Solutions : télépilotes certifiés DGAC, techniciens robotique. Postes ouverts en France.' },
  // Pages villes
  { path: '/nettoyage-drone-montpellier', title: 'Nettoyage par Drone à Montpellier (34) | Ellipsys Solutions', description: 'Nettoyage par drone à Montpellier : panneaux solaires, façades, toitures, thermographie, nids de frelons. Certifiés DGAC. Basés à Montpellier — intervention immédiate.' },
  { path: '/nettoyage-drone-nimes', title: 'Nettoyage par Drone à Nîmes (30) | Ellipsys Solutions', description: 'Nettoyage par drone à Nîmes et dans tout le Gard : panneaux solaires, façades, démoussage, frelons. Certifiés DGAC. À moins d\'1h de Montpellier.' },
  { path: '/nettoyage-drone-toulouse', title: 'Nettoyage par Drone à Toulouse (31) | Ellipsys Solutions', description: 'Nettoyage par drone à Toulouse : panneaux photovoltaïques, façades, toitures, thermographie. Sites industriels et logistiques. Certifiés DGAC/EASA.' },
  { path: '/nettoyage-drone-marseille', title: 'Nettoyage par Drone à Marseille (13) | Ellipsys Solutions', description: 'Nettoyage par drone à Marseille et en région PACA : panneaux solaires, façades maritimes, toitures. Certifiés DGAC. Devis gratuit sous 24h.' },
  { path: '/nettoyage-drone-carcassonne', title: 'Nettoyage par Drone à Carcassonne (11) | Ellipsys Solutions', description: 'Nettoyage par drone à Carcassonne et dans l\'Aude : panneaux solaires, toitures historiques, démoussage, frelons. Certifiés DGAC. À moins d\'1h de Montpellier.' },
  { path: '/nettoyage-drone-perpignan', title: 'Nettoyage par Drone à Perpignan (66) | Ellipsys Solutions', description: 'Nettoyage par drone à Perpignan et dans les Pyrénées-Orientales : panneaux solaires, façades, thermographie. Forte exposition solaire. Certifiés DGAC.' },
  { path: '/nettoyage-drone-lyon', title: 'Nettoyage par Drone à Lyon (69) | Ellipsys Solutions', description: 'Nettoyage par drone à Lyon et en région Auvergne-Rhône-Alpes : panneaux solaires, façades, démoussage, thermographie. Certifiés DGAC. Devis gratuit sous 24h.' },
];

function buildOgTags(route, siteUrl) {
  const url = `${siteUrl}${route.path}`;
  return `
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Ellipsys Solutions" />
    <meta property="og:image" content="${siteUrl}/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <link rel="canonical" href="${url}" />`;
}

async function prerenderRoutes() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `${BASE_URL}${route.path}`;
    console.log(`Prérendu: ${route.path}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      let html = await page.content();

      // Injecter title, meta, og, canonical
      const headTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />${buildOgTags(route, 'https://ellipsys-solutions.com')}`;

      html = html.replace(/<title>.*?<\/title>/s, '');
      html = html.replace(/<meta name="description".*?\/>/s, '');
      html = html.replace('</head>', `${headTags}\n  </head>`);

      // Écriture du fichier
      const routePath = route.path === '/' ? '' : route.path;
      const dir = join(DIST_DIR, routePath);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), html, 'utf-8');
      console.log(`  ✅ ${route.path}`);
    } catch (err) {
      console.error(`  ❌ Erreur ${route.path}: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\n🚀 ${routes.length} pages prérendues avec succès.`);
}

prerenderRoutes();
