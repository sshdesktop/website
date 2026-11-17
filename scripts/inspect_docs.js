const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} HTML files in /docs/:\n`);

files.forEach(f => {
  const content = fs.readFileSync(path.join(docsDir, f), 'utf8');
  const brokenSrcset = (content.match(/srcset="assets\//g) || []).length;
  const brokenImg = (content.match(/src="assets\//g) || []).length;
  const lines = content.split('\n').length;
  const wordCount = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`${f.padEnd(32)} | Lines: ${String(lines).padEnd(4)} | Words: ${String(wordCount).padEnd(5)} | brokenSrcset: ${brokenSrcset} | brokenImg: ${brokenImg}`);
});
