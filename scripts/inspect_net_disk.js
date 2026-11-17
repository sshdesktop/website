const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const netCode = fs.readFileSync(path.join(cacheDir, 'src_apps_network_NetworkManager.tsx'), 'utf8');
const netTabs = [...netCode.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('NetworkManager activeTabs:', [...new Set(netTabs)]);

const diskCode = fs.readFileSync(path.join(cacheDir, 'src_apps_disk_DiskManager.tsx'), 'utf8');
const diskTabs = [...diskCode.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('DiskManager activeTabs:', [...new Set(diskTabs)]);
