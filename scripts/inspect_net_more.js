const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const netCode = fs.readFileSync(path.join(cacheDir, 'src_apps_network_NetworkManager.tsx'), 'utf8');
const subviews = [...netCode.matchAll(/([a-zA-Z0-9]+Tab|[a-zA-Z0-9]+View|activeSection|activeView)[^;}\n]*/g)].map(m => m[0]);
console.log('NetworkManager subviews:', [...new Set(subviews)].slice(0, 10));

const components = [...netCode.matchAll(/<([A-Z][a-zA-Z0-9]+)/g)].map(m => m[1]);
console.log('NetworkManager Components:', [...new Set(components)]);
