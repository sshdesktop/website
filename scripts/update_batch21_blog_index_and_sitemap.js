const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up Monit on Linux for Automatic Service Recovery -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Monitoring & Reliability</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-monit-linux-automatic-service-recovery.html">
                How to Set Up Monit on Linux for Automatic Service Recovery (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Configure Monit on Linux to automatically restart crashed services (Nginx, MySQL, Node). Master CPU/RAM thresholds, protocol checks, and self-healing server architectures.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-monit-linux-automatic-service-recovery.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up a Chroot SFTP Jail on Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">SFTP & Permissions</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-chroot-sftp-jail-linux-guide.html">
                How to Set Up a Chroot SFTP Jail on Linux: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Restrict Linux SFTP users strictly to their home directory without SSH shell access using OpenSSH ChrootDirectory and internal-sftp. Learn root ownership rules and visual SFTP management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-chroot-sftp-jail-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up PM2 for Node.js in Production -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Node.js & DevOps</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-pm2-nodejs-production-linux-guide.html">
                How to Set Up PM2 for Node.js in Production on Linux: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Master PM2 on Ubuntu and Debian for Node.js production. Learn multi-core cluster mode, zero-downtime rolling hot reloads, systemd startup persistence, and visual telemetry.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-pm2-nodejs-production-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-monit-linux-automatic-service-recovery.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 21 articles.');
} else {
  console.log('blog/index.html already contains Batch 21 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-monit-linux-automatic-service-recovery.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-chroot-sftp-jail-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-pm2-nodejs-production-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-monit-linux-automatic-service-recovery.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 21 entries.');
} else {
  console.log('sitemap.xml already contains Batch 21 entries.');
}
