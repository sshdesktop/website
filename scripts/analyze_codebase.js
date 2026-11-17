const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const files = fs.readdirSync(cacheDir);
console.log(`Analyzing ${files.length} downloaded source files:\n`);

files.forEach(f => {
  const content = fs.readFileSync(path.join(cacheDir, f), 'utf8');
  
  // Find key commands or invoke calls
  const invokes = [...content.matchAll(/invoke\(['"]([^'"]+)['"]/g)].map(m => m[1]);
  const commands = [...content.matchAll(/(sudo |systemctl |docker |ufw |apt |dnf |pacman |tar |unzip |certbot |smartctl |lsblk |ss |ip |lynis )[a-zA-Z0-9_\-\.\/]+/g)].map(m => m[0]);
  const keydowns = [...content.matchAll(/(e\.key|e\.ctrlKey|e\.metaKey|e\.shiftKey|e\.altKey)[^;}\n]*/g)].map(m => m[0]);
  const stateVars = [...content.matchAll(/useState(?:<[^>]+>)?\(([^)]*)\)/g)].length;

  console.log(`=== ${f} ===`);
  console.log(`  Size: ${content.length} bytes, lines: ${content.split('\n').length}, useState: ${stateVars}`);
  if (invokes.length > 0) {
    console.log(`  Tauri Invokes (${[...new Set(invokes)].length}):`, [...new Set(invokes)].slice(0, 6).join(', '));
  }
  if (commands.length > 0) {
    console.log(`  CLI Commands (${[...new Set(commands)].length}):`, [...new Set(commands)].slice(0, 6).join(', '));
  }
});
