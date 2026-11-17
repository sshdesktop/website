const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: How to Fix SSH Connection Timed Out -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Networking &amp; Fixes</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-ssh-connection-timed-out.html">
                How to Fix 'SSH Connection Timed Out' (Port 22): 6 Proven Fixes (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Understand why packets disappear. Diagnose silent firewall packet drops, update AWS EC2 security groups, test for ISP port 22 blocks using portquiz, and fix cloud IP address changes.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-ssh-connection-timed-out.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: How to Tunnel MySQL over SSH -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Database &amp; Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-tunnel-mysql-mariadb-over-ssh.html">
                How to Connect to Remote MySQL &amp; MariaDB Over SSH Tunnel (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Never expose port 3306 to the public internet. Connect to remote MySQL securely using CLI port forwarding (-L), MySQL Workbench, DBeaver, Python/Node.js code, and visual Database Studio.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-tunnel-mysql-mariadb-over-ssh.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: How to Set Up SSH Keys on macOS -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">macOS &amp; Apple</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>9 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssh-keys-on-macos-guide.html">
                How to Set Up SSH Keys on macOS: Complete 2026 Guide (Ed25519 &amp; Keychain)
              </a>
            </h2>
            <p class="blog-card-desc">
              Generate elliptic-curve Ed25519 keys on Mac, configure Apple Keychain integration with UseKeychain so passphrases persist across reboots, copy keys to servers with ssh-copy-id, and add to GitHub.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssh-keys-on-macos-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-fix-ssh-connection-timed-out.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 5 articles.');
} else {
  console.log('blog/index.html already contains Batch 5 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-ssh-connection-timed-out.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Fix SSH Connection Timed Out Port 22 Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-tunnel-mysql-mariadb-over-ssh.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Connect to Remote MySQL and MariaDB Over SSH Tunnel</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssh-keys-on-macos-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up SSH Keys on macOS Complete Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-fix-ssh-connection-timed-out.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 5 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 5 URLs.');
}
