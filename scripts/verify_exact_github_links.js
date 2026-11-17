const https = require('https');

const linksToTest = [
  { name: 'Repository Root', url: 'https://github.com/sshdesktop/sshdesktop' },
  { name: 'README.md', url: 'https://github.com/sshdesktop/sshdesktop/blob/main/README.md' },
  { name: 'getting-started (main.rs)', url: 'https://github.com/sshdesktop/sshdesktop/blob/main/src-tauri/src/main.rs' },
  { name: 'architecture (src-tauri)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src-tauri' },
  { name: 'web-mode (install.sh)', url: 'https://github.com/sshdesktop/sshdesktop/blob/main/install.sh' },
  { name: 'cloud-desktop (App.tsx)', url: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/App.tsx' },
  { name: 'terminal (src/apps/terminal)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/terminal' },
  { name: 'sftp (src/apps/filemanager)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/filemanager' },
  { name: 'editor (src/apps/editor)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/editor' },
  { name: 'docker (src/apps/docker)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/docker' },
  { name: 'database (src/apps/database)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/database' },
  { name: 'tunnel (src-tauri/src/ssh/tunnel.rs)', url: 'https://github.com/sshdesktop/sshdesktop/blob/main/src-tauri/src/ssh/tunnel.rs' },
  { name: 'systemd (src/apps/services)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/services' },
  { name: 'firewall (src/apps/firewall)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/firewall' },
  { name: 'monitor (src/apps/monitor)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/monitor' },
  { name: 'packages (src/apps/packages)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/packages' },
  { name: 'users (src/apps/users)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/users' },
  { name: 'network (src/apps/network)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/network' },
  { name: 'disk (src/apps/disk)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/disk' },
  { name: 'cron (src/apps/cron)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/cron' },
  { name: 'ssl (src/apps/ssl)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/ssl' },
  { name: 'security (src/apps/security)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/security' },
  { name: 'archive (src-tauri/src/archive.rs)', url: 'https://github.com/sshdesktop/sshdesktop/blob/main/src-tauri/src/archive.rs' },
  { name: 'automation (src/apps/automation)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/automation' },
  { name: 'logs (src/apps/logs)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/logs' },
  { name: 'browser (src/apps/browser)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/browser' },
  { name: 'api (src/apps/api)', url: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/api' }
];

function check(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ name: item.name, url: item.url, status: res.statusCode, location: res.headers.location });
    }).on('error', err => {
      resolve({ name: item.name, url: item.url, status: 'ERR', error: err.message });
    });
  });
}

async function verifyAll() {
  console.log(`Checking ${linksToTest.length} GitHub links...`);
  let allPassed = true;
  for (const item of linksToTest) {
    const res = await check(item);
    const pass = res.status === 200 || res.status === 301;
    if (!pass) allPassed = false;
    console.log(`[${res.status}] ${item.name} -> ${item.url}`);
  }
  console.log(allPassed ? '\n✅ ALL GITHUB LINKS VERIFIED WORKING (200 OK)!' : '\n❌ SOME LINKS FAILED');
}

verifyAll();
