const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up Free SSL with Certbot & Nginx -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssl-certificate-certbot-nginx-guide.html">
                How to Set Up Free Let's Encrypt SSL with Certbot &amp; Nginx (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Secure your website with free Let's Encrypt certificates. Install Certbot on Ubuntu/Debian, configure Nginx virtual hosts, enforce HTTP to HTTPS redirects, and verify auto-renewal.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssl-certificate-certbot-nginx-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Manage Linux Users & Permissions -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">User &amp; Auth</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-manage-linux-users-groups-permissions-guide.html">
                How to Manage Linux Users, Groups &amp; Permissions: Complete 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Understand useradd vs adduser, grant sudo access safely with usermod -aG sudo, decode octal permissions (chmod 755/644/600), change ownership with chown, and manage users visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-manage-linux-users-groups-permissions-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up UFW Firewall on Ubuntu -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Firewall</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>9 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ufw-firewall-ubuntu-linux-guide.html">
                How to Set Up UFW Firewall on Ubuntu Linux: Complete 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Secure your Linux host with UFW (Uncomplicated Firewall). Set default-deny policies, open SSH ports without lockout, rate-limit brute-force attacks, and manage firewall rules visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ufw-firewall-ubuntu-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-ssl-certificate-certbot-nginx-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 7 articles.');
} else {
  console.log('blog/index.html already contains Batch 7 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssl-certificate-certbot-nginx-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up Free SSL with Certbot and Nginx Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-manage-linux-users-groups-permissions-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Manage Linux Users Groups and Permissions Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ufw-firewall-ubuntu-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up UFW Firewall on Ubuntu Linux Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-setup-ssl-certificate-certbot-nginx-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 7 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 7 URLs.');
}
