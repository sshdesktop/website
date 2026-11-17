const fs = require('fs');
const path = require('path');

const compPath = path.join(__dirname, 'build_comprehensive_docs.js');
let code = fs.readFileSync(compPath, 'utf8');

// Cut the new chapters block that was wrongly inserted inside categories
const startTag = "  {\n    slug: 'installation.html',";
const endTag = "    summary: 'Unified cloud management guide: organize Droplets and Cloud VPS instances across multiple cloud providers with zero agents and centralized key management.'\n  },";

const startIdx = code.indexOf(startTag);
const endIdx = code.indexOf(endTag) + endTag.length;

if (startIdx > -1 && endIdx > -1) {
  const newChaptersBlock = code.slice(startIdx, endIdx);
  // Remove from current position
  code = code.slice(0, startIdx) + code.slice(endIdx);

  // Clean up categories
  const catFix = `// Group categories
const categories = [
  { name: 'Overview & Architecture', slug: 'overview' },
  { name: 'Desktop & Terminal', slug: 'desktop' },
  { name: 'Containers & Databases', slug: 'containers' },
  { name: 'System Administration', slug: 'sysadmin' },
  { name: 'Security & Networking', slug: 'security' },
  { name: 'Automation & Gateways', slug: 'automation' }
];`;

  // Insert before the closing of chapters
  const chapCloseIdx = code.indexOf('// Group categories');
  const insertBeforeChapClose = code.lastIndexOf('};', chapCloseIdx);
  
  // Find where chapters array ends
  const chapArrayEnd = code.indexOf('];\n\n// Group categories');
  code = code.slice(0, chapArrayEnd) + ',\n' + newChaptersBlock + '\n' + code.slice(chapArrayEnd);
  
  fs.writeFileSync(compPath, code, 'utf8');
  console.log('Fixed build_comprehensive_docs.js syntax and array ordering!');
} else {
  console.error('Could not locate block:', startIdx, endIdx);
}
