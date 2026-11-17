const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-nginx-fastcgi-cache-guide.html',
    title: 'How to Set Up Nginx FastCGI Cache & Microcaching: 2026 Guide',
    metaTitle: 'How to Set Up Nginx FastCGI Cache & Microcaching: 2026 Guide',
    metaDesc: 'Accelerate dynamic PHP and WordPress sites with Nginx FastCGI caching. Master fastcgi_cache_path, bypass rules, purge modules, and visual performance monitoring.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-nginx-fastcgi-cache-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Web Performance',
    readTime: '11 min read',
    h1: 'How to Set Up Nginx FastCGI Cache & Microcaching: 2026 Guide',
    faqs: [
      {
        q: 'What is Nginx FastCGI microcaching?',
        a: 'FastCGI microcaching caches dynamic HTML responses for very short durations (e.g., 1 to 5 seconds). During high-traffic spikes, 1,000 concurrent requests only execute PHP-FPM once every 2 seconds while the other 999 requests are served directly from RAM in under 5ms.'
      },
      {
        q: 'How do I bypass the FastCGI cache for logged-in users and carts?',
        a: 'Set a $skip_cache variable based on request methods (POST), query strings, and authentication cookies (like wordpress_logged_in_ or sessionid). Then apply fastcgi_cache_bypass $skip_cache; and fastcgi_no_cache $skip_cache;.'
      },
      {
        q: 'How do I verify if a request was served from the FastCGI cache?',
        a: 'Add add_header X-Cache-Status $upstream_cache_status; to your Nginx configuration. Inspect response headers using curl -I: HIT indicates cached response, MISS indicates upstream generation, and BYPASS indicates intentional cache skipping.'
      }
    ],
    content: `
      <p class="blog-lead">
        Executing PHP runtimes and querying relational databases on every HTTP request can quickly saturate server CPUs and cause 504 Gateway Timeouts under traffic surges. Nginx FastCGI caching stores dynamic responses in memory and disk, serving cached HTML in sub-10ms without invoking PHP-FPM. Learn how to configure production-grade FastCGI caching and microcaching in 2026.
      </p>

      <h2>How FastCGI Caching Operates</h2>
      <p>
        When Nginx receives a request for a PHP page, it generates a hash key (derived from scheme, host, and request URI). If the hash matches an unexpired cache file stored on disk (or in a <code>tmpfs</code> RAM disk), Nginx returns the static content immediately. This offloads up to 95% of execution overhead from PHP-FPM and PostgreSQL/MySQL.
      </p>

      <h2>Step 1: Define fastcgi_cache_path in nginx.conf</h2>
      <p>Configure the cache zone in the <code>http { ... }</code> block of <code>/etc/nginx/nginx.conf</code>:</p>
      <pre><code>http {
    # Allocate 100MB shared memory zone 'FASTCGICACHE' and 10GB disk storage
    fastcgi_cache_path /var/run/nginx-cache levels=1:2 keys_zone=FASTCGICACHE:100m inactive=60m max_size=10g;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    fastcgi_cache_use_stale error timeout invalid_header updating http_500;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;
}</code></pre>

      <h2>Step 2: Configure Cache Bypass Rules in Virtual Host</h2>
      <p>In your site server block (e.g., <code>/etc/nginx/sites-available/example.com</code>), configure conditional bypasses:</p>
      <pre><code>server {
    server_name example.com www.example.com;
    root /var/www/html;

    # Default: do not bypass cache
    set $skip_cache 0;

    # POST requests must never be cached
    if ($request_method = POST) {
        set $skip_cache 1;
    }

    # Query strings (search, pagination) usually bypass
    if ($query_string != "") {
        set $skip_cache 1;
    }

    # Don't cache logged-in users, auth tokens, or shopping carts
    if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_no_cache|wordpress_logged_in|woocommerce_items_in_cart") {
        set $skip_cache 1;
    }

    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;

        # Enable caching zone
        fastcgi_cache FASTCGICACHE;
        fastcgi_cache_valid 200 301 302 60m;
        fastcgi_cache_bypass $skip_cache;
        fastcgi_no_cache $skip_cache;

        # Add debugging header
        add_header X-Cache-Status $upstream_cache_status;
    }
}</code></pre>

      <h2>Step 3: Test Cache Performance with curl</h2>
      <p>Test the site using <code>curl -I</code> to inspect cache status:</p>
      <pre><code># First request: generates cache
curl -I https://example.com/blog/
# X-Cache-Status: MISS

# Second request: served from cache
curl -I https://example.com/blog/
# X-Cache-Status: HIT</code></pre>

      <h2>Step 4: Microcaching for Extreme Concurrency</h2>
      <p>
        For dynamic sites where content changes frequently, set <code>fastcgi_cache_valid 200 2s;</code>. Even a 2-second cache window flattens high-traffic spikes without serving stale content to visitors.
      </p>

      <h2>Monitor Web Server Performance with SSH Desktop</h2>
      <p>
        Benchmarking cache hit ratios and monitoring PHP-FPM worker pools requires visibility. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Visual Reverse Proxy Browser:</strong> Inspect and test Nginx virtual host configs and upstream pools.</li>
        <li><strong>Real-Time Cache Diagnostics:</strong> Stream access logs and filter by <code>X-Cache-Status</code> in real time.</li>
        <li><strong>Process Telemetry:</strong> Monitor PHP-FPM CPU and memory consumption live.</li>
      </ul>
      <p>
        Explore our visual <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a> and <a href="../system-monitor.html">System Monitor</a>.
      </p>
    `
  },
  {
    filename: 'how-to-install-docker-ubuntu-server-guide.html',
    title: 'How to Install & Secure Docker on Ubuntu (24.04 & 22.04 LTS): 2026 Guide',
    metaTitle: 'How to Install & Secure Docker on Ubuntu (24.04 & 22.04 LTS): 2026 Guide',
    metaDesc: 'Install, harden, and optimize Docker Engine on Ubuntu 24.04 and 22.04 LTS. Learn non-root user permissions, daemon.json limits, and visual container management.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-install-docker-ubuntu-server-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Containers & DevOps',
    readTime: '11 min read',
    h1: 'How to Install & Secure Docker on Ubuntu (2026 Guide)',
    faqs: [
      {
        q: 'Why should I install Docker from the official Docker repository instead of Ubuntu apt?',
        a: 'The docker.io package in default Ubuntu repositories is frequently outdated and lacks modern security patches, BuildKit enhancements, and the Docker Compose v2 plugin. The official Docker repository provides the latest verified Docker Engine (CE) releases.'
      },
      {
        q: 'Is adding a user to the docker group a security risk?',
        a: 'Yes. The docker group grants root-equivalent privileges because anyone with access to the Docker socket can mount the root filesystem (docker run -v /:/host) and escalate privileges. For high-security environments, evaluate Rootless Docker or enforce strict SSH user permissions.'
      },
      {
        q: 'How do I prevent Docker container logs from filling up the entire server disk?',
        a: 'Configure the json-file logging driver with max-size and max-file parameters inside /etc/docker/daemon.json. For example: {"log-driver": "json-file", "log-opts": {"max-size": "50m", "max-file": "3"}}.'
      }
    ],
    content: `
      <p class="blog-lead">
        Containerization is the backbone of modern cloud deployments. However, installing Docker with default settings often exposes servers to security vulnerabilities, root-equivalent socket exploits, and unconstrained container log growth that crashes host filesystems. Learn how to install, harden, and tune Docker Engine on Ubuntu 24.04 and 22.04 LTS in 2026.
      </p>

      <h2>Step 1: Remove Old Docker Versions</h2>
      <p>Clean out conflicting unofficial packages before installing the latest engine:</p>
      <pre><code>sudo apt remove -y docker docker-engine docker.io containerd runc</code></pre>

      <h2>Step 2: Add the Official Docker GPG Key &amp; Repository</h2>
      <p>Install prerequisites and set up the official APT source:</p>
      <pre><code># Install dependencies
sudo apt update
sudo apt install -y ca-certificates curl gnupg

# Add official Docker GPG key
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add repository to APT sources
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release &amp;&amp; echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update index
sudo apt update</code></pre>

      <h2>Step 3: Install Docker Engine and Compose Plugin</h2>
      <p>Install the core runtime, containerd, and CLI plugins:</p>
      <pre><code>sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</code></pre>
      <p>Verify that the service is running:</p>
      <pre><code>sudo systemctl status docker</code></pre>

      <h2>Step 4: Non-Root Execution &amp; Daemon Hardening</h2>
      <p>Allow your standard Linux user to manage containers without <code>sudo</code>:</p>
      <pre><code>sudo usermod -aG docker $USER
# Activate group changes immediately
newgrp docker</code></pre>

      <h2>Step 5: Configure Production Logging Limits in daemon.json</h2>
      <p>
        By default, Docker container logs grow indefinitely until disk space is exhausted. Enforce strict log rotation limits across all containers by creating <code>/etc/docker/daemon.json</code>:
      </p>
      <pre><code>sudo nano /etc/docker/daemon.json</code></pre>
      <p>Paste the following production configuration:</p>
      <pre><code>{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "50m",
    "max-file": "3"
  },
  "live-restore": true,
  "no-new-privileges": true
}</code></pre>
      <ul>
        <li><code>live-restore</code>: Keeps containers running even if the Docker daemon restarts or upgrades.</li>
        <li><code>no-new-privileges</code>: Prevents containers from acquiring additional privileges via setuid/setgid binaries.</li>
        <li><code>max-size / max-file</code>: Caps log files per container to 150MB total.</li>
      </ul>
      <p>Apply changes:</p>
      <pre><code>sudo systemctl restart docker</code></pre>

      <h2>Manage Remote Docker Fleets Visually with SSH Desktop</h2>
      <p>
        Running <code>docker ps</code>, reading container logs with <code>docker logs -f</code>, and inspecting resource metrics in small terminals can be overwhelming across multi-server environments. <strong>SSH Desktop</strong> includes:
      </p>
      <ul>
        <li><strong>Visual Docker Web GUI:</strong> Inspect running containers, CPU/RAM utilization, and port mappings over a secure SSH connection.</li>
        <li><strong>One-Click Log Streamer:</strong> Search and tail container outputs across multiple servers simultaneously.</li>
        <li><strong>Volume &amp; Image Pruning:</strong> Reclaim gigabytes of unused dangling images and stopped containers safely.</li>
      </ul>
      <p>
        Check out our visual <a href="../docker-web-gui.html">Docker Web GUI</a> and <a href="../multi-server-automation.html">Multi-Server Automation</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-centralized-logging-rsyslog-guide.html',
    title: 'How to Set Up Centralized Remote Logging with Rsyslog: 2026 Guide',
    metaTitle: 'How to Set Up Centralized Remote Logging with Rsyslog: 2026 Guide',
    metaDesc: 'Configure centralized remote logging on Linux using Rsyslog and TCP/TLS. Forward system logs, auth alerts, and application events securely to a central server.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-centralized-logging-rsyslog-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Security & Monitoring',
    readTime: '11 min read',
    h1: 'How to Set Up Centralized Remote Logging with Rsyslog: 2026 Guide',
    faqs: [
      {
        q: 'Why should I use TCP instead of UDP for remote syslog forwarding?',
        a: 'UDP (port 514) is connectionless and drops packets silently under network congestion or high traffic bursts. TCP (port 514) provides guaranteed delivery, packet retransmission, and supports TLS encryption to protect sensitive authentication logs from wiretapping.'
      },
      {
        q: 'What happens to logs on the client if the central rsyslog server goes down?',
        a: 'Rsyslog includes an action queue mechanism. By configuring a disk-assisted queue (ActionQueueType LinkedList), client machines will buffer logs in local RAM and disk until the central logging server comes back online, preventing log loss.'
      },
      {
        q: 'How does centralized logging help with compliance audits (SOC 2, ISO 27001)?',
        a: 'Centralized logging ensures an immutable audit trail. Even if an attacker gains root access on a web server and deletes /var/log/auth.log, the centralized log server already has the forwarded connection and command records stored safely offsite.'
      }
    ],
    content: `
      <p class="blog-lead">
        When managing a fleet of Linux servers, logging in to each machine individually to investigate authentication failures or system anomalies is inefficient and insecure. If a server is compromised, attackers frequently wipe local log files to hide their tracks. Learn how to configure centralized remote syslog forwarding with <code>rsyslog</code> over encrypted TCP in 2026.
      </p>

      <h2>Centralized Logging Architecture</h2>
      <p>
        In an enterprise rsyslog architecture, one dedicated hardened server acts as the <strong>Log Receiver</strong>, while individual application and database nodes act as <strong>Log Forwarders (Clients)</strong>. Logs generated by systemd journal, OpenSSH, UFW, and Nginx are streamed over TCP directly to the receiver.
      </p>

      <h2>Part 1: Configure the Central Rsyslog Server (Receiver)</h2>
      <p>On your central logging server, edit <code>/etc/rsyslog.conf</code>:</p>
      <pre><code>sudo nano /etc/rsyslog.conf</code></pre>
      <p>Enable the TCP syslog reception module by uncommenting:</p>
      <pre><code># Enable TCP syslog reception
module(load="imtcp")
input(type="imtcp" port="514")</code></pre>
      <p>
        Create a custom template to organize incoming logs into subdirectories per client hostname. Create <code>/etc/rsyslog.d/30-remote-clients.conf</code>:
      </p>
      <pre><code>template(name="RemoteClients" type="string" string="/var/log/remote/%HOSTNAME%/%PROGRAMNAME%.log")

# Store all remote incoming logs using the template
if ($fromhost-ip != '127.0.0.1') then {
    action(type="omfile" dirmicrosecond="on" dirmode="0755" filemode="0640" dircached="on" dynafiles="RemoteClients")
    stop
}</code></pre>
      <p>Restart rsyslog on the central server and open port 514 in your firewall:</p>
      <pre><code>sudo systemctl restart rsyslog
sudo ufw allow from 10.0.0.0/8 to any port 514 proto tcp</code></pre>

      <h2>Part 2: Configure Client Nodes to Forward Logs</h2>
      <p>On each client server, create a forwarding rule with a disk queue to ensure zero log loss during network interruptions:</p>
      <pre><code>sudo nano /etc/rsyslog.d/50-forward.conf</code></pre>
      <p>Add the following configuration (replace <code>10.0.0.100</code> with your central server IP):</p>
      <pre><code># Configure local buffer queue for reliability
$ActionQueueFileName fwdRule1      # Unique name prefix for spool files
$ActionQueueMaxDiskSpace 1g        # 1GB disk buffer limit
$ActionQueueSaveOnShutdown on      # Save in-memory data if client reboots
$ActionQueueType LinkedList        # Run asynchronously
$ActionResumeRetryCount -1         # Infinite retries if central server offline

# Forward all logs over TCP
*.* action(type="omfwd" target="10.0.0.100" port="514" protocol="tcp")</code></pre>
      <p>Restart the client rsyslog daemon:</p>
      <pre><code>sudo systemctl restart rsyslog</code></pre>

      <h2>Part 3: Verify Log Streaming</h2>
      <p>Generate a test log entry on the client node:</p>
      <pre><code>logger "TEST_SYSLOG_CENTRAL_LOGGING_VERIFICATION"</code></pre>
      <p>On the central log server, check if the message arrived in the client directory:</p>
      <pre><code>sudo tail -f /var/log/remote/*/syslog.log</code></pre>

      <h2>Streamline Log Analysis Across Your Fleet with SSH Desktop</h2>
      <p>
        Reviewing text logs across dozens of hosts can be overwhelming. <strong>SSH Desktop</strong> makes managing centralized environments intuitive:
      </p>
      <ul>
        <li><strong>Multi-Server Grep:</strong> Search error patterns and authentication failures across entire server clusters in seconds.</li>
        <li><strong>Visual Firewall Rules:</strong> Verify and audit port 514 and SSH access rules with a single click.</li>
        <li><strong>Audit Readiness:</strong> Export structured server telemetry and security logs for compliance reporting.</li>
      </ul>
      <p>
        Discover our <a href="../log-analysis-grep.html">Remote Log Analyzer</a> and <a href="../network-port-auditor.html">Network Port Auditor</a>.
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
