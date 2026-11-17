const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const files = [];

function walk(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (['node_modules', '.git', 'dist'].includes(item)) continue;
    const p = path.join(dir, item);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      walk(p);
    } else {
      files.push({
        rel: path.relative(ROOT_DIR, p).replace(/\\/g, '/'),
        size: st.size,
        ext: path.extname(item)
      });
    }
  }
}

walk(ROOT_DIR);

files.sort((a, b) => b.size - a.size);

console.log('=== TOP 30 LARGEST FILES (> 70 KB) ===');
files.filter(f => f.size > 70 * 1024).forEach(f => {
  console.log(`  ${(f.size / 1024).toFixed(1)} KB\t${f.rel}`);
});

// Group by extension for big files
console.log('\n=== LARGE FILES BY CATEGORY ===');
const bigByExt = {};
files.filter(f => f.size > 50 * 1024).forEach(f => {
  bigByExt[f.ext] = (bigByExt[f.ext] || 0) + 1;
});
console.log(bigByExt);
