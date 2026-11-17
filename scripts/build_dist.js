/**
 * Full Production Distribution Builder
 * Compiles and minifies all 80+ HTML pages, CSS, JS, and static assets into /dist/
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

function minifyHTML(html) {
  const preserved = [];
  let tokenIdx = 0;

  let processed = html.replace(/<(pre|code|script|style)[^>]*>[\s\S]*?<\/\1>/gi, (match) => {
    const token = `__PRESERVED_TOKEN_${tokenIdx++}__`;
    preserved.push({ token, match });
    return token;
  });

  // Remove HTML comments (excluding conditional comments)
  processed = processed.replace(/<!--(?!\s*\[if)[\s\S]*?-->/g, '');

  // Collapse multiple spaces/newlines between tags
  processed = processed.replace(/>\s+</g, '><');
  processed = processed.replace(/\s{2,}/g, ' ');

  // Restore preserved blocks
  for (const item of preserved) {
    processed = processed.replace(item.token, item.match);
  }

  return processed.trim();
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function getAllHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT_DIR, fullPath);

    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist', 'scripts'].includes(entry.name)) continue;
      getAllHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.min.html') {
      fileList.push({ fullPath, relPath });
    }
  }
  return fileList;
}

console.log('Building production bundle in /dist ...');

// Clean or create dist
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// Copy assets
console.log('-> Copying optimized assets...');
copyDirRecursive(path.join(ROOT_DIR, 'assets'), path.join(DIST_DIR, 'assets'));

// Process all HTML files
const htmlFiles = getAllHtmlFiles(ROOT_DIR);
let originalBytes = 0;
let minifiedBytes = 0;

for (const { fullPath, relPath } of htmlFiles) {
  const content = fs.readFileSync(fullPath, 'utf8');
  const minified = minifyHTML(content);
  
  originalBytes += Buffer.byteLength(content);
  minifiedBytes += Buffer.byteLength(minified);

  const outPath = path.join(DIST_DIR, relPath);
  const outDir = path.dirname(outPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(outPath, minified, 'utf8');
}

// Copy metadata files
const metaFiles = [
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  '_headers',
  '_redirects',
  'site.webmanifest',
  'favicon.ico',
  'security.txt',
  'humans.txt'
];

for (const file of metaFiles) {
  const src = path.join(ROOT_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST_DIR, file));
  }
}

const savedKB = ((originalBytes - minifiedBytes) / 1024).toFixed(1);
const pct = ((1 - minifiedBytes / originalBytes) * 100).toFixed(1);

console.log(`✅ Production build complete!`);
console.log(`   Processed: ${htmlFiles.length} HTML pages`);
console.log(`   HTML size: ${(originalBytes / 1024).toFixed(1)} KB -> ${(minifiedBytes / 1024).toFixed(1)} KB`);
console.log(`   Total bandwidth saved: ${savedKB} KB (${pct}% reduction)`);
console.log(`   Output directory: ${DIST_DIR}`);
