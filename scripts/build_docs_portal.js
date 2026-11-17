// scripts/build_docs_portal.js
// Generates the comprehensive, interactive docs/index.html portal.

const fs = require('fs');
const path = require('path');
const docsDir = path.join(__dirname, '..', 'docs');
const { chapters, categories, generateSidebar, generateHeader, generateFooter } = require('./build_comprehensive_docs');

function buildPortal() {
  const sidebar = generateSidebar('index.html');
  const header = generateHeader();
  const footer = generateFooter();

  const totalApps = 25; // apps

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SSH Desktop Documentation - Official User Guides & Architecture Manual</title>
  <meta name="description" content="Official documentation for SSH Desktop. Explore in-depth user manuals, visual walkthroughs, keyboard shortcuts, and step-by-step guides for all 25 native applications.">
  <link rel="canonical" href="https://sshdesktop.com/docs/">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="SSH Desktop Documentation - Official User Guides & Architecture Manual">
  <meta property="og:description" content="Complete documentation for SSH Desktop. Explore guides for terminal, SFTP, Docker, database tunnels, systemd, and web mode.">
  <meta property="og:url" content="https://sshdesktop.com/docs/">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:site_name" content="SSH Desktop">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="SSH Desktop Documentation - User Guides & Architecture Manual">
  <meta name="twitter:description" content="Official documentation for SSH Desktop. Explore guides for terminal, SFTP, Docker, database tunnels, and web mode.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">

  <!-- CSS (Optimized: Modular Base + Docs Bundle) -->
  <link rel="stylesheet" href="../assets/css/base.min.css">
  <link rel="stylesheet" href="../assets/css/docs.min.css">

  <!-- JSON-LD -->
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
          "name": "Documentation",
          "item": "https://sshdesktop.com/docs/"
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://sshdesktop.com/docs/#portal",
      "headline": "SSH Desktop Official Documentation & Code Manual",
      "description": "Comprehensive documentation for all 25 native SSH Desktop applications, architecture, web daemon setup, and verified GitHub code references.",
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "SSH Desktop Documentation Team",
        "url": "https://sshdesktop.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SSH Desktop",
        "url": "https://sshdesktop.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sshdesktop.com/assets/images/favicon.svg"
        }
      }
    }
  ]
}
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
${header}

  <!-- Docs Layout -->
  <main class="container docs-layout">
    <!-- Sticky Mobile Navigation Bar -->
    <div class="docs-mobile-header" id="docsMobileHeader">
      <button type="button" class="docs-mobile-btn" id="docsMobileToggle" aria-expanded="false" aria-controls="docsSidebar" aria-label="Open documentation navigation">
        <span style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.1rem;">☰</span>
          <span>Documentation Menu (43 Guides)</span>
        </span>
        <span style="font-size: 0.8rem; opacity: 0.7;">▼</span>
      </button>
    </div>

    <!-- Mobile Drawer Backdrop -->
    <div class="docs-sidebar-backdrop" id="docsSidebarBackdrop"></div>

    <aside class="docs-sidebar" id="docsSidebar" aria-label="Documentation Table of Contents">
${sidebar}
    </aside>

    <div class="docs-content">
      <!-- Hero -->
      <div style="margin-bottom: 28px;">
        <span class="doc-hero-badge">Documentation &amp; User Manual</span>
        <h1 class="docs-article-title">SSH Desktop Official Documentation</h1>
        <p class="docs-lead">
          The definitive reference guide to SSH Desktop: explore in-depth tutorials, shortcuts, interface walkthroughs, and step-by-step user guides for all 25 native applications.
        </p>

        <div class="doc-pill-grid">
          <span class="doc-pill-tag">🛡️ 100% Agentless Architecture</span>
          <span class="doc-pill-tag">⚡ Rust Tauri 2.0 + React 19</span>
          <span class="doc-pill-tag">🔒 Zero Cloud Telemetry</span>
          <span class="doc-pill-tag">🐧 Supports All Linux Distros</span>
          <span class="doc-pill-tag">📦 25 Native Visual Apps</span>
        </div>
      </div>

      <!-- Quick Search Bar -->
      <div class="doc-search-wrapper">
        <svg class="doc-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="docSearch" class="doc-search-box" placeholder="Search documentation, apps, CLI commands (e.g. docker, ufw, sftp, postgres, nginx, crontab)..." aria-label="Search Documentation">
      </div>

      <!-- Filter Chips -->
      <div class="filter-chips-container" id="filterChips">
        <button class="filter-chip active" data-filter="all">All Topics (${chapters.length})</button>
${categories.map(cat => {
  const count = chapters.filter(c => c.catSlug === cat.slug).length;
  return `        <button class="filter-chip" data-filter="${cat.slug}">${cat.name} (${count})</button>`;
}).join('\n')}
      </div>

      <!-- Conceptual Explanation: What is SSH Desktop & How it Works -->
      <section style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 28px; margin-bottom: 36px;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">
          What is SSH Desktop &amp; How Does it Work?
        </h2>
        <p style="font-size: 0.96rem; color: #cbd5e1; line-height: 1.7; margin-bottom: 16px;">
          <strong>SSH Desktop</strong> transforms any remote headless Linux server into an intuitive, responsive, macOS Sonoma-style visual desktop environment with 25 native applications. Unlike traditional server control panels (cPanel, Webmin, Cockpit, Portainer), SSH Desktop is <strong>100% AGENTLESS</strong>.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 20px 0;">
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px;">
            <div style="font-size: 1.3rem; margin-bottom: 6px;">🚫 No Server Agent</div>
            <p style="font-size: 0.88rem; color: #94a3b8; margin: 0; line-height: 1.5;">
              Zero daemons or software installed on your VPS. It leaves zero footprint, runs zero background loops, and consumes 0 MB of remote server RAM.
            </p>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px;">
            <div style="font-size: 1.3rem; margin-bottom: 6px;">🔒 No Insecure Web Ports</div>
            <p style="font-size: 0.88rem; color: #94a3b8; margin: 0; line-height: 1.5;">
              You do not need to open public web ports (like 9090, 10000, or 9443). Everything communicates exclusively over your encrypted SSH port 22 channel.
            </p>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px;">
            <div style="font-size: 1.3rem; margin-bottom: 6px;">⚡ Native Linux Tools</div>
            <p style="font-size: 0.88rem; color: #94a3b8; margin: 0; line-height: 1.5;">
              Under the hood, SSH Desktop executes standard Linux commands (<code>systemctl</code>, <code>docker</code>, <code>ufw</code>, <code>ss</code>, <code>/proc</code>) and parses raw streams with sub-millisecond Rust speed.
            </p>
          </div>
        </div>

        <div style="font-size: 0.9rem; color: #94a3b8; line-height: 1.6;">
          <strong>Security Guarantee:</strong> Your private keys and credentials never leave your local machine. They are stored in your operating system's hardware vault (macOS Keychain, Windows Credential Manager / DPAPI, Linux Secret Service). No servers, telemetry, or third-party clouds ever touch your data.
        </div>
      </section>

      <!-- 3-Minute Quickstart -->
      <section style="background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 28px; margin-bottom: 36px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin: 0;">
            🚀 3-Minute Quickstart Guide
          </h2>
          <span style="font-size: 0.82rem; color: #38bdf8; font-weight: 600;">Beginner Friendly</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
          <div>
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 6px;">Step 1: Download &amp; Launch</div>
            <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 8px;">
              Download the native desktop installer for <a href="../download-mac.html" style="color: #38bdf8;">macOS (.dmg)</a>, <a href="../download-windows.html" style="color: #38bdf8;">Windows (.msi)</a>, or <a href="../download-linux-desktop.html" style="color: #38bdf8;">Linux (.AppImage / .deb)</a>.
            </p>
            <p style="font-size: 0.82rem; color: #94a3b8; margin: 0;">Or run headless Web Mode on your VPS via our 1-line script.</p>
          </div>
          <div>
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 6px;">Step 2: Add SSH Connection</div>
            <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 8px;">
              Click <strong>New Connection</strong>. Enter your server IP or domain, SSH port (default 22), username (e.g. <code>root</code> or <code>ubuntu</code>), and select your private key (Ed25519 / RSA) or enter your password.
            </p>
            <p style="font-size: 0.82rem; color: #94a3b8; margin: 0;">Existing <code>~/.ssh/config</code> files are detected automatically.</p>
          </div>
          <div>
            <div style="font-weight: 700; color: #38bdf8; margin-bottom: 6px;">Step 3: Launch Any App</div>
            <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 8px;">
              You will be greeted by the macOS Sonoma cloud desktop. Click any icon in the Dock or press <kbd style="background: #334155; padding: 2px 6px; border-radius: 4px; font-size: 0.78rem;">Cmd/Ctrl + K</kbd> to launch Terminal, Docker, Files, Databases, or Logs.
            </p>
            <p style="font-size: 0.82rem; color: #94a3b8; margin: 0;">Drag windows, split panes, and monitor live telemetry.</p>
          </div>
        </div>
      </section>

      <!-- Headless Web Daemon Quickstart Banner -->
      <div class="cli-banner-card" style="margin-bottom: 40px;">
        <div class="cli-banner-badge">Headless Linux Server Quickstart</div>
        <h2 class="cli-banner-title" style="font-size: 1.35rem;">Deploy SSH Desktop Web Daemon in 30 Seconds</h2>
        <p class="cli-banner-text">
          Want to access your cloud desktop from any web browser on your phone, tablet, or laptop? Run our audited 1-line installation script on any Ubuntu, Debian, RHEL, AlmaLinux, Rocky, or Arch VPS:
        </p>
        <div class="docs-code-block" style="margin: 12px 0;">
          curl -fsSL https://sshdesktop.com/install.sh | sudo bash
        </div>
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">
          Runs as a sandboxed systemd service (<code>sshdesktop.service</code>) binding frontend port 2222 and backend port 2020. Read the complete <a href="web-mode.html" style="color: #38bdf8;">Web Mode Guide &rarr;</a>
        </p>
      </div>

      <!-- Interactive 25-App Visual Matrix Table -->
      <section style="margin-bottom: 40px;">
        <div style="display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin: 0;">
            📋 Complete 25-App Directory &amp; Matrix
          </h2>
          <span style="font-size: 0.85rem; color: #94a3b8;" id="searchCount">Showing ${chapters.length} documentation chapters</span>
        </div>
        <p style="font-size: 0.92rem; color: #94a3b8; margin-bottom: 16px;">
          Find any application, the legacy CLI tools it replaces, the underlying Linux commands it runs, and direct links to comprehensive step-by-step user guides.
        </p>

        <table class="matrix-table" id="matrixTable">
          <thead>
            <tr>
              <th style="width: 25%;">Application</th>
              <th style="width: 18%;">Category</th>
              <th style="width: 27%;">What It Does &amp; Replaces</th>
              <th style="width: 18%;">Linux Commands Used</th>
              <th style="width: 12%;">User Guide</th>
            </tr>
          </thead>
          <tbody>
${chapters.map(c => `            <tr class="doc-search-item" data-category="${c.catSlug}" data-title="${c.title.toLowerCase()}" data-replaces="${c.replaces.toLowerCase()}" data-commands="${c.commands.toLowerCase()}" data-desc="${c.summary.toLowerCase()}">
              <td>
                <a href="${c.slug}" class="matrix-app-badge">
                  <span style="font-size: 1.25rem;">${c.icon}</span>
                  <span>${c.title}</span>
                </a>
              </td>
              <td>
                <span class="matrix-cat-badge">${c.category}</span>
              </td>
              <td>
                <div class="matrix-desc-text">${c.summary}</div>
                <div class="matrix-replaces-text">Replaces: ${c.replaces}</div>
              </td>
              <td>
                <code class="matrix-code-badge">${c.commands}</code>
              </td>
              <td>
                <a href="${c.slug}" class="matrix-guide-btn">
                  <span>Read Guide</span> &rarr;
                </a>
              </td>
            </tr>`).join('\n')}
          </tbody>
        </table>
      </section>

      <!-- Category Cards Grid -->
      <section style="margin-bottom: 48px;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 24px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
          📚 Browse Documentation by Category
        </h2>

${categories.map(cat => {
  const catChapters = chapters.filter(c => c.category === cat.name);
  return `        <div class="doc-category-group" data-cat="${cat.slug}" style="margin-bottom: 32px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #38bdf8; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
            <span>${cat.name}</span>
            <span style="font-size: 0.78rem; background: #1e293b; color: #94a3b8; padding: 2px 8px; border-radius: 10px; border: 1px solid #334155;">
              ${catChapters.length} guides
            </span>
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
${catChapters.map(c => `            <div class="doc-app-card doc-search-card" data-category="${c.catSlug}" data-title="${c.title.toLowerCase()}" data-replaces="${c.replaces.toLowerCase()}" data-commands="${c.commands.toLowerCase()}" data-desc="${c.summary.toLowerCase()}">
              <div>
                <div class="doc-card-top">
                  <span class="doc-card-icon">${c.icon}</span>
                  <a href="${c.github}" target="_blank" rel="noopener" class="doc-card-badge">
                    ${c.githubLabel} ↗
                  </a>
                </div>
                <h4 class="doc-card-title">
                  <a href="${c.slug}">${c.title}</a>
                </h4>
                <p class="doc-card-desc">${c.summary}</p>
                <div class="doc-card-replaces">
                  <strong>Replaces:</strong> ${c.replaces}
                </div>
              </div>
              <div class="doc-card-footer">
                <a href="${c.slug}" class="doc-card-link">
                  <span>Read Chapter Manual</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>`).join('\n')}
          </div>
        </div>`;
}).join('\n')}
      </section>

      <!-- Desktop Client vs Web Mode Comparison -->
      <section style="background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 28px; margin-bottom: 40px;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px;">
          Desktop Client vs Web Mode Daemon
        </h2>
        <p style="font-size: 0.94rem; color: #94a3b8; line-height: 1.6; margin-bottom: 20px;">
          SSH Desktop offers two deployment modes. Both share the exact same 25 native applications and reactive UI:
        </p>

        <div class="comparison-grid">
          <div style="background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 22px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span style="font-size: 1.6rem;">💻</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #f8fafc; margin: 0;">Desktop Client (Local)</h3>
            </div>
            <ul style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.7; padding-left: 20px; margin-bottom: 16px;">
              <li>Installed locally on your Mac, Windows PC, or Linux laptop.</li>
              <li><strong>100% Agentless:</strong> Nothing installed on your remote servers.</li>
              <li>Credentials stored in native OS Keychain / DPAPI hardware vaults.</li>
              <li>Multi-window, multi-monitor, and native desktop keyboard shortcuts.</li>
              <li>Ideal for developers, DevOps engineers, and sysadmins.</li>
            </ul>
            <a href="../download.html" class="btn btn-primary btn-sm" style="width: 100%; text-align: center;">Download Desktop App</a>
          </div>

          <div style="background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 22px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span style="font-size: 1.6rem;">🌐</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #f8fafc; margin: 0;">Web Mode Daemon (Server)</h3>
            </div>
            <ul style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.7; padding-left: 20px; margin-bottom: 16px;">
              <li>Installed as a lightweight systemd daemon on your Linux VPS.</li>
              <li>Accessible from <strong>any web browser</strong> (Chrome, Safari, Firefox).</li>
              <li>Works on iPads, iPhones, Android devices, and Chromebooks.</li>
              <li>Shared team access without distributing private SSH keys.</li>
              <li>One-line installer: <code>curl -fsSL https://sshdesktop.com/install.sh | sudo bash</code></li>
            </ul>
            <a href="web-mode.html" class="btn btn-secondary btn-sm" style="width: 100%; text-align: center;">Read Web Mode Setup</a>
          </div>
        </div>
      </section>

      <!-- Global Keyboard Shortcuts Cheat Sheet -->
      <section style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 28px; margin-bottom: 40px;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 16px;">
          ⌨️ Global Keyboard Shortcuts Cheat Sheet
        </h2>
        <p style="font-size: 0.92rem; color: #94a3b8; margin-bottom: 18px;">
          Navigate and control your servers at lightning speed with native keyboard shortcuts:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Spotlight App Launcher</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + K</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">New Terminal Tab</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + T</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Close Active Window/Tab</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + W</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Split Terminal Horizontally</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + \\</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Split Terminal Vertically</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + Shift + \\</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Quick Server Switcher</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + Shift + S</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Save File in Monaco Editor</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + S</kbd>
          </div>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.88rem; color: #cbd5e1;">Find &amp; Replace in Editor/Logs</span>
            <kbd style="background: #334155; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-family: var(--font-mono); color: #38bdf8;">Cmd/Ctrl + F</kbd>
          </div>
        </div>
      </section>

      <!-- Frequently Asked Questions -->
      <section style="margin-bottom: 48px;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 20px;">
          ❓ Frequently Asked Questions (FAQ)
        </h2>

        <div class="faq-card">
          <div class="faq-question">Do I need to install any software or agents on my Linux servers?</div>
          <p class="faq-answer">
            No! When using the SSH Desktop application on your Mac, Windows, or Linux desktop, it is 100% agentless. It connects to standard OpenSSH on port 22, runs standard POSIX/Linux commands, and leaves zero background processes or disk files on your server.
          </p>
        </div>

        <div class="faq-card">
          <div class="faq-question">How does SSH Desktop compare to Portainer, Webmin, or cPanel?</div>
          <p class="faq-answer">
            Portainer, Webmin, and cPanel are server-side web applications that require running background daemons on every managed server, consuming 150MB-500MB of RAM, and opening public HTTP ports that can be targeted by automated vulnerability scanners. SSH Desktop runs locally on your PC, consumes 0 MB on the server, requires no open web ports, and manages Docker, databases, systemd, and files over your existing secure SSH keys.
          </p>
        </div>

        <div class="faq-card">
          <div class="faq-question">Are my SSH private keys or server traffic sent to any third-party cloud?</div>
          <p class="faq-answer">
            Never. SSH Desktop has zero telemetry, zero analytics trackers, and zero intermediary relay servers. Your SSH connection goes directly from your local computer to your Linux server IP. Private keys are encrypted and stored in your operating system's hardware vault (Apple Keychain, Windows DPAPI, or Linux Secret Service).
          </p>
        </div>

        <div class="faq-card">
          <div class="faq-question">Can I connect to multiple servers at the same time?</div>
          <p class="faq-answer">
            Yes! You can connect to dozens of servers simultaneously. Use the Server Switcher dropdown or press <kbd>Cmd/Ctrl + Shift + S</kbd> to jump between servers. You can even use the Multi-Server Snippets app to broadcast shell scripts across multiple machines in parallel.
          </p>
        </div>

        <div class="faq-card">
          <div class="faq-question">Can I connect through a Bastion Host or Jump Server?</div>
          <p class="faq-answer">
            Yes. SSH Desktop fully supports <code>ProxyJump</code> directives and SSH jump hosts. If you have hosts configured in your <code>~/.ssh/config</code> with <code>ProxyJump bastion.example.com</code>, SSH Desktop parses them automatically.
          </p>
        </div>

        <div class="faq-card">
          <div class="faq-question">How do root and sudo permissions work in SSH Desktop?</div>
          <p class="faq-answer">
            If you connect as <code>root</code>, all admin applications (UFW firewall, package updates, systemd service reloads) execute directly. If you connect as a regular user with <code>sudo</code> privileges, SSH Desktop prompts for your sudo password when performing administrative operations and caches it in memory for your session only.
          </p>
        </div>
      </section>

      <!-- Conversion CTA -->
      <div class="blog-cta-box" style="margin-top: 48px;">
        <h3>Get Started with SSH Desktop Today</h3>
        <p>Take control of your Linux infrastructure with the fastest, agentless cloud desktop for DevOps and SysAdmins.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="../download.html" class="blog-cta-button">Download Free Desktop App &rarr;</a>
          <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener" class="btn btn-secondary" style="border-radius: 8px;">View Source on GitHub</a>
        </div>
      </div>
    </div>
  </main>

${footer}

  <!-- Interactive Search & Filter Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('docSearch');
      const filterChips = document.querySelectorAll('.filter-chip');
      const tableRows = document.querySelectorAll('.doc-search-item');
      const cards = document.querySelectorAll('.doc-search-card');
      const categoryGroups = document.querySelectorAll('.doc-category-group');
      const countEl = document.getElementById('searchCount');

      let currentFilter = 'all';
      let currentQuery = '';

      function applyFilter() {
        let visibleCount = 0;

        tableRows.forEach(row => {
          const cat = row.dataset.category;
          const title = row.dataset.title;
          const replaces = row.dataset.replaces;
          const commands = row.dataset.commands;
          const desc = row.dataset.desc;

          const matchesCat = (currentFilter === 'all' || cat === currentFilter);
          const matchesQuery = !currentQuery || 
            title.includes(currentQuery) || 
            replaces.includes(currentQuery) || 
            commands.includes(currentQuery) || 
            desc.includes(currentQuery);

          if (matchesCat && matchesQuery) {
            row.style.display = '';
            visibleCount++;
          } else {
            row.style.display = 'none';
          }
        });

        cards.forEach(card => {
          const cat = card.dataset.category;
          const title = card.dataset.title;
          const replaces = card.dataset.replaces;
          const commands = card.dataset.commands;
          const desc = card.dataset.desc;

          const matchesCat = (currentFilter === 'all' || cat === currentFilter);
          const matchesQuery = !currentQuery || 
            title.includes(currentQuery) || 
            replaces.includes(currentQuery) || 
            commands.includes(currentQuery) || 
            desc.includes(currentQuery);

          card.style.display = (matchesCat && matchesQuery) ? 'flex' : 'none';
        });

        categoryGroups.forEach(group => {
          const cat = group.dataset.cat;
          if (currentFilter !== 'all' && cat !== currentFilter) {
            group.style.display = 'none';
          } else {
            // Check if any card inside is visible
            const visibleCards = group.querySelectorAll('.doc-search-card[style*="display: flex"]');
            group.style.display = (visibleCards.length > 0 || !currentQuery) ? '' : 'none';
          }
        });

        if (countEl) {
          countEl.textContent = \`Showing \${visibleCount} of \${tableRows.length} documentation chapters\`;
        }
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value.trim().toLowerCase();
          applyFilter();
        });
      }

      filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          filterChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          currentFilter = chip.dataset.filter;
          applyFilter();
        });
      });
      // Mobile Drawer Toggle
      const mobileToggle = document.getElementById('docsMobileToggle');
      const sidebar = document.getElementById('docsSidebar');
      const backdrop = document.getElementById('docsSidebarBackdrop');
      const closeBtn = document.getElementById('docsSidebarClose');

      function openSidebar() {
        if (sidebar && backdrop) {
          sidebar.classList.add('open');
          backdrop.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      }

      function closeSidebar() {
        if (sidebar && backdrop) {
          sidebar.classList.remove('open');
          backdrop.classList.remove('open');
          document.body.style.overflow = '';
        }
      }

      if (mobileToggle) mobileToggle.addEventListener('click', openSidebar);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
      if (backdrop) backdrop.addEventListener('click', closeSidebar);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
          closeSidebar();
        }
      });

      // Sidebar Filter
      const sidebarFilter = document.getElementById('docsSidebarFilter');
      if (sidebarFilter && sidebar) {
        sidebarFilter.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          const groups = sidebar.querySelectorAll('.docs-nav-group-title');
          const lists = sidebar.querySelectorAll('.docs-nav-list');
          lists.forEach((list, idx) => {
            let hasVis = false;
            list.querySelectorAll('li').forEach(li => {
              const text = li.textContent.toLowerCase();
              if (!q || text.includes(q)) {
                li.style.display = '';
                hasVis = true;
              } else {
                li.style.display = 'none';
              }
            });
            if (groups[idx]) {
              groups[idx].style.display = hasVis ? '' : 'none';
            }
          });
        });
      }
    });
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(docsDir, 'index.html'), html, 'utf8');
  console.log('Successfully generated docs/index.html');
}

buildPortal();
