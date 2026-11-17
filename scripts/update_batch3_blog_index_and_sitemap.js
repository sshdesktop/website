const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Fix Host Key Verification Failed -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Security &amp; Fixes</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>9 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-fix-ssh-host-key-verification-failed.html">
                How to Fix 'Host Key Verification Failed' in SSH: Step-by-Step (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Understand the 'WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!' warning. Clear bad known_hosts entries safely with ssh-keygen -R, verify server fingerprints, and prevent MITM attacks.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-fix-ssh-host-key-verification-failed.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Run GUI Apps Over SSH with X11 Forwarding -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Remote Desktop</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-run-gui-apps-over-ssh-x11-forwarding.html">
                How to Run GUI Apps Over SSH: X11 Forwarding &amp; Modern Alternatives (2026)
              </a>
            </h2>
            <p class="blog-card-desc">
              Stream graphical Linux apps across SSH. Compare ssh -X vs -Y, set up X servers (VcXsrv/XQuartz) on Windows 11 &amp; macOS, understand X11 latency bottlenecks, and discover 60 FPS streaming.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-run-gui-apps-over-ssh-x11-forwarding.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Keep SSH Sessions Alive: nohup vs tmux vs screen -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">DevOps &amp; Tools</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-keep-ssh-session-alive-tmux-screen-nohup.html">
                How to Keep SSH Sessions Alive: nohup vs tmux vs screen (2026 Guide)
              </a>
            </h2>
            <p class="blog-card-desc">
              Never let a dropped Wi-Fi connection terminate your builds or backups. Master SIGHUP prevention with nohup, tmux window multiplexing, screen commands, and resilient background services.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-keep-ssh-session-alive-tmux-screen-nohup.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-fix-ssh-host-key-verification-failed.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 3 articles.');
} else {
  console.log('blog/index.html already contains Batch 3 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-fix-ssh-host-key-verification-failed.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Fix Host Key Verification Failed Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-run-gui-apps-over-ssh-x11-forwarding.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Run GUI Apps Over SSH with X11 Forwarding</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-keep-ssh-session-alive-tmux-screen-nohup.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Keep SSH Sessions Alive with nohup, tmux, and screen</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-fix-ssh-host-key-verification-failed.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 3 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 3 URLs.');
}
