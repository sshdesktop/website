const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-ssh-agent-forwarding-safely-guide.html',
    title: 'How to Set Up SSH Agent Forwarding Safely (ProxyJump vs Agent): 2026',
    metaTitle: 'How to Set Up SSH Agent Forwarding Safely (ProxyJump vs Agent): 2026',
    metaDesc: 'Understand the security risks of SSH Agent Forwarding. Learn why ProxyJump is safer, how socket hijacking works, and how to configure secure bastion access.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-ssh-agent-forwarding-safely-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'SSH & Security',
    readTime: '11 min read',
    h1: 'How to Set Up SSH Agent Forwarding Safely (ProxyJump vs ForwardAgent): 2026 Guide',
    faqs: [
      {
        q: 'Why is SSH Agent Forwarding (ssh -A) considered a security risk?',
        a: 'When you forward your SSH agent, a UNIX domain socket is created on the remote server (/tmp/ssh-XXXXXX/agent.XXXX). Anyone with root access on that intermediary machine (or an attacker who compromised it) can interact with your socket and authenticate as you to other servers for the duration of your session.'
      },
      {
        q: 'Why is ProxyJump (-J) safer than ForwardAgent (-A)?',
        a: 'ProxyJump establishes an end-to-end encrypted TCP tunnel through the bastion host directly to the destination server. The bastion only routes raw encrypted packets; it never sees your private keys, never accesses your ssh-agent socket, and cannot hijack your credentials.'
      },
      {
        q: 'How can I require confirmation before ssh-agent signs a request?',
        a: 'When adding keys to your local agent, pass the -c flag: ssh-add -c ~/.ssh/id_ed25519. This triggers an interactive OS confirmation dialogue whenever a remote server attempts to use your private key.'
      }
    ],
    content: `
      <p class="blog-lead">
        Accessing private VPC servers behind a bastion jump host is a daily task for sysadmins and DevOps engineers. For years, the standard recommendation was <code>ForwardAgent yes</code> (or <code>ssh -A</code>). However, SSH agent forwarding creates severe security vulnerabilities if the intermediary jump host is compromised. Learn the mechanics of agent socket hijacking and why <code>ProxyJump</code> has become the enterprise gold standard in 2026.
      </p>

      <h2>The Danger of SSH Agent Socket Hijacking</h2>
      <p>
        When you connect to a server with <code>ssh -A user@bastion</code>, OpenSSH forwards an authentication channel back to your local <code>ssh-agent</code> and exposes a UNIX domain socket on the bastion filesystem, pointed to by <code>$SSH_AUTH_SOCK</code> (e.g., <code>/tmp/ssh-8kG9/agent.1420</code>).
      </p>
      <p>
        While the remote server never receives your raw private key, any process running as <code>root</code> (or your user) on that bastion can connect to that socket and request signatures to log into your other production servers, GitHub accounts, or internal databases.
      </p>
      <div class="blog-tip-box">
        <strong>Rule of Thumb:</strong> Never use <code>ssh -A</code> on shared, multi-tenant, or third-party servers. Reserve it only for machines where you possess exclusive root control.
      </div>

      <h2>The Solution: End-to-End Encryption with ProxyJump</h2>
      <p>
        Introduced in modern OpenSSH, <code>ProxyJump</code> avoids agent forwarding altogether. Your local client uses the bastion purely as a TCP relay (via <code>nc</code> or <code>-W</code>), establishing an end-to-end encrypted cryptographic handshake directly with the target node:
      </p>
      <pre><code># Command line syntax
ssh -J user@bastion.example.com internal-user@10.0.1.50</code></pre>
      <p>
        The bastion server only sees encrypted TCP packets. It cannot inspect plaintext commands, inject traffic, or access your credentials.
      </p>

      <h2>Configuring ProxyJump in ~/.ssh/config</h2>
      <p>Clean up your workflow by adding a persistent entry in <code>~/.ssh/config</code>:</p>
      <pre><code># Public Jump Host
Host bastion
    HostName bastion.example.com
    User jumpadmin
    IdentityFile ~/.ssh/id_ed25519_bastion

# Private VPC Internal Server
Host db-internal
    HostName 10.0.1.50
    User dbadmin
    IdentityFile ~/.ssh/id_ed25519_internal
    ProxyJump bastion</code></pre>
      <p>Now, connecting to the secure internal database requires just one command:</p>
      <pre><code>ssh db-internal</code></pre>

      <h2>If You Must Use Agent Forwarding: Hardening Techniques</h2>
      <p>If legacy tooling requires agent forwarding, enforce these mitigations:</p>
      <ul>
        <li><strong>Require Confirmation:</strong> Add keys with <code>ssh-add -c</code> so your desktop alerts you whenever a key signature is requested.</li>
        <li><strong>Set Expiration Lifetimes:</strong> Use <code>ssh-add -t 1h</code> to automatically evict keys from RAM after 1 hour.</li>
        <li><strong>Restrict Forwarding by Host:</strong> In <code>~/.ssh/config</code>, only enable <code>ForwardAgent yes</code> under specific trusted host definitions, never globally under <code>Host *</code>.</li>
      </ul>

      <h2>Manage Bastions and Keys Visually with SSH Desktop</h2>
      <p>
        Configuring multi-tier jump hosts, proxy commands, and hardware keys across dozens of cloud accounts can be complex. <strong>SSH Desktop</strong> makes bastion access seamless:
      </p>
      <ul>
        <li><strong>Visual Bastion Wizard:</strong> Configure multi-hop ProxyJump tunnels with a few clicks without manual config syntax errors.</li>
        <li><strong>Hardware-Backed Key Vault:</strong> Securely store ED25519 keys with OS-level hardware security (DPAPI / Keychain).</li>
        <li><strong>Active Connection Inspector:</strong> Monitor live forwarded tunnels and active sessions across your fleet in real time.</li>
      </ul>
      <p>
        Check out our <a href="../ssh-port-forwarding.html">SSH Port Forwarding</a> and <a href="../security.html">Security Architecture</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-webhook-server-linux-deployments-guide.html',
    title: 'How to Set Up a Webhook Server for Linux Deployments (2026 Guide)',
    metaTitle: 'How to Set Up a Webhook Server for Linux Deployments (2026 Guide)',
    metaDesc: 'Automate GitHub and GitLab deployments on Linux using a lightweight Go webhook daemon. Master HMAC SHA-256 secrets, systemd, and zero-downtime updates.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-webhook-server-linux-deployments-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'CI/CD & Automation',
    readTime: '11 min read',
    h1: 'How to Set Up a Webhook Server for Linux Deployments (2026 Guide)',
    faqs: [
      {
        q: 'Why should I use a lightweight webhook daemon instead of heavy CI runners?',
        a: 'For small projects, staging servers, and independent VPS instances, running GitLab Runner or Jenkins consumes 500MB–2GB of precious RAM. A standalone Go webhook listener uses less than 15MB of RAM, starts instantly, and executes shell scripts directly on git push events.'
      },
      {
        q: 'How does HMAC SHA-256 secret verification prevent unauthorized deployment triggers?',
        a: 'GitHub and GitLab hash the webhook payload using a shared secret key and send it in the X-Hub-Signature-256 header. The webhook listener computes the identical hash locally; if the signatures mismatch, the request is rejected with HTTP 403, preventing attackers from triggering arbitrary builds.'
      },
      {
        q: 'Should the webhook listener run as the root user?',
        a: 'Never. Always create a dedicated unprivileged user (e.g., deployer) for the webhook daemon. Grant specific sudo privileges only for commands that require it (e.g., sudo systemctl reload nginx) in /etc/sudoers.d/deployer.'
      }
    ],
    content: `
      <p class="blog-lead">
        Setting up full-blown continuous deployment pipelines with Jenkins, GitHub Actions Self-Hosted Runners, or GitLab CI can consume gigabytes of memory and introduce unnecessary maintenance overhead on small-to-medium VPS servers. A lightweight webhook daemon listens for push events, validates cryptographic signatures, and pulls new code in seconds. Learn how to set up an enterprise-grade deployment webhook server on Linux in 2026.
      </p>

      <h2>How Webhook Deployments Work</h2>
      <p>
        When you push code to GitHub or GitLab, the repository provider sends an HTTP POST request containing event metadata and an <code>X-Hub-Signature-256</code> header to your server. Your server verifies the cryptographic signature, matches the branch (e.g., <code>refs/heads/main</code>), and executes a deployment shell script.
      </p>

      <h2>Step 1: Install the Standalone Webhook Daemon</h2>
      <p>Install the fast, open-source <code>webhook</code> utility (written in Go):</p>
      <pre><code># Ubuntu / Debian
sudo apt update
sudo apt install -y webhook

# Verify installation
webhook -version</code></pre>

      <h2>Step 2: Create the Webhook Definition (hooks.json)</h2>
      <p>Create a secure directory and configuration file:</p>
      <pre><code>sudo mkdir -p /etc/webhook
sudo nano /etc/webhook/hooks.json</code></pre>
      <p>Paste the following production configuration with HMAC signature validation:</p>
      <pre><code>[
  {
    "id": "deploy-api",
    "execute-command": "/usr/local/bin/deploy-api.sh",
    "command-working-directory": "/var/www/api",
    "response-message": "Deployment triggered successfully",
    "trigger-rule": {
      "and": [
        {
          "match": {
            "type": "payload-hmac-sha256",
            "secret": "YourSuperSecretRandomWebhookToken123",
            "parameter": {
              "source": "header",
              "name": "X-Hub-Signature-256"
            }
          }
        },
        {
          "match": {
            "type": "value",
            "value": "refs/heads/main",
            "parameter": {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]</code></pre>

      <h2>Step 3: Create the Deployment Shell Script</h2>
      <p>Create <code>/usr/local/bin/deploy-api.sh</code> with error handling:</p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/api"
echo "=== Deployment started at $(date) ===" >> /var/log/webhook_deploy.log

cd "$APP_DIR"
git pull origin main >> /var/log/webhook_deploy.log 2>&1
npm ci --production >> /var/log/webhook_deploy.log 2>&1
sudo systemctl restart api.service >> /var/log/webhook_deploy.log 2>&1

echo "=== Deployment finished successfully ===" >> /var/log/webhook_deploy.log</code></pre>
      <pre><code>sudo chmod +x /usr/local/bin/deploy-api.sh</code></pre>

      <h2>Step 4: Configure Systemd Service and Nginx Reverse Proxy</h2>
      <p>Create a systemd service file at <code>/etc/systemd/system/webhook.service</code>:</p>
      <pre><code>[Unit]
Description=Lightweight Webhook Deployment Daemon
After=network.target

[Service]
Type=simple
User=deployer
Group=deployer
ExecStart=/usr/bin/webhook -nopanic -hooks /etc/webhook/hooks.json -ip 127.0.0.1 -port 9000
Restart=always

[Install]
WantedBy=multi-user.target</code></pre>
      <p>Enable and start the service:</p>
      <pre><code>sudo systemctl daemon-reload
sudo systemctl enable --now webhook</code></pre>
      <p>Proxy webhook traffic through Nginx with SSL:</p>
      <pre><code>location /hooks/ {
    proxy_pass http://127.0.0.1:9000/hooks/;
    include proxy_params;
}</code></pre>

      <h2>Step 5: Add Webhook to GitHub/GitLab</h2>
      <p>
        In your GitHub repository settings, navigate to <strong>Webhooks &gt; Add webhook</strong>:
      </p>
      <ul>
        <li><strong>Payload URL:</strong> <code>https://api.example.com/hooks/deploy-api</code></li>
        <li><strong>Content type:</strong> <code>application/json</code></li>
        <li><strong>Secret:</strong> <code>YourSuperSecretRandomWebhookToken123</code></li>
        <li><strong>Events:</strong> Just the <code>push</code> event.</li>
      </ul>

      <h2>Manage Webhooks &amp; Automation Visually with SSH Desktop</h2>
      <p>
        Debugging webhook trigger failures and inspecting live git pull logs across multiple instances is effortless with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Built-in Webhook Server:</strong> Configure, test, and trigger automated webhook deployments directly within the application.</li>
        <li><strong>Live Deployment Logger:</strong> Stream git pull, build outputs, and restart logs in real time.</li>
        <li><strong>Systemd &amp; Process Manager:</strong> Verify the health of your webhook listener and backend services with one click.</li>
      </ul>
      <p>
        Explore our visual <a href="../webhook-server.html">Webhook Server</a> and <a href="../multi-server-automation.html">Multi-Server Automation</a>.
      </p>
    `
  },
  {
    filename: 'how-to-fix-504-gateway-timeout-nginx-guide.html',
    title: 'How to Fix 504 Gateway Timeout in Nginx (PHP, Node & Python 2026)',
    metaTitle: 'How to Fix 504 Gateway Timeout in Nginx (PHP, Node & Python 2026)',
    metaDesc: 'Resolve 504 Gateway Timeout errors in Nginx step-by-step. Troubleshoot slow database queries, proxy_read_timeout, PHP-FPM, and inspect logs visually.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-fix-504-gateway-timeout-nginx-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Troubleshooting & Nginx',
    readTime: '11 min read',
    h1: 'How to Fix 504 Gateway Timeout Error in Nginx: Step-by-Step Guide (2026)',
    faqs: [
      {
        q: 'What is the root cause of an HTTP 504 Gateway Timeout in Nginx?',
        a: 'A 504 Gateway Timeout means Nginx successfully connected to your upstream backend (PHP-FPM, Node.js, Python Gunicorn, or an internal microservice), but the upstream took longer to send a response than the configured timeout limit (default 60 seconds). It is caused by slow database queries, long-running batch jobs, or thread pool exhaustion.'
      },
      {
        q: 'What is the difference between 502 Bad Gateway and 504 Gateway Timeout?',
        a: 'A 502 Bad Gateway means the upstream backend crashed, refused the connection, or closed the socket immediately (not running). A 504 Gateway Timeout means the upstream backend is alive and accepted the connection, but froze or timed out before delivering the response (too slow).'
      },
      {
        q: 'Which timeout directives in Nginx resolve 504 errors?',
        a: 'For reverse proxy setups (Node, Python, Go): proxy_connect_timeout 300s;, proxy_send_timeout 300s;, and proxy_read_timeout 300s;. For FastCGI (PHP-FPM): fastcgi_read_timeout 300s; alongside request_terminate_timeout in php-fpm.conf.'
      }
    ],
    content: `
      <p class="blog-lead">
        Nothing frustrates users more than staring at a blank screen for a minute only to encounter <code>504 Gateway Time-out</code>. Unlike 502 errors where backends crash outright, 504 errors mean your application is bogged down by unindexed database queries, external API deadlocks, or long-running computations exceeding reverse proxy limits. Learn the step-by-step troubleshooting playbook to diagnose and eliminate 504 errors in 2026.
      </p>

      <h2>How Nginx Handles Upstream Timers</h2>
      <p>
        By default, Nginx maintains a strict <strong>60-second</strong> response window (<code>proxy_read_timeout 60s;</code> or <code>fastcgi_read_timeout 60s;</code>). If an upstream process takes 60.01 seconds to generate an HTTP response header, Nginx closes the client socket and returns a 504 status code.
      </p>

      <h2>Step 1: Inspect Nginx Error Logs</h2>
      <p>Check the exact error message in <code>/var/log/nginx/error.log</code>:</p>
      <pre><code>sudo tail -n 50 -f /var/log/nginx/error.log | grep -E '(upstream timed out|504)'</code></pre>
      <p>You will typically see:</p>
      <pre><code>[error] 1450#1450: *284 upstream timed out (110: Connection timed out) while reading response header from upstream, client: 203.0.113.19, server: example.com, request: "POST /reports/export HTTP/2.0", upstream: "fastcgi://unix:/var/run/php/php8.3-fpm.sock:"</code></pre>

      <h2>Step 2: Increase Timeout Directives for Reverse Proxies (Node / Python / Go)</h2>
      <p>If your upstream application is Node.js, Python Gunicorn, or Docker, increase proxy timeouts in your server block:</p>
      <pre><code>location / {
    proxy_pass http://localhost:3000;
    include proxy_params;

    # Increase timeout limits to 300 seconds
    proxy_connect_timeout 300s;
    proxy_send_timeout    300s;
    proxy_read_timeout    300s;
    send_timeout          300s;
}</code></pre>

      <h2>Step 3: Fix 504 Errors on PHP-FPM / WordPress</h2>
      <p>For PHP-FPM, you must tune both Nginx and PHP runtime configurations:</p>
      <p>1. In Nginx (<code>/etc/nginx/sites-available/example.com</code>):</p>
      <pre><code>location ~ \\.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;

    # Increase FastCGI timeout
    fastcgi_read_timeout 300s;
}</code></pre>
      <p>2. In <code>php.ini</code> (<code>/etc/php/8.3/fpm/php.ini</code>):</p>
      <pre><code>max_execution_time = 300</code></pre>
      <p>3. In the PHP-FPM pool (<code>/etc/php/8.3/fpm/pool.d/www.conf</code>):</p>
      <pre><code>request_terminate_timeout = 300s</code></pre>
      <p>Reload both services:</p>
      <pre><code>sudo systemctl reload php8.3-fpm
sudo systemctl reload nginx</code></pre>

      <h2>Step 4: Troubleshoot the Underlying Cause (Slow Queries &amp; Locks)</h2>
      <p>
        Increasing timeouts is often a temporary band-aid. The underlying issue is usually database lock contention or unindexed table scans:
      </p>
      <ul>
        <li><strong>PostgreSQL:</strong> Run <code>SELECT pid, now() - query_start AS duration, query FROM pg_stat_activity WHERE state != 'idle' ORDER BY duration DESC;</code> to spot frozen transactions.</li>
        <li><strong>MySQL:</strong> Run <code>SHOW FULL PROCESSLIST;</code> to find slow queries holding table metadata locks.</li>
        <li><strong>Third-Party APIs:</strong> Ensure outgoing HTTP requests have explicit connection and read timeouts configured in application code.</li>
      </ul>

      <h2>Troubleshoot Server Outages Visually with SSH Desktop</h2>
      <p>
        Pinpointing gateway timeouts in production environments requires immediate visibility. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Real-Time Log Streamer:</strong> Filter 504 and 502 status codes live across multiple server logs simultaneously.</li>
        <li><strong>Reverse Proxy Manager:</strong> Test and adjust Nginx upstream timeouts safely before reloading configurations.</li>
        <li><strong>Database Query Inspector:</strong> View running queries and kill deadlocked transactions with one click.</li>
      </ul>
      <p>
        Explore our visual <a href="../log-analysis-grep.html">Remote Log Analyzer</a> and <a href="../database-gui-ssh-tunnel.html">Database GUI &amp; SSH Tunnel</a>.
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
