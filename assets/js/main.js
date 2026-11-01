/**
 * SSH Desktop - Client Side JavaScript
 * Fast, lightweight, pure vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle & Outside Click
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    function closeMobileMenu() {
      navLinks.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        navLinks.classList.add('open');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Auto-close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-header')) {
        closeMobileMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // Header Dropdowns, Announcement, & Command Palette
  initAnnouncementBar();
  initNavDropdowns();
  initCommandPalette();
  initGitHubStars();

  // OS Detection & Hero Button Adaptation
  detectUserOS();

  // Copy-to-Clipboard functionality
  initCopyButtons();

  // FAQ Accordion
  initFAQAccordion();

  // Terminal Demo Tabs
  initTerminalTabs();

  // macOS Sonoma Native Desktop Shell
  initSonomaDesktop();
  initSonomaAppSlider();

  // Documentation Live Search Filter
  initDocsSearch();

  // 22-App Category Filter
  initAppFilters();

  // Back to Top Smooth Scroll & Floating Trigger
  initBackToTop();

  // macOS Scroll Reveal Animations & Reading Progress
  initScrollAnimations();
});

/**
 * Detect client OS and highlight the relevant download option
 */
function detectUserOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator.userAgentData && window.navigator.userAgentData.platform) 
    ? window.navigator.userAgentData.platform.toLowerCase() 
    : window.navigator.platform.toLowerCase();

  let detectedOS = 'windows'; // default fallback
  let downloadHref = 'download-windows.html';
  let btnLabel = 'Download for Windows 11/10';
  let badgeText = 'Windows (x64 / ARM64)';

  if (platform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os x')) {
    detectedOS = 'mac';
    downloadHref = 'download-mac.html';
    btnLabel = 'Download for macOS (Apple & Intel)';
    badgeText = 'macOS Universal Binary';
  } else if (platform.includes('linux') || ua.includes('linux') || ua.includes('x11')) {
    detectedOS = 'linux-desktop';
    downloadHref = 'download-linux-desktop.html';
    btnLabel = 'Download for Linux GUI';
    badgeText = 'Linux (.deb, .rpm, AppImage)';
  } else if (platform.includes('win') || ua.includes('windows')) {
    detectedOS = 'windows';
    downloadHref = 'download-windows.html';
    btnLabel = 'Download for Windows (64-bit)';
    badgeText = 'Windows 11 / 10 / Server';
  }

  const dynamicCta = document.getElementById('heroDynamicDownload');
  const dynamicBadge = document.getElementById('heroDetectedBadge');

  if (dynamicCta) {
    dynamicCta.href = downloadHref;
    const textSpan = dynamicCta.querySelector('.btn-text');
    if (textSpan) textSpan.textContent = btnLabel;
  }

  if (dynamicBadge) {
    dynamicBadge.textContent = `Auto-detected: ${badgeText}`;
  }

  // Highlight active OS card on download.html if present
  const osCards = document.querySelectorAll('.os-card[data-os]');
  osCards.forEach(card => {
    if (card.dataset.os === detectedOS) {
      card.classList.add('highlight');
      const recTag = document.createElement('div');
      recTag.className = 'badge badge-emerald';
      recTag.style.position = 'absolute';
      recTag.style.top = '-12px';
      recTag.style.right = '20px';
      recTag.textContent = 'Recommended for you';
      card.appendChild(recTag);
    }
  });
}

/**
 * Initialize copy-to-clipboard buttons
 */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy') || btn.previousElementSibling?.textContent;
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy.trim());
        const origText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#10b981';
        btn.style.borderColor = '#10b981';
        btn.style.color = '#fff';

        setTimeout(() => {
          btn.textContent = origText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  });
}

/**
 * FAQ Accordion handling
 */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close other items for neatness
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });
}

/**
 * Terminal Interactive Tabs
 */
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const screens = document.querySelectorAll('.terminal-screen, .terminal-body');
  if (!tabs.length || !screens.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      screens.forEach(s => s.style.display = 'none');

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetScreen = document.getElementById(targetId);
      if (targetScreen) {
        targetScreen.style.display = 'block';
      }
    });
  });
}

/**
 * Real-time Documentation & Command Search Filter
 */
function initDocsSearch() {
  const searchInput = document.getElementById('docsSearchInput');
  if (!searchInput) return;

  const docArticles = document.querySelectorAll('.doc-app-article, .doc-app-card, .download-detail-grid article.card');
  if (!docArticles.length) return;

  // Check URL query parameters (e.g. ?q=tunnel)
  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q');
  if (initialQuery) {
    searchInput.value = initialQuery;
    filterArticles(initialQuery.toLowerCase().trim());
  }

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterArticles(query);
  });

  function filterArticles(query) {
    let matchCount = 0;
    docArticles.forEach(article => {
      const text = article.textContent.toLowerCase();
      const terms = (article.getAttribute('data-search-terms') || '').toLowerCase();
      if (!query || text.includes(query) || terms.includes(query)) {
        article.style.display = article.classList.contains('doc-app-card') ? 'flex' : 'block';
        matchCount++;
      } else {
        article.style.display = 'none';
      }
    });

    // Toggle category group headings
    document.querySelectorAll('.doc-category-group').forEach(group => {
      const visibleChildren = group.querySelectorAll('.doc-app-article:not([style*="display: none"]), .doc-app-card:not([style*="display: none"])');
      group.style.display = (visibleChildren.length > 0 || !query) ? 'block' : 'none';
    });

    let noResultsMsg = document.getElementById('noResultsMsg');
    const container = document.getElementById('tutorialsContainer') || docArticles[0].parentElement;
    if (matchCount === 0) {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.id = 'noResultsMsg';
        noResultsMsg.className = 'callout';
        noResultsMsg.style.borderColor = 'var(--accent-amber)';
        noResultsMsg.style.padding = '24px';
        noResultsMsg.style.margin = '20px 0';
        noResultsMsg.innerHTML = `<strong>No matching guides found</strong> for "${query}". Try searching for <em>Docker</em>, <em>Postgres</em>, <em>Firewall</em>, <em>Terminal</em>, or <em>SFTP</em>.`;
        container.appendChild(noResultsMsg);
      } else {
        noResultsMsg.style.display = 'block';
        noResultsMsg.innerHTML = `<strong>No matching guides found</strong> for "${query}". Try searching for <em>Docker</em>, <em>Postgres</em>, <em>Firewall</em>, <em>Terminal</em>, or <em>SFTP</em>.`;
      }
    } else if (noResultsMsg) {
      noResultsMsg.style.display = 'none';
    }
  }
}

/**
 * 22-App Encyclopedia Category & Search Filtering
 */
function initAppFilters() {
  const filterBtns = document.querySelectorAll('.app-filter-btn');
  const appCards = document.querySelectorAll('.app-card');
  const searchInput = document.getElementById('appSearchInput');
  if (!appCards.length) return;

  let currentCategory = 'all';
  let currentQuery = '';

  function applyFilters() {
    let matchCount = 0;
    appCards.forEach(card => {
      const cardCategory = card.dataset.category || '';
      const cardText = card.textContent.toLowerCase();
      const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesQuery = (!currentQuery || cardText.includes(currentQuery));

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    let noResults = document.getElementById('appNoResults');
    const container = document.querySelector('.apps-grid');
    if (container) {
      if (matchCount === 0) {
        if (!noResults) {
          noResults = document.createElement('div');
          noResults.id = 'appNoResults';
          noResults.style.gridColumn = '1 / -1';
          noResults.style.textAlign = 'center';
          noResults.style.padding = '40px 20px';
          noResults.style.color = '#94a3b8';
          noResults.innerHTML = `No apps found matching "<strong>${currentQuery}</strong>". Try searching for <em>Docker</em>, <em>SFTP</em>, <em>Database</em>, <em>Firewall</em>, or <em>Cron</em>.`;
          container.appendChild(noResults);
        } else {
          noResults.style.display = 'block';
          noResults.innerHTML = `No apps found matching "<strong>${currentQuery}</strong>". Try searching for <em>Docker</em>, <em>SFTP</em>, <em>Database</em>, <em>Firewall</em>, or <em>Cron</em>.`;
        }
      } else if (noResults) {
        noResults.style.display = 'none';
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/**
 * Announcement bar dismissal with localStorage persistence
 */
function initAnnouncementBar() {
  const bar = document.getElementById('announcementBar');
  const closeBtn = document.getElementById('closeAnnouncement');
  if (!bar) return;
  if (localStorage.getItem('sshdesktop_announcement_v34_dismissed') === 'true') {
    bar.style.display = 'none';
    return;
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bar.style.display = 'none';
      localStorage.setItem('sshdesktop_announcement_v34_dismissed', 'true');
    });
  }
}

/**
 * Navigation Dropdown Accordion & Click-Outside Handling
 */
function initNavDropdowns() {
  const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const parent = toggle.closest('.nav-item-dropdown');
      if (parent) {
        const isOpen = parent.classList.contains('open');
        document.querySelectorAll('.nav-item-dropdown').forEach(d => {
          if (d !== parent) d.classList.remove('open');
        });
        parent.classList.toggle('open', !isOpen);
        toggle.setAttribute('aria-expanded', !isOpen);
        e.stopPropagation();
      }
    });
  });

  // Close dropdowns on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      document.querySelectorAll('.nav-item-dropdown').forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.nav-dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/**
 * Global Command Palette & Quick Search (Ctrl + K / ⌘K)
 */
function initCommandPalette() {
  const triggerBtn = document.getElementById('headerSearchTrigger');
  let overlay, input, resultsContainer;

  function ensurePaletteModal() {
    overlay = document.getElementById('commandPaletteOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'commandPaletteOverlay';
      overlay.className = 'command-palette-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'Command Palette and Global Search');
      overlay.style.display = 'none';
      overlay.innerHTML = `
        <div class="command-palette-card" role="document">
          <div class="command-palette-header">
            <span class="command-search-icon">&#128269;</span>
            <input type="text" id="commandPaletteInput" class="command-palette-input" placeholder="Type a command, app, or guide... (e.g. Docker, SFTP, Postgres, UFW)" autocomplete="off" spellcheck="false">
            <kbd class="command-esc-badge" id="commandPaletteClose">ESC</kbd>
          </div>
          <div class="command-palette-results" id="commandPaletteResults"></div>
          <div class="command-palette-footer">
            <span><kbd>&uarr;</kbd> <kbd>&darr;</kbd> Navigate</span>
            <span><kbd>&crarr;</kbd> Open</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const closeBtn = document.getElementById('commandPaletteClose');
      if (closeBtn) {
        closeBtn.addEventListener('click', closePalette);
      }
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePalette();
      });
    }

    input = document.getElementById('commandPaletteInput');
    resultsContainer = document.getElementById('commandPaletteResults');
  }

  // Ensure modal DOM elements exist
  ensurePaletteModal();

  let selectedIndex = 0;
  let currentResults = [];

  function openPalette() {
    ensurePaletteModal();
    if (!overlay) return;
    overlay.style.display = 'flex';
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 50);
    }
    renderResults('');
  }

  function closePalette() {
    if (overlay) overlay.style.display = 'none';
  }

  function renderResults(query) {
    ensurePaletteModal();
    if (!resultsContainer) return;
    const q = (query || '').toLowerCase().trim();
    if (!q) {
      currentResults = searchIndex.slice(0, 8);
    } else {
      currentResults = searchIndex.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
      ).slice(0, 10);
    }

    selectedIndex = 0;
    if (currentResults.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: #64748b; font-size: 0.9rem;">No results found for "<strong>${query}</strong>". Try searching for <em>Docker</em>, <em>SFTP</em>, <em>Database</em>, or <em>Windows</em>.</div>`;
      return;
    }

    resultsContainer.innerHTML = currentResults.map((item, idx) => `
      <a href="${item.url}" class="command-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
        <div class="command-item-left">
          <span class="command-item-icon">${item.icon}</span>
          <div class="command-item-text">
            <span class="command-item-title">${item.title}</span>
            <span class="command-item-desc">${item.desc}</span>
          </div>
        </div>
        <span class="command-item-tag">${item.tag}</span>
      </a>
    `).join('');
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openPalette);
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (overlay.style.display === 'flex') {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && overlay.style.display === 'flex') {
      closePalette();
    } else if (overlay.style.display === 'flex') {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % currentResults.length;
        updateSelection();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
        updateSelection();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentResults[selectedIndex]) {
          window.location.href = currentResults[selectedIndex].url;
        }
      }
    }
  });

  function updateSelection() {
    const items = resultsContainer.querySelectorAll('.command-item');
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === selectedIndex);
      if (idx === selectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  if (input) {
    input.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });
  }
}

/**
 * Fetch and update real-time GitHub Star counter
 */
function initGitHubStars() {
  const starCounters = document.querySelectorAll('#navGhStars, .gh-counter');
  if (!starCounters.length) return;

  fetch('https://api.github.com/repos/sshdesktop/sshdesktop')
    .then(res => {
      if (!res.ok) throw new Error('Network response not ok');
      return res.json();
    })
    .then(data => {
      if (typeof data.stargazers_count === 'number') {
        const count = data.stargazers_count;
        const display = count >= 1000 ? (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : String(count);
        starCounters.forEach(el => {
          el.textContent = display;
        });
      }
    })
    .catch(() => {
      // Graceful fallback to static value in HTML
    });
}

/**
 * Back to Top Smooth Scroll and Floating Trigger
 */
function initBackToTop() {
  const inlineBtn = document.getElementById('backToTopBtn');
  
  // Create floating button if not in DOM
  let floatBtn = document.getElementById('floatingBackToTop');
  if (!floatBtn) {
    floatBtn = document.createElement('button');
    floatBtn.id = 'floatingBackToTop';
    floatBtn.className = 'floating-back-to-top';
    floatBtn.setAttribute('aria-label', 'Scroll to top of page');
    floatBtn.title = 'Back to top';
    floatBtn.innerHTML = '&#8593;';
    document.body.appendChild(floatBtn);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (inlineBtn) inlineBtn.addEventListener('click', scrollToTop);
  if (floatBtn) floatBtn.addEventListener('click', scrollToTop);

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 400) {
          floatBtn.classList.add('visible');
        } else {
          floatBtn.classList.remove('visible');
        }
        scrollTimeout = null;
      }, 50);
    }
  }, { passive: true });
}






/**
 * macOS Sonoma Native Interactive Desktop Shell
 */
/**
 * 25-App macOS Sonoma Screenshot Slider & Floating Dock Controller
 * Features:
 * - 25 integrated server apps dataset with real screenshots
 * - 10-second automatic carousel rotation with visual progress track
 * - Click & hold to freeze/stop moving (mousedown, touchstart)
 * - Click any dock icon to immediately view that app's screenshot
 * - Full manual navigation (prev, next, play/pause toggle)
 */
function initSonomaAppSlider() {
  const sliderWrap = document.getElementById('sonomaSliderWrap');
  if (!sliderWrap) return;

  const apps = [
    {
      id: "app-1",
      title: "macOS Sonoma Cloud Desktop Shell",
      tag: "Desktop Shell",
      icon: "🖥️",
      color: "#0071e3",
      url: "cloud-desktop.html",
      img: "assets/images/screenshots/screenshot-sonoma.webp",
      desc: "Turn any headless Linux server into a fluid, visual macOS Sonoma workspace with Mission Control, Dock, and 0% extra server RAM."
    },
    {
      id: "app-2",
      title: "Interactive PTY Terminal (Xterm.js)",
      tag: "PTY Terminal",
      icon: "💻",
      color: "#30d158",
      url: "terminal.html",
      img: "assets/images/screenshots/screenshot-terminal.webp",
      desc: "Hardware-accelerated pseudo-terminal with 24-bit TrueColor, horizontal/vertical split panes, command chips, and low latency."
    },
    {
      id: "app-3",
      title: "Dual-Pane SFTP File Manager",
      tag: "File Transfer",
      icon: "📁",
      color: "#0284c7",
      url: "sftp-client.html",
      img: "assets/images/screenshots/screenshot-sftp.webp",
      desc: "Parallel multi-stream SFTP file manager with drag-and-drop transfers, remote chmod permissions, and inline code editing."
    },
    {
      id: "app-4",
      title: "Monaco Code Editor & Cloud IDE",
      tag: "Code Editor",
      icon: "📝",
      color: "#ff9500",
      url: "monaco-code-editor.html",
      img: "assets/images/screenshots/screenshot-monaco.webp",
      desc: "Full VS Code Monaco editor engine supporting 50+ programming languages with syntax highlighting, tabs, and direct SFTP save."
    },
    {
      id: "app-5",
      title: "Docker Container & Compose Hub",
      tag: "Containers",
      icon: "🐳",
      color: "#00c7be",
      url: "docker-web-gui.html",
      img: "assets/images/screenshots/screenshot-docker.webp",
      desc: "Manage container lifecycles, stream live ANSI logs, inspect bridge networks, and spawn exec shells with zero daemon ports."
    },
    {
      id: "app-6",
      title: "Universal Database Studio (12+ DBs)",
      tag: "Databases",
      icon: "🗄️",
      color: "#af52de",
      url: "database-gui-ssh-tunnel.html",
      img: "assets/images/screenshots/screenshot-database.webp",
      desc: "Connect to PostgreSQL, MySQL, Redis, SQLite, and MongoDB over automatic zero-config encrypted SSH tunnels."
    },
    {
      id: "app-7",
      title: "Systemd Services & Daemons Manager",
      tag: "System Daemons",
      icon: "⚙️",
      color: "#64748b",
      url: "systemd-gui.html",
      img: "assets/images/screenshots/screenshot-systemd.webp",
      desc: "Start, stop, restart, inspect, and journal tail systemd unit files and background daemons with live status pills."
    },
    {
      id: "app-8",
      title: "Visual Firewall (UFW & Iptables)",
      tag: "Security & Firewall",
      icon: "🛡️",
      color: "#ff3b30",
      url: "linux-firewall-gui.html",
      img: "assets/images/screenshots/screenshot-firewall.webp",
      desc: "Point-and-click firewall rules management with built-in Port 22 anti-lockout safety engine and instant rate-limiting."
    },
    {
      id: "app-9",
      title: "System Monitor & Hardware Telemetry",
      tag: "Hardware Telemetry",
      icon: "📊",
      color: "#34c759",
      url: "system-monitor.html",
      img: "assets/images/screenshots/screenshot-system-monitor.webp",
      desc: "Real-time CPU core meters, RAM breakdown, disk I/O throughput, load averages, and live network bandwidth gauges."
    },
    {
      id: "app-10",
      title: "Interactive Process Manager (htop)",
      tag: "Processes",
      icon: "⚡",
      color: "#ffcc00",
      url: "linux-process-manager.html",
      img: "assets/images/screenshots/screenshot-process-manager.webp",
      desc: "Interactive process tree explorer: sort by CPU/RAM, search daemons, renice priority, and terminate rogue tasks."
    },
    {
      id: "app-11",
      title: "Universal Linux Package Manager",
      tag: "Packages",
      icon: "📦",
      color: "#5856d6",
      url: "linux-package-manager.html",
      img: "assets/images/screenshots/screenshot-package-manager.webp",
      desc: "Unified GUI package manager across APT (Ubuntu/Debian), DNF (Fedora/RHEL), Pacman (Arch), Snap, and Flatpak."
    },
    {
      id: "app-12",
      title: "User & Sudo Accounts Administrator",
      tag: "User Accounts",
      icon: "👥",
      color: "#bf5af2",
      url: "linux-user-manager.html",
      img: "assets/images/screenshots/screenshot-user-manager.webp",
      desc: "Linux user accounts management, sudoer privilege delegation, group membership audits, and authorized SSH key provisioning."
    },
    {
      id: "app-13",
      title: "Open Ports & Socket Listener Auditor",
      tag: "Network Auditor",
      icon: "🔍",
      color: "#5ac8fa",
      url: "network-port-auditor.html",
      img: "assets/images/screenshots/screenshot-network-auditor.webp",
      desc: "Live socket listener auditing: inspect all listening TCP/UDP ports, identifying bound addresses, processes, and PIDs."
    },
    {
      id: "app-14",
      title: "Disk, Partition & S.M.A.R.T. Manager",
      tag: "Storage & Disks",
      icon: "💾",
      color: "#475569",
      url: "linux-disk-manager.html",
      img: "assets/images/screenshots/screenshot-disk-manager.webp",
      desc: "Storage visualizer: filesystem mount points, df -h breakdown, inode usage health, and drive health indicators."
    },
    {
      id: "app-15",
      title: "Visual Crontab & Scheduled Jobs",
      tag: "Cron Automation",
      icon: "⏱️",
      color: "#ff9500",
      url: "crontab-gui.html",
      img: "assets/images/screenshots/screenshot-crontab.webp",
      desc: "Visual cron schedule builder: human-readable interval generator, syntax validation, and automated execution logging."
    },
    {
      id: "app-16",
      title: "Multi-Stream System Log Aggregator",
      tag: "Log Analysis",
      icon: "📜",
      color: "#0071e3",
      url: "log-analysis-grep.html",
      img: "assets/images/screenshots/screenshot-log-analysis.webp",
      desc: "Multi-stream log tailing and regex filtering across /var/log/syslog, auth.log, Nginx access logs, and systemd journalctl."
    },
    {
      id: "app-17",
      title: "Environment Variables & Secrets Vault",
      tag: "Secrets & Config",
      icon: "🔑",
      color: "#10b981",
      url: "env-variables-manager.html",
      img: "assets/images/screenshots/screenshot-env-manager.webp",
      desc: "Manage /etc/environment, systemd global env, and app .env files with masked secret protection and automatic backups."
    },
    {
      id: "app-18",
      title: "Integrated REST & GraphQL API Studio",
      tag: "API Testing",
      icon: "🌐",
      color: "#06b6d4",
      url: "api-studio.html",
      img: "assets/images/screenshots/screenshot-api-studio.webp",
      desc: "Tunneled Postman alternative: test internal microservices and localhost:3000 APIs securely over encrypted SSH tunnels."
    },
    {
      id: "app-19",
      title: "Automated Security Auditor & Hardener",
      tag: "Security CIS",
      icon: "🔒",
      color: "#ef4444",
      url: "linux-security-auditor.html",
      img: "assets/images/screenshots/screenshot-security-auditor.webp",
      desc: "Automated security posture scan: CIS Linux benchmarks, SSH root lockdown audits, and CVE vulnerability identification."
    },
    {
      id: "app-20",
      title: "SSH Port Forwarding & Tunnels Canvas",
      tag: "SSH Tunnels",
      icon: "🔀",
      color: "#8b5cf6",
      url: "ssh-port-forwarding.html",
      img: "assets/images/screenshots/screenshot-tunnels.webp",
      desc: "Visual tunnel manager: configure Local (-L), Remote Reverse (-R), and Dynamic SOCKS5 (-D) proxies with automatic health checks."
    },
    {
      id: "app-21",
      title: "Embedded Browser & Reverse Proxy",
      tag: "Reverse Proxy",
      icon: "🧭",
      color: "#0284c7",
      url: "reverse-proxy-browser.html",
      img: "assets/images/screenshots/screenshot-reverse-proxy.webp",
      desc: "Embedded client browser for previewing local development servers, Nginx virtual hosts, and tunneled web dashboards."
    },
    {
      id: "app-22",
      title: "Desktop Sticky Notes & Snippet Board",
      tag: "Productivity",
      icon: "📌",
      color: "#f59e0b",
      url: "sticky-notes.html",
      img: "assets/images/screenshots/screenshot-sticky-notes.webp",
      desc: "Persistent scratchpad notes and bash snippet boards pinned directly to your virtual macOS cloud desktop."
    },
    {
      id: "app-23",
      title: "SSL/TLS Certificate Manager (Certbot)",
      tag: "SSL / Certbot",
      icon: "🔐",
      color: "#10b981",
      url: "ssl-certificate-manager.html",
      img: "assets/images/screenshots/screenshot-ssl-manager.webp",
      desc: "Automated Let's Encrypt HTTPS provisioning, certificate expiration countdowns, and automated web server renewal hooks."
    },
    {
      id: "app-24",
      title: "Backup & Disaster Recovery Vault",
      tag: "Server Backups",
      icon: "💿",
      color: "#06b6d4",
      url: "backup-disaster-recovery.html",
      img: "assets/images/screenshots/screenshot-backup.webp",
      desc: "Automated server snapshot engine: scheduled tar/rsync backups, remote S3 replication, and point-in-time restoration."
    },
    {
      id: "app-25",
      title: "Multi-Server Automation & Broadcast",
      tag: "Fleet Automation",
      icon: "🚀",
      color: "#f97316",
      url: "multi-server-automation.html",
      img: "assets/images/screenshots/screenshot-multi-server.webp",
      desc: "Broadcast bash tasks, playbook executions, and security updates across 100+ Linux servers simultaneously."
    }
  ];

  const badgeEl = document.getElementById('sliderAppBadge');
  const titleEl = document.getElementById('sliderAppTitle');
  const tagEl = document.getElementById('sliderAppTag');
  const descEl = document.getElementById('sliderAppDesc');
  const linkEl = document.getElementById('sliderOpenLink');
  const mainImg = document.getElementById('sliderMainImg');
  const progressEl = document.getElementById('sliderProgressBar');
  const frameEl = document.getElementById('sliderScreenFrame');
  const timerPill = document.getElementById('sliderTimerPill');
  const timerText = document.getElementById('sliderTimerText');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const pauseBtn = document.getElementById('sliderPauseBtn');
  const dockContainer = document.getElementById('sonomaDock25');

  let currentIndex = 0;
  let isPaused = false;
  let isHolding = false;
  let progress = 0;
  const DURATION_MS = 10000; // 10 seconds per image
  const INTERVAL_MS = 50;

  function renderApp(index) {
    if (index < 0 || index >= apps.length) return;
    currentIndex = index;
    const app = apps[currentIndex];

    // Smooth image transition
    if (mainImg) {
      mainImg.classList.add('anim-fade');
      const webpSource = document.getElementById('sliderMainWebp');
      if (webpSource) webpSource.srcset = app.img;
      setTimeout(() => {
        mainImg.src = app.img;
        mainImg.alt = `${app.title} Screenshot`;
        mainImg.onload = () => mainImg.classList.remove('anim-fade');
        setTimeout(() => mainImg.classList.remove('anim-fade'), 200);
      }, 100);
    }

    if (badgeEl) badgeEl.textContent = `App ${String(currentIndex + 1).padStart(2, '0')} / 25`;
    if (titleEl) titleEl.textContent = app.title;
    if (tagEl) tagEl.textContent = app.tag;
    if (descEl) descEl.textContent = app.desc;
    if (linkEl) linkEl.href = app.url;

    // Update active state across dock items
    if (dockContainer) {
      const dockItems = dockContainer.querySelectorAll('.dock-item-25');
      dockItems.forEach((item, idx) => {
        const isActive = (idx === currentIndex);
        item.classList.toggle('active', isActive);
      });
      const activeItem = dockContainer.querySelector('.dock-item-25.active');
      if (activeItem) {
        requestAnimationFrame(() => {
          activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
      }
    }

    // Reset progress track
    progress = 0;
    if (progressEl) progressEl.style.transform = 'scaleX(0)';
  }

  // Timer loop
  const timerInterval = setInterval(() => {
    if (isPaused || isHolding) return;

    progress += (INTERVAL_MS / DURATION_MS) * 100;
    if (progress >= 100) {
      progress = 0;
      currentIndex = (currentIndex + 1) % apps.length;
      renderApp(currentIndex);
    } else {
      if (progressEl) progressEl.style.transform = `scaleX(${progress / 100})`;
    }
  }, INTERVAL_MS);

  // Hold-to-pause interactions
  function onHoldStart(e) {
    isHolding = true;
    if (frameEl) frameEl.classList.add('holding');
    if (timerPill) timerPill.classList.add('paused');
    if (timerText) timerText.textContent = 'Paused (Hold Active)';
  }

  function onHoldEnd() {
    if (!isHolding) return;
    isHolding = false;
    if (frameEl) frameEl.classList.remove('holding');
    if (!isPaused) {
      if (timerPill) timerPill.classList.remove('paused');
      if (timerText) timerText.textContent = 'Auto-Playing (10s)';
    }
  }

  if (frameEl) {
    frameEl.addEventListener('mousedown', onHoldStart);
    frameEl.addEventListener('touchstart', onHoldStart, { passive: true });
  }

  window.addEventListener('mouseup', onHoldEnd);
  window.addEventListener('touchend', onHoldEnd);
  window.addEventListener('touchcancel', onHoldEnd);

  // Manual Controls
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + apps.length) % apps.length;
      renderApp(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % apps.length;
      renderApp(currentIndex);
    });
  }

  function togglePlayPause() {
    isPaused = !isPaused;
    if (pauseBtn) {
      pauseBtn.innerHTML = isPaused ? '&#9654;' : '&#10074;&#10074;';
      pauseBtn.title = isPaused ? 'Resume Auto-Play' : 'Pause Auto-Play';
    }
    if (timerPill) timerPill.classList.toggle('paused', isPaused);
    if (timerText) timerText.textContent = isPaused ? 'Paused (Manual)' : 'Auto-Playing (10s)';
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlayPause();
    });
  }

  if (timerPill) {
    timerPill.addEventListener('click', togglePlayPause);
  }

  // Dock items click
  if (dockContainer) {
    dockContainer.addEventListener('click', (e) => {
      const item = e.target.closest('.dock-item-25');
      if (!item) return;
      const targetIdx = parseInt(item.dataset.appIdx, 10);
      if (!isNaN(targetIdx)) {
        renderApp(targetIdx);
      }
    });

    // Also support holding down on dock to pause
    dockContainer.addEventListener('mousedown', onHoldStart);
    dockContainer.addEventListener('touchstart', onHoldStart, { passive: true });
  }

  // Keyboard navigation
  sliderWrap.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + apps.length) % apps.length;
      renderApp(currentIndex);
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % apps.length;
      renderApp(currentIndex);
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  });

  // Initial render
  renderApp(0);
}

function initSonomaDesktop() {
  const segmentBtns = document.querySelectorAll('.mac-segment-btn');
  const dockItems = document.querySelectorAll('.dock-item[data-app]');
  const views = document.querySelectorAll('.mac-view');
  if (!views.length) return;

  function switchApp(appKey) {
    if (!appKey) return;

    // Update toolbar buttons
    segmentBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.app === appKey);
    });

    // Update dock items
    dockItems.forEach(item => {
      item.classList.toggle('active', item.dataset.app === appKey);
    });

    // Switch view
    views.forEach(v => {
      v.classList.toggle('active', v.id === `view-${appKey}`);
    });
  }

  segmentBtns.forEach(btn => {
    btn.addEventListener('click', () => switchApp(btn.dataset.app));
  });

  dockItems.forEach(item => {
    item.addEventListener('click', () => switchApp(item.dataset.app));
  });

  // Interactive Terminal Command Chips
  const termChips = document.querySelectorAll('.term-chip-btn');
  const termScreen = document.getElementById('termInteractiveScreen');

  const cmdOutputs = {
    'docker-ps': `
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"</span></p>
<p>NAMES                        STATUS          PORTS</p>
<p><span class="term-success">api-gateway-v3</span>               Up 14 days      0.0.0.0:443-&gt;443/tcp, 0.0.0.0:80-&gt;80/tcp</p>
<p><span class="term-success">postgres-cluster-primary</span>   Up 28 days      127.0.0.1:5432-&gt;5432/tcp</p>
<p><span class="term-success">redis-session-cache</span>        Up 14 days      127.0.0.1:6379-&gt;6379/tcp</p>
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">&#9610;</span></p>`,

    'ufw-status': `
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">sudo ufw status verbose</span></p>
<p>Status: <span class="term-success">active</span></p>
<p>Logging: on (low) | Default: deny (incoming), allow (outgoing), disabled (routed)</p>
<p>To                         Action      From</p>
<p>--                         ------      ----</p>
<p>22/tcp (SSH)               <span class="term-success">ALLOW IN</span>    Anywhere</p>
<p>80,443/tcp (HTTP/S)        <span class="term-success">ALLOW IN</span>    Anywhere</p>
<p>5432/tcp (PostgreSQL)      <span class="term-warning">DENY IN</span>     Anywhere (SSH tunnel only)</p>
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">&#9610;</span></p>`,

    'htop-summary': `
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">uptime && free -h</span></p>
<p> 13:30:14 up 48 days, 3 users,  load average: 0.12, 0.08, 0.05</p>
<p>               total        used        free      shared  buff/cache   available</p>
<p>Mem:           15Gi       3.2Gi       9.4Gi       128Mi       2.8Gi        12Gi</p>
<p>Swap:         4.0Gi          0B       4.0Gi</p>
<p><span class="term-success">&#10003; 0% extra RAM consumed by SSH Desktop (pure client-side rendering)</span></p>
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">&#9610;</span></p>`,

    'systemctl-status': `
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">systemctl status nginx.service --no-pager</span></p>
<p>&#9679; nginx.service - A high performance web server and a reverse proxy server</p>
<p>     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)</p>
<p>     Active: <span class="term-success">active (running)</span> since Thu 2026-10-15 09:12:04 UTC; 10 days ago</p>
<p>   Main PID: 1420 (nginx)</p>
<p>      Tasks: 5 (limit: 19138)</p>
<p>     Memory: 24.8M</p>
<p><span class="term-path">devops@prod-cluster-us-east:~$</span> <span class="term-cmd">&#9610;</span></p>`
  };

  if (termChips.length && termScreen) {
    termChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        if (cmd && cmdOutputs[cmd]) {
          termScreen.innerHTML = cmdOutputs[cmd];
        }
      });
    });
  }

  // Interactive Docker Container Actions
  const dockerBtns = document.querySelectorAll('.docker-btn-restart');
  dockerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const origText = btn.textContent;
      btn.textContent = 'Restarting...';
      btn.style.color = '#0284c7';
      btn.style.borderColor = '#0284c7';
      setTimeout(() => {
        btn.textContent = 'Restarted ✓';
        btn.style.color = '#059669';
        btn.style.borderColor = '#a7f3d0';
        setTimeout(() => {
          btn.textContent = origText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 1500);
      }, 700);
    });
  });

  // Interactive Firewall Toggle Switches
  const fwSwitches = document.querySelectorAll('.fw-switch-input');
  fwSwitches.forEach(sw => {
    sw.addEventListener('change', () => {
      const row = sw.closest('.firewall-rule-row');
      const badge = row ? row.querySelector('.fw-badge') : null;
      if (badge) {
        if (sw.checked) {
          badge.textContent = 'ALLOW';
          badge.className = 'badge badge-emerald fw-badge';
          badge.style.background = '';
          badge.style.color = '';
          badge.style.border = '';
        } else {
          badge.textContent = 'BLOCKED';
          badge.className = 'badge fw-badge';
          badge.style.background = '#f1f5f9';
          badge.style.color = '#64748b';
          badge.style.border = '1px solid #cbd5e1';
        }
      }
    });
  });
}


/**
 * macOS Scroll-Reveal Animations & Sonoma Sunset Reading Progress
 */
function initScrollAnimations() {
  // 1. Top Sonoma Sunset Scroll Progress Indicator
  let progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scrollProgressBar';
    progressBar.className = 'scroll-progress-bar';
    document.body.prepend(progressBar);
  }

  const header = document.querySelector('.site-header');
  const heroAura = document.querySelector('.hero-wallpaper-aura');
  const heroCanvas = document.querySelector('.mac-window-canvas');
  const floatBtn = document.getElementById('floatingBackToTop');

  // 2. Select key cards and sections to reveal on scroll
  const targets = Array.from(document.querySelectorAll(
    '.section-header, .ps-card, .bento-card, .workflow-card, .os-card, .benchmark-container, .comp-table, .faq-item, .footer-cta-card, .cli-banner, .cli-banner-card, .problem-card, .feature-card'
  ));

  if (targets.length) {
    // Stagger siblings in grids
    targets.forEach(el => {
      el.classList.add('scroll-reveal');

      const parent = el.parentElement;
      if (parent && (
        parent.classList.contains('bento-grid') || 
        parent.classList.contains('problem-solution-grid') || 
        parent.classList.contains('workflow-steps-grid') || 
        parent.classList.contains('grid-4') || 
        parent.classList.contains('grid-3') || 
        parent.classList.contains('grid-2')
      )) {
        const index = Array.from(parent.children).indexOf(el);
        el.style.transitionDelay = `${(index % 4) * 80}ms`;
      }
    });

    function revealElement(el) {
      if (!el.classList.contains('mac-revealed')) {
        el.classList.add('mac-revealed');
        if (el.classList.contains('benchmark-container')) {
          animateBenchmarkBars(el);
        }
      }
    }

    // IntersectionObserver natively checks initial viewport elements without forced reflow

    // Native IntersectionObserver with generous margin and low threshold
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -15px 0px',
        threshold: 0.05
      });

      targets.forEach(el => {
        if (!el.classList.contains('mac-revealed')) {
          observer.observe(el);
        }
      });
    }
  }

  // 3. Ultra-Smooth Scroll Loop (rAF-driven for Parallax, Progress & Header)
  let ticking = false;
  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

    // A. Update Top Sonoma Sunset Progress Bar
    if (progressBar && scrollHeight > 0) {
      const ratio = Math.min(scrollY / scrollHeight, 1);
      progressBar.style.transform = `scaleX(${ratio})`;
    }

    // B. Navbar Frosted Blur & Elevation
    if (header) {
      header.classList.toggle('scrolled', scrollY > 20);
    }

    // C. Floating Back-to-Top Toggle
    if (floatBtn) {
      floatBtn.classList.toggle('visible', scrollY > 380);
    }

    // D. macOS Hero 3D Spatial Parallax
    if (scrollY < 900) {
      if (heroAura) {
        heroAura.style.transform = `translate(-50%, ${scrollY * 0.22}px)`;
      }
      if (heroCanvas) {
        const tilt = Math.min(scrollY * 0.012, 3.5);
        heroCanvas.style.transform = `perspective(1000px) rotateX(${tilt}deg)`;
      }
    }

    // E. IntersectionObserver handles viewport intersection smoothly without forced reflow

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial trigger on load
  onScroll();
}

/**
 * Animate Benchmark Fill Bars on Scroll
 */
function animateBenchmarkBars(container) {
  const fills = container.querySelectorAll('.benchmark-bar-fill');
  fills.forEach(fill => {
    const originalWidth = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      fill.style.width = originalWidth;
    }, 120);
  });
}
