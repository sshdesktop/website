const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Secure /tmp, /var/tmp, and /dev/shm on Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security & Hardening</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-secure-tmp-dev-shm-fstab-guide.html">
                How to Secure /tmp, /var/tmp, and /dev/shm on Linux (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Harden Linux temporary directories against malware and privilege escalation. Learn /etc/fstab mount options nosuid, noexec, nodev, and CIS compliance.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-secure-tmp-dev-shm-fstab-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Configure Logwatch for Daily Linux Email Reports -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Monitoring & Logs</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-configure-logwatch-daily-reports-linux.html">
                How to Configure Logwatch for Daily Linux Email Reports (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Automate server log auditing with Logwatch on Linux. Configure daily email digests for SSH logins, failed sudo attempts, disk alerts, and firewall events.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-configure-logwatch-daily-reports-linux.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Limit Process CPU & Memory with Systemd Cgroups v2 -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Performance & DevOps</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>12 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-limit-process-cpu-memory-systemd-cgroups-guide.html">
                How to Limit Process CPU & Memory with Systemd Cgroups v2 (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Prevent memory leaks and runaway processes from freezing Linux servers. Learn cgroups v2, systemd resource limits MemoryMax, CPUQuota, and OOMScoreAdjust.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-limit-process-cpu-memory-systemd-cgroups-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-secure-tmp-dev-shm-fstab-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 25 articles.');
} else {
  console.log('blog/index.html already contains Batch 25 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-secure-tmp-dev-shm-fstab-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-configure-logwatch-daily-reports-linux.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-limit-process-cpu-memory-systemd-cgroups-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-secure-tmp-dev-shm-fstab-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 25 entries.');
} else {
  console.log('sitemap.xml already contains Batch 25 entries.');
}
