const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Manage Linux Packages (APT, DNF, Pacman) -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Package Management</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-manage-linux-packages-apt-dnf-guide.html">
                How to Manage Linux Packages: APT, DNF, Pacman &amp; Snap (2026 Admin Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Master Linux package management on Ubuntu, Debian, RHEL, Fedora, and Arch. Learn update vs upgrade, fix broken dependencies, hold packages, and manage repositories visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-manage-linux-packages-apt-dnf-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Find & Kill Processes in Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Process Management</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-kill-process-linux-kill-pkill-killall-guide.html">
                How to Find &amp; Kill Processes in Linux: kill, pkill, killall (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Complete guide to terminating Linux processes safely. Master SIGTERM vs SIGKILL, find PIDs locking ports, handle zombie processes, and manage tasks visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-kill-process-linux-kill-pkill-killall-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Environment Variables in Linux -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Shell &amp; Environment</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-set-environment-variables-linux-guide.html">
                How to Set Environment Variables in Linux (PATH, .bashrc, export) 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Learn how to set, export, and persist environment variables in Linux. Master PATH additions, .bashrc vs /etc/environment, systemd envs, and manage vars visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-set-environment-variables-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-manage-linux-packages-apt-dnf-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 9 articles.');
} else {
  console.log('blog/index.html already contains Batch 9 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-manage-linux-packages-apt-dnf-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Manage Linux Packages APT DNF Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-kill-process-linux-kill-pkill-killall-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Find and Kill Processes in Linux Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-set-environment-variables-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Environment Variables in Linux Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-manage-linux-packages-apt-dnf-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 9 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 9 URLs.');
}
