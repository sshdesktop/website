const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

['src-tauri_src_archive.rs', 'src-tauri_src_system_docker.rs', 'src-tauri_src_system_service.rs', 'src-tauri_src_system_firewall.rs'].forEach(f => {
  const code = fs.readFileSync(path.join(cacheDir, f), 'utf8');
  console.log(`\n=== Functions in ${f} ===`);
  const fnMatches = [...code.matchAll(/pub (?:async )?fn ([a-zA-Z0-9_]+)\s*\(([^)]*)\)/g)];
  fnMatches.forEach(m => console.log(`  fn ${m[1]}(${m[2].trim()})`));
});
