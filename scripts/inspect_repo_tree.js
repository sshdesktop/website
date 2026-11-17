const fs = require('fs');
const list = JSON.parse(fs.readFileSync('scripts/github_tree.json', 'utf8'));
console.log('Total items in tree:', list.length);

const appPaths = list.filter(p => typeof p === 'string' && p.startsWith('src/apps/'));
console.log('App subdirectories in src/apps/:', [...new Set(appPaths.map(p => p.split('/')[2]))]);

const rustPaths = list.filter(p => typeof p === 'string' && p.startsWith('src-tauri/src/'));
console.log('Rust paths in src-tauri/src/ (sample 10):', rustPaths.slice(0, 10));
