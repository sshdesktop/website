const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const target = `<li><a href="download-linux-cli.html">Linux Headless CLI Daemon</a></li>\r\n            <li><a href="docs/">Documentation &amp; Tutorials</a></li>`;
const replacement = `<li><a href="download-linux-cli.html">Linux Headless CLI Daemon</a></li>\r\n            <li><a href="installation.html">Installation &amp; Setup Guide</a></li>\r\n            <li><a href="quickstart.html">3-Minute Quickstart Guide</a></li>\r\n            <li><a href="tutorials.html">Server Management Tutorials</a></li>\r\n            <li><a href="cheat-sheet.html">Linux &amp; SSH Cheat Sheet</a></li>\r\n            <li><a href="docs/">Documentation Hub (43+ Guides)</a></li>`;

if (html.includes(target)) {
  html = html.replace(target, replacement);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully updated index.html footer links!');
} else {
  // Try with LF
  const targetLF = target.replace(/\r\n/g, '\n');
  const replacementLF = replacement.replace(/\r\n/g, '\n');
  if (html.includes(targetLF)) {
    html = html.replace(targetLF, replacementLF);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Successfully updated index.html footer links (LF)!');
  } else {
    console.log('Target not found in index.html');
  }
}
