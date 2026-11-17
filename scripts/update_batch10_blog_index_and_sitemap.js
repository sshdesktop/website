const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Create & Configure Swap File on Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Memory &amp; Performance</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-create-swap-file-linux-guide.html">
                How to Add &amp; Configure Swap Space on Linux (Ubuntu, Debian, RHEL): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Step-by-step guide to adding a swap file on Linux. Prevent OOM killer crashes, configure /etc/fstab persistence, optimize swappiness, and monitor RAM visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-create-swap-file-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Deploy Docker Compose Over SSH -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Containers &amp; DevOps</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-run-docker-compose-over-ssh.html">
                How to Deploy Docker Compose Over SSH (Remote Server Guide 2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Deploy and manage multi-container Docker Compose stacks remotely over SSH. Learn DOCKER_HOST contexts, compose.yaml best practices, and visual container management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-run-docker-compose-over-ssh.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Connect to Remote Redis & Kafka Over SSH Tunnel -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Database &amp; Messaging</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-connect-to-remote-redis-over-ssh-tunnel.html">
                How to Connect to Remote Redis &amp; Kafka Over SSH Tunnel (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Securely connect redis-cli and message queues to remote servers over SSH port forwarding. Avoid binding 0.0.0.0, bypass firewalls, and manage caches visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-connect-to-remote-redis-over-ssh-tunnel.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-create-swap-file-linux-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 10 articles.');
} else {
  console.log('blog/index.html already contains Batch 10 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-create-swap-file-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Add and Configure Swap Space on Linux Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-run-docker-compose-over-ssh.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Deploy Docker Compose Over SSH Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-connect-to-remote-redis-over-ssh-tunnel.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Connect to Remote Redis and Kafka Over SSH Tunnel Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-create-swap-file-linux-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 10 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 10 URLs.');
}
