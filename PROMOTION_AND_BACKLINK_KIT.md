# 🚀 SSH Desktop — Complete 10-Point Backlink & Growth Playbook

This playbook provides exact copy-paste materials for **all 10 backlink and growth strategies** required to rank `sshdesktop.com` at the top of search results.

---

## 1. AlternativeTo.net (Domain Authority: 82)
- **Submit URL:** [https://alternativeto.net/software/new/](https://alternativeto.net/software/new/)
- **Name:** SSH Desktop
- **URL:** `https://sshdesktop.com/`
- **License:** Free & Open Source (Apache 2.0 / MIT)
- **Platforms:** Windows 11/10, macOS, Linux, Web (Browser)
- **Tagline:** Free, open-source GUI SSH client & remote Linux desktop with 0 MB server RAM overhead.
- **Competitors to list as Alternative To:**
  - PuTTY
  - Termius
  - MobaXterm
  - WinSCP
  - DBeaver
  - Portainer
  - Cockpit
  - Webmin

---

## 2. GitHub "Awesome" Lists (Domain Authority: 96)
Submit a Pull Request to each of these repositories:

### A. `moul/awesome-ssh`
- **File:** `README.md`
- **Section:** `Clients` -> `GUI`
```markdown
- [SSH Desktop](https://sshdesktop.com) - Free, open-source GUI SSH client for Windows, macOS and Linux with hardware terminal, dual-pane SFTP, Docker, and database tunneling over pure SSH port 22.
```

### B. `awesome-selfhosted/awesome-selfhosted`
- **File:** `README.md`
- **Section:** `Communication` -> `Remote Access` / `SSH`
```markdown
- [SSH Desktop](https://sshdesktop.com) - Free open-source client-side GUI and self-hosted web terminal (port 2222) with 0 MB server RAM overhead. `Apache-2.0`
```

### C. `awesome-sysadmin/awesome-sysadmin`
- **File:** `README.md`
- **Section:** `Software` -> `Remote Management`
```markdown
- [SSH Desktop](https://sshdesktop.com) - Modern open-source graphical client for remote Linux server administration over pure OpenSSH.
```

---

## 3. Product Hunt Launch Kit (Domain Authority: 92)
- **Name:** SSH Desktop
- **Tagline:** Free GUI SSH client & Linux remote desktop over port 22
- **Website:** `https://sshdesktop.com`
- **Pricing:** Free ($0)
- **First Maker Comment:**
  ```text
  Hey Product Hunt! 👋

  If you manage Linux cloud servers, you know the daily struggle: switching between a terminal emulator, FileZilla/WinSCP for SFTP, DBeaver for database tunnels, and browser dashboards for Docker.

  We built SSH Desktop to unify all 25 essential server administration tools into a single desktop window:
  - 🖥️ Authentic macOS Sonoma-style client-side desktop view.
  - ⚡ Pure SSH Port 22 connection with 0 MB server memory overhead.
  - 📁 Dual-pane SFTP file manager with remote archive extraction & Monaco code editor.
  - 🐳 Docker container inspector & live stdout log streamer.
  - 🗄️ Universal database studio with automatic SSH port forwarding.
  - 🔒 100% free & open-source under Apache 2.0 / MIT.

  Download it for Windows, macOS, or Linux at https://sshdesktop.com and let us know your feedback!
  ```

---

## 4. Hacker News & Reddit Launch Posts (Domain Authority: 93)

### A. Hacker News — "Show HN"
- **Submit:** [https://news.ycombinator.com/submit](https://news.ycombinator.com/submit)
- **Title:** `Show HN: SSH Desktop – Open-source GUI SSH client with 0 MB server RAM overhead`
- **URL:** `https://sshdesktop.com`
- **First Comment:**
  ```text
  Hi HN! We built SSH Desktop because managing headless Linux servers usually forces you into one of two extremes:
  1) Raw terminal CLI (fast and lightweight, but tedious for file transfers, docker triage, and firewall management)
  2) Heavy remote desktops like VNC/XRDP/Webmin (consumes 1-2GB server RAM, exposes extra open ports, sluggish video frame streaming)

  SSH Desktop takes a different approach:
  - 100% client-side rendering (using WebGL/Canvas).
  - Pure SSH Port 22 connection (zero server daemons, 0 MB extra server RAM).
  - Combines a GPU-accelerated terminal, dual-pane SFTP, Monaco code editor, Docker manager, and encrypted database tunnels into one cohesive window.

  It is 100% free and open-source under Apache-2.0 / MIT.
  Website: https://sshdesktop.com
  GitHub: https://github.com/sshdesktop/sshdesktop

  We would love your feedback and critique on the architecture and workflow!
  ```

### B. Reddit `r/selfhosted`, `r/linux`, `r/devops`, `r/sysadmin`
- **Title:** `I built SSH Desktop: An open-source GUI SSH client with 0 MB server RAM overhead (Windows, Mac, Linux & Web)`
- **Body:**
  ```text
  Hey everyone,

  I wanted to share an open-source project I've been working on: **SSH Desktop** (https://sshdesktop.com).

  ### Why build this?
  Traditional remote desktop tools (VNC, XRDP) require running a full desktop environment on the remote server, eating 1GB+ RAM and lagging over non-local connections.

  SSH Desktop flips this model:
  - Communicates exclusively over **standard OpenSSH port 22**.
  - All UI elements are rendered locally on your PC (or inside a lightweight browser daemon on port 2222).
  - Uses **0 MB idle server RAM** because it simply executes POSIX queries over the active SSH channel.

  ### What's included:
  - Multi-tab hardware-accelerated terminal (split horizontal/vertical)
  - Dual-pane SFTP file browser with remote zip/unzip and in-place code editing
  - Visual Docker container & log management
  - Encrypted database tunneling for PostgreSQL, MySQL, Redis, SQLite
  - Visual firewall (UFW/Iptables) and systemd service inspector
  - Local/Remote/Dynamic SOCKS5 SSH port forwarding
  - Native Windows DPAPI / macOS Keychain credential encryption

  License: Apache 2.0 / MIT
  GitHub: https://github.com/sshdesktop/sshdesktop
  Download: https://sshdesktop.com/download.html

  Would love to hear what tools or apps you'd like to see next!
  ```

---

## 5. Ready-to-Publish Guest Post for Dev.to, Hashnode & Medium
Publish this complete article with a canonical link pointing to `https://sshdesktop.com/blog/how-to-ssh-into-ubuntu-server-from-windows-11.html`:

**Title:** *Why I Stopped Using PuTTY in 2026: Modernizing Windows 11 SSH Workflows*

```markdown
If you manage Linux servers from a Windows PC, chances are you started with PuTTY. It was released in 1999, and while it was revolutionary back then, managing cloud servers in 2026 requires far more than a single-window terminal.

### The Problem with 90s SSH Workflows
1. **No Tabs or Split Panes:** Having 15 independent PuTTY windows cluttering your taskbar.
2. **Disconnected File Management:** Switching to FileZilla or WinSCP every time you need to upload a script or edit an Nginx configuration.
3. **External Key Converters:** Needing PuTTYgen just to convert modern OpenSSH Ed25519 keys into proprietary `.ppk` files.
4. **Zero Container or Database Awareness:** Manually typing lengthy `docker logs` commands or setting up complex CLI port forwards for PostgreSQL.

### A Modern Approach: SSH Desktop
Recently, I switched to [SSH Desktop](https://sshdesktop.com) — an open-source client that treats your remote Linux server like a unified desktop environment:

- **Hardware Terminal:** Multi-tab Xterm.js terminal with split panes.
- **Dual-Pane SFTP:** Drag-and-drop transfers with remote in-place `.zip` extraction and Monaco code editing.
- **Docker Hub:** Visual container lifecycle management and live log streaming.
- **Zero Server Daemons:** It communicates purely over standard SSH Port 22 with 0 MB server RAM overhead.

If you are still using legacy terminal tools on Windows 11, try upgrading your setup at [sshdesktop.com](https://sshdesktop.com).
```

---

## 6. Comparison Site Submissions (Slant, SourceForge, G2, Capterra)
- **Slant.co Question:** *"What are the best SSH clients for Windows 11?"*
  - Add SSH Desktop with pros: 100% free open-source, dual-pane SFTP with Monaco editor, Docker GUI, 0 MB server RAM, split terminal panes.
- **SourceForge Project Submission:**
  - Category: System Administration / Networking / SSH
  - License: Apache License 2.0
  - URL: `https://sshdesktop.com`

---

## 7. 5-Minute YouTube Demo Video Script

- **Title:** `The Best Free SSH Client for Windows 11 & Linux in 2026 (PuTTY Alternative)`
- **Duration:** 4–5 minutes

### Video Outline:
1. **0:00 - 0:45 (The Problem):** Show how tedious it is jumping between PuTTY, WinSCP, and terminal windows.
2. **0:45 - 1:30 (Connecting with SSH Desktop):** Download SSH Desktop from `https://sshdesktop.com/download.html`. Enter host, port 22, and SSH key. Connect in 2 seconds.
3. **1:30 - 2:30 (Tour of 25 Apps):**
   - Show the Sonoma-style desktop shell.
   - Open Terminal: show multi-tab split panes.
   - Open SFTP: drag a file and edit it with the Monaco editor.
4. **2:30 - 3:30 (Docker & Database Tunnels):**
   - Click Docker: show live streaming logs for an Nginx container.
   - Click Database: show connecting to PostgreSQL over an automatic tunnel.
5. **3:30 - 4:15 (0 MB Server RAM Proof):**
   - Run `free -m` and `htop` on the server: show that zero server-side daemons or VNC processes are running.
6. **4:15 - 4:45 (Outro):** Mention it is 100% free & open-source on GitHub. Link in the description.

---

## 8. Outreach Pitch Template for Linux & DevOps YouTubers
Send this email pitch to tech YouTubers (e.g. Christian Lempa, Techno Tim, NetworkChuck, Jeff Geerling):

```text
Subject: Open-source tool idea for your channel: SSH Desktop (0 MB Server RAM Linux GUI)

Hi [Creator Name],

Huge fan of your Linux and self-hosting tutorials!

I built an open-source project that I think your audience would love: SSH Desktop (https://sshdesktop.com / https://github.com/sshdesktop/sshdesktop).

Unlike traditional remote desktop tools (VNC, XRDP, or Webmin) that consume 1-2GB of RAM on headless servers, SSH Desktop renders a complete desktop shell locally on the client machine using pure OpenSSH port 22.

It includes 25 built-in tools (GPU terminal, dual-pane SFTP, Monaco editor, visual Docker manager, and encrypted database tunnels) with 0 MB idle server memory overhead.

It is 100% free under Apache 2.0 / MIT. If you'd like to check it out or feature it in an upcoming video on self-hosted tools or SSH workflows, I'd love to hear your thoughts!

Best regards,
SSH Desktop Team
https://sshdesktop.com
```

---

## 9. StackOverflow / ServerFault Compliant Answer Template
When answering questions like *"How to tunnel remote postgresql over ssh"* or *"How to view docker container logs remotely"*:

**Example Question:** *"How can I connect to a remote PostgreSQL database on Ubuntu without exposing port 5432?"*

**Answer Template:**
```markdown
You can tunnel port 5432 through an encrypted SSH connection using local port forwarding.

Run this command on your local machine:
```bash
ssh -L 5433:127.0.0.1:5432 user@your-server-ip -N
```
This listens on local port `5433` and routes traffic through SSH port 22 directly to PostgreSQL on `127.0.0.1:5432`.

Now configure your local database client to connect to `Host: 127.0.0.1` and `Port: 5433`.

*(Disclosure: I am a contributor to [SSH Desktop](https://sshdesktop.com), which has a free built-in visual database studio that automates these tunnels without manual CLI flags).*
```
*(Always include the disclosure to comply with Stack Exchange guidelines).*

---

## 10. Discord Community Setup Template

- **Server Name:** `SSH Desktop Community`
- **Channels Structure:**
  - 📢 `#announcements` (Release notes, updates)
  - 💬 `#general` (DevOps and sysadmin discussion)
  - 💡 `#feature-requests` (Community requests for new apps)
  - 🐛 `#bug-reports` (Issue reporting & troubleshooting)
  - 🐧 `#linux-tips` (SSH, Docker, and bash best practices)
  - 🔗 `#showcase` (Community homelabs and server setups)
- **Invite Link:** Place on `index.html` and `docs.html`.
