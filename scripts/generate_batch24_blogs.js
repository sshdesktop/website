const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-borgbackup-over-ssh-guide.html',
    title: 'How to Set Up BorgBackup Over SSH for Linux Servers: 2026 Guide',
    metaTitle: 'How to Set Up BorgBackup Over SSH for Linux Servers: 2026 Guide',
    metaDesc: 'Master deduplicated, encrypted offsite backups on Linux with BorgBackup over SSH. Learn repository initialization, pruning policies, and visual recovery.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-borgbackup-over-ssh-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Backups & Storage',
    readTime: '11 min read',
    h1: 'How to Set Up BorgBackup Over SSH for Linux Servers: 2026 Guide',
    faqs: [
      {
        q: 'Why is BorgBackup superior to standard rsync or tar backups?',
        a: 'BorgBackup performs chunk-level deduplication. If 10 virtual machines or daily database dumps share 95% identical data, Borg only uploads and stores the unique 5% delta. Furthermore, every backup archive is client-side encrypted using Authenticated Encryption (AES-GCM or ChaCha20-Poly1305) before leaving the server.'
      },
      {
        q: 'How does Borg authenticate and stream data across SSH?',
        a: 'Borg connects to the remote storage server using standard OpenSSH keys and executes the borg serve command on the target. All communication, chunk verification, and locking happen securely over the SSH pipe.'
      },
      {
        q: 'How do I automatically prune older backups with Borg?',
        a: 'Use the borg prune command with retention flags: borg prune -v --list --keep-daily=7 --keep-weekly=4 --keep-monthly=6. This preserves a comprehensive historical snapshot timeline while automatically cleaning out redundant older archives.'
      }
    ],
    content: `
      <p class="blog-lead">
        Traditional file backup scripts (like raw <code>tar.gz</code> or un-deduplicated <code>rsync</code>) consume massive amounts of storage space and bandwidth. When backing up daily database dumps or system configurations, 90% of the content is identical to the day before. <strong>BorgBackup (Borg)</strong> provides space-efficient chunk-level deduplication, authenticated client-side encryption, and seamless SSH streaming. Learn how to configure production Borg backups in 2026.
      </p>

      <h2>How Borg Chunk-Level Deduplication Works</h2>
      <p>
        Borg splits files into variable-length chunks using a rolling hash algorithm. It hashes each chunk, compares it against an index of previously stored chunks, and only transmits and writes new, unseen data blocks. As a result, 30 days of daily 50GB backups typically require less than <strong>80GB of total storage space</strong> instead of 1.5TB.
      </p>

      <h2>Step 1: Install BorgBackup on Both Servers</h2>
      <p>Install Borg on your source server and your offsite backup target:</p>
      <pre><code># Ubuntu / Debian
sudo apt update
sudo apt install -y borgbackup

# RHEL / Fedora
sudo dnf install -y epel-release
sudo dnf install -y borgbackup</code></pre>

      <h2>Step 2: Initialize an Encrypted Remote Repository</h2>
      <p>Generate a dedicated SSH keypair for automated backups:</p>
      <pre><code>ssh-keygen -t ed25519 -f ~/.ssh/id_borg -C "borg-backup-agent"
ssh-copy-id -i ~/.ssh/id_borg.pub backup_user@backup-storage.internal</code></pre>
      <p>Initialize the repository with <code>repokey-chacha20-poly1305</code> encryption:</p>
      <pre><code>export BORG_REPO="ssh://backup_user@backup-storage.internal:22/mnt/backups/web-01"
export BORG_PASSPHRASE="SuperSecretLongBackupPassphrase123"

borg init --encryption=repokey-chacha20-poly1305 $BORG_REPO</code></pre>
      <div class="blog-tip-box">
        <strong>Important:</strong> Export and store your Borg key safely: <code>borg key export $BORG_REPO ~/.ssh/borg_web01.key</code>. If you lose this key, your encrypted backups cannot be decrypted!
      </div>

      <h2>Step 3: Create an Automated Backup &amp; Pruning Script</h2>
      <p>Create <code>/usr/local/bin/borg-backup.sh</code>:</p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail

export BORG_REPO="ssh://backup_user@backup-storage.internal:22/mnt/backups/web-01"
export BORG_RSH="ssh -i /root/.ssh/id_borg -o StrictHostKeyChecking=accept-new"
export BORG_PASSPHRASE="SuperSecretLongBackupPassphrase123"

TIMESTAMP=$(date +"%Y-%m-%d_%H%M")

echo "Starting Borg backup at $(date)..."

# Create archive
borg create --stats --progress --compression lz4 \\
    $BORG_REPO::"web01_\${TIMESTAMP}" \\
    /var/www \\
    /etc \\
    /var/backups \\
    --exclude '/var/www/*/cache' \\
    --exclude '/var/www/*/tmp'

# Prune old archives (7 daily, 4 weekly, 6 monthly)
borg prune -v --list --stats \\
    --keep-daily=7 \\
    --keep-weekly=4 \\
    --keep-monthly=6 \\
    $BORG_REPO

# Compact repository segments
borg compact $BORG_REPO

echo "Borg backup completed successfully!"</code></pre>
      <pre><code>sudo chmod 700 /usr/local/bin/borg-backup.sh</code></pre>

      <h2>Step 4: Restoring Files from an Archive</h2>
      <p>To inspect archives and restore individual files:</p>
      <pre><code># List all archives
borg list $BORG_REPO

# Extract a specific directory from an archive
borg extract $BORG_REPO::web01_2026-11-16_0200 var/www/html/wp-config.php</code></pre>

      <h2>Visual Backup Management with SSH Desktop</h2>
      <p>
        Verifying offsite repository health and inspecting deduplication ratios across multiple servers is simple with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Visual Backup Explorer:</strong> Inspect backup archives, verify checksums, and browse files with native SFTP.</li>
        <li><strong>Automated Crontab Scheduler:</strong> Schedule and test backup jobs across all servers without terminal typos.</li>
        <li><strong>Key Vault &amp; Passphrase Storage:</strong> Protect your repository passphrases and SSH keys with OS-level hardware encryption.</li>
      </ul>
      <p>
        Explore our <a href="../backup-disaster-recovery.html">Backup &amp; Disaster Recovery</a> and <a href="../crontab-gui.html">Crontab GUI Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-nginx-http3-quic-guide.html',
    title: 'How to Set Up Nginx HTTP/3 (QUIC) on Ubuntu: 2026 Guide',
    metaTitle: 'How to Set Up Nginx HTTP/3 (QUIC) on Ubuntu: 2026 Guide',
    metaDesc: 'Enable HTTP/3 and QUIC over UDP on Nginx web servers. Learn 0-RTT handshakes, eliminating head-of-line blocking, Alt-Svc headers, and speed testing.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-nginx-http3-quic-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Web Performance',
    readTime: '10 min read',
    h1: 'How to Set Up Nginx HTTP/3 (QUIC) on Ubuntu: 2026 Speed Guide',
    faqs: [
      {
        q: 'What is the main difference between HTTP/2 and HTTP/3?',
        a: 'HTTP/2 multiplexes streams over a single TCP connection; however, if a single packet drops, all streams block until retransmission completes (TCP head-of-line blocking). HTTP/3 replaces TCP with QUIC over UDP, ensuring packet loss in one stream never delays or stalls other streams.'
      },
      {
        q: 'Why does HTTP/3 require opening UDP port 443 in the firewall?',
        a: 'QUIC runs exclusively on top of User Datagram Protocol (UDP). While standard HTTPS uses TCP port 443, HTTP/3 requires UDP port 443 to be opened in your UFW or iptables firewall; otherwise, web browsers fallback to HTTP/2.'
      },
      {
        q: 'How does a browser discover that my website supports HTTP/3?',
        a: 'The browser initially connects via TCP (HTTP/1.1 or HTTP/2). Nginx returns an Alt-Svc response header (e.g., Alt-Svc: h3=":443"; ma=86400). The browser caches this directive and initiates all subsequent requests over QUIC UDP.'
      }
    ],
    content: `
      <p class="blog-lead">
        Even on modern HTTP/2 connections, mobile users switching between Wi-Fi and 5G cellular networks suffer from connection renegotiation and TCP head-of-line blocking. <strong>HTTP/3</strong> revolutionizes web performance by replacing TCP with <strong>QUIC</strong> over UDP, offering zero round-trip connection resumption (0-RTT) and seamless connection migration. Learn how to configure native HTTP/3 on Nginx in 2026.
      </p>

      <h2>The Superpowers of QUIC &amp; HTTP/3</h2>
      <ul>
        <li><strong>No Head-of-Line Blocking:</strong> In HTTP/3, independent requests are independent streams inside UDP. A dropped packet on an image asset never stalls CSS or API responses.</li>
        <li><strong>0-RTT Connection Establishment:</strong> Returning visitors transmit encrypted HTTP requests in the very first UDP datagram.</li>
        <li><strong>Connection Migration:</strong> If a client switches from office Wi-Fi to mobile 5G, the QUIC Connection ID maintains the session without tearing down the TLS handshake.</li>
      </ul>

      <h2>Step 1: Check Nginx QUIC Support</h2>
      <p>Modern Nginx versions (1.25.0+) include native HTTP/3 QUIC support. Verify your installed binary:</p>
      <pre><code>nginx -V 2>&1 | grep -o "\-\-with\-http_v3_module"</code></pre>
      <p>If you see <code>--with-http_v3_module</code>, your Nginx build supports HTTP/3 out of the box.</p>

      <h2>Step 2: Open UDP Port 443 in Your Firewall</h2>
      <p>
        Remember that QUIC runs over <strong>UDP</strong>, not TCP! Open UDP port 443 in UFW:
      </p>
      <pre><code>sudo ufw allow 443/udp
sudo ufw status</code></pre>

      <h2>Step 3: Configure HTTP/3 in Your Nginx Virtual Host</h2>
      <p>Edit your site configuration file (e.g., <code>/etc/nginx/sites-available/example.com</code>):</p>
      <pre><code>server {
    # Standard TCP Listeners for HTTP/1.1 and HTTP/2
    listen 443 ssl;
    listen [::]:443 ssl;

    # QUIC UDP Listeners for HTTP/3
    listen 443 quic reuseport;
    listen [::]:443 quic reuseport;

    server_name example.com www.example.com;

    # SSL Certificates (Mandatory for HTTP/3)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.3; # HTTP/3 strictly requires TLS 1.3

    # Advertise HTTP/3 support to visiting browsers via Alt-Svc header
    add_header Alt-Svc 'h3=":443"; ma=86400';
    add_header X-Protocol $server_protocol always;

    location / {
        proxy_pass http://localhost:3000;
        include proxy_params;
    }
}</code></pre>

      <h2>Step 4: Test Syntax and Reload Nginx</h2>
      <pre><code>sudo nginx -t &amp;&amp; sudo systemctl reload nginx</code></pre>

      <h2>Step 5: Verify HTTP/3 Protocol Negotiation</h2>
      <p>Test your domain using <code>curl</code> with HTTP/3 support:</p>
      <pre><code>curl --http3 -I https://example.com</code></pre>
      <p>Verify that the top response line outputs:</p>
      <pre><code>HTTP/3 200</code></pre>

      <h2>Audit Web Protocols &amp; Ports Visually with SSH Desktop</h2>
      <p>
        Validating UDP port availability, TLS 1.3 ciphers, and reverse proxy headers across your server fleet is simple with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Network Port Auditor:</strong> Verify that UDP port 443 and TCP port 443 are actively listening and open in firewalls.</li>
        <li><strong>Reverse Proxy Browser:</strong> Inspect virtual host configs, test <code>Alt-Svc</code> headers, and reload Nginx with one click.</li>
        <li><strong>Live Latency Telemetry:</strong> Benchmark throughput and round-trip ping times across edge nodes.</li>
      </ul>
      <p>
        Explore our <a href="../network-port-auditor.html">Network Port Auditor</a> and <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a>.
      </p>
    `
  },
  {
    filename: 'how-to-audit-sudo-commands-user-activity-auditd.html',
    title: 'How to Audit Sudo Commands & User Activity with auditd (2026 Guide)',
    metaTitle: 'How to Audit Sudo Commands & User Activity with auditd (2026 Guide)',
    metaDesc: 'Track all sudo commands, file modifications, and user activity on Linux using auditd. Learn ausearch, aureport, rules configuration, and security audits.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-audit-sudo-commands-user-activity-auditd.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Security & Compliance',
    readTime: '11 min read',
    h1: 'How to Audit Sudo Commands & User Activity with auditd: 2026 Guide',
    faqs: [
      {
        q: 'Why is bash history (history command) inadequate for security auditing?',
        a: 'Standard ~/.bash_history can be easily disabled (set +o history), edited, or deleted by any user with write permissions to their home directory. The Linux Audit Framework (auditd) hooks directly into the kernel syscall table, recording tamper-resistant events in /var/log/audit/audit.log before userspace processes can intercept them.'
      },
      {
        q: 'How do I search audit logs for commands executed by a specific user?',
        a: 'Use the ausearch utility: sudo ausearch -ua john_doe -i. The -ua flag filters by original login UID (auid), which persists even if the user ran sudo su or sudo -i to become root.'
      },
      {
        q: 'How does auditd track the true user identity when someone runs sudo su to become root?',
        a: 'auditd tracks the Audit UID (auid), which is immutably set by the Linux PAM login session when the user first authenticates via SSH. Even if the user switches to root (euid=0), the auid remains locked to their original login identity.'
      }
    ],
    content: `
      <p class="blog-lead">
        Meeting modern security compliance standards (SOC 2, ISO 27001, HIPAA, PCI-DSS) requires an immutable, tamper-resistant record of every administrative command executed on production servers. Relying on <code>.bash_history</code> is futile because users can clear or alter it at will. The <strong>Linux Audit Framework (auditd)</strong> operates at the kernel syscall level, capturing every execution, file modification, and privilege escalation. Learn how to configure auditd in 2026.
      </p>

      <h2>The Power of the Linux Audit Daemon</h2>
      <p>
        The kernel audit subsystem logs critical security events directly to <code>/var/log/audit/audit.log</code>. Even if a rogue employee executes <code>sudo su</code> and runs dangerous commands as root, <code>auditd</code> maintains an unbroken cryptographic link to their original login identity (<code>auid</code>).
      </p>

      <h2>Step 1: Install auditd and Utilities</h2>
      <p>Install the auditing daemon on Ubuntu or Debian:</p>
      <pre><code>sudo apt update
sudo apt install -y auditd audispd-plugins

# Enable and start auditd
sudo systemctl enable --now auditd</code></pre>
      <p>On RHEL, Rocky Linux, or Fedora:</p>
      <pre><code>sudo dnf install -y audit
sudo systemctl enable --now auditd</code></pre>

      <h2>Step 2: Configure Audit Rules for Sudo &amp; Commands</h2>
      <p>Create a persistent audit rule file at <code>/etc/audit/rules.d/sudo.rules</code>:</p>
      <pre><code>sudo nano /etc/audit/rules.d/sudo.rules</code></pre>
      <p>Add rules to track sudo execution, user authentication, and critical file tampering:</p>
      <pre><code># Record all executions of sudo and su
-a always,exit -F path=/usr/bin/sudo -F perm=x -k sudo_exec
-a always,exit -F path=/usr/bin/su -F perm=x -k su_exec

# Monitor modifications to sudoers and SSH configurations
-w /etc/sudoers -p wa -k sudoers_changes
-w /etc/sudoers.d/ -p wa -k sudoers_changes
-w /etc/ssh/sshd_config -p wa -k sshd_config_changes

# Monitor user account database changes
-w /etc/passwd -p wa -k identity_changes
-w /etc/shadow -p wa -k identity_changes

# Make audit configuration immutable until next system reboot
-e 2</code></pre>

      <h2>Step 3: Load Audit Rules</h2>
      <p>Load the newly defined rules into the Linux kernel:</p>
      <pre><code>sudo augenrules --load
# Verify active rules
sudo auditctl -l</code></pre>

      <h2>Step 4: Query and Search Audit Logs with ausearch</h2>
      <p>Search for all sudo commands executed today with human-readable formatting:</p>
      <pre><code>sudo ausearch -k sudo_exec --interpret --start today</code></pre>
      <p>Search by specific login user (AUID):</p>
      <pre><code># Find all commands executed by user with UID 1001 (even if they ran sudo)
sudo ausearch -ua 1001 -i</code></pre>

      <h2>Step 5: Generate Compliance Reports with aureport</h2>
      <p>Generate summary executive reports for security audits:</p>
      <pre><code># Summary of all executable commands run
sudo aureport -x --summary

# Summary of authentication events and failed logins
sudo aureport -au --summary</code></pre>

      <h2>Audit Security Visually with SSH Desktop</h2>
      <p>
        Parsing raw audit logs across dozens of production instances can be overwhelming. <strong>SSH Desktop</strong> makes server compliance straightforward:
      </p>
      <ul>
        <li><strong>Visual Security Auditor:</strong> Scan remote servers for open ports, password logins, and compliance gaps with one click.</li>
        <li><strong>Remote Log Analysis Grep:</strong> Search and filter authentication events and auditd outputs across entire server clusters.</li>
        <li><strong>User &amp; Sudo Permissions Manager:</strong> Review user group memberships and verify sudo privilege access without manual terminal inspection.</li>
      </ul>
      <p>
        Explore our <a href="../linux-security-auditor.html">Linux Security Auditor</a> and <a href="../log-analysis-grep.html">Remote Log Analyzer</a>.
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
