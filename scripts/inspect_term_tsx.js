const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const code = fs.readFileSync(path.join(cacheDir, 'src_apps_terminal_Terminal.tsx'), 'utf8');
const shortcuts = [...code.matchAll(/e\.(?:ctrlKey|metaKey) && e\.key === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Terminal.tsx Ctrl/Meta shortcuts:', [...new Set(shortcuts)]);

const addons = [...code.matchAll(/new ([A-Za-z]+Addon)\(/g)].map(m => m[1]);
console.log('Terminal.tsx Xterm Addons:', [...new Set(addons)]);
