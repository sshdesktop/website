const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-automate-database-backups-over-ssh.html',
    title: 'How to Automate Database Backups Over SSH (Postgres & MySQL 2026)',
    metaTitle: 'How to Automate Database Backups Over SSH (Postgres & MySQL 2026)',
    metaDesc: 'Automate offsite database backups over SSH for PostgreSQL and MySQL. Learn streamed pipe dumps, gzip compression, retention pruning, and visual backup recovery.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-automate-database-backups-over-ssh.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Database & Backups',
    readTime: '11 min read',
    h1: 'How to Automate Database Backups Over SSH (PostgreSQL & MySQL 2026 Guide)',
    faqs: [
      {
        q: 'Can I stream a database backup directly across SSH without saving it to local disk first?',
        a: 'Yes! Pipelining pg_dump or mysqldump directly through gzip and ssh streams raw database blocks over the network without consuming temporary storage on the database host. For example: pg_dump dbname | gzip -c | ssh backup_user@offsite "cat > backup.sql.gz".'
      },
      {
        q: 'How do I handle database locks during production MySQL backups?',
        a: 'Always pass --single-transaction --quick to mysqldump on InnoDB tables. This creates a point-in-time snapshot within an ACID transaction without acquiring table read locks or freezing production web write traffic.'
      },
      {
        q: 'How do I automatically prune older database backup archives?',
        a: 'Incorporate a find command into your backup script on the storage target: find /backups -type f -name "*.sql.gz" -mtime +30 -delete. This automatically removes archives older than 30 days.'
      }
    ],
    content: `
      <p class="blog-lead">
        Relying on local database dumps stored on the same physical server or VPS instance is a catastrophic disaster recovery risk. If a disk corrupts, a filesystem panics, or a cloud provider region suffers an outage, both your production database and your backups vanish. Learn how to stream compressed PostgreSQL and MySQL dumps securely over SSH directly to offsite storage in 2026.
      </p>

      <h2>The Power of Streamed SSH Pipe Backups</h2>
      <p>
        Traditional backup scripts write a 50GB <code>.sql</code> file to <code>/tmp</code>, compress it, copy it over SFTP, and then delete the local file. This requires at least 100GB of available free disk space on the database server.
      </p>
      <p>
        By utilizing standard UNIX pipelines, output from the database dump utility is compressed on the fly and written directly through an encrypted SSH tunnel into offsite disk storage, requiring <strong>0MB of temporary local storage</strong>.
      </p>

      <h2>Automating PostgreSQL Backups Over SSH</h2>
      <p>
        Create a backup user and configure an automated backup script at <code>/usr/local/bin/backup-postgres-offsite.sh</code>:
      </p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail

DB_NAME="production_db"
DB_USER="postgres"
BACKUP_HOST="backup-server.internal"
BACKUP_USER="backup_agent"
BACKUP_DIR="/mnt/secure-backups/postgres"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
FILENAME="pg_\${DB_NAME}_\${TIMESTAMP}.sql.gz"

echo "Starting streamed PostgreSQL backup at $(date)..."

# Stream dump -> gzip -> SSH -> remote file
pg_dump -U "\${DB_USER}" -d "\${DB_NAME}" -F c -Z 6 \\
  | ssh -i /root/.ssh/id_backup -o StrictHostKeyChecking=accept-new "\${BACKUP_USER}@\${BACKUP_HOST}" \\
  "cat > \${BACKUP_DIR}/\${FILENAME}"

# Prune backups older than 30 days on remote host
ssh -i /root/.ssh/id_backup "\${BACKUP_USER}@\${BACKUP_HOST}" \\
  "find \${BACKUP_DIR} -name 'pg_*.sql.gz' -mtime +30 -delete"

echo "Backup complete: \${FILENAME}"</code></pre>

      <h2>Automating MySQL &amp; MariaDB Backups Over SSH</h2>
      <p>
        For MySQL/MariaDB with InnoDB storage engines, ensure non-locking transactions:
      </p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail

DB_NAME="ecommerce_db"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

mysqldump --single-transaction --quick --routines --triggers "\${DB_NAME}" \\
  | gzip -9 \\
  | ssh -i /root/.ssh/id_backup backup_agent@backup-server.internal \\
  "cat > /mnt/secure-backups/mysql/mysql_\${DB_NAME}_\${TIMESTAMP}.sql.gz"</code></pre>

      <h2>Scheduling Backups with Systemd Timer (or Cron)</h2>
      <p>Schedule the backup to execute nightly at 02:00 AM via crontab:</p>
      <pre><code># Open root crontab
sudo crontab -e

# Run every night at 2:00 AM
0 2 * * * /usr/local/bin/backup-postgres-offsite.sh >> /var/log/db_backup.log 2>&1</code></pre>

      <h2>Manage Disaster Recovery Visually with SSH Desktop</h2>
      <p>
        Verifying backups and restoring corrupted databases during an incident requires speed. <strong>SSH Desktop</strong> makes database operations effortless:
      </p>
      <ul>
        <li><strong>One-Click Database GUI:</strong> Connect to remote PostgreSQL and MySQL instances over automated SSH tunnels without exposing port 5432 or 3306.</li>
        <li><strong>Visual Backup Verification:</strong> Inspect remote dump archives, check file sizes, and verify checksums in a native file browser.</li>
        <li><strong>Crontab Visualizer:</strong> Schedule, pause, and inspect cron jobs across entire server fleets without syntax errors.</li>
      </ul>
      <p>
        Discover our <a href="../backup-disaster-recovery.html">Backup &amp; Disaster Recovery</a> and <a href="../database-gui-ssh-tunnel.html">Database GUI &amp; SSH Tunnel</a>.
      </p>
    `
  },
  {
    filename: 'how-to-monitor-linux-disk-io-bottlenecks.html',
    title: 'How to Monitor Linux Disk I/O Bottlenecks (iostat, iotop & pidstat): 2026',
    metaTitle: 'How to Monitor Linux Disk I/O Bottlenecks (iostat, iotop & pidstat): 2026',
    metaDesc: 'Diagnose high iowait and Linux disk storage bottlenecks using iostat, iotop, and pidstat. Learn %util, await latency analysis, and visual disk telemetry.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-monitor-linux-disk-io-bottlenecks.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Performance & Storage',
    readTime: '10 min read',
    h1: 'How to Monitor Linux Disk I/O Bottlenecks: Complete 2026 Guide',
    faqs: [
      {
        q: 'What is high iowait in top, and why does it cause high server load?',
        a: 'iowait (%wa) indicates the percentage of time CPU cores were idle while waiting for disk I/O requests to complete. When storage cannot keep up with write/read demand, threads block in uninterruptible sleep (D state), skyrocketing system load averages even when CPU usage is low.'
      },
      {
        q: 'What does %util mean in iostat -xz 1?',
        a: '%util represents the percentage of elapsed time during which I/O requests were issued to the device (bandwidth utilization). If %util reaches 95%–100% on spinning disks or standard SSDs, the disk has reached saturation.'
      },
      {
        q: 'How do I find which exact process is thrashing my disk right now?',
        a: 'Run sudo iotop -oPa. The -o flag filters only processes actively doing I/O, -P shows threads as processes, and -a accumulates total read/write bytes over time to pinpoint the biggest offender.'
      }
    ],
    content: `
      <p class="blog-lead">
        A server with 16 CPU cores and 64GB of RAM can still freeze completely if a single process saturates storage I/O throughput. When disks become overwhelmed, processes enter an uninterruptible sleep state (<code>D state</code>), causing load averages to skyrocket while CPU utilization appears almost idle. Learn how to pinpoint disk I/O bottlenecks in 2026 using <code>iostat</code>, <code>iotop</code>, and <code>pidstat</code>.
      </p>

      <h2>Recognizing Disk I/O Starvation</h2>
      <p>
        In <code>top</code> or <code>htop</code>, inspect the CPU state line. If <code>%wa</code> (iowait) is consistently above <strong>10% to 15%</strong> and load average is significantly higher than the number of CPU cores, your server is bottlenecked by disk throughput or IOPS limits.
      </p>

      <h2>Step 1: Deep Disk Latency Analysis with iostat</h2>
      <p>Install the <code>sysstat</code> suite containing <code>iostat</code>:</p>
      <pre><code>sudo apt install -y sysstat   # Ubuntu / Debian
sudo dnf install -y sysstat   # RHEL / Fedora</code></pre>
      <p>Run extended I/O metrics refreshed every 1 second:</p>
      <pre><code>iostat -xz 1</code></pre>
      <p>Key metrics to evaluate:</p>
      <ul>
        <li><strong>r/s and w/s:</strong> Read and write operations per second (IOPS). Compare this with your cloud drive's provisioned IOPS limit.</li>
        <li><strong>rMB/s and wMB/s:</strong> Megabytes read and written per second (throughput).</li>
        <li><strong>await:</strong> Average time (in milliseconds) for I/O requests to be served. NVMe SSDs should be &lt;1.0ms; enterprise SATA SSDs &lt;5.0ms. If <code>await</code> exceeds 50ms, requests are queuing severely.</li>
        <li><strong>%util:</strong> Percentage of device saturation. Consistent 100% means the device is completely overwhelmed.</li>
      </ul>

      <h2>Step 2: Pinpoint the Offending Process with iotop</h2>
      <p>
        Once you know the disk is saturated, identify which specific process or thread is driving the traffic:
      </p>
      <pre><code># Install iotop
sudo apt install -y iotop

# Run iotop showing only active I/O consumers in accumulated mode
sudo iotop -oPa</code></pre>
      <p>
        Inspect the <code>DISK READ</code> and <code>DISK WRITE</code> columns. You can immediately spot whether PostgreSQL, Docker, Elasticsearch, or a rogue cron job is hammering the storage layer.
      </p>

      <h2>Step 3: Process-Level I/O Tracking with pidstat</h2>
      <p>To inspect I/O rates per process ID over a 2-second interval:</p>
      <pre><code>pidstat -d 2 5</code></pre>
      <p>
        This reveals <code>kB_rd/s</code>, <code>kB_wr/s</code>, and <code>kB_ccwr/s</code> (cancelled write bytes), highlighting processes that constantly rewrite temporary data.
      </p>

      <h2>Monitor Disk Performance Visually with SSH Desktop</h2>
      <p>
        Diagnosing storage latency across 20+ cloud instances in raw terminal outputs is stressful. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Visual Disk I/O Gauges:</strong> Real-time read/write throughput and IOPS graphs across all mounted disks.</li>
        <li><strong>Top I/O Process Monitor:</strong> Identify disk-hogging processes with kill/pause controls directly in the GUI.</li>
        <li><strong>Disk Space &amp; Inode Analyzer:</strong> View filesystem consumption before disks reach 100% capacity.</li>
      </ul>
      <p>
        Check out our <a href="../system-monitor.html">System Monitor</a> and <a href="../linux-disk-manager.html">Linux Disk Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-zero-downtime-deployments-nginx-guide.html',
    title: 'How to Set Up Zero-Downtime Deployments with Nginx: 2026 Guide',
    metaTitle: 'How to Set Up Zero-Downtime Deployments with Nginx: 2026 Guide',
    metaDesc: 'Deploy web apps with zero downtime using Nginx upstream switching, Blue-Green deployments, graceful reloads, and visual multi-server orchestration.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-zero-downtime-deployments-nginx-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'CI/CD & Deployments',
    readTime: '11 min read',
    h1: 'How to Set Up Zero-Downtime Deployments with Nginx: 2026 Guide',
    faqs: [
      {
        q: 'Does nginx -s reload drop existing active user requests or WebSocket connections?',
        a: 'No. Nginx graceful reload spawns new worker processes with the updated configuration while allowing existing worker processes to gracefully finish serving in-flight requests and open sockets before terminating. Zero packets are dropped.'
      },
      {
        q: 'What is Blue-Green deployment on a single Linux server?',
        a: 'Blue-Green runs two parallel application instances (e.g., Blue on port 3001, Green on port 3002). Nginx routes live traffic to Blue. During deployment, the new code is deployed to Green and tested. Once healthy, Nginx upstream is flipped to Green with a zero-downtime reload.'
      },
      {
        q: 'How do I automatically roll back if a new release crashes?',
        a: 'Incorporate health check validation into your deployment script. If curl -f http://127.0.0.1:3002/health fails, the script aborts immediately without reloading Nginx, leaving the existing stable Blue instance serving traffic.'
      }
    ],
    content: `
      <p class="blog-lead">
        Restarting application daemons during a deployment drops active user sessions, interrupts file uploads, and produces ugly 502 Bad Gateway errors. In 2026, continuous deployment demands zero-downtime releases. Learn how to implement Blue-Green upstream switching with Nginx and graceful process management on Linux servers.
      </p>

      <h2>The Architecture of Single-Server Blue-Green Deployments</h2>
      <p>
        In a single-server Blue-Green pattern, two isolated application instances run simultaneously:
      </p>
      <ul>
        <li><strong>Blue Pool:</strong> Port <code>3001</code> (Currently Live)</li>
        <li><strong>Green Pool:</strong> Port <code>3002</code> (Idle / Staging for next release)</li>
      </ul>
      <p>
        Nginx acts as the gatekeeper. Deployments update the idle instance, run smoke tests against its local port, and swap the Nginx upstream pointer with a graceful reload.
      </p>

      <h2>Step 1: Configure Nginx Upstream Include File</h2>
      <p>Instead of hardcoding ports in your main virtual host, separate the upstream into a dedicated file:</p>
      <pre><code># /etc/nginx/conf.d/upstream_app.conf
upstream app_backend {
    server 127.0.0.1:3001; # Pointing to Blue
}</code></pre>
      <p>Reference this upstream in your virtual host configuration:</p>
      <pre><code>server {
    server_name api.example.com;

    location / {
        proxy_pass http://app_backend;
        include proxy_params;
        proxy_connect_timeout 5s;
        proxy_read_timeout 60s;
    }
}</code></pre>

      <h2>Step 2: Automated Blue-Green Deployment Script</h2>
      <p>Create an automated deployment bash script at <code>/usr/local/bin/deploy-app.sh</code>:</p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail

UPSTREAM_CONF="/etc/nginx/conf.d/upstream_app.conf"

# Determine current active port
CURRENT_PORT=$(grep -oE ':[0-9]+' "$UPSTREAM_CONF" | tr -d ':')

if [ "$CURRENT_PORT" -eq 3001 ]; then
    TARGET_PORT=3002
    TARGET_NAME="green"
else
    TARGET_PORT=3001
    TARGET_NAME="blue"
fi

echo "Deploying new release to \$TARGET_NAME (Port \$TARGET_PORT)..."

# 1. Pull latest code & install dependencies in target folder
cd "/var/www/app_\$TARGET_NAME"
git pull origin main
npm ci --production

# 2. Restart target systemd service
sudo systemctl restart "app@\$TARGET_NAME"

# 3. Health Check: verify target instance is healthy
echo "Running health check on http://127.0.0.1:\$TARGET_PORT/health..."
sleep 2
for i in {1..10}; do
    if curl -s -f "http://127.0.0.1:\$TARGET_PORT/health" > /dev/null; then
        echo "Instance \$TARGET_NAME passed health check!"
        break
    fi
    if [ "$i" -eq 10 ]; then
        echo "Health check failed! Aborting deployment. Live traffic remains on \$CURRENT_PORT."
        exit 1
    fi
    sleep 1
done

# 4. Swap Nginx upstream
echo "upstream app_backend { server 127.0.0.1:\$TARGET_PORT; }" | sudo tee "$UPSTREAM_CONF"

# 5. Reload Nginx gracefully (zero dropped packets)
sudo nginx -t &amp;&amp; sudo systemctl reload nginx

echo "Zero-downtime deployment complete! Live traffic now routing to \$TARGET_NAME."</code></pre>

      <h2>Step 3: Verify Zero-Downtime with Continuous Traffic</h2>
      <p>Benchmark during a live deployment using <code>wrk</code> or <code>hey</code>:</p>
      <pre><code># Send 50 concurrent requests continuously for 30 seconds
hey -z 30s -c 50 https://api.example.com/api/v1/ping</code></pre>
      <p>
        Execute the deployment script while the load test is running. You will observe <strong>100% 200 OK responses</strong> with zero dropped connections or 502 errors.
      </p>

      <h2>Orchestrate Multi-Server Deployments with SSH Desktop</h2>
      <p>
        Deploying across staging, production, and secondary edge nodes manually can introduce human error. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Multi-Server Automation:</strong> Run deployment scripts across cluster nodes simultaneously with real-time streaming output.</li>
        <li><strong>Nginx Upstream Manager:</strong> Visually switch live upstreams and monitor backend health status.</li>
        <li><strong>Systemd Cluster Supervisor:</strong> Verify Blue/Green service instances without switching terminal windows.</li>
      </ul>
      <p>
        Explore our <a href="../multi-server-automation.html">Multi-Server Automation</a> and <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a>.
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
