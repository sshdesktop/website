const fs = require('fs');

const css = fs.readFileSync('e:/ssh desktop/assets/css/style.css', 'utf8');
console.log('Total style.css size:', (Buffer.byteLength(css) / 1024).toFixed(1), 'KB');
console.log('Total lines:', css.split(/\r?\n/).length);

// Find major section banners
const banners = [...css.matchAll(/\/\*\s*={10,}\s*\r?\n\s*([^\r\n]+)\r?\n\s*={10,}\s*\*\//g)];
console.log('\nMajor CSS sections:');
banners.forEach((b, i) => console.log(`  [${i + 1}] ${b[1].trim()}`));
