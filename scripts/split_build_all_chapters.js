// scripts/split_build_all_chapters.js
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const code = fs.readFileSync(path.join(__dirname, 'build_all_chapters.js'), 'utf8');

const start = code.indexOf('const chapterDetails = {');
const end = code.indexOf('function buildAllChapters');
const lastBrace = code.lastIndexOf('};', end);
const objStr = code.slice(start + 'const chapterDetails = '.length, lastBrace + 1);
const details = eval('(' + objStr + ')');

const categoryGroups = {
  core: [
    'getting-started.html',
    'architecture.html',
    'web-mode.html',
    'installation.html',
    'connection-manager.html',
    'settings-preferences.html',
    'security-model.html',
    'quickstart.html'
  ],
  desktop: [
    'cloud-desktop.html',
    'terminal.html',
    'sftp-file-manager.html',
    'monaco-code-editor.html',
    'sticky-notes.html'
  ],
  containers: [
    'docker-management.html',
    'database-studio.html',
    'ssh-tunneling.html'
  ],
  sysadmin: [
    'systemd-services.html',
    'hardware-telemetry.html',
    'process-manager.html',
    'package-manager.html',
    'user-sudoers-admin.html',
    'disk-smart-manager.html',
    'crontab-scheduler.html'
  ],
  security: [
    'firewall-ufw.html',
    'network-port-auditor.html',
    'ssl-certificates.html',
    'security-audit-lynis.html'
  ],
  automation: [
    'env-variables-manager.html',
    'backup-disaster-recovery.html',
    'multi-server-snippets.html',
    'log-analysis-grep.html',
    'reverse-proxy-browser.html',
    'api-studio.html'
  ],
  guides: [
    'tutorials.html',
    'cheat-sheet.html',
    'keyboard-shortcuts.html',
    'troubleshooting.html',
    'raspberry-pi-desktop.html',
    'rdp-over-ssh.html',
    'aws-ec2-guide.html',
    'cloud-vps-guide.html',
    'faq.html'
  ]
};

const dataDir = path.join(__dirname, 'chapter_data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

for (const [groupName, slugs] of Object.entries(categoryGroups)) {
  const groupObj = {};
  for (const slug of slugs) {
    if (details[slug]) {
      groupObj[slug] = details[slug];
    }
  }
  const fileContent = `// scripts/chapter_data/${groupName}.js\nmodule.exports = ${JSON.stringify(groupObj, null, 2)};\n`;
  fs.writeFileSync(path.join(dataDir, `${groupName}.js`), fileContent, 'utf8');
  console.log(`Created scripts/chapter_data/${groupName}.js with ${Object.keys(groupObj).length} chapters`);
}

// Create chapter_data/index.js
const indexContent = `// scripts/chapter_data/index.js
const core = require('./core');
const desktop = require('./desktop');
const containers = require('./containers');
const sysadmin = require('./sysadmin');
const security = require('./security');
const automation = require('./automation');
const guides = require('./guides');

module.exports = {
  ...core,
  ...desktop,
  ...containers,
  ...sysadmin,
  ...security,
  ...automation,
  ...guides
};
`;
fs.writeFileSync(path.join(dataDir, 'index.js'), indexContent, 'utf8');
console.log('Created scripts/chapter_data/index.js');

// Now rewrite scripts/build_all_chapters.js to import chapterDetails
const preamble = code.slice(0, start);
const postamble = code.slice(end);

const newBuildAllCode = `${preamble}const chapterDetails = require('./chapter_data');\n\n${postamble}`;
fs.writeFileSync(path.join(__dirname, 'build_all_chapters.js'), newBuildAllCode, 'utf8');
console.log(`Updated scripts/build_all_chapters.js: reduced from ${code.length} bytes to ${newBuildAllCode.length} bytes!`);
