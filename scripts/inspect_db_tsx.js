const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const code = fs.readFileSync(path.join(cacheDir, 'src_apps_database_DatabaseHub.tsx'), 'utf8');
const engines = [...code.matchAll(/(postgres|mysql|sqlite|redis|mongodb|mssql)/gi)].map(m => m[0].toLowerCase());
console.log('DatabaseHub engines:', [...new Set(engines)]);

const clientCode = fs.readFileSync(path.join(cacheDir, 'src_apps_database_DatabaseClient.tsx'), 'utf8');
console.log('DatabaseClient size:', clientCode.length);
const clientTabs = [...clientCode.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('DatabaseClient activeTabs:', [...new Set(clientTabs)]);
