/**
 * SSH Desktop - Documentation Search & Navigation JS
 * Page-specific: Only loaded on docs.html
 */
document.addEventListener('DOMContentLoaded', () => {
  initDocsSearch();
  initDocsSmoothScroll();
});

function initDocsSearch() {
  const searchInput = document.getElementById('docsSearchInput');
  const navLinks = document.querySelectorAll('.docs-nav-list a');
  const sections = document.querySelectorAll('.docs-section');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      navLinks.forEach(link => { link.style.display = 'block'; });
      sections.forEach(sec => { sec.style.display = 'block'; });
      return;
    }

    navLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      link.style.display = text.includes(query) ? 'block' : 'none';
    });

    sections.forEach(sec => {
      const text = sec.textContent.toLowerCase();
      sec.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}

function initDocsSmoothScroll() {
  document.querySelectorAll('.docs-nav-list a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, null, '#' + targetId);
      }
    });
  });
}
