const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Protect SSH with Fail2ban -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Server Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-protect-ssh-with-fail2ban-guide.html">
                How to Protect SSH with Fail2ban on Linux (Ubuntu, Debian, RHEL): 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Stop brute-force SSH attacks using Fail2ban. Complete guide to jail.local configuration, bantime, unbanning IPs, and monitoring security visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-protect-ssh-with-fail2ban-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Automate Linux Backups with Rsync & Cron -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Backup &amp; Recovery</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-automate-linux-backups-rsync-cron-guide.html">
                How to Automate Linux Server Backups with Rsync &amp; Cron: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Complete guide to automated Linux backups using rsync over SSH and cron. Learn incremental hard-link snapshots, exclusion filters, and visual backup scheduling.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-automate-linux-backups-rsync-cron-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: OpenSSH Server Hardening Security Checklist -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Server Hardening</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="openssh-server-hardening-security-guide.html">
                OpenSSH Server Hardening: 10 Critical Security Steps (2026 Checklist)
              </a>
            </h2>
            <p class="blog-card-desc">
              Harden your Linux OpenSSH server against brute-force attacks and zero-days. Disable passwords, disable root, restrict cipher suites, and verify syntax.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="openssh-server-hardening-security-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-protect-ssh-with-fail2ban-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 11 articles.');
} else {
  console.log('blog/index.html already contains Batch 11 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-protect-ssh-with-fail2ban-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Protect SSH with Fail2ban Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-automate-linux-backups-rsync-cron-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Automate Linux Backups with Rsync and Cron Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/openssh-server-hardening-security-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>OpenSSH Server Hardening Security Checklist</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-protect-ssh-with-fail2ban-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 11 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 11 URLs.');
}
