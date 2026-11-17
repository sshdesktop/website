const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update blog/index.html
const blogIndexPath = path.join(ROOT_DIR, 'blog', 'index.html');
let blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');

const newBatchCards = `        <!-- Article: Set Up Nginx Reverse Proxy with SSL -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Web Servers</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-nginx-reverse-proxy-ssl-guide.html">
                How to Set Up Nginx Reverse Proxy with SSL: Complete 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Step-by-step tutorial: configure Nginx as a high-performance reverse proxy with SSL termination, WebSocket support, custom headers, and visual proxy management.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-nginx-reverse-proxy-ssl-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Set Up WireGuard VPN on Linux Server -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Networking &amp; VPNs</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-setup-wireguard-vpn-linux-guide.html">
                How to Set Up WireGuard VPN on Linux Server: Complete 2026 Guide
              </a>
            </h2>
            <p class="blog-card-desc">
              Build a lightning-fast, secure WireGuard VPN server on Ubuntu/Debian. Generate cryptographic keys, configure wg0.conf, enable IP forwarding, and manage tunnels.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-setup-wireguard-vpn-linux-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>

        <!-- Article: Test Linux Network Speed & Bandwidth -->
        <article class="blog-card">
          <div>
            <div class="blog-meta-top">
              <span class="blog-tag">Network Diagnostics</span>
              <span>Updated 2026</span>
              <span>&bull;</span>
              <span>10 min read</span>
            </div>
            <h2 class="blog-card-title">
              <a href="how-to-test-linux-network-speed-bandwidth-guide.html">
                How to Test Linux Server Network Speed &amp; Bandwidth (iperf3, iftop, speedtest) 2026
              </a>
            </h2>
            <p class="blog-card-desc">
              Complete guide to measuring Linux server network throughput. Benchmark bandwidth with iperf3, monitor real-time traffic with iftop, and graph metrics visually.
            </p>
          </div>
          <div class="blog-card-footer">
            <span>By SSH Desktop Team</span>
            <a href="how-to-test-linux-network-speed-bandwidth-guide.html" class="blog-read-more">Read Guide &rarr;</a>
          </div>
        </article>
`;

if (!blogIndexContent.includes('how-to-setup-nginx-reverse-proxy-ssl-guide.html')) {
  blogIndexContent = blogIndexContent.replace(
    '<div class="blog-grid">',
    '<div class="blog-grid">\n' + newBatchCards
  );
  fs.writeFileSync(blogIndexPath, blogIndexContent, 'utf8');
  console.log('Updated blog/index.html with Batch 12 articles.');
} else {
  console.log('blog/index.html already contains Batch 12 articles.');
}

// 2. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sitemapEntries = `  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-nginx-reverse-proxy-ssl-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up Nginx Reverse Proxy with SSL Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-setup-wireguard-vpn-linux-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Set Up WireGuard VPN on Linux Guide</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://sshdesktop.com/blog/how-to-test-linux-network-speed-bandwidth-guide.html</loc>
    <lastmod>2026-11-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>https://sshdesktop.com/assets/images/og-image.png</image:loc>
      <image:title>How to Test Linux Server Network Speed and Bandwidth Guide</image:title>
    </image:image>
  </url>
`;

if (!sitemapContent.includes('how-to-setup-nginx-reverse-proxy-ssl-guide.html')) {
  sitemapContent = sitemapContent.replace(
    '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>',
    sitemapEntries + '  <url>\n    <loc>https://sshdesktop.com/changelog.html</loc>'
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml with Batch 12 URLs.');
} else {
  console.log('sitemap.xml already contains Batch 12 URLs.');
}
