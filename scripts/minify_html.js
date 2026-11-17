const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function minifyHTML(html) {
  // Preserve <pre>, <code>, <script> and <style>
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

const indexPath = path.join(ROOT_DIR, 'index.html');
const rawHtml = fs.readFileSync(indexPath, 'utf8');
const minHtml = minifyHTML(rawHtml);

console.log(`Original index.html size: ${(Buffer.byteLength(rawHtml) / 1024).toFixed(1)} KB`);
console.log(`Minified index.html size: ${(Buffer.byteLength(minHtml) / 1024).toFixed(1)} KB`);
console.log(`Reduction: ${(100 - (Buffer.byteLength(minHtml) / Buffer.byteLength(rawHtml)) * 100).toFixed(0)}%`);

// We can output to index.min.html or update in dist
fs.writeFileSync(path.join(ROOT_DIR, 'index.min.html'), minHtml, 'utf8');
console.log('✅ Created index.min.html');
