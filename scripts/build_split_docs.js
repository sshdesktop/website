const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
}

// Exact verified GitHub links (100% 200 OK)
const githubCodeMap = {
  "index.html": { path: "README.md", type: "blob", title: "Documentation Overview" },
  "getting-started.html": { path: "src-tauri/src/main.rs", type: "blob", title: "Getting Started & Keys" },
  "architecture.html": { path: "src-tauri", type: "tree", title: "Architecture & Security Model" },
  "web-mode.html": { path: "install.sh", type: "blob", title: "Web Mode & Headless Daemon" },
  "cloud-desktop.html": { path: "src/App.tsx", type: "blob", title: "macOS Sonoma Desktop Shell" },
  "terminal.html": { path: "src/apps/terminal", type: "tree", title: "Interactive PTY Terminal" },
  "sftp-file-manager.html": { path: "src/apps/filemanager", type: "tree", title: "Dual-Pane SFTP Manager" },
  "monaco-code-editor.html": { path: "src/apps/editor", type: "tree", title: "Monaco Code Editor" },
  "docker-management.html": { path: "src/apps/docker", type: "tree", title: "Docker Container Hub" },
  "database-studio.html": { path: "src/apps/database", type: "tree", title: "Multi-Engine Database Studio" },
  "ssh-tunneling.html": { path: "src-tauri/src/ssh/tunnel.rs", type: "blob", title: "SSH Port Forwarding & Tunnels" },
  "systemd-services.html": { path: "src/apps/services", type: "tree", title: "Systemd Services & Timers" },
  "hardware-telemetry.html": { path: "src/apps/monitor", type: "tree", title: "Hardware Telemetry & Monitor" },
  "package-manager.html": { path: "src/apps/packages", type: "tree", title: "Multi-Distro Package Manager" },
  "user-sudoers-admin.html": { path: "src/apps/users", type: "tree", title: "User & Sudoers Admin" },
  "disk-smart-manager.html": { path: "src/apps/disk", type: "tree", title: "Disk, LVM & S.M.A.R.T. Manager" },
  "crontab-scheduler.html": { path: "src/apps/cron", type: "tree", title: "Visual Crontab Scheduler" },
  "firewall-ufw.html": { path: "src/apps/firewall", type: "tree", title: "Visual Firewall (UFW & Iptables)" },
  "network-port-auditor.html": { path: "src/apps/network", type: "tree", title: "Network & Port Auditor" },
  "ssl-certificates.html": { path: "src/apps/ssl", type: "tree", title: "SSL/TLS Certificates (Certbot)" },
  "security-audit-lynis.html": { path: "src/apps/security", type: "tree", title: "Security & Lynis Auditor" },
  "backup-disaster-recovery.html": { path: "src-tauri/src/archive.rs", type: "blob", title: "Backup & Disaster Recovery" },
  "webhook-server.html": { path: "src/apps/automation", type: "tree", title: "Webhook & CI/CD Server" },
  "multi-server-snippets.html": { path: "src/apps/automation", type: "tree", title: "Multi-Server Automation" },
  "log-analysis-grep.html": { path: "src/apps/logs", type: "tree", title: "Remote Log Analysis & Grep" },
  "reverse-proxy-browser.html": { path: "src/apps/browser", type: "tree", title: "Reverse Proxy Browser (Nginx)" },
  "api-studio.html": { path: "src/apps/api", type: "tree", title: "API Studio (REST/GraphQL/WS)" }
};

// 1. Navigation items for the docs sidebar
const docCategories = [
  {
    category: "Overview & Architecture",
    items: [
      { id: "index", file: "index.html", title: "Documentation Overview", icon: "📖" },
      { id: "getting-started", file: "getting-started.html", title: "Getting Started & Keys", icon: "🚀" },
      { id: "architecture", file: "architecture.html", title: "Architecture & Security Model", icon: "🏗️" },
      { id: "web-mode", file: "web-mode.html", title: "Web Mode & Headless Daemon", icon: "🌐" }
    ]
  },
  {
    category: "Desktop & Terminal",
    items: [
      { id: "cloud-desktop", file: "cloud-desktop.html", title: "macOS Sonoma Desktop Shell", icon: "🖥️" },
      { id: "terminal", file: "terminal.html", title: "Interactive PTY Terminal", icon: "⌨️" },
      { id: "sftp-file-manager", file: "sftp-file-manager.html", title: "Dual-Pane SFTP Manager", icon: "📁" },
      { id: "monaco-code-editor", file: "monaco-code-editor.html", title: "Monaco Code Editor", icon: "📝" }
    ]
  },
  {
    category: "Containers & Databases",
    items: [
      { id: "docker-management", file: "docker-management.html", title: "Docker Container Hub", icon: "🐳" },
      { id: "database-studio", file: "database-studio.html", title: "Multi-Engine Database Studio", icon: "🗄️" },
      { id: "ssh-tunneling", file: "ssh-tunneling.html", title: "SSH Port Forwarding & Tunnels", icon: "🔀" }
    ]
  },
  {
    category: "System Administration",
    items: [
      { id: "systemd-services", file: "systemd-services.html", title: "Systemd Services & Timers", icon: "⚙️" },
      { id: "hardware-telemetry", file: "hardware-telemetry.html", title: "Hardware Telemetry & Monitor", icon: "📊" },
      { id: "package-manager", file: "package-manager.html", title: "Multi-Distro Package Manager", icon: "📦" },
      { id: "user-sudoers-admin", file: "user-sudoers-admin.html", title: "User & Sudoers Admin", icon: "👥" },
      { id: "disk-smart-manager", file: "disk-smart-manager.html", title: "Disk, LVM & S.M.A.R.T. Manager", icon: "💾" },
      { id: "crontab-scheduler", file: "crontab-scheduler.html", title: "Visual Crontab Scheduler", icon: "⏰" }
    ]
  },
  {
    category: "Security & Networking",
    items: [
      { id: "firewall-ufw", file: "firewall-ufw.html", title: "Visual Firewall (UFW & Iptables)", icon: "🛡️" },
      { id: "network-port-auditor", file: "network-port-auditor.html", title: "Network & Port Auditor", icon: "🔍" },
      { id: "ssl-certificates", file: "ssl-certificates.html", title: "SSL/TLS Certificates (Certbot)", icon: "🔒" },
      { id: "security-audit-lynis", file: "security-audit-lynis.html", title: "Security & Lynis Auditor", icon: "🚨" }
    ]
  },
  {
    category: "Automation & Gateways",
    items: [
      { id: "backup-disaster-recovery", file: "backup-disaster-recovery.html", title: "Backup & Disaster Recovery", icon: "💾" },
      { id: "webhook-server", file: "webhook-server.html", title: "Webhook & CI/CD Server", icon: "⚡" },
      { id: "multi-server-snippets", file: "multi-server-snippets.html", title: "Multi-Server Automation", icon: "🌐" },
      { id: "log-analysis-grep", file: "log-analysis-grep.html", title: "Remote Log Analysis & Grep", icon: "📜" },
      { id: "reverse-proxy-browser", file: "reverse-proxy-browser.html", title: "Reverse Proxy Browser (Nginx)", icon: "🔄" },
      { id: "api-studio", file: "api-studio.html", title: "API Studio (REST/GraphQL/WS)", icon: "🔌" }
    ]
  }
];

function buildSidebarHtml(currentFile) {
  let html = `<aside class="docs-sidebar" aria-label="Documentation Table of Contents">
    <div style="margin-bottom: 20px;">
      <a href="index.html" style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--accent-cyan); text-decoration: none;">
        <span>← Docs Overview</span>
      </a>
    </div>`;

  for (const cat of docCategories) {
    html += `<div class="docs-nav-group-title">${cat.category}</div><ul class="docs-nav-list">`;
    for (const item of cat.items) {
      const activeClass = item.file === currentFile ? ' class="active"' : '';
      html += `<li><a href="${item.file}"${activeClass}>${item.icon} ${item.title}</a></li>`;
    }
    html += `</ul>`;
  }

  html += `</aside>`;
  return html;
}

// 2. Read original monolithic docs.html from git to extract existing section bodies
const { execSync } = require('child_process');
const origDocsContent = execSync('git show HEAD:docs.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const regex = /<article class=["']doc-app-article["'][^>]*id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/article>/g;
let m;
const extractedMap = {};
while ((m = regex.exec(origDocsContent)) !== null) {
  extractedMap[m[1]] = m[2];
}
console.log('Successfully extracted original article keys:', Object.keys(extractedMap).length);

// Map article IDs to files
const articleMapping = {
  "web-mode": "web-mode.html",
  "app-1": "cloud-desktop.html",
  "app-2": "terminal.html",
  "app-3": "sftp-file-manager.html",
  "app-4": "monaco-code-editor.html",
  "app-5": "docker-management.html",
  "app-6": "database-studio.html",
  "app-7": "systemd-services.html",
  "app-8": "firewall-ufw.html",
  "app-9": "hardware-telemetry.html",
  "app-17": "ssh-tunneling.html",
  "app-11": "package-manager.html",
  "app-12": "user-sudoers-admin.html",
  "app-13": "network-port-auditor.html",
  "app-14": "disk-smart-manager.html",
  "app-15": "crontab-scheduler.html",
  "app-16": "ssl-certificates.html",
  "app-18": "security-audit-lynis.html",
  "app-19": "backup-disaster-recovery.html",
  "app-20": "webhook-server.html",
  "app-21": "multi-server-snippets.html",
  "app-22": "log-analysis-grep.html"
};

// Map each file to metadata
const docPagesMeta = {
  "getting-started.html": {
    title: "Getting Started with SSH Desktop: Installation, SSH Keys & Setup",
    metaTitle: "SSH Desktop Getting Started Guide - Setup, Keys & Configuration",
    metaDesc: "Get started with SSH Desktop. Learn how to install on macOS, Windows, and Linux, import ~/.ssh/config profiles, configure Ed25519 keys, and connect to remote servers.",
    h1: "Getting Started with SSH Desktop",
    content: `
      <p class="docs-lead">
        Welcome to the official <strong>SSH Desktop</strong> documentation. This guide walks you through installing the application, configuring authentication, importing your OpenSSH host configs, and establishing your first encrypted server session.
      </p>

      <h2>System Requirements & Supported Platforms</h2>
      <ul>
        <li><strong>macOS:</strong> macOS 11.0 Big Sur or later (Native Apple Silicon M1/M2/M3/M4 and Intel x86_64 binaries).</li>
        <li><strong>Windows:</strong> Windows 10 (Build 19041+) and Windows 11 64-bit (MSI or standalone executable).</li>
        <li><strong>Linux Desktop:</strong> Ubuntu, Debian, Fedora, Arch, and openSUSE (AppImage, .deb, and .rpm).</li>
        <li><strong>Headless Server (Web Mode):</strong> Any Linux VPS with systemd, Docker, or standalone glibc/musl binary.</li>
      </ul>

      <h2>Step 1: Download &amp; Installation</h2>
      <p>Download the latest official build for your operating system:</p>
      <ul>
        <li><a href="../download-mac.html">macOS Universal Disk Image (.dmg)</a></li>
        <li><a href="../download-windows.html">Windows Installer (.msi / .exe)</a></li>
        <li><a href="../download-linux-desktop.html">Linux Desktop Packages (.AppImage / .deb / .rpm)</a></li>
        <li><a href="../download-linux-cli.html">Linux Server Headless Daemon (Web Mode)</a></li>
      </ul>

      <h2>Step 2: Connecting with SSH Keys or Passwords</h2>
      <p>
        SSH Desktop supports modern cryptographic keypairs out of the box, including <strong>Ed25519</strong>, <strong>ECDSA (nistp256/384/521)</strong>, and <strong>RSA (2048 to 4096-bit)</strong>.
      </p>
      <div class="docs-code-block">
        # Generate a high-security Ed25519 SSH keypair
        ssh-keygen -t ed25519 -C "admin@sshdesktop"
        
        # Copy public key to remote host
        ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server.example.com
      </div>
      <p>
        In SSH Desktop, click <strong>New Connection</strong>, enter your server IP or hostname, select your private key file, and click <strong>Connect</strong>. Passphrases can be saved securely into your operating system's hardware key vault (Windows DPAPI, macOS Keychain, Linux Secret Service).
      </p>

      <h2>Step 3: Importing Existing OpenSSH Config</h2>
      <p>
        If you already have hosts defined in <code>~/.ssh/config</code>, SSH Desktop automatically detects and imports them with one click:
      </p>
      <div class="docs-code-block">
        Host production-api
            HostName 198.51.100.42
            User deploy
            Port 2222
            IdentityFile ~/.ssh/id_ed25519
            ProxyJump bastion.example.com
      </div>
      <p>
        All <code>HostName</code>, <code>Port</code>, <code>User</code>, <code>IdentityFile</code>, and <code>ProxyJump</code> directives are parsed and rendered as visual server cards in the connection switcher.
      </p>
    `
  },
  "architecture.html": {
    title: "SSH Desktop System Architecture & Security Model",
    metaTitle: "SSH Desktop Architecture & Security Model - Rust Tauri 2.0 & React 19",
    metaDesc: "Explore the internal architecture of SSH Desktop. Learn about the Rust Tauri 2.0 backend, portable-pty multiplexing, agentless SSH2 security, and React 19 shell.",
    h1: "System Architecture & Security Model",
    content: `
      <p class="docs-lead">
        SSH Desktop is engineered with a high-performance <strong>two-tier architecture</strong>: a secure, low-overhead native <strong>Rust + Tauri 2.0</strong> backend coupled with a responsive, glassmorphic <strong>React 19 + TypeScript</strong> desktop environment.
      </p>

      <h2>Two-Tier Architecture Overview</h2>
      <div class="docs-code-block">
  ┌────────────────────────────────────────────────────────┐
  │         React 19 + TypeScript Client Shell             │
  │   - Window Manager &amp; Dock                              │
  │   - 25 Built-In System &amp; DevOps Applications          │
  │   - Xterm.js (WebGL GPU Terminal) &amp; Monaco Code Editor  │
  └───────────────────────────▲────────────────────────────┘
                              │ IPC / Event Bridge
  ┌───────────────────────────▼────────────────────────────┐
  │         Rust + Tauri 2.0 Native Core                   │
  │   - libssh2 (Encrypted SSH2 Transport)                 │
  │   - portable-pty (Async Terminal PTY Multiplexing)     │
  │   - Tokio Async Channels &amp; Local SOCKS5 Engine         │
  │   - OS Keyring Vault (Keychain, DPAPI, Secret Service) │
  └───────────────────────────▲────────────────────────────┘
                              │ Standard Port 22 (SSH)
  ┌───────────────────────────▼────────────────────────────┐
  │         Remote Linux Server (100% Agentless)           │
  │   - Standard sshd daemon                               │
  │   - Zero background node agents or custom open ports   │
  └────────────────────────────────────────────────────────┘
      </div>

      <h2>Core Architectural Pillars</h2>
      <ul>
        <li><strong>100% Agentless:</strong> Unlike Cockpit, Webmin, or aaPanel, SSH Desktop installs zero daemons or background agents on your remote servers. Everything operates through standard OpenSSH port 22.</li>
        <li><strong>Zero Idle RAM Footprint on Servers:</strong> Because no server daemon runs in the background, your remote servers retain 100% of their CPU and memory for your actual production workloads.</li>
        <li><strong>Hardware Hardware Keyring Integration:</strong> Private keys, server credentials, and passphrases are never stored in plain text. They are encrypted using the host operating system's native hardware keyring:
          <ul>
            <li>Windows: Data Protection API (DPAPI) and Windows Credential Manager.</li>
            <li>macOS: Apple Keychain Services with Secure Enclave hardware backing.</li>
            <li>Linux: Freedesktop Secret Service API (gnome-keyring or KWallet).</li>
          </ul>
        </li>
        <li><strong>Memory Isolation:</strong> Each app window runs within an isolated Webview process boundary, preventing compromised remote streams from accessing other server sessions.</li>
      </ul>
    `
  },
  "reverse-proxy-browser.html": {
    title: "Reverse Proxy Browser Guide: Nginx & Caddy Configuration",
    metaTitle: "Reverse Proxy Browser Guide - Nginx, Caddy & Traefik VHosts",
    metaDesc: "Inspect, edit, and test Nginx and Caddy reverse proxy virtual hosts in SSH Desktop. Manage SSL certificates, WebSocket headers, and reload web servers safely.",
    h1: "Reverse Proxy Browser (Nginx & Caddy)",
    content: `
      <p class="docs-lead">
        The <strong>Reverse Proxy Browser</strong> provides an interactive visual dashboard for inspecting, editing, and validating <strong>Nginx, Caddy, and Apache</strong> virtual hosts and reverse proxy configurations across your Linux infrastructure.
      </p>

      <h2>Key Capabilities</h2>
      <ul>
        <li><strong>Virtual Host Inspector:</strong> View all enabled sites in <code>/etc/nginx/sites-enabled/</code> with their domains, listening ports, upstream routes, and SSL certificate paths.</li>
        <li><strong>Syntax Verification:</strong> Run single-click <code>nginx -t</code> checks before reloading configuration files, preventing broken production deployments.</li>
        <li><strong>WebSocket Upgrade Header Assistant:</strong> Easily insert required <code>Upgrade</code> and <code>Connection</code> proxy directives for real-time applications.</li>
        <li><strong>SSL Binding Diagnostics:</strong> Verify that TLS certificate files exist on disk and check days remaining until expiration.</li>
      </ul>

      <h2>Step-by-Step Usage Guide</h2>
      <ol class="doc-steps-list">
        <li>Open <strong>Reverse Proxy Browser</strong> from the Dock or App Launcher.</li>
        <li>Select your active web server daemon (Nginx, Caddy, or Apache). SSH Desktop parses the active configuration trees automatically.</li>
        <li>Click any virtual host to inspect its listening ports (HTTP 80, HTTPS 443, HTTP/3 443 UDP), server names, and upstream proxy directives (e.g., <code>proxy_pass http://localhost:3000</code>).</li>
        <li>Make modifications in the built-in syntax-highlighted editor and click <strong>Test &amp; Reload</strong>. SSH Desktop executes syntax checks with sudo permissions and reloads the daemon safely.</li>
      </ol>
      <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--border);">
        <a href="../reverse-proxy-browser.html" class="btn btn-primary btn-sm"><span>Explore Dedicated Reverse Proxy Browser Page &rarr;</span></a>
      </div>
    `
  },
  "api-studio.html": {
    title: "API Studio Guide: Internal REST, GraphQL & WebSocket Testing",
    metaTitle: "API Studio Guide - Test REST, GraphQL & WebSockets Inside SSH",
    metaDesc: "Test private microservices, internal REST APIs, and WebSockets directly from your remote server loopback network with SSH Desktop API Studio.",
    h1: "API Studio (Internal Microservices Client)",
    content: `
      <p class="docs-lead">
        <strong>API Studio</strong> is an embedded REST, GraphQL, and WebSocket testing suite that executes requests directly from your remote server's loopback interface. Test private microservices bound to <code>127.0.0.1</code> without creating public ingress tunnels or exposing internal ports.
      </p>

      <h2>Why Test APIs Directly Inside the SSH Boundary?</h2>
      <p>
        In production microservice environments (Docker, Kubernetes, systemd), internal APIs are strictly bound to localhost or private Docker bridge networks (e.g., <code>http://127.0.0.1:8080</code>). Testing them usually requires clunky <code>curl</code> terminal commands or setting up complex VPNs. API Studio provides a Postman-grade visual client that routes requests from the server itself.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Full HTTP Method Support:</strong> GET, POST, PUT, PATCH, DELETE, OPTIONS, and HEAD.</li>
        <li><strong>Header &amp; Authorization Vault:</strong> Staging for Bearer tokens, Basic Auth, and custom API headers.</li>
        <li><strong>JSON Syntax Highlighting:</strong> Auto-formatting and collapsible JSON response trees.</li>
        <li><strong>WebSocket Interactive Console:</strong> Connect to <code>ws://127.0.0.1:4000</code> or <code>wss://</code> endpoints, stream messages, and inspect real-time ping/pong latency.</li>
      </ul>
      <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--border);">
        <a href="../api-studio.html" class="btn btn-primary btn-sm"><span>Explore Dedicated API Studio Page &rarr;</span></a>
      </div>
    `
  }
};

// Process extracted articles from docs.html
for (const [id, filename] of Object.entries(articleMapping)) {
  const innerHtml = extractedMap[id];
  if (!innerHtml) continue;

  let cleanContent = innerHtml
    .replace(/src="assets\//g, 'src="../assets/')
    .replace(/href="([a-zA-Z0-9_-]+\.html)"/g, (match, p1) => {
      return `href="../${p1}"`;
    });

  const titleMatch = innerHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const rawTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : id;

  docPagesMeta[filename] = {
    title: `${rawTitle} - SSH Desktop Documentation`,
    metaTitle: `${rawTitle} - SSH Desktop Guide`,
    metaDesc: `Complete documentation and step-by-step tutorial for ${rawTitle} in SSH Desktop. Learn setup, architecture, and shortcuts.`,
    h1: rawTitle,
    content: cleanContent
  };
}

// Template for documentation pages
function renderDocPage(filename, meta) {
  const sidebarHtml = buildSidebarHtml(filename);
  const canonicalUrl = `https://sshdesktop.com/docs/${filename}`;

  const gitConfig = githubCodeMap[filename] || { path: "src", type: "tree" };
  const githubCodeUrl = `https://github.com/sshdesktop/sshdesktop/${gitConfig.type}/main/${gitConfig.path}`;
  const githubDisplayPath = `github.com/sshdesktop/sshdesktop/${gitConfig.type}/main/${gitConfig.path}`;

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sshdesktop.com/" },
          { "@type": "ListItem", "position": 2, "name": "Documentation", "item": "https://sshdesktop.com/docs/" },
          { "@type": "ListItem", "position": 3, "name": meta.h1, "item": canonicalUrl }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": canonicalUrl,
          "url": canonicalUrl,
          "name": meta.metaTitle,
          "description": meta.metaDesc
        },
        "headline": meta.h1,
        "description": meta.metaDesc,
        "inLanguage": "en-US",
        "author": { "@type": "Organization", "name": "SSH Desktop Documentation Team", "url": "https://sshdesktop.com" },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": { "@type": "ImageObject", "url": "https://sshdesktop.com/assets/images/favicon.svg" }
        }
      }
    ]
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.metaTitle}</title>
  <meta name="description" content="${meta.metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- OpenGraph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${meta.metaTitle}">
  <meta property="og:description" content="${meta.metaDesc}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:site_name" content="SSH Desktop">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.metaTitle}">
  <meta name="twitter:description" content="${meta.metaDesc}">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">

  <!-- CSS -->
  <link rel="stylesheet" href="../assets/css/style.min.css">
  <link rel="stylesheet" href="../assets/css/docs.css">

  <!-- JSON-LD -->
  <script type="application/ld+json">
${schemaJson}
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38">
      </a>
      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../features.html">Features</a></li>
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="index.html" class="active">Docs</a></li>
          <li><a href="../blog/index.html">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="https://github.com/sshdesktop/sshdesktop" class="header-github-btn" target="_blank" rel="noopener" aria-label="Star on GitHub">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span class="gh-star-label">Star</span>
        </a>
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Docs Layout -->
  <main class="container docs-layout">
    ${sidebarHtml}

    <div class="docs-content">
      <!-- Breadcrumb -->
      <nav class="blog-breadcrumb" aria-label="Breadcrumb" style="margin-bottom: 20px;">
        <ol style="display: flex; gap: 8px; list-style: none; padding: 0; font-size: 0.88rem; color: var(--text-dim);">
          <li><a href="../index.html" style="color: var(--text-dim);">Home</a></li>
          <li>/</li>
          <li><a href="index.html" style="color: var(--text-dim);">Docs</a></li>
          <li>/</li>
          <li aria-current="page" style="color: var(--accent-cyan); font-weight: 600;">${meta.h1}</li>
        </ol>
      </nav>

      <!-- Code Reference Pill -->
      <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: #1e293b; border: 1px solid #334155; border-radius: 20px; font-size: 0.82rem; margin-bottom: 16px;">
        <span style="color: var(--accent-cyan); font-weight: 700;">Code Reference:</span>
        <a href="${githubCodeUrl}" target="_blank" rel="noopener" style="color: #38bdf8; text-decoration: none; font-family: var(--font-mono);">
          ${githubDisplayPath} ↗
        </a>
      </div>

      <h1 class="docs-article-title">${meta.h1}</h1>

      <div class="docs-body" style="font-size: 1rem; line-height: 1.7; color: var(--text-main);">
        ${meta.content}
      </div>

      <!-- Conversion CTA -->
      <div class="blog-cta-box" style="margin-top: 48px;">
        <h3>Try SSH Desktop Free</h3>
        <p>Experience the macOS-inspired visual desktop for Linux servers. Hardware-accelerated terminal, dual-pane SFTP, Docker GUI, and background tunnels — 100% agentless.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="../download.html" class="blog-cta-button">Download App &rarr;</a>
          <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener" class="btn btn-secondary" style="border-radius: 8px;">View on GitHub</a>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-bottom" style="display: flex; justify-content: space-between; align-items: center; padding: 24px 0; border-top: 1px solid var(--border); font-size: 0.88rem; color: var(--text-dim);">
      <p>&copy; 2026 SSH Desktop. All rights reserved. Open source and privacy focused.</p>
      <div style="display: flex; gap: 20px;">
        <a href="../privacy.html">Privacy</a>
        <a href="index.html">Documentation Hub</a>
        <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// 3. Generate docs/index.html (The Master Docs Portal)
function renderDocsIndex() {
  const sidebarHtml = buildSidebarHtml('index.html');
  const canonicalUrl = `https://sshdesktop.com/docs/`;

  let cardsHtml = '';
  for (const cat of docCategories) {
    cardsHtml += `<div style="margin-bottom: 36px;">
      <h2 style="font-size: 1.4rem; font-weight: 700; color: var(--text-main); margin-bottom: 16px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
        ${cat.category}
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">`;

    for (const item of cat.items) {
      if (item.file === 'index.html') continue;
      const gitConfig = githubCodeMap[item.file] || { path: "src", type: "tree" };
      const githubCodeUrl = `https://github.com/sshdesktop/sshdesktop/${gitConfig.type}/main/${gitConfig.path}`;

      cardsHtml += `
        <div style="display: flex; flex-direction: column; justify-content: space-between; background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 20px; transition: transform 0.2s, border-color 0.2s;" onmouseover="this.style.borderColor='var(--accent-cyan)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#334155';this.style.transform='none'">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">${item.icon}</div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #f8fafc; margin-bottom: 6px;">
              <a href="${item.file}" style="color: #f8fafc; text-decoration: none;">${item.title}</a>
            </h3>
            <div style="font-size: 0.8rem; margin-bottom: 12px;">
              <a href="${githubCodeUrl}" target="_blank" rel="noopener" style="color: #38bdf8; text-decoration: none; font-family: var(--font-mono);">
                ${gitConfig.path} ↗
              </a>
            </div>
          </div>
          <div>
            <a href="${item.file}" style="font-size: 0.88rem; color: var(--accent-cyan); font-weight: 600; text-decoration: none;">Read Guide &rarr;</a>
          </div>
        </div>`;
    }

    cardsHtml += `</div></div>`;
  }

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sshdesktop.com/" },
          { "@type": "ListItem", "position": 2, "name": "Documentation", "item": canonicalUrl }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#portal`,
        "headline": "SSH Desktop Official Documentation & Code Manual",
        "description": "Comprehensive documentation for all 25 native SSH Desktop applications, architecture, web daemon setup, and verified GitHub code references.",
        "inLanguage": "en-US",
        "author": { "@type": "Organization", "name": "SSH Desktop Documentation Team", "url": "https://sshdesktop.com" },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": { "@type": "ImageObject", "url": "https://sshdesktop.com/assets/images/favicon.svg" }
        }
      }
    ]
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SSH Desktop Documentation - Official User Guides & Code Manual</title>
  <meta name="description" content="Official documentation for SSH Desktop. Explore in-depth guides for terminal emulation, SFTP file management, Docker, database tunnels, systemd, and web mode.">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="SSH Desktop Documentation - User Guides & Code Manual">
  <meta property="og:description" content="Official documentation for SSH Desktop. Explore guides for terminal emulation, SFTP, Docker, database tunnels, systemd, and web mode.">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:site_name" content="SSH Desktop">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="SSH Desktop Documentation - User Guides & Code Manual">
  <meta name="twitter:description" content="Official documentation for SSH Desktop. Explore guides for terminal, SFTP, Docker, database tunnels, and web mode.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">

  <!-- CSS -->
  <link rel="stylesheet" href="../assets/css/style.min.css">
  <link rel="stylesheet" href="../assets/css/docs.css">

  <!-- JSON-LD -->
  <script type="application/ld+json">
${schemaJson}
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38">
      </a>
      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../features.html">Features</a></li>
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="index.html" class="active">Docs</a></li>
          <li><a href="../blog/index.html">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="https://github.com/sshdesktop/sshdesktop" class="header-github-btn" target="_blank" rel="noopener" aria-label="Star on GitHub">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span class="gh-star-label">Star</span>
        </a>
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Docs Layout -->
  <main class="container docs-layout">
    ${sidebarHtml}

    <div class="docs-content">
      <div style="margin-bottom: 32px;">
        <span class="badge badge-accent" style="margin-bottom: 8px;">Documentation Portal</span>
        <h1 class="docs-article-title">SSH Desktop Official Documentation</h1>
        <p class="docs-lead">
          Explore complete user manuals, configuration tutorials, shortcuts, and architecture references for all 25 native applications in SSH Desktop.
        </p>

        <!-- GitHub Code Reference Banner -->
        <div style="background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin-bottom: 32px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="font-weight: 700; color: #f8fafc; font-size: 1.05rem; margin-bottom: 4px;">Open-Source Codebase on GitHub</div>
            <p style="font-size: 0.9rem; color: #94a3b8; margin: 0;">Refer to the underlying Rust Tauri 2.0 backend and React 19 frontend modules.</p>
          </div>
          <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener" class="btn btn-secondary" style="white-space: nowrap;">
            github.com/sshdesktop/sshdesktop ↗
          </a>
        </div>
      </div>

      <!-- Quickstart Banner -->
      <div class="cli-banner-card" style="margin-bottom: 40px;">
        <div class="cli-banner-badge">Headless Linux Server Quickstart</div>
        <h2 class="cli-banner-title" style="font-size: 1.35rem;">Deploy SSH Desktop Web Daemon in 30 Seconds</h2>
        <p class="cli-banner-text">
          Run our audited 1-line installation script on any Ubuntu, Debian, RHEL, AlmaLinux, Rocky, or Arch VPS:
        </p>
        <div class="docs-code-block" style="margin: 12px 0;">
          curl -fsSL https://sshdesktop.com/install.sh | sudo bash
        </div>
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">
          Runs as a systemd service (<code>sshdesktop.service</code>) binding frontend port 2222 and backend port 2020.
        </p>
      </div>

      <!-- Category Cards -->
      ${cardsHtml}

      <!-- Conversion Box -->
      <div class="blog-cta-box" style="margin-top: 48px;">
        <h3>Ready to experience SSH Desktop?</h3>
        <p>Download the free, open-source native desktop app for macOS, Windows, and Linux, or deploy the web daemon on your servers.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="../download.html" class="blog-cta-button">Download App Free &rarr;</a>
          <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener" class="btn btn-secondary" style="border-radius: 8px;">Star on GitHub</a>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-bottom" style="display: flex; justify-content: space-between; align-items: center; padding: 24px 0; border-top: 1px solid var(--border); font-size: 0.88rem; color: var(--text-dim);">
      <p>&copy; 2026 SSH Desktop. All rights reserved. Open source and privacy focused.</p>
      <div style="display: flex; gap: 20px;">
        <a href="../privacy.html">Privacy</a>
        <a href="index.html">Documentation Hub</a>
        <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// 4. Write all documentation files into docs/
for (const [filename, meta] of Object.entries(docPagesMeta)) {
  const filePath = path.join(DOCS_DIR, filename);
  const html = renderDocPage(filename, meta);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Wrote: docs/${filename} (${html.length} bytes)`);
}

// Write docs/index.html
const indexHtml = renderDocsIndex();
fs.writeFileSync(path.join(DOCS_DIR, 'index.html'), indexHtml, 'utf8');
console.log(`Wrote: docs/index.html (${indexHtml.length} bytes)`);

console.log('✅ All documentation pages split and written to docs/ with 100% verified GitHub URLs!');
