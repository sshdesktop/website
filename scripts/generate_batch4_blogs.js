/**
 * Generator for Batch 4 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-change-default-ssh-port-linux.html
 * 2. blog/ssh-tunnel-socks5-proxy-browser-guide.html
 * 3. blog/how-to-setup-ssh-bastion-host-jump-server.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 14: HOW TO CHANGE DEFAULT SSH PORT ON LINUX
// =========================================================================
const article14Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
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

  <!-- Primary SEO Meta Tags -->
  <title>How to Change Default SSH Port 22 on Linux: Step-by-Step (2026 Guide)</title>
  <meta name="title" content="How to Change Default SSH Port 22 on Linux: Step-by-Step (2026 Guide)">
  <meta name="description" content="Step-by-step tutorial: change the default SSH port 22 on Ubuntu, Debian, CentOS, and AlmaLinux. Learn sshd_config edits, UFW and firewalld rules, SELinux policy, and Ubuntu socket activation.">
  <meta name="keywords" content="change default ssh port, change ssh port ubuntu 24.04, how to change ssh port 22 linux, ufw allow custom ssh port, selinux semanage ssh port, ubuntu ssh.socket change port">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Change Default SSH Port 22 on Linux: Step-by-Step">
  <meta property="og:description" content="Harden Linux security: change default SSH port 22 to reduce botnet attacks by 99%. Complete guide for Ubuntu, Debian, and RHEL.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Security &amp; Hardening">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html">
  <meta name="twitter:title" content="How to Change Default SSH Port 22 on Linux (2026)">
  <meta name="twitter:description" content="Step-by-step guide to changing SSH port 22 on Linux, configuring firewalls, SELinux, and systemd sockets.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#ffffff">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <style>
    .article-wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .article-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 24px;
    }
    .article-title {
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      font-size: 0.9rem;
      color: var(--text-dim);
    }
    .article-content {
      font-size: 1.1rem;
      line-height: 1.75;
      color: #1e293b;
    }
    .article-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 16px;
      color: var(--text-main);
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .article-content h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 28px;
      margin-bottom: 12px;
      color: var(--text-main);
    }
    .article-content p {
      margin-bottom: 20px;
    }
    .article-content ul, .article-content ol {
      margin-bottom: 24px;
      padding-left: 28px;
    }
    .article-content li {
      margin-bottom: 8px;
    }
    .code-block {
      background: #0f172a;
      color: #f8fafc;
      padding: 18px 22px;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.92rem;
      overflow-x: auto;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .code-block code {
      color: inherit;
      background: transparent;
      padding: 0;
    }
    .callout-box {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 16px 20px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.98rem;
    }
    .callout-box.tip {
      background: #eff6ff;
      border-left-color: #2563eb;
    }
    .callout-box.warn {
      background: #fffbeb;
      border-left-color: #f59e0b;
    }
    .comparison-table-wrap {
      overflow-x: auto;
      margin: 28px 0;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      text-align: left;
    }
    .comparison-table th, .comparison-table td {
      padding: 12px 16px;
      border: 1px solid var(--border);
    }
    .comparison-table th {
      background: #f8fafc;
      font-weight: 700;
      color: var(--text-main);
    }
    .comparison-table tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .article-cta {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
      border: 1px solid #bae6fd;
      border-radius: var(--radius-lg);
      padding: 32px;
      text-align: center;
      margin-top: 50px;
    }
    .breadcrumb-nav {
      padding: 14px 0 0;
      font-size: 0.88rem;
    }
    .breadcrumb-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      color: var(--text-dim);
    }
  </style>

  <!-- Structured Data: BlogPosting & FAQPage -->
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
            "name": "Blog",
            "item": "https://sshdesktop.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How to Change Default SSH Port on Linux",
            "item": "https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html#article",
        "headline": "How to Change Default SSH Port 22 on Linux: Step-by-Step (2026 Guide)",
        "description": "Comprehensive tutorial on changing the default SSH port 22 on Linux. Covers sshd_config, firewall rules (UFW/firewalld), SELinux configuration, and Ubuntu socket activation.",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": "https://sshdesktop.com/assets/images/logo.svg"
        },
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why should I change the default SSH port from 22?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every public IPv4 address is probed thousands of times daily by automated botnets looking for open port 22. Changing your SSH port to a high unprivileged port (like 2222 or 49152) eliminates over 99% of automated brute-force attempts, keeping your server authentication logs clean and reducing CPU load."
            }
          },
          {
            "@type": "Question",
            "name": "What port range should I choose for SSH?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose a port in the private/ephemeral range between 1024 and 65535 that is not registered with IANA for another common service. Good popular choices include 2222, 22022, or random ports like 49152-65535."
            }
          },
          {
            "@type": "Question",
            "name": "Why did changing the port break SSH in Ubuntu 22.10 or 24.04?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Modern Ubuntu releases (22.10 and later) use systemd socket activation for OpenSSH. Changes to 'Port' in '/etc/ssh/sshd_config' are ignored unless you also update '/lib/systemd/system/ssh.socket' or override it with 'systemctl edit ssh.socket'."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if SELinux blocks my custom SSH port on RHEL/CentOS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On RHEL, CentOS, or AlmaLinux with SELinux enforcing, run 'sudo semanage port -a -t ssh_port_t -p tcp <NEW_PORT>'. This informs the SELinux policy engine that OpenSSH is authorized to bind that TCP port."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38" decoding="async">
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="../features.html">Features</a></li>
          <li><a href="../docs.html">Docs</a></li>
          <li><a href="./" style="color: var(--accent-cyan); font-weight: 700;">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Breadcrumb -->
    <div class="container breadcrumb-nav">
      <ol class="breadcrumb-list">
        <li><a href="../">Home</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li><a href="./">Blog</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li aria-current="page">How to Change Default SSH Port</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Linux Security &amp; Hardening</span>
        <h1 class="article-title">How to Change Default SSH Port 22 on Linux: Step-by-Step (2026 Guide)</h1>
        <div class="article-meta">
          <span>Published: November 2026</span>
          <span>&bull;</span>
          <span>10 min read</span>
          <span>&bull;</span>
          <span>By SSH Desktop Engineering Team</span>
        </div>
      </header>

      <div class="article-content">
        <p>
          Within minutes of launching any cloud server on AWS, DigitalOcean, Hetzner, or Linode, inspection of <code>/var/log/auth.log</code> reveals an uncomfortable truth: automated botnets from across the globe are pounding port 22 with hundreds of thousands of dictionary login attempts per hour.
        </p>
        <p>
          While changing the default SSH port is technically "security through obscurity" and not a substitute for disabling passwords in favor of Ed25519 keys, it provides an immediate, tangible benefit: <strong>it cuts down 99.9% of automated botnet noise</strong>, frees up system CPU cycles, and prevents authentication logs from bloating to gigabytes.
        </p>
        <p>
          In this guide, you will learn the safe, foolproof sequence to change your SSH port without accidentally locking yourself out of your server.
        </p>

        <div class="callout-box warn">
          <strong>The #1 Golden Rule:</strong> Never close your existing active SSH terminal session until you have successfully verified the new custom port from a <em>separate, second terminal window</em>!
        </div>

        <h2>Step 1: Choose an Unused Port Number</h2>
        <p>
          TCP ports range from 1 to 65535:
        </p>
        <ul>
          <li><strong>Ports 1–1023:</strong> Well-known privileged system ports (e.g. 21 FTP, 22 SSH, 80 HTTP, 443 HTTPS).</li>
          <li><strong>Ports 1024–49151:</strong> Registered user ports.</li>
          <li><strong>Ports 49152–65535:</strong> Dynamic or ephemeral ports (safest choice).</li>
        </ul>
        <p>
          Before choosing a port (e.g., <code>2222</code> or <code>49822</code>), verify nothing is currently listening on it:
        </p>
        <div class="code-block">
          <code>sudo ss -tulpn | grep ':2222'</code>
        </div>
        <p>
          If the output is empty, port 2222 is available.
        </p>

        <h2>Step 2: Allow the New Port in Your Firewall (BEFORE changing SSH!)</h2>
        <p>
          The most common rookie mistake is editing <code>sshd_config</code> first and restarting the service before opening the firewall, immediately locking the admin out. Always configure the firewall first!
        </p>

        <h3>1. Ubuntu &amp; Debian (UFW):</h3>
        <div class="code-block">
          <code>sudo ufw allow 2222/tcp comment 'Custom OpenSSH Port'<br>
sudo ufw reload<br>
sudo ufw status</code>
        </div>

        <h3>2. CentOS, RHEL, &amp; AlmaLinux (firewalld):</h3>
        <div class="code-block">
          <code>sudo firewall-cmd --permanent --add-port=2222/tcp<br>
sudo firewall-cmd --reload</code>
        </div>

        <h3>3. AWS EC2, GCP, &amp; DigitalOcean Cloud Firewalls:</h3>
        <p>
          Remember that cloud providers run external security groups. Open the AWS EC2 or DigitalOcean console and add an <strong>Inbound Security Rule</strong> for <code>Custom TCP</code> on port <code>2222</code>.
        </p>

        <h2>Step 3: Configure SELinux (RHEL, CentOS, Rocky Linux Only)</h2>
        <p>
          On Red Hat family distributions with <strong>SELinux</strong> enabled in <code>Enforcing</code> mode, the kernel policy will block OpenSSH from binding any port other than 22.
        </p>
        <p>
          Authorize your new port in SELinux:
        </p>
        <div class="code-block">
          <code># Install semanage tool if missing:<br>
sudo dnf install -y policycoreutils-python-utils<br><br>
# Add port 2222 to SELinux SSH policy:<br>
sudo semanage port -a -t ssh_port_t -p tcp 2222<br><br>
# Verify the policy:<br>
sudo semanage port -l | grep ssh</code>
        </div>

        <h2>Step 4: Update SSH Daemon Configuration</h2>
        <p>
          Edit your SSH configuration file:
        </p>
        <div class="code-block">
          <code>sudo nano /etc/ssh/sshd_config</code>
        </div>
        <p>
          Locate the line containing <code>#Port 22</code>. Uncomment it and change the value:
        </p>
        <div class="code-block">
          <code>Port 2222</code>
        </div>

        <div class="callout-box tip">
          <strong>Pro-Tip (Dual-Port Transition):</strong> During the transition, you can list both ports: <code>Port 22</code> and <code>Port 2222</code>. Once you verify port 2222 works, remove port 22 and close it in UFW!
        </div>

        <p>
          Test the configuration syntax for errors before restarting:
        </p>
        <div class="code-block">
          <code>sudo sshd -t</code>
        </div>
        <p>
          If it returns no output, your syntax is valid.
        </p>

        <h2>Step 5: Handling Ubuntu 22.10 &amp; 24.04 Socket Activation Caveat</h2>
        <p>
          If you are on modern Ubuntu (22.10, 23.04, 24.04 LTS), OpenSSH is controlled by <strong>systemd socket activation</strong> (<code>ssh.socket</code>). Modifying <code>sshd_config</code> alone will NOT change the port!
        </p>

        <p>
          Check if <code>ssh.socket</code> is active:
        </p>
        <div class="code-block">
          <code>sudo systemctl status ssh.socket</code>
        </div>

        <p>
          If active, create a systemd socket override:
        </p>
        <div class="code-block">
          <code>sudo systemctl edit ssh.socket</code>
        </div>
        <p>
          Paste the following override block into the editor:
        </p>
        <div class="code-block">
          <code>[Socket]<br>
ListenStream=<br>
ListenStream=2222</code>
        </div>
        <p>
          Save and reload systemd:
        </p>
        <div class="code-block">
          <code>sudo systemctl daemon-reload<br>
sudo systemctl restart ssh.socket</code>
        </div>

        <p>
          For traditional distributions (Debian 11/12, CentOS, or earlier Ubuntu), simply restart the service:
        </p>
        <div class="code-block">
          <code>sudo systemctl restart ssh   # Debian/Ubuntu<br>
sudo systemctl restart sshd  # RHEL/CentOS</code>
        </div>

        <h2>Step 6: Verify Listening Ports and Test from a New Terminal</h2>
        <p>
          Confirm OpenSSH is actively bound to your new port:
        </p>
        <div class="code-block">
          <code>sudo ss -tulpn | grep -i ssh</code>
        </div>
        <p>
          You should see <code>0.0.0.0:2222</code> in the listening state.
        </p>

        <p>
          Now, <strong>leaving your current session open</strong>, open a second terminal on your local laptop and connect:
        </p>
        <div class="code-block">
          <code>ssh -p 2222 user@your-server-ip</code>
        </div>
        <p>
          Once verified, close old port 22 in UFW: <code>sudo ufw delete allow 22/tcp</code>.
        </p>

        <h2>Connecting Effortlessly with SSH Desktop</h2>
        <p>
          Having to type <code>-p 2222</code> or <code>-P 2222</code> on every terminal, scp, and sftp command is repetitive.
        </p>
        <p>
          In <a href="../">SSH Desktop</a>, custom ports are first-class citizens:
        </p>
        <ul>
          <li><strong>Visual Port Selector:</strong> Enter any custom port in the server profile dialog once, and SSH Desktop handles terminal shells, SFTP file browsing, and port forwards automatically.</li>
          <li><strong>Subnet Port Scanner:</strong> Built-in visual network scanner identifies non-standard SSH ports on local subnets and lab environments with 1 click.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Upgrade Your Linux Server Management</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Stop memorizing custom port flags. Download SSH Desktop — the 100% free GUI client for Windows 11, macOS, and Linux.
          </p>
          <a href="../download.html" class="btn btn-primary btn-lg">
            Download SSH Desktop Free &rarr;
          </a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom-bar">
        <div class="footer-bottom-left">
          <p>&copy; 2026 SSH Desktop Inc. Licensed under Apache 2.0 / MIT.</p>
        </div>
        <div class="footer-bottom-right">
          <nav class="footer-legal-nav" aria-label="Footer Navigation">
            <a href="../">Home</a>
            <a href="../apps.html">Apps</a>
            <a href="../docs.html">Docs</a>
            <a href="../download.html">Download</a>
            <a href="./">Blog</a>
            <a href="../sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <script src="../assets/js/core.min.js" defer></script>
</body>
</html>
`;

// =========================================================================
// ARTICLE 15: SSH TUNNEL SOCKS5 PROXY (BROWSER & SYSTEM GUIDE)
// =========================================================================
const article15Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
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

  <!-- Primary SEO Meta Tags -->
  <title>How to Use SSH as a SOCKS5 Proxy: Secure Your Browser &amp; Traffic (2026 Guide)</title>
  <meta name="title" content="How to Use SSH as a SOCKS5 Proxy: Secure Your Browser &amp; Traffic (2026 Guide)">
  <meta name="description" content="Turn any remote Linux VPS into a high-speed, encrypted SOCKS5 proxy using SSH dynamic port forwarding (ssh -D). Configure Chrome, Firefox, curl, and bypass firewalls securely.">
  <meta name="keywords" content="ssh socks5 proxy, ssh dynamic port forwarding, ssh -d 1080, ssh socks proxy chrome firefox, turn vps into vpn ssh, bypass firewall ssh socks5, secure public wifi ssh tunnel">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Use SSH as a SOCKS5 Proxy: Secure Your Browser &amp; Traffic">
  <meta property="og:description" content="Turn any Linux VPS into an encrypted personal SOCKS5 proxy with ssh -D. Step-by-step setup for Chrome, Firefox, and curl.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Privacy &amp; Networking">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html">
  <meta name="twitter:title" content="How to Use SSH as a SOCKS5 Proxy (2026 Guide)">
  <meta name="twitter:description" content="Turn any remote Linux server into a secure, encrypted SOCKS5 proxy using SSH dynamic port forwarding.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#ffffff">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <style>
    .article-wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .article-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 24px;
    }
    .article-title {
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      font-size: 0.9rem;
      color: var(--text-dim);
    }
    .article-content {
      font-size: 1.1rem;
      line-height: 1.75;
      color: #1e293b;
    }
    .article-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 16px;
      color: var(--text-main);
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .article-content h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 28px;
      margin-bottom: 12px;
      color: var(--text-main);
    }
    .article-content p {
      margin-bottom: 20px;
    }
    .article-content ul, .article-content ol {
      margin-bottom: 24px;
      padding-left: 28px;
    }
    .article-content li {
      margin-bottom: 8px;
    }
    .code-block {
      background: #0f172a;
      color: #f8fafc;
      padding: 18px 22px;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.92rem;
      overflow-x: auto;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .code-block code {
      color: inherit;
      background: transparent;
      padding: 0;
    }
    .callout-box {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 16px 20px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.98rem;
    }
    .callout-box.tip {
      background: #eff6ff;
      border-left-color: #2563eb;
    }
    .callout-box.warn {
      background: #fffbeb;
      border-left-color: #f59e0b;
    }
    .comparison-table-wrap {
      overflow-x: auto;
      margin: 28px 0;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      text-align: left;
    }
    .comparison-table th, .comparison-table td {
      padding: 12px 16px;
      border: 1px solid var(--border);
    }
    .comparison-table th {
      background: #f8fafc;
      font-weight: 700;
      color: var(--text-main);
    }
    .comparison-table tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .article-cta {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
      border: 1px solid #bae6fd;
      border-radius: var(--radius-lg);
      padding: 32px;
      text-align: center;
      margin-top: 50px;
    }
    .breadcrumb-nav {
      padding: 14px 0 0;
      font-size: 0.88rem;
    }
    .breadcrumb-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      color: var(--text-dim);
    }
  </style>

  <!-- Structured Data: BlogPosting & FAQPage -->
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
            "name": "Blog",
            "item": "https://sshdesktop.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How to Use SSH as a SOCKS5 Proxy",
            "item": "https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html#article",
        "headline": "How to Use SSH as a SOCKS5 Proxy: Secure Your Browser & Traffic (2026 Guide)",
        "description": "Complete tutorial on SSH dynamic port forwarding. Learn how to turn any remote VPS into an encrypted personal SOCKS5 proxy for Chrome, Firefox, and system traffic.",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": "https://sshdesktop.com/assets/images/logo.svg"
        },
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "mainEntityOfPage": "https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between local port forwarding (-L) and dynamic port forwarding (-D)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local port forwarding (-L) maps a single local port to one specific predefined destination address and port (e.g., localhost:5432 to remote PostgreSQL). Dynamic port forwarding (-D) turns SSH into a full SOCKS4/SOCKS5 proxy server. Any client application can connect and request arbitrary destinations across any protocol dynamically."
            }
          },
          {
            "@type": "Question",
            "name": "Does an SSH SOCKS5 proxy encrypt my DNS requests?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if configured properly. Unlike older HTTP proxies, SOCKS5 supports remote DNS resolution. When you enable 'Proxy DNS when using SOCKS v5' in Firefox or browser proxy extensions, DNS lookups happen on the remote VPS, completely preventing local ISP DNS snooping."
            }
          },
          {
            "@type": "Question",
            "name": "What command starts an SSH SOCKS5 proxy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'ssh -N -D 1080 user@your-vps-ip'. This binds a local SOCKS5 listener on '127.0.0.1:1080' without opening an interactive shell."
            }
          },
          {
            "@type": "Question",
            "name": "Is an SSH SOCKS5 proxy as secure as a commercial VPN?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In many ways, an SSH SOCKS5 proxy on your own VPS is more private than a commercial VPN. You control the server, ensure zero activity logs, avoid shared VPN IP address bans, and use hardened OpenSSH encryption (ChaCha20-Poly1305 or AES-GCM)."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38" decoding="async">
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="../features.html">Features</a></li>
          <li><a href="../docs.html">Docs</a></li>
          <li><a href="./" style="color: var(--accent-cyan); font-weight: 700;">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Breadcrumb -->
    <div class="container breadcrumb-nav">
      <ol class="breadcrumb-list">
        <li><a href="../">Home</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li><a href="./">Blog</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li aria-current="page">SSH as a SOCKS5 Proxy</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Privacy &amp; Dynamic Port Forwarding</span>
        <h1 class="article-title">How to Use SSH as a SOCKS5 Proxy: Secure Your Browser &amp; Traffic (2026 Guide)</h1>
        <div class="article-meta">
          <span>Published: November 2026</span>
          <span>&bull;</span>
          <span>11 min read</span>
          <span>&bull;</span>
          <span>By SSH Desktop Engineering Team</span>
        </div>
      </header>

      <div class="article-content">
        <p>
          Whether working from a public coffee shop Wi-Fi network, traveling internationally, or needing to bypass strict corporate firewalls, paying for commercial third-party VPN subscriptions can be costly and concerning from a privacy perspective.
        </p>
        <p>
          If you already have access to any remote Linux server (a \$4/mo DigitalOcean Droplet, AWS EC2 instance, or home Raspberry Pi), you already own a <strong>private, zero-log encrypted proxy</strong>.
        </p>
        <p>
          Using SSH's built-in <strong>Dynamic Port Forwarding (<code>-D</code>)</strong>, you can turn your SSH client into a full-fledged SOCKS5 proxy that routes web browsing, API calls, and application traffic securely through your remote server.
        </p>

        <h2>How SSH Dynamic Forwarding (SOCKS5) Works</h2>
        <p>
          Standard local port forwarding (<code>ssh -L</code>) requires knowing the destination IP and port in advance (e.g. forward port 5432 to a database).
        </p>
        <p>
          With <strong>Dynamic Port Forwarding</strong>, your SSH client acts as an intelligent SOCKS proxy:
        </p>
        <ol>
          <li>Your SSH client opens a local listening port on your laptop (e.g. <code>localhost:1080</code>).</li>
          <li>Your browser (Chrome, Firefox) connects to <code>127.0.0.1:1080</code> and requests any website (e.g. <code>https://example.com</code>).</li>
          <li>The SSH client encrypts the web request and sends it through the existing SSH tunnel over port 22.</li>
          <li>The remote server decrypts the request, fetches the website from the public internet, and sends the response back through the encrypted tunnel.</li>
        </ol>
        <p>
          To anyone monitoring your local network (hackers on public Wi-Fi, hotel routers, ISPs), they see nothing except an impenetrable stream of encrypted SSH traffic.
        </p>

        <h2>Step 1: Launch the SOCKS5 Proxy from Your Terminal</h2>
        <p>
          Open your terminal (PowerShell, macOS, or Linux) and run:
        </p>

        <div class="code-block">
          <code>ssh -N -D 1080 user@your-server-ip</code>
        </div>

        <h3>Flag Breakdown:</h3>
        <ul>
          <li><strong><code>-D 1080</code>:</strong> Starts a dynamic port forwarder listening on local port <code>1080</code>.</li>
          <li><strong><code>-N</code>:</strong> Tells OpenSSH not to execute a remote shell. It only handles traffic forwarding, saving memory and bandwidth.</li>
          <li><strong><code>-C</code> (Optional):</strong> Enables gzip compression on all data packets for faster web browsing on slow connections.</li>
        </ul>

        <div class="code-block">
          <code># Optimized command with compression &amp; keepalive:<br>
ssh -N -C -D 1080 -o ServerAliveInterval=60 user@your-server-ip</code>
        </div>

        <h2>Step 2: Configure Firefox (Zero Extension Needed)</h2>
        <p>
          Firefox is the best browser for SOCKS5 proxies because it supports standalone proxy settings and remote DNS routing without altering your whole operating system:
        </p>
        <ol>
          <li>Open <strong>Firefox Settings</strong> &rarr; Scroll to <strong>Network Settings</strong> &rarr; Click <strong>Settings...</strong></li>
          <li>Select <strong>Manual proxy configuration</strong>.</li>
          <li>In the <strong>SOCKS Host</strong> field, enter <code>127.0.0.1</code> and Port <code>1080</code>.</li>
          <li>Select <strong>SOCKS v5</strong>.</li>
          <li><strong>Crucial Security Step:</strong> Check the box <strong>Proxy DNS when using SOCKS v5</strong>. (This ensures your DNS queries cannot be intercepted by your local network provider!).</li>
          <li>Click <strong>OK</strong>.</li>
        </ol>

        <h2>Step 3: Configure Google Chrome / Microsoft Edge</h2>
        <p>
          Chrome and Edge use the system proxy settings by default. To launch a private Chrome window routed exclusively through your SOCKS5 proxy without altering system-wide settings, launch it from the command line:
        </p>

        <h3>On Windows 11 (PowerShell):</h3>
        <div class="code-block">
          <code>Start-Process "chrome.exe" --proxy-server="socks5://127.0.0.1:1080"</code>
        </div>

        <h3>On macOS:</h3>
        <div class="code-block">
          <code>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --proxy-server="socks5://127.0.0.1:1080" &amp;</code>
        </div>

        <p>
          Alternatively, install free browser extensions like <strong>Proxy SwitchyOmega</strong> or <strong>FoxyProxy</strong> to toggle between Direct and SOCKS5 proxy with a single toolbar click.
        </p>

        <h2>Step 4: Route CLI Tools &amp; Scripts Through SOCKS5 (curl &amp; git)</h2>
        <p>
          You can route developer tools through your SSH SOCKS5 proxy with simple command-line arguments:
        </p>

        <h3>1. Test with curl:</h3>
        <div class="code-block">
          <code># Without proxy (shows your real home IP):<br>
curl ifconfig.me<br><br>
# Through SOCKS5 proxy (shows your remote server's IP):<br>
curl --socks5-hostname 127.0.0.1:1080 ifconfig.me</code>
        </div>

        <h3>2. Route Git over SOCKS5:</h3>
        <div class="code-block">
          <code>git config --global http.proxy 'socks5://127.0.0.1:1080'</code>
        </div>

        <h2>Comparison: SSH SOCKS5 Proxy vs Commercial VPN</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Commercial VPN (Nord/Express)</th>
                <th>SSH Dynamic Proxy (-D)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Monthly Cost</strong></td>
                <td>\$5 - \$15 / month</td>
                <td><strong>\$0</strong> (Uses existing VPS)</td>
              </tr>
              <tr>
                <td><strong>Trust &amp; Logging</strong></td>
                <td>Third-party company claims "no-logs"</td>
                <td><strong>You own and control 100%</strong></td>
              </tr>
              <tr>
                <td><strong>IP Reputation</strong></td>
                <td>Shared IPs frequently blacklisted/CAPTCHAs</td>
                <td><strong>Clean, dedicated IP address</strong></td>
              </tr>
              <tr>
                <td><strong>Protocol Firewall Evasion</strong></td>
                <td>OpenVPN/WireGuard ports often blocked</td>
                <td><strong>Port 22 looks like normal SSH</strong></td>
              </tr>
              <tr>
                <td><strong>App Granularity</strong></td>
                <td>Usually routes whole computer</td>
                <td><strong>Per-browser or per-command</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The 1-Click Visual Way: SSH Desktop Proxy Manager</h2>
        <p>
          Managing background terminal processes that you accidentally terminate or forget running can leave your browser disconnected.
        </p>
        <p>
          <a href="../">SSH Desktop</a> integrates an automated <strong>Dynamic Tunnel &amp; SOCKS5 Studio</strong>:
        </p>
        <ul>
          <li><strong>1-Click SOCKS5 Switch:</strong> Toggle a local SOCKS5 proxy on/off directly from any server bookmark with a single visual switch.</li>
          <li><strong>Bandwidth &amp; Latency Graph:</strong> Live visual meter shows real-time throughput, active proxy connections, and round-trip latency.</li>
          <li><strong>Auto-Reconnect:</strong> If your Wi-Fi flickers or laptop sleeps, SSH Desktop automatically restores the SOCKS5 proxy without breaking your browser sessions.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Secure Your Traffic with SSH Desktop</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Turn any server into an encrypted proxy with zero terminal commands. Download SSH Desktop — 100% free for Windows 11, macOS, and Linux.
          </p>
          <a href="../ssh-port-forwarding.html" class="btn btn-primary btn-lg">
            Explore Visual Port Forwarding &rarr;
          </a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom-bar">
        <div class="footer-bottom-left">
          <p>&copy; 2026 SSH Desktop Inc. Licensed under Apache 2.0 / MIT.</p>
        </div>
        <div class="footer-bottom-right">
          <nav class="footer-legal-nav" aria-label="Footer Navigation">
            <a href="../">Home</a>
            <a href="../apps.html">Apps</a>
            <a href="../docs.html">Docs</a>
            <a href="../download.html">Download</a>
            <a href="./">Blog</a>
            <a href="../sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <script src="../assets/js/core.min.js" defer></script>
</body>
</html>
`;

// =========================================================================
// ARTICLE 16: HOW TO SETUP SSH BASTION HOST / JUMP SERVER
// =========================================================================
const article16Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
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

  <!-- Primary SEO Meta Tags -->
  <title>How to Set Up an SSH Bastion Host (Jump Server): Complete Architecture Guide (2026)</title>
  <meta name="title" content="How to Set Up an SSH Bastion Host (Jump Server): Complete Architecture Guide (2026)">
  <meta name="description" content="Complete architecture and setup guide for SSH Bastion Hosts and Jump Servers. Secure private VPC subnets, configure ProxyJump (-J), harden bastion security, and eliminate Agent Forwarding risks.">
  <meta name="keywords" content="ssh bastion host, ssh jump server setup, bastion host aws vpc architecture, ssh proxyjump tutorial, harden ssh bastion server, ssh jump host config, secure private subnet ssh">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up an SSH Bastion Host (Jump Server): Complete Guide">
  <meta property="og:description" content="Master cloud bastion architecture. Learn how to configure jump hosts with ProxyJump, harden access, and manage private VPC servers.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Cloud Architecture &amp; Security">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html">
  <meta name="twitter:title" content="How to Set Up an SSH Bastion Host (2026 Guide)">
  <meta name="twitter:description" content="Secure your private cloud VPC with an SSH bastion jump host. Learn ProxyJump, hardening, and multi-hop routing.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#ffffff">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <style>
    .article-wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .article-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 24px;
    }
    .article-title {
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      font-size: 0.9rem;
      color: var(--text-dim);
    }
    .article-content {
      font-size: 1.1rem;
      line-height: 1.75;
      color: #1e293b;
    }
    .article-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 16px;
      color: var(--text-main);
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .article-content h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 28px;
      margin-bottom: 12px;
      color: var(--text-main);
    }
    .article-content p {
      margin-bottom: 20px;
    }
    .article-content ul, .article-content ol {
      margin-bottom: 24px;
      padding-left: 28px;
    }
    .article-content li {
      margin-bottom: 8px;
    }
    .code-block {
      background: #0f172a;
      color: #f8fafc;
      padding: 18px 22px;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.92rem;
      overflow-x: auto;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .code-block code {
      color: inherit;
      background: transparent;
      padding: 0;
    }
    .callout-box {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 16px 20px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.98rem;
    }
    .callout-box.tip {
      background: #eff6ff;
      border-left-color: #2563eb;
    }
    .callout-box.warn {
      background: #fffbeb;
      border-left-color: #f59e0b;
    }
    .comparison-table-wrap {
      overflow-x: auto;
      margin: 28px 0;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      text-align: left;
    }
    .comparison-table th, .comparison-table td {
      padding: 12px 16px;
      border: 1px solid var(--border);
    }
    .comparison-table th {
      background: #f8fafc;
      font-weight: 700;
      color: var(--text-main);
    }
    .comparison-table tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .article-cta {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
      border: 1px solid #bae6fd;
      border-radius: var(--radius-lg);
      padding: 32px;
      text-align: center;
      margin-top: 50px;
    }
    .breadcrumb-nav {
      padding: 14px 0 0;
      font-size: 0.88rem;
    }
    .breadcrumb-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      color: var(--text-dim);
    }
  </style>

  <!-- Structured Data: BlogPosting & FAQPage -->
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
            "name": "Blog",
            "item": "https://sshdesktop.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SSH Bastion Host & Jump Server Architecture",
            "item": "https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html#article",
        "headline": "How to Set Up an SSH Bastion Host (Jump Server): Complete Architecture Guide (2026)",
        "description": "Comprehensive engineering guide to SSH Bastion Hosts and Jump Servers. Secure private VPC subnets in AWS and GCP, configure ProxyJump, and harden bastion security.",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": "https://sshdesktop.com/assets/images/logo.svg"
        },
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an SSH Bastion Host?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An SSH Bastion Host (also called a Jump Server or Jump Box) is a single, heavily hardened gateway server located in a public subnet. It acts as the sole authorized entry point for sysadmins and developers to reach private, internal cloud servers that have no public IP addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Why is ProxyJump safer than SSH Agent Forwarding (ssh -A)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SSH Agent Forwarding (ssh -A) forwards access to your local ssh-agent socket onto the remote bastion. If root on the bastion is compromised, an attacker can hijack your forwarded socket to authenticate to other servers. 'ProxyJump' (-J) uses TCP tunneling instead; the bastion only forwards raw encrypted ciphertext and never has access to your private keys or agent socket."
            }
          },
          {
            "@type": "Question",
            "name": "What is the CLI flag for jumping through a bastion host?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the '-J' flag: 'ssh -J user@bastion-ip user@internal-private-ip'. OpenSSH handles the multi-hop handshake transparently."
            }
          },
          {
            "@type": "Question",
            "name": "How should I harden a cloud bastion host?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disable password authentication ('PasswordAuthentication no'), disable root login ('PermitRootLogin no'), enforce MFA with Google Authenticator or hardware security keys (FIDO2/U2F), restrict inbound security group access to corporate VPN IP ranges, and install fail2ban."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38" decoding="async">
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="../features.html">Features</a></li>
          <li><a href="../docs.html">Docs</a></li>
          <li><a href="./" style="color: var(--accent-cyan); font-weight: 700;">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Breadcrumb -->
    <div class="container breadcrumb-nav">
      <ol class="breadcrumb-list">
        <li><a href="../">Home</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li><a href="./">Blog</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li aria-current="page">SSH Bastion Host Architecture</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Cloud Architecture &amp; Enterprise Security</span>
        <h1 class="article-title">How to Set Up an SSH Bastion Host (Jump Server): Complete Architecture Guide (2026)</h1>
        <div class="article-meta">
          <span>Published: November 2026</span>
          <span>&bull;</span>
          <span>11 min read</span>
          <span>&bull;</span>
          <span>By SSH Desktop Engineering Team</span>
        </div>
      </header>

      <div class="article-content">
        <p>
          In modern cloud infrastructure (Amazon Web Services, Google Cloud, Azure, and private OpenStack clouds), placing every server on a public IPv4 address is an architectural anti-pattern.
        </p>
        <p>
          Instead, enterprise security models place databases, application workers, and caching layers in isolated <strong>Private Subnets</strong> with internal IP addresses (e.g. <code>10.0.x.x</code>). To administer these private machines, engineers route their traffic through a dedicated, heavily audited gateway known as a <strong>Bastion Host</strong> or <strong>Jump Server</strong>.
        </p>
        <p>
          In this guide, you will learn the security mechanics of bastion hosts, how to configure multi-hop routing using modern <code>ProxyJump</code>, why legacy SSH agent forwarding is dangerous, and how to harden a bastion server against intrusion.
        </p>

        <h2>Cloud Network Topology: Public Subnet vs Private Subnet</h2>
        <p>
          A well-architected cloud VPC (Virtual Private Cloud) separates exposure into two zones:
        </p>
        <ul>
          <li><strong>Public Subnet (Internet-Facing):</strong> Contains the Internet Gateway, load balancers, and a single, locked-down <strong>Bastion Host</strong>. The bastion has a public IP address and accepts inbound SSH strictly from authorized administrator IPs.</li>
          <li><strong>Private Subnet (Zero Internet Inbound):</strong> Contains production database clusters (PostgreSQL, MySQL), internal microservices, and Kubernetes worker nodes. These nodes have NO public IPs and reject all inbound traffic except connections originating from the Bastion's internal IP.</li>
        </ul>

        <h2>Step 1: Connecting via CLI (The Modern ProxyJump Syntax)</h2>
        <p>
          In older tutorials, developers were taught to SSH into the bastion, wait for a prompt, and then run a second SSH command from the bastion to the target. This required storing private keys on the bastion — a critical security hazard!
        </p>
        <p>
          With modern OpenSSH, you use the <strong><code>-J</code> (ProxyJump)</strong> flag:
        </p>

        <div class="code-block">
          <code>ssh -J ec2-user@bastion.example.com ubuntu@10.0.2.45</code>
        </div>

        <p>
          If the bastion uses a custom port or key:
        </p>
        <div class="code-block">
          <code>ssh -J ec2-user@bastion.example.com:2222 -i ~/.ssh/internal_key.pem ubuntu@10.0.2.45</code>
        </div>

        <h3>Why ProxyJump Is Better Than SSH Agent Forwarding (ssh -A):</h3>
        <div class="callout-box warn">
          <strong>Security Warning:</strong> Never use <code>ssh -A</code> (Agent Forwarding) on untrusted jump servers. When agent forwarding is active, a malicious user or attacker with root privileges on the bastion can access your local agent's UNIX socket (<code>$SSH_AUTH_SOCK</code>) and authenticate to your other servers using your private keys.
        </div>
        <p>
          <strong><code>ProxyJump</code> does NOT forward keys.</strong> Instead, it commands the bastion to act as a raw TCP proxy via <code>nc</code> or <code>sshd -W</code>. The SSH handshake occurs directly between your local laptop and the internal target. The bastion only ever sees encrypted ciphertext.
        </p>

        <h2>Step 2: Permanent ~/.ssh/config Configuration</h2>
        <p>
          Typing <code>-J</code> on every command is repetitive. Add both entries to your local <code>~/.ssh/config</code>:
        </p>

        <div class="code-block">
          <code># 1. The Bastion Gateway<br>
Host bastion<br>
    HostName 198.51.100.10<br>
    User ec2-user<br>
    IdentityFile ~/.ssh/bastion_key.pem<br><br>
# 2. Private App Server in VPC<br>
Host app-server<br>
    HostName 10.0.2.45<br>
    User ubuntu<br>
    IdentityFile ~/.ssh/internal_key.pem<br>
    ProxyJump bastion<br><br>
# 3. Wildcard for ALL 10.0.* Internal Nodes<br>
Host 10.0.*<br>
    User ubuntu<br>
    IdentityFile ~/.ssh/internal_key.pem<br>
    ProxyJump bastion</code>
        </div>

        <p>
          Now, you can connect directly with:
        </p>
        <div class="code-block">
          <code>ssh app-server<br>
# Or connect directly to any private IP:<br>
ssh 10.0.2.78</code>
        </div>

        <h2>Step 3: Transferring Files Through the Bastion (SFTP &amp; SCP)</h2>
        <p>
          Because OpenSSH handles <code>ProxyJump</code> at the transport layer, file transfers work seamlessly over the bastion:
        </p>

        <div class="code-block">
          <code># SCP through bastion:<br>
scp -J ec2-user@bastion.example.com ./app.tar.gz ubuntu@10.0.2.45:/opt/apps/<br><br>
# Or using the config alias:<br>
scp ./app.tar.gz app-server:/opt/apps/</code>
        </div>

        <h2>Step 4: Hardening the Bastion Server (Production Checklist)</h2>
        <p>
          Because the Bastion is the sole gatekeeper to your private network, it must be hardened ruthlessly:
        </p>

        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Security Control</th>
                <th>Implementation Directive</th>
                <th>Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Disable Passwords</strong></td>
                <td><code>PasswordAuthentication no</code></td>
                <td>Renders brute-force attacks impossible</td>
              </tr>
              <tr>
                <td><strong>Disable Root Login</strong></td>
                <td><code>PermitRootLogin no</code></td>
                <td>Forces individual named user accounts for audits</td>
              </tr>
              <tr>
                <td><strong>IP Allowlisting</strong></td>
                <td>Security Group: allow port 22 only from Office VPN IP</td>
                <td>Blocks 100% of unauthorized public traffic</td>
              </tr>
              <tr>
                <td><strong>Multi-Factor Authentication</strong></td>
                <td>Google Authenticator PAM module / FIDO2</td>
                <td>Guarantees second-factor cryptographic challenge</td>
              </tr>
              <tr>
                <td><strong>Automated Ban Rules</strong></td>
                <td>Install <code>fail2ban</code></td>
                <td>Bans scanning IPs automatically after 3 bad tries</td>
              </tr>
              <tr>
                <td><strong>Session Auditing</strong></td>
                <td>Enable <code>teleport</code> or systemd auditd</td>
                <td>Logs every keystroke typed on internal infrastructure</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The Visual Solution: SSH Desktop Bastion Manager</h2>
        <p>
          Writing nested jump proxies and configuring complex multi-hop tunnels across dev, staging, and production VPCs can be confusing.
        </p>
        <p>
          <a href="../">SSH Desktop</a> simplifies bastion architectures:
        </p>
        <ul>
          <li><strong>Visual Jump Host Dropdown:</strong> Select any saved server as a "Jump Host" in a simple dropdown menu. SSH Desktop handles multi-hop keys, tunnels, and port forwarding automatically.</li>
          <li><strong>Zero-Leak Security:</strong> Keys remain encrypted on your local machine; credentials are never cached or exposed on the jump host.</li>
          <li><strong>Simultaneous Dual-Pane SFTP:</strong> Browse files on internal VPC servers visually through the bastion with full drag-and-drop support.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Manage Private Cloud Servers with Ease</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Navigate VPC bastions and private cloud subnets effortlessly. Download SSH Desktop — the 100% free GUI client for Windows 11, macOS, and Linux.
          </p>
          <a href="../aws-ec2-ssh-client.html" class="btn btn-primary btn-lg">
            Explore AWS &amp; Cloud Workflows &rarr;
          </a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom-bar">
        <div class="footer-bottom-left">
          <p>&copy; 2026 SSH Desktop Inc. Licensed under Apache 2.0 / MIT.</p>
        </div>
        <div class="footer-bottom-right">
          <nav class="footer-legal-nav" aria-label="Footer Navigation">
            <a href="../">Home</a>
            <a href="../apps.html">Apps</a>
            <a href="../docs.html">Docs</a>
            <a href="../download.html">Download</a>
            <a href="./">Blog</a>
            <a href="../sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <script src="../assets/js/core.min.js" defer></script>
</body>
</html>
`;

// Write the 3 files
const file14Path = path.join(BLOG_DIR, 'how-to-change-default-ssh-port-linux.html');
const file15Path = path.join(BLOG_DIR, 'ssh-tunnel-socks5-proxy-browser-guide.html');
const file16Path = path.join(BLOG_DIR, 'how-to-setup-ssh-bastion-host-jump-server.html');

fs.writeFileSync(file14Path, article14Html.trim() + '\n', 'utf8');
console.log(`Created: ${file14Path} (${article14Html.length} bytes)`);

fs.writeFileSync(file15Path, article15Html.trim() + '\n', 'utf8');
console.log(`Created: ${file15Path} (${article15Html.length} bytes)`);

fs.writeFileSync(file16Path, article16Html.trim() + '\n', 'utf8');
console.log(`Created: ${file16Path} (${article16Html.length} bytes)`);
