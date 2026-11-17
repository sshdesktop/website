/**
 * Generator for Batch 5 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-fix-ssh-connection-timed-out.html
 * 2. blog/how-to-tunnel-mysql-mariadb-over-ssh.html
 * 3. blog/how-to-setup-ssh-keys-on-macos-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 17: HOW TO FIX SSH CONNECTION TIMED OUT
// =========================================================================
const article17Html = `<!DOCTYPE html>
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
  <title>How to Fix 'SSH Connection Timed Out' (Port 22): 6 Proven Fixes (2026 Guide)</title>
  <meta name="title" content="How to Fix 'SSH Connection Timed Out' (Port 22): 6 Proven Fixes (2026 Guide)">
  <meta name="description" content="Step-by-step troubleshooting: fix 'ssh: connect to host port 22: Connection timed out'. Diagnose firewall drops, AWS EC2 security groups, ISP port 22 blocks, and routing failures.">
  <meta name="keywords" content="ssh connection timed out, ssh connect to host port 22 connection timed out, fix ssh timeout ubuntu, aws ec2 ssh connection timed out, port 22 blocked by isp, traceroute ssh port 22">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Fix 'SSH Connection Timed Out' (Port 22): 6 Proven Fixes">
  <meta property="og:description" content="Step-by-step diagnostic guide to resolving SSH connection timed out errors across AWS EC2, Ubuntu, and cloud servers.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Troubleshooting &amp; Networking">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html">
  <meta name="twitter:title" content="How to Fix 'SSH Connection Timed Out' (Port 22)">
  <meta name="twitter:description" content="Diagnose and resolve SSH connection timed out errors across Windows, Mac, Linux, and AWS EC2.">
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
            "name": "Fix SSH Connection Timed Out",
            "item": "https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html#article",
        "headline": "How to Fix 'SSH Connection Timed Out' (Port 22): 6 Proven Fixes (2026 Guide)",
        "description": "Comprehensive diagnostic guide for fixing 'ssh: connect to host port 22: Connection timed out'. Diagnose packet drops, AWS security groups, and routing issues.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between 'Connection refused' and 'Connection timed out'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'Connection refused' means your packets reached the destination server, but the OS explicitly replied with a TCP RST packet because no program was listening on port 22 or a firewall rejected it. 'Connection timed out' means your client sent TCP SYN packets, but received absolutely no response before timing out — indicating packets are being silently dropped by an upstream firewall, cloud security group, or network routing fault."
            }
          },
          {
            "@type": "Question",
            "name": "Why does AWS EC2 return 'Connection timed out' on port 22?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On AWS EC2, the most common reason is that your security group's Inbound Rules do not allow TCP port 22 from your current public IP address (which frequently changes with home internet providers), or the instance is in a private subnet lacking an Internet Gateway or NAT gateway."
            }
          },
          {
            "@type": "Question",
            "name": "How do I test if my ISP is blocking port 22?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'nc -zv portquiz.net 22' or 'curl http://portquiz.net:22'. Portquiz.net listens on all TCP ports. If port 22 fails while other ports (like 80 or 443) succeed, your local ISP or office network is actively blocking outbound port 22."
            }
          },
          {
            "@type": "Question",
            "name": "How can I bypass ISP port 22 blocks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Configure your remote SSH server to listen on port 443 (standard HTTPS) or port 2222 in '/etc/ssh/sshd_config'. Outbound traffic on port 443 is almost never blocked by firewalls or internet service providers."
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
        <li aria-current="page">Fix SSH Connection Timed Out</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Networking &amp; Troubleshooting</span>
        <h1 class="article-title">How to Fix 'SSH Connection Timed Out' (Port 22): 6 Proven Fixes (2026 Guide)</h1>
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
          You enter <code>ssh user@your-server-ip</code> into your terminal, press Enter, and wait. Ten seconds pass. Thirty seconds pass. Finally, the terminal gives up:
        </p>

        <div class="code-block">
          <code>ssh: connect to host 198.51.100.42 port 22: Connection timed out</code>
        </div>

        <p>
          Unlike <a href="how-to-fix-ssh-connection-refused-port-22.html">Connection refused</a> (where the server is reachable but rejects the port), a <strong>Connection timed out</strong> error means your packets simply vanished into a digital void. Your client sent TCP SYN packets, but never received an acknowledgment (SYN-ACK) or a rejection (RST).
        </p>
        <p>
          In this guide, we walk through the step-by-step diagnostic hierarchy to find where packets are getting dropped and fix the problem fast.
        </p>

        <h2>Step 0: Ping vs Traceroute Diagnostics</h2>
        <p>
          Is the host completely unreachable, or is only port 22 blocked?
        </p>
        <div class="code-block">
          <code># 1. Test basic ICMP reachability:<br>
ping -c 4 198.51.100.42<br><br>
# 2. Trace route on Windows PowerShell:<br>
tracert 198.51.100.42<br><br>
# 3. Trace route on Linux/macOS:<br>
traceroute 198.51.100.42</code>
        </div>
        <p>
          If ping works but SSH times out, the server is alive, but a firewall is silently dropping port 22 traffic.
        </p>

        <h2>Cause 1: AWS EC2 / Cloud Security Group Changed</h2>
        <p>
          On Amazon Web Services (AWS EC2), Google Cloud, and DigitalOcean, servers sit behind cloud-level security groups.
        </p>
        <p>
          Most developers restrict port 22 access to <code>My IP</code> in AWS. However, residential internet service providers frequently change your home public IP address!
        </p>

        <h3>The Fix:</h3>
        <ol>
          <li>Check your current public IP at <code>curl ifconfig.me</code>.</li>
          <li>Log into the <strong>AWS EC2 Console</strong> &rarr; Select <strong>Security Groups</strong>.</li>
          <li>Click <strong>Edit inbound rules</strong>.</li>
          <li>Update the SSH rule source to your new IP (e.g. <code>203.0.113.85/32</code>) or temporarily set it to <code>0.0.0.0/0</code> while testing.</li>
          <li>Click <strong>Save rules</strong>. Connection will succeed within 5 seconds!</li>
        </ol>

        <h2>Cause 2: Local ISP or Corporate Wi-Fi Blocks Outbound Port 22</h2>
        <p>
          Many hotel Wi-Fi networks, airports, universities, and mobile carriers block outbound connections on port 22 to prevent infected laptops from participating in SSH botnets.
        </p>

        <h3>How to Test for ISP Port Blocking:</h3>
        <p>
          Connect to <strong>portquiz.net</strong>, an open diagnostic server that listens on every port:
        </p>
        <div class="code-block">
          <code># Test Port 22:<br>
curl http://portquiz.net:22<br><br>
# Test Port 80 (standard web):<br>
curl http://portquiz.net:80</code>
        </div>
        <p>
          If port 80 connects but port 22 hangs and times out, <strong>your local network or ISP is actively blocking port 22</strong>.
        </p>

        <h3>How to Bypass:</h3>
        <p>
          Configure your server's SSH daemon to listen on port <strong>443</strong> (HTTPS) or port <strong>2222</strong>. Firewalls never block port 443. Check out our step-by-step tutorial: <a href="how-to-change-default-ssh-port-linux.html">How to Change Default SSH Port on Linux</a>.
        </p>

        <h2>Cause 3: The Remote Server Has Crashed or Has No Network</h2>
        <p>
          If ICMP ping also fails and times out, the virtual machine itself may have panicked, ran out of memory (OOM kernel crash), or lost its network interface.
        </p>
        <p>
          Access your cloud provider's out-of-band console:
        </p>
        <ul>
          <li><strong>AWS EC2:</strong> Right click instance &rarr; <strong>Monitor and troubleshoot</strong> &rarr; <strong>Get system log</strong> or <strong>EC2 Serial Console</strong>.</li>
          <li><strong>DigitalOcean:</strong> Click <strong>Access</strong> &rarr; <strong>Launch Droplet Console</strong>.</li>
          <li><strong>Hetzner:</strong> Cloud Console &rarr; <strong>VNC Console</strong>.</li>
        </ul>
        <p>
          Look for kernel panic messages or run <code>ip a</code> to ensure the network interface has an assigned IPv4 address.
        </p>

        <h2>Cause 4: Server-Side Firewall Dropping Packets (UFW / iptables)</h2>
        <p>
          In Linux firewalls, a rule can either <code>REJECT</code> or <code>DROP</code> traffic.
        </p>
        <ul>
          <li><strong>REJECT:</strong> Sends a TCP RST packet back &rarr; Result: <em>Connection refused</em>.</li>
          <li><strong>DROP:</strong> Silently discards packets with zero response &rarr; Result: <em>Connection timed out</em>.</li>
        </ul>
        <p>
          If an admin configured UFW with a default drop policy and forgot to open port 22, it results in an infinite timeout. Log in via your cloud web console and execute:
        </p>
        <div class="code-block">
          <code>sudo ufw allow 22/tcp<br>
sudo ufw reload</code>
        </div>

        <h2>Cause 5: IP Address Changed After Cloud Server Reboot</h2>
        <p>
          Unless you assigned an <strong>Elastic IP (AWS)</strong> or <strong>Reserved Floating IP (DigitalOcean)</strong>, stopping and starting a cloud VPS releases the old public IP and assigns a completely new IP address!
        </p>
        <p>
          Check your cloud provider dashboard to verify you are connecting to the server's current IP address rather than its historical released IP.
        </p>

        <h2>Troubleshooting Decision Tree: Timed Out vs Refused</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Error Output</th>
                <th>Diagnostic Meaning</th>
                <th>Most Probable Root Cause</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Connection timed out</strong> (30s delay)</td>
                <td>Packets dropped in transit; zero response</td>
                <td>Cloud Security Group / ISP block / Firewall DROP</td>
              </tr>
              <tr>
                <td><strong>Connection refused</strong> (Instant)</td>
                <td>Packets reached host; port rejected</td>
                <td><code>sshd</code> service stopped / listening on custom port</td>
              </tr>
              <tr>
                <td><strong>No route to host</strong> (Instant)</td>
                <td>Routing table has no path to destination</td>
                <td>Subnet routing table fault / VPN disconnected</td>
              </tr>
              <tr>
                <td><strong>Permission denied (publickey)</strong></td>
                <td>TCP handshake succeeded; auth failed</td>
                <td><a href="how-to-fix-ssh-permission-denied-publickey-error.html">Key permissions or sshd_config error</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Never Lose Track of Server Health</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            SSH Desktop includes real-time ping monitors, automated port reachability indicators, and dynamic cloud instance syncing.
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
// ARTICLE 18: HOW TO TUNNEL MYSQL / MARIADB OVER SSH
// =========================================================================
const article18Html = `<!DOCTYPE html>
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
  <title>How to Connect to Remote MySQL &amp; MariaDB Over SSH Tunnel (2026 Guide)</title>
  <meta name="title" content="How to Connect to Remote MySQL &amp; MariaDB Over SSH Tunnel (2026 Guide)">
  <meta name="description" content="Step-by-step tutorial: securely connect to remote MySQL and MariaDB databases over an encrypted SSH tunnel. Learn CLI port forwarding (-L 3306), MySQL Workbench, DBeaver, and visual GUI tools.">
  <meta name="keywords" content="ssh tunnel mysql, connect to remote mysql over ssh, mysql workbench ssh tunnel, dbeaver mysql ssh tunnel, mariadb ssh tunnel, secure mysql port 3306 ssh">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Connect to Remote MySQL &amp; MariaDB Over SSH Tunnel">
  <meta property="og:description" content="Secure your remote MySQL database traffic. Complete step-by-step guide for CLI tunneling, MySQL Workbench, DBeaver, and visual GUI tools.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Database &amp; Security">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html">
  <meta name="twitter:title" content="How to Connect to Remote MySQL Over SSH Tunnel (2026)">
  <meta name="twitter:description" content="Never expose port 3306 publicly. Connect to remote MySQL and MariaDB securely using encrypted SSH port forwarding.">
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
            "name": "Connect to Remote MySQL Over SSH Tunnel",
            "item": "https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html#article",
        "headline": "How to Connect to Remote MySQL & MariaDB Over SSH Tunnel (2026 Guide)",
        "description": "Learn how to securely tunnel remote MySQL and MariaDB database traffic over SSH. Covers CLI port forwarding, DBeaver, MySQL Workbench, and visual GUI workflows.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why shouldn't I expose MySQL port 3306 to the public internet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exposing port 3306 publicly invites thousands of automated brute-force attacks against the 'root' MySQL user, opens your database to protocol-level zero-day exploits, and transmits unencrypted credentials over the internet if SSL is misconfigured. Keeping MySQL bound to '127.0.0.1' and tunneling over SSH eliminates all public attack vectors."
            }
          },
          {
            "@type": "Question",
            "name": "What is the command to create an SSH tunnel for MySQL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'ssh -N -L 3306:localhost:3306 user@your-server-ip'. In your database client, connect to '127.0.0.1' on port 3306 with your MySQL username and password."
            }
          },
          {
            "@type": "Question",
            "name": "What if local port 3306 is already in use by a local MySQL server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bind a different local port such as 3307: 'ssh -N -L 3307:localhost:3306 user@your-server-ip'. In your database GUI, connect to host '127.0.0.1' on port '3307'."
            }
          },
          {
            "@type": "Question",
            "name": "How do I configure MySQL Workbench to connect over SSH?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In MySQL Workbench, create a new connection and set 'Connection Method' to 'Standard TCP/IP over SSH'. Enter your remote SSH hostname, SSH username, and SSH private key, then set MySQL Server Port to 3306 and enter your database credentials."
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
        <li aria-current="page">Connect MySQL Over SSH Tunnel</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Database Administration &amp; Security</span>
        <h1 class="article-title">How to Connect to Remote MySQL &amp; MariaDB Over SSH Tunnel (2026 Guide)</h1>
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
          MySQL and MariaDB power over 70% of the web's database workloads, from WordPress and Magento to custom Node.js, Go, and Laravel applications.
        </p>
        <p>
          When administering a remote database, the tempting shortcut is opening port <code>3306</code> in UFW and changing <code>bind-address = 0.0.0.0</code> in <code>my.cnf</code>. <strong>This is one of the most dangerous database practices in production environments.</strong>
        </p>
        <p>
          By creating an encrypted <strong>SSH Tunnel</strong>, you can inspect, query, and manage remote MySQL databases from your local desktop tools (MySQL Workbench, DBeaver, TablePlus, or SSH Desktop's visual Database Studio) while keeping port 3306 locked strictly to localhost.
        </p>

        <h2>Why Public MySQL Port 3306 Is a Critical Vulnerability</h2>
        <div class="callout-box warn">
          <strong>The Dangers of Public Database Exposure:</strong>
          <ul>
            <li><strong>Automated Ransomware Bots:</strong> Scripted botnets scan IPv4 ranges for open port 3306, brute-force MySQL root passwords, drop all databases, and leave a Bitcoin ransom note.</li>
            <li><strong>Plaintext Transmission:</strong> Default MySQL protocol communication does not enforce strict TLS certificate validation. Passwords and sensitive customer tables can be sniffed in transit across unencrypted public networks.</li>
            <li><strong>Compliance Failures:</strong> SOC2, ISO 27001, and PCI-DSS strictly forbid publicly exposed database listeners without hardened multi-factor gateway controls.</li>
          </ul>
        </div>

        <h2>Method 1: Terminal CLI (Local Port Forwarding)</h2>
        <p>
          Open your terminal and establish a local port forward:
        </p>

        <div class="code-block">
          <code>ssh -N -L 3306:localhost:3306 user@your-server-ip</code>
        </div>

        <h3>Handling Local Port 3306 Conflicts:</h3>
        <p>
          If you already have MySQL running locally on your laptop, port 3306 will be occupied. Forward to port <strong>3307</strong> instead:
        </p>
        <div class="code-block">
          <code>ssh -N -L 3307:localhost:3306 user@your-server-ip</code>
        </div>
        <p>
          Now test connecting with the official MySQL client from a second terminal window:
        </p>
        <div class="code-block">
          <code>mysql -h 127.0.0.1 -P 3307 -u db_user -p</code>
        </div>

        <h2>Method 2: Configuring MySQL Workbench</h2>
        <p>
          MySQL Workbench has native SSH tunneling support built directly into its connection wizard:
        </p>
        <ol>
          <li>Open MySQL Workbench and click the <strong>+</strong> icon to add a new MySQL Connection.</li>
          <li>In <strong>Connection Method</strong>, select <strong>Standard TCP/IP over SSH</strong>.</li>
          <li><strong>SSH Hostname:</strong> Your server's public IP address (e.g. <code>198.51.100.42:22</code>).</li>
          <li><strong>SSH Username:</strong> Linux user (e.g. <code>ubuntu</code>).</li>
          <li><strong>SSH Keyfile:</strong> Browse to your private key (<code>~/.ssh/id_ed25519</code>).</li>
          <li><strong>MySQL Hostname:</strong> <code>127.0.0.1</code> (from the server's local perspective).</li>
          <li><strong>MySQL Server Port:</strong> <code>3306</code>.</li>
          <li><strong>Username:</strong> Your remote MySQL user (e.g. <code>app_user</code>).</li>
          <li>Click <strong>Test Connection</strong>. Workbench establishes the SSH pipe and connects seamlessly!</li>
        </ol>

        <h2>Method 3: Configuring DBeaver</h2>
        <ol>
          <li>Create a <strong>New Database Connection</strong> &rarr; Select <strong>MySQL</strong>.</li>
          <li>In the <strong>Main</strong> tab: Host <code>localhost</code>, Port <code>3306</code>, Database name, and MySQL credentials.</li>
          <li>Switch to the <strong>SSH</strong> tab and check <strong>Use SSH Tunnel</strong>.</li>
          <li>Enter your remote server IP, SSH port 22, SSH username, and select your private key.</li>
          <li>Click <strong>Test Connection</strong>.</li>
        </ol>

        <h2>Method 4: Connecting from Application Code (Node.js &amp; Python)</h2>
        <p>
          Once your tunnel is running on <code>127.0.0.1:3307</code>, your local development code can connect just like a local database:
        </p>

        <h3>Python (PyMySQL / SQLAlchemy):</h3>
        <div class="code-block">
          <code>import pymysql<br><br>
connection = pymysql.connect(<br>
    host='127.0.0.1',<br>
    port=3307,<br>
    user='db_user',<br>
    password='secret_password',<br>
    database='production_db'<br>
)</code>
        </div>

        <h3>Node.js (mysql2):</h3>
        <div class="code-block">
          <code>const mysql = require('mysql2/promise');<br><br>
const pool = mysql.createPool({<br>
  host: '127.0.0.1',<br>
  port: 3307,<br>
  user: 'db_user',<br>
  password: 'secret_password',<br>
  database: 'production_db'<br>
});</code>
        </div>

        <h2>The Modern Way: SSH Desktop Visual Database Studio</h2>
        <p>
          Managing terminal port forwards that silently lock ports, keeping separate Java clients running, and juggling connection timeouts is frustrating.
        </p>
        <p>
          <a href="../">SSH Desktop</a> includes a built-in <strong>Visual Database Studio</strong>:
        </p>
        <ul>
          <li><strong>Zero-Config Tunneling:</strong> Automatically establishes an encrypted tunnel over your active SSH session without typing any CLI flags.</li>
          <li><strong>Visual Table &amp; Schema Inspector:</strong> Browse tables, check indexes, edit rows inline, and run SQL queries with autocomplete.</li>
          <li><strong>CSV &amp; JSON Dumps:</strong> Export query results or complete tables in 1 click.</li>
          <li><strong>Auto-Reconnection:</strong> If your connection drops, SSH Desktop re-establishes the tunnel gracefully with zero dangling process locks.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Manage Remote MySQL Safely</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Ditch messy terminal port forwards. Download SSH Desktop — the 100% free GUI client with built-in Database Studio for Windows 11, macOS, and Linux.
          </p>
          <a href="../database-gui-ssh-tunnel.html" class="btn btn-primary btn-lg">
            Explore Database Studio Features &rarr;
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
// ARTICLE 19: HOW TO SETUP SSH KEYS ON MACOS GUIDE
// =========================================================================
const article19Html = `<!DOCTYPE html>
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
  <title>How to Set Up SSH Keys on macOS: Complete 2026 Guide (Ed25519 &amp; Keychain)</title>
  <meta name="title" content="How to Set Up SSH Keys on macOS: Complete 2026 Guide (Ed25519 &amp; Keychain)">
  <meta name="description" content="Step-by-step tutorial: generate secure Ed25519 SSH keys on macOS, save passphrases in Apple Keychain with UseKeychain, copy keys to remote Linux servers, and manage keys visually.">
  <meta name="keywords" content="how to setup ssh keys on mac, generate ssh key macos, ssh-add --apple-use-keychain, mac ssh config usekeychain, ed25519 ssh key mac, copy ssh key to server mac, macos ssh client gui">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up SSH Keys on macOS: Complete Guide (2026)">
  <meta property="og:description" content="Complete macOS SSH setup guide: generate modern Ed25519 keys, integrate with Apple Keychain, copy keys to servers, and automate config.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="macOS &amp; Developer Guides">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html">
  <meta name="twitter:title" content="How to Set Up SSH Keys on macOS (2026 Guide)">
  <meta name="twitter:description" content="Step-by-step tutorial for generating Ed25519 SSH keys on Mac, integrating Apple Keychain, and connecting to Linux servers.">
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
            "name": "How to Set Up SSH Keys on macOS",
            "item": "https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html#article",
        "headline": "How to Set Up SSH Keys on macOS: Complete 2026 Guide (Ed25519 & Keychain)",
        "description": "Step-by-step tutorial on generating secure Ed25519 SSH keys on macOS, saving passphrases in Apple Keychain with UseKeychain, and deploying keys to remote servers.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does macOS ask for my SSH key passphrase after every reboot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By default, Apple's OpenSSH implementation does not persist private key passphrases across restarts. To store your passphrase permanently in macOS Keychain, add 'UseKeychain yes' and 'AddKeysToAgent yes' to your '~/.ssh/config' file, then load the key with 'ssh-add --apple-use-keychain ~/.ssh/id_ed25519'."
            }
          },
          {
            "@type": "Question",
            "name": "What type of SSH key should I generate on Mac?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generate an Ed25519 key using 'ssh-keygen -t ed25519 -C \"your_email@example.com\"'. Ed25519 keys are faster, shorter, and cryptographically superior to legacy RSA keys (which are deprecated in modern OpenSSH)."
            }
          },
          {
            "@type": "Question",
            "name": "Does macOS include ssh-copy-id by default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, modern macOS versions include 'ssh-copy-id' pre-installed. You can copy your public key to any remote Linux server by running 'ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server-ip'."
            }
          },
          {
            "@type": "Question",
            "name": "Where are SSH keys stored on Mac?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All SSH keys and configuration files on macOS are stored in the hidden directory '~/.ssh' (full path: '/Users/<username>/.ssh'). You can view them in Finder by pressing 'Cmd+Shift+Period'."
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
        <li aria-current="page">Set Up SSH Keys on macOS</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">macOS &amp; Security Tutorial</span>
        <h1 class="article-title">How to Set Up SSH Keys on macOS: Complete 2026 Guide (Ed25519 &amp; Keychain)</h1>
        <div class="article-meta">
          <span>Published: November 2026</span>
          <span>&bull;</span>
          <span>9 min read</span>
          <span>&bull;</span>
          <span>By SSH Desktop Engineering Team</span>
        </div>
      </header>

      <div class="article-content">
        <p>
          Whether you are a developer pushing code to GitHub, a DevOps engineer deploying to AWS EC2, or managing a home Linux lab from your MacBook, using cryptographic SSH keys is dramatically faster and safer than typing passwords.
        </p>
        <p>
          However, macOS has a few unique quirks: Apple's custom OpenSSH fork handles passphrases differently, and without the proper configuration, your Mac will constantly prompt you for passphrases every time you restart your machine.
        </p>
        <p>
          In this complete step-by-step tutorial, you will generate an elliptic-curve <strong>Ed25519</strong> key pair, configure seamless Apple Keychain integration, copy your public key to remote Linux servers, and manage keys visually.
        </p>

        <h2>Step 1: Check for Existing SSH Keys</h2>
        <p>
          Open <strong>Terminal</strong> (press <code>Cmd+Space</code>, type "Terminal", and press Enter) and list the contents of your hidden SSH directory:
        </p>
        <div class="code-block">
          <code>ls -la ~/.ssh</code>
        </div>
        <p>
          Look for existing keys like <code>id_ed25519</code> or <code>id_rsa</code>. If they already exist and you want to keep them, skip to Step 3. Otherwise, create a clean modern key.
        </p>

        <h2>Step 2: Generate a Modern Ed25519 Key Pair</h2>
        <p>
          Do not generate legacy RSA keys. Modern OpenSSH servers deprecate RSA with SHA-1 signatures. Instead, generate an <strong>Ed25519</strong> key:
        </p>
        <div class="code-block">
          <code>ssh-keygen -t ed25519 -C "your_email@example.com"</code>
        </div>

        <h3>Interactive Prompts:</h3>
        <ol>
          <li><code>Enter file in which to save the key (/Users/you/.ssh/id_ed25519):</code> &rarr; Press <strong>Enter</strong> to accept default.</li>
          <li><code>Enter passphrase (empty for no passphrase):</code> &rarr; Type a strong passphrase (recommended).</li>
          <li><code>Enter same passphrase again:</code> &rarr; Re-type your passphrase and press Enter.</li>
        </ol>

        <p>
          Two files are created in <code>~/.ssh/</code>:
        </p>
        <ul>
          <li><strong><code>id_ed25519</code> (Private Key):</strong> Your secret cryptographic identity. Never share, copy, or upload this file.</li>
          <li><strong><code>id_ed25519.pub</code> (Public Key):</strong> The public counterpart that you freely upload to servers, GitHub, GitLab, and cloud providers.</li>
        </ul>

        <h2>Step 3: Save Passphrase Permanently in Apple Keychain</h2>
        <p>
          By default, macOS wipes loaded keys from memory on every restart. To instruct macOS to store your passphrase securely in Apple Keychain (protected by your Mac login and Touch ID):
        </p>

        <p>
          Edit (or create) your local <code>~/.ssh/config</code> file:
        </p>
        <div class="code-block">
          <code>nano ~/.ssh/config</code>
        </div>

        <p>
          Paste the following configuration:
        </p>
        <div class="code-block">
          <code>Host *<br>
    AddKeysToAgent yes<br>
    UseKeychain yes<br>
    IdentityFile ~/.ssh/id_ed25519</code>
        </div>

        <p>
          Press <code>Ctrl+O</code> then Enter to save, and <code>Ctrl+X</code> to exit nano.
        </p>

        <p>
          Now, load the key into the agent and save it to the Apple Keychain:
        </p>
        <div class="code-block">
          <code>ssh-add --apple-use-keychain ~/.ssh/id_ed25519</code>
        </div>
        <p>
          Enter your passphrase once. You will <strong>never</strong> be prompted for it again, even across system restarts!
        </p>

        <h2>Step 4: Copy Your Public Key to a Remote Linux Server</h2>
        <p>
          To log into your remote Ubuntu, Debian, or CentOS server without a password:
        </p>
        <div class="code-block">
          <code>ssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-server-ip</code>
        </div>
        <p>
          Enter your remote Linux user password one last time. <code>ssh-copy-id</code> appends your public key to the remote server's <code>~/.ssh/authorized_keys</code> with proper permissions.
        </p>

        <p>
          Now test connecting:
        </p>
        <div class="code-block">
          <code>ssh user@your-server-ip</code>
        </div>
        <p>
          You are instantly logged into your server prompt with zero password prompts!
        </p>

        <h2>Step 5: Add Your SSH Key to GitHub / GitLab</h2>
        <p>
          Copy your public key directly to your macOS clipboard with <code>pbcopy</code>:
        </p>
        <div class="code-block">
          <code>pbcopy &lt; ~/.ssh/id_ed25519.pub</code>
        </div>
        <ol>
          <li>Open <strong>GitHub.com</strong> &rarr; Click profile icon &rarr; <strong>Settings</strong> &rarr; <strong>SSH and GPG keys</strong>.</li>
          <li>Click <strong>New SSH key</strong> &rarr; Title: "MacBook Pro".</li>
          <li>Paste the key into the box &rarr; Click <strong>Add SSH key</strong>.</li>
        </ol>

        <h2>The Native Mac Experience: SSH Desktop for macOS</h2>
        <p>
          Managing dozens of identity files across multiple servers, checking permissions, and configuring jump hosts via terminal files can be tedious.
        </p>
        <p>
          <a href="../download-mac.html">SSH Desktop for macOS</a> is built natively for Apple Silicon (M1/M2/M3/M4) and Intel Macs:
        </p>
        <ul>
          <li><strong>Touch ID &amp; Keychain Integration:</strong> Secure your keys with hardware-backed Touch ID biometric authentication.</li>
          <li><strong>Visual Key Manager:</strong> Generate Ed25519 keys, inspect cryptographic fingerprints, and deploy to servers with 1 click.</li>
          <li><strong>Native Multi-Tab Terminal &amp; SFTP:</strong> Blazing-fast GPU-accelerated terminal with dual-pane drag-and-drop file transfers.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Upgrade Your Mac SSH Experience</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Download SSH Desktop for macOS — the 100% free, native GUI client optimized for Apple Silicon and macOS Sonoma &amp; Sequoia.
          </p>
          <a href="../download-mac.html" class="btn btn-primary btn-lg">
            Download for macOS Free &rarr;
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
const file17Path = path.join(BLOG_DIR, 'how-to-fix-ssh-connection-timed-out.html');
const file18Path = path.join(BLOG_DIR, 'how-to-tunnel-mysql-mariadb-over-ssh.html');
const file19Path = path.join(BLOG_DIR, 'how-to-setup-ssh-keys-on-macos-guide.html');

fs.writeFileSync(file17Path, article17Html.trim() + '\n', 'utf8');
console.log(`Created: ${file17Path} (${article17Html.length} bytes)`);

fs.writeFileSync(file18Path, article18Html.trim() + '\n', 'utf8');
console.log(`Created: ${file18Path} (${article18Html.length} bytes)`);

fs.writeFileSync(file19Path, article19Html.trim() + '\n', 'utf8');
console.log(`Created: ${file19Path} (${article19Html.length} bytes)`);
