const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const pkgCode = fs.readFileSync(path.join(cacheDir, 'src_apps_packages_PackageManager.tsx'), 'utf8');
const pkgState = [...pkgCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('PackageManager state types:', pkgState.slice(0, 8));

const userCode = fs.readFileSync(path.join(cacheDir, 'src_apps_users_UserManager.tsx'), 'utf8');
const userState = [...userCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('UserManager state types:', userState.slice(0, 8));
