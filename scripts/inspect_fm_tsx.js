const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const code = fs.readFileSync(path.join(cacheDir, 'src_apps_filemanager_FileManager.tsx'), 'utf8');
const viewModes = [...code.matchAll(/viewMode === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('FileManager viewModes:', [...new Set(viewModes)]);

const actions = [...code.matchAll(/handle[A-Z][a-zA-Z0-9]+/g)].map(m => m[0]);
console.log('FileManager key handlers (sample 15):', [...new Set(actions)].slice(0, 15));
