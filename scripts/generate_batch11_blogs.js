/**
 * Generator for Batch 11 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-protect-ssh-with-fail2ban-guide.html
 * 2. blog/how-to-automate-linux-backups-rsync-cron-guide.html
 * 3. blog/openssh-server-hardening-security-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 35: HOW TO PROTECT SSH WITH FAIL2BAN
// =========================================================================
const article35Html = `<!DOCTYPE html>
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
  <title>How to Protect SSH with Fail2ban on Linux (Ubuntu, Debian, RHEL): 2026 Guide</title>
  <meta name="title" content="How to Protect SSH with Fail2ban on Linux (Ubuntu, Debian, RHEL): 2026 Guide">
  <meta name="description" content="Stop brute-force SSH attacks using Fail2ban. Complete guide to jail.local configuration, bantime, unbanning IPs, and monitoring security visually.">
  <meta name="keywords" content="fail2ban ssh ubuntu, how to install fail2ban, fail2ban unban ip, stop ssh brute force attack, fail2ban jail local config, visual linux security auditor">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Protect SSH with Fail2ban on Linux (2026 Guide)">
  <meta property="og:description" content="Block automated botnets and brute-force hackers. Configure Fail2ban jails, set persistent bans, and inspect banned IPs visually.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Server Security &amp; Firewalls">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html">
  <meta name="twitter:title" content="Protect SSH with Fail2ban (2026 Guide)">
  <meta name="twitter:description" content="Step-by-step tutorial: install Fail2ban, configure jail.local, automate firewall blocking, and unban IPs safely.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#0a0c10">

  <!-- Modular Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <!-- Structured Data: TechArticle & BreadcrumbList & FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html#article",
        "headline": "How to Protect SSH with Fail2ban on Linux (Ubuntu, Debian, RHEL): 2026 Guide",
        "description": "Stop brute-force SSH attacks using Fail2ban. Complete guide to jail.local configuration, bantime, unbanning IPs, and monitoring security visually.",
        "url": "https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html",
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sshdesktop.com/assets/images/favicon-512x512.png"
          }
        },
        "image": "https://sshdesktop.com/assets/images/og-image.png",
        "articleSection": "Server Security & Firewalls",
        "keywords": "fail2ban ssh tutorial, configure fail2ban ubuntu, fail2ban unban ip command, prevent brute force ssh"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html#breadcrumb",
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
            "name": "Fail2ban SSH Protection Guide",
            "item": "https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I check which IPs are currently banned by Fail2ban?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'sudo fail2ban-client status sshd'. The output will display the total number of failed attempts, total banned IPs, and a list of currently active banned IP addresses."
            }
          },
          {
            "@type": "Question",
            "name": "How do I unban an accidentally banned IP address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Execute 'sudo fail2ban-client set sshd unbanip <IP_ADDRESS>'. You can also whitelist trusted static IP addresses permanently by adding them to the 'ignoreip' directive in /etc/fail2ban/jail.local."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I edit jail.local instead of jail.conf?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The /etc/fail2ban/jail.conf file is provided by the package maintainer and will be overwritten whenever Fail2ban is updated via apt or dnf. Any custom configuration in /etc/fail2ban/jail.local safely overrides jail.conf and persists across software updates."
            }
          }
        ]
      }
    ]
  }
  </script>

  <style>
    .blog-article-wrapper {
      max-width: 860px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .blog-breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.88rem;
      color: var(--text-muted, #8b949e);
      margin-bottom: 24px;
    }
    .blog-breadcrumb a {
      color: var(--accent, #58a6ff);
      text-decoration: none;
    }
    .blog-breadcrumb a:hover {
      text-decoration: underline;
    }
    .blog-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border-color, #30363d);
      padding-bottom: 28px;
    }
    .blog-post-title {
      font-size: 2.35rem;
      font-weight: 800;
      line-height: 1.25;
      color: #f0f6fc;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .blog-meta {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.9rem;
      color: #8b949e;
      flex-wrap: wrap;
    }
    .blog-meta-tag {
      background: rgba(56, 139, 253, 0.15);
      color: #58a6ff;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid rgba(56, 139, 253, 0.3);
    }
    .blog-content {
      font-size: 1.05rem;
      line-height: 1.75;
      color: #c9d1d9;
    }
    .blog-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      color: #f0f6fc;
      margin: 44px 0 18px;
      border-bottom: 1px solid #21262d;
      padding-bottom: 8px;
    }
    .blog-content h3 {
      font-size: 1.28rem;
      font-weight: 600;
      color: #e6edf3;
      margin: 30px 0 14px;
    }
    .blog-content p {
      margin-bottom: 20px;
    }
    .blog-content ul, .blog-content ol {
      margin-bottom: 22px;
      padding-left: 28px;
    }
    .blog-content li {
      margin-bottom: 8px;
    }
    .blog-content pre {
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 16px 20px;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
      font-size: 0.92rem;
      color: #e6edf3;
      margin: 22px 0 24px;
      line-height: 1.55;
    }
    .blog-content code {
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 0.9em;
      background: rgba(110, 118, 129, 0.2);
      padding: 2px 6px;
      border-radius: 4px;
      color: #58a6ff;
    }
    .blog-content pre code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
    .callout-box {
      background: rgba(56, 139, 253, 0.08);
      border-left: 4px solid #58a6ff;
      border-radius: 0 8px 8px 0;
      padding: 18px 22px;
      margin: 26px 0;
      color: #c9d1d9;
    }
    .callout-box.tip {
      background: rgba(46, 160, 67, 0.1);
      border-left-color: #2ea043;
    }
    .callout-box.warning {
      background: rgba(210, 153, 34, 0.1);
      border-left-color: #d29922;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      margin: 26px 0;
      font-size: 0.94rem;
    }
    .comparison-table th, .comparison-table td {
      border: 1px solid #30363d;
      padding: 12px 14px;
      text-align: left;
    }
    .comparison-table th {
      background: #161b22;
      color: #f0f6fc;
      font-weight: 600;
    }
    .comparison-table tr:nth-child(even) {
      background: #0d1117;
    }
    .gui-banner {
      background: linear-gradient(135deg, rgba(88, 166, 255, 0.12) 0%, rgba(137, 87, 229, 0.12) 100%);
      border: 1px solid rgba(88, 166, 255, 0.3);
      border-radius: 12px;
      padding: 24px;
      margin: 36px 0;
      text-align: center;
    }
    .gui-banner h3 {
      font-size: 1.35rem;
      color: #f0f6fc;
      margin-top: 0;
      margin-bottom: 10px;
    }
    .gui-banner p {
      color: #8b949e;
      margin-bottom: 18px;
      font-size: 0.98rem;
    }
    .gui-banner a.cta-btn {
      display: inline-block;
      background: #238636;
      color: #ffffff;
      padding: 10px 22px;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s;
    }
    .gui-banner a.cta-btn:hover {
      background: #2ea043;
    }
    .faq-item {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 18px 22px;
      margin-bottom: 16px;
    }
    .faq-item h4 {
      margin: 0 0 10px;
      color: #f0f6fc;
      font-size: 1.08rem;
    }
    .faq-item p {
      margin: 0;
      color: #8b949e;
    }
  </style>
</head>
<body class="bg-dark text-light">
  <!-- Top Global Navigation Bar -->
  <header>
    <nav class="nav-container" aria-label="Main Navigation">
      <div class="nav-inner">
        <a href="../index.html" class="nav-logo" aria-label="SSH Desktop Home">
          <img src="../assets/images/favicon.svg" alt="SSH Desktop Logo" width="32" height="32" class="nav-logo-img">
          <span class="nav-logo-text">SSH Desktop</span>
        </a>
        <div class="nav-links">
          <a href="../features.html" class="nav-link">Features</a>
          <a href="../alternatives/index.html" class="nav-link">Alternatives</a>
          <a href="../docs.html" class="nav-link">Documentation</a>
          <a href="index.html" class="nav-link active">Blog</a>
          <a href="../pricing.html" class="nav-link">Pricing</a>
          <a href="../download.html" class="btn-primary nav-download-btn">Download</a>
        </div>
      </div>
    </nav>
  </header>

  <main class="blog-article-wrapper">
    <!-- Breadcrumb Navigation -->
    <nav class="blog-breadcrumb" aria-label="Breadcrumbs">
      <a href="../index.html">Home</a>
      <span>&rsaquo;</span>
      <a href="index.html">Blog</a>
      <span>&rsaquo;</span>
      <span>Fail2ban SSH Protection Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Protect SSH with Fail2ban on Linux (Ubuntu, Debian, RHEL): 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Server Security</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        The moment any Linux server is connected to the public internet, automated botnets and malicious scanners begin bombarding port 22 with dictionary attacks. Left unmitigated, these attacks fill server auth logs with thousands of entries, exhaust CPU cycles, and risk unauthorized penetration if weak credentials exist on any user account.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          <strong>Fail2ban</strong> inspects authentication log files in real-time (such as <code>/var/log/auth.log</code> or systemd journal logs) and automatically updates firewall rules (using <code>iptables</code>, <code>nftables</code>, or <code>ufw</code>) to drop packets from offensive IP addresses. In this tutorial, you will configure custom bans, set up permanent whitelists, and monitor attacks visually with <a href="../linux-security-auditor.html">SSH Desktop Security Auditor</a>.
        </p>
      </div>

      <h2>1. Installing Fail2ban on Ubuntu, Debian &amp; RHEL</h2>
      <pre><code># On Ubuntu & Debian:
sudo apt update &amp;&amp; sudo apt install -y fail2ban

# On RHEL, CentOS, Rocky Linux & Fedora:
sudo dnf install -y epel-release
sudo dnf install -y fail2ban fail2ban-systemd

# Enable and start the systemd service
sudo systemctl enable --now fail2ban</code></pre>

      <h2>2. Configuring jail.local for SSH Defense</h2>
      <p>
        Never modify the default <code>jail.conf</code> file directly, as package upgrades will overwrite your changes. Instead, create a <code>jail.local</code> file:
      </p>

      <pre><code># Copy base configuration to jail.local
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Open jail.local in your editor or SSH Desktop Monaco editor
sudo nano /etc/fail2ban/jail.local</code></pre>

      <h3>Recommended Production Configuration</h3>
      <p>
        Locate the <code>[DEFAULT]</code> and <code>[sshd]</code> sections and apply these hardened parameters:
      </p>

      <pre><code>[DEFAULT]
# Whitelist localhost and your trusted office/home static IP
ignoreip = 127.0.0.1/8 ::1 198.51.100.25

# Time an IP remains banned (e.g. 1 hour or 24 hours)
bantime = 1h

# Window of time in which failed attempts are counted
findtime = 10m

# Number of failed login attempts before a ban is triggered
maxretry = 5

[sshd]
enabled = true
port = ssh
# If you changed your SSH port to 2222, specify: port = 2222
filter = sshd
logpath = %(sshd_log)s
backend = systemd</code></pre>

      <pre><code># Restart Fail2ban to load your new jail settings
sudo systemctl restart fail2ban</code></pre>

      <h2>3. Monitoring and Managing Bans with fail2ban-client</h2>
      <p>
        Fail2ban includes a CLI utility to inspect jail status and unban IP addresses:
      </p>

      <pre><code># Check the overall status of active jails
sudo fail2ban-client status

# Check detailed status of the SSH jail (including banned IP list)
sudo fail2ban-client status sshd

# Manually ban an abusive IP address immediately
sudo fail2ban-client set sshd banip 203.0.113.199

# Unban an IP address (e.g., an employee locked out by accident)
sudo fail2ban-client set sshd unbanip 203.0.113.199</code></pre>

      <h2>4. Integration with UFW (Uncomplicated Firewall)</h2>
      <p>
        If your Ubuntu host uses UFW, instruct Fail2ban to use the UFW action so banned IPs appear directly within <code>ufw status</code>:
      </p>

      <pre><code>[sshd]
enabled = true
port = ssh
banaction = ufw</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Audit Server Security &amp; Failed Logins Visually</h3>
        <p>
          Skip manual log grepping. SSH Desktop features an automated <a href="../linux-security-auditor.html" style="color: #58a6ff; font-weight: 600;">Linux Security Auditor</a>. Visualize brute-force geographical hotspots, inspect active firewall rules, and manage banned IPs in 1 click across all servers.
        </p>
        <a href="../linux-security-auditor.html" class="cta-btn">Explore Visual Security Auditor &rarr;</a>
      </div>

      <h2>5. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>How do I check which IPs are currently banned by Fail2ban?</h4>
        <p>
          Run <code>sudo fail2ban-client status sshd</code>. The output will display the total number of failed attempts, total banned IPs, and a list of currently active banned IP addresses.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I unban an accidentally banned IP address?</h4>
        <p>
          Execute <code>sudo fail2ban-client set sshd unbanip &lt;IP_ADDRESS&gt;</code>. You can also whitelist trusted static IP addresses permanently by adding them to the <code>ignoreip</code> directive in <code>/etc/fail2ban/jail.local</code>.
        </p>
      </div>
      <div class="faq-item">
        <h4>Why should I edit jail.local instead of jail.conf?</h4>
        <p>
          The <code>/etc/fail2ban/jail.conf</code> file is provided by the package maintainer and will be overwritten whenever Fail2ban is updated via apt or dnf. Any custom configuration in <code>/etc/fail2ban/jail.local</code> safely overrides <code>jail.conf</code> and persists across software updates.
        </p>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="copyright">&copy; 2026 SSH Desktop. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="../privacy.html">Privacy Policy</a>
          <a href="../security.html">Security</a>
          <a href="../changelog.html">Changelog</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;

// =========================================================================
// ARTICLE 36: HOW TO AUTOMATE LINUX BACKUPS WITH RSYNC & CRON
// =========================================================================
const article36Html = `<!DOCTYPE html>
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
  <title>How to Automate Linux Server Backups with Rsync &amp; Cron: 2026 Guide</title>
  <meta name="title" content="How to Automate Linux Server Backups with Rsync &amp; Cron: 2026 Guide">
  <meta name="description" content="Complete guide to automated Linux backups using rsync over SSH and cron. Learn incremental hard-link snapshots, exclusion filters, and visual backup scheduling.">
  <meta name="keywords" content="automate linux backup rsync, rsync incremental backup script, cron job backup linux, remote backup over ssh, visual linux backup manager">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="Automate Linux Server Backups with Rsync &amp; Cron (2026)">
  <meta property="og:description" content="Build a bulletproof 3-2-1 backup strategy. Automated incremental snapshots with rsync, scheduled with cron, monitored visually.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Backup &amp; Disaster Recovery">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html">
  <meta name="twitter:title" content="Automate Linux Backups with Rsync &amp; Cron (2026)">
  <meta name="twitter:description" content="Step-by-step tutorial: write resilient rsync backup scripts, configure hard links, automate schedules, and restore data visually.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#0a0c10">

  <!-- Modular Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <!-- Structured Data: TechArticle & BreadcrumbList & FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html#article",
        "headline": "How to Automate Linux Server Backups with Rsync & Cron: 2026 Guide",
        "description": "Complete guide to automated Linux backups using rsync over SSH and cron. Learn incremental hard-link snapshots, exclusion filters, and visual backup scheduling.",
        "url": "https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html",
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sshdesktop.com/assets/images/favicon-512x512.png"
          }
        },
        "image": "https://sshdesktop.com/assets/images/og-image.png",
        "articleSection": "Backup & Disaster Recovery",
        "keywords": "automate linux backups, rsync cron script, incremental backup rsync, backup server over ssh"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html#breadcrumb",
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
            "name": "Rsync & Cron Automation Guide",
            "item": "https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why use rsync with hard links (--link-dest) instead of regular tar archives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rsync with --link-dest creates full incremental snapshots where unchanged files are represented as filesystem hard links rather than duplicate data copies. This provides instant Point-in-Time recovery for each backup day while using only a tiny fraction of the disk space required by traditional full tar archives."
            }
          },
          {
            "@type": "Question",
            "name": "How do I test an rsync backup command without risking data deletion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Always pass the --dry-run (-n) flag along with verbose output: 'rsync -avz --dry-run --delete /src/ /dst/'. This simulates the exact operation and lists which files would be transferred or deleted without making any changes to disk."
            }
          },
          {
            "@type": "Question",
            "name": "Why do my rsync cron jobs fail even though the command works in my shell?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cron executes with a minimal environment that lacks your user's $PATH and SSH agent keys. Ensure you specify full binary paths (e.g. /usr/bin/rsync), provide the absolute path to your SSH private key (-e 'ssh -i /root/.ssh/backup_key'), and redirect logs: '>> /var/log/backup.log 2>&1'."
            }
          }
        ]
      }
    ]
  }
  </script>

  <style>
    .blog-article-wrapper {
      max-width: 860px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .blog-breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.88rem;
      color: var(--text-muted, #8b949e);
      margin-bottom: 24px;
    }
    .blog-breadcrumb a {
      color: var(--accent, #58a6ff);
      text-decoration: none;
    }
    .blog-breadcrumb a:hover {
      text-decoration: underline;
    }
    .blog-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border-color, #30363d);
      padding-bottom: 28px;
    }
    .blog-post-title {
      font-size: 2.35rem;
      font-weight: 800;
      line-height: 1.25;
      color: #f0f6fc;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .blog-meta {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.9rem;
      color: #8b949e;
      flex-wrap: wrap;
    }
    .blog-meta-tag {
      background: rgba(56, 139, 253, 0.15);
      color: #58a6ff;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid rgba(56, 139, 253, 0.3);
    }
    .blog-content {
      font-size: 1.05rem;
      line-height: 1.75;
      color: #c9d1d9;
    }
    .blog-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      color: #f0f6fc;
      margin: 44px 0 18px;
      border-bottom: 1px solid #21262d;
      padding-bottom: 8px;
    }
    .blog-content h3 {
      font-size: 1.28rem;
      font-weight: 600;
      color: #e6edf3;
      margin: 30px 0 14px;
    }
    .blog-content p {
      margin-bottom: 20px;
    }
    .blog-content ul, .blog-content ol {
      margin-bottom: 22px;
      padding-left: 28px;
    }
    .blog-content li {
      margin-bottom: 8px;
    }
    .blog-content pre {
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 16px 20px;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
      font-size: 0.92rem;
      color: #e6edf3;
      margin: 22px 0 24px;
      line-height: 1.55;
    }
    .blog-content code {
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 0.9em;
      background: rgba(110, 118, 129, 0.2);
      padding: 2px 6px;
      border-radius: 4px;
      color: #58a6ff;
    }
    .blog-content pre code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
    .callout-box {
      background: rgba(56, 139, 253, 0.08);
      border-left: 4px solid #58a6ff;
      border-radius: 0 8px 8px 0;
      padding: 18px 22px;
      margin: 26px 0;
      color: #c9d1d9;
    }
    .callout-box.tip {
      background: rgba(46, 160, 67, 0.1);
      border-left-color: #2ea043;
    }
    .callout-box.warning {
      background: rgba(210, 153, 34, 0.1);
      border-left-color: #d29922;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      margin: 26px 0;
      font-size: 0.94rem;
    }
    .comparison-table th, .comparison-table td {
      border: 1px solid #30363d;
      padding: 12px 14px;
      text-align: left;
    }
    .comparison-table th {
      background: #161b22;
      color: #f0f6fc;
      font-weight: 600;
    }
    .comparison-table tr:nth-child(even) {
      background: #0d1117;
    }
    .gui-banner {
      background: linear-gradient(135deg, rgba(88, 166, 255, 0.12) 0%, rgba(137, 87, 229, 0.12) 100%);
      border: 1px solid rgba(88, 166, 255, 0.3);
      border-radius: 12px;
      padding: 24px;
      margin: 36px 0;
      text-align: center;
    }
    .gui-banner h3 {
      font-size: 1.35rem;
      color: #f0f6fc;
      margin-top: 0;
      margin-bottom: 10px;
    }
    .gui-banner p {
      color: #8b949e;
      margin-bottom: 18px;
      font-size: 0.98rem;
    }
    .gui-banner a.cta-btn {
      display: inline-block;
      background: #238636;
      color: #ffffff;
      padding: 10px 22px;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s;
    }
    .gui-banner a.cta-btn:hover {
      background: #2ea043;
    }
    .faq-item {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 18px 22px;
      margin-bottom: 16px;
    }
    .faq-item h4 {
      margin: 0 0 10px;
      color: #f0f6fc;
      font-size: 1.08rem;
    }
    .faq-item p {
      margin: 0;
      color: #8b949e;
    }
  </style>
</head>
<body class="bg-dark text-light">
  <!-- Top Global Navigation Bar -->
  <header>
    <nav class="nav-container" aria-label="Main Navigation">
      <div class="nav-inner">
        <a href="../index.html" class="nav-logo" aria-label="SSH Desktop Home">
          <img src="../assets/images/favicon.svg" alt="SSH Desktop Logo" width="32" height="32" class="nav-logo-img">
          <span class="nav-logo-text">SSH Desktop</span>
        </a>
        <div class="nav-links">
          <a href="../features.html" class="nav-link">Features</a>
          <a href="../alternatives/index.html" class="nav-link">Alternatives</a>
          <a href="../docs.html" class="nav-link">Documentation</a>
          <a href="index.html" class="nav-link active">Blog</a>
          <a href="../pricing.html" class="nav-link">Pricing</a>
          <a href="../download.html" class="btn-primary nav-download-btn">Download</a>
        </div>
      </div>
    </nav>
  </header>

  <main class="blog-article-wrapper">
    <!-- Breadcrumb Navigation -->
    <nav class="blog-breadcrumb" aria-label="Breadcrumbs">
      <a href="../index.html">Home</a>
      <span>&rsaquo;</span>
      <a href="index.html">Blog</a>
      <span>&rsaquo;</span>
      <span>Rsync &amp; Cron Automation Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Automate Linux Server Backups with Rsync &amp; Cron: 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Backup &amp; Recovery</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Hardware failure, accidental deletion, ransomware, and flawed database migrations are inevitable facts of life in systems engineering. An automated, verified backup system is the single most critical insurance policy for your infrastructure. Fortunately, Linux contains two of the most robust, battle-tested utilities in computing history: <code>rsync</code> and <code>cron</code>.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          By pairing the delta-transfer efficiency of <code>rsync</code> with filesystem hard links (<code>--link-dest</code>), you can create full Point-in-Time incremental snapshots without consuming duplicate disk storage. In this guide, we write a production-ready backup shell script, configure automated cron schedules, and explore visual disaster recovery with <a href="../backup-disaster-recovery.html">SSH Desktop Backup Manager</a>.
        </p>
      </div>

      <h2>1. The Power of Rsync: Understanding Essential Flags</h2>
      <p>
        Rsync only transfers the byte-level differences between source and destination files. Here is the standard production command anatomy:
      </p>

      <pre><code>rsync -avzP --delete -e "ssh -i /root/.ssh/backup_key" /var/www/ backupuser@backup.server.com:/backups/web/

# Breakdown of flags:
# -a: Archive mode (preserves permissions, ownership, symlinks, timestamps)
# -v: Verbose logging
# -z: Compress file data during transfer
# -P: Show transfer progress and allow resuming interrupted files
# --delete: Remove files in destination that no longer exist in source</code></pre>

      <div class="callout-box warning">
        <h4>The Trailing Slash Matters!</h4>
        <p>
          In rsync syntax:
          <br><code>rsync -a /src/ /dst/</code> copies the <em>contents</em> of <code>/src/</code> directly into <code>/dst/</code>.
          <br><code>rsync -a /src /dst/</code> creates a subdirectory <code>/dst/src/</code>.
        </p>
      </div>

      <h2>2. Production Incremental Snapshot Backup Script</h2>
      <p>
        Save this script as <code>/opt/scripts/server-backup.sh</code>:
      </p>

      <pre><code>#!/bin/bash
set -euo pipefail

# Configuration
BACKUP_DIR="/mnt/backups"
DATE=$(date +%Y-%m-%d_%H-%M-%S)
TARGET_DIR="$BACKUP_DIR/snapshot-$DATE"
LATEST_LINK="$BACKUP_DIR/latest"
SOURCE_DIRS=("/var/www" "/etc" "/home")

# Ensure destination directory exists
mkdir -p "$BACKUP_DIR"

# Rsync with hard links against the previous latest snapshot
rsync -a --delete \\
  --link-dest="$LATEST_LINK" \\
  --exclude="*.log" \\
  --exclude="*.tmp" \\
  --exclude="/var/www/*/cache/*" \\
  "\${SOURCE_DIRS[@]}" "$TARGET_DIR"

# Update symlink to point to the newest snapshot
rm -f "$LATEST_LINK"
ln -s "$TARGET_DIR" "$LATEST_LINK"

# Delete snapshots older than 14 days
find "$BACKUP_DIR" -maxdepth 1 -type d -name "snapshot-*" -mtime +14 -exec rm -rf {} +

echo "[$DATE] Backup completed successfully."</code></pre>

      <pre><code># Make script executable
sudo chmod +x /opt/scripts/server-backup.sh

# Test run
sudo /opt/scripts/server-backup.sh</code></pre>

      <h2>3. Scheduling the Backup with Cron</h2>
      <p>
        Schedule the backup job to execute every night at 2:30 AM when server traffic is lowest:
      </p>

      <pre><code># Open root crontab editor
sudo crontab -e

# Add cron job:
30 2 * * * /opt/scripts/server-backup.sh >> /var/log/server-backup.log 2>&1</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Tired of Writing Brittle Backup Scripts?</h3>
        <p>
          SSH Desktop features an integrated <a href="../backup-disaster-recovery.html" style="color: #58a6ff; font-weight: 600;">Backup &amp; Disaster Recovery Manager</a>. Set up remote server backups, test file restorations, schedule cron tasks visually with <a href="../crontab-gui.html" style="color: #58a6ff; font-weight: 600;">Crontab GUI</a>, and receive push notifications on backup status.
        </p>
        <a href="../backup-disaster-recovery.html" class="cta-btn">Explore Visual Backup Manager &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>Why use rsync with hard links (--link-dest) instead of regular tar archives?</h4>
        <p>
          Rsync with <code>--link-dest</code> creates full incremental snapshots where unchanged files are represented as filesystem hard links rather than duplicate data copies. This provides instant Point-in-Time recovery for each backup day while using only a tiny fraction of the disk space required by traditional full tar archives.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I test an rsync backup command without risking data deletion?</h4>
        <p>
          Always pass the <code>--dry-run</code> (<code>-n</code>) flag along with verbose output: <code>rsync -avz --dry-run --delete /src/ /dst/</code>. This simulates the exact operation and lists which files would be transferred or deleted without making any changes to disk.
        </p>
      </div>
      <div class="faq-item">
        <h4>Why do my rsync cron jobs fail even though the command works in my shell?</h4>
        <p>
          Cron executes with a minimal environment that lacks your user's <code>$PATH</code> and SSH agent keys. Ensure you specify full binary paths (e.g. <code>/usr/bin/rsync</code>), provide the absolute path to your SSH private key (<code>-e 'ssh -i /root/.ssh/backup_key'</code>), and redirect logs: <code>&gt;&gt; /var/log/backup.log 2&gt;&amp;1</code>.
        </p>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="copyright">&copy; 2026 SSH Desktop. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="../privacy.html">Privacy Policy</a>
          <a href="../security.html">Security</a>
          <a href="../changelog.html">Changelog</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;

// =========================================================================
// ARTICLE 37: OPENSSH SERVER HARDENING SECURITY GUIDE
// =========================================================================
const article37Html = `<!DOCTYPE html>
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
  <title>OpenSSH Server Hardening: 10 Critical Security Steps (2026 Checklist)</title>
  <meta name="title" content="OpenSSH Server Hardening: 10 Critical Security Steps (2026 Checklist)">
  <meta name="description" content="Harden your Linux OpenSSH server against brute-force attacks and zero-days. Disable passwords, disable root, restrict cipher suites, and verify syntax.">
  <meta name="keywords" content="ssh hardening guide, secure ssh server ubuntu, sshd_config best practices, disable root login ssh, openssh security checklist, visual ssh client security">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="OpenSSH Server Hardening: 10 Critical Security Steps (2026)">
  <meta property="og:description" content="Production-ready checklist: disable root login, enforce Ed25519 keys, configure idle timeouts, and lock down sshd_config safely.">
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
  <meta name="twitter:url" content="https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html">
  <meta name="twitter:title" content="OpenSSH Server Hardening Checklist (2026)">
  <meta name="twitter:description" content="Protect your Linux servers from brute-force botnets and unauthorized intrusions with this complete sshd_config hardening checklist.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & Touch Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#0a0c10">

  <!-- Modular Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <!-- Structured Data: TechArticle & BreadcrumbList & FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html#article",
        "headline": "OpenSSH Server Hardening: 10 Critical Security Steps (2026 Checklist)",
        "description": "Harden your Linux OpenSSH server against brute-force attacks and zero-days. Disable passwords, disable root, restrict cipher suites, and verify syntax.",
        "url": "https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html",
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sshdesktop.com/assets/images/favicon-512x512.png"
          }
        },
        "image": "https://sshdesktop.com/assets/images/og-image.png",
        "articleSection": "Security & Hardening",
        "keywords": "ssh hardening checklist, sshd_config best practices, disable root login ssh, secure openssh server, ssh ciphers hardening"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html#breadcrumb",
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
            "name": "OpenSSH Hardening Guide",
            "item": "https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I safely test my sshd_config changes without locking myself out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Before reloading the SSH daemon, run 'sudo sshd -t' to validate configuration syntax. Then reload with 'sudo systemctl reload ssh'. Crucially, KEEP YOUR CURRENT SSH SESSION OPEN and open a new terminal window to test logging in. If the new connection fails, you can immediately fix the configuration from your active session."
            }
          },
          {
            "@type": "Question",
            "name": "Why is PasswordAuthentication no better than PermitEmptyPasswords no?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Setting 'PasswordAuthentication no' completely turns off interactive password logins across the server, forcing every connection to authenticate via cryptographic keys (such as Ed25519). This neutralizes all automated dictionary and brute-force botnets instantly."
            }
          },
          {
            "@type": "Question",
            "name": "Which cryptographic key type should I standardize on in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standardize on Ed25519 (ssh-keygen -t ed25519). It provides superior security margins compared to RSA, is immune to timing attacks, and features compact 68-character public keys that are fast to compute."
            }
          }
        ]
      }
    ]
  }
  </script>

  <style>
    .blog-article-wrapper {
      max-width: 860px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .blog-breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.88rem;
      color: var(--text-muted, #8b949e);
      margin-bottom: 24px;
    }
    .blog-breadcrumb a {
      color: var(--accent, #58a6ff);
      text-decoration: none;
    }
    .blog-breadcrumb a:hover {
      text-decoration: underline;
    }
    .blog-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border-color, #30363d);
      padding-bottom: 28px;
    }
    .blog-post-title {
      font-size: 2.35rem;
      font-weight: 800;
      line-height: 1.25;
      color: #f0f6fc;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .blog-meta {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.9rem;
      color: #8b949e;
      flex-wrap: wrap;
    }
    .blog-meta-tag {
      background: rgba(56, 139, 253, 0.15);
      color: #58a6ff;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid rgba(56, 139, 253, 0.3);
    }
    .blog-content {
      font-size: 1.05rem;
      line-height: 1.75;
      color: #c9d1d9;
    }
    .blog-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      color: #f0f6fc;
      margin: 44px 0 18px;
      border-bottom: 1px solid #21262d;
      padding-bottom: 8px;
    }
    .blog-content h3 {
      font-size: 1.28rem;
      font-weight: 600;
      color: #e6edf3;
      margin: 30px 0 14px;
    }
    .blog-content p {
      margin-bottom: 20px;
    }
    .blog-content ul, .blog-content ol {
      margin-bottom: 22px;
      padding-left: 28px;
    }
    .blog-content li {
      margin-bottom: 8px;
    }
    .blog-content pre {
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 16px 20px;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
      font-size: 0.92rem;
      color: #e6edf3;
      margin: 22px 0 24px;
      line-height: 1.55;
    }
    .blog-content code {
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 0.9em;
      background: rgba(110, 118, 129, 0.2);
      padding: 2px 6px;
      border-radius: 4px;
      color: #58a6ff;
    }
    .blog-content pre code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
    .callout-box {
      background: rgba(56, 139, 253, 0.08);
      border-left: 4px solid #58a6ff;
      border-radius: 0 8px 8px 0;
      padding: 18px 22px;
      margin: 26px 0;
      color: #c9d1d9;
    }
    .callout-box.tip {
      background: rgba(46, 160, 67, 0.1);
      border-left-color: #2ea043;
    }
    .callout-box.danger {
      background: rgba(248, 81, 73, 0.1);
      border-left-color: #f85149;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      margin: 26px 0;
      font-size: 0.94rem;
    }
    .comparison-table th, .comparison-table td {
      border: 1px solid #30363d;
      padding: 12px 14px;
      text-align: left;
    }
    .comparison-table th {
      background: #161b22;
      color: #f0f6fc;
      font-weight: 600;
    }
    .comparison-table tr:nth-child(even) {
      background: #0d1117;
    }
    .gui-banner {
      background: linear-gradient(135deg, rgba(88, 166, 255, 0.12) 0%, rgba(137, 87, 229, 0.12) 100%);
      border: 1px solid rgba(88, 166, 255, 0.3);
      border-radius: 12px;
      padding: 24px;
      margin: 36px 0;
      text-align: center;
    }
    .gui-banner h3 {
      font-size: 1.35rem;
      color: #f0f6fc;
      margin-top: 0;
      margin-bottom: 10px;
    }
    .gui-banner p {
      color: #8b949e;
      margin-bottom: 18px;
      font-size: 0.98rem;
    }
    .gui-banner a.cta-btn {
      display: inline-block;
      background: #238636;
      color: #ffffff;
      padding: 10px 22px;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s;
    }
    .gui-banner a.cta-btn:hover {
      background: #2ea043;
    }
    .faq-item {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 8px;
      padding: 18px 22px;
      margin-bottom: 16px;
    }
    .faq-item h4 {
      margin: 0 0 10px;
      color: #f0f6fc;
      font-size: 1.08rem;
    }
    .faq-item p {
      margin: 0;
      color: #8b949e;
    }
  </style>
</head>
<body class="bg-dark text-light">
  <!-- Top Global Navigation Bar -->
  <header>
    <nav class="nav-container" aria-label="Main Navigation">
      <div class="nav-inner">
        <a href="../index.html" class="nav-logo" aria-label="SSH Desktop Home">
          <img src="../assets/images/favicon.svg" alt="SSH Desktop Logo" width="32" height="32" class="nav-logo-img">
          <span class="nav-logo-text">SSH Desktop</span>
        </a>
        <div class="nav-links">
          <a href="../features.html" class="nav-link">Features</a>
          <a href="../alternatives/index.html" class="nav-link">Alternatives</a>
          <a href="../docs.html" class="nav-link">Documentation</a>
          <a href="index.html" class="nav-link active">Blog</a>
          <a href="../pricing.html" class="nav-link">Pricing</a>
          <a href="../download.html" class="btn-primary nav-download-btn">Download</a>
        </div>
      </div>
    </nav>
  </header>

  <main class="blog-article-wrapper">
    <!-- Breadcrumb Navigation -->
    <nav class="blog-breadcrumb" aria-label="Breadcrumbs">
      <a href="../index.html">Home</a>
      <span>&rsaquo;</span>
      <a href="index.html">Blog</a>
      <span>&rsaquo;</span>
      <span>OpenSSH Hardening Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">OpenSSH Server Hardening: 10 Critical Security Steps (2026 Checklist)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Server Hardening</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        OpenSSH is the most widely used remote management daemon on earth. However, out-of-the-box default configurations on many Linux distributions still permit password authentication, allow root login attempts, and accept legacy cryptographic algorithms. Securing your SSH daemon is the foundation of Linux server security.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Hardening OpenSSH takes less than 10 minutes. By applying strict rules in <code>/etc/ssh/sshd_config</code>, you can eliminate password brute-force vulnerabilities, enforce modern Ed25519 keys, and close unused forwarding channels without compromising administrator workflow.
        </p>
      </div>

      <h2>1. The 10-Step OpenSSH Hardening Checklist</h2>

      <h3>Step 1: Disable Root Login</h3>
      <p>
        Direct root login is the prime target for dictionary bots. Force administrators to log in as an unprivileged user and escalate with <code>sudo</code>:
      </p>
      <pre><code>PermitRootLogin no</code></pre>

      <h3>Step 2: Disable Password Authentication Completely</h3>
      <p>
        Require public key authentication exclusively:
      </p>
      <pre><code>PasswordAuthentication no
PubkeyAuthentication yes
PermitEmptyPasswords no</code></pre>

      <h3>Step 3: Restrict Permitted Users &amp; Groups</h3>
      <p>
        Explicitly define which accounts are allowed to establish SSH sessions:
      </p>
      <pre><code>AllowUsers deploy adminuser
# or restrict by group:
# AllowGroups sshusers</code></pre>

      <h3>Step 4: Configure Session Idle Timeouts</h3>
      <p>
        Disconnect inactive SSH terminal sessions automatically after 15 minutes:
      </p>
      <pre><code>ClientAliveInterval 300
ClientAliveCountMax 3</code></pre>

      <h3>Step 5: Limit Authentication Retries</h3>
      <pre><code>MaxAuthTries 3</code></pre>

      <h3>Step 6: Enforce Modern Ciphers &amp; Key Exchange Algorithms</h3>
      <p>
        Deprecate older SHA-1, CBC, and 3DES algorithms by declaring modern cryptographic suites:
      </p>
      <pre><code>KexAlgorithms curve25519-sha256,curve25519-sha256@libssh.org,diffie-hellman-group16-sha512
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com
MACs hmac-sha2-512-etm@openssh.com</code></pre>

      <h3>Step 7: Disable X11 Forwarding If Not Needed</h3>
      <pre><code>X11Forwarding no</code></pre>

      <h3>Step 8: Disable Host-Based Authentication</h3>
      <pre><code>HostbasedAuthentication no
IgnoreRhosts yes</code></pre>

      <h3>Step 9: Change the Default Port (Optional Security Through Obscurity)</h3>
      <p>
        While not a substitute for key-based auth, changing port 22 to a high port (e.g. <code>2222</code> or <code>49152</code>) cuts background bot scanner log noise by 95%:
      </p>
      <pre><code>Port 2222</code></pre>

      <h3>Step 10: Display a Legal Login Banner</h3>
      <pre><code>Banner /etc/issue.net</code></pre>

      <h2>2. Safe Deployment: How to Verify &amp; Reload Without Lockout</h2>
      <div class="callout-box danger">
        <h4>Golden Rule of SSH Configuration</h4>
        <p>
          Never close your active SSH terminal connection until you have tested your new configuration in a second, independent session!
        </p>
      </div>

      <pre><code># Step 1: Validate sshd_config syntax (must output zero errors)
sudo sshd -t

# Step 2: Reload the SSH daemon gracefully (does NOT terminate active connections)
sudo systemctl reload ssh   # On Ubuntu/Debian
sudo systemctl reload sshd  # On RHEL/CentOS

# Step 3: Open a second terminal and verify you can log in with your SSH key!</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Secure Multi-Server SSH Access with SSH Desktop</h3>
        <p>
          Manage keys, servers, and tunnels without messy config files. <a href="../security.html" style="color: #58a6ff; font-weight: 600;">SSH Desktop</a> stores credentials in your operating system's native encrypted keychain (Windows Credential Locker, macOS Keychain) with zero cloud telemetry.
        </p>
        <a href="../download.html" class="cta-btn">Download SSH Desktop &rarr;</a>
      </div>

      <h2>3. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>How do I safely test my sshd_config changes without locking myself out?</h4>
        <p>
          Before reloading the SSH daemon, run <code>sudo sshd -t</code> to validate configuration syntax. Then reload with <code>sudo systemctl reload ssh</code>. Crucially, KEEP YOUR CURRENT SSH SESSION OPEN and open a new terminal window to test logging in. If the new connection fails, you can immediately fix the configuration from your active session.
        </p>
      </div>
      <div class="faq-item">
        <h4>Why is PasswordAuthentication no better than PermitEmptyPasswords no?</h4>
        <p>
          Setting <code>PasswordAuthentication no</code> completely turns off interactive password logins across the server, forcing every connection to authenticate via cryptographic keys (such as Ed25519). This neutralizes all automated dictionary and brute-force botnets instantly.
        </p>
      </div>
      <div class="faq-item">
        <h4>Which cryptographic key type should I standardize on in 2026?</h4>
        <p>
          Standardize on Ed25519 (<code>ssh-keygen -t ed25519</code>). It provides superior security margins compared to RSA, is immune to timing attacks, and features compact 68-character public keys that are fast to compute.
        </p>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="copyright">&copy; 2026 SSH Desktop. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="../privacy.html">Privacy Policy</a>
          <a href="../security.html">Security</a>
          <a href="../changelog.html">Changelog</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;

// Write the files to the blog directory
const article35Path = path.join(BLOG_DIR, 'how-to-protect-ssh-with-fail2ban-guide.html');
const article36Path = path.join(BLOG_DIR, 'how-to-automate-linux-backups-rsync-cron-guide.html');
const article37Path = path.join(BLOG_DIR, 'openssh-server-hardening-security-guide.html');

fs.writeFileSync(article35Path, article35Html, 'utf8');
console.log('Created: ' + article35Path + ' (' + article35Html.length + ' bytes)');

fs.writeFileSync(article36Path, article36Html, 'utf8');
console.log('Created: ' + article36Path + ' (' + article36Html.length + ' bytes)');

fs.writeFileSync(article37Path, article37Html, 'utf8');
console.log('Created: ' + article37Path + ' (' + article37Html.length + ' bytes)');
