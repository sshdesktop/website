const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const types = new Set();

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const matches = content.matchAll(/"@type":\s*"([^"]+)"/g);
  for (const m of matches) types.add(m[1]);
}

console.log('Schema @types found across pages:', Array.from(types).join(', '));
