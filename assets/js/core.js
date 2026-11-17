/**
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
