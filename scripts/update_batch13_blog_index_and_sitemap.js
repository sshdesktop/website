const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up Nginx Load Balancing -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">High Availability</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-load-balancing-guide.html">
                How to Set Up Nginx Load Balancing (Round Robin, Least Conn, IP Hash): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Master Nginx load balancing algorithms across multiple backend servers. Learn upstream configuration, weighted distribution, passive health checks, and visual clustering.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-load-balancing-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: PostgreSQL Performance Tuning on Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Database Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="postgresql-performance-tuning-linux-guide.html">
                PostgreSQL Performance Tuning on Linux: 10 Critical Optimizations (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Optimize postgresql.conf on Linux servers. Calculate shared_buffers, tune work_mem, configure WAL checkpoints, and inspect query plans visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="postgresql-performance-tuning-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up Cloudflare Tunnel for SSH (Zero Trust) -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Zero Trust Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="cloudflare-tunnel-ssh-zero-trust-guide.html">
                How to Set Up Cloudflare Tunnel for SSH (Zero Trust, No Open Ports): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Secure your Linux server with Cloudflare Tunnel (cloudflared). Close port 22 completely, bypass CGNAT and dynamic IPs, and manage remote servers visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="cloudflare-tunnel-ssh-zero-trust-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-nginx-load-balancing-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 13 articles.');
} else {
  console.log('blog/index.html already contains Batch 13 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-load-balancing-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up Nginx Load Balancing Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/postgresql-performance-tuning-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>PostgreSQL Performance Tuning on Linux Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/cloudflare-tunnel-ssh-zero-trust-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up Cloudflare Tunnel for SSH Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-setup-nginx-load-balancing-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 13 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 13 URLs.');
}
