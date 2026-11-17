const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Linux Kernel & Network Tuning (sysctl.conf) for High-Traffic Servers -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Kernel Tuning</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="linux-sysctl-tuning-high-traffic-guide.html">
                Linux Kernel & Network Tuning (sysctl.conf) for High-Traffic Servers: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Tuning sysctl.conf parameters for production web servers. Fix connection backlog, TIME_WAIT socket reuse, TCP buffer sizing, file descriptors, and monitor network spikes visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="linux-sysctl-tuning-high-traffic-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Nginx Security Headers Hardening Guide -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="nginx-security-headers-hardening-guide.html">
                Nginx Security Headers Hardening Guide (CSP, HSTS, X-Frame-Options): 2026
              </a>
            </h2>
            <p class="blog-card-desc">
              Harden your Nginx reverse proxy with enterprise HTTP security headers. Configure HSTS, Content-Security-Policy, Permissions-Policy, X-Content-Type-Options, and achieve an A+ on security scanners.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="nginx-security-headers-hardening-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: How to Fix 502 Bad Gateway Error in Nginx -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-502-bad-gateway-nginx-guide.html">
                How to Fix 502 Bad Gateway Error in Nginx: Step-by-Step Troubleshooting (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Resolve 502 Bad Gateway errors between Nginx and PHP-FPM, Node.js, Python/Gunicorn, or Docker. Troubleshoot socket permissions, upstream timeouts, crashed daemons, and debug logs instantly.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-502-bad-gateway-nginx-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('linux-sysctl-tuning-high-traffic-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 14 articles.');
} else {
  console.log('blog/index.html already contains Batch 14 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/linux-sysctl-tuning-high-traffic-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/nginx-security-headers-hardening-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-502-bad-gateway-nginx-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('linux-sysctl-tuning-high-traffic-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 14 entries.');
} else {
  console.log('sitemap.xml already contains Batch 14 entries.');
}
