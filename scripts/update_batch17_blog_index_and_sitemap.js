const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up Nginx FastCGI Cache & Microcaching -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-fastcgi-cache-guide.html">
                How to Set Up Nginx FastCGI Cache & Microcaching: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Accelerate dynamic PHP and WordPress sites with Nginx FastCGI caching. Master fastcgi_cache_path, bypass rules, purge modules, and visual performance monitoring.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-fastcgi-cache-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Install & Secure Docker on Ubuntu -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Containers & DevOps</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-install-docker-ubuntu-server-guide.html">
                How to Install & Secure Docker on Ubuntu (24.04 & 22.04 LTS): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Install, harden, and optimize Docker Engine on Ubuntu. Master non-root user groups, daemon.json log limits, live-restore, and visual container management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-install-docker-ubuntu-server-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up Centralized Remote Logging with Rsyslog -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security & Monitoring</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-centralized-logging-rsyslog-guide.html">
                How to Set Up Centralized Remote Logging with Rsyslog: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Configure centralized remote logging on Linux using Rsyslog and TCP/TLS. Forward system logs, auth alerts, and application events securely to a central server.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-centralized-logging-rsyslog-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-nginx-fastcgi-cache-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 17 articles.');
} else {
  console.log('blog/index.html already contains Batch 17 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-fastcgi-cache-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-install-docker-ubuntu-server-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-centralized-logging-rsyslog-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-nginx-fastcgi-cache-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 17 entries.');
} else {
  console.log('sitemap.xml already contains Batch 17 entries.');
}
