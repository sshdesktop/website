const fs = require('fs');
const list = JSON.parse(fs.readFileSync('scripts/github_tree.json', 'utf8'));

const apps = {};
list.forEach(p => {
  if (typeof p === 'string' && p.startsWith('src/apps/')) {
    const parts = p.split('/');
    const appName = parts[2];
    if (!apps[appName]) apps[appName] = [];
    apps[appName].push(p);
  }
});

console.log('Apps found in src/apps/ (' + Object.keys(apps).length + '):');
for (const [app, files] of Object.entries(apps)) {
  console.log(`\n=== App: ${app} (${files.length} files) ===`);
  console.log(files.slice(0, 10).join('\n'));
}

const rustFiles = list.filter(p => typeof p === 'string' && p.startsWith('src-tauri/src/'));
console.log(`\n=== Rust Files in src-tauri/src/ (${rustFiles.length} files) ===`);
console.log(rustFiles.join('\n'));
