/**
 * scripts/migrate_alternatives_to_subfolder.js
 * Migrates all 22 comparison pages into the /alternatives/ directory.
 * Updates relative paths, breadcrumbs, canonical URLs, schema, sitemap, _redirects, and links across the site.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const ALT_DIR = path.join(ROOT_DIR, 'alternatives');

if (!fs.existsSync(ALT_DIR)) {
  fs.mkdirSync(ALT_DIR, { recursive: true });
}

const altFiles = [
  'aapanel-alternative.html',
  'bitvise-alternative.html',
  'cockpit-alternative.html',
  'cpanel-alternative.html',
  'cyberduck-alternative.html',
  'dbeaver-alternative.html',
  'filezilla-alternative.html',
  'guacamole-alternative.html',
  'iterm2-alternative.html',
  'mobaxterm-alternative.html',
  'portainer-alternative.html',
  'putty-alternative.html',
  'remote-desktop-manager-alternative.html',
  'royal-tsx-alternative.html',
  'securecrt-alternative.html',
  'superputty-alternative.html',
  'tabby-alternative.html',
  'termius-alternative.html',
  'warp-terminal-alternative.html',
  'webmin-alternative.html',
  'winscp-alternative.html',
  'xshell-alternative.html'
];

console.log(`Starting migration of ${altFiles.length} alternative files into /alternatives/...`);

// Root pages that need ../ prefix when referenced from inside /alternatives/
const rootPages = [
  'about.html',
  'api-studio.html',
  'apps.html',
  'aws-ec2-ssh-client.html',
  'backup-disaster-recovery.html',
  'cloud-desktop.html',
  'cloud.html',
  'contact.html',
  'crontab-gui.html',
  'database-gui-ssh-tunnel.html',
  'devops.html',
  'docker-web-gui.html',
  'download-linux-cli.html',
  'download-linux-desktop.html',
  'download-linux.html',
  'download-mac.html',
  'download-macos.html',
  'download-windows.html',
  'download.html',
  'enterprise.html',
  'env-variables-manager.html',
  'faq.html',
  'features.html',
  'index.html',
  'knowledge-base.html',
  'linux-disk-manager.html',
  'linux-disk-space-manager.html',
  'linux-firewall-gui.html',
  'linux-package-manager.html',
  'linux-process-manager.html',
  'linux-security-auditor.html',
  'linux-user-manager.html',
  'log-analysis-grep.html',
  'monaco-code-editor.html',
  'multi-server-automation.html',
  'network-port-auditor.html',
  'pricing.html',
  'privacy.html',
  'raspberry-pi-ssh-remote-desktop.html',
  'rdp-over-ssh.html',
  'reverse-proxy-browser.html',
  'security.html',
  'sftp-client.html',
  'ssh-client-windows-11.html',
  'ssh-port-forwarding.html',
  'ssh-remote-desktop.html',
  'ssl-certificate-manager.html',
  'sticky-notes.html',
  'system-monitor.html',
  'systemd-gui.html',
  'terminal.html',
  'terms.html',
  'tutorials.html',
  'web-ssh-client.html',
  'webhook-server.html'
];

// Step 1: Process and write each of the 22 alternative files into /alternatives/
for (const file of altFiles) {
  const srcPath = path.join(ROOT_DIR, file);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Warning: source file ${file} does not exist in root.`);
    continue;
  }

  let content = fs.readFileSync(srcPath, 'utf8');

  // Fix assets paths (assets/ -> ../assets/)
  content = content.replace(/(href|src)="assets\//g, '$1="../assets/');
  content = content.replace(/content="assets\//g, 'content="../assets/');
  content = content.replace(/href="site\.webmanifest"/g, 'href="../site.webmanifest"');
  content = content.replace(/content="browserconfig\.xml"/g, 'content="../browserconfig.xml"');

  // Fix Canonical, OG, Twitter URLs
  content = content.replace(
    new RegExp(`https://sshdesktop\\.com/${file}`, 'g'),
    `https://sshdesktop.com/alternatives/${file}`
  );

  // Fix Brand logo link
  content = content.replace(/<a href="\/" class="brand"/g, '<a href="../" class="brand"');

  // Fix Breadcrumbs
  content = content.replace(/<li><a href="\/">Home<\/a><\/li>/g, '<li><a href="../">Home</a></li>');
  content = content.replace(/<li><a href="alternatives\.html">Alternatives<\/a><\/li>/g, '<li><a href="index.html">Alternatives</a></li>');
  content = content.replace(/href="alternatives\.html"/g, 'href="index.html"');

  // Fix docs/ and blog/ links in header/footer
  content = content.replace(/href="docs\/"/g, 'href="../docs/"');
  content = content.replace(/href="blog\/"/g, 'href="../blog/"');

  // Fix all root pages referenced
  for (const rootPage of rootPages) {
    const pageRegex = new RegExp(`href="${rootPage}"`, 'g');
    content = content.replace(pageRegex, `href="../${rootPage}"`);
  }

  // Ensure Schema.org breadcrumb item 2 points to /alternatives/
  content = content.replace(/"item":\s*"https:\/\/sshdesktop\.com\/alternatives\.html"/g, '"item": "https://sshdesktop.com/alternatives/"');

  // Write to alternatives/ folder
  const destPath = path.join(ALT_DIR, file);
  fs.writeFileSync(destPath, content, 'utf8');
}
console.log(`✅ Step 1: Wrote ${altFiles.length} updated alternative files to /alternatives/`);

// Step 2: Update alternatives/index.html
const altIndexPath = path.join(ALT_DIR, 'index.html');
if (fs.existsSync(altIndexPath)) {
  let altIndexContent = fs.readFileSync(altIndexPath, 'utf8');
  // Card links in alternatives/index.html: ../*-alternative.html -> *-alternative.html
  for (const file of altFiles) {
    altIndexContent = altIndexContent.replace(new RegExp(`\\.\\./${file}`, 'g'), file);
  }
  fs.writeFileSync(altIndexPath, altIndexContent, 'utf8');
  console.log(`✅ Step 2: Updated alternatives/index.html card links to sibling paths.`);
}

// Step 3: Update links across all root HTML files (index.html, apps.html, about.html, etc.)
const rootHtmlFiles = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.html') && !altFiles.includes(f) && f !== 'alternatives.html');
let rootUpdatedCount = 0;
for (const f of rootHtmlFiles) {
  const filePath = path.join(ROOT_DIR, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const altFile of altFiles) {
    const reg = new RegExp(`href="${altFile}"`, 'g');
    if (reg.test(content)) {
      content = content.replace(reg, `href="alternatives/${altFile}"`);
      changed = true;
    }
  }

  if (content.includes('href="alternatives.html"')) {
    content = content.replace(/href="alternatives\.html"/g, 'href="alternatives/"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    rootUpdatedCount++;
  }
}
console.log(`✅ Step 3: Updated alternative links in ${rootUpdatedCount} root HTML files.`);

// Step 4: Update links across blog/ HTML files
const blogDir = path.join(ROOT_DIR, 'blog');
let blogUpdatedCount = 0;
if (fs.existsSync(blogDir)) {
  for (const f of fs.readdirSync(blogDir).filter(f => f.endsWith('.html'))) {
    const filePath = path.join(blogDir, f);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const altFile of altFiles) {
      const reg = new RegExp(`href="\\.\\./${altFile}"`, 'g');
      if (reg.test(content)) {
        content = content.replace(reg, `href="../alternatives/${altFile}"`);
        changed = true;
      }
    }

    if (content.includes('href="../alternatives.html"')) {
      content = content.replace(/href="\.\.\/alternatives\.html"/g, 'href="../alternatives/"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      blogUpdatedCount++;
    }
  }
}
console.log(`✅ Step 4: Checked and updated links in ${blogUpdatedCount} blog HTML files.`);

// Step 5: Update links across docs/ HTML files
const docsDir = path.join(ROOT_DIR, 'docs');
let docsUpdatedCount = 0;
if (fs.existsSync(docsDir)) {
  for (const f of fs.readdirSync(docsDir).filter(f => f.endsWith('.html'))) {
    const filePath = path.join(docsDir, f);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const altFile of altFiles) {
      const reg = new RegExp(`href="\\.\\./${altFile}"`, 'g');
      if (reg.test(content)) {
        content = content.replace(reg, `href="../alternatives/${altFile}"`);
        changed = true;
      }
    }

    if (content.includes('href="../alternatives.html"')) {
      content = content.replace(/href="\.\.\/alternatives\.html"/g, 'href="../alternatives/"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      docsUpdatedCount++;
    }
  }
}
console.log(`✅ Step 5: Checked and updated links in ${docsUpdatedCount} docs HTML files.`);

// Step 6: Update assets/js/main.js
const mainJsPath = path.join(ROOT_DIR, 'assets/js/main.js');
if (fs.existsSync(mainJsPath)) {
  let jsContent = fs.readFileSync(mainJsPath, 'utf8');
  let jsChanged = false;
  for (const altFile of altFiles) {
    const reg = new RegExp(`url:\\s*"${altFile}"`, 'g');
    if (reg.test(jsContent)) {
      jsContent = jsContent.replace(reg, `url: "alternatives/${altFile}"`);
      jsChanged = true;
    }
  }
  if (jsChanged) {
    fs.writeFileSync(mainJsPath, jsContent, 'utf8');
    console.log(`✅ Step 6: Updated alternative URLs in assets/js/main.js.`);
  }
}

// Step 7: Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const altFile of altFiles) {
    sitemap = sitemap.replace(
      new RegExp(`https://sshdesktop\\.com/${altFile}`, 'g'),
      `https://sshdesktop.com/alternatives/${altFile}`
    );
  }
  // Ensure alternatives.html points to /alternatives/
  sitemap = sitemap.replace(/https:\/\/sshdesktop\.com\/alternatives\.html/g, 'https://sshdesktop.com/alternatives/');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`✅ Step 7: Updated sitemap.xml with /alternatives/ URLs.`);
}

// Step 8: Update _redirects
const redirectsPath = path.join(ROOT_DIR, '_redirects');
if (fs.existsSync(redirectsPath)) {
  let redirects = fs.readFileSync(redirectsPath, 'utf8');
  const redirectRules = [];
  if (!redirects.includes('/alternatives.html')) {
    redirectRules.push('/alternatives.html              /alternatives/                  301');
  }
  for (const altFile of altFiles) {
    if (!redirects.includes(`/${altFile}`)) {
      const padding = ' '.repeat(Math.max(2, 32 - altFile.length));
      redirectRules.push(`/${altFile}${padding}/alternatives/${altFile} 301`);
    }
  }
  if (redirectRules.length > 0) {
    redirects += '\n# Alternative Comparison URL 301 Redirects\n' + redirectRules.join('\n') + '\n';
    fs.writeFileSync(redirectsPath, redirects, 'utf8');
    console.log(`✅ Step 8: Appended ${redirectRules.length} 301 rules to _redirects.`);
  }
}

// Step 9: Convert root alternatives.html into 301 Redirect Stub (matching docs.html)
const rootAltHtmlPath = path.join(ROOT_DIR, 'alternatives.html');
const altRedirectStub = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirecting to SSH Client Alternatives...</title>
  <link rel="canonical" href="https://sshdesktop.com/alternatives/">
  <meta http-equiv="refresh" content="0; url=alternatives/">
  <meta name="robots" content="noindex, follow">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center; padding: 60px 20px; background: #0f172a; color: #f8fafc;">
  <h2>Redirecting to SSH Client Alternatives</h2>
  <p style="color: #94a3b8;">The comparison directory has permanently moved to <code>/alternatives/</code>.</p>
  <p><a href="alternatives/" style="color: #38bdf8; text-decoration: none; font-weight: 600;">Click here if you are not redirected automatically &rarr;</a></p>
</body>
</html>
`;
fs.writeFileSync(rootAltHtmlPath, altRedirectStub, 'utf8');
console.log('✅ Step 9: Converted root alternatives.html into a 301 redirect stub.');

// Step 10: Remove the 22 original alternative files from root
for (const file of altFiles) {
  const rootPath = path.join(ROOT_DIR, file);
  if (fs.existsSync(rootPath)) {
    fs.unlinkSync(rootPath);
  }
}
console.log(`✅ Step 10: Cleaned up and removed 22 alternative files from root directory.`);

console.log('\n🎉 ALL ALTERNATIVE FILES SUCCESSFULLY MIGRATED TO /alternatives/!\n');
