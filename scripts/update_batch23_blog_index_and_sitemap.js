const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Automate Linux Server Patching with Ansible Over SSH -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Automation & DevOps</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-automate-server-patching-ansible-ssh-guide.html">
                How to Automate Linux Server Patching with Ansible Over SSH: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Automate security patching across hundreds of Linux servers using Ansible over SSH. Learn rolling update playbooks, reboot verification, and multi-node execution.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-automate-server-patching-ansible-ssh-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up SSH Certificates for Scalable Fleet Access -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Enterprise Security</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-ssh-certificates-ca-guide.html">
                How to Set Up SSH Certificates for Scalable Fleet Access: 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Replace authorized_keys file sprawl with an SSH Certificate Authority (CA). Learn short-lived signed certificates, principals, and visual key vault management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-ssh-certificates-ca-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Fix Kernel Panic Unable to Mount Root FS -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Troubleshooting & Recovery</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>11 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-kernel-panic-unable-to-mount-root-fs.html">
                How to Fix "Kernel panic - not syncing: VFS: Unable to mount root fs" (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Fix "Kernel panic - not syncing: VFS: Unable to mount root fs" on Ubuntu, Debian, and CentOS. Learn initramfs regeneration, GRUB recovery, and UUID repairs.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-kernel-panic-unable-to-mount-root-fs.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-automate-server-patching-ansible-ssh-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 23 articles.');
} else {
  console.log('blog/index.html already contains Batch 23 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-automate-server-patching-ansible-ssh-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-ssh-certificates-ca-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-kernel-panic-unable-to-mount-root-fs.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>
</urlset>`;

if (!sitemapContent.includes('how-to-automate-server-patching-ansible-ssh-guide.html')) {
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntries);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 23 entries.');
} else {
  console.log('sitemap.xml already contains Batch 23 entries.');
}
