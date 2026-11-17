const fs = require('fs');
const path = require('path');
const https = require('https');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.html'));

const githubUrls = new Set();
for (const file of files) {
  const content = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
  const matches = content.match(/https:\/\/github\.com\/[^\s"'>]+/g) || [];
  for (const m of matches) {
    githubUrls.add(m);
  }
}

console.log(`Found ${githubUrls.size} unique GitHub URLs in docs/:`);
const urls = [...githubUrls];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode, location: res.headers.location });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(`[${res.status}] ${res.url} ${res.location ? '-> ' + res.location : ''}`);
  }
}

run();
