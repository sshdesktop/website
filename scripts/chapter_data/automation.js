// scripts/chapter_data/automation.js
module.exports = {
  "env-variables-manager.html": {
    "lead": "Manage application .env files and system environment variables safely. Features masked password fields, syntax validation, and instant service reloads.",
    "whatIsIt": "The Environment Variables & Secrets Manager is a dedicated visual tool for creating, editing, and auditing `.env` files and system-wide environment variables. Safely configure database connection strings, API secrets, OAuth tokens, and runtime flags with masked input fields and atomic writes.",
    "whyNeedIt": "Developers frequently leak API tokens by echoing them into terminal bash history or editing `.env` files with plain text editors on screen during screen shares. Furthermore, formatting errors (unquoted spaces, missing equals signs) break applications at boot. Environment Manager secures secret handling with masking and automated syntax validation.",
    "codeSnippetTitle": "MultiPath & Masked Secret Engine (src/apps/env/EnvManager.tsx)",
    "codeSnippet": "// src/apps/env/EnvManager.tsx\ninterface EnvItem {\n  key: string;\n  value: string;\n  scope: 'user' | 'system';\n  isMultiPath: boolean;\n  paths: string[];\n  isSecret: boolean;\n}\n\nexport const EnvManager = () => {\n  const [items, setItems] = useState<EnvItem[]>([]);\n  const [showSecrets, setShowSecrets] = useState(false);\n\n  // MultiPath editor supports PATH, LD_LIBRARY_PATH with drag-and-drop ordering\n  // Saves via atomic writes enforcing chmod 600\n  // ...\n};",
    "prerequisites": [
      "Target application directory with read/write access for `.env` files.",
      "Sudo privileges if modifying system environment files like <code>/etc/environment</code>."
    ],
    "features": [
      "<strong>Masked Secret Fields:</strong> Passwords, private keys, and tokens are rendered with security bullets; click the eye icon to reveal.",
      "<strong>MultiPath Variable Editor:</strong> Visual drag-and-drop reordering for colon-delimited variables like <code>PATH</code> and <code>LD_LIBRARY_PATH</code>.",
      "<strong>System vs User Scopes:</strong> Toggle between project `.env` files, user shell profiles (<code>~/.bashrc</code>), and <code>/etc/environment</code>.",
      "<strong>Automated Syntax Checking:</strong> Validates quotes, escaped characters, and key formatting before saving to disk.",
      "<strong>File Permission Hardening:</strong> Automatically enforces <code>chmod 600</code> on saved `.env` files so only the owner can read secrets."
    ],
    "steps": [
      {
        "title": "1. Opening a .env File",
        "content": "Launch the Environment Manager. Select an existing <code>.env</code> file from the recent projects dropdown or click <strong>Open .env Path...</strong> to browse your remote file tree."
      },
      {
        "title": "2. Adding and Editing Secrets",
        "content": "Click <strong>+ Add Variable</strong>. Enter the key name (e.g. <code>STRIPE_SECRET_KEY</code>) and paste the value. Values identified as tokens or passwords are automatically masked."
      },
      {
        "title": "3. Testing and Saving Safely",
        "content": "Click <strong>Save &amp; Apply</strong>. SSH Desktop writes to a temporary file, verifies syntax, enforces strict file permissions (<code>chmod 600</code> so only the application owner can read secrets), and commits the update."
      }
    ],
    "underTheHood": "Parses dotenv format supporting standard POSIX expansion and `#` comments. Saves via atomic rename to ensure running applications never read a half-written file.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Add New Environment Key"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save .env File"
      },
      {
        "key": "Cmd/Ctrl + H",
        "desc": "Toggle Mask / Reveal Secrets"
      }
    ]
  },
  "backup-disaster-recovery.html": {
    "lead": "Automate server backups using Rsync and Tar. Create incremental snapshots of web directories, databases, and configuration files with one-click restore.",
    "whatIsIt": "The Backup & Disaster Recovery suite provides visual backup scheduling and snapshot restoration for Linux. Protect critical website directories, configuration files, and database dumps using battle-tested Rsync and Tar engines with bandwidth throttling and checksum verification.",
    "whyNeedIt": "Relying on manual backup scripts often results in failed backups that go unnoticed until disaster strikes. Third-party backup agents consume excessive memory and store your data in external clouds. SSH Desktop gives you full control over where backups are stored with zero third-party dependency.",
    "codeSnippetTitle": "Rsync & Tar Backup Engine (src-tauri/src/archive.rs)",
    "codeSnippet": "// src-tauri/src/archive.rs - Backup Snapshot Execution\n#[tauri::command]\npub async fn execute_backup_job(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n    task: BackupTaskConfig,\n) -> Result<BackupResult, String> {\n    let session = state.get_session(&conn_id)?;\n    \n    // Execute database dump prior to archiving if configured\n    if task.include_db {\n        session.exec_command(&format!(\"pg_dump -U postgres -d {} -f /tmp/db_dump.sql\", task.db_name)).await?;\n    }\n\n    let cmd = format!(\"tar -czvf '{}' -C '{}' .\", task.dest_archive, task.source_dir);\n    session.exec_command(&cmd).await\n}",
    "prerequisites": [
      "Standard Linux utilities: tar, rsync, gzip/xz.",
      "Database CLI utilities (mysqldump, pg_dump) if scheduling database backups.",
      "Sufficient storage on target destination (local disk, mounted NFS/Samba volume, or secondary server)."
    ],
    "features": [
      "<strong>Differential &amp; Full Backups:</strong> Schedule full compressed archives or high-speed incremental Rsync mirrors.",
      "<strong>Integrated Database Dumps:</strong> One-click automated dumps of PostgreSQL and MySQL databases prior to file archiving.",
      "<strong>Retention Policies:</strong> Automatically prune old backups (e.g. keep last 7 daily, 4 weekly, and 12 monthly archives).",
      "<strong>1-Click Restore:</strong> Restore corrupted directories or databases with rollback safeguards.",
      "<strong>Integrity Verification:</strong> Computes SHA-256 checksums to verify archive integrity."
    ],
    "steps": [
      {
        "title": "1. Creating a Backup Profile",
        "content": "Click <strong>+ New Backup Task</strong>. Enter a task name (e.g. <code>Daily Web &amp; DB Backup</code>), select source directories (e.g. <code>/var/www/html</code>, <code>/etc/nginx</code>), and pick target destination."
      },
      {
        "title": "2. Configuring Database Snapshots",
        "content": "Toggle <strong>Include Database Dump</strong>. Select your database instance (Postgres/MySQL). SSH Desktop automatically runs <code>pg_dump</code> or <code>mysqldump</code> into the archive before compression."
      },
      {
        "title": "3. Restoring from a Backup",
        "content": "Select any historical archive from the timeline and click <strong>Restore</strong>. Choose between restoring to original location or extracting to a sandbox path for inspection."
      }
    ],
    "underTheHood": "Executes <code>rsync -avz --delete</code> or <code>tar -czvf &lt;dest&gt; --exclude=... &lt;src&gt;</code> over SSH, logging output and verifying archive headers via <code>tar -tzf</code>.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + B",
        "desc": "Trigger Immediate Backup"
      }
    ]
  },
  "multi-server-snippets.html": {
    "lead": "Execute shell snippets across dozens of servers simultaneously. Manage your bash script library and view real-time aggregated output side by side.",
    "whatIsIt": "The Multi-Server Snippets & Command Broadcast tool allows you to organize a personal library of reusable shell scripts and broadcast them across multiple remote servers in parallel. Compare execution results, track exit codes, and manage infrastructure in bulk.",
    "whyNeedIt": "Performing routine maintenance (e.g. updating packages, checking disk usage, rotating logs) across 10 or 20 servers by logging into each one individually is slow and repetitive. Tools like Ansible have steep learning curves for simple tasks. Multi-Server Snippets gives you instant parallel execution with zero setup.",
    "codeSnippetTitle": "Fleet Broadcast Matrix Architecture (src/apps/automation/AutomationApp.tsx)",
    "codeSnippet": "// src/apps/automation/AutomationApp.tsx - Fleet Broadcast Tabs\nexport type AutomationTab = 'runner' | 'recipes' | 'fleet-matrix' | 'history';\n\nexport const AutomationApp = () => {\n  const [tab, setTab] = useState<AutomationTab>('fleet-matrix');\n  const [targetServers, setTargetServers] = useState<string[]>([]);\n\n  const handleBroadcast = async (script: string) => {\n    // Spawns parallel async SSH execution across all selected server nodes\n    await invoke('broadcast_script_parallel', { servers: targetServers, script });\n  };\n  // ...\n};",
    "prerequisites": [
      "Two or more configured server connections in SSH Desktop.",
      "Target user accounts with permissions to run the desired commands."
    ],
    "features": [
      "<strong>4 Automation Tabs:</strong> Ad-hoc Runner, Recipes Library, Fleet Matrix, and Audit History.",
      "<strong>Parallel Async Broadcast:</strong> Execute commands across 5, 20, or 50 servers simultaneously over parallel SSH channels.",
      "<strong>Pre-Built DevOps Recipes:</strong> Includes ready-to-run recipes for Docker cleanup, SSL check, disk alert, and security patch.",
      "<strong>Aggregated Split Output:</strong> View side-by-side terminal outputs for each server with clear Pass/Fail badges.",
      "<strong>Parameterized Templates:</strong> Define placeholders in your scripts (e.g. <code>{{PACKAGE_NAME}}</code>) that prompt for input prior to execution."
    ],
    "steps": [
      {
        "title": "1. Saving a Snippet to Your Library",
        "content": "Click <strong>+ New Snippet</strong>. Enter a title (e.g. <code>Check Disk &amp; Memory</code>) and enter your script:\n<div class=\"docs-code-block\">echo \"=== Disk Usage ===\"\ndf -h / | tail -n 1\necho \"=== Memory Usage ===\"\nfree -h | grep Mem</div>"
      },
      {
        "title": "2. Selecting Target Servers and Broadcasting",
        "content": "Check the servers you want to run the script on, or click <strong>Select All</strong>. Click <strong>Broadcast (Cmd+Enter)</strong>. SSH Desktop opens parallel SSH connections and streams output in real time."
      },
      {
        "title": "3. Inspecting Results Side by Side",
        "content": "The results view shows a grid of terminal outputs. Green checkmarks indicate an exit code of 0, while red badges highlight servers that encountered errors."
      }
    ],
    "underTheHood": "Leverages Rust's async runtime (Tokio) to fan out SSH sessions concurrently. Results are streamed asynchronously into separate output buffers without blocking the UI.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Enter",
        "desc": "Broadcast Snippet to Selected Servers"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save Snippet to Library"
      }
    ]
  },
  "log-analysis-grep.html": {
    "lead": "Stream and filter remote log files (/var/log/syslog, nginx, auth.log). High-performance regex grep, timestamp filtering, and error highlights.",
    "whatIsIt": "The Remote Log Analysis & Grep Engine is a dedicated log viewer for Linux servers. It allows you to tail, stream, search, and analyze system and application logs (<code>/var/log/syslog</code>, <code>nginx/access.log</code>, <code>auth.log</code>, Docker logs) with high-speed regex filtering and colorized severity levels.",
    "whyNeedIt": "Tailing logs in the terminal using <code>tail -f | grep error</code> is cumbersome: you cannot easily pause the stream, highlight keywords, or filter by timestamp. Cloud log platforms like Datadog or Papertrail require installing agents and charging per gigabyte. SSH Desktop gives you local client-side speed with zero server costs.",
    "codeSnippetTitle": "Remote Log Streamer & Regex Parser (src/apps/logs/LogViewer.tsx)",
    "codeSnippet": "// src/apps/logs/LogViewer.tsx\nexport const LogViewer = () => {\n  const [logLines, setLogLines] = useState<LogEntry[]>([]);\n  const [isPaused, setIsPaused] = useState(false);\n  const [regexFilter, setRegexFilter] = useState('');\n\n  // Zero-copy regex filtering highlighting ERROR, WARN, INFO levels\n  // ...\n};",
    "prerequisites": [
      "Read access to log files in /var/log/ or permissions to run journalctl / docker logs.",
      "Sudo privileges if viewing restricted logs like /var/log/auth.log."
    ],
    "features": [
      "<strong>Live Real-Time Streaming:</strong> Stream active logs with auto-scroll and pause-on-hover.",
      "<strong>High-Speed Regex Grep:</strong> Filter gigabyte log streams instantaneously using Rust-powered regex matching.",
      "<strong>Colorized Severity Highlights:</strong> Automatically detects and highlights ERROR, WARN, INFO, and FATAL lines.",
      "<strong>Multi-File Aggregation:</strong> Watch multiple log files simultaneously in synchronized split tabs.",
      "<strong>Log Export & Bookmark:</strong> Export filtered log subsets to disk and bookmark key timestamps for investigation."
    ],
    "steps": [
      {
        "title": "1. Selecting a Log Source",
        "content": "Open the Log Viewer. Choose from common system log presets (<code>syslog</code>, <code>auth.log</code>, <code>nginx access/error</code>) or enter a custom log path (e.g. <code>/var/log/my-app/app.log</code>)."
      },
      {
        "title": "2. Filtering with Keywords and Regular Expressions",
        "content": "Type in the search bar (e.g. <code>HTTP 500</code> or <code>Failed password</code>). The view filters immediately, displaying only matching rows while retaining context."
      },
      {
        "title": "3. Pausing and Inspecting Stack Traces",
        "content": "Press <kbd>Space</kbd> to pause the live stream. Click any log row to expand multi-line stack traces or JSON payloads."
      }
    ],
    "underTheHood": "Runs <code>tail -n 500 -F &lt;file&gt;</code> over an SSH channel. The Rust backend parses incoming lines with zero memory allocation, applying regex filters before rendering into virtualized DOM lists.",
    "shortcuts": [
      {
        "key": "Space",
        "desc": "Pause / Resume Live Stream"
      },
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Focus Search / Regex Filter"
      },
      {
        "key": "Cmd/Ctrl + Shift + C",
        "desc": "Clear Log Buffer"
      }
    ]
  },
  "reverse-proxy-browser.html": {
    "lead": "Manage Nginx, Caddy, and Apache virtual hosts visually. Add reverse proxies, configure upstream ports, enable WebSockets, and validate configs before reload.",
    "whatIsIt": "The Reverse Proxy Browser & Configurator is a visual manager for Nginx, Caddy, and Apache web servers. Create virtual hosts, route subdomains to internal backend ports (e.g. <code>localhost:3000</code>), enable WebSocket proxy headers, and validate configurations before reloading.",
    "whyNeedIt": "Writing Nginx configurations by hand often leads to syntax errors, missing proxy headers (breaking WebSockets), or accidental server downtime. Web-based alternatives like Nginx Proxy Manager require Docker containers and open ports. SSH Desktop operates directly on your server's native configuration files.",
    "codeSnippetTitle": "Embedded Gateway & Service Discovery (src/apps/browser/BrowserApp.tsx)",
    "codeSnippet": "// src/apps/browser/BrowserApp.tsx\nexport const BrowserApp = () => {\n  const [discoveredServices, setDiscoveredServices] = useState<DiscoveredService[]>([]);\n\n  // DiscoveredServicesBar auto-detects internal HTTP services on localhost:3000, 8080\n  // Routes traffic transparently via local sshHttpGateway\n  // ...\n};",
    "prerequisites": [
      "Nginx, Caddy, or Apache installed on the remote server.",
      "Sudo privileges to write to /etc/nginx/sites-available/ and reload the web server."
    ],
    "features": [
      "<strong>Auto-Discovered Services Bar:</strong> Scans remote listening ports and provides 1-click preview buttons for local web services.",
      "<strong>Visual Server Block Creator:</strong> Create reverse proxy rules with form fields for Domain Name, Upstream IP/Port, and SSL paths.",
      "<strong>1-Click WebSocket Support:</strong> Automatically injects required <code>Upgrade</code> and <code>Connection</code> headers for real-time apps.",
      "<strong>Pre-Flight Syntax Validation:</strong> Automatically runs <code>nginx -t</code> before applying any changes to guarantee zero downtime.",
      "<strong>Built-in DevTools:</strong> Inspect network headers, response times, and console logs inside the embedded browser."
    ],
    "steps": [
      {
        "title": "1. Creating a New Reverse Proxy Server Block",
        "content": "Click <strong>+ Add Proxy Host</strong>. Enter your domain name (e.g. <code>api.example.com</code>) and forward destination (e.g. <code>http://127.0.0.1:3000</code>). Check <strong>Enable WebSockets</strong> if your backend uses socket.io or ws."
      },
      {
        "title": "2. Validating and Applying Configuration",
        "content": "Click <strong>Test &amp; Reload</strong>. SSH Desktop writes the configuration, executes <code>sudo nginx -t</code> to verify syntax, and triggers <code>sudo systemctl reload nginx</code>."
      },
      {
        "title": "3. Enabling or Disabling Sites",
        "content": "Toggle the switch next to any domain to link or unlink the configuration in <code>/etc/nginx/sites-enabled/</code>."
      }
    ],
    "underTheHood": "Manages files in <code>/etc/nginx/sites-available/</code> and maintains symlinks in <code>/etc/nginx/sites-enabled/</code>. All reloads are gated behind successful exit codes from <code>nginx -t</code>.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Create New Proxy Host"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save and Reload Nginx"
      }
    ]
  },
  "api-studio.html": {
    "lead": "Test private APIs and internal microservices over secure SSH tunnels without exposing ports. Supports REST (GET/POST/PUT/DELETE), GraphQL, and WebSockets.",
    "whatIsIt": "API Studio is a built-in REST, GraphQL, and WebSocket API client. Because it integrates directly with SSH Desktop's tunneling engine, it allows you to test private microservices and APIs running strictly on <code>127.0.0.1</code> or internal VPC subnets without exposing them to the public internet.",
    "whyNeedIt": "Testing private internal APIs usually requires installing Postman, setting up manual SSH tunnels on your host machine, and configuring environment variables. API Studio provides a zero-setup testing studio that automatically proxies requests over your active SSH connection.",
    "codeSnippetTitle": "API Client & Code Snippet Generator (src/apps/api/ApiApp.tsx)",
    "codeSnippet": "// src/apps/api/ApiApp.tsx - Method Handler\nexport type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';\n\nexport const ApiApp = () => {\n  const [method, setMethod] = useState<HttpMethod>('GET');\n  const [url, setUrl] = useState('http://localhost:3000/api/users');\n  const [response, setResponse] = useState<ApiResponse | null>(null);\n\n  const handleSend = async () => {\n    // Proxies request over active SSH Direct-TCPIP tunnel to localhost\n    const res = await invoke('api_studio_request', { method, url, headers, body });\n    setResponse(res);\n  };\n  // ...\n};",
    "prerequisites": [
      "An active SSH connection to the server hosting your API.",
      "API services listening on localhost (e.g. 127.0.0.1:8000) or an internal network."
    ],
    "features": [
      "<strong>Automated Tunnel Routing:</strong> Requests to <code>http://localhost:PORT</code> automatically route through the active SSH session.",
      "<strong>7 HTTP Methods:</strong> GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS with custom headers, query params, and JSON/Form bodies.",
      "<strong>Code Snippet Generator:</strong> Convert any request with 1 click into cURL, Fetch, Python requests, or Go code snippets.",
      "<strong>GraphQL Explorer:</strong> Run GraphQL queries and mutations with autocompletion, schema inspection, and variable substitution.",
      "<strong>Live WebSocket Tester:</strong> Connect to internal WebSocket endpoints, send messages, and monitor incoming event streams."
    ],
    "steps": [
      {
        "title": "1. Making Your First Request",
        "content": "Open API Studio. Select the HTTP method (e.g. <strong>GET</strong>) and enter the URL: <code>http://localhost:3000/api/users</code>. Click <strong>Send</strong>. The response status (200 OK), response time, and JSON payload appear immediately."
      },
      {
        "title": "2. Sending JSON Bodies and Custom Headers",
        "content": "Select <strong>POST</strong>. Switch to the <strong>Body</strong> tab and enter your JSON payload. Add authentication headers (e.g. <code>Authorization: Bearer &lt;token&gt;</code>) in the <strong>Headers</strong> tab."
      },
      {
        "title": "3. Generating Code Snippets",
        "content": "Click <strong>Code Snippet</strong> in the top-right toolbar. Select your language (cURL, JavaScript Fetch, Python, or Go) to copy ready-to-run code for your integration."
      }
    ],
    "underTheHood": "Requests are executed through an internal Direct-TCPIP forwarder managed by the Rust backend using the <code>reqwest</code> HTTP client and <code>tokio-tungstenite</code> WebSocket driver. No data travels over public internet routes.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Enter",
        "desc": "Send API Request"
      },
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save Request to Collection"
      }
    ]
  }
};
