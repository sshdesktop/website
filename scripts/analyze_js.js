const fs = require('fs');

const js = fs.readFileSync('e:/ssh desktop/assets/js/main.js', 'utf8');
console.log('Total main.js size:', (Buffer.byteLength(js) / 1024).toFixed(1), 'KB');
console.log('Total lines:', js.split(/\r?\n/).length);

// Extract top-level function declarations and big data objects
const functions = [...js.matchAll(/(?:function\s+([a-zA-Z0-9_]+)|const\s+([a-zA-Z0-9_]+)\s*=\s*(?:function|\([^)]*\)\s*=>|\{))/g)];
console.log('\nTop-level declarations found:', functions.length);

// Find large data objects or arrays
const lines = js.split(/\r?\n/);
let currentBlock = null;
let blockStart = 0;
const blocks = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const fnMatch = line.match(/^function\s+([a-zA-Z0-9_]+)|^const\s+([a-zA-Z0-9_]+)\s*=/);
  if (fnMatch) {
    if (currentBlock) {
      blocks.push({ name: currentBlock, lines: i - blockStart });
    }
    currentBlock = fnMatch[1] || fnMatch[2];
    blockStart = i;
  }
}
if (currentBlock) blocks.push({ name: currentBlock, lines: lines.length - blockStart });

blocks.sort((a, b) => b.lines - a.lines);
console.log('\nLargest blocks in main.js:');
blocks.slice(0, 15).forEach(b => console.log(`  ${b.name}: ${b.lines} lines`));
