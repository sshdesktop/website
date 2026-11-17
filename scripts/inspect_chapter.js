const fs = require('fs');
const content = fs.readFileSync('./scripts/build_all_chapters.js', 'utf8');

function extractChapter(slug) {
  const start = content.indexOf(`'${slug}': {`);
  if (start === -1) return null;
  const next = content.indexOf(`  '`, start + 10);
  return content.slice(start, next > -1 ? next : start + 3000);
}

console.log(extractChapter('docker-management.html').slice(0, 800));
