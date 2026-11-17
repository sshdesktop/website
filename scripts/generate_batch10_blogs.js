/**
 * Generator for Batch 10 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-create-swap-file-linux-guide.html
 * 2. blog/how-to-run-docker-compose-over-ssh.html
 * 3. blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 32: HOW TO CREATE & CONFIGURE SWAP SPACE ON LINUX
// =========================================================================
const article32Html = `<!DOCTYPE html>
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
  <title>How to Add &amp; Configure Swap Space on Linux (Ubuntu, Debian, RHEL): 2026 Guide</title>
  <meta name="title" content="How to Add &amp; Configure Swap Space on Linux (Ubuntu, Debian, RHEL): 2026 Guide">
  <meta name="description" content="Step-by-step guide to adding a swap file on Linux. Prevent OOM killer crashes, configure /etc/fstab persistence, optimize swappiness, and monitor RAM visually.">
  <meta name="keywords" content="how to add swap space ubuntu, create swap file linux, swappiness setting linux, increase swap memory linux, fallocate swapfile, visual linux system monitor">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Add &amp; Configure Swap Space on Linux (2026 Guide)">
  <meta property="og:description" content="Prevent Out-of-Memory (OOM) crashes on low-RAM cloud VPS instances. Step-by-step creation, fstab mounting, and swappiness tuning.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="System Memory &amp; Performance">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html">
  <meta name="twitter:title" content="How to Add Swap Space on Linux (2026 Guide)">
  <meta name="twitter:description" content="Complete guide to creating swap files on Ubuntu, Debian, and CentOS. Prevent OOM kills and tune kernel swappiness.">
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
        "@id": "https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html#article",
        "headline": "How to Add & Configure Swap Space on Linux (Ubuntu, Debian, RHEL): 2026 Guide",
        "description": "Step-by-step guide to adding a swap file on Linux. Prevent OOM killer crashes, configure /etc/fstab persistence, optimize swappiness, and monitor RAM visually.",
        "url": "https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html",
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
        "articleSection": "System Memory & Performance",
        "keywords": "how to add swap space linux, create swap file ubuntu, swappiness setting, mkswap fallocate, prevent OOM killer linux"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html#breadcrumb",
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
            "name": "Linux Swap File Guide",
            "item": "https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much swap space should I allocate on a Linux server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As a general rule: for systems with less than 2 GB of RAM, allocate equal or double the RAM (e.g. 2 GB to 4 GB swap). For systems with 4 GB to 16 GB RAM, allocate 4 GB to 8 GB swap. On modern SSD/NVMe cloud servers, swap serves as an emergency buffer against Out-of-Memory (OOM) crashes rather than active working memory."
            }
          },
          {
            "@type": "Question",
            "name": "What is swappiness and what value should I set for a production server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Swappiness is a Linux kernel parameter (0 to 100) determining how aggressively the kernel moves memory pages from physical RAM to swap. The default is 60. For production servers, database hosts, and web servers, lowering swappiness to 10 or 15 keeps active applications in fast physical RAM while reserving swap strictly for sudden spikes."
            }
          },
          {
            "@type": "Question",
            "name": "Why does fallocate fail on some file systems like Btrfs or XFS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some Copy-on-Write (CoW) filesystems like Btrfs or certain XFS setups do not support preallocated swap files via fallocate. On these file systems, create the swap file using dd: 'sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress'."
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
      <span>Linux Swap File Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Add &amp; Configure Swap Space on Linux (Ubuntu, Debian, RHEL): 2026 Guide</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Memory &amp; Performance</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Running a virtual private server (VPS) with 1 GB or 2 GB of RAM is cost-effective, but running memory-intensive processes—such as running <code>npm install</code>, compiling code, or handling unexpected traffic surges—can trigger the Linux kernel's dreaded <strong>OOM (Out-of-Memory) Killer</strong>. When memory is exhausted, the kernel arbitrarily kills vital services like MySQL, Nginx, or Docker.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          Configuring a dedicated <strong>swap file</strong> gives your server an emergency safety net by offloading inactive memory pages to SSD storage. In this guide, you will learn how to verify current swap usage, create a 4 GB swap file, set secure permissions (<code>chmod 600</code>), persist it in <code>/etc/fstab</code> across reboots, and tune kernel <code>swappiness</code> for peak performance.
        </p>
      </div>

      <h2>1. Check Existing Swap Space</h2>
      <p>
        Before creating a new swap file, check if your Linux distribution has pre-allocated swap partitions:
      </p>

      <pre><code># Check active swap devices and files
sudo swapon --show

# Check RAM and Swap allocation in megabytes
free -m</code></pre>

      <p>
        If the output for <code>swapon --show</code> is empty and <code>free -m</code> shows <code>Swap: 0 0 0</code>, your server has zero swap enabled and is exposed to abrupt OOM crashes.
      </p>

      <h2>2. Step-by-Step: Creating a 4 GB Swap File</h2>

      <h3>Step 1: Check Free Disk Space</h3>
      <p>
        Make sure your root filesystem has sufficient space for the new file using <code>df -h</code>.
      </p>

      <h3>Step 2: Allocate the File</h3>
      <p>
        On modern ext4 and XFS filesystems, <code>fallocate</code> creates a contiguous preallocated file instantly:
      </p>
      <pre><code># Allocate a 4GB file named /swapfile
sudo fallocate -l 4G /swapfile

# Fallback using dd if fallocate fails (e.g. on Btrfs):
# sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress</code></pre>

      <h3>Step 3: Secure File Permissions</h3>
      <div class="callout-box warning">
        <h4>Critical Security Requirement</h4>
        <p>
          Swap files contain plaintext memory dumps, which may hold decrypted SSL private keys, database passwords, and user sessions. You must restrict read/write access exclusively to the root user:
        </p>
        <pre><code>sudo chmod 600 /swapfile
ls -lh /swapfile
# Permissions must display: -rw------- 1 root root 4.0G</code></pre>
      </div>

      <h3>Step 4: Format and Enable Swap</h3>
      <pre><code># Mark the file as a Linux swap area
sudo mkswap /swapfile

# Enable the swap file
sudo swapon /swapfile

# Verify it is active
sudo swapon --show</code></pre>

      <h2>3. Persist Swap Across Server Reboots</h2>
      <p>
        Without adding the swap file to your filesystem table, it will be deactivated automatically whenever the server is rebooted:
      </p>

      <pre><code># Backup your current fstab file
sudo cp /etc/fstab /etc/fstab.bak

# Append the swapfile entry
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab</code></pre>

      <h2>4. Tuning Kernel Swappiness for Production Servers</h2>
      <p>
        The kernel <code>swappiness</code> setting (ranging from 0 to 100) dictates how eagerly the OS migrates RAM pages into swap. The default value is 60, which is often too aggressive for low-latency web servers and database instances.
      </p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Swappiness Value</th>
            <th>Recommended Environment</th>
            <th>Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>60 (Default)</strong></td>
            <td>Desktop Workstations</td>
            <td>Balances RAM cache and swap actively</td>
          </tr>
          <tr>
            <td><strong>10 – 15</strong></td>
            <td>Web &amp; API Servers</td>
            <td>Prioritizes fast RAM; uses swap strictly as an OOM emergency cushion</td>
          </tr>
          <tr>
            <td><strong>1</strong></td>
            <td>High-Performance Databases (Postgres/MySQL)</td>
            <td>Avoids disk swap unless RAM is completely exhausted</td>
          </tr>
        </tbody>
      </table>

      <h3>How to Lower Swappiness Permanently</h3>
      <pre><code># Check current swappiness
cat /proc/sys/vm/swappiness

# Change swappiness immediately to 10
sudo sysctl vm.swappiness=10

# Persist across reboots in /etc/sysctl.conf
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.conf</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Monitor RAM, Swap &amp; System Health Visually</h3>
        <p>
          Prevent unexpected server shutdowns. SSH Desktop provides real-time <a href="../system-monitor.html" style="color: #58a6ff; font-weight: 600;">System Performance Monitoring</a>. Track live memory utilization, disk I/O, process CPU spikes, and swap pressure across all your cloud servers simultaneously.
        </p>
        <a href="../system-monitor.html" class="cta-btn">Explore Visual System Monitor &rarr;</a>
      </div>

      <h2>5. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>How much swap space should I allocate on a Linux server?</h4>
        <p>
          As a general rule: for systems with less than 2 GB of RAM, allocate equal or double the RAM (e.g. 2 GB to 4 GB swap). For systems with 4 GB to 16 GB RAM, allocate 4 GB to 8 GB swap. On modern SSD/NVMe cloud servers, swap serves as an emergency buffer against Out-of-Memory (OOM) crashes rather than active working memory.
        </p>
      </div>
      <div class="faq-item">
        <h4>What is swappiness and what value should I set for a production server?</h4>
        <p>
          Swappiness is a Linux kernel parameter (0 to 100) determining how aggressively the kernel moves memory pages from physical RAM to swap. The default is 60. For production servers, database hosts, and web servers, lowering swappiness to 10 or 15 keeps active applications in fast physical RAM while reserving swap strictly for sudden spikes.
        </p>
      </div>
      <div class="faq-item">
        <h4>Why does fallocate fail on some file systems like Btrfs or XFS?</h4>
        <p>
          Some Copy-on-Write (CoW) filesystems like Btrfs or certain XFS setups do not support preallocated swap files via fallocate. On these file systems, create the swap file using dd: <code>sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress</code>.
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
// ARTICLE 33: HOW TO RUN DOCKER COMPOSE OVER SSH
// =========================================================================
const article33Html = `<!DOCTYPE html>
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
  <title>How to Deploy Docker Compose Over SSH (Remote Server Guide 2026)</title>
  <meta name="title" content="How to Deploy Docker Compose Over SSH (Remote Server Guide 2026)">
  <meta name="description" content="Deploy and manage multi-container Docker Compose stacks remotely over SSH. Learn DOCKER_HOST contexts, compose.yaml best practices, and visual container management.">
  <meta name="keywords" content="docker compose over ssh, remote docker compose up, docker context create ssh, deploy docker compose remote server, visual docker gui ssh">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Deploy Docker Compose Over SSH (2026 Guide)">
  <meta property="og:description" content="Control remote Docker daemons securely over SSH without exposing TCP ports. Complete guide to Docker contexts, Compose deployments, and visual management.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Containers &amp; DevOps">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html">
  <meta name="twitter:title" content="Deploy Docker Compose Over SSH (2026 Guide)">
  <meta name="twitter:description" content="Manage remote Docker Compose stacks directly from your local terminal or desktop GUI using pure SSH tunneling.">
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
        "@id": "https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html#article",
        "headline": "How to Deploy Docker Compose Over SSH (Remote Server Guide 2026)",
        "description": "Deploy and manage multi-container Docker Compose stacks remotely over SSH. Learn DOCKER_HOST contexts, compose.yaml best practices, and visual container management.",
        "url": "https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html",
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
        "articleSection": "Containers & DevOps",
        "keywords": "docker compose over ssh, docker context create, remote docker compose up, deploy compose stack ssh"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html#breadcrumb",
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
            "name": "Docker Compose Over SSH Guide",
            "item": "https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Docker communicate over SSH without exposing TCP port 2375?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Docker CLI natively supports SSH endpoints using 'ssh://user@host'. When configured, the local Docker client opens an encrypted SSH tunnel to the remote host and tunnels API socket requests directly into '/var/run/docker.sock'. This keeps your Docker daemon completely hidden from the public internet."
            }
          },
          {
            "@type": "Question",
            "name": "How do I switch back to my local Docker daemon after using a remote SSH context?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply execute 'docker context use default'. You can view all configured contexts anytime with 'docker context ls'."
            }
          },
          {
            "@type": "Question",
            "name": "Can I copy local compose files and environment files automatically over SSH?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While Docker contexts manage daemon commands, build contexts and bind mounts must reside on the target machine. For seamless workflows, engineers use SSH Desktop's visual Docker manager or use rsync/scp to sync project directories before running 'docker compose up -d'."
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
      <span>Docker Compose Over SSH Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Deploy Docker Compose Over SSH (Remote Server Guide 2026)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Containers &amp; DevOps</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        Deploying multi-container production stacks often leads developers into dangerous compromises, such as exposing unencrypted Docker daemon ports (<code>2375/2376</code>) to the public internet or installing bloated, resource-heavy web panels on production servers. Fortunately, modern Docker provides a much cleaner, battle-tested solution: running <strong>Docker Compose natively over SSH</strong>.
      </p>

      <div class="callout-box">
        <h4>Executive Summary</h4>
        <p>
          By leveraging Docker contexts and the <code>ssh://</code> protocol endpoint, you can execute <code>docker compose up -d</code>, stream live container logs, and inspect container health on remote servers directly from your workstation—all encrypted through your existing SSH keys without opening a single new firewall port.
        </p>
      </div>

      <h2>1. Prerequisites &amp; Passwordless SSH Key Setup</h2>
      <p>
        To manage Docker over SSH seamlessly, your local machine must authenticate to the remote server using an SSH key pair (Ed25519 recommended):
      </p>

      <pre><code># Verify you can connect without interactive passwords
ssh -i ~/.ssh/id_ed25519 deploy@203.0.113.50 "docker ps"</code></pre>

      <div class="callout-box tip">
        <h4>User Permission Check</h4>
        <p>
          Ensure the remote SSH user belongs to the <code>docker</code> group so commands can execute without <code>sudo</code>:
        </p>
        <pre><code>sudo usermod -aG docker deploy
# Log out and log back in for group membership to take effect</code></pre>
      </div>

      <h2>2. Method 1: Using Docker Contexts (Recommended)</h2>
      <p>
        Docker Contexts allow you to switch your local CLI target between your laptop, staging server, and production cluster with a single command:
      </p>

      <pre><code># Step 1: Create a remote Docker context over SSH
docker context create prod-server --docker "host=ssh://deploy@203.0.113.50"

# Step 2: Switch your active context to the remote server
docker context use prod-server

# Step 3: Run standard Docker commands (now executing on the remote VPS!)
docker ps
docker compose up -d

# Step 4: Switch back to your local development daemon
docker context use default</code></pre>

      <h2>3. Method 2: One-Off Execution via DOCKER_HOST</h2>
      <p>
        If you want to run a quick deployment script in CI/CD without altering your global context:
      </p>

      <pre><code># Execute Docker Compose directly over an ad-hoc SSH connection
DOCKER_HOST="ssh://deploy@203.0.113.50" docker compose -f compose.prod.yaml up -d --pull always</code></pre>

      <h2>4. Production compose.yaml Best Practices</h2>
      <p>
        When running services in production, configure resilient container restart policies, health checks, and isolated networks:
      </p>

      <pre><code>services:
  web:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      api:
        condition: service_healthy

  api:
    image: myorg/app:latest
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3</code></pre>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Manage Remote Docker Stacks Visually</h3>
        <p>
          Skip manual context switching. SSH Desktop includes a native, lightweight <a href="../docker-web-gui.html" style="color: #58a6ff; font-weight: 600;">Docker Web &amp; Desktop GUI</a>. View running containers, stream real-time logs, inspect environment variables, and manage Compose stacks visually over a pure SSH connection.
        </p>
        <a href="../docker-web-gui.html" class="cta-btn">Explore Visual Docker GUI &rarr;</a>
      </div>

      <h2>5. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>How does Docker communicate over SSH without exposing TCP port 2375?</h4>
        <p>
          The Docker CLI natively supports SSH endpoints using <code>ssh://user@host</code>. When configured, the local Docker client opens an encrypted SSH tunnel to the remote host and tunnels API socket requests directly into <code>/var/run/docker.sock</code>. This keeps your Docker daemon completely hidden from the public internet.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I switch back to my local Docker daemon after using a remote SSH context?</h4>
        <p>
          Simply execute <code>docker context use default</code>. You can view all configured contexts anytime with <code>docker context ls</code>.
        </p>
      </div>
      <div class="faq-item">
        <h4>Can I copy local compose files and environment files automatically over SSH?</h4>
        <p>
          While Docker contexts manage daemon commands, build contexts and bind mounts must reside on the target machine. For seamless workflows, engineers use SSH Desktop's visual Docker manager or use rsync/scp to sync project directories before running <code>docker compose up -d</code>.
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
// ARTICLE 34: HOW TO CONNECT TO REMOTE REDIS & KAFKA OVER SSH TUNNEL
// =========================================================================
const article34Html = `<!DOCTYPE html>
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
  <title>How to Connect to Remote Redis &amp; Kafka Over SSH Tunnel (2026 Guide)</title>
  <meta name="title" content="How to Connect to Remote Redis &amp; Kafka Over SSH Tunnel (2026 Guide)">
  <meta name="description" content="Securely connect redis-cli and message queues to remote servers over SSH port forwarding. Avoid binding 0.0.0.0, bypass firewalls, and manage caches visually.">
  <meta name="keywords" content="ssh tunnel redis, connect remote redis over ssh, redis-cli ssh port forwarding, kafka over ssh tunnel, visual database ssh tunnel">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Connect to Remote Redis &amp; Kafka Over SSH Tunnel (2026)">
  <meta property="og:description" content="Never expose Redis port 6379 to the internet. Learn how to forward ports over SSH, connect redis-cli locally, and manage caches visually.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Database &amp; Messaging Security">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html">
  <meta name="twitter:title" content="Connect to Remote Redis &amp; Kafka Over SSH (2026)">
  <meta name="twitter:description" content="Secure your in-memory databases with encrypted SSH tunnels. Step-by-step local port forwarding tutorial.">
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
        "@id": "https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html#article",
        "headline": "How to Connect to Remote Redis & Kafka Over SSH Tunnel (2026 Guide)",
        "description": "Securely connect redis-cli and message queues to remote servers over SSH port forwarding. Avoid binding 0.0.0.0, bypass firewalls, and manage caches visually.",
        "url": "https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html",
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
        "articleSection": "Database & Messaging Security",
        "keywords": "ssh tunnel redis, connect redis over ssh, redis-cli port forwarding, kafka ssh tunnel, secure database tunnel"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html#breadcrumb",
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
            "name": "Redis SSH Tunnel Guide",
            "item": "https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is exposing Redis port 6379 directly to the internet dangerous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Redis is designed for maximum in-memory throughput, meaning an attacker can attempt hundreds of thousands of brute-force password guesses per second. Furthermore, unauthenticated or misconfigured Redis servers can be exploited via the CONFIG SET command to write SSH keys or cron jobs to the host system. Tunneling through SSH ensures encrypted authentication before traffic ever touches Redis."
            }
          },
          {
            "@type": "Question",
            "name": "What if my local port 6379 is already used by a local Redis container?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Map a different local port in your SSH command, such as 6380: 'ssh -L 6380:127.0.0.1:6379 user@server'. You can then connect locally using 'redis-cli -p 6380'."
            }
          },
          {
            "@type": "Question",
            "name": "How do I configure Kafka to work across an SSH tunnel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kafka requires clients to connect to the hostname specified in 'advertised.listeners'. When tunneling Kafka, ensure your broker's advertised listeners include 'PLAINTEXT://localhost:9092' or use an SSH SOCKS5 proxy so the client can resolve the remote broker's internal IP address."
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
      <span>Redis SSH Tunnel Guide</span>
    </nav>

    <header class="blog-header">
      <h1 class="blog-post-title">How to Connect to Remote Redis &amp; Kafka Over SSH Tunnel (2026 Guide)</h1>
      <div class="blog-meta">
        <span class="blog-meta-tag">Database &amp; Messaging</span>
        <span>By SSH Desktop Engineering Team</span>
        <span>&bull;</span>
        <span>Updated November 2026</span>
        <span>&bull;</span>
        <span>10 min read</span>
      </div>
    </header>

    <article class="blog-content">
      <p>
        In-memory databases like Redis and streaming brokers like Apache Kafka are built for raw throughput, not hardened perimeter defense. Exposing Redis port <code>6379</code> directly to the internet is a well-known security hazard that accounts for thousands of compromised cloud servers each year due to automated brute-force attacks and malware exploits.
      </p>

      <div class="callout-box danger">
        <h4>Never Bind Redis to 0.0.0.0</h4>
        <p>
          Redis was created assuming it operates in a trusted internal private network. In fact, if Redis detects it is bound to all network interfaces without a password, it triggers <em>protected-mode</em> and shuts down remote queries. The correct, enterprise-grade way to query remote Redis is through an <strong>SSH Tunnel</strong>.
        </p>
      </div>

      <h2>1. Creating a Local Port Forwarding Tunnel for Redis</h2>
      <p>
        Using SSH local port forwarding (<code>-L</code>), you can map a local port on your workstation (e.g. <code>6379</code>) to the remote Redis instance listening on <code>127.0.0.1:6379</code>:
      </p>

      <pre><code># Establish background SSH tunnel:
ssh -N -f -L 6379:127.0.0.1:6379 user@remote-server.com

# Breakdown of flags:
# -N: Do not execute a remote command (tunnel only)
# -f: Send SSH to background immediately after authentication
# -L [local_port]:[target_host]:[target_port]</code></pre>

      <h3>Connecting with redis-cli Locally</h3>
      <p>
        Once the tunnel is active, your local <code>redis-cli</code> communicates with the remote server as if it were running right on your workstation:
      </p>
      <pre><code># Ping the remote Redis server through localhost
redis-cli -h 127.0.0.1 -p 6379 ping
# Output: PONG

# If the remote Redis requires authentication:
redis-cli -h 127.0.0.1 -p 6379 -a "YourStrongPassword"

# Query keys:
127.0.0.1:6379> DBSIZE
127.0.0.1:6379> KEYS user:*</code></pre>

      <h2>2. What If Local Port 6379 is Already In Use?</h2>
      <p>
        If you are already running a local Redis container or local daemon, map to an alternate port like <code>6380</code>:
      </p>

      <pre><code># Map local 6380 to remote 6379
ssh -N -f -L 6380:127.0.0.1:6379 user@remote-server.com

# Connect to custom port
redis-cli -h 127.0.0.1 -p 6380</code></pre>

      <h2>3. Connecting Application Clients (Python &amp; Node.js)</h2>
      <p>
        Your backend development environment can point directly to the forwarded localhost port:
      </p>

      <pre><code>// Node.js (ioredis) Example:
import Redis from 'ioredis';

const redis = new Redis({
  host: '127.0.0.1',
  port: 6380, // Tunnel port
  password: process.env.REDIS_PASSWORD,
});

await redis.set('cache_test', 'success');
console.log(await redis.get('cache_test'));</code></pre>

      <h2>4. Tunneling Apache Kafka Over SSH</h2>
      <p>
        Tunneling Kafka over SSH has one critical requirement: Kafka brokers respond to client connections with metadata containing their <code>advertised.listeners</code>.
      </p>

      <div class="callout-box tip">
        <h4>The Kafka Advertised Listeners Catch</h4>
        <p>
          If your remote Kafka broker advertises an internal private IP (such as <code>10.0.0.15:9092</code>), a standard port forward to localhost will fail after the initial handshake because the client will try to connect to the advertised internal IP.
        </p>
        <p>
          <strong>Solution:</strong> Either configure an advertised listener pointing to <code>localhost:9092</code> on the broker, or use a <strong>Dynamic SSH SOCKS5 Proxy</strong>:
        </p>
        <pre><code># Create SOCKS5 proxy on port 1080
ssh -D 1080 -N -f user@remote-server.com</code></pre>
      </div>

      <!-- Visual GUI Banner Callout -->
      <div class="gui-banner">
        <h3>Connect to Databases &amp; Caches with 1 Click</h3>
        <p>
          Stop writing brittle terminal port forwarding scripts. SSH Desktop features a built-in <a href="../database-gui-ssh-tunnel.html" style="color: #58a6ff; font-weight: 600;">Database &amp; Redis GUI</a> with automatic tunnel creation, auto-reconnect, and visual query tooling.
        </p>
        <a href="../database-gui-ssh-tunnel.html" class="cta-btn">Explore Database &amp; Tunnel Manager &rarr;</a>
      </div>

      <h2>5. Frequently Asked Questions</h2>
      <div class="faq-item">
        <h4>Why is exposing Redis port 6379 directly to the internet dangerous?</h4>
        <p>
          Redis is designed for maximum in-memory throughput, meaning an attacker can attempt hundreds of thousands of brute-force password guesses per second. Furthermore, unauthenticated or misconfigured Redis servers can be exploited via the CONFIG SET command to write SSH keys or cron jobs to the host system. Tunneling through SSH ensures encrypted authentication before traffic ever touches Redis.
        </p>
      </div>
      <div class="faq-item">
        <h4>What if my local port 6379 is already used by a local Redis container?</h4>
        <p>
          Map a different local port in your SSH command, such as 6380: <code>ssh -L 6380:127.0.0.1:6379 user@server</code>. You can then connect locally using <code>redis-cli -p 6380</code>.
        </p>
      </div>
      <div class="faq-item">
        <h4>How do I configure Kafka to work across an SSH tunnel?</h4>
        <p>
          Kafka requires clients to connect to the hostname specified in <code>advertised.listeners</code>. When tunneling Kafka, ensure your broker's advertised listeners include <code>PLAINTEXT://localhost:9092</code> or use an SSH SOCKS5 proxy so the client can resolve the remote broker's internal IP address.
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
const article32Path = path.join(BLOG_DIR, 'how-to-create-swap-file-linux-guide.html');
const article33Path = path.join(BLOG_DIR, 'how-to-run-docker-compose-over-ssh.html');
const article34Path = path.join(BLOG_DIR, 'how-to-connect-to-remote-redis-over-ssh-tunnel.html');

fs.writeFileSync(article32Path, article32Html, 'utf8');
console.log('Created: ' + article32Path + ' (' + article32Html.length + ' bytes)');

fs.writeFileSync(article33Path, article33Html, 'utf8');
console.log('Created: ' + article33Path + ' (' + article33Html.length + ' bytes)');

fs.writeFileSync(article34Path, article34Html, 'utf8');
console.log('Created: ' + article34Path + ' (' + article34Html.length + ' bytes)');
