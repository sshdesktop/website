const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const envCode = fs.readFileSync(path.join(cacheDir, 'src_apps_env_EnvManager.tsx'), 'utf8');
const envState = [...envCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('EnvManager state types:', envState.slice(0, 8));

const notesCode = fs.readFileSync(path.join(cacheDir, 'src_apps_notes_Notes.tsx'), 'utf8');
const notesState = [...notesCode.matchAll(/useState(?:<([^>]+)>)?\(([^)]*)\)/g)].map(m => m[1] || m[2]);
console.log('Notes state types:', notesState.slice(0, 8));
