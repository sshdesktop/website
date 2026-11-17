const fs = require('fs');
const path = require('path');

const CSS_DIR = path.join(__dirname, '..', 'assets', 'css');
const fullCss = fs.readFileSync(path.join(CSS_DIR, 'style.css'), 'utf8');

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
    .replace(/\r?\n|\r/g, '')
    .replace(/\s+/g, ' ')
    .replace(/;\}/g, '}')
    .trim();
}

// 1. Base CSS: Start up to line 51984 + Header overhaul (index 87543 to 98103)
const basePart1 = fullCss.slice(0, 51984);
const basePart2 = fullCss.slice(87543, 98103);
const baseCss = basePart1 + '\n' + basePart2;
const minBaseCss = minifyCSS(baseCss);
fs.writeFileSync(path.join(CSS_DIR, 'base.min.css'), minBaseCss, 'utf8');
console.log(`Base CSS: ${(Buffer.byteLength(minBaseCss) / 1024).toFixed(1)} KB -> assets/css/base.min.css`);

// 2. Homepage Bundle: Bento Grid, Benchmarks, Workflows, Sonoma Slider (index 69311 to 87543 + index 98103 to end)
const homePart1 = fullCss.slice(69311, 87543);
const homePart2 = fullCss.slice(98103);
const homeCss = homePart1 + '\n' + homePart2;
const minHomeCss = minifyCSS(homeCss);
fs.writeFileSync(path.join(CSS_DIR, 'homepage.min.css'), minHomeCss, 'utf8');
console.log(`Homepage CSS: ${(Buffer.byteLength(minHomeCss) / 1024).toFixed(1)} KB -> assets/css/homepage.min.css`);

// 3. Docs CSS: Minify assets/css/docs.css
const rawDocsCss = fs.readFileSync(path.join(CSS_DIR, 'docs.css'), 'utf8');
const minDocsCss = minifyCSS(rawDocsCss);
fs.writeFileSync(path.join(CSS_DIR, 'docs.min.css'), minDocsCss, 'utf8');
console.log(`Docs CSS: ${(Buffer.byteLength(minDocsCss) / 1024).toFixed(1)} KB -> assets/css/docs.min.css`);

// 4. Full Minified
const minFullCss = minifyCSS(fullCss);
fs.writeFileSync(path.join(CSS_DIR, 'style.min.css'), minFullCss, 'utf8');
console.log(`Full CSS: ${(Buffer.byteLength(minFullCss) / 1024).toFixed(1)} KB -> assets/css/style.min.css`);
console.log('✅ Modular CSS code splitting completed!');
