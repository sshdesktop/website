const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const htmlFiles = [];

function findHtmlFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === '.git' || item === 'dist' || item.startsWith('.')) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath);
    } else if (item.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

findHtmlFiles(ROOT_DIR);

let count = 0;
for (const f of htmlFiles) {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('href="//sshdesktop.com"') || content.includes('href="//sshdesktop.com/"')) {
    content = content.replace(/href="\/\/sshdesktop\.com\/?"/g, 'href="https://sshdesktop.com/"');
    fs.writeFileSync(f, content, 'utf8');
    count++;
  }
}

console.log(`Updated protocol-relative links in ${count} files.`);
