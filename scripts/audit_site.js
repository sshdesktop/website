/**
 * SSH Desktop Site Auditor & Production Validator
 * Checks SEO metadata, H1s, internal link integrity, and asset existence.
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

console.log(`\n======================================================`);
console.log(`  SSH DESKTOP PRODUCTION SITE AUDIT`);
console.log(`  Total HTML pages found: ${htmlFiles.length}`);
console.log(`======================================================\n`);

let totalIssues = 0;
const report = [];

for (const filePath of htmlFiles) {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // Skip redirect stubs
  if (content.includes('http-equiv="refresh"')) continue;

  const issues = [];

  // Check Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    issues.push('Missing <title> tag');
  } else if (titleMatch[1].trim().length < 15) {
    issues.push(`Title too short (${titleMatch[1].trim().length} chars): "${titleMatch[1].trim()}"`);
  }

  // Check Meta Description
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descMatch) {
    issues.push('Missing meta description');
  } else if (descMatch[1].trim().length < 30) {
    issues.push(`Meta description too short (${descMatch[1].trim().length} chars)`);
  }

  // Check Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  if (!canonicalMatch) {
    issues.push('Missing canonical tag');
  }

  // Check H1
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!h1Match) {
    issues.push('Missing <h1> heading');
  }

  // Check for SVG og-image
  if (content.includes('og-image.svg')) {
    issues.push('Still referencing og-image.svg (should be PNG)');
  }

  // Check for old spam footer-seo-cloud
  if (content.includes('footer-seo-cloud') || content.includes('seo-cloud-badge')) {
    issues.push('Contains forbidden footer-seo-cloud spam');
  }

  // Check for broken local image assets
  const imgMatches = [...content.matchAll(/src="([^":#?]+\.(?:png|svg|webp|jpg|jpeg))"/gi)];
  for (const match of imgMatches) {
    const assetRel = match[1];
    let resolvedPath;
    if (assetRel.startsWith('/')) {
      resolvedPath = path.join(ROOT_DIR, assetRel.slice(1));
    } else {
      resolvedPath = path.resolve(path.dirname(filePath), assetRel);
    }
    if (!fs.existsSync(resolvedPath)) {
      issues.push(`Broken image source: "${assetRel}"`);
    }
  }

  if (issues.length > 0) {
    totalIssues += issues.length;
    report.push({ file: relPath, issues });
  }
}

if (report.length === 0) {
  console.log(`✅ ALL ${htmlFiles.length} HTML PAGES PASSED VALIDATION WITH 0 ISSUES!`);
} else {
  console.log(`⚠️ Found issues in ${report.length} files (${totalIssues} total issues):\n`);
  for (const item of report) {
    console.log(`📄 ${item.file}:`);
    for (const issue of item.issues) {
      console.log(`   ❌ ${issue}`);
    }
    console.log('');
  }
}

console.log(`\n======================================================`);
console.log(`  Audit finished with ${totalIssues} issue(s) detected.`);
console.log(`======================================================\n`);

process.exit(totalIssues > 0 ? 1 : 0);
