const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Fix Connection Reset by Peer in SSH -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting & Fixes</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-ssh-connection-reset-by-peer.html">
                How to Fix 'Connection Reset by Peer' in SSH: 2026 Troubleshooting Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Fix 'Connection reset by peer' SSH errors. Troubleshoot MTU mismatches, MaxStartups limits, firewall state timeouts, fail2ban drops, and TCP RST packets.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-ssh-connection-reset-by-peer.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Configure Lynis for Linux Security Auditing -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security & Compliance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-configure-lynis-security-auditing-linux.html">
                How to Configure Lynis for Linux Security Auditing (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Automate vulnerability scanning and compliance checks with Lynis on Linux. Learn system auditing, Hardening Index scoring, cron reports, and CIS compliance.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-configure-lynis-security-auditing-linux.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Configure Nginx WebSocket Reverse Proxy -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-websocket-reverse-proxy-guide.html">
                How to Configure Nginx WebSocket Reverse Proxy (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Configure Nginx as a reverse proxy for WebSockets (ws:// & wss://). Fix 400 Bad Request errors, configure Upgrade headers, and eliminate 60s timeouts.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-websocket-reverse-proxy-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-fix-ssh-connection-reset-by-peer.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 26 articles.');
} else {
  console.log('blog/index.html already contains Batch 26 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-ssh-connection-reset-by-peer.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-configure-lynis-security-auditing-linux.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-websocket-reverse-proxy-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-fix-ssh-connection-reset-by-peer.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 26 entries.');
} else {
  console.log('sitemap.xml already contains Batch 26 entries.');
}
