const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const code = fs.readFileSync(path.join(cacheDir, 'src_apps_firewall_FirewallManager.tsx'), 'utf8');
const tabs = [...code.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('FirewallManager activeTabs:', [...new Set(tabs)]);

const backends = [...code.matchAll(/(ufw|firewalld|iptables|nftables)/gi)].map(m => m[0].toLowerCase());
console.log('FirewallManager backends mentioned:', [...new Set(backends)]);
