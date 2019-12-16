const version = require('../version.js');
const sh = require('shelljs');

const imageName = 'sb-admin-angular';

sh.exec(`docker rm -f ${imageName}`);

sh.exec(`docker run -d --name ${imageName} -p 4400:80 ${imageName}:latest`);
