'use strict';

const _ = require('lodash');
const chokidar = require('chokidar');
const renderPug = require('./render-pug');

const watcher = chokidar.watch('src', {
    persistent: true,
});

process.title = 'pug-watch';

let allFiles = {};

watcher.on('add', filePath => _processFile(filePath, 'add'));
watcher.on('change', filePath => _processFile(filePath, 'change'));

function _processFile(filePath, watchEvent) {
    
    if (filePath.match(/\.pug$/)) {
        return _handlePug(filePath, watchEvent);
    }

}

function _handlePug(filePath, watchEvent) {

    if (watchEvent === 'change') {
        if (filePath.match(/pug_include/)) {
            return _renderAllPug();
        }
        return renderPug(filePath);
    }
    if (!filePath.match(/pug_include/)) {
        allFiles[filePath] = true;
        return renderPug(filePath);
    }
}

function _renderAllPug() {
    console.log('### INFO: Rendering All');
    _.each(allFiles, (value, filePath) => {
        renderPug(filePath);
    });
}
