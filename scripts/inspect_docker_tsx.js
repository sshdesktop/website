const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const code = fs.readFileSync(path.join(cacheDir, 'src_apps_docker_DockerManager.tsx'), 'utf8');
const tabs = [...code.matchAll(/activeTab === ['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('DockerManager activeTabs:', [...new Set(tabs)]);

const buttons = [...code.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/g)]
  .map(m => m[1].replace(/<[^>]+>/g, '').trim())
  .filter(t => t.length > 2 && t.length < 30);
console.log('DockerManager Sample Buttons:', [...new Set(buttons)].slice(0, 15));
