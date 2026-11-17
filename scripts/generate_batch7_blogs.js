/**
 * Generator for Batch 7 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html
 * 2. blog/how-to-manage-linux-users-groups-permissions-guide.html
 * 3. blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 23: HOW TO SETUP FREE SSL CERTBOT NGINX GUIDE
// =========================================================================
const article23Html = `<!DOCTYPE html>
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
  <title>How to Set Up Free Let's Encrypt SSL with Certbot &amp; Nginx (2026 Guide)</title>
  <meta name="title" content="How to Set Up Free Let's Encrypt SSL with Certbot &amp; Nginx (2026 Guide)">
  <meta name="description" content="Step-by-step tutorial: install Certbot, obtain free Let's Encrypt SSL certificates for Nginx, configure automatic HTTPS redirection, test auto-renewal, and manage certificates visually.">
  <meta name="keywords" content="certbot nginx, setup free ssl certbot, letsencrypt ssl certificate nginx, certbot renew auto renewal, nginx http to https redirect, visual ssl manager linux">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up Free Let's Encrypt SSL with Certbot &amp; Nginx">
  <meta property="og:description" content="Step-by-step guide to installing Certbot, obtaining free Let's Encrypt SSL certificates, configuring Nginx, and testing auto-renewal.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Web Servers &amp; Security">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html">
  <meta name="twitter:title" content="How to Set Up Free SSL with Certbot &amp; Nginx (2026)">
  <meta name="twitter:description" content="Complete guide to securing your website with free Let's Encrypt SSL certificates and Nginx.">
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
            "name": "Set Up Free SSL with Certbot & Nginx",
            "item": "https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html#article",
        "headline": "How to Set Up Free Let's Encrypt SSL with Certbot & Nginx (2026 Guide)",
        "description": "Step-by-step tutorial on securing Nginx websites with free Let's Encrypt SSL certificates using Certbot. Includes automated HTTPS redirects, renewal testing, and visual SSL tools.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are Let's Encrypt SSL certificates completely free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Let's Encrypt is a non-profit Certificate Authority that provides free, automated X.509 certificates recognized by all modern web browsers, mobile operating systems, and root stores worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "How long do Let's Encrypt SSL certificates last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Let's Encrypt certificates are valid for 90 days. Certbot automatically installs a systemd timer or cron job that checks twice daily and renews certificates within 30 days of expiration."
            }
          },
          {
            "@type": "Question",
            "name": "What is the command to obtain and configure an SSL certificate with Certbot for Nginx?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'sudo certbot --nginx -d example.com -d www.example.com'. Certbot verifies domain ownership via an ACME challenge, provisions the certificate, and updates your Nginx configuration blocks automatically."
            }
          },
          {
            "@type": "Question",
            "name": "How do I test if Certbot auto-renewal is working?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Execute 'sudo certbot renew --dry-run'. This performs a full simulation of the ACME renewal challenge without actually saving new certificate files."
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
        <li aria-current="page">Set Up Free SSL with Certbot &amp; Nginx</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Web Security &amp; Certificates</span>
        <h1 class="article-title">How to Set Up Free Let's Encrypt SSL with Certbot &amp; Nginx (2026 Guide)</h1>
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
          Running an unencrypted HTTP website in 2026 is no longer an option. Google Chrome and Safari flag plain HTTP sites as "Not Secure", modern APIs require HTTPS, and search engines penalize unencrypted websites in search rankings.
        </p>
        <p>
          Fortunately, the days of paying hundreds of dollars for commercial SSL/TLS certificates are long gone. Thanks to the Electronic Frontier Foundation's <strong>Let's Encrypt</strong> Certificate Authority and <strong>Certbot</strong>, you can obtain and automate trusted SSL certificates in under two minutes for free.
        </p>
        <p>
          In this guide, you will learn the exact steps to install Certbot on Ubuntu/Debian, provision an SSL certificate for Nginx, configure automatic HTTP-to-HTTPS redirects, and manage SSL certificates visually.
        </p>

        <h2>Prerequisites</h2>
        <ol>
          <li>A registered domain name (e.g. <code>example.com</code>).</li>
          <li>DNS <code>A</code> records for <code>example.com</code> and <code>www.example.com</code> pointing to your server's public IP address.</li>
          <li>Nginx installed with port 80 (HTTP) and port 443 (HTTPS) open in your firewall (e.g. <code>sudo ufw allow 'Nginx Full'</code>).</li>
        </ol>

        <h2>Step 1: Verify Nginx Server Block</h2>
        <p>
          Before running Certbot, verify that your Nginx configuration contains a valid <code>server_name</code> directive:
        </p>
        <div class="code-block">
          <code>sudo nano /etc/nginx/sites-available/example.com</code>
        </div>
        <div class="code-block">
          <code>server {<br>
    listen 80;<br>
    listen [::]:80;<br>
    server_name example.com www.example.com;<br>
    root /var/www/example.com/html;<br>
    index index.html index.htm index.nginx-debian.html;<br>
}</code>
        </div>
        <p>
          Test Nginx syntax and reload:
        </p>
        <div class="code-block">
          <code>sudo nginx -t &amp;&amp; sudo systemctl reload nginx</code>
        </div>

        <h2>Step 2: Install Certbot and the Nginx Plugin</h2>
        <p>
          Install Certbot and the official Nginx integration package:
        </p>
        <div class="code-block">
          <code># Ubuntu / Debian:<br>
sudo apt update<br>
sudo apt install -y certbot python3-certbot-nginx<br><br>
# CentOS / RHEL / AlmaLinux:<br>
sudo dnf install -y certbot python3-certbot-nginx</code>
        </div>

        <h2>Step 3: Obtain and Install the SSL Certificate</h2>
        <p>
          Run Certbot with the <code>--nginx</code> flag. Certbot automatically inspects your Nginx server blocks, handles the ACME cryptographic challenge, downloads your certificates, and reconfigures Nginx to use them:
        </p>
        <div class="code-block">
          <code>sudo certbot --nginx -d example.com -d www.example.com</code>
        </div>

        <h3>Interactive Prompts:</h3>
        <ol>
          <li><strong>Enter email address:</strong> Enter your admin email for urgent renewal notices and security advisories.</li>
          <li><strong>Terms of Service:</strong> Type <code>Y</code> and press Enter.</li>
          <li><strong>Share Email with EFF:</strong> Choose <code>Y</code> or <code>N</code>.</li>
          <li><strong>HTTPS Redirection:</strong> Choose whether to automatically redirect all HTTP traffic to HTTPS (Option 2: <em>Redirect - Make all requests redirect to secure HTTPS access</em> is recommended!).</li>
        </ol>

        <p>
          Certbot updates your Nginx configuration automatically:
        </p>
        <div class="code-block">
          <code>Successfully received certificate.<br>
Certificate is saved at: /etc/letsencrypt/live/example.com/fullchain.pem<br>
Key is saved at:         /etc/letsencrypt/live/example.com/privkey.pem<br>
Congratulations! You have successfully enabled HTTPS on https://example.com</code>
        </div>

        <h2>Step 4: Test Automatic Certificate Renewal</h2>
        <p>
          Let's Encrypt certificates expire after 90 days. Certbot installs a systemd timer (<code>certbot.timer</code>) that runs twice daily and automatically renews certificates that are within 30 days of expiration.
        </p>
        <p>
          Test the automated renewal mechanism with a dry run:
        </p>
        <div class="code-block">
          <code>sudo certbot renew --dry-run</code>
        </div>
        <p>
          If it concludes with <em>"Congratulations, all simulated renewals succeeded"</em>, your website will stay secured with SSL indefinitely without any manual intervention!
        </p>

        <h2>Visual SSL Management with SSH Desktop</h2>
        <p>
          Tracking expiration dates across dozens of subdomains and virtual hosts via command-line files can be tedious.
        </p>
        <p>
          <a href="../ssl-certificate-manager.html">SSH Desktop SSL Manager</a> provides visual certificate control:
        </p>
        <ul>
          <li><strong>Visual Expiration Radar:</strong> View days remaining for all installed SSL certificates with color-coded warning badges (Green > 30d, Yellow &lt; 30d, Red &lt; 7d).</li>
          <li><strong>1-Click Let's Encrypt Wizard:</strong> Issue new certificates directly from the GUI without remembering CLI arguments.</li>
          <li><strong>Nginx / Apache Sync:</strong> Automatically links newly generated certificates to web server virtual hosts.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Automate SSL Management Visually</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Never let an SSL certificate expire. Download SSH Desktop — the 100% free GUI client with visual SSL Certificate Manager for Windows 11, macOS, and Linux.
          </p>
          <a href="../ssl-certificate-manager.html" class="btn btn-primary btn-lg">
            Explore SSL Certificate Features &rarr;
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
// ARTICLE 24: HOW TO MANAGE LINUX USERS GROUPS & PERMISSIONS GUIDE
// =========================================================================
const article24Html = `<!DOCTYPE html>
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
  <title>How to Manage Linux Users, Groups &amp; Permissions: Complete 2026 Guide</title>
  <meta name="title" content="How to Manage Linux Users, Groups &amp; Permissions: Complete 2026 Guide">
  <meta name="description" content="Master Linux user and group administration. Learn useradd vs adduser, granting sudo privileges, octal permissions (chmod 755/644), file ownership (chown), and visual GUI management.">
  <meta name="keywords" content="linux useradd vs adduser, add user to sudoers ubuntu, chmod and chown linux, linux file permissions octal, usermod add group linux, visual user manager linux">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Manage Linux Users, Groups &amp; Permissions: Complete 2026 Guide">
  <meta property="og:description" content="Step-by-step tutorial: manage Linux accounts, sudo privileges, chmod octal permissions, chown ownership, and security hardening.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Security &amp; Sysadmin">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html">
  <meta name="twitter:title" content="How to Manage Linux Users, Groups &amp; Permissions (2026)">
  <meta name="twitter:description" content="Complete guide to Linux users, groups, sudo privileges, chmod, and chown.">
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
            "name": "Manage Linux Users, Groups & Permissions",
            "item": "https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html#article",
        "headline": "How to Manage Linux Users, Groups & Permissions: Complete 2026 Guide",
        "description": "Comprehensive tutorial on managing Linux users and groups. Master useradd vs adduser, sudo privileges, chmod octal permissions, chown ownership, and visual account management.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between useradd and adduser on Linux?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'useradd' is a low-level native binary available on all Linux distributions that creates an account without prompting for passwords or creating a home directory unless explicit flags (-m, -s) are supplied. 'adduser' is a friendly Perl/shell wrapper (standard on Debian/Ubuntu) that interactively guides you through setting passwords, creating the /home directory, and copying skeleton files."
            }
          },
          {
            "@type": "Question",
            "name": "How do I add an existing user to the sudo group?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On Ubuntu and Debian, run 'sudo usermod -aG sudo username'. On CentOS, RHEL, and AlmaLinux, run 'sudo usermod -aG wheel username'. The '-aG' flags append the user to the supplementary group without removing them from their existing groups."
            }
          },
          {
            "@type": "Question",
            "name": "What do the numbers in chmod 755 mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The three octal numbers represent permissions for Owner, Group, and Others. Read (r)=4, Write (w)=2, Execute (x)=1. '7' (4+2+1) means full rwx for the Owner; '5' (4+1) means read and execute (rx) for the Group and Others. For secure private files like SSH keys, chmod 600 (rw-------) grants read and write exclusively to the Owner."
            }
          },
          {
            "@type": "Question",
            "name": "How do I change both file owner and group in one command?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'sudo chown username:groupname filename'. To apply recursively across an entire nested directory tree, add the '-R' flag: 'sudo chown -R www-data:www-data /var/www/html'."
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
        <li aria-current="page">Manage Linux Users &amp; Permissions</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Linux Administration &amp; Security</span>
        <h1 class="article-title">How to Manage Linux Users, Groups &amp; Permissions: Complete 2026 Guide</h1>
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
          Sharing root credentials or allowing developers to log into production Linux servers using a shared generic username is one of the quickest ways to cause an accidental outage or fail a security compliance audit.
        </p>
        <p>
          Linux is a multi-user operating system with strict permission boundaries. By creating individual named user accounts, assigning users to specific groups, granting sudo privileges properly, and mastering octal permissions (<code>chmod</code>) and ownership (<code>chown</code>), you maintain accountability and system security.
        </p>
        <p>
          In this tutorial, you will master the essential commands to create and modify users, configure passwordless sudo, calculate octal permissions, and manage server accounts visually.
        </p>

        <h2>1. Creating Users: useradd vs adduser</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th><code>useradd</code> (Low-Level Binary)</th>
                <th><code>adduser</code> (Interactive Wrapper)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Availability</strong></td>
                <td>Universal across all Linux distros</td>
                <td>Debian / Ubuntu standard (Perl script)</td>
              </tr>
              <tr>
                <td><strong>Home Directory</strong></td>
                <td>Not created unless <code>-m</code> is passed</td>
                <td>Created automatically (<code>/home/user</code>)</td>
              </tr>
              <tr>
                <td><strong>Password Prompt</strong></td>
                <td>Account created locked without password</td>
                <td>Prompts interactively for password</td>
              </tr>
              <tr>
                <td><strong>Default Shell</strong></td>
                <td>Defaults to <code>/bin/sh</code></td>
                <td>Defaults to <code>/bin/bash</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Creating a User on Ubuntu/Debian:</h3>
        <div class="code-block">
          <code>sudo adduser deployer</code>
        </div>

        <h3>Creating a User on CentOS/RHEL/AlmaLinux:</h3>
        <div class="code-block">
          <code># -m creates home dir, -s sets bash shell:<br>
sudo useradd -m -s /bin/bash deployer<br>
sudo passwd deployer</code>
        </div>

        <h2>2. Granting Sudo Privileges</h2>
        <p>
          To give a user administrative privileges without sharing the root password:
        </p>

        <h3>On Ubuntu &amp; Debian:</h3>
        <div class="code-block">
          <code>sudo usermod -aG sudo deployer</code>
        </div>

        <h3>On CentOS, RHEL, &amp; AlmaLinux:</h3>
        <div class="code-block">
          <code>sudo usermod -aG wheel deployer</code>
        </div>

        <div class="callout-box warn">
          <strong>The Vital <code>-a</code> Flag:</strong> Always include the <code>-a</code> (append) flag with <code>-G</code>. Running <code>usermod -G sudo user</code> without <code>-a</code> will remove the user from all other supplementary groups (such as <code>docker</code> or <code>www-data</code>)!
        </div>

        <h2>3. Decoding Linux Permissions: chmod Octal Math</h2>
        <p>
          Every Linux file and directory has permissions split across three entities:
        </p>
        <ul>
          <li><strong>Owner (User):</strong> The user who owns the file.</li>
          <li><strong>Group:</strong> The members of the file's assigned group.</li>
          <li><strong>Others (World):</strong> Everyone else on the server.</li>
        </ul>

        <h3>The Numeric Values:</h3>
        <ul>
          <li><strong>Read (<code>r</code>):</strong> <code>4</code></li>
          <li><strong>Write (<code>w</code>):</strong> <code>2</code></li>
          <li><strong>Execute (<code>x</code>):</strong> <code>1</code></li>
        </ul>

        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Octal</th>
                <th>String</th>
                <th>Owner</th>
                <th>Group</th>
                <th>Others</th>
                <th>Typical Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>755</code></td>
                <td><code>rwxr-xr-x</code></td>
                <td>Read, Write, Exec</td>
                <td>Read, Exec</td>
                <td>Read, Exec</td>
                <td>Web directories, scripts</td>
              </tr>
              <tr>
                <td><code>644</code></td>
                <td><code>rw-r--r--</code></td>
                <td>Read, Write</td>
                <td>Read</td>
                <td>Read</td>
                <td>Standard web files, HTML</td>
              </tr>
              <tr>
                <td><code>700</code></td>
                <td><code>rwx------</code></td>
                <td>Read, Write, Exec</td>
                <td>None</td>
                <td>None</td>
                <td><code>~/.ssh</code> directory</td>
              </tr>
              <tr>
                <td><code>600</code></td>
                <td><code>rw-------</code></td>
                <td>Read, Write</td>
                <td>None</td>
                <td>None</td>
                <td>SSH private keys, <code>authorized_keys</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. Changing Ownership: chown &amp; chgrp</h2>
        <div class="code-block">
          <code># Change file owner to deployer:<br>
sudo chown deployer /var/www/html/index.html<br><br>
# Change both owner and group simultaneously:<br>
sudo chown deployer:www-data /var/www/html/index.html<br><br>
# Recursively apply across entire directory:<br>
sudo chown -R deployer:www-data /var/www/html/</code>
        </div>

        <h2>5. Deleting Users Safely</h2>
        <p>
          When offboarding a developer or retiring an automated service account:
        </p>
        <div class="code-block">
          <code># Delete user but keep their home directory:<br>
sudo userdel deployer<br><br>
# Delete user AND remove their /home/deployer folder and mail spool:<br>
sudo userdel -r deployer</code>
        </div>

        <h2>Visual User &amp; Permission Management with SSH Desktop</h2>
        <p>
          Remembering octal calculation numbers, editing <code>/etc/sudoers</code> with <code>visudo</code>, and checking user group memberships can be intimidating on production servers.
        </p>
        <p>
          <a href="../linux-user-manager.html">SSH Desktop User Manager</a> simplifies account administration:
        </p>
        <ul>
          <li><strong>Visual User Roster:</strong> View all system and human accounts with UIDs, GIDs, home folders, and active SSH login keys.</li>
          <li><strong>1-Click Sudo Toggle:</strong> Grant or revoke administrative privileges with a simple checkbox.</li>
          <li><strong>Visual Permission Calculator:</strong> Change permissions and ownership in the SFTP file manager with interactive checkboxes for Read, Write, and Execute.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Administer Linux Users Visually</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Ditch complex command-line flags. Download SSH Desktop — the 100% free GUI client with visual User &amp; Group Manager for Windows 11, macOS, and Linux.
          </p>
          <a href="../linux-user-manager.html" class="btn btn-primary btn-lg">
            Explore User Manager Features &rarr;
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
// ARTICLE 25: HOW TO SETUP UFW FIREWALL UBUNTU LINUX GUIDE
// =========================================================================
const article25Html = `<!DOCTYPE html>
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
  <title>How to Set Up UFW Firewall on Ubuntu Linux: Complete 2026 Guide</title>
  <meta name="title" content="How to Set Up UFW Firewall on Ubuntu Linux: Complete 2026 Guide">
  <meta name="description" content="Step-by-step tutorial: secure Ubuntu servers with UFW (Uncomplicated Firewall). Learn default deny policies, opening ports safely, rate-limiting brute force attacks, and visual GUI rules.">
  <meta name="keywords" content="how to setup ufw firewall, ufw commands cheatsheet, ufw allow port ubuntu, ufw limit ssh brute force, ufw enable without lockout, visual linux firewall gui">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up UFW Firewall on Ubuntu Linux: Complete 2026 Guide">
  <meta property="og:description" content="Master Ubuntu firewall security with UFW: default deny rules, opening ports, rate limiting SSH, and avoiding lockouts.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Firewall &amp; Security">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html">
  <meta name="twitter:title" content="How to Set Up UFW Firewall on Ubuntu (2026 Guide)">
  <meta name="twitter:description" content="Secure your Linux server with UFW: opening ports safely, preventing lockouts, and rate limiting brute force attacks.">
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
            "name": "Set Up UFW Firewall on Ubuntu Linux",
            "item": "https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html#article",
        "headline": "How to Set Up UFW Firewall on Ubuntu Linux: Complete 2026 Guide",
        "description": "Comprehensive tutorial on securing Ubuntu Linux servers using UFW (Uncomplicated Firewall). Learn default policies, opening ports safely, rate-limiting SSH, and visual GUI rules.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I prevent locking myself out when enabling UFW?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Always run 'sudo ufw allow ssh' or 'sudo ufw allow 22/tcp' BEFORE enabling the firewall with 'sudo ufw enable'. If you use a custom SSH port (e.g. 2222), ensure you execute 'sudo ufw allow 2222/tcp' first."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between ufw allow and ufw limit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'ufw allow 22/tcp' permits unlimited connections on port 22. 'ufw limit ssh' automatically denies connections from an IP address that attempts to initiate 6 or more connections within 30 seconds, blunting automated brute-force attacks."
            }
          },
          {
            "@type": "Question",
            "name": "How do I delete a specific UFW firewall rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "List all active rules with their numeric indexes using 'sudo ufw status numbered'. Then delete the specific rule by index: 'sudo ufw delete <NUMBER>'."
            }
          },
          {
            "@type": "Question",
            "name": "Does UFW support IPv6 rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, by default UFW manages both IPv4 and IPv6 rules simultaneously (verified by 'IPV6=yes' in '/etc/default/ufw'). Opening a port creates both IPv4 and IPv6 (v6) firewall entries."
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
        <li aria-current="page">Set Up UFW Firewall on Ubuntu</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Linux Network Security &amp; Firewall</span>
        <h1 class="article-title">How to Set Up UFW Firewall on Ubuntu Linux: Complete 2026 Guide</h1>
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
          Every Linux server exposed to the public internet needs an active host firewall. While the Linux kernel includes the powerful <code>iptables</code> and <code>nftables</code> packet filtering frameworks, their raw command syntax is notoriously complex.
        </p>
        <p>
          On Ubuntu and Debian distributions, <strong>UFW (Uncomplicated Firewall)</strong> provides a clean, user-friendly command-line wrapper designed to make configuring network rules intuitive and safe.
        </p>
        <p>
          In this guide, you will learn the exact sequence to configure UFW, establish default security policies, rate-limit brute-force attackers, and manage firewall rules visually with SSH Desktop.
        </p>

        <h2>Step 1: Check Current UFW Status</h2>
        <p>
          By default on fresh Ubuntu cloud servers, UFW is installed but inactive:
        </p>
        <div class="code-block">
          <code>sudo ufw status verbose</code>
        </div>
        <p>
          If it says <code>Status: inactive</code>, proceed to Step 2.
        </p>

        <h2>Step 2: Set Default Policies (Deny Inbound, Allow Outbound)</h2>
        <p>
          The fundamental foundation of firewall security is <strong>default-deny</strong>: block all incoming connection attempts by default, while allowing your server to make outgoing requests (e.g. <code>apt update</code>, external API calls):
        </p>
        <div class="code-block">
          <code>sudo ufw default deny incoming<br>
sudo ufw default allow outgoing</code>
        </div>

        <h2>Step 3: Allow SSH Connections (Prevent Self-Lockout!)</h2>
        <div class="callout-box warn">
          <strong>Crucial Warning:</strong> If you enable UFW before opening your SSH port, your active SSH session will be severed and you will be completely locked out of your server!
        </div>

        <p>
          Open standard port 22:
        </p>
        <div class="code-block">
          <code>sudo ufw allow 22/tcp comment 'Standard SSH'</code>
        </div>

        <p>
          Or if you changed your SSH daemon to listen on a custom port like <code>2222</code>:
        </p>
        <div class="code-block">
          <code>sudo ufw allow 2222/tcp comment 'Custom SSH'</code>
        </div>

        <h3>Rate-Limiting SSH Brute Force Attacks:</h3>
        <p>
          Instead of a generic <code>allow</code>, you can use <code>limit</code> on SSH. This automatically blocks IP addresses that make 6 or more connection attempts within 30 seconds:
        </p>
        <div class="code-block">
          <code>sudo ufw limit ssh</code>
        </div>

        <h2>Step 4: Allow Essential Web &amp; Application Services</h2>
        <div class="code-block">
          <code># Allow HTTP (port 80):<br>
sudo ufw allow 80/tcp comment 'HTTP Web'<br><br>
# Allow HTTPS (port 443):<br>
sudo ufw allow 443/tcp comment 'HTTPS Secure Web'<br><br>
# Or use pre-configured Nginx profile:<br>
sudo ufw allow 'Nginx Full'</code>
        </div>

        <h3>Allowing Access from a Specific IP Address:</h3>
        <p>
          If you have private internal services (e.g. database port <code>5432</code> or <code>3306</code>) that should only be accessible from your home or office IP:
        </p>
        <div class="code-block">
          <code>sudo ufw allow from 203.0.113.85 to any port 5432 proto tcp comment 'PostgreSQL from Office'</code>
        </div>

        <h2>Step 5: Enable UFW</h2>
        <p>
          Once your SSH port is verified, enable the firewall:
        </p>
        <div class="code-block">
          <code>sudo ufw enable</code>
        </div>
        <p>
          Press <code>y</code> when prompted. UFW is now active and will automatically enforce these rules across system reboots!
        </p>

        <h2>Step 6: Deleting Rules &amp; Disabling UFW</h2>
        <p>
          To remove an obsolete rule, list all rules with their numeric indexes:
        </p>
        <div class="code-block">
          <code>sudo ufw status numbered</code>
        </div>
        <p>
          Output:
        </p>
        <div class="code-block">
          <code>[ 1] 22/tcp                     ALLOW IN    Anywhere<br>
[ 2] 80/tcp                     ALLOW IN    Anywhere<br>
[ 3] 443/tcp                    ALLOW IN    Anywhere</code>
        </div>
        <p>
          Delete rule number 2:
        </p>
        <div class="code-block">
          <code>sudo ufw delete 2</code>
        </div>

        <h2>Visual Firewall Management with SSH Desktop</h2>
        <p>
          Typing command-line rules and verifying port numbers can be error-prone.
        </p>
        <p>
          <a href="../linux-firewall-gui.html">SSH Desktop Linux Firewall GUI</a> provides visual packet filtering control:
        </p>
        <ul>
          <li><strong>Visual Rules Matrix:</strong> Inspect all active incoming and outgoing firewall rules with color-coded port indicators.</li>
          <li><strong>1-Click Port Opening:</strong> Open or close standard service ports (SSH, HTTP, HTTPS, MySQL, Docker) with single toggle switches.</li>
          <li><strong>IP Whitelist Builder:</strong> Restrict database or admin access to specific office or VPN IP addresses with zero command syntax.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Secure Your Server Visually</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Configure firewalls safely without fear of lockouts. Download SSH Desktop — the 100% free GUI client with visual Firewall Controller.
          </p>
          <a href="../linux-firewall-gui.html" class="btn btn-primary btn-lg">
            Explore Visual Firewall Features &rarr;
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
const file23Path = path.join(BLOG_DIR, 'how-to-setup-ssl-certificate-certbot-nginx-guide.html');
const file24Path = path.join(BLOG_DIR, 'how-to-manage-linux-users-groups-permissions-guide.html');
const file25Path = path.join(BLOG_DIR, 'how-to-setup-ufw-firewall-ubuntu-linux-guide.html');

fs.writeFileSync(file23Path, article23Html.trim() + '\n', 'utf8');
console.log(`Created: ${file23Path} (${article23Html.length} bytes)`);

fs.writeFileSync(file24Path, article24Html.trim() + '\n', 'utf8');
console.log(`Created: ${file24Path} (${article24Html.length} bytes)`);

fs.writeFileSync(file25Path, article25Html.trim() + '\n', 'utf8');
console.log(`Created: ${file25Path} (${article25Html.length} bytes)`);
