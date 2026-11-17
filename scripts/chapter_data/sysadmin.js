// scripts/chapter_data/sysadmin.js
module.exports = {
  "systemd-services.html": {
    "lead": "Visual management for Linux systemd units. Start, stop, restart, enable, or disable services, inspect unit files, and stream live journalctl logs.",
    "whatIsIt": "The Systemd Services & Timers Manager is a graphical interface for inspecting and controlling all systemd services, sockets, and timers running on your Linux host. View service health, toggle boot behavior, and read logs without memorizing systemctl CLI flags.",
    "whyNeedIt": "Diagnosing failed services in systemd often requires running multiple commands: <code>systemctl status &lt;unit&gt;</code>, <code>journalctl -u &lt;unit&gt; -e</code>, and checking unit files in <code>/etc/systemd/system/</code>. SSH Desktop consolidates unit states, controls, unit file editing, and log streaming into one clean dashboard.",
    "codeSnippetTitle": "Rust Systemd Controller & Log Streamer (src-tauri/src/system/service.rs)",
    "codeSnippet": "// src-tauri/src/system/service.rs\n#[tauri::command]\npub async fn service_action(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n    name: String,\n    action: String, // \"start\" | \"stop\" | \"restart\" | \"reload\" | \"enable\" | \"disable\"\n) -> Result<String, String> {\n    let session = state.get_session(&conn_id)?;\n    let cmd = format!(\"systemctl {} {}\", action, name);\n    session.exec_command(&cmd).await\n}\n\n#[tauri::command]\npub async fn service_logs(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n    name: String,\n    lines: u32,\n) -> Result<String, String> {\n    let session = state.get_session(&conn_id)?;\n    let cmd = format!(\"journalctl -u {} -n {} --no-pager -o short-iso\", name, lines);\n    session.exec_command(&cmd).await\n}",
    "prerequisites": [
      "Linux distribution using systemd (Ubuntu, Debian, RHEL, CentOS, Rocky, Fedora, Arch, openSUSE).",
      "Sudo or root permissions to start, stop, restart, or enable services."
    ],
    "features": [
      "<strong>Real-Time Unit States:</strong> Instantly filter services by Active, Inactive, Failed, or Masked status.",
      "<strong>1-Click Lifecycle Controls:</strong> Start, Stop, Restart, and Reload services with safety confirmation.",
      "<strong>Enable on Boot:</strong> Toggle whether a service launches automatically at server startup with one switch.",
      "<strong>Live Journalctl Log Stream:</strong> Stream live unit logs with colorized error levels and timestamp filtering.",
      "<strong>Visual Unit File Editor:</strong> Inspect and edit <code>.service</code> definitions with automatic <code>systemctl daemon-reload</code>."
    ],
    "steps": [
      {
        "title": "1. Inspecting Services and Filtering Failed Units",
        "content": "Launch the Services app. The top summary counters display Total Units, Running Units, and Failed Units. Click the red <strong>Failed</strong> badge to instantly filter all services that crashed or failed to start."
      },
      {
        "title": "2. Starting, Stopping and Restarting Services",
        "content": "Click any service (e.g. <code>nginx.service</code>, <code>postgresql.service</code>, <code>docker.service</code>). Click <strong>Restart</strong> to restart the process. A progress spinner appears while systemd reboots the daemon."
      },
      {
        "title": "3. Streaming Live Service Logs (journalctl)",
        "content": "Click the <strong>Logs</strong> tab inside any unit card. SSH Desktop streams output directly from <code>journalctl -u &lt;service&gt; -f</code>. Errors and warnings are highlighted in red and yellow."
      },
      {
        "title": "4. Editing Service Definitions",
        "content": "Click <strong>Edit Unit File</strong> to view the unit's configuration in the Monaco editor. Modify <code>ExecStart</code>, environment variables, or restart policies, and click <strong>Save &amp; Reload</strong> to automatically execute <code>systemctl daemon-reload</code>."
      }
    ],
    "underTheHood": "Runs <code>systemctl list-units --type=service --all --no-pager --output=json</code>. Log streaming connects to <code>journalctl -u &lt;unit&gt; -n 100 -f -o short-iso</code> over an asynchronous SSH stream.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Restart Focused Service"
      },
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Filter Services by Name"
      },
      {
        "key": "Cmd/Ctrl + Shift + D",
        "desc": "Trigger daemon-reload"
      }
    ]
  },
  "hardware-telemetry.html": {
    "lead": "Real-time CPU, Memory, Swap, Disk I/O, and Network bandwidth charts (60 FPS). Sort active processes and terminate rogue tasks with one click.",
    "whatIsIt": "The Hardware Telemetry & Real-Time Monitor is a 60 FPS performance monitoring dashboard. It visualizes CPU core utilization, RAM breakdown (active, cached, buffers), Swap usage, Disk I/O throughput, and Network interface bandwidth, coupled with an interactive process manager.",
    "whyNeedIt": "Terminal tools like <code>top</code> and <code>htop</code> lack historical time-series charts, while heavy monitoring agents like Datadog, New Relic, or Netdata consume significant CPU/RAM and cost hundreds of dollars monthly. SSH Desktop reads Linux performance counters with virtually zero overhead.",
    "codeSnippetTitle": "Hardware Telemetry Collector (src-tauri/src/system/monitor.rs)",
    "codeSnippet": "// src-tauri/src/system/monitor.rs - Linux /proc Telemetry Collector\n#[tauri::command]\npub async fn get_system_metrics(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n) -> Result<SystemMetrics, String> {\n    let session = state.get_session(&conn_id)?;\n    // Batch query /proc virtual files in a single SSH execution\n    let cmd = \"cat /proc/stat; echo '---'; cat /proc/meminfo; echo '---'; cat /proc/net/dev\";\n    let raw = session.exec_command(cmd).await?;\n    parse_proc_metrics(&raw)\n}",
    "prerequisites": [
      "Standard Linux OS with /proc virtual filesystem enabled (universal across all distros).",
      "No root access required for basic monitoring; sudo required only to kill processes owned by other users."
    ],
    "features": [
      "<strong>60 FPS Visual Charts:</strong> Smooth hardware-accelerated time-series graphs for CPU, RAM, Disk I/O, and Network traffic.",
      "<strong>Per-Core CPU Utilization:</strong> View individual utilization across multi-core systems (up to 128 cores).",
      "<strong>Detailed Memory Breakdown:</strong> Clear visualization of Used, Cached, Buffers, and Available memory.",
      "<strong>Interactive Process Table:</strong> Sort processes by CPU %, Memory %, PID, or User; filter by executable name.",
      "<strong>1-Click Task Termination:</strong> Send <code>SIGTERM (15)</code> or forceful <code>SIGKILL (9)</code> to runaway or zombie processes."
    ],
    "steps": [
      {
        "title": "1. Reading the Telemetry Dashboard",
        "content": "Open the Monitor app from the Dock. The top gauges display instantaneous CPU Load Average (1m, 5m, 15m), RAM usage percentage, Swap usage, and active network throughput in MB/s."
      },
      {
        "title": "2. Sorting and Finding Heavy Processes",
        "content": "The bottom half features an interactive process manager. Click the <strong>CPU %</strong> or <strong>Memory %</strong> column header to sort descending. Type in the search box to filter for specific processes (e.g. <code>node</code>, <code>python</code>, <code>mysqld</code>)."
      },
      {
        "title": "3. Killing a Rogue Process",
        "content": "Select any process and click <strong>Kill Process</strong>. Choose between <em>Graceful Shutdown (SIGTERM)</em> to allow the app to clean up, or <em>Force Kill (SIGKILL)</em> to terminate it immediately."
      }
    ],
    "underTheHood": "Instead of running heavy python scripts, SSH Desktop streams lightweight reads of <code>/proc/stat</code>, <code>/proc/meminfo</code>, <code>/proc/diskstats</code>, and <code>/proc/net/dev</code>. Deltas are calculated client-side to minimize remote server CPU impact.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Kill Selected Process"
      },
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Focus Process Filter Search"
      },
      {
        "key": "Space",
        "desc": "Pause / Resume Telemetry Stream"
      }
    ]
  },
  "process-manager.html": {
    "lead": "Interactive Linux process manager. Search processes by PID or user, sort by CPU/RAM usage, inspect thread trees, and send SIGTERM or SIGKILL safely.",
    "whatIsIt": "The Process Manager is an interactive, visual alternative to terminal tools like htop, top, and Activity Monitor. It delivers real-time visibility into every task running on your Linux host: process IDs (PIDs), parent PIDs (PPIDs), executable paths, CPU and memory percentages, resident memory (RSS), thread counts, and process status flags.",
    "whyNeedIt": "Hunting down hung background processes or rogue memory leaks via raw terminal commands (`ps aux | grep node` then `kill -9 12345`) is tedious, error-prone, and risks accidentally killing essential system daemons. Process Manager provides immediate search, sortable metrics, and safe two-step termination.",
    "codeSnippetTitle": "Process Manager State & Signal Controller (src/apps/processes/ProcessManager.tsx)",
    "codeSnippet": "// src/apps/processes/ProcessManager.tsx\nexport const ProcessManager = () => {\n  const [processes, setProcesses] = useState<ProcessItem[]>([]);\n  const [sortBy, setSortBy] = useState<'cpu' | 'mem' | 'pid'>('cpu');\n  const [filterQuery, setFilterQuery] = useState('');\n\n  const sendSignal = async (pid: number, signal: 'SIGTERM' | 'SIGKILL' | 'SIGHUP') => {\n    await invoke('send_process_signal', { pid, signal });\n    // Refresh table immediately\n    fetchProcesses();\n  };\n  // ...\n};",
    "prerequisites": [
      "Standard Linux OS with /proc virtual filesystem.",
      "Standard user permissions to inspect user processes; sudo permissions required to terminate processes owned by other users or root."
    ],
    "features": [
      "<strong>Real-Time Sortable Table:</strong> Instantly sort by PID, Process Name, User, CPU%, Memory%, Virtual Memory (VSZ), and Resident Memory (RSS).",
      "<strong>Instant Search & Filter:</strong> Filter hundreds of active processes by typing any partial executable name, command argument, or PID.",
      "<strong>Process Tree Hierarchy:</strong> Expand parent processes to inspect spawned worker threads and child forks (e.g. Nginx master vs worker processes).",
      "<strong>Signal Control Center:</strong> Send standard POSIX signals: `SIGTERM (15)` for graceful termination, `SIGKILL (9)` for immediate kill, `SIGHUP (1)` for config reload, and <code>SIGSTOP/SIGCONT</code> to pause/resume.",
      "<strong>Full Command Line Inspector:</strong> Inspect the complete runtime arguments and flags used to launch any daemon."
    ],
    "steps": [
      {
        "title": "1. Inspecting Active Processes",
        "content": "Open the Process Manager from the Dock or press <kbd>Cmd/Ctrl + Shift + P</kbd>. The top summary bar displays Total Tasks, Running Tasks, Sleeping Tasks, and Zombie Tasks. The main table updates in real time."
      },
      {
        "title": "2. Identifying CPU and Memory Spikes",
        "content": "Click the <strong>CPU %</strong> header to sort descending and immediately spot CPU-hogging background scripts. Click <strong>Memory %</strong> to identify memory leaks before Linux triggers the Out-Of-Memory (OOM) killer."
      },
      {
        "title": "3. Inspecting Process Arguments and Details",
        "content": "Click any row to open the Process Inspector drawer: view Parent PID, current working directory (CWD), user ID, nice value, thread count, and the exact command line invocation."
      },
      {
        "title": "4. Safely Terminating a Task",
        "content": "Select the process and click the red <strong>Terminate Task</strong> button. Choose between <em>Graceful Shutdown (SIGTERM 15)</em> to allow databases and sockets to close cleanly, or <em>Force Kill (SIGKILL 9)</em> if the process is completely hung."
      }
    ],
    "underTheHood": "Runs <code>ps -eo pid,ppid,user,%cpu,%mem,vsz,rss,stat,comm,args --sort=-%cpu</code> or reads directly from <code>/proc/[pid]/stat</code> and <code>/proc/[pid]/cmdline</code>. Signal delivery executes <code>kill -&lt;SIG&gt; &lt;PID&gt;</code> over an asynchronous SSH channel.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Focus Process Search"
      },
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Terminate Selected Process (SIGTERM)"
      },
      {
        "key": "Cmd/Ctrl + Shift + K",
        "desc": "Force Kill Selected Process (SIGKILL)"
      },
      {
        "key": "Space",
        "desc": "Pause / Resume Process Auto-Refresh"
      },
      {
        "key": "F5",
        "desc": "Force Immediate Table Refresh"
      }
    ]
  },
  "package-manager.html": {
    "lead": "Visual package manager supporting APT (Ubuntu/Debian), DNF/YUM (RHEL/CentOS/Rocky), and Pacman (Arch). Search, install, update, and remove packages.",
    "whatIsIt": "The Multi-Distro Package Manager provides a unified visual interface for software management across all major Linux distributions. It automatically detects whether your server uses APT, DNF, YUM, or Pacman, allowing you to search software catalogs, inspect installed libraries, and apply security upgrades.",
    "whyNeedIt": "Managing packages across different Linux distributions means remembering distinct CLI commands (<code>apt install</code> vs <code>dnf install</code> vs <code>pacman -S</code>). It is easy to overlook security patches or break dependencies. SSH Desktop standardizes package operations into an intuitive, safe workflow.",
    "codeSnippetTitle": "Multi-Distro Package Engine Architecture (src/apps/packages/PackageManager.tsx)",
    "codeSnippet": "// src/apps/packages/PackageManager.tsx\nexport type ActiveTab = 'curated' | 'installed' | 'upgrades' | 'search';\n\nexport const PackageManager = () => {\n  const [activeTab, setActiveTab] = useState<ActiveTab>('curated');\n  const [upgradablePackages, setUpgradablePackages] = useState<PackageItem[]>([]);\n  const [distro, setDistro] = useState<'apt' | 'dnf' | 'pacman'>('apt');\n\n  const handleUpgradeAll = async () => {\n    // Triggers non-interactive system upgrade stream\n    await invoke('system_upgrade_stream', { distro });\n  };\n  // ...\n};",
    "prerequisites": [
      "Debian/Ubuntu (APT), RHEL/CentOS/Rocky/Alma/Fedora (DNF/YUM), or Arch Linux (Pacman).",
      "Sudo or root privileges to install, update, or remove system packages."
    ],
    "features": [
      "<strong>4 Comprehensive Tabs:</strong> Curated App Catalog, Installed Packages, Pending Upgrades, and Repository Search.",
      "<strong>Curated App Store:</strong> 1-click installation for popular server tools: Docker, Nginx, PostgreSQL, Redis, Node.js, Python, Git.",
      "<strong>Available Upgrades Inspector:</strong> View all pending security patches and package updates with version comparisons.",
      "<strong>1-Click System Update:</strong> Run full system updates with real-time terminal output streaming.",
      "<strong>Orphan & Cache Cleanup:</strong> Free disk space by running <code>autoremove</code> and cleaning package caches."
    ],
    "steps": [
      {
        "title": "1. Checking for System Updates",
        "content": "Open the Package Manager. Click <strong>Check Updates</strong>. SSH Desktop updates the package repository index and lists all packages with available updates (e.g. <code>openssl</code>, <code>linux-image</code>, <code>curl</code>)."
      },
      {
        "title": "2. Applying Updates Safely",
        "content": "Select individual packages to update or click <strong>Upgrade All (System Update)</strong>. A live output drawer streams the package manager's execution logs, showing progress percentages and dependency resolutions."
      },
      {
        "title": "3. Searching and Installing New Packages",
        "content": "Type a package name (e.g. <code>htop</code>, <code>redis-server</code>, <code>git</code>) into the search bar. Click <strong>Install</strong> to install with all required dependencies."
      }
    ],
    "underTheHood": "SSH Desktop runs the distro's native CLI utilities with non-interactive flags (e.g. <code>DEBIAN_FRONTEND=noninteractive apt-get update</code>, <code>dnf check-update</code>, <code>pacman -Sy</code>). It parses output streams and updates the package inventory.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + U",
        "desc": "Check for Package Updates"
      },
      {
        "key": "Cmd/Ctrl + Enter",
        "desc": "Apply Selected Package Updates"
      }
    ]
  },
  "user-sudoers-admin.html": {
    "lead": "Manage Linux users, secondary groups, and SSH authorized keys. Safely edit /etc/sudoers with automated visudo syntax validation to prevent lockouts.",
    "whatIsIt": "The User & Sudoers Administration tool is a visual account management suite for Linux. Create users, assign home directories, configure secondary groups (e.g. <code>sudo</code>, <code>docker</code>), import public SSH keys into <code>authorized_keys</code>, and safely modify sudo privileges.",
    "whyNeedIt": "Accidentally making a typo in <code>/etc/sudoers</code> using a standard editor can lock you out of root access permanently. Adding users and setting up SSH keys via CLI requires running multiple commands with strict permission flags. SSH Desktop validates sudo syntax automatically and automates key provisioning.",
    "codeSnippetTitle": "User Accounts & Active Session Inspector (src/apps/users/UserManager.tsx)",
    "codeSnippet": "// src/apps/users/UserManager.tsx - Tab Architecture\nexport type ActiveTab = 'users' | 'groups' | 'sessions';\n\nexport const UserManager = () => {\n  const [activeTab, setActiveTab] = useState<ActiveTab>('users');\n  const [users, setUsers] = useState<UserEntry[]>([]);\n  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>([]);\n\n  const handleKillSession = async (tty: string) => {\n    // Gracefully terminates remote active login sessions via sudo pkill\n    await invoke('terminate_user_session', { tty });\n  };\n  // ...\n};",
    "prerequisites": [
      "Root access or an account with sudo privileges to manage users and permissions."
    ],
    "features": [
      "<strong>3 Dedicated Admin Tabs:</strong> Users Manager, Groups & Memberships, and Active Login Sessions (<code>w</code>/<code>who</code>).",
      "<strong>SSH Key Provisioning:</strong> Add and revoke SSH public keys for any user with automated permission enforcement (<code>chmod 700 ~/.ssh && chmod 600 authorized_keys</code>).",
      "<strong>Safe Sudoers Editor:</strong> Edit sudo privileges with automated <code>visudo -cf</code> syntax validation before saving to prevent lockouts.",
      "<strong>Active Sessions Monitor:</strong> Inspect logged-in TTY sessions, remote IP addresses, idle times, and terminate unauthorized connections.",
      "<strong>Account Lock / Unlock:</strong> Instantly disable compromised or inactive accounts without deleting home directory data."
    ],
    "steps": [
      {
        "title": "1. Creating a New User Account",
        "content": "Click <strong>+ New User</strong>. Enter username, password, select default shell (e.g. <code>/bin/bash</code>), and check <strong>Grant Sudo Access</strong> if required. SSH Desktop creates the user and provisions their home directory."
      },
      {
        "title": "2. Adding an SSH Authorized Key",
        "content": "Select a user and click <strong>SSH Keys</strong>. Paste the public key (e.g. <code>ssh-ed25519 AAAAC3... user@laptop</code>) and click <strong>Save Key</strong>. SSH Desktop creates the <code>.ssh</code> directory with correct ownership and permissions."
      },
      {
        "title": "3. Editing Sudoers Rules Safely",
        "content": "Switch to the <strong>Sudoers Rules</strong> tab. Add passwordless sudo entries or custom command restrictions. When you click <strong>Save</strong>, SSH Desktop writes to a temporary file and runs <code>visudo -c</code>. If any syntax error exists, the save is aborted with a clear explanation, keeping your server safe!"
      }
    ],
    "underTheHood": "Wraps <code>useradd</code>, <code>usermod</code>, <code>userdel</code>, and <code>passwd</code>. Sudoers verification uses <code>visudo -cf /tmp/sudoers.test</code> before atomically replacing the production config.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Create New User"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save Sudoers Configuration"
      }
    ]
  },
  "disk-smart-manager.html": {
    "lead": "Inspect partition maps, filesystem mount points, LVM volume groups, and drive health metrics (temperature, reallocated sectors, wear level).",
    "whatIsIt": "The Disk, LVM & S.M.A.R.T. Manager gives you complete visibility into your server's storage hierarchy: physical block devices, partitions, filesystem mount points, LVM (Logical Volume Manager) volumes, inode consumption, and hardware drive health.",
    "whyNeedIt": "Running out of disk space or having an SSD fail unexpectedly can cause catastrophic database corruption and downtime. Commands like <code>fdisk -l</code>, <code>lsblk</code>, and <code>smartctl</code> produce complex text outputs. SSH Desktop provides visual capacity bars, health warnings, and LVM graphs.",
    "codeSnippetTitle": "Disk Visualizer & Space Hogs Tab Engine (src/apps/disk/DiskManager.tsx)",
    "codeSnippet": "// src/apps/disk/DiskManager.tsx - Tab Architecture\nexport type DiskTab = 'overview' | 'partitions' | 'smart' | 'swap_tmp' | 'fstab' | 'spacehogs';\n\nexport const DiskManager = () => {\n  const [activeTab, setActiveTab] = useState<DiskTab>('overview');\n  const [disks, setDisks] = useState<BlockDevice[]>([]);\n  const [smartData, setSmartData] = useState<SmartReport | null>(null);\n\n  // Space Hogs executes fast visual disk usage scans (du -ahx / | sort -rh)\n  // ...\n};",
    "prerequisites": [
      "Linux server with block devices (NVMe, SATA SSD, HDD, or cloud virtual volumes).",
      "smartmontools package (smartctl) installed for S.M.A.R.T. hardware telemetry."
    ],
    "features": [
      "<strong>6 Storage Views:</strong> Overview, Partitions (<code>lsblk</code>), S.M.A.R.T. Health, Swap & /tmp Cleaner, Fstab Editor, and Space Hogs (Large File Finder).",
      "<strong>Space Hogs Visualizer:</strong> Fast <code>ncdu</code>/<code>du</code> visual tree map highlighting the largest space-consuming folders and log dumps.",
      "<strong>Inode Usage Inspector:</strong> Detect situations where disk space appears free but files cannot be created due to exhausted inodes.",
      "<strong>S.M.A.R.T. Drive Health:</strong> Monitor drive temperature, reallocated sector counts, power-on hours, and SSD wear percentage.",
      "<strong>Swap & /tmp Manager:</strong> Inspect swap memory usage, swappiness setting, and safely purge `/tmp` and `/var/tmp`."
    ],
    "steps": [
      {
        "title": "1. Inspecting Partition Capacity & Inodes",
        "content": "Open the Disk Manager. The main dashboard displays cards for each mount point (e.g. <code>/</code>, <code>/home</code>, <code>/var</code>). Warning badges appear when capacity exceeds 85% or when inodes are running low."
      },
      {
        "title": "2. Checking S.M.A.R.T. Drive Health",
        "content": "Click the <strong>Drive Health (S.M.A.R.T.)</strong> tab. Select a physical drive (e.g. <code>/dev/nvme0n1</code> or <code>/dev/sda</code>). View drive model, serial number, health status (PASSED), temperature, and raw error counters."
      },
      {
        "title": "3. Finding Large Files with Space Hogs",
        "content": "Switch to the <strong>Space Hogs</strong> tab to scan any directory. The visual tree map highlights the largest directories and files consuming disk space, allowing you to delete orphaned backup archives with one click."
      }
    ],
    "underTheHood": "Executes <code>lsblk -J -o NAME,SIZE,TYPE,MOUNTPOINT,FSTYPE</code>, <code>df -hT</code>, <code>df -i</code>, and <code>smartctl -a -j /dev/&lt;device&gt;</code>. JSON outputs are parsed and bound to responsive data visualizations.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Refresh Storage Metrics"
      }
    ]
  },
  "crontab-scheduler.html": {
    "lead": "Build and manage cron schedules without memorizing asterisk syntax. Test commands, inspect execution logs, and edit user and system crontabs safely.",
    "whatIsIt": "The Visual Crontab Scheduler is an intuitive job scheduler that eliminates the guesswork from cron syntax. Create recurring tasks, choose execution frequencies using human-friendly presets, test command executions in real time, and review run histories.",
    "whyNeedIt": "Standard cron syntax (<code>*/15 * 1,15 * 1-5</code>) is notoriously confusing and easy to mistype. Furthermore, cron jobs fail silently without notifying you when environment variables are missing. SSH Desktop makes scheduling transparent, testable, and reliable.",
    "codeSnippetTitle": "Visual Cron Builder & On-Demand Runner (src/apps/cron/CronManager.tsx)",
    "codeSnippet": "// src/apps/cron/CronManager.tsx\nexport const CronManager = () => {\n  const [cronJobs, setCronJobs] = useState<CronJob[]>([]);\n  const [selectedScope, setSelectedScope] = useState<'user' | 'system'>('user');\n\n  const handleRunNow = async (command: string) => {\n    // Spawns on-demand test execution capturing stdout/stderr and exit code\n    const result = await invoke('cron_test_run', { command });\n    showExecutionResultModal(result);\n  };\n  // ...\n};",
    "prerequisites": [
      "Cron daemon installed and active (cron, crond, or systemd-cron).",
      "Read/write access to user crontab (crontab -e) or root access for /etc/crontab."
    ],
    "features": [
      "<strong>Visual Schedule Builder:</strong> Build schedules visually: \"Every 15 minutes\", \"Daily at 3:00 AM\", \"Every Monday\", or custom cron expressions.",
      "<strong>1-Click Command Testing:</strong> Run any cron job on demand immediately to test exit codes and stdout/stderr before scheduling.",
      "<strong>Multi-Scope Management:</strong> Switch between user crontabs (<code>crontab -l</code>) and system-wide crontabs (<code>/etc/crontab</code>, <code>/etc/cron.d/</code>).",
      "<strong>Run History &amp; Logs:</strong> Inspect cron execution timestamps directly from system logs to verify that jobs are firing on time.",
      "<strong>Environment Variable Setup:</strong> Easily define custom <code>PATH</code>, <code>MAILTO</code>, and <code>SHELL</code> variables for your cron environment."
    ],
    "steps": [
      {
        "title": "1. Creating a New Cron Job",
        "content": "Click <strong>+ New Cron Job</strong>. Choose a schedule preset (e.g. \"Every Day at Midnight\") or enter a custom expression. The human translation updates in real time (e.g. \"At 00:00 every day\"). Enter the command to run (e.g. <code>/usr/local/bin/backup.sh</code>) and click <strong>Save</strong>."
      },
      {
        "title": "2. Testing Command Execution Immediately",
        "content": "Click the ▶️ <strong>Run Now</strong> button next to any scheduled job. SSH Desktop executes the command in a subshell, captures stdout and stderr, and displays the exit status so you can verify that the command works in the cron environment."
      },
      {
        "title": "3. Reviewing Execution Logs",
        "content": "Click <strong>Execution Logs</strong> to view historical cron triggers extracted from <code>/var/log/syslog</code> or <code>journalctl -u cron</code>."
      }
    ],
    "underTheHood": "Reads user crontab using <code>crontab -l</code> and system crontabs from <code>/etc/cron*</code>. Saves updates via atomic writes to <code>crontab -</code> to guarantee file lock integrity.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "New Cron Job"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save Crontab"
      }
    ]
  }
};
