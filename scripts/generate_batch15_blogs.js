const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-unattended-upgrades-ubuntu-guide.html',
    title: 'How to Set Up Automatic Security Updates on Ubuntu & Debian (2026 Guide)',
    metaTitle: 'How to Set Up Automatic Security Updates on Ubuntu & Debian (2026 Guide)',
    metaDesc: 'Configure unattended-upgrades on Ubuntu and Debian servers. Learn automatic security patching, kernel reboot scheduling, email alerts, and visual server package management.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-unattended-upgrades-ubuntu-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Security & Maintenance',
    readTime: '10 min read',
    h1: 'How to Set Up Automatic Security Updates on Ubuntu & Debian: 2026 Guide',
    faqs: [
      {
        q: 'Does unattended-upgrades reboot the server automatically?',
        a: 'By default, unattended-upgrades will NOT reboot your server even if a kernel patch requires it. You can configure Unattended-Upgrade::Automatic-Reboot "true"; and specify an exact time window (e.g., 03:00 AM) in /etc/apt/apt.conf.d/50unattended-upgrades.'
      },
      {
        q: 'Can automatic updates break production web applications?',
        a: 'When configured properly to apply only security patches (Ubuntu-security pocket), the risk is minimal because library APIs remain stable. Never enable automatic upgrades for non-security or third-party repositories without rigorous staging.'
      },
      {
        q: 'How do I test unattended-upgrades without waiting for cron?',
        a: 'Run sudo unattended-upgrades --dry-run --debug. This will evaluate all upgradable packages, verify security origins, and print simulated package installations without making changes.'
      }
    ],
    content: `
      <p class="blog-lead">
        Unpatched security vulnerabilities are the primary entry point for automated exploits targeting Linux servers. In 2026, manual patching routines are simply too slow to counter zero-day disclosures. Learn how to configure <code>unattended-upgrades</code> on Ubuntu and Debian to automatically apply critical security patches, manage kernel reboots during maintenance windows, and inspect upgrade logs visually.
      </p>

      <h2>Why Automatic Security Updates Are Essential</h2>
      <p>
        Linux distributions like Ubuntu and Debian split package repositories into distinct channels: regular software updates and dedicated security channels (e.g., <code>noble-security</code>, <code>bookworm-security</code>). While major package upgrades carry a small risk of configuration changes, security patches specifically address Common Vulnerabilities and Exposures (CVEs) while preserving backwards compatibility.
      </p>
      <div class="blog-tip-box">
        <strong>Best Practice:</strong> Restrict automatic updates strictly to security origins. Do not auto-update development libraries or experimental PPAs on production web or database servers.
      </div>

      <h2>Step 1: Install and Enable unattended-upgrades</h2>
      <p>On modern Ubuntu (22.04, 24.04 LTS) and Debian 11/12 systems, install the package and update helper tools:</p>
      <pre><code># Update package indexes
sudo apt update

# Install unattended-upgrades and update-notifier-common
sudo apt install -y unattended-upgrades update-notifier-common

# Enable the systemd service and daily timer
sudo dpkg-reconfigure -plow unattended-upgrades</code></pre>
      <p>When prompted by the ncurses dialogue, select <strong>Yes</strong> to enable automatic downloads and installations.</p>

      <h2>Step 2: Configure Allowed Package Origins</h2>
      <p>Edit the main configuration file at <code>/etc/apt/apt.conf.d/50unattended-upgrades</code>:</p>
      <pre><code>sudo nano /etc/apt/apt.conf.d/50unattended-upgrades</code></pre>
      <p>Ensure the security origin matching your distribution is uncommented. For Ubuntu 24.04 (Noble), verify:</p>
      <pre><code>Unattended-Upgrade::Allowed-Origins {
    "\${distro_id}:\${distro_codename}-security";
    // "\${distro_id}:\${distro_codename}-updates"; // Keep disabled for strict stability
};</code></pre>

      <h2>Step 3: Configure Automatic Reboots &amp; Maintenance Windows</h2>
      <p>
        When kernel patches or critical shared libraries (like glibc or OpenSSL) are updated, the server requires a reboot to load the patched code into memory. You can automate reboots during low-traffic hours:
      </p>
      <pre><code>// Enable automatic reboot if /var/run/reboot-required exists
Unattended-Upgrade::Automatic-Reboot "true";

// Set reboot time to 03:30 AM server time
Unattended-Upgrade::Automatic-Reboot-Time "03:30";

// Reboot even if users are logged in via active SSH sessions
Unattended-Upgrade::Automatic-Reboot-WithUsers "true";</code></pre>

      <h2>Step 4: Dry-Run and Verify Configuration</h2>
      <p>Always verify your syntax and dry-run the updater before leaving it to run automatically:</p>
      <pre><code># Run in debug mode without applying changes
sudo unattended-upgrades --dry-run --debug</code></pre>
      <p>Inspect the output. If valid, you will see package evaluations and log entries written to <code>/var/log/unattended-upgrades/unattended-upgrades.log</code>.</p>

      <h2>Manage Server Packages Visually with SSH Desktop</h2>
      <p>
        Managing package updates across 10+ cloud VPS instances manually can lead to configuration drift and forgotten reboots. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>One-Click Security Audits:</strong> View upgradable packages across all remote servers in a unified GUI.</li>
        <li><strong>Reboot Alerts:</strong> Instantly see which remote nodes have a pending <code>/var/run/reboot-required</code> flag.</li>
        <li><strong>Log Inspection:</strong> Stream and filter <code>/var/log/unattended-upgrades.log</code> without terminal hunting.</li>
      </ul>
      <p>
        Explore our visual <a href="../linux-package-manager.html">Linux Package Manager</a> and <a href="../system-monitor.html">System Monitor</a> to streamline fleet updates.
      </p>
    `
  },
  {
    filename: 'how-to-setup-nginx-rate-limiting-guide.html',
    title: 'How to Configure Nginx Rate Limiting to Stop DDoS & Brute-Force (2026)',
    metaTitle: 'How to Configure Nginx Rate Limiting to Stop DDoS & Brute-Force (2026)',
    metaDesc: 'Protect your web applications from DDoS and login brute-force attacks with Nginx rate limiting. Master limit_req_zone, burst, nodelay, and visual reverse proxy monitoring.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-nginx-rate-limiting-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Web Security',
    readTime: '10 min read',
    h1: 'How to Configure Nginx Rate Limiting to Stop DDoS & Brute-Force Attacks (2026)',
    faqs: [
      {
        q: 'What is the difference between limit_req and limit_conn in Nginx?',
        a: 'limit_req limits the frequency or rate of HTTP requests per second/minute (leaky bucket algorithm). limit_conn limits the number of concurrent active TCP connections opened by a single client IP address.'
      },
      {
        q: 'What does the nodelay parameter do in Nginx rate limiting?',
        a: 'The burst parameter creates a queue for temporary traffic spikes. By default, queued requests are delayed to match the rate limit. Adding nodelay processes burst requests immediately while still rejecting any requests that exceed the burst ceiling.'
      },
      {
        q: 'How does Nginx rate limiting work behind Cloudflare or a load balancer?',
        a: 'If Nginx sits behind a CDN or proxy, using $binary_remote_addr will rate limit the proxy IP instead of the visitor. Configure real_ip_header CF-Connecting-IP (or X-Forwarded-For) with set_real_ip_from directives so Nginx evaluates true visitor IPs.'
      }
    ],
    content: `
      <p class="blog-lead">
        Web scrapers, credential-stuffing bots, and volumetric HTTP floods can quickly overwhelm application servers and exhaust database connection pools. Nginx provides a powerful, built-in rate-limiting module based on the leaky bucket algorithm. Learn how to configure granular rate limits for APIs, login endpoints, and static assets in 2026.
      </p>

      <h2>How Nginx Rate Limiting Works (Leaky Bucket)</h2>
      <p>
        The leaky bucket algorithm visualizes requests as drops entering a bucket with a fixed drain rate. If incoming requests arrive faster than the drain rate, the bucket fills up. Once the bucket overflows, excess requests are rejected immediately with an <code>HTTP 503 (Service Temporarily Unavailable)</code> or <code>HTTP 429 (Too Many Requests)</code> status code.
      </p>

      <h2>Step 1: Define the Shared Memory Zone in nginx.conf</h2>
      <p>Rate-limiting zones must be declared within the <code>http { ... }</code> context, typically in <code>/etc/nginx/nginx.conf</code>:</p>
      <pre><code>http {
    # Allocate 10MB memory zone 'login_limit' allowing 5 requests per minute per IP
    limit_req_zone $binary_remote_addr zone=login_limit:10m rate=5r/m;

    # Allocate 10MB memory zone 'api_limit' allowing 30 requests per second per IP
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=30r/s;

    # Change default 503 status to standard 429 Too Many Requests
    limit_req_status 429;
}</code></pre>
      <p>
        Using <code>$binary_remote_addr</code> uses only 4 bytes (IPv4) or 16 bytes (IPv6) per client IP, allowing a 10MB zone to store approximately 160,000 distinct IP addresses.
      </p>

      <h2>Step 2: Apply Rate Limits to Specific Location Blocks</h2>
      <p>In your virtual host configuration (e.g., <code>/etc/nginx/sites-available/example.com</code>), apply the defined zones to sensitive URIs:</p>
      <pre><code>server {
    server_name api.example.com;

    # Protect login and authentication routes against brute-force attacks
    location /api/v1/auth/login {
        # Burst of 3 requests allowed, processed without delay
        limit_req zone=login_limit burst=3 nodelay;
        
        proxy_pass http://backend_upstream;
        include proxy_params;
    }

    # General API rate limiting with smooth burst buffering
    location /api/ {
        limit_req zone=api_limit burst=20 nodelay;
        
        proxy_pass http://backend_upstream;
        include proxy_params;
    }
}</code></pre>

      <h2>Step 3: Handling Rate Limits Behind Cloudflare or Proxies</h2>
      <p>
        If your server sits behind Cloudflare, AWS ALB, or a reverse proxy, you must restore the visitor's real IP address before applying rate limits. Otherwise, all visitors will share the proxy IP and trigger premature 429 errors:
      </p>
      <pre><code># In http { ... } or server { ... } block
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
# (Add all Cloudflare IP ranges)

real_ip_header CF-Connecting-IP;</code></pre>

      <h2>Step 4: Test and Monitor Rate Limiting</h2>
      <p>Test your rate-limiting rules using <code>curl</code> in a quick bash loop:</p>
      <pre><code>for i in {1..10}; do curl -s -o /dev/null -w "%{http_code}\\n" https://api.example.com/api/v1/auth/login; done</code></pre>
      <p>You should see initial <code>200</code> responses followed immediately by <code>429</code> responses as the burst ceiling is exceeded.</p>

      <h2>Visual Reverse Proxy Tuning with SSH Desktop</h2>
      <p>
        Tuning rate limits requires balancing bot mitigation with legitimate user spikes. <strong>SSH Desktop</strong> makes managing Nginx simple:
      </p>
      <ul>
        <li><strong>Nginx Visual Editor:</strong> Validate config files and preview rate limit zones before reloading.</li>
        <li><strong>Live Access Log Streamer:</strong> Filter 429 responses in real time to spot banned offending IPs.</li>
        <li><strong>Server Health Telemetry:</strong> Track CPU and open file handles during traffic surges.</li>
      </ul>
      <p>
        Check out our <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a> and <a href="../log-analysis-grep.html">Remote Log Analyzer</a> tools.
      </p>
    `
  },
  {
    filename: 'how-to-fix-no-space-left-on-device-linux-guide.html',
    title: 'How to Fix No Space Left on Device in Linux (Inode & Disk Guide 2026)',
    metaTitle: 'How to Fix No Space Left on Device in Linux (Inode & Disk Guide 2026)',
    metaDesc: 'Fix No Space Left on Device errors in Linux even when df shows free space. Troubleshoot inode exhaustion, unlinked open files, and hidden mount points step-by-step.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-fix-no-space-left-on-device-linux-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Troubleshooting & Storage',
    readTime: '11 min read',
    h1: 'How to Fix No Space Left on Device in Linux (Even When df Shows Free Space)',
    faqs: [
      {
        q: 'Why does Linux say "No space left on device" when df -h shows 20GB available?',
        a: 'The most common cause is inode exhaustion (df -i shows 100% used), meaning the filesystem has run out of file index pointers due to millions of tiny files (sessions, logs, emails). Another frequent cause is deleted open files still held by running processes (lsof | grep deleted).'
      },
      {
        q: 'How do I find which directory has the most inodes in Linux?',
        a: 'Run: find / -xdev -printf \'%h\\n\' | sort | uniq -c | sort -k 1 -n | tail -20. This lists the top 20 directories containing the highest number of individual files.'
      },
      {
        q: 'How do I free disk space held by deleted open files without rebooting?',
        a: 'Identify the processes holding deleted files with: sudo lsof +L1. Find the PID holding the file and either restart the service (e.g., sudo systemctl restart nginx) or truncate the file descriptor via /proc/$PID/fd/$FD.'
      }
    ],
    content: `
      <p class="blog-lead">
        Seeing <code>write error: No space left on device</code> in your terminal or application logs is terrifying—especially when running <code>df -h</code> reports gigabytes of available storage. In Linux filesystems (ext4, XFS), storage capacity is governed by both raw storage blocks and inode metadata structures. Learn the 4 hidden causes of false disk-full errors in 2026 and how to resolve them immediately.
      </p>

      <h2>Cause 1: Inode Exhaustion (df -i Shows 100%)</h2>
      <p>
        Every file, folder, and symlink on a Linux filesystem requires one <strong>inode</strong> (index node) to store metadata (permissions, ownership, block locations). If your disk has 500GB of free space but runs out of free inodes, no new files can be created.
      </p>
      <p>Check inode utilization across all mounted filesystems:</p>
      <pre><code>df -i</code></pre>
      <p>If <code>IUse%</code> is 100%, locate the culprit directory containing millions of tiny files:</p>
      <pre><code># Scan root filesystem and count files per directory
sudo find / -xdev -printf '%h\\n' | sort | uniq -c | sort -k 1 -n | tail -20</code></pre>
      <p>Common culprits include:</p>
      <ul>
        <li><code>/var/lib/php/sessions/</code> — Millions of abandoned PHP session files.</li>
        <li><code>/var/spool/postfix/maildrop/</code> — Millions of undelivered bounce emails.</li>
        <li><code>/tmp/</code> or <code>/var/tmp/</code> — Leftover application cache files.</li>
      </ul>
      <p>Delete runaway files safely without overloading bash argument limits:</p>
      <pre><code># Use find -delete to safely delete millions of files
sudo find /var/lib/php/sessions -type f -name "sess_*" -delete</code></pre>

      <h2>Cause 2: Deleted Files Held by Running Processes (lsof)</h2>
      <p>
        When you run <code>rm /var/log/application.log</code>, Linux marks the directory entry as deleted. However, if a background daemon (like Nginx, Docker, or Node.js) still has an open file descriptor pointing to that file, the disk space is <strong>not reclaimed</strong> until the process closes the file or terminates.
      </p>
      <p>Find unlinked open files holding disk space:</p>
      <pre><code>sudo lsof +L1</code></pre>
      <p>Or filter by deleted files:</p>
      <pre><code>sudo lsof | grep deleted | grep -E '(log|txt|dat)'</code></pre>
      <p>To release the held disk space immediately without rebooting:</p>
      <pre><code># Preferred: Restart the offending service
sudo systemctl restart nginx

# Or truncate the file descriptor directly (replace PID and FD)
: > "/proc/1234/fd/5"</code></pre>

      <h2>Cause 3: Files Hidden Underneath Active Mount Points</h2>
      <p>
        If files were written to <code>/mnt/storage</code> before a secondary disk or NFS volume was mounted on top of it, those original files are hidden from view. <code>df</code> counts the blocks, but <code>du /mnt/storage</code> only sees the mounted drive!
      </p>
      <p>To reveal hidden files beneath active mounts, create a bind mount of root:</p>
      <pre><code># Bind mount the root filesystem to a temporary inspection directory
sudo mkdir /tmp/root-inspect
sudo mount --bind / /tmp/root-inspect

# Check actual usage in the un-mounted directory
sudo du -sh /tmp/root-inspect/mnt/storage

# Unmount when finished
sudo umount /tmp/root-inspect
sudo rmdir /tmp/root-inspect</code></pre>

      <h2>Cause 4: Reserved Superuser Blocks (5% Default on ext4)</h2>
      <p>
        By default, the <code>ext4</code> filesystem reserves 5% of all blocks for the <code>root</code> user to prevent system deadlocks. On a 1TB drive, this reserves 50GB that normal unprivileged services (like PostgreSQL, MySQL, or web servers) cannot use.
      </p>
      <p>Reduce reserved blocks to 1% on large data drives:</p>
      <pre><code># Check reserved block percentage
sudo tune2fs -l /dev/sda1 | grep -i "reserved block"

# Reduce reserved blocks to 1%
sudo tune2fs -m 1 /dev/sda1</code></pre>

      <h2>Prevent Storage Disasters with SSH Desktop</h2>
      <p>
        Storage emergencies usually strike during peak business hours. With <strong>SSH Desktop</strong>, you stay ahead of filesystem exhaustion:
      </p>
      <ul>
        <li><strong>Visual Disk &amp; Inode Dashboard:</strong> View both block storage and inode percentage gauges at a glance.</li>
        <li><strong>Large File Finder:</strong> Identify top 50 disk consumers across remote servers with one click.</li>
        <li><strong>Interactive Process Manager:</strong> Inspect open file descriptors and restart locked services safely.</li>
      </ul>
      <p>
        Explore our visual <a href="../linux-disk-space-manager.html">Linux Disk Space Manager</a> and <a href="../linux-process-manager.html">Linux Process Manager</a> to keep your fleet healthy.
      </p>
    `
  }
];

function generateHtml(article) {
  const faqSchema = article.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }));

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${article.canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": article.canonicalUrl,
          "url": article.canonicalUrl,
          "name": article.metaTitle,
          "description": article.metaDesc
        },
        "headline": article.h1,
        "description": article.metaDesc,
        "inLanguage": "en-US",
        "datePublished": `${article.publishDate}T08:00:00+00:00`,
        "dateModified": `${article.modifiedDate}T08:00:00+00:00`,
        "mainEntityOfPage": article.canonicalUrl,
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Team",
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
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://sshdesktop.com/assets/images/og-image.png",
          "width": 1200,
          "height": 630
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${article.canonicalUrl}#breadcrumb`,
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
            "name": article.title,
            "item": article.canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${article.canonicalUrl}#faq`,
        "mainEntity": faqSchema
      }
    ]
  }, null, 2);

  const faqsHtml = article.faqs.map(faq => `
        <div class="faq-item">
          <h3 class="faq-question">${faq.q}</h3>
          <p class="faq-answer">${faq.a}</p>
        </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.metaTitle}</title>
  <meta name="description" content="${article.metaDesc}">
  <link rel="canonical" href="${article.canonicalUrl}">
  
  <!-- OpenGraph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${article.metaTitle}">
  <meta property="og:description" content="${article.metaDesc}">
  <meta property="og:url" content="${article.canonicalUrl}">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="article:published_time" content="${article.publishDate}T08:00:00+00:00">
  <meta property="article:modified_time" content="${article.modifiedDate}T08:00:00+00:00">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${article.metaTitle}">
  <meta name="twitter:description" content="${article.metaDesc}">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">

  <!-- CSS -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
${schemaJson}
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
  <!-- Navigation Header -->
  <header class="blog-nav-header">
    <div class="blog-nav-container">
      <a href="../index.html" class="blog-nav-logo">
        <img src="../assets/images/favicon.svg" alt="SSH Desktop Logo" width="32" height="32" class="blog-logo-img">
        <span>SSH Desktop</span>
      </a>
      <nav class="blog-nav-links">
        <a href="../features.html">Features</a>
        <a href="../docs.html">Docs</a>
        <a href="index.html" class="active">Blog</a>
        <a href="../download.html" class="blog-btn-cta">Download App</a>
      </nav>
    </div>
  </header>

  <!-- Main Article Body -->
  <main class="blog-article-wrapper">
    <!-- Breadcrumb -->
    <nav class="blog-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li><a href="index.html">Blog</a></li>
        <li aria-current="page">${article.title}</li>
      </ol>
    </nav>

    <article class="blog-post-content">
      <header class="blog-post-header">
        <div class="blog-post-meta">
          <span class="blog-post-tag">${article.category}</span>
          <time datetime="${article.publishDate}">${article.publishDate}</time>
          <span>&bull;</span>
          <span>${article.readTime}</span>
        </div>
        <h1 class="blog-post-h1">${article.h1}</h1>
      </header>

      <div class="blog-post-body">
        ${article.content}

        <h2>Frequently Asked Questions</h2>
        <div class="faq-accordion">
          ${faqsHtml}
        </div>

        <!-- Conversion Card -->
        <div class="blog-cta-box">
          <h3>Manage Linux Servers with Visual Simplicity</h3>
          <p>
            Tired of juggling terminal windows and typing repetitive commands? SSH Desktop combines an ultra-fast terminal with native SFTP, background tunnels, visual reverse proxy management, and real-time system monitoring.
          </p>
          <a href="../download.html" class="blog-cta-button">Download SSH Desktop Free &rarr;</a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="blog-footer">
    <div class="blog-footer-container">
      <p>&copy; 2026 SSH Desktop. All rights reserved. Free, open, and privacy-focused Linux management.</p>
      <div class="blog-footer-links">
        <a href="../privacy.html">Privacy Policy</a>
        <a href="../terms.html">Terms of Service</a>
        <a href="../contact.html">Contact Us</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

articles.forEach(article => {
  const filePath = path.join(BLOG_DIR, article.filename);
  const html = generateHtml(article);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Created: ${filePath} (${html.length} bytes)`);
});
