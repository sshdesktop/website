/**
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


