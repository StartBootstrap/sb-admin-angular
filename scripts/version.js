'use strict';

const fs = require('fs');
const path = require('path');
const pjPath = path.resolve(path.dirname(__filename), '../package.json');
const versionPath = path.resolve(path.dirname(__filename), '../version');

const pj = require(pjPath);

console.log(`### INFO: Current Version: ${pj.version}`);
fs.writeFileSync(versionPath, pj.version);

module.exports = pj.version;