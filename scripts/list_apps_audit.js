const fs = require('fs');
const path = require('path');

const appsHtml = fs.readFileSync(path.join(__dirname, '..', 'apps.html'), 'utf8');
const lines = appsHtml.split('\n');
const officialApps = [];

lines.forEach(l => {
  if (l.includes('class="app-card-title"')) {
    const m = l.match(/>(\d+\.\s*[^<]+)</);
    if (m) officialApps.push(m[1].trim());
  }
});

console.log('=== OFFICIAL 25 APPS IN SSH DESKTOP (from apps.html) ===');
officialApps.forEach(a => console.log('  ' + a));

const { chapters } = require('./build_comprehensive_docs');
console.log('\n=== ALL 43 CHAPTERS CURRENTLY IN DOCS ===');
chapters.forEach((c, i) => {
  console.log(`  ${i+1}. [${c.category}] ${c.title} (${c.slug})`);
});
