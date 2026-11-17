// scripts/optimize_portal_markup.js
const fs = require('fs');
const path = require('path');

const portalScript = path.join(__dirname, 'build_docs_portal.js');
let code = fs.readFileSync(portalScript, 'utf8');

// Replace table row generation
const oldTableTarget = `<span style="font-size: 0.82rem; background: #1e293b; padding: 4px 10px; border-radius: 12px; border: 1px solid #334155; color: #94a3b8;">
                  \${c.category}
                </span>`;
const newTableTarget = `<span class="matrix-cat-badge">\${c.category}</span>`;
code = code.replace(oldTableTarget, newTableTarget);

const oldDescTarget = `<div style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 4px;">\${c.summary}</div>
                <div style="font-size: 0.78rem; color: #38bdf8;">Replaces: \${c.replaces}</div>`;
const newDescTarget = `<div class="matrix-desc-text">\${c.summary}</div>
                <div class="matrix-replaces-text">Replaces: \${c.replaces}</div>`;
code = code.replace(oldDescTarget, newDescTarget);

const oldCodeTarget = `<code style="font-size: 0.78rem; background: #0b1120; padding: 3px 6px; border-radius: 4px; color: #38bdf8; display: block; word-break: break-all;">
                  \${c.commands}
                </code>`;
const newCodeTarget = `<code class="matrix-code-badge">\${c.commands}</code>`;
code = code.replace(oldCodeTarget, newCodeTarget);

const oldBtnTarget = `<a href="\${c.slug}" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 6px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; text-decoration: none; font-size: 0.8rem; font-weight: 600; white-space: nowrap;">
                  <span>Read Guide</span> &rarr;
                </a>`;
const newBtnTarget = `<a href="\${c.slug}" class="matrix-guide-btn">
                  <span>Read Guide</span> &rarr;
                </a>`;
code = code.replace(oldBtnTarget, newBtnTarget);

// Replace card generation with clean classes
const oldCardRegex = /<div class="doc-app-card doc-search-card"[\s\S]*?Read Chapter Manual[\s\S]*?<\/div>\s*<\/div>`/m;
const newCardMarkup = `<div class="doc-app-card doc-search-card" data-category="\${c.catSlug}" data-title="\${c.title.toLowerCase()}" data-replaces="\${c.replaces.toLowerCase()}" data-commands="\${c.commands.toLowerCase()}" data-desc="\${c.summary.toLowerCase()}">
              <div>
                <div class="doc-card-top">
                  <span class="doc-card-icon">\${c.icon}</span>
                  <a href="\${c.github}" target="_blank" rel="noopener" class="doc-card-badge">
                    \${c.githubLabel} ↗
                  </a>
                </div>
                <h4 class="doc-card-title">
                  <a href="\${c.slug}">\${c.title}</a>
                </h4>
                <p class="doc-card-desc">\${c.summary}</p>
                <div class="doc-card-replaces">
                  <strong>Replaces:</strong> \${c.replaces}
                </div>
              </div>
              <div class="doc-card-footer">
                <a href="\${c.slug}" class="doc-card-link">
                  <span>Read Chapter Manual</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>\``;

code = code.replace(oldCardRegex, newCardMarkup);

fs.writeFileSync(portalScript, code, 'utf8');
console.log('Successfully optimized build_docs_portal.js markup!');
