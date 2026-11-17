const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Automate Database Backups Over SSH -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Database & Backups</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-automate-database-backups-over-ssh.html">
                How to Automate Database Backups Over SSH (PostgreSQL & MySQL 2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Automate offsite database backups over SSH for PostgreSQL and MySQL. Learn streamed pipe dumps with zero local disk usage, gzip compression, retention pruning, and visual recovery.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-automate-database-backups-over-ssh.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Monitor Linux Disk I/O Bottlenecks -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Performance & Storage</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-monitor-linux-disk-io-bottlenecks.html">
                How to Monitor Linux Disk I/O Bottlenecks (iostat, iotop & pidstat): 2026
              </a>
            </h2>
            <p class="blog-card-desc">
              Diagnose high iowait and Linux disk storage bottlenecks using iostat, iotop, and pidstat. Learn %util, await latency analysis, process tracking, and visual disk telemetry.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-monitor-linux-disk-io-bottlenecks.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up Zero-Downtime Deployments with Nginx -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">CI/CD & Deployments</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-zero-downtime-deployments-nginx-guide.html">
                How to Set Up Zero-Downtime Deployments with Nginx: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Deploy web apps with zero downtime using Nginx upstream switching, single-server Blue-Green deployments, automated smoke testing, graceful reloads, and multi-server orchestration.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-zero-downtime-deployments-nginx-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-automate-database-backups-over-ssh.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 18 articles.');
} else {
  console.log('blog/index.html already contains Batch 18 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-automate-database-backups-over-ssh.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-monitor-linux-disk-io-bottlenecks.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-zero-downtime-deployments-nginx-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-automate-database-backups-over-ssh.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 18 entries.');
} else {
  console.log('sitemap.xml already contains Batch 18 entries.');
}
