const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Fix SSH Connection Refused on Port 22 -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-ssh-connection-refused-port-22.html">
                How to Fix 'SSH Connection Refused' on Port 22: 7 Proven Solutions (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Step-by-step diagnostic guide: start systemd sshd services, open UFW/firewalld ports, configure AWS security groups, diagnose custom ports, and fix systemd socket activation on Ubuntu.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-ssh-connection-refused-port-22.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Transfer Files Over SSH: SCP vs SFTP vs Rsync -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">File Transfer</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-transfer-files-over-ssh-scp-vs-sftp-guide.html">
                How to Transfer Files Over SSH: SCP vs SFTP vs Rsync (2026 Complete Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Understand the differences between SCP, SFTP, and Rsync. Benchmark speed across thousands of small files, learn command line flags, and upgrade to dual-pane visual SFTP file management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-transfer-files-over-ssh-scp-vs-sftp-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: The Complete SSH Config File Tutorial -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Productivity</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-use-ssh-config-file-tutorial.html">
                The Complete SSH Config File Tutorial: Shortcuts, Jump Hosts &amp; Multi-Server Setup (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Master ~/.ssh/config: configure friendly host aliases, assign specific identity keys, set up ProxyJump bastion jump hosts, automate keepalives, and manage multiple servers effortlessly.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-use-ssh-config-file-tutorial.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-fix-ssh-connection-refused-port-22.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 2 articles.');
} else {
  console.log('blog/index.html already contains Batch 2 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-ssh-connection-refused-port-22.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Fix SSH Connection Refused on Port 22</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-transfer-files-over-ssh-scp-vs-sftp-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Transfer Files Over SSH: SCP vs SFTP vs Rsync</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-use-ssh-config-file-tutorial.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>The Complete SSH Config File Tutorial</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-fix-ssh-connection-refused-port-22.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 2 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 2 URLs.');
}
