// scripts/reorganize_docs_architecture.js
// Reorganizes chapters into 25 Official Native Apps and distinct Guides/Core sections,
// and removes webhook-server.html.

const fs = require('fs');
const path = require('path');

const compPath = path.join(__dirname, 'build_comprehensive_docs.js');
let compCode = fs.readFileSync(compPath, 'utf8');

// Define new clean categories
const newCategories = `const categories = [
  { name: 'Getting Started & Core', slug: 'overview' },
  { name: '25 Native Apps: Desktop & Terminal', slug: 'desktop' },
  { name: '25 Native Apps: Containers & Databases', slug: 'containers' },
  { name: '25 Native Apps: System Administration', slug: 'sysadmin' },
  { name: '25 Native Apps: Security & Networking', slug: 'security' },
  { name: '25 Native Apps: Automation & Tools', slug: 'automation' },
  { name: 'Guides, Tutorials & Homelab', slug: 'guides' }
];`;

// Replace categories definition
compCode = compCode.replace(/const categories = \[[\s\S]*?\];/m, newCategories);

// Category mapping by slug
const categoryMap = {
  // Getting Started & Core
  'getting-started.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'quickstart.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'installation.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'architecture.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'security-model.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'web-mode.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'connection-manager.html': { category: 'Getting Started & Core', catSlug: 'overview' },
  'settings-preferences.html': { category: 'Getting Started & Core', catSlug: 'overview' },

  // 25 Native Apps: Desktop & Terminal
  'cloud-desktop.html': { category: '25 Native Apps: Desktop & Terminal', catSlug: 'desktop' },
  'terminal.html': { category: '25 Native Apps: Desktop & Terminal', catSlug: 'desktop' },
  'sftp-file-manager.html': { category: '25 Native Apps: Desktop & Terminal', catSlug: 'desktop' },
  'monaco-code-editor.html': { category: '25 Native Apps: Desktop & Terminal', catSlug: 'desktop' },
  'sticky-notes.html': { category: '25 Native Apps: Desktop & Terminal', catSlug: 'desktop' },

  // 25 Native Apps: Containers & Databases
  'docker-management.html': { category: '25 Native Apps: Containers & Databases', catSlug: 'containers' },
  'database-studio.html': { category: '25 Native Apps: Containers & Databases', catSlug: 'containers' },
  'ssh-tunneling.html': { category: '25 Native Apps: Containers & Databases', catSlug: 'containers' },

  // 25 Native Apps: System Administration
  'systemd-services.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },
  'hardware-telemetry.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },
  'process-manager.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },
  'package-manager.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },
  'user-sudoers-admin.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },
  'disk-smart-manager.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },
  'crontab-scheduler.html': { category: '25 Native Apps: System Administration', catSlug: 'sysadmin' },

  // 25 Native Apps: Security & Networking
  'firewall-ufw.html': { category: '25 Native Apps: Security & Networking', catSlug: 'security' },
  'network-port-auditor.html': { category: '25 Native Apps: Security & Networking', catSlug: 'security' },
  'ssl-certificates.html': { category: '25 Native Apps: Security & Networking', catSlug: 'security' },
  'security-audit-lynis.html': { category: '25 Native Apps: Security & Networking', catSlug: 'security' },

  // 25 Native Apps: Automation & Tools
  'env-variables-manager.html': { category: '25 Native Apps: Automation & Tools', catSlug: 'automation' },
  'backup-disaster-recovery.html': { category: '25 Native Apps: Automation & Tools', catSlug: 'automation' },
  'multi-server-snippets.html': { category: '25 Native Apps: Automation & Tools', catSlug: 'automation' },
  'log-analysis-grep.html': { category: '25 Native Apps: Automation & Tools', catSlug: 'automation' },
  'reverse-proxy-browser.html': { category: '25 Native Apps: Automation & Tools', catSlug: 'automation' },
  'api-studio.html': { category: '25 Native Apps: Automation & Tools', catSlug: 'automation' },

  // Guides, Tutorials & Homelab
  'tutorials.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'cheat-sheet.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'keyboard-shortcuts.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'troubleshooting.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'raspberry-pi-desktop.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'rdp-over-ssh.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'aws-ec2-guide.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'cloud-vps-guide.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' },
  'faq.html': { category: 'Guides, Tutorials & Homelab', catSlug: 'guides' }
};

// Update chapter categories in build_comprehensive_docs.js
for (const [slug, meta] of Object.entries(categoryMap)) {
  const regex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?category:\\s*')[^']+('[\\s\\S]*?catSlug:\\s*')[^']+'`, 'm');
  if (regex.test(compCode)) {
    compCode = compCode.replace(regex, `$1${meta.category}$2${meta.catSlug}'`);
  }
}

// Remove webhook-server.html object from chapters
compCode = compCode.replace(/\s*\{\s*slug:\s*'webhook-server\.html'[\s\S]*?\},/m, '');

fs.writeFileSync(compPath, compCode, 'utf8');
console.log('build_comprehensive_docs.js updated with new categories and webhook-server removed.');

// Write redirect stub for docs/webhook-server.html
const docsDir = path.join(__dirname, '..', 'docs');
const webhookRedirect = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=multi-server-snippets.html">
  <link rel="canonical" href="https://sshdesktop.com/docs/multi-server-snippets.html">
  <title>Multi-Server Automation & Snippets - SSH Desktop Docs</title>
</head>
<body style="background:#0f172a;color:#cbd5e1;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Redirecting to <a href="multi-server-snippets.html" style="color:#38bdf8;">Multi-Server Automation &amp; Snippets &rarr;</a></p>
  <script>window.location.replace("multi-server-snippets.html");</script>
</body>
</html>`;
fs.writeFileSync(path.join(docsDir, 'webhook-server.html'), webhookRedirect, 'utf8');
console.log('docs/webhook-server.html alias written.');
