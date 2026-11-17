const fs = require('fs');
const paths = JSON.parse(fs.readFileSync('scripts/github_tree.json', 'utf8'));

console.log('--- APPS in src/apps ---');
const apps = paths.filter(p => p.startsWith('src/apps/'));
const appDirs = new Set(apps.map(p => p.split('/')[2]));
console.log([...appDirs]);

console.log('--- src-tauri files ---');
const tauriSrc = paths.filter(p => p.startsWith('src-tauri/src/'));
console.log(tauriSrc);
