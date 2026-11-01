#!/usr/bin/env bash
# ==============================================================================
# SSH Desktop - Official Linux CLI & Server Installer
# Repository: https://github.com/sshdesktop/sshdesktop
# Website:    https://sshdesktop.com
# Version:    2.4.1
# ==============================================================================

set -e

VERSION="2.4.1"
BASE_URL="https://github.com/sshdesktop/sshdesktop/releases/download/v${VERSION}"

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo -e "${CYAN}${BOLD}"
echo "  ___ ___ _  _   ___           _   _             "
echo " / __/ __| || | |   \ ___  ___| |_| |_ ___ _ __  "
echo " \__ \__ \ __ | | |) / -_)(_-<| / /  _/ _ \ '_ \ "
echo " |___/___/_||_| |___/\___|/__/|_\_\\__\___/ .__/ "
echo "                                          |_|    "
echo -e "${NC}"
echo -e "${BOLD}SSH Desktop Server Installer v${VERSION}${NC}"
echo -e "${BLUE}https://sshdesktop.com${NC}"
echo "--------------------------------------------------------"

# Check root permissions
if [ "$(id -u)" -ne 0 ]; then
    echo -e "${YELLOW}[!] This installer requires root privileges to install packages and configure systemd.${NC}"
    echo -e "${YELLOW}[!] Re-running with sudo...${NC}"
    exec sudo bash "$0" "$@"
fi

# Detect CPU Architecture
ARCH="$(uname -m)"
case "${ARCH}" in
    x86_64|amd64)
        CLI_ARCH="x64"
        DEB_ARCH="x64"
        RPM_ARCH="x64"
        ;;
    aarch64|arm64)
        CLI_ARCH="arm64"
        DEB_ARCH="arm64"
        RPM_ARCH="arm64"
        ;;
    *)
        echo -e "${RED}[ERROR] Unsupported CPU architecture: ${ARCH}${NC}"
        echo "Supported architectures: x86_64, aarch64 (ARM64)"
        exit 1
        ;;
esac

echo -e "${GREEN}[✓] Detected architecture: ${ARCH} (${CLI_ARCH})${NC}"

# Detect package manager
PKG_MANAGER=""
if command -v apt-get >/dev/null 2>&1; then
    PKG_MANAGER="deb"
elif command -v dpkg >/dev/null 2>&1; then
    PKG_MANAGER="deb"
elif command -v dnf >/dev/null 2>&1; then
    PKG_MANAGER="rpm"
elif command -v yum >/dev/null 2>&1; then
    PKG_MANAGER="rpm"
elif command -v zypper >/dev/null 2>&1; then
    PKG_MANAGER="rpm"
elif command -v rpm >/dev/null 2>&1; then
    PKG_MANAGER="rpm"
else
    PKG_MANAGER="standalone"
fi

TEMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TEMP_DIR}"' EXIT

cd "${TEMP_DIR}"

# Download and install based on package manager
if [ "${PKG_MANAGER}" = "deb" ]; then
    PACKAGE_NAME="sshdesktop-server-linux-${DEB_ARCH}.deb"
    DOWNLOAD_URL="${BASE_URL}/${PACKAGE_NAME}"
    echo -e "${CYAN}[*] Downloading Debian package: ${PACKAGE_NAME}...${NC}"
    
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL -o "${PACKAGE_NAME}" "${DOWNLOAD_URL}"
    elif command -v wget >/dev/null 2>&1; then
        wget -q -O "${PACKAGE_NAME}" "${DOWNLOAD_URL}"
    else
        echo -e "${RED}[ERROR] Neither curl nor wget was found. Please install curl or wget.${NC}"
        exit 1
    fi
    
    echo -e "${CYAN}[*] Installing ${PACKAGE_NAME} via dpkg/apt...${NC}"
    if command -v apt-get >/dev/null 2>&1; then
        apt-get install -y ./"${PACKAGE_NAME}" || dpkg -i "${PACKAGE_NAME}"
    else
        dpkg -i "${PACKAGE_NAME}"
    fi

elif [ "${PKG_MANAGER}" = "rpm" ]; then
    PACKAGE_NAME="sshdesktop-server-linux-${RPM_ARCH}.rpm"
    DOWNLOAD_URL="${BASE_URL}/${PACKAGE_NAME}"
    echo -e "${CYAN}[*] Downloading RPM package: ${PACKAGE_NAME}...${NC}"
    
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL -o "${PACKAGE_NAME}" "${DOWNLOAD_URL}"
    elif command -v wget >/dev/null 2>&1; then
        wget -q -O "${PACKAGE_NAME}" "${DOWNLOAD_URL}"
    else
        echo -e "${RED}[ERROR] Neither curl nor wget was found. Please install curl or wget.${NC}"
        exit 1
    fi
    
    echo -e "${CYAN}[*] Installing ${PACKAGE_NAME} via rpm...${NC}"
    if command -v dnf >/dev/null 2>&1; then
        dnf install -y ./"${PACKAGE_NAME}" || rpm -Uvh "${PACKAGE_NAME}"
    elif command -v yum >/dev/null 2>&1; then
        yum install -y ./"${PACKAGE_NAME}" || rpm -Uvh "${PACKAGE_NAME}"
    else
        rpm -Uvh "${PACKAGE_NAME}"
    fi

else
    # Fallback: install binary directly to /usr/local/bin
    echo -e "${YELLOW}[!] No dpkg or rpm package manager detected. Installing standalone binary...${NC}"
    PACKAGE_NAME="sshdesktop-server-linux-${CLI_ARCH}.deb"
    DOWNLOAD_URL="${BASE_URL}/${PACKAGE_NAME}"
    curl -fsSL -o "${PACKAGE_NAME}" "${DOWNLOAD_URL}" || wget -q -O "${PACKAGE_NAME}" "${DOWNLOAD_URL}"
    ar x "${PACKAGE_NAME}" data.tar.xz || ar x "${PACKAGE_NAME}" data.tar.gz || true
    if [ -f data.tar.xz ]; then
        tar -xf data.tar.xz -C /
    elif [ -f data.tar.gz ]; then
        tar -xf data.tar.gz -C /
    fi
fi

# Configure Systemd Service
echo -e "${CYAN}[*] Configuring and starting sshdesktop systemd service...${NC}"
if command -v systemctl >/dev/null 2>&1; then
    # Ensure systemd service file exists if not already installed by deb/rpm
    if [ ! -f /etc/systemd/system/sshdesktop.service ] && [ ! -f /lib/systemd/system/sshdesktop.service ] && [ ! -f /usr/lib/systemd/system/sshdesktop.service ]; then
        cat << 'EOF' > /etc/systemd/system/sshdesktop.service
[Unit]
Description=SSH Desktop Server Daemon
After=network.target ssh.service sshd.service
Wants=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/sshdesktop --server
Restart=always
RestartSec=5s
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
        systemctl daemon-reload
    fi

    # Enable and start service
    systemctl daemon-reload
    systemctl enable sshdesktop
    systemctl start sshdesktop
    echo -e "${GREEN}[✓] systemctl enable sshdesktop${NC}"
    echo -e "${GREEN}[✓] systemctl start sshdesktop${NC}"
    systemctl status sshdesktop --no-pager || true
else
    echo -e "${YELLOW}[!] Systemd not detected. Please start the sshdesktop daemon manually:${NC}"
    echo "    sshdesktop --server &"
fi

echo ""
echo "--------------------------------------------------------"
echo -e "${GREEN}${BOLD}✓ SSH Desktop Server successfully installed and active!${NC}"
echo -e "Version:     ${BOLD}v${VERSION}${NC}"
echo -e "Service:     ${BOLD}systemctl status sshdesktop${NC}"
echo -e "Web Console: ${CYAN}https://sshdesktop.com/cloud-desktop.html${NC}"
echo "--------------------------------------------------------"
exit 0
