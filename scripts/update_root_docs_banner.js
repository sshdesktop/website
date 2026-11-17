const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'docs.html');
let content = fs.readFileSync(filePath, 'utf8');

const target = `<!-- 1-Line CLI Quickstart Banner -->`;
const banner = `<!-- Modular Docs Portal Banner -->
    <section class="container" style="margin-top: 24px; margin-bottom: 24px;">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid var(--accent-cyan); border-radius: 12px; padding: 24px 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);">
        <div>
          <span class="badge badge-accent" style="margin-bottom: 6px;">New: Modular Documentation Directory</span>
          <h3 style="color: #f8fafc; font-size: 1.25rem; font-weight: 700; margin: 4px 0 6px;">Looking for dedicated chapter-by-chapter documentation?</h3>
          <p style="color: #94a3b8; font-size: 0.95rem; margin: 0;">We have split the entire manual into 27 dedicated, searchable documentation pages inside the <code>/docs/</code> directory with direct GitHub code references.</p>
        </div>
        <a href="docs/index.html" class="btn btn-primary" style="white-space: nowrap;">
          <span>Explore /docs/ Directory &rarr;</span>
        </a>
      </div>
    </section>

    `;

if (content.includes(target) && !content.includes('Modular Docs Portal Banner')) {
  content = content.replace(target, banner + target);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated docs.html with Modular Docs Portal Banner.');
} else {
  console.log('Target not found or banner already exists.');
}
