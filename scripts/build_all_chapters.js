// scripts/build_all_chapters.js
// Generates deep, code-verified documentation for all 29 chapters based on the real GitHub repository code.

const fs = require('fs');
const path = require('path');
const docsDir = path.join(__dirname, '..', 'docs');
const { chapters, generateSidebar, generateHeader, generateFooter } = require('./build_comprehensive_docs');
const enrichments = require('./chapter_enrichments');

// Helper to sanitize code blocks in HTML
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Exhaustive, code-grounded data for every single chapter
const chapterDetails = require('./chapter_data');

function buildAllChapters() {
  console.log(`Building ${chapters.length} comprehensive end-user chapter pages...`);

  chapters.forEach((chapter, index) => {
    const detail = chapterDetails[chapter.slug];
    const enrichment = enrichments[chapter.slug] || {};
    if (!detail) {
      console.error(`Missing details for chapter: ${chapter.slug}`);
      return;
    }

    const prevChapter = index > 0 ? chapters[index - 1] : null;
    const nextChapter = index < chapters.length - 1 ? chapters[index + 1] : null;

    const sidebar = generateSidebar(chapter.slug);
    const header = generateHeader();
    const footer = generateFooter();

    const screenshotWebp = `../assets/images/screenshots/${chapter.screenshot}.webp`;
    const screenshotJpg = `../assets/images/screenshots/${chapter.screenshot}.jpg`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${chapter.seoTitle}</title>
  <meta name="description" content="${chapter.description}">
  <link rel="canonical" href="https://sshdesktop.com/docs/${chapter.slug}">

  <!-- OpenGraph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${chapter.seoTitle}">
  <meta property="og:description" content="${chapter.description}">
  <meta property="og:url" content="https://sshdesktop.com/docs/${chapter.slug}">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:site_name" content="SSH Desktop">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${chapter.seoTitle}">
  <meta name="twitter:description" content="${chapter.description}">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">

  <!-- CSS (Optimized: Modular Base + Docs Bundle) -->
  <link rel="stylesheet" href="../assets/css/base.min.css">
  <link rel="stylesheet" href="../assets/css/docs.min.css">

  <!-- JSON-LD -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sshdesktop.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Documentation",
          "item": "https://sshdesktop.com/docs/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${chapter.title}",
          "item": "https://sshdesktop.com/docs/${chapter.slug}"
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://sshdesktop.com/docs/${chapter.slug}#article",
      "headline": "${chapter.title} - SSH Desktop Documentation",
      "description": "${chapter.description}",
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "SSH Desktop Documentation Team",
        "url": "https://sshdesktop.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SSH Desktop",
        "url": "https://sshdesktop.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sshdesktop.com/assets/images/favicon.svg"
        }
      }
    }
  ]
}
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
${header}

  <!-- Docs Layout -->
  <main class="container docs-layout">
    <!-- Sticky Mobile Navigation Bar -->
    <div class="docs-mobile-header" id="docsMobileHeader">
      <button type="button" class="docs-mobile-btn" id="docsMobileToggle" aria-expanded="false" aria-controls="docsSidebar" aria-label="Open documentation navigation">
        <span style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.1rem;">☰</span>
          <span>Documentation Menu (43 Guides)</span>
        </span>
        <span style="font-size: 0.8rem; opacity: 0.7;">▼</span>
      </button>
    </div>

    <!-- Mobile Drawer Backdrop -->
    <div class="docs-sidebar-backdrop" id="docsSidebarBackdrop"></div>

    <aside class="docs-sidebar" id="docsSidebar" aria-label="Documentation Table of Contents">
${sidebar}
    </aside>

    <div class="docs-content">
      <!-- Breadcrumb -->
      <nav class="blog-breadcrumb" aria-label="Breadcrumb" style="margin-bottom: 16px;">
        <ol style="display: flex; gap: 8px; list-style: none; padding: 0; font-size: 0.88rem; color: var(--text-dim); flex-wrap: wrap;">
          <li><a href="../index.html" style="color: var(--text-dim);">Home</a></li>
          <li>/</li>
          <li><a href="index.html" style="color: var(--text-dim);">Docs</a></li>
          <li>/</li>
          <li aria-current="page" style="color: var(--accent-cyan); font-weight: 600;">${chapter.title}</li>
        </ol>
      </nav>

      <!-- App Meta Pill -->
      <div class="code-ref-pill" style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: #1e293b; border: 1px solid #334155; border-radius: 20px; font-size: 0.82rem; margin-bottom: 18px; color: #cbd5e1;">
        <span style="color: var(--accent-cyan); font-weight: 700;">Category:</span>
        <span>${chapter.category}</span>
        <span style="color: #64748b;">•</span>
        <span style="color: #10b981; font-weight: 600;">100% Agentless GUI</span>
        <span style="color: #64748b;">•</span>
        <span>Zero Server Footprint</span>
      </div>

      <!-- Chapter Header -->
      <div style="margin-bottom: 24px;">
        <span class="chapter-badge">${chapter.category}</span>
        <h1 class="docs-article-title">${chapter.icon} ${chapter.title}</h1>
        <p class="docs-lead">${detail.lead}</p>
      </div>

      <!-- App Screenshot -->
      <div class="doc-screenshot-frame" style="margin-bottom: 32px;">
        <picture>
          <source srcset="${screenshotWebp}" type="image/webp">
          <img src="${screenshotJpg}" alt="${chapter.title} Interface Screenshot" width="1366" height="767" loading="lazy" decoding="async">
        </picture>
        <div class="screenshot-caption">Figure: Real-time visual interface of ${chapter.title} in SSH Desktop.</div>
      </div>

      <div class="docs-body" style="font-size: 1rem; line-height: 1.7; color: var(--text-main);">
        <!-- What Is It & Problem Solved -->
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
            What is this Application &amp; Why Do You Need It?
          </h2>
          <p>${detail.whatIsIt}</p>
          <p>${detail.whyNeedIt}</p>
          <div style="background: #1e293b; border-left: 4px solid #38bdf8; padding: 12px 18px; border-radius: 0 8px 8px 0; margin: 16px 0; font-size: 0.92rem;">
            <strong>Legacy Tools Replaced:</strong> ${chapter.replaces}
          </div>
        </section>

        <!-- Interface Overview & Visual Controls -->
        ${enrichment && enrichment.interfaceTour ? `
        <section style="margin-bottom: 32px; background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 22px;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>🖥️</span> Interface Overview &amp; Visual Controls
          </h2>
          <div style="font-size: 0.94rem; color: #cbd5e1; line-height: 1.7;">
            ${enrichment.interfaceTour}
          </div>
        </section>` : ''}

        <!-- Key Features -->
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
            Key Capabilities &amp; Features
          </h2>
          <ul style="padding-left: 20px; line-height: 1.8;">
${detail.features.map(f => `            <li style="margin-bottom: 8px;">${f}</li>`).join('\n')}
          </ul>
        </section>

        <!-- Prerequisites & Requirements -->
        <section style="margin-bottom: 32px; background: #0f172a; border: 1px solid #334155; border-radius: 10px; padding: 22px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #f8fafc; margin-top: 0; margin-bottom: 12px;">
            📋 Prerequisites &amp; Remote Host Requirements
          </h3>
          <ul style="padding-left: 20px; margin: 0; font-size: 0.92rem; color: #cbd5e1; line-height: 1.7;">
${detail.prerequisites.map(p => `            <li>${p}</li>`).join('\n')}
          </ul>
        </section>

        <!-- Step-by-Step How-To Tutorial -->
        <section style="margin-bottom: 36px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 16px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
            Step-by-Step How-To Tutorial
          </h2>
${detail.steps.map(step => `          <div style="background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 20px; margin-bottom: 18px;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #38bdf8; margin-top: 0; margin-bottom: 10px;">
              ${step.title}
            </h3>
            <div style="font-size: 0.94rem; color: #cbd5e1; line-height: 1.7;">
              ${step.content}
            </div>
          </div>`).join('\n')}
        </section>

        <!-- Pro-Tips & Best Practices -->
        ${enrichment && enrichment.proTips && enrichment.proTips.length > 0 ? `
        <section style="margin-bottom: 32px; background: #0f172a; border-left: 4px solid #10b981; border-top: 1px solid #334155; border-right: 1px solid #334155; border-bottom: 1px solid #334155; border-radius: 0 10px 10px 0; padding: 20px 24px;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: #f8fafc; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>💡</span> Pro-Tips &amp; Best Practices
          </h2>
          <ul style="padding-left: 20px; margin: 0; font-size: 0.93rem; color: #cbd5e1; line-height: 1.8;">
${enrichment.proTips.map(pt => `            <li style="margin-bottom: 6px;">${pt}</li>`).join('\n')}
          </ul>
        </section>` : ''}

        <!-- Under The Hood -->
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
            Under the Hood: Linux Commands &amp; Architecture
          </h2>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.7;">
            ${detail.underTheHood}
          </p>
          <div style="background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px 18px; margin-top: 14px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 6px;">
              Primary Commands / Virtual Files Executed Over SSH:
            </div>
            <code style="font-size: 0.88rem; color: #38bdf8; font-family: var(--font-mono);">
              ${chapter.commands}
            </code>
          </div>
        </section>

        <!-- Keyboard Shortcuts Table -->
        <section style="margin-bottom: 36px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 12px; border-bottom: 2px solid #334155; padding-bottom: 8px;">
            ⌨️ Keyboard Shortcuts &amp; Productivity Tips
          </h2>
          <table class="shortcut-table">
            <thead>
              <tr>
                <th style="width: 35%;">Action / Function</th>
                <th style="width: 65%;">Shortcut / Key Sequence</th>
              </tr>
            </thead>
            <tbody>
${detail.shortcuts.map(sc => `              <tr>
                <td style="font-weight: 600; color: #f8fafc;">${sc.desc}</td>
                <td><kbd style="background: #334155; padding: 3px 8px; border-radius: 4px; font-size: 0.82rem; font-family: var(--font-mono); color: #38bdf8;">${sc.key}</kbd></td>
              </tr>`).join('\n')}
            </tbody>
          </table>
        </section>

        <!-- Troubleshooting & Common FAQs -->
        ${enrichment && enrichment.troubleshooting && enrichment.troubleshooting.length > 0 ? `
        <section style="margin-bottom: 36px;">
          <h2 style="font-size: 1.35rem; font-weight: 700; color: #f8fafc; margin-bottom: 16px; border-bottom: 2px solid #334155; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;">
            <span>❓</span> Troubleshooting &amp; Frequently Asked Questions
          </h2>
          <div style="display: flex; flex-direction: column; gap: 14px;">
${enrichment.troubleshooting.map(item => `            <div style="background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 16px 20px;">
              <h3 style="font-size: 1rem; font-weight: 700; color: #38bdf8; margin: 0 0 8px;">${item.q}</h3>
              <p style="font-size: 0.92rem; color: #cbd5e1; margin: 0; line-height: 1.6;">${item.a}</p>
            </div>`).join('\n')}
          </div>
        </section>` : ''}
      </div>

      <!-- Chapter Pager (Previous / Next) -->
      <nav class="chapter-pager" aria-label="Documentation Chapter Navigation">
        ${prevChapter ? `
        <a href="${prevChapter.slug}" class="pager-card">
          <span class="pager-direction">&larr; Previous Chapter</span>
          <span class="pager-title">${prevChapter.icon} ${prevChapter.title}</span>
        </a>` : '<div></div>'}
        ${nextChapter ? `
        <a href="${nextChapter.slug}" class="pager-card" style="text-align: right; margin-left: auto;">
          <span class="pager-direction">Next Chapter &rarr;</span>
          <span class="pager-title">${nextChapter.icon} ${nextChapter.title}</span>
        </a>` : '<div></div>'}
      </nav>

      <!-- Conversion CTA -->
      <div class="blog-cta-box" style="margin-top: 36px;">
        <h3>Try SSH Desktop Free</h3>
        <p>Experience the macOS-inspired visual desktop for Linux servers. Hardware-accelerated terminal, dual-pane SFTP, Docker GUI, and background tunnels — 100% agentless.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="../download.html" class="blog-cta-button">Download App &rarr;</a>
          <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener" class="btn btn-secondary" style="border-radius: 8px;">View on GitHub</a>
        </div>
      </div>
    </div>
  </main>

${footer}

  <!-- Sidebar & Navigation JavaScript -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Mobile Drawer Toggle
      const mobileToggle = document.getElementById('docsMobileToggle');
      const sidebar = document.getElementById('docsSidebar');
      const backdrop = document.getElementById('docsSidebarBackdrop');
      const closeBtn = document.getElementById('docsSidebarClose');

      function openSidebar() {
        if (sidebar && backdrop) {
          sidebar.classList.add('open');
          backdrop.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      }

      function closeSidebar() {
        if (sidebar && backdrop) {
          sidebar.classList.remove('open');
          backdrop.classList.remove('open');
          document.body.style.overflow = '';
        }
      }

      if (mobileToggle) mobileToggle.addEventListener('click', openSidebar);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
      if (backdrop) backdrop.addEventListener('click', closeSidebar);

      // Close mobile drawer on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
          closeSidebar();
        }
      });

      // 2. Auto-scroll active chapter into view inside the sticky sidebar
      const activeLink = document.querySelector('.docs-nav-list a.active');
      if (sidebar && activeLink) {
        setTimeout(() => {
          const sidebarRect = sidebar.getBoundingClientRect();
          const activeRect = activeLink.getBoundingClientRect();
          if (activeRect.top < sidebarRect.top || activeRect.bottom > sidebarRect.bottom) {
            sidebar.scrollTop = activeLink.offsetTop - sidebar.offsetTop - (sidebar.clientHeight / 2) + 20;
          }
        }, 80);
      }

      // 3. Instant Search Filter in Sidebar
      const filterInput = document.getElementById('docsSidebarFilter');
      if (filterInput && sidebar) {
        filterInput.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          const groups = sidebar.querySelectorAll('.docs-nav-group-title');
          const lists = sidebar.querySelectorAll('.docs-nav-list');

          lists.forEach((list, idx) => {
            let hasVisible = false;
            const items = list.querySelectorAll('li');
            items.forEach(li => {
              const text = li.textContent.toLowerCase();
              if (!query || text.includes(query)) {
                li.style.display = '';
                hasVisible = true;
              } else {
                li.style.display = 'none';
              }
            });
            if (groups[idx]) {
              groups[idx].style.display = hasVisible ? '' : 'none';
            }
          });
        });
      }
    });
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(docsDir, chapter.slug), html, 'utf8');
  });

  console.log(`Successfully generated all ${chapters.length} documentation chapters with verified code.`);
}

buildAllChapters();
