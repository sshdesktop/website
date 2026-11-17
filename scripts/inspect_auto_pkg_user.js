const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const autoCode = fs.readFileSync(path.join(cacheDir, 'src_apps_automation_AutomationApp.tsx'), 'utf8');
const autoTabs = [...autoCode.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('AutomationApp tabs:', [...new Set(autoTabs)]);

const pkgCode = fs.readFileSync(path.join(cacheDir, 'src_apps_packages_PackageManager.tsx'), 'utf8');
const pkgTabs = [...pkgCode.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('PackageManager tabs:', [...new Set(pkgTabs)]);

const userCode = fs.readFileSync(path.join(cacheDir, 'src_apps_users_UserManager.tsx'), 'utf8');
const userTabs = [...userCode.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('UserManager tabs:', [...new Set(userTabs)]);
