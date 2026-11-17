/**
 * SSH Desktop Master Production Build Script
 * 1. Minifies CSS (style.css -> style.min.css, base.min.css, homepage.min.css)
 * 2. Code-splits & minifies JS (core.min.js, homepage.min.js, command-palette.min.js)
 * 3. Minifies HTML for index.min.html
 * 4. Runs full site validation audit across all 80 pages
 */

const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

console.log('======================================================');
console.log('   SSH DESKTOP PRODUCTION OPTIMIZATION BUILD');
console.log('======================================================\n');

// 1. Split & Minify CSS & JS
require('./split_assets.js');
require('./split_css_modular.js');

// 2. Minify HTML
require('./minify_html.js');

// 3. Run Site Audit
require('./audit_site.js');
