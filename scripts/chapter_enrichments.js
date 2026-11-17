// scripts/chapter_enrichments.js
// Rich end-user interface tours, pro-tips, and troubleshooting FAQs for all 29 documentation chapters.

module.exports = {
  'getting-started.html': {
    interfaceTour: `The <strong>Connection Manager</strong> is the initial hub of SSH Desktop. The left sidebar displays saved server profiles organized by tags (Production, Staging, Homelab, Edge). The main view shows connection status indicators (Active, Inactive, Unreachable), server nicknames, IP addresses, and SSH port numbers. The top toolbar provides <strong>+ New Connection</strong>, <strong>Import ~/.ssh/config</strong>, <strong>Quick Connect</strong>, and <strong>Settings</strong>. Double-clicking any server profile launches the desktop session immediately.`,
    proTips: [
      '<strong>Use Ed25519 Keys:</strong> Ed25519 elliptic-curve keys provide stronger cryptographic security, faster handshakes, and smaller key lengths compared to legacy RSA 2048/4096 keys.',
      '<strong>Tag Your Servers:</strong> Assign color-coded tags (e.g. <code>Prod</code>, <code>Dev</code>, <code>DB</code>) to group and search servers instantly via the top search bar.',
      '<strong>ProxyJump for Private VPCs:</strong> Configure a Bastion host once in the Advanced settings to seamlessly connect to internal VPC instances without public IPv4 addresses.',
      '<strong>Pin Frequent Servers:</strong> Right-click a server profile to pin it to the Quick Switcher dropdown in the top macOS-style menu bar.'
    ],
    troubleshooting: [
      {
        q: 'Connection refused on port 22',
        a: 'Ensure the OpenSSH server daemon is running on the target machine (<code>sudo systemctl status ssh</code> or <code>sshd</code>) and that your firewall allows inbound traffic on port 22 (or your custom SSH port).'
      },
      {
        q: 'Permission denied (publickey)',
        a: 'Verify that your public key has been added to the remote user\'s <code>~/.ssh/authorized_keys</code> file and that correct permissions are set on the remote host (<code>chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys</code>).'
      },
      {
        q: 'Host key verification failed',
        a: 'This occurs if the remote server was reinstalled or its SSH host key changed. In SSH Desktop, click Connection Settings &rarr; Reset Known Host Key to accept the new server fingerprint safely.'
      }
    ]
  },

  'architecture.html': {
    interfaceTour: `The <strong>Architecture & Diagnostics Inspector</strong> displays the live status of the local Rust-Tauri runtime and multiplexed OpenSSH channels. The left panel shows active virtual channels (PTY sessions, SFTP streams, Direct-TCPIP tunnels, and background telemetry readers). The center metrics monitor displays local client memory footprint (typically under 45 MB), CPU usage, and network throughput across the multiplexed SSH connection.`,
    proTips: [
      '<strong>Zero Server Footprint:</strong> SSH Desktop never installs background daemons, cron jobs, or monitoring agents on your servers. Closing the app closes all multiplexed SSH sessions cleanly.',
      '<strong>Single Port Simplicity:</strong> All 25 applications communicate exclusively through standard OpenSSH port 22. No additional firewall ports need to be opened on your server.',
      '<strong>Native OS Keychain Security:</strong> Private keys and passphrases are stored in macOS Keychain, Windows DPAPI, or Linux Secret Service — never in unencrypted configuration files.',
      '<strong>True Zero-Cloud Privacy:</strong> No analytics, telemetry, or user data is ever sent to external cloud servers. The client communicates solely with your configured hosts.'
    ],
    troubleshooting: [
      {
        q: 'High latency or laggy UI over slow connections',
        a: 'Enable "Low Bandwidth Mode" in Preferences to reduce telemetry polling frequency from 1000ms to 5000ms and compress SFTP directory listings.'
      },
      {
        q: 'AllowTcpForwarding disabled on server',
        a: 'If database tunnels or Docker socket forwarders fail to connect, check <code>/etc/ssh/sshd_config</code> on the server and ensure <code>AllowTcpForwarding yes</code> is enabled, then reload sshd.'
      }
    ]
  },

  'web-mode.html': {
    interfaceTour: `The <strong>Web Mode Interface</strong> delivers the complete macOS Sonoma-style cloud desktop inside any modern web browser (Chrome, Safari, Firefox, Edge). The browser window displays the top menu bar with server switcher, clock, and battery/network status, the floating window workspace in the center, and the macOS-inspired Dock at the bottom. A side quick-access drawer allows toggling between multi-server sessions with touch gestures on mobile devices and tablets.`,
    proTips: [
      '<strong>Run Behind Nginx or Caddy:</strong> Always deploy Web Mode behind a reverse proxy with Let\'s Encrypt SSL/TLS enabled to ensure end-to-end encrypted WebSocket traffic.',
      '<strong>Enable HTTP Basic or OAuth Auth:</strong> Protect your Web Mode instance with HTTP authentication or Cloudflare Access for an extra layer of perimeter defense.',
      '<strong>Mobile Tablet Optimization:</strong> Add the SSH Desktop Web Mode URL to your iPad or Android tablet home screen for a full-screen, native-feeling remote cloud workstation.',
      '<strong>Headless Daemon Management:</strong> Use <code>systemctl status sshdesktop</code> to monitor daemon health and inspect execution logs directly.'
    ],
    troubleshooting: [
      {
        q: 'WebSocket connection closed immediately',
        a: 'Ensure your reverse proxy (Nginx or Caddy) is configured to upgrade WebSocket connections with <code>Upgrade $http_upgrade</code> and <code>Connection "upgrade"</code> headers.'
      },
      {
        q: 'Web daemon fails to bind port 2222',
        a: 'Verify no other service is using port 2222 with <code>sudo ss -tulpn | grep 2222</code>. You can change the port in <code>/etc/sshdesktop/config.json</code> and restart the service.'
      }
    ]
  },

  'cloud-desktop.html': {
    interfaceTour: `The <strong>macOS Sonoma Desktop Shell</strong> provides a full multi-window desktop interface for remote servers. The <strong>Top Menu Bar</strong> features the Apple-style Server Switcher, active app menus, real-time CPU/RAM meters, and system time. The <strong>Desktop Area</strong> supports wallpaper customization, desktop sticky notes, and freeform floating windows with macOS traffic light controls (Close, Minimize, Zoom). The <strong>Dock</strong> at the bottom organizes all 25 native apps with bouncing launch animations and active indicator dots.`,
    proTips: [
      '<strong>Spotlight Launcher (Cmd/Ctrl + K):</strong> Press <kbd>Cmd/Ctrl + K</kbd> anywhere on the desktop to instantly search and launch any app, server connection, or command snippet.',
      '<strong>Window Snapping:</strong> Drag any window to the screen edges or corners to snap it into 50% split view or 25% quadrant tiling.',
      '<strong>Multi-Server Switching:</strong> Switch between connected servers instantly from the top-left menu bar without closing your open application windows.',
      '<strong>Workspace Presets:</strong> Save your favorite window arrangements (e.g. "Dev: Terminal + Monaco + Logs" or "Ops: Docker + Monitor + Firewall") to reopen them with one click.'
    ],
    troubleshooting: [
      {
        q: 'Window disappeared off screen after display resize',
        a: 'Press <kbd>Cmd/Ctrl + Option + 0</kbd> (Zero) to cascade and center all open application windows within the current visible viewport.'
      },
      {
        q: 'Dock hiding behind floating windows',
        a: 'Toggle "Always Keep Dock on Top" in Desktop Preferences or hover your cursor at the bottom edge of the screen to reveal the Dock.'
      }
    ]
  },

  'terminal.html': {
    interfaceTour: `The <strong>PTY Terminal</strong> provides a GPU-accelerated terminal experience powered by Xterm.js and WebGL. The <strong>Tab Bar</strong> at the top allows opening multiple shell tabs and naming sessions. The <strong>Split Pane Toolbar</strong> includes buttons to split the active terminal horizontally (<kbd>Cmd+D</kbd>) or vertically (<kbd>Cmd+Shift+D</kbd>). The main terminal canvas supports 24-bit TrueColor, clickable URL hyperlinks, and mouse-based text selection with automatic clipboard copy.`,
    proTips: [
      '<strong>Split Panes for Multitasking:</strong> Split your terminal window into 2, 3, or 4 sub-panes to watch logs on the left while editing configurations on the right.',
      '<strong>Broadcast Input:</strong> Enable "Broadcast Mode" from the tab menu to type a shell command once and execute it simultaneously across all open split panes.',
      '<strong>Built-in Search (<kbd>Cmd/Ctrl + F</kbd>):</strong> Quickly search terminal buffer history with regular expression matching and match highlighting.',
      '<strong>Copy on Select:</strong> Highlighting text with your mouse copies it to your clipboard automatically without needing to press keyboard shortcuts.'
    ],
    troubleshooting: [
      {
        q: 'Special characters or Nerd Font glyphs look broken',
        a: 'Ensure a Nerd Font (e.g. JetBrains Mono Nerd Font, Fira Code) is installed locally on your PC and selected in Terminal Preferences &rarr; Font Family.'
      },
      {
        q: 'Terminal size does not match remote nano/vim',
        a: 'SSH Desktop automatically transmits SIGWINCH terminal resize signals. If misaligned, type <code>reset</code> or click Terminal &rarr; Re-Fit Window Dimensions.'
      }
    ]
  },

  'sftp-file-manager.html': {
    interfaceTour: `The <strong>SFTP File Manager</strong> features a dual-pane layout for effortless local-to-remote and remote-to-remote file management. The top toolbar provides <strong>Back / Forward</strong>, <strong>Breadcrumb Path Navigation</strong>, <strong>Search Filter</strong>, <strong>New Folder</strong>, <strong>Upload</strong>, <strong>Download</strong>, and <strong>View Switcher</strong> (Icons, Details List, Columns). Right-clicking any file opens a contextual menu with options to Edit in Monaco, Compress (.tar.gz / .zip), Extract Archive, Change Permissions (Chmod), and View Properties.`,
    proTips: [
      '<strong>In-Place Remote Extraction:</strong> Right-click any <code>.tar.gz</code>, <code>.tar.bz2</code>, or <code>.zip</code> file and click "Extract Here" to unpack it instantly on the server without downloading.',
      '<strong>Visual Chmod Editor:</strong> Right-click a file or folder and select "Permissions" to set read, write, and execute permissions with visual checkboxes or octal notation (e.g. <code>755</code>, <code>644</code>).',
      '<strong>Drag-and-Drop Transfers:</strong> Drag files directly from your local desktop file explorer into the SFTP file manager to initiate instant background uploads.',
      '<strong>Hidden Files Toggle (<kbd>Cmd/Ctrl + H</kbd>):</strong> Quickly show or hide dotfiles (like <code>.env</code>, <code>.htaccess</code>, <code>.git/</code>) with a single shortcut.'
    ],
    troubleshooting: [
      {
        q: 'Permission denied when uploading to /var/www or /etc',
        a: 'Non-root users cannot write to root-owned directories. Use the "Sudo SFTP Mode" toggle in connection settings or upload to your home folder first and move with <code>sudo mv</code>.'
      },
      {
        q: 'Archive extraction fails on remote server',
        a: 'Ensure <code>tar</code>, <code>gzip</code>, or <code>unzip</code> packages are installed on the remote Linux host (<code>sudo apt install tar unzip</code>).'
      }
    ]
  },

  'monaco-code-editor.html': {
    interfaceTour: `The <strong>Monaco Code Editor</strong> brings the VS Code editing experience directly to remote servers. The <strong>File Tree Sidebar</strong> on the left displays remote folder hierarchies with file type icons. The <strong>Editor Workspace</strong> supports multi-tab editing, syntax highlighting for 50+ languages, code folding, minimap navigation, and line numbering. The bottom status bar shows encoding (UTF-8), indentation (Spaces: 2/4), line/column position, and Git branch status.`,
    proTips: [
      '<strong>Side-by-Side Diff View:</strong> Click "Compare with Original" before saving to review an exact line-by-line diff of all changes made to remote configuration files.',
      '<strong>Save with Sudo Elevation:</strong> If you edit a read-only file (e.g. <code>/etc/nginx/nginx.conf</code>), clicking Save automatically prompts for sudo authentication to write changes safely.',
      '<strong>Multi-Cursor Editing:</strong> Hold <kbd>Alt</kbd> (or <kbd>Option</kbd> on macOS) and click to create multiple cursors for simultaneous batch edits across lines.',
      '<strong>Quick Open (<kbd>Cmd/Ctrl + P</kbd>):</strong> Search and open any remote file in the current working directory without browsing the tree.'
    ],
    troubleshooting: [
      {
        q: 'File saved but changes not reflected in service',
        a: 'Remember to reload the respective service after editing configuration files (e.g. <code>sudo systemctl reload nginx</code> or <code>sudo systemctl restart apache2</code>).'
      },
      {
        q: 'Large file warning (>10 MB)',
        a: 'Opening very large log files in Monaco may degrade editor responsiveness. Use the dedicated Remote Log Analysis app or Terminal <code>less</code> for multi-gigabyte files.'
      }
    ]
  },

  'sticky-notes.html': {
    interfaceTour: `The <strong>Desktop Sticky Notes</strong> app places customizable, color-coded scratchpads directly on your server desktop workspace. Each note header features a color palette selector (Yellow, Blue, Green, Pink, Purple, Dark), a pin toggle (keep on top of all windows), and a trash button. The note body supports full Markdown rendering, checklist checkboxes, monospace code snippets, and live character counts.`,
    proTips: [
      '<strong>Server-Specific Persistence:</strong> Notes created while connected to a specific server are automatically saved to that server\'s profile and restored whenever you reconnect.',
      '<strong>Interactive Checklists:</strong> Use standard markdown syntax (<code>- [ ] Step 1</code>) to create interactive task checklists that you can check off during deployments.',
      '<strong>Pin Token & IP References:</strong> Pin a small note in the corner of your screen with temporary database passwords, API endpoints, or staging IP addresses for instant reference.',
      '<strong>Search Notes:</strong> Use Spotlight (<kbd>Cmd/Ctrl + K</kbd>) to search across all your notes across all servers instantly.'
    ],
    troubleshooting: [
      {
        q: 'Notes not showing when opening app',
        a: 'Ensure the "Desktop Notes Visible" toggle is enabled in Desktop View settings (<kbd>Cmd/Ctrl + Shift + N</kbd>).'
      }
    ]
  },

  'docker-management.html': {
    interfaceTour: `The <strong>Docker Hub</strong> provides an intuitive, comprehensive visual control center with 6 primary tabs: <strong>Containers</strong> (active and stopped containers with status badges, image tags, port mappings, and memory meters), <strong>Images</strong> (local repository images, virtual sizes, tag history, and Pull Image button), <strong>Volumes</strong> (named volumes, mount paths, driver, and size on disk), <strong>Networks</strong> (bridge, host, overlay networks, and connected containers), <strong>Compose Editor</strong> (Monaco-powered compose file builder with syntax validation), and <strong>System Prune</strong> (disk reclamation wizard).`,
    proTips: [
      '<strong>One-Click Container Exec:</strong> Click the terminal icon next to any running container to launch an interactive bash/sh shell inside the container without typing <code>docker exec</code>.',
      '<strong>Live Log Streaming:</strong> Click the logs icon to stream container stdout/stderr with auto-scroll and color-coded error highlights in real time.',
      '<strong>Reclaim Disk Space:</strong> Switch to the System tab and click "Prune Unused Images & Volumes" to safely reclaim gigabytes of orphaned Docker cache.',
      '<strong>Inspect Port Mappings:</strong> Hover over any port badge (e.g. <code>8080:80</code>) to view the public-to-internal port mapping and click to open it in Reverse Proxy Browser.'
    ],
    troubleshooting: [
      {
        q: 'Cannot connect to Docker daemon socket',
        a: 'Ensure the Docker daemon is active on the remote server (<code>sudo systemctl status docker</code>) and that your SSH user is a member of the <code>docker</code> group (<code>sudo usermod -aG docker $USER</code>).'
      },
      {
        q: 'Container keeps crashing or restarting',
        a: 'Open the container\'s Logs tab and disable "Auto-Scroll" to review exit codes and startup panic errors.'
      }
    ]
  },

  'database-studio.html': {
    interfaceTour: `The <strong>Database Studio</strong> provides a complete visual SQL query workspace and schema browser with automatic, transparent SSH port forwarding. The left sidebar displays connected database engines (PostgreSQL, MySQL, MariaDB, SQLite, Redis, MongoDB), database lists, and table trees. The center area features a Monaco SQL query editor with auto-completion, keyword syntax highlighting, and execution timers. The bottom panel displays an interactive data grid with sorting, pagination, and inline cell editing.`,
    proTips: [
      '<strong>Zero Port Exposure:</strong> Connect to private database ports (e.g. 5432, 3306, 6379) listening only on <code>127.0.0.1</code> over encrypted SSH tunnels without exposing ports publicly.',
      '<strong>Inline Cell Editing:</strong> Double-click any cell in the table viewer to edit values directly and click "Apply Changes" to generate and run safe <code>UPDATE</code> queries.',
      '<strong>Export Data:</strong> Export query results or complete tables to CSV, JSON, or SQL INSERT dump formats with one click.',
      '<strong>Redis Key Browser:</strong> Inspect Redis key hierarchies, view string/hash/list values, and monitor key TTLs visually.'
    ],
    troubleshooting: [
      {
        q: 'Database connection failed: Access denied',
        a: 'Verify database user credentials and host permissions. Ensure the database user is permitted to connect from <code>localhost</code> or <code>127.0.0.1</code>.'
      },
      {
        q: 'Tunnel connection dropped on long-running queries',
        a: 'Enable "Keep-Alive Watchdog" in Database Connection settings to send heartbeat packets and prevent firewall NAT timeouts on inactive connections.'
      }
    ]
  },

  'ssh-tunneling.html': {
    interfaceTour: `The <strong>SSH Tunnel Manager</strong> visualizes and controls all your background SSH port forwardings. The top toolbar provides <strong>+ New Tunnel</strong>, <strong>Start All</strong>, and <strong>Stop All</strong> buttons. The tunnel table lists active tunnels with type badges (<strong>Local -L</strong>, <strong>Remote -R</strong>, <strong>Dynamic SOCKS5 -D</strong>), local listening port, remote target destination, active connection count, data transfer throughput, and a live toggle switch.`,
    proTips: [
      '<strong>Local Forwarding for Web Consoles:</strong> Use Local Forwarding (<code>-L 8080:localhost:8080</code>) to access private admin dashboards (Grafana, RabbitMQ, Jenkins) securely in your local browser.',
      '<strong>Dynamic SOCKS5 Proxy:</strong> Create a Dynamic tunnel (<code>-D 1080</code>) and configure your local browser to route web traffic through the remote server to access internal network subnets.',
      '<strong>Auto-Reconnect Watchdog:</strong> Enable "Auto-Reconnect" on critical tunnels so SSH Desktop automatically restores dropped connections if your Wi-Fi or laptop sleeps.',
      '<strong>Port Conflict Detection:</strong> SSH Desktop automatically tests local ports before binding and alerts you if another local application is already occupying the port.'
    ],
    troubleshooting: [
      {
        q: 'Port already in use on local machine',
        a: 'Another local application is using that port. Change the local binding port (e.g. from 8080 to 8081) in the tunnel configuration modal.'
      },
      {
        q: 'Remote port forwarding (-R) refused',
        a: 'Ensure <code>GatewayPorts yes</code> is enabled in <code>/etc/ssh/sshd_config</code> on the remote server if you need remote forwarding accessible outside localhost.'
      }
    ]
  },

  'systemd-services.html': {
    interfaceTour: `The <strong>Systemd Services Manager</strong> provides a complete graphical interface for Linux systemd units. The top filter bar includes a search box, category tabs (<strong>Services</strong>, <strong>Timers</strong>, <strong>Sockets</strong>, <strong>Targets</strong>), and status filters (<strong>All</strong>, <strong>Running</strong>, <strong>Failed</strong>, <strong>Disabled</strong>). The main units list displays service unit names, descriptions, load states, active states, and sub-states. Right-clicking any unit opens quick controls: Start, Stop, Restart, Enable, Disable, View Journal Logs, and Edit Unit File.`,
    proTips: [
      '<strong>Failed Units Filter:</strong> Click the "Failed" badge in the filter bar to immediately isolate crashed services across your server after reboot or system updates.',
      '<strong>Live Journalctl Streaming:</strong> Click the log icon next to any service to stream live <code>journalctl -u &lt;service&gt; -f</code> output with real-time autoscroll.',
      '<strong>Safe Unit Editing:</strong> Edit systemd service unit files directly in Monaco; saving automatically triggers <code>systemctl daemon-reload</code> in the background.',
      '<strong>Inspect Systemd Timers:</strong> Switch to the Timers tab to see when scheduled systemd cron-replacement jobs next trigger and how long until execution.'
    ],
    troubleshooting: [
      {
        q: 'Service restart fails with "exit-code"',
        a: 'Click "View Journal Logs" next to the service to review systemd stderr output and locate the specific configuration syntax or permission error.'
      },
      {
        q: 'Changes to unit file not taking effect',
        a: 'SSH Desktop executes <code>systemctl daemon-reload</code> automatically on save. If editing manually in terminal, always run <code>sudo systemctl daemon-reload</code>.'
      }
    ]
  },

  'hardware-telemetry.html': {
    interfaceTour: `The <strong>Hardware Telemetry Monitor</strong> displays real-time 60 FPS performance gauges for your server. The top row features visual circular gauges for <strong>CPU Utilization</strong>, <strong>RAM Usage</strong>, <strong>Swap Activity</strong>, and <strong>Disk Root Filesystem Capacity</strong>. The middle section shows historical time-series graphs for CPU frequency and temperature, network bandwidth (rx/tx Mbps), and disk I/O throughput (read/write IOPS). The bottom section shows the top 10 resource-consuming processes with quick-terminate controls.`,
    proTips: [
      '<strong>Zero Agent Overhead:</strong> Telemetry is sampled by reading Linux virtual files (<code>/proc/stat</code>, <code>/proc/meminfo</code>, <code>/proc/net/dev</code>) directly over SSH with zero background daemon overhead.',
      '<strong>Adjust Sampling Rate:</strong> Choose between 1000ms (high detail), 3000ms (standard), or 5000ms (low bandwidth) depending on your network connection.',
      '<strong>Identify Memory Leaks:</strong> Watch the RAM historical graph to detect steady memory leaks before the Linux kernel Out-Of-Memory (OOM) killer terminates critical services.',
      '<strong>Inspect Thermal Sensors:</strong> The monitor automatically detects CPU thermal zones on supported hardware (Intel Core, AMD Ryzen, Raspberry Pi) to alert you to overheating.'
    ],
    troubleshooting: [
      {
        q: 'Telemetry graphs show "Waiting for data"',
        a: 'Verify your SSH connection is active and that your user account has standard read permissions to <code>/proc/stat</code> and <code>/proc/meminfo</code> (readable by all users by default).'
      }
    ]
  },

  'process-manager.html': {
    interfaceTour: `The <strong>Process Manager</strong> is a modern visual task manager and htop alternative. The top toolbar provides an instant <strong>Process Filter Search</strong>, a user filter dropdown (All, Root, Current User, System Daemons), a <strong>Tree View Toggle</strong>, and a <strong>Refresh Interval Selector</strong>. The main process table displays PID, User, % CPU, % RAM, Virtual Memory, Resident Memory (RSS), Process State, and Command Line Arguments. Clicking column headers sorts processes instantly.`,
    proTips: [
      '<strong>Tree View for Child Processes:</strong> Toggle "Tree View" to visualize parent-child process hierarchies (e.g. Nginx master vs worker processes, PHP-FPM pools).',
      '<strong>Graceful vs Forceful Termination:</strong> Always try sending <code>SIGTERM (15)</code> first to allow applications to close database connections cleanly. Use <code>SIGKILL (9)</code> only for unresponsive frozen processes.',
      '<strong>Search by Port or Command:</strong> Type an application name (e.g. <code>postgres</code>, <code>node</code>) or PID in the top search box to pinpoint rogue processes instantly.',
      '<strong>Multi-Select Kill:</strong> Hold Shift or Cmd/Ctrl to select multiple runaway worker processes and terminate them in a single batch action.'
    ],
    troubleshooting: [
      {
        q: 'Cannot terminate process: Operation not permitted',
        a: 'Non-root users cannot kill processes owned by other users or root. Switch to a user with sudo privileges or connect as root to terminate system-level processes.'
      },
      {
        q: 'Process remains in "Zombie" (Z) state after kill',
        a: 'A zombie process is already dead and waiting for its parent process to read its exit status. Locate and restart or terminate the parent process (PPID).'
      }
    ]
  },

  'package-manager.html': {
    interfaceTour: `The <strong>Package Manager</strong> auto-detects your Linux distribution and provides a unified interface for APT (Ubuntu/Debian), DNF/YUM (RHEL/CentOS/Rocky), and Pacman (Arch). The interface features 4 tabs: <strong>Installed Packages</strong> (searchable inventory with version numbers and architectures), <strong>Updates Available</strong> (security patches and upgrade candidates with changelogs), <strong>Search & Install</strong> (repository search engine with package descriptions), and <strong>Repository Sources</strong> (view and toggle APT sources or DNF repos).`,
    proTips: [
      '<strong>One-Click Security Updates:</strong> Navigate to the "Updates Available" tab and click "Apply Upgrades" to install security patches safely without memorizing distro commands.',
      '<strong>Distro-Agnostic Operation:</strong> Manage Ubuntu, Debian, Rocky Linux, Fedora, and Arch servers using the exact same visual workflow.',
      '<strong>Clean Package Cache:</strong> Use the "Clean Cache" button to safely run <code>apt-get clean</code> or <code>dnf clean all</code> and free up space in <code>/var/cache/</code>.',
      '<strong>Review Changelogs Before Upgrading:</strong> Click on any package update candidate to view the maintainer changelog and identify potential breaking changes before applying updates.'
    ],
    troubleshooting: [
      {
        q: 'Could not get lock /var/lib/dpkg/lock-frontend',
        a: 'Another package operation (such as unattended-upgrades) is running in the background. Wait a couple of minutes or inspect active package processes in the Process Manager.'
      },
      {
        q: 'Repository signature verification failed',
        a: 'An external repository PGP key has expired or changed. Open the Repository Sources tab to review or update the repository configuration.'
      }
    ]
  },

  'user-sudoers-admin.html': {
    interfaceTour: `The <strong>User & Sudoers Administrator</strong> provides safe, visual account management for Linux servers. The <strong>Users Tab</strong> lists all system and regular users with UID, GID, Primary Group, Login Shell, Home Directory, and Password Status. The <strong>Groups Tab</strong> manages Linux user groups and secondary group memberships. The <strong>Active Sessions Tab</strong> displays currently logged-in TTY/SSH users with IP addresses and login times, allowing instant session termination. The <strong>Sudoers Editor</strong> features Monaco-powered syntax validation with automated <code>visudo</code> testing before saving.`,
    proTips: [
      '<strong>Safe Sudoers Editing:</strong> Never edit <code>/etc/sudoers</code> with plain text editors. SSH Desktop automatically validates the syntax with <code>visudo -c</code> before committing changes to prevent accidental root lockout.',
      '<strong>Visual Authorized Keys Management:</strong> Click "SSH Keys" next to any user to view, add, or revoke SSH public keys without navigating to <code>~/.ssh/authorized_keys</code>.',
      '<strong>Lock Dormant Accounts:</strong> Click "Lock Account" to temporarily disable password login for ex-employees or inactive users without deleting their files.',
      '<strong>Terminate Stale Sessions:</strong> Switch to the Sessions tab to view ghost SSH sessions from dropped Wi-Fi connections and terminate them cleanly with one click.'
    ],
    troubleshooting: [
      {
        q: 'visudo syntax check failed on save',
        a: 'The sudoers rule you typed has a syntax error. SSH Desktop prevents saving corrupted sudoers files to protect you from losing sudo access. Correct the highlighted error and try again.'
      },
      {
        q: 'User cannot login after creation',
        a: 'Ensure a valid login shell (e.g. <code>/bin/bash</code>) is assigned and that either a password is set or an SSH public key is added to their account.'
      }
    ]
  },

  'disk-smart-manager.html': {
    interfaceTour: `The <strong>Disk & S.M.A.R.T. Manager</strong> provides comprehensive storage diagnostics and partition management. The <strong>Overview Tab</strong> visualizes disk usage across mount points with color-coded capacity bars. The <strong>Partitions Tab</strong> displays drive partition tables (GPT/MBR), filesystem types (ext4, xfs, btrfs), and mount options. The <strong>S.M.A.R.T. Tab</strong> shows drive hardware health metrics (drive temperature, power-on hours, reallocated sector counts, wear level indicators). The <strong>Space Hogs Tab</strong> scans remote directories to identify oversized files and folders quickly.`,
    proTips: [
      '<strong>Locate Large Files Instantly:</strong> Switch to the "Space Hogs" tab and click "Scan Directory" to identify gigabyte-sized log archives, docker cache, or forgotten backups without running slow <code>du -sh</code> commands.',
      '<strong>Monitor Disk Temperature:</strong> Regularly check the S.M.A.R.T. tab for server drive temperatures above 50°C to prevent premature SSD/HDD hardware failure.',
      '<strong>Inspect Inode Usage:</strong> If your server reports "No space left on device" despite having free gigabytes, check the Inode Capacity meter to detect millions of tiny session files.',
      '<strong>Safe Mount Management:</strong> View <code>/etc/fstab</code> entries visually and verify UUIDs before rebooting after adding new storage volumes.'
    ],
    troubleshooting: [
      {
        q: 'S.M.A.R.T. data unavailable for virtual disk',
        a: 'Cloud VPS providers (AWS EC2, DigitalOcean, Hetzner, Linode) use virtualized block storage (EBS, Ceph) that does not expose physical S.M.A.R.T. registers to guest operating systems.'
      },
      {
        q: 'Filesystem is mounted as Read-Only (ro)',
        a: 'This typically indicates filesystem corruption detected by the Linux kernel. Review kernel messages in Log Analysis (<code>dmesg | grep -i error</code>) and schedule an <code>fsck</code>.'
      }
    ]
  },

  'crontab-scheduler.html': {
    interfaceTour: `The <strong>Crontab Scheduler</strong> eliminates cron syntax confusion with a visual schedule builder. The top toolbar includes a <strong>User Switcher</strong> (Root vs User Crontabs), <strong>+ New Job</strong>, and <strong>Test Run</strong> buttons. The main jobs table displays cron schedules in plain English (e.g. "Every day at 3:00 AM" instead of <code>0 3 * * *</code>), target commands, execution user, status (Active/Paused), and last run timestamp. An expandable drawer shows the full cron execution log.`,
    proTips: [
      '<strong>Visual Schedule Presets:</strong> Choose common intervals (Hourly, Daily at Midnight, Weekly on Sunday, Monthly) from the dropdown rather than calculating asterisks manually.',
      '<strong>Test Run Commands On-Demand:</strong> Click the "Run Now" play button next to any cron job to execute it immediately and inspect stdout/stderr without waiting for the scheduled time.',
      '<strong>Always Specify Absolute Paths:</strong> Always use full absolute binary paths in cron commands (e.g. <code>/usr/bin/python3</code> instead of <code>python3</code>) because cron runs with a minimal PATH environment.',
      '<strong>Log Output Redirection:</strong> Use the built-in "Log to File" toggle to redirect output to <code>/var/log/myjob.log 2>&amp;1</code> for easy debugging in Log Analysis.'
    ],
    troubleshooting: [
      {
        q: 'Cron job runs manually but fails when scheduled',
        a: 'Cron executes with a stripped environment (minimal PATH and no user aliases). Ensure all scripts use absolute paths and define required environment variables inside the script.'
      },
      {
        q: 'Cron daemon not executing jobs',
        a: 'Verify the cron service is active on the server: <code>sudo systemctl status cron</code> (Ubuntu/Debian) or <code>sudo systemctl status crond</code> (RHEL/CentOS).'
      }
    ]
  },

  'firewall-ufw.html': {
    interfaceTour: `The <strong>Visual Firewall Manager</strong> provides intuitive rule configuration for UFW, Firewalld, and Iptables. The top status banner shows whether the firewall is <strong>Active</strong> or <strong>Inactive</strong> and the default incoming/outgoing policies. The <strong>Rules Tab</strong> lists all active rules with Rule ID, Protocol (TCP/UDP), Direction (In/Out), Action (Allow/Deny/Reject), Port/Service, Source IP/Subnet, and a Delete button. The <strong>Listening Ports Tab</strong> displays open server ports and lets you open firewall rules with a single click. The <strong>Banned IPs Tab</strong> integrates with Fail2ban to unban blocked IP addresses.`,
    proTips: [
      '<strong>Built-In SSH Lockout Protection:</strong> SSH Desktop includes automated safeguards that prevent disabling port 22 or locking yourself out of your current connection while editing firewall rules.',
      '<strong>Restrict by IP Whitelist:</strong> Lock down sensitive ports (SSH 22, Database 5432) to only your office or VPN IP address by setting the Source IP in the Add Rule dialog.',
      '<strong>Enable Rate Limiting:</strong> Use the "Limit" action instead of "Allow" for SSH port 22 to block IP addresses that attempt more than 6 connections in 30 seconds.',
      '<strong>One-Click Service Presets:</strong> Select popular service presets (HTTP, HTTPS, SSH, MySQL, PostgreSQL, WireGuard) to auto-fill port and protocol numbers accurately.'
    ],
    troubleshooting: [
      {
        q: 'Rules added but ports still blocked externally',
        a: 'If your server is hosted on a cloud provider (AWS, Google Cloud, Azure, Oracle), ensure the cloud provider\'s Security Group / Virtual Firewall also permits the inbound port.'
      },
      {
        q: 'Fail2ban banned your own IP address',
        a: 'Switch to the "Banned IPs" tab, locate your public IP address in the jail list, and click "Unban IP". Add your IP to <code>/etc/fail2ban/jail.local</code> ignoreip list to prevent re-bans.'
      }
    ]
  },

  'network-port-auditor.html': {
    interfaceTour: `The <strong>Network & Port Auditor</strong> provides comprehensive network visibility. The <strong>Listening Ports Tab</strong> lists every open TCP and UDP listening socket, showing Port Number, Bind Address (0.0.0.0 vs 127.0.0.1), Protocol, Process Name, and Process PID. The <strong>Active Connections Tab</strong> displays real-time established TCP connections with foreign IP addresses and connection states (ESTABLISHED, TIME_WAIT, CLOSE_WAIT). The <strong>Interfaces Tab</strong> displays network adapters (eth0, ens3, docker0, wg0), IP addresses, MAC addresses, MTU, and RX/TX packet counters.`,
    proTips: [
      '<strong>Identify Rogue Listening Ports:</strong> Scan the Listening Ports tab regularly to detect unauthenticated services accidentally listening on public <code>0.0.0.0</code> instead of local <code>127.0.0.1</code>.',
      '<strong>Pinpoint Process by Port:</strong> Click on any listening port entry to jump directly to its process in the Process Manager or terminate it with one click.',
      '<strong>Inspect Public vs Private Binds:</strong> Green badges indicate safe localhost-only bindings (127.0.0.1); yellow badges indicate public network interfaces (0.0.0.0 or ::).',
      '<strong>Real-Time Bandwidth by Interface:</strong> Monitor the Interfaces tab during high-traffic events to see if bandwidth limits are being reached on primary physical adapters.'
    ],
    troubleshooting: [
      {
        q: 'Cannot determine process name for port',
        a: 'Processes owned by root (or other system users) require sudo permissions to inspect their listening sockets. Ensure you connect with sudo privileges to view all PIDs.'
      }
    ]
  },

  'ssl-certificates.html': {
    interfaceTour: `The <strong>SSL/TLS Certificate Manager</strong> tracks website certificates and simplifies Let\'s Encrypt / Certbot management. The <strong>Certificates Inventory</strong> lists all installed certificates, domain names (SANs), Issuer (Let\'s Encrypt, DigiCert, Cloudflare), Expiration Date, and an Expiration Countdown badge (Green = Healthy, Yellow = Expiring Soon, Red = Expired). The <strong>Issue Certificate Tab</strong> provides a visual form to request new Let\'s Encrypt certificates with HTTP-01 or DNS-01 challenges. The <strong>Diagnostics Tab</strong> tests live SSL handshakes and verifies TLS cipher suites.`,
    proTips: [
      '<strong>Automated Web Server Reload:</strong> When issuing or renewing certificates through the UI, SSH Desktop automatically tests web server configs (<code>nginx -t</code>) and reloads the server safely.',
      '<strong>Multi-Domain SANs:</strong> Enter comma-separated domain names (e.g. <code>example.com, www.example.com, api.example.com</code>) to combine multiple hostnames into a single certificate.',
      '<strong>Wildcard Certificates via DNS:</strong> Select the DNS-01 challenge mode to generate wildcard certificates (<code>*.example.com</code>) without exposing port 80 to the public web.',
      '<strong>Expiration Alerts:</strong> Badges turn yellow at 30 days remaining and red at 7 days remaining, providing ample warning before certificates expire and cause browser errors.'
    ],
    troubleshooting: [
      {
        q: 'Let\'s Encrypt challenge failed (404 Not Found)',
        a: 'Ensure domain DNS records point correctly to your server\'s public IP and that port 80 (HTTP) is open in your firewall so ACME verification requests can reach your server.'
      },
      {
        q: 'Certbot rate limit reached',
        a: 'Let\'s Encrypt limits certificate issuance to 5 identical certificates per week. Use the "Staging Environment" toggle in settings to test issuing configurations without burning rate limits.'
      }
    ]
  },

  'security-audit-lynis.html': {
    interfaceTour: `The <strong>Security & Lynis Auditor</strong> runs automated system hardening scans on your Linux servers. The top dashboard displays your overall <strong>Hardening Index Score</strong> (e.g. 78/100) and scan timestamp. The main results view categorizes findings into <strong>Warnings</strong> (high-risk vulnerabilities), <strong>Suggestions</strong> (recommended hardening steps), and <strong>Tests Passed</strong>. Clicking any finding expands a detailed explanation, related config files, and the official CIS benchmark remediation recommendation.`,
    proTips: [
      '<strong>Run Regular Weekly Scans:</strong> Schedule an automated Lynis audit once a week to catch newly introduced vulnerabilities after software updates or configuration changes.',
      '<strong>Harden SSH Daemon:</strong> Follow Lynis suggestions to disable root SSH password login, enforce public key authentication, and set idle timeout intervals in <code>sshd_config</code>.',
      '<strong>Inspect SUID/SGID Binaries:</strong> Switch to the SUID tab to review binaries with elevated execution privileges and detect unauthorized privilege escalation vectors.',
      '<strong>Export PDF & CSV Audit Reports:</strong> Generate professional compliance audit reports to share with clients or security review teams.'
    ],
    troubleshooting: [
      {
        q: 'Lynis package not installed on remote server',
        a: 'Click "Install Lynis" on the initial screen to automatically install the latest audited Lynis release via your server\'s native package manager (APT, DNF, or Pacman).'
      }
    ]
  },

  'env-variables-manager.html': {
    interfaceTour: `The <strong>Environment Variables & Secrets Manager</strong> organizes environment configurations safely. The left sidebar lists discovered application <code>.env</code> files across your project directories as well as system-wide environment files (<code>/etc/environment</code>). The main table displays Key-Value pairs with inline <strong>Mask/Reveal Toggles</strong> (••••••••) for passwords and API tokens. The top toolbar provides <strong>Add Variable</strong>, <strong>Validate Syntax</strong>, <strong>Import/Export</strong>, and <strong>Save Changes</strong>.`,
    proTips: [
      '<strong>Masked Secrets Protection:</strong> Sensitive variables (e.g. <code>DB_PASSWORD</code>, <code>AWS_SECRET_KEY</code>, <code>STRIPE_TOKEN</code>) are masked automatically to prevent shoulder-surfing and accidental stream leaks.',
      '<strong>Visual PATH Editor:</strong> Edit the system or user <code>$PATH</code> variable with a tokenized drag-and-drop list instead of dealing with error-prone colon-separated strings.',
      '<strong>Syntax Validation on Save:</strong> SSH Desktop validates quotes, escaped characters, and newline syntax before writing changes to prevent application startup crashes.',
      '<strong>Keep Local Backups:</strong> Use the "Backup .env" button before making major changes to keep a dated snapshot in case an environment variable change needs to be rolled back.'
    ],
    troubleshooting: [
      {
        q: 'Application does not recognize updated environment variables',
        a: 'Running processes do not automatically reload environment changes. Restart your application process, Docker container, or systemd service after editing environment files.'
      }
    ]
  },

  'backup-disaster-recovery.html': {
    interfaceTour: `The <strong>Backup & Disaster Recovery Hub</strong> provides automated, incremental server backup workflows. The <strong>Backup Jobs Tab</strong> lists scheduled and manual backup profiles with source directories, destination storage (local disk, attached volume, or remote SSH host), compression type (Zstandard, Gzip, Tar), and last execution status. The <strong>Snapshots Tab</strong> displays historical backup archives with date, size, file count, and one-click <strong>Restore</strong> and <strong>Verify Integrity</strong> buttons. An interactive log drawer streams rsync and tar progress in real time.`,
    proTips: [
      '<strong>Fast Zstandard Compression:</strong> Select Zstandard (zstd) compression for up to 5x faster backup creation and higher compression ratios compared to legacy gzip.',
      '<strong>Automated Database Dumps:</strong> Enable the "Include Database Dump" checkbox to automatically export clean PostgreSQL or MySQL SQL dumps into your backup archive before compressing files.',
      '<strong>Differential Rsync Snapshots:</strong> Use differential mode to only transfer changed file blocks, reducing backup execution time from hours to seconds on multi-gigabyte sites.',
      '<strong>Test Restores Periodically:</strong> Click "Verify Integrity" on any snapshot to test the archive checksum and verify that files can be restored cleanly in an emergency.'
    ],
    troubleshooting: [
      {
        q: 'Backup failed: Disk space low on destination',
        a: 'Configure the "Retention Policy" in the backup job settings to automatically purge snapshots older than 14 or 30 days to maintain free disk capacity.'
      },
      {
        q: 'Database dump timeout on huge tables',
        a: 'Increase the "Dump Timeout" parameter in the database backup settings or exclude non-critical caching tables from the automated export.'
      }
    ]
  },

  'webhook-server.html': {
    interfaceTour: `The <strong>Webhook Deployment Server</strong> lets you automate deployments on git push without complex CI/CD pipelines. The main dashboard lists active webhook listener endpoints with unique URLs, assigned branch triggers (e.g. <code>main</code>, <code>production</code>), execution scripts, and status toggles. The <strong>History Drawer</strong> shows incoming webhook event payloads from GitHub, GitLab, or Bitbucket, verification status, and real-time bash build execution logs.`,
    proTips: [
      '<strong>HMAC-SHA256 Signature Verification:</strong> Always configure a Secret Token in your GitHub/GitLab webhook settings and SSH Desktop to ensure only authentic git push events trigger build scripts.',
      '<strong>Zero CI/CD Server Overhead:</strong> Replace memory-heavy Jenkins or GitLab Runner daemons with lightweight, event-driven deployment scripts that execute in milliseconds.',
      '<strong>Branch-Specific Deployments:</strong> Configure distinct webhook endpoints to deploy staging code when commits land on the <code>staging</code> branch and production code on <code>main</code>.',
      '<strong>Inspect Deployment Logs:</strong> Click any past webhook delivery event to view the full terminal build output and diagnose failed npm or pip installation steps.'
    ],
    troubleshooting: [
      {
        q: 'Webhook receives 401 Unauthorized',
        a: 'Ensure the secret token configured in your GitHub/GitLab webhook settings matches the secret configured in SSH Desktop Webhook listener.'
      },
      {
        q: 'Git pull fails with merge conflict',
        a: 'Ensure the deployment script uses <code>git fetch && git reset --hard origin/main</code> if you want the server working copy to always match remote git head exactly.'
      }
    ]
  },

  'multi-server-snippets.html': {
    interfaceTour: `The <strong>Multi-Server Automation Hub</strong> allows executing shell snippets across dozens of servers simultaneously. The left sidebar houses your categorized <strong>Bash Snippet Library</strong> (Deployment, Maintenance, Diagnostics, Security). The center area features a parameterized script editor with variable placeholders (e.g. <code>{{PORT}}</code>, <code>{{DOMAIN}}</code>). The bottom <strong>Target Fleet Selector</strong> lets you select multiple servers or tag groups. Clicking <strong>Execute on Fleet</strong> opens an aggregated split-screen terminal showing parallel execution output.`,
    proTips: [
      '<strong>Parameter Templates:</strong> Use double-curly syntax (<code>{{VARIABLE}}</code>) to prompt for interactive input before executing snippets on your fleet.',
      '<strong>Fleet Health Checks:</strong> Create a diagnostic snippet (e.g. checking uptime, disk usage, and failed services) and run it across all production servers in 2 seconds.',
      '<strong>Stop on First Error:</strong> Enable the "Halt on Error" toggle to prevent a multi-step snippet from executing subsequent commands on a server if an earlier command exits with a non-zero code.',
      '<strong>Export Aggregated Logs:</strong> Save the combined execution output of all servers to a timestamped Markdown or text file for compliance reporting.'
    ],
    troubleshooting: [
      {
        q: 'Snippet hangs on one unreachable server',
        a: 'SSH Desktop enforces a per-server connection timeout (default 10s). You can adjust this timeout in Automation Settings to skip unreachable servers faster.'
      }
    ]
  },

  'log-analysis-grep.html': {
    interfaceTour: `The <strong>Remote Log Analysis & Grep Engine</strong> streams and analyzes log files at gigabit speed. The left sidebar provides quick shortcuts to common log destinations (<code>/var/log/syslog</code>, <code>/var/log/nginx/access.log</code>, <code>/var/log/nginx/error.log</code>, <code>/var/log/auth.log</code>, Docker container logs). The top toolbar features a <strong>Real-Time Regex Filter Bar</strong>, <strong>Severity Filter Buttons</strong> (All, Errors, Warnings, Info), <strong>Pause/Resume Stream</strong>, and <strong>Clear Buffer</strong>. The main log viewer color-codes timestamps, IP addresses, HTTP status codes, and stack traces.`,
    proTips: [
      '<strong>High-Speed Regex Filtering:</strong> Type regular expressions directly in the search bar (e.g. <code>status=(500|502)</code> or <code>Failed password</code>) to filter through millions of lines in milliseconds.',
      '<strong>Live Tail with Pause:</strong> Click "Pause Stream" while troubleshooting an active issue to freeze the screen and inspect error details without new incoming log entries scrolling past.',
      '<strong>Highlight Keywords:</strong> Add custom highlight keywords (e.g. <code>FATAL</code>, <code>CRITICAL</code>, <code>Exception</code>) with custom background colors for instant visual alerting.',
      '<strong>Export Filtered Logs:</strong> Filter down to a specific customer incident and click "Export Filtered" to save an error report as a CSV or text file.'
    ],
    troubleshooting: [
      {
        q: 'Cannot read /var/log/auth.log: Permission denied',
        a: 'Security logs on Debian/Ubuntu are restricted to root or the <code>adm</code> group. Add your SSH user to the adm group (<code>sudo usermod -aG adm $USER</code>) or connect with sudo privileges.'
      }
    ]
  },

  'reverse-proxy-browser.html': {
    interfaceTour: `The <strong>Reverse Proxy Browser</strong> provides visual virtual host management for Nginx, Caddy, and Apache. The main table lists all configured virtual hosts and server blocks with Domain Name, Upstream Port (e.g. <code>http://127.0.0.1:3000</code>), SSL Status, WebSocket Support, and an Active/Inactive toggle. Clicking any site opens a visual configuration panel with tabs for <strong>General Routing</strong>, <strong>SSL/TLS Settings</strong>, <strong>Custom Headers & CORS</strong>, <strong>Rate Limiting</strong>, and <strong>Raw Config Editor</strong>.`,
    proTips: [
      '<strong>Automated Syntax Check:</strong> Before applying any changes, SSH Desktop automatically runs <code>nginx -t</code>. If a syntax error is detected, the change is safely aborted to keep your live websites online.',
      '<strong>One-Click WebSocket Proxy:</strong> Toggle "Enable WebSockets" on any upstream route to automatically configure required <code>Upgrade</code> and <code>Connection</code> proxy headers for Socket.io or WS apps.',
      '<strong>Add Security Headers:</strong> Enable the "Standard Security Headers" checkbox to inject HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy headers instantly.',
      '<strong>Test Upstream Availability:</strong> Click the "Ping Upstream" button to verify that your local backend application (e.g. Node.js, Python, Go) is actually listening on the target port before routing traffic.'
    ],
    troubleshooting: [
      {
        q: 'Nginx fails to reload after saving site',
        a: 'SSH Desktop automatically rolls back invalid configs. Open the Raw Config tab to review syntax errors highlighted by the integrated <code>nginx -t</code> validator.'
      },
      {
        q: '502 Bad Gateway when browsing domain',
        a: 'The upstream application service is not running on the configured port. Check the service status in Systemd Services or Docker Hub to ensure the backend is active.'
      }
    ]
  },

  'api-studio.html': {
    interfaceTour: `The <strong>API Studio</strong> is a built-in Postman and Insomnia alternative for testing private backend APIs directly over SSH. The top request bar includes an <strong>HTTP Method Selector</strong> (GET, POST, PUT, PATCH, DELETE, OPTIONS), an <strong>URL input</strong> (supports <code>http://localhost:3000/api/...</code>), and a <strong>Send</strong> button. Tabs beneath the request bar configure <strong>Query Params</strong>, <strong>Headers</strong>, <strong>Body</strong> (JSON, Form Data, GraphQL, Raw), and <strong>Auth</strong> (Bearer Token, Basic Auth). The response viewer on the right displays HTTP status codes, response time in ms, response body with JSON syntax highlighting, and response headers.`,
    proTips: [
      '<strong>Direct Localhost Access:</strong> Test internal microservices running on <code>http://127.0.0.1:8080</code> without deploying ngrok tunnels or exposing unauthenticated development ports to the public internet.',
      '<strong>Auto-Formatted JSON Response:</strong> Responses are automatically parsed, indented, and color-coded with collapsible JSON tree nodes for easy inspection.',
      '<strong>Generate cURL & Fetch Snippets:</strong> Click the "Code Snippet" button to copy ready-to-run cURL, Python requests, or JavaScript fetch code based on your current request.',
      '<strong>Request History & Collections:</strong> Save frequent API requests into organized workspace collections to share across your development team.'
    ],
    troubleshooting: [
      {
        q: 'Request timeout: ECONNREFUSED 127.0.0.1:3000',
        a: 'Ensure the backend server application is actively running on port 3000 on the remote host by checking the Listening Ports tab in Network Auditor.'
      },
      {
        q: 'CORS errors on API responses',
        a: 'CORS only applies to browser environments. API Studio executes requests from the native Rust client directly over the SSH tunnel, completely bypassing browser CORS restrictions.'
      }
    ]
  },
  'installation.html': {
    interfaceTour: `The <strong>Installation & Setup Window</strong> confirms that native OS webview runtimes and hardware acceleration are available. On first launch, it offers a quick setup wizard allowing you to select your preferred desktop theme (macOS Dark, Midnight OLED, or Tokyo Night), import existing SSH hosts from <code>~/.ssh/config</code>, and configure default terminal typography.`,
    proTips: [
      "<strong>Portable Mode for USB Drives:</strong> The Windows standalone portable executable stores preferences in its local directory when a <code>portable.dat</code> file is present.",
      "<strong>Linux Desktop Integration:</strong> Installing the <code>.deb</code> or <code>.rpm</code> automatically creates desktop launcher shortcuts and registers the <code>ssh://</code> URL protocol handler.",
      "<strong>Apple Silicon Optimization:</strong> The macOS Universal binary executes natively on M1, M2, M3, and M4 Apple Silicon with zero Rosetta 2 translation overhead."
],
    troubleshooting: [
      {
            "q": "macOS Gatekeeper warning: \"App cannot be opened\"",
            "a": "Right-click the SSH Desktop app in Finder, select Open, and click Open in the confirmation modal. This approves the application signature in macOS security settings."
      },
      {
            "q": "Windows: Missing WebView2 runtime error",
            "a": "Windows 10 installations without the evergreen Microsoft Edge WebView2 runtime can install it directly via Microsoft's official Evergreen Bootstrapper installer."
      }
]
  },

  'connection-manager.html': {
    interfaceTour: `The <strong>Connection Manager Window</strong> displays a left sidebar with tag groups (All Servers, Production, Staging, Favorites, Jump Hosts). The main panel presents server profile cards with status indicators (Green = Reachable, Red = Unreachable), IP addresses, assigned usernames, and quick action buttons (Connect, Edit, Duplicate, Delete). The top search bar filters across hundreds of servers instantly by name, tag, or IP.`,
    proTips: [
      "<strong>Always Prefer Ed25519 Keys:</strong> Generate Ed25519 keys with <code>ssh-keygen -t ed25519</code> for maximum security and faster connection handshakes.",
      "<strong>Organize by Tags:</strong> Use tags like <code>aws</code>, <code>prod</code>, <code>database</code> to quickly filter servers in Spotlight (<kbd>Cmd+K</kbd>).",
      "<strong>Duplicate Profiles for Testing:</strong> Right-click any existing profile and select Duplicate to quickly clone settings for a staging replica."
],
    troubleshooting: [
      {
            "q": "Permission denied (publickey) on connect",
            "a": "Verify that your public key has been appended to <code>~/.ssh/authorized_keys</code> on the remote server and that file permissions are set to 600."
      },
      {
            "q": "Host key verification failed warning",
            "a": "This occurs when a server was reinstalled and has a new host key. Click \"Update Host Fingerprint\" in the security alert modal to accept the new fingerprint safely."
      }
]
  },

  'settings-preferences.html': {
    interfaceTour: `The <strong>Preferences Modal</strong> is organized into 5 intuitive tabs: <strong>General</strong> (startup behavior, window snapping, auto-reconnect), <strong>Appearance</strong> (themes, window translucency, dock icon magnification), <strong>Terminal</strong> (font family, font size, cursor style, scrollback lines), <strong>Network &amp; SSH</strong> (default ports, keep-alive intervals, cipher suites), and <strong>Security</strong> (credential vault, auto-lock timer).`,
    proTips: [
      "<strong>Increase Scrollback Buffer:</strong> Increase terminal scrollback lines from 5,000 to 20,000 in Terminal settings if you frequently inspect lengthy compilation or deployment logs.",
      "<strong>Auto-Reconnect Watchdog:</strong> Enable \"Automatic Reconnect on Network Resume\" so SSH Desktop restores your server sessions seamlessly when waking your laptop from sleep.",
      "<strong>Cursor Customization:</strong> Choose between Block, Underline, and Bar cursor styles with optional blinking in the Terminal preferences."
],
    troubleshooting: [
      {
            "q": "Custom font not appearing in font dropdown",
            "a": "Ensure the font is installed in your operating system's font manager (Font Book on macOS, Fonts in Windows Settings) and restart SSH Desktop to refresh available system fonts."
      }
]
  },

  'faq.html': {
    interfaceTour: `The <strong>FAQ & Knowledge Base</strong> categorizes questions into 5 primary topics: <strong>Architecture & Agentless Design</strong>, <strong>Security & Key Storage</strong>, <strong>Supported Distros & Requirements</strong>, <strong>Desktop vs Web Mode</strong>, and <strong>Licensing & Open Source</strong>. Each question expands to provide direct technical answers and links to related application user guides.`,
    proTips: [
      "<strong>Use Search:</strong> Press <kbd>Cmd/Ctrl + F</kbd> to search across the entire FAQ for specific keywords like \"root\", \"firewall\", or \"docker\".",
      "<strong>Bookmark Cheatsheets:</strong> Refer to the individual app documentation guides for in-depth step-by-step tutorials on each native feature."
],
    troubleshooting: [
      {
            "q": "Have a question not listed here?",
            "a": "Visit our official GitHub community at github.com/sshdesktop/sshdesktop to ask questions, report issues, or propose new features."
      }
]
  },

  'keyboard-shortcuts.html': {
    interfaceTour: `The <strong>Shortcuts Cheat Sheet</strong> is searchable by application category (Shell, Terminal, Editor, SFTP, Docker, System). Clicking any shortcut lets you copy the key sequence or inspect related productivity tips.`,
    proTips: [
      "<strong>Spotlight Launcher Mastery:</strong> Type <code>>docker</code> or <code>>nginx</code> in Spotlight (<kbd>Cmd+K</kbd>) to launch specific tabs directly.",
      "<strong>Copy on Mouse Selection:</strong> Terminal automatically copies highlighted text to your clipboard without pressing any shortcut keys.",
      "<strong>Mac vs Windows Key Parity:</strong> On macOS, shortcuts use <kbd>Cmd (⌘)</kbd>; on Windows and Linux, the identical shortcuts use <kbd>Ctrl</kbd>."
],
    troubleshooting: [
      {
            "q": "Shortcut conflict with local operating system hotkeys",
            "a": "If a shortcut (such as Cmd+D or Ctrl+W) conflicts with your host OS window manager, customize keybindings in Preferences &rarr; Keybindings."
      }
]
  },

  'raspberry-pi-desktop.html': {
    interfaceTour: `The <strong>Raspberry Pi Workspace</strong> includes dedicated telemetry widgets showing ARM CPU frequency, SoC temperature, swap activity, and MicroSD card wear. The SFTP file manager provides quick bookmarks to <code>/boot/firmware/</code> and <code>/var/log/</code> for rapid homelab debugging.`,
    proTips: [
      "<strong>Assign Static DHCP Leases:</strong> Set a static IP reservation in your home router for your Pi to prevent IP address changes upon reboot.",
      "<strong>Use NVMe or USB 3.0 SSD:</strong> Booting Pi 4 or Pi 5 from an external SSD drastically improves disk I/O and speeds up Docker container launches.",
      "<strong>Monitor Thermal Throttling:</strong> If the temperature gauge turns yellow (>70°C), consider adding an active cooling fan to avoid CPU downclocking."
],
    troubleshooting: [
      {
            "q": "Cannot resolve hostname \"raspberrypi.local\"",
            "a": "Ensure your computer is on the same local subnet as the Pi. If mDNS resolution fails, find the Pi's IP address using your router admin page or <code>nmap -sn 192.168.1.0/24</code>."
      },
      {
            "q": "Connection timed out on first boot",
            "a": "Allow 60-90 seconds for Raspberry Pi OS to expand the filesystem and complete initial cloud-init setup before connecting."
      }
]
  },

  'troubleshooting.html': {
    interfaceTour: `The <strong>Connection Diagnostics Drawer</strong> displays verbose handshake logs during connection attempts. It shows the negotiated cipher suite, key exchange algorithm, public key authentication attempts, and raw server banner responses.`,
    proTips: [
      "<strong>Inspect Cloud Security Groups:</strong> On AWS, Google Cloud, Azure, and Oracle Cloud, ensure the cloud provider's Virtual Firewall / Security Group allows inbound traffic on port 22.",
      "<strong>Check Fail2ban Status:</strong> If you entered the wrong password multiple times, Fail2ban may have temporarily jailed your IP address. Unban yourself via the cloud console or a VPN connection."
],
    troubleshooting: [
      {
            "q": "Connection timed out with no response",
            "a": "A timeout means packets are being silently dropped by an upstream network firewall or the server IP is unreachable. Verify your server's public IP and internet routing."
      }
]
  },

  'rdp-over-ssh.html': {
    interfaceTour: `The <strong>Tunnel Canvas</strong> displays active tunnels with live visual traffic flow meters. Clicking the RDP tunnel card reveals connection counts, packet latency, and an Auto-Reconnect toggle that keeps the RDP tunnel alive during Wi-Fi drops.`,
    proTips: [
      "<strong>Use High Port for Multiple Desktops:</strong> If tunneling to multiple Windows machines, assign distinct local ports like <code>13389</code>, <code>23389</code>, and <code>33389</code>.",
      "<strong>Enable Network Level Authentication (NLA):</strong> Keep NLA enabled in Windows for dual-layer authentication (SSH key first, then Windows credentials).",
      "<strong>Auto-Start Tunnels:</strong> Toggle \"Auto-Start on Connection\" so your RDP tunnel initializes automatically whenever you connect to your server profile."
],
    troubleshooting: [
      {
            "q": "Local port 3389 already in use on Windows client",
            "a": "If your local PC is running Windows Pro, its local RDP service is already using port 3389. Simply set the Local Port to <code>13389</code> in SSH Desktop and connect Microsoft Remote Desktop to <code>127.0.0.1:13389</code>."
      }
]
  },

  'aws-ec2-guide.html': {
    interfaceTour: `The <strong>AWS Cloud Workspace</strong> organizes EC2 instances with visual region badges (us-east-1, eu-central-1, ap-southeast-1). Quick action cards allow launching interactive bash shells, inspecting Docker containers, and managing systemd services agentlessly.`,
    proTips: [
      "<strong>Use Elastic IPs:</strong> Standard EC2 public IPv4 addresses change whenever an instance is stopped and restarted. Attach an Elastic IP to keep a permanent static IP address.",
      "<strong>Protect .pem Key Permissions:</strong> Ensure your <code>.pem</code> file is protected locally: <code>chmod 400 ~/.ssh/my-aws-key.pem</code>.",
      "<strong>Tag by Environment:</strong> Use tags like <code>aws-prod</code> and <code>aws-staging</code> to filter instances instantly in Spotlight (<kbd>Cmd+K</kbd>)."
],
    troubleshooting: [
      {
            "q": "Connection timed out to EC2 instance",
            "a": "A timeout almost always indicates an AWS Security Group misconfiguration. Verify that your Security Group's Inbound Rules allow port 22 from your current public IP address."
      },
      {
            "q": "Please login as the user \"ubuntu\" rather than the user \"root\"",
            "a": "AWS AMIs disable direct root login by default. Connect using the AMI's default user (e.g. <code>ubuntu</code> or <code>ec2-user</code>) and use <code>sudo</code> for elevated commands."
      }
]
  },

  'cloud-vps-guide.html': {
    interfaceTour: `The <strong>Cloud Inventory Hub</strong> visualizes server locations and cloud providers with custom badges. Hovering over any server profile displays live uptime, CPU utilization, and connection latency in milliseconds.`,
    proTips: [
      "<strong>Hetzner Cloud Cost Efficiency:</strong> Combine high-performance Hetzner Cloud CPX/CX servers with SSH Desktop for top-tier performance at a fraction of hyperscaler costs.",
      "<strong>Standardize sudo User Accounts:</strong> Create a consistent admin user (e.g. <code>deployer</code>) across all cloud VPS instances using the User & Sudoers Administrator app.",
      "<strong>Monitor Ping Latency:</strong> Use the Network Auditor app to test real-world ping and packet latency between your cloud nodes."
],
    troubleshooting: [
      {
            "q": "Cloud VPS provider requires password reset on first login",
            "a": "If you provisioned a VPS with a temporary root password, connect once via password auth in SSH Desktop; the terminal prompts you to set your new permanent password immediately."
      }
]
  },

  'tutorials.html': {
    interfaceTour: `The <strong>Tutorials Portal</strong> organizes guides by difficulty and topic (Beginner, Intermediate, Advanced). Each tutorial includes visual screenshots, prerequisites, copy-paste snippets, and pro-tips.`,
    proTips: [
      "<strong>Follow Sequentially:</strong> Beginners should complete the Fresh Server Setup and Docker tutorials first to establish a solid foundation.",
      "<strong>Test in Homelab / Staging:</strong> Practice new workflows on a staging VPS or Raspberry Pi before applying changes to production servers."
],
    troubleshooting: [
      {
            "q": "Step fails due to missing package on server",
            "a": "Ensure prerequisite software (such as Docker, Nginx, or UFW) is installed on your Linux host via the Package Manager app before following specific tutorials."
      }
]
  },

  'quickstart.html': {
    interfaceTour: `The <strong>Quickstart Welcome Interface</strong> introduces the desktop layout: Dock at the bottom, top menu bar with server switcher, and the central workspace for floating, snapping windows.`,
    proTips: [
      "<strong>Pin Favorite Apps:</strong> Drag frequently used applications to the front of the Dock for instant access upon connecting.",
      "<strong>Multi-Server Switching:</strong> Connect to multiple servers simultaneously and switch between them using the top-left menu bar."
],
    troubleshooting: [
      {
            "q": "Cannot find where my SSH private keys are located",
            "a": "Standard OpenSSH keys are stored in <code>~/.ssh/</code> (or <code>C:\\Users\\Username\\.ssh\\</code> on Windows). Click \"Browse\" in the connection modal to select your key."
      }
]
  },

  'cheat-sheet.html': {
    interfaceTour: `The <strong>Cheat Sheet View</strong> provides one-click copy buttons for every command block and quick cross-links to visual GUI tools in SSH Desktop.`,
    proTips: [
      "<strong>Use Bastion Directives:</strong> Add <code>ProxyJump jump-server</code> to your <code>~/.ssh/config</code> for permanent multi-hop routing.",
      "<strong>Test Configs Before Reload:</strong> Always run <code>nginx -t</code> or <code>visudo -c</code> before reloading system services."
],
    troubleshooting: [
      {
            "q": "Permission denied (publickey) despite key copied",
            "a": "Check <code>/var/log/auth.log</code> or run <code>sudo journalctl -u ssh</code> on the server to see why sshd rejected the key (often due to loose directory permissions on the home folder)."
      }
]
  },

  'security-model.html': {
    interfaceTour: `The <strong>Security & Compliance Overview</strong> provides verification checklists for CIS benchmarks, SSH daemon hardening recommendations, and credential vault status.`,
    proTips: [
      "<strong>Disable Password Authentication:</strong> Set <code>PasswordAuthentication no</code> in <code>/etc/ssh/sshd_config</code> to enforce cryptographic key logins.",
      "<strong>Rotate Keys Periodically:</strong> Generate fresh Ed25519 keys every 6 to 12 months for sensitive production servers."
],
    troubleshooting: [
      {
            "q": "Does SSH Desktop collect any anonymous telemetry?",
            "a": "No. SSH Desktop has zero tracking code, zero Google Analytics, zero telemetry beacons, and zero phone-home servers. It is 100% private."
      }
]
  },

};
