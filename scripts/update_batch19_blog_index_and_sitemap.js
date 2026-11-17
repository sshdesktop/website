const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up TLS 1.3 & HTTP/2 on Nginx -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">SSL & Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-tls-1-3-http2-nginx-guide.html">
                How to Set Up TLS 1.3 & HTTP/2 on Nginx (2026 Security Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Configure TLS 1.3, HTTP/2 multiplexing, and hardened cipher suites on Nginx web servers. Eliminate legacy TLS protocols, achieve SSL Labs A+, and monitor SSL visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-tls-1-3-http2-nginx-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Let's Encrypt Wildcard SSL with Certbot -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">SSL & Domains</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-letsencrypt-wildcard-ssl-certbot-guide.html">
                How to Get Free Wildcard SSL with Let's Encrypt & Certbot (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Generate free wildcard SSL certificates (*.example.com) using Certbot and DNS-01 validation. Master Cloudflare API automation, auto-renewal hooks, and Nginx setup.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-letsencrypt-wildcard-ssl-certbot-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Enable TCP BBR on Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Network & Kernel</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-enable-tcp-bbr-linux-guide.html">
                How to Enable TCP BBR on Linux for Faster Network Speed (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Boost Linux server network speed and reduce latency with Google TCP BBR congestion control. Learn kernel sysctl configuration, fq queueing, and bandwidth testing.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-enable-tcp-bbr-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-tls-1-3-http2-nginx-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 19 articles.');
} else {
  console.log('blog/index.html already contains Batch 19 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-tls-1-3-http2-nginx-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-letsencrypt-wildcard-ssl-certbot-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-enable-tcp-bbr-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-tls-1-3-http2-nginx-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 19 entries.');
} else {
  console.log('sitemap.xml already contains Batch 19 entries.');
}
