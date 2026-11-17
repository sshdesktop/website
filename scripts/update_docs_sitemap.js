const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');

let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const docFiles = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.html'));

let newEntries = '';
let addedCount = 0;

for (const file of docFiles) {
  const loc = file === 'index.html' ? 'https://sshdesktop.com/docs/' : `https://sshdesktop.com/docs/${file}`;
  if (!sitemapContent.includes(loc)) {
    newEntries += `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${file === 'index.html' ? '0.90' : '0.85'}</priority>
  </url>\n`;
    addedCount++;
  }
}

if (addedCount > 0) {
  sitemapContent = sitemapContent.replace('</urlset>', newEntries + '</urlset>');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`Updated sitemap.xml with ${addedCount} docs entries.`);
} else {
  console.log('sitemap.xml already contains all docs entries.');
}
