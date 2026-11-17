const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const sslCode = fs.readFileSync(path.join(cacheDir, 'src_apps_ssl_SslManager.tsx'), 'utf8');
const stateMatches = [...sslCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('SslManager state types:', stateMatches.slice(0, 10));

const secCode = fs.readFileSync(path.join(cacheDir, 'src_apps_security_SecurityAuditor.tsx'), 'utf8');
const secStateMatches = [...secCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('SecurityAuditor state types:', secStateMatches.slice(0, 10));
