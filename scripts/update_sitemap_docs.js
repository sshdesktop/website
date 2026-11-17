const fs = require('fs');
const { chapters } = require('./build_comprehensive_docs');

let sitemap = fs.readFileSync('sitemap.xml', 'utf8');

const missing = [];
chapters.forEach(c => {
  const loc = `https://sshdesktop.com/docs/${c.slug}`;
  if (!sitemap.includes(loc)) {
    missing.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);
  }
});

if (missing.length > 0) {
  sitemap = sitemap.replace('</urlset>', missing.join('\n') + '\n</urlset>');
  fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
  console.log(`Added ${missing.length} missing docs URLs to sitemap.xml!`);
} else {
  console.log('All docs URLs already present in sitemap.xml.');
}
