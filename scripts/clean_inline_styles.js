const fs = require('fs');
const path = require('path');

const CSS_PATH = path.join(__dirname, '..', 'assets', 'css', 'style.css');
const HTML_PATH = path.join(__dirname, '..', 'index.html');

let css = fs.readFileSync(CSS_PATH, 'utf8');
let html = fs.readFileSync(HTML_PATH, 'utf8');

// 1. New reusable CSS classes to append
const newClasses = `
/* Reusable Component Classes (Extracted from inline styles) */
.section-alt-bg {
  background: #f8fafc;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section-white-bordered {
  background: #ffffff;
  border-top: 1px solid var(--border);
}

.feature-col-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feature-col-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.feature-col-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
}

.feature-col-desc {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
}

.feature-col-link {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--accent-cyan);
}

.container-narrow-820 {
  max-width: 820px;
  margin: 0 auto;
}

.container-narrow-860 {
  max-width: 860px;
  margin: 0 auto;
}

.pre-footer-cta {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-top: 1px solid var(--border);
}
`;

if (!css.includes('.feature-col-card')) {
  css += newClasses;
  fs.writeFileSync(CSS_PATH, css, 'utf8');
  console.log('Added reusable classes to style.css');
}

// 2. Perform replacements in index.html
const replacements = [
  {
    from: 'style="display: flex; flex-direction: column; justify-content: space-between;"',
    to: 'class="feature-col-card"'
  },
  {
    from: 'style="font-size: 2rem; margin-bottom: 0.75rem;"',
    to: 'class="feature-col-icon"'
  },
  {
    from: 'style="font-size: 1.25rem; font-weight: 700; color: #0f172a;"',
    to: 'class="feature-col-title"'
  },
  {
    from: 'style="font-size: 0.95rem; color: #475569; line-height: 1.6;"',
    to: 'class="feature-col-desc"'
  },
  {
    from: 'style="font-size: 0.88rem; font-weight: 700; color: var(--accent-cyan);"',
    to: 'class="feature-col-link"'
  },
  {
    from: 'style="background: #ffffff; border-top: 1px solid var(--border);"',
    to: 'class="section-white-bordered"'
  },
  {
    from: 'style="max-width: 820px; margin: 0 auto;"',
    to: 'class="container-narrow-820"'
  }
];

let replacedCount = 0;
for (const r of replacements) {
  const count = (html.split(r.from).length - 1);
  if (count > 0) {
    html = html.split(r.from).join(r.to);
    replacedCount += count;
  }
}

fs.writeFileSync(HTML_PATH, html, 'utf8');
console.log(`Replaced ${replacedCount} inline style instances in index.html with clean CSS classes!`);
