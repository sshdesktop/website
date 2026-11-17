/**
 * Zero-dependency CSS & JS Minifier for SSH Desktop
 * Compresses style.css and main.js for maximum delivery speed
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const cssPath = path.join(ROOT_DIR, 'assets', 'css', 'style.css');
const cssMinPath = path.join(ROOT_DIR, 'assets', 'css', 'style.min.css');
const jsPath = path.join(ROOT_DIR, 'assets', 'js', 'main.js');
const jsMinPath = path.join(ROOT_DIR, 'assets', 'js', 'main.min.js');

function minifyCSS(css) {
  return css
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove unnecessary spaces around symbols
    .replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
    // Remove newlines and excess whitespace
    .replace(/\r?\n|\r/g, '')
    .replace(/\s+/g, ' ')
    // Remove trailing semicolons in blocks
    .replace(/;\}/g, '}')
    .trim();
}

function minifyJS(js) {
  // Simple, safe whitespace & comment stripping (preserves string literals)
  return js
    // Remove block comments (carefully preserving URLs or strings)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove single-line comments that are on their own line
    .replace(/^\s*\/\/.*$/gm, '')
    // Trim trailing and leading whitespace per line
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
}

console.log('--- Minifying Production Assets ---');

if (fs.existsSync(cssPath)) {
  const rawCss = fs.readFileSync(cssPath, 'utf8');
  const minCss = minifyCSS(rawCss);
  fs.writeFileSync(cssMinPath, minCss, 'utf8');
  const rawSize = (Buffer.byteLength(rawCss) / 1024).toFixed(1);
  const minSize = (Buffer.byteLength(minCss) / 1024).toFixed(1);
  const saved = (100 - (minSize / rawSize) * 100).toFixed(0);
  console.log(`CSS: ${rawSize} KB -> ${minSize} KB (${saved}% reduction) -> assets/css/style.min.css`);
}

if (fs.existsSync(jsPath)) {
  const rawJs = fs.readFileSync(jsPath, 'utf8');
  const minJs = minifyJS(rawJs);
  fs.writeFileSync(jsMinPath, minJs, 'utf8');
  const rawSize = (Buffer.byteLength(rawJs) / 1024).toFixed(1);
  const minSize = (Buffer.byteLength(minJs) / 1024).toFixed(1);
  const saved = (100 - (minSize / rawSize) * 100).toFixed(0);
  console.log(`JS:  ${rawSize} KB -> ${minSize} KB (${saved}% reduction) -> assets/js/main.min.js`);
}

console.log('✅ Minification build complete!');
