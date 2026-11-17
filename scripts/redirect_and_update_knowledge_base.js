const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Transform search-queries.html into clean canonical redirect
const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirecting to Linux Server Troubleshooting Knowledge Base...</title>
  <link rel="canonical" href="https://sshdesktop.com/knowledge-base.html">
  <meta http-equiv="refresh" content="0; url=knowledge-base.html">
  <meta name="robots" content="noindex, follow">
</head>
<body style="font-family: sans-serif; text-align: center; padding: 50px;">
  <p>The Linux Server &amp; SSH Troubleshooting Knowledge Base has permanently moved.</p>
  <p>Redirecting to <a href="knowledge-base.html">https://sshdesktop.com/knowledge-base.html</a>...</p>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT_DIR, 'search-queries.html'), redirectHtml, 'utf8');
console.log('✅ Updated search-queries.html to canonical 301 redirect');

// 2. Update all HTML files that link to search-queries.html
function getAllHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
      getAllHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'search-queries.html') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
let updatedFiles = 0;

for (const filePath of htmlFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace search-queries.html in navigation/footer
  if (content.includes('search-queries.html')) {
    content = content.replace(/href="search-queries\.html">([^<]*)<\/a>/g, 'href="knowledge-base.html">Knowledge Base</a>');
    content = content.replace(/href="\.\.\/search-queries\.html">([^<]*)<\/a>/g, 'href="../knowledge-base.html">Knowledge Base</a>');
    content = content.replace(/href="search-queries\.html"/g, 'href="knowledge-base.html"');
    changed = true;
    updatedFiles++;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`✅ Updated internal links in ${updatedFiles} HTML files to point to knowledge-base.html`);

// 3. Update sitemap.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (sitemap.includes('https://sshdesktop.com/search-queries.html')) {
  sitemap = sitemap.replace('https://sshdesktop.com/search-queries.html', 'https://sshdesktop.com/knowledge-base.html');
  sitemap = sitemap.replace('<image:title>Top Linux Server &amp; SSH Search Queries &amp; Solutions</image:title>', '<image:title>Linux Server Administration &amp; SSH Troubleshooting Knowledge Base</image:title>');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Updated sitemap.xml to knowledge-base.html');
}

// 4. Update robots.txt
const robotsPath = path.join(ROOT_DIR, 'robots.txt');
let robots = fs.readFileSync(robotsPath, 'utf8');
if (robots.includes('Allow: /search-queries.html')) {
  robots = robots.replace('Allow: /search-queries.html', 'Allow: /knowledge-base.html\nDisallow: /search-queries.html');
  fs.writeFileSync(robotsPath, robots, 'utf8');
  console.log('✅ Updated robots.txt');
}
