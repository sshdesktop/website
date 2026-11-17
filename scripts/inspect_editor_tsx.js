const fs = require('fs');
const path = require('path');
const cacheDir = path.join(__dirname, 'github_cache');

const code = fs.readFileSync(path.join(cacheDir, 'src_apps_editor_CodeEditor.tsx'), 'utf8');
const shortcuts = [...code.matchAll(/(e\.key === ['"][^'"]+['"]|e\.code === ['"][^'"]+['"])/g)].map(m => m[0]);
console.log('CodeEditor key checks:', [...new Set(shortcuts)].slice(0, 10));

const monacoSettings = [...code.matchAll(/(wordWrap|minimap|fontSize|lineNumbers|tabSize|readOnly|diffMode)/g)].map(m => m[0]);
console.log('CodeEditor monaco features:', [...new Set(monacoSettings)]);
