const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Linux Crontab Guide -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Automation</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-run-cron-jobs-linux-crontab-guide.html">
                The Complete Linux Crontab Guide: Syntax, Examples &amp; Best Practices (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Master scheduled tasks on Linux. Learn crontab five-field syntax (* * * * *), real-world schedule patterns, environment variable traps, log redirection, and visual GUI scheduling.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-run-cron-jobs-linux-crontab-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Manage systemd Services -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">DevOps &amp; Process</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-manage-systemd-services-linux-guide.html">
                How to Manage systemd Services on Linux: Complete 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Master systemctl commands and unit files. Create custom .service configurations with auto-restart, manage unprivileged users, tail live logs with journalctl -f, and use visual GUI tools.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-manage-systemd-services-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Monitor Linux Server Performance -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-monitor-linux-server-performance-guide.html">
                How to Monitor Linux Server Performance: CPU, RAM, Disk &amp; I/O (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Diagnose system slowdowns quickly. Understand Linux load averages, interpret free -m memory buffers, check disk I/O bottlenecks with iostat &amp; iotop, and monitor with real-time visual dashboards.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-monitor-linux-server-performance-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-run-cron-jobs-linux-crontab-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 6 articles.');
} else {
  console.log('blog/index.html already contains Batch 6 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-run-cron-jobs-linux-crontab-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>The Complete Linux Crontab Guide Syntax and Examples</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-manage-systemd-services-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Manage systemd Services on Linux Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-monitor-linux-server-performance-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Monitor Linux Server Performance CPU RAM Disk IO Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-run-cron-jobs-linux-crontab-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 6 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 6 URLs.');
}
