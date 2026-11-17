const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-fix-ssh-connection-reset-by-peer.html',
    title: "How to Fix 'Connection Reset by Peer' in SSH: 2026 Troubleshooting Guide",
    metaTitle: "How to Fix 'Connection Reset by Peer' in SSH: 2026 Guide",
    metaDesc: "Fix 'Connection reset by peer' SSH errors. Troubleshoot MTU mismatches, MaxStartups limits, firewall state timeouts, fail2ban drops, and TCP RST packets.",
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-fix-ssh-connection-reset-by-peer.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Troubleshooting & Fixes',
    readTime: '11 min read',
    h1: "How to Fix 'Connection Reset by Peer' in SSH: 2026 Guide",
    faqs: [
      {
        q: "What causes 'Connection reset by peer' during an SSH session?",
        a: "The error indicates that the remote server, intermediate firewall, or NAT router abruptly sent a TCP RST (Reset) packet to tear down the connection. Common causes include SSH MaxStartups concurrency limits, firewall state table timeouts terminating idle sessions, fail2ban banning the client IP mid-session, or MTU packet fragmentation issues."
      },
      {
        q: "How do SSH keepalive directives prevent connection resets?",
        a: "Firewalls and NAT gateways drop idle TCP states after 5 to 15 minutes of silence. Setting ServerAliveInterval 60 in your client configuration sends an encrypted heartbeat packet every 60 seconds, keeping stateful firewall translation tables open indefinitely."
      },
      {
        q: "How does sshd MaxStartups cause random connection drops under heavy load?",
        a: "The sshd daemon limits unauthenticated concurrent connections to prevent DoS attacks (defaulting to 10:30:100). If automated CI/CD runners or multiple developers connect simultaneously, incoming connections exceeding this threshold are immediately rejected with a TCP RST."
      }
    ],
    content: `
      <p class="blog-lead">
        Few errors are as disruptive as <code>kex_exchange_identification: read: Connection reset by peer</code> or having an active shell suddenly terminate with <code>Connection to 198.51.100.24 closed by remote host</code>. Unlike a connection refusal (which occurs before the TCP handshake completes), a connection reset means the TCP handshake succeeded, but either the remote server or an intermediate firewall abruptly aborted the session. Learn how to diagnose and resolve SSH connection resets in 2026.
      </p>

      <h2>The Root Causes of TCP RST in SSH</h2>
      <ul>
        <li><strong>Firewall or NAT State Timeouts:</strong> Cloud security groups, stateful NAT gateways, and home routers silently drop idle connections after a timeout window. When you next type a command, the gateway returns a TCP RST.</li>
        <li><strong>sshd MaxStartups Limits:</strong> When burst connections occur from automated deployment pipelines or multiple team members, OpenSSH drops excess unauthenticated connections.</li>
        <li><strong>Fail2ban or IP Rate Limiting:</strong> A background script or IDE plugin with bad credentials triggers Fail2ban to insert a drop rule mid-session.</li>
        <li><strong>MTU / Packet Fragmentation:</strong> Path MTU Discovery (PMTU) blackholes drop large packets during public key exchange or high-throughput file transfers.</li>
      </ul>

      <h2>Step 1: Diagnose with Verbose Client Logging</h2>
      <p>Run SSH with maximum verbosity (<code>-vvv</code>) to determine the exact handshake step where the connection terminates:</p>
      <pre><code>ssh -vvv user@server.example.com</code></pre>
      <p>
        If the reset occurs immediately after <code>SSH2_MSG_KEXINIT</code>, the issue is typically MTU fragmentation or IP filtering. If it occurs after authentication during shell startup, it is typically a PAM session or shell configuration crash.
      </p>

      <h2>Step 2: Enable TCP Keepalive Heartbeats</h2>
      <p>
        Prevent firewalls and NAT gateways from dropping idle sessions by configuring client keepalives in <code>~/.ssh/config</code>:
      </p>
      <pre><code>Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
    TCPKeepAlive yes
    IPQoS throughput</code></pre>
      <p>
        On the server side, edit <code>/etc/ssh/sshd_config</code> to ensure the daemon also maintains session health:
      </p>
      <pre><code>ClientAliveInterval 60
ClientAliveCountMax 3</code></pre>
      <pre><code>sudo systemctl reload sshd</code></pre>

      <h2>Step 3: Tune MaxStartups and MaxSessions in sshd</h2>
      <p>
        If your server handles frequent CI/CD jobs, SFTP transfers, or multiple concurrent developers, increase the concurrency ceiling in <code>/etc/ssh/sshd_config</code>:
      </p>
      <pre><code># Format: start:rate:full
# Start dropping at 50 connections, drop 30% linearly, drop 100% at 200
MaxStartups 50:30:200

# Increase maximum concurrent open sessions per network connection
MaxSessions 50</code></pre>
      <pre><code>sudo sshd -t &amp;&amp; sudo systemctl reload sshd</code></pre>

      <h2>Step 4: Check Fail2ban and UFW Firewall Rules</h2>
      <p>Verify if your client IP address was banned by Fail2ban:</p>
      <pre><code># Check fail2ban SSH jail status
sudo fail2ban-client status sshd

# Unban your client IP if present
sudo fail2ban-client set sshd unbanip 203.0.113.45</code></pre>
      <p>Whitelist your office or home static IP in <code>/etc/fail2ban/jail.local</code>:</p>
      <pre><code>[DEFAULT]
ignoreip = 127.0.0.1/8 ::1 203.0.113.45/32</code></pre>

      <h2>Step 5: Fix Path MTU (Maximum Transmission Unit) Mismatches</h2>
      <p>
        If resets happen over VPNs, WireGuard tunnels, or PPPoE connections when transmitting large blocks of text, test your connection MTU:
      </p>
      <pre><code># Ping with Don't Fragment (DF) flag set
ping -M do -s 1472 server.example.com</code></pre>
      <p>
        If ping packets drop, reduce your client network interface MTU to <code>1420</code> or <code>1380</code>:
      </p>
      <pre><code># Linux interface MTU adjustment
sudo ip link set dev eth0 mtu 1400</code></pre>

      <h2>Eliminate Connection Drops with SSH Desktop</h2>
      <p>
        Managing connection stability across dozens of remote servers without manually editing config files is effortless with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Automatic Intelligent Keepalive:</strong> Adaptive background heartbeats keep sessions active through aggressive corporate firewalls and VPN switches.</li>
        <li><strong>Auto-Reconnection Vault:</strong> Seamlessly restores terminal buffers and active tabs if a server reboot or network migration occurs.</li>
        <li><strong>Visual Network Diagnostics:</strong> Test latency, MTU health, and port availability before initiating remote connections.</li>
      </ul>
      <p>
        Explore our <a href="../network-port-auditor.html">Network Port Auditor</a> and <a href="../terminal.html">Terminal Features</a>.
      </p>
    `
  },
  {
    filename: 'how-to-configure-lynis-security-auditing-linux.html',
    title: 'How to Configure Lynis for Linux Security Auditing (2026 Guide)',
    metaTitle: 'How to Configure Lynis for Linux Security Auditing (2026 Guide)',
    metaDesc: 'Automate vulnerability scanning and compliance checks with Lynis on Linux. Learn system auditing, Hardening Index scoring, cron reports, and CIS compliance.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-configure-lynis-security-auditing-linux.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Security & Compliance',
    readTime: '11 min read',
    h1: 'How to Configure Lynis for Linux Security Auditing: 2026 Guide',
    faqs: [
      {
        q: 'What is Lynis and what standards does it test against?',
        a: 'Lynis is an open-source battle-tested security auditing engine for Linux, macOS, and BSD systems. It performs non-destructive security scans against CIS Benchmarks, NIST SP 800-53, HIPAA, and PCI-DSS standards, generating a comprehensive Hardening Index score.'
      },
      {
        q: 'Does running a Lynis audit risk breaking running production services?',
        a: 'No. Lynis is strictly passive and non-destructive. It inspects file permissions, kernel sysctl parameters, daemon configs, and installed packages without altering system state, stopping services, or rewriting configuration files.'
      },
      {
        q: 'How can I automate weekly Lynis security scans and email the results?',
        a: 'You can execute lynis audit system --cronjob in a weekly cron file or systemd timer. Lynis suppresses interactive prompts and writes structured results to /var/log/lynis-report.dat and /var/log/lynis.log for automated parsing.'
      }
    ],
    content: `
      <p class="blog-lead">
        Securing Linux servers requires more than just enabling a firewall and applying periodic package updates. Compliance standards (like SOC 2, ISO 27001, and HIPAA) demand verifiable auditing of kernel parameters, file permissions, daemon configurations, and user authentication policies. <strong>Lynis</strong> is an industry-standard open-source auditing tool that evaluates hundreds of system checkpoints and delivers an actionable <strong>Hardening Index</strong>. Learn how to configure Lynis in 2026.
      </p>

      <h2>What Lynis Audits Across Your Server</h2>
      <ul>
        <li><strong>Kernel Hardening:</strong> Inspects sysctl parameters (SYN cookies, ASLR, ICMP redirects, core dumps).</li>
        <li><strong>SSH Daemon Hardening:</strong> Evaluates cryptographic ciphers, root login policies, and session timeouts.</li>
        <li><strong>User Accounts &amp; PAM:</strong> Flags dormant accounts, weak password policies, and excessive sudo permissions.</li>
        <li><strong>Filesystem Permissions:</strong> Detects world-writable files, missing <code>noexec</code> flags on <code>/tmp</code>, and unencrypted partitions.</li>
        <li><strong>Firewall &amp; Network Ports:</strong> Audits active listening ports, iptables/UFW rules, and open RPC services.</li>
      </ul>

      <h2>Step 1: Install Lynis from Official Repositories</h2>
      <p>Install Lynis on Ubuntu or Debian:</p>
      <pre><code># Import Cisofy signing key and repo
sudo apt update
sudo apt install -y apt-transport-https ca-certificates gnupg
curl -fsSL https://packages.cisofy.com/keys/cisofy-software-public.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/cisofy.gpg
echo "deb https://packages.cisofy.com/community/lynis/deb/ stable main" | sudo tee /etc/apt/sources.list.d/cisofy-lynis.list

sudo apt update
sudo apt install -y lynis</code></pre>
      <p>On RHEL, AlmaLinux, or Fedora:</p>
      <pre><code>sudo dnf install -y epel-release
sudo dnf install -y lynis</code></pre>

      <h2>Step 2: Run Your First Full System Security Audit</h2>
      <p>Execute a comprehensive non-destructive audit as root:</p>
      <pre><code>sudo lynis audit system</code></pre>
      <p>
        Lynis tests over 300 checkpoints, categorized from authentication to storage. At the conclusion of the scan, Lynis provides:
      </p>
      <ul>
        <li><strong>Hardening Index (e.g., 68/100):</strong> An overall security posture grade.</li>
        <li><strong>Warnings:</strong> Critical security risks that require immediate mitigation.</li>
        <li><strong>Suggestions:</strong> Actionable hardening recommendations with direct CIS benchmark references.</li>
      </ul>

      <h2>Step 3: Review Warnings and Actionable Suggestions</h2>
      <p>Filter the audit output to display only high-priority suggestions and warnings:</p>
      <pre><code># View high-priority warnings
sudo grep -E "Warning:" /var/log/lynis.log

# View hardening recommendations
sudo grep -E "Suggestion:" /var/log/lynis.log</code></pre>
      <p>
        To examine specific details on any suggestion code (such as <code>SSH-7408</code> for SSH protocol hardening):
      </p>
      <pre><code>lynis show details SSH-7408</code></pre>

      <h2>Step 4: Create a Custom Scan Profile</h2>
      <p>
        Avoid false positives on specialized server roles (e.g., Docker hosts or reverse proxies) by customizing <code>/etc/lynis/custom.prf</code>:
      </p>
      <pre><code>sudo nano /etc/lynis/custom.prf</code></pre>
      <p>Add custom audit preferences and skip unnecessary tests:</p>
      <pre><code># Skip tests not applicable to your cloud environment
skip-test=KRNL-5830
skip-test=USB-1000

# Set compliance profile target
profile-name=Production Web Gateway Hardening</code></pre>

      <h2>Step 5: Automate Weekly Security Audits with Cron</h2>
      <p>Create <code>/etc/cron.weekly/lynis-audit</code> for unattended scans:</p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail

REPORT_DIR="/var/log/lynis"
mkdir -p "$REPORT_DIR"

# Run non-interactive cron scan
/usr/sbin/lynis audit system --cronjob --profile /etc/lynis/custom.prf \
    --report-file "$REPORT_DIR/report-$(date +%F).dat" \
    --log-file "$REPORT_DIR/lynis-$(date +%F).log"

# Keep last 8 weeks of reports
find "$REPORT_DIR" -type f -mtime +60 -delete</code></pre>
      <pre><code>sudo chmod +x /etc/cron.weekly/lynis-audit</code></pre>

      <h2>Continuous Security Visibility with SSH Desktop</h2>
      <p>
        Hardening servers across complex multi-cloud environments is streamlined with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Visual Security Auditor:</strong> Scan remote servers for open ports, missing firewall rules, and password logins with a single click.</li>
        <li><strong>Automated Crontab GUI:</strong> Schedule and verify recurring Lynis scans across entire server fleets without terminal typos.</li>
        <li><strong>Remote Log Analysis:</strong> Search and filter Lynis audit logs and journalctl outputs across clusters.</li>
      </ul>
      <p>
        Explore our <a href="../linux-security-auditor.html">Linux Security Auditor</a> and <a href="../crontab-gui.html">Crontab GUI Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-nginx-websocket-reverse-proxy-guide.html',
    title: 'How to Configure Nginx WebSocket Reverse Proxy (2026 Guide)',
    metaTitle: 'How to Configure Nginx WebSocket Reverse Proxy (2026 Guide)',
    metaDesc: 'Configure Nginx as a reverse proxy for WebSockets (ws:// & wss://). Fix 400 Bad Request errors, configure Upgrade headers, and eliminate 60s timeouts.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-nginx-websocket-reverse-proxy-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Web Performance',
    readTime: '10 min read',
    h1: 'How to Configure Nginx WebSocket Reverse Proxy: 2026 Guide',
    faqs: [
      {
        q: 'Why do WebSockets fail with 400 Bad Request or 502 Bad Gateway behind Nginx?',
        a: 'By default, Nginx treats upstream proxy connections as standard HTTP/1.0 and strips hop-by-hop headers including Upgrade and Connection. Without explicitly passing proxy_set_header Upgrade $http_upgrade and proxy_set_header Connection "upgrade", the backend application never receives the WebSocket handshake.'
      },
      {
        q: 'Why do WebSocket connections drop after exactly 60 seconds of inactivity?',
        a: 'The default proxy_read_timeout in Nginx is 60 seconds. If neither client nor server transmits data or ping/pong heartbeats within that window, Nginx terminates the TCP socket. Setting proxy_read_timeout to 3600s or 86400s keeps long-lived connections open.'
      },
      {
        q: 'What is the advantage of using an Nginx map block for WebSocket connections?',
        a: 'The map block dynamically inspects the client request: if an Upgrade header is present, Connection is set to upgrade; otherwise, it is set to close. This allows a single Nginx location block to serve both standard REST API requests and WebSockets efficiently.'
      }
    ],
    content: `
      <p class="blog-lead">
        Modern real-time applications (chat systems, live dashboards, collaborative canvases, and gaming backends) rely on <strong>WebSockets (ws:// and wss://)</strong> for full-duplex communication. However, when placing applications (Node.js, Socket.io, Django Channels, or Python FastAPI) behind Nginx, developers frequently encounter <code>WebSocket connection failed: Error during WebSocket handshake: Unexpected response code: 400</code> or sudden 60-second timeouts. Learn how to configure robust WebSocket reverse proxies in 2026.
      </p>

      <h2>How WebSocket Handshakes Work Across Proxies</h2>
      <p>
        A WebSocket session begins as a standard HTTP/1.1 request containing special upgrade headers:
      </p>
      <pre><code>GET /socket.io/?EIO=4&amp;transport=websocket HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13</code></pre>
      <p>
        Because HTTP hop-by-hop headers are removed by default reverse proxies, Nginx must be explicitly instructed to pass the <code>Upgrade</code> and <code>Connection</code> headers upstream and keep the underlying TCP socket open.
      </p>

      <h2>Step 1: Define the Dynamic Connection Map in nginx.conf</h2>
      <p>
        The cleanest architectural approach uses an Nginx <code>map</code> directive inside the <code>http {}</code> block of <code>/etc/nginx/nginx.conf</code>:
      </p>
      <pre><code>http {
    # Dynamically set Connection header based on Upgrade request
    map $http_upgrade $connection_upgrade {
        default upgrade;
        ''      close;
    }

    include /etc/nginx/sites-enabled/*;
}</code></pre>
      <p>
        If the client requests an HTTP upgrade, Nginx sets <code>$connection_upgrade</code> to <code>upgrade</code>; otherwise, it falls back to standard HTTP connection reuse.
      </p>

      <h2>Step 2: Configure Virtual Host with WebSocket Directives</h2>
      <p>
        Edit your site configuration file (e.g., <code>/etc/nginx/sites-available/app.example.com</code>):
      </p>
      <pre><code>server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name app.example.com;

    # TLS Certificates
    ssl_certificate /etc/letsencrypt/live/app.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/app.example.com/privkey.pem;

    # Dedicated WebSocket or API Location
    location /ws/ {
        proxy_pass http://127.0.0.1:4000;
        proxy_http_version 1.1;

        # WebSocket Upgrade Headers
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        # Standard Forwarding Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Prevent 60-second idle disconnects (Set to 24 hours)
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;

        # Disable proxy buffering for real-time latency
        proxy_buffering off;
    }

    # Standard Web Frontend
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}</code></pre>

      <h2>Step 3: Test Configuration and Reload Nginx</h2>
      <p>Validate syntax before reloading:</p>
      <pre><code>sudo nginx -t &amp;&amp; sudo systemctl reload nginx</code></pre>

      <h2>Step 4: Verify WebSocket Handshake with wscat</h2>
      <p>Test the encrypted WebSocket endpoint directly using the <code>wscat</code> CLI utility:</p>
      <pre><code># Install wscat
npm install -g wscat

# Test encrypted WebSocket connection
wscat -c wss://app.example.com/ws/</code></pre>
      <p>
        Once connected, type a message or JSON payload:
      </p>
      <pre><code>Connected (press CTRL+C to quit)
&gt; {"type": "ping"}
&lt; {"type": "pong", "status": "active"}</code></pre>
      <p>
        If the connection stays active past 60 seconds without dropping, your timeout parameters and reverse proxy headers are operating properly.
      </p>

      <h2>Manage Web Servers &amp; Reverse Proxies Visually with SSH Desktop</h2>
      <p>
        Configuring reverse proxies, inspecting SSL certificates, and debugging upstream WebSocket ports across your infrastructure is easy with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Reverse Proxy Browser:</strong> Inspect virtual host blocks, test configuration changes, and reload Nginx with single-click safety.</li>
        <li><strong>Network Port Auditor:</strong> Verify that backend Node.js, Python, or Go microservices are actively listening on their loopback ports.</li>
        <li><strong>Live Server Telemetry:</strong> Monitor active TCP socket counts and bandwidth throughput in real time.</li>
      </ul>
      <p>
        Explore our <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a> and <a href="../network-port-auditor.html">Network Port Auditor</a>.
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
