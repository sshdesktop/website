const https = require('https');
const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/apps/docker/DockerManager.tsx',
  'src/apps/database/DatabaseHub.tsx',
  'src/apps/filemanager/FileManager.tsx',
  'src/apps/terminal/Terminal.tsx',
  'src/apps/editor/CodeEditor.tsx',
  'src/apps/services/ServiceManager.tsx',
  'src/apps/firewall/FirewallManager.tsx',
  'src/apps/monitor/SystemMonitor.tsx',
  'src/apps/processes/ProcessManager.tsx',
  'src/apps/network/NetworkManager.tsx',
  'src/apps/disk/DiskManager.tsx',
  'src/apps/cron/CronManager.tsx',
  'src/apps/ssl/SslManager.tsx',
  'src/apps/security/SecurityAuditor.tsx',
  'src/apps/env/EnvManager.tsx',
  'src/apps/notes/Notes.tsx',
  'src/apps/api/ApiApp.tsx',
  'src/apps/automation/AutomationApp.tsx',
  'src/apps/browser/BrowserApp.tsx',
  'src/apps/packages/PackageManager.tsx',
  'src/apps/users/UserManager.tsx',
  'src-tauri/src/system/docker.rs',
  'src-tauri/src/system/service.rs',
  'src-tauri/src/system/firewall.rs',
  'src-tauri/src/archive.rs'
];

const cacheDir = path.join(__dirname, 'github_cache');
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

async function downloadFile(relPath) {
  const localPath = path.join(cacheDir, relPath.replace(/\//g, '_'));
  if (fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, 'utf8');
  }
  const url = `https://raw.githubusercontent.com/sshdesktop/sshdesktop/main/${relPath}`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode !== 200) {
        console.warn(`Failed to fetch ${relPath}: HTTP ${res.statusCode}`);
        return resolve(null);
      }
      let content = '';
      res.on('data', chunk => content += chunk);
      res.on('end', () => {
        fs.writeFileSync(localPath, content, 'utf8');
        console.log(`Fetched ${relPath} (${content.length} bytes)`);
        resolve(content);
      });
    }).on('error', err => {
      console.warn(`Error fetching ${relPath}: ${err.message}`);
      resolve(null);
    });
  });
}

async function run() {
  console.log(`Downloading ${targetFiles.length} key source files from GitHub...`);
  for (const f of targetFiles) {
    await downloadFile(f);
  }
  console.log('Finished downloading files.');
}

run();
