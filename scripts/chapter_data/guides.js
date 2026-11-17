// scripts/chapter_data/guides.js
module.exports = {
  "tutorials.html": {
    "lead": "Master everyday Linux server management with practical visual tutorials. Learn how to deploy Docker containers, configure encrypted database tunnels, manage web files, and secure your servers.",
    "whatIsIt": "The Tutorials Hub provides hands-on, step-by-step guides for the 10 most common Linux server administration scenarios. Rather than reading theoretical documentation, these tutorials walk you through exact visual workflows in SSH Desktop.",
    "whyNeedIt": "Managing Linux servers often involves navigating fragmented documentation across multiple software tools. These tutorials provide a unified, end-to-end blueprint for managing infrastructure visually without remote agents.",
    "prerequisites": [
      "SSH Desktop installed on macOS, Windows, or Linux.",
      "A remote Linux server (VPS or bare metal) accessible over SSH port 22."
    ],
    "features": [
      "<strong>10 Hands-on Tutorials:</strong> Covers fresh server setup, Docker stacks, database tunnels, SFTP, Nginx, SSL certs, backups, UFW, logs, and fleet automation.",
      "<strong>Zero Server Footprint:</strong> Every tutorial executes via native Linux commands over SSH without installing remote server agents.",
      "<strong>Visual UI & Terminal Parity:</strong> Learn both the visual GUI workflows and the exact underlying Linux commands executed."
    ],
    "steps": [
      {
        "title": "1. Tutorial: Fresh Server Setup & Ed25519 Keys",
        "content": "Generate modern Ed25519 keys, copy to <code>authorized_keys</code>, configure host profile, and verify connection fingerprint in under 2 minutes."
      },
      {
        "title": "2. Tutorial: Deploying a Multi-Container Docker Stack",
        "content": "Open Docker Hub, switch to the Compose Editor, paste your <code>docker-compose.yml</code>, click Build & Run, and inspect live container logs."
      },
      {
        "title": "3. Tutorial: Accessing Private Databases Over SSH",
        "content": "Connect to PostgreSQL, MySQL, MariaDB, or Redis listening on <code>127.0.0.1</code> through an automated Direct-TCPIP tunnel without opening public database ports."
      },
      {
        "title": "4. Tutorial: Visual Nginx Reverse Proxy with Zero Downtime",
        "content": "Configure virtual host server blocks, test configurations with automated <code>nginx -t</code> checks, and reload web servers safely."
      }
    ],
    "underTheHood": "Tutorials leverage standard OpenSSH channel multiplexing (PTY, SFTP binary subsystem, and Direct-TCPIP sockets).",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Spotlight Quick Launcher"
      }
    ]
  },
  "cheat-sheet.html": {
    "lead": "The ultimate sysadmin quick reference card. Essential OpenSSH commands, Ed25519 keypair generation, port forwarding tunnel syntax, systemd controls, and firewall rules.",
    "whatIsIt": "The Linux Server & SSH Cheat Sheet is a curated reference guide of the most critical terminal commands used in day-to-day server administration. It provides exact command syntax for SSH keygen, port forwarding, systemd management, and security auditing.",
    "whyNeedIt": "Even seasoned sysadmins forget exact flag syntax for tunnel forwarding (<code>-L</code> vs <code>-R</code> vs <code>-D</code>) or octal permissions. This cheat sheet serves as an instant reference companion.",
    "prerequisites": [
      "Any Linux distribution running OpenSSH."
    ],
    "features": [
      "<strong>Complete SSH Command Syntax:</strong> Covers key generation, remote port forwarding, Jump Hosts, and verbose debugging.",
      "<strong>Systemd Lifecycle Reference:</strong> Commands for starting, stopping, reloading, enabling, and inspecting failed units.",
      "<strong>UFW & Networking Cheat Sheet:</strong> Port allowance, rate limiting, and socket inspection with <code>ss</code>."
    ],
    "steps": [
      {
        "title": "1. SSH Key Management & Permissions Syntax",
        "content": "Essential key generation and permission commands:\n<div class=\"docs-code-block\"># Generate Ed25519 key\nssh-keygen -t ed25519 -C \"admin@sshdesktop\"\n\n# Copy public key to server\nssh-copy-id -i ~/.ssh/id_ed25519.pub user@server\n\n# Strict file permissions\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/id_ed25519\nchmod 644 ~/.ssh/id_ed25519.pub</div>"
      },
      {
        "title": "2. SSH Port Forwarding & Tunneling Syntax",
        "content": "Quick reference for Local, Remote, and Dynamic forwarding:\n<div class=\"docs-code-block\"># Local Forwarding: ssh -L [local_port]:[remote_host]:[remote_port]\nssh -L 5432:localhost:5432 user@server\n\n# Remote Forwarding: ssh -R [remote_port]:[local_host]:[local_port]\nssh -R 8080:localhost:3000 user@server\n\n# Dynamic SOCKS5 Proxy\nssh -D 1080 -N -f user@server\n\n# Multi-hop Jump Host\nssh -J jump.example.com user@target-node</div>"
      },
      {
        "title": "3. Systemd Unit Controls",
        "content": "Managing services and timers:\n<div class=\"docs-code-block\">sudo systemctl start nginx\nsudo systemctl stop nginx\nsudo systemctl restart nginx\nsudo systemctl reload nginx\nsudo systemctl enable nginx\nsudo systemctl status nginx\nsudo systemctl --failed\nsudo journalctl -u nginx -f --tail=100</div>"
      },
      {
        "title": "4. Visual Equivalent in SSH Desktop",
        "content": "Every command in this cheat sheet is natively available as a one-click visual action in SSH Desktop's 25 native applications (Systemd Services, Database Studio, Firewall Manager, and Tunnels)."
      }
    ],
    "underTheHood": "All cheat sheet operations map directly to standard POSIX system calls and OpenSSH protocol requests.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Search Cheat Sheet Commands"
      }
    ]
  },
  "keyboard-shortcuts.html": {
    "lead": "Comprehensive master cheat sheet of keyboard shortcuts and hotkeys for SSH Desktop. Supercharge your server administration speed and navigate entirely without a mouse.",
    "whatIsIt": "SSH Desktop features an extensive keyboard navigation engine. Whether you are splitting terminal panes, navigating remote directories in SFTP, inspecting processes, or switching between multi-server sessions, hotkeys allow you to perform every action in milliseconds.",
    "whyNeedIt": "Reaching for the mouse during complex server maintenance interrupts developer flow. Mastering core shortcuts allows sysadmins to triage production incidents, jump between logs and terminals, and edit remote configuration files at blazing speed.",
    "prerequisites": [
      "Standard keyboard on macOS, Windows, or Linux."
    ],
    "features": [
      "<strong>Global Spotlight Launcher:</strong> Press <kbd>Cmd/Ctrl + K</kbd> anywhere to search and launch any app, connection, or command snippet.",
      "<strong>Terminal Split Pane Navigation:</strong> Split terminals horizontally (<kbd>Cmd+D</kbd>) or vertically (<kbd>Cmd+Shift+D</kbd>) and jump between panes effortlessly.",
      "<strong>Window Management Hotkeys:</strong> Snap windows left, right, or maximize with standard keyboard shortcuts.",
      "<strong>Monaco Editor Hotkeys:</strong> VS Code keyboard parity: multi-cursor (<kbd>Alt+Click</kbd>), quick open (<kbd>Cmd+P</kbd>), and regex replace (<kbd>Cmd+H</kbd>)."
    ],
    "steps": [
      {
        "title": "1. Desktop Shell & Window Management Shortcuts",
        "content": "Master core desktop windowing commands:\n<ul>\n  <li><kbd>Cmd/Ctrl + K</kbd>: Open Spotlight Application &amp; Server Launcher</li>\n  <li><kbd>Cmd/Ctrl + Shift + S</kbd>: Open Multi-Server Switcher Dropdown</li>\n  <li><kbd>Cmd/Ctrl + W</kbd>: Close Active Window</li>\n  <li><kbd>Cmd/Ctrl + M</kbd>: Minimize Active Window</li>\n  <li><kbd>Cmd/Ctrl + Option + 0</kbd>: Tile &amp; Center All Windows on Screen</li>\n  <li><kbd>Cmd/Ctrl + ,</kbd>: Open Preferences</li>\n</ul>"
      },
      {
        "title": "2. Interactive PTY Terminal Shortcuts",
        "content": "Navigate multi-pane terminal sessions:\n<ul>\n  <li><kbd>Cmd/Ctrl + T</kbd>: New Terminal Shell Tab</li>\n  <li><kbd>Cmd/Ctrl + D</kbd>: Split Terminal Pane Horizontally</li>\n  <li><kbd>Cmd/Ctrl + Shift + D</kbd>: Split Terminal Pane Vertically</li>\n  <li><kbd>Cmd/Ctrl + [</kbd> / <kbd>]</kbd>: Switch to Previous / Next Split Pane</li>\n  <li><kbd>Cmd/Ctrl + F</kbd>: Search Terminal Buffer History</li>\n  <li><kbd>Cmd/Ctrl + Shift + K</kbd>: Clear Terminal Screen &amp; Scrollback</li>\n</ul>"
      },
      {
        "title": "3. Monaco Code Editor Shortcuts",
        "content": "Full VS Code keybinding compatibility:\n<ul>\n  <li><kbd>Cmd/Ctrl + S</kbd>: Save File (with automatic sudo elevation if needed)</li>\n  <li><kbd>Cmd/Ctrl + P</kbd>: Quick Open File by Name</li>\n  <li><kbd>Cmd/Ctrl + F</kbd>: Find in File</li>\n  <li><kbd>Cmd/Ctrl + H</kbd>: Find and Replace</li>\n  <li><kbd>Alt + Click</kbd>: Add Multiple Cursors</li>\n  <li><kbd>Cmd/Ctrl + /</kbd>: Toggle Line Comment</li>\n</ul>"
      },
      {
        "title": "4. SFTP File Manager & App Shortcuts",
        "content": "File operations and monitoring:\n<ul>\n  <li><kbd>Cmd/Ctrl + H</kbd>: Toggle Hidden Files (dotfiles)</li>\n  <li><kbd>Cmd/Ctrl + Shift + N</kbd>: Create New Directory</li>\n  <li><kbd>F5</kbd> / <kbd>Cmd/Ctrl + R</kbd>: Refresh Current Folder or Telemetry</li>\n  <li><kbd>Cmd/Ctrl + Backspace</kbd>: Delete Selected Files</li>\n</ul>"
      }
    ],
    "underTheHood": "Keyboard events are intercepted at the desktop shell level with sub-millisecond dispatching.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Spotlight Quick Launcher"
      },
      {
        "key": "Cmd/Ctrl + D",
        "desc": "Split Terminal Horizontally"
      },
      {
        "key": "Cmd/Ctrl + Shift + D",
        "desc": "Split Terminal Vertically"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save File in Monaco"
      }
    ]
  },
  "troubleshooting.html": {
    "lead": "The definitive troubleshooting manual for SSH Desktop. Step-by-step diagnostic procedures for resolving connection errors, authentication failures, firewall blocks, and permissions.",
    "whatIsIt": "The Troubleshooting Guide is a practical handbook designed to resolve every common SSH issue encountered when connecting to remote Linux servers. It includes step-by-step diagnostic workflows for connection timeouts, public key rejection, host key mismatches, and Docker socket permission errors.",
    "whyNeedIt": "When server connections fail, sysadmins need fast, actionable solutions rather than deciphering cryptic error codes. This guide explains exactly what causes each error and how to fix it on the server or in SSH Desktop.",
    "prerequisites": [
      "SSH Desktop application.",
      "Access to remote server console (via cloud provider web console or local terminal) if locked out."
    ],
    "features": [
      "<strong>Connection Refused Diagnostics:</strong> Step-by-step check for sshd daemon status, firewall rules, and listening ports.",
      "<strong>Permission Denied (publickey) Fix:</strong> How to verify `~/.ssh/authorized_keys` permissions and private key matching.",
      "<strong>Host Key Verification Recovery:</strong> How to reset changed host fingerprints safely after a server reinstall.",
      "<strong>Docker Socket Access Fix:</strong> Resolving \"permission denied while connecting to Docker daemon socket\" with `usermod`."
    ],
    "steps": [
      {
        "title": "1. Diagnosing \"Connection Refused on Port 22\"",
        "content": "A \"Connection Refused\" error means no daemon is listening on port 22 or a firewall is actively rejecting packets:\n<ol>\n  <li>Verify the OpenSSH server service is active: <code>sudo systemctl status ssh</code> (Ubuntu/Debian) or <code>sudo systemctl status sshd</code> (RHEL/CentOS).</li>\n  <li>If stopped, start it: <code>sudo systemctl start ssh && sudo systemctl enable ssh</code>.</li>\n  <li>Verify the server is listening on port 22: <code>sudo ss -tulpn | grep :22</code>.</li>\n  <li>Ensure your firewall allows incoming traffic: <code>sudo ufw allow 22/tcp</code>.</li>\n</ol>"
      },
      {
        "title": "2. Fixing \"Permission Denied (publickey, gssapi-keyex)\"",
        "content": "This error indicates that the remote server rejected your SSH private key:\n<ol>\n  <li>Ensure your public key is added to the remote user's authorized keys: <code>cat ~/.ssh/id_ed25519.pub | ssh user@server \"mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys\"</code>.</li>\n  <li>Fix remote directory permissions (OpenSSH strictly rejects permissive permissions):\n    <div class=\"docs-code-block\">chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys</div>\n  </li>\n  <li>Check <code>/etc/ssh/sshd_config</code> to ensure <code>PubkeyAuthentication yes</code> is enabled.</li>\n</ol>"
      },
      {
        "title": "3. Resolving \"Host Key Verification Failed\"",
        "content": "This warning occurs when the remote host's cryptographic fingerprint changes (e.g. after a server OS reinstall):\n<ol>\n  <li>In SSH Desktop, click <strong>Reset Known Host Key</strong> in the security modal.</li>\n  <li>Alternatively, remove the stale fingerprint manually: <code>ssh-keygen -R &lt;server-ip&gt;</code>.</li>\n  <li>Reconnect and accept the new fingerprint.</li>\n</ol>"
      },
      {
        "title": "4. Resolving \"Docker Daemon Socket Permission Denied\"",
        "content": "If the Docker Hub reports permission denied when accessing <code>/var/run/docker.sock</code>:\n<ol>\n  <li>Add your SSH user to the <code>docker</code> group: <code>sudo usermod -aG docker $USER</code>.</li>\n  <li>Log out and log back in to refresh group memberships.</li>\n  <li>Ensure the Docker daemon is active: <code>sudo systemctl status docker</code>.</li>\n</ol>"
      }
    ],
    "underTheHood": "Explains OpenSSH authentication phases, handshake packet exchange, and `~/.ssh/known_hosts` cryptographic hashing.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + L",
        "desc": "Open Verbose Handshake Log"
      }
    ]
  },
  "raspberry-pi-desktop.html": {
    "lead": "Complete guide to managing Raspberry Pi single-board computers (Pi 5, 4, 3, Zero) with SSH Desktop. Monitor CPU temperatures, manage homelab Docker containers, and edit config files visually.",
    "whatIsIt": "The Raspberry Pi Remote Desktop guide shows you how to transform any headless Raspberry Pi board running Raspberry Pi OS (Raspbian), DietPi, or Ubuntu into an intuitive macOS-style visual workspace. It lets you monitor ARM CPU temperature sensors, edit `/boot/firmware/config.txt`, manage Docker containers, and run terminal sessions with zero screen lag.",
    "whyNeedIt": "Traditional VNC or RDP on Raspberry Pi boards consumes significant CPU and RAM, leading to sluggish pointer movements and high CPU heat. SSH Desktop runs 100% agentlessly over lightweight SSH port 22: all rendering happens on your client PC, leaving 100% of the Pi's RAM and processing power for your homelab services.",
    "prerequisites": [
      "Raspberry Pi board (Pi 5, Pi 4, Pi 3, Pi 2, or Pi Zero 2 W).",
      "Raspberry Pi OS (32-bit or 64-bit), DietPi, or Ubuntu Server installed on MicroSD / NVMe SSD.",
      "SSH enabled during flashing via Raspberry Pi Imager or by adding an empty `ssh` file to `/boot`.",
      "Pi connected to local network via Wi-Fi or Ethernet."
    ],
    "features": [
      "<strong>Zero-Lag Visual Management:</strong> Complete GUI workspace without running heavy VNC servers on the Pi.",
      "<strong>Live Hardware Thermals:</strong> Monitor Broadcom SoC temperature in real time to prevent thermal throttling.",
      "<strong>Boot Config Editor:</strong> Edit `/boot/firmware/config.txt` and overlay settings safely in Monaco.",
      "<strong>Homelab Docker Hub:</strong> Deploy and manage Home Assistant, Pi-hole, Plex, and Nextcloud containers with one click."
    ],
    "steps": [
      {
        "title": "1. Enabling SSH on Raspberry Pi OS",
        "content": "When flashing your MicroSD card with Raspberry Pi Imager, click the gear icon to set a username, password, Wi-Fi credentials, and enable SSH. Alternatively, create an empty file named <code>ssh</code> in the root of the boot partition before booting."
      },
      {
        "title": "2. Connecting to Your Raspberry Pi",
        "content": "Open SSH Desktop and click <strong>+ New Connection</strong>. Enter <code>raspberrypi.local</code> (or your Pi's local network IP, e.g. <code>192.168.1.150</code>), port <code>22</code>, username (default <code>pi</code>), and your password or SSH key. Click Connect."
      },
      {
        "title": "3. Monitoring Broadcom SoC CPU Thermals",
        "content": "Launch the <strong>Hardware Telemetry Monitor</strong>. SSH Desktop auto-detects Raspberry Pi hardware and reads CPU temperatures directly from <code>/sys/class/thermal/thermal_zone0/temp</code>. A color-coded gauge alerts you if your Pi exceeds 70°C and risks thermal throttling."
      },
      {
        "title": "4. Editing config.txt & Managing Homelab Containers",
        "content": "Open <strong>Monaco Code Editor</strong> and navigate to <code>/boot/firmware/config.txt</code> to adjust HDMI, fan, or overclocking settings safely with automated sudo elevation on save. Launch <strong>Docker Hub</strong> to inspect running containers like Pi-hole, Home Assistant, and Jellyfin."
      }
    ],
    "underTheHood": "Reads thermal zone counters directly from `/sys/class/thermal/thermal_zone0/temp` and executes `vcgencmd measure_temp`.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Refresh Pi Thermals and Telemetry"
      },
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Spotlight Quick Launcher"
      }
    ]
  },
  "rdp-over-ssh.html": {
    "lead": "How to securely tunnel Remote Desktop Protocol (RDP port 3389) over encrypted SSH port 22. Access remote Windows servers and Linux XRDP desktops without exposing port 3389 publicly.",
    "whatIsIt": "The RDP Over SSH guide explains how to route Microsoft Remote Desktop Protocol (port 3389) traffic through an encrypted SSH tunnel created by SSH Desktop. This allows you to manage Windows VPS instances or Linux XRDP desktops securely from anywhere in the world.",
    "whyNeedIt": "Exposing raw RDP port 3389 directly to the public internet is a major security vulnerability: automated ransomware bots continuously brute-force exposed RDP ports. Tunneling RDP through SSH port 22 encrypts all session traffic, conceals port 3389 from external scanners, and requires strong SSH cryptographic key authentication to access.",
    "prerequisites": [
      "Remote server running OpenSSH server and an RDP service (Windows Remote Desktop or Linux `xrdp`).",
      "Local RDP client installed (Microsoft Remote Desktop on macOS/Windows, Remmina on Linux).",
      "SSH credentials to the target host or an intermediate Linux gateway."
    ],
    "features": [
      "<strong>Complete Port Cloaking:</strong> Keep port 3389 closed in your public cloud firewall; all traffic flows over port 22.",
      "<strong>End-to-End Cryptography:</strong> Protect legacy RDP ciphers with modern SSH AES-256-GCM or ChaCha20-Poly1305 encryption.",
      "<strong>One-Click Tunnel Profile:</strong> Save the RDP tunnel configuration in SSH Desktop to launch it automatically on demand.",
      "<strong>Cross-Platform Support:</strong> Connect to Windows Server 2019/2022/2025, Windows 10/11 Pro, and Ubuntu XRDP desktops."
    ],
    "steps": [
      {
        "title": "1. Opening SSH Port Forwarding in SSH Desktop",
        "content": "Connect to your remote server or gateway in SSH Desktop. Open the <strong>SSH Port Forwarding &amp; Tunnels</strong> app from the Dock or Spotlight (<kbd>Cmd+K</kbd>)."
      },
      {
        "title": "2. Creating the Local RDP Tunnel Rule",
        "content": "Click <strong>+ New Tunnel</strong> and configure:\n<ul>\n  <li><strong>Tunnel Type:</strong> Local (-L)</li>\n  <li><strong>Local Port:</strong> <code>3389</code> (or <code>13389</code> if you are running a local Windows desktop)</li>\n  <li><strong>Destination Host:</strong> <code>127.0.0.1</code> (or the internal LAN IP of your Windows machine)</li>\n  <li><strong>Destination Port:</strong> <code>3389</code></li>\n  <li>Click <strong>Save &amp; Start Tunnel</strong>.</li>\n</ul>"
      },
      {
        "title": "3. Connecting with Microsoft Remote Desktop",
        "content": "Open your local RDP client (Microsoft Remote Desktop or <code>mstsc.exe</code>). In the Computer / PC Name field, enter <code>127.0.0.1:3389</code> (or the custom local port you chose). Enter your Windows username and password and click Connect."
      },
      {
        "title": "4. Verifying Encrypted Traffic in SSH Desktop",
        "content": "Switch back to SSH Desktop. The RDP tunnel card shows active connection status, current bandwidth throughput, and transferred bytes flowing securely through your encrypted SSH connection."
      }
    ],
    "underTheHood": "Multiplexes Direct-TCPIP stream over the established OpenSSH session, forwarding local TCP packets to the remote loopback interface.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + T",
        "desc": "Open Tunnels Manager"
      }
    ]
  },
  "aws-ec2-guide.html": {
    "lead": "Step-by-step guide to connecting and managing AWS EC2 instances with SSH Desktop. Learn how to use .pem keys, configure VPC Security Groups, and connect through Bastion jump hosts.",
    "whatIsIt": "The AWS EC2 Guide provides an end-to-end tutorial on integrating SSH Desktop with Amazon Web Services (AWS) Elastic Compute Cloud (EC2). It covers creating host profiles with `.pem` keypairs, configuring Amazon VPC Security Groups for secure port 22 access, connecting to private VPC instances through an EC2 Bastion host, and managing fleets of cloud servers.",
    "whyNeedIt": "Managing AWS EC2 instances via the AWS Management Console requires constant browser logins, slow EC2 Instance Connect web terminals, and manual session tracking. SSH Desktop lets you connect directly to EC2 instances from your desktop with native performance, multi-tab terminal split panes, and visual Docker/database management.",
    "prerequisites": [
      "Active AWS account with running EC2 instance (Ubuntu, Amazon Linux 2023, Debian, or RHEL).",
      "AWS Key Pair private key file (`.pem`).",
      "EC2 Security Group configured with inbound rule allowing SSH (port 22) from your IP address.",
      "Public IPv4 address or Elastic IP attached to the EC2 instance."
    ],
    "features": [
      "<strong>Direct .pem Key Support:</strong> Connect directly using standard AWS `.pem` private keys without running PuTTYgen conversions.",
      "<strong>Amazon Linux & Ubuntu Optimization:</strong> Native compatibility with default EC2 usernames (`ec2-user`, `ubuntu`, `admin`, `centos`).",
      "<strong>Private VPC Bastion Routing:</strong> Seamlessly jump into private EC2 database instances that have no public IP addresses.",
      "<strong>Cloud Fleet Tagging:</strong> Group your EC2 servers by AWS region (e.g. `us-east-1`, `eu-west-1`) and environment tags."
    ],
    "steps": [
      {
        "title": "1. Locating EC2 Public IP & Key Pair",
        "content": "In the AWS EC2 Console, select your instance and locate its <strong>Public IPv4 address</strong> (or Elastic IP). Ensure you have downloaded the <code>.pem</code> keypair created during instance launch."
      },
      {
        "title": "2. Configuring AWS VPC Security Group",
        "content": "Select your EC2 instance's Security Group &rarr; <strong>Edit inbound rules</strong>. Add an Inbound Rule:\n<ul>\n  <li><strong>Type:</strong> SSH</li>\n  <li><strong>Port:</strong> <code>22</code></li>\n  <li><strong>Source:</strong> <em>My IP</em> (recommended for security) or your office CIDR range.</li>\n  <li>Click <strong>Save rules</strong>.</li>\n</ul>"
      },
      {
        "title": "3. Adding the EC2 Profile in SSH Desktop",
        "content": "Click <strong>+ New Connection</strong> in SSH Desktop:\n<ul>\n  <li><strong>Host / IP:</strong> Your EC2 Public IPv4 address</li>\n  <li><strong>Username:</strong> <code>ubuntu</code> (for Ubuntu AMIs), <code>ec2-user</code> (for Amazon Linux / RHEL), or <code>admin</code> (for Debian)</li>\n  <li><strong>Auth Mode:</strong> Choose <em>Private Key</em> and browse to your downloaded <code>.pem</code> file.</li>\n  <li>Click <strong>Connect</strong>.</li>\n</ul>"
      },
      {
        "title": "4. Routing to Private EC2 Instances via Bastion",
        "content": "For database instances located in private subnets, toggle <strong>Bastion / Jump Host</strong> in the connection settings. Set the public Bastion EC2 instance as the jump box. SSH Desktop opens an encrypted tunnel through the bastion into your private node."
      }
    ],
    "underTheHood": "Authenticates using RSA 2048/4096 or Ed25519 AWS keypairs and multiplexes channels over AWS VPC network interfaces.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "New Connection Modal"
      }
    ]
  },
  "cloud-vps-guide.html": {
    "lead": "Complete guide to managing multi-cloud Linux VPS instances across DigitalOcean, Hetzner Cloud, Linode, Vultr, and OVH with SSH Desktop.",
    "whatIsIt": "The Multi-Cloud VPS Guide shows how to centralize your server fleet across multiple cloud hosting providers. Learn how to connect to DigitalOcean Droplets, Hetzner Cloud Cloud Servers, Linode (Akamai) Compute Instances, Vultr, and OVH with zero agents, unified key management, and instant multi-server switching.",
    "whyNeedIt": "Many companies and developers use multiple cloud providers to optimize costs and prevent vendor lock-in. Juggling 4 or 5 different provider web dashboards is slow and disjointed. SSH Desktop provides a single unified visual command center for all your cloud servers.",
    "prerequisites": [
      "Cloud VPS instance running any Linux distribution (Ubuntu, Debian, Rocky, Alma, Arch, Fedora, Alpine).",
      "Public IP address assigned to the VPS.",
      "SSH access via root user or a sudo-enabled user account with an SSH keypair."
    ],
    "features": [
      "<strong>Provider-Agnostic Management:</strong> Connect to any cloud host identically over standard OpenSSH port 22.",
      "<strong>Zero Agent Resource Cost:</strong> Cloud VPS instances run with 100% of their RAM and CPU available for your applications.",
      "<strong>Unified SSH Key Distribution:</strong> Use your local Ed25519 keypair across all cloud providers effortlessly.",
      "<strong>Multi-Server Broadcast:</strong> Run maintenance and update scripts across all cloud instances simultaneously with the Multi-Server Automation app."
    ],
    "steps": [
      {
        "title": "1. Deploying a Cloud VPS Instance",
        "content": "Launch your cloud instance on DigitalOcean, Hetzner, Linode, or Vultr. During creation, paste your local SSH public key (<code>cat ~/.ssh/id_ed25519.pub</code>) into the provider's SSH Key selector for automatic passwordless provisioning."
      },
      {
        "title": "2. Adding Cloud Servers to SSH Desktop",
        "content": "Click <strong>+ New Connection</strong> in SSH Desktop. Enter the public IP address provided by your cloud host, set username to <code>root</code> (or your configured admin user), select your Ed25519 private key, and assign a provider tag (e.g. <code>Hetzner-Nuremberg</code>, <code>DO-NYC3</code>)."
      },
      {
        "title": "3. Configuring Visual UFW Firewalls Across Providers",
        "content": "Different cloud providers have varying cloud firewalls. Open the <strong>Visual Firewall Manager</strong> in SSH Desktop to standardize internal UFW rules across all your servers regardless of which cloud host they run on."
      },
      {
        "title": "4. Broadcasting Fleet Maintenance Across Clouds",
        "content": "Launch the <strong>Multi-Server Automation</strong> app. Select servers across DigitalOcean, Hetzner, and Linode simultaneously and execute security updates or Docker deployments in parallel with aggregated output."
      }
    ],
    "underTheHood": "Communicates with remote cloud instances over standard TCP/IP OpenSSH sockets, completely independent of cloud provider APIs.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Shift + S",
        "desc": "Open Server Switcher Dropdown"
      }
    ]
  },
  "faq.html": {
    "lead": "Answers to frequently asked questions about SSH Desktop: architecture, security, performance, licensing, and day-to-day server operations.",
    "whatIsIt": "The FAQ knowledge base addresses the most common questions asked by sysadmins, DevOps engineers, and developers adopting SSH Desktop. It covers everything from how agentless communication works over port 22 to security auditing, supported Linux distros, and multi-server management.",
    "whyNeedIt": "Evaluating modern infrastructure tools requires clear, transparent answers about security, resource overhead, open-source licensing, and compatibility.",
    "prerequisites": [
      "None. Applicable to all users exploring or managing servers with SSH Desktop."
    ],
    "features": [
      "<strong>Architectural Clarifications:</strong> Clear explanations of how SSH Desktop achieves 100% agentless management without remote daemons.",
      "<strong>Security Guarantees:</strong> In-depth breakdown of zero-telemetry policy, OS keychain encryption, and OpenSSH protocol compliance.",
      "<strong>Compatibility Matrix:</strong> Comprehensive list of supported Linux distributions (Ubuntu, Debian, RHEL, CentOS, Rocky, Alma, Fedora, Arch, Alpine, openSUSE).",
      "<strong>Troubleshooting Solutions:</strong> Direct answers to common connection and permission queries."
    ],
    "steps": [
      {
        "title": "1. How does SSH Desktop manage servers without installing agents?",
        "content": "Traditional web control panels (cPanel, Webmin, Cockpit, Portainer) run persistent daemon processes on your server. SSH Desktop works entirely through standard OpenSSH: it establishes an encrypted SSH session and executes native Linux commands (such as <code>systemctl</code>, <code>docker</code>, <code>ufw</code>, and <code>/proc</code> readers). All parsing, GUI rendering, and windowing happen locally on your PC, leaving zero background footprint on your server."
      },
      {
        "title": "2. Where are my SSH keys and credentials stored?",
        "content": "Your private keys, passwords, and passphrases never leave your local machine. Passphrases are stored in your operating system's hardware-encrypted credential vault: macOS Keychain, Windows Credential Manager (DPAPI), or Linux Secret Service. SSH Desktop has zero telemetry, zero analytics, and zero cloud accounts."
      },
      {
        "title": "3. Do I need to open any extra firewall ports on my server?",
        "content": "No. All 25 applications communicate exclusively through your existing OpenSSH port (port 22 by default). You never need to open insecure web ports (like 9090, 10000, or 9443) on your server."
      },
      {
        "title": "4. What Linux distributions are supported?",
        "content": "SSH Desktop supports any Linux server running OpenSSH 7.0 or newer. Verified distributions include Ubuntu (18.04 to 24.04 LTS), Debian (10 to 13), Red Hat Enterprise Linux / CentOS / Rocky / AlmaLinux (7 to 9), Fedora, Arch Linux, Alpine Linux, Amazon Linux, and openSUSE."
      }
    ],
    "underTheHood": "Explains POSIX command execution over encrypted OpenSSH channels (PTY, SFTP, Direct-TCPIP).",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Search FAQ Knowledge Base"
      }
    ]
  }
};
