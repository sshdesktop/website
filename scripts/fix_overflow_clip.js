const fs = require('fs');
const path = require('path');

const stylePath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(stylePath, 'utf8');

// Replace the html and body overflow-x
css = css.replace(
  /html\s*\{([^}]*?)overflow-x:\s*hidden;/g,
  'html {\$1overflow-x: clip;'
);

css = css.replace(
  /body\s*\{([^}]*?)overflow-x:\s*hidden;/g,
  'body {\$1overflow-x: clip;'
);

css = css.replace(
  /html,\s*body\s*\{([^}]*?)overflow-x:\s*hidden;/g,
  'html, body {\$1overflow-x: clip;'
);

fs.writeFileSync(stylePath, css, 'utf8');
console.log('Updated style.css overflow-x to clip.');
