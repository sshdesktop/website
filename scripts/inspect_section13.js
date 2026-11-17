const fs = require('fs');

const content = fs.readFileSync('e:/ssh desktop/index.html', 'utf8');
const lines = content.split(/\r?\n/);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('queries-title') || lines[i].includes('Common Linux Server & SSH Search Queries')) {
    console.log(`Section 13 starts around line ${i + 1}`);
    for (let j = Math.max(0, i - 2); j < Math.min(lines.length, i + 35); j++) {
      console.log(`${j + 1}: ${lines[j]}`);
    }
    break;
  }
}
