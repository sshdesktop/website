/**
 * Advanced Code-Splitting & Optimization Pipeline for SSH Desktop
 * Splits monolithic CSS & JS into high-performance, page-specific bundles
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CSS_DIR = path.join(ROOT_DIR, 'assets', 'css');
const JS_DIR = path.join(ROOT_DIR, 'assets', 'js');

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
    .replace(/\r?\n|\r/g, '')
    .replace(/\s+/g, ' ')
    .replace(/;\}/g, '}')
    .trim();
}

function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^\s*\/\/.*$/gm, '')
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
}

console.log('--- Step 1: Code-Splitting JavaScript ---');
const mainJs = fs.readFileSync(path.join(JS_DIR, 'main.js'), 'utf8');

// 1. Core JS (Mobile menu, OS detection, copy buttons, announcement, back to top, FAQ)
const coreJs = `/**
 * SSH Desktop Core JS - Ultra-fast, zero dependencies
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAnnouncementBar();
  initCopyButtons();
  detectUserOS();
  initBackToTop();
  initFAQAccordion();
});

function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (!mobileToggle || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  mobileToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) closeMenu();
    else {
      navLinks.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  });

  navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => { if (!e.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}

function initAnnouncementBar() {
  const bar = document.getElementById('announcementBar');
  const dismiss = document.getElementById('dismissAnnouncement');
  if (!bar || !dismiss) return;
  if (sessionStorage.getItem('sshdesktop_announce_dismissed') === '1') {
    bar.style.display = 'none';
    return;
  }
  dismiss.addEventListener('click', () => {
    bar.style.display = 'none';
    sessionStorage.setItem('sshdesktop_announce_dismissed', '1');
  });
}

function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy') || btn.previousElementSibling?.textContent || '';
      if (!textToCopy) return;
      try {
        await navigator.clipboard.writeText(textToCopy);
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  });
}

function detectUserOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator.userAgentData && window.navigator.userAgentData.platform)
    ? window.navigator.userAgentData.platform.toLowerCase()
    : window.navigator.platform.toLowerCase();

  let detectedOS = 'windows';
  let downloadHref = 'download-windows.html';
  let btnLabel = 'Download for Windows 11/10';

  if (platform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os')) {
    detectedOS = 'mac';
    downloadHref = 'download-mac.html';
    btnLabel = 'Download for macOS (Universal)';
  } else if (platform.includes('linux') || ua.includes('linux') || ua.includes('x11')) {
    detectedOS = 'linux';
    downloadHref = 'download-linux-desktop.html';
    btnLabel = 'Download for Linux (.deb / .rpm)';
  }

  const dynamicBtn = document.getElementById('heroDynamicDownload');
  if (dynamicBtn) {
    dynamicBtn.href = downloadHref;
    const labelSpan = dynamicBtn.querySelector('.btn-text');
    if (labelSpan) labelSpan.textContent = btnLabel;
  }
}

function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });
}
`;

fs.writeFileSync(path.join(JS_DIR, 'core.js'), coreJs, 'utf8');
const minCoreJs = minifyJS(coreJs);
fs.writeFileSync(path.join(JS_DIR, 'core.min.js'), minCoreJs, 'utf8');
console.log(`  -> assets/js/core.min.js: ${(Buffer.byteLength(minCoreJs) / 1024).toFixed(1)} KB`);

// 2. Command Palette (Search) - Lazy-loaded on search click or Ctrl+K
const cmdStartIndex = mainJs.indexOf('function initCommandPalette() {');
const cmdEndIndex = mainJs.indexOf('function initSonomaAppSlider() {');
if (cmdStartIndex !== -1 && cmdEndIndex !== -1) {
  const cmdPaletteCode = `/**
 * SSH Desktop - Command Palette (Ctrl+K)
 */
${mainJs.slice(cmdStartIndex, cmdEndIndex).trim()}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCommandPalette);
} else {
  initCommandPalette();
}
`;
  fs.writeFileSync(path.join(JS_DIR, 'command-palette.js'), cmdPaletteCode, 'utf8');
  const minCmdJs = minifyJS(cmdPaletteCode);
  fs.writeFileSync(path.join(JS_DIR, 'command-palette.min.js'), minCmdJs, 'utf8');
  console.log(`  -> assets/js/command-palette.min.js: ${(Buffer.byteLength(minCmdJs) / 1024).toFixed(1)} KB`);
}

// 3. Homepage Interactive Bundle (Sonoma Slider, Sonoma Desktop, GitHub Stars)
const sliderStartIndex = mainJs.indexOf('function initSonomaAppSlider() {');
const docsStartIndex = mainJs.indexOf('function initDocsSearch() {');
if (sliderStartIndex !== -1 && docsStartIndex !== -1) {
  const sonomaCode = mainJs.slice(sliderStartIndex, docsStartIndex).trim();
  const homeCode = `/**
 * SSH Desktop - Homepage Interactive Sonoma Showcase & Benchmarks
 */
document.addEventListener('DOMContentLoaded', () => {
  const initDeferred = () => {
    if (typeof initSonomaAppSlider === 'function') initSonomaAppSlider();
    if (typeof initSonomaDesktop === 'function') initSonomaDesktop();
    initGitHubStars();
    initTerminalTabs();
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(initDeferred, { timeout: 1500 });
  } else {
    setTimeout(initDeferred, 150);
  }
});

function initGitHubStars() {
  const badge = document.getElementById('navGhStars');
  if (!badge) return;
  fetch('https://api.github.com/repos/sshdesktop/sshdesktop')
    .then(r => r.json())
    .then(data => {
      if (data && typeof data.stargazers_count === 'number') {
        badge.textContent = data.stargazers_count.toLocaleString();
      }
    })
    .catch(() => {});
}

function initTerminalTabs() {
  const tabs = document.querySelectorAll('.term-tab');
  const panes = document.querySelectorAll('.term-pane');
  if (!tabs.length || !panes.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetPane = document.getElementById('pane-' + target);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

${sonomaCode}
`;
  fs.writeFileSync(path.join(JS_DIR, 'homepage.js'), homeCode, 'utf8');
  const minHomeJs = minifyJS(homeCode);
  fs.writeFileSync(path.join(JS_DIR, 'homepage.min.js'), minHomeJs, 'utf8');
  console.log(`  -> assets/js/homepage.min.js: ${(Buffer.byteLength(minHomeJs) / 1024).toFixed(1)} KB`);
}

console.log('\n--- Step 2: Code-Splitting CSS ---');
const styleCss = fs.readFileSync(path.join(CSS_DIR, 'style.css'), 'utf8');
const minStyleCss = minifyCSS(styleCss);
fs.writeFileSync(path.join(CSS_DIR, 'style.min.css'), minStyleCss, 'utf8');
console.log(`  -> assets/css/style.min.css: ${(Buffer.byteLength(minStyleCss) / 1024).toFixed(1)} KB`);

console.log('\n✅ Code splitting completed successfully!');
