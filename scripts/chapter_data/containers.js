// scripts/chapter_data/containers.js
module.exports = {
  "docker-management.html": {
    "lead": "Agentless Docker container manager. Control lifecycles (start, stop, restart), stream live container logs, launch interactive exec terminals, and prune images.",
    "whatIsIt": "The Docker & Container Management Hub is a visual control center for all your Docker containers, images, volumes, and networks. It connects directly to the remote Docker UNIX socket (<code>/var/run/docker.sock</code>) through an SSH tunnel, providing an instant alternative to Portainer without running a Docker container agent.",
    "whyNeedIt": "Managing Docker via CLI requires typing repetitive commands like <code>docker ps</code>, <code>docker logs -f --tail 100</code>, and <code>docker exec -it container_name /bin/bash</code>. Portainer requires opening ports and consuming server RAM. SSH Desktop delivers complete visual management with zero server footprint.",
    "codeSnippetTitle": "Rust Docker UNIX Socket Forwarder & Controller (src-tauri/src/system/docker.rs)",
    "codeSnippet": "// src-tauri/src/system/docker.rs\n#[tauri::command]\npub async fn docker_action(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n    container_id: String,\n    action: String, // \"start\" | \"stop\" | \"restart\" | \"pause\" | \"kill\"\n) -> Result<String, String> {\n    let session = state.get_session(&conn_id)?;\n    let cmd = format!(\"docker {} {}\", action, container_id);\n    session.exec_command(&cmd).await\n}\n\n#[tauri::command]\npub async fn docker_stats(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n) -> Result<Vec<ContainerStat>, String> {\n    // Reads CPU%, Mem%, Net I/O directly from /var/run/docker.sock\n    // ...\n}",
    "prerequisites": [
      "Docker engine installed on the remote host (docker.io, docker-ce, or podman).",
      "The SSH user must be a member of the <code>docker</code> group (<code>sudo usermod -aG docker $USER</code>) or connect as root."
    ],
    "features": [
      "<strong>6 Dedicated Hub Tabs:</strong> Containers, Images, Volumes, Networks, Compose Editor, and System Prune Assistant.",
      "<strong>Container Lifecycle Controls:</strong> View running and stopped containers. Start, Stop, Restart, Pause, and Kill containers with one click.",
      "<strong>Live Log Streaming:</strong> Live tailing of container stdout/stderr with auto-scrolling, regex search, and colorized log levels.",
      "<strong>Interactive Exec Terminal:</strong> Open an interactive shell (`/bin/sh` or `/bin/bash`) directly inside any running container.",
      "<strong>Docker Compose & Dockerfile Editor:</strong> Edit compose YAML stacks in Monaco, click \"Build & Run\", and inspect live service dependencies."
    ],
    "steps": [
      {
        "title": "1. Managing Container Lifecycles",
        "content": "Open the Docker Hub from the Dock. The <strong>Containers</strong> tab displays all active and stopped containers with Image Tags, Port Mappings, Uptime, and Memory footprint. Click <strong>Start</strong>, <strong>Stop</strong>, <strong>Restart</strong>, or <strong>Kill</strong>."
      },
      {
        "title": "2. Streaming Real-Time Container Logs",
        "content": "Click the 📜 Logs icon next to any container to open the logs viewer. Toggles allow auto-scrolling, searching for error strings, or pausing the stream."
      },
      {
        "title": "3. Opening an Interactive Exec Terminal",
        "content": "Click the ⌨️ Exec icon. SSH Desktop opens an interactive pseudo-terminal session inside the container (equivalent to <code>docker exec -it &lt;container&gt; /bin/bash</code>) for on-the-fly debugging."
      },
      {
        "title": "4. Docker Compose & System Prune Assistant",
        "content": "Switch to the <strong>Editor</strong> tab to inspect Docker Compose stacks, edit YAML files in Monaco, and deploy with <strong>Build &amp; Run</strong>. Use the <strong>System</strong> tab to reclaim gigabytes of disk space by pruning dangling images."
      }
    ],
    "underTheHood": "Communicates with <code>/var/run/docker.sock</code> through an internal direct-stream forwarder over SSH, speaking the Docker Engine REST API v1.41+.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Refresh Container List"
      },
      {
        "key": "Cmd/Ctrl + L",
        "desc": "Focus Container Log Stream"
      },
      {
        "key": "Cmd/Ctrl + E",
        "desc": "Open Exec Shell for Selected Container"
      }
    ]
  },
  "database-studio.html": {
    "lead": "Visual database studio with automatic SSH port forwarding. Run queries, inspect schemas, edit table rows, and export data without exposing DB ports.",
    "whatIsIt": "The Multi-Engine Database Studio is a native database management environment supporting PostgreSQL, MySQL, MariaDB, Redis, SQLite, and MongoDB. It automatically establishes encrypted SSH port forward tunnels to your remote database instances so your database ports (5432, 3306, 6379) remain closed to the public internet.",
    "whyNeedIt": "Exposing database ports to the internet creates severe security vulnerabilities, while configuring external GUI clients like DBeaver or pgAdmin with SSH bastions is tedious and slow. SSH Desktop provides a zero-setup, built-in database studio that works automatically through your existing SSH connection.",
    "codeSnippetTitle": "Multi-Engine Query Execution Engine (src-tauri/src/database/commands.rs)",
    "codeSnippet": "// src-tauri/src/database/commands.rs\n#[tauri::command]\npub async fn db_execute_query(\n    state: tauri::State<'_, AppState>,\n    profile_id: String,\n    sql: String,\n) -> Result<QueryResult, String> {\n    let tunnel = state.get_active_tunnel(&profile_id)?;\n    match tunnel.engine {\n        Engine::Postgres => postgres::execute(&tunnel.local_addr, &sql).await,\n        Engine::MySql => mysql::execute(&tunnel.local_addr, &sql).await,\n        Engine::Redis => redis::execute_command(&tunnel.local_addr, &sql).await,\n        Engine::Sqlite => sqlite::execute(&tunnel.remote_file, &sql).await,\n        Engine::Mongo => mongo::query(&tunnel.local_addr, &sql).await,\n    }\n}",
    "prerequisites": [
      "Remote database instance running on localhost or internal VPC network (PostgreSQL, MySQL, MariaDB, Redis, SQLite, MongoDB).",
      "Database user credentials (username, password, database name)."
    ],
    "features": [
      "<strong>Multi-Engine Support:</strong> Connect to PostgreSQL, MySQL, MariaDB, Redis, SQLite, and MongoDB.",
      "<strong>Automatic Port Forwarding:</strong> Tunnels database connections over SSH; no need to open firewall ports or expose 3306/5432.",
      "<strong>Monaco SQL Editor:</strong> Autocompletion for table and column names, syntax highlighting, query history, and execution timers.",
      "<strong>Editable Data Grid:</strong> Browse table rows, apply filters and sorting, edit cell values inline, and commit changes with one click.",
      "<strong>Export & Backup:</strong> Export query results and table data to CSV, JSON, and SQL dump formats."
    ],
    "steps": [
      {
        "title": "1. Connecting to a Remote Database",
        "content": "Click the Database icon in the Dock. Select your database engine (e.g. <strong>PostgreSQL</strong> or <strong>MySQL</strong>):\n<ul>\n  <li><strong>Host:</strong> Enter <code>127.0.0.1</code> (or internal VPC IP).</li>\n  <li><strong>Port:</strong> Default <code>5432</code> (Postgres) or <code>3306</code> (MySQL).</li>\n  <li><strong>Database Name:</strong> Name of the database to open.</li>\n  <li><strong>Username &amp; Password:</strong> Database user credentials.</li>\n  <li>Click <strong>Connect</strong>. SSH Desktop opens an encrypted SSH tunnel in the background and connects immediately.</li>\n</ul>"
      },
      {
        "title": "2. Running SQL Queries",
        "content": "The upper panel provides a full SQL query editor with syntax highlighting and autocomplete. Type your query (e.g. <code>SELECT * FROM users WHERE active = true ORDER BY created_at DESC;</code>) and click <strong>Execute (Cmd+Enter)</strong>. Results appear instantly in the lower data table with execution time in milliseconds."
      },
      {
        "title": "3. Editing Table Rows & Modifying Data",
        "content": "Browse tables in the left sidebar. Clicking a table loads its schema and data rows. Double-click any cell to modify its value inline, or click <strong>+ Add Row</strong> to insert records. Click <strong>Commit Changes</strong> to apply updates with SQL transaction safety."
      },
      {
        "title": "4. Redis Key-Value & Memory Inspector",
        "content": "When connecting to Redis, the studio switches to a Key-Value browser: inspect string, hash, set, and list keys, view TTLs, execute raw CLI commands, and monitor real-time memory usage."
      }
    ],
    "underTheHood": "SSH Desktop opens an internal Direct-TCPIP channel over your SSH session, binding a dynamic local port to the remote database port. Client protocol drivers speak the wire protocol (PostgreSQL frontend/backend protocol, MySQL packet stream, Redis RESP) directly over this secure channel.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Enter",
        "desc": "Execute Selected SQL Query"
      },
      {
        "key": "Cmd/Ctrl + Shift + E",
        "desc": "Export Results to CSV"
      },
      {
        "key": "Cmd/Ctrl + Shift + R",
        "desc": "Refresh Table Schema"
      }
    ]
  },
  "ssh-tunneling.html": {
    "lead": "Manage Local (-L), Remote (-R), and Dynamic SOCKS5 (-D) SSH tunnels with visual status indicators, auto-reconnect watchdog, and port conflict detection.",
    "whatIsIt": "The SSH Port Forwarding & Tunnels Manager is a visual hub for creating, monitoring, and maintaining encrypted network tunnels. It supports Local port forwarding (access remote services on localhost), Remote port forwarding (expose local ports to remote servers), and Dynamic SOCKS5 proxying.",
    "whyNeedIt": "Typing complex tunnel commands like <code>ssh -L 8080:internal-service:80 user@server -N -f</code> is difficult to remember and offers no monitoring when tunnels silently drop. SSH Desktop provides a visual dashboard with status indicators, bandwidth gauges, and automatic reconnection watchdogs.",
    "codeSnippetTitle": "Rust Direct-TCPIP Forwarding Worker (src-tauri/src/ssh/tunnel.rs)",
    "codeSnippet": "// src-tauri/src/ssh/tunnel.rs\npub struct TunnelManager {\n    active_tunnels: Arc<DashMap<String, TcpListener>>,\n}\n\nimpl TunnelManager {\n    pub async fn create_local_tunnel(\n        &self,\n        session: &Session,\n        local_port: u16,\n        remote_host: &str,\n        remote_port: u16,\n    ) -> Result<u16, SshError> {\n        let listener = TcpListener::bind(format!(\"127.0.0.1:{}\", local_port)).await?;\n        // Asynchronous socket forwarding loop with reconnection watchdog\n        // ...\n        Ok(local_port)\n    }\n}",
    "prerequisites": [
      "AllowTcpForwarding enabled in remote sshd_config (enabled by default in OpenSSH).",
      "For remote reverse forwarding (-R), GatewayPorts enabled if listening on public interfaces."
    ],
    "features": [
      "<strong>Local Forwarding (-L):</strong> Forward remote internal services (Elasticsearch, Redis, staging websites) to a local port on your laptop.",
      "<strong>Remote Forwarding (-R):</strong> Share local development servers (e.g. localhost:3000) with a remote server or team.",
      "<strong>Dynamic SOCKS5 Proxy (-D):</strong> Route your local browser traffic through the remote server to bypass firewalls or inspect internal networks.",
      "<strong>Auto-Reconnect Watchdog:</strong> Automatically detects broken connections and re-establishes dropped tunnels with exponential backoff.",
      "<strong>Port Conflict Detection:</strong> Alerts you immediately if a requested local port is already in use by another application."
    ],
    "steps": [
      {
        "title": "1. Creating a Local Tunnel (-L)",
        "content": "To access an internal service running on the remote server (e.g. an internal dashboard on port 8080):\n<ol>\n  <li>Click <strong>+ New Tunnel</strong>.</li>\n  <li>Select Type: <strong>Local Forwarding (-L)</strong>.</li>\n  <li>Local Port: <code>8080</code> (port on your machine).</li>\n  <li>Remote Host: <code>127.0.0.1</code>, Remote Port: <code>8080</code>.</li>\n  <li>Click <strong>Start Tunnel</strong>. You can now open <code>http://localhost:8080</code> in your browser!</li>\n</ol>"
      },
      {
        "title": "2. Setting Up Dynamic SOCKS5 Proxy (-D)",
        "content": "Select <strong>Dynamic Proxy (-D)</strong> and enter a local port (e.g. <code>1080</code>). Start the tunnel, then configure your browser or network settings to use SOCKS5 proxy <code>127.0.0.1:1080</code>. All internet traffic now routes securely through your remote server."
      },
      {
        "title": "3. Monitoring Tunnel Health & Traffic",
        "content": "Each active tunnel card displays real-time connection status (Green = Active, Orange = Reconnecting, Red = Error) along with transferred bytes and latency."
      }
    ],
    "underTheHood": "Tunnels utilize OpenSSH's <code>direct-tcpip</code> and <code>tcpip-forward</code> channel requests. The Rust backend manages a non-blocking asynchronous event loop that forwards raw TCP sockets to SSH channels using zero-copy stream piping.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Create New Forwarding Rule"
      },
      {
        "key": "Cmd/Ctrl + Shift + T",
        "desc": "Toggle All Tunnels Active/Inactive"
      }
    ]
  }
};
