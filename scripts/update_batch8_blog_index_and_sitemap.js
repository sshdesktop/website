const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Manage Linux Disk Space & LVM -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Storage &amp; LVM</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-manage-linux-disk-space-lvm-guide.html">
                How to Manage Linux Disk Space &amp; LVM: Complete 2026 Admin Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Master df, du, ncdu, find large files, manage logical volumes with LVM (pvcreate, vgextend, lvextend, resize2fs), and reclaim server storage visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-manage-linux-disk-space-lvm-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Analyze Linux Logs with grep & journalctl -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Log Analysis</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-analyze-linux-logs-grep-journalctl-guide.html">
                How to Analyze Linux Server Logs with grep &amp; journalctl: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Master journalctl, /var/log, grep, awk, and tail -f to diagnose Linux server errors, track SSH brute-force attempts, filter systemd logs, and view logs visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-analyze-linux-logs-grep-journalctl-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Audit Linux Open Ports & Network Security -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Network Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>9 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-audit-linux-open-ports-network-security-guide.html">
                How to Audit Linux Open Ports &amp; Listening Services: 2026 Security Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Learn how to find all open listening ports on Linux using ss, netstat, lsof, and nmap, identify rogue daemons, secure open sockets, and audit network traffic visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-audit-linux-open-ports-network-security-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-manage-linux-disk-space-lvm-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 8 articles.');
} else {
  console.log('blog/index.html already contains Batch 8 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-manage-linux-disk-space-lvm-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Manage Linux Disk Space and LVM Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-analyze-linux-logs-grep-journalctl-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Analyze Linux Server Logs with grep and journalctl Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-audit-linux-open-ports-network-security-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Audit Linux Open Ports and Network Security Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-manage-linux-disk-space-lvm-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 8 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 8 URLs.');
}
