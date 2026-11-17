const { execSync } = require('child_process');
const raw = execSync('git show HEAD~1:docs.html', { encoding: 'utf8' });

const styleMatches = [...raw.matchAll(/<style[\s\S]*?>([\s\S]*?)<\/style>/gi)];
console.log('Style tags found:', styleMatches.length);
if (styleMatches.length > 0) {
  styleMatches.forEach((m, i) => console.log(`Style #${i}: ${m[1].length} chars`));
}

// Check CSS link tags
const cssLinks = [...raw.matchAll(/<link rel="stylesheet"[^>]+>/g)];
console.log('CSS links:', cssLinks.map(m => m[0]));

// Let's inspect headings in original docs.html
const headings = [...raw.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => `${m[1]}: ${m[2].trim()}`);
console.log(`Total headings in original docs.html: ${headings.length}`);
console.log('First 15 headings:\n', headings.slice(0, 15).join('\n'));
