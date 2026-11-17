const fs = require('fs');

const content = fs.readFileSync('e:/ssh desktop/index.html', 'utf8');
console.log('Total index.html size:', (Buffer.byteLength(content) / 1024).toFixed(1), 'KB');
console.log('Total lines:', content.split(/\r?\n/).length);

const headMatch = content.match(/<head>([\s\S]*?)<\/head>/i);
if (headMatch) {
  console.log('  <head> section:', (Buffer.byteLength(headMatch[1]) / 1024).toFixed(1), 'KB');
}

const styleMatches = [...content.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
const styleSize = styleMatches.reduce((acc, m) => acc + Buffer.byteLength(m[1]), 0);
console.log('  Inline <style> tags:', (styleSize / 1024).toFixed(1), 'KB');

const jsonLd = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
const jsonSize = jsonLd.reduce((acc, m) => acc + Buffer.byteLength(m[1]), 0);
console.log('  JSON-LD Schema:', (jsonSize / 1024).toFixed(1), 'KB');

const svgMatches = [...content.matchAll(/<svg[\s\S]*?<\/svg>/gi)];
const svgSize = svgMatches.reduce((acc, m) => acc + Buffer.byteLength(m[0]), 0);
console.log('  Inline SVGs:', svgMatches.length, 'icons/graphics, total:', (svgSize / 1024).toFixed(1), 'KB');

const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
if (mainMatch) {
  console.log('  <main> content:', (Buffer.byteLength(mainMatch[0]) / 1024).toFixed(1), 'KB');
}

const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('  <footer> section:', (Buffer.byteLength(footerMatch[0]) / 1024).toFixed(1), 'KB');
}

// Find all top-level sections in <main>
if (mainMatch) {
  const sections = [...mainMatch[0].matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
  console.log('\nSections inside <main>:');
  sections.forEach((sec, idx) => {
    const idMatch = sec[0].match(/id="([^"]+)"/);
    const classMatch = sec[0].match(/class="([^"]+)"/);
    const h2Match = sec[1].match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
    const heading = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim().slice(0, 45) : 'No heading';
    console.log(`  [${idx + 1}] ${(Buffer.byteLength(sec[0]) / 1024).toFixed(1)} KB | ID: ${idMatch ? idMatch[1] : 'none'} | Class: ${classMatch ? classMatch[1] : 'none'} | Heading: "${heading}"`);
  });
}
