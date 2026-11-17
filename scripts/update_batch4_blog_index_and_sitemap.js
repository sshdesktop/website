const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: How to Change Default SSH Port 22 -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security &amp; Hardening</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-change-default-ssh-port-linux.html">
                How to Change Default SSH Port 22 on Linux: Step-by-Step (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Harden your Linux server and reduce automated botnet brute-forcing by 99%. Learn sshd_config port changes, UFW and firewalld rules, SELinux policy, and Ubuntu systemd socket activation.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-change-default-ssh-port-linux.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: SSH SOCKS5 Proxy -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Privacy &amp; Networking</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="ssh-tunnel-socks5-proxy-browser-guide.html">
                How to Use SSH as a SOCKS5 Proxy: Secure Your Browser &amp; Traffic (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Turn any remote Linux VPS into a private, zero-log encrypted SOCKS5 proxy using dynamic port forwarding (ssh -D). Configure Chrome, Firefox, curl, and bypass firewalls on public Wi-Fi.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="ssh-tunnel-socks5-proxy-browser-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: SSH Bastion Host Architecture -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Cloud Architecture</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssh-bastion-host-jump-server.html">
                How to Set Up an SSH Bastion Host (Jump Server): Complete Architecture Guide (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Master enterprise cloud security. Secure private VPC subnets in AWS and GCP, route traffic with ProxyJump (-J), eliminate agent forwarding hazards, and implement bastion hardening checklists.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssh-bastion-host-jump-server.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-change-default-ssh-port-linux.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 4 articles.');
} else {
  console.log('blog/index.html already contains Batch 4 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-change-default-ssh-port-linux.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Change Default SSH Port 22 on Linux Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/ssh-tunnel-socks5-proxy-browser-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Use SSH as a SOCKS5 Proxy Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssh-bastion-host-jump-server.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up an SSH Bastion Host Jump Server</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-change-default-ssh-port-linux.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 4 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 4 URLs.');
}
