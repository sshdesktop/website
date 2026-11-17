// scripts/build_tutorials_and_install.js
// Generates standalone root pages: installation.html, tutorials.html, tutorial.html, quickstart.html, cheat-sheet.html
// Also adds doc chapters: docs/tutorials.html, docs/quickstart.html, docs/cheat-sheet.html, docs/security-model.html

const fs = require('fs');
const path = require('path');
const rootDir = path.join(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');

// Helper to wrap standalone root pages
function renderRootPage({ title, seoTitle, description, keywords, canonical, content }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLYDWV9PH4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BLYDWV9PH4');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>${seoTitle}</title>
  <meta name="title" content="${seoTitle}">
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="author" content="SSH Desktop Documentation Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${canonical}">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="${seoTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${seoTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
  <link rel="manifest" href="site.webmanifest">

  <!-- CSS -->
  <link rel="stylesheet" href="assets/css/style.min.css">
  <link rel="stylesheet" href="assets/css/docs.css">

  <style>
    .page-hero {
      padding: 64px 0 40px;
      text-align: center;
      background: radial-gradient(circle at 50% 20%, rgba(56,189,248,0.12) 0%, transparent 60%);
    }
    .page-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 14px;
      border-radius: 20px;
      background: rgba(56,189,248,0.12);
      border: 1px solid rgba(56,189,248,0.3);
      color: #38bdf8;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 16px;
    }
    .page-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #f8fafc;
      letter-spacing: -0.03em;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .page-lead {
      font-size: 1.15rem;
      color: #94a3b8;
      max-width: 760px;
      margin: 0 auto 28px;
      line-height: 1.6;
    }
    .page-container {
      max-width: 1040px;
      margin: 0 auto;
      padding: 0 24px 64px;
    }
    .tutorial-card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 28px;
      margin-bottom: 24px;
      transition: all 0.2s ease;
    }
    .tutorial-card:hover {
      border-color: #38bdf8;
    }
    .tutorial-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(56,189,248,0.2);
      color: #38bdf8;
      font-weight: 800;
      font-size: 0.95rem;
      margin-right: 12px;
    }
    .tutorial-header {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }
    .tutorial-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #f8fafc;
      margin: 0;
    }
    .tutorial-desc {
      font-size: 0.95rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 16px;
    }
    .platform-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 32px 0;
    }
    .platform-card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 24px;
      text-align: center;
    }
    .platform-icon {
      font-size: 2.5rem;
      margin-bottom: 12px;
    }
    .platform-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 8px;
    }
    .platform-desc {
      font-size: 0.88rem;
      color: #94a3b8;
      line-height: 1.5;
      margin-bottom: 18px;
    }
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sshdesktop.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${title}",
            "item": "${canonical}"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "headline": "${seoTitle}",
        "description": "${description}",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop"
        }
      }
    ]
  }
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand" aria-label="SSH Desktop Homepage">
        <img src="assets/images/logo.svg" alt="SSH Desktop" width="180" height="38">
      </a>
      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="features.html">Features</a></li>
          <li><a href="apps.html">Apps</a></li>
          <li><a href="docs/index.html">Docs</a></li>
          <li><a href="blog/index.html">Blog</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="https://github.com/sshdesktop/sshdesktop" class="header-github-btn" target="_blank" rel="noopener" aria-label="Star on GitHub">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span class="gh-star-label">Star</span>
        </a>
        <a href="download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
      </div>
    </div>
  </header>

  <main>
    ${content}
  </main>

  <footer class="site-footer">
    <div class="container footer-bottom" style="display: flex; justify-content: space-between; align-items: center; padding: 24px 0; border-top: 1px solid var(--border); font-size: 0.88rem; color: var(--text-dim); flex-wrap: wrap; gap: 16px;">
      <p>&copy; 2026 SSH Desktop. All rights reserved. Open source and privacy focused.</p>
      <div style="display: flex; gap: 20px;">
        <a href="privacy.html">Privacy</a>
        <a href="docs/index.html">Documentation</a>
        <a href="installation.html">Installation</a>
        <a href="tutorials.html">Tutorials</a>
        <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// 1. Build root installation.html
console.log('Generating root installation.html...');
const installContent = `
    <div class="page-hero">
      <div class="container">
        <span class="page-badge">Setup &amp; Downloads</span>
        <h1 class="page-title">Install SSH Desktop on macOS, Windows &amp; Linux</h1>
        <p class="page-lead">
          Download and set up the world\'s most private, agentless visual desktop for remote Linux servers. Sub-15MB binaries, zero background daemons, and instant setup.
        </p>
      </div>
    </div>

    <div class="page-container">
      <div class="platform-grid">
        <div class="platform-card">
          <div class="platform-icon">🍏</div>
          <h2 class="platform-name">macOS</h2>
          <p class="platform-desc">Universal binary for Apple Silicon (M1, M2, M3, M4) &amp; Intel. Requires macOS 11 Big Sur or newer.</p>
          <a href="download-mac.html" class="btn btn-primary" style="width: 100%; border-radius: 8px;">Download for Mac (.dmg)</a>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 10px;">Also: <code>brew install --cask sshdesktop</code></div>
        </div>

        <div class="platform-card">
          <div class="platform-icon">🪟</div>
          <h2 class="platform-name">Windows</h2>
          <p class="platform-desc">Signed 64-bit installer and portable standalone executable for Windows 11 &amp; Windows 10 (1809+).</p>
          <a href="download-windows.html" class="btn btn-primary" style="width: 100%; border-radius: 8px;">Download for Windows (.msi)</a>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 10px;">Also: <code>winget install sshdesktop</code></div>
        </div>

        <div class="platform-card">
          <div class="platform-icon">🐧</div>
          <h2 class="platform-name">Linux Desktop</h2>
          <p class="platform-desc">Portable AppImage, Debian/Ubuntu .deb, Fedora/RHEL .rpm, and Arch Linux AUR package.</p>
          <a href="download-linux-desktop.html" class="btn btn-primary" style="width: 100%; border-radius: 8px;">Download for Linux (.AppImage)</a>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 10px;">AUR: <code>yay -S sshdesktop-bin</code></div>
        </div>
      </div>

      <div style="background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 28px; margin: 36px 0;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-top: 0; margin-bottom: 12px;">
          🌐 Headless Linux VPS Web Mode (Browser Access)
        </h2>
        <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.7; margin-bottom: 16px;">
          Want to access your cloud desktop from any web browser on your phone, tablet, or work laptop without installing a desktop app? Run our audited 1-line installation script on any Ubuntu, Debian, RHEL, Alma, Rocky, or Arch VPS:
        </p>
        <div class="docs-code-block" style="margin-bottom: 14px;">curl -fsSL https://sshdesktop.com/install.sh | sudo bash</div>
        <p style="font-size: 0.88rem; color: #94a3b8; margin: 0;">
          Runs as a sandboxed systemd service (<code>sshdesktop.service</code>) binding frontend port 2222 and backend port 2020. Read the complete <a href="docs/web-mode.html" style="color: #38bdf8;">Web Mode Guide &rarr;</a>
        </p>
      </div>

      <h2 style="font-size: 1.6rem; font-weight: 700; color: #f8fafc; margin: 40px 0 20px;">
        Detailed Step-by-Step Installation Instructions
      </h2>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">1</span>
          <h3 class="tutorial-title">macOS Installation Steps</h3>
        </div>
        <div class="tutorial-desc">
          <ol style="padding-left: 20px; line-height: 1.8;">
            <li>Download the official <strong>SSH Desktop Universal DMG</strong> package.</li>
            <li>Double-click the downloaded <code>.dmg</code> file in your Downloads folder to mount the disk image.</li>
            <li>Drag the <strong>SSH Desktop</strong> application icon into your <code>/Applications</code> shortcut folder.</li>
            <li>Eject the disk image and launch SSH Desktop from Spotlight (<kbd>Cmd + Space</kbd>) or Launchpad.</li>
            <li>On first launch, macOS Gatekeeper verifies the developer signature automatically. If prompted, click <em>Open</em>.</li>
          </ol>
        </div>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">2</span>
          <h3 class="tutorial-title">Windows 11 &amp; Windows 10 Installation Steps</h3>
        </div>
        <div class="tutorial-desc">
          <ol style="padding-left: 20px; line-height: 1.8;">
            <li>Download the signed <strong>SSH Desktop .msi installer</strong> or portable executable.</li>
            <li>Double-click the installer and follow the quick setup wizard (installs into <code>%LOCALAPPDATA%\\Programs\\SSH Desktop</code>).</li>
            <li>If using Windows 10 and prompted for Microsoft Edge WebView2, click <em>Install</em> (pre-installed by default on Windows 11).</li>
            <li>Launch SSH Desktop from the Start Menu or desktop shortcut.</li>
            <li>Your SSH private keys and passphrases are safeguarded using Windows Credential Manager (DPAPI).</li>
          </ol>
        </div>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">3</span>
          <h3 class="tutorial-title">Linux Desktop Installation Steps</h3>
        </div>
        <div class="tutorial-desc">
          <ul style="padding-left: 20px; line-height: 1.8;">
            <li><strong>Universal AppImage:</strong> Run <code>chmod +x sshdesktop*.AppImage && ./sshdesktop*.AppImage</code> to run instantly on any distribution without root privileges.</li>
            <li><strong>Ubuntu / Debian (.deb):</strong> Run <code>sudo dpkg -i sshdesktop*.deb || sudo apt-get install -f</code>.</li>
            <li><strong>Fedora / Rocky / RHEL (.rpm):</strong> Run <code>sudo rpm -i sshdesktop*.rpm</code> or <code>sudo dnf install ./sshdesktop*.rpm</code>.</li>
            <li><strong>Arch Linux:</strong> Install via your AUR helper: <code>yay -S sshdesktop-bin</code>.</li>
          </ul>
        </div>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <h3 style="font-size: 1.3rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">Ready to explore the documentation?</h3>
        <p style="color: #94a3b8; margin-bottom: 20px;">Explore all 39 application guides, shortcuts, and troubleshooting manuals.</p>
        <a href="docs/index.html" class="btn btn-primary" style="border-radius: 8px;">Explore Documentation Hub &rarr;</a>
      </div>
    </div>`;

const installHtml = renderRootPage({
  title: 'Installation Guide',
  seoTitle: 'Install SSH Desktop on macOS, Windows & Linux - Setup Guide',
  description: 'Download and install SSH Desktop on macOS (Universal DMG), Windows 10/11 (MSI installer), or Linux (AppImage, DEB, RPM, AUR). System requirements and step-by-step setup.',
  keywords: 'install ssh desktop, download ssh client, ssh desktop mac dmg, ssh desktop windows 11 msi, linux appimage ssh client, how to install ssh desktop',
  canonical: 'https://sshdesktop.com/installation.html',
  content: installContent
});
fs.writeFileSync(path.join(rootDir, 'installation.html'), installHtml, 'utf8');
console.log('Created root installation.html');

// 2. Build root tutorials.html (and tutorial.html alias)
console.log('Generating root tutorials.html and tutorial.html...');
const tutorialsContent = `
    <div class="page-hero">
      <div class="container">
        <span class="page-badge">Step-by-Step Guides</span>
        <h1 class="page-title">SSH Desktop Server Management Tutorials</h1>
        <p class="page-lead">
          Comprehensive, end-user tutorials for everyday Linux server administration. Master Docker containers, encrypted database tunnels, SFTP, Nginx reverse proxying, and firewall rules.
        </p>
      </div>
    </div>

    <div class="page-container">
      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">1</span>
          <h2 class="tutorial-title">Connecting to a New Linux Server &amp; Setting Up Ed25519 Keys</h2>
        </div>
        <p class="tutorial-desc">
          Learn how to generate modern elliptic-curve Ed25519 cryptographic keys, copy your public key to the remote host, and configure your first connection profile in SSH Desktop.
        </p>
        <div style="background: #0f172a; border-radius: 8px; padding: 16px; margin-bottom: 16px; font-size: 0.9rem; color: #cbd5e1;">
          <strong>Step 1:</strong> In terminal, run <code>ssh-keygen -t ed25519 -C "admin@sshdesktop"</code>.<br>
          <strong>Step 2:</strong> Copy to remote server: <code>ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server-ip</code>.<br>
          <strong>Step 3:</strong> In SSH Desktop, click <strong>+ New Connection</strong>, enter your server IP, port 22, and select your private key.<br>
          <strong>Step 4:</strong> Click Connect to launch your visual cloud desktop immediately.
        </div>
        <a href="docs/connection-manager.html" style="color: #38bdf8; font-weight: 600; text-decoration: none;">Read full Connection Manager Guide &rarr;</a>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">2</span>
          <h2 class="tutorial-title">Deploying &amp; Managing Docker Stacks Visually</h2>
        </div>
        <p class="tutorial-desc">
          Control container lifecycles (Start, Stop, Restart, Kill), stream real-time container logs with regex filtering, and open interactive exec bash shells without memorizing docker CLI flags.
        </p>
        <div style="background: #0f172a; border-radius: 8px; padding: 16px; margin-bottom: 16px; font-size: 0.9rem; color: #cbd5e1;">
          <strong>Step 1:</strong> Open <strong>Docker Hub</strong> from the Dock.<br>
          <strong>Step 2:</strong> Switch to the <strong>Compose Editor</strong> tab to write or edit your <code>docker-compose.yml</code>.<br>
          <strong>Step 3:</strong> Click <strong>Build &amp; Run</strong> to pull images and deploy containers in the background.<br>
          <strong>Step 4:</strong> Click the terminal icon next to any container to launch an interactive <code>/bin/bash</code> shell.
        </div>
        <a href="docs/docker-management.html" style="color: #38bdf8; font-weight: 600; text-decoration: none;">Read full Docker Management Hub Guide &rarr;</a>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">3</span>
          <h2 class="tutorial-title">Accessing Private Databases Over Encrypted SSH Tunnels</h2>
        </div>
        <p class="tutorial-desc">
          Safely connect to PostgreSQL, MySQL, MariaDB, and Redis listening only on remote <code>127.0.0.1</code> without opening dangerous database ports to the public internet.
        </p>
        <div style="background: #0f172a; border-radius: 8px; padding: 16px; margin-bottom: 16px; font-size: 0.9rem; color: #cbd5e1;">
          <strong>Step 1:</strong> Launch <strong>Database Studio</strong>.<br>
          <strong>Step 2:</strong> Select your database engine (Postgres, MySQL, Redis, SQLite).<br>
          <strong>Step 3:</strong> Enter remote port (e.g. <code>5432</code> or <code>3306</code>) and database credentials.<br>
          <strong>Step 4:</strong> SSH Desktop opens a transparent Direct-TCPIP tunnel and displays schemas, tables, and query editor.
        </div>
        <a href="docs/database-studio.html" style="color: #38bdf8; font-weight: 600; text-decoration: none;">Read full Database Studio Guide &rarr;</a>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">4</span>
          <h2 class="tutorial-title">Dual-Pane SFTP File Management &amp; In-Place Archive Extraction</h2>
        </div>
        <p class="tutorial-desc">
          Drag and drop files to upload, edit remote code files in Monaco, adjust file permissions (chmod), and unpack <code>.tar.gz</code> or <code>.zip</code> archives directly on the server without downloading.
        </p>
        <div style="background: #0f172a; border-radius: 8px; padding: 16px; margin-bottom: 16px; font-size: 0.9rem; color: #cbd5e1;">
          <strong>Step 1:</strong> Open <strong>SFTP File Manager</strong>.<br>
          <strong>Step 2:</strong> Drag folders from your local computer into the remote file pane.<br>
          <strong>Step 3:</strong> Right-click any <code>.tar.gz</code> file and select <strong>Extract Here</strong>.<br>
          <strong>Step 4:</strong> Right-click files to edit in Monaco Editor with automated sudo elevation on save.
        </div>
        <a href="docs/sftp-file-manager.html" style="color: #38bdf8; font-weight: 600; text-decoration: none;">Read full SFTP File Manager Guide &rarr;</a>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">5</span>
          <h2 class="tutorial-title">Visual UFW Firewall Configuration &amp; Fail2ban Management</h2>
        </div>
        <p class="tutorial-desc">
          Protect your server from brute-force attacks: configure UFW rules visually with automated SSH lockout protection, restrict port access by IP subnet, and unban locked IP addresses.
        </p>
        <div style="background: #0f172a; border-radius: 8px; padding: 16px; margin-bottom: 16px; font-size: 0.9rem; color: #cbd5e1;">
          <strong>Step 1:</strong> Open <strong>Visual Firewall (UFW)</strong>.<br>
          <strong>Step 2:</strong> Verify that port 22 is allowed before enabling the firewall.<br>
          <strong>Step 3:</strong> Click <strong>Add Rule</strong> to open web ports (80 HTTP, 443 HTTPS) or limit SSH attempts.<br>
          <strong>Step 4:</strong> Switch to the <strong>Banned IPs</strong> tab to unban false-positive IP blocks from Fail2ban.
        </div>
        <a href="docs/firewall-ufw.html" style="color: #38bdf8; font-weight: 600; text-decoration: none;">Read full Firewall Manager Guide &rarr;</a>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <h3 style="font-size: 1.3rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">Looking for comprehensive technical documentation?</h3>
        <p style="color: #94a3b8; margin-bottom: 20px;">Explore all 39 documentation chapters, cheat sheets, and architecture blueprints.</p>
        <a href="docs/index.html" class="btn btn-primary" style="border-radius: 8px;">Explore Documentation Hub &rarr;</a>
      </div>
    </div>`;

const tutorialsHtml = renderRootPage({
  title: 'Tutorials & Guides',
  seoTitle: 'SSH Desktop Step-by-Step Tutorials & Server Management Guides',
  description: 'Master remote Linux server administration with SSH Desktop: Step-by-step visual tutorials for Docker stacks, database tunnels, SFTP, Nginx reverse proxy, SSL certs, and firewall rules.',
  keywords: 'ssh desktop tutorials, how to manage linux server, visual docker tutorial, ssh port forwarding guide, sftp client tutorial, ufw firewall guide',
  canonical: 'https://sshdesktop.com/tutorials.html',
  content: tutorialsContent
});
fs.writeFileSync(path.join(rootDir, 'tutorials.html'), tutorialsHtml, 'utf8');
console.log('Created root tutorials.html');

// Create tutorial.html redirect to tutorials.html
const tutorialAliasHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=tutorials.html">
  <link rel="canonical" href="https://sshdesktop.com/tutorials.html">
  <title>SSH Desktop Tutorials &amp; Guides</title>
</head>
<body style="background:#0f172a;color:#cbd5e1;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Redirecting to <a href="tutorials.html" style="color:#38bdf8;">SSH Desktop Tutorials &rarr;</a></p>
  <script>window.location.replace("tutorials.html");</script>
</body>
</html>`;
fs.writeFileSync(path.join(rootDir, 'tutorial.html'), tutorialAliasHtml, 'utf8');
console.log('Created root tutorial.html alias');

// 3. Build root quickstart.html
console.log('Generating root quickstart.html...');
const quickstartContent = `
    <div class="page-hero">
      <div class="container">
        <span class="page-badge">3-Minute Setup</span>
        <h1 class="page-title">SSH Desktop 3-Minute Quickstart Guide</h1>
        <p class="page-lead">
          From zero to visual server desktop in 3 minutes. Connect to any Linux VPS, import your existing SSH keys, and experience macOS-style server management.
        </p>
      </div>
    </div>

    <div class="page-container">
      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">1</span>
          <h2 class="tutorial-title">Step 1: Download &amp; Launch Native Binary</h2>
        </div>
        <p class="tutorial-desc">
          Download the pre-compiled installer for your operating system: <a href="download-mac.html" style="color: #38bdf8;">macOS (.dmg)</a>, <a href="download-windows.html" style="color: #38bdf8;">Windows (.msi)</a>, or <a href="download-linux-desktop.html" style="color: #38bdf8;">Linux (.AppImage)</a>. Installation takes under 15 seconds.
        </p>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">2</span>
          <h2 class="tutorial-title">Step 2: Add or Auto-Import Your Server</h2>
        </div>
        <p class="tutorial-desc">
          Click <strong>+ New Connection</strong>. Enter your server hostname or IP address, port 22, and select your private key (Ed25519 / RSA) or enter your password. Existing <code>~/.ssh/config</code> hosts are detected automatically.
        </p>
      </div>

      <div class="tutorial-card">
        <div class="tutorial-header">
          <span class="tutorial-num">3</span>
          <h2 class="tutorial-title">Step 3: Launch Any App from the macOS Dock</h2>
        </div>
        <p class="tutorial-desc">
          Once connected, you will see the macOS Sonoma cloud desktop. Click any icon in the Dock or press <kbd style="background: #334155; padding: 3px 8px; border-radius: 4px; color: #38bdf8;">Cmd/Ctrl + K</kbd> to launch Terminal, Docker, Files, Databases, or Hardware Telemetry.
        </p>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <a href="installation.html" class="btn btn-primary" style="border-radius: 8px; margin-right: 12px;">Full Installation Guide &rarr;</a>
        <a href="tutorials.html" class="btn btn-secondary" style="border-radius: 8px;">Step-by-Step Tutorials &rarr;</a>
      </div>
    </div>`;

const quickstartHtml = renderRootPage({
  title: 'Quickstart Guide',
  seoTitle: 'SSH Desktop 3-Minute Quickstart Guide - Fast Server Onboarding',
  description: 'Get up and running with SSH Desktop in under 3 minutes: Install the app, import existing SSH configs, launch your first cloud desktop, and master Spotlight (Cmd+K).',
  keywords: 'ssh desktop quickstart, how to use ssh desktop, quick ssh setup, ssh client beginner guide, visual server desktop setup',
  canonical: 'https://sshdesktop.com/quickstart.html',
  content: quickstartContent
});
fs.writeFileSync(path.join(rootDir, 'quickstart.html'), quickstartHtml, 'utf8');
console.log('Created root quickstart.html');

// 4. Build root cheat-sheet.html
console.log('Generating root cheat-sheet.html...');
const cheatSheetContent = `
    <div class="page-hero">
      <div class="container">
        <span class="page-badge">Admin Reference</span>
        <h1 class="page-title">The Ultimate Linux Server &amp; SSH Cheat Sheet</h1>
        <p class="page-lead">
          Essential command syntax for sysadmins and developers: OpenSSH flags, Ed25519 key generation, port forwarding tunnels, permissions, systemd services, and UFW firewalls.
        </p>
      </div>
    </div>

    <div class="page-container">
      <div class="tutorial-card">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #38bdf8; margin-top: 0; margin-bottom: 14px;">
          🔑 SSH Key Generation &amp; Distribution
        </h2>
        <div class="docs-code-block"># Generate modern Ed25519 keypair
ssh-keygen -t ed25519 -C "admin@sshdesktop"

# Copy public key to remote server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server.example.com

# Fix strict OpenSSH permissions
chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_ed25519 && chmod 644 ~/.ssh/id_ed25519.pub</div>
      </div>

      <div class="tutorial-card">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #38bdf8; margin-top: 0; margin-bottom: 14px;">
          🔀 SSH Port Forwarding &amp; Tunneling Syntax
        </h2>
        <div class="docs-code-block"># Local Port Forwarding (-L): Access remote database locally
ssh -L 5432:localhost:5432 user@server.example.com

# Remote Port Forwarding (-R): Expose local dev server to remote host
ssh -R 8080:localhost:3000 user@server.example.com

# Dynamic SOCKS5 Proxy (-D): Route browser traffic through remote VPS
ssh -D 1080 -N -f user@server.example.com

# Connect through Bastion / Jump Host (ProxyJump)
ssh -J bastion.example.com user@internal-node.example.com</div>
      </div>

      <div class="tutorial-card">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #38bdf8; margin-top: 0; margin-bottom: 14px;">
          ⚙️ Systemd Service Management Commands
        </h2>
        <div class="docs-code-block"># Check service status, start, restart, reload
sudo systemctl status nginx
sudo systemctl restart nginx
sudo systemctl reload nginx

# Enable service to start on system boot
sudo systemctl enable nginx

# Inspect failed services across entire system
sudo systemctl --failed

# Stream live real-time service logs
sudo journalctl -u nginx -f --tail=100</div>
      </div>

      <div class="tutorial-card">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #38bdf8; margin-top: 0; margin-bottom: 14px;">
          🛡️ Visual UFW &amp; Network Port Commands
        </h2>
        <div class="docs-code-block"># Check UFW firewall status with rule numbers
sudo ufw status numbered

# Allow SSH, HTTP, and HTTPS traffic
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Limit SSH brute force attempts (rate limiting)
sudo ufw limit 22/tcp

# Check all listening TCP/UDP ports and process names
sudo ss -tulpn</div>
      </div>

      <div style="text-align: center; margin-top: 48px;">
        <a href="docs/index.html" class="btn btn-primary" style="border-radius: 8px;">View Interactive GUI Documentation &rarr;</a>
      </div>
    </div>`;

const cheatSheetHtml = renderRootPage({
  title: 'Linux & SSH Cheat Sheet',
  seoTitle: 'The Ultimate Linux Server & SSH Key Cheat Sheet (2026 Reference)',
  description: 'Comprehensive cheat sheet for sysadmins: OpenSSH commands, Ed25519 key generation, ssh config syntax, port forwarding tunnels, systemd units, UFW rules, and permissions.',
  keywords: 'ssh cheat sheet, linux server commands, ed25519 keygen syntax, ssh port forwarding syntax, systemctl cheat sheet, ufw command reference',
  canonical: 'https://sshdesktop.com/cheat-sheet.html',
  content: cheatSheetContent
});
fs.writeFileSync(path.join(rootDir, 'cheat-sheet.html'), cheatSheetHtml, 'utf8');
console.log('Created root cheat-sheet.html');

console.log('All root tutorial, installation, quickstart, and cheat-sheet pages generated successfully!');
