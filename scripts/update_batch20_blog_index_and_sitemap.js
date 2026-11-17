const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up SSH Agent Forwarding Safely -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">SSH & Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssh-agent-forwarding-safely-guide.html">
                How to Set Up SSH Agent Forwarding Safely (ProxyJump vs ForwardAgent): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Understand the security risks of SSH Agent Forwarding. Learn why ProxyJump is safer, how socket hijacking works, and how to configure secure bastion access.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssh-agent-forwarding-safely-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up a Webhook Server for Linux Deployments -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">CI/CD & Automation</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-webhook-server-linux-deployments-guide.html">
                How to Set Up a Webhook Server for Linux Deployments (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Automate GitHub and GitLab deployments on Linux using a lightweight Go webhook daemon. Master HMAC SHA-256 secrets, systemd, and zero-downtime updates.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-webhook-server-linux-deployments-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: How to Fix 504 Gateway Timeout in Nginx -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting & Nginx</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-504-gateway-timeout-nginx-guide.html">
                How to Fix 504 Gateway Timeout Error in Nginx: Step-by-Step Guide (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Resolve 504 Gateway Timeout errors in Nginx step-by-step. Troubleshoot slow database queries, proxy_read_timeout, FastCGI PHP-FPM limits, and inspect logs visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-504-gateway-timeout-nginx-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-ssh-agent-forwarding-safely-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 20 articles.');
} else {
  console.log('blog/index.html already contains Batch 20 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssh-agent-forwarding-safely-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-webhook-server-linux-deployments-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-504-gateway-timeout-nginx-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-setup-ssh-agent-forwarding-safely-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 20 entries.');
} else {
  console.log('sitemap.xml already contains Batch 20 entries.');
}
