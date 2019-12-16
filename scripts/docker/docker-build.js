const version = require('../version.js');
const sh = require('shelljs');

const imageName = 'sb-admin-angular';

sh.exec(`docker build -t ${imageName}:latest -t ${imageName}:${version} .`);

