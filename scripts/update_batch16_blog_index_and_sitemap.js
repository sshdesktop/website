const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up SSH 2FA on Linux with Google Authenticator -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Server Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssh-2fa-google-authenticator-guide.html">
                How to Set Up SSH 2FA (Two-Factor Authentication) on Linux: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Harden Linux SSH with Two-Factor Authentication (2FA) using Google Authenticator and PAM. Learn TOTP setup, emergency backup codes, rate limiting, and visual key management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssh-2fa-google-authenticator-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up Logrotate on Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">DevOps & Maintenance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-logrotate-linux-guide.html">
                How to Set Up Logrotate on Linux: Rotation, Compression & Retention (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Master logrotate on Ubuntu, Debian, and RHEL. Prevent full disks with automatic log rotation, gzip compression, postrotate signals, copytruncate, and visual log analytics.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-logrotate-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Install & Secure Redis on Ubuntu -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Database & Caching</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-install-redis-ubuntu-server-guide.html">
                How to Install & Secure Redis on Ubuntu (24.04 & 22.04 LTS): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Install, configure, and secure Redis on Ubuntu. Master memory limits (maxmemory), eviction policies, requirepass authentication, systemd supervision, and remote SSH tunneling.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-install-redis-ubuntu-server-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-ssh-2fa-google-authenticator-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 16 articles.');
} else {
  console.log('blog/index.html already contains Batch 16 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssh-2fa-google-authenticator-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-logrotate-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-install-redis-ubuntu-server-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-ssh-2fa-google-authenticator-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 16 entries.');
} else {
  console.log('sitemap.xml already contains Batch 16 entries.');
}
