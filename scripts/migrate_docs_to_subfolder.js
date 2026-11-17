const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update all HTML files
function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const isSubdir = path.dirname(filePath) !== ROOT_DIR;

  // Replace root references
  if (content.includes('href="docs.html"')) {
    content = content.replace(/href="docs\.html"/g, 'href="docs/"');
    changed = true;
  }
  if (content.includes('href="../docs.html"')) {
    content = content.replace(/href="\.\.\/docs\.html"/g, 'href="../docs/"');
    changed = true;
  }
  if (content.includes('https://sshdesktop.com/docs.html')) {
    content = content.replace(/https:\/\/sshdesktop\.com\/docs\.html/g, 'https://sshdesktop.com/docs/');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  const items = fs.readdirSync(dir);
  let updatedCount = 0;
  for (const item of items) {
    if (['node_modules', '.git', 'dist', 'scripts'].includes(item)) continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      updatedCount += walkDir(full);
    } else if (item.endsWith('.html') && item !== 'docs.html') {
      if (processHtmlFile(full)) {
        updatedCount++;
      }
    }
  }
  return updatedCount;
}

const updatedHtmlFiles = walkDir(ROOT_DIR);
console.log(`Updated links in ${updatedHtmlFiles} HTML files.`);

// 2. Convert docs.html into a 301 Redirect Stub
const docsHtmlPath = path.join(ROOT_DIR, 'docs.html');
const redirectStub = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirecting to SSH Desktop Documentation...</title>
  <link rel="canonical" href="https://sshdesktop.com/docs/">
  <meta http-equiv="refresh" content="0; url=docs/">
  <meta name="robots" content="noindex, follow">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center; padding: 60px 20px; background: #0f172a; color: #f8fafc;">
  <h2>Redirecting to SSH Desktop Documentation</h2>
  <p style="color: #94a3b8;">The documentation has permanently moved to the standard <code>/docs/</code> directory.</p>
  <p><a href="docs/" style="color: #38bdf8; text-decoration: none; font-weight: 600;">Click here if you are not redirected automatically &rarr;</a></p>
</body>
</html>
`;
fs.writeFileSync(docsHtmlPath, redirectStub, 'utf8');
console.log('Converted docs.html into a 301 redirect stub to /docs/.');

// 3. Update sitemap.xml to remove docs.html
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const sitemapRegex = /<url>\s*<loc>https:\/\/sshdesktop\.com\/docs\.html<\/loc>[\s\S]*?<\/url>\s*/g;
if (sitemapRegex.test(sitemapContent)) {
  sitemapContent = sitemapContent.replace(sitemapRegex, '');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Removed https://sshdesktop.com/docs.html from sitemap.xml.');
} else {
  console.log('docs.html entry not found in sitemap.xml.');
}

// 4. Update JS files (command-palette and main)
const jsFiles = [
  path.join(ROOT_DIR, 'assets', 'js', 'command-palette.js'),
  path.join(ROOT_DIR, 'assets', 'js', 'command-palette.min.js'),
  path.join(ROOT_DIR, 'assets', 'js', 'main.js'),
  path.join(ROOT_DIR, 'assets', 'js', 'main.min.js')
];

jsFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let jsContent = fs.readFileSync(file, 'utf8');
    if (jsContent.includes('docs.html')) {
      jsContent = jsContent.replace(/docs\.html/g, 'docs/');
      fs.writeFileSync(file, jsContent, 'utf8');
      console.log(`Updated docs.html references in ${path.basename(file)}.`);
    }
  }
});

// 5. Update _headers with 301 redirect rule
const headersPath = path.join(ROOT_DIR, '_headers');
let headersContent = fs.readFileSync(headersPath, 'utf8');
if (!headersContent.includes('/docs.html')) {
  headersContent = `/docs.html  /docs/  301\n\n` + headersContent;
  fs.writeFileSync(headersPath, headersContent, 'utf8');
  console.log('Added 301 redirect for /docs.html to _headers.');
}

// 6. Update nginx-production.conf with 301 redirect
const nginxPath = path.join(ROOT_DIR, 'nginx-production.conf');
let nginxContent = fs.readFileSync(nginxPath, 'utf8');
if (!nginxContent.includes('location = /docs.html')) {
  const redirectBlock = `    # 301 Redirect for legacy docs.html to canonical /docs/
    location = /docs.html {
        return 301 https://sshdesktop.com/docs/;
    }\n\n`;
  nginxContent = nginxContent.replace('    # Custom 404 Error Page', redirectBlock + '    # Custom 404 Error Page');
  fs.writeFileSync(nginxPath, nginxContent, 'utf8');
  console.log('Added 301 redirect for /docs.html to nginx-production.conf.');
}
