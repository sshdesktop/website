// scripts/add_missing_docs.js
// Adds 10 core missing documentation guides + 6 URL aliases to complete the documentation suite.

const fs = require('fs');
const path = require('path');

const newChapters = [
  {
    slug: 'installation.html',
    title: 'Installation & Platform Support',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '💿',
    seoTitle: 'Install SSH Desktop on macOS, Windows & Linux - Setup Guide',
    description: 'Download and install SSH Desktop on macOS (Universal DMG), Windows 10/11 (MSI installer), or Linux (AppImage, DEB, RPM, AUR). System requirements and step-by-step setup.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Complex terminal package setups, bloated Electron installers',
    commands: 'dmg install, msi exec, dpkg -i, chmod +x AppImage',
    summary: 'Native installation guide for macOS (Apple Silicon & Intel), Windows 11/10, and Linux desktops (Ubuntu, Debian, Fedora, Arch) with automated updates.'
  },
  {
    slug: 'connection-manager.html',
    title: 'Connection Manager & SSH Keys',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '🔑',
    seoTitle: 'SSH Connection Manager & Key Setup Guide - SSH Desktop Docs',
    description: 'Learn how to configure SSH host profiles, generate Ed25519 cryptographic keys, automatically import ~/.ssh/config, and route traffic through Bastion jump hosts.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/pages/ConnectionScreen.tsx',
    githubLabel: 'src/pages/ConnectionScreen.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Manual ssh CLI configs, complex ~/.ssh/config files, PuTTY saved sessions',
    commands: 'ssh-keygen -t ed25519, ssh-copy-id, ProxyJump, ~/.ssh/known_hosts',
    summary: 'Comprehensive host inventory management: create server profiles, organize with tags, configure Bastion jump hosts, and manage cryptographic keys.'
  },
  {
    slug: 'settings-preferences.html',
    title: 'Settings, Themes & Preferences',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '⚙️',
    seoTitle: 'App Preferences & Theme Customization - SSH Desktop Docs',
    description: 'Customize SSH Desktop: configure color themes (Dark, OLED Midnight, Tokyo Night), terminal fonts, ligature rendering, keybindings, and low-bandwidth mode.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/apps/settings/AppSettings.tsx',
    githubLabel: 'src/apps/settings/AppSettings.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Clunky config files, terminal theme hacking, manual font overrides',
    commands: 'Local preferences store, font ligature engine, dark mode CSS variables',
    summary: 'Visual settings workspace: customize desktop appearance, choose editor/terminal color schemes, toggle low-bandwidth telemetry, and manage keybindings.'
  },
  {
    slug: 'faq.html',
    title: 'Frequently Asked Questions (FAQ)',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '❓',
    seoTitle: 'SSH Desktop FAQ - Common Questions & Architecture Details',
    description: 'Find answers to common questions about SSH Desktop: security guarantees, agentless architecture, supported Linux distros, credential storage, and licensing.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Scattered forums, confusing documentation, unverified advice',
    commands: 'POSIX SSH protocol, OS Keychain vault, zero cloud telemetry',
    summary: 'Answers to top questions regarding agentless SSH operations, OS Keychain security, network bandwidth, firewall ports, and multi-server fleet management.'
  },
  {
    slug: 'keyboard-shortcuts.html',
    title: 'Master Keyboard Shortcuts',
    category: 'Desktop & Terminal',
    catSlug: 'desktop',
    icon: '⌨️',
    seoTitle: 'Master Keyboard Shortcuts & Hotkeys Cheat Sheet - SSH Desktop Docs',
    description: 'Comprehensive keyboard shortcuts cheat sheet for SSH Desktop. Master hotkeys for Spotlight search (Cmd+K), split terminals, code editor, and window tiling.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src/shell',
    screenshot: 'screenshot-terminal',
    replaces: 'Memorizing tmux key combinations, tedious mouse clicking',
    commands: 'Global hotkey interceptor, Xterm keybindings, Monaco shortcut maps',
    summary: 'Complete cheat sheet of hotkeys for the desktop shell, interactive PTY terminal split panes, Monaco code editor, and multi-server switcher.'
  },
  {
    slug: 'raspberry-pi-desktop.html',
    title: 'Raspberry Pi Remote Desktop & Homelab',
    category: 'Desktop & Terminal',
    catSlug: 'desktop',
    icon: '🍓',
    seoTitle: 'Raspberry Pi SSH Remote Desktop GUI - SSH Desktop Docs',
    description: 'Control headless Raspberry Pi (Pi 5, 4, 3, Zero) visually over SSH. Monitor CPU temperature, inspect storage, manage Docker containers, and edit config files.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'VNC Viewer lag, Raspberry Pi Connect subscription, tedious CLI commands',
    commands: 'vcgencmd measure_temp, /boot/firmware/config.txt, gpio, systemctl',
    summary: 'Turn headless Raspberry Pi boards into a visual macOS-style desktop: monitor CPU thermal sensors, edit config.txt, and run Docker containers with zero lag.'
  },
  {
    slug: 'troubleshooting.html',
    title: 'Troubleshooting & Connection Fixes',
    category: 'System Administration',
    catSlug: 'sysadmin',
    icon: '🛠️',
    seoTitle: 'SSH Connection Troubleshooting Guide - SSH Desktop Docs',
    description: 'Step-by-step diagnostic guide for resolving SSH connection issues: Connection refused, Permission denied (publickey), Host key verification, and timeout errors.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src-tauri',
    screenshot: 'screenshot-network',
    replaces: 'Googling obscure StackOverflow threads, parsing raw ssh -vvv verbose logs',
    commands: 'ssh -vvv, systemctl status sshd, ufw status, journalctl -u ssh',
    summary: 'Diagnostic manual for solving common SSH errors: Connection Refused, Permission Denied, Host Key Verification Failed, and Docker socket permissions.'
  },
  {
    slug: 'rdp-over-ssh.html',
    title: 'RDP Over SSH Tunneling Guide',
    category: 'Security & Networking',
    catSlug: 'security',
    icon: '🔒',
    seoTitle: 'Secure RDP Over SSH Tunnel (Port 3389) - SSH Desktop Docs',
    description: 'How to tunnel Remote Desktop Protocol (RDP port 3389) over an encrypted SSH port 22 connection. Access Windows and XRDP servers without exposing port 3389 publicly.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/ssh',
    githubLabel: 'src/apps/ssh',
    screenshot: 'screenshot-tunnels',
    replaces: 'Exposing raw RDP port 3389 to internet ransomware bots, complex VPN clients',
    commands: 'ssh -L 3389:localhost:3389, mstsc.exe 127.0.0.1:3389, xrdp',
    summary: 'Secure Remote Desktop guide: tunnel RDP traffic over encrypted SSH port 22, protect against ransomware port scans, and connect to Windows or XRDP.'
  },
  {
    slug: 'aws-ec2-guide.html',
    title: 'AWS EC2 SSH Connection Guide',
    category: 'Automation & Gateways',
    catSlug: 'automation',
    icon: '☁️',
    seoTitle: 'Connect to AWS EC2 Instances with SSH Desktop - Complete Guide',
    description: 'Step-by-step tutorial on connecting SSH Desktop to Amazon Web Services (AWS) EC2 instances. How to use .pem keypairs, configure VPC Security Groups, and Jump Hosts.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'AWS EC2 Instance Connect browser lag, PuTTYgen .pem to .ppk conversion',
    commands: 'chmod 400 key.pem, ssh -i key.pem ec2-user@ec2-ip, VPC Security Group 22',
    summary: 'Step-by-step AWS EC2 integration guide: connect with .pem keys, configure VPC Security Groups, tunnel through Bastion hosts, and manage cloud fleets.'
  },
  {
    slug: 'cloud-vps-guide.html',
    title: 'Multi-Cloud VPS Management Guide',
    category: 'Automation & Gateways',
    catSlug: 'automation',
    icon: '🌐',
    seoTitle: 'Multi-Cloud VPS Management (DigitalOcean, Hetzner, Linode) - SSH Desktop',
    description: 'Centralize server management across DigitalOcean, Hetzner Cloud, Linode, Vultr, and OVH. Manage root logins, firewall rules, and backups agentlessly.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Logging into 5 different cloud web consoles, manual SSH connection tracking',
    commands: 'cloud-init, ufw, root ssh key authentication, cloud firewall rules',
    summary: 'Unified cloud management guide: organize Droplets and Cloud VPS instances across multiple cloud providers with zero agents and centralized key management.'
  }
];

// Step 1: Update scripts/build_comprehensive_docs.js if new chapters not present
const compDocsPath = path.join(__dirname, 'build_comprehensive_docs.js');
let compDocsContent = fs.readFileSync(compDocsPath, 'utf8');

for (const ch of newChapters) {
  if (!compDocsContent.includes(`slug: '${ch.slug}'`)) {
    console.log(`Adding ${ch.slug} to build_comprehensive_docs.js...`);
    const insertPos = compDocsContent.lastIndexOf('];');
    const chJson = `  {\n    slug: '${ch.slug}',\n    title: '${ch.title}',\n    category: '${ch.category}',\n    catSlug: '${ch.catSlug}',\n    icon: '${ch.icon}',\n    seoTitle: '${ch.seoTitle.replace(/'/g, "\\'")}',\n    description: '${ch.description.replace(/'/g, "\\'")}',\n    github: '${ch.github}',\n    githubLabel: '${ch.githubLabel}',\n    screenshot: '${ch.screenshot}',\n    replaces: '${ch.replaces.replace(/'/g, "\\'")}',\n    commands: '${ch.commands.replace(/'/g, "\\'")}',\n    summary: '${ch.summary.replace(/'/g, "\\'")}'\n  },\n`;
    compDocsContent = compDocsContent.slice(0, insertPos) + chJson + compDocsContent.slice(insertPos);
  }
}
fs.writeFileSync(compDocsPath, compDocsContent, 'utf8');
console.log('build_comprehensive_docs.js updated.');

