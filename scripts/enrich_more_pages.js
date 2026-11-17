/**
 * Content Enrichment for Webmin, Monaco, Docker, and PuTTY
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. ENRICH webmin-alternative.html
const webminFile = path.join(ROOT_DIR, 'webmin-alternative.html');
let webminContent = fs.readFileSync(webminFile, 'utf8');

const webminEnrichment = `
    <!-- Deep Architectural Teardown: Webmin vs SSH Desktop -->
    <section class="section" style="padding-top: 40px;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Webmin vs SSH Desktop: Architecture &amp; Security Comparison</h2>
          <p class="section-desc">Why modern infrastructure engineers are decommissioning Perl-based webmin daemons.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">🛡️</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Zero Attack Surface: No Port 10000</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Webmin requires opening port <code>10000</code> to the public internet or complex reverse proxy configurations. Over the past decade, Webmin has experienced multiple high-severity Remote Code Execution (RCE) vulnerabilities. SSH Desktop operates <strong>exclusively over SSH port 22</strong> using standard OpenSSH encryption, eliminating web exposure.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">⚡</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Zero Server Memory Overhead</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Webmin's Perl runtime and mini-webserver consume between 120 MB and 220 MB of resident memory on your server 24/7. SSH Desktop is an entirely client-side desktop application: it consumes <strong>0 MB of RAM on your remote Linux host</strong>, making it ideal for micro VPS and edge nodes.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">🎨</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">macOS Sonoma GUI vs 2000s Web UI</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Webmin's interface is notoriously dated, slow, and clunky. SSH Desktop provides a fluid, authentic macOS Sonoma desktop shell with 25 native management apps, instant search, split panes, and smooth 120 FPS animations.
            </p>
          </div>
        </div>

        <!-- Decommissioning Webmin Step-by-Step -->
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 16px;">How to Safely Remove Webmin and Switch</h3>
        <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: 8px; padding: 24px; margin-bottom: 40px;">
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 8px;">Step 1: Stop and Uninstall Webmin</h4>
          <pre style="background: #0f172a; color: #e2e8f0; padding: 12px 16px; border-radius: 6px; font-family: monospace; font-size: 0.88rem; overflow-x: auto; margin-bottom: 20px;"># Debian / Ubuntu
sudo systemctl stop webmin
sudo apt purge webmin -y
sudo ufw delete allow 10000/tcp</pre>

          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 8px;">Step 2: Connect via SSH Desktop</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            Launch SSH Desktop on your computer, enter your server IP, and authenticate via your existing SSH keys. You retain full visual control over user accounts, cron jobs, network ports, and disks without any server bloat.
          </p>
        </div>
      </div>
    </section>
`;

if (webminContent.includes('</main>') && !webminContent.includes('Webmin vs SSH Desktop: Architecture')) {
  webminContent = webminContent.replace('</main>', `${webminEnrichment}\n  </main>`);
  fs.writeFileSync(webminFile, webminContent, 'utf8');
  console.log('✅ Enriched webmin-alternative.html');
}

// 2. ENRICH monaco-code-editor.html
const monacoFile = path.join(ROOT_DIR, 'monaco-code-editor.html');
let monacoContent = fs.readFileSync(monacoFile, 'utf8');

const monacoEnrichment = `
    <!-- Deep Monaco Code Editor Technical Capabilities -->
    <section class="section" style="padding-top: 40px;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">VS Code-Grade Code Editing on Remote Linux Hosts</h2>
          <p class="section-desc">Edit server configurations, automation scripts, and container manifests with full IDE ergonomics.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">📝</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">50+ Language Grammars Built-In</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Full syntax highlighting, code folding, bracket pair matching, and indentation rules for YAML, JSON, Bash, Python, Nginx conf, Dockerfiles, Go, Rust, PHP, SQL, and systemd service unit files.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">💾</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">In-Place Remote SFTP Saving</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Pressing Ctrl+S or Cmd+S writes directly back across the authenticated SFTP stream. No temporary files left behind on your local machine, and file permissions/ownership remain completely intact.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">🔍</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Side-by-Side Diff Comparison</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Compare remote configuration files against previous backups or local templates using Monaco's side-by-side visual diff engine with colorized inline additions and deletions.
            </p>
          </div>
        </div>
      </div>
    </section>
`;

if (monacoContent.includes('</main>') && !monacoContent.includes('VS Code-Grade Code Editing')) {
  monacoContent = monacoContent.replace('</main>', `${monacoEnrichment}\n  </main>`);
  fs.writeFileSync(monacoFile, monacoContent, 'utf8');
  console.log('✅ Enriched monaco-code-editor.html');
}

// 3. ENRICH docker-web-gui.html
const dockerFile = path.join(ROOT_DIR, 'docker-web-gui.html');
let dockerContent = fs.readFileSync(dockerFile, 'utf8');

const dockerEnrichment = `
    <!-- Deep Docker Architecture Breakdown -->
    <section class="section" style="padding-top: 40px;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Agentless Docker Management: How It Works</h2>
          <p class="section-desc">Manage containers over pure SSH without exposing the Docker UNIX socket to web ports.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">🐳</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Zero Agent Overhead</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Unlike Portainer or Yacht which require deploying dedicated container agents and running background web servers, SSH Desktop interacts directly with the Docker CLI and engine over standard SSH, keeping your servers clean and lightweight.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">📊</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Live Container Log Streaming</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Stream live stdout/stderr logs from any running container with regex filtering, line wrapping, auto-scroll locking, and copyable stack traces.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">💻</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Interactive Container Exec Shells</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Click "Spawn Shell" on any active container to open an interactive pseudo-terminal (<code>docker exec -it &lt;id&gt; /bin/sh</code>) directly inside the container namespace without leaving the application window.
            </p>
          </div>
        </div>
      </div>
    </section>
`;

if (dockerContent.includes('</main>') && !dockerContent.includes('Agentless Docker Management: How It Works')) {
  dockerContent = dockerContent.replace('</main>', `${dockerEnrichment}\n  </main>`);
  fs.writeFileSync(dockerFile, dockerContent, 'utf8');
  console.log('✅ Enriched docker-web-gui.html');
}

// 4. ENRICH putty-alternative.html
const puttyFile = path.join(ROOT_DIR, 'putty-alternative.html');
let puttyContent = fs.readFileSync(puttyFile, 'utf8');

const puttyEnrichment = `
    <!-- Deep PuTTY Evolution Breakdown -->
    <section class="section" style="padding-top: 40px;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">25 Years of Evolution: Why Windows Users Are Replacing PuTTY</h2>
          <p class="section-desc">PuTTY was built for Windows 98. SSH Desktop is engineered for modern Windows 11 and multi-cloud engineering.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">📑</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Tabs &amp; Split Panes vs 20 Taskbar Icons</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              Connecting to 10 servers in PuTTY opens 10 separate Win32 taskbar windows. SSH Desktop provides a sleek, GPU-accelerated multi-tab interface with horizontal and vertical split panes in one organized workspace.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">📁</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">Integrated SFTP vs Separate PSFTP/WinSCP</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              PuTTY only handles terminal text; transferring a file requires launching separate tools like PSFTP or WinSCP. SSH Desktop embeds a dual-pane drag-and-drop SFTP file browser right alongside your terminal.
            </p>
          </div>

          <div class="card" style="background: #ffffff; border: 1px solid var(--border);">
            <div style="font-size: 1.5rem; margin-bottom: 12px;">🔑</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">1-Click PuTTY Registry Import</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
              SSH Desktop automatically detects all saved PuTTY sessions in <code>HKCU\\Software\\SimonTatham\\PuTTY\\Sessions</code> and imports them instantly, preserving hostnames, ports, and key associations.
            </p>
          </div>
        </div>
      </div>
    </section>
`;

if (puttyContent.includes('</main>') && !puttyContent.includes('25 Years of Evolution')) {
  puttyContent = puttyContent.replace('</main>', `${puttyEnrichment}\n  </main>`);
  fs.writeFileSync(puttyFile, puttyContent, 'utf8');
  console.log('✅ Enriched putty-alternative.html');
}

console.log('All additional pages enriched successfully!');
