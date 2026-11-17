// scripts/deploy_all_missing_docs.js
// Adds 10 new high-value SEO documentation guides and 6 alias files.

const fs = require('fs');
const path = require('path');
const docsDir = path.join(__dirname, '..', 'docs');

const newChaptersData = [
  {
    slug: 'installation.html',
    title: 'Installation & Platform Support',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '💿',
    seoTitle: 'Install SSH Desktop on macOS, Windows & Linux - Setup Guide',
    description: 'Download and install SSH Desktop on macOS (Universal DMG), Windows 10/11 (MSI installer), or Linux (AppImage, DEB, RPM, AUR). System requirements and step-by-step setup.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Complex terminal package setups, bloated Electron installers',
    commands: 'dmg install, msi exec, dpkg -i, chmod +x AppImage',
    summary: 'Native installation guide for macOS (Apple Silicon & Intel), Windows 11/10, and Linux desktops (Ubuntu, Debian, Fedora, Arch) with automated updates.',
    lead: 'Comprehensive installation and cross-platform setup guide for SSH Desktop. Learn how to install and update native desktop binaries for macOS, Windows 11/10, and Linux distributions.',
    whatIsIt: 'SSH Desktop is distributed as native pre-compiled binaries optimized for each major operating system. On macOS, it runs natively on both Apple Silicon (M1, M2, M3, M4) and Intel x86_64 architectures. On Windows, it provides a lightweight MSI installer and standalone executable with Windows Terminal keybinding parity. On Linux, it supports portable AppImage, Debian/Ubuntu DEB, Fedora/RHEL RPM, and Arch Linux packages.',
    whyNeedIt: 'Many developer tools rely on bloated Electron runtimes that bundle entire Chromium web browsers, consuming hundreds of megabytes of RAM just to display a terminal. SSH Desktop is compiled in Rust using native operating system webviews (WebKit on macOS, WebView2 on Windows, WebKitGTK on Linux), ensuring launch times under 200ms and an idle RAM footprint under 45 MB.',
    prerequisites: [
      'macOS 11 (Big Sur) or newer (Universal binary for Apple Silicon M1-M4 & Intel).',
      'Windows 10 (version 1809+) or Windows 11 (64-bit) with Microsoft Edge WebView2 runtime (pre-installed on Windows 11).',
      'Linux: Any modern distribution with glibc 2.31+ and webkit2gtk (Ubuntu 20.04+, Debian 11+, Fedora 34+, Arch Linux).'
    ],
    features: [
      '<strong>Native Universal Binaries:</strong> Zero emulation overhead on Apple Silicon M1-M4 chips and modern 64-bit processors.',
      '<strong>Sub-15MB Binary Size:</strong> Compact download size that installs in seconds without downloading gigabytes of dependencies.',
      '<strong>Zero Background Daemons:</strong> Installs cleanly into standard user directories without installing background update services or kernel extensions.',
      '<strong>Seamless Auto-Updates:</strong> Cryptographically signed update channels notify you of new releases and apply patches with a single click.'
    ],
    steps: [
      {
        title: '1. Installing on macOS (Apple Silicon & Intel)',
        content: `Download the universal <code>.dmg</code> package from the official download portal. Double-click the downloaded disk image and drag the SSH Desktop icon into your <code>/Applications</code> directory. On first launch, macOS Gatekeeper verifies the developer signature automatically.`
      },
      {
        title: '2. Installing on Windows 11 & Windows 10',
        content: `Download the signed <code>.msi</code> installer or the standalone portable executable. Run the installer and follow the setup wizard. SSH Desktop integrates with Windows Terminal keybindings and utilizes Windows Credential Manager (DPAPI) to protect your SSH keys and passphrases.`
      },
      {
        title: '3. Installing on Linux Desktops',
        content: `Choose the package matching your distribution:
<ul>
  <li><strong>Universal AppImage:</strong> Run <code>chmod +x sshdesktop*.AppImage && ./sshdesktop*.AppImage</code> for instant portable execution.</li>
  <li><strong>Debian & Ubuntu:</strong> Install via <code>sudo dpkg -i sshdesktop*.deb</code> or apt.</li>
  <li><strong>Fedora & RHEL:</strong> Install via <code>sudo rpm -i sshdesktop*.rpm</code>.</li>
  <li><strong>Arch Linux:</strong> Available via the AUR package <code>sshdesktop-bin</code>.</li>
</ul>`
      },
      {
        title: '4. Verifying Installation & Automatic Updates',
        content: `Launch SSH Desktop from your operating system launcher or application menu. The startup screen automatically checks for cryptographically signed updates and displays release notes when new stable versions are released.`
      }
    ],
    underTheHood: 'Compiles Rust 2021 edition directly to target machine assembly code. Links dynamically against system webview libraries rather than shipping Chromium.',
    shortcuts: [
      { key: 'Cmd/Ctrl + ,', desc: 'Open Application Preferences' },
      { key: 'Cmd/Ctrl + Q', desc: 'Quit Application Cleanly' }
    ],
    interfaceTour: `The <strong>Installation & Setup Window</strong> confirms that native OS webview runtimes and hardware acceleration are available. On first launch, it offers a quick setup wizard allowing you to select your preferred desktop theme (macOS Dark, Midnight OLED, or Tokyo Night), import existing SSH hosts from <code>~/.ssh/config</code>, and configure default terminal typography.`,
    proTips: [
      '<strong>Portable Mode for USB Drives:</strong> The Windows standalone portable executable stores preferences in its local directory when a <code>portable.dat</code> file is present.',
      '<strong>Linux Desktop Integration:</strong> Installing the <code>.deb</code> or <code>.rpm</code> automatically creates desktop launcher shortcuts and registers the <code>ssh://</code> URL protocol handler.',
      '<strong>Apple Silicon Optimization:</strong> The macOS Universal binary executes natively on M1, M2, M3, and M4 Apple Silicon with zero Rosetta 2 translation overhead.'
    ],
    troubleshooting: [
      {
        q: 'macOS Gatekeeper warning: "App cannot be opened"',
        a: 'Right-click the SSH Desktop app in Finder, select Open, and click Open in the confirmation modal. This approves the application signature in macOS security settings.'
      },
      {
        q: 'Windows: Missing WebView2 runtime error',
        a: 'Windows 10 installations without the evergreen Microsoft Edge WebView2 runtime can install it directly via Microsoft\'s official Evergreen Bootstrapper installer.'
      }
    ]
  },

  {
    slug: 'connection-manager.html',
    title: 'Connection Manager & SSH Keys',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '🔑',
    seoTitle: 'SSH Connection Manager & Key Setup Guide - SSH Desktop Docs',
    description: 'Learn how to configure SSH host profiles, generate Ed25519 cryptographic keys, automatically import ~/.ssh/config, and route traffic through Bastion jump hosts.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/pages/ConnectionScreen.tsx',
    githubLabel: 'src/pages/ConnectionScreen.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Manual ssh CLI configs, complex ~/.ssh/config files, PuTTY saved sessions',
    commands: 'ssh-keygen -t ed25519, ssh-copy-id, ProxyJump, ~/.ssh/known_hosts',
    summary: 'Comprehensive host inventory management: create server profiles, organize with tags, configure Bastion jump hosts, and manage cryptographic keys.',
    lead: 'Master the SSH Connection Manager. Learn how to add host profiles, import ~/.ssh/config, configure Bastion jump hosts, and manage Ed25519 cryptographic keys.',
    whatIsIt: 'The Connection Manager is the central directory for all your remote servers. It lets you organize servers with color-coded tags, manage credentials safely in OS hardware keychains, configure transparent ProxyJump routes through bastion jump hosts, and launch visual desktop sessions with a single click.',
    whyNeedIt: 'Sysadmins and DevOps engineers frequently manage dozens of servers across AWS, Hetzner, DigitalOcean, and on-premise hardware. Memorizing IP addresses, port numbers, usernames, and key file paths in shell aliases leads to configuration drift and connection errors. The Connection Manager brings order with instant search, auto-discovery, and safe key management.',
    prerequisites: [
      'Remote server IP address or domain name.',
      'SSH port (default 22 or custom port).',
      'Authentication credentials: SSH Private Key (Ed25519, ECDSA, RSA) or password.',
      'For bastion setups: Hostname and credentials for the jump server.'
    ],
    features: [
      '<strong>Smart ~/.ssh/config Import:</strong> Detects existing OpenSSH config files and imports hosts with complete HostName, User, Port, and IdentityFile mappings.',
      '<strong>Color-Coded Server Tags:</strong> Group servers by environment (Production, Staging, QA) or architecture (Web, Database, Cache, Storage).',
      '<strong>Transparent Bastion ProxyJump:</strong> Connect to private subnet servers with zero public IP addresses through an SSH jump host in one click.',
      '<strong>Hardware Keychain Storage:</strong> Sensitive private key passphrases are stored in macOS Keychain, Windows DPAPI, or Linux Secret Service.'
    ],
    steps: [
      {
        title: '1. Adding a New Server Connection Profile',
        content: `Click <strong>+ New Connection</strong> in the top toolbar. Enter a friendly nickname (e.g. <code>Production Web VPS</code>), the target hostname or IPv4/IPv6 address, and the SSH port (default <code>22</code>).`
      },
      {
        title: '2. Configuring Cryptographic Authentication',
        content: `Choose your authentication mode:
<ul>
  <li><strong>SSH Private Key (Recommended):</strong> Browse to your local <code>~/.ssh/id_ed25519</code> or <code>~/.ssh/id_rsa</code> file. If your key is protected by a passphrase, enter it once to store it securely in your OS keychain.</li>
  <li><strong>Password:</strong> Enter your remote user password. Credentials are encrypted locally using AES-256 before storage.</li>
</ul>`
      },
      {
        title: '3. Configuring Bastion / ProxyJump Routing',
        content: `For private VPC servers located behind a firewall gateway, expand <strong>Advanced SSH Settings</strong> and toggle <strong>Bastion / Jump Host</strong>. Select an existing bastion profile or enter the jump server IP and credentials. SSH Desktop transparently tunnels the connection through the bastion.`
      },
      {
        title: '4. Connecting and Launching the Desktop Session',
        content: `Click <strong>Connect</strong>. The Rust backend negotiates cryptographic key exchange, validates host fingerprints against <code>known_hosts</code>, and launches the full visual desktop shell in under 200 milliseconds.`
      }
    ],
    underTheHood: 'Validates SSH cryptographic handshakes and parses ~/.ssh/known_hosts fingerprints to prevent Man-in-the-Middle (MITM) attacks.',
    shortcuts: [
      { key: 'Cmd/Ctrl + N', desc: 'Open New Connection Dialog' },
      { key: 'Cmd/Ctrl + F', desc: 'Search Saved Server Profiles' },
      { key: 'Enter', desc: 'Connect to Highlighted Server' }
    ],
    interfaceTour: `The <strong>Connection Manager Window</strong> displays a left sidebar with tag groups (All Servers, Production, Staging, Favorites, Jump Hosts). The main panel presents server profile cards with status indicators (Green = Reachable, Red = Unreachable), IP addresses, assigned usernames, and quick action buttons (Connect, Edit, Duplicate, Delete). The top search bar filters across hundreds of servers instantly by name, tag, or IP.`,
    proTips: [
      '<strong>Always Prefer Ed25519 Keys:</strong> Generate Ed25519 keys with <code>ssh-keygen -t ed25519</code> for maximum security and faster connection handshakes.',
      '<strong>Organize by Tags:</strong> Use tags like <code>aws</code>, <code>prod</code>, <code>database</code> to quickly filter servers in Spotlight (<kbd>Cmd+K</kbd>).',
      '<strong>Duplicate Profiles for Testing:</strong> Right-click any existing profile and select Duplicate to quickly clone settings for a staging replica.'
    ],
    troubleshooting: [
      {
        q: 'Permission denied (publickey) on connect',
        a: 'Verify that your public key has been appended to <code>~/.ssh/authorized_keys</code> on the remote server and that file permissions are set to 600.'
      },
      {
        q: 'Host key verification failed warning',
        a: 'This occurs when a server was reinstalled and has a new host key. Click "Update Host Fingerprint" in the security alert modal to accept the new fingerprint safely.'
      }
    ]
  },

  {
    slug: 'settings-preferences.html',
    title: 'Settings, Themes & Preferences',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '⚙️',
    seoTitle: 'App Preferences & Theme Customization - SSH Desktop Docs',
    description: 'Customize SSH Desktop: configure color themes (Dark, OLED Midnight, Tokyo Night), terminal fonts, ligature rendering, keybindings, and low-bandwidth mode.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/apps/settings/AppSettings.tsx',
    githubLabel: 'src/apps/settings/AppSettings.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Clunky config files, terminal theme hacking, manual font overrides',
    commands: 'Local preferences store, font ligature engine, dark mode CSS variables',
    summary: 'Visual settings workspace: customize desktop appearance, choose editor/terminal color schemes, toggle low-bandwidth telemetry, and manage keybindings.',
    lead: 'Complete guide to configuring SSH Desktop preferences. Customize themes, editor color schemes, terminal fonts, ligature rendering, and low-bandwidth telemetry.',
    whatIsIt: 'The Settings & Preferences workspace (based on AppSettings.tsx) provides granular control over the SSH Desktop environment. It lets you customize visual themes (macOS Dark, Midnight OLED, Tokyo Night, Dracula, Solarized), configure hardware-accelerated terminal typography, set default SSH parameters, and adjust background telemetry polling.',
    whyNeedIt: 'Different development workflows require tailored environments: night shifts benefit from high-contrast OLED dark themes, slower satellite connections need reduced telemetry bandwidth, and code readability improves with specialized programmer fonts like JetBrains Mono and Fira Code.',
    prerequisites: [
      'SSH Desktop application running locally.',
      'Optional: Custom monospace fonts installed on your local operating system.'
    ],
    features: [
      '<strong>Curated Color Themes:</strong> Switch between macOS Sonoma Dark, Midnight OLED, Tokyo Night, GitHub Dark, and Nord with instant preview.',
      '<strong>Custom Typography & Ligatures:</strong> Choose your favorite font family, font size, line height, and toggle programming ligature rendering.',
      '<strong>Low-Bandwidth Mode:</strong> Throttle telemetry polling from 1s to 5s to conserve network data over mobile tethering or high-latency satellite connections.',
      '<strong>Auto-Lock & Security Timeout:</strong> Automatically minimize or lock active server windows after a configurable period of keyboard/mouse inactivity.'
    ],
    steps: [
      {
        title: '1. Accessing Application Preferences',
        content: `Open Preferences by clicking <strong>SSH Desktop &rarr; Preferences</strong> in the top menu bar or by pressing <kbd>Cmd/Ctrl + ,</kbd> anywhere in the application.`
      },
      {
        title: '2. Selecting Visual Themes',
        content: `Under the <strong>Appearance</strong> tab, choose from curated dark themes:
<ul>
  <li><strong>macOS Sonoma Dark (Default):</strong> Sleek, semi-transparent frosted glass aesthetic matching modern macOS.</li>
  <li><strong>Midnight OLED:</strong> Pure true-black background (#000000) for OLED laptops and maximum battery conservation.</li>
  <li><strong>Tokyo Night &amp; Dracula:</strong> Vibrant syntax-highlighted themes designed for prolonged coding sessions.</li>
</ul>`
      },
      {
        title: '3. Configuring Terminal Fonts & Ligatures',
        content: `Switch to the <strong>Terminal</strong> tab to select your installed monospace font (e.g. JetBrains Mono, Fira Code, Cascadia Code, Menlo). Toggle the <strong>Enable Font Ligatures</strong> checkbox to render arrows (<code>&rarr;</code>, <code>=&gt;</code>) and operators cleanly.`
      },
      {
        title: '4. Optimizing Telemetry & Low-Bandwidth Mode',
        content: `In the <strong>Telemetry</strong> tab, select your polling frequency. If working over 4G/5G tethering or high-latency satellite links, enable <strong>Low Bandwidth Mode</strong> to compress SFTP listings and poll CPU metrics every 5 seconds instead of every second.`
      }
    ],
    underTheHood: 'Preferences are persisted locally in a sandboxed JSON configuration store. No configuration data is ever uploaded to external servers.',
    shortcuts: [
      { key: 'Cmd/Ctrl + ,', desc: 'Open Preferences Window' },
      { key: 'Cmd/Ctrl + T', desc: 'Cycle Through Available Themes' }
    ],
    interfaceTour: `The <strong>Preferences Modal</strong> is organized into 5 intuitive tabs: <strong>General</strong> (startup behavior, window snapping, auto-reconnect), <strong>Appearance</strong> (themes, window translucency, dock icon magnification), <strong>Terminal</strong> (font family, font size, cursor style, scrollback lines), <strong>Network &amp; SSH</strong> (default ports, keep-alive intervals, cipher suites), and <strong>Security</strong> (credential vault, auto-lock timer).`,
    proTips: [
      '<strong>Increase Scrollback Buffer:</strong> Increase terminal scrollback lines from 5,000 to 20,000 in Terminal settings if you frequently inspect lengthy compilation or deployment logs.',
      '<strong>Auto-Reconnect Watchdog:</strong> Enable "Automatic Reconnect on Network Resume" so SSH Desktop restores your server sessions seamlessly when waking your laptop from sleep.',
      '<strong>Cursor Customization:</strong> Choose between Block, Underline, and Bar cursor styles with optional blinking in the Terminal preferences.'
    ],
    troubleshooting: [
      {
        q: 'Custom font not appearing in font dropdown',
        a: 'Ensure the font is installed in your operating system\'s font manager (Font Book on macOS, Fonts in Windows Settings) and restart SSH Desktop to refresh available system fonts.'
      }
    ]
  },

  {
    slug: 'faq.html',
    title: 'Frequently Asked Questions (FAQ)',
    category: 'Overview & Architecture',
    catSlug: 'overview',
    icon: '❓',
    seoTitle: 'SSH Desktop FAQ - Common Questions & Architecture Details',
    description: 'Find answers to common questions about SSH Desktop: security guarantees, agentless architecture, supported Linux distros, credential storage, and licensing.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Scattered forums, confusing documentation, unverified advice',
    commands: 'POSIX SSH protocol, OS Keychain vault, zero cloud telemetry',
    summary: 'Answers to top questions regarding agentless SSH operations, OS Keychain security, network bandwidth, firewall ports, and multi-server fleet management.',
    lead: 'Answers to frequently asked questions about SSH Desktop: architecture, security, performance, licensing, and day-to-day server operations.',
    whatIsIt: 'The FAQ knowledge base addresses the most common questions asked by sysadmins, DevOps engineers, and developers adopting SSH Desktop. It covers everything from how agentless communication works over port 22 to security auditing, supported Linux distros, and multi-server management.',
    whyNeedIt: 'Evaluating modern infrastructure tools requires clear, transparent answers about security, resource overhead, open-source licensing, and compatibility.',
    prerequisites: [
      'None. Applicable to all users exploring or managing servers with SSH Desktop.'
    ],
    features: [
      '<strong>Architectural Clarifications:</strong> Clear explanations of how SSH Desktop achieves 100% agentless management without remote daemons.',
      '<strong>Security Guarantees:</strong> In-depth breakdown of zero-telemetry policy, OS keychain encryption, and OpenSSH protocol compliance.',
      '<strong>Compatibility Matrix:</strong> Comprehensive list of supported Linux distributions (Ubuntu, Debian, RHEL, CentOS, Rocky, Alma, Fedora, Arch, Alpine, openSUSE).',
      '<strong>Troubleshooting Solutions:</strong> Direct answers to common connection and permission queries.'
    ],
    steps: [
      {
        title: '1. How does SSH Desktop manage servers without installing agents?',
        content: `Traditional web control panels (cPanel, Webmin, Cockpit, Portainer) run persistent daemon processes on your server. SSH Desktop works entirely through standard OpenSSH: it establishes an encrypted SSH session and executes native Linux commands (such as <code>systemctl</code>, <code>docker</code>, <code>ufw</code>, and <code>/proc</code> readers). All parsing, GUI rendering, and windowing happen locally on your PC, leaving zero background footprint on your server.`
      },
      {
        title: '2. Where are my SSH keys and credentials stored?',
        content: `Your private keys, passwords, and passphrases never leave your local machine. Passphrases are stored in your operating system's hardware-encrypted credential vault: macOS Keychain, Windows Credential Manager (DPAPI), or Linux Secret Service. SSH Desktop has zero telemetry, zero analytics, and zero cloud accounts.`
      },
      {
        title: '3. Do I need to open any extra firewall ports on my server?',
        content: `No. All 25 applications communicate exclusively through your existing OpenSSH port (port 22 by default). You never need to open insecure web ports (like 9090, 10000, or 9443) on your server.`
      },
      {
        title: '4. What Linux distributions are supported?',
        content: `SSH Desktop supports any Linux server running OpenSSH 7.0 or newer. Verified distributions include Ubuntu (18.04 to 24.04 LTS), Debian (10 to 13), Red Hat Enterprise Linux / CentOS / Rocky / AlmaLinux (7 to 9), Fedora, Arch Linux, Alpine Linux, Amazon Linux, and openSUSE.`
      }
    ],
    underTheHood: 'Explains POSIX command execution over encrypted OpenSSH channels (PTY, SFTP, Direct-TCPIP).',
    shortcuts: [
      { key: 'Cmd/Ctrl + F', desc: 'Search FAQ Knowledge Base' }
    ],
    interfaceTour: `The <strong>FAQ & Knowledge Base</strong> categorizes questions into 5 primary topics: <strong>Architecture & Agentless Design</strong>, <strong>Security & Key Storage</strong>, <strong>Supported Distros & Requirements</strong>, <strong>Desktop vs Web Mode</strong>, and <strong>Licensing & Open Source</strong>. Each question expands to provide direct technical answers and links to related application user guides.`,
    proTips: [
      '<strong>Use Search:</strong> Press <kbd>Cmd/Ctrl + F</kbd> to search across the entire FAQ for specific keywords like "root", "firewall", or "docker".',
      '<strong>Bookmark Cheatsheets:</strong> Refer to the individual app documentation guides for in-depth step-by-step tutorials on each native feature.'
    ],
    troubleshooting: [
      {
        q: 'Have a question not listed here?',
        a: 'Visit our official GitHub community at github.com/sshdesktop/sshdesktop to ask questions, report issues, or propose new features.'
      }
    ]
  },

  {
    slug: 'keyboard-shortcuts.html',
    title: 'Master Keyboard Shortcuts',
    category: 'Desktop & Terminal',
    catSlug: 'desktop',
    icon: '⌨️',
    seoTitle: 'Master Keyboard Shortcuts & Hotkeys Cheat Sheet - SSH Desktop Docs',
    description: 'Comprehensive keyboard shortcuts cheat sheet for SSH Desktop. Master hotkeys for Spotlight search (Cmd+K), split terminals, code editor, and window tiling.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src/shell',
    screenshot: 'screenshot-terminal',
    replaces: 'Memorizing tmux key combinations, tedious mouse clicking',
    commands: 'Global hotkey interceptor, Xterm keybindings, Monaco shortcut maps',
    summary: 'Complete cheat sheet of hotkeys for the desktop shell, interactive PTY terminal split panes, Monaco code editor, and multi-server switcher.',
    lead: 'Comprehensive master cheat sheet of keyboard shortcuts and hotkeys for SSH Desktop. Supercharge your server administration speed and navigate entirely without a mouse.',
    whatIsIt: 'SSH Desktop features an extensive keyboard navigation engine. Whether you are splitting terminal panes, navigating remote directories in SFTP, inspecting processes, or switching between multi-server sessions, hotkeys allow you to perform every action in milliseconds.',
    whyNeedIt: 'Reaching for the mouse during complex server maintenance interrupts developer flow. Mastering core shortcuts allows sysadmins to triage production incidents, jump between logs and terminals, and edit remote configuration files at blazing speed.',
    prerequisites: [
      'Standard keyboard on macOS, Windows, or Linux.'
    ],
    features: [
      '<strong>Global Spotlight Launcher:</strong> Press <kbd>Cmd/Ctrl + K</kbd> anywhere to search and launch any app, connection, or command snippet.',
      '<strong>Terminal Split Pane Navigation:</strong> Split terminals horizontally (<kbd>Cmd+D</kbd>) or vertically (<kbd>Cmd+Shift+D</kbd>) and jump between panes effortlessly.',
      '<strong>Window Management Hotkeys:</strong> Snap windows left, right, or maximize with standard keyboard shortcuts.',
      '<strong>Monaco Editor Hotkeys:</strong> VS Code keyboard parity: multi-cursor (<kbd>Alt+Click</kbd>), quick open (<kbd>Cmd+P</kbd>), and regex replace (<kbd>Cmd+H</kbd>).'
    ],
    steps: [
      {
        title: '1. Desktop Shell & Window Management Shortcuts',
        content: `Master core desktop windowing commands:
<ul>
  <li><kbd>Cmd/Ctrl + K</kbd>: Open Spotlight Application &amp; Server Launcher</li>
  <li><kbd>Cmd/Ctrl + Shift + S</kbd>: Open Multi-Server Switcher Dropdown</li>
  <li><kbd>Cmd/Ctrl + W</kbd>: Close Active Window</li>
  <li><kbd>Cmd/Ctrl + M</kbd>: Minimize Active Window</li>
  <li><kbd>Cmd/Ctrl + Option + 0</kbd>: Tile &amp; Center All Windows on Screen</li>
  <li><kbd>Cmd/Ctrl + ,</kbd>: Open Preferences</li>
</ul>`
      },
      {
        title: '2. Interactive PTY Terminal Shortcuts',
        content: `Navigate multi-pane terminal sessions:
<ul>
  <li><kbd>Cmd/Ctrl + T</kbd>: New Terminal Shell Tab</li>
  <li><kbd>Cmd/Ctrl + D</kbd>: Split Terminal Pane Horizontally</li>
  <li><kbd>Cmd/Ctrl + Shift + D</kbd>: Split Terminal Pane Vertically</li>
  <li><kbd>Cmd/Ctrl + [</kbd> / <kbd>]</kbd>: Switch to Previous / Next Split Pane</li>
  <li><kbd>Cmd/Ctrl + F</kbd>: Search Terminal Buffer History</li>
  <li><kbd>Cmd/Ctrl + Shift + K</kbd>: Clear Terminal Screen &amp; Scrollback</li>
</ul>`
      },
      {
        title: '3. Monaco Code Editor Shortcuts',
        content: `Full VS Code keybinding compatibility:
<ul>
  <li><kbd>Cmd/Ctrl + S</kbd>: Save File (with automatic sudo elevation if needed)</li>
  <li><kbd>Cmd/Ctrl + P</kbd>: Quick Open File by Name</li>
  <li><kbd>Cmd/Ctrl + F</kbd>: Find in File</li>
  <li><kbd>Cmd/Ctrl + H</kbd>: Find and Replace</li>
  <li><kbd>Alt + Click</kbd>: Add Multiple Cursors</li>
  <li><kbd>Cmd/Ctrl + /</kbd>: Toggle Line Comment</li>
</ul>`
      },
      {
        title: '4. SFTP File Manager & App Shortcuts',
        content: `File operations and monitoring:
<ul>
  <li><kbd>Cmd/Ctrl + H</kbd>: Toggle Hidden Files (dotfiles)</li>
  <li><kbd>Cmd/Ctrl + Shift + N</kbd>: Create New Directory</li>
  <li><kbd>F5</kbd> / <kbd>Cmd/Ctrl + R</kbd>: Refresh Current Folder or Telemetry</li>
  <li><kbd>Cmd/Ctrl + Backspace</kbd>: Delete Selected Files</li>
</ul>`
      }
    ],
    underTheHood: 'Keyboard events are intercepted at the desktop shell level with sub-millisecond dispatching.',
    shortcuts: [
      { key: 'Cmd/Ctrl + K', desc: 'Spotlight Quick Launcher' },
      { key: 'Cmd/Ctrl + D', desc: 'Split Terminal Horizontally' },
      { key: 'Cmd/Ctrl + Shift + D', desc: 'Split Terminal Vertically' },
      { key: 'Cmd/Ctrl + S', desc: 'Save File in Monaco' }
    ],
    interfaceTour: `The <strong>Shortcuts Cheat Sheet</strong> is searchable by application category (Shell, Terminal, Editor, SFTP, Docker, System). Clicking any shortcut lets you copy the key sequence or inspect related productivity tips.`,
    proTips: [
      '<strong>Spotlight Launcher Mastery:</strong> Type <code>>docker</code> or <code>>nginx</code> in Spotlight (<kbd>Cmd+K</kbd>) to launch specific tabs directly.',
      '<strong>Copy on Mouse Selection:</strong> Terminal automatically copies highlighted text to your clipboard without pressing any shortcut keys.',
      '<strong>Mac vs Windows Key Parity:</strong> On macOS, shortcuts use <kbd>Cmd (⌘)</kbd>; on Windows and Linux, the identical shortcuts use <kbd>Ctrl</kbd>.'
    ],
    troubleshooting: [
      {
        q: 'Shortcut conflict with local operating system hotkeys',
        a: 'If a shortcut (such as Cmd+D or Ctrl+W) conflicts with your host OS window manager, customize keybindings in Preferences &rarr; Keybindings.'
      }
    ]
  },

  {
    slug: 'raspberry-pi-desktop.html',
    title: 'Raspberry Pi Remote Desktop & Homelab',
    category: 'Desktop & Terminal',
    catSlug: 'desktop',
    icon: '🍓',
    seoTitle: 'Raspberry Pi SSH Remote Desktop GUI - SSH Desktop Docs',
    description: 'Control headless Raspberry Pi (Pi 5, 4, 3, Zero) visually over SSH. Monitor CPU temperature, inspect storage, manage Docker containers, and edit config files.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'VNC Viewer lag, Raspberry Pi Connect subscription, tedious CLI commands',
    commands: 'vcgencmd measure_temp, /boot/firmware/config.txt, gpio, systemctl',
    summary: 'Turn headless Raspberry Pi boards into a visual macOS-style desktop: monitor CPU thermal sensors, edit config.txt, and run Docker containers with zero lag.',
    lead: 'Complete guide to managing Raspberry Pi single-board computers (Pi 5, 4, 3, Zero) with SSH Desktop. Monitor CPU temperatures, manage homelab Docker containers, and edit config files visually.',
    whatIsIt: 'The Raspberry Pi Remote Desktop guide shows you how to transform any headless Raspberry Pi board running Raspberry Pi OS (Raspbian), DietPi, or Ubuntu into an intuitive macOS-style visual workspace. It lets you monitor ARM CPU temperature sensors, edit `/boot/firmware/config.txt`, manage Docker containers, and run terminal sessions with zero screen lag.',
    whyNeedIt: 'Traditional VNC or RDP on Raspberry Pi boards consumes significant CPU and RAM, leading to sluggish pointer movements and high CPU heat. SSH Desktop runs 100% agentlessly over lightweight SSH port 22: all rendering happens on your client PC, leaving 100% of the Pi\'s RAM and processing power for your homelab services.',
    prerequisites: [
      'Raspberry Pi board (Pi 5, Pi 4, Pi 3, Pi 2, or Pi Zero 2 W).',
      'Raspberry Pi OS (32-bit or 64-bit), DietPi, or Ubuntu Server installed on MicroSD / NVMe SSD.',
      'SSH enabled during flashing via Raspberry Pi Imager or by adding an empty `ssh` file to `/boot`.',
      'Pi connected to local network via Wi-Fi or Ethernet.'
    ],
    features: [
      '<strong>Zero-Lag Visual Management:</strong> Complete GUI workspace without running heavy VNC servers on the Pi.',
      '<strong>Live Hardware Thermals:</strong> Monitor Broadcom SoC temperature in real time to prevent thermal throttling.',
      '<strong>Boot Config Editor:</strong> Edit `/boot/firmware/config.txt` and overlay settings safely in Monaco.',
      '<strong>Homelab Docker Hub:</strong> Deploy and manage Home Assistant, Pi-hole, Plex, and Nextcloud containers with one click.'
    ],
    steps: [
      {
        title: '1. Enabling SSH on Raspberry Pi OS',
        content: `When flashing your MicroSD card with Raspberry Pi Imager, click the gear icon to set a username, password, Wi-Fi credentials, and enable SSH. Alternatively, create an empty file named <code>ssh</code> in the root of the boot partition before booting.`
      },
      {
        title: '2. Connecting to Your Raspberry Pi',
        content: `Open SSH Desktop and click <strong>+ New Connection</strong>. Enter <code>raspberrypi.local</code> (or your Pi's local network IP, e.g. <code>192.168.1.150</code>), port <code>22</code>, username (default <code>pi</code>), and your password or SSH key. Click Connect.`
      },
      {
        title: '3. Monitoring Broadcom SoC CPU Thermals',
        content: `Launch the <strong>Hardware Telemetry Monitor</strong>. SSH Desktop auto-detects Raspberry Pi hardware and reads CPU temperatures directly from <code>/sys/class/thermal/thermal_zone0/temp</code>. A color-coded gauge alerts you if your Pi exceeds 70°C and risks thermal throttling.`
      },
      {
        title: '4. Editing config.txt & Managing Homelab Containers',
        content: `Open <strong>Monaco Code Editor</strong> and navigate to <code>/boot/firmware/config.txt</code> to adjust HDMI, fan, or overclocking settings safely with automated sudo elevation on save. Launch <strong>Docker Hub</strong> to inspect running containers like Pi-hole, Home Assistant, and Jellyfin.`
      }
    ],
    underTheHood: 'Reads thermal zone counters directly from `/sys/class/thermal/thermal_zone0/temp` and executes `vcgencmd measure_temp`.',
    shortcuts: [
      { key: 'Cmd/Ctrl + R', desc: 'Refresh Pi Thermals and Telemetry' },
      { key: 'Cmd/Ctrl + K', desc: 'Spotlight Quick Launcher' }
    ],
    interfaceTour: `The <strong>Raspberry Pi Workspace</strong> includes dedicated telemetry widgets showing ARM CPU frequency, SoC temperature, swap activity, and MicroSD card wear. The SFTP file manager provides quick bookmarks to <code>/boot/firmware/</code> and <code>/var/log/</code> for rapid homelab debugging.`,
    proTips: [
      '<strong>Assign Static DHCP Leases:</strong> Set a static IP reservation in your home router for your Pi to prevent IP address changes upon reboot.',
      '<strong>Use NVMe or USB 3.0 SSD:</strong> Booting Pi 4 or Pi 5 from an external SSD drastically improves disk I/O and speeds up Docker container launches.',
      '<strong>Monitor Thermal Throttling:</strong> If the temperature gauge turns yellow (>70°C), consider adding an active cooling fan to avoid CPU downclocking.'
    ],
    troubleshooting: [
      {
        q: 'Cannot resolve hostname "raspberrypi.local"',
        a: 'Ensure your computer is on the same local subnet as the Pi. If mDNS resolution fails, find the Pi\'s IP address using your router admin page or <code>nmap -sn 192.168.1.0/24</code>.'
      },
      {
        q: 'Connection timed out on first boot',
        a: 'Allow 60-90 seconds for Raspberry Pi OS to expand the filesystem and complete initial cloud-init setup before connecting.'
      }
    ]
  },

  {
    slug: 'troubleshooting.html',
    title: 'Troubleshooting & Connection Fixes',
    category: 'System Administration',
    catSlug: 'sysadmin',
    icon: '🛠️',
    seoTitle: 'SSH Connection Troubleshooting Guide - SSH Desktop Docs',
    description: 'Step-by-step diagnostic guide for resolving SSH connection issues: Connection refused, Permission denied (publickey), Host key verification, and timeout errors.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src-tauri',
    screenshot: 'screenshot-network',
    replaces: 'Googling obscure StackOverflow threads, parsing raw ssh -vvv verbose logs',
    commands: 'ssh -vvv, systemctl status sshd, ufw status, journalctl -u ssh',
    summary: 'Diagnostic manual for solving common SSH errors: Connection Refused, Permission Denied, Host Key Verification Failed, and Docker socket permissions.',
    lead: 'The definitive troubleshooting manual for SSH Desktop. Step-by-step diagnostic procedures for resolving connection errors, authentication failures, firewall blocks, and permissions.',
    whatIsIt: 'The Troubleshooting Guide is a practical handbook designed to resolve every common SSH issue encountered when connecting to remote Linux servers. It includes step-by-step diagnostic workflows for connection timeouts, public key rejection, host key mismatches, and Docker socket permission errors.',
    whyNeedIt: 'When server connections fail, sysadmins need fast, actionable solutions rather than deciphering cryptic error codes. This guide explains exactly what causes each error and how to fix it on the server or in SSH Desktop.',
    prerequisites: [
      'SSH Desktop application.',
      'Access to remote server console (via cloud provider web console or local terminal) if locked out.'
    ],
    features: [
      '<strong>Connection Refused Diagnostics:</strong> Step-by-step check for sshd daemon status, firewall rules, and listening ports.',
      '<strong>Permission Denied (publickey) Fix:</strong> How to verify `~/.ssh/authorized_keys` permissions and private key matching.',
      '<strong>Host Key Verification Recovery:</strong> How to reset changed host fingerprints safely after a server reinstall.',
      '<strong>Docker Socket Access Fix:</strong> Resolving "permission denied while connecting to Docker daemon socket" with `usermod`.'
    ],
    steps: [
      {
        title: '1. Diagnosing "Connection Refused on Port 22"',
        content: `A "Connection Refused" error means no daemon is listening on port 22 or a firewall is actively rejecting packets:
<ol>
  <li>Verify the OpenSSH server service is active: <code>sudo systemctl status ssh</code> (Ubuntu/Debian) or <code>sudo systemctl status sshd</code> (RHEL/CentOS).</li>
  <li>If stopped, start it: <code>sudo systemctl start ssh && sudo systemctl enable ssh</code>.</li>
  <li>Verify the server is listening on port 22: <code>sudo ss -tulpn | grep :22</code>.</li>
  <li>Ensure your firewall allows incoming traffic: <code>sudo ufw allow 22/tcp</code>.</li>
</ol>`
      },
      {
        title: '2. Fixing "Permission Denied (publickey, gssapi-keyex)"',
        content: `This error indicates that the remote server rejected your SSH private key:
<ol>
  <li>Ensure your public key is added to the remote user\'s authorized keys: <code>cat ~/.ssh/id_ed25519.pub | ssh user@server "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"</code>.</li>
  <li>Fix remote directory permissions (OpenSSH strictly rejects permissive permissions):
    <div class="docs-code-block">chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys</div>
  </li>
  <li>Check <code>/etc/ssh/sshd_config</code> to ensure <code>PubkeyAuthentication yes</code> is enabled.</li>
</ol>`
      },
      {
        title: '3. Resolving "Host Key Verification Failed"',
        content: `This warning occurs when the remote host\'s cryptographic fingerprint changes (e.g. after a server OS reinstall):
<ol>
  <li>In SSH Desktop, click <strong>Reset Known Host Key</strong> in the security modal.</li>
  <li>Alternatively, remove the stale fingerprint manually: <code>ssh-keygen -R &lt;server-ip&gt;</code>.</li>
  <li>Reconnect and accept the new fingerprint.</li>
</ol>`
      },
      {
        title: '4. Resolving "Docker Daemon Socket Permission Denied"',
        content: `If the Docker Hub reports permission denied when accessing <code>/var/run/docker.sock</code>:
<ol>
  <li>Add your SSH user to the <code>docker</code> group: <code>sudo usermod -aG docker $USER</code>.</li>
  <li>Log out and log back in to refresh group memberships.</li>
  <li>Ensure the Docker daemon is active: <code>sudo systemctl status docker</code>.</li>
</ol>`
      }
    ],
    underTheHood: 'Explains OpenSSH authentication phases, handshake packet exchange, and `~/.ssh/known_hosts` cryptographic hashing.',
    shortcuts: [
      { key: 'Cmd/Ctrl + L', desc: 'Open Verbose Handshake Log' }
    ],
    interfaceTour: `The <strong>Connection Diagnostics Drawer</strong> displays verbose handshake logs during connection attempts. It shows the negotiated cipher suite, key exchange algorithm, public key authentication attempts, and raw server banner responses.`,
    proTips: [
      '<strong>Inspect Cloud Security Groups:</strong> On AWS, Google Cloud, Azure, and Oracle Cloud, ensure the cloud provider\'s Virtual Firewall / Security Group allows inbound traffic on port 22.',
      '<strong>Check Fail2ban Status:</strong> If you entered the wrong password multiple times, Fail2ban may have temporarily jailed your IP address. Unban yourself via the cloud console or a VPN connection.'
    ],
    troubleshooting: [
      {
        q: 'Connection timed out with no response',
        a: 'A timeout means packets are being silently dropped by an upstream network firewall or the server IP is unreachable. Verify your server\'s public IP and internet routing.'
      }
    ]
  },

  {
    slug: 'rdp-over-ssh.html',
    title: 'RDP Over SSH Tunneling Guide',
    category: 'Security & Networking',
    catSlug: 'security',
    icon: '🔒',
    seoTitle: 'Secure RDP Over SSH Tunnel (Port 3389) - SSH Desktop Docs',
    description: 'How to tunnel Remote Desktop Protocol (RDP port 3389) over an encrypted SSH port 22 connection. Access Windows and XRDP servers without exposing port 3389 publicly.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/ssh',
    githubLabel: 'src/apps/ssh',
    screenshot: 'screenshot-tunnels',
    replaces: 'Exposing raw RDP port 3389 to internet ransomware bots, complex VPN clients',
    commands: 'ssh -L 3389:localhost:3389, mstsc.exe 127.0.0.1:3389, xrdp',
    summary: 'Secure Remote Desktop guide: tunnel RDP traffic over encrypted SSH port 22, protect against ransomware port scans, and connect to Windows or XRDP.',
    lead: 'How to securely tunnel Remote Desktop Protocol (RDP port 3389) over encrypted SSH port 22. Access remote Windows servers and Linux XRDP desktops without exposing port 3389 publicly.',
    whatIsIt: 'The RDP Over SSH guide explains how to route Microsoft Remote Desktop Protocol (port 3389) traffic through an encrypted SSH tunnel created by SSH Desktop. This allows you to manage Windows VPS instances or Linux XRDP desktops securely from anywhere in the world.',
    whyNeedIt: 'Exposing raw RDP port 3389 directly to the public internet is a major security vulnerability: automated ransomware bots continuously brute-force exposed RDP ports. Tunneling RDP through SSH port 22 encrypts all session traffic, conceals port 3389 from external scanners, and requires strong SSH cryptographic key authentication to access.',
    prerequisites: [
      'Remote server running OpenSSH server and an RDP service (Windows Remote Desktop or Linux `xrdp`).',
      'Local RDP client installed (Microsoft Remote Desktop on macOS/Windows, Remmina on Linux).',
      'SSH credentials to the target host or an intermediate Linux gateway.'
    ],
    features: [
      '<strong>Complete Port Cloaking:</strong> Keep port 3389 closed in your public cloud firewall; all traffic flows over port 22.',
      '<strong>End-to-End Cryptography:</strong> Protect legacy RDP ciphers with modern SSH AES-256-GCM or ChaCha20-Poly1305 encryption.',
      '<strong>One-Click Tunnel Profile:</strong> Save the RDP tunnel configuration in SSH Desktop to launch it automatically on demand.',
      '<strong>Cross-Platform Support:</strong> Connect to Windows Server 2019/2022/2025, Windows 10/11 Pro, and Ubuntu XRDP desktops.'
    ],
    steps: [
      {
        title: '1. Opening SSH Port Forwarding in SSH Desktop',
        content: `Connect to your remote server or gateway in SSH Desktop. Open the <strong>SSH Port Forwarding &amp; Tunnels</strong> app from the Dock or Spotlight (<kbd>Cmd+K</kbd>).`
      },
      {
        title: '2. Creating the Local RDP Tunnel Rule',
        content: `Click <strong>+ New Tunnel</strong> and configure:
<ul>
  <li><strong>Tunnel Type:</strong> Local (-L)</li>
  <li><strong>Local Port:</strong> <code>3389</code> (or <code>13389</code> if you are running a local Windows desktop)</li>
  <li><strong>Destination Host:</strong> <code>127.0.0.1</code> (or the internal LAN IP of your Windows machine)</li>
  <li><strong>Destination Port:</strong> <code>3389</code></li>
  <li>Click <strong>Save &amp; Start Tunnel</strong>.</li>
</ul>`
      },
      {
        title: '3. Connecting with Microsoft Remote Desktop',
        content: `Open your local RDP client (Microsoft Remote Desktop or <code>mstsc.exe</code>). In the Computer / PC Name field, enter <code>127.0.0.1:3389</code> (or the custom local port you chose). Enter your Windows username and password and click Connect.`
      },
      {
        title: '4. Verifying Encrypted Traffic in SSH Desktop',
        content: `Switch back to SSH Desktop. The RDP tunnel card shows active connection status, current bandwidth throughput, and transferred bytes flowing securely through your encrypted SSH connection.`
      }
    ],
    underTheHood: 'Multiplexes Direct-TCPIP stream over the established OpenSSH session, forwarding local TCP packets to the remote loopback interface.',
    shortcuts: [
      { key: 'Cmd/Ctrl + T', desc: 'Open Tunnels Manager' }
    ],
    interfaceTour: `The <strong>Tunnel Canvas</strong> displays active tunnels with live visual traffic flow meters. Clicking the RDP tunnel card reveals connection counts, packet latency, and an Auto-Reconnect toggle that keeps the RDP tunnel alive during Wi-Fi drops.`,
    proTips: [
      '<strong>Use High Port for Multiple Desktops:</strong> If tunneling to multiple Windows machines, assign distinct local ports like <code>13389</code>, <code>23389</code>, and <code>33389</code>.',
      '<strong>Enable Network Level Authentication (NLA):</strong> Keep NLA enabled in Windows for dual-layer authentication (SSH key first, then Windows credentials).',
      '<strong>Auto-Start Tunnels:</strong> Toggle "Auto-Start on Connection" so your RDP tunnel initializes automatically whenever you connect to your server profile.'
    ],
    troubleshooting: [
      {
        q: 'Local port 3389 already in use on Windows client',
        a: 'If your local PC is running Windows Pro, its local RDP service is already using port 3389. Simply set the Local Port to <code>13389</code> in SSH Desktop and connect Microsoft Remote Desktop to <code>127.0.0.1:13389</code>.'
      }
    ]
  },

  {
    slug: 'aws-ec2-guide.html',
    title: 'AWS EC2 SSH Connection Guide',
    category: 'Automation & Gateways',
    catSlug: 'automation',
    icon: '☁️',
    seoTitle: 'Connect to AWS EC2 Instances with SSH Desktop - Complete Guide',
    description: 'Step-by-step tutorial on connecting SSH Desktop to Amazon Web Services (AWS) EC2 instances. How to use .pem keypairs, configure VPC Security Groups, and Jump Hosts.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'AWS EC2 Instance Connect browser lag, PuTTYgen .pem to .ppk conversion',
    commands: 'chmod 400 key.pem, ssh -i key.pem ec2-user@ec2-ip, VPC Security Group 22',
    summary: 'Step-by-step AWS EC2 integration guide: connect with .pem keys, configure VPC Security Groups, tunnel through Bastion hosts, and manage cloud fleets.',
    lead: 'Step-by-step guide to connecting and managing AWS EC2 instances with SSH Desktop. Learn how to use .pem keys, configure VPC Security Groups, and connect through Bastion jump hosts.',
    whatIsIt: 'The AWS EC2 Guide provides an end-to-end tutorial on integrating SSH Desktop with Amazon Web Services (AWS) Elastic Compute Cloud (EC2). It covers creating host profiles with `.pem` keypairs, configuring Amazon VPC Security Groups for secure port 22 access, connecting to private VPC instances through an EC2 Bastion host, and managing fleets of cloud servers.',
    whyNeedIt: 'Managing AWS EC2 instances via the AWS Management Console requires constant browser logins, slow EC2 Instance Connect web terminals, and manual session tracking. SSH Desktop lets you connect directly to EC2 instances from your desktop with native performance, multi-tab terminal split panes, and visual Docker/database management.',
    prerequisites: [
      'Active AWS account with running EC2 instance (Ubuntu, Amazon Linux 2023, Debian, or RHEL).',
      'AWS Key Pair private key file (`.pem`).',
      'EC2 Security Group configured with inbound rule allowing SSH (port 22) from your IP address.',
      'Public IPv4 address or Elastic IP attached to the EC2 instance.'
    ],
    features: [
      '<strong>Direct .pem Key Support:</strong> Connect directly using standard AWS `.pem` private keys without running PuTTYgen conversions.',
      '<strong>Amazon Linux & Ubuntu Optimization:</strong> Native compatibility with default EC2 usernames (`ec2-user`, `ubuntu`, `admin`, `centos`).',
      '<strong>Private VPC Bastion Routing:</strong> Seamlessly jump into private EC2 database instances that have no public IP addresses.',
      '<strong>Cloud Fleet Tagging:</strong> Group your EC2 servers by AWS region (e.g. `us-east-1`, `eu-west-1`) and environment tags.'
    ],
    steps: [
      {
        title: '1. Locating EC2 Public IP & Key Pair',
        content: `In the AWS EC2 Console, select your instance and locate its <strong>Public IPv4 address</strong> (or Elastic IP). Ensure you have downloaded the <code>.pem</code> keypair created during instance launch.`
      },
      {
        title: '2. Configuring AWS VPC Security Group',
        content: `Select your EC2 instance\'s Security Group &rarr; <strong>Edit inbound rules</strong>. Add an Inbound Rule:
<ul>
  <li><strong>Type:</strong> SSH</li>
  <li><strong>Port:</strong> <code>22</code></li>
  <li><strong>Source:</strong> <em>My IP</em> (recommended for security) or your office CIDR range.</li>
  <li>Click <strong>Save rules</strong>.</li>
</ul>`
      },
      {
        title: '3. Adding the EC2 Profile in SSH Desktop',
        content: `Click <strong>+ New Connection</strong> in SSH Desktop:
<ul>
  <li><strong>Host / IP:</strong> Your EC2 Public IPv4 address</li>
  <li><strong>Username:</strong> <code>ubuntu</code> (for Ubuntu AMIs), <code>ec2-user</code> (for Amazon Linux / RHEL), or <code>admin</code> (for Debian)</li>
  <li><strong>Auth Mode:</strong> Choose <em>Private Key</em> and browse to your downloaded <code>.pem</code> file.</li>
  <li>Click <strong>Connect</strong>.</li>
</ul>`
      },
      {
        title: '4. Routing to Private EC2 Instances via Bastion',
        content: `For database instances located in private subnets, toggle <strong>Bastion / Jump Host</strong> in the connection settings. Set the public Bastion EC2 instance as the jump box. SSH Desktop opens an encrypted tunnel through the bastion into your private node.`
      }
    ],
    underTheHood: 'Authenticates using RSA 2048/4096 or Ed25519 AWS keypairs and multiplexes channels over AWS VPC network interfaces.',
    shortcuts: [
      { key: 'Cmd/Ctrl + N', desc: 'New Connection Modal' }
    ],
    interfaceTour: `The <strong>AWS Cloud Workspace</strong> organizes EC2 instances with visual region badges (us-east-1, eu-central-1, ap-southeast-1). Quick action cards allow launching interactive bash shells, inspecting Docker containers, and managing systemd services agentlessly.`,
    proTips: [
      '<strong>Use Elastic IPs:</strong> Standard EC2 public IPv4 addresses change whenever an instance is stopped and restarted. Attach an Elastic IP to keep a permanent static IP address.',
      '<strong>Protect .pem Key Permissions:</strong> Ensure your <code>.pem</code> file is protected locally: <code>chmod 400 ~/.ssh/my-aws-key.pem</code>.',
      '<strong>Tag by Environment:</strong> Use tags like <code>aws-prod</code> and <code>aws-staging</code> to filter instances instantly in Spotlight (<kbd>Cmd+K</kbd>).'
    ],
    troubleshooting: [
      {
        q: 'Connection timed out to EC2 instance',
        a: 'A timeout almost always indicates an AWS Security Group misconfiguration. Verify that your Security Group\'s Inbound Rules allow port 22 from your current public IP address.'
      },
      {
        q: 'Please login as the user "ubuntu" rather than the user "root"',
        a: 'AWS AMIs disable direct root login by default. Connect using the AMI\'s default user (e.g. <code>ubuntu</code> or <code>ec2-user</code>) and use <code>sudo</code> for elevated commands.'
      }
    ]
  },

  {
    slug: 'cloud-vps-guide.html',
    title: 'Multi-Cloud VPS Management Guide',
    category: 'Automation & Gateways',
    catSlug: 'automation',
    icon: '🌐',
    seoTitle: 'Multi-Cloud VPS Management (DigitalOcean, Hetzner, Linode) - SSH Desktop',
    description: 'Centralize server management across DigitalOcean, Hetzner Cloud, Linode, Vultr, and OVH. Manage root logins, firewall rules, and backups agentlessly.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Logging into 5 different cloud web consoles, manual SSH connection tracking',
    commands: 'cloud-init, ufw, root ssh key authentication, cloud firewall rules',
    summary: 'Unified cloud management guide: organize Droplets and Cloud VPS instances across multiple cloud providers with zero agents and centralized key management.',
    lead: 'Complete guide to managing multi-cloud Linux VPS instances across DigitalOcean, Hetzner Cloud, Linode, Vultr, and OVH with SSH Desktop.',
    whatIsIt: 'The Multi-Cloud VPS Guide shows how to centralize your server fleet across multiple cloud hosting providers. Learn how to connect to DigitalOcean Droplets, Hetzner Cloud Cloud Servers, Linode (Akamai) Compute Instances, Vultr, and OVH with zero agents, unified key management, and instant multi-server switching.',
    whyNeedIt: 'Many companies and developers use multiple cloud providers to optimize costs and prevent vendor lock-in. Juggling 4 or 5 different provider web dashboards is slow and disjointed. SSH Desktop provides a single unified visual command center for all your cloud servers.',
    prerequisites: [
      'Cloud VPS instance running any Linux distribution (Ubuntu, Debian, Rocky, Alma, Arch, Fedora, Alpine).',
      'Public IP address assigned to the VPS.',
      'SSH access via root user or a sudo-enabled user account with an SSH keypair.'
    ],
    features: [
      '<strong>Provider-Agnostic Management:</strong> Connect to any cloud host identically over standard OpenSSH port 22.',
      '<strong>Zero Agent Resource Cost:</strong> Cloud VPS instances run with 100% of their RAM and CPU available for your applications.',
      '<strong>Unified SSH Key Distribution:</strong> Use your local Ed25519 keypair across all cloud providers effortlessly.',
      '<strong>Multi-Server Broadcast:</strong> Run maintenance and update scripts across all cloud instances simultaneously with the Multi-Server Automation app.'
    ],
    steps: [
      {
        title: '1. Deploying a Cloud VPS Instance',
        content: `Launch your cloud instance on DigitalOcean, Hetzner, Linode, or Vultr. During creation, paste your local SSH public key (<code>cat ~/.ssh/id_ed25519.pub</code>) into the provider\'s SSH Key selector for automatic passwordless provisioning.`
      },
      {
        title: '2. Adding Cloud Servers to SSH Desktop',
        content: `Click <strong>+ New Connection</strong> in SSH Desktop. Enter the public IP address provided by your cloud host, set username to <code>root</code> (or your configured admin user), select your Ed25519 private key, and assign a provider tag (e.g. <code>Hetzner-Nuremberg</code>, <code>DO-NYC3</code>).`
      },
      {
        title: '3. Configuring Visual UFW Firewalls Across Providers',
        content: `Different cloud providers have varying cloud firewalls. Open the <strong>Visual Firewall Manager</strong> in SSH Desktop to standardize internal UFW rules across all your servers regardless of which cloud host they run on.`
      },
      {
        title: '4. Broadcasting Fleet Maintenance Across Clouds',
        content: `Launch the <strong>Multi-Server Automation</strong> app. Select servers across DigitalOcean, Hetzner, and Linode simultaneously and execute security updates or Docker deployments in parallel with aggregated output.`
      }
    ],
    underTheHood: 'Communicates with remote cloud instances over standard TCP/IP OpenSSH sockets, completely independent of cloud provider APIs.',
    shortcuts: [
      { key: 'Cmd/Ctrl + Shift + S', desc: 'Open Server Switcher Dropdown' }
    ],
    interfaceTour: `The <strong>Cloud Inventory Hub</strong> visualizes server locations and cloud providers with custom badges. Hovering over any server profile displays live uptime, CPU utilization, and connection latency in milliseconds.`,
    proTips: [
      '<strong>Hetzner Cloud Cost Efficiency:</strong> Combine high-performance Hetzner Cloud CPX/CX servers with SSH Desktop for top-tier performance at a fraction of hyperscaler costs.',
      '<strong>Standardize sudo User Accounts:</strong> Create a consistent admin user (e.g. <code>deployer</code>) across all cloud VPS instances using the User & Sudoers Administrator app.',
      '<strong>Monitor Ping Latency:</strong> Use the Network Auditor app to test real-world ping and packet latency between your cloud nodes.'
    ],
    troubleshooting: [
      {
        q: 'Cloud VPS provider requires password reset on first login',
        a: 'If you provisioned a VPS with a temporary root password, connect once via password auth in SSH Desktop; the terminal prompts you to set your new permanent password immediately.'
      }
    ]
  }
];

// Step 1: Append to build_comprehensive_docs.js
console.log('Step 1: Checking build_comprehensive_docs.js...');
const compPath = path.join(__dirname, 'build_comprehensive_docs.js');
let compCode = fs.readFileSync(compPath, 'utf8');

for (const ch of newChaptersData) {
  if (!compCode.includes(`slug: '${ch.slug}'`)) {
    console.log(`Adding ${ch.slug} to build_comprehensive_docs.js`);
    const insertIdx = compCode.lastIndexOf('];');
    const entry = `  {
    slug: '${ch.slug}',
    title: '${ch.title.replace(/'/g, "\\'")}',
    category: '${ch.category}',
    catSlug: '${ch.catSlug}',
    icon: '${ch.icon}',
    seoTitle: '${ch.seoTitle.replace(/'/g, "\\'")}',
    description: '${ch.description.replace(/'/g, "\\'")}',
    github: '${ch.github}',
    githubLabel: '${ch.githubLabel}',
    screenshot: '${ch.screenshot}',
    replaces: '${ch.replaces.replace(/'/g, "\\'")}',
    commands: '${ch.commands.replace(/'/g, "\\'")}',
    summary: '${ch.summary.replace(/'/g, "\\'")}'
  },\n`;
    compCode = compCode.slice(0, insertIdx) + entry + compCode.slice(insertIdx);
  }
}
fs.writeFileSync(compPath, compCode, 'utf8');
console.log('build_comprehensive_docs.js updated.');

// Step 2: Append to chapter_enrichments.js
console.log('Step 2: Checking chapter_enrichments.js...');
const enrichPath = path.join(__dirname, 'chapter_enrichments.js');
let enrichCode = fs.readFileSync(enrichPath, 'utf8');

for (const ch of newChaptersData) {
  if (!enrichCode.includes(`'${ch.slug}':`)) {
    console.log(`Adding ${ch.slug} to chapter_enrichments.js`);
    const insertIdx = enrichCode.lastIndexOf('};');
    const enrichEntry = `  '${ch.slug}': {
    interfaceTour: \`${ch.interfaceTour}\`,
    proTips: ${JSON.stringify(ch.proTips, null, 6)},
    troubleshooting: ${JSON.stringify(ch.troubleshooting, null, 6)}
  },\n\n`;
    enrichCode = enrichCode.slice(0, insertIdx) + enrichEntry + enrichCode.slice(insertIdx);
  }
}
fs.writeFileSync(enrichPath, enrichCode, 'utf8');
console.log('chapter_enrichments.js updated.');

// Step 3: Append to build_all_chapters.js
console.log('Step 3: Checking build_all_chapters.js...');
const allChapPath = path.join(__dirname, 'build_all_chapters.js');
let allChapCode = fs.readFileSync(allChapPath, 'utf8');

for (const ch of newChaptersData) {
  if (!allChapCode.includes(`'${ch.slug}': {`)) {
    console.log(`Adding ${ch.slug} to build_all_chapters.js`);
    const insertIdx = allChapCode.indexOf('// Generate Sidebar HTML') > -1 
      ? allChapCode.indexOf('// Generate Sidebar HTML') 
      : allChapCode.lastIndexOf('};');
    
    // find the closing of chapterDetails
    const detailsClose = allChapCode.lastIndexOf('};\n\nfunction escapeHtml');
    const targetClose = detailsClose > -1 ? detailsClose : allChapCode.lastIndexOf('function buildAllChapters');

    const detailObj = `  '${ch.slug}': {
    lead: '${ch.lead.replace(/'/g, "\\'")}',
    whatIsIt: '${ch.whatIsIt.replace(/'/g, "\\'")}',
    whyNeedIt: '${ch.whyNeedIt.replace(/'/g, "\\'")}',
    prerequisites: ${JSON.stringify(ch.prerequisites, null, 6)},
    features: ${JSON.stringify(ch.features, null, 6)},
    steps: ${JSON.stringify(ch.steps, null, 6)},
    underTheHood: '${ch.underTheHood.replace(/'/g, "\\'")}',
    shortcuts: ${JSON.stringify(ch.shortcuts, null, 6)}
  },\n\n`;

    const insertPosition = allChapCode.indexOf('function buildAllChapters');
    // find the last '};' before function buildAllChapters
    const lastBraceBeforeFunc = allChapCode.lastIndexOf('};', insertPosition);
    allChapCode = allChapCode.slice(0, lastBraceBeforeFunc) + detailObj + allChapCode.slice(lastBraceBeforeFunc);
  }
}
fs.writeFileSync(allChapPath, allChapCode, 'utf8');
console.log('build_all_chapters.js updated.');

// Step 4: Create URL Alias Files to ensure zero 404s
console.log('Step 4: Creating alias files...');
const aliases = [
  { from: 'docker-manager.html', to: 'docker-management.html', title: 'Docker Container Management Hub' },
  { from: 'database-hub.html', to: 'database-studio.html', title: 'Multi-Engine Database Studio' },
  { from: 'linux-disk-manager.html', to: 'disk-smart-manager.html', title: 'Disk, LVM & S.M.A.R.T. Health Manager' },
  { from: 'firewall-manager.html', to: 'firewall-ufw.html', title: 'Visual Firewall (UFW & Iptables)' },
  { from: 'ssh-tunnel-manager.html', to: 'ssh-tunneling.html', title: 'SSH Port Forwarding & Tunnels' },
  { from: 'cron-manager.html', to: 'crontab-scheduler.html', title: 'Visual Crontab Scheduler' }
];

for (const a of aliases) {
  const filePath = path.join(docsDir, a.from);
  const aliasHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${a.to}">
  <link rel="canonical" href="https://sshdesktop.com/docs/${a.to}">
  <title>${a.title} - SSH Desktop Docs</title>
</head>
<body style="background:#0f172a;color:#cbd5e1;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <p>Redirecting to <a href="${a.to}" style="color:#38bdf8;">${a.title} &rarr;</a></p>
  <script>window.location.replace("${a.to}");</script>
</body>
</html>`;
  fs.writeFileSync(filePath, aliasHtml, 'utf8');
  console.log(`Created alias: docs/${a.from} -> ${a.to}`);
}

console.log('All missing doc definitions and aliases deployed successfully!');
