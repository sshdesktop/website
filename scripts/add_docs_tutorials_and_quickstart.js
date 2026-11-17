// scripts/add_docs_tutorials_and_quickstart.js
// Adds docs/tutorials.html, docs/quickstart.html, docs/cheat-sheet.html, docs/security-model.html

const fs = require('fs');
const path = require('path');
const docsDir = path.join(__dirname, '..', 'docs');

const docAdditions = [
  {
    slug: 'tutorials.html',
    title: 'Server Management Tutorials',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '📚',
    seoTitle: 'Step-by-Step Server Management Tutorials - SSH Desktop Docs',
    description: 'Master everyday Linux server management with visual tutorials: Docker stacks, private database tunnels, dual-pane SFTP, Nginx reverse proxy, and firewalls.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Scattered blog posts, outdated Linux tutorials, trial-and-error CLI commands',
    commands: 'ssh-keygen, docker-compose up, ss -tulpn, ufw allow, rsync -avz',
    summary: 'Comprehensive collection of hands-on tutorials for server provisioning, Docker stacks, private database tunnels, reverse proxying, and automated backups.',
    lead: 'Master everyday Linux server management with practical visual tutorials. Learn how to deploy Docker containers, configure encrypted database tunnels, manage web files, and secure your servers.',
    whatIsIt: 'The Tutorials Hub provides hands-on, step-by-step guides for the 10 most common Linux server administration scenarios. Rather than reading theoretical documentation, these tutorials walk you through exact visual workflows in SSH Desktop.',
    whyNeedIt: 'Managing Linux servers often involves navigating fragmented documentation across multiple software tools. These tutorials provide a unified, end-to-end blueprint for managing infrastructure visually without remote agents.',
    prerequisites: [
      'SSH Desktop installed on macOS, Windows, or Linux.',
      'A remote Linux server (VPS or bare metal) accessible over SSH port 22.'
    ],
    features: [
      '<strong>10 Hands-on Tutorials:</strong> Covers fresh server setup, Docker stacks, database tunnels, SFTP, Nginx, SSL certs, backups, UFW, logs, and fleet automation.',
      '<strong>Zero Server Footprint:</strong> Every tutorial executes via native Linux commands over SSH without installing remote server agents.',
      '<strong>Visual UI & Terminal Parity:</strong> Learn both the visual GUI workflows and the exact underlying Linux commands executed.'
    ],
    steps: [
      {
        title: '1. Tutorial: Fresh Server Setup & Ed25519 Keys',
        content: `Generate modern Ed25519 keys, copy to <code>authorized_keys</code>, configure host profile, and verify connection fingerprint in under 2 minutes.`
      },
      {
        title: '2. Tutorial: Deploying a Multi-Container Docker Stack',
        content: `Open Docker Hub, switch to the Compose Editor, paste your <code>docker-compose.yml</code>, click Build & Run, and inspect live container logs.`
      },
      {
        title: '3. Tutorial: Accessing Private Databases Over SSH',
        content: `Connect to PostgreSQL, MySQL, MariaDB, or Redis listening on <code>127.0.0.1</code> through an automated Direct-TCPIP tunnel without opening public database ports.`
      },
      {
        title: '4. Tutorial: Visual Nginx Reverse Proxy with Zero Downtime',
        content: `Configure virtual host server blocks, test configurations with automated <code>nginx -t</code> checks, and reload web servers safely.`
      }
    ],
    underTheHood: 'Tutorials leverage standard OpenSSH channel multiplexing (PTY, SFTP binary subsystem, and Direct-TCPIP sockets).',
    shortcuts: [
      { key: 'Cmd/Ctrl + K', desc: 'Spotlight Quick Launcher' }
    ],
    interfaceTour: `The <strong>Tutorials Portal</strong> organizes guides by difficulty and topic (Beginner, Intermediate, Advanced). Each tutorial includes visual screenshots, prerequisites, copy-paste snippets, and pro-tips.`,
    proTips: [
      '<strong>Follow Sequentially:</strong> Beginners should complete the Fresh Server Setup and Docker tutorials first to establish a solid foundation.',
      '<strong>Test in Homelab / Staging:</strong> Practice new workflows on a staging VPS or Raspberry Pi before applying changes to production servers.'
    ],
    troubleshooting: [
      {
        q: 'Step fails due to missing package on server',
        a: 'Ensure prerequisite software (such as Docker, Nginx, or UFW) is installed on your Linux host via the Package Manager app before following specific tutorials.'
      }
    ]
  },

  {
    slug: 'quickstart.html',
    title: '3-Minute Quickstart Guide',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '⚡',
    seoTitle: '3-Minute Quickstart Guide - From Zero to Cloud Desktop',
    description: 'Get up and running with SSH Desktop in under 3 minutes: install the native app, import existing SSH configs, connect to your server, and launch applications.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Lengthy manual onboarding, complex CLI configuration',
    commands: 'ssh connection, ~/.ssh/config parser, Spotlight launcher',
    summary: 'Fast-track onboarding guide: download the desktop binary, auto-import ~/.ssh/config, launch your cloud desktop, and master Spotlight (Cmd+K).',
    lead: 'From zero to visual server desktop in 3 minutes. Fast-track onboarding guide to installing SSH Desktop, importing host profiles, and launching applications.',
    whatIsIt: 'The 3-Minute Quickstart is designed for busy developers and sysadmins who want to get up and running immediately. It covers downloading the binary, auto-importing existing hosts, and launching your first desktop session in four simple steps.',
    whyNeedIt: 'Getting started with new infrastructure tools shouldn\'t require hours of reading. This guide gets you connected and productive in less than 180 seconds.',
    prerequisites: [
      'macOS, Windows, or Linux desktop PC.',
      'Any remote Linux server with SSH credentials.'
    ],
    features: [
      '<strong>Sub-3-Minute Setup:</strong> Fast, frictionless onboarding with automated configuration discovery.',
      '<strong>Automatic ~/.ssh/config Import:</strong> Instantly detects and imports your existing OpenSSH hosts.',
      '<strong>Keyboard-First Navigation:</strong> Master the core <kbd>Cmd+K</kbd> launcher in seconds.'
    ],
    steps: [
      {
        title: '1. Download & Launch the Native Binary',
        content: `Download for your OS (<a href="../download-mac.html" style="color: #38bdf8;">macOS DMG</a>, <a href="../download-windows.html" style="color: #38bdf8;">Windows MSI</a>, or <a href="../download-linux-desktop.html" style="color: #38bdf8;">Linux AppImage</a>). Launch the application.`
      },
      {
        title: '2. Add or Import Your Server Connection',
        content: `Click <strong>+ New Connection</strong> or click <strong>Import ~/.ssh/config</strong>. Enter your server hostname or IP address, username, and select your private key.`
      },
      {
        title: '3. Experience the macOS Cloud Desktop',
        content: `Click Connect. Your server\'s visual desktop shell launches immediately with a floating window manager, top menu bar, and macOS-style Dock.`
      },
      {
        title: '4. Master the Spotlight Launcher (Cmd/Ctrl + K)',
        content: `Press <kbd>Cmd/Ctrl + K</kbd> to search across apps, server profiles, and shell snippets. Type <code>docker</code> or <code>logs</code> to jump into any tool instantly.`
      }
    ],
    underTheHood: 'Parses local OpenSSH configuration files using an internal Rust tokenizer and initializes the encrypted session over port 22.',
    shortcuts: [
      { key: 'Cmd/Ctrl + K', desc: 'Spotlight Quick Launcher' },
      { key: 'Cmd/Ctrl + ,', desc: 'Open Preferences' }
    ],
    interfaceTour: `The <strong>Quickstart Welcome Interface</strong> introduces the desktop layout: Dock at the bottom, top menu bar with server switcher, and the central workspace for floating, snapping windows.`,
    proTips: [
      '<strong>Pin Favorite Apps:</strong> Drag frequently used applications to the front of the Dock for instant access upon connecting.',
      '<strong>Multi-Server Switching:</strong> Connect to multiple servers simultaneously and switch between them using the top-left menu bar.'
    ],
    troubleshooting: [
      {
        q: 'Cannot find where my SSH private keys are located',
        a: 'Standard OpenSSH keys are stored in <code>~/.ssh/</code> (or <code>C:\\Users\\Username\\.ssh\\</code> on Windows). Click "Browse" in the connection modal to select your key.'
      }
    ]
  },

  {
    slug: 'cheat-sheet.html',
    title: 'Linux Server & SSH Cheat Sheet',
    category: 'Desktop & Terminal',
    catSlug: 'desktop',
    icon: '📋',
    seoTitle: 'The Ultimate Linux Server & SSH Key Cheat Sheet (2026 Reference)',
    description: 'Comprehensive cheat sheet for sysadmins: OpenSSH commands, Ed25519 key generation, ssh config syntax, port forwarding tunnels, systemd units, UFW rules, and permissions.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-terminal',
    replaces: 'Memorizing dozens of obscure CLI flags, searching StackOverflow',
    commands: 'ssh -L, ssh-keygen -t ed25519, systemctl, ufw, chmod, ss -tulpn',
    summary: 'The definitive reference card: essential OpenSSH commands, port forwarding syntax, systemd lifecycle commands, UFW firewall rules, and octal permissions.',
    lead: 'The ultimate sysadmin quick reference card. Essential OpenSSH commands, Ed25519 keypair generation, port forwarding tunnel syntax, systemd controls, and firewall rules.',
    whatIsIt: 'The Linux Server & SSH Cheat Sheet is a curated reference guide of the most critical terminal commands used in day-to-day server administration. It provides exact command syntax for SSH keygen, port forwarding, systemd management, and security auditing.',
    whyNeedIt: 'Even seasoned sysadmins forget exact flag syntax for tunnel forwarding (<code>-L</code> vs <code>-R</code> vs <code>-D</code>) or octal permissions. This cheat sheet serves as an instant reference companion.',
    prerequisites: [
      'Any Linux distribution running OpenSSH.'
    ],
    features: [
      '<strong>Complete SSH Command Syntax:</strong> Covers key generation, remote port forwarding, Jump Hosts, and verbose debugging.',
      '<strong>Systemd Lifecycle Reference:</strong> Commands for starting, stopping, reloading, enabling, and inspecting failed units.',
      '<strong>UFW & Networking Cheat Sheet:</strong> Port allowance, rate limiting, and socket inspection with <code>ss</code>.'
    ],
    steps: [
      {
        title: '1. SSH Key Management & Permissions Syntax',
        content: `Essential key generation and permission commands:
<div class="docs-code-block"># Generate Ed25519 key
ssh-keygen -t ed25519 -C "admin@sshdesktop"

# Copy public key to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server

# Strict file permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub</div>`
      },
      {
        title: '2. SSH Port Forwarding & Tunneling Syntax',
        content: `Quick reference for Local, Remote, and Dynamic forwarding:
<div class="docs-code-block"># Local Forwarding: ssh -L [local_port]:[remote_host]:[remote_port]
ssh -L 5432:localhost:5432 user@server

# Remote Forwarding: ssh -R [remote_port]:[local_host]:[local_port]
ssh -R 8080:localhost:3000 user@server

# Dynamic SOCKS5 Proxy
ssh -D 1080 -N -f user@server

# Multi-hop Jump Host
ssh -J jump.example.com user@target-node</div>`
      },
      {
        title: '3. Systemd Unit Controls',
        content: `Managing services and timers:
<div class="docs-code-block">sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo systemctl enable nginx
sudo systemctl status nginx
sudo systemctl --failed
sudo journalctl -u nginx -f --tail=100</div>`
      },
      {
        title: '4. Visual Equivalent in SSH Desktop',
        content: `Every command in this cheat sheet is natively available as a one-click visual action in SSH Desktop\'s 25 native applications (Systemd Services, Database Studio, Firewall Manager, and Tunnels).`
      }
    ],
    underTheHood: 'All cheat sheet operations map directly to standard POSIX system calls and OpenSSH protocol requests.',
    shortcuts: [
      { key: 'Cmd/Ctrl + F', desc: 'Search Cheat Sheet Commands' }
    ],
    interfaceTour: `The <strong>Cheat Sheet View</strong> provides one-click copy buttons for every command block and quick cross-links to visual GUI tools in SSH Desktop.`,
    proTips: [
      '<strong>Use Bastion Directives:</strong> Add <code>ProxyJump jump-server</code> to your <code>~/.ssh/config</code> for permanent multi-hop routing.',
      '<strong>Test Configs Before Reload:</strong> Always run <code>nginx -t</code> or <code>visudo -c</code> before reloading system services.'
    ],
    troubleshooting: [
      {
        q: 'Permission denied (publickey) despite key copied',
        a: 'Check <code>/var/log/auth.log</code> or run <code>sudo journalctl -u ssh</code> on the server to see why sshd rejected the key (often due to loose directory permissions on the home folder).'
      }
    ]
  },

  {
    slug: 'security-model.html',
    title: 'Security Model & Zero-Agent Trust',
    category: 'Security & Networking',
    catSlug: 'security',
    icon: '🛡️',
    seoTitle: 'Security Model & Zero-Agent Architecture - SSH Desktop Docs',
    description: 'Detailed security blueprint for SSH Desktop. Explore zero-agent architecture, hardware keychain credential storage, memory safety, and zero cloud telemetry.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src-tauri',
    screenshot: 'screenshot-security-auditor',
    replaces: 'Vulnerable web control panels with open HTTP ports, third-party cloud sync',
    commands: 'OpenSSH protocol, OS Keychain / DPAPI, libssh2 / russh memory safety',
    summary: 'Enterprise security blueprint: zero server daemons, zero open HTTP ports, hardware-backed credential storage, and total data isolation.',
    lead: 'Comprehensive architectural security blueprint. Discover how SSH Desktop guarantees 100% data privacy with zero server daemons, zero open web ports, and hardware-backed credential vaults.',
    whatIsIt: 'The Security Model documentation details the cryptographic foundations and security guarantees of SSH Desktop. It explains why an agentless architecture eliminates entire classes of remote code execution (RCE) vulnerabilities and keeps servers hardened.',
    whyNeedIt: 'Security officers, enterprise compliance auditors, and sysadmins need formal verification that desktop tools comply with SOC 2, HIPAA, and ISO 27001 data isolation policies.',
    prerequisites: [
      'Standard OpenSSH server (sshd).'
    ],
    features: [
      '<strong>100% Agentless Architecture:</strong> Leaves zero background daemons, cron jobs, or monitoring processes on remote machines.',
      '<strong>Zero Open Web Ports:</strong> All communication flows exclusively through standard OpenSSH port 22.',
      '<strong>Hardware-Backed Credential Storage:</strong> Passphrases stored in macOS Keychain, Windows DPAPI, or Linux Secret Service.',
      '<strong>Zero Cloud Telemetry:</strong> No analytics, tracking, or cloud relay servers. All traffic is direct between client and host.'
    ],
    steps: [
      {
        title: '1. Zero-Agent Security Philosophy',
        content: `Traditional control panels run web daemons as root on your server, exposing open HTTP ports vulnerable to remote exploitation. SSH Desktop executes all rendering locally and executes standard POSIX commands over encrypted SSH, leaving your server completely untouched.`
      },
      {
        title: '2. Cryptographic Handshake & Fingerprint Validation',
        content: `SSH Desktop negotiates modern ciphers (ChaCha20-Poly1305, AES-256-GCM) and verifies host keys against <code>~/.ssh/known_hosts</code> to protect against Man-in-the-Middle (MITM) attacks.`
      },
      {
        title: '3. Operating System Credential Isolation',
        content: `Private key passphrases and server passwords are encrypted using native OS hardware vaults:
<ul>
  <li><strong>macOS:</strong> Apple Keychain with Secure Enclave protection.</li>
  <li><strong>Windows:</strong> Windows Data Protection API (DPAPI).</li>
  <li><strong>Linux:</strong> FreeDesktop Secret Service API (gnome-keyring / KWallet).</li>
</ul>`
      },
      {
        title: '4. Memory Safety with Rust',
        content: `The entire networking backend is compiled in memory-safe Rust, preventing buffer overflow, use-after-free, and memory corruption vulnerabilities.`
      }
    ],
    underTheHood: 'All SSH channels are multiplexed asynchronously using audited cryptographic primitives.',
    shortcuts: [
      { key: 'Cmd/Ctrl + K', desc: 'Spotlight Quick Launcher' }
    ],
    interfaceTour: `The <strong>Security & Compliance Overview</strong> provides verification checklists for CIS benchmarks, SSH daemon hardening recommendations, and credential vault status.`,
    proTips: [
      '<strong>Disable Password Authentication:</strong> Set <code>PasswordAuthentication no</code> in <code>/etc/ssh/sshd_config</code> to enforce cryptographic key logins.',
      '<strong>Rotate Keys Periodically:</strong> Generate fresh Ed25519 keys every 6 to 12 months for sensitive production servers.'
    ],
    troubleshooting: [
      {
        q: 'Does SSH Desktop collect any anonymous telemetry?',
        a: 'No. SSH Desktop has zero tracking code, zero Google Analytics, zero telemetry beacons, and zero phone-home servers. It is 100% private.'
      }
    ]
  }
];

// Step 1: Update scripts/build_comprehensive_docs.js
console.log('Step 1: Updating build_comprehensive_docs.js...');
const compPath = path.join(__dirname, 'build_comprehensive_docs.js');
let compCode = fs.readFileSync(compPath, 'utf8');

for (const ch of docAdditions) {
  if (!compCode.includes(`slug: '${ch.slug}'`)) {
    console.log(`Adding ${ch.slug} to build_comprehensive_docs.js`);
    const insertIdx = compCode.lastIndexOf('];\n\n// Group categories');
    const entry = `  {
    slug: '${ch.slug}',
    title: '${ch.title.replace(/'/g, "\\'")}',
    category: '${ch.category}',
    catSlug: '${ch.catSlug}',
    icon: '${ch.icon}',
    seoTitle: '${ch.seoTitle.replace(/'/g, "\\'")}',
    description: '${ch.description.replace(/'/g, "\\'")}',
    github: '${ch.github}',
    githubLabel: '${ch.githubLabel}',
    screenshot: '${ch.screenshot}',
    replaces: '${ch.replaces.replace(/'/g, "\\'")}',
    commands: '${ch.commands.replace(/'/g, "\\'")}',
    summary: '${ch.summary.replace(/'/g, "\\'")}'
  },\n`;
    compCode = compCode.slice(0, insertIdx) + entry + compCode.slice(insertIdx);
  }
}
fs.writeFileSync(compPath, compCode, 'utf8');
console.log('build_comprehensive_docs.js updated.');

// Step 2: Update scripts/chapter_enrichments.js
console.log('Step 2: Updating chapter_enrichments.js...');
const enrichPath = path.join(__dirname, 'chapter_enrichments.js');
let enrichCode = fs.readFileSync(enrichPath, 'utf8');

for (const ch of docAdditions) {
  if (!enrichCode.includes(`'${ch.slug}':`)) {
    console.log(`Adding ${ch.slug} to chapter_enrichments.js`);
    const insertIdx = enrichCode.lastIndexOf('};');
    const enrichEntry = `  '${ch.slug}': {
    interfaceTour: \`${ch.interfaceTour}\`,
    proTips: ${JSON.stringify(ch.proTips, null, 6)},
    troubleshooting: ${JSON.stringify(ch.troubleshooting, null, 6)}
  },\n\n`;
    enrichCode = enrichCode.slice(0, insertIdx) + enrichEntry + enrichCode.slice(insertIdx);
  }
}
fs.writeFileSync(enrichPath, enrichCode, 'utf8');
console.log('chapter_enrichments.js updated.');

// Step 3: Update scripts/build_all_chapters.js
console.log('Step 3: Updating build_all_chapters.js...');
const allChapPath = path.join(__dirname, 'build_all_chapters.js');
let allChapCode = fs.readFileSync(allChapPath, 'utf8');

for (const ch of docAdditions) {
  if (!allChapCode.includes(`'${ch.slug}': {`)) {
    console.log(`Adding ${ch.slug} to build_all_chapters.js`);
    const detailObj = `  '${ch.slug}': {
    lead: '${ch.lead.replace(/'/g, "\\'")}',
    whatIsIt: '${ch.whatIsIt.replace(/'/g, "\\'")}',
    whyNeedIt: '${ch.whyNeedIt.replace(/'/g, "\\'")}',
    prerequisites: ${JSON.stringify(ch.prerequisites, null, 6)},
    features: ${JSON.stringify(ch.features, null, 6)},
    steps: ${JSON.stringify(ch.steps, null, 6)},
    underTheHood: '${ch.underTheHood.replace(/'/g, "\\'")}',
    shortcuts: ${JSON.stringify(ch.shortcuts, null, 6)}
  },\n\n`;

    const insertPosition = allChapCode.indexOf('function buildAllChapters');
    const lastBraceBeforeFunc = allChapCode.lastIndexOf('};', insertPosition);
    allChapCode = allChapCode.slice(0, lastBraceBeforeFunc) + detailObj + allChapCode.slice(lastBraceBeforeFunc);
  }
}
fs.writeFileSync(allChapPath, allChapCode, 'utf8');
console.log('build_all_chapters.js updated.');

// Step 4: Create docs/tutorial.html alias
const docsTutAlias = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=tutorials.html">
  <link rel="canonical" href="https://sshdesktop.com/docs/tutorials.html">
  <title>Server Management Tutorials - SSH Desktop Docs</title>
</head>
<body style="background:#0f172a;color:#cbd5e1;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Redirecting to <a href="tutorials.html" style="color:#38bdf8;">Server Management Tutorials &rarr;</a></p>
  <script>window.location.replace("tutorials.html");</script>
</body>
</html>`;
fs.writeFileSync(path.join(docsDir, 'tutorial.html'), docsTutAlias, 'utf8');
console.log('Created docs/tutorial.html alias');

console.log('Finished deploying doc additions!');
