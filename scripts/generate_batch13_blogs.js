/**
 * Generator for Batch 13 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-setup-nginx-load-balancing-guide.html
 * 2. blog/postgresql-performance-tuning-linux-guide.html
 * 3. blog/cloudflare-tunnel-ssh-zero-trust-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 41: HOW TO SETUP NGINX LOAD BALANCING
// =========================================================================
const article41Html = `<!DOCTYPE html>
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
  <title>How to Set Up Nginx Load Balancing (Round Robin, Least Conn, IP Hash): 2026 Guide</title>
  <meta name="title" content="How to Set Up Nginx Load Balancing (Round Robin, Least Conn, IP Hash): 2026 Guide">
  <meta name="description" content="Master Nginx load balancing algorithms across multiple backend servers. Learn upstream configuration, weighted distribution, passive health checks, and visual clustering.">
  <meta name="keywords" content="nginx load balancing guide, nginx upstream load balancer, round robin vs least conn nginx, load balance web servers linux, visual multi server automation">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up Nginx Load Balancing (2026 Guide)">
  <meta property="og:description" content="Scale web traffic horizontally across multiple backend servers with Nginx upstream load balancing.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="High Availability &amp; Clustering">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html">
  <meta name="twitter:title" content="Nginx Load Balancing Algorithms (2026 Guide)">
  <meta name="twitter:description" content="Distribute traffic evenly: Round Robin, Least Connections, IP Hash, and server weight tuning.">
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
        "@id": "https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html#article",
        "headline": "How to Set Up Nginx Load Balancing (Round Robin, Least Conn, IP Hash): 2026 Guide",
        "description": "Master Nginx load balancing algorithms across multiple backend servers. Learn upstream configuration, weighted distribution, passive health checks, and visual clustering.",
        "url": "https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html",
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
        "articleSection": "High Availability & Clustering",
        "keywords": "nginx load balancing tutorial, nginx upstream configuration, round robin vs least conn, session persistence ip hash"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html#breadcrumb",
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
            "name": "Nginx Load Balancing Guide",
            "item": "https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the default load balancing algorithm in Nginx?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The default algorithm is Round Robin. Incoming requests are distributed sequentially across all listed upstream backend servers in equal order."
            }
          },
          {
            "@type": "Question",
            "name": "When should I use least_conn instead of round-robin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use least_conn when backend requests take varying amounts of time to complete (e.g. file uploads, complex database queries, report generation). It routes new requests to the backend server with the lowest number of active active connections, preventing single servers from becoming overloaded."
            }
          },
          {
            "@type": "Question",
            "name": "How do I maintain user sessions across balanced servers without Redis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the 'ip_hash' directive in your upstream block. Nginx hashes the client's IPv4 address (or first 3 octets) to ensure that requests from the same visitor consistently route to the same backend server, maintaining in-memory session state."
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
      <span>Nginx Load Balancing Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Set Up Nginx Load Balancing (Round Robin, Least Conn, IP Hash): 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">High Availability</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        As web applications grow beyond a single virtual server, distributing HTTP requests across a pool of application workers is required to achieve horizontal scalability and zero-downtime deployments. <strong>Nginx</strong> is the industry's premier open-source software load balancer, capable of handling tens of thousands of concurrent connections with minimal memory overhead.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Nginx load balancing is configured using an <code>upstream</code> block that defines your backend server pool. In this guide, you will learn how to configure Round Robin, Least Connections, and IP Hash algorithms, set server weights, enable passive health checks, and manage multi-server clusters visually using <a href="../multi-server-automation.html">SSH Desktop Multi-Server Automation</a>.
        </p>
      </div>

      <h2>1. The Core Nginx Upstream Configuration</h2>
      <p>
        In your Nginx configuration (e.g. <code>/etc/nginx/conf.d/loadbalancer.conf</code>), define the backend cluster inside an <code>upstream</code> block, then reference it using <code>proxy_pass</code>:
      </p>

      <pre><code>upstream backend_cluster {
    # Default: Round Robin algorithm
    server 10.0.0.11:3000;
    server 10.0.0.12:3000;
    server 10.0.0.13:3000;
}

server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://backend_cluster;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}</code></pre>

      <h2>2. Understanding Nginx Load Balancing Algorithms</h2>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Directive</th>
            <th>Best Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Round Robin (Default)</strong></td>
            <td><em>(None needed)</em></td>
            <td>Homogeneous servers with short, uniform requests (REST APIs)</td>
          </tr>
          <tr>
            <td><strong>Least Connections</strong></td>
            <td><code>least_conn;</code></td>
            <td>Varying request times (file conversions, heavy DB queries, SSR)</td>
          </tr>
          <tr>
            <td><strong>IP Hash</strong></td>
            <td><code>ip_hash;</code></td>
            <td>Stateful applications requiring sticky visitor sessions</td>
          </tr>
          <tr>
            <td><strong>Generic Hash</strong></td>
            <td><code>hash $request_uri;</code></td>
            <td>Consistent caching proxies and deterministic routing</td>
          </tr>
        </tbody>
      </table>

      <h3>Example: Least Connections with Weighted Distribution</h3>
      <p>
        If one server in your cluster has double the CPU and RAM of the others, use the <code>weight</code> parameter:
      </p>

      <pre><code>upstream backend_cluster {
    least_conn;

    # Primary high-spec server receives 3x traffic:
    server 10.0.0.11:3000 weight=3;

    # Standard servers:
    server 10.0.0.12:3000 weight=1;
    server 10.0.0.13:3000 weight=1;

    # Backup server (only receives traffic if all others are down):
    server 10.0.0.99:3000 backup;
}</code></pre>

      <h2>3. Passive Health Checks &amp; Automatic Failover</h2>
      <p>
        Nginx automatically detects unresponsive upstream nodes and removes them from the routing rotation using <code>max_fails</code> and <code>fail_timeout</code>:
      </p>

      <pre><code>upstream backend_cluster {
    # If 3 consecutive requests fail within 30s, mark node down for 30s:
    server 10.0.0.11:3000 max_fails=3 fail_timeout=30s;
    server 10.0.0.12:3000 max_fails=3 fail_timeout=30s;
}</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Manage Multi-Server Clusters Visually</h3>
        <p>
          Managing configurations across multiple backend nodes? SSH Desktop provides unified <a href="../multi-server-automation.html" style="color: #58a6ff; font-weight: 600;">Multi-Server Automation</a>. Broadcast shell commands, deploy Nginx reload scripts across entire clusters simultaneously, and monitor node health in real time.
        </p>
        <a href="../multi-server-automation.html" class="cta-btn">Explore Multi-Server Automation &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>What is the default load balancing algorithm in Nginx?</h4>
        <p>
          The default algorithm is Round Robin. Incoming requests are distributed sequentially across all listed upstream backend servers in equal order.
        </p>
      </div>
      <div class="faq-item">
        <h4>When should I use least_conn instead of round-robin?</h4>
        <p>
          Use <code>least_conn</code> when backend requests take varying amounts of time to complete (e.g. file uploads, complex database queries, report generation). It routes new requests to the backend server with the lowest number of active connections, preventing single servers from becoming overloaded.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I maintain user sessions across balanced servers without Redis?</h4>
        <p>
          Use the <code>ip_hash</code> directive in your upstream block. Nginx hashes the client's IPv4 address (or first 3 octets) to ensure that requests from the same visitor consistently route to the same backend server, maintaining in-memory session state.
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
// ARTICLE 42: POSTGRESQL PERFORMANCE TUNING ON LINUX
// =========================================================================
const article42Html = `<!DOCTYPE html>
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
  <title>PostgreSQL Performance Tuning on Linux: 10 Critical Optimizations (2026)</title>
  <meta name="title" content="PostgreSQL Performance Tuning on Linux: 10 Critical Optimizations (2026)">
  <meta name="description" content="Optimize postgresql.conf on Linux servers. Calculate shared_buffers, tune work_mem, configure WAL checkpoints, and inspect query plans visually.">
  <meta name="keywords" content="postgresql performance tuning linux, postgresql.conf optimization, tune shared_buffers postgres, optimize postgres linux server, visual postgres gui ssh">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="PostgreSQL Performance Tuning on Linux: 10 Steps (2026)">
  <meta property="og:description" content="Unlock maximum throughput from PostgreSQL. Hardware-specific formulas for shared_buffers, work_mem, WAL checkpoints, and vacuuming.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Databases &amp; Performance Tuning">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html">
  <meta name="twitter:title" content="PostgreSQL Performance Tuning on Linux (2026)">
  <meta name="twitter:description" content="Stop sluggish queries. Step-by-step postgresql.conf memory, disk, and checkpoint optimization guide.">
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
        "@id": "https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html#article",
        "headline": "PostgreSQL Performance Tuning on Linux: 10 Critical Optimizations (2026)",
        "description": "Optimize postgresql.conf on Linux servers. Calculate shared_buffers, tune work_mem, configure WAL checkpoints, and inspect query plans visually.",
        "url": "https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html",
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
        "articleSection": "Databases & Performance Tuning",
        "keywords": "postgresql performance tuning, postgresql.conf settings, calculate shared_buffers, work_mem formula, postgres vacuum tuning"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html#breadcrumb",
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
            "name": "PostgreSQL Tuning Guide",
            "item": "https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is the default postgresql.conf so conservative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The default PostgreSQL configuration is deliberately designed to run on virtually any hardware—including minimal 512 MB embedded devices—without failing to start. In production servers with 8 GB to 64+ GB of RAM, running default settings leaves over 90% of available memory unutilized."
            }
          },
          {
            "@type": "Question",
            "name": "What percentage of RAM should be assigned to shared_buffers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On dedicated Linux database servers, standard practice is to allocate 25% of total physical RAM to shared_buffers. Allocating more than 40% usually leads to diminishing returns and double-buffering contention with the Linux kernel page cache."
            }
          },
          {
            "@type": "Question",
            "name": "What is the danger of setting work_mem too high?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike shared_buffers which is allocated once at startup, work_mem is allocated PER SORT AND HASH OPERATION per active connection. If you set work_mem = 256MB with max_connections = 100, a complex query involving multiple join sorts can exhaust physical RAM and trigger the Linux OOM Killer."
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
      <span>PostgreSQL Tuning Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">PostgreSQL Performance Tuning on Linux: 10 Critical Optimizations (2026)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Database Performance</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        PostgreSQL is renowned for data integrity and feature richness. However, default installations ship with configuration values dating back to hardware standards from the early 2000s—often allocating a meager 128 MB of RAM to shared buffers. In modern production environments with SSD storage and multi-gigabyte memory banks, tuning <code>postgresql.conf</code> can yield a 5x to 20x improvement in query execution speeds.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          PostgreSQL tuning centers on balancing memory allocations (<code>shared_buffers</code>, <code>work_mem</code>, <code>effective_cache_size</code>) with write-ahead log (WAL) checkpoint thresholds and autovacuum aggression. In this guide, we provide concrete calculation formulas for 8 GB, 16 GB, and 32 GB RAM servers alongside visual database management via <a href="../database-gui-ssh-tunnel.html">SSH Desktop Database GUI</a>.
        </p>
      </div>

      <h2>1. Memory Allocation Formulas</h2>

      <h3>1. shared_buffers (Dedicated Cache)</h3>
      <p>
        Sets the amount of memory PostgreSQL uses for shared memory buffers. Recommended setting: <strong>25% of total server RAM</strong>.
      </p>
      <pre><code># 8GB RAM Server:
shared_buffers = 2GB

# 16GB RAM Server:
shared_buffers = 4GB

# 32GB RAM Server:
shared_buffers = 8GB</code></pre>

      <h3>2. effective_cache_size (Planner Memory Estimate)</h3>
      <p>
        Provides an estimate of memory available for disk caching by both PostgreSQL and the OS kernel. Recommended: <strong>50% to 75% of total server RAM</strong>.
      </p>
      <pre><code>effective_cache_size = 12GB  # For 16GB RAM server</code></pre>

      <h3>3. work_mem (Per-Operation Sort Memory)</h3>
      <p>
        Used for internal sort operations and hash tables before writing to temporary disk files.
      </p>
      <pre><code># Formula: (Total RAM - shared_buffers) / (max_connections * 3)
work_mem = 32MB</code></pre>

      <h3>4. maintenance_work_mem</h3>
      <p>
        Specifies the maximum amount of memory to be used by maintenance operations like <code>VACUUM</code>, <code>CREATE INDEX</code>, and <code>ALTER TABLE</code>:
      </p>
      <pre><code>maintenance_work_mem = 1GB</code></pre>

      <h2>2. Write-Ahead Log (WAL) &amp; Checkpoint Tuning</h2>
      <p>
        Aggressive checkpointing causes sudden I/O spikes that stall queries. Smoothing checkpoint execution avoids disk thrashing:
      </p>

      <pre><code># Spread out checkpoints across 90% of the checkpoint interval
checkpoint_completion_target = 0.9

# Increase maximum WAL volume between automatic checkpoints
max_wal_size = 16GB
min_wal_size = 2GB

# Tune random page cost for modern NVMe/SSD storage (Default 4.0 is for spinning rust!)
random_page_cost = 1.1</code></pre>

      <h2>3. Autovacuum Tuning: Preventing Table Bloat</h2>
      <p>
        PostgreSQL uses Multi-Version Concurrency Control (MVCC). Dead row versions must be vacuumed frequently to maintain index density:
      </p>

      <pre><code>autovacuum = on
autovacuum_max_workers = 4
autovacuum_vacuum_scale_factor = 0.05
autovacuum_analyze_scale_factor = 0.02</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Connect, Query &amp; Inspect PostgreSQL Over SSH</h3>
        <p>
          Stop struggling with command-line psql tables. SSH Desktop includes a built-in <a href="../database-gui-ssh-tunnel.html" style="color: #58a6ff; font-weight: 600;">PostgreSQL &amp; Database GUI</a> with automated SSH tunneling, table schema visualization, and real-time query execution metrics.
        </p>
        <a href="../database-gui-ssh-tunnel.html" class="cta-btn">Explore Visual Database GUI &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>Why is the default postgresql.conf so conservative?</h4>
        <p>
          The default PostgreSQL configuration is deliberately designed to run on virtually any hardware—including minimal 512 MB embedded devices—without failing to start. In production servers with 8 GB to 64+ GB of RAM, running default settings leaves over 90% of available memory unutilized.
        </p>
      </div>
      <div class="faq-item">
        <h4>What percentage of RAM should be assigned to shared_buffers?</h4>
        <p>
          On dedicated Linux database servers, standard practice is to allocate 25% of total physical RAM to shared_buffers. Allocating more than 40% usually leads to diminishing returns and double-buffering contention with the Linux kernel page cache.
        </p>
      </div>
      <div class="faq-item">
        <h4>What is the danger of setting work_mem too high?</h4>
        <p>
          Unlike shared_buffers which is allocated once at startup, work_mem is allocated PER SORT AND HASH OPERATION per active connection. If you set work_mem = 256MB with max_connections = 100, a complex query involving multiple join sorts can exhaust physical RAM and trigger the Linux OOM Killer.
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
// ARTICLE 43: HOW TO SETUP CLOUDFLARE TUNNEL WITH SSH
// =========================================================================
const article43Html = `<!DOCTYPE html>
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
  <title>How to Set Up Cloudflare Tunnel for SSH (Zero Trust, No Open Ports): 2026 Guide</title>
  <meta name="title" content="How to Set Up Cloudflare Tunnel for SSH (Zero Trust, No Open Ports): 2026 Guide">
  <meta name="description" content="Secure your Linux server with Cloudflare Tunnel (cloudflared). Close port 22 completely, bypass CGNAT and dynamic IPs, and manage remote servers visually.">
  <meta name="keywords" content="cloudflare tunnel ssh, cloudflared ssh access, zero trust ssh without open ports, secure ssh behind cgnat, visual cloud desktop ssh">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Set Up Cloudflare Tunnel for SSH (Zero Trust Guide)">
  <meta property="og:description" content="Close port 22 to the public internet completely. Step-by-step cloudflared daemon setup and SSH config ProxyCommand integration.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Zero Trust &amp; Cloud Security">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html">
  <meta name="twitter:title" content="Cloudflare Tunnel for SSH (Zero Trust Guide)">
  <meta name="twitter:description" content="Eliminate port scanning and brute-force botnets by tunneling SSH over Cloudflare Zero Trust.">
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
        "@id": "https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html#article",
        "headline": "How to Set Up Cloudflare Tunnel for SSH (Zero Trust, No Open Ports): 2026 Guide",
        "description": "Secure your Linux server with Cloudflare Tunnel (cloudflared). Close port 22 completely, bypass CGNAT and dynamic IPs, and manage remote servers visually.",
        "url": "https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html",
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
        "articleSection": "Zero Trust & Cloud Security",
        "keywords": "cloudflare tunnel ssh, zero trust ssh without open ports, cloudflared linux setup, ssh over cgnat, secure bastion alternative"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html#breadcrumb",
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
            "name": "Cloudflare Tunnel SSH Guide",
            "item": "https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is Cloudflare Tunnel safer than standard port forwarding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SSH access requires port 22 (or a custom port) to be open in your firewall, leaving it discoverable by Shodan and internet scanning bots. Cloudflare Tunnel opens only outbound lightweight HTTPS/QUIC connections to Cloudflare's edge edge servers. Your firewall has zero inbound listening ports open."
            }
          },
          {
            "@type": "Question",
            "name": "Can I connect to home lab servers behind Carrier-Grade NAT (CGNAT)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Because cloudflared initiates outbound connections to Cloudflare, it seamlessly bypasses CGNAT, dynamic home IP addresses, and restrictive office firewalls without requiring dynamic DNS (DDNS) or port forwarding on your router."
            }
          },
          {
            "@type": "Question",
            "name": "What must be installed on the client machine to connect over the tunnel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The client machine only needs the 'cloudflared' binary installed. In your ~/.ssh/config file, add a ProxyCommand directive: 'ProxyCommand cloudflared access ssh --hostname %h'. Your regular ssh commands will then tunnel transparently."
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
      <span>Cloudflare Tunnel SSH Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Set Up Cloudflare Tunnel for SSH (Zero Trust, No Open Ports): 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Zero Trust Security</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        The gold standard of server security is simple: <em>if an attacker cannot reach your port, they cannot exploit your software</em>. Traditionally, remote SSH administration required opening port 22 through firewalls and routers, exposing systems to ceaseless brute-force scans and zero-day vulnerabilities. <strong>Cloudflare Tunnel</strong> eliminates open inbound ports entirely.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Cloudflare Tunnel (<code>cloudflared</code>) establishes a lightweight outbound-only connection from your server to Cloudflare's global edge network. By integrating Cloudflare Access, you can enforce Multi-Factor Authentication (MFA) and Identity Provider (Google, GitHub, Okta) checks before a terminal session is ever permitted to reach your OpenSSH daemon.
        </p>
      </div>

      <h2>1. Installing cloudflared on Linux Server</h2>
      <pre><code># Download and install cloudflared on Ubuntu/Debian:
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /etc/apt/trusted.gpg.d/cloudflare.gpg >/dev/null
echo "deb https://pkg.cloudflare.com/cloudflared bullseye main" | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update &amp;&amp; sudo apt install -y cloudflared

# Authenticate server to your Cloudflare account:
cloudflared tunnel login</code></pre>

      <h2>2. Creating and Routing the SSH Tunnel</h2>
      <pre><code># Create named tunnel (e.g. 'prod-server'):
cloudflared tunnel create prod-server

# Associate a subdomain with the tunnel:
cloudflared tunnel route dns prod-server ssh.yourdomain.com</code></pre>

      <h3>Configuring /etc/cloudflared/config.yml</h3>
      <pre><code>tunnel: &lt;TUNNEL_UUID&gt;
credentials-file: /root/.cloudflared/&lt;TUNNEL_UUID&gt;.json

ingress:
  - hostname: ssh.yourdomain.com
    service: ssh://localhost:22
  - service: http_status:404</code></pre>

      <pre><code># Install as systemd service and run:
sudo cloudflared service install
sudo systemctl enable --now cloudflared</code></pre>

      <h2>3. Configuring Client Workstation (~/.ssh/config)</h2>
      <p>
        Install <code>cloudflared</code> on your workstation (Windows, macOS, or Linux). Then configure your SSH client to tunnel requests transparently through Cloudflare Access:
      </p>

      <pre><code>Host ssh.yourdomain.com
  ProxyCommand cloudflared access ssh --hostname %h
  User deploy
  IdentityFile ~/.ssh/id_ed25519</code></pre>

      <div class="callout-box tip">
        <h4>Now You Can Close Port 22 in UFW!</h4>
        <p>
          With Cloudflare Tunnel active, delete your public SSH firewall rule:
        </p>
        <pre><code>sudo ufw delete allow 22/tcp
sudo ufw status
# Result: Port 22 is completely hidden from Shodan and public port scanners!</code></pre>
      </div>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Connect to Cloud Servers Securely with SSH Desktop</h3>
        <p>
          Tired of complicated proxy commands? <a href="../cloud-desktop.html" style="color: #58a6ff; font-weight: 600;">SSH Desktop Cloud &amp; Remote Desktop</a> connects seamlessly to cloud instances, jump hosts, and zero-trust endpoints with native encryption and instant visual dashboards.
        </p>
        <a href="../cloud-desktop.html" class="cta-btn">Explore Visual Cloud Desktop &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>Why is Cloudflare Tunnel safer than standard port forwarding?</h4>
        <p>
          Traditional SSH access requires port 22 (or a custom port) to be open in your firewall, leaving it discoverable by Shodan and internet scanning bots. Cloudflare Tunnel opens only outbound lightweight HTTPS/QUIC connections to Cloudflare's edge servers. Your firewall has zero inbound listening ports open.
        </p>
      </div>
      <div class="faq-item">
        <h4>Can I connect to home lab servers behind Carrier-Grade NAT (CGNAT)?</h4>
        <p>
          Yes! Because <code>cloudflared</code> initiates outbound connections to Cloudflare, it seamlessly bypasses CGNAT, dynamic home IP addresses, and restrictive office firewalls without requiring dynamic DNS (DDNS) or port forwarding on your router.
        </p>
      </div>
      <div class="faq-item">
        <h4>What must be installed on the client machine to connect over the tunnel?</h4>
        <p>
          The client machine only needs the <code>cloudflared</code> binary installed. In your <code>~/.ssh/config</code> file, add a ProxyCommand directive: <code>ProxyCommand cloudflared access ssh --hostname %h</code>. Your regular ssh commands will then tunnel transparently.
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
const article41Path = path.join(BLOG_DIR, 'how-to-setup-nginx-load-balancing-guide.html');
const article42Path = path.join(BLOG_DIR, 'postgresql-performance-tuning-linux-guide.html');
const article43Path = path.join(BLOG_DIR, 'cloudflare-tunnel-ssh-zero-trust-guide.html');

fs.writeFileSync(article41Path, article41Html, 'utf8');
console.log('Created: ' + article41Path + ' (' + article41Html.length + ' bytes)');

fs.writeFileSync(article42Path, article42Html, 'utf8');
console.log('Created: ' + article42Path + ' (' + article42Html.length + ' bytes)');

fs.writeFileSync(article43Path, article43Html, 'utf8');
console.log('Created: ' + article43Path + ' (' + article43Html.length + ' bytes)');
