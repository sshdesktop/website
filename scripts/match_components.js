const fs = require('fs');
const paths = JSON.parse(fs.readFileSync('scripts/github_tree.json', 'utf8'));

console.log('--- src/components ---');
const comps = paths.filter(p => p.startsWith('src/components/'));
console.log(comps);
