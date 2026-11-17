const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-monit-linux-automatic-service-recovery.html',
    title: 'How to Set Up Monit on Linux for Auto Service Recovery (2026 Guide)',
    metaTitle: 'How to Set Up Monit on Linux for Auto Service Recovery (2026 Guide)',
    metaDesc: 'Configure Monit on Linux to automatically restart crashed services (Nginx, MySQL, Node). Master CPU/RAM thresholds, email alerts, and self-healing servers.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-monit-linux-automatic-service-recovery.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Monitoring & Reliability',
    readTime: '11 min read',
    h1: 'How to Set Up Monit on Linux for Automatic Service Recovery (2026 Guide)',
    faqs: [
      {
        q: 'How does Monit differ from Systemd restart policies?',
        a: 'Systemd can restart a process if its PID dies. Monit goes much further: it performs protocol-level health checks (e.g., sending HTTP GET requests to Nginx or running SQL queries against MySQL). If a service freezes, enters a deadlock, or consumes more than 80% RAM for 3 cycles, Monit kills and restarts it automatically.'
      },
      {
        q: 'Does Monit consume a lot of server resources?',
        a: 'No. Monit is written in pure C with zero external runtime dependencies. It runs as a tiny single-threaded daemon consuming only 5MB–10MB of RAM and virtually 0% CPU, making it ideal for lightweight cloud VPS servers.'
      },
      {
        q: 'How do I test if Monit is actively monitoring and restarting services?',
        a: 'Simulate a service crash by manually killing the process: sudo pkill -9 nginx. Within 30 to 60 seconds (depending on your check interval), Monit will detect the missing PID, restart Nginx, and log the recovery action in /var/log/monit.log.'
      }
    ],
    content: `
      <p class="blog-lead">
        Web applications and database servers will occasionally freeze, deadlock, or crash due to memory leaks and traffic spikes. While modern orchestrators like Kubernetes handle self-healing on massive clusters, standalone cloud VPS instances require a lightweight, bulletproof watchdog. <strong>Monit</strong> monitors system processes, network sockets, filesystem space, and hardware resources, automatically taking corrective recovery actions. Learn how to set up Monit in 2026.
      </p>

      <h2>Why Monit Is Essential for VPS Reliability</h2>
      <p>
        Systemd is excellent at managing system boot states, but it cannot verify if an application is actually responding to HTTP requests. Monit bridges this gap by checking port protocols, HTTP status codes, response times, and resource thresholds.
      </p>

      <h2>Step 1: Install Monit on Ubuntu / Debian</h2>
      <p>Install Monit from official distribution repositories:</p>
      <pre><code>sudo apt update
sudo apt install -y monit

# Enable and start Monit daemon
sudo systemctl enable --now monit</code></pre>

      <h2>Step 2: Configure the Monit Control File</h2>
      <p>Edit the main configuration file at <code>/etc/monit/monitrc</code>:</p>
      <pre><code>sudo nano /etc/monit/monitrc</code></pre>
      <p>1. Set check interval to 30 seconds:</p>
      <pre><code>set daemon 30</code></pre>
      <p>2. Enable the built-in protected web status interface:</p>
      <pre><code>set httpd port 2812 and
    use address localhost   # Only allow local/SSH tunnel connections
    allow admin:SuperSecurePassword123</code></pre>

      <h2>Step 3: Add Auto-Recovery Rules for Services</h2>
      <p>Create modular monitoring rules in <code>/etc/monit/conf.d/</code>.</p>
      <p><strong>1. Monitoring Nginx (PID + HTTP Port 80):</strong></p>
      <pre><code># /etc/monit/conf.d/nginx
check process nginx with pidfile /var/run/nginx.pid
    start program = "/bin/systemctl start nginx"
    stop program  = "/bin/systemctl stop nginx"
    if failed host 127.0.0.1 port 80 protocol http request "/" then restart
    if 5 restarts within 5 cycles then timeout</code></pre>
      <p><strong>2. Monitoring MySQL / MariaDB:</strong></p>
      <pre><code># /etc/monit/conf.d/mysql
check process mysqld with pidfile /var/run/mysqld/mysqld.pid
    start program = "/bin/systemctl start mysql"
    stop program  = "/bin/systemctl stop mysql"
    if failed host 127.0.0.1 port 3306 protocol mysql then restart
    if memory usage > 80% for 3 cycles then restart</code></pre>
      <p><strong>3. Monitoring System Storage:</strong></p>
      <pre><code># /etc/monit/conf.d/storage
check filesystem rootfs with path /
    if space usage > 85% then alert</code></pre>

      <h2>Step 4: Validate Syntax &amp; Reload Monit</h2>
      <p>Always verify configuration syntax before applying changes:</p>
      <pre><code># Test syntax
sudo monit -t

# Reload configuration
sudo monit reload

# Inspect live status of all monitored services
sudo monit status</code></pre>

      <h2>Access Monit GUI Securely with SSH Desktop Tunneling</h2>
      <p>
        Monit's web dashboard runs locally on port <code>2812</code>. Never expose this port to the public internet. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Automatic Background Tunnels:</strong> Forward port <code>2812</code> over encrypted SSH with one click, accessing Monit at <code>http://localhost:2812</code> securely.</li>
        <li><strong>Visual Service Dashboard:</strong> View active systemd services, CPU consumption, and auto-restart flags directly in the GUI.</li>
        <li><strong>Process Killer &amp; Telemetry:</strong> Terminate runaway zombie processes and view thread memory usage in real time.</li>
      </ul>
      <p>
        Check out our <a href="../system-monitor.html">System Monitor</a> and <a href="../systemd-gui.html">Systemd GUI Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-chroot-sftp-jail-linux-guide.html',
    title: 'How to Set Up a Chroot SFTP Jail on Linux (Ubuntu & Debian 2026)',
    metaTitle: 'How to Set Up a Chroot SFTP Jail on Linux (Ubuntu & Debian 2026)',
    metaDesc: 'Restrict Linux SFTP users strictly to their home directory without SSH shell access using OpenSSH ChrootDirectory and internal-sftp. Step-by-step 2026 guide.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-chroot-sftp-jail-linux-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'SFTP & Permissions',
    readTime: '11 min read',
    h1: 'How to Set Up a Chroot SFTP Jail on Linux: 2026 Guide',
    faqs: [
      {
        q: 'Why does OpenSSH reject logins with "fatal: bad ownership or modes for chroot directory"?',
        a: 'OpenSSH enforces strict security requirements on ChrootDirectory paths: the target directory and all parent directories in the path MUST be owned by root and cannot be writable by any other user or group (permissions must be 755 or 750). To allow uploads, create a writable subdirectory (e.g., uploads/) inside the chroot.'
      },
      {
        q: 'What is the advantage of ForceCommand internal-sftp over /usr/lib/openssh/sftp-server?',
        a: 'internal-sftp is built directly into the sshd process binary. It does not require spawning a separate shell or copying /bin/sh, libraries, or device files into the chroot jail, drastically simplifying security configuration.'
      },
      {
        q: 'Can a jailed SFTP user execute terminal commands or run bash scripts?',
        a: 'No. When configured with ForceCommand internal-sftp and shell /usr/sbin/nologin (or /bin/false), any attempt to establish an interactive SSH shell is immediately terminated by the server.'
      }
    ],
    content: `
      <p class="blog-lead">
        When external clients, contractors, or automated third-party tools need to upload files to your Linux server, granting them standard SSH shell access is a massive security hazard. A <strong>Chroot SFTP Jail</strong> locks users into their designated directory tree, hiding the root filesystem, <code>/etc/passwd</code>, and environment variables, while strictly disabling terminal shell execution. Learn how to configure a secure SFTP jail in 2026.
      </p>

      <h2>How ChrootDirectory and internal-sftp Work</h2>
      <p>
        The OpenSSH daemon provides a native subsystem called <code>internal-sftp</code>. Combined with the <code>ChrootDirectory</code> directive, it alters the root directory (<code>/</code>) for matching users, making it physically impossible for them to navigate outside their assigned directory tree.
      </p>

      <h2>Step 1: Create a Dedicated SFTP Group and User</h2>
      <p>Create a dedicated group for jailed SFTP accounts:</p>
      <pre><code>sudo groupadd sftp_users</code></pre>
      <p>Create a new user with shell disabled (<code>/sbin/nologin</code>) and assigned to the group:</p>
      <pre><code>sudo useradd -g sftp_users -d /home/sftpclient -s /sbin/nologin sftpclient

# Set password (or configure SSH key authentication)
sudo passwd sftpclient</code></pre>

      <h2>Step 2: Configure Directory Permissions (The Root Ownership Rule)</h2>
      <p>
        OpenSSH strictly mandates that the chroot directory itself must be owned by <strong>root</strong> and not writable by any other user:
      </p>
      <pre><code># The chroot jail root must be owned by root:root
sudo chown root:root /home/sftpclient
sudo chmod 755 /home/sftpclient

# Create a writable directory inside where the user can upload files
sudo mkdir -p /home/sftpclient/uploads
sudo chown sftpclient:sftp_users /home/sftpclient/uploads
sudo chmod 775 /home/sftpclient/uploads</code></pre>

      <h2>Step 3: Configure OpenSSH sshd_config</h2>
      <p>Edit the OpenSSH configuration file at <code>/etc/ssh/sshd_config</code>:</p>
      <pre><code>sudo nano /etc/ssh/sshd_config</code></pre>
      <p>1. Ensure the internal SFTP subsystem is enabled:</p>
      <pre><code># Replace Subsystem sftp /usr/lib/openssh/sftp-server with:
Subsystem sftp internal-sftp</code></pre>
      <p>2. Append the Match Group block at the very bottom of the file:</p>
      <pre><code>Match Group sftp_users
    ChrootDirectory %h
    ForceCommand internal-sftp
    AllowTcpForwarding no
    X11Forwarding no
    PasswordAuthentication yes</code></pre>
      <ul>
        <li><code>%h</code>: Dynamically resolves to the user's home directory.</li>
        <li><code>ForceCommand internal-sftp</code>: Disallows shell access, forcing SFTP protocol only.</li>
        <li><code>AllowTcpForwarding no</code>: Disables SSH tunneling and port forwarding bypasses.</li>
      </ul>

      <h2>Step 4: Test Syntax and Restart SSH</h2>
      <p>Verify syntax before restarting OpenSSH:</p>
      <pre><code>sudo sshd -t
sudo systemctl restart ssh || sudo systemctl restart sshd</code></pre>

      <h2>Step 5: Verify the Chroot Jail</h2>
      <p>1. Test that terminal SSH shell access is rejected:</p>
      <pre><code>ssh sftpclient@your-server-ip
# Output: This service allows sftp connections only. Connection to server closed.</code></pre>
      <p>2. Connect via SFTP:</p>
      <pre><code>sftp sftpclient@your-server-ip
sftp> pwd
Remote working directory: /
sftp> cd uploads
sftp> put testfile.txt
Uploading testfile.txt to /uploads/testfile.txt
sftp> cd ..
sftp> cd ..
sftp> ls
uploads</code></pre>
      <p>The client cannot escape the chroot root folder.</p>

      <h2>Manage SFTP Users &amp; Files Visually with SSH Desktop</h2>
      <p>
        Configuring chroot permissions and testing file upload directories across multiple client accounts can be tricky. <strong>SSH Desktop</strong> makes SFTP management effortless:
      </p>
      <ul>
        <li><strong>Dual-Pane Visual SFTP Client:</strong> Drag-and-drop file transfers with resume support and native permissions inspector.</li>
        <li><strong>Linux User &amp; Group Manager:</strong> Add, edit, and lock SFTP accounts with one click without terminal typos.</li>
        <li><strong>Permission Auditor:</strong> Instantly check folder ownership (root vs user) to eliminate "bad ownership or modes" login errors.</li>
      </ul>
      <p>
        Discover our <a href="../sftp-client.html">SFTP Client</a> and <a href="../linux-user-manager.html">Linux User Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-pm2-nodejs-production-linux-guide.html',
    title: 'How to Set Up PM2 for Node.js in Production on Linux (2026 Guide)',
    metaTitle: 'How to Set Up PM2 for Node.js in Production on Linux (2026 Guide)',
    metaDesc: 'Master PM2 on Ubuntu and Debian for Node.js production. Learn cluster mode, zero-downtime hot reloads, systemd startup persistence, and visual monitoring.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-pm2-nodejs-production-linux-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Node.js & DevOps',
    readTime: '11 min read',
    h1: 'How to Set Up PM2 for Node.js in Production on Linux: 2026 Guide',
    faqs: [
      {
        q: 'Why should I run Node.js with PM2 in Cluster Mode instead of Fork Mode?',
        a: 'Node.js runs on a single thread by default. On a 4-core or 8-core CPU, Fork mode only utilizes 1 core, wasting 75%–87% of server compute capacity. PM2 Cluster mode (pm2 start app.js -i max) spawns worker processes across all available CPU cores, sharing the network port and multiplying request throughput.'
      },
      {
        q: 'What is the difference between pm2 restart and pm2 reload?',
        a: 'pm2 restart terminates all worker processes simultaneously and restarts them, causing brief downtime. pm2 reload performs a rolling zero-downtime reload: it spawns a new worker, waits for it to listen, and then shuts down the old worker sequentially.'
      },
      {
        q: 'How do I ensure PM2 restarts all Node.js applications after a server reboot?',
        a: 'Run pm2 startup to generate and configure a systemd service unit. Then run pm2 save to freeze your current active process list into ~/.pm2/dump.pm2. Upon system reboot, systemd automatically resurrects your entire process tree.'
      }
    ],
    content: `
      <p class="blog-lead">
        Node.js is blazingly fast for asynchronous I/O, but by default it runs as a single-threaded process. If an unhandled exception triggers a crash or if heavy CPU work blocks the event loop, your entire application goes down. <strong>PM2</strong> is the production process manager of choice for Node.js, providing built-in clustering across CPU cores, zero-downtime hot reloads, automatic systemd resurrection, and log rotation. Learn how to configure PM2 on Linux in 2026.
      </p>

      <h2>Step 1: Install PM2 Globally via npm</h2>
      <p>Ensure Node.js and npm are installed, then install PM2 globally:</p>
      <pre><code>sudo npm install -g pm2

# Verify version
pm2 -v</code></pre>

      <h2>Step 2: Start Application in Cluster Mode</h2>
      <p>
        Instead of running in single-threaded fork mode, launch your application utilizing all available CPU cores:
      </p>
      <pre><code># Start application using all CPU cores with automatic load balancing
pm2 start server.js --name "api-backend" -i max</code></pre>
      <p>Or create a declarative production configuration file (<code>ecosystem.config.js</code>):</p>
      <pre><code>module.exports = {
  apps: [{
    name: 'api-backend',
    script: './dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};</code></pre>
      <p>Start using the ecosystem file:</p>
      <pre><code>pm2 start ecosystem.config.js --env production</code></pre>

      <h2>Step 3: Enable Zero-Downtime Hot Reloads</h2>
      <p>
        When deploying new code releases, never use <code>pm2 restart</code> which drops connections. Use rolling reloads:
      </p>
      <pre><code># Rolling reload: zero dropped HTTP packets
pm2 reload api-backend</code></pre>

      <h2>Step 4: Configure Automatic Reboot Persistence with Systemd</h2>
      <p>
        To ensure PM2 resurrects your Node.js processes automatically after server reboots or kernel upgrades:
      </p>
      <pre><code># Generate and install systemd startup hook
pm2 startup systemd

# (Copy and execute the sudo command PM2 outputs, for example:)
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u youruser --hp /home/youruser

# Save current active process list
pm2 save</code></pre>

      <h2>Step 5: Production Log Rotation</h2>
      <p>
        PM2 writes application stdout and stderr logs to <code>~/.pm2/logs/</code>. Install the official logrotate module to prevent disk exhaustion:
      </p>
      <pre><code>pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 50M
pm2 set pm2-logrotate:retain 10
pm2 set pm2-logrotate:compress true</code></pre>

      <h2>Step 6: Real-Time Process Monitoring</h2>
      <p>View CPU and memory metrics per worker in real time:</p>
      <pre><code>pm2 monit</code></pre>

      <h2>Manage Node.js Fleets Visually with SSH Desktop</h2>
      <p>
        Managing dozens of microservices across staging and production clusters via terminal screens can be cumbersome. <strong>SSH Desktop</strong> makes Node.js operations simple:
      </p>
      <ul>
        <li><strong>Interactive Process Manager:</strong> Inspect CPU, memory, uptime, and worker counts for PM2 and systemd services visually.</li>
        <li><strong>Multi-Server Log Streamer:</strong> Stream aggregated logs from PM2 worker instances across multiple servers simultaneously.</li>
        <li><strong>Automated Deployment Pipelines:</strong> Trigger <code>pm2 reload</code> via built-in Webhook servers and Multi-Server scripts.</li>
      </ul>
      <p>
        Explore our visual <a href="../linux-process-manager.html">Linux Process Manager</a> and <a href="../multi-server-automation.html">Multi-Server Automation</a>.
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
