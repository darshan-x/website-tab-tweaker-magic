import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-studies', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/playbooks', changefreq: 'monthly', priority: 0.8 },
  { url: '/webinars', changefreq: 'weekly', priority: 0.7 },
  { url: '/ai-use-cases', changefreq: 'weekly', priority: 0.8 },
  { url: '/special-offer', changefreq: 'monthly', priority: 0.7 },
  
  // Services
  { url: '/services/rapid-prototyping', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/ai-implementation', changefreq: 'monthly', priority: 0.9 },
  { url: '/services/full-stack-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/sales-ai', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/marketing-ai', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/customer-support-ai', changefreq: 'monthly', priority: 0.8 },
  
  // Verticals
  { url: '/verticals/field-sales', changefreq: 'monthly', priority: 0.8 },
  { url: '/verticals/adtech', changefreq: 'monthly', priority: 0.8 },
  { url: '/verticals/martech', changefreq: 'monthly', priority: 0.8 },
  { url: '/verticals/telecom', changefreq: 'monthly', priority: 0.8 },
  { url: '/verticals/tech-smb', changefreq: 'monthly', priority: 0.8 },
  { url: '/verticals/mid-market', changefreq: 'monthly', priority: 0.8 },
  
  // Blog posts
  { url: '/blog/ai-implementation-guide-2025', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/field-sales-ai', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/smb-ai-guide', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/ai-jobs-article', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/beyond-exponential', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/stakeholder-content-automation', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/vibe-marketing', changefreq: 'monthly', priority: 0.7 },
  
  // Case studies
  { url: '/case-studies/chipr', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/notion', changefreq: 'monthly', priority: 0.8 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://gigarev.com' });
  
  return streamToPromise(Readable.from(routes).pipe(stream)).then((data) =>
    data.toString()
  );
}

generateSitemap().then(sitemap => {
  writeFileSync('./dist/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully');
}).catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});