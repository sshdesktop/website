// scripts/chapter_data/index.js
const core = require('./core');
const desktop = require('./desktop');
const containers = require('./containers');
const sysadmin = require('./sysadmin');
const security = require('./security');
const automation = require('./automation');
const guides = require('./guides');

module.exports = {
  ...core,
  ...desktop,
  ...containers,
  ...sysadmin,
  ...security,
  ...automation,
  ...guides
};
