const fs = require('fs');
const path = require('path');

const c = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const lines = c.split(/\r?\n/);
const inlineStyles = [];

lines.forEach((line, idx) => {
  const match = line.match(/style="([^"]+)"/i);
  if (match) {
    inlineStyles.push({ lineNum: idx + 1, style: match[1].trim(), text: line.trim() });
  }
});

console.log(`Found ${inlineStyles.length} inline style attributes in index.html:`);
inlineStyles.forEach(s => {
  console.log(`  Line ${s.lineNum}: style="${s.style.slice(0, 50)}..."`);
});
