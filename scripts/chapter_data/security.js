// scripts/chapter_data/security.js
module.exports = {
  "firewall-ufw.html": {
    "lead": "Configure firewall rules with safety checks. Open ports (HTTP, HTTPS, SSH), restrict access by CIDR IP block, and enable brute-force rate limiting.",
    "whatIsIt": "The Visual Firewall Manager provides a graphical control panel for UFW (Uncomplicated Firewall) and iptables. Inspect active incoming/outgoing rules, open or block ports, restrict access to specific IP addresses or subnets, and configure brute-force rate limiting on your SSH port.",
    "whyNeedIt": "Misconfiguring a firewall via terminal commands can instantly lock you out of your server. SSH Desktop includes built-in safety checks: it detects your active SSH connection and warns you before you apply any rule that could sever your current session.",
    "codeSnippetTitle": "Rust Firewall Backend & Fail2ban Integration (src-tauri/src/system/firewall.rs)",
    "codeSnippet": "// src-tauri/src/system/firewall.rs - Active SSH Lockout Safeguard\n#[tauri::command]\npub async fn firewall_add_rule_advanced(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n    payload: AddRulePayload,\n) -> Result<String, String> {\n    let session = state.get_session(&conn_id)?;\n    \n    // Safety check: Prevents blocking active SSH port\n    if payload.action == \"deny\" && payload.port == session.connected_port.to_string() {\n        return Err(\"Lockout prevented: Cannot deny active SSH port!\".to_string());\n    }\n\n    let cmd = format!(\"ufw allow proto {} from {} to any port {}\", payload.protocol, payload.source, payload.port);\n    session.exec_command(&cmd).await\n}",
    "prerequisites": [
      "UFW or Firewalld installed on the remote Linux server (standard on Ubuntu, Debian; available on RHEL/Arch).",
      "Sudo or root privileges to modify firewall tables."
    ],
    "features": [
      "<strong>4 Firewall Hub Tabs:</strong> Active Rules, Firewalld Zones, Listening Ports allow-list, and Fail2ban Banned IPs.",
      "<strong>Lockout Protection:</strong> Warns and prevents applying rules that could disconnect your current active SSH session.",
      "<strong>Fail2ban Integration:</strong> View banned IP addresses per jail and unban IPs with 1 click via <code>fail2ban-client</code>.",
      "<strong>Visual Rule Editor:</strong> Allow, Deny, or Limit incoming and outgoing traffic by Port, Protocol (TCP/UDP), and Source IP.",
      "<strong>SSH Rate Limiting:</strong> Enable <code>ufw limit 22/tcp</code> with one click to protect against brute-force password scanners."
    ],
    "steps": [
      {
        "title": "1. Checking Firewall Status",
        "content": "Open the Firewall app. The header shows whether UFW is <strong>Active</strong> or <strong>Inactive</strong> along with the default incoming policy (usually <em>Deny</em>) and outgoing policy (<em>Allow</em>)."
      },
      {
        "title": "2. Opening Ports (e.g. HTTP, HTTPS, Custom)",
        "content": "Click <strong>+ Add Rule</strong>. Select Action: <em>Allow</em>, Protocol: <em>TCP</em>, Port: <code>80, 443</code>. Enter a description (e.g. \"Web Server Traffic\") and click <strong>Apply Rule</strong>."
      },
      {
        "title": "3. Inspecting and Unbanning IPs in Fail2ban",
        "content": "Switch to the <strong>Banned IPs</strong> tab to view suspicious IP addresses blocked by fail2ban jails (e.g. <code>sshd</code>, <code>nginx-http-auth</code>). Click <strong>Unban</strong> to immediately release legitimate users."
      }
    ],
    "underTheHood": "Runs <code>ufw status numbered</code> and parses rule indices, source IPs, destination ports, and actions. For firewalld, it queries <code>firewall-cmd --list-all-zones</code>.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + N",
        "desc": "Add Firewall Rule"
      },
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Refresh Rule List"
      }
    ]
  },
  "network-port-auditor.html": {
    "lead": "Audit open TCP/UDP listening ports, active socket connections, and network interfaces. Pinpoint which process and PID is listening on any port.",
    "whatIsIt": "The Network & Port Auditor is an active socket inspector for Linux. It reveals every open TCP and UDP listening port, the associated process name and PID, network interface configurations (IP, MAC, MTU), and routing tables.",
    "whyNeedIt": "Unexpected open ports represent serious security vulnerabilities. Terminal tools like <code>netstat</code> or <code>ss -tulpn</code> output dense text that makes it hard to distinguish legitimate daemons from rogue processes. SSH Desktop provides instant search and process attribution.",
    "codeSnippetTitle": "Network Manager Tabs & SpeedTest Engine (src/apps/network/NetworkManager.tsx)",
    "codeSnippet": "// src/apps/network/NetworkManager.tsx\nexport type NetworkTab = 'interfaces' | 'speedtest' | 'ports' | 'conns' | 'ping' | 'dns';\n\nexport const NetworkManager = () => {\n  const [tab, setTab] = useState<NetworkTab>('interfaces');\n  const [listeningPorts, setListeningPorts] = useState<ListeningPort[]>([]);\n  \n  const handleKillPort = async (port: number, pid: number) => {\n    // Safely kills the process occupying a port via KillPortModal\n    await invoke('kill_port_process', { port, pid });\n  };\n  // ...\n};",
    "prerequisites": [
      "Standard Linux OS with iproute2 package (ss, ip commands installed).",
      "Sudo privileges to resolve process names and PIDs for system-owned sockets."
    ],
    "features": [
      "<strong>6 Network Views:</strong> Interfaces, Listening Ports (<code>ss</code>), Active Connections, SpeedTest Dashboard, Visual Ping, and DNS Inspector.",
      "<strong>Listening Ports Audit:</strong> Real-time table of all listening TCP/UDP ports, bind addresses (0.0.0.0 vs 127.0.0.1), and protocol.",
      "<strong>Process &amp; PID Resolution:</strong> Identifies the exact application and process ID listening on each port.",
      "<strong>SpeedTest Dashboard:</strong> Run automated bandwidth tests measuring download Mbps, upload Mbps, and latency ping on remote host.",
      "<strong>Visual Ping &amp; DNS:</strong> Inspect `/etc/resolv.conf`, test DNS record resolution, and ping targets with latency charts."
    ],
    "steps": [
      {
        "title": "1. Auditing Listening Ports",
        "content": "Open the Network Auditor. The <strong>Ports</strong> tab lists all open ports. Sockets bound to <code>0.0.0.0</code> (publicly accessible) are highlighted with a globe icon, while <code>127.0.0.1</code> (localhost only) are marked with a lock icon."
      },
      {
        "title": "2. Investigating and Killing Occupied Ports",
        "content": "Click any port row to view process details: Executable path (e.g. <code>/usr/sbin/nginx</code>), Process ID (PID), and command line. Click <strong>Kill Port</strong> to free the port immediately."
      },
      {
        "title": "3. Running Server Bandwidth SpeedTests",
        "content": "Switch to the <strong>SpeedTest</strong> tab and click <strong>Run Test</strong>. SSH Desktop executes an on-server speed test, displaying real-time gauges for latency ping, upload bandwidth, and download bandwidth."
      }
    ],
    "underTheHood": "Runs <code>ss -tulpn -H</code> and <code>ip -j addr show</code>, parsing socket structures and resolving <code>/proc/&lt;pid&gt;/exe</code> symlinks to provide authoritative process information.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Filter Ports by Number or Name"
      },
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Refresh Socket List"
      }
    ]
  },
  "ssl-certificates.html": {
    "lead": "Inspect SSL certificates, monitor expiration dates, request new Let's Encrypt certificates, and automate Nginx/Apache reload on certificate renewal.",
    "whatIsIt": "The SSL/TLS Certificates Manager provides an automated dashboard for Let's Encrypt (Certbot) and custom SSL certificates. Monitor certificate validity, inspect Subject Alternative Names (SANs), check expiration countdowns, and issue or renew certificates with automated web server reloads.",
    "whyNeedIt": "Expired SSL certificates cause browser security warnings, breaking website traffic and API integrations. Checking certificate expiration via OpenSSL CLI (<code>openssl x509 -enddate -noout</code>) across multiple domains is slow and error-prone. SSH Desktop displays expiration alerts before certificates lapse.",
    "codeSnippetTitle": "SSL Certificate Manager & Certbot Hub (src/apps/ssl/SslManager.tsx)",
    "codeSnippet": "// src/apps/ssl/SslManager.tsx\nexport type SslTab = 'certificates' | 'issue' | 'renewal' | 'self-signed' | 'diagnostics';\n\nexport const SslManager = () => {\n  const [tab, setTab] = useState<SslTab>('certificates');\n  const [certificates, setCertificates] = useState<SslCertificate[]>([]);\n\n  const handleRenewAll = async () => {\n    // Runs certbot renew and reloads web server automatically\n    await invoke('ssl_certbot_renew');\n  };\n  // ...\n};",
    "prerequisites": [
      "Certbot or OpenSSL installed on the remote server.",
      "DNS records properly pointing to the server for Let's Encrypt domain validation."
    ],
    "features": [
      "<strong>5 SSL Management Tabs:</strong> Certificates Overview, Issue New Cert, Automated Renewal Hub, Self-Signed Generator, and Diagnostics.",
      "<strong>Expiration Countdown Badges:</strong> Visual badges show days remaining until certificate expiration (Green &gt; 30d, Orange &lt; 30d, Red &lt; 7d).",
      "<strong>1-Click Let's Encrypt Issuance:</strong> Request new certificates with HTTP-01 or DNS-01 challenges directly from the GUI.",
      "<strong>Automated Web Server Reload:</strong> Automatically tests and reloads Nginx, Apache, or Caddy upon successful renewal.",
      "<strong>Self-Signed SSL Generator:</strong> Issue self-signed certificates in seconds for internal testing and staging environments."
    ],
    "steps": [
      {
        "title": "1. Monitoring Certificate Validity",
        "content": "Launch the SSL Manager. All detected certificates across <code>/etc/letsencrypt/live/</code> and custom paths are displayed with their domain names and expiration countdowns."
      },
      {
        "title": "2. Renewing Certificates with 1 Click",
        "content": "Click <strong>Renew All</strong> or select an individual certificate and click <strong>Renew</strong>. SSH Desktop executes <code>certbot renew</code>, streams output, and triggers a web server reload upon success."
      },
      {
        "title": "3. Requesting a New Let's Encrypt Certificate",
        "content": "Click <strong>+ New Certificate</strong>. Enter your domain names (e.g. <code>example.com, www.example.com</code>), select your web server (Nginx or Apache), and enter your notification email. Click <strong>Issue Certificate</strong> to run automated provisioning."
      }
    ],
    "underTheHood": "Runs <code>certbot certificates</code> and <code>openssl x509 -in &lt;cert&gt; -text -noout</code>. Parses validity timestamps and compares them against system UTC time to compute days remaining.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + R",
        "desc": "Refresh Certificates"
      },
      {
        "key": "Cmd/Ctrl + Shift + R",
        "desc": "Run Dry-Run Renewal"
      }
    ]
  },
  "security-audit-lynis.html": {
    "lead": "Run automated security vulnerability scans with Lynis. Detect weak SSH ciphers, open ports, outdated software, and obtain hardening index scores.",
    "whatIsIt": "The Security & Lynis Auditor is an automated system hardening and vulnerability scanner for Linux servers. Powered by Lynis, it audits operating system configuration, file permissions, kernel parameters, SSH server ciphers, firewall coverage, and package integrity.",
    "whyNeedIt": "Hardening a Linux server requires deep domain knowledge across dozens of CIS benchmarks and security standards. Lynis provides the gold standard in auditing, but its raw terminal output can be overwhelming. SSH Desktop translates scan data into an actionable visual checklist with severity ratings and fix suggestions.",
    "codeSnippetTitle": "Security Auditor Tabs & Hardening Inspector (src/apps/security/SecurityAuditor.tsx)",
    "codeSnippet": "// src/apps/security/SecurityAuditor.tsx\nexport type SecurityTab = 'audit' | 'ssh' | 'ports' | 'intrusion' | 'ssl' | 'suid';\n\nexport const SecurityAuditor = () => {\n  const [tab, setTab] = useState<SecurityTab>('audit');\n  const [hardeningScore, setHardeningScore] = useState<number>(0);\n  const [failedLogins, setFailedLogins] = useState<FailedLogin[]>([]);\n\n  // Intrusions tab parses /var/log/auth.log for failed SSH brute force attacks\n  // SUID tab inspects binaries with chmod +s permissions\n  // ...\n};",
    "prerequisites": [
      "Lynis package installed on the remote server (apt install lynis, dnf install lynis, or git clone).",
      "Root or sudo privileges to perform comprehensive system scans."
    ],
    "features": [
      "<strong>6 Audit Modules:</strong> Lynis Audit, SSH Hardening, Exposed Ports, Intrusion Detection, SSL Health, and SUID Binary Inspector.",
      "<strong>Hardening Index Score:</strong> Numerical security rating (0 to 100) reflecting your server's overall defense posture.",
      "<strong>Intrusion Detection:</strong> Analyzes failed SSH login attempts from `/var/log/auth.log`, highlighting attacking IPs.",
      "<strong>SUID Root Scanner:</strong> Identifies files with SUID/SGID bits set that could permit local privilege escalation.",
      "<strong>Actionable Fix Guides:</strong> Direct links to Lynis documentation and recommended CLI commands to remediate each finding."
    ],
    "steps": [
      {
        "title": "1. Running a Security Audit",
        "content": "Open the Security Auditor. Click <strong>Run Audit Scan</strong>. SSH Desktop executes Lynis in non-interactive mode. A progress bar tracks the test phases (Kernel, Authentication, SSH, Firewall, Storage)."
      },
      {
        "title": "2. Reviewing the Hardening Score & Warnings",
        "content": "Once complete, the dashboard displays your Hardening Index (e.g. 74/100). The <strong>Warnings</strong> section highlights critical issues such as weak SSH configurations or unmanaged services."
      },
      {
        "title": "3. Inspecting Intrusions and SUID Binaries",
        "content": "Switch to the <strong>Intrusion</strong> tab to inspect brute-force attacks and attacking IP origins. Switch to <strong>SUID</strong> to inspect root-privileged executables."
      }
    ],
    "underTheHood": "Executes <code>lynis audit system --quick --warnings-only</code> and parses <code>/var/log/lynis-report.dat</code>, generating structured JSON with test IDs and remediation URLs.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Enter",
        "desc": "Start New Security Audit"
      }
    ]
  }
};
