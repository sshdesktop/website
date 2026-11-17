// scripts/build_comprehensive_docs.js
// Master metadata definition for all 28 documentation chapters and categories.

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// All 28 Chapters Definition in Sequential Order
const chapters = [
  {
    slug: 'getting-started.html',
    title: 'Getting Started & SSH Keys',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '🚀',
    seoTitle: 'Getting Started with SSH Desktop - Installation & SSH Key Guide',
    description: 'Learn how to install SSH Desktop on macOS, Windows, or Linux, configure SSH key pairs (Ed25519, RSA), import ~/.ssh/config, and connect to remote servers.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src-tauri/src/main.rs',
    githubLabel: 'src-tauri/src/main.rs',
    screenshot: 'screenshot-sonoma',
    replaces: 'PuTTY, Termius, manual ssh CLI configs',
    commands: 'ssh-keygen, ssh-copy-id, ~/.ssh/config parser',
    summary: 'Complete setup guide: install native binaries, generate Ed25519 keys, import existing OpenSSH config files, and connect to your first Linux server.'
  },
  {
    slug: 'architecture.html',
    title: 'Architecture & Security Model',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '🏗️',
    seoTitle: 'Architecture & Zero-Agent Security Model - SSH Desktop Docs',
    description: 'Explore the high-performance Rust Tauri 2.0 and React 19 architecture of SSH Desktop. Learn how zero-agent SSH protocol multiplexing ensures 100% security.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src-tauri',
    githubLabel: 'src-tauri',
    screenshot: 'screenshot-terminal',
    replaces: 'Heavy daemon agents (Portainer Agent, Webmin daemon, Cockpit-ws)',
    commands: 'libssh2 / russh asynchronous multiplexing, OS Keychain DPAPI',
    summary: 'Deep-dive into Rust Tauri 2.0 and React 19 architecture: zero-agent security, memory safety, hardware acceleration, and encrypted stream multiplexing.'
  },
  {
    slug: 'web-mode.html',
    title: 'Web Mode & Headless Daemon',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '🌐',
    seoTitle: 'Web Mode & Headless Daemon Setup - SSH Desktop Docs',
    description: 'Deploy SSH Desktop as a lightweight headless daemon on any Linux VPS using our 1-line script. Access your cloud desktop from any web browser securely.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/install.sh',
    githubLabel: 'install.sh',
    screenshot: 'screenshot-sonoma',
    replaces: 'cPanel, Cockpit, Guacamole, Cloud Commander',
    commands: 'curl -fsSL install.sh, systemctl start sshdesktop, Nginx reverse proxy',
    summary: 'Deploy SSH Desktop on a remote VPS via a 30-second bash installer. Access your full cloud desktop GUI from any browser with WebSockets.'
  },
  {
    slug: 'cloud-desktop.html',
    title: 'macOS Sonoma Desktop Shell',
    category: '25 Native Apps: Desktop & Terminal',
    catSlug: 'desktop',
    icon: '🖥️',
    seoTitle: 'macOS Sonoma Cloud Desktop Shell - SSH Desktop Docs',
    description: 'Master the macOS Sonoma-inspired cloud desktop interface: window snapping, launchpad, top menu bar, Spotlight launcher (Cmd+K), and workspace management.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/App.tsx',
    githubLabel: 'src/App.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Messy multi-window terminal clutter, tmux complex keybindings',
    commands: 'React 19 Window Manager, CSS Grid snapping, Canvas wallpaper engine',
    summary: 'Transform headless Linux servers into a familiar macOS Sonoma visual desktop with floating windows, snapping dock, Spotlight search, and multi-server switcher.'
  },
  {
    slug: 'terminal.html',
    title: 'Interactive PTY Terminal (Xterm.js)',
    category: '25 Native Apps: Desktop & Terminal',
    catSlug: 'desktop',
    icon: '⌨️',
    seoTitle: 'Interactive PTY Terminal (Xterm.js) - SSH Desktop Docs',
    description: 'High-performance hardware-accelerated terminal emulator with WebGL rendering, split panes, tabs, font ligatures, 24-bit TrueColor, and session persistence.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/terminal',
    githubLabel: 'src/apps/terminal',
    screenshot: 'screenshot-terminal',
    replaces: 'PuTTY, iTerm2, Alacritty, Kitty, Windows Terminal',
    commands: 'pty::openpty(), Xterm.js WebGL addon, UTF-8 streaming',
    summary: 'Hardware-accelerated Xterm.js terminal with WebGL rendering, horizontal/vertical split panes, multiple tabs, TrueColor, and copy-on-select.'
  },
  {
    slug: 'sftp-file-manager.html',
    title: 'Dual-Pane SFTP File Manager',
    category: '25 Native Apps: Desktop & Terminal',
    catSlug: 'desktop',
    icon: '📁',
    seoTitle: 'Dual-Pane SFTP Manager & Archive Engine - SSH Desktop Docs',
    description: 'High-speed dual-pane SFTP file manager with drag-and-drop transfers, in-place remote archive extraction (.tar.gz, .zip), and permissions editor.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/filemanager',
    githubLabel: 'src/apps/filemanager',
    screenshot: 'screenshot-sftp',
    replaces: 'FileZilla, WinSCP, Cyberduck, Transmit',
    commands: 'sftp subsystem, tar -xzf, unzip, chmod, chown, stat',
    summary: 'Dual-pane visual file browser with drag-and-drop transfers, in-place server archive extraction (.tar.gz, .zip), permissions editor, and file search.'
  },
  {
    slug: 'monaco-code-editor.html',
    title: 'Monaco Code Editor & Diff Viewer',
    category: '25 Native Apps: Desktop & Terminal',
    catSlug: 'desktop',
    icon: '📝',
    seoTitle: 'Monaco Code Editor & Side-by-Side Diff Viewer - SSH Desktop Docs',
    description: 'Edit remote files directly with VS Code Monaco editor. Features syntax highlighting for 50+ languages, side-by-side diff comparison, and regex find & replace.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/editor',
    githubLabel: 'src/apps/editor',
    screenshot: 'screenshot-monaco',
    replaces: 'Nano, Vim, SSHFS remote mounts, manual download/upload editing',
    commands: 'Monaco Editor API, sftp file stream, diff-match-patch',
    summary: 'Built-in VS Code Monaco editor with 50+ language syntaxes, side-by-side config diff comparison, multi-cursor editing, and instant remote save.'
  },
  {
    slug: 'sticky-notes.html',
    title: 'Desktop Sticky Notes & Scratchpad',
    category: '25 Native Apps: Desktop & Terminal',
    catSlug: 'desktop',
    icon: '📌',
    seoTitle: 'Desktop Sticky Notes & Server Scratchpad - SSH Desktop Docs',
    description: 'Pin colorful markdown sticky notes directly on your remote desktop shell. Keep scratchpads, cheat sheets, IP references, and server notes across sessions.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/notes',
    githubLabel: 'src/apps/notes',
    screenshot: 'screenshot-sticky-notes',
    replaces: 'Scattered text files, external note apps, lost scratchpad commands',
    commands: 'Local state synchronization, Markdown parser, client storage',
    summary: 'Pin colorful markdown sticky notes to your server desktop: keep scratchpads, command templates, temporary tokens, and operational checklists handy.'
  },
  {
    slug: 'docker-management.html',
    title: 'Docker Container Management Hub',
    category: '25 Native Apps: Containers & Databases',
    catSlug: 'containers',
    icon: '🐳',
    seoTitle: 'Docker Container Hub (Portainer Alternative) - SSH Desktop Docs',
    description: 'Agentless Docker container manager. Control lifecycles (start, stop, restart), stream live container logs, launch interactive exec terminals, and prune images.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/docker',
    githubLabel: 'src/apps/docker',
    screenshot: 'screenshot-docker',
    replaces: 'Portainer, Docker Desktop, manual docker CLI commands',
    commands: '/var/run/docker.sock stream, docker ps, docker logs -f, docker exec',
    summary: 'Agentless Portainer alternative connecting directly to /var/run/docker.sock over SSH. Manage lifecycles, stream logs, and open exec shell terminals.'
  },
  {
    slug: 'database-studio.html',
    title: 'Multi-Engine Database Studio',
    category: '25 Native Apps: Containers & Databases',
    catSlug: 'containers',
    icon: '🗄️',
    seoTitle: 'Multi-Engine Database Studio (PostgreSQL, MySQL, Redis, SQLite) - SSH Desktop Docs',
    description: 'Visual database studio with automatic SSH port forwarding. Run queries, inspect schemas, edit table rows, and export data without exposing DB ports.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/database',
    githubLabel: 'src/apps/database',
    screenshot: 'screenshot-database',
    replaces: 'DBeaver, pgAdmin, phpMyAdmin, TablePlus, Redis Insight',
    commands: 'Local port forwarding (ssh -L), PostgreSQL wire, MySQL protocol, Redis RESP',
    summary: 'Native database client with automatic SSH tunneling for PostgreSQL, MySQL, Redis, and SQLite. Query editor, schema inspector, and inline data grid.'
  },
  {
    slug: 'ssh-tunneling.html',
    title: 'SSH Port Forwarding & Tunnels',
    category: '25 Native Apps: Containers & Databases',
    catSlug: 'containers',
    icon: '🔀',
    seoTitle: 'SSH Port Forwarding & Background Tunnels - SSH Desktop Docs',
    description: 'Manage Local (-L), Remote (-R), and Dynamic SOCKS5 (-D) SSH tunnels with visual status indicators, auto-reconnect watchdog, and port conflict detection.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/ssh',
    githubLabel: 'src/apps/ssh',
    screenshot: 'screenshot-tunnels',
    replaces: 'Complex ssh -L / -R CLI commands, ngrok, manual tunnel scripts',
    commands: 'ssh -L [bind]:port:host:port, ssh -D [port], tcpip-forward',
    summary: 'Visual SSH tunnel manager for Local, Remote, and SOCKS5 dynamic proxying. One-click port forwarding with auto-reconnect watchdog.'
  },
  {
    slug: 'systemd-services.html',
    title: 'Systemd Services & Timers',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '⚙️',
    seoTitle: 'Systemd Services & Timers Manager - SSH Desktop Docs',
    description: 'Visual management for Linux systemd units. Start, stop, restart, enable, or disable services, inspect unit files, and stream live journalctl logs.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/services',
    githubLabel: 'src/apps/services',
    screenshot: 'screenshot-systemd',
    replaces: 'systemctl CLI, journalctl manual tailing, service status scripts',
    commands: 'systemctl list-units --type=service, systemctl restart, journalctl -u -f',
    summary: 'Visual systemd dashboard: view active/failed units, start/stop/restart services, enable on boot, inspect unit definitions, and stream journalctl logs.'
  },
  {
    slug: 'hardware-telemetry.html',
    title: 'Hardware Telemetry & Monitor',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '📊',
    seoTitle: 'Hardware Telemetry & Real-Time Server Monitor - SSH Desktop Docs',
    description: 'Real-time CPU, Memory, Swap, Disk I/O, and Network bandwidth charts (60 FPS). Sort active processes and terminate rogue tasks with one click.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/monitor',
    githubLabel: 'src/apps/monitor',
    screenshot: 'screenshot-monitoring',
    replaces: 'htop, btop, Glances, Datadog/Netdata heavy agents',
    commands: '/proc/stat, /proc/meminfo, /proc/net/dev, ps aux, kill -9',
    summary: 'Real-time 60 FPS hardware telemetry reading directly from Linux /proc files. Visual CPU, RAM, disk I/O, network charts, and killable process list.'
  },
  {
    slug: 'process-manager.html',
    title: 'Process Manager (htop Alternative)',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '⚡',
    seoTitle: 'Process Manager (Visual htop Alternative) - SSH Desktop Docs',
    description: 'Interactive Linux process manager. Search processes by PID or user, sort by CPU/RAM usage, inspect thread trees, and send SIGTERM or SIGKILL safely.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/processes',
    githubLabel: 'src/apps/processes',
    screenshot: 'screenshot-process-manager',
    replaces: 'htop, top, ps aux | grep, kill CLI commands',
    commands: 'ps -eo pid,ppid,user,%cpu,%mem,stat,comm,args, kill -s',
    summary: 'Interactive task manager for Linux: sort processes by CPU/memory, search PIDs, inspect process trees, and send graceful SIGTERM or forceful SIGKILL.'
  },
  {
    slug: 'package-manager.html',
    title: 'Multi-Distro Package Manager',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '📦',
    seoTitle: 'Multi-Distro Package Manager (APT, DNF, Pacman) - SSH Desktop Docs',
    description: 'Visual package manager supporting APT (Ubuntu/Debian), DNF/YUM (RHEL/CentOS/Rocky), and Pacman (Arch). Search, install, update, and remove packages.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/packages',
    githubLabel: 'src/apps/packages',
    screenshot: 'screenshot-package-manager',
    replaces: 'Manual apt/dnf/pacman CLI commands, unattended-upgrades confusion',
    commands: 'apt update && apt list --upgradable, dnf check-update, pacman -Syu',
    summary: 'Unified package manager GUI for Debian/Ubuntu (APT), Red Hat/Fedora (DNF), and Arch (Pacman). Inspect installed packages and apply security updates.'
  },
  {
    slug: 'user-sudoers-admin.html',
    title: 'User & Sudoers Administration',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '👥',
    seoTitle: 'User & Sudoers Admin - SSH Desktop Docs',
    description: 'Manage Linux users, secondary groups, and SSH authorized keys. Safely edit /etc/sudoers with automated visudo syntax validation to prevent lockouts.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/users',
    githubLabel: 'src/apps/users',
    screenshot: 'screenshot-user-manager',
    replaces: 'useradd, usermod, visudo CLI, manual ~/.ssh/authorized_keys editing',
    commands: 'useradd, passwd, usermod -aG sudo, visudo -c, /etc/passwd',
    summary: 'Visual user account management: create users, assign sudo privileges, manage SSH authorized_keys, and safely validate /etc/sudoers rules with visudo.'
  },
  {
    slug: 'disk-smart-manager.html',
    title: 'Disk, LVM & S.M.A.R.T. Manager',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '💾',
    seoTitle: 'Disk, LVM & S.M.A.R.T. Health Manager - SSH Desktop Docs',
    description: 'Inspect partition maps, filesystem mount points, LVM volume groups, and drive health metrics (temperature, reallocated sectors, wear level).',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/disk',
    githubLabel: 'src/apps/disk',
    screenshot: 'screenshot-disk-manager',
    replaces: 'df -h, lsblk, fdisk, smartctl CLI, gparted',
    commands: 'lsblk -J, df -hT, smartctl -a, lvs, vgs, pvs',
    summary: 'Inspect storage drive partitions, mount points, LVM volumes, inode usage, and drive health telemetry (temperature, S.M.A.R.T. attributes, reallocated sectors).'
  },
  {
    slug: 'crontab-scheduler.html',
    title: 'Visual Crontab Scheduler',
    category: '25 Native Apps: System Administration',
    catSlug: 'sysadmin',
    icon: '⏰',
    seoTitle: 'Visual Crontab Scheduler & Job Runner - SSH Desktop Docs',
    description: 'Build and manage cron schedules without memorizing asterisk syntax. Test commands, inspect execution logs, and edit user and system crontabs safely.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/cron',
    githubLabel: 'src/apps/cron',
    screenshot: 'screenshot-crontab',
    replaces: 'crontab -e, crontab.guru, manual cron job debugging',
    commands: 'crontab -l, crontab -, /etc/cron.d/, /etc/crontab',
    summary: 'Human-friendly visual cron job builder: create scheduled tasks without memorizing crontab syntax, test execution commands, and review run logs.'
  },
  {
    slug: 'firewall-ufw.html',
    title: 'Visual Firewall (UFW & Iptables)',
    category: '25 Native Apps: Security & Networking',
    catSlug: 'security',
    icon: '🛡️',
    seoTitle: 'Visual Firewall (UFW & Iptables Rule Manager) - SSH Desktop Docs',
    description: 'Configure firewall rules with safety checks. Open ports (HTTP, HTTPS, SSH), restrict access by CIDR IP block, and enable brute-force rate limiting.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/firewall',
    githubLabel: 'src/apps/firewall',
    screenshot: 'screenshot-firewall',
    replaces: 'ufw CLI, iptables complex tables, firewalld-cmd',
    commands: 'ufw status numbered, ufw allow proto tcp from IP to any port 22, iptables -L',
    summary: 'Visual rule editor for UFW and iptables: allow/deny ports, restrict IP subnets, enable SSH brute-force rate limiting, and review active traffic rules.'
  },
  {
    slug: 'network-port-auditor.html',
    title: 'Network & Port Auditor',
    category: '25 Native Apps: Security & Networking',
    catSlug: 'security',
    icon: '🔍',
    seoTitle: 'Network & Port Auditor (ss / lsof Inspector) - SSH Desktop Docs',
    description: 'Audit open TCP/UDP listening ports, active socket connections, and network interfaces. Pinpoint which process and PID is listening on any port.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/network',
    githubLabel: 'src/apps/network',
    screenshot: 'screenshot-network-auditor',
    replaces: 'netstat, ss -tulpn, lsof -i, nmap external scans',
    commands: 'ss -tulpn, ip addr show, ip route show, lsof -i',
    summary: 'Real-time socket and listening port inspector: view all open TCP/UDP ports, matching processes and PIDs, network interfaces, IP addresses, and routing tables.'
  },
  {
    slug: 'ssl-certificates.html',
    title: 'SSL/TLS Certificates (Certbot)',
    category: '25 Native Apps: Security & Networking',
    catSlug: 'security',
    icon: '🔒',
    seoTitle: 'SSL/TLS Certificates Manager (Let\'s Encrypt / Certbot) - SSH Desktop Docs',
    description: 'Inspect SSL certificates, monitor expiration dates, request new Let\'s Encrypt certificates, and automate Nginx/Apache reload on certificate renewal.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/ssl',
    githubLabel: 'src/apps/ssl',
    screenshot: 'screenshot-ssl-manager',
    replaces: 'certbot renew CLI, openssl x509 -text manual inspection',
    commands: 'certbot certificates, certbot renew, openssl x509 -in cert.pem -text',
    summary: 'Manage SSL/TLS certificates across domains: view expiration countdowns, SANs, issue Let\'s Encrypt certificates with Certbot, and reload web servers.'
  },
  {
    slug: 'security-audit-lynis.html',
    title: 'Security & Lynis Auditor',
    category: '25 Native Apps: Security & Networking',
    catSlug: 'security',
    icon: '🚨',
    seoTitle: 'Security & Lynis System Auditor - SSH Desktop Docs',
    description: 'Run automated security vulnerability scans with Lynis. Detect weak SSH ciphers, open ports, outdated software, and obtain hardening index scores.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/security',
    githubLabel: 'src/apps/security',
    screenshot: 'screenshot-security-auditor',
    replaces: 'Manual security audits, Lynis CLI raw report parsing',
    commands: 'lynis audit system --quick --warnings-only, /var/log/lynis-report.dat',
    summary: 'Run automated Linux system hardening audits powered by Lynis. Detect security misconfigurations, weak SSH ciphers, open ports, and review fix recommendations.'
  },
  {
    slug: 'env-variables-manager.html',
    title: 'Environment Variables & Secrets',
    category: '25 Native Apps: Automation & Tools',
    catSlug: 'automation',
    icon: '🔑',
    seoTitle: 'Environment Variables & Secrets Manager (.env) - SSH Desktop Docs',
    description: 'Manage application .env files and system environment variables safely. Features masked password fields, syntax validation, and instant service reloads.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/env',
    githubLabel: 'src/apps/env',
    screenshot: 'screenshot-env-manager',
    replaces: 'Scattered .env files, manual export commands, leaking secrets in bash history',
    commands: 'dotenv parser, /etc/environment, systemctl show-environment',
    summary: 'Visual environment variables and secrets manager: inspect and edit .env files, hide/reveal sensitive API keys, and manage system environment variables safely.'
  },
  {
    slug: 'backup-disaster-recovery.html',
    title: 'Backup & Disaster Recovery',
    category: '25 Native Apps: Automation & Tools',
    catSlug: 'automation',
    icon: '💾',
    seoTitle: 'Backup & Disaster Recovery (Rsync / Tar Engine) - SSH Desktop Docs',
    description: 'Automate server backups using Rsync and Tar. Create incremental snapshots of web directories, databases, and configuration files with one-click restore.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src-tauri/src/archive.rs',
    githubLabel: 'src-tauri/src/archive.rs',
    screenshot: 'screenshot-backup',
    replaces: 'Complex rsync bash scripts, manual tar archiving, expensive backup SaaS',
    commands: 'rsync -avz --delete, tar -czvf, mysqldump, pg_dump',
    summary: 'Automate remote server backups and disaster recovery: schedule Rsync differential mirrors, archive site files, export database dumps, and perform 1-click restores.'
  },
  {
    slug: 'multi-server-snippets.html',
    title: 'Multi-Server Automation',
    category: '25 Native Apps: Automation & Tools',
    catSlug: 'automation',
    icon: '🌐',
    seoTitle: 'Multi-Server Automation & Snippet Broadcast - SSH Desktop Docs',
    description: 'Execute shell snippets across dozens of servers simultaneously. Manage your bash script library and view real-time aggregated output side by side.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/terminal',
    githubLabel: 'src/apps/terminal',
    screenshot: 'screenshot-multi-server',
    replaces: 'Ansible ad-hoc commands for simple tasks, pssh, cluster-ssh',
    commands: 'Parallel async SSH channels, parameterized bash templates',
    summary: 'Organize frequently used shell snippets and broadcast command execution across multiple remote servers in parallel with aggregated output streams.'
  },
  {
    slug: 'log-analysis-grep.html',
    title: 'Remote Log Analysis & Grep',
    category: '25 Native Apps: Automation & Tools',
    catSlug: 'automation',
    icon: '📜',
    seoTitle: 'Remote Log Analysis & Regex Grep Engine - SSH Desktop Docs',
    description: 'Stream and filter remote log files (/var/log/syslog, nginx, auth.log). High-performance regex grep, timestamp filtering, and error highlights.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/logs',
    githubLabel: 'src/apps/logs',
    screenshot: 'screenshot-log-analysis',
    replaces: 'tail -f, journalctl, grep/awk manual pipes, Datadog/Papertrail agents',
    commands: 'tail -n 500 -F /var/log/*, grep -E, journalctl -n 200 -f',
    summary: 'High-speed remote log viewer: stream /var/log files and Docker logs with real-time regex filtering, color-coded error highlighting, and log export.'
  },
  {
    slug: 'reverse-proxy-browser.html',
    title: 'Reverse Proxy Browser (Nginx)',
    category: '25 Native Apps: Automation & Tools',
    catSlug: 'automation',
    icon: '🔄',
    seoTitle: 'Reverse Proxy Browser & Nginx Virtual Hosts - SSH Desktop Docs',
    description: 'Manage Nginx, Caddy, and Apache virtual hosts visually. Add reverse proxies, configure upstream ports, enable WebSockets, and validate configs before reload.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/browser',
    githubLabel: 'src/apps/browser',
    screenshot: 'screenshot-reverse-proxy',
    replaces: 'Nginx Proxy Manager, manual /etc/nginx/sites-available editing',
    commands: 'nginx -t, systemctl reload nginx, /etc/nginx/sites-enabled/',
    summary: 'Visual reverse proxy configurator for Nginx, Caddy, and Apache: manage server blocks, route subdomains to upstream ports, and run automatic nginx -t validation.'
  },
  {
    slug: 'api-studio.html',
    title: 'API Studio (REST/GraphQL/WS)',
    category: '25 Native Apps: Automation & Tools',
    catSlug: 'automation',
    icon: '🔌',
    seoTitle: 'API Studio (REST, GraphQL & WebSocket Tester) - SSH Desktop Docs',
    description: 'Test private APIs and internal microservices over secure SSH tunnels without exposing ports. Supports REST (GET/POST/PUT/DELETE), GraphQL, and WebSockets.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/api',
    githubLabel: 'src/apps/api',
    screenshot: 'screenshot-api-studio',
    replaces: 'Postman, Insomnia, curl CLI, Hopscotch',
    commands: 'SSH local port forwarding + reqwest HTTP client + WebSocket client',
    summary: 'Built-in API client for testing backend endpoints (REST, GraphQL, WebSockets) running on localhost or internal VPC networks through automated SSH tunnels.'
  }
,
  {
    slug: 'installation.html',
    title: 'Installation & Platform Support',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '💿',
    seoTitle: 'Install SSH Desktop on macOS, Windows & Linux - Setup Guide',
    description: 'Download and install SSH Desktop on macOS (Universal DMG), Windows 10/11 (MSI installer), or Linux (AppImage, DEB, RPM, AUR). System requirements and step-by-step setup.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Complex terminal package setups, bloated Electron installers',
    commands: 'dmg install, msi exec, dpkg -i, chmod +x AppImage',
    summary: 'Native installation guide for macOS (Apple Silicon & Intel), Windows 11/10, and Linux desktops (Ubuntu, Debian, Fedora, Arch) with automated updates.'
  },
  {
    slug: 'connection-manager.html',
    title: 'Connection Manager & SSH Keys',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '🔑',
    seoTitle: 'SSH Connection Manager & Key Setup Guide - SSH Desktop Docs',
    description: 'Learn how to configure SSH host profiles, generate Ed25519 cryptographic keys, automatically import ~/.ssh/config, and route traffic through Bastion jump hosts.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/pages/ConnectionScreen.tsx',
    githubLabel: 'src/pages/ConnectionScreen.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Manual ssh CLI configs, complex ~/.ssh/config files, PuTTY saved sessions',
    commands: 'ssh-keygen -t ed25519, ssh-copy-id, ProxyJump, ~/.ssh/known_hosts',
    summary: 'Comprehensive host inventory management: create server profiles, organize with tags, configure Bastion jump hosts, and manage cryptographic keys.'
  },
  {
    slug: 'settings-preferences.html',
    title: 'Settings, Themes & Preferences',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '⚙️',
    seoTitle: 'App Preferences & Theme Customization - SSH Desktop Docs',
    description: 'Customize SSH Desktop: configure color themes (Dark, OLED Midnight, Tokyo Night), terminal fonts, ligature rendering, keybindings, and low-bandwidth mode.',
    github: 'https://github.com/sshdesktop/sshdesktop/blob/main/src/apps/settings/AppSettings.tsx',
    githubLabel: 'src/apps/settings/AppSettings.tsx',
    screenshot: 'screenshot-sonoma',
    replaces: 'Clunky config files, terminal theme hacking, manual font overrides',
    commands: 'Local preferences store, font ligature engine, dark mode CSS variables',
    summary: 'Visual settings workspace: customize desktop appearance, choose editor/terminal color schemes, toggle low-bandwidth telemetry, and manage keybindings.'
  },
  {
    slug: 'faq.html',
    title: 'Frequently Asked Questions (FAQ)',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '❓',
    seoTitle: 'SSH Desktop FAQ - Common Questions & Architecture Details',
    description: 'Find answers to common questions about SSH Desktop: security guarantees, agentless architecture, supported Linux distros, credential storage, and licensing.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Scattered forums, confusing documentation, unverified advice',
    commands: 'POSIX SSH protocol, OS Keychain vault, zero cloud telemetry',
    summary: 'Answers to top questions regarding agentless SSH operations, OS Keychain security, network bandwidth, firewall ports, and multi-server fleet management.'
  },
  {
    slug: 'keyboard-shortcuts.html',
    title: 'Master Keyboard Shortcuts',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '⌨️',
    seoTitle: 'Master Keyboard Shortcuts & Hotkeys Cheat Sheet - SSH Desktop Docs',
    description: 'Comprehensive keyboard shortcuts cheat sheet for SSH Desktop. Master hotkeys for Spotlight search (Cmd+K), split terminals, code editor, and window tiling.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src/shell',
    screenshot: 'screenshot-terminal',
    replaces: 'Memorizing tmux key combinations, tedious mouse clicking',
    commands: 'Global hotkey interceptor, Xterm keybindings, Monaco shortcut maps',
    summary: 'Complete cheat sheet of hotkeys for the desktop shell, interactive PTY terminal split panes, Monaco code editor, and multi-server switcher.'
  },
  {
    slug: 'raspberry-pi-desktop.html',
    title: 'Raspberry Pi Remote Desktop & Homelab',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '🍓',
    seoTitle: 'Raspberry Pi SSH Remote Desktop GUI - SSH Desktop Docs',
    description: 'Control headless Raspberry Pi (Pi 5, 4, 3, Zero) visually over SSH. Monitor CPU temperature, inspect storage, manage Docker containers, and edit config files.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'VNC Viewer lag, Raspberry Pi Connect subscription, tedious CLI commands',
    commands: 'vcgencmd measure_temp, /boot/firmware/config.txt, gpio, systemctl',
    summary: 'Turn headless Raspberry Pi boards into a visual macOS-style desktop: monitor CPU thermal sensors, edit config.txt, and run Docker containers with zero lag.'
  },
  {
    slug: 'troubleshooting.html',
    title: 'Troubleshooting & Connection Fixes',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '🛠️',
    seoTitle: 'SSH Connection Troubleshooting Guide - SSH Desktop Docs',
    description: 'Step-by-step diagnostic guide for resolving SSH connection issues: Connection refused, Permission denied (publickey), Host key verification, and timeout errors.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src-tauri',
    screenshot: 'screenshot-network',
    replaces: 'Googling obscure StackOverflow threads, parsing raw ssh -vvv verbose logs',
    commands: 'ssh -vvv, systemctl status sshd, ufw status, journalctl -u ssh',
    summary: 'Diagnostic manual for solving common SSH errors: Connection Refused, Permission Denied, Host Key Verification Failed, and Docker socket permissions.'
  },
  {
    slug: 'rdp-over-ssh.html',
    title: 'RDP Over SSH Tunneling Guide',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '🔒',
    seoTitle: 'Secure RDP Over SSH Tunnel (Port 3389) - SSH Desktop Docs',
    description: 'How to tunnel Remote Desktop Protocol (RDP port 3389) over an encrypted SSH port 22 connection. Access Windows and XRDP servers without exposing port 3389 publicly.',
    github: 'https://github.com/sshdesktop/sshdesktop/tree/main/src/apps/ssh',
    githubLabel: 'src/apps/ssh',
    screenshot: 'screenshot-tunnels',
    replaces: 'Exposing raw RDP port 3389 to internet ransomware bots, complex VPN clients',
    commands: 'ssh -L 3389:localhost:3389, mstsc.exe 127.0.0.1:3389, xrdp',
    summary: 'Secure Remote Desktop guide: tunnel RDP traffic over encrypted SSH port 22, protect against ransomware port scans, and connect to Windows or XRDP.'
  },
  {
    slug: 'aws-ec2-guide.html',
    title: 'AWS EC2 SSH Connection Guide',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '☁️',
    seoTitle: 'Connect to AWS EC2 Instances with SSH Desktop - Complete Guide',
    description: 'Step-by-step tutorial on connecting SSH Desktop to Amazon Web Services (AWS) EC2 instances. How to use .pem keypairs, configure VPC Security Groups, and Jump Hosts.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'AWS EC2 Instance Connect browser lag, PuTTYgen .pem to .ppk conversion',
    commands: 'chmod 400 key.pem, ssh -i key.pem ec2-user@ec2-ip, VPC Security Group 22',
    summary: 'Step-by-step AWS EC2 integration guide: connect with .pem keys, configure VPC Security Groups, tunnel through Bastion hosts, and manage cloud fleets.'
  },
  {
    slug: 'cloud-vps-guide.html',
    title: 'Multi-Cloud VPS Management Guide',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '🌐',
    seoTitle: 'Multi-Cloud VPS Management (DigitalOcean, Hetzner, Linode) - SSH Desktop',
    description: 'Centralize server management across DigitalOcean, Hetzner Cloud, Linode, Vultr, and OVH. Manage root logins, firewall rules, and backups agentlessly.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Logging into 5 different cloud web consoles, manual SSH connection tracking',
    commands: 'cloud-init, ufw, root ssh key authentication, cloud firewall rules',
    summary: 'Unified cloud management guide: organize Droplets and Cloud VPS instances across multiple cloud providers with zero agents and centralized key management.'
  },
  {
    slug: 'tutorials.html',
    title: 'Server Management Tutorials',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '📚',
    seoTitle: 'Step-by-Step Server Management Tutorials - SSH Desktop Docs',
    description: 'Master everyday Linux server management with visual tutorials: Docker stacks, private database tunnels, dual-pane SFTP, Nginx reverse proxy, and firewalls.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Scattered blog posts, outdated Linux tutorials, trial-and-error CLI commands',
    commands: 'ssh-keygen, docker-compose up, ss -tulpn, ufw allow, rsync -avz',
    summary: 'Comprehensive collection of hands-on tutorials for server provisioning, Docker stacks, private database tunnels, reverse proxying, and automated backups.'
  },
  {
    slug: 'quickstart.html',
    title: '3-Minute Quickstart Guide',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '⚡',
    seoTitle: '3-Minute Quickstart Guide - From Zero to Cloud Desktop',
    description: 'Get up and running with SSH Desktop in under 3 minutes: install the native app, import existing SSH configs, connect to your server, and launch applications.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-sonoma',
    replaces: 'Lengthy manual onboarding, complex CLI configuration',
    commands: 'ssh connection, ~/.ssh/config parser, Spotlight launcher',
    summary: 'Fast-track onboarding guide: download the desktop binary, auto-import ~/.ssh/config, launch your cloud desktop, and master Spotlight (Cmd+K).'
  },
  {
    slug: 'cheat-sheet.html',
    title: 'Linux Server & SSH Cheat Sheet',
    category: 'Guides, Tutorials & Homelab',
    catSlug: 'guides',
    icon: '📋',
    seoTitle: 'The Ultimate Linux Server & SSH Key Cheat Sheet (2026 Reference)',
    description: 'Comprehensive cheat sheet for sysadmins: OpenSSH commands, Ed25519 key generation, ssh config syntax, port forwarding tunnels, systemd units, UFW rules, and permissions.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'sshdesktop',
    screenshot: 'screenshot-terminal',
    replaces: 'Memorizing dozens of obscure CLI flags, searching StackOverflow',
    commands: 'ssh -L, ssh-keygen -t ed25519, systemctl, ufw, chmod, ss -tulpn',
    summary: 'The definitive reference card: essential OpenSSH commands, port forwarding syntax, systemd lifecycle commands, UFW firewall rules, and octal permissions.'
  },
  {
    slug: 'security-model.html',
    title: 'Security Model & Zero-Agent Trust',
    category: 'Getting Started & Core',
    catSlug: 'overview',
    icon: '🛡️',
    seoTitle: 'Security Model & Zero-Agent Architecture - SSH Desktop Docs',
    description: 'Detailed security blueprint for SSH Desktop. Explore zero-agent architecture, hardware keychain credential storage, memory safety, and zero cloud telemetry.',
    github: 'https://github.com/sshdesktop/sshdesktop',
    githubLabel: 'src-tauri',
    screenshot: 'screenshot-security-auditor',
    replaces: 'Vulnerable web control panels with open HTTP ports, third-party cloud sync',
    commands: 'OpenSSH protocol, OS Keychain / DPAPI, libssh2 / russh memory safety',
    summary: 'Enterprise security blueprint: zero server daemons, zero open HTTP ports, hardware-backed credential storage, and total data isolation.'
  },
];

// Group categories
const categories = [
  { name: 'Getting Started & Core', slug: 'overview' },
  { name: '25 Native Apps: Desktop & Terminal', slug: 'desktop' },
  { name: '25 Native Apps: Containers & Databases', slug: 'containers' },
  { name: '25 Native Apps: System Administration', slug: 'sysadmin' },
  { name: '25 Native Apps: Security & Networking', slug: 'security' },
  { name: '25 Native Apps: Automation & Tools', slug: 'automation' },
  { name: 'Guides, Tutorials & Homelab', slug: 'guides' }
];

console.log(`Loaded ${chapters.length} chapter definitions.`);

// Generate Sidebar HTML
function generateSidebar(currentSlug) {
  let html = `
    <div class="docs-sidebar-header">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
        <a href="index.html" class="docs-back-link">
          <span>&larr; Docs Overview</span>
        </a>
        <button type="button" class="docs-sidebar-close" id="docsSidebarClose" aria-label="Close navigation drawer">&times;</button>
      </div>
      <div class="docs-sidebar-filter-wrap">
        <span class="docs-sidebar-filter-icon">&#128269;</span>
        <input type="text" class="docs-sidebar-filter" id="docsSidebarFilter" placeholder="Filter 43 topics..." aria-label="Filter documentation topics">
      </div>
    </div>
    <nav class="docs-sidebar-nav" aria-label="Documentation chapters">`;

  for (const cat of categories) {
    html += `<div class="docs-nav-group-title">${cat.name}</div><ul class="docs-nav-list">`;
    if (cat.name === 'Overview & Architecture') {
      const activeClass = currentSlug === 'index.html' ? ' class="active"' : '';
      html += `<li><a href="index.html"${activeClass}>📖 Documentation Overview</a></li>`;
    }
    const catChapters = chapters.filter(c => c.category === cat.name);
    for (const c of catChapters) {
      const activeClass = currentSlug === c.slug ? ' class="active"' : '';
      html += `<li><a href="${c.slug}"${activeClass}>${c.icon} ${c.title}</a></li>`;
    }
    html += `</ul>`;
  }
  html += `</nav>`;
  return html;
}

// Generate Header HTML
function generateHeader() {
  return `  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38">
      </a>
      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../features.html">Features</a></li>
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="index.html" class="active">Docs</a></li>
          <li><a href="../blog/index.html">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="https://github.com/sshdesktop/sshdesktop" class="header-github-btn" target="_blank" rel="noopener" aria-label="Star on GitHub">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span class="gh-star-label">Star</span>
        </a>
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
      </div>
    </div>
  </header>`;
}

// Generate Footer HTML
function generateFooter() {
  return `  <footer class="site-footer">
    <div class="container footer-bottom" style="display: flex; justify-content: space-between; align-items: center; padding: 24px 0; border-top: 1px solid var(--border); font-size: 0.88rem; color: var(--text-dim);">
      <p>&copy; 2026 SSH Desktop. All rights reserved. Open source and privacy focused.</p>
      <div style="display: flex; gap: 20px;">
        <a href="../privacy.html">Privacy</a>
        <a href="index.html">Documentation Hub</a>
        <a href="https://github.com/sshdesktop/sshdesktop" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>`;
}

// Export metadata for build scripts
module.exports = {
  chapters,
  categories,
  generateSidebar,
  generateHeader,
  generateFooter
};
