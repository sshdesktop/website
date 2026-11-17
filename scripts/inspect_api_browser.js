const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const apiCode = fs.readFileSync(path.join(cacheDir, 'src_apps_api_ApiApp.tsx'), 'utf8');
const apiMethods = [...apiCode.matchAll(/(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)/g)].map(m => m[0]);
console.log('ApiApp methods:', [...new Set(apiMethods)]);

const browserCode = fs.readFileSync(path.join(cacheDir, 'src_apps_browser_BrowserApp.tsx'), 'utf8');
const browserState = [...browserCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('BrowserApp state types:', browserState.slice(0, 8));
