const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up BorgBackup Over SSH for Linux Servers -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Backups & Storage</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-borgbackup-over-ssh-guide.html">
                How to Set Up BorgBackup Over SSH for Linux Servers: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Master deduplicated, encrypted offsite backups on Linux with BorgBackup over SSH. Learn repository initialization, pruning policies, and visual recovery.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-borgbackup-over-ssh-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up Nginx HTTP/3 QUIC on Ubuntu -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-http3-quic-guide.html">
                How to Set Up Nginx HTTP/3 (QUIC) on Ubuntu: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Enable HTTP/3 and QUIC over UDP on Nginx web servers. Learn 0-RTT handshakes, eliminating head-of-line blocking, Alt-Svc headers, and speed testing.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-http3-quic-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Audit Sudo Commands & User Activity with auditd -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security & Compliance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-audit-sudo-commands-user-activity-auditd.html">
                How to Audit Sudo Commands & User Activity with auditd (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Track all sudo commands, file modifications, and user activity on Linux using auditd. Learn ausearch, aureport, rules configuration, and security audits.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-audit-sudo-commands-user-activity-auditd.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-borgbackup-over-ssh-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 24 articles.');
} else {
  console.log('blog/index.html already contains Batch 24 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-borgbackup-over-ssh-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-http3-quic-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-audit-sudo-commands-user-activity-auditd.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-borgbackup-over-ssh-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 24 entries.');
} else {
  console.log('sitemap.xml already contains Batch 24 entries.');
}
