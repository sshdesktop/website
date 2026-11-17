const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up SSH Port Knocking with knockd -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Stealth Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssh-port-knocking-knockd-guide.html">
                How to Set Up SSH Port Knocking with knockd: 2026 Security Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Hide OpenSSH port 22 from Shodan and automated port scanners using knockd port knocking. Learn iptables sequences, timeout windows, and visual port auditing.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssh-port-knocking-knockd-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up Nginx Brotli Compression -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-brotli-compression-guide.html">
                How to Set Up Nginx Brotli Compression: 2026 Speed Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Enable Google Brotli compression on Nginx to achieve 25% smaller file sizes than Gzip. Learn dynamic and static pre-compression, MIME types, and speed tests.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-brotli-compression-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Fix "Too Many Open Files" in Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting & Kernel</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-too-many-open-files-linux-ulimit-guide.html">
                How to Fix "Too Many Open Files" in Linux: Complete 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Fix "Too Many Open Files" (EMFILE/ENFILE) errors in Linux. Learn permanent ulimit configuration, limits.conf, systemd LimitNOFILE, and visual socket tracking.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-too-many-open-files-linux-ulimit-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-ssh-port-knocking-knockd-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 22 articles.');
} else {
  console.log('blog/index.html already contains Batch 22 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssh-port-knocking-knockd-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-brotli-compression-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-too-many-open-files-linux-ulimit-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-ssh-port-knocking-knockd-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 22 entries.');
} else {
  console.log('sitemap.xml already contains Batch 22 entries.');
}
