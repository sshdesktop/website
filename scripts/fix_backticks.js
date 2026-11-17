const fs = require('fs');
let code = fs.readFileSync('scripts/build_all_chapters.js', 'utf8');

function replaceAll(str, find, rep) {
  return str.split(find).join(rep);
}

code = replaceAll(code, '`sshd`', '<code>sshd</code>');
code = replaceAll(code, '`nginx-http-auth`', '<code>nginx-http-auth</code>');
code = replaceAll(code, '`ProxyJump bastion.example.com`', '<code>ProxyJump bastion.example.com</code>');
code = replaceAll(code, '`nom`', '<code>nom</code>');
code = replaceAll(code, '`regex`', '<code>regex</code>');
code = replaceAll(code, '`ColumnsView.tsx`', '<code>ColumnsView.tsx</code>');
code = replaceAll(code, '`chmod 755/644`', '<code>chmod 755/644</code>');
code = replaceAll(code, '`chown user:group`', '<code>chown user:group</code>');
code = replaceAll(code, '`fail2ban-client`', '<code>fail2ban-client</code>');
code = replaceAll(code, '`ncdu`', '<code>ncdu</code>');
code = replaceAll(code, '`du`', '<code>du</code>');
code = replaceAll(code, '`w`', '<code>w</code>');
code = replaceAll(code, '`who`', '<code>who</code>');
code = replaceAll(code, '`visudo -cf`', '<code>visudo -cf</code>');
code = replaceAll(code, '`chmod 700 ~/.ssh && chmod 600 authorized_keys`', '<code>chmod 700 ~/.ssh && chmod 600 authorized_keys</code>');
code = replaceAll(code, '`ss`', '<code>ss</code>');
code = replaceAll(code, '`lsof`', '<code>lsof</code>');
code = replaceAll(code, '`certbot renew`', '<code>certbot renew</code>');
code = replaceAll(code, '`SIGTERM`', '<code>SIGTERM</code>');
code = replaceAll(code, '`SIGKILL`', '<code>SIGKILL</code>');
code = replaceAll(code, '`SIGHUP`', '<code>SIGHUP</code>');
code = replaceAll(code, '`SIGSTOP/SIGCONT`', '<code>SIGSTOP/SIGCONT</code>');
code = replaceAll(code, '`- [ ]`', '<code>- [ ]</code>');
code = replaceAll(code, '`PATH`', '<code>PATH</code>');
code = replaceAll(code, '`LD_LIBRARY_PATH`', '<code>LD_LIBRARY_PATH</code>');
code = replaceAll(code, '`NODE_PATH`', '<code>NODE_PATH</code>');
code = replaceAll(code, '`~/.bashrc`', '<code>~/.bashrc</code>');
code = replaceAll(code, '`/etc/environment`', '<code>/etc/environment</code>');
code = replaceAll(code, '`chmod 600`', '<code>chmod 600</code>');
code = replaceAll(code, '`autoremove`', '<code>autoremove</code>');
code = replaceAll(code, '`lsblk`', '<code>lsblk</code>');
code = replaceAll(code, '`crontab -l`', '<code>crontab -l</code>');
code = replaceAll(code, '`/etc/cron*`', '<code>/etc/cron*</code>');
code = replaceAll(code, '`ufw limit 22/tcp`', '<code>ufw limit 22/tcp</code>');
code = replaceAll(code, '`Upgrade`', '<code>Upgrade</code>');
code = replaceAll(code, '`Connection`', '<code>Connection</code>');
code = replaceAll(code, '`nginx -t`', '<code>nginx -t</code>');
code = replaceAll(code, '`http://localhost:PORT`', '<code>http://localhost:PORT</code>');
code = replaceAll(code, '`{{PACKAGE_NAME}}`', '<code>{{PACKAGE_NAME}}</code>');

fs.writeFileSync('scripts/build_all_chapters.js', code, 'utf8');
console.log('Fixed backticks successfully!');
