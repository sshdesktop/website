const https = require('https');
const fs = require('fs');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, json: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    }).on('error', reject);
  });
}

async function inspectRepo() {
  const tree = await fetchJson('https://api.github.com/repos/sshdesktop/sshdesktop/git/trees/main?recursive=1');
  if (tree.json && tree.json.tree) {
    const paths = tree.json.tree.map(t => t.path);
    fs.writeFileSync('scripts/github_tree.json', JSON.stringify(paths, null, 2), 'utf8');
    console.log(`Saved ${paths.length} file paths to scripts/github_tree.json.`);
    
    // Check key directories
    const topDirs = new Set(paths.map(p => p.split('/')[0]));
    console.log('Top level directories / files:', [...topDirs]);

    // Check src
    const srcPaths = paths.filter(p => p.startsWith('src/'));
    console.log('src/ paths count:', srcPaths.length);
    console.log('Sample src paths:', srcPaths.slice(0, 15));

    // Check src-tauri
    const tauriPaths = paths.filter(p => p.startsWith('src-tauri/'));
    console.log('src-tauri/ paths count:', tauriPaths.length);
    console.log('Sample src-tauri paths:', tauriPaths.slice(0, 15));
  }
}

inspectRepo().catch(console.error);
