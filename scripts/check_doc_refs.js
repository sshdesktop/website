const fs = require('fs');
const path = require('path');

const rootFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const docRefs = new Set();
const existingDocs = fs.readdirSync('docs');

for (const f of rootFiles) {
  const txt = fs.readFileSync(f, 'utf8');
  const matches = txt.match(/href=["'](?:\.\.\/|\/)?(docs\/[^"'#]+)["']/g) || [];
  for (const m of matches) {
    const clean = m.replace(/href=["'](?:\.\.\/|\/)?/, '').replace(/["']$/, '');
    docRefs.add(clean);
  }
}

console.log('Total doc references found in root files:', docRefs.size);
for (const ref of docRefs) {
  const filename = path.basename(ref);
  const exists = existingDocs.includes(filename);
  if (!exists) {
    console.log('MISSING DOC FILE:', ref, '(basename:', filename, ')');
  } else {
    console.log('Exists:', filename);
  }
}
