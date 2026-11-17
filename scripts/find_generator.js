const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scripts');
for (const f of files) {
  if (f.endsWith('.js')) {
    const txt = fs.readFileSync(path.join('scripts', f), 'utf8');
    if (txt.includes('index.html') && (txt.includes('docs') || txt.includes('chapters'))) {
      console.log('Matches:', f);
    }
  }
}
