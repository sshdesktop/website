/**
 * Generator for Batch 14 SEO Cornerstone Blog Articles:
 * 1. blog/linux-sysctl-tuning-high-traffic-guide.html
 * 2. blog/nginx-security-headers-hardening-guide.html
 * 3. blog/how-to-fix-502-bad-gateway-nginx-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 44: LINUX SYSCTL NETWORK TUNING
// =========================================================================
const article44Html = `<!DOCTYPE html>
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
  <title>Linux sysctl Network Tuning: 10 Kernel Settings for High-Traffic Servers (2026)</title>
  <meta name="title" content="Linux sysctl Network Tuning: 10 Kernel Settings for High-Traffic Servers (2026)">
  <meta name="description" content="Optimize /etc/sysctl.conf for high-concurrency Linux servers. Increase TCP backlog, enable BBR congestion control, expand file limits, and monitor I/O visually.">
  <meta name="keywords" content="linux sysctl network tuning, sysctl.conf performance, tcp_max_syn_backlog tuning, optimize linux kernel network, enable bbr linux, visual system monitor">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="Linux sysctl Network Tuning: High-Traffic Guide (2026)">
  <meta property="og:description" content="Unlock maximum throughput on Linux servers. Configure somaxconn, file descriptors, TCP buffers, and BBR congestion control.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Kernel Optimization &amp; Networking">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html">
  <meta name="twitter:title" content="Linux sysctl Network Tuning (2026 Guide)">
  <meta name="twitter:description" content="Stop SYN drops and connection throttling. The definitive sysctl.conf tuning checklist for high-traffic Linux web servers.">
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
        "@id": "https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html#article",
        "headline": "Linux sysctl Network Tuning: 10 Kernel Settings for High-Traffic Servers (2026)",
        "description": "Optimize /etc/sysctl.conf for high-concurrency Linux servers. Increase TCP backlog, enable BBR congestion control, expand file limits, and monitor I/O visually.",
        "url": "https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html",
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
        "articleSection": "Kernel Optimization & Networking",
        "keywords": "linux sysctl tuning, high traffic sysctl.conf, somaxconn tcp_max_syn_backlog, enable bbr linux, tcp buffer tuning"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html#breadcrumb",
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
            "name": "Linux sysctl Tuning Guide",
            "item": "https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is net.core.somaxconn and why should I increase it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "somaxconn defines the maximum queue length for completely established TCP sockets waiting to be accepted by an application like Nginx or Redis. The default value (128 or 4096) is easily exhausted during traffic surges, causing new incoming connections to be dropped. Increasing somaxconn to 65535 accommodates massive connection spikes."
            }
          },
          {
            "@type": "Question",
            "name": "What is Google BBR and why is it better than Cubic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BBR (Bottleneck Bandwidth and Round-trip propagation time) is a modern congestion control algorithm developed by Google. Unlike legacy loss-based algorithms like Cubic that slash throughput upon packet loss, BBR models the actual pipe bottleneck and latency, delivering 2x to 10x higher bandwidth and lower latency over lossy networks."
            }
          },
          {
            "@type": "Question",
            "name": "How do I apply sysctl changes immediately without rebooting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply execute 'sudo sysctl -p /etc/sysctl.conf'. The Linux kernel immediately updates all in-memory parameters across active networking stacks without interrupting existing connections."
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
      <span>Linux sysctl Tuning Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">Linux sysctl Network Tuning: 10 Kernel Settings for High-Traffic Servers (2026)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Kernel &amp; Networking</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Default Linux kernel parameters are calibrated for general-purpose workloads, balancing modest RAM usage against desktop responsiveness. When deploying high-concurrency web servers, API gateways, or database nodes handling 10,000+ simultaneous connections, these conservative defaults result in silent packet drops, SYN floods, socket exhaustion, and sluggish response latencies.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          By tuning kernel parameters in <code>/etc/sysctl.conf</code>, you can expand TCP connection backlogs, prevent SYN drops, enable Google's cutting-edge BBR congestion control, and maximize network socket reuse. In this guide, we provide a production-tested configuration template and visual monitoring techniques via <a href="../system-monitor.html">SSH Desktop System Monitor</a>.
        </p>
      </div>

      <h2>1. The Production-Ready /etc/sysctl.conf Template</h2>
      <p>
        Open <code>/etc/sysctl.conf</code> (or create <code>/etc/sysctl.d/99-performance.conf</code>) and apply the following tuned values:
      </p>

      <pre><code># 1. Increase maximum queue length of established sockets waiting to be accepted:
net.core.somaxconn = 65535

# 2. Increase maximum number of incoming TCP SYN packets queued:
net.ipv4.tcp_max_syn_backlog = 65535

# 3. Increase maximum number of packets queued on the input network interface:
net.core.netdev_max_backlog = 65535

# 4. Expand ephemeral port range for high-volume outbound reverse proxy connections:
net.ipv4.ip_local_port_range = 10240 65535

# 5. Fast socket recycling: Reuse TIME_WAIT sockets for new connections:
net.ipv4.tcp_tw_reuse = 1

# 6. Decrease socket FIN timeout from 60s to 15s to reclaim dead sockets rapidly:
net.ipv4.tcp_fin_timeout = 15

# 7. Enable Google BBR TCP Congestion Control (Superior throughput and low latency):
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr

# 8. Increase system-wide file descriptor limit:
fs.file-max = 2097152

# 9. Increase TCP read and write memory buffers (min, default, max in bytes):
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216

# 10. Protect against TCP SYN flood attacks:
net.ipv4.tcp_syncookies = 1</code></pre>

      <h2>2. Applying Changes Without Server Reboot</h2>
      <pre><code># Reload sysctl settings from file immediately:
sudo sysctl -p /etc/sysctl.conf

# Verify that BBR is active:
sysctl net.ipv4.tcp_congestion_control
# Output must display: net.ipv4.tcp_congestion_control = bbr</code></pre>

      <h2>3. Tuning User-Level File Descriptor Limits (limits.conf)</h2>
      <p>
        In Linux, network sockets are treated as file descriptors. If your systemd service or Nginx user exceeds its <code>ulimit</code>, requests fail with <em>"Too many open files"</em> regardless of your kernel settings:
      </p>

      <pre><code># Edit /etc/security/limits.conf
* soft nofile 65535
* hard nofile 65535
root soft nofile 65535
root hard nofile 65535</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Monitor Network Throughput &amp; Sockets Visually</h3>
        <p>
          Validate your kernel tuning in real time. SSH Desktop includes a comprehensive <a href="../system-monitor.html" style="color: #58a6ff; font-weight: 600;">System Performance Monitor</a> and <a href="../network-port-auditor.html" style="color: #58a6ff; font-weight: 600;">Network Port Auditor</a>. Graph active socket connections, track packet transfers, and audit server health without terminal scripts.
        </p>
        <a href="../system-monitor.html" class="cta-btn">Explore Visual System Monitor &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>What is net.core.somaxconn and why should I increase it?</h4>
        <p>
          <code>somaxconn</code> defines the maximum queue length for completely established TCP sockets waiting to be accepted by an application like Nginx or Redis. The default value (128 or 4096) is easily exhausted during traffic surges, causing new incoming connections to be dropped. Increasing <code>somaxconn</code> to 65535 accommodates massive connection spikes.
        </p>
      </div>
      <div class="faq-item">
        <h4>What is Google BBR and why is it better than Cubic?</h4>
        <p>
          BBR (Bottleneck Bandwidth and Round-trip propagation time) is a modern congestion control algorithm developed by Google. Unlike legacy loss-based algorithms like Cubic that slash throughput upon packet loss, BBR models the actual pipe bottleneck and latency, delivering 2x to 10x higher bandwidth and lower latency over lossy networks.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I apply sysctl changes immediately without rebooting?</h4>
        <p>
          Simply execute <code>sudo sysctl -p /etc/sysctl.conf</code>. The Linux kernel immediately updates all in-memory parameters across active networking stacks without interrupting existing connections.
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
// ARTICLE 45: NGINX SECURITY HEADERS HARDENING GUIDE
// =========================================================================
const article45Html = `<!DOCTYPE html>
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
  <title>Nginx Security Headers: The Ultimate Production Checklist (2026 Guide)</title>
  <meta name="title" content="Nginx Security Headers: The Ultimate Production Checklist (2026 Guide)">
  <meta name="description" content="Achieve an A+ rating on SecurityHeaders.com. Configure HSTS, CSP, X-Frame-Options, Referrer-Policy, and Permissions-Policy in Nginx.">
  <meta name="keywords" content="nginx security headers checklist, add_header Content-Security-Policy nginx, strict-transport-security nginx, harden nginx web server, visual ssl manager">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="Nginx Security Headers: Production Checklist (2026)">
  <meta property="og:description" content="Harden your web application against clickjacking, MIME sniffing, and cross-site scripting (XSS) with modern HTTP response headers.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Web Security &amp; Hardening">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html">
  <meta name="twitter:title" content="Nginx Security Headers Checklist (2026)">
  <meta name="twitter:description" content="Protect against XSS, clickjacking, and protocol downgrade attacks with this complete Nginx security headers guide.">
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
        "@id": "https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html#article",
        "headline": "Nginx Security Headers: The Ultimate Production Checklist (2026 Guide)",
        "description": "Achieve an A+ rating on SecurityHeaders.com. Configure HSTS, CSP, X-Frame-Options, Referrer-Policy, and Permissions-Policy in Nginx.",
        "url": "https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html",
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
        "articleSection": "Web Security & Hardening",
        "keywords": "nginx security headers, HSTS configuration nginx, Content Security Policy header, X-Frame-Options DENY, harden nginx server"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html#breadcrumb",
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
            "name": "Nginx Security Headers Guide",
            "item": "https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does 'add_header' in a location block overwrite parent server headers in Nginx?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Nginx architecture, if a location block declares ANY add_header directive, it does NOT inherit headers defined in the enclosing server or http block; it completely clears and replaces them. To prevent this, either put all common security headers in a snippet file and include it inside every location block, or only define add_header at the location level."
            }
          },
          {
            "@type": "Question",
            "name": "What is the purpose of the 'always' flag in add_header?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By default, Nginx only sends custom headers for successful 2xx and 3xx HTTP response codes. Adding the 'always' parameter ensures the security headers are attached to error pages (such as 404 Not Found, 403 Forbidden, and 500 Server Error) as well."
            }
          },
          {
            "@type": "Question",
            "name": "What does server_tokens off do in Nginx?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Setting 'server_tokens off;' instructs Nginx to suppress version numbers in default error pages and in the 'Server: nginx' HTTP response header, preventing attackers from fingerprinting outdated software with known CVE vulnerabilities."
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
      <span>Nginx Security Headers Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">Nginx Security Headers: The Ultimate Production Checklist (2026 Guide)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Web Security</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Deploying an SSL certificate via Let's Encrypt encrypts data in transit, but HTTPS alone does not protect your visitors from Cross-Site Scripting (XSS), clickjacking, MIME-type confusion attacks, or man-in-the-middle SSL stripping. Securing your web application requires sending standardized <strong>HTTP Security Headers</strong> with every response.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          By creating a reusable security headers snippet in <code>/etc/nginx/snippets/security-headers.conf</code>, you can harden every website on your server to earn an <strong>A+ Grade on SecurityHeaders.com</strong> and Qualys SSL Labs. In this guide, we review HSTS, CSP, X-Frame-Options, and visual SSL inspection via <a href="../ssl-certificate-manager.html">SSH Desktop SSL Manager</a>.
        </p>
      </div>

      <h2>1. The Complete Production Security Headers Snippet</h2>
      <p>
        Create a centralized snippet file at <code>/etc/nginx/snippets/security-headers.conf</code>:
      </p>

      <pre><code># 1. HTTP Strict Transport Security (HSTS): Enforce HTTPS for 1 year including subdomains
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# 2. Prevent Clickjacking: Disallow embedding this site inside iframes
add_header X-Frame-Options "DENY" always;

# 3. Prevent MIME Sniffing: Force browser to honor declared Content-Type
add_header X-Content-Type-Options "nosniff" always;

# 4. Control Referrer Information: Send full URL on same-origin, domain-only on cross-origin
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# 5. Restrict Browser Features: Disable access to microphone, camera, and geolocation
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;

# 6. Content Security Policy (CSP): Mitigate XSS and unauthorized script injection
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';" always;

# 7. Hide Nginx Version from headers and error pages:
server_tokens off;</code></pre>

      <h2>2. Including the Snippet in Your Virtual Hosts</h2>
      <p>
        Include your snippet inside the <code>server</code> block of your website configuration (e.g. <code>/etc/nginx/sites-available/default</code>):
      </p>

      <pre><code>server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Include centralized security headers:
    include /etc/nginx/snippets/security-headers.conf;

    location / {
        try_files $uri $uri/ =404;
    }
}</code></pre>

      <div class="callout-box warning">
        <h4>Watch Out for add_header Scope Inheritance</h4>
        <p>
          In Nginx, if a <code>location</code> block defines its own <code>add_header</code> directive, it will NOT inherit headers from the parent <code>server</code> block! Always place <code>include /etc/nginx/snippets/security-headers.conf;</code> inside location blocks if custom headers are defined there.
        </p>
      </div>

      <h2>3. Verifying Your Security Headers</h2>
      <pre><code># Test Nginx syntax and reload:
sudo nginx -t &amp;&amp; sudo systemctl reload nginx

# Inspect response headers with curl:
curl -I https://example.com</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Inspect SSL &amp; Virtual Host Headers Visually</h3>
        <p>
          Skip manual curl tests. SSH Desktop features an integrated <a href="../ssl-certificate-manager.html" style="color: #58a6ff; font-weight: 600;">SSL Certificate Manager</a> and <a href="../reverse-proxy-browser.html" style="color: #58a6ff; font-weight: 600;">Reverse Proxy Browser</a>. Audit certificate expiry dates, check HTTP headers, and validate reverse proxy health across your fleet.
        </p>
        <a href="../ssl-certificate-manager.html" class="cta-btn">Explore Visual SSL Manager &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>Why does 'add_header' in a location block overwrite parent server headers in Nginx?</h4>
        <p>
          In Nginx architecture, if a location block declares ANY add_header directive, it does NOT inherit headers defined in the enclosing server or http block; it completely clears and replaces them. To prevent this, either put all common security headers in a snippet file and include it inside every location block, or only define add_header at the location level.
        </p>
      </div>
      <div class="faq-item">
        <h4>What is the purpose of the 'always' flag in add_header?</h4>
        <p>
          By default, Nginx only sends custom headers for successful 2xx and 3xx HTTP response codes. Adding the <code>always</code> parameter ensures the security headers are attached to error pages (such as 404 Not Found, 403 Forbidden, and 500 Server Error) as well.
        </p>
      </div>
      <div class="faq-item">
        <h4>What does server_tokens off do in Nginx?</h4>
        <p>
          Setting <code>server_tokens off;</code> instructs Nginx to suppress version numbers in default error pages and in the <code>Server: nginx</code> HTTP response header, preventing attackers from fingerprinting outdated software with known CVE vulnerabilities.
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
// ARTICLE 46: HOW TO FIX 502 BAD GATEWAY IN NGINX
// =========================================================================
const article46Html = `<!DOCTYPE html>
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
  <title>How to Fix 502 Bad Gateway &amp; 504 Gateway Timeout in Nginx (2026 Guide)</title>
  <meta name="title" content="How to Fix 502 Bad Gateway &amp; 504 Gateway Timeout in Nginx (2026 Guide)">
  <meta name="description" content="Step-by-step diagnostic guide to resolving Nginx 502 Bad Gateway and 504 Gateway Timeout errors. Inspect upstream sockets, fix permissions, and view logs visually.">
  <meta name="keywords" content="how to fix 502 bad gateway nginx, nginx 504 gateway timeout fix, upstream prematurely closed connection, troubleshoot 502 error linux, visual log analysis">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Fix 502 Bad Gateway in Nginx (2026 Guide)">
  <meta property="og:description" content="Diagnose and eliminate Nginx 502 and 504 errors. Troubleshoot crashed PHP-FPM, Node.js, and Python backend daemons.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Web Servers &amp; Troubleshooting">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html">
  <meta name="twitter:title" content="Fix 502 Bad Gateway in Nginx (2026)">
  <meta name="twitter:description" content="Step-by-step troubleshooting playbook for Nginx 502 and 504 errors on Linux web servers.">
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
        "@id": "https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html#article",
        "headline": "How to Fix 502 Bad Gateway & 504 Gateway Timeout in Nginx (2026 Guide)",
        "description": "Step-by-step diagnostic guide to resolving Nginx 502 Bad Gateway and 504 Gateway Timeout errors. Inspect upstream sockets, fix permissions, and view logs visually.",
        "url": "https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html",
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
        "articleSection": "Web Servers & Troubleshooting",
        "keywords": "fix 502 bad gateway nginx, 504 gateway timeout, connect to upstream failed, php-fpm unix socket permission denied, visual log analysis"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html#breadcrumb",
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
            "name": "Fix 502 Bad Gateway Guide",
            "item": "https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between 502 Bad Gateway and 504 Gateway Timeout?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 502 Bad Gateway indicates that Nginx attempted to connect to the upstream backend (such as Node.js or PHP-FPM) and received an immediate invalid response, connection refused, or connection reset (the backend service is crashed, stopped, or not listening). A 504 Gateway Timeout means Nginx connected successfully, but the upstream application took longer to respond than the configured 'proxy_read_timeout' (the backend is alive but frozen or bogged down by slow queries)."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check Nginx error logs in real time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Execute 'sudo tail -f /var/log/nginx/error.log' in your terminal or use SSH Desktop's visual Log Streamer. Look for lines containing 'connect() failed (111: Connection refused)' or 'upstream prematurely closed connection'."
            }
          },
          {
            "@type": "Question",
            "name": "How do I increase the gateway timeout limit in Nginx?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Inside your location or http block, increase timeout limits: 'proxy_connect_timeout 300s;', 'proxy_send_timeout 300s;', and 'proxy_read_timeout 300s;'. Then reload Nginx with 'sudo systemctl reload nginx'."
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
      <span>Fix 502 Bad Gateway Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Fix 502 Bad Gateway &amp; 504 Gateway Timeout in Nginx (2026 Guide)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Troubleshooting</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Few HTTP error codes cause more developer panic than <strong>502 Bad Gateway</strong>. Unlike a 500 Internal Server Error, which originates within your application code, a 502 error means that Nginx—acting as your edge reverse proxy—attempted to communicate with your backend application (Node.js, Python Gunicorn, PHP-FPM, or Docker container) and received an invalid response, connection refusal, or abrupt socket closure.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Diagnosing a 502 error requires checking three points of failure: (1) Is the upstream application process alive? (2) Is Nginx pointing to the exact listening port or UNIX socket? (3) Are there file permission mismatches on socket files? In this guide, we provide a step-by-step diagnostic playbook and visual troubleshooting via <a href="../log-analysis-grep.html">SSH Desktop Log Analysis</a> and <a href="../linux-process-manager.html">Process Manager</a>.
        </p>
      </div>

      <h2>1. The 4 Most Common Causes of 502 Bad Gateway</h2>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Error Log Message</th>
            <th>Underlying Root Cause</th>
            <th>Resolution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>connect() failed (111: Connection refused)</code></td>
            <td>Upstream service (Node.js/Python/Go) is stopped or crashed</td>
            <td>Restart backend service with <code>systemctl</code> or <code>pm2</code></td>
          </tr>
          <tr>
            <td><code>connect() failed (13: Permission denied)</code></td>
            <td>Nginx (www-data) cannot read the PHP-FPM/Gunicorn UNIX socket file</td>
            <td>Fix socket ownership with <code>chown www-data:www-data</code></td>
          </tr>
          <tr>
            <td><code>upstream prematurely closed connection</code></td>
            <td>Backend process ran out of memory (OOM) or crashed mid-request</td>
            <td>Inspect app crash logs and increase worker memory limits</td>
          </tr>
          <tr>
            <td><code>no live upstreams while connecting to upstream</code></td>
            <td>All servers in an <code>upstream</code> load balancing pool failed health checks</td>
            <td>Verify backend server addresses and network firewalls</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Step-by-Step Diagnostic Playbook</h2>

      <h3>Step 1: Inspect the Nginx Error Log</h3>
      <p>
        The error log reveals the exact reason Nginx failed to reach the upstream:
      </p>
      <pre><code>sudo tail -n 50 /var/log/nginx/error.log</code></pre>

      <h3>Step 2: Check If the Upstream Application is Alive</h3>
      <pre><code># Check systemd service status:
sudo systemctl status myapp.service
# Or if using PHP-FPM:
sudo systemctl status php8.3-fpm

# Verify the application is listening on the expected port (e.g. 3000):
sudo ss -tulpn | grep 3000</code></pre>

      <h3>Step 3: Test Upstream Directly on Localhost</h3>
      <p>
        Bypass Nginx completely by issuing a direct curl request to your application:
      </p>
      <pre><code>curl -I http://127.0.0.1:3000/
# If curl outputs "Connection refused", your app is not running!</code></pre>

      <h3>Step 4: Fixing UNIX Socket Permission Denied</h3>
      <p>
        If your Nginx error log reports <em>"Permission denied"</em> while reading a UNIX domain socket (e.g. <code>/run/php/php8.3-fpm.sock</code>):
      </p>
      <pre><code># Check socket owner:
ls -l /run/php/php8.3-fpm.sock

# Ensure Nginx user (www-data or nginx) owns the socket:
sudo chown www-data:www-data /run/php/php8.3-fpm.sock
sudo chmod 660 /run/php/php8.3-fpm.sock</code></pre>

      <h2>3. How to Fix 504 Gateway Timeout</h2>
      <p>
        A 504 error means your backend accepted the connection, but took longer than Nginx's 60-second default timeout to return HTTP response headers (e.g., long-running database reports, slow API imports).
      </p>

      <pre><code>location / {
    proxy_pass http://127.0.0.1:3000;
    
    # Increase proxy timeout thresholds to 300 seconds:
    proxy_connect_timeout 300s;
    proxy_send_timeout 300s;
    proxy_read_timeout 300s;
}</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Diagnose Nginx &amp; App Errors in Real Time</h3>
        <p>
          Troubleshoot 502 errors in seconds. SSH Desktop combines an interactive <a href="../log-analysis-grep.html" style="color: #58a6ff; font-weight: 600;">Log Analysis Tool</a> with a live <a href="../linux-process-manager.html" style="color: #58a6ff; font-weight: 600;">Process Manager</a>. Stream error logs, monitor dead workers, and restart crashed services with 1 click.
        </p>
        <a href="../log-analysis-grep.html" class="cta-btn">Explore Visual Log Analysis &rarr;</a>
      </div>

      <h2>4. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>What is the difference between 502 Bad Gateway and 504 Gateway Timeout?</h4>
        <p>
          A 502 Bad Gateway indicates that Nginx attempted to connect to the upstream backend (such as Node.js or PHP-FPM) and received an immediate invalid response, connection refused, or connection reset (the backend service is crashed, stopped, or not listening). A 504 Gateway Timeout means Nginx connected successfully, but the upstream application took longer to respond than the configured <code>proxy_read_timeout</code> (the backend is alive but frozen or bogged down by slow queries).
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I check Nginx error logs in real time?</h4>
        <p>
          Execute <code>sudo tail -f /var/log/nginx/error.log</code> in your terminal or use SSH Desktop's visual Log Streamer. Look for lines containing <code>connect() failed (111: Connection refused)</code> or <code>upstream prematurely closed connection</code>.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I increase the gateway timeout limit in Nginx?</h4>
        <p>
          Inside your location or http block, increase timeout limits: <code>proxy_connect_timeout 300s;</code>, <code>proxy_send_timeout 300s;</code>, and <code>proxy_read_timeout 300s;</code>. Then reload Nginx with <code>sudo systemctl reload nginx</code>.
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
const article44Path = path.join(BLOG_DIR, 'linux-sysctl-tuning-high-traffic-guide.html');
const article45Path = path.join(BLOG_DIR, 'nginx-security-headers-hardening-guide.html');
const article46Path = path.join(BLOG_DIR, 'how-to-fix-502-bad-gateway-nginx-guide.html');

fs.writeFileSync(article44Path, article44Html, 'utf8');
console.log('Created: ' + article44Path + ' (' + article44Html.length + ' bytes)');

fs.writeFileSync(article45Path, article45Html, 'utf8');
console.log('Created: ' + article45Path + ' (' + article45Html.length + ' bytes)');

fs.writeFileSync(article46Path, article46Html, 'utf8');
console.log('Created: ' + article46Path + ' (' + article46Html.length + ' bytes)');
