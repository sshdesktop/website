const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const sslCode = fs.readFileSync(path.join(cacheDir, 'src_apps_ssl_SslManager.tsx'), 'utf8');
const sslTabs = [...sslCode.matchAll(/setTab\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);
console.log('SslManager tabs:', [...new Set(sslTabs)]);

const secCode = fs.readFileSync(path.join(cacheDir, 'src_apps_security_SecurityAuditor.tsx'), 'utf8');
const secTabs = [...secCode.matchAll(/setTab\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);
console.log('SecurityAuditor tabs:', [...new Set(secTabs)]);
