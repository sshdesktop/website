const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up Automatic Security Updates on Ubuntu & Debian -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security & Maintenance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-unattended-upgrades-ubuntu-guide.html">
                How to Set Up Automatic Security Updates on Ubuntu & Debian: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Configure unattended-upgrades on Ubuntu and Debian servers. Learn automatic security patching, kernel reboot scheduling, email alerts, and visual server package management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-unattended-upgrades-ubuntu-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Configure Nginx Rate Limiting to Stop DDoS & Brute-Force -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-rate-limiting-guide.html">
                How to Configure Nginx Rate Limiting to Stop DDoS & Brute-Force (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Protect web applications from DDoS and login brute-force attacks with Nginx rate limiting. Master limit_req_zone, burst buffering, nodelay, and visual reverse proxy monitoring.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-rate-limiting-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: How to Fix "No Space Left on Device" in Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting & Storage</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-no-space-left-on-device-linux-guide.html">
                How to Fix "No Space Left on Device" in Linux (Even When df Shows Free Space)
              </a>
            </h2>
            <p class="blog-card-desc">
              Troubleshoot inode exhaustion (df -i), unlinked open files held by running processes (lsof +L1), hidden active mount points, and reserved ext4 superuser blocks.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-no-space-left-on-device-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-unattended-upgrades-ubuntu-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 15 articles.');
} else {
  console.log('blog/index.html already contains Batch 15 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-unattended-upgrades-ubuntu-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-rate-limiting-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-no-space-left-on-device-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-unattended-upgrades-ubuntu-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 15 entries.');
} else {
  console.log('sitemap.xml already contains Batch 15 entries.');
}
