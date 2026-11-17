/**
 * Generator for Batch 12 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html
 * 2. blog/how-to-setup-wireguard-vpn-linux-guide.html
 * 3. blog/how-to-test-linux-network-speed-bandwidth-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 38: HOW TO SETUP NGINX AS A REVERSE PROXY WITH SSL
// =========================================================================
const article38Html = `<!DOCTYPE html>
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
  <title>How to Set Up Nginx Reverse Proxy with SSL: Complete 2026 Guide</title>
  <meta name="title" content="How to Set Up Nginx Reverse Proxy with SSL: Complete 2026 Guide">
  <meta name="description" content="Step-by-step tutorial: configure Nginx as a high-performance reverse proxy with SSL termination, WebSocket support, custom headers, and visual proxy management.">
  <meta name="keywords" content="nginx reverse proxy setup, nginx reverse proxy ssl, configure nginx reverse proxy ubuntu, nginx proxy_pass tutorial, websocket reverse proxy nginx">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up Nginx Reverse Proxy with SSL (2026 Guide)">
  <meta property="og:description" content="Master Nginx reverse proxy configuration. Route traffic to Node.js, Python, or Go apps with SSL termination, WebSockets, and caching.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Web Servers &amp; Reverse Proxies">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html">
  <meta name="twitter:title" content="Nginx Reverse Proxy with SSL (2026 Guide)">
  <meta name="twitter:description" content="Complete guide to setting up an Nginx reverse proxy with HTTPS, WebSockets, and header forwarding.">
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
        "@id": "https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html#article",
        "headline": "How to Set Up Nginx Reverse Proxy with SSL: Complete 2026 Guide",
        "description": "Step-by-step tutorial: configure Nginx as a high-performance reverse proxy with SSL termination, WebSocket support, custom headers, and visual proxy management.",
        "url": "https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html",
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
        "articleSection": "Web Servers & Reverse Proxies",
        "keywords": "nginx reverse proxy tutorial, proxy_pass header forwarding, nginx websocket config, ssl termination nginx"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html#breadcrumb",
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
            "name": "Nginx Reverse Proxy Guide",
            "item": "https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between a forward proxy and a reverse proxy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A forward proxy sits in front of client devices to protect, anonymize, or filter their outbound internet requests. A reverse proxy sits in front of backend web servers to accept incoming internet traffic and distribute requests to internal services (such as Node.js, Python, or Docker containers) while providing SSL termination and load balancing."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my backend application seeing 127.0.0.1 instead of the real client IP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By default, Nginx terminates the TCP connection and establishes a fresh internal connection to the upstream service. To pass the visitor's real IP address, you must configure 'proxy_set_header X-Real-IP $remote_addr;' and 'proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;' in your server location block."
            }
          },
          {
            "@type": "Question",
            "name": "How do I proxy WebSockets through Nginx without connection dropouts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebSockets require HTTP/1.1 and hop-by-hop headers. Add 'proxy_http_version 1.1;', 'proxy_set_header Upgrade $http_upgrade;', and 'proxy_set_header Connection \"upgrade\";' inside the location block to prevent disconnection."
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
      <span>Nginx Reverse Proxy Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Set Up Nginx Reverse Proxy with SSL: Complete 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Web Servers</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Modern backend applications written in Node.js, Python (FastAPI/Django), Go, or Java rarely listen directly on public HTTP ports 80 or 443. Instead, standard production architecture places <strong>Nginx</strong> in front as an edge reverse proxy. Nginx handles SSL/TLS encryption, static asset caching, rate limiting, and HTTP-to-HTTPS redirection, forwarding clean requests to your application on localhost.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Configuring an Nginx reverse proxy involves creating a virtual host in <code>/etc/nginx/sites-available/</code>, using <code>proxy_pass</code> to direct traffic to your upstream service port, and attaching trusted SSL certificates with Certbot. In this guide, we review header propagation, WebSocket upgrades, syntax verification, and visual proxy management with <a href="../reverse-proxy-browser.html">SSH Desktop Reverse Proxy Browser</a>.
        </p>
      </div>

      <h2>1. Installing Nginx and Firewall Verification</h2>
      <pre><code># On Ubuntu/Debian:
sudo apt update &amp;&amp; sudo apt install -y nginx

# Open standard HTTP (80) and HTTPS (443) ports in UFW:
sudo ufw allow 'Nginx Full'
sudo systemctl enable --now nginx</code></pre>

      <h2>2. Configuring the Reverse Proxy Virtual Host</h2>
      <p>
        Create a new server block configuration file (e.g., <code>/etc/nginx/sites-available/myapp.conf</code>):
      </p>

      <pre><code>server {
    listen 80;
    server_name api.yourdomain.com;

    # Redirect all HTTP requests to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.yourdomain.com;

    # SSL Certificate Paths (Managed by Certbot or SSH Desktop SSL Manager)
    ssl_certificate /etc/letsencrypt/live/api.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.yourdomain.com/privkey.pem;

    # Modern TLS Security Protocols
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Reverse Proxy Location Block
    location / {
        # Upstream service listening on localhost (e.g. Node.js on port 3000)
        proxy_pass http://127.0.0.1:3000;

        # Forward real client headers to upstream application
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support (Prevents connection dropouts)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts and buffer sizes
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}</code></pre>

      <h2>3. Enabling the Configuration and Testing Syntax</h2>
      <p>
        On Debian-based systems, configurations are activated by creating a symbolic link into <code>sites-enabled</code>:
      </p>

      <pre><code># Enable site configuration
sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/

# ALWAYS test configuration syntax before reloading!
sudo nginx -t
# Output must display: syntax is ok / test is successful

# Reload Nginx without dropping active connections
sudo systemctl reload nginx</code></pre>

      <h2>4. Securing Free Automated SSL with Certbot</h2>
      <p>
        If you haven't yet provisioned an SSL certificate, Let's Encrypt Certbot will inject the certificates into your virtual host automatically:
      </p>

      <pre><code># Install Certbot Nginx plugin
sudo apt install -y certbot python3-certbot-nginx

# Obtain and install SSL certificate automatically
sudo certbot --nginx -d api.yourdomain.com</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Preview Reverse Proxies &amp; Manage SSL Visually</h3>
        <p>
          Skip terminal guesswork. SSH Desktop features an integrated <a href="../reverse-proxy-browser.html" style="color: #58a6ff; font-weight: 600;">Reverse Proxy Browser</a> and <a href="../ssl-certificate-manager.html" style="color: #58a6ff; font-weight: 600;">SSL Certificate Manager</a>. Inspect virtual hosts, preview live upstream ports, and monitor certificate expirations across your fleet.
        </p>
        <a href="../reverse-proxy-browser.html" class="cta-btn">Explore Visual Reverse Proxy Browser &rarr;</a>
      </div>

      <h2>5. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>What is the difference between a forward proxy and a reverse proxy?</h4>
        <p>
          A forward proxy sits in front of client devices to protect, anonymize, or filter their outbound internet requests. A reverse proxy sits in front of backend web servers to accept incoming internet traffic and distribute requests to internal services (such as Node.js, Python, or Docker containers) while providing SSL termination and load balancing.
        </p>
      </div>
      <div class="faq-item">
        <h4>Why is my backend application seeing 127.0.0.1 instead of the real client IP?</h4>
        <p>
          By default, Nginx terminates the TCP connection and establishes a fresh internal connection to the upstream service. To pass the visitor's real IP address, you must configure <code>proxy_set_header X-Real-IP $remote_addr;</code> and <code>proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</code> in your server location block.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I proxy WebSockets through Nginx without connection dropouts?</h4>
        <p>
          WebSockets require HTTP/1.1 and hop-by-hop headers. Add <code>proxy_http_version 1.1;</code>, <code>proxy_set_header Upgrade $http_upgrade;</code>, and <code>proxy_set_header Connection "upgrade";</code> inside the location block to prevent disconnection.
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
// ARTICLE 39: HOW TO SETUP WIREGUARD VPN ON LINUX SERVER
// =========================================================================
const article39Html = `<!DOCTYPE html>
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
  <title>How to Set Up WireGuard VPN on Linux Server: Complete 2026 Guide</title>
  <meta name="title" content="How to Set Up WireGuard VPN on Linux Server: Complete 2026 Guide">
  <meta name="description" content="Build a lightning-fast, secure WireGuard VPN server on Ubuntu/Debian. Generate cryptographic keys, configure wg0.conf, enable IP forwarding, and manage tunnels.">
  <meta name="keywords" content="wireguard vpn setup linux, how to install wireguard ubuntu, wireguard client config, secure vpn over linux, visual ssh tunnel vpn">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up WireGuard VPN on Linux (2026 Guide)">
  <meta property="og:description" content="Step-by-step WireGuard setup: generate Curve25519 keys, configure server & client peers, enable iptables masquerading, and route secure traffic.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Networking &amp; VPNs">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html">
  <meta name="twitter:title" content="Set Up WireGuard VPN on Linux (2026 Guide)">
  <meta name="twitter:description" content="High-speed, modern VPN setup: replace sluggish OpenVPN with state-of-the-art WireGuard in 15 minutes.">
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
        "@id": "https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html#article",
        "headline": "How to Set Up WireGuard VPN on Linux Server: Complete 2026 Guide",
        "description": "Build a lightning-fast, secure WireGuard VPN server on Ubuntu/Debian. Generate cryptographic keys, configure wg0.conf, enable IP forwarding, and manage tunnels.",
        "url": "https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html",
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
        "articleSection": "Networking & VPNs",
        "keywords": "wireguard linux tutorial, wg0.conf configuration, wireguard server ubuntu, ip forwarding wireguard"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html#breadcrumb",
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
            "name": "WireGuard VPN Setup Guide",
            "item": "https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is WireGuard faster than OpenVPN or IPSec?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WireGuard runs directly inside the Linux kernel space, avoiding the high overhead of context switching between user-space and kernel-space required by OpenVPN. It also relies on modern, highly optimized cryptography (Curve25519, ChaCha20-Poly1305, BLAKE2s) and maintains an ultra-lean codebase (~4,000 lines vs 100,000+ lines in OpenVPN)."
            }
          },
          {
            "@type": "Question",
            "name": "Which UDP port does WireGuard use by default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WireGuard typically listens on UDP port 51820. Because WireGuard is silent and does not respond to unauthenticated packets, port scanners cannot detect that the port is open."
            }
          },
          {
            "@type": "Question",
            "name": "How does WireGuard compare to an SSH SOCKS5 tunnel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An SSH SOCKS5 tunnel operates at the application layer (TCP only) and must be configured per application (e.g. inside browser settings). WireGuard creates a true virtual network interface (wg0) that routes ALL operating system traffic, including UDP, DNS, ICMP, and VoIP packets."
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
      <span>WireGuard VPN Setup Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Set Up WireGuard VPN on Linux Server: Complete 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Networking &amp; VPNs</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Virtual Private Networks (VPNs) have long been synonymous with complex, monolithic suites like OpenVPN and IPSec—plagued with slow connection handshakes, high CPU overhead, and sprawling configuration files. <strong>WireGuard</strong> has revolutionized Linux networking with an ultra-lean, kernel-level implementation that establishes tunnels instantly while maximizing throughput.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          WireGuard operates via public-key cryptography (similar to SSH keys). In this guide, you will install WireGuard on Ubuntu/Debian, generate Curve25519 keypairs, configure the <code>wg0</code> interface, enable kernel IPv4 packet forwarding, and route client traffic securely.
        </p>
      </div>

      <h2>1. Installing WireGuard and Enabling Packet Forwarding</h2>
      <pre><code># Install WireGuard on Ubuntu/Debian:
sudo apt update &amp;&amp; sudo apt install -y wireguard

# Enable IPv4 packet forwarding in the Linux kernel:
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p</code></pre>

      <h2>2. Generating Server and Peer Cryptographic Keys</h2>
      <p>
        Navigate to <code>/etc/wireguard/</code> with root privileges and generate your server keys:
      </p>

      <pre><code>cd /etc/wireguard
umask 077

# Generate server private and public keys:
wg genkey | tee server_private.key | wg pubkey > server_public.key

# Generate client private and public keys:
wg genkey | tee client_private.key | wg pubkey > client_public.key</code></pre>

      <h2>3. Configuring the Server Interface (/etc/wireguard/wg0.conf)</h2>
      <p>
        Create the server configuration file:
      </p>

      <pre><code>[Interface]
Address = 10.0.0.1/24
ListenPort = 51820
PrivateKey = &lt;CONTENTS_OF_SERVER_PRIVATE_KEY&gt;

# Enable NAT masquerading when the interface comes UP, disable on DOWN:
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Client Peer Section
[Peer]
PublicKey = &lt;CONTENTS_OF_CLIENT_PUBLIC_KEY&gt;
AllowedIPs = 10.0.0.2/32</code></pre>

      <h2>4. Client Configuration (laptop.conf)</h2>
      <p>
        On your client workstation (or mobile phone):
      </p>

      <pre><code>[Interface]
Address = 10.0.0.2/24
PrivateKey = &lt;CONTENTS_OF_CLIENT_PRIVATE_KEY&gt;
DNS = 1.1.1.1

[Peer]
PublicKey = &lt;CONTENTS_OF_SERVER_PUBLIC_KEY&gt;
Endpoint = 203.0.113.50:51820
# 0.0.0.0/0 routes all traffic through the VPN:
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25</code></pre>

      <h2>5. Starting the WireGuard Service</h2>
      <pre><code># Start and enable wg0 on boot:
sudo systemctl enable --now wg-quick@wg0

# Check tunnel status and transfer statistics:
sudo wg show</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Audit Open Ports &amp; Network Traffic Visually</h3>
        <p>
          Ensure your VPN and SSH ports are locked down. SSH Desktop includes a visual <a href="../network-port-auditor.html" style="color: #58a6ff; font-weight: 600;">Network Port Auditor</a> and <a href="../linux-firewall-gui.html" style="color: #58a6ff; font-weight: 600;">Firewall GUI</a> to inspect open sockets, audit incoming connections, and verify security in real time.
        </p>
        <a href="../network-port-auditor.html" class="cta-btn">Explore Visual Port Auditor &rarr;</a>
      </div>

      <h2>6. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>Why is WireGuard faster than OpenVPN or IPSec?</h4>
        <p>
          WireGuard runs directly inside the Linux kernel space, avoiding the high overhead of context switching between user-space and kernel-space required by OpenVPN. It also relies on modern, highly optimized cryptography (Curve25519, ChaCha20-Poly1305, BLAKE2s) and maintains an ultra-lean codebase (~4,000 lines vs 100,000+ lines in OpenVPN).
        </p>
      </div>
      <div class="faq-item">
        <h4>Which UDP port does WireGuard use by default?</h4>
        <p>
          WireGuard typically listens on UDP port 51820. Because WireGuard is silent and does not respond to unauthenticated packets, port scanners cannot detect that the port is open.
        </p>
      </div>
      <div class="faq-item">
        <h4>How does WireGuard compare to an SSH SOCKS5 tunnel?</h4>
        <p>
          An SSH SOCKS5 tunnel operates at the application layer (TCP only) and must be configured per application (e.g. inside browser settings). WireGuard creates a true virtual network interface (wg0) that routes ALL operating system traffic, including UDP, DNS, ICMP, and VoIP packets.
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
// ARTICLE 40: HOW TO TEST LINUX NETWORK SPEED & BANDWIDTH
// =========================================================================
const article40Html = `<!DOCTYPE html>
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
  <title>How to Test Linux Server Network Speed &amp; Bandwidth (iperf3, iftop, speedtest) 2026</title>
  <meta name="title" content="How to Test Linux Server Network Speed &amp; Bandwidth (iperf3, iftop, speedtest) 2026">
  <meta name="description" content="Complete guide to measuring Linux server network throughput. Benchmark bandwidth with iperf3, monitor real-time traffic with iftop, and graph metrics visually.">
  <meta name="keywords" content="linux test network speed, iperf3 tutorial linux, monitor bandwidth linux iftop, measure server bandwidth throughput, visual network monitor linux">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Test Linux Server Network Speed &amp; Bandwidth (2026 Guide)">
  <meta property="og:description" content="Diagnose network bottlenecks. Step-by-step benchmark tutorial with iperf3, real-time socket inspection with iftop, and visual system metrics.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Network Diagnostics &amp; Monitoring">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html">
  <meta name="twitter:title" content="Test Linux Server Network Speed &amp; Bandwidth (2026)">
  <meta name="twitter:description" content="Measure true network throughput with iperf3, inspect bandwidth hogs with iftop, and monitor servers visually.">
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
        "@id": "https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html#article",
        "headline": "How to Test Linux Server Network Speed & Bandwidth (iperf3, iftop, speedtest) 2026",
        "description": "Complete guide to measuring Linux server network throughput. Benchmark bandwidth with iperf3, monitor real-time traffic with iftop, and graph metrics visually.",
        "url": "https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html",
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
        "articleSection": "Network Diagnostics & Monitoring",
        "keywords": "linux test network speed, iperf3 tutorial, iftop bandwidth monitor, linux speedtest cli, measure server throughput"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html#breadcrumb",
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
            "name": "Network Speed & Bandwidth Guide",
            "item": "https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between iperf3 and speedtest-cli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "speedtest-cli tests internet WAN throughput against public Ookla servers, measuring download/upload speeds to the wider internet. iperf3 is a raw client-server benchmarking tool designed to measure the maximum theoretical throughput, packet loss, and jitter between two specific private servers, VPCs, or cloud regions."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find which process or IP is consuming all my bandwidth in real time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'sudo iftop -n -P' to view live socket connections sorted by bandwidth consumption. To inspect which specific Linux Process ID (PID) owns that network socket, run 'sudo nethogs'."
            }
          },
          {
            "@type": "Question",
            "name": "How can I test UDP throughput and jitter instead of TCP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Add the '-u' flag to your iperf3 client command along with a target bitrate: 'iperf3 -c <server_ip> -u -b 100M'. The output will display exact jitter in milliseconds and percentage of dropped UDP packets."
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
      <span>Network Speed &amp; Bandwidth Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Test Linux Server Network Speed &amp; Bandwidth (iperf3, iftop, speedtest) 2026</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Network Diagnostics</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Whether you are validating cloud provider SLA throughput, troubleshooting sluggish database queries between two virtual private clouds (VPCs), or diagnosing why user uploads are crawling, knowing how to accurately test and measure Linux server bandwidth is a critical skill.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Testing network performance requires different tools depending on the problem: <strong>iperf3</strong> measures raw point-to-point throughput, jitter, and packet loss between two servers; <strong>speedtest-cli</strong> tests public internet WAN bandwidth; and <strong>iftop / nethogs</strong> identify real-time bandwidth hogs per socket and process. In this guide, we review all three workflows alongside visual monitoring with <a href="../system-monitor.html">SSH Desktop System Monitor</a>.
        </p>
      </div>

      <h2>1. Benchmarking Point-to-Point Throughput with iperf3</h2>
      <p>
        <code>iperf3</code> is the gold standard for measuring maximum TCP and UDP throughput across network links without the disk I/O bottlenecks of file transfers:
      </p>

      <pre><code># Install iperf3 on Ubuntu/Debian:
sudo apt update &amp;&amp; sudo apt install -y iperf3

# Step 1: Start iperf3 in server mode on the remote host (listens on port 5201):
iperf3 -s

# Step 2: Run benchmark from the client host (tests 10 seconds of TCP transfer):
iperf3 -c 203.0.113.50</code></pre>

      <h3>Advanced iperf3 Flags</h3>
      <pre><code># Test with 4 parallel streams to saturate multi-gigabit links:
iperf3 -c 203.0.113.50 -P 4

# Test bidirectional transfer (upload and download simultaneously):
iperf3 -c 203.0.113.50 -d

# Benchmark UDP throughput and packet loss (target 1 Gbps):
iperf3 -c 203.0.113.50 -u -b 1G</code></pre>

      <h2>2. Testing WAN Internet Speed with speedtest-cli</h2>
      <p>
        To test the public upload and download speed of your cloud server against nearby CDN servers:
      </p>

      <pre><code># Install speedtest-cli via apt or pip:
sudo apt install -y speedtest-cli

# Run complete bandwidth and latency test:
speedtest-cli --secure --share</code></pre>

      <h2>3. Monitoring Real-Time Bandwidth Hogs with iftop &amp; nethogs</h2>
      <p>
        When network traffic suddenly spikes, use real-time interactive tools to find out which IP address or PID is saturating your connection:
      </p>

      <pre><code># Install monitoring utilities:
sudo apt install -y iftop nethogs

# Inspect traffic by IP address and listening port:
sudo iftop -n -P

# Inspect bandwidth consumed per Linux Process ID (PID):
sudo nethogs eth0</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Graph Real-Time Network I/O Visually</h3>
        <p>
          Skip cryptic CLI text grids. SSH Desktop includes a real-time <a href="../system-monitor.html" style="color: #58a6ff; font-weight: 600;">System &amp; Network Monitor</a>. Track bandwidth throughput in megabytes per second, inspect network interfaces, and detect traffic spikes visually across all your cloud instances.
        </p>
        <a href="../system-monitor.html" class="cta-btn">Explore Visual System Monitor &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>What is the difference between iperf3 and speedtest-cli?</h4>
        <p>
          <code>speedtest-cli</code> tests internet WAN throughput against public Ookla servers, measuring download/upload speeds to the wider internet. <code>iperf3</code> is a raw client-server benchmarking tool designed to measure the maximum theoretical throughput, packet loss, and jitter between two specific private servers, VPCs, or cloud regions.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I find which process or IP is consuming all my bandwidth in real time?</h4>
        <p>
          Run <code>sudo iftop -n -P</code> to view live socket connections sorted by bandwidth consumption. To inspect which specific Linux Process ID (PID) owns that network socket, run <code>sudo nethogs</code>.
        </p>
      </div>
      <div class="faq-item">
        <h4>How can I test UDP throughput and jitter instead of TCP?</h4>
        <p>
          Add the <code>-u</code> flag to your iperf3 client command along with a target bitrate: <code>iperf3 -c &lt;server_ip&gt; -u -b 100M</code>. The output will display exact jitter in milliseconds and percentage of dropped UDP packets.
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
const article38Path = path.join(BLOG_DIR, 'how-to-setup-nginx-reverse-proxy-ssl-guide.html');
const article39Path = path.join(BLOG_DIR, 'how-to-setup-wireguard-vpn-linux-guide.html');
const article40Path = path.join(BLOG_DIR, 'how-to-test-linux-network-speed-bandwidth-guide.html');

fs.writeFileSync(article38Path, article38Html, 'utf8');
console.log('Created: ' + article38Path + ' (' + article38Html.length + ' bytes)');

fs.writeFileSync(article39Path, article39Html, 'utf8');
console.log('Created: ' + article39Path + ' (' + article39Html.length + ' bytes)');

fs.writeFileSync(article40Path, article40Html, 'utf8');
console.log('Created: ' + article40Path + ' (' + article40Html.length + ' bytes)');
