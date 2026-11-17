const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const files = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('-alternative.html'));

console.log(`Found ${files.length} alternative pages to link to the Alternatives Hub.`);

let count = 0;
for (const file of files) {
  const filePath = path.join(ROOT_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Update HTML Breadcrumb
  const breadcrumbRegex = /(<ol class="breadcrumb-list">\s*<li><a href="\/">Home<\/a><\/li>\s*<li class="breadcrumb-separator">\/<\/li>)\s*(<li aria-current="page">)/;
  if (breadcrumbRegex.test(content)) {
    content = content.replace(breadcrumbRegex, '$1\n        <li><a href="alternatives.html">Alternatives</a></li>\n        <li class="breadcrumb-separator">/</li>\n        $2');
    changed = true;
  }

  // 2. Update BreadcrumbList in Schema.org JSON-LD
  // Replace 2-tier breadcrumb with 3-tier
  const schemaBreadcrumbRegex = /("@type":\s*"BreadcrumbList"[\s\S]*?"itemListElement":\s*\[[\s\S]*?\{\s*"@type":\s*"ListItem",\s*"position":\s*1,\s*"name":\s*"Home",\s*"item":\s*"https:\/\/sshdesktop\.com\/"\s*\},)\s*\{\s*"@type":\s*"ListItem",\s*"position":\s*2,\s*"name":\s*"([^"]+)",\s*"item":\s*"([^"]+)"\s*\}/;
  if (schemaBreadcrumbRegex.test(content)) {
    content = content.replace(schemaBreadcrumbRegex, (match, prefix, pageName, pageUrl) => {
      return `${prefix}\n          {\n            "@type": "ListItem",\n            "position": 2,\n            "name": "Alternatives",\n            "item": "https://sshdesktop.com/alternatives/"\n          },\n          {\n            "@type": "ListItem",\n            "position": 3,\n            "name": "${pageName}",\n            "item": "${pageUrl}"\n          }`;
    });
    changed = true;
  }

  // 3. Add Hub back-link above </main> if not already present
  if (!content.includes('alternatives.html') && content.includes('</main>')) {
    const hubBanner = `    <!-- Alternatives Hub Contextual Link -->\n    <div class="container" style="margin: 40px auto 20px; text-align: center;">\n      <a href="alternatives.html" class="btn btn-secondary" style="font-size: 0.9rem; padding: 10px 20px;">\n        &larr; Explore All 22 SSH Client &amp; Server GUI Alternatives\n      </a>\n    </div>\n  </main>`;
    content = content.replace('</main>', hubBanner);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
}

console.log(`✅ Successfully linked ${count} comparison pages to the Alternatives Hub!`);
