const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

const { chapters } = require('./build_comprehensive_docs');
console.log('Chapters to verify in sitemap:', chapters.length);

let added = 0;
const today = new Date().toISOString().split('T')[0];

const rootPages = [
  'https://sshdesktop.com/installation.html',
  'https://sshdesktop.com/tutorials.html',
  'https://sshdesktop.com/quickstart.html',
  'https://sshdesktop.com/cheat-sheet.html',
  'https://sshdesktop.com/terms.html',
  'https://sshdesktop.com/contact.html'
];

for (const url of rootPages) {
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    console.log('Adding root page to sitemap:', url);
    const entry = `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>\n`;
    const insertPos = sitemap.lastIndexOf('</urlset>');
    sitemap = sitemap.slice(0, insertPos) + entry + sitemap.slice(insertPos);
    added++;
  }
}

for (const ch of chapters) {
  const url = `https://sshdesktop.com/docs/${ch.slug}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    console.log('Adding to sitemap:', url);
    const entry = `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
    const insertPos = sitemap.lastIndexOf('</urlset>');
    sitemap = sitemap.slice(0, insertPos) + entry + sitemap.slice(insertPos);
    added++;
  }
}

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`Added ${added} new URLs to sitemap.xml. Total docs in sitemap: ${chapters.length}`);
