/**
 * Generator for Batch 8 SEO Cornerstone Blog Articles:
 * 1. blog/how-to-manage-linux-disk-space-lvm-guide.html
 * 2. blog/how-to-analyze-linux-logs-grep-journalctl-guide.html
 * 3. blog/how-to-audit-linux-open-ports-network-security-guide.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 26: HOW TO MANAGE LINUX DISK SPACE & LVM GUIDE
// =========================================================================
const article26Html = `<!DOCTYPE html>
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
  <title>How to Check &amp; Manage Linux Disk Space: df, du, ncdu &amp; LVM (2026 Guide)</title>
  <meta name="title" content="How to Check &amp; Manage Linux Disk Space: df, du, ncdu &amp; LVM (2026 Guide)">
  <meta name="description" content="Complete guide to managing Linux storage. Find large files with du and ncdu, resolve deleted file space locks with lsof, extend LVM volumes, and manage disks visually.">
  <meta name="keywords" content="linux check disk space, df -h du ncdu tutorial, extend lvm disk linux, find large files linux, lsof deleted file disk space, visual disk manager linux">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Check &amp; Manage Linux Disk Space: Complete Guide">
  <meta property="og:description" content="Step-by-step tutorial: diagnose full disks with df, find massive directories with ncdu, free up unlinked file locks, and manage LVM volumes.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Storage &amp; Sysadmin">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html">
  <meta name="twitter:title" content="How to Manage Linux Disk Space &amp; LVM (2026)">
  <meta name="twitter:description" content="Master Linux storage management: df, du, ncdu, LVM resizing, and visual disk inspection.">
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
            "name": "Manage Linux Disk Space & LVM",
            "item": "https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html#article",
        "headline": "How to Check & Manage Linux Disk Space: df, du, ncdu & LVM (2026 Guide)",
        "description": "Comprehensive tutorial on Linux disk storage management. Learn how to locate massive files with du/ncdu, recover space locked by running processes, extend LVM volumes, and monitor disks visually.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does df -h show 100% full even after I deleted large log files?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When a file is deleted while an active process (like Nginx, Docker, or MySQL) still holds an open file descriptor to it, the Linux kernel unlinks the filename but does not release the disk blocks until the process closes the file. Run 'sudo lsof +L1' to identify processes holding open deleted files, then restart the offending service to reclaim the disk space."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fastest command to find the largest files on Linux?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'sudo find / -xdev -type f -size +100M -exec ls -lh {} \\; | awk '{ print $5 \": \" $9 }' | sort -rh'. This finds all files larger than 100 MB on the current filesystem without traversing mounted virtual filesystems."
            }
          },
          {
            "@type": "Question",
            "name": "What is ncdu and why is it better than du?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'ncdu' (NCurses Disk Usage) scans a directory tree and presents an interactive visual terminal navigator. You can browse directories sorted by size, inspect subfolders, and delete bloated directories directly with the 'd' key."
            }
          },
          {
            "@type": "Question",
            "name": "How do I extend an LVM volume after resizing a virtual disk in cloud hosting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After increasing the disk size in your cloud console, run: (1) 'sudo growpart /dev/sda 1' to expand the partition, (2) 'sudo pvresize /dev/sda1' to resize the physical volume, (3) 'sudo lvextend -r -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv' to extend the logical volume and resize the filesystem in a single step."
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
        <li aria-current="page">Manage Linux Disk Space &amp; LVM</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Storage &amp; System Administration</span>
        <h1 class="article-title">How to Check &amp; Manage Linux Disk Space: df, du, ncdu &amp; LVM (2026 Guide)</h1>
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
          "No space left on device." When this error appears in production, consequences are immediate: databases reject write queries, Docker containers crash, SSH authentication fails because temporary session files cannot be created, and cron jobs terminate.
        </p>
        <p>
          Diagnosing disk exhaustion quickly, understanding why deleted files sometimes fail to free up storage, and safely expanding disk partitions using <strong>LVM (Logical Volume Manager)</strong> are essential skills.
        </p>
        <p>
          In this guide, you will learn the command-line workflow to analyze disk usage, find runaway log files, resolve unlinked process locks, expand LVM partitions, and inspect storage visually.
        </p>

        <h2>1. High-Level Disk Space Check: df -h</h2>
        <p>
          The <code>df</code> command reports filesystem disk space usage across all mounted storage devices:
        </p>
        <div class="code-block">
          <code>$ df -h<br>
Filesystem                         Size  Used Avail Use% Mounted on<br>
/dev/mapper/ubuntu--vg-ubuntu--lv   48G   45G  1.2G  98% /<br>
/dev/sda2                          1.9G  210M  1.6G  12% /boot</code>
        </div>
        <p>
          Also check <strong>Inodes</strong> (file count limits) with <code>df -i</code>. If a server has millions of tiny session files, disk space might show 50% free while Inodes are at 100%, causing the exact same "No space left on device" error!
        </p>

        <h2>2. Pinpoint Large Directories with du and ncdu</h2>
        <p>
          Once you know which mount point is full (usually <code>/</code> or <code>/var</code>), track down the offending directories:
        </p>

        <div class="code-block">
          <code># Show the 10 largest folders inside /var:<br>
sudo du -h --max-depth=1 /var | sort -hr | head -n 10</code>
        </div>

        <h3>Interactive Navigation with ncdu:</h3>
        <p>
          <code>ncdu</code> (NCurses Disk Usage) is an indispensable visual terminal tool:
        </p>
        <div class="code-block">
          <code>sudo apt install -y ncdu  # Ubuntu/Debian<br>
sudo dnf install -y ncdu  # RHEL/CentOS<br><br>
sudo ncdu /var</code>
        </div>
        <p>
          Use arrow keys to navigate down into nested folders. Press <code>d</code> to immediately delete useless log archives or temporary build files.
        </p>

        <h2>3. The Deleted File Trap: Recovering Space with lsof</h2>
        <p>
          A common frustration: you run <code>rm access.log</code> on a 20 GB log file, but <code>df -h</code> still shows 98% full!
        </p>
        <p>
          In Linux, if a running service (like Nginx, Apache, or MySQL) still has an open file descriptor pointing to that file, the kernel keeps the disk blocks allocated.
        </p>

        <div class="code-block">
          <code># Find processes holding open unlinked/deleted files:<br>
sudo lsof +L1</code>
        </div>
        <p>
          Output:
        </p>
        <div class="code-block">
          <code>COMMAND   PID USER   FD   TYPE DEVICE   SIZE/OFF NLINK NAME<br>
nginx   14282 root    4w   REG  253,0 21474836480     0 /var/log/nginx/access.log (deleted)</code>
        </div>
        <p>
          Restart the offending process to instantly release the 20 GB:
        </p>
        <div class="code-block">
          <code>sudo systemctl restart nginx</code>
        </div>

        <h2>4. Expanding LVM Disks (Cloud VPS Resizing)</h2>
        <p>
          If your disk is genuinely out of physical space, modern cloud platforms (AWS EBS, DigitalOcean, Hetzner) allow you to increase disk size in the web console with zero downtime.
        </p>
        <p>
          To expand the filesystem in Linux without rebooting:
        </p>

        <div class="code-block">
          <code># 1. Expand partition 1 on /dev/sda:<br>
sudo growpart /dev/sda 1<br><br>
# 2. Resize LVM Physical Volume:<br>
sudo pvresize /dev/sda1<br><br>
# 3. Extend Logical Volume and filesystem in 1 command:<br>
sudo lvextend -r -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv</code>
        </div>
        <p>
          The <code>-r</code> flag automatically resizes ext4 or XFS filesystems on the fly. Verify with <code>df -h</code>!
        </p>

        <h2>Visual Storage Management with SSH Desktop</h2>
        <p>
          Typing complex <code>du</code> sort pipelines and hunting down unlinked file descriptors via terminal can be stressful during disk full emergencies.
        </p>
        <p>
          <a href="../linux-disk-manager.html">SSH Desktop Disk &amp; Storage Manager</a> provides real-time visual control:
        </p>
        <ul>
          <li><strong>Interactive Storage Pie Chart:</strong> Visualize storage consumption across partitions, mount points, and directories.</li>
          <li><strong>1-Click Space Hog Finder:</strong> Instantly displays the top 20 largest files and folders across your filesystem.</li>
          <li><strong>Safe Cleanup Wizard:</strong> Safely clear rotated logs, apt/yum package caches, and Docker prune layers with a single button.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Manage Storage Visually</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Never get trapped by full disks again. Download SSH Desktop — the 100% free GUI client with visual Disk &amp; Storage Manager.
          </p>
          <a href="../linux-disk-manager.html" class="btn btn-primary btn-lg">
            Explore Disk Manager Features &rarr;
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
// ARTICLE 27: HOW TO ANALYZE LINUX LOGS GREP JOURNALCTL GUIDE
// =========================================================================
const article27Html = `<!DOCTYPE html>
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
  <title>How to Search &amp; Analyze Linux Logs: grep, journalctl &amp; zgrep (2026 Guide)</title>
  <meta name="title" content="How to Search &amp; Analyze Linux Logs: grep, journalctl &amp; zgrep (2026 Guide)">
  <meta name="description" content="Master Linux log analysis. Learn grep regex patterns, search compressed logs with zgrep, filter systemd logs with journalctl, and inspect logs visually in real time.">
  <meta name="keywords" content="grep command examples linux, how to search logs linux, journalctl filter logs, zgrep compressed logs, grep context before after, visual linux log viewer">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Search &amp; Analyze Linux Logs: grep, journalctl &amp; zgrep">
  <meta property="og:description" content="Complete log analysis guide: find errors fast in /var/log with grep regex, zgrep rotated archives, and journalctl filters.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="DevOps &amp; Troubleshooting">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html">
  <meta name="twitter:title" content="How to Search &amp; Analyze Linux Logs (2026 Guide)">
  <meta name="twitter:description" content="Master Linux log analysis: grep cheatsheet, context flags, zgrep for rotated logs, and journalctl.">
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
            "name": "Search & Analyze Linux Logs",
            "item": "https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html#article",
        "headline": "How to Search & Analyze Linux Logs: grep, journalctl & zgrep (2026 Guide)",
        "description": "Comprehensive tutorial on Linux log analysis. Master grep regex patterns, context flags (-B, -A, -C), searching compressed .gz logs with zgrep, and filtering systemd journalctl output.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I search for lines before and after a grep match?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the context flags: '-B 5' displays 5 lines Before the match, '-A 5' displays 5 lines After the match, and '-C 5' displays 5 lines of Context both before and after."
            }
          },
          {
            "@type": "Question",
            "name": "How do I search inside rotated .gz log files without decompressing them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use 'zgrep' (or 'zcat file.gz | grep pattern'). For example: 'zgrep -i \"error\" /var/log/nginx/error.log.*.gz' searches compressed gzip archives on the fly without extracting them to disk."
            }
          },
          {
            "@type": "Question",
            "name": "Where are the primary system log files on Ubuntu and Debian?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key logs reside in '/var/log/': '/var/log/auth.log' (SSH authentication), '/var/log/syslog' (general system events), '/var/log/nginx/' or '/var/log/apache2/' (web server traffic), and '/var/log/fail2ban.log' (firewall bans). Modern system services are queried via 'journalctl'."
            }
          },
          {
            "@type": "Question",
            "name": "How do I search for multiple keywords simultaneously with grep?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use extended regular expressions with '-E': 'grep -Ei \"error|fatal|exception\" app.log'. The '-i' flag ensures case-insensitive matching."
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
        <li aria-current="page">Search &amp; Analyze Linux Logs</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">DevOps &amp; Troubleshooting</span>
        <h1 class="article-title">How to Search &amp; Analyze Linux Logs: grep, journalctl &amp; zgrep (2026 Guide)</h1>
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
          When an application crashes in production or a suspicious IP address probes your server, the exact cause is always recorded in one place: <strong>system and application logs</strong>.
        </p>
        <p>
          However, production servers generate millions of log lines per day across <code>/var/log/</code> and <code>journald</code>. Sifting through gigabytes of text files to find the proverbial needle in the haystack requires knowing the right tools.
        </p>
        <p>
          In this guide, you will master essential <code>grep</code> flags, search compressed <code>.gz</code> log archives on the fly with <code>zgrep</code>, extract structured time windows with <code>journalctl</code>, and explore visual multi-file log search in SSH Desktop.
        </p>

        <h2>1. The Essential grep Flags Cheatsheet</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Flag</th>
                <th>Meaning</th>
                <th>Example Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>-i</code></td>
                <td>Case-insensitive search</td>
                <td><code>grep -i "error" app.log</code></td>
              </tr>
              <tr>
                <td><code>-r</code> or <code>-R</code></td>
                <td>Recursive search in directories</td>
                <td><code>grep -rn "500" /var/log/nginx/</code></td>
              </tr>
              <tr>
                <td><code>-n</code></td>
                <td>Display line numbers</td>
                <td>Helps locate code lines in source files</td>
              </tr>
              <tr>
                <td><code>-v</code></td>
                <td>Invert match (exclude lines)</td>
                <td><code>grep -v "healthcheck" access.log</code></td>
              </tr>
              <tr>
                <td><code>-E</code></td>
                <td>Extended regular expressions (regex)</td>
                <td><code>grep -E "(404|500|502)" access.log</code></td>
              </tr>
              <tr>
                <td><code>-C &lt;N&gt;</code></td>
                <td>Context: show N lines before &amp; after</td>
                <td><code>grep -C 5 "Exception" app.log</code></td>
              </tr>
              <tr>
                <td><code>-c</code></td>
                <td>Count matching lines instead of printing</td>
                <td><code>grep -c "Failed password" /var/log/auth.log</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>2. Seeing Stack Traces: Context Flags (-B, -A, -C)</h2>
        <p>
          Searching for <code>"NullPointerException"</code> or <code>"Fatal error"</code> often only shows the single error line. To see the full stack trace and the events leading up to the crash, use context flags:
        </p>

        <div class="code-block">
          <code># 5 lines Before and 10 lines After the match:<br>
grep -B 5 -A 10 "Fatal error" /var/log/app/error.log<br><br>
# Or 5 lines of surrounding context on both sides:<br>
grep -C 5 "SQLSTATE" /var/log/mysql/error.log</code>
        </div>

        <h2>3. Searching Rotated .gz Archives with zgrep</h2>
        <p>
          Linux logrotate automatically compresses older log files using gzip (e.g. <code>syslog.2.gz</code>, <code>access.log.4.gz</code>).
        </p>
        <p>
          Never waste time running <code>gunzip</code> to decompress files manually. Use <strong><code>zgrep</code></strong>:
        </p>
        <div class="code-block">
          <code># Search all compressed auth log archives for SSH brute-force attempts:<br>
sudo zgrep -i "failed password" /var/log/auth.log.*.gz<br><br>
# Count failed logins per archive:<br>
sudo zgrep -c "Failed password" /var/log/auth.log.*.gz</code>
        </div>

        <h2>4. Filtering systemd Logs with journalctl</h2>
        <p>
          For modern services managed by systemd, <code>journalctl</code> allows querying by unit, timestamp, and severity level:
        </p>

        <div class="code-block">
          <code># Show logs for Nginx from the last 2 hours:<br>
sudo journalctl -u nginx --since "2 hours ago"<br><br>
# Show logs from a specific date window:<br>
sudo journalctl -u myapp --since "2026-11-15 09:00:00" --until "2026-11-15 12:00:00"<br><br>
# Filter by priority: only Warnings (4) and Errors (3):<br>
sudo journalctl -p warning..err -n 50</code>
        </div>

        <h2>Visual Multi-File Search with SSH Desktop</h2>
        <p>
          Piping terminal commands through <code>grep</code>, <code>awk</code>, and <code>cut</code> to isolate logs across multiple servers can be cumbersome.
        </p>
        <p>
          <a href="../log-analysis-grep.html">SSH Desktop Log Analysis Studio</a> includes a visual grep engine:
        </p>
        <ul>
          <li><strong>Multi-File Regex Search:</strong> Search across hundreds of files in <code>/var/log/</code> simultaneously with instant syntax highlighting and match counts.</li>
          <li><strong>Live Real-Time Streamer:</strong> Tail multiple services concurrently in separate visual panes with color-coded severity tags.</li>
          <li><strong>Export to CSV / JSON:</strong> Export filtered security incident traces with a single click.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Analyze Linux Logs Visually</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Ditch messy terminal pipes. Download SSH Desktop — the 100% free GUI client with visual Log Analysis &amp; Grep Studio.
          </p>
          <a href="../log-analysis-grep.html" class="btn btn-primary btn-lg">
            Explore Log Analysis Features &rarr;
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
// ARTICLE 28: HOW TO AUDIT LINUX OPEN PORTS & NETWORK SECURITY
// =========================================================================
const article28Html = `<!DOCTYPE html>
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
  <title>How to Check Open Ports on Linux: ss, lsof &amp; nmap (2026 Security Guide)</title>
  <meta name="title" content="How to Check Open Ports on Linux: ss, lsof &amp; nmap (2026 Security Guide)">
  <meta name="description" content="Complete guide to auditing open ports on Linux. Master ss -tulpn, lsof -i, and nmap commands, identify listening processes, close unauthorized ports, and monitor network security visually.">
  <meta name="keywords" content="check open ports linux, ss vs netstat linux, lsof -i check port process, find listening ports ubuntu, nmap scan open ports linux, visual network port auditor">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Check Open Ports on Linux: ss, lsof &amp; nmap (2026)">
  <meta property="og:description" content="Step-by-step security guide: inspect active TCP/UDP listening ports with ss, find rogue processes with lsof, and audit security visually.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Security &amp; Networking">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html">
  <meta name="twitter:title" content="How to Check Open Ports on Linux: ss, lsof &amp; nmap">
  <meta name="twitter:description" content="Audit Linux network security: check listening ports with ss, find PIDs with lsof, and monitor open sockets.">
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
            "name": "Audit Linux Open Ports & Network Security",
            "item": "https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html#article",
        "headline": "How to Check Open Ports on Linux: ss, lsof & nmap (2026 Security Guide)",
        "description": "Master Linux open port auditing. Learn ss -tulpn syntax, find which process is listening with lsof -i, identify unauthorized listeners, and audit network security visually.",
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
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is ss preferred over netstat on modern Linux?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'netstat' is part of the obsolete net-tools package deprecated since 2011. It reads from '/proc/net/tcp', which is slow on busy servers with thousands of sockets. 'ss' (Socket Statistics) is part of the modern iproute2 suite and queries kernel socket data structures directly via Netlink, making it 10x to 100x faster."
            }
          },
          {
            "@type": "Question",
            "name": "What does ss -tulpn stand for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The flags decode to: '-t' (TCP sockets), '-u' (UDP sockets), '-l' (listening sockets only), '-p' (show process name and PID), and '-n' (numeric port numbers instead of resolving service names)."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find out what is running on a specific port like 8080?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'sudo lsof -i :8080' or 'sudo ss -tulpn | grep :8080'. The output displays the exact process name, PID, and user executing the listening daemon."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between 0.0.0.0:PORT and 127.0.0.1:PORT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "'0.0.0.0' binds to all network interfaces, meaning the service can be reached from the public internet (subject to firewall rules). '127.0.0.1' binds strictly to the local loopback interface, meaning only processes running locally on the server can connect."
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
        <li aria-current="page">Audit Linux Open Ports</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Network Security &amp; Auditing</span>
        <h1 class="article-title">How to Check Open Ports on Linux: ss, lsof &amp; nmap (2026 Security Guide)</h1>
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
          In cybersecurity, every open network port is an entry point into your server. If a developer accidentally binds a test database to <code>0.0.0.0:3306</code> or a forgotten Node.js debug server is listening on port <code>9229</code>, your server is vulnerable to remote compromise.
        </p>
        <p>
          Regularly auditing open TCP and UDP listening ports is a foundational practice in server hardening.
        </p>
        <p>
          In this guide, you will learn how to inspect active listening sockets using modern <code>ss</code>, find the exact process ID with <code>lsof</code>, verify public exposure with <code>nmap</code>, and audit network ports visually with SSH Desktop.
        </p>

        <h2>1. The Gold Standard: ss -tulpn</h2>
        <p>
          Legacy tutorials frequently instruct users to run <code>netstat</code>. However, <code>netstat</code> was officially deprecated over a decade ago. The modern, high-speed replacement is <strong><code>ss</code> (Socket Statistics)</strong>:
        </p>

        <div class="code-block">
          <code>sudo ss -tulpn</code>
        </div>

        <h3>Flags Breakdown:</h3>
        <ul>
          <li><strong><code>-t</code>:</strong> Display TCP sockets.</li>
          <li><strong><code>-u</code>:</strong> Display UDP sockets.</li>
          <li><strong><code>-l</code>:</strong> Show <em>listening</em> sockets only (ignores established client connections).</li>
          <li><strong><code>-p</code>:</strong> Show the process name and PID.</li>
          <li><strong><code>-n</code>:</strong> Show numeric port numbers (e.g. <code>22</code> instead of translating to <code>ssh</code>).</li>
        </ul>

        <h3>Reading the Output:</h3>
        <div class="code-block">
          <code>Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:PortProcess<br>
tcp   LISTEN 0      128          0.0.0.0:22         0.0.0.0:*    users:(("sshd",pid=912,fd=3))<br>
tcp   LISTEN 0      511        127.0.0.1:3306       0.0.0.0:*    users:(("mysqld",pid=1420,fd=21))<br>
tcp   LISTEN 0      511          0.0.0.0:80         0.0.0.0:*    users:(("nginx",pid=1102,fd=6))</code>
        </div>

        <div class="callout-box tip">
          <strong>Crucial Security Audit Tip:</strong> Look at the <strong>Local Address</strong> column:
          <ul>
            <li><code>127.0.0.1:3306</code>: Safe! Bound to loopback; only accessible from inside the server.</li>
            <li><code>0.0.0.0:80</code> or <code>:::80</code>: Accessible from the outside world on all network interfaces.</li>
          </ul>
        </div>

        <h2>2. Find Which Process Owns a Specific Port: lsof -i</h2>
        <p>
          If you encounter an "Address already in use" error when starting a service, find the blocking PID with <code>lsof</code>:
        </p>
        <div class="code-block">
          <code>sudo lsof -i :8080</code>
        </div>
        <p>
          Output:
        </p>
        <div class="code-block">
          <code>COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME<br>
node    19284 ubuntu   23u  IPv4  89210      0t0  TCP *:8080 (LISTEN)</code>
        </div>
        <p>
          Kill the rogue or hung process cleanly:
        </p>
        <div class="code-block">
          <code>sudo kill -15 19284  # Graceful SIGTERM<br>
# Or force kill if unresponsive:<br>
sudo kill -9 19284</code>
        </div>

        <h2>3. External Audit with nmap (View What the Internet Sees)</h2>
        <p>
          Just because a port is listening on <code>0.0.0.0</code> does not mean it is reachable from the public internet. External cloud security groups (AWS, GCP) and host firewalls (UFW) may be filtering packets.
        </p>
        <p>
          From your <em>local laptop</em>, scan your server's public IP using <code>nmap</code>:
        </p>
        <div class="code-block">
          <code>nmap -sT -p 1-10000 198.51.100.42</code>
        </div>
        <p>
          Look for:
        </p>
        <ul>
          <li><strong><code>open</code>:</strong> Service is accessible to the public internet (ensure only 22, 80, 443 are open!).</li>
          <li><strong><code>filtered</code>:</strong> Packets are dropped by a firewall (secure).</li>
          <li><strong><code>closed</code>:</strong> No service is listening.</li>
        </ul>

        <h2>Visual Network Port Auditing with SSH Desktop</h2>
        <p>
          Parsing long text outputs from <code>ss -tulpn</code> and verifying IP bindings across multiple servers is time-consuming.
        </p>
        <p>
          <a href="../network-port-auditor.html">SSH Desktop Network Port Auditor</a> provides visual socket inspection:
        </p>
        <ul>
          <li><strong>Interactive Port Roster:</strong> View all listening TCP and UDP sockets with clear badges distinguishing Public (<code>0.0.0.0</code>) vs Private (<code>127.0.0.1</code>) bindings.</li>
          <li><strong>1-Click Process Termination:</strong> Kill rogue or dangling background processes holding ports directly from the GUI.</li>
          <li><strong>Security Warning Flags:</strong> Automatically highlights unencrypted database listeners (MySQL, Redis, MongoDB) exposed to public interfaces.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Audit Server Ports Visually</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Find and close unauthorized open ports in seconds. Download SSH Desktop — the 100% free GUI client with visual Network Port Auditor.
          </p>
          <a href="../network-port-auditor.html" class="btn btn-primary btn-lg">
            Explore Network Auditor Features &rarr;
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
const file26Path = path.join(BLOG_DIR, 'how-to-manage-linux-disk-space-lvm-guide.html');
const file27Path = path.join(BLOG_DIR, 'how-to-analyze-linux-logs-grep-journalctl-guide.html');
const file28Path = path.join(BLOG_DIR, 'how-to-audit-linux-open-ports-network-security-guide.html');

fs.writeFileSync(file26Path, article26Html.trim() + '\n', 'utf8');
console.log(`Created: ${file26Path} (${article26Html.length} bytes)`);

fs.writeFileSync(file27Path, article27Html.trim() + '\n', 'utf8');
console.log(`Created: ${file27Path} (${article27Html.length} bytes)`);

fs.writeFileSync(file28Path, article28Html.trim() + '\n', 'utf8');
console.log(`Created: ${file28Path} (${article28Html.length} bytes)`);
