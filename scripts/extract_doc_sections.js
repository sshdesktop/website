const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'docs.html'), 'utf8');
const regex = /<article class=["']doc-app-article["'][^>]*id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/article>/g;

let m;
const list = [];
while ((m = regex.exec(content)) !== null) {
  const id = m[1];
  const fullHtml = m[0];
  const innerHtml = m[2];
  const titleMatch = innerHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : id;
  list.push({ id, title, len: innerHtml.length });
}

console.log('Total extracted:', list.length);
list.forEach(item => console.log(`${item.id} (${item.len} bytes): ${item.title}`));
