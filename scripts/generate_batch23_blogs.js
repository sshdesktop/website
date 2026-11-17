const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const articles = [
  {
    filename: 'how-to-automate-server-patching-ansible-ssh-guide.html',
    title: 'How to Automate Linux Server Patching with Ansible Over SSH: 2026',
    metaTitle: 'How to Automate Linux Server Patching with Ansible Over SSH: 2026',
    metaDesc: 'Automate security patching across hundreds of Linux servers using Ansible over SSH. Learn rolling update playbooks, reboot verification, and multi-node execution.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-automate-server-patching-ansible-ssh-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Automation & DevOps',
    readTime: '11 min read',
    h1: 'How to Automate Linux Server Patching with Ansible Over SSH: 2026 Guide',
    faqs: [
      {
        q: 'Why is Ansible over SSH preferred for server patching over agent-based tools?',
        a: 'Ansible is completely agentless. It requires no daemon or background agent installed on target machines—it connects directly via standard OpenSSH using cryptographic SSH keys, executes native package modules (apt, dnf), and cleans up temporary scripts instantly.'
      },
      {
        q: 'How does Ansible handle server reboots during an update playbook?',
        a: 'The ansible.builtin.reboot module checks if /var/run/reboot-required exists. If so, it initiates a reboot, monitors the SSH port until the node responds again, and resumes subsequent playbook tasks seamlessly.'
      },
      {
        q: 'How do I prevent all servers from rebooting at the same time in Ansible?',
        a: 'Use the serial directive in your playbook (e.g., serial: 20% or serial: 1). This enforces rolling updates: Ansible patches and verifies one batch of servers before moving to the next, keeping your application cluster online with zero downtime.'
      }
    ],
    content: `
      <p class="blog-lead">
        Manually logging into 20, 50, or 200 cloud servers to run <code>apt upgrade</code> is error-prone, exhausting, and leads to severe configuration drift. <strong>Ansible</strong> leverages your existing SSH infrastructure to automate OS package upgrades, kernel reboots, and post-update smoke tests in parallel. Learn how to write production-grade patching playbooks in 2026.
      </p>

      <h2>The Advantage of Agentless SSH Orchestration</h2>
      <p>
        Unlike Puppet or Chef which require long-running client daemons, Ansible operates over standard OpenSSH. It pushes ephemeral Python modules to target machines, executes them via <code>sudo</code>, and returns structured JSON outputs without introducing new network attack surfaces.
      </p>

      <h2>Step 1: Define Your SSH Inventory File</h2>
      <p>Create an inventory file at <code>/etc/ansible/hosts</code> (or <code>inventory.ini</code>):</p>
      <pre><code>[webservers]
web-01 ansible_host=192.168.1.10
web-02 ansible_host=192.168.1.11
web-03 ansible_host=192.168.1.12

[databases]
db-01 ansible_host=192.168.1.20
db-02 ansible_host=192.168.1.21

[all:vars]
ansible_user=deployer
ansible_ssh_private_key_file=~/.ssh/id_ed25519_ansible
ansible_python_interpreter=/usr/bin/python3</code></pre>

      <h2>Step 2: Create the Rolling Patching Playbook</h2>
      <p>Create <code>patch-servers.yml</code>:</p>
      <pre><code>---
- name: Automated Rolling Linux Server Patching
  hosts: all
  become: true
  serial: 1 # Patch one node at a time to prevent downtime
  tasks:
    - name: Update APT package cache
      ansible.builtin.apt:
        update_cache: yes
        cache_valid_time: 3600
      when: ansible_os_family == "Debian"

    - name: Apply security upgrades on Ubuntu/Debian
      ansible.builtin.apt:
        upgrade: dist
        autoremove: yes
        autoclean: yes
      when: ansible_os_family == "Debian"

    - name: Check if server reboot is required
      ansible.builtin.stat:
        path: /var/run/reboot-required
      register: reboot_required_file

    - name: Reboot server if kernel update was applied
      ansible.builtin.reboot:
        msg: "Rebooting machine due to kernel security updates"
        connect_timeout: 10
        reboot_timeout: 300
        pre_reboot_delay: 5
        post_reboot_delay: 15
        test_command: uptime
      when: reboot_required_file.stat.exists

    - name: Verify application service health after patch
      ansible.builtin.uri:
        url: "http://127.0.0.1/health"
        status_code: 200
      register: result
      until: result.status == 200
      retries: 5
      delay: 5</code></pre>

      <h2>Step 3: Execute the Playbook Across Your Fleet</h2>
      <p>Test in check/dry-run mode first:</p>
      <pre><code>ansible-playbook -i inventory.ini patch-servers.yml --check</code></pre>
      <p>Run the live rolling update:</p>
      <pre><code>ansible-playbook -i inventory.ini patch-servers.yml</code></pre>

      <h2>Orchestrate Multi-Server Fleets Visually with SSH Desktop</h2>
      <p>
        Executing automation scripts and verifying multi-server state across dozens of cloud instances is simple with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Multi-Server Automation:</strong> Broadcast commands and run playbooks across entire server groups with real-time aggregated streaming.</li>
        <li><strong>Visual Package Manager:</strong> View upgradable security packages and pending reboot flags per server at a glance.</li>
        <li><strong>Key Vault Integration:</strong> Seamlessly inject Ed25519 deployer keys without exposing plaintext credentials.</li>
      </ul>
      <p>
        Explore our <a href="../multi-server-automation.html">Multi-Server Automation</a> and <a href="../linux-package-manager.html">Linux Package Manager</a>.
      </p>
    `
  },
  {
    filename: 'how-to-setup-ssh-certificates-ca-guide.html',
    title: 'How to Set Up SSH Certificates for Scalable Fleet Access (2026 Guide)',
    metaTitle: 'How to Set Up SSH Certificates for Scalable Fleet Access (2026 Guide)',
    metaDesc: 'Replace authorized_keys file sprawl with an SSH Certificate Authority (CA). Learn short-lived signed certificates, principals, and visual key vault management.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-setup-ssh-certificates-ca-guide.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Enterprise Security',
    readTime: '11 min read',
    h1: 'How to Set Up SSH Certificates for Scalable Fleet Access: 2026 Guide',
    faqs: [
      {
        q: 'Why are SSH Certificates superior to ~/.ssh/authorized_keys files?',
        a: 'Managing ~/.ssh/authorized_keys across 500 servers requires updating every single server whenever an employee joins or leaves. With SSH Certificates, servers only trust a single Certificate Authority public key. When an employee authenticates, they present a short-lived cryptographically signed certificate (e.g., valid for 8 hours), completely eliminating key rotation on individual servers.'
      },
      {
        q: 'What is an SSH principal?',
        a: 'An SSH principal is a role or username embedded inside the certificate (e.g., ubuntu, root, dev-admin). When a user connects to a server, the server validates whether the requested login account matches one of the authorized principals signed by the CA.'
      },
      {
        q: 'Can SSH certificates automatically expire?',
        a: 'Yes. Every SSH certificate includes a validity window (e.g., -V -5m:+8h). Once the window closes, OpenSSH automatically rejects the certificate, rendering stolen keys useless without requiring server-side key revoking.'
      }
    ],
    content: `
      <p class="blog-lead">
        In growing engineering teams, managing <code>~/.ssh/authorized_keys</code> files across dozens of cloud servers quickly devolves into an unmaintainable security nightmare. Revoking access for a departed engineer requires finding and deleting their public key on every single instance. <strong>OpenSSH Certificates</strong> solve this by introducing an SSH Certificate Authority (CA). Learn how to configure modern SSH certificate infrastructure in 2026.
      </p>

      <h2>The Architecture of SSH Certificate Authentication</h2>
      <p>
        Instead of copying individual developer public keys to every server, each server is configured to trust a single <strong>CA Public Key</strong> (<code>/etc/ssh/ssh_user_ca.pub</code>).
      </p>
      <p>
        When an engineer requests access, your internal identity provider or CA issues a signed certificate (<code>id_ed25519-cert.pub</code>) valid for a limited window (e.g., 8 hours). The target server verifies the cryptographic signature locally without needing internet access or LDAP lookups.
      </p>

      <h2>Step 1: Generate the SSH Certificate Authority (CA) Keypair</h2>
      <p>On a dedicated, secure machine (or offline hardware key), generate the CA key:</p>
      <pre><code># Generate CA keypair with high-security pass-phrase
ssh-keygen -t ed25519 -C "SSH-Fleet-Certificate-Authority" -f ~/.ssh/ssh_user_ca</code></pre>

      <h2>Step 2: Configure Remote Servers to Trust the CA</h2>
      <p>1. Copy the public key (<code>ssh_user_ca.pub</code>) to every remote server at <code>/etc/ssh/ssh_user_ca.pub</code>.</p>
      <p>2. Edit <code>/etc/ssh/sshd_config</code> on the target servers:</p>
      <pre><code># Trust certificates signed by this CA
TrustedUserCAKeys /etc/ssh/ssh_user_ca.pub</code></pre>
      <p>3. Restart the OpenSSH daemon:</p>
      <pre><code>sudo systemctl restart ssh || sudo systemctl restart sshd</code></pre>

      <h2>Step 3: Issue a Signed Certificate for an Engineer</h2>
      <p>
        Sign a developer's public key (<code>id_ed25519.pub</code>) granting specific principals and an 8-hour expiration window:
      </p>
      <pre><code>ssh-keygen -s ~/.ssh/ssh_user_ca \\
  -I "john_doe_session_01" \\
  -n "ubuntu,debian,devops" \\
  -V -5m:+8h \\
  ~/.ssh/id_ed25519.pub</code></pre>
      <p>This outputs <code>~/.ssh/id_ed25519-cert.pub</code>.</p>

      <h2>Step 4: Inspect Certificate Details</h2>
      <p>Verify certificate validity, serial number, and allowed principals:</p>
      <pre><code>ssh-keygen -L -f ~/.ssh/id_ed25519-cert.pub</code></pre>
      <pre><code>Type: ssh-ed25519-cert-v01@openssh.com user certificate
Key ID: "john_doe_session_01"
Principals: 
    ubuntu
    debian
    devops
Valid: from 2026-11-16T08:00:00 to 2026-11-16T16:00:00</code></pre>

      <h2>Step 5: Connect Without Any authorized_keys on the Server</h2>
      <p>Connect from the client machine:</p>
      <pre><code>ssh -i ~/.ssh/id_ed25519 -i ~/.ssh/id_ed25519-cert.pub ubuntu@your-server-ip</code></pre>
      <p>
        The server validates the CA signature and permits login immediately—even if <code>~/.ssh/authorized_keys</code> is completely empty!
      </p>

      <h2>Manage Keys &amp; Certificates Visually with SSH Desktop</h2>
      <p>
        Managing certificate validity windows and hardware-backed keys across distributed teams is seamless with <strong>SSH Desktop</strong>:
      </p>
      <ul>
        <li><strong>Certificate Inspector:</strong> Inspect certificate expiry, principals, and signing CA fingerprints in a native GUI.</li>
        <li><strong>Encrypted Vault:</strong> Store ED25519 keys with hardware-backed encryption (DPAPI / Keychain).</li>
        <li><strong>Fleet-Wide Deployer:</strong> Push CA trust configs across hundreds of remote servers using Multi-Server Automation.</li>
      </ul>
      <p>
        Check out our <a href="../security.html">Security Architecture</a> and <a href="../multi-server-automation.html">Multi-Server Automation</a>.
      </p>
    `
  },
  {
    filename: 'how-to-fix-kernel-panic-unable-to-mount-root-fs.html',
    title: 'How to Fix Kernel Panic Unable to Mount Root FS in Linux (2026)',
    metaTitle: 'How to Fix Kernel Panic Unable to Mount Root FS in Linux (2026)',
    metaDesc: 'Fix Kernel panic - not syncing: VFS: Unable to mount root fs on Ubuntu, Debian, and CentOS. Learn initramfs regeneration, GRUB recovery, and UUID repairs.',
    canonicalUrl: 'https://sshdesktop.com/blog/how-to-fix-kernel-panic-unable-to-mount-root-fs.html',
    publishDate: '2026-11-16',
    modifiedDate: '2026-11-16',
    category: 'Troubleshooting & Recovery',
    readTime: '11 min read',
    h1: 'How to Fix "Kernel panic - not syncing: VFS: Unable to mount root fs" (2026 Guide)',
    faqs: [
      {
        q: 'What does "Kernel panic - not syncing: VFS: Unable to mount root fs" mean?',
        a: 'This fatal error occurs during system boot when the Linux kernel initializes but cannot find, mount, or read the root filesystem partition (/), typically because the initial ramdisk (initramfs) is corrupted, the root disk UUID in GRUB is incorrect, or filesystem drivers are missing.'
      },
      {
        q: 'How do I bypass the kernel panic and boot into the server?',
        a: 'Reboot the machine and access the GRUB menu (press Shift or Esc). Select "Advanced options for Ubuntu", and choose an older, previously working kernel version (e.g., 6.8.0-40 instead of 6.8.0-45). Older installed kernels remain fully functional and allow you to repair the broken initramfs.'
      },
      {
        q: 'How do I regenerate a corrupted initramfs once logged in?',
        a: 'Run: sudo update-initramfs -u -k all && sudo update-grub. This re-packages the ramdisk image with all current storage drivers and updates GRUB boot configurations.'
      }
    ],
    content: `
      <p class="blog-lead">
        Seeing <code>Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)</code> on your VPS cloud console or physical terminal stops your heart. The operating system halts completely during early boot before systemd or SSH daemons can spawn. Fortunately, this error rarely means data loss—it usually stems from an interrupted kernel upgrade or corrupted <code>initramfs</code> ramdisk. Learn the step-by-step recovery procedure in 2026.
      </p>

      <h2>Why the Kernel Cannot Mount Root</h2>
      <p>
        The Linux kernel requires essential storage controller and filesystem drivers (ext4, XFS, NVMe, LVM) to read the root drive. Because these drivers are compiled as modular objects, the bootloader loads an initial ramdisk (<code>initramfs</code>) containing these drivers into RAM first.
      </p>
      <p>If a power cut or full disk interrupts an <code>apt upgrade</code>, the <code>initramfs</code> file is saved partially, leaving the kernel unable to mount the root drive.
      </p>

      <h2>Step 1: Boot into an Older Kernel via GRUB</h2>
      <p>
        Linux distributions intentionally preserve 1 to 2 older kernel versions as fallbacks:
      </p>
      <ol>
        <li>Access your VPS VNC emergency console.</li>
        <li>Reboot the server and repeatedly press <kbd>Shift</kbd> (BIOS) or <kbd>Esc</kbd> (UEFI) to bring up the GRUB boot menu.</li>
        <li>Select <strong>Advanced options for Ubuntu</strong> (or Debian).</li>
        <li>Select the previous kernel version (e.g., <code>Linux 6.8.0-40-generic</code>) and press <kbd>Enter</kbd>.</li>
      </ol>
      <p>The system will boot up normally into your previous kernel.</p>

      <h2>Step 2: Check Free Disk Space</h2>
      <p>A full <code>/boot</code> partition is the number one cause of broken ramdisks:</p>
      <pre><code>df -h /boot</code></pre>
      <p>If <code>/boot</code> is 100% full, remove old unused kernels:</p>
      <pre><code>sudo apt autoremove --purge -y</code></pre>

      <h2>Step 3: Regenerate the Broken initramfs</h2>
      <p>
        Once booted, rebuild all ramdisk images with current storage and filesystem drivers:
      </p>
      <pre><code># Rebuild initramfs for all installed kernel versions
sudo update-initramfs -u -k all

# Update GRUB bootloader configuration
sudo update-grub</code></pre>

      <h2>Step 4: Verify Root Filesystem UUID</h2>
      <p>
        Verify that the UUID referenced in <code>/etc/fstab</code> matches the actual disk partition:
      </p>
      <pre><code># Check actual disk partition UUIDs
sudo blkid

# Check configured mount UUIDs
cat /etc/fstab | grep " / "</code></pre>
      <p>If the UUIDs differ, update <code>/etc/fstab</code> and re-run <code>sudo update-grub</code>.</p>

      <h2>Step 5: Test Normal Reboot</h2>
      <p>Reboot into the latest kernel:</p>
      <pre><code>sudo reboot</code></pre>
      <p>The server will now mount the root filesystem cleanly and boot into the latest kernel without errors.</p>

      <h2>Prepare for Disasters with SSH Desktop</h2>
      <p>
        When critical cloud nodes fail, having recovery tools and automated backup pipelines ready is essential. <strong>SSH Desktop</strong> provides:
      </p>
      <ul>
        <li><strong>Automated Offsite Backups:</strong> Stream point-in-time database and configuration archives over SSH automatically.</li>
        <li><strong>Kernel &amp; Package Telemetry:</strong> Proactively identify when <code>/boot</code> is running out of space before updates crash.</li>
        <li><strong>Multi-Server Health Dashboard:</strong> Monitor uptime and ping latency across your entire fleet in real time.</li>
      </ul>
      <p>
        Discover our <a href="../backup-disaster-recovery.html">Backup &amp; Disaster Recovery</a> and <a href="../system-monitor.html">System Monitor</a>.
      </p>
    `
  }
];

function generateHtml(article) {
  const faqSchema = article.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }));

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${article.canonicalUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": article.canonicalUrl,
          "url": article.canonicalUrl,
          "name": article.metaTitle,
          "description": article.metaDesc
        },
        "headline": article.h1,
        "description": article.metaDesc,
        "inLanguage": "en-US",
        "datePublished": `${article.publishDate}T08:00:00+00:00`,
        "dateModified": `${article.modifiedDate}T08:00:00+00:00`,
        "mainEntityOfPage": article.canonicalUrl,
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sshdesktop.com/assets/images/favicon.svg"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://sshdesktop.com/assets/images/og-image.png",
          "width": 1200,
          "height": 630
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${article.canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sshdesktop.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://sshdesktop.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": article.canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${article.canonicalUrl}#faq`,
        "mainEntity": faqSchema
      }
    ]
  }, null, 2);

  const faqsHtml = article.faqs.map(faq => `
        <div class="faq-item">
          <h3 class="faq-question">${faq.q}</h3>
          <p class="faq-answer">${faq.a}</p>
        </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.metaTitle}</title>
  <meta name="description" content="${article.metaDesc}">
  <link rel="canonical" href="${article.canonicalUrl}">
  
  <!-- OpenGraph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${article.metaTitle}">
  <meta property="og:description" content="${article.metaDesc}">
  <meta property="og:url" content="${article.canonicalUrl}">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="article:published_time" content="${article.publishDate}T08:00:00+00:00">
  <meta property="article:modified_time" content="${article.modifiedDate}T08:00:00+00:00">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${article.metaTitle}">
  <meta name="twitter:description" content="${article.metaDesc}">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">

  <!-- CSS -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
${schemaJson}
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased">
  <!-- Navigation Header -->
  <header class="blog-nav-header">
    <div class="blog-nav-container">
      <a href="../index.html" class="blog-nav-logo">
        <img src="../assets/images/favicon.svg" alt="SSH Desktop Logo" width="32" height="32" class="blog-logo-img">
        <span>SSH Desktop</span>
      </a>
      <nav class="blog-nav-links">
        <a href="../features.html">Features</a>
        <a href="../docs.html">Docs</a>
        <a href="index.html" class="active">Blog</a>
        <a href="../download.html" class="blog-btn-cta">Download App</a>
      </nav>
    </div>
  </header>

  <!-- Main Article Body -->
  <main class="blog-article-wrapper">
    <!-- Breadcrumb -->
    <nav class="blog-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="../index.html">Home</a></li>
        <li><a href="index.html">Blog</a></li>
        <li aria-current="page">${article.title}</li>
      </ol>
    </nav>

    <article class="blog-post-content">
      <header class="blog-post-header">
        <div class="blog-post-meta">
          <span class="blog-post-tag">${article.category}</span>
          <time datetime="${article.publishDate}">${article.publishDate}</time>
          <span>&bull;</span>
          <span>${article.readTime}</span>
        </div>
        <h1 class="blog-post-h1">${article.h1}</h1>
      </header>

      <div class="blog-post-body">
        ${article.content}

        <h2>Frequently Asked Questions</h2>
        <div class="faq-accordion">
          ${faqsHtml}
        </div>

        <!-- Conversion Card -->
        <div class="blog-cta-box">
          <h3>Manage Linux Servers with Visual Simplicity</h3>
          <p>
            Tired of juggling terminal windows and typing repetitive commands? SSH Desktop combines an ultra-fast terminal with native SFTP, background tunnels, visual reverse proxy management, and real-time system monitoring.
          </p>
          <a href="../download.html" class="blog-cta-button">Download SSH Desktop Free &rarr;</a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="blog-footer">
    <div class="blog-footer-container">
      <p>&copy; 2026 SSH Desktop. All rights reserved. Free, open, and privacy-focused Linux management.</p>
      <div class="blog-footer-links">
        <a href="../privacy.html">Privacy Policy</a>
        <a href="../terms.html">Terms of Service</a>
        <a href="../contact.html">Contact Us</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

articles.forEach(article => {
  const filePath = path.join(BLOG_DIR, article.filename);
  const html = generateHtml(article);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Created: ${filePath} (${html.length} bytes)`);
});
