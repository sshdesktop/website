const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-setup-tls-1-3-http2-nginx-guide.html',
    title: 'How to Set Up TLS 1.3 & HTTP/2 on Nginx (2026 Security Guide)',
    metaTitle: 'How to Set Up TLS 1.3 & HTTP/2 on Nginx (2026 Security Guide)',
    metaDesc: 'Configure TLS 1.3, HTTP/2, and modern cipher suites on Nginx web servers. Eliminate legacy TLS protocols, achieve SSL Labs A+, and monitor SSL visually.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-tls-1-3-http2-nginx-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'SSL & Security',
    readTime: '11 min read',
    h1: 'How to Set Up TLS 1.3 & HTTP/2 on Nginx (2026 Security Guide)',
    faqs: [
      {
        q: 'Why should I disable TLS 1.0 and TLS 1.1 on my web servers?',
        a: 'TLS 1.0 and 1.1 rely on obsolete cryptographic hash algorithms (MD5, SHA-1) vulnerable to POODLE, BEAST, and Sweet32 attacks. Major web browsers and PCI-DSS compliance standards officially deprecate and reject TLS 1.0/1.1.'
      },
      {
        q: 'What is the performance advantage of TLS 1.3 over TLS 1.2?',
        a: 'TLS 1.3 cuts handshake latency in half by completing the cryptographic negotiation in a single round-trip (1-RTT) instead of two (2-RTT). For returning visitors, zero round-trip resumption (0-RTT) transmits application data immediately on the very first packet.'
      },
      {
        q: 'How do I test if my Nginx server is actively using TLS 1.3?',
        a: 'Run openssl s_client -connect yourdomain.com:443 -tls1_3. Look for Protocol: TLSv1.3 and Cipher: TLS_AES_256_GCM_SHA384 in the terminal output.'
      }
    ],
    content: `
      <p class="blog-lead">
        Modern web applications require both cutting-edge cryptographic security and sub-second delivery. Legacy cryptographic protocols introduce dangerous downgrade vulnerabilities and add unnecessary round-trip latency to every TLS handshake. Learn how to configure modern TLS 1.3, HTTP/2 multiplexing, and hardened cipher suites on Nginx in 2026 to achieve an A+ score on SSL Labs.
      </p>

      <h2>The Benefits of TLS 1.3 &amp; HTTP/2</h2>
      <ul>
        <li><strong>Reduced Latency (1-RTT Handshake):</strong> TLS 1.3 cuts connection setup time in half, shaving 50ms–150ms off initial page load speeds.</li>
        <li><strong>Stream Multiplexing:</strong> HTTP/2 eliminates head-of-line blocking by transmitting multiple CSS, JS, and image assets concurrently over a single TCP connection.</li>
        <li><strong>PFS by Default:</strong> TLS 1.3 removes RSA static key exchanges entirely, mandating Ephemeral Diffie-Hellman (ECDHE) for Perfect Forward Secrecy.</li>
      </ul>

      <h2>Step 1: Check OpenSSL and Nginx Version Support</h2>
      <p>Ensure your server has OpenSSL 1.1.1+ (or 3.x) and Nginx 1.13.0+:</p>
      <pre><code>nginx -V 2>&1 | grep -o "built with OpenSSL [^ ]*"</code></pre>
      <p>Modern Ubuntu 22.04 and 24.04 LTS installations ship with OpenSSL 3.0+ by default.</p>

      <h2>Step 2: Generate Strong Diffie-Hellman Parameters</h2>
      <p>Generate a unique 2048-bit (or 4096-bit) DH group to harden TLS 1.2 backwards compatibility:</p>
      <pre><code>sudo openssl dhparam -out /etc/nginx/dhparam.pem 2048</code></pre>

      <h2>Step 3: Configure Modern SSL Directives in Nginx</h2>
      <p>Create a dedicated security snippet at <code>/etc/nginx/snippets/ssl-params.conf</code>:</p>
      <pre><code># Enable only TLS 1.2 and TLS 1.3
ssl_protocols TLSv1.2 TLSv1.3;

# Prioritize server ciphers
ssl_prefer_server_ciphers on;

# Hardened TLS 1.3 and TLS 1.2 Cipher Suites
ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384';

# DH Parameters
ssl_dhparam /etc/nginx/dhparam.pem;

# SSL Session Caching
ssl_session_timeout 1d;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off;

# OCSP Stapling
ssl_stapling on;
ssl_stapling_verify on;
resolver 1.1.1.1 8.8.8.8 valid=300s;
resolver_timeout 5s;

# HSTS (Strict-Transport-Security)
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;</code></pre>

      <h2>Step 4: Enable HTTP/2 on Server Block</h2>
      <p>In your site virtual host (e.g., <code>/etc/nginx/sites-available/example.com</code>), enable the <code>http2</code> parameter:</p>
      <pre><code>server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com www.example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include snippets/ssl-params.conf;

    location / {
        proxy_pass http://localhost:3000;
        include proxy_params;
    }
}</code></pre>
      <p>Test configuration and reload:</p>
      <pre><code>sudo nginx -t &amp;&amp; sudo systemctl reload nginx</code></pre>

      <h2>Step 5: Verify TLS 1.3 &amp; HTTP/2 with curl</h2>
      <p>Verify protocol negotiation directly from the command line:</p>
      <pre><code>curl -I --http2 https://example.com</code></pre>
      <p>You should see <code>HTTP/2 200</code> in the top response header line.</p>

      <h2>Manage SSL Certificates Visually with SSH Desktop</h2>
      <p>
        Tracking SSL expiration dates across hundreds of client sites and clusters manually leads to unexpected certificate lapses. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Visual SSL Certificate Manager:</strong> View expiration dates, issuer hierarchies, and SAN lists at a glance.</li>
        <li><strong>One-Click Certbot Renewal:</strong> Trigger and test Let's Encrypt renewals without touching the terminal.</li>
        <li><strong>Security Header Auditor:</strong> Instantly check HSTS, CSP, and TLS version status across remote servers.</li>
      </ul>
      <p>
        Check out our <a href="../ssl-certificate-manager.html">SSL Certificate Manager</a> and <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-letsencrypt-wildcard-ssl-certbot-guide.html',
    title: 'How to Get Free Wildcard SSL with Let\'s Encrypt & Certbot (2026)',
    metaTitle: 'How to Get Free Wildcard SSL with Let\'s Encrypt & Certbot (2026)',
    metaDesc: 'Generate free wildcard SSL certificates (*.example.com) using Certbot and DNS-01 validation. Learn Cloudflare API automation, auto-renewal, and Nginx setup.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-letsencrypt-wildcard-ssl-certbot-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'SSL & Domains',
    readTime: '11 min read',
    h1: 'How to Set Up Let\'s Encrypt Wildcard SSL with Certbot (DNS-01 Guide)',
    faqs: [
      {
        q: 'Why can\'t I generate a wildcard certificate using HTTP-01 webroot challenge?',
        a: 'The ACME specification strictly mandates DNS-01 verification for wildcard certificates (*.domain.com). Proving ownership of an arbitrary subdomain requires creating a TXT record (_acme-challenge.domain.com) in the authoritative DNS zone, which standard webroot file placement cannot prove.'
      },
      {
        q: 'Can Certbot automatically renew wildcard certificates without manual DNS intervention?',
        a: 'Yes. By installing a DNS plugin (such as certbot-dns-cloudflare or certbot-dns-route53) and providing scoped DNS API credentials, Certbot creates the TXT record, validates ownership, deletes the record, and reloads Nginx automatically every 60 days.'
      },
      {
        q: 'Does a wildcard certificate for *.example.com also cover the root apex domain example.com?',
        a: 'No. A certificate for *.example.com only covers subdomains (e.g., app.example.com, api.example.com). Always request both domains in a single command: -d example.com -d "*.example.com".'
      }
    ],
    content: `
      <p class="blog-lead">
        When managing SaaS platforms, multi-tenant customer applications, or staging environments, requesting separate SSL certificates for every new subdomain is tedious and triggers Let's Encrypt rate limits. A single wildcard certificate (<code>*.example.com</code>) covers unlimited subdomains under one cryptographic key. Learn how to automate wildcard SSL generation using Certbot and DNS-01 validation in 2026.
      </p>

      <h2>How DNS-01 Validation Works</h2>
      <p>
        Because wildcard certificates can represent any subdomain, Let's Encrypt cannot verify ownership by looking for a file on port 80. Instead, Certbot creates a temporary DNS TXT record at <code>_acme-challenge.example.com</code>. Once Let's Encrypt verifies the TXT record via authoritative DNS nameservers, the certificate is issued, and Certbot cleans up the record.
      </p>

      <h2>Step 1: Install Certbot and Cloudflare DNS Plugin</h2>
      <p>Install the certbot snap package with the official Cloudflare plugin:</p>
      <pre><code>sudo snap install --classic certbot
sudo snap set certbot trust-plugin-with-root=ok
sudo snap install certbot-dns-cloudflare</code></pre>

      <h2>Step 2: Generate Scoped Cloudflare API Token</h2>
      <p>
        In your Cloudflare dashboard, navigate to <strong>My Profile &gt; API Tokens &gt; Create Token</strong>. Use the <em>Edit Zone DNS</em> template, restrict permissions to <code>Zone - DNS - Edit</code>, and restrict Zone Resources to your specific domain.
      </p>
      <p>Store the token on your server with strict permissions:</p>
      <pre><code>sudo mkdir -p /etc/letsencrypt
sudo nano /etc/letsencrypt/cloudflare.ini</code></pre>
      <p>Add your API token:</p>
      <pre><code>dns_cloudflare_api_token = 1234567890abcdef1234567890abcdef12345678</code></pre>
      <p>Protect the file so only root can read it:</p>
      <pre><code>sudo chmod 600 /etc/letsencrypt/cloudflare.ini</code></pre>

      <h2>Step 3: Request the Wildcard Certificate</h2>
      <p>Execute Certbot targeting both the apex domain and the wildcard pattern:</p>
      <pre><code>sudo certbot certonly \\
  --dns-cloudflare \\
  --dns-cloudflare-credentials /etc/letsencrypt/cloudflare.ini \\
  --dns-cloudflare-propagation-seconds 30 \\
  -d example.com \\
  -d "*.example.com" \\
  --email admin@example.com \\
  --agree-tos \\
  --no-eff-email</code></pre>
      <p>
        The certificate and private key will be saved to:
        <code>/etc/letsencrypt/live/example.com/fullchain.pem</code> and <code>privkey.pem</code>.
      </p>

      <h2>Step 4: Configure Nginx to Use the Wildcard Certificate</h2>
      <p>You can now reference this single certificate across all server blocks:</p>
      <pre><code># Handles api.example.com, app.example.com, admin.example.com, etc.
server {
    listen 443 ssl http2;
    server_name ~^(?&lt;subdomain&gt;.+)\\.example\\.com$;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    location / {
        proxy_pass http://localhost:4000;
        include proxy_params;
    }
}</code></pre>

      <h2>Step 5: Automated Renewal Hook</h2>
      <p>Test automatic renewal with a dry run:</p>
      <pre><code>sudo certbot renew --dry-run</code></pre>
      <p>Configure Nginx to reload automatically after renewals in <code>/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh</code>:</p>
      <pre><code>#!/usr/bin/env bash
systemctl reload nginx</code></pre>
      <pre><code>sudo chmod +x /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh</code></pre>

      <h2>Manage Multi-Domain SSL Fleets with SSH Desktop</h2>
      <p>
        Certificates spanning multiple domains and reverse proxies can become chaotic. <strong>SSH Desktop</strong> gives you full control:
      </p>
      <ul>
        <li><strong>Wildcard SSL Inspector:</strong> View all covered SAN domains and real-time expiration countdowns.</li>
        <li><strong>Nginx Virtual Host Wizard:</strong> Assign wildcard certificates to new proxy locations with one click.</li>
        <li><strong>Automated Renewal Monitoring:</strong> Get proactive visual alerts before any certificate lapses.</li>
      </ul>
      <p>
        Explore our <a href="../ssl-certificate-manager.html">SSL Certificate Manager</a> and <a href="../reverse-proxy-browser.html">Reverse Proxy Browser</a>.
      </p>
    `
  },
  {
    filename: 'how-to-enable-tcp-bbr-linux-guide.html',
    title: 'How to Enable TCP BBR on Linux for Faster Network Speed (2026 Guide)',
    metaTitle: 'How to Enable TCP BBR on Linux for Faster Network Speed (2026 Guide)',
    metaDesc: 'Boost Linux server network speed and reduce latency with Google TCP BBR congestion control. Learn kernel configuration, fq queueing, and bandwidth testing.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-enable-tcp-bbr-linux-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Network & Kernel',
    readTime: '10 min read',
    h1: 'How to Enable TCP BBR on Linux for Faster Network Speed (2026 Guide)',
    faqs: [
      {
        q: 'What is Google TCP BBR, and how is it better than Cubic?',
        a: 'Traditional congestion algorithms like Cubic interpret packet loss as network congestion, drastically throttling transmission speed even on lossy wireless or long-distance transatlantic fiber. BBR (Bottleneck Bandwidth and RTT) models the physical bottleneck bandwidth and minimum round-trip time, maximizing throughput without unnecessary throttling.'
      },
      {
        q: 'Does enabling TCP BBR require installing third-party kernel modules?',
        a: 'No. BBR has been built directly into the mainline Linux kernel since version 4.9. Any modern Ubuntu (20.04, 22.04, 24.04), Debian, or RHEL 9 installation can enable BBR with two lines in /etc/sysctl.conf.'
      },
      {
        q: 'Does TCP BBR improve download speed for my website visitors?',
        a: 'Yes, significantly. For visitors connecting over high-latency networks (e.g., mobile networks, cross-continent users), BBR delivers up to 2x to 10x faster download throughput and drastically reduces YouTube/video streaming buffering.'
      }
    ],
    content: `
      <p class="blog-lead">
        Traditional TCP congestion algorithms (like Cubic and Reno) date back to an era of wired Ethernet networks where packet loss was assumed to be buffer overflows. On modern cloud networks and mobile devices, random packet loss frequently causes Cubic to throttle download speeds unnecessarily. Developed by Google, <strong>BBR (Bottleneck Bandwidth and RTT)</strong> optimizes network throughput and minimizes bufferbloat. Learn how to enable BBR on Ubuntu, Debian, and RHEL in 2026.
      </p>

      <h2>Why TCP BBR Outperforms Cubic</h2>
      <p>
        BBR continuously measures maximum delivery rate and minimum round-trip time (RTT). Instead of waiting for packet loss to react, it paces packets to fill the network pipe without creating a queue at the bottleneck router.
      </p>
      <ul>
        <li><strong>Higher Throughput:</strong> Increases download speeds by up to 2,000% on lossy connections.</li>
        <li><strong>Lower Latency:</strong> Prevents bufferbloat, keeping ping and round-trip latency stable.</li>
        <li><strong>Zero Application Changes:</strong> Operates at the Linux kernel TCP stack level, instantly benefiting Nginx, Apache, SFTP, and API backends.</li>
      </ul>

      <h2>Step 1: Verify Linux Kernel Compatibility</h2>
      <p>TCP BBR requires Linux kernel 4.9 or later. Verify your current kernel version:</p>
      <pre><code>uname -r</code></pre>
      <p>If running Ubuntu 22.04/24.04 or Debian 11/12, your kernel is 5.15+ or 6.8+, which fully supports BBR.</p>

      <h2>Step 2: Check Available Congestion Control Algorithms</h2>
      <p>Query available and currently active algorithms:</p>
      <pre><code># Check available modules
sysctl net.ipv4.tcp_available_congestion_control

# Check current active algorithm (defaults to cubic or reno)
sysctl net.ipv4.tcp_congestion_control</code></pre>

      <h2>Step 3: Enable TCP BBR in sysctl.conf</h2>
      <p>BBR requires the Fair Queueing (<code>fq</code>) packet scheduler to pace outbound TCP packets accurately. Add both parameters to <code>/etc/sysctl.conf</code>:</p>
      <pre><code># Append settings to /etc/sysctl.conf
echo "net.core.default_qdisc = fq" | sudo tee -a /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control = bbr" | sudo tee -a /etc/sysctl.conf

# Apply sysctl settings immediately without rebooting
sudo sysctl -p</code></pre>

      <h2>Step 4: Verify That BBR Is Active</h2>
      <p>Confirm the new congestion control setting:</p>
      <pre><code>sysctl net.ipv4.tcp_congestion_control
# Output: net.ipv4.tcp_congestion_control = bbr</code></pre>
      <p>Verify that the BBR kernel module is loaded into memory:</p>
      <pre><code>lsmod | grep bbr
# Output: tcp_bbr                20480  1</code></pre>

      <h2>Step 5: Measure Network Performance with iperf3</h2>
      <p>Benchmark network throughput to verify the speed improvements:</p>
      <pre><code># Run iperf3 client test
iperf3 -c speedtest.server.net -P 4</code></pre>

      <h2>Monitor Server Network Throughput Visually with SSH Desktop</h2>
      <p>
        Evaluating network performance improvements across multiple cloud providers requires real-time telemetry. With <strong>SSH Desktop</strong>, you gain:
      </p>
      <ul>
        <li><strong>Live Bandwidth Gauges:</strong> Real-time inbound/outbound transfer rates and packet drop telemetry.</li>
        <li><strong>Sysctl Configuration Manager:</strong> Inspect, test, and tune kernel parameters across remote servers in a unified GUI.</li>
        <li><strong>Built-in Speed &amp; Latency Tester:</strong> Benchmark throughput between local desktop and remote Linux nodes instantly.</li>
      </ul>
      <p>
        Discover our <a href="../system-monitor.html">System Monitor</a> and <a href="../network-port-auditor.html">Network Port Auditor</a>.
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
