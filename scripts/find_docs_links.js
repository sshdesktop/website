const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const matches = [];

function searchFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (['node_modules', '.git', 'dist', 'scripts'].includes(item)) continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchFiles(full);
    } else if (item.endsWith('.html') || item.endsWith('.xml') || item.endsWith('.js') || item.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('docs.html')) {
        matches.push(path.relative(ROOT_DIR, full));
      }
    }
  }
}

searchFiles(ROOT_DIR);
console.log(`Found docs.html in ${matches.length} files:`);
matches.forEach(m => console.log(' - ' + m));
