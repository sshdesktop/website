// scripts/chapter_data/desktop.js
module.exports = {
  "cloud-desktop.html": {
    "lead": "Master the macOS Sonoma-inspired cloud desktop interface. Learn how to manage floating windows, snap panes, launch apps with Spotlight (Cmd+K), and customize your workspace.",
    "whatIsIt": "The Cloud Desktop Shell is the central visual interface of SSH Desktop. Inspired by the sleek aesthetics and ergonomics of macOS Sonoma, it provides a native desktop experience inside a single application window: floating draggable windows, a bottom application dock with badges, a top menu bar with server telemetry, and a universal Spotlight launcher.",
    "whyNeedIt": "Managing servers in raw terminals often leads to window clutter, lost tabs, and complex tmux sessions. The Cloud Desktop shell gives you a spatial mental model: keep Docker in one window, Terminal in another, File Manager on the side, and live System Monitor pinned to the top, all neatly arranged and saved across sessions.",
    "codeSnippetTitle": "React 19 Window Management State Engine (src/App.tsx)",
    "codeSnippet": "// src/App.tsx - Window Manager State\ninterface WindowInstance {\n  id: string;\n  appId: string;\n  title: string;\n  icon: string;\n  isMinimized: boolean;\n  isMaximized: boolean;\n  zIndex: number;\n  position: { x: number; y: number };\n  size: { width: number; height: number };\n}\n\nexport const App = () => {\n  const [windows, setWindows] = useState<WindowInstance[]>([]);\n  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);\n  const [spotlightOpen, setSpotlightOpen] = useState(false);\n\n  // Global Spotlight shortcut listener (Cmd/Ctrl + K)\n  useEffect(() => {\n    const handleKeyDown = (e: KeyboardEvent) => {\n      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {\n        e.preventDefault();\n        setSpotlightOpen(prev => !prev);\n      }\n    };\n    window.addEventListener('keydown', handleKeyDown);\n    return () => window.removeEventListener('keydown', handleKeyDown);\n  }, []);\n  // ...\n};",
    "prerequisites": [
      "Active connection to any Linux server in SSH Desktop.",
      "Works identically on desktop clients and browser Web Mode."
    ],
    "features": [
      "<strong>Floating Window Manager:</strong> Move, resize, minimize, maximize, and tile application windows with fluid physics.",
      "<strong>Window Snapping:</strong> Drag windows to screen edges to snap left 50%, right 50%, top, or full screen.",
      "<strong>macOS Sonoma Dock:</strong> Dock with app launching, running indicators, notification badges, and dock magnification.",
      "<strong>Spotlight Launcher (Cmd+K):</strong> Instant keyboard-driven search to launch apps, switch servers, or run snippets.",
      "<strong>Top Menu Bar:</strong> Displays real-time server hostname, CPU/RAM telemetry pills, uptime, and quick settings."
    ],
    "steps": [
      {
        "title": "1. Launching Applications",
        "content": "Launch any of the 25 native applications in three ways:\n<ul>\n  <li><strong>From the Dock:</strong> Click any icon in the bottom dock. Hovering reveals app previews.</li>\n  <li><strong>From Spotlight (Recommended):</strong> Press <kbd>Cmd/Ctrl + K</kbd>, type the app name (e.g. <code>docker</code>, <code>terminal</code>, <code>database</code>), and hit <kbd>Enter</kbd>.</li>\n  <li><strong>From the Top Menu:</strong> Click the <strong>Apps</strong> dropdown in the top-left menu bar.</li>\n</ul>"
      },
      {
        "title": "2. Managing and Snapping Windows",
        "content": "Windows behave just like native macOS/Windows windows:\n<ul>\n  <li><strong>Window Controls:</strong> Click red to close, yellow to minimize to dock, green to maximize.</li>\n  <li><strong>Split Snapping:</strong> Drag a window to the left screen edge to snap it to the left 50%. Drag another to the right to snap side-by-side.</li>\n  <li><strong>Focus Management:</strong> Clicking anywhere inside a window brings it to the top z-index.</li>\n</ul>"
      },
      {
        "title": "3. Multi-Server Switching",
        "content": "When managing multiple servers, click the server badge in the top menu bar or press <kbd>Cmd/Ctrl + Shift + S</kbd>. Select another server to instantly switch the desktop context while keeping all your windows and background tasks alive."
      }
    ],
    "underTheHood": "Implemented in React 19 using CSS transforms and hardware-accelerated composite layers. Window positions, sizes, and active tabs are persisted in local indexedDB/localStorage so that your exact workspace layout is restored when you reconnect.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + K",
        "desc": "Open Spotlight App Launcher"
      },
      {
        "key": "Cmd/Ctrl + M",
        "desc": "Minimize Active Window"
      },
      {
        "key": "Cmd/Ctrl + W",
        "desc": "Close Active Window"
      },
      {
        "key": "Cmd/Ctrl + Shift + F",
        "desc": "Toggle Fullscreen Mode"
      }
    ]
  },
  "terminal.html": {
    "lead": "High-performance interactive PTY terminal emulator powered by Xterm.js with WebGL hardware acceleration, tabs, split panes, 24-bit TrueColor, font ligatures, and session persistence.",
    "whatIsIt": "The Interactive PTY Terminal is a fully featured, GPU-accelerated terminal emulator built directly into SSH Desktop. It leverages Xterm.js with WebGL rendering to deliver high-speed scrolling, TrueColor graphics, full ANSI escape sequence support, and native pseudo-terminal (PTY) emulation for Linux shells (bash, zsh, fish).",
    "whyNeedIt": "Developers and sysadmins spend hours in the terminal. Traditional terminals either lack modern GUI integration or suffer from slow rendering and high CPU usage. SSH Desktop's terminal provides lightning-fast WebGL rendering, intuitive horizontal and vertical split panes, customizable themes, and seamless clipboard sharing.",
    "codeSnippetTitle": "Xterm.js WebGL & Addon Configuration (src/apps/terminal/Terminal.tsx)",
    "codeSnippet": "// src/apps/terminal/Terminal.tsx\nimport { Terminal as XTerm } from '@xterm/xterm';\nimport { FitAddon } from '@xterm/addon-fit';\nimport { WebLinksAddon } from '@xterm/addon-web-links';\n\nexport const TerminalPane = ({ sessionHandle, fontSize, theme }) => {\n  const terminalRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    const term = new XTerm({\n      fontFamily: '\"JetBrains Mono\", \"Fira Code\", monospace',\n      fontSize: fontSize || 14,\n      theme: themes[theme] || themes.oneDark,\n      cursorBlink: true,\n      allowTransparency: true,\n    });\n\n    const fitAddon = new FitAddon();\n    term.loadAddon(fitAddon);\n    term.loadAddon(new WebLinksAddon());\n\n    term.open(terminalRef.current!);\n    fitAddon.fit();\n\n    // Resize handling sends SIGWINCH to remote sshd\n    window.addEventListener('resize', () => fitAddon.fit());\n    // ...\n  }, []);\n};",
    "prerequisites": [
      "Standard OpenSSH server on the remote host.",
      "Default user shell (e.g. /bin/bash, /bin/zsh, /bin/sh)."
    ],
    "features": [
      "<strong>WebGL Hardware Acceleration:</strong> Renders thousands of lines of log streams at 60 FPS with near-zero CPU usage.",
      "<strong>Split Panes:</strong> Split terminal horizontally (<kbd>Cmd+\\</kbd>) or vertically (<kbd>Cmd+Shift+\\</kbd>) to monitor multiple commands at once.",
      "<strong>Tabbed Sessions:</strong> Open unlimited terminal tabs with custom titles and color coding.",
      "<strong>TrueColor & Font Ligatures:</strong> Full support for 24-bit RGB colors, powerline symbols, nerd fonts, and programming ligatures (e.g. Fira Code, JetBrains Mono).",
      "<strong>Copy on Select:</strong> Highlight any text to copy immediately to your system clipboard; right-click to paste."
    ],
    "steps": [
      {
        "title": "1. Opening and Splitting Terminal Sessions",
        "content": "Launch the terminal by clicking the Terminal icon in the Dock or pressing <kbd>Cmd/Ctrl + T</kbd>.\nTo split the screen:\n<ul>\n  <li>Press <kbd>Cmd/Ctrl + \\</kbd> to split horizontally into top/bottom panes.</li>\n  <li>Press <kbd>Cmd/Ctrl + Shift + \\</kbd> to split vertically into side-by-side panes.</li>\n  <li>Drag the separator bar to resize panes to your preference.</li>\n</ul>"
      },
      {
        "title": "2. Customizing Fonts, Colors & Themes",
        "content": "Click the ⚙️ settings icon in the terminal window to customize:\n<ul>\n  <li><strong>Color Themes:</strong> Choose from Catppuccin, One Dark, Dracula, Solarized, Nord, or custom RGB palettes.</li>\n  <li><strong>Typography:</strong> Select your preferred monospace font, font size (10px to 24px), line height, and toggle font ligatures.</li>\n  <li><strong>Cursor Styles:</strong> Block, underline, or vertical bar with optional blinking.</li>\n</ul>"
      },
      {
        "title": "3. Searching Terminal History",
        "content": "Press <kbd>Cmd/Ctrl + F</kbd> inside the terminal to open the search bar. Type any string or regex to find command outputs, error traces, or IP addresses in your terminal scrollback buffer."
      }
    ],
    "underTheHood": "The Rust backend requests a pseudo-terminal channel from the remote sshd using <code>pty_req(\"xterm-256color\", cols, rows)</code> and spawns the user's login shell via <code>shell()</code>. Terminal resize events (SIGWINCH) are sent automatically on window resize.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + T",
        "desc": "Open New Terminal Tab"
      },
      {
        "key": "Cmd/Ctrl + W",
        "desc": "Close Current Tab / Pane"
      },
      {
        "key": "Cmd/Ctrl + \\",
        "desc": "Split Pane Horizontally"
      },
      {
        "key": "Cmd/Ctrl + Shift + \\",
        "desc": "Split Pane Vertically"
      },
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Search Terminal Scrollback"
      },
      {
        "key": "Cmd/Ctrl + + / -",
        "desc": "Increase / Decrease Font Size"
      }
    ]
  },
  "sftp-file-manager.html": {
    "lead": "High-speed dual-pane SFTP file manager with drag-and-drop transfers, in-place remote archive extraction (.tar.gz, .zip), permissions editor, and recursive file search.",
    "whatIsIt": "The Dual-Pane SFTP File Manager is an advanced visual file browser tailored for remote server administration. It provides a split-view interface (Local <-> Remote or Remote <-> Remote) with drag-and-drop uploads, instant directory navigation, remote file editing, and direct server-side archive extraction.",
    "whyNeedIt": "Using CLI commands (<code>scp</code>, <code>rsync</code>, <code>tar</code>, <code>chmod</code>) for routine file management is slow and prone to typographical errors. External FTP clients like FileZilla lack server-side archive extraction and don't integrate with your SSH keys or Monaco editor. SSH Desktop combines everything into a single zero-overhead tool.",
    "codeSnippetTitle": "Rust SFTP In-Place Server Extraction Engine (src-tauri/src/archive.rs)",
    "codeSnippet": "// src-tauri/src/archive.rs - In-Place Server Extraction\n#[tauri::command]\npub async fn sftp_extract_archive_pure(\n    state: tauri::State<'_, AppState>,\n    conn_id: String,\n    archive_path: String,\n    dest_dir: String,\n) -> Result<String, String> {\n    let session = state.get_session(&conn_id)?;\n    \n    // Executes native server extraction without downloading archive\n    let cmd = if archive_path.ends_with(\".tar.gz\") || archive_path.ends_with(\".tgz\") {\n        format!(\"tar -xzvf '{}' -C '{}'\", archive_path, dest_dir)\n    } else if archive_path.ends_with(\".zip\") {\n        format!(\"unzip -o '{}' -d '{}'\", archive_path, dest_dir)\n    } else {\n        format!(\"tar -xvf '{}' -C '{}'\", archive_path, dest_dir)\n    };\n\n    session.exec_command(&cmd).await\n}",
    "prerequisites": [
      "SFTP subsystem enabled on the remote server (standard in almost all OpenSSH installations).",
      "Read/write permissions for directories you wish to modify."
    ],
    "features": [
      "<strong>Multiple View Modes:</strong> macOS Finder-style Columns view (<code>ColumnsView.tsx</code>), Icons view, List view, and Gallery view.",
      "<strong>In-Place Remote Archive Engine:</strong> Extract `.tar.gz`, `.tar.bz2`, `.tar.xz`, `.zip`, and `.7z` archives directly on the server without downloading them!",
      "<strong>Spacebar Quick Look:</strong> Press Spacebar to instantly preview images, text files, and JSON payloads.",
      "<strong>Letter Jump Navigation:</strong> Type letters on your keyboard to instantly jump to matching files.",
      "<strong>Visual Permissions Editor:</strong> Modify octal file permissions (<code>chmod 755/644</code>) and ownership (<code>chown user:group</code>) with simple checkboxes."
    ],
    "steps": [
      {
        "title": "1. Navigating Directories with Quick Look & Letter Jump",
        "content": "Open the SFTP File Manager. Type any path in the address bar (<kbd>Cmd+L</kbd>) or double-click folders. Press <kbd>Space</kbd> on any file to open the instant Quick Look preview. Type letters to immediately jump to files matching that letter."
      },
      {
        "title": "2. Drag-and-Drop Uploads and Downloads",
        "content": "Drag files directly from your computer's native desktop or file explorer into the remote directory pane. The transfer drawer tracks active progress, transfer speed (MB/s), and estimated completion time."
      },
      {
        "title": "3. In-Place Archive Extraction (.tar.gz / .zip)",
        "content": "Right-click any <code>.tar.gz</code>, <code>.tgz</code>, or <code>.zip</code> file and choose <strong>Extract Here</strong> or <strong>Extract to Folder...</strong>. The server unpacks the archive directly on disk in seconds without consuming client network bandwidth."
      },
      {
        "title": "4. Editing Permissions & Ownership (chmod / chown)",
        "content": "Right-click any file and select <strong>Permissions &amp; Properties</strong>. Toggle Read, Write, and Execute checkboxes for Owner, Group, and Others. Check \"Apply recursively to subdirectories\" to batch update permissions."
      }
    ],
    "underTheHood": "Transfers execute over OpenSSH dedicated SFTP subsystem channel (v3). Server-side archive operations execute optimized native POSIX utilities (<code>tar -xzf</code>, <code>unzip -q</code>) on the host.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + L",
        "desc": "Focus Address Bar"
      },
      {
        "key": "Space",
        "desc": "Toggle Quick Look Preview"
      },
      {
        "key": "F5",
        "desc": "Refresh Current Directory"
      },
      {
        "key": "Cmd/Ctrl + H",
        "desc": "Toggle Hidden Dotfiles"
      },
      {
        "key": "Delete",
        "desc": "Delete Selected Files"
      }
    ]
  },
  "monaco-code-editor.html": {
    "lead": "Edit remote files directly with VS Code Monaco editor. Features syntax highlighting for 50+ languages, side-by-side diff comparison, and regex find & replace.",
    "whatIsIt": "The Monaco Code Editor brings the full power of Microsoft's VS Code editing engine directly into SSH Desktop. It allows you to open, inspect, edit, and save remote files (configuration files, codebases, scripts, environment variables) over SSH with syntax highlighting, auto-indentation, and side-by-side diffing.",
    "whyNeedIt": "Editing files over SSH traditionally means using terminal-based editors like Nano or Vim (which have steep learning curves and no multi-cursor support) or setting up fragile SSHFS mounts. The Monaco Editor gives you modern VS Code ergonomics with instantaneous remote saving.",
    "codeSnippetTitle": "Monaco Sudo Elevation & Diff Engine (src/apps/editor/CodeEditor.tsx)",
    "codeSnippet": "// src/apps/editor/CodeEditor.tsx - Sudo Elevation on Save\nconst handleSave = async () => {\n  try {\n    await saveRemoteFile(currentPath, editorContent);\n    setHasUnsavedChanges(false);\n  } catch (err: any) {\n    if (/permission denied/i.test(err.message)) {\n      // Prompt for sudo password elevation\n      const password = await promptSudoElevation();\n      await executeSudoSave(currentPath, editorContent, password);\n      setHasUnsavedChanges(false);\n    }\n  }\n};",
    "prerequisites": [
      "Read/write file permissions on the target remote file.",
      "Sudo privileges if modifying root-protected files like /etc/nginx/nginx.conf."
    ],
    "features": [
      "<strong>50+ Language Syntaxes:</strong> Syntax highlighting and bracket matching for Nginx configs, YAML, JSON, Dockerfile, Python, JavaScript, TypeScript, Bash, Rust, Go, SQL, and more.",
      "<strong>Side-by-Side Diff Viewer:</strong> Compare the current file against previous revisions or backup copies to inspect exact line-by-line changes before saving.",
      "<strong>Multi-Cursor & Regex Search:</strong> Full find-and-replace engine with regular expressions, match case, whole word, and multi-cursor editing (<kbd>Alt+Click</kbd>).",
      "<strong>Automatic Syntax Checking:</strong> Real-time JSON, YAML, and XML syntax validation highlights formatting errors and invalid keys.",
      "<strong>Sudo Elevation on Save:</strong> If you edit a root-owned file as a regular user, SSH Desktop seamlessly prompts for sudo password elevation to save without losing your edits."
    ],
    "steps": [
      {
        "title": "1. Opening a File to Edit",
        "content": "You can open files in the Monaco Editor in several ways:\n<ul>\n  <li>Double-click any file in the SFTP File Manager.</li>\n  <li>Open the Editor app from the Dock and browse to a file path.</li>\n  <li>Click \"Edit Config\" directly from other apps like Nginx Reverse Proxy or Systemd Services.</li>\n</ul>"
      },
      {
        "title": "2. Editing, Formatting & Linting",
        "content": "Edit code with standard VS Code shortcuts. Press <kbd>Shift + Alt + F</kbd> to automatically format JSON, JavaScript, or HTML. The minimap on the right provides quick visual scrolling across large files."
      },
      {
        "title": "3. Inspecting Changes with Side-by-Side Diff",
        "content": "Click the <strong>Diff View</strong> button in the editor header. The left pane shows the original file state on the server, while the right pane shows your modifications. Green lines represent additions, and red lines represent deletions."
      },
      {
        "title": "4. Saving with Instant Remote Sync",
        "content": "Press <kbd>Cmd/Ctrl + S</kbd> to save. SSH Desktop streams the modified content back through the SFTP channel. An animated green indicator confirms when the file has been successfully written to remote storage."
      }
    ],
    "underTheHood": "When saving to root-protected paths (e.g. <code>/etc/</code>), SSH Desktop writes to a temporary file in <code>/tmp/</code> and executes an atomic <code>sudo cp</code> and <code>sudo chown</code> to prevent configuration corruption.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + S",
        "desc": "Save File Remotely"
      },
      {
        "key": "Cmd/Ctrl + F",
        "desc": "Find in File"
      },
      {
        "key": "Cmd/Ctrl + H",
        "desc": "Find and Replace"
      },
      {
        "key": "Shift + Alt + F",
        "desc": "Format Document"
      },
      {
        "key": "Alt + Up/Down",
        "desc": "Move Line Up / Down"
      }
    ]
  },
  "sticky-notes.html": {
    "lead": "Pin colorful markdown sticky notes directly on your remote desktop shell. Keep scratchpads, cheat sheets, IP references, and server notes across sessions.",
    "whatIsIt": "The Desktop Sticky Notes app provides a lightweight, persistent scratchpad anchored directly to your server's cloud desktop. Create color-coded notes, jot down temporary IP addresses, draft command snippets, track operational to-do lists, and pin critical notes so they stay visible behind floating windows.",
    "whyNeedIt": "Sysadmins constantly juggle temporary information: IP ranges, staging URLs, generated passwords, and deployment checklists. Storing these in external note apps creates friction and risks pasting credentials into wrong windows. Sticky Notes keeps context tightly bound to each specific server.",
    "codeSnippetTitle": "Sticky Notes State & Markdown View Engine (src/apps/notes/Notes.tsx)",
    "codeSnippet": "// src/apps/notes/Notes.tsx - Note Item State\ninterface NoteItem {\n  id: string;\n  title: string;\n  content: string;\n  color: 'yellow' | 'cyan' | 'lavender' | 'emerald' | 'tangerine' | 'slate';\n  isPinned: boolean;\n  position: { x: number; y: number };\n  viewMode: 'split' | 'edit' | 'preview';\n}\n\nexport const StickyNote = ({ note, onUpdate, onDelete }) => {\n  // Render Markdown checklists (- [ ]) and code blocks\n  return (\n    <div className={`sticky-note ${note.color} ${note.isPinned ? 'pinned' : ''}`}>\n      <NoteHeader title={note.title} onPinToggle={...} />\n      <MarkdownContent mode={note.viewMode} text={note.content} />\n    </div>\n  );\n};",
    "prerequisites": [
      "Active SSH connection in SSH Desktop.",
      "Works completely client-side with zero server storage requirements."
    ],
    "features": [
      "<strong>Per-Server Isolation:</strong> Notes created on \"Production VPS\" stay strictly on \"Production VPS\", preventing cross-server confusion.",
      "<strong>Markdown Formatting:</strong> Supports headers, bold, italics, inline code, checklists (<code>- [ ]</code>), and markdown tables.",
      "<strong>6 Color Themes:</strong> Choose from Yellow, Cyan, Lavender, Emerald, Tangerine, and Dark Slate themes.",
      "<strong>Always-on-Bottom Pinning:</strong> Pin notes directly to the desktop wallpaper layer so they never obstruct active windows.",
      "<strong>Split & Preview Modes:</strong> Toggle between pure Markdown editing, live HTML preview, or split view."
    ],
    "steps": [
      {
        "title": "1. Creating a New Sticky Note",
        "content": "Click the 📌 Sticky Notes icon in the Dock or press <kbd>Cmd/Ctrl + Alt + N</kbd>. A new colored note appears on your desktop canvas. Type a title and start jotting down notes."
      },
      {
        "title": "2. Formatting with Markdown & Checklists",
        "content": "Type standard markdown syntax:\n<div class=\"docs-code-block\">### Server Migration Checklist\n- [x] Dump PostgreSQL database\n- [x] Rsync /var/www to staging\n- [ ] Update Cloudflare DNS records\n- [ ] Issue new SSL certificate</div>\nCheckboxes can be checked or unchecked with a single mouse click!"
      },
      {
        "title": "3. Organizing and Pinning to Desktop",
        "content": "Drag notes anywhere across the desktop canvas. Click the 📌 pin icon to anchor the note in place. Click the palette icon to change the note color to match your task urgency (e.g. Red for urgent, Green for done)."
      }
    ],
    "underTheHood": "Notes are stored locally in the client's encrypted storage vault keyed to the specific server UUID. Optionally, notes can be synced to a hidden <code>~/.sshdesktop/notes.json</code> file on the remote host if team sharing is enabled.",
    "shortcuts": [
      {
        "key": "Cmd/Ctrl + Alt + N",
        "desc": "Create New Sticky Note"
      },
      {
        "key": "Cmd/Ctrl + D",
        "desc": "Delete Active Sticky Note"
      },
      {
        "key": "Cmd/Ctrl + Shift + P",
        "desc": "Toggle Pin to Wallpaper"
      }
    ]
  }
};
