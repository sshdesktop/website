/**
 * Script to generate high-ranking SEO cornerstone blog articles for SSH Desktop
 * 1. how-to-fix-ssh-permission-denied-publickey-error.html
 * 2. how-to-connect-to-remote-postgres-over-ssh-tunnel.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

// =========================================================================
// ARTICLE 1: HOW TO FIX SSH PERMISSION DENIED (PUBLICKEY)
// =========================================================================
const article1Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLYDWV9PH4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BLYDWV9PH4');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Primary SEO Meta Tags -->
  <title>How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes &amp; Solutions (2026 Guide)</title>
  <meta name="title" content="How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes &amp; Solutions (2026 Guide)">
  <meta name="description" content="Complete troubleshooting guide for SSH 'Permission denied (publickey)'. Fix file permissions (chmod/icacls), sshd_config errors, key format mismatches, and OpenSSH agent issues on Linux, macOS, and Windows 11.">
  <meta name="keywords" content="ssh permission denied publickey, permission denied publickey gssapi-keyex gssapi-with-mic, ssh permission denied publickey windows 11, fix ssh public key authentication error, ssh bad permissions chmod 600, authorized_keys permissions sshd">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes &amp; Solutions">
  <meta property="og:description" content="Step-by-step troubleshooting: fix SSH permission denied (publickey) errors on Linux, macOS, and Windows 11. Learn chmod, icacls, and sshd_config fixes.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Troubleshooting">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html">
  <meta name="twitter:title" content="How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes &amp; Solutions">
  <meta name="twitter:description" content="Troubleshoot SSH permission denied (publickey) error with 5 practical fixes across Linux, macOS, and Windows.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#ffffff">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <style>
    .article-wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .article-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 24px;
    }
    .article-title {
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      font-size: 0.9rem;
      color: var(--text-dim);
    }
    .article-content {
      font-size: 1.1rem;
      line-height: 1.75;
      color: #1e293b;
    }
    .article-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 16px;
      color: var(--text-main);
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .article-content h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 28px;
      margin-bottom: 12px;
      color: var(--text-main);
    }
    .article-content p {
      margin-bottom: 20px;
    }
    .article-content ul, .article-content ol {
      margin-bottom: 24px;
      padding-left: 28px;
    }
    .article-content li {
      margin-bottom: 8px;
    }
    .code-block {
      background: #0f172a;
      color: #f8fafc;
      padding: 18px 22px;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.92rem;
      overflow-x: auto;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .code-block code {
      color: inherit;
      background: transparent;
      padding: 0;
    }
    .callout-box {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 16px 20px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.98rem;
    }
    .callout-box.tip {
      background: #eff6ff;
      border-left-color: #2563eb;
    }
    .callout-box.warn {
      background: #fffbeb;
      border-left-color: #f59e0b;
    }
    .comparison-table-wrap {
      overflow-x: auto;
      margin: 28px 0;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      text-align: left;
    }
    .comparison-table th, .comparison-table td {
      padding: 12px 16px;
      border: 1px solid var(--border);
    }
    .comparison-table th {
      background: #f8fafc;
      font-weight: 700;
      color: var(--text-main);
    }
    .comparison-table tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .article-cta {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
      border: 1px solid #bae6fd;
      border-radius: var(--radius-lg);
      padding: 32px;
      text-align: center;
      margin-top: 50px;
    }
    .breadcrumb-nav {
      padding: 14px 0 0;
      font-size: 0.88rem;
    }
    .breadcrumb-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      color: var(--text-dim);
    }
  </style>

  <!-- Structured Data: BlogPosting & FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
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
            "name": "Fix SSH Permission Denied (publickey)",
            "item": "https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html#article",
        "headline": "How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes & Solutions (2026 Guide)",
        "description": "Comprehensive technical guide for fixing the common SSH 'Permission denied (publickey)' error across Linux, macOS, and Windows OpenSSH environments.",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": "https://sshdesktop.com/assets/images/logo.svg"
        },
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-fix-ssh-permission-denied-publickey-error.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does SSH say 'Permission denied (publickey)'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This error means the remote SSH server rejected all cryptographic authentication keys presented by your client. Common causes include file permissions on ~/.ssh or authorized_keys that are too open, the public key not existing in the remote authorized_keys file, incorrect permissions on your local private key file, or sshd disabling password fallback."
            }
          },
          {
            "@type": "Question",
            "name": "What permissions should ~/.ssh and authorized_keys have on Linux?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On Linux, your home directory should be 755 or 700, ~/.ssh should have permissions 700 (drwx------), and ~/.ssh/authorized_keys must have permissions 600 (-rw-------). If permissions are broader (such as 777 or group-writable), OpenSSH StrictModes will intentionally reject your login."
            }
          },
          {
            "@type": "Question",
            "name": "How do I fix bad private key permissions on Windows 11?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On Windows 11 OpenSSH, run PowerShell as Administrator and reset the Access Control List: 'icacls id_ed25519 /inheritance:r' to remove inherited permissions, followed by 'icacls id_ed25519 /grant:r \"$($env:USERNAME):(R)\"' to give only your user account read permissions."
            }
          },
          {
            "@type": "Question",
            "name": "Why does OpenSSH 8.8+ reject my existing RSA key?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OpenSSH 8.8 and newer versions disabled the legacy 'ssh-rsa' signature algorithm by default due to SHA-1 collision vulnerabilities. To fix this, generate a modern Ed25519 key using 'ssh-keygen -t ed25519', or temporarily allow legacy RSA in ~/.ssh/config by adding 'PubkeyAcceptedKeyTypes +ssh-rsa'."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38" decoding="async">
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="../features.html">Features</a></li>
          <li><a href="../docs.html">Docs</a></li>
          <li><a href="./" style="color: var(--accent-cyan); font-weight: 700;">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Breadcrumb -->
    <div class="container breadcrumb-nav">
      <ol class="breadcrumb-list">
        <li><a href="../">Home</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li><a href="./">Blog</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li aria-current="page">Fix SSH Permission Denied (publickey)</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Troubleshooting &amp; Security</span>
        <h1 class="article-title">How to Fix 'Permission Denied (publickey)' in SSH: 5 Causes &amp; Solutions (2026 Guide)</h1>
        <div class="article-meta">
          <span>Published: November 2026</span>
          <span>&bull;</span>
          <span>11 min read</span>
          <span>&bull;</span>
          <span>By SSH Desktop Engineering Team</span>
        </div>
      </header>

      <div class="article-content">
        <p>
          You open your terminal, type <code>ssh user@your-server-ip</code>, press Enter, and are immediately greeted with this dreaded failure:
        </p>

        <div class="code-block">
          <code>user@your-server-ip: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).</code>
        </div>

        <p>
          Or on newer Linux servers, simply:
        </p>

        <div class="code-block">
          <code>Permission denied (publickey).</code>
        </div>

        <p>
          This is arguably the most common and infuriating error encountered in SSH administration. It happens on Ubuntu, Debian, CentOS, AlmaLinux, Arch, and AWS EC2 instances, and plagues users connecting from Windows 11, macOS, and Linux workstations.
        </p>
        <p>
          In this comprehensive guide, we unpack exactly why this error occurs, how to run verbose diagnostic traces, and how to permanently fix the 5 underlying causes across both client and server machines.
        </p>

        <h2>Step 0: The Golden Diagnostic Command (Verbose Mode)</h2>
        <p>
          Before guessing and modifying random configuration files, force SSH into verbose debugging mode by adding the <code>-vvv</code> flag:
        </p>
        <div class="code-block">
          <code>ssh -vvv user@your-server-ip</code>
        </div>
        <p>
          The output prints a full handshake trace. Scroll down and look for these tell-tale diagnostic patterns:
        </p>
        <ul>
          <li><strong><code>debug1: Offering public key: /Users/name/.ssh/id_ed25519</code> followed by <code>debug1: Authentications that can continue: publickey</code></strong>: Your client sent your public key, but the remote server did not accept it.</li>
          <li><strong><code>debug1: send_pubkey_test: no mutual signature algorithm</code></strong>: The remote OpenSSH server is newer and refused your old RSA key format (SHA-1 deprecation).</li>
          <li><strong><code>debug1: Skipping ssh-dss key ... not in PubkeyAcceptedKeyTypes</code></strong>: You are using an insecure legacy key format rejected by the client or server.</li>
          <li><strong><code>debug1: Trying private key: ... no such file or directory</code></strong>: Your client is trying default key names that do not exist on your computer.</li>
          <li><strong><code>debug1: Disconnecting: Too many authentication failures</code></strong>: Your SSH agent is offering too many irrelevant keys before reaching the correct one.</li>
        </ul>

        <div class="callout-box tip">
          <strong>Tip for SSH Desktop Users:</strong> In <a href="../">SSH Desktop</a>, the built-in Connection Doctor automatically captures this verbose output in real time and highlights the exact failing handshake stage with a single click, completely removing the guesswork.
        </div>

        <h2>Cause 1: Incorrect Permissions on Client Private Key File</h2>
        <p>
          OpenSSH enforces strict security standards on the client machine. If your private key (e.g., <code>id_ed25519</code> or <code>id_rsa</code>) has read or write permissions granted to any other user or group, OpenSSH will refuse to read it and output:
        </p>
        <div class="code-block">
          <code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @<br>
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>
Permissions 0644 for '/home/user/.ssh/id_ed25519' are too open.<br>
It is required that your private key files are NOT accessible by others.<br>
This private key will be ignored.<br>
Load key "/home/user/.ssh/id_ed25519": bad permissions<br>
Permission denied (publickey).</code>
        </div>

        <h3>Fix on Linux &amp; macOS:</h3>
        <p>
          Reset permissions so that only your user account has read/write privileges:
        </p>
        <div class="code-block">
          <code>chmod 700 ~/.ssh<br>
chmod 600 ~/.ssh/id_ed25519<br>
chmod 600 ~/.ssh/id_rsa # if using RSA</code>
        </div>

        <h3>Fix on Windows 11 / Windows 10 (PowerShell):</h3>
        <p>
          Windows uses NTFS Access Control Lists (ACLs) rather than POSIX permissions. If Windows inherited permissions from parent folders, OpenSSH will reject the key.
        </p>
        <p>
          Open <strong>PowerShell as Administrator</strong> and run the following commands on your key file:
        </p>
        <div class="code-block">
          <code># 1. Navigate to your user's SSH folder<br>
cd $env:USERPROFILE\.ssh<br><br>
# 2. Disable inheritance and remove inherited rules<br>
icacls id_ed25519 /inheritance:r<br><br>
# 3. Grant full read access exclusively to your current Windows username<br>
icacls id_ed25519 /grant:r "$($env:USERNAME):(R)"</code>
        </div>
        <p>
          Now test connecting again: <code>ssh user@your-server-ip</code>.
        </p>

        <h2>Cause 2: Incorrect Server-Side Permissions (~/.ssh &amp; authorized_keys)</h2>
        <p>
          By default, OpenSSH server enables <code>StrictModes yes</code>. This directive requires that the remote user's home directory, <code>.ssh</code> directory, and <code>authorized_keys</code> file are not writable by any other user or group on the server. If any parent directory is group-writable, OpenSSH silently ignores the public key!
        </p>

        <h3>Required Linux Server Permissions:</h3>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Directory / File</th>
                <th>Required Octal</th>
                <th>Permissions String</th>
                <th>Fix Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Home folder</strong> (<code>/home/username</code>)</td>
                <td><code>755</code> or <code>700</code></td>
                <td><code>drwxr-xr-x</code></td>
                <td><code>chmod 755 /home/username</code></td>
              </tr>
              <tr>
                <td><strong>SSH folder</strong> (<code>~/.ssh</code>)</td>
                <td><code>700</code></td>
                <td><code>drwx------</code></td>
                <td><code>chmod 700 ~/.ssh</code></td>
              </tr>
              <tr>
                <td><strong>Authorized keys</strong> (<code>~/.ssh/authorized_keys</code>)</td>
                <td><code>600</code></td>
                <td><code>-rw-------</code></td>
                <td><code>chmod 600 ~/.ssh/authorized_keys</code></td>
              </tr>
              <tr>
                <td><strong>Ownership</strong></td>
                <td>User's UID:GID</td>
                <td><code>username:username</code></td>
                <td><code>chown -R $USER:$USER ~/.ssh</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout-box warn">
          <strong>Crucial Trap:</strong> A common mistake is running <code>chmod 777 ~/.ssh</code> in an attempt to "open up access". This has the exact opposite effect! OpenSSH considers permissions 777 a critical security breach and will immediately refuse to authenticate.
        </div>

        <h2>Cause 3: The Public Key Is Missing or Malformed in authorized_keys</h2>
        <p>
          Remember the core asymmetric cryptography rule: your <strong>private key</strong> stays on your local laptop, while your <strong>public key</strong> (ending in <code>.pub</code>) must be appended to the server's <code>~/.ssh/authorized_keys</code> file.
        </p>

        <h3>Common Pitfalls When Adding the Public Key:</h3>
        <ol>
          <li><strong>Pasting the private key instead of public:</strong> Never paste <code>id_ed25519</code> into <code>authorized_keys</code>. Only paste the contents of <code>id_ed25519.pub</code>.</li>
          <li><strong>Accidental line breaks:</strong> An SSH public key must be on <strong>exactly one single line</strong>. If your clipboard broke the key across two lines, it will fail silently.</li>
          <li><strong>Windows CRLF carriage returns:</strong> Pasting from Notepad can inject Windows <code>\r\n</code> endings. Clean it up on Linux using <code>sed -i 's/\r$//' ~/.ssh/authorized_keys</code>.</li>
        </ol>

        <h3>How to Properly Append Your Key:</h3>
        <p>
          From your local terminal, use <code>ssh-copy-id</code> (available on Linux, macOS, and Git Bash):
        </p>
        <div class="code-block">
          <code>ssh-copy-id -i ~/.ssh/id_ed25519.pub user@your-server-ip</code>
        </div>
        <p>
          Or from Windows 11 PowerShell without <code>ssh-copy-id</code>:
        </p>
        <div class="code-block">
          <code>type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh user@your-server-ip "cat >> ~/.ssh/authorized_keys"</code>
        </div>

        <h2>Cause 4: OpenSSH 8.8+ Deprecated Legacy RSA (SHA-1) Keys</h2>
        <p>
          Did your connection suddenly start failing after upgrading your server to Ubuntu 22.04, Ubuntu 24.04, Debian 12, or Fedora?
        </p>
        <p>
          Starting in OpenSSH 8.8, the legacy <code>ssh-rsa</code> signature algorithm was disabled by default because SHA-1 hash collisions are computationally viable. If you generated an RSA key years ago with standard <code>ssh-keygen -t rsa</code>, modern SSH servers will reject it even if the key is valid and present in <code>authorized_keys</code>.
        </p>

        <h3>The Recommended Long-Term Fix: Switch to Ed25519</h3>
        <p>
          Generate a high-security Ed25519 elliptical curve key pair. It is faster, shorter, and far more secure than legacy RSA:
        </p>
        <div class="code-block">
          <code>ssh-keygen -t ed25519 -C "your_email@example.com"</code>
        </div>

        <h3>Temporary Workaround (If You Must Keep Your Old RSA Key):</h3>
        <p>
          You can tell your local OpenSSH client to accept legacy RSA algorithms by editing your local <code>~/.ssh/config</code> file:
        </p>
        <div class="code-block">
          <code>Host your-server-ip<br>
    HostName your-server-ip<br>
    User user<br>
    PubkeyAcceptedKeyTypes +ssh-rsa<br>
    HostKeyAlgorithms +ssh-rsa</code>
        </div>

        <h2>Cause 5: Too Many Authentication Failures (Agent Key Overload)</h2>
        <p>
          If you work with GitHub, GitLab, AWS, and multiple clients, your local SSH agent might hold 5, 10, or more loaded private keys.
        </p>
        <p>
          By default, Linux SSH servers have <code>MaxAuthTries 6</code> in <code>/etc/ssh/sshd_config</code>. When you initiate a connection, your client will automatically offer every key stored in <code>ssh-agent</code> one by one.
        </p>
        <p>
          If your server disconnects you after trying 6 irrelevant keys before reaching the correct key for that specific server, the server will terminate the session:
        </p>
        <div class="code-block">
          <code>Received disconnect from your-server-ip port 22:2: Too many authentication failures<br>
Disconnected from your-server-ip port 22</code>
        </div>

        <h3>Solution: Force "IdentitiesOnly"</h3>
        <p>
          Tell SSH to offer only the exact identity file you specify on the command line, ignoring loaded agent keys:
        </p>
        <div class="code-block">
          <code>ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes user@your-server-ip</code>
        </div>
        <p>
          Or save this permanently in your local <code>~/.ssh/config</code>:
        </p>
        <div class="code-block">
          <code>Host production-server<br>
    HostName 198.51.100.42<br>
    User ubuntu<br>
    IdentityFile ~/.ssh/id_production_ed25519<br>
    IdentitiesOnly yes</code>
        </div>

        <h2>Cause 6: Server-Side sshd_config Disables Key Authentication</h2>
        <p>
          If all file permissions and keys are correct, inspect the remote SSH daemon configuration on the server:
        </p>
        <div class="code-block">
          <code>sudo nano /etc/ssh/sshd_config</code>
        </div>
        <p>
          Verify the following directives:
        </p>
        <div class="code-block">
          <code>PubkeyAuthentication yes<br>
AuthorizedKeysFile .ssh/authorized_keys .ssh/authorized_keys2<br>
StrictModes yes</code>
        </div>
        <p>
          Also check whether your username is restricted by <code>AllowUsers</code> or <code>DenyUsers</code> directives at the bottom of the file:
        </p>
        <div class="code-block">
          <code># If AllowUsers exists, your username MUST be listed:<br>
AllowUsers ubuntu deployer admin</code>
        </div>
        <p>
          After modifying <code>sshd_config</code>, test syntax and restart the daemon:
        </p>
        <div class="code-block">
          <code>sudo sshd -t<br>
sudo systemctl restart ssh   # On Ubuntu / Debian<br>
sudo systemctl restart sshd  # On CentOS / RHEL / Fedora</code>
        </div>

        <h2>Troubleshooting Checklist: Client vs Server</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Check Location</th>
                <th>What to Verify</th>
                <th>Standard Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Local Machine</strong></td>
                <td>Private key permissions too wide</td>
                <td><code>chmod 600 ~/.ssh/id_*</code> (POSIX) or <code>icacls</code> (Windows)</td>
              </tr>
              <tr>
                <td><strong>Local Machine</strong></td>
                <td>Wrong key offered / too many keys</td>
                <td>Add <code>-o IdentitiesOnly=yes</code> or specify <code>-i keyfile</code></td>
              </tr>
              <tr>
                <td><strong>Remote Server</strong></td>
                <td><code>~/.ssh</code> directory permissions</td>
                <td><code>chmod 700 ~/.ssh</code> and <code>chown -R user:user ~/.ssh</code></td>
              </tr>
              <tr>
                <td><strong>Remote Server</strong></td>
                <td><code>~/.ssh/authorized_keys</code> permissions</td>
                <td><code>chmod 600 ~/.ssh/authorized_keys</code></td>
              </tr>
              <tr>
                <td><strong>Remote Server</strong></td>
                <td>Home directory permissions</td>
                <td><code>chmod 755 /home/user</code> (never 777 or group-writable)</td>
              </tr>
              <tr>
                <td><strong>Remote Server</strong></td>
                <td><code>sshd_config</code> settings</td>
                <td>Ensure <code>PubkeyAuthentication yes</code> is enabled</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Never Struggle with SSH Key Errors Again: Use SSH Desktop</h2>
        <p>
          Managing command-line keys, permissions, ACLs, and verbose connection traces wastes hours of engineering time.
        </p>
        <p>
          <a href="../">SSH Desktop</a> is a modern, 100% free and open-source SSH GUI designed to eliminate these headaches:
        </p>
        <ul>
          <li><strong>Visual Key Manager:</strong> Generate modern Ed25519 keys with 1 click, audit file permissions automatically, and store keys securely in the native OS keychain.</li>
          <li><strong>1-Click Key Deployment:</strong> Inject your public key into any remote server's <code>authorized_keys</code> automatically without opening terminal configuration files.</li>
          <li><strong>Live Handshake Doctor:</strong> Real-time visual connection inspector pinpoints failed authentication stages, permission mismatches, and cipher incompatibilities in plain English.</li>
          <li><strong>Built-in SFTP &amp; Port Forwarding:</strong> Full desktop file manager and database tunnel manager bundled into one seamless native client.</li>
        </ul>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Upgrade Your SSH Experience Today</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Stop debugging cryptic terminal errors. Download SSH Desktop — the free, modern GUI client for Windows 11, macOS, and Linux.
          </p>
          <a href="../download.html" class="btn btn-primary btn-lg">
            Download SSH Desktop Free &rarr;
          </a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom-bar">
        <div class="footer-bottom-left">
          <p>&copy; 2026 SSH Desktop Inc. Licensed under Apache 2.0 / MIT.</p>
        </div>
        <div class="footer-bottom-right">
          <nav class="footer-legal-nav" aria-label="Footer Navigation">
            <a href="../">Home</a>
            <a href="../apps.html">Apps</a>
            <a href="../docs.html">Docs</a>
            <a href="../download.html">Download</a>
            <a href="./">Blog</a>
            <a href="../sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <script src="../assets/js/core.min.js" defer></script>
</body>
</html>
`;

// =========================================================================
// ARTICLE 2: HOW TO CONNECT TO REMOTE POSTGRES OVER SSH TUNNEL
// =========================================================================
const article2Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BLYDWV9PH4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BLYDWV9PH4');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- Primary SEO Meta Tags -->
  <title>How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step 2026 Guide)</title>
  <meta name="title" content="How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step 2026 Guide)">
  <meta name="description" content="Step-by-step tutorial: securely connect to remote PostgreSQL databases over an encrypted SSH tunnel. Learn CLI port forwarding (-L), pgAdmin 4, DBeaver, AWS RDS bastion jump hosts, and visual GUI tools.">
  <meta name="keywords" content="connect postgres over ssh tunnel, ssh tunnel postgresql, dbeaver ssh tunnel postgres, pgadmin 4 ssh tunnel, remote postgresql port forwarding, secure postgres over ssh, aws rds bastion ssh tunnel">
  <meta name="author" content="SSH Desktop Engineering Team">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html">
  <meta property="og:site_name" content="SSH Desktop">
  <meta property="og:title" content="How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step)">
  <meta property="og:description" content="Learn how to connect to remote PostgreSQL over an encrypted SSH tunnel. Covers CLI commands, pgAdmin, DBeaver, and bastion jump hosts.">
  <meta property="og:image" content="https://sshdesktop.com/assets/images/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2026-11-16T12:00:00Z">
  <meta property="article:modified_time" content="2026-11-16T12:00:00Z">
  <meta property="article:section" content="Database & DevOps">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html">
  <meta name="twitter:title" content="How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step)">
  <meta name="twitter:description" content="Learn how to connect to remote PostgreSQL databases over an encrypted SSH tunnel with CLI, pgAdmin, and DBeaver.">
  <meta name="twitter:image" content="https://sshdesktop.com/assets/images/og-image.png">

  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <meta name="theme-color" content="#ffffff">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.min.css">

  <style>
    .article-wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 20px 80px;
    }
    .article-header {
      margin-bottom: 36px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 24px;
    }
    .article-title {
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      font-size: 0.9rem;
      color: var(--text-dim);
    }
    .article-content {
      font-size: 1.1rem;
      line-height: 1.75;
      color: #1e293b;
    }
    .article-content h2 {
      font-size: 1.65rem;
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 16px;
      color: var(--text-main);
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .article-content h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 28px;
      margin-bottom: 12px;
      color: var(--text-main);
    }
    .article-content p {
      margin-bottom: 20px;
    }
    .article-content ul, .article-content ol {
      margin-bottom: 24px;
      padding-left: 28px;
    }
    .article-content li {
      margin-bottom: 8px;
    }
    .code-block {
      background: #0f172a;
      color: #f8fafc;
      padding: 18px 22px;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.92rem;
      overflow-x: auto;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .code-block code {
      color: inherit;
      background: transparent;
      padding: 0;
    }
    .callout-box {
      background: #f0fdf4;
      border-left: 4px solid #16a34a;
      padding: 16px 20px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.98rem;
    }
    .callout-box.tip {
      background: #eff6ff;
      border-left-color: #2563eb;
    }
    .callout-box.warn {
      background: #fffbeb;
      border-left-color: #f59e0b;
    }
    .comparison-table-wrap {
      overflow-x: auto;
      margin: 28px 0;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      text-align: left;
    }
    .comparison-table th, .comparison-table td {
      padding: 12px 16px;
      border: 1px solid var(--border);
    }
    .comparison-table th {
      background: #f8fafc;
      font-weight: 700;
      color: var(--text-main);
    }
    .comparison-table tr:nth-child(even) td {
      background: #fcfcfd;
    }
    .article-cta {
      background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
      border: 1px solid #bae6fd;
      border-radius: var(--radius-lg);
      padding: 32px;
      text-align: center;
      margin-top: 50px;
    }
    .breadcrumb-nav {
      padding: 14px 0 0;
      font-size: 0.88rem;
    }
    .breadcrumb-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      color: var(--text-dim);
    }
  </style>

  <!-- Structured Data: BlogPosting & FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
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
            "name": "Connect PostgreSQL Over SSH Tunnel",
            "item": "https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html"
          }
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html#article",
        "headline": "How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step 2026 Guide)",
        "description": "Learn how to securely tunnel remote PostgreSQL database traffic through an encrypted SSH tunnel using CLI commands, DBeaver, pgAdmin 4, and visual GUI tools.",
        "author": {
          "@type": "Organization",
          "name": "SSH Desktop Engineering Team",
          "url": "https://sshdesktop.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SSH Desktop",
          "url": "https://sshdesktop.com",
          "logo": "https://sshdesktop.com/assets/images/logo.svg"
        },
        "datePublished": "2026-11-16T12:00:00Z",
        "dateModified": "2026-11-16T12:00:00Z",
        "mainEntityOfPage": "https://sshdesktop.com/blog/how-to-connect-to-remote-postgres-over-ssh-tunnel.html",
        "image": "https://sshdesktop.com/assets/images/og-image.png"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why shouldn't I expose PostgreSQL port 5432 directly to the internet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exposing port 5432 directly invites thousands of automated brute-force password scanning bots, leaves your database vulnerable to unpatched zero-day exploits in PostgreSQL's network protocol, and violates SOC2, ISO 27001, and HIPAA compliance standards. Tunneling over SSH guarantees end-to-end cryptographic authentication before traffic ever touches PostgreSQL."
            }
          },
          {
            "@type": "Question",
            "name": "What is the CLI command to SSH tunnel PostgreSQL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run 'ssh -N -L 5432:localhost:5432 user@your-server-ip'. This tells SSH to bind local port 5432 on your laptop, encrypt all traffic, and forward it to localhost port 5432 on the remote server."
            }
          },
          {
            "@type": "Question",
            "name": "What if port 5432 is already in use by my local PostgreSQL instance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can bind any available local port such as 5433 by running 'ssh -N -L 5433:localhost:5432 user@your-server-ip'. In your database GUI (pgAdmin, DBeaver) or connection string, connect to localhost with port 5433."
            }
          },
          {
            "@type": "Question",
            "name": "How does an SSH tunnel work with an AWS RDS database in a private subnet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For private AWS RDS instances, connect through a bastion jump host in a public subnet: 'ssh -N -L 5432:your-rds-endpoint.amazonaws.com:5432 user@bastion-public-ip'. The bastion forwards packets through the internal AWS VPC directly to the private RDS cluster."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../" class="brand" aria-label="SSH Desktop Homepage">
        <img src="../assets/images/logo.svg" alt="SSH Desktop" width="180" height="38" decoding="async">
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="../apps.html">Apps</a></li>
          <li><a href="../features.html">Features</a></li>
          <li><a href="../docs.html">Docs</a></li>
          <li><a href="./" style="color: var(--accent-cyan); font-weight: 700;">Blog</a></li>
          <li><a href="../pricing.html">Pricing</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="../download.html" class="btn btn-primary btn-sm header-cta-btn">
          <span>Download Free</span>
        </a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- Breadcrumb -->
    <div class="container breadcrumb-nav">
      <ol class="breadcrumb-list">
        <li><a href="../">Home</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li><a href="./">Blog</a></li>
        <li style="color: var(--text-dim);">&bull;</li>
        <li aria-current="page">Connect PostgreSQL Over SSH Tunnel</li>
      </ol>
    </div>

    <article class="article-wrap">
      <header class="article-header">
        <span class="badge badge-sunset-pill" style="margin-bottom: 12px; display: inline-block;">Database Administration &amp; DevOps</span>
        <h1 class="article-title">How to Connect to Remote PostgreSQL Over SSH Tunnel (Step-by-Step 2026 Guide)</h1>
        <div class="article-meta">
          <span>Published: November 2026</span>
          <span>&bull;</span>
          <span>10 min read</span>
          <span>&bull;</span>
          <span>By SSH Desktop Engineering Team</span>
        </div>
      </header>

      <div class="article-content">
        <p>
          PostgreSQL is the world's most advanced open-source relational database. But when you deploy PostgreSQL on a production Linux server, DigitalOcean Droplet, AWS EC2, or Hetzner VPS, how do you safely connect your local development tools (pgAdmin, DBeaver, psql, VS Code) to manage it?
        </p>
        <p>
          The naive approach is binding PostgreSQL to <code>0.0.0.0</code> and opening port <code>5432</code> in your firewall. <strong>Never do this in production.</strong>
        </p>
        <p>
          In this guide, you will learn why exposing PostgreSQL to the public web is hazardous, how an SSH tunnel provides military-grade security without opening any firewall ports, and how to establish the tunnel using CLI commands, GUI database clients, and SSH Desktop's visual database studio.
        </p>

        <h2>Why You Must Never Expose PostgreSQL Port 5432 Publicly</h2>
        <p>
          Within seconds of opening port 5432 on a public IP address, automated port scanners (Shodan, Censys, botnets) will discover your server and flood it with dictionary attacks against the <code>postgres</code> superuser role.
        </p>
        <div class="callout-box warn">
          <strong>Security Risks of Public Database Ports:</strong>
          <ul>
            <li><strong>Credential Brute-Forcing:</strong> Relentless bot authentication requests exhaust database connections and spike CPU usage.</li>
            <li><strong>Zero-Day Protocol Vulnerabilities:</strong> Any unpatched flaw in PostgreSQL's network protocol (like CVE-2021-32027) can lead to arbitrary remote code execution.</li>
            <li><strong>Data Exfiltration over Unencrypted Connections:</strong> If SSL/TLS is improperly configured or unverified, database queries and sensitive passwords travel in plaintext across the internet.</li>
            <li><strong>Compliance Failures:</strong> Exposing database management ports violates PCI-DSS Requirement 1.3, HIPAA Security Rule &sect;164.312, and SOC 2 Type II trust criteria.</li>
          </ul>
        </div>

        <p>
          By keeping PostgreSQL bound strictly to <code>127.0.0.1</code> (localhost) on the server, the database cannot be reached from the outside world. All communication is routed through an encrypted SSH tunnel over port <code>22</code>.
        </p>

        <h2>How an SSH Tunnel for PostgreSQL Works</h2>
        <p>
          An SSH local port forwarding tunnel (<code>-L</code>) acts as a secure cryptographic pipe:
        </p>
        <ol>
          <li>Your SSH client opens a local listening port (e.g. <code>localhost:5432</code>) on your laptop.</li>
          <li>When your local database tool (pgAdmin, DBeaver, or code) connects to <code>localhost:5432</code>, the SSH client intercepts the TCP packets.</li>
          <li>The SSH client encrypts the packets and transports them over the existing SSH connection (port 22) to the remote server.</li>
          <li>The remote SSH daemon decrypts the packets and passes them locally to <code>127.0.0.1:5432</code> on the database server.</li>
          <li>Query results travel back through the exact same encrypted pipeline.</li>
        </ol>

        <h2>Method 1: Terminal CLI (OpenSSH Local Port Forwarding)</h2>
        <p>
          Open your terminal (macOS/Linux Terminal or Windows Terminal with PowerShell) and run:
        </p>

        <div class="code-block">
          <code>ssh -N -L 5432:localhost:5432 user@your-server-ip</code>
        </div>

        <h3>Flag Breakdown:</h3>
        <ul>
          <li><strong><code>-N</code>:</strong> Tells OpenSSH not to execute a remote shell. It instructs SSH to only forward ports, which conserves bandwidth and system resources.</li>
          <li><strong><code>-L [local_port]:[remote_target]:[remote_target_port]</code>:</strong> Specifies local port forwarding.
            <ul>
              <li><code>5432</code> (first number): The port opened on your local laptop.</li>
              <li><code>localhost</code>: The address the remote server will connect to (from the server's perspective).</li>
              <li><code>5432</code> (second number): The remote PostgreSQL port.</li>
            </ul>
          </li>
          <li><strong><code>user@your-server-ip</code>:</strong> Your remote server SSH user and IP address.</li>
        </ul>

        <h3>Handling Local Port Conflicts (Port 5432 Already in Use):</h3>
        <p>
          If you already have a local PostgreSQL server running for local development (e.g., via Docker or Homebrew), trying to bind port 5432 will trigger:
        </p>
        <div class="code-block">
          <code>bind [127.0.0.1]:5432: Address already in use<br>
channel_setup_fwd_listener_tcpip: cannot listen to port: 5432<br>
Could not request local forwarding.</code>
        </div>
        <p>
          The fix is simple: change the <strong>local</strong> port to <code>5433</code>:
        </p>
        <div class="code-block">
          <code>ssh -N -L 5433:localhost:5432 user@your-server-ip</code>
        </div>
        <p>
          Now point your database client to <code>localhost:5433</code> instead of <code>5432</code>.
        </p>

        <h3>Testing Connection with psql:</h3>
        <p>
          Open a second terminal window and test the tunnel:
        </p>
        <div class="code-block">
          <code>psql -h localhost -p 5432 -U postgres -d your_db_name</code>
        </div>

        <h2>Method 2: Configuring Database Clients Directly</h2>
        <p>
          If you prefer your database client to manage the SSH tunnel lifecycle automatically whenever you open the connection, configure it inside the tool:
        </p>

        <h3>1. DBeaver:</h3>
        <ol>
          <li>Click <strong>New Database Connection</strong> &rarr; Select <strong>PostgreSQL</strong>.</li>
          <li>In the <strong>Main</strong> tab:
            <ul>
              <li><strong>Host:</strong> <code>localhost</code> (or <code>127.0.0.1</code>)</li>
              <li><strong>Port:</strong> <code>5432</code></li>
              <li><strong>Database:</strong> your database name</li>
              <li><strong>Authentication:</strong> database username and password</li>
            </ul>
          </li>
          <li>Switch to the <strong>SSH</strong> tab and check <strong>Use SSH Tunnel</strong>:
            <ul>
              <li><strong>Host / IP:</strong> Your remote server's public IP address</li>
              <li><strong>Port:</strong> <code>22</code></li>
              <li><strong>User Name:</strong> Linux user (e.g., <code>ubuntu</code> or <code>root</code>)</li>
              <li><strong>Authentication Method:</strong> <em>Public Key</em></li>
              <li><strong>Private Key:</strong> Browse to <code>~/.ssh/id_ed25519</code></li>
            </ul>
          </li>
          <li>Click <strong>Test Connection</strong>. DBeaver will automatically establish the tunnel, authenticate, and list your tables!</li>
        </ol>

        <h3>2. pgAdmin 4:</h3>
        <ol>
          <li>Right-click <strong>Servers</strong> &rarr; <strong>Register</strong> &rarr; <strong>Server...</strong></li>
          <li>In the <strong>General</strong> tab, give your server a name (e.g. "Production DB").</li>
          <li>In the <strong>Connection</strong> tab:
            <ul>
              <li><strong>Host name / address:</strong> <code>localhost</code> (or internal IP)</li>
              <li><strong>Port:</strong> <code>5432</code></li>
              <li><strong>Maintenance database:</strong> <code>postgres</code> or your app DB</li>
              <li><strong>Username:</strong> database user</li>
            </ul>
          </li>
          <li>In the <strong>SSH Tunneling</strong> tab:
            <ul>
              <li>Toggle <strong>Use SSH tunneling</strong> to <em>Yes</em>.</li>
              <li><strong>Tunnel host:</strong> Your server's public IP</li>
              <li><strong>Tunnel port:</strong> <code>22</code></li>
              <li><strong>Username:</strong> your Linux SSH username</li>
              <li><strong>Authentication:</strong> <em>Identity file</em></li>
              <li><strong>Identity file:</strong> select your private key</li>
            </ul>
          </li>
          <li>Click <strong>Save</strong>.</li>
        </ol>

        <h2>Method 3: Private Subnet &amp; AWS RDS Bastion Jump Host</h2>
        <p>
          In enterprise cloud environments (AWS, GCP, Azure, DigitalOcean), managed database instances (such as AWS RDS PostgreSQL or Google Cloud SQL) do not have public IP addresses. They reside inside an isolated <strong>Private Subnet</strong> with internal DNS names like <code>mydb.c8x9abc.us-east-1.rds.amazonaws.com</code>.
        </p>
        <p>
          To access the database from your laptop, you route traffic through an EC2 instance acting as a <strong>Bastion / Jump Host</strong> residing in the VPC's Public Subnet:
        </p>

        <div class="code-block">
          <code># Local Tunnel through Bastion to AWS RDS:<br>
ssh -N -L 5432:mydb.c8x9abc.us-east-1.rds.amazonaws.com:5432 ubuntu@bastion-public-ip -i ~/.ssh/bastion_key.pem</code>
        </div>

        <p>
          Here, OpenSSH forwards packets from your laptop to the bastion host, which then routes them over the high-speed internal AWS VPC network directly to the RDS PostgreSQL instance. Your RDS database remains 100% invisible to the outside internet.
        </p>

        <h2>Method 4: Automating Persistent Tunnels via SSH Config</h2>
        <p>
          Instead of memorizing long flags every morning, add a persistent alias in your local <code>~/.ssh/config</code> file:
        </p>

        <div class="code-block">
          <code>Host db-tunnel<br>
    HostName 198.51.100.25<br>
    User ubuntu<br>
    IdentityFile ~/.ssh/id_ed25519<br>
    LocalForward 5432 127.0.0.1:5432<br>
    ServerAliveInterval 60<br>
    ServerAliveCountMax 3<br>
    ExitOnForwardFailure yes</code>
        </div>

        <p>
          Now whenever you need the tunnel, just run:
        </p>
        <div class="code-block">
          <code>ssh -N db-tunnel</code>
        </div>
        <p>
          The <code>ServerAliveInterval 60</code> directive sends keepalive pings every 60 seconds, preventing firewalls and NAT gateways from silently dropping idle database connections.
        </p>

        <h2>The Modern Visual Way: SSH Desktop Database Studio</h2>
        <p>
          Managing terminal windows that you accidentally close, dealing with dangling <code>ssh -N</code> background processes that lock port 5432, and juggling separate heavy Java-based SQL clients wastes time and memory.
        </p>
        <p>
          <a href="../">SSH Desktop</a> integrates a native <strong>Database Studio</strong> directly into your server management environment:
        </p>

        <ul>
          <li><strong>Zero-Configuration Tunnels:</strong> SSH Desktop automatically establishes and manages the cryptographic tunnel over the active SSH session.</li>
          <li><strong>Integrated Visual Query Editor:</strong> Run SQL queries, format syntax, view execution plans, and inspect database schema in the same lightweight window.</li>
          <li><strong>One-Click CSV / JSON Export:</strong> Export query results, table dumps, and server performance metrics instantly.</li>
          <li><strong>Automatic Reconnection:</strong> If your Wi-Fi drops or your laptop goes to sleep, SSH Desktop gracefully re-authenticates and re-establishes the tunnel with zero stale locks.</li>
        </ul>

        <h2>Comparison: CLI vs Database Client vs SSH Desktop</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>CLI (Terminal)</th>
                <th>DBeaver / pgAdmin</th>
                <th>SSH Desktop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Setup Complexity</strong></td>
                <td>High (flags, ports, backgrounding)</td>
                <td>Medium (multi-tab configuration)</td>
                <td>Zero (1-Click over active SSH)</td>
              </tr>
              <tr>
                <td><strong>RAM Footprint</strong></td>
                <td>~15 MB</td>
                <td>~600 MB - 1.2 GB (Java/Electron)</td>
                <td>~85 MB (Native)</td>
              </tr>
              <tr>
                <td><strong>Keepalive / Auto-Reconnect</strong></td>
                <td>Manual config required</td>
                <td>Inconsistent on sleep</td>
                <td>Automatic resilient reconnect</td>
              </tr>
              <tr>
                <td><strong>Bastion / Jump Host Support</strong></td>
                <td>Requires ProxyJump config</td>
                <td>Complex multi-hop tabs</td>
                <td>Visual Jump Host selector</td>
              </tr>
              <tr>
                <td><strong>Integrated File Transfer (SFTP)</strong></td>
                <td>Separate command (scp/sftp)</td>
                <td>None</td>
                <td>Dual-pane visual SFTP included</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="article-cta">
          <h3 style="margin-top: 0; font-size: 1.5rem; margin-bottom: 8px;">Connect to PostgreSQL the Modern Way</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.05rem;">
            Stop fighting with terminal port forwards and disconnected tunnels. Download SSH Desktop — the 100% free, all-in-one GUI SSH client.
          </p>
          <a href="../download.html" class="btn btn-primary btn-lg">
            Download SSH Desktop Free &rarr;
          </a>
        </div>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom-bar">
        <div class="footer-bottom-left">
          <p>&copy; 2026 SSH Desktop Inc. Licensed under Apache 2.0 / MIT.</p>
        </div>
        <div class="footer-bottom-right">
          <nav class="footer-legal-nav" aria-label="Footer Navigation">
            <a href="../">Home</a>
            <a href="../apps.html">Apps</a>
            <a href="../docs.html">Docs</a>
            <a href="../download.html">Download</a>
            <a href="./">Blog</a>
            <a href="../sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>

  <script src="../assets/js/core.min.js" defer></script>
</body>
</html>
`;

// Write the files
const file1Path = path.join(BLOG_DIR, 'how-to-fix-ssh-permission-denied-publickey-error.html');
const file2Path = path.join(BLOG_DIR, 'how-to-connect-to-remote-postgres-over-ssh-tunnel.html');

fs.writeFileSync(file1Path, article1Html.trim() + '\n', 'utf8');
console.log(`Created: ${file1Path} (${article1Html.length} bytes)`);

fs.writeFileSync(file2Path, article2Html.trim() + '\n', 'utf8');
console.log(`Created: ${file2Path} (${article2Html.length} bytes)`);
