const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newCards = `        <!-- Article: Fix SSH Permission Denied (publickey) -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-ssh-permission-denied-publickey-error.html">
                How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes &amp; Solutions (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Comprehensive diagnostic guide: diagnose verbose ssh -vvv traces, fix bad private key permissions with chmod &amp; icacls, configure sshd_config, solve OpenSSH 8.8+ RSA deprecation, and stop agent overload.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-ssh-permission-denied-publickey-error.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Connect PostgreSQL Over SSH Tunnel -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">DevOps &amp; DB</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-connect-to-remote-postgres-over-ssh-tunnel.html">
                How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step 2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Never expose port 5432 to the public internet. Learn how to securely forward database traffic using CLI flags (-L), configure pgAdmin 4 &amp; DBeaver, route through AWS RDS bastion jump hosts, and use visual GUI tools.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-connect-to-remote-postgres-over-ssh-tunnel.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-fix-ssh-permission-denied-publickey-error.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with new articles.');
} else {
  console.log('blog/index.html already contains new articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Fix Permission Denied (publickey) in SSH Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Connect to Remote PostgreSQL Over SSH Tunnel</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-fix-ssh-permission-denied-publickey-error.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with new URLs.');
} else {
  console.log('sitemap.xml already contains new URLs.');
}
