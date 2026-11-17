/**
 * SSH Desktop - 25-App Suite Category Filter & Live Search JS
 * Page-specific: Only loaded on apps.html
 */
document.addEventListener('DOMContentLoaded', () => {
  initAppFilters();
});

function initAppFilters() {
  const filterPills = document.querySelectorAll('.app-filter-pill');
  const appCards = document.querySelectorAll('.app-card');
  const searchInput = document.getElementById('appsSearchInput');

  if (!filterPills.length || !appCards.length) return;

  function applyFilter(category, query) {
    appCards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || '';
      const cardTitle = card.querySelector('.app-card-title')?.textContent.toLowerCase() || '';
      const cardDesc = card.querySelector('.app-card-desc')?.textContent.toLowerCase() || '';

      const matchesCat = (category === 'all' || cardCat.toLowerCase() === category.toLowerCase());
      const matchesSearch = (!query || cardTitle.includes(query) || cardDesc.includes(query));

      card.style.display = (matchesCat && matchesSearch) ? 'flex' : 'none';
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-category') || 'all';
      const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
      applyFilter(cat, q);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const activePill = document.querySelector('.app-filter-pill.active');
      const cat = activePill ? (activePill.getAttribute('data-category') || 'all') : 'all';
      applyFilter(cat, q);
    });
  }
}
