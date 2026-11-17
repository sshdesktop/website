// scripts/chapter_data/core.js
module.exports = {
  "getting-started.html": {
    "lead": "Official setup and onboarding guide for SSH Desktop. Learn how to install the native desktop binary, generate high-security Ed25519 cryptographic keys, automatically import ~/.ssh/config hosts, configure Bastion / ProxyJump tunnels, and launch your first macOS Sonoma-style cloud desktop.",
    "whatIsIt": "SSH Desktop is an agentless, open-source desktop client built with Rust (Tauri 2.0) and React 19. It connects to any remote Linux server over standard OpenSSH (Port 22) and renders a full macOS Sonoma-style visual desktop environment with 25 native management applications. Unlike legacy web control panels (cPanel, Webmin, Cockpit, Portainer), SSH Desktop requires ZERO software installed on your remote server.",
    "whyNeedIt": "Managing multiple remote servers usually requires juggling dozens of terminal windows, memorizing obscure command flags, writing error-prone config files, or running heavy web control panels that consume 200MB-500MB of remote RAM and expose vulnerable HTTP ports to the public internet. SSH Desktop eliminates this friction: all parsing, rendering, and window management occur locally on your PC, while executing standard POSIX commands over encrypted SSH channels.",
    "codeSnippetTitle": "Rust Tauri 2.0 Backend: SSH Connection Initialization (src-tauri/src/main.rs & src-tauri/src/ssh/connection.rs)",
    "codeSnippet": "// src-tauri/src/ssh/connection.rs\npub async fn establish_ssh_connection(\n    config: SshConnectionConfig,\n) -> Result<SshSessionHandle, SshError> {\n    let mut session = Session::new()?;\n    session.set_tcp_stream(TcpStream::connect((config.host.as_str(), config.port)).await?);\n    session.handshake()?;\n\n    // Authenticate via Ed25519/RSA private key or agent\n    if let Some(key_path) = config.identity_file {\n        session.userauth_pubkey_file(&config.user, None, Path::new(&key_path), config.passphrase.as_deref())?;\n    } else if let Some(password) = config.password {\n        session.userauth_password(&config.user, &password)?;\n    }\n\n    Ok(SshSessionHandle::new(session))\n}",
    "prerequisites": [
      "Local PC: macOS (Universal M1-M4 Apple Silicon & Intel x86_64), Windows 10/11 (64-bit), or Linux Desktop (AppImage, deb, rpm).",
      "Remote Server: Any Linux distribution (Ubuntu 18.04+, Debian 10+, CentOS/RHEL 7+, Rocky, Alma, Fedora, Arch, Alpine, openSUSE).",
      "OpenSSH Server (sshd) active and listening on port 22 or custom port on remote machine.",
      "Credentials: Root or non-root user credentials with either an SSH Private Key (Ed25519/RSA) or password."
    ],
    "features": [
      "<strong>Universal Cross-Platform:</strong> Native compiled binaries for macOS, Windows, and Linux with native OS Keychain/DPAPI credential storage.",
      "<strong>Modern Cryptography:</strong> Support for Ed25519, ECDSA (nistp256/384/521), RSA (2048-4096 bit), and hardware security tokens.",
      "<strong>Automated ~/.ssh/config Parser:</strong> Auto-detects existing OpenSSH hosts, parsing HostName, User, Port, IdentityFile, and ProxyJump.",
      "<strong>Bastion & Jump Host Support:</strong> Transparent multi-hop SSH routing (<code>ProxyJump bastion.example.com</code>) for private VPC servers.",
      "<strong>100% Agentless & Zero Footprint:</strong> Leaves 0 MB RAM footprint and 0 persistent daemon processes on remote machines."
    ],
    "steps": [
      {
        "title": "Step 1: Download & Install the Native Binary",
        "content": "Download the official package matching your operating system:\n<ul>\n  <li><strong>macOS:</strong> Open the Universal <code>.dmg</code> and drag SSH Desktop into your <code>/Applications</code> directory.</li>\n  <li><strong>Windows:</strong> Run the signed <code>.msi</code> or standalone <code>.exe</code> installer and follow the setup wizard.</li>\n  <li><strong>Linux Desktop:</strong> Execute <code>chmod +x sshdesktop*.AppImage && ./sshdesktop*.AppImage</code> or install via <code>sudo dpkg -i sshdesktop*.deb</code>.</li>\n</ul>"
      },
      {
        "title": "Step 2: Generate or Configure SSH Cryptographic Keys",
        "content": "For optimal security, generate an Ed25519 elliptic curve keypair rather than using passwords:\n<div class=\"docs-code-block\"># Generate a modern Ed25519 keypair\nssh-keygen -t ed25519 -C \"admin@sshdesktop\"\n\n# Copy public key to remote host\nssh-copy-id -i ~/.ssh/id_ed25519.pub user@server.example.com</div>\nSSH Desktop detects keys in <code>~/.ssh/</code> automatically."
      },
      {
        "title": "Step 3: Establish Your First Server Connection",
        "content": "Click <strong>+ New Connection</strong> in the top-left toolbar:\n<ol>\n  <li><strong>Label:</strong> Enter a friendly nickname (e.g. <code>Production Web VPS</code>).</li>\n  <li><strong>Host / IP:</strong> Public IP or domain (e.g. <code>198.51.100.42</code> or <code>api.example.com</code>).</li>\n  <li><strong>Port:</strong> Default <code>22</code> or your custom SSH port.</li>\n  <li><strong>Username:</strong> Remote user (e.g. <code>ubuntu</code>, <code>debian</code>, <code>root</code>).</li>\n  <li><strong>Auth Mode:</strong> Choose <em>Private Key</em> (browse to <code>id_ed25519</code>) or <em>Password</em>.</li>\n  <li>Click <strong>Connect</strong>. The Rust backend negotiates key exchange and launches your desktop session.</li>\n</ol>"
      },
      {
        "title": "Step 4: Connecting Through a Bastion / Jump Server",
        "content": "For internal VPC servers without public IP addresses:\n<ol>\n  <li>In the connection modal, expand <strong>Advanced SSH Settings</strong>.</li>\n  <li>Toggle <strong>ProxyJump / Bastion</strong>.</li>\n  <li>Enter the Bastion Host IP, Port, Username, and Bastion Private Key.</li>\n  <li>SSH Desktop transparently opens an encrypted channel through the bastion and connects to the private node.</li>\n</ol>"
      }
    ],
    "underTheHood": "Negotiates key exchange using modern ciphers (<code>curve25519-sha256</code>, <code>chacha20-poly1305@openssh.com</code>, <code>aes256-gcm@openssh.com</code>). Fingerprints are validated against <code>~/.ssh/known_hosts</code>. Channels for PTY, SFTP, and TCP sockets are multiplexed asynchronously over a single TCP stream.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Open New Connection Modal"
      },
      {
        "key": "Cmd/Ctrl + Shift + S",
        "desc": "Open Server Switcher Dropdown"
      },
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Spotlight App Launcher"
      },
      {
        "key": "Cmd/Ctrl + Q",
        "desc": "Disconnect and Quit Application"
      }
    ]
  },
  "architecture.html": {
    "lead": "Architectural blueprint and security model of SSH Desktop. Discover how our asynchronous Rust Tauri 2.0 backend and React 19 frontend multiplex standard OpenSSH channels without requiring remote agents.",
    "whatIsIt": "SSH Desktop is engineered with a strict two-tier architecture: a compiled Rust backend (Tauri 2.0) and a hardware-accelerated React 19 frontend. Unlike Electron-based tools that bundle entire Chromium browsers and Node.js runtimes (consuming 300MB+ RAM), Tauri leverages native OS webviews (WebKit on macOS, WebView2 on Windows, WebKitGTK on Linux), maintaining a total client binary size under 15MB and less than 45MB idle memory.",
    "whyNeedIt": "Traditional server management web panels (cPanel, Webmin, Cockpit, Portainer) run as persistent daemons on the remote server itself. These daemons consume remote server memory 24/7, run with root privileges, expose open HTTP ports vulnerable to remote code execution (RCE), and require constant patching. SSH Desktop flips the model: all rendering and parsing occur on your local machine, keeping your remote servers untouched.",
    "codeSnippetTitle": "Rust Tauri 2.0 Backend: Asynchronous Channel Multiplexing (src-tauri/src/ssh/session.rs)",
    "codeSnippet": "// src-tauri/src/ssh/session.rs\npub struct SshSessionHandle {\n    session: Arc<Mutex<Session>>,\n    channels: Arc<DashMap<ChannelId, Channel>>,\n}\n\nimpl SshSessionHandle {\n    pub async fn open_channel(&self, kind: ChannelKind) -> Result<ChannelId, SshError> {\n        let mut session = self.session.lock().await;\n        let channel = match kind {\n            ChannelKind::Pty { term, cols, rows } => {\n                let mut ch = session.channel_session()?;\n                ch.request_pty(term, None, Some((cols, rows, 0, 0)))?;\n                ch.shell()?;\n                ch\n            },\n            ChannelKind::DirectTcpIp { host, port } => {\n                session.channel_direct_tcpip(host, port, None)?\n            },\n        };\n        // Zero-copy stream multiplexing\n        Ok(self.register_channel(channel).await)\n    }\n}",
    "prerequisites": [
      "Standard OpenSSH server (sshd) running on the remote host.",
      "AllowTcpForwarding enabled in remote sshd_config (enabled by default in OpenSSH).",
      "For developers building from source: Rust 1.75+, Node.js 20+, and Tauri CLI."
    ],
    "features": [
      "<strong>Rust Tauri 2.0 Engine:</strong> Fast, memory-safe backend compiled to native machine code with zero garbage collection pauses.",
      "<strong>React 19 Concurrent UI:</strong> Sub-millisecond state updates, concurrent transitions, and hardware-accelerated CSS transforms.",
      "<strong>Zero-Copy Stream Parsers:</strong> Raw output streams from Linux utilities parsed in Rust memory using <code>nom</code> and <code>regex</code> before handing off to React.",
      "<strong>Hardware-Enforced Security:</strong> Passwords and private key passphrases stored in OS Keychain, Windows DPAPI, or Linux Secret Service.",
      "<strong>Zero Cloud Telemetry:</strong> Zero tracking scripts, zero Google Analytics, zero phone-home servers. Your infrastructure data never leaves your device."
    ],
    "steps": [
      {
        "title": "1. Asynchronous SSH Multiplexing Pipeline",
        "content": "When connected, SSH Desktop establishes a single authenticated TCP connection. Over this connection, the Rust backend opens multiple logical virtual channels:\n<ul>\n  <li><strong>Channel 1 (Interactive PTY):</strong> Full pseudo-terminal session running login shell (bash/zsh) for the Terminal app.</li>\n  <li><strong>Channel 2 (SFTP Binary Subsystem):</strong> Dedicated binary channel for SFTP file navigation and file streaming.</li>\n  <li><strong>Channel 3 (Telemetry Stream):</strong> Lightweight reader channel querying <code>/proc</code> performance counters.</li>\n  <li><strong>Channel 4+ (Direct-TCPIP):</strong> Dynamic forwarding channels for Docker UNIX socket (<code>/var/run/docker.sock</code>) and database ports.</li>\n</ul>"
      },
      {
        "title": "2. Client-Side Parsing Engine",
        "content": "Instead of running an agent on the server to convert metrics into JSON, SSH Desktop executes standard POSIX commands (e.g. <code>systemctl list-units</code>, <code>docker ps</code>, <code>ss -tulpn</code>) and streams raw stdout directly to your local PC. The Rust backend parses these raw streams with sub-millisecond efficiency."
      },
      {
        "title": "3. Complete Privacy & Zero Cloud Telemetry",
        "content": "SSH Desktop contains zero telemetry trackers. All server connection configurations, SSH key references, and command histories reside strictly in your local operating system directory (<code>~/.config/sshdesktop/</code> on macOS/Linux or <code>%APPDATA%\\sshdesktop\\</code> on Windows)."
      }
    ],
    "underTheHood": "Backend IPC uses Tauri's binary message serialization bridge. Commands are executed over libssh2/russh channels, ensuring maximum throughput and minimal latency.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Shift + I",
        "desc": "Toggle Developer Tools (Debug builds)"
      },
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Reload UI View"
      },
      {
        "key": "Cmd/Ctrl + W",
        "desc": "Close Focused Window"
      }
    ]
  },
  "web-mode.html": {
    "lead": "Deploy SSH Desktop as a lightweight headless daemon on any Linux VPS using our audited 1-line script. Access your complete cloud desktop GUI securely from any browser on phones, tablets, or laptops.",
    "whatIsIt": "Web Mode is the headless daemon version of SSH Desktop. It compiles the Rust backend into a standalone binary with an embedded HTTP/WebSocket server. It serves the complete macOS Sonoma cloud desktop and all 25 native applications directly in any modern browser (Chrome, Safari, Firefox, Edge) without installing client software on your device.",
    "whyNeedIt": "Engineers often need to manage servers from locked corporate laptops, iPads, Chromebooks, or mobile devices where installing desktop applications or storing private keys is prohibited. Web Mode allows you to log in via browser with end-to-end HTTPS encryption and manage your servers with zero setup on the client device.",
    "codeSnippetTitle": "Headless Web Mode Systemd Unit Definition (/etc/systemd/system/sshdesktop.service)",
    "codeSnippet": "[Unit]\nDescription=SSH Desktop Headless Web Daemon\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nExecStart=/usr/local/bin/sshdesktop-daemon --web-port 2222 --api-port 2020 --bind 0.0.0.0\nRestart=always\nRestartSec=5\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target",
    "prerequisites": [
      "Any remote Linux server or VPS (Ubuntu 20.04+, Debian 11+, CentOS/RHEL 8+, Rocky, Alma, Arch).",
      "Root or sudo access to install the systemd service.",
      "Ports 2222 (Web UI) and 2020 (API backend) available, or an existing reverse proxy (Nginx/Caddy)."
    ],
    "features": [
      "<strong>30-Second 1-Line Installer:</strong> Automated bash installer that downloads pre-compiled binaries, configures systemd, and starts the service.",
      "<strong>Full Mobile & Tablet Support:</strong> Responsive touch controls, virtual on-screen keys, and fluid mobile window management for iPad and Android tablets.",
      "<strong>WebSocket PTY Streaming:</strong> Zero-latency interactive terminal emulation powered by Xterm.js over secure WebSockets (WSS).",
      "<strong>Low Resource Consumption:</strong> Consumes less than 28MB of RAM on the host server.",
      "<strong>Nginx / SSL Integration:</strong> Easily secure Web Mode behind Let's Encrypt SSL/TLS using standard Nginx reverse proxy directives."
    ],
    "steps": [
      {
        "title": "Step 1: Run the 1-Line Installation Script",
        "content": "SSH into your server and run our audited installation command:\n<div class=\"docs-code-block\">curl -fsSL https://sshdesktop.com/install.sh | sudo bash</div>\nThis script detects your Linux distribution and architecture (x86_64 or aarch64/ARM64), installs the binary to <code>/usr/local/bin/sshdesktop-daemon</code>, creates the systemd unit, and enables it on boot."
      },
      {
        "title": "Step 2: Verify the Systemd Service",
        "content": "Check that the daemon is active and running:\n<div class=\"docs-code-block\">sudo systemctl status sshdesktop.service</div>\nYou should see <code>Active: active (running)</code>. By default, the web interface listens on port <code>2222</code> and the API backend on port <code>2020</code>."
      },
      {
        "title": "Step 3: Access via Web Browser",
        "content": "Open your web browser and navigate to:\n<div class=\"docs-code-block\">http://YOUR_SERVER_IP:2222</div>\nLog in with your Linux system credentials. Once logged in, your full cloud desktop shell opens in the browser window!"
      },
      {
        "title": "Step 4: Securing Web Mode with SSL & Nginx (Recommended)",
        "content": "To secure your Web Mode instance with HTTPS and a custom domain (e.g. <code>panel.example.com</code>), configure Nginx as a reverse proxy:\n<div class=\"docs-code-block\">server {\n    listen 80;\n    server_name panel.example.com;\n    return 301 https://$host$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name panel.example.com;\n\n    ssl_certificate /etc/letsencrypt/live/panel.example.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/panel.example.com/privkey.pem;\n\n    location / {\n        proxy_pass http://127.0.0.1:2222;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \"upgrade\";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}</div>"
      }
    ],
    "underTheHood": "The Web Mode daemon runs as a sandboxed daemon exposing an Axum/Actix HTTP server for static assets and WebSocket endpoints for binary PTY streams. Client authentication verifies Linux PAM credentials.",
    "shortcuts": [
      {
        "key": "systemctl stop sshdesktop",
        "desc": "Stop Web Mode Daemon"
      },
      {
        "key": "systemctl restart sshdesktop",
        "desc": "Restart Daemon Service"
      },
      {
        "key": "journalctl -u sshdesktop -f",
        "desc": "Stream Daemon Access Logs"
      }
    ]
  },
  "installation.html": {
    "lead": "Comprehensive installation and cross-platform setup guide for SSH Desktop. Learn how to install and update native desktop binaries for macOS, Windows 11/10, and Linux distributions.",
    "whatIsIt": "SSH Desktop is distributed as native pre-compiled binaries optimized for each major operating system. On macOS, it runs natively on both Apple Silicon (M1, M2, M3, M4) and Intel x86_64 architectures. On Windows, it provides a lightweight MSI installer and standalone executable with Windows Terminal keybinding parity. On Linux, it supports portable AppImage, Debian/Ubuntu DEB, Fedora/RHEL RPM, and Arch Linux packages.",
    "whyNeedIt": "Many developer tools rely on bloated Electron runtimes that bundle entire Chromium web browsers, consuming hundreds of megabytes of RAM just to display a terminal. SSH Desktop is compiled in Rust using native operating system webviews (WebKit on macOS, WebView2 on Windows, WebKitGTK on Linux), ensuring launch times under 200ms and an idle RAM footprint under 45 MB.",
    "prerequisites": [
      "macOS 11 (Big Sur) or newer (Universal binary for Apple Silicon M1-M4 & Intel).",
      "Windows 10 (version 1809+) or Windows 11 (64-bit) with Microsoft Edge WebView2 runtime (pre-installed on Windows 11).",
      "Linux: Any modern distribution with glibc 2.31+ and webkit2gtk (Ubuntu 20.04+, Debian 11+, Fedora 34+, Arch Linux)."
    ],
    "features": [
      "<strong>Native Universal Binaries:</strong> Zero emulation overhead on Apple Silicon M1-M4 chips and modern 64-bit processors.",
      "<strong>Sub-15MB Binary Size:</strong> Compact download size that installs in seconds without downloading gigabytes of dependencies.",
      "<strong>Zero Background Daemons:</strong> Installs cleanly into standard user directories without installing background update services or kernel extensions.",
      "<strong>Seamless Auto-Updates:</strong> Cryptographically signed update channels notify you of new releases and apply patches with a single click."
    ],
    "steps": [
      {
        "title": "1. Installing on macOS (Apple Silicon & Intel)",
        "content": "Download the universal <code>.dmg</code> package from the official download portal. Double-click the downloaded disk image and drag the SSH Desktop icon into your <code>/Applications</code> directory. On first launch, macOS Gatekeeper verifies the developer signature automatically."
      },
      {
        "title": "2. Installing on Windows 11 & Windows 10",
        "content": "Download the signed <code>.msi</code> installer or the standalone portable executable. Run the installer and follow the setup wizard. SSH Desktop integrates with Windows Terminal keybindings and utilizes Windows Credential Manager (DPAPI) to protect your SSH keys and passphrases."
      },
      {
        "title": "3. Installing on Linux Desktops",
        "content": "Choose the package matching your distribution:\n<ul>\n  <li><strong>Universal AppImage:</strong> Run <code>chmod +x sshdesktop*.AppImage && ./sshdesktop*.AppImage</code> for instant portable execution.</li>\n  <li><strong>Debian & Ubuntu:</strong> Install via <code>sudo dpkg -i sshdesktop*.deb</code> or apt.</li>\n  <li><strong>Fedora & RHEL:</strong> Install via <code>sudo rpm -i sshdesktop*.rpm</code>.</li>\n  <li><strong>Arch Linux:</strong> Available via the AUR package <code>sshdesktop-bin</code>.</li>\n</ul>"
      },
      {
        "title": "4. Verifying Installation & Automatic Updates",
        "content": "Launch SSH Desktop from your operating system launcher or application menu. The startup screen automatically checks for cryptographically signed updates and displays release notes when new stable versions are released."
      }
    ],
    "underTheHood": "Compiles Rust 2021 edition directly to target machine assembly code. Links dynamically against system webview libraries rather than shipping Chromium.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + ,",
        "desc": "Open Application Preferences"
      },
      {
        "key": "Cmd/Ctrl + Q",
        "desc": "Quit Application Cleanly"
      }
    ]
  },
  "connection-manager.html": {
    "lead": "Master the SSH Connection Manager. Learn how to add host profiles, import ~/.ssh/config, configure Bastion jump hosts, and manage Ed25519 cryptographic keys.",
    "whatIsIt": "The Connection Manager is the central directory for all your remote servers. It lets you organize servers with color-coded tags, manage credentials safely in OS hardware keychains, configure transparent ProxyJump routes through bastion jump hosts, and launch visual desktop sessions with a single click.",
    "whyNeedIt": "Sysadmins and DevOps engineers frequently manage dozens of servers across AWS, Hetzner, DigitalOcean, and on-premise hardware. Memorizing IP addresses, port numbers, usernames, and key file paths in shell aliases leads to configuration drift and connection errors. The Connection Manager brings order with instant search, auto-discovery, and safe key management.",
    "prerequisites": [
      "Remote server IP address or domain name.",
      "SSH port (default 22 or custom port).",
      "Authentication credentials: SSH Private Key (Ed25519, ECDSA, RSA) or password.",
      "For bastion setups: Hostname and credentials for the jump server."
    ],
    "features": [
      "<strong>Smart ~/.ssh/config Import:</strong> Detects existing OpenSSH config files and imports hosts with complete HostName, User, Port, and IdentityFile mappings.",
      "<strong>Color-Coded Server Tags:</strong> Group servers by environment (Production, Staging, QA) or architecture (Web, Database, Cache, Storage).",
      "<strong>Transparent Bastion ProxyJump:</strong> Connect to private subnet servers with zero public IP addresses through an SSH jump host in one click.",
      "<strong>Hardware Keychain Storage:</strong> Sensitive private key passphrases are stored in macOS Keychain, Windows DPAPI, or Linux Secret Service."
    ],
    "steps": [
      {
        "title": "1. Adding a New Server Connection Profile",
        "content": "Click <strong>+ New Connection</strong> in the top toolbar. Enter a friendly nickname (e.g. <code>Production Web VPS</code>), the target hostname or IPv4/IPv6 address, and the SSH port (default <code>22</code>)."
      },
      {
        "title": "2. Configuring Cryptographic Authentication",
        "content": "Choose your authentication mode:\n<ul>\n  <li><strong>SSH Private Key (Recommended):</strong> Browse to your local <code>~/.ssh/id_ed25519</code> or <code>~/.ssh/id_rsa</code> file. If your key is protected by a passphrase, enter it once to store it securely in your OS keychain.</li>\n  <li><strong>Password:</strong> Enter your remote user password. Credentials are encrypted locally using AES-256 before storage.</li>\n</ul>"
      },
      {
        "title": "3. Configuring Bastion / ProxyJump Routing",
        "content": "For private VPC servers located behind a firewall gateway, expand <strong>Advanced SSH Settings</strong> and toggle <strong>Bastion / Jump Host</strong>. Select an existing bastion profile or enter the jump server IP and credentials. SSH Desktop transparently tunnels the connection through the bastion."
      },
      {
        "title": "4. Connecting and Launching the Desktop Session",
        "content": "Click <strong>Connect</strong>. The Rust backend negotiates cryptographic key exchange, validates host fingerprints against <code>known_hosts</code>, and launches the full visual desktop shell in under 200 milliseconds."
      }
    ],
    "underTheHood": "Validates SSH cryptographic handshakes and parses ~/.ssh/known_hosts fingerprints to prevent Man-in-the-Middle (MITM) attacks.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Open New Connection Dialog"
      },
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Search Saved Server Profiles"
      },
      {
        "key": "Enter",
        "desc": "Connect to Highlighted Server"
      }
    ]
  },
  "settings-preferences.html": {
    "lead": "Complete guide to configuring SSH Desktop preferences. Customize themes, editor color schemes, terminal fonts, ligature rendering, and low-bandwidth telemetry.",
    "whatIsIt": "The Settings & Preferences workspace (based on AppSettings.tsx) provides granular control over the SSH Desktop environment. It lets you customize visual themes (macOS Dark, Midnight OLED, Tokyo Night, Dracula, Solarized), configure hardware-accelerated terminal typography, set default SSH parameters, and adjust background telemetry polling.",
    "whyNeedIt": "Different development workflows require tailored environments: night shifts benefit from high-contrast OLED dark themes, slower satellite connections need reduced telemetry bandwidth, and code readability improves with specialized programmer fonts like JetBrains Mono and Fira Code.",
    "prerequisites": [
      "SSH Desktop application running locally.",
      "Optional: Custom monospace fonts installed on your local operating system."
    ],
    "features": [
      "<strong>Curated Color Themes:</strong> Switch between macOS Sonoma Dark, Midnight OLED, Tokyo Night, GitHub Dark, and Nord with instant preview.",
      "<strong>Custom Typography & Ligatures:</strong> Choose your favorite font family, font size, line height, and toggle programming ligature rendering.",
      "<strong>Low-Bandwidth Mode:</strong> Throttle telemetry polling from 1s to 5s to conserve network data over mobile tethering or high-latency satellite connections.",
      "<strong>Auto-Lock & Security Timeout:</strong> Automatically minimize or lock active server windows after a configurable period of keyboard/mouse inactivity."
    ],
    "steps": [
      {
        "title": "1. Accessing Application Preferences",
        "content": "Open Preferences by clicking <strong>SSH Desktop &rarr; Preferences</strong> in the top menu bar or by pressing <kbd>Cmd/Ctrl + ,</kbd> anywhere in the application."
      },
      {
        "title": "2. Selecting Visual Themes",
        "content": "Under the <strong>Appearance</strong> tab, choose from curated dark themes:\n<ul>\n  <li><strong>macOS Sonoma Dark (Default):</strong> Sleek, semi-transparent frosted glass aesthetic matching modern macOS.</li>\n  <li><strong>Midnight OLED:</strong> Pure true-black background (#000000) for OLED laptops and maximum battery conservation.</li>\n  <li><strong>Tokyo Night &amp; Dracula:</strong> Vibrant syntax-highlighted themes designed for prolonged coding sessions.</li>\n</ul>"
      },
      {
        "title": "3. Configuring Terminal Fonts & Ligatures",
        "content": "Switch to the <strong>Terminal</strong> tab to select your installed monospace font (e.g. JetBrains Mono, Fira Code, Cascadia Code, Menlo). Toggle the <strong>Enable Font Ligatures</strong> checkbox to render arrows (<code>&rarr;</code>, <code>=&gt;</code>) and operators cleanly."
      },
      {
        "title": "4. Optimizing Telemetry & Low-Bandwidth Mode",
        "content": "In the <strong>Telemetry</strong> tab, select your polling frequency. If working over 4G/5G tethering or high-latency satellite links, enable <strong>Low Bandwidth Mode</strong> to compress SFTP listings and poll CPU metrics every 5 seconds instead of every second."
      }
    ],
    "underTheHood": "Preferences are persisted locally in a sandboxed JSON configuration store. No configuration data is ever uploaded to external servers.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + ,",
        "desc": "Open Preferences Window"
      },
      {
        "key": "Cmd/Ctrl + T",
        "desc": "Cycle Through Available Themes"
      }
    ]
  },
  "security-model.html": {
    "lead": "Comprehensive architectural security blueprint. Discover how SSH Desktop guarantees 100% data privacy with zero server daemons, zero open web ports, and hardware-backed credential vaults.",
    "whatIsIt": "The Security Model documentation details the cryptographic foundations and security guarantees of SSH Desktop. It explains why an agentless architecture eliminates entire classes of remote code execution (RCE) vulnerabilities and keeps servers hardened.",
    "whyNeedIt": "Security officers, enterprise compliance auditors, and sysadmins need formal verification that desktop tools comply with SOC 2, HIPAA, and ISO 27001 data isolation policies.",
    "prerequisites": [
      "Standard OpenSSH server (sshd)."
    ],
    "features": [
      "<strong>100% Agentless Architecture:</strong> Leaves zero background daemons, cron jobs, or monitoring processes on remote machines.",
      "<strong>Zero Open Web Ports:</strong> All communication flows exclusively through standard OpenSSH port 22.",
      "<strong>Hardware-Backed Credential Storage:</strong> Passphrases stored in macOS Keychain, Windows DPAPI, or Linux Secret Service.",
      "<strong>Zero Cloud Telemetry:</strong> No analytics, tracking, or cloud relay servers. All traffic is direct between client and host."
    ],
    "steps": [
      {
        "title": "1. Zero-Agent Security Philosophy",
        "content": "Traditional control panels run web daemons as root on your server, exposing open HTTP ports vulnerable to remote exploitation. SSH Desktop executes all rendering locally and executes standard POSIX commands over encrypted SSH, leaving your server completely untouched."
      },
      {
        "title": "2. Cryptographic Handshake & Fingerprint Validation",
        "content": "SSH Desktop negotiates modern ciphers (ChaCha20-Poly1305, AES-256-GCM) and verifies host keys against <code>~/.ssh/known_hosts</code> to protect against Man-in-the-Middle (MITM) attacks."
      },
      {
        "title": "3. Operating System Credential Isolation",
        "content": "Private key passphrases and server passwords are encrypted using native OS hardware vaults:\n<ul>\n  <li><strong>macOS:</strong> Apple Keychain with Secure Enclave protection.</li>\n  <li><strong>Windows:</strong> Windows Data Protection API (DPAPI).</li>\n  <li><strong>Linux:</strong> FreeDesktop Secret Service API (gnome-keyring / KWallet).</li>\n</ul>"
      },
      {
        "title": "4. Memory Safety with Rust",
        "content": "The entire networking backend is compiled in memory-safe Rust, preventing buffer overflow, use-after-free, and memory corruption vulnerabilities."
      }
    ],
    "underTheHood": "All SSH channels are multiplexed asynchronously using audited cryptographic primitives.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Spotlight Quick Launcher"
      }
    ]
  },
  "quickstart.html": {
    "lead": "From zero to visual server desktop in 3 minutes. Fast-track onboarding guide to installing SSH Desktop, importing host profiles, and launching applications.",
    "whatIsIt": "The 3-Minute Quickstart is designed for busy developers and sysadmins who want to get up and running immediately. It covers downloading the binary, auto-importing existing hosts, and launching your first desktop session in four simple steps.",
    "whyNeedIt": "Getting started with new infrastructure tools shouldn't require hours of reading. This guide gets you connected and productive in less than 180 seconds.",
    "prerequisites": [
      "macOS, Windows, or Linux desktop PC.",
      "Any remote Linux server with SSH credentials."
    ],
    "features": [
      "<strong>Sub-3-Minute Setup:</strong> Fast, frictionless onboarding with automated configuration discovery.",
      "<strong>Automatic ~/.ssh/config Import:</strong> Instantly detects and imports your existing OpenSSH hosts.",
      "<strong>Keyboard-First Navigation:</strong> Master the core <kbd>Cmd+K</kbd> launcher in seconds."
    ],
    "steps": [
      {
        "title": "1. Download & Launch the Native Binary",
        "content": "Download for your OS (<a href=\"../download-mac.html\" style=\"color: #38bdf8;\">macOS DMG</a>, <a href=\"../download-windows.html\" style=\"color: #38bdf8;\">Windows MSI</a>, or <a href=\"../download-linux-desktop.html\" style=\"color: #38bdf8;\">Linux AppImage</a>). Launch the application."
      },
      {
        "title": "2. Add or Import Your Server Connection",
        "content": "Click <strong>+ New Connection</strong> or click <strong>Import ~/.ssh/config</strong>. Enter your server hostname or IP address, username, and select your private key."
      },
      {
        "title": "3. Experience the macOS Cloud Desktop",
        "content": "Click Connect. Your server's visual desktop shell launches immediately with a floating window manager, top menu bar, and macOS-style Dock."
      },
      {
        "title": "4. Master the Spotlight Launcher (Cmd/Ctrl + K)",
        "content": "Press <kbd>Cmd/Ctrl + K</kbd> to search across apps, server profiles, and shell snippets. Type <code>docker</code> or <code>logs</code> to jump into any tool instantly."
      }
    ],
    "underTheHood": "Parses local OpenSSH configuration files using an internal Rust tokenizer and initializes the encrypted session over port 22.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Spotlight Quick Launcher"
      },
      {
        "key": "Cmd/Ctrl + ,",
        "desc": "Open Preferences"
      }
    ]
  }
};
