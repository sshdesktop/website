const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
      getAllHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.min.html') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
let updatedPictures = 0;
let updatedMeta = 0;

for (const filePath of htmlFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Update Open Graph and Twitter images from .webp to .jpg
  const metaRegex = /(<(?:meta property="og:image"|meta name="twitter:image")[^>]*content="https:\/\/sshdesktop\.com\/assets\/images\/screenshots\/[^"]+?)\.webp(")/g;
  if (metaRegex.test(content)) {
    content = content.replace(metaRegex, '$1.jpg$2');
    changed = true;
    updatedMeta++;
  }

  // 2. Update <picture> blocks
  // Case A: Index slider picture
  if (filePath.endsWith('index.html')) {
    const sliderRegex = /<picture id="sliderMainPicture">[\s\S]*?<source id="sliderMainWebp" srcset="([^"]+?)\.webp" type="image\/webp">[\s\S]*?<img src="[^"]+?"([^>]*)>[\s\S]*?<\/picture>/;
    if (sliderRegex.test(content)) {
      content = content.replace(sliderRegex, (match, webpBase, imgAttrs) => {
        return `<picture id="sliderMainPicture">\n              <source id="sliderMainWebp" srcset="${webpBase}.webp" type="image/webp">\n              <source id="sliderMainJpg" srcset="${webpBase}.jpg" type="image/jpeg">\n              <img src="${webpBase}.jpg"${imgAttrs}>\n            </picture>`;
      });
      changed = true;
      updatedPictures++;
    }
  }

  // Case B: General <picture> blocks with screenshot .webp
  const picRegex = /<picture([^>]*)>\s*<source\s+srcset="([^"]+?)\.webp"\s+type="image\/webp">\s*<img\s+src="[^"]+?\.webp"([^>]*)>\s*<\/picture>/g;
  if (picRegex.test(content)) {
    content = content.replace(picRegex, (match, picAttrs, basePath, imgAttrs) => {
      updatedPictures++;
      return `<picture${picAttrs}>\n            <source srcset="${basePath}.webp" type="image/webp">\n            <source srcset="${basePath}.jpg" type="image/jpeg">\n            <img src="${basePath}.jpg"${imgAttrs}>\n          </picture>`;
    });
    changed = true;
  }

  // Case C: Docs or alternative nested indentation <picture>
  const docPicRegex = /<picture>\s*<source\s+srcset="([^"]+?)\.webp"\s+type="image\/webp">\s*<img\s+src="[^"]+?\.webp"([^>]*)>\s*<\/picture>/g;
  if (docPicRegex.test(content)) {
    content = content.replace(docPicRegex, (match, basePath, imgAttrs) => {
      updatedPictures++;
      return `<picture>\n                  <source srcset="${basePath}.webp" type="image/webp">\n                  <source srcset="${basePath}.jpg" type="image/jpeg">\n                  <img src="${basePath}.jpg"${imgAttrs}>\n                </picture>`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log(`✅ Updated picture elements across HTML files (modified ${updatedPictures} picture blocks)`);
console.log(`✅ Updated Open Graph / Twitter image tags across ${updatedMeta} files`);
