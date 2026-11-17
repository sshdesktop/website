/**
 * scripts/audit_links_deep.js
 * Exhaustive internal link integrity auditor for all 217 HTML pages.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const htmlFiles = [];

function findHtmlFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === '.git' || item === 'dist' || item.startsWith('.')) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath);
    } else if (item.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

findHtmlFiles(ROOT_DIR);

console.log(`Checking internal link integrity across all ${htmlFiles.length} pages...`);

let brokenLinkCount = 0;
const brokenLinks = [];
let totalLinksChecked = 0;

for (const filePath of htmlFiles) {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip redirect stubs
  if (content.includes('http-equiv="refresh"')) continue;

  const linkMatches = [...content.matchAll(/href="([^"#?]+)(?:[#?][^"]*)?"/gi)];

  for (const match of linkMatches) {
    const href = match[1];

    // Skip external, mailto, tel, javascript, anchors
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      href.startsWith('#') ||
      href === ''
    ) {
      continue;
    }

    totalLinksChecked++;

    let targetPath;
    if (href.startsWith('/')) {
      // Relative to root
      targetPath = path.join(ROOT_DIR, href.slice(1));
    } else {
      // Relative to current file
      targetPath = path.resolve(path.dirname(filePath), href);
    }

    // Check if target exists directly, or as directory with index.html, or with .html appended
    let exists = fs.existsSync(targetPath);
    if (!exists) {
      if (fs.existsSync(targetPath + '.html')) {
        exists = true;
      } else if (fs.existsSync(path.join(targetPath, 'index.html'))) {
        exists = true;
      }
    } else {
      // If it's a directory, ensure index.html exists
      if (fs.statSync(targetPath).isDirectory()) {
        if (!fs.existsSync(path.join(targetPath, 'index.html'))) {
          exists = false;
        }
      }
    }

    if (!exists) {
      brokenLinkCount++;
      brokenLinks.push({
        source: relPath,
        link: href,
        resolved: path.relative(ROOT_DIR, targetPath).replace(/\\/g, '/')
      });
    }
  }
}

console.log(`Checked ${totalLinksChecked} internal links.`);

if (brokenLinks.length === 0) {
  console.log(`✅ ZERO BROKEN INTERNAL LINKS DETECTED! Link integrity is 100% verified.`);
} else {
  console.log(`⚠️ Found ${brokenLinks.length} broken links across files.`);
  const summary = {};
  for (const b of brokenLinks) {
    summary[b.resolved] = (summary[b.resolved] || 0) + 1;
  }
  console.log('\n=== MISSING DESTINATION TARGETS ===');
  Object.entries(summary)
    .sort((a, b) => b[1] - a[1])
    .forEach(([target, count]) => {
      console.log(`  ${count}x  ${target}`);
    });
}
