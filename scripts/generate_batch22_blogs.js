const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-ssh-port-knocking-knockd-guide.html',
    title: 'How to Set Up SSH Port Knocking with knockd (2026 Security Guide)',
    metaTitle: 'How to Set Up SSH Port Knocking with knockd (2026 Security Guide)',
    metaDesc: 'Hide OpenSSH port 22 from Shodan and automated port scanners using knockd port knocking. Learn iptables sequences, timeout windows, and visual port auditing.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-ssh-port-knocking-knockd-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Stealth Security',
    readTime: '11 min read',
    h1: 'How to Set Up SSH Port Knocking with knockd: 2026 Security Guide',
    faqs: [
      {
        q: 'What is SSH port knocking, and how does it protect Linux servers?',
        a: 'Port knocking keeps SSH port 22 completely closed and filtered in the firewall by default. A background daemon (knockd) listens on network interfaces for a secret sequence of connection attempts to closed ports (e.g., TCP 7000, 8000, 9000). Upon receiving the valid knock sequence, the firewall opens port 22 dynamically only for the sender\'s IP address.'
      },
      {
        q: 'Can automated bots or Shodan scan and discover knocked ports?',
        a: 'No. To port scanners, all ports appear closed or filtered. The odds of a random scanner guessing a 3-port sequence with exact protocol flags within a 5-second window is less than 1 in 280 trillion.'
      },
      {
        q: 'How do I send a knock sequence from Windows, Mac, or Linux?',
        a: 'On Linux/macOS, use the knock utility: knock server-ip 7000:tcp 8000:tcp 9000:tcp. On Windows, use PowerShell with Test-NetConnection or dedicated SSH clients with pre-connection knock triggers.'
      }
    ],
    content: `
      <p class="blog-lead">
        Leaving OpenSSH port 22 open to the world invites tens of thousands of automated credential-stuffing bot scans every day, cluttering <code>/var/log/auth.log</code> and indexing your server on search engines like Shodan and Censys. <strong>Port Knocking</strong> provides stealth security by keeping port 22 completely closed until a secret sequence of network knocks opens it dynamically for your IP. Learn how to configure <code>knockd</code> and <code>iptables</code> in 2026.
      </p>

      <h2>How knockd Operates via Packet Sniffing</h2>
      <p>
        Unlike web services that bind to open sockets, <code>knockd</code> uses <code>libpcap</code> to inspect raw network packet headers on your interface. Because the ports it monitors are closed at the firewall level, port scanners receive no response. Only when the exact sequence of SYN packets arrives does <code>knockd</code> execute an <code>iptables</code> rule allowing your IP through.
      </p>

      <h2>Step 1: Install knockd and iptables-persistent</h2>
      <p>Install the daemon on Ubuntu or Debian:</p>
      <pre><code>sudo apt update
sudo apt install -y knockd iptables-persistent</code></pre>

      <h2>Step 2: Configure the knockd Daemon</h2>
      <p>Edit the configuration file at <code>/etc/knockd.conf</code>:</p>
      <pre><code>sudo nano /etc/knockd.conf</code></pre>
      <p>Configure open and close knock sequences:</p>
      <pre><code>[options]
    UseSyslog
    Interface = eth0   # Change to your public interface (check with: ip route)

[openSSH]
    sequence    = 7000:tcp,8000:tcp,9000:tcp
    seq_timeout = 5
    command     = /sbin/iptables -I INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags    = syn

[closeSSH]
    sequence    = 9000:tcp,8000:tcp,7000:tcp
    seq_timeout = 5
    command     = /sbin/iptables -D INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags    = syn</code></pre>
      <p>Enable the daemon in <code>/etc/default/knockd</code>:</p>
      <pre><code># Set START_KNOCKD=1
START_KNOCKD=1</code></pre>

      <h2>Step 3: Lock Down the Firewall</h2>
      <div class="blog-tip-box">
        <strong>Warning:</strong> Keep your current SSH terminal session open while testing firewall rules to prevent locking yourself out!
      </div>
      <p>Allow existing connections, then block all new unsolicited connections to port 22:</p>
      <pre><code># Allow established connections so you do not get disconnected
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Allow loopback
sudo iptables -A INPUT -i lo -j ACCEPT

# Drop all standard port 22 attempts
sudo iptables -A INPUT -p tcp --dport 22 -j DROP

# Save iptables rules
sudo netfilter-persistent save</code></pre>

      <h2>Step 4: Start knockd and Test Connection</h2>
      <p>Start and enable the service:</p>
      <pre><code>sudo systemctl enable --now knockd</code></pre>
      <p>From your local machine, try connecting to SSH (it will hang or time out):</p>
      <pre><code>ssh user@your-server-ip   # Connection hangs!</code></pre>
      <p>Send the secret knock sequence:</p>
      <pre><code>knock your-server-ip 7000:tcp 8000:tcp 9000:tcp</code></pre>
      <p>Immediately connect via SSH:</p>
      <pre><code>ssh user@your-server-ip   # Connected successfully!</code></pre>

      <h2>Audit Server Ports Visually with SSH Desktop</h2>
      <p>
        Verifying which ports are open, closed, or listening across a multi-server fleet is critical for cloud security. <strong>SSH Desktop</strong> provides:
      </p>
      <ul>
        <li><strong>Visual Network Port Auditor:</strong> Scan remote servers to verify whether port 22, 80, 443, or database ports are properly firewalled.</li>
        <li><strong>Pre-Connection Command Triggers:</strong> Automatically fire knock sequences before launching SSH or SFTP sessions.</li>
        <li><strong>Firewall Manager:</strong> Inspect, edit, and flush iptables or UFW rules without syntax errors.</li>
      </ul>
      <p>
        Check out our <a href="../network-port-auditor.html">Network Port Auditor</a> and <a href="../linux-firewall-gui.html">Linux Firewall GUI</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-nginx-brotli-compression-guide.html',
    title: 'How to Set Up Nginx Brotli Compression: Complete 2026 Speed Guide',
    metaTitle: 'How to Set Up Nginx Brotli Compression: Complete 2026 Speed Guide',
    metaDesc: 'Enable Google Brotli compression on Nginx to achieve 25% smaller file sizes than Gzip. Learn dynamic and static pre-compression, MIME types, and speed tests.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-nginx-brotli-compression-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Web Performance',
    readTime: '10 min read',
    h1: 'How to Set Up Nginx Brotli Compression: 2026 Speed Guide',
    faqs: [
      {
        q: 'How much better is Brotli compression compared to standard Gzip?',
        a: 'Developed by Google, Brotli achieves 15%–25% higher compression ratios on JavaScript and HTML, and up to 30% smaller files on CSS compared to Gzip at identical CPU overhead. This drastically accelerates First Contentful Paint (FCP) and Largest Contentful Paint (LCP).'
      },
      {
        q: 'What is the difference between dynamic Brotli and static pre-compressed Brotli?',
        a: 'Dynamic Brotli compresses HTTP responses on the fly as requests arrive (recommended level 4 to 6 for real-time speed). Static Brotli (brotli_static on) serves pre-compressed .br files generated during your build pipeline at maximum level 11 with 0% runtime CPU cost.'
      },
      {
        q: 'Do all modern web browsers support Brotli compression?',
        a: 'Yes. 98%+ of global web traffic across Chrome, Edge, Safari, and Firefox supports Brotli over HTTPS via the Accept-Encoding: br request header.'
      }
    ],
    content: `
      <p class="blog-lead">
        Page weight directly dictates mobile load times, bounce rates, and Google Core Web Vitals rankings. While Gzip has been the web standard for over two decades, Google's <strong>Brotli algorithm</strong> delivers significantly higher density compression with faster decompression times. Learn how to install and configure Brotli on Nginx web servers in 2026.
      </p>

      <h2>Why Brotli Outperforms Gzip</h2>
      <p>
        Brotli uses a 120KB static dictionary of common web words, HTML tags, and JavaScript keywords built directly into the decompressor. As a result, repetitive syntax in frontend bundles compresses up to <strong>30% smaller</strong> than standard Gzip.
      </p>

      <h2>Step 1: Install Nginx with the Brotli Module</h2>
      <p>
        On Ubuntu and Debian, install the official dynamic Brotli module from the verified Ondřej Surý or Nginx PPA:
      </p>
      <pre><code># Add official PPA with pre-compiled modules
sudo add-apt-repository -y ppa:ondrej/nginx
sudo apt update
sudo apt install -y nginx libnginx-mod-brotli</code></pre>

      <h2>Step 2: Configure Brotli Directives in nginx.conf</h2>
      <p>Edit <code>/etc/nginx/nginx.conf</code> inside the <code>http { ... }</code> block:</p>
      <pre><code>http {
    # Enable dynamic Brotli compression
    brotli on;
    brotli_comp_level 6; # Optimal balance between compression ratio and CPU usage

    # Enable pre-compressed static file serving (.br)
    brotli_static on;

    # Minimum response size to compress
    brotli_min_length 256;

    # MIME types to compress
    brotli_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/x-javascript
        application/json
        application/xml
        application/xml+rss
        image/svg+xml;
}</code></pre>

      <h2>Step 3: Static Pre-Compression for Maximum Performance</h2>
      <p>
        For static production assets (CSS, JS, SVG), pre-compress files at build time using the <code>brotli</code> CLI utility at maximum compression level 11:
      </p>
      <pre><code># Pre-compress all CSS and JS files in production directory
find /var/www/html/assets -type f \\( -name "*.css" -o -name "*.js" \\) -exec brotli -f -k -q 11 {} \\;</code></pre>
      <p>
        With <code>brotli_static on;</code>, Nginx serves the pre-generated <code>.br</code> file directly from disk, delivering maximum compression with <strong>zero runtime CPU usage</strong>.
      </p>

      <h2>Step 4: Test and Verify with curl</h2>
      <p>Send a request advertising <code>Accept-Encoding: br</code>:</p>
      <pre><code>curl -I -H "Accept-Encoding: br" https://example.com/assets/css/style.min.css</code></pre>
      <p>Verify that the response includes:</p>
      <pre><code>Content-Encoding: br</code></pre>

      <h2>Monitor Web Performance Visually with SSH Desktop</h2>
      <p>
        Auditing asset compression and monitoring CPU utilization during traffic spikes is simple with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Reverse Proxy Browser:</strong> Inspect virtual host configs, test Brotli headers, and reload Nginx with one click.</li>
        <li><strong>Bandwidth &amp; Resource Gauges:</strong> Track live bandwidth savings and CPU metrics across remote web servers.</li>
        <li><strong>Code-Splitting Build Pipeline:</strong> Leverage built-in asset minification tools for production deployments.</li>
      </ul>
      <p>
        Explore our <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a> and <a href="../system-monitor.html">System Monitor</a>.
      </p>
    `
  },
  {
    filename: 'how-to-fix-too-many-open-files-linux-ulimit-guide.html',
    title: 'How to Fix Too Many Open Files in Linux (ulimit & systemd 2026)',
    metaTitle: 'How to Fix Too Many Open Files in Linux (ulimit & systemd 2026)',
    metaDesc: 'Fix Too Many Open Files (EMFILE/ENFILE) errors in Linux. Learn permanent ulimit configuration, limits.conf, systemd LimitNOFILE, and visual socket tracking.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-fix-too-many-open-files-linux-ulimit-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Troubleshooting & Kernel',
    readTime: '11 min read',
    h1: 'How to Fix "Too Many Open Files" in Linux: Complete 2026 Guide',
    faqs: [
      {
        q: 'Why does Linux throw "Too many open files" when physical disk space is available?',
        a: 'In UNIX/Linux, "everything is a file" — including TCP sockets, pipes, and event loops (epoll). When an application (like Nginx, Node.js, or PostgreSQL) handles thousands of concurrent visitors, it opens thousands of network file descriptors. Once the process hits its operating system limit (ulimit -n), the kernel rejects all new socket connections with error EMFILE.'
      },
      {
        q: 'Why doesn\'t modifying /etc/security/limits.conf affect systemd services?',
        a: 'Systemd completely ignores /etc/security/limits.conf for services it manages. To increase file descriptor limits for daemons started via systemctl, you must configure LimitNOFILE=65535 inside the service unit file or an override drop-in file.'
      },
      {
        q: 'How do I check the current file descriptor limit of a running process?',
        a: 'Find the process PID (e.g., pgrep nginx) and inspect /proc/$PID/limits: cat /proc/$PID/limits | grep "Max open files". This displays the exact Soft and Hard limits enforced on that active process.'
      }
    ],
    content: `
      <p class="blog-lead">
        During high-traffic flash sales or sudden web application surges, production servers frequently crash with <code>socket: too many open files (errno: 24 / EMFILE)</code>. In Linux, every TCP connection, database query socket, and static asset consumes a <strong>file descriptor</strong>. When default limits (often set as low as 1,024) are reached, the kernel abruptly rejects new connections. Learn how to increase file descriptor limits permanently across the kernel, user sessions, and systemd services in 2026.
      </p>

      <h2>The Three Layers of Linux File Limits</h2>
      <p>To eliminate file descriptor bottlenecks completely, you must configure three distinct tiers:</p>
      <ul>
        <li><strong>Kernel-Wide Limit:</strong> <code>fs.file-max</code> (Governs the entire OS).</li>
        <li><strong>User Shell Limits:</strong> <code>/etc/security/limits.conf</code> (Governs interactive PAM/SSH sessions).</li>
        <li><strong>Systemd Service Limits:</strong> <code>LimitNOFILE</code> (Governs background daemons like Nginx, Node, and Docker).</li>
      </ul>

      <h2>Step 1: Increase Global Kernel Limit in sysctl.conf</h2>
      <p>Check current system-wide maximum and allocated file descriptors:</p>
      <pre><code>cat /proc/sys/fs/file-nr
# Output: 2432 (allocated)   0 (free)   2097152 (maximum)</code></pre>
      <p>If maximum is low, increase it in <code>/etc/sysctl.conf</code>:</p>
      <pre><code>echo "fs.file-max = 2097152" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p</code></pre>

      <h2>Step 2: Increase User &amp; Session Limits in limits.conf</h2>
      <p>Edit <code>/etc/security/limits.conf</code>:</p>
      <pre><code>sudo nano /etc/security/limits.conf</code></pre>
      <p>Append soft and hard limits for all users:</p>
      <pre><code>* soft nofile 65535
* hard nofile 65535
root soft nofile 65535
root hard nofile 65535</code></pre>
      <p>Also verify that PAM enables limits in <code>/etc/pam.d/common-session</code>:</p>
      <pre><code>session required pam_limits.so</code></pre>

      <h2>Step 3: Increase Systemd Service Limits (The Crucial Step!)</h2>
      <p>
        Because systemd ignores <code>limits.conf</code>, you must set <code>LimitNOFILE</code> on your background services:
      </p>
      <p>For example, to fix Nginx or Node.js:</p>
      <pre><code># Create a systemd override directory
sudo systemctl edit nginx</code></pre>
      <p>In the editor, add:</p>
      <pre><code>[Service]
LimitNOFILE=65535</code></pre>
      <p>Save and reload systemd:</p>
      <pre><code>sudo systemctl daemon-reload
sudo systemctl restart nginx</code></pre>

      <h2>Step 4: Verify the New Limits on the Running Process</h2>
      <p>Inspect the live limits on the running daemon PID:</p>
      <pre><code>PID=$(pgrep -o nginx)
cat /proc/$PID/limits | grep "Max open files"</code></pre>
      <p>Verify that <code>Soft Limit</code> and <code>Hard Limit</code> both report <code>65535</code>.</p>

      <h2>Inspect Open Sockets &amp; Descriptors Visually with SSH Desktop</h2>
      <p>
        Tracking runaway open files and connection leaks across complex clusters is effortless with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Process Inspector:</strong> View open socket counts, file handles, and memory utilization per process in real time.</li>
        <li><strong>Systemd Manager:</strong> Inspect and edit service overrides without breaking unit files.</li>
        <li><strong>Network Port Auditor:</strong> Identify established TCP sockets and spot abandoned connections before limits are breached.</li>
      </ul>
      <p>
        Discover our <a href="../linux-process-manager.html">Linux Process Manager</a> and <a href="../system-monitor.html">System Monitor</a>.
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
