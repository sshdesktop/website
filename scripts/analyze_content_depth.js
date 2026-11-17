const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
      getAllHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.min.html') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
const stats = [];

for (const filePath of htmlFiles) {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const raw = fs.readFileSync(filePath, 'utf8');

  // Extract <main> or <body>
  let bodyMatch = raw.match(/<main[\s\S]*?<\/main>/i) || raw.match(/<body[\s\S]*?<\/body>/i);
  let text = bodyMatch ? bodyMatch[0] : raw;

  // Remove scripts, styles, nav, footer
  text = text.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  text = text.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  text = text.replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
  text = text.replace(/<header[\s\S]*?<\/header>/gi, ' ');
  text = text.replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();

  const words = text ? text.split(/\s+/).length : 0;
  const fileSizeKB = (fs.statSync(filePath).size / 1024).toFixed(1);

  stats.push({ relPath, words, fileSizeKB });
}

// Sort by word count ascending (thinnest first)
stats.sort((a, b) => a.words - b.words);

console.log('=== 15 Thinnest Pages (< 1000 words) ===');
stats.filter(s => s.words < 1000).forEach(s => {
  console.log(`  ${s.relPath.padEnd(45)} | Words: ${String(s.words).padStart(5)} | Size: ${s.fileSizeKB} KB`);
});

console.log(`\nTotal pages analyzed: ${stats.length}`);
const avgWords = Math.round(stats.reduce((acc, s) => acc + s.words, 0) / stats.length);
console.log(`Average Word Count: ${avgWords} words`);
const thinCount = stats.filter(s => s.words < 800).length;
console.log(`Pages with < 800 words: ${thinCount}`);
