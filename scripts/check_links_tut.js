const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  const matches = txt.match(/href=["'][^"']*(?:tutorial|installation|quickstart)[^"']*["']/gi) || [];
  if (matches.length > 0) {
    console.log(f, 'has links:', matches);
  }
}
